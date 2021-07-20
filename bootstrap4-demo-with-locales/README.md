## Bootstrap 4 - with Custom Locales

## Important Note
### Optional NPM Packages
Please note that some of the npm packages installed in these demos are **optional** and are installed **only** for demo purposes. If you don't need the feature then don't install it (remove it from your `package.json`) and you'll end up with a smaller production build. 

Again the following dependencies are totally **OPTIONAL**

| Package Name | Version | Description |
| ------------ | ------- | ----------- |
| [@slickgrid-universal/composite-editor-component](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/composite-editor-component) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/composite-editor-component.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/composite-editor-component) | Composite Editor Modal Component | 
| [@slickgrid-universal/excel-export](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/excel-export) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/excel-export.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/excel-export) | Export to Excel Service (xls/xlsx) | 
| [@slickgrid-universal/text-export](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/text-export) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/text-export.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/text-export) | Export to Text File Service (csv/txt) |
| [@slickgrid-universal/graphql](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/graphql) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/graphql.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/graphql) | GraphQL Query Service (support Filter/Sort/Pagination) |
| [@slickgrid-universal/odata](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/odata) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/odata.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/odata) | OData Query Service (support Filter/Sort/Pagination) |
| [@slickgrid-universal/rxjs-observable](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/rxjs-observable) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/rxjs-observable.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/rxjs-observable) | RxJS Observable Service Wrapper |

---

### Install and Start Demo
This is the same as the Bootstrap 4 demo except that it uses custom Locales and does not require (neither use) `ngx-translate` and are with fixed Locales (meaning you cannot switch language on the fly). The Locales that were added for the demo (English/French), can be found under `src/app/locales`. You can use and define your own custom Locales via TypeScript file.
```bash
git clone https://github.com/ghiscoding/angular-slickgrid-demos
cd angular-slickgrid-demos/bootstrap4-demo-with-locales
npm install # OR yarn install
npm start # OR yarn start
```

### Build Demo
```bash
npm run build # OR yarn run build
```
