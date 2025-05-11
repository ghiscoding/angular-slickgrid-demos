import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';
import DOMPurify from 'dompurify';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingRoutingModule } from './app-routing.module';
import { CustomTitleFormatterComponent } from './examples/custom-titleFormatter.component';
import { CustomButtonFormatterComponent } from './examples/custom-buttonFormatter.component';
import { Example1Component } from './examples/example01.component';
import { Example2Component } from './examples/example02.component';
import { Example3Component } from './examples/example03.component';
import { Example4Component } from './examples/example04.component';
import { Example5Component } from './examples/example05.component';
import { Example6Component } from './examples/example06.component';
import { Example7Component } from './examples/example07.component';
import { Example8Component } from './examples/example08.component';
import { Example9Component } from './examples/example09.component';
import { Example10Component } from './examples/example10.component';
import { Example11Component } from './examples/example11.component';
import { Example12Component } from './examples/example12.component';
import { Example13Component } from './examples/example13.component';
import { Example14Component } from './examples/example14.component';
import { Example15Component } from './examples/example15.component';
import { Example16Component } from './examples/example16.component';
import { Example17Component } from './examples/example17.component';
import { Example18Component } from './examples/example18.component';
import { Example19Component } from './examples/example19.component';
import { Example20Component } from './examples/example20.component';
import { Example21Component } from './examples/example21.component';
import { Example22Component } from './examples/example22.component';
import { Example23Component } from './examples/example23.component';
import { Example24Component } from './examples/example24.component';
import { Example25Component } from './examples/example25.component';
import { Example26Component } from './examples/example26.component';
import { Example27Component } from './examples/example27.component';
import { Example28Component } from './examples/example28.component';
import { CustomFooterComponent, Example29Component } from './examples/example29.component';
import { Example30Component } from './examples/example30.component';
import { Example32Component } from './examples/example32.component';
import { Example33Component } from './examples/example33.component';
import { Example34Component } from './examples/example34.component';
import { Example35Component } from './examples/example35.component';
import { Example36Component } from './examples/example36.component';
import { Example37Component } from './examples/example37.component';
import { Example38Component } from './examples/example38.component';
import { Example39Component } from './examples/example39.component';
import { Example40Component } from './examples/example40.component';
import { Example41Component } from './examples/example41.component';
import { Example42Component } from './examples/example42.component';
import { Example43Component } from './examples/example43.component';
import { Example44Component } from './examples/example44.component';
import { Example45Component } from './examples/example45.component';
import { EditorNgSelectComponent } from './examples/editor-ng-select.component';
import { FilterNgSelectComponent } from './examples/filter-ng-select.component';
import { Example45DetailComponent } from './examples/example45-detail.component';
import { HomeComponent } from './examples/home.component';
import { CustomPagerComponent } from './examples/grid-custom-pager.component';
import { RowDetailPreloadComponent } from './examples/rowdetail-preload.component';
import { Example19RowDetailComponent } from './examples/example19-rowdetail.component';

import { SwtCommonGridTestComponent } from './examples/swt-common-grid-test.component';
import { SwtCommonGridPaginationComponent } from './examples/swt-common-grid-pagination.component';
import { SwtCommonGridComponent } from './examples/swt-common-grid.component';

import { AngularSlickgridModule } from 'angular-slickgrid';
// import { localeFrench } from './locales/fr';

@Injectable()
export class DummyTranslateService {
  get(key: string | string[]): string {
    return Array.isArray(key) ? key.join(', ') : key;
  }
  instant(key: string | string[]): string {
    return this.get(key);
  }
}

// @dynamic
@NgModule({
  declarations: [
    AppComponent,
    CustomButtonFormatterComponent,
    CustomFooterComponent,
    CustomPagerComponent,
    CustomTitleFormatterComponent,
    EditorNgSelectComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component,
    Example7Component,
    Example8Component,
    Example9Component,
    Example10Component,
    Example11Component,
    Example12Component,
    Example13Component,
    Example14Component,
    Example15Component,
    Example16Component,
    Example17Component,
    Example18Component,
    Example19Component,
    Example19RowDetailComponent,
    Example20Component,
    Example21Component,
    Example22Component,
    Example23Component,
    Example24Component,
    Example25Component,
    Example26Component,
    Example27Component,
    Example28Component,
    Example29Component,
    Example30Component,
    Example32Component,
    Example33Component,
    Example34Component,
    Example35Component,
    Example36Component,
    Example37Component,
    Example38Component,
    Example39Component,
    Example40Component,
    Example41Component,
    Example42Component,
    Example43Component,
    Example44Component,
    Example45Component,
    Example45DetailComponent,
    FilterNgSelectComponent,
    HomeComponent,
    RowDetailPreloadComponent,
    SwtCommonGridTestComponent,
    SwtCommonGridPaginationComponent,
    SwtCommonGridComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingRoutingModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
    TabsModule.forRoot(),
    TranslateModule.forRoot(),
    AngularSlickgridModule.forRoot({
      // add any Global Grid Options/Config you might want
      // to avoid passing the same options over and over in each grids of your App
      enableAutoResize: true,
      autoResize: {
        container: '#demo-container',
        rightPadding: 10,
      },
      // we strongly suggest you add DOMPurify as a sanitizer
      sanitizer: (dirtyHtml) => DOMPurify.sanitize(dirtyHtml, { ADD_ATTR: ['level'], RETURN_TRUSTED_TYPE: true })

      // Provide a custom locales set
      // locale: 'fr', // this helps certain elements to know which locale to use, for example the Date Filter/Editor
      // locales: localeFrench,
    })
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: TranslateService,
      useClass: DummyTranslateService, // Provide a dummy service if TranslateService is not configured
    }
  ]
})
export class AppModule { }
