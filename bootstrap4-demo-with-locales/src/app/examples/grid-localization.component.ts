import { Component, OnInit, } from '@angular/core';
import {
  AngularGridInstance,
  Column,
  DelimiterType,
  FieldType,
  FileType,
  Filters,
  Formatter,
  Formatters,
  GridOption,
  GridStateChange,
  SlickGrid,
} from 'angular-slickgrid';
import { localeFrench } from '../locales/fr';

const taskFormatter: Formatter = (row: number, cell: number, value: any, columnDef: any, dataContext: any, grid: SlickGrid) => {
  return value !== undefined ? `Titre ${value}` : '';
};
const exportBooleanFormatter: Formatter = (row: number, cell: number, value: any, columnDef: any, dataContext: any, grid: SlickGrid) => {
  return value ? 'Vrai' : 'Faux';
};

@Component({
  templateUrl: './grid-localization.component.html'
})
export class GridLocalizationComponent implements OnInit {
  title = 'Example 12: Localization with Locales - French Locale displayed';
  subTitle = `This Examples uses French Locales but you could use your own custom locales
    <ul>
      <li>Defining your own Custom Locales must include all necessary text, see the default (<a href="https://github.com/ghiscoding/angular-slickgrid-demos/blob/master/bootstrap4-demo-with-locales/src/app/locales/en.ts" target="_blank">English Custom Locales</a>)</li>
      <li>Support Custom Locales (through the "locales" grid option), following these steps (<a href="https://github.com/ghiscoding/Angular-Slickgrid/wiki/Localization-with-Custom-Locales" target="_blank">Wiki docs</a>)
      <li>For more info about "Download to File", read the <a href="https://github.com/ghiscoding/Angular-Slickgrid/wiki/Export-to-File" target="_blank">Wiki page</a></li>
    </ul>
  `;

  angularGrid: AngularGridInstance;
  columnDefinitions: Column[];
  gridOptions: GridOption;
  dataset: any[];
  selectedLanguage = `localeFrench.ts`;
  duplicateTitleHeaderCount = 1;
  gridObj: any;

  constructor() { }

  ngOnInit(): void {
    this.columnDefinitions = [
      { id: 'title', name: 'Titre', field: 'id', sortable: true, minWidth: 100, filterable: true, formatter: taskFormatter, params: { useFormatterOuputToFilter: true } },
      { id: 'description', name: 'Description', field: 'description', filterable: true, sortable: true, minWidth: 80 },
      {
        id: 'duration', name: 'Durée (jours)', field: 'duration', sortable: true,
        formatter: Formatters.percentCompleteBar,
        minWidth: 100,
        filterable: true,
        filter: { model: Filters.compoundSlider, operator: '>=' }
      },
      {
        id: 'start', name: 'Start', field: 'start', nameKey: 'START', minWidth: 100,
        formatter: Formatters.dateIso, outputType: FieldType.dateIso, type: FieldType.date, exportWithFormatter: true,
        filterable: true, filter: { model: Filters.compoundDate }
      },
      { id: 'finish', name: 'Fin', field: 'finish', formatter: Formatters.dateIso, outputType: FieldType.dateIso, type: FieldType.date, minWidth: 100, filterable: true, filter: { model: Filters.compoundDate } },
      {
        id: 'completedBool', name: 'Complétée', field: 'completedBool', minWidth: 100,
        sortable: true,
        formatter: Formatters.checkmark,
        exportCustomFormatter: exportBooleanFormatter,
        filterable: true,
        filter: {
          collection: [{ value: true, label: 'Vrai' }, { value: false, label: 'Faux' }],
          model: Filters.multipleSelect,
          filterOptions: {
            autoDropWidth: true
          }
        }
      }
    ];

    this.gridOptions = {
      autoResize: {
        containerId: 'demo-container',
        sidePadding: 10
      },

      // use a Single Custom Locales set
      locale: 'fr', // this helps certain elements to know which locale to use, for example the Date Filter/Editor
      locales: localeFrench,
      enableAutoResize: true,
      enableExcelCopyBuffer: true,
      enableExcelExport: true,
      enableExport: true,
      enableFiltering: true,
      checkboxSelector: {
        // you can toggle these 2 properties to show the "select all" checkbox in different location
        hideInFilterHeaderRow: false,
        hideInColumnTitleRow: true
      },
      enableCheckboxSelector: true,
      enableRowSelection: true,
      showCustomFooter: true, // display some metrics in the bottom custom footer
      customFooterOptions: {
        // optionally display some text on the left footer container
        // leftFooterText: 'custom text shown on left container',
        metricTexts: {
          // default text displayed in the metrics section on the right
          // all texts optionally support translation keys,
          // if you wish to use that feature then use the text properties with the 'Key' suffix (e.g: itemsKey, ofKey, lastUpdateKey)
          // example "items" for a plain string OR "itemsKey" to use a translation key
          itemsKey: 'ITEMS',
          ofKey: 'OF',
          lastUpdateKey: 'LAST_UPDATE',
        },
        dateFormat: 'yyyy-MM-dd hh:mm aaaaa\'m\'',
        hideTotalItemCount: false,
        hideLastUpdateTimestamp: false,
      },
      excelExportOptions: {
        // optionally pass a custom header to the Excel Sheet
        // a lot of the info can be found on Web Archive of Excel-Builder
        // http://web.archive.org/web/20160907052007/http://excelbuilderjs.com/cookbook/fontsAndColors.html
        customExcelHeader: (workbook, sheet) => {
          const stylesheet = workbook.getStyleSheet();
          const aFormatDefn = {
            'font': { 'size': 12, 'fontName': 'Calibri', 'bold': true, color: 'FF0000FF' }, // every color starts with FF, then regular HTML color
            'alignment': { 'wrapText': true }
          };
          const formatterId = stylesheet.createFormat(aFormatDefn);
          sheet.setRowInstructions(0, { height: 30 }); // change height of row 0

          // excel cells start with A1 which is upper left corner
          sheet.mergeCells('B1', 'D1');
          const cols = [];
          // push empty data on A1
          cols.push({ value: '' });
          // push data in B1 cell with metadata formatter
          cols.push({ value: 'Titre qui est suffisament long pour être coupé', metadata: { style: formatterId.id } });
          sheet.data.push(cols);
        }
      },
      exportOptions: {
        // set at the grid option level, meaning all column will evaluate the Formatter (when it has a Formatter defined)
        exportWithFormatter: true,
        sanitizeDataExport: true
      },
      gridMenu: {
        hideExportCsvCommand: false,           // false by default, so it's optional
        hideExportTextDelimitedCommand: false  // true by default, so if you want it, you will need to disable the flag
      }
    };

    this.loadData(1000);
  }

  // mock a dataset
  loadData(count: number) {
    this.dataset = [];
    for (let i = 0; i < count; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 30);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));

      this.dataset[i] = {
        id: i,
        description: (i % 5) ? 'desc ' + i : '🚀🦄 español', // also add some random to test NULL field
        duration: Math.round(Math.random() * 100) + '',
        start: new Date(randomYear, randomMonth, randomDay),
        finish: new Date(randomYear, (randomMonth + 1), randomDay),
        completedBool: (i % 5 === 0) ? true : false
      };
    }
  }

  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;
    this.gridObj = angularGrid.slickGrid;
  }

  dynamicallyAddTitleHeader() {
    // you can dynamically add your column to your column definitions
    // and then use the spread operator [...cols] OR slice to force Angular to review the changes
    const newCol = { id: `title${this.duplicateTitleHeaderCount++}`, field: 'id', nameKey: 'TITLE', formatter: taskFormatter, sortable: true, minWidth: 100, filterable: true, params: { useFormatterOuputToFilter: true } };
    this.columnDefinitions.push(newCol);
    this.columnDefinitions = this.columnDefinitions.slice(); // or use spread operator [...cols]

    // NOTE if you use an Extensions (Checkbox Selector, Row Detail, ...) that modifies the column definitions in any way
    // you MUST use "getAllColumnDefinitions()" from the GridService, using this will be ALL columns including the 1st column that is created internally
    // for example if you use the Checkbox Selector (row selection), you MUST use the code below
    /*
    const allColumns = this.angularGrid.gridService.getAllColumnDefinitions();
    allColumns.push(newCol);
    this.columnDefinitions = [...allColumns]; // (or use slice) reassign to column definitions for Angular to do dirty checking
    */
  }

  exportToExcel() {
    this.angularGrid.excelExportService.exportToExcel({
      filename: 'Export',
      format: FileType.xlsx
    });
  }

  exportToFile(type = 'csv') {
    this.angularGrid.exportService.exportToFile({
      delimiter: (type === 'csv') ? DelimiterType.comma : DelimiterType.tab,
      filename: 'myExport',
      format: (type === 'csv') ? FileType.csv : FileType.txt
    });
  }

  /** Dispatched event of a Grid State Changed event */
  gridStateChanged(gridStateChanges: GridStateChange) {
    console.log('Grid State changed:: ', gridStateChanges);
    console.log('Grid State changed:: ', gridStateChanges.change);
  }
}
