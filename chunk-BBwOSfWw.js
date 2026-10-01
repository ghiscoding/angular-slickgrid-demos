import{t as r}from"./chunk-DarCEgGK.js";import{$ as Mp,Bn as lD,C as Ei,E as Fc,En as iD,Et as SI,H as Iv,K as Ky,N as Gp,_ as D,_t as QI,b as Dp,c as BE,cn as ay,ct as Oc,en as _D,er as pI,f as Bo,hn as dI,jt as Tp,kr as zp,qt as Xy,vt as QP,xr as wD,yt as Qp}from"./chunk-CtIlL7jI.js";import{O as Oe,Ot as xz,T as Lm,W as Zn,bt as rp,m as Gi,u as Dz,xt as uP}from"./chunk-C1NeHYCu.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-JBJUR4DQ.js";import{t as A}from"./chunk-m4ClN0vS.js";function U(c,X){if(c&1&&(iD(0,`
        `),Ei(1,`div`,45),iD(2,`
          `),Ei(3,`b`),iD(4,`Metrics:`),Oc(),iD(5),wD(6,`date`),Oc(),iD(7,`
      `)),c&2){let n=SI();ay(5),Gp(` `,_D(6,3,n.metrics()?.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,n.metrics()?.executionTime,`ms |
          `,n.metrics()?.totalItemCount,` items
        `)}}var $=20;var E=`users`;var J=`gridStateGraphql`;var V=250;var me=(()=>{class c{constructor(){this.cd=D(QP),this.translate=D(Gi),this.subscriptions=[],this.dataset=[],this.metrics=Bo(void 0),this.hideSubTitle=!1,this.isWithCursor=!1,this.graphqlQuery=``,this.processing=Bo(!0),this.status=Bo({text:`processing...`,class:`alert alert-danger`}),this.selectedLanguage=Bo(``),this.serverWaitDelay=V;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){Dz(this.subscriptions)}ngOnInit(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:rp.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,filter:{model:rp.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`,labelKey:`MALE`},{value:`female`,label:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:rp.multipleSelect,collection:[{value:`acme`,label:`Acme`},{value:`abc`,label:`Company ABC`},{value:`xyz`,label:`Company XYZ`}],options:{filter:!0}}},{id:`billingAddressStreet`,field:`billing.address.street`,nameKey:`BILLING.ADDRESS.STREET`,width:60,filterable:!0,sortable:!0,columnGroupKey:`BILLING.INFORMATION`},{id:`billingAddressZip`,field:`billing.address.zip`,nameKey:`BILLING.ADDRESS.ZIP`,width:60,type:`number`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,sortable:!0,filter:{model:rp.compoundInput},formatter:uP.multiple,params:{formatters:[uP.complexObject,uP.translate]}},{id:`finish`,field:`finish`,name:`Date`,formatter:uP.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,type:`date`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,filter:{model:rp.dateRange,filterShortcuts:[{titleKey:`NEXT_20_DAYS`,iconCssClass:`mdi mdi-calendar`,searchTerms:[Oe(new Date,`YYYY-MM-DD`),Oe(Zn(new Date,20),`YYYY-MM-DD`)]}]}}];let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.gridOptions={gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableFiltering:!0,enableCellNavigation:!0,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,i18n:this.translate,gridMenu:{resizeOnShowHeaderRow:!0,commandItems:[{iconCssClass:`mdi mdi-close text-danger`,title:`Reset Grid`,disabled:!1,command:`reset-grid`,positionOrder:60}],onCommand:(a,s)=>{s.command===`reset-grid`&&(this.angularGrid.gridService.resetGrid(this.columns),localStorage[J]=null)}},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:$,totalItems:0},presets:{columns:[{columnId:`name`,width:100},{columnId:`gender`,width:55},{columnId:`company`},{columnId:`billingAddressZip`},{columnId:`billingAddressStreet`,width:120},{columnId:`finish`,width:130}],filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}],sorters:[{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:new A,options:{datasetName:E,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],filterQueryOverride:({fieldName:a,columnDef:s,columnFilterOperator:S,searchValues:x})=>{if(S===`Custom`&&s?.id===`name`)return{field:a,operator:`Like`,value:x[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics.set(a.metrics),this.displaySpinner(!1)}}}}angularGridReady(n){this.angularGrid=n}displaySpinner(n){this.processing.set(n),this.status.set(n?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerApiCall(n){let l;if(this.angularGrid?.paginationService){let{paginationService:a}=this.angularGrid,s=a._initialized?a.getCurrentPageNumber():1,S=String.fromCharCode(65+s-1),x=String.fromCharCode(S.charCodeAt(0)+1);l={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:S,endCursor:x}}else l={hasPreviousPage:!1,hasNextPage:!0,startCursor:`A`,endCursor:`B`};let r={data:{[E]:{nodes:[],totalCount:100,pageInfo:l}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.angularGrid.backendService.buildQuery(),this.isWithCursor&&this.angularGrid?.paginationService?.setCursorPageInfo(r.data[E].pageInfo),a(r)},this.serverWaitDelay)})}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}gridStateChanged(n){console.log(`GraphQL Example, Grid State changed:: `,n),localStorage[J]=JSON.stringify(n.gridState)}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}saveCurrentGridState(){console.log(`GraphQL current grid state`,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`],operator:`=`},{columnId:`name`,searchTerms:[`Jane`],operator:`StartsWith`},{columnId:`company`,searchTerms:[`acme`],operator:`IN`},{columnId:`billingAddressZip`,searchTerms:[`11`],operator:`>=`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`billingAddressZip`,direction:`DESC`},{columnId:`company`,direction:`ASC`}])}resetToOriginalPresets(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}]),this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}]),setTimeout(()=>{this.angularGrid.paginationService?.changeItemPerPage(20),this.angularGrid.paginationService?.goToPageNumber(2)})}setIsWithCursor(n){return this.isWithCursor=n,this.resetOptions({useCursor:this.isWithCursor}),!0}resetOptions(n){this.displaySpinner(!0);let l=this.gridOptions.backendServiceApi.service;this.angularGrid.paginationService.setCursorBased(n.useCursor),l.updateOptions(n),this.gridOptions=r({},this.gridOptions),this.angularGrid.paginationService?.goToFirstPage()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=BE({type:c,selectors:[[`ng-component`]],decls:181,vars:13,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example06.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[1,`small`],[1,`red`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[`href`,`https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex`,`target`,`_blank`],[`href`,`https://stackoverflow.com/a/37981802/1212166`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`reset-presets`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`10px`],[`for`,`radioOffset`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`offset`,`id`,`radioOffset`,`checked`,``,3,`change`,`value`],[`for`,`radioCursor`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`cursor`,`id`,`radioCursor`,3,`change`,`value`],[1,`row`,`mb-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid6`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`]],template:function(l,r){l&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 6: Grid connected to Backend Server with GraphQL
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return r.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`
  `),Ei(18,`div`,6),iD(19,`
    Sorting/Paging connected to a Backend GraphQL Service (`),Ei(20,`a`,7),iD(21,`Wiki docs`),Oc(),iD(22,`).
    `),Tp(23,`br`),iD(24,`
    `),Ei(25,`ul`,8),iD(26,`
      `),Ei(27,`li`)(28,`span`,9),iD(29,`(*) NO DATA SHOWING`),Oc(),iD(30,` - just change Filters & Pages and look at the "GraphQL Query" changing :)`),Oc(),iD(31,`
      `),Ei(32,`li`),iD(33,`This example also demos the Grid State feature, open the console log to see the changes`),Oc(),iD(34,`
      `),Ei(35,`li`),iD(36,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Oc(),iD(37,`
      `),Ei(38,`ul`),iD(39,`
        `),Ei(40,`li`),iD(41,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Oc(),iD(42,`
        `),Ei(43,`li`),iD(44,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Oc(),iD(45,`
      `),Oc(),iD(46,`
      `),Ei(47,`li`),iD(48,`
        You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
        `),Ei(49,`a`,10),iD(50,`Wiki - Grid Preset`),Oc(),iD(51,`
      `),Oc(),iD(52,`
      `),Ei(53,`li`),iD(54,`
        Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.
      `),Oc(),iD(55,`
      `),Ei(56,`li`),iD(57,`
        Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura
        `),Ei(58,`a`,11),iD(59,`_regex`),Oc(),iD(60,`) or you
        could add your own implementation (e.g. see this SO `),Ei(61,`a`,12),iD(62,`Question`),Oc(),iD(63,`).
      `),Oc(),iD(64,`
    `),Oc(),iD(65,`
  `),Oc(),iD(66,`

  `),Ei(67,`div`,13),iD(68,`
    `),Ei(69,`div`,14),iD(70,`
      `),Ei(71,`div`,15),iD(72,`
        `),Ei(73,`strong`),iD(74,`Status: `),Oc(),iD(75),Ei(76,`span`,16),iD(77,`
          `),Tp(78,`i`,17),iD(79,`
        `),Oc(),iD(80,`
      `),Oc(),iD(81,`

      `),Ei(82,`div`,13),iD(83,`
        `),Ei(84,`div`,18),iD(85,`
          `),Ei(86,`button`,19),Mp(`click`,function(){return r.clearAllFiltersAndSorts()}),iD(87,`
            `),Tp(88,`i`,20),iD(89,`
            Clear all Filter & Sorts
          `),Oc(),iD(90,`
          `),Ei(91,`button`,21),Mp(`click`,function(){return r.setFiltersDynamically()}),iD(92,`
            Set Filters Dynamically
          `),Oc(),iD(93,`
          `),Ei(94,`button`,22),Mp(`click`,function(){return r.setSortingDynamically()}),iD(95,`
            Set Sorting Dynamically
          `),Oc(),iD(96,`
          `),Ei(97,`button`,23),Mp(`click`,function(){return r.resetToOriginalPresets()}),iD(98,`
            Reset Original Presets
          `),Oc(),iD(99,`
          `),Ei(100,`label`,24),iD(101,`Server Delay: `),Oc(),iD(102,`
          `),Ei(103,`input`,25),Ky(),Qp(`ngModelChange`,function(s){return lD(r.serverWaitDelay,s)||(r.serverWaitDelay=s),s}),Oc(),iD(104,`
        `),Oc(),iD(105,`
      `),Oc(),iD(106,`
      `),Ei(107,`div`,26),iD(108,`
        `),Ei(109,`div`,18),iD(110,`
          `),Ei(111,`button`,27),Mp(`click`,function(){return r.switchLanguage()}),iD(112,`
            `),Tp(113,`i`,28),iD(114,`
            Switch Language
          `),Oc(),iD(115,`
          `),Ei(116,`strong`),iD(117,`Locale:`),Oc(),iD(118,`
          `),Ei(119,`span`,29),iD(120),Oc(),iD(121,`
        `),Oc(),iD(122,`

        `),Ei(123,`span`,30),iD(124,`
          `),Ei(125,`label`,31),iD(126,`
            `),Ei(127,`input`,32),Mp(`change`,function(){return r.setIsWithCursor(!1)}),Oc(),iD(128,`
            Offset
          `),Oc(),iD(129,`
          `),Ei(130,`label`,33),iD(131,`
            `),Ei(132,`input`,34),Mp(`change`,function(){return r.setIsWithCursor(!0)}),Oc(),iD(133,`
            Cursor
          `),Oc(),iD(134,`
        `),Oc(),iD(135,`
      `),Oc(),iD(136,`
      `),Tp(137,`br`),iD(138,`
      `),dI(139,U,8,6),Ei(140,`div`,35),iD(141,`
        `),Ei(142,`div`,18),iD(143,`
          `),Ei(144,`label`),iD(145,`Programmatically go to first/last page:`),Oc(),iD(146,`
          `),Ei(147,`div`,36),iD(148,`
            `),Ei(149,`button`,37),Mp(`click`,function(){return r.goToFirstPage()}),iD(150,`
              `),Tp(151,`i`,38),iD(152,`
            `),Oc(),iD(153,`
            `),Ei(154,`button`,39),Mp(`click`,function(){return r.goToLastPage()}),iD(155,`
              `),Tp(156,`i`,40),iD(157,`
            `),Oc(),iD(158,`
          `),Oc(),iD(159,`
        `),Oc(),iD(160,`
      `),Oc(),iD(161,`
    `),Oc(),iD(162,`

    `),Ei(163,`div`,41),iD(164,`
      `),Ei(165,`div`,42),iD(166,`
        `),Ei(167,`strong`),iD(168,`GraphQL Query:`),Oc(),iD(169,`
        `),Tp(170,`div`,43),iD(171,`
      `),Oc(),iD(172,`
    `),Oc(),iD(173,`
  `),Oc(),iD(174,`

  `),Tp(175,`hr`),iD(176,`
  `),Ei(177,`angular-slickgrid`,44),Mp(`onAngularGridCreated`,function(s){return r.angularGridReady(s.detail)})(`onGridStateChanged`,function(s){return r.gridStateChanged(s.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()}),iD(178,`
  `),Oc(),iD(179,`
`),Oc(),iD(180,`
`)),l&2&&(ay(71),QI(r.status().class),ay(4),Fc(` `,r.status().text,`
        `),ay(),Dp(`hidden`,!r.processing()),ay(27),zp(`ngModel`,r.serverWaitDelay),Xy(),ay(17),Fc(`
            `,r.selectedLanguage()+`.json`,`
          `),ay(7),Dp(`value`,!1),ay(5),Dp(`value`,!0),ay(7),pI(r.metrics()?139:-1),ay(31),Dp(`innerHTML`,r.graphqlQuery,Iv),ay(7),Dp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[xz,In,Ge,zt,Dn,qt,Lm],encapsulation:2})}}return c})();export{me as Example6Component};