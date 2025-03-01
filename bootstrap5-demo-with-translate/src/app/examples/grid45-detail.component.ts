import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularGridInstance, Column, GridOption, GridState } from 'angular-slickgrid';

export interface Distributor {
  id: number;
  companyId: number;
  companyName: string;
  city: string;
  streetAddress: string;
  zipCode: string;
  country: string;
  orderData: OrderData[];
  isUsingInnerGridStatePresets: boolean;
}

export interface OrderData {
  orderId: string;
  shipCity: string;
  freight: number;
  shipName: string;
}

@Component({
  styles: ['.detail-label { display: inline-flex; align-items: center; gap: 4px; padding: 4px; }', 'label { font-weight: 600; }'],
  templateUrl: './grid45-detail.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Grid45DetailComponent implements OnInit {
  model!: Distributor;
  innerColDefs: Column[] = [];
  innerGridOptions!: GridOption;
  angularGrid!: AngularGridInstance;
  innerDataset: any[] = [];
  innerGridId = '';
  innerGridClass = '';
  showGrid = false;

  ngOnInit(): void {
    this.innerGridId = `innergrid-${this.model.id}`;
    this.innerGridClass = `row-detail-${this.model.id}`;
    // define the grid options & columns and then create the grid itself
    this.defineGrid();

    // mock some data (different in each dataset)
    this.innerDataset = [...this.model.orderData];
    this.showGrid = true;
  }

  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;
  }

  defineGrid() {
    // when Grid State found in Session Storage, reapply inner Grid State then reapply it as preset
    let gridState: GridState | undefined;
    if (this.model.isUsingInnerGridStatePresets) {
      const gridStateStr = sessionStorage.getItem(`gridstate_${this.innerGridClass}`);
      if (gridStateStr) {
        gridState = JSON.parse(gridStateStr);
      }
    }

    this.innerColDefs = [
      { id: 'orderId', field: 'orderId', name: 'Order ID', filterable: true, sortable: true },
      { id: 'shipCity', field: 'shipCity', name: 'Ship City', filterable: true, sortable: true },
      { id: 'freight', field: 'freight', name: 'Freight', filterable: true, sortable: true, type: 'number' },
      { id: 'shipName', field: 'shipName', name: 'Ship Name', filterable: true, sortable: true },
    ];

    this.innerGridOptions = {
      autoResize: {
        container: `.${this.innerGridClass}`,
        rightPadding: 30,
        minHeight: 200,
      },
      enableFiltering: true,
      enableSorting: true,
      rowHeight: 33,
      enableCellNavigation: true,
      datasetIdPropertyName: 'orderId',
      presets: gridState,
    };
  }

  handleBeforeGridDestroy() {
    if (this.model.isUsingInnerGridStatePresets) {
      const gridState = this.angularGrid.gridStateService.getCurrentGridState();
      sessionStorage.setItem(`gridstate_${this.innerGridClass}`, JSON.stringify(gridState));
    }
  }
}
