import { enableProdMode, provideAppInitializer, Injector, inject, importProvidersFrom } from '@angular/core';
import DOMPurify from 'dompurify';

import { appInitializerFactory, createTranslateLoader } from './app/app.module';
import { environment } from './environments/environment';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { provideHttpClient, withInterceptorsFromDi, HttpClient } from '@angular/common/http';
import { AppRoutingRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingRoutingModule, BrowserModule, FormsModule, NgSelectModule, TabsModule.forRoot(), TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }), AngularSlickgridModule.forRoot({
      // add any Global Grid Options/Config you might want
      // to avoid passing the same options over and over in each grids of your App
      enableAutoResize: true,
      autoResize: {
        container: '#demo-container',
        rightPadding: 10,
      },
      // we strongly suggest you add DOMPurify as a sanitizer
      sanitizer: (dirtyHtml) => DOMPurify.sanitize(dirtyHtml, { ADD_ATTR: ['level'], RETURN_TRUSTED_TYPE: true }),
    })),
    provideAppInitializer(() => {
      const initializerFn = appInitializerFactory(inject(TranslateService), inject(Injector));
      return initializerFn();
    }),
    provideHttpClient(withInterceptorsFromDi()),
  ]
}) // preserveWhitespaces is now default to False since Angular 6
  .catch(err => console.log(err));
