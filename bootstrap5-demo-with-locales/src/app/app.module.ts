import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';
import DOMPurify from 'dompurify';

import { AppComponent } from './app.component';
import { AppRoutingRoutingModule } from './app-routing.module';
import { CustomTitleFormatterComponent } from './examples/custom-titleFormatter.component';
import { CustomButtonFormatterComponent } from './examples/custom-buttonFormatter.component';
import { CustomFooterComponent, GridHeaderFooterComponent } from './examples/grid-header-footer.component';
import { EditorNgSelectComponent } from './examples/editor-ng-select.component';
import { FilterNgSelectComponent } from './examples/filter-ng-select.component';
import { GridAddItemComponent } from './examples/grid-additem.component';
import { GridAngularComponent } from './examples/grid-angular.component';
import { GridAutoHeightComponent } from './examples/grid-autoheight.component';
import { GridBaseRowEditingComponent } from './examples/grid-base-row-editing.component';
import { GridBasicComponent } from './examples/grid-basic.component';
import { GridClientSideComponent } from './examples/grid-clientside.component';
import { GridColspanComponent } from './examples/grid-colspan.component';
import { GridContextMenuComponent } from './examples/grid-contextmenu.component';
import { GridCompositeEditorComponent } from './examples/grid-composite-editor.component';
import { GridCustomTooltipComponent } from './examples/grid-custom-tooltip.component';
import { GridDraggableGroupingComponent } from './examples/grid-draggrouping.component';
import { GridEditorComponent } from './examples/grid-editor.component';
import { GridExcelFormulaComponent } from './examples/grid-excel-formula.component';
import { GridFooterTotalsComponent } from './examples/grid-footer-totals.component';
import { GridFormatterComponent } from './examples/grid-formatter.component';
import { GridFrozenComponent } from './examples/grid-frozen.component';
import { GridGraphqlComponent } from './examples/grid-graphql.component';
import { GridGraphqlWithoutPaginationComponent } from './examples/grid-graphql-nopage.component';
import { GridGroupingComponent } from './examples/grid-grouping.component';
import { GridHeaderButtonComponent } from './examples/grid-headerbutton.component';
import { GridHeaderMenuComponent } from './examples/grid-headermenu.component';
import { GridInfiniteGraphqlComponent } from './examples/grid-infinite-graphql.component';
import { GridInfiniteJsonComponent } from './examples/grid-infinite-json.component';
import { GridInfiniteOdataComponent } from './examples/grid-infinite-odata.component';
import { GridLocalizationComponent } from './examples/grid-localization.component';
import { GridMenuComponent } from './examples/grid-menu.component';
import { GridOdataComponent } from './examples/grid-odata.component';
import { GridRangeComponent } from './examples/grid-range.component';
import { GridRemoteComponent } from './examples/grid-remote.component';
import { GridResizeByContentComponent } from './examples/grid-resize-by-content.component';
import { GridRowDetailComponent } from './examples/grid-rowdetail.component';
import { GridRowMoveComponent } from './examples/grid-rowmove.component';
import { GridRowSelectionComponent } from './examples/grid-rowselection.component';
import { GridStateComponent } from './examples/grid-state.component';
import { GridTabsComponent } from './examples/grid-tabs.component';
import { GridTradingComponent } from './examples/grid-trading.component';
import { GridTreeDataHierarchicalComponent } from './examples/grid-tree-data-hierarchical.component';
import { GridTreeDataParentChildComponent } from './examples/grid-tree-data-parent-child.component';
import { HomeComponent } from './examples/home.component';
import { RowDetailPreloadComponent } from './examples/rowdetail-preload.component';
import { RowDetailViewComponent } from './examples/rowdetail-view.component';

import { SwtCommonGridTestComponent } from './examples/swt-common-grid-test.component';
import { SwtCommonGridPaginationComponent } from './examples/swt-common-grid-pagination.component';
import { SwtCommonGridComponent } from './examples/swt-common-grid.component';

import { AngularSlickgridModule } from 'angular-slickgrid';
// import { localeFrench } from './locales/fr';

// @dynamic
@NgModule({
  declarations: [
    AppComponent,
    CustomButtonFormatterComponent,
    CustomFooterComponent,
    CustomTitleFormatterComponent,
    EditorNgSelectComponent,
    FilterNgSelectComponent,
    GridAddItemComponent,
    GridAngularComponent,
    GridAutoHeightComponent,
    GridBaseRowEditingComponent,
    GridBasicComponent,
    GridClientSideComponent,
    GridColspanComponent,
    GridCompositeEditorComponent,
    GridContextMenuComponent,
    GridCustomTooltipComponent,
    GridDraggableGroupingComponent,
    GridEditorComponent,
    GridExcelFormulaComponent,
    GridFooterTotalsComponent,
    GridFormatterComponent,
    GridFrozenComponent,
    GridGraphqlComponent,
    GridGraphqlWithoutPaginationComponent,
    GridGroupingComponent,
    GridHeaderButtonComponent,
    GridHeaderFooterComponent,
    GridHeaderMenuComponent,
    GridInfiniteGraphqlComponent,
    GridInfiniteJsonComponent,
    GridInfiniteOdataComponent,
    GridLocalizationComponent,
    GridMenuComponent,
    GridOdataComponent,
    GridRangeComponent,
    GridRemoteComponent,
    GridResizeByContentComponent,
    GridRowDetailComponent,
    GridRowMoveComponent,
    GridRowSelectionComponent,
    GridStateComponent,
    GridTabsComponent,
    GridTradingComponent,
    GridTreeDataParentChildComponent,
    GridTreeDataHierarchicalComponent,
    RowDetailPreloadComponent,
    RowDetailViewComponent,
    SwtCommonGridTestComponent,
    SwtCommonGridPaginationComponent,
    SwtCommonGridComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingRoutingModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
    TabsModule.forRoot(),
    AngularSlickgridModule.forRoot({
      // add any Global Grid Options/Config you might want
      // to avoid passing the same options over and over in each grids of your App
      enableAutoResize: true,
      autoResize: {
        container: '#demo-container',
        rightPadding: 10
      },
      // we strongly suggest you add DOMPurify as a sanitizer
      sanitizer: (dirtyHtml) => DOMPurify.sanitize(dirtyHtml, { ADD_ATTR: ['level'], RETURN_TRUSTED_TYPE: true })

      // Provide a custom locales set
      // locale: 'fr', // this helps certain elements to know which locale to use, for example the Date Filter/Editor
      // locales: localeFrench,
    })
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
