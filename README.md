# Angular-Slickgrid Demos
## Multiple Demos of the [Angular-Slickgrid](https://github.com/ghiscoding/slickgrid-universal/tree/master/frameworks/angular-slickgrid) library

### Installation
Choose the theme and feature you want, they are separated into 2 themes (with Bootstrap 5) and there's a demo with Custom Locales (without `ngx-translate`, fixed Locales) and the other demos are all with `ngx-translate` (dynamically switch language on the fly).

#### VScode
If you use Visual Studio Code, you can also run each of the demo through the multiple VSCode Tasks.

## Important Note
### Angular-Slickgrid & Slickgrid-Universal compatibility
For a full compatibility table of Angular-Slickgrid with Slickgrid-Universal, you can consult the [Versions Compatibility Table - Wiki](https://github.com/ghiscoding/Angular-Slickgrid/wiki/Versions-Compatibility-Table)

### Optional NPM Packages
Please note that some of the npm packages installed in these demos are **optional** and are installed **only** for demo purposes. If you don't need the feature then don't install it (remove it from your `package.json`) and you'll end up with a smaller production build.

Again the following dependencies are totally **OPTIONAL**

| Package Name | Version | Description |
| ------------ | ------- | ----------- |
| [@slickgrid-universal/composite-editor-component](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/composite-editor-component) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/composite-editor-component.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/composite-editor-component) | Composite Editor Modal Component |
| [@slickgrid-universal/custom-tooltip-plugin](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/custom-tooltip-plugin) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/custom-tooltip-plugin.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/custom-tooltip-plugin) | Custom Tooltip Plugin |
| [@slickgrid-universal/excel-export](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/excel-export) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/excel-export.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/excel-export) | Export to Excel Service (xls/xlsx) |
| [@slickgrid-universal/text-export](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/text-export) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/text-export.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/text-export) | Export to Text File Service (csv/txt) |
| [@slickgrid-universal/graphql](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/graphql) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/graphql.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/graphql) | GraphQL Query Service (support Filter/Sort/Pagination) |
| [@slickgrid-universal/odata](https://github.com/ghiscoding/slickgrid-universal/tree/master/packages/odata) | [![npm](https://img.shields.io/npm/v/@slickgrid-universal/odata.svg?color=forest)](https://www.npmjs.com/package/@slickgrid-universal/odata) | OData Query Service (support Filter/Sort/Pagination) |

---

## Bootstrap 5 - with `ngx-translate`
Common Bootstrap 5 demo using `ngx-translate` to provide the use of multiple languages (locales) which can be switched dynamically (on the fly).

##### Install and Start Demo
```bash
git clone https://github.com/ghiscoding/angular-slickgrid-demos
cd bootstrap5-demo-with-translate
npm install # OR yarn install
npm start # OR yarn start
```

##### Build Demo
```bash
npm run build # OR yarn run build
```

## Bootstrap 5 - Standalone Components with `ngx-translate`
Common Bootstrap 5 demo using `ngx-translate` to provide the use of multiple languages (locales) which can be switched dynamically (on the fly).

_**Note** This is the same as the `bootstrap5-demo-with-translate` with the exception that it's using Standalone Components instead of the legacy Module approach._

##### Install and Start Demo
```bash
git clone https://github.com/ghiscoding/angular-slickgrid-demos
cd bootstrap5-standalone-with-translate
npm install # OR yarn install
npm start # OR yarn start
```

##### Build Demo
```bash
npm run build # OR yarn run build
```

## Bootstrap 5 - with Custom Locales (single locale)
This is the same as the Bootstrap 5 demo except that it uses custom Locale(s) and does not require (neither use) `ngx-translate` and are with fixed Locale(s) (this means you cannot switch locale on the fly). The Locales that were added for the demo (English/French), can be found under [src/app/locales](/bootstrap5-demo-with-locales/src/app/locales). You can use, and define, your own custom Locales via a TypeScript file.

##### Install and Start Demo
```bash
git clone https://github.com/ghiscoding/angular-slickgrid-demos
cd bootstrap5-demo-with-locales
npm install # OR yarn install
npm start # OR yarn start
```

##### Build Demo
```bash
npm run build # OR yarn run build
```
