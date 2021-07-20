import { AppRoutingRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { CustomActionFormatterComponent } from './examples/custom-actionFormatter.component';
import { CustomTitleFormatterComponent } from './examples/custom-titleFormatter.component';
import { EditorNgSelectComponent } from './examples/editor-ng-select.component';
import { FilterNgSelectComponent } from './examples/filter-ng-select.component';
import { GridAddItemComponent } from './examples/grid-additem.component';
import { GridAngularComponent } from './examples/grid-angular.component';
import { GridAutoHeightComponent } from './examples/grid-autoheight.component';
import { GridBasicComponent } from './examples/grid-basic.component';
import { GridClientSideComponent } from './examples/grid-clientside.component';
import { GridColspanComponent } from './examples/grid-colspan.component';
import { GridCompositeEditorComponent } from './examples/grid-composite-editor.component';
import { GridContextMenuComponent } from './examples/grid-contextmenu.component';
import { GridDraggableGroupingComponent } from './examples/grid-draggrouping.component';
import { GridEditorComponent } from './examples/grid-editor.component';
import { GridFormatterComponent } from './examples/grid-formatter.component';
import { GridFrozenComponent } from './examples/grid-frozen.component';
import { GridGraphqlComponent } from './examples/grid-graphql.component';
import { GridGraphqlWithoutPaginationComponent } from './examples/grid-graphql-nopage.component';
import { GridGroupingComponent } from './examples/grid-grouping.component';
import { GridHeaderMenuComponent } from './examples/grid-headermenu.component';
import { GridHeaderButtonComponent } from './examples/grid-headerbutton.component';
import { GridLocalizationComponent } from './examples/grid-localization.component';
import { GridMenuComponent } from './examples/grid-menu.component';
import { GridOdataComponent } from './examples/grid-odata.component';
import { GridRemoteComponent } from './examples/grid-remote.component';
import { GridRangeComponent } from './examples/grid-range.component';
import { GridResizeByContentComponent } from './examples/grid-resize-by-content.component';
import { GridRowDetailComponent } from './examples/grid-rowdetail.component';
import { GridRowMoveComponent } from './examples/grid-rowmove.component';
import { GridRowSelectionComponent } from './examples/grid-rowselection.component';
import { GridStateComponent } from './examples/grid-state.component';
import { GridTabsComponent } from './examples/grid-tabs.component';
import { GridTreeDataHierarchicalComponent } from './examples/grid-tree-data-hierarchical.component';
import { GridTreeDataParentChildComponent } from './examples/grid-tree-data-parent-child.component';
import { HomeComponent } from './examples/home.component';
import { RowDetailPreloadComponent } from './examples/rowdetail-preload.component';
import { RowDetailViewComponent } from './examples/rowdetail-view.component';

import { SwtCommonGridTestComponent } from './examples/swt-common-grid-test.component';
import { SwtCommonGridPaginationComponent } from './examples/swt-common-grid-pagination.component';
import { SwtCommonGridComponent } from './examples/swt-common-grid.component';

import { AppComponent } from './app.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { localeFrench } from './locales/fr';

// load necessary Flatpickr Locale(s), but make sure it's imported AFTER the AngularSlickgridModule import
import 'flatpickr/dist/l10n/fr';

// @dynamic
@NgModule({
  declarations: [
    AppComponent,
    CustomActionFormatterComponent,
    CustomTitleFormatterComponent,
    EditorNgSelectComponent,
    FilterNgSelectComponent,
    GridAddItemComponent,
    GridAngularComponent,
    GridAutoHeightComponent,
    GridBasicComponent,
    GridClientSideComponent,
    GridColspanComponent,
    GridCompositeEditorComponent,
    GridContextMenuComponent,
    GridEditorComponent,
    GridDraggableGroupingComponent,
    GridFormatterComponent,
    GridFrozenComponent,
    GridGraphqlComponent,
    GridGraphqlWithoutPaginationComponent,
    GridGroupingComponent,
    GridHeaderButtonComponent,
    GridHeaderMenuComponent,
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
    GridTreeDataParentChildComponent,
    GridTreeDataHierarchicalComponent,
    RowDetailPreloadComponent,
    RowDetailViewComponent,
    SwtCommonGridTestComponent,
    SwtCommonGridPaginationComponent,
    SwtCommonGridComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
      // Provide a custom locales set
      // locale: 'fr', // this helps certain elements to know which locale to use, for example the Date Filter/Editor
      // locales: localeFrench,
    })
  ],
  entryComponents: [
    // dynamically created components
    CustomActionFormatterComponent,
    CustomTitleFormatterComponent,
    EditorNgSelectComponent,
    FilterNgSelectComponent,
    RowDetailPreloadComponent,
    RowDetailViewComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
