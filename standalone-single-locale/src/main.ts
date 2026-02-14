import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { enableProdMode, importProvidersFrom, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularSlickgridComponent, GridOption } from 'angular-slickgrid';
import DOMPurify from 'dompurify';

import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// define Angular-Slickgrid default grid options that are common to all grids
const gridOptionConfig: GridOption = {
  enableAutoResize: true,
  autoResize: {
    container: '#demo-container',
    rightPadding: 10,
  },
  // we strongly suggest you add DOMPurify as a sanitizer for security reasons (XSS, etc.)
  // the "level" attribute is used by SlickGrid for Grouping & Tree Data level indentation
  sanitizer: (dirtyHtml) => DOMPurify.sanitize(dirtyHtml, { ADD_ATTR: ['level'], RETURN_TRUSTED_TYPE: true }),
};

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, RouterModule.forRoot(routes, { useHash: true })),
    AngularSlickgridComponent,
    { provide: 'defaultGridOption', useValue: gridOptionConfig },
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.log(err));
