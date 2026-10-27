import{t as r}from"./chunk-DarCEgGK.js";import{$ as MD,$n as pD,G as Kp,In as lD,M as Ho,Qt as Zp,Tr as xD,U as Jp,V as JI,a as Ap,bt as RI,f as Cy,jn as jc,kr as yI,mn as dv,on as bp,p as D,pr as tE,sn as cF,sr as rE,tn as _p,xn as gI,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,D as Mi,U as Vn,d as E1,k as Ne,l as D1,ut as jp,yt as sI}from"./chunk-Dk5kBPyv.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-BEH6XCIK.js";import{t as A}from"./chunk-Bcy5CVbq.js";function U(c,X){if(c&1&&(lD(0,`
        `),vi(1,`div`,45),lD(2,`
          `),vi(3,`b`),lD(4,`Metrics:`),Rc(),lD(5),MD(6,`date`),Rc(),lD(7,`
      `)),c&2){let n,l=RI();dv(5),Zp(` `,xD(6,3,(n=l.metrics())==null?null:n.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` |
          `,l.metrics()?.executionTime,`ms | `,l.metrics()?.totalItemCount,` items
        `)}}var $=20;var E=`users`;var J=`gridStateGraphql`;var V=250;var me=(()=>{class c{constructor(){this.cd=D(cF),this.translate=D(Mi),this.subscriptions=[],this.dataset=[],this.metrics=Ho(void 0),this.hideSubTitle=!1,this.isWithCursor=!1,this.graphqlQuery=``,this.processing=Ho(!0),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.selectedLanguage=Ho(``),this.serverWaitDelay=V;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){E1(this.subscriptions)}ngOnInit(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:uu.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,filter:{model:uu.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`,labelKey:`MALE`},{value:`female`,label:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:uu.multipleSelect,collection:[{value:`acme`,label:`Acme`},{value:`abc`,label:`Company ABC`},{value:`xyz`,label:`Company XYZ`}],options:{filter:!0}}},{id:`billingAddressStreet`,field:`billing.address.street`,nameKey:`BILLING.ADDRESS.STREET`,width:60,filterable:!0,sortable:!0,columnGroupKey:`BILLING.INFORMATION`},{id:`billingAddressZip`,field:`billing.address.zip`,nameKey:`BILLING.ADDRESS.ZIP`,width:60,type:`number`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,sortable:!0,filter:{model:uu.compoundInput},formatter:sI.multiple,params:{formatters:[sI.complexObject,sI.translate]}},{id:`finish`,field:`finish`,name:`Date`,formatter:sI.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,type:`date`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,filter:{model:uu.dateRange,filterShortcuts:[{titleKey:`NEXT_20_DAYS`,iconCssClass:`mdi mdi-calendar`,searchTerms:[Ne(new Date,`YYYY-MM-DD`),Ne(Vn(new Date,20),`YYYY-MM-DD`)]}]}}];let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.gridOptions={gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableFiltering:!0,enableCellNavigation:!0,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,i18n:this.translate,gridMenu:{resizeOnShowHeaderRow:!0,commandItems:[{iconCssClass:`mdi mdi-close text-danger`,title:`Reset Grid`,disabled:!1,command:`reset-grid`}],onCommand:(a,s)=>{s.command===`reset-grid`&&(this.angularGrid.gridService.resetGrid(this.columns),localStorage[J]=null)}},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:$,totalItems:0},presets:{columns:[{columnId:`name`,width:100},{columnId:`gender`,width:55},{columnId:`company`},{columnId:`billingAddressZip`},{columnId:`billingAddressStreet`,width:120},{columnId:`finish`,width:130}],filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}],sorters:[{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:new A,options:{datasetName:E,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],filterQueryOverride:({fieldName:a,columnDef:s,columnFilterOperator:S,searchValues:x})=>{if(S===`Custom`&&s?.id===`name`)return{field:a,operator:`Like`,value:x[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics.set(a.metrics),this.displaySpinner(!1)}}}}angularGridReady(n){this.angularGrid=n}displaySpinner(n){this.processing.set(n),this.status.set(n?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerApiCall(n){let l;if(this.angularGrid?.paginationService){let{paginationService:a}=this.angularGrid,s=a._initialized?a.getCurrentPageNumber():1,S=String.fromCharCode(65+s-1),x=String.fromCharCode(S.charCodeAt(0)+1);l={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:S,endCursor:x}}else l={hasPreviousPage:!1,hasNextPage:!0,startCursor:`A`,endCursor:`B`};let r={data:{[E]:{nodes:[],totalCount:100,pageInfo:l}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.angularGrid.backendService.buildQuery(),this.isWithCursor&&this.angularGrid?.paginationService?.setCursorPageInfo(r.data[E].pageInfo),a(r)},this.serverWaitDelay)})}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}gridStateChanged(n){console.log(`GraphQL Example, Grid State changed:: `,n),localStorage[J]=JSON.stringify(n.gridState)}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}saveCurrentGridState(){console.log(`GraphQL current grid state`,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`],operator:`=`},{columnId:`name`,searchTerms:[`Jane`],operator:`StartsWith`},{columnId:`company`,searchTerms:[`acme`],operator:`IN`},{columnId:`billingAddressZip`,searchTerms:[`11`],operator:`>=`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`billingAddressZip`,direction:`DESC`},{columnId:`company`,direction:`ASC`}])}resetToOriginalPresets(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}]),this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}]),setTimeout(()=>{this.angularGrid.paginationService?.changeItemPerPage(20),this.angularGrid.paginationService?.goToPageNumber(2)})}setIsWithCursor(n){return this.isWithCursor=n,this.resetOptions({useCursor:this.isWithCursor}),!0}resetOptions(n){this.displaySpinner(!0);let l=this.gridOptions.backendServiceApi.service;this.angularGrid.paginationService.setCursorBased(n.useCursor),l.updateOptions(n),this.gridOptions=r({},this.gridOptions),this.angularGrid.paginationService?.goToFirstPage()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=WE({type:c,selectors:[[`ng-component`]],decls:181,vars:13,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example06.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[1,`small`],[1,`red`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[`href`,`https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex`,`target`,`_blank`],[`href`,`https://stackoverflow.com/a/37981802/1212166`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`reset-presets`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`10px`],[`for`,`radioOffset`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`offset`,`id`,`radioOffset`,`checked`,``,3,`change`,`value`],[`for`,`radioCursor`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`cursor`,`id`,`radioCursor`,3,`change`,`value`],[1,`row`,`mb-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid6`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`]],template:function(l,r){l&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 6: Grid with Backend GraphQL Service
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`
  `),vi(18,`div`,6),lD(19,`
    Sorting/Paging connected to a Backend GraphQL Service (`),vi(20,`a`,7),lD(21,`Wiki docs`),Rc(),lD(22,`).
    `),_p(23,`br`),lD(24,`
    `),vi(25,`ul`,8),lD(26,`
      `),vi(27,`li`)(28,`span`,9),lD(29,`(*) NO DATA SHOWING`),Rc(),lD(30,` - just change Filters & Pages and look at the "GraphQL Query" changing :)`),Rc(),lD(31,`
      `),vi(32,`li`),lD(33,`This example also demos the Grid State feature, open the console log to see the changes`),Rc(),lD(34,`
      `),vi(35,`li`),lD(36,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Rc(),lD(37,`
      `),vi(38,`ul`),lD(39,`
        `),vi(40,`li`),lD(41,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Rc(),lD(42,`
        `),vi(43,`li`),lD(44,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Rc(),lD(45,`
      `),Rc(),lD(46,`
      `),vi(47,`li`),lD(48,`
        You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
        `),vi(49,`a`,10),lD(50,`Wiki - Grid Preset`),Rc(),lD(51,`
      `),Rc(),lD(52,`
      `),vi(53,`li`),lD(54,`
        Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.
      `),Rc(),lD(55,`
      `),vi(56,`li`),lD(57,`
        Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura
        `),vi(58,`a`,11),lD(59,`_regex`),Rc(),lD(60,`) or you
        could add your own implementation (e.g. see this SO `),vi(61,`a`,12),lD(62,`Question`),Rc(),lD(63,`).
      `),Rc(),lD(64,`
    `),Rc(),lD(65,`
  `),Rc(),lD(66,`

  `),vi(67,`div`,13),lD(68,`
    `),vi(69,`div`,14),lD(70,`
      `),vi(71,`div`,15),lD(72,`
        `),vi(73,`strong`),lD(74,`Status: `),Rc(),lD(75),vi(76,`span`,16),lD(77,`
          `),_p(78,`i`,17),lD(79,`
        `),Rc(),lD(80,`
      `),Rc(),lD(81,`

      `),vi(82,`div`,13),lD(83,`
        `),vi(84,`div`,18),lD(85,`
          `),vi(86,`button`,19),Ap(`click`,function(){return r.clearAllFiltersAndSorts()}),lD(87,`
            `),_p(88,`i`,20),lD(89,`
            Clear all Filter & Sorts
          `),Rc(),lD(90,`
          `),vi(91,`button`,21),Ap(`click`,function(){return r.setFiltersDynamically()}),lD(92,`
            Set Filters Dynamically
          `),Rc(),lD(93,`
          `),vi(94,`button`,22),Ap(`click`,function(){return r.setSortingDynamically()}),lD(95,`
            Set Sorting Dynamically
          `),Rc(),lD(96,`
          `),vi(97,`button`,23),Ap(`click`,function(){return r.resetToOriginalPresets()}),lD(98,`
            Reset Original Presets
          `),Rc(),lD(99,`
          `),vi(100,`label`,24),lD(101,`Server Delay: `),Rc(),lD(102,`
          `),vi(103,`input`,25),tE(),Jp(`ngModelChange`,function(s){return pD(r.serverWaitDelay,s)||(r.serverWaitDelay=s),s}),Rc(),lD(104,`
        `),Rc(),lD(105,`
      `),Rc(),lD(106,`
      `),vi(107,`div`,26),lD(108,`
        `),vi(109,`div`,18),lD(110,`
          `),vi(111,`button`,27),Ap(`click`,function(){return r.switchLanguage()}),lD(112,`
            `),_p(113,`i`,28),lD(114,`
            Switch Language
          `),Rc(),lD(115,`
          `),vi(116,`strong`),lD(117,`Locale:`),Rc(),lD(118,`
          `),vi(119,`span`,29),lD(120),Rc(),lD(121,`
        `),Rc(),lD(122,`

        `),vi(123,`span`,30),lD(124,`
          `),vi(125,`label`,31),lD(126,`
            `),vi(127,`input`,32),Ap(`change`,function(){return r.setIsWithCursor(!1)}),Rc(),lD(128,`
            Offset
          `),Rc(),lD(129,`
          `),vi(130,`label`,33),lD(131,`
            `),vi(132,`input`,34),Ap(`change`,function(){return r.setIsWithCursor(!0)}),Rc(),lD(133,`
            Cursor
          `),Rc(),lD(134,`
        `),Rc(),lD(135,`
      `),Rc(),lD(136,`
      `),_p(137,`br`),lD(138,`
      `),gI(139,U,8,6),vi(140,`div`,35),lD(141,`
        `),vi(142,`div`,18),lD(143,`
          `),vi(144,`label`),lD(145,`Programmatically go to first/last page:`),Rc(),lD(146,`
          `),vi(147,`div`,36),lD(148,`
            `),vi(149,`button`,37),Ap(`click`,function(){return r.goToFirstPage()}),lD(150,`
              `),_p(151,`i`,38),lD(152,`
            `),Rc(),lD(153,`
            `),vi(154,`button`,39),Ap(`click`,function(){return r.goToLastPage()}),lD(155,`
              `),_p(156,`i`,40),lD(157,`
            `),Rc(),lD(158,`
          `),Rc(),lD(159,`
        `),Rc(),lD(160,`
      `),Rc(),lD(161,`
    `),Rc(),lD(162,`

    `),vi(163,`div`,41),lD(164,`
      `),vi(165,`div`,42),lD(166,`
        `),vi(167,`strong`),lD(168,`GraphQL Query:`),Rc(),lD(169,`
        `),_p(170,`div`,43),lD(171,`
      `),Rc(),lD(172,`
    `),Rc(),lD(173,`
  `),Rc(),lD(174,`

  `),_p(175,`hr`),lD(176,`
  `),vi(177,`angular-slickgrid`,44),Ap(`onAngularGridCreated`,function(s){return r.angularGridReady(s.detail)})(`onGridStateChanged`,function(s){return r.gridStateChanged(s.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()}),lD(178,`
  `),Rc(),lD(179,`
`),Rc(),lD(180,`
`)),l&2&&(dv(71),JI(r.status().class),dv(4),jc(` `,r.status().text,`
        `),dv(),bp(`hidden`,!r.processing()),dv(27),Kp(`ngModel`,r.serverWaitDelay),rE(),dv(17),jc(`
            `,r.selectedLanguage()+`.json`,`
          `),dv(7),bp(`value`,!1),dv(5),bp(`value`,!0),dv(7),yI(r.metrics()?139:-1),dv(31),bp(`innerHTML`,r.graphqlQuery,Cy),dv(7),bp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[D1,In,Ge,zt,Dn,qt,jp],encapsulation:2})}}return c})();export{me as Example6Component};