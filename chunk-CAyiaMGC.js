import{t as A}from"./chunk-Cwh4hLmS.js";import{g as Yt,h as Wt,m as Sn,s as An,y as ke}from"./main-KCATS47T.js";import{Ct as ku,M as Ne,V as R$,Z as Wi,lt as dm,rt as ZR,w as I$,z as Qn}from"./chunk-Lo0QQjTd.js";import{Gn as mI,I as Ho,In as kI,K as Jp,P as Hc,Qt as Zp,Tn as hD,X as Lc,Y as Kp,Yn as oE,an as by,dr as uD,en as _p,f as D,in as bp,jr as yF,k as GE,o as Ap,ot as ND,qn as nE,qt as XI,r as AD,vr as vI,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";import{t as r}from"./chunk-DarCEgGK.js";function U(c,X){if(c&1&&(uD(0,`
        `),vi(1,`div`,45),uD(2,`
          `),vi(3,`b`),uD(4,`Metrics:`),Lc(),uD(5),ND(6,`date`),Lc(),uD(7,`
      `)),c&2){let n,l=kI();fv(5),Zp(` `,AD(6,3,(n=l.metrics())==null?null:n.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` |
          `,l.metrics()?.executionTime,`ms | `,l.metrics()?.totalItemCount,` items
        `)}}var $=20;var E=`users`;var J=`gridStateGraphql`;var V=250;var me=(()=>{class c{constructor(){this.cd=D(yF),this.translate=D(Wi),this.subscriptions=[],this.dataset=[],this.metrics=Ho(void 0),this.hideSubTitle=!1,this.isWithCursor=!1,this.graphqlQuery=``,this.processing=Ho(!0),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.selectedLanguage=Ho(``),this.serverWaitDelay=V;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){I$(this.subscriptions)}ngOnInit(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:ku.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,filter:{model:ku.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`,labelKey:`MALE`},{value:`female`,label:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:ku.multipleSelect,collection:[{value:`acme`,label:`Acme`},{value:`abc`,label:`Company ABC`},{value:`xyz`,label:`Company XYZ`}],options:{filter:!0}}},{id:`billingAddressStreet`,field:`billing.address.street`,nameKey:`BILLING.ADDRESS.STREET`,width:60,filterable:!0,sortable:!0,columnGroupKey:`BILLING.INFORMATION`},{id:`billingAddressZip`,field:`billing.address.zip`,nameKey:`BILLING.ADDRESS.ZIP`,width:60,type:`number`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,sortable:!0,filter:{model:ku.compoundInput},formatter:ZR.multiple,params:{formatters:[ZR.complexObject,ZR.translate]}},{id:`finish`,field:`finish`,name:`Date`,formatter:ZR.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,type:`date`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,filter:{model:ku.dateRange,filterShortcuts:[{titleKey:`NEXT_20_DAYS`,iconCssClass:`mdi mdi-calendar`,searchTerms:[Ne(/* @__PURE__ */ new Date,`YYYY-MM-DD`),Ne(Qn(/* @__PURE__ */ new Date,20),`YYYY-MM-DD`)]}]}}];let n=(/* @__PURE__ */ new Date()).getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.gridOptions={gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableFiltering:!0,enableCellNavigation:!0,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,i18n:this.translate,gridMenu:{resizeOnShowHeaderRow:!0,commandItems:[{iconCssClass:`mdi mdi-close text-danger`,title:`Reset Grid`,disabled:!1,command:`reset-grid`}],onCommand:(a,s)=>{s.command===`reset-grid`&&(this.angularGrid.gridService.resetGrid(this.columns),localStorage[J]=null)}},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:$,totalItems:0},presets:{columns:[{columnId:`name`,width:100},{columnId:`gender`,width:55},{columnId:`company`},{columnId:`billingAddressZip`},{columnId:`billingAddressStreet`,width:120},{columnId:`finish`,width:130}],filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}],sorters:[{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:new A,options:{datasetName:E,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],filterQueryOverride:({fieldName:a,columnDef:s,columnFilterOperator:S,searchValues:x})=>{if(S===`Custom`&&s?.id===`name`)return{field:a,operator:`Like`,value:x[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics.set(a.metrics),this.displaySpinner(!1)}}}}angularGridReady(n){this.angularGrid=n}displaySpinner(n){this.processing.set(n),this.status.set(n?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerApiCall(n){let l;if(this.angularGrid?.paginationService){let{paginationService:a}=this.angularGrid,s=a._initialized?a.getCurrentPageNumber():1,S=String.fromCharCode(65+s-1),x=String.fromCharCode(S.charCodeAt(0)+1);l={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:S,endCursor:x}}else l={hasPreviousPage:!1,hasNextPage:!0,startCursor:`A`,endCursor:`B`};let r={data:{[E]:{nodes:[],totalCount:100,pageInfo:l}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.angularGrid.backendService.buildQuery(),this.isWithCursor&&this.angularGrid?.paginationService?.setCursorPageInfo(r.data[E].pageInfo),a(r)},this.serverWaitDelay)})}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}gridStateChanged(n){console.log(`GraphQL Example, Grid State changed:: `,n),localStorage[J]=JSON.stringify(n.gridState)}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}saveCurrentGridState(){console.log(`GraphQL current grid state`,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){let n=(/* @__PURE__ */ new Date()).getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`],operator:`=`},{columnId:`name`,searchTerms:[`Jane`],operator:`StartsWith`},{columnId:`company`,searchTerms:[`acme`],operator:`IN`},{columnId:`billingAddressZip`,searchTerms:[`11`],operator:`>=`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`billingAddressZip`,direction:`DESC`},{columnId:`company`,direction:`ASC`}])}resetToOriginalPresets(){let n=(/* @__PURE__ */ new Date()).getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}]),this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}]),setTimeout(()=>{this.angularGrid.paginationService?.changeItemPerPage(20),this.angularGrid.paginationService?.goToPageNumber(2)})}setIsWithCursor(n){return this.isWithCursor=n,this.resetOptions({useCursor:this.isWithCursor}),!0}resetOptions(n){this.displaySpinner(!0);let l=this.gridOptions.backendServiceApi.service;this.angularGrid.paginationService.setCursorBased(n.useCursor),l.updateOptions(n),this.gridOptions=r({},this.gridOptions),this.angularGrid.paginationService?.goToFirstPage()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=GE({type:c,selectors:[[`ng-component`]],decls:181,vars:13,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example06.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[1,`small`],[1,`red`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[`href`,`https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex`,`target`,`_blank`],[`href`,`https://stackoverflow.com/a/37981802/1212166`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`reset-presets`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`10px`],[`for`,`radioOffset`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`offset`,`id`,`radioOffset`,`checked`,``,3,`change`,`value`],[`for`,`radioCursor`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`cursor`,`id`,`radioCursor`,3,`change`,`value`],[1,`row`,`mb-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid6`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`]],template:function(l,r){l&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 6: Grid with Backend GraphQL Service
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`
  `),vi(18,`div`,6),uD(19,`
    Sorting/Paging connected to a Backend GraphQL Service (`),vi(20,`a`,7),uD(21,`Wiki docs`),Lc(),uD(22,`).
    `),_p(23,`br`),uD(24,`
    `),vi(25,`ul`,8),uD(26,`
      `),vi(27,`li`)(28,`span`,9),uD(29,`(*) NO DATA SHOWING`),Lc(),uD(30,` - just change Filters & Pages and look at the "GraphQL Query" changing :)`),Lc(),uD(31,`
      `),vi(32,`li`),uD(33,`This example also demos the Grid State feature, open the console log to see the changes`),Lc(),uD(34,`
      `),vi(35,`li`),uD(36,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Lc(),uD(37,`
      `),vi(38,`ul`),uD(39,`
        `),vi(40,`li`),uD(41,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Lc(),uD(42,`
        `),vi(43,`li`),uD(44,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Lc(),uD(45,`
      `),Lc(),uD(46,`
      `),vi(47,`li`),uD(48,`
        You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
        `),vi(49,`a`,10),uD(50,`Wiki - Grid Preset`),Lc(),uD(51,`
      `),Lc(),uD(52,`
      `),vi(53,`li`),uD(54,`
        Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.
      `),Lc(),uD(55,`
      `),vi(56,`li`),uD(57,`
        Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura
        `),vi(58,`a`,11),uD(59,`_regex`),Lc(),uD(60,`) or you
        could add your own implementation (e.g. see this SO `),vi(61,`a`,12),uD(62,`Question`),Lc(),uD(63,`).
      `),Lc(),uD(64,`
    `),Lc(),uD(65,`
  `),Lc(),uD(66,`

  `),vi(67,`div`,13),uD(68,`
    `),vi(69,`div`,14),uD(70,`
      `),vi(71,`div`,15),uD(72,`
        `),vi(73,`strong`),uD(74,`Status: `),Lc(),uD(75),vi(76,`span`,16),uD(77,`
          `),_p(78,`i`,17),uD(79,`
        `),Lc(),uD(80,`
      `),Lc(),uD(81,`

      `),vi(82,`div`,13),uD(83,`
        `),vi(84,`div`,18),uD(85,`
          `),vi(86,`button`,19),Ap(`click`,function(){return r.clearAllFiltersAndSorts()}),uD(87,`
            `),_p(88,`i`,20),uD(89,`
            Clear all Filter & Sorts
          `),Lc(),uD(90,`
          `),vi(91,`button`,21),Ap(`click`,function(){return r.setFiltersDynamically()}),uD(92,`
            Set Filters Dynamically
          `),Lc(),uD(93,`
          `),vi(94,`button`,22),Ap(`click`,function(){return r.setSortingDynamically()}),uD(95,`
            Set Sorting Dynamically
          `),Lc(),uD(96,`
          `),vi(97,`button`,23),Ap(`click`,function(){return r.resetToOriginalPresets()}),uD(98,`
            Reset Original Presets
          `),Lc(),uD(99,`
          `),vi(100,`label`,24),uD(101,`Server Delay: `),Lc(),uD(102,`
          `),vi(103,`input`,25),nE(),Jp(`ngModelChange`,function(s){return hD(r.serverWaitDelay,s)||(r.serverWaitDelay=s),s}),Lc(),uD(104,`
        `),Lc(),uD(105,`
      `),Lc(),uD(106,`
      `),vi(107,`div`,26),uD(108,`
        `),vi(109,`div`,18),uD(110,`
          `),vi(111,`button`,27),Ap(`click`,function(){return r.switchLanguage()}),uD(112,`
            `),_p(113,`i`,28),uD(114,`
            Switch Language
          `),Lc(),uD(115,`
          `),vi(116,`strong`),uD(117,`Locale:`),Lc(),uD(118,`
          `),vi(119,`span`,29),uD(120),Lc(),uD(121,`
        `),Lc(),uD(122,`

        `),vi(123,`span`,30),uD(124,`
          `),vi(125,`label`,31),uD(126,`
            `),vi(127,`input`,32),Ap(`change`,function(){return r.setIsWithCursor(!1)}),Lc(),uD(128,`
            Offset
          `),Lc(),uD(129,`
          `),vi(130,`label`,33),uD(131,`
            `),vi(132,`input`,34),Ap(`change`,function(){return r.setIsWithCursor(!0)}),Lc(),uD(133,`
            Cursor
          `),Lc(),uD(134,`
        `),Lc(),uD(135,`
      `),Lc(),uD(136,`
      `),_p(137,`br`),uD(138,`
      `),mI(139,U,8,6),vi(140,`div`,35),uD(141,`
        `),vi(142,`div`,18),uD(143,`
          `),vi(144,`label`),uD(145,`Programmatically go to first/last page:`),Lc(),uD(146,`
          `),vi(147,`div`,36),uD(148,`
            `),vi(149,`button`,37),Ap(`click`,function(){return r.goToFirstPage()}),uD(150,`
              `),_p(151,`i`,38),uD(152,`
            `),Lc(),uD(153,`
            `),vi(154,`button`,39),Ap(`click`,function(){return r.goToLastPage()}),uD(155,`
              `),_p(156,`i`,40),uD(157,`
            `),Lc(),uD(158,`
          `),Lc(),uD(159,`
        `),Lc(),uD(160,`
      `),Lc(),uD(161,`
    `),Lc(),uD(162,`

    `),vi(163,`div`,41),uD(164,`
      `),vi(165,`div`,42),uD(166,`
        `),vi(167,`strong`),uD(168,`GraphQL Query:`),Lc(),uD(169,`
        `),_p(170,`div`,43),uD(171,`
      `),Lc(),uD(172,`
    `),Lc(),uD(173,`
  `),Lc(),uD(174,`

  `),_p(175,`hr`),uD(176,`
  `),vi(177,`angular-slickgrid`,44),Ap(`onAngularGridCreated`,function(s){return r.angularGridReady(s.detail)})(`onGridStateChanged`,function(s){return r.gridStateChanged(s.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()}),uD(178,`
  `),Lc(),uD(179,`
`),Lc(),uD(180,`
`)),l&2&&(fv(71),XI(r.status().class),fv(4),Hc(` `,r.status().text,`
        `),fv(),bp(`hidden`,!r.processing()),fv(27),Kp(`ngModel`,r.serverWaitDelay),oE(),fv(17),Hc(`
            `,r.selectedLanguage()+`.json`,`
          `),fv(7),bp(`value`,!1),fv(5),bp(`value`,!0),fv(7),vI(r.metrics()?139:-1),fv(31),bp(`innerHTML`,r.graphqlQuery,by),fv(7),bp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[R$,Sn,ke,Yt,An,Wt,dm],encapsulation:2})}}return c})();export{me as Example6Component};