import{t as r}from"./chunk-DarCEgGK.js";import{En as jc,F as Ip,Kn as pI,Lt as Wp,O as Gp,Pn as ly,Pt as WP,Wt as ZI,Xn as qp,b as Ep,hr as xI,ir as tE,j as Ho,or as uD,p as CD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,vn as hI,wr as yv,xr as yi,xt as T,zt as Xy}from"./chunk-Rd4ToC_L.js";import{At as xe,U as Zn,W as _W,ct as ip,ht as nk,m as Ki,n as CW,x as Pm}from"./chunk-DLuyVhQJ.js";import{_ as Vn,b as zt,d as Fn,g as Te,s as $t}from"./main-CCTR2RMO.js";import{t as A}from"./chunk-BN5KFnF7.js";function U(c,X){if(c&1&&(sD(0,`
        `),yi(1,`div`,45),sD(2,`
          `),yi(3,`b`),sD(4,`Metrics:`),Rc(),sD(5),CD(6,`date`),Rc(),sD(7,`
      `)),c&2){let n=xI();ly(5),qp(` `,MD(6,3,n.metrics()?.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,n.metrics()?.executionTime,`ms |
          `,n.metrics()?.totalItemCount,` items
        `)}}var $=20;var E=`users`;var J=`gridStateGraphql`;var V=250;var me=(()=>{class c{constructor(){this.cd=T(WP),this.translate=T(Ki),this.subscriptions=[],this.dataset=[],this.metrics=Ho(void 0),this.hideSubTitle=!1,this.isWithCursor=!1,this.graphqlQuery=``,this.processing=Ho(!0),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.selectedLanguage=Ho(``),this.serverWaitDelay=V;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:ip.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`,labelKey:`MALE`},{value:`female`,label:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:ip.multipleSelect,collection:[{value:`acme`,label:`Acme`},{value:`abc`,label:`Company ABC`},{value:`xyz`,label:`Company XYZ`}],options:{filter:!0}}},{id:`billingAddressStreet`,field:`billing.address.street`,nameKey:`BILLING.ADDRESS.STREET`,width:60,filterable:!0,sortable:!0,columnGroupKey:`BILLING.INFORMATION`},{id:`billingAddressZip`,field:`billing.address.zip`,nameKey:`BILLING.ADDRESS.ZIP`,width:60,type:`number`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,sortable:!0,filter:{model:ip.compoundInput},formatter:nk.multiple,params:{formatters:[nk.complexObject,nk.translate]}},{id:`finish`,field:`finish`,name:`Date`,formatter:nk.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,type:`date`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,filter:{model:ip.dateRange,filterShortcuts:[{titleKey:`NEXT_20_DAYS`,iconCssClass:`mdi mdi-calendar`,searchTerms:[xe(new Date,`YYYY-MM-DD`),xe(Zn(new Date,20),`YYYY-MM-DD`)]}]}}];let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.gridOptions={gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableFiltering:!0,enableCellNavigation:!0,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,i18n:this.translate,gridMenu:{resizeOnShowHeaderRow:!0,commandItems:[{iconCssClass:`mdi mdi-close text-danger`,title:`Reset Grid`,disabled:!1,command:`reset-grid`,positionOrder:60}],onCommand:(a,s)=>{s.command===`reset-grid`&&(this.angularGrid.gridService.resetGrid(this.columns),localStorage[J]=null)}},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:$,totalItems:0},presets:{columns:[{columnId:`name`,width:100},{columnId:`gender`,width:55},{columnId:`company`},{columnId:`billingAddressZip`},{columnId:`billingAddressStreet`,width:120},{columnId:`finish`,width:130}],filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}],sorters:[{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:new A,options:{datasetName:E,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],filterQueryOverride:({fieldName:a,columnDef:s,columnFilterOperator:S,searchValues:x})=>{if(S===`Custom`&&s?.id===`name`)return{field:a,operator:`Like`,value:x[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics.set(a.metrics),this.displaySpinner(!1)}}}}angularGridReady(n){this.angularGrid=n}displaySpinner(n){this.processing.set(n),this.status.set(n?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerApiCall(n){let l;if(this.angularGrid?.paginationService){let{paginationService:a}=this.angularGrid,s=a._initialized?a.getCurrentPageNumber():1,S=String.fromCharCode(65+s-1),x=String.fromCharCode(S.charCodeAt(0)+1);l={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:S,endCursor:x}}else l={hasPreviousPage:!1,hasNextPage:!0,startCursor:`A`,endCursor:`B`};let r={data:{[E]:{nodes:[],totalCount:100,pageInfo:l}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.angularGrid.backendService.buildQuery(),this.isWithCursor&&this.angularGrid?.paginationService?.setCursorPageInfo(r.data[E].pageInfo),a(r)},this.serverWaitDelay)})}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}gridStateChanged(n){console.log(`GraphQL Example, Grid State changed:: `,n),localStorage[J]=JSON.stringify(n.gridState)}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}saveCurrentGridState(){console.log(`GraphQL current grid state`,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`],operator:`=`},{columnId:`name`,searchTerms:[`Jane`],operator:`StartsWith`},{columnId:`company`,searchTerms:[`acme`],operator:`IN`},{columnId:`billingAddressZip`,searchTerms:[`11`],operator:`>=`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`billingAddressZip`,direction:`DESC`},{columnId:`company`,direction:`ASC`}])}resetToOriginalPresets(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}]),this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}]),setTimeout(()=>{this.angularGrid.paginationService?.changeItemPerPage(20),this.angularGrid.paginationService?.goToPageNumber(2)})}setIsWithCursor(n){return this.isWithCursor=n,this.resetOptions({useCursor:this.isWithCursor}),!0}resetOptions(n){this.displaySpinner(!0);let l=this.gridOptions.backendServiceApi.service;this.angularGrid.paginationService.setCursorBased(n.useCursor),l.updateOptions(n),this.gridOptions=r({},this.gridOptions),this.angularGrid.paginationService?.goToFirstPage()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=$E({type:c,selectors:[[`ng-component`]],decls:181,vars:13,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example06.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[1,`small`],[1,`red`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[`href`,`https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex`,`target`,`_blank`],[`href`,`https://stackoverflow.com/a/37981802/1212166`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`reset-presets`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`10px`],[`for`,`radioOffset`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`offset`,`id`,`radioOffset`,`checked`,``,3,`change`,`value`],[`for`,`radioCursor`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`cursor`,`id`,`radioCursor`,3,`change`,`value`],[1,`row`,`mb-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid6`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`]],template:function(l,r){l&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 6: Grid connected to Backend Server with GraphQL
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return r.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`
  `),yi(18,`div`,6),sD(19,`
    Sorting/Paging connected to a Backend GraphQL Service (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`).
    `),Ip(23,`br`),sD(24,`
    `),yi(25,`ul`,8),sD(26,`
      `),yi(27,`li`)(28,`span`,9),sD(29,`(*) NO DATA SHOWING`),Rc(),sD(30,` - just change Filters & Pages and look at the "GraphQL Query" changing :)`),Rc(),sD(31,`
      `),yi(32,`li`),sD(33,`This example also demos the Grid State feature, open the console log to see the changes`),Rc(),sD(34,`
      `),yi(35,`li`),sD(36,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Rc(),sD(37,`
      `),yi(38,`ul`),sD(39,`
        `),yi(40,`li`),sD(41,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Rc(),sD(42,`
        `),yi(43,`li`),sD(44,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Rc(),sD(45,`
      `),Rc(),sD(46,`
      `),yi(47,`li`),sD(48,`
        You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
        `),yi(49,`a`,10),sD(50,`Wiki - Grid Preset`),Rc(),sD(51,`
      `),Rc(),sD(52,`
      `),yi(53,`li`),sD(54,`
        Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.
      `),Rc(),sD(55,`
      `),yi(56,`li`),sD(57,`
        Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura
        `),yi(58,`a`,11),sD(59,`_regex`),Rc(),sD(60,`) or you
        could add your own implementation (e.g. see this SO `),yi(61,`a`,12),sD(62,`Question`),Rc(),sD(63,`).
      `),Rc(),sD(64,`
    `),Rc(),sD(65,`
  `),Rc(),sD(66,`

  `),yi(67,`div`,13),sD(68,`
    `),yi(69,`div`,14),sD(70,`
      `),yi(71,`div`,15),sD(72,`
        `),yi(73,`strong`),sD(74,`Status: `),Rc(),sD(75),yi(76,`span`,16),sD(77,`
          `),Ip(78,`i`,17),sD(79,`
        `),Rc(),sD(80,`
      `),Rc(),sD(81,`

      `),yi(82,`div`,13),sD(83,`
        `),yi(84,`div`,18),sD(85,`
          `),yi(86,`button`,19),bp(`click`,function(){return r.clearAllFiltersAndSorts()}),sD(87,`
            `),Ip(88,`i`,20),sD(89,`
            Clear all Filter & Sorts
          `),Rc(),sD(90,`
          `),yi(91,`button`,21),bp(`click`,function(){return r.setFiltersDynamically()}),sD(92,`
            Set Filters Dynamically
          `),Rc(),sD(93,`
          `),yi(94,`button`,22),bp(`click`,function(){return r.setSortingDynamically()}),sD(95,`
            Set Sorting Dynamically
          `),Rc(),sD(96,`
          `),yi(97,`button`,23),bp(`click`,function(){return r.resetToOriginalPresets()}),sD(98,`
            Reset Original Presets
          `),Rc(),sD(99,`
          `),yi(100,`label`,24),sD(101,`Server Delay: `),Rc(),sD(102,`
          `),yi(103,`input`,25),Wp(`ngModelChange`,function(s){return uD(r.serverWaitDelay,s)||(r.serverWaitDelay=s),s}),Rc(),Xy(),sD(104,`
        `),Rc(),sD(105,`
      `),Rc(),sD(106,`
      `),yi(107,`div`,26),sD(108,`
        `),yi(109,`div`,18),sD(110,`
          `),yi(111,`button`,27),bp(`click`,function(){return r.switchLanguage()}),sD(112,`
            `),Ip(113,`i`,28),sD(114,`
            Switch Language
          `),Rc(),sD(115,`
          `),yi(116,`strong`),sD(117,`Locale:`),Rc(),sD(118,`
          `),yi(119,`span`,29),sD(120),Rc(),sD(121,`
        `),Rc(),sD(122,`

        `),yi(123,`span`,30),sD(124,`
          `),yi(125,`label`,31),sD(126,`
            `),yi(127,`input`,32),bp(`change`,function(){return r.setIsWithCursor(!1)}),Rc(),sD(128,`
            Offset
          `),Rc(),sD(129,`
          `),yi(130,`label`,33),sD(131,`
            `),yi(132,`input`,34),bp(`change`,function(){return r.setIsWithCursor(!0)}),Rc(),sD(133,`
            Cursor
          `),Rc(),sD(134,`
        `),Rc(),sD(135,`
      `),Rc(),sD(136,`
      `),Ip(137,`br`),sD(138,`
      `),pI(139,U,8,6),yi(140,`div`,35),sD(141,`
        `),yi(142,`div`,18),sD(143,`
          `),yi(144,`label`),sD(145,`Programmatically go to first/last page:`),Rc(),sD(146,`
          `),yi(147,`div`,36),sD(148,`
            `),yi(149,`button`,37),bp(`click`,function(){return r.goToFirstPage()}),sD(150,`
              `),Ip(151,`i`,38),sD(152,`
            `),Rc(),sD(153,`
            `),yi(154,`button`,39),bp(`click`,function(){return r.goToLastPage()}),sD(155,`
              `),Ip(156,`i`,40),sD(157,`
            `),Rc(),sD(158,`
          `),Rc(),sD(159,`
        `),Rc(),sD(160,`
      `),Rc(),sD(161,`
    `),Rc(),sD(162,`

    `),yi(163,`div`,41),sD(164,`
      `),yi(165,`div`,42),sD(166,`
        `),yi(167,`strong`),sD(168,`GraphQL Query:`),Rc(),sD(169,`
        `),Ip(170,`div`,43),sD(171,`
      `),Rc(),sD(172,`
    `),Rc(),sD(173,`
  `),Rc(),sD(174,`

  `),Ip(175,`hr`),sD(176,`
  `),yi(177,`angular-slickgrid`,44),bp(`onAngularGridCreated`,function(s){return r.angularGridReady(s.detail)})(`onGridStateChanged`,function(s){return r.gridStateChanged(s.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()}),sD(178,`
  `),Rc(),sD(179,`
`),Rc(),sD(180,`
`)),l&2&&(ly(71),ZI(r.status().class),ly(4),jc(` `,r.status().text,`
        `),ly(),Ep(`hidden`,!r.processing()),ly(27),Gp(`ngModel`,r.serverWaitDelay),tE(),ly(17),jc(`
            `,r.selectedLanguage()+`.json`,`
          `),ly(7),Ep(`value`,!1),ly(5),Ep(`value`,!0),ly(7),hI(r.metrics()?139:-1),ly(31),Ep(`innerHTML`,r.graphqlQuery,yv),ly(7),Ep(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[_W,Fn,Te,zt,Vn,$t,Pm],encapsulation:2})}}return c})();export{me as Example6Component};