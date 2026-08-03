import{t as r}from"./chunk-DarCEgGK.js";import{Er as zE,Fn as mp,Gt as bD,Hn as oD,L as Lc,P as Kv,Pt as Xv,Rn as my,T as Hp,Wt as av,Z as NE,Zt as cD,b as Fo,dn as gi,fr as wD,g as Dp,l as BI,m as D,n as $p,nt as OP,on as fE,pn as gp,tn as dE,u as Bp,yr as xc}from"./chunk-B0w5H0p9.js";import{C as K1,F as Te,S as JN,gt as q1,kt as zp,ot as ji,w as Kn,x as Iu}from"./chunk-C7G4ZLh2.js";import{_ as je,b as zt,c as Cn,l as En,v as qt}from"./main-INAAVGOX.js";import{t as A}from"./chunk-DL_xewK9.js";function U(c,X){if(c&1&&(oD(0,`
        `),gi(1,`div`,45),oD(2,`
          `),gi(3,`b`),oD(4,`Metrics:`),xc(),oD(5),wD(6,`date`),xc(),oD(7,`
      `)),c&2){let n,l=NE();av(5),Hp(` `,bD(6,3,(n=l.metrics())==null?null:n.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,l.metrics()?.executionTime,`ms |
          `,l.metrics()?.totalItemCount,` items
        `)}}var $=20;var E=`users`;var J=`gridStateGraphql`;var V=250;var me=(()=>{class c{constructor(){this.cd=D(OP),this.translate=D(ji),this.subscriptions=[],this.dataset=[],this.metrics=Fo(void 0),this.hideSubTitle=!1,this.isWithCursor=!1,this.graphqlQuery=``,this.processing=Fo(!0),this.status=Fo({text:`processing...`,class:`alert alert-danger`}),this.selectedLanguage=Fo(``),this.serverWaitDelay=V;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){K1(this.subscriptions)}ngOnInit(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:Iu.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,filter:{model:Iu.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`,labelKey:`MALE`},{value:`female`,label:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,columnGroupKey:`CUSTOMER_INFORMATION`,sortable:!0,filterable:!0,filter:{model:Iu.multipleSelect,collection:[{value:`acme`,label:`Acme`},{value:`abc`,label:`Company ABC`},{value:`xyz`,label:`Company XYZ`}],options:{filter:!0}}},{id:`billingAddressStreet`,field:`billing.address.street`,nameKey:`BILLING.ADDRESS.STREET`,width:60,filterable:!0,sortable:!0,columnGroupKey:`BILLING.INFORMATION`},{id:`billingAddressZip`,field:`billing.address.zip`,nameKey:`BILLING.ADDRESS.ZIP`,width:60,type:`number`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,sortable:!0,filter:{model:Iu.compoundInput},formatter:JN.multiple,params:{formatters:[JN.complexObject,JN.translate]}},{id:`finish`,field:`finish`,name:`Date`,formatter:JN.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,type:`date`,columnGroupKey:`BILLING.INFORMATION`,filterable:!0,filter:{model:Iu.dateRange,filterShortcuts:[{titleKey:`NEXT_20_DAYS`,iconCssClass:`mdi mdi-calendar`,searchTerms:[Te(new Date,`YYYY-MM-DD`),Te(Kn(new Date,20),`YYYY-MM-DD`)]}]}}];let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.gridOptions={gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableFiltering:!0,enableCellNavigation:!0,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,i18n:this.translate,gridMenu:{resizeOnShowHeaderRow:!0,commandItems:[{iconCssClass:`mdi mdi-close text-danger`,title:`Reset Grid`,disabled:!1,command:`reset-grid`,positionOrder:60}],onCommand:(a,s)=>{s.command===`reset-grid`&&(this.angularGrid.gridService.resetGrid(this.columns),localStorage[J]=null)}},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:$,totalItems:0},presets:{columns:[{columnId:`name`,width:100},{columnId:`gender`,width:55},{columnId:`company`},{columnId:`billingAddressZip`},{columnId:`billingAddressStreet`,width:120},{columnId:`finish`,width:130}],filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}],sorters:[{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:new A,options:{datasetName:E,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],filterQueryOverride:({fieldName:a,columnDef:s,columnFilterOperator:S,searchValues:x})=>{if(S===`Custom`&&s?.id===`name`)return{field:a,operator:`Like`,value:x[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics.set(a.metrics),this.displaySpinner(!1)}}}}angularGridReady(n){this.angularGrid=n}displaySpinner(n){this.processing.set(n),this.status.set(n?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerApiCall(n){let l;if(this.angularGrid?.paginationService){let{paginationService:a}=this.angularGrid,s=a._initialized?a.getCurrentPageNumber():1,S=String.fromCharCode(65+s-1),x=String.fromCharCode(S.charCodeAt(0)+1);l={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:S,endCursor:x}}else l={hasPreviousPage:!1,hasNextPage:!0,startCursor:`A`,endCursor:`B`};let r={data:{[E]:{nodes:[],totalCount:100,pageInfo:l}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.angularGrid.backendService.buildQuery(),this.isWithCursor&&this.angularGrid?.paginationService?.setCursorPageInfo(r.data[E].pageInfo),a(r)},this.serverWaitDelay)})}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}gridStateChanged(n){console.log(`GraphQL Example, Grid State changed:: `,n),localStorage[J]=JSON.stringify(n.gridState)}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}saveCurrentGridState(){console.log(`GraphQL current grid state`,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`],operator:`=`},{columnId:`name`,searchTerms:[`Jane`],operator:`StartsWith`},{columnId:`company`,searchTerms:[`acme`],operator:`IN`},{columnId:`billingAddressZip`,searchTerms:[`11`],operator:`>=`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`billingAddressZip`,direction:`DESC`},{columnId:`company`,direction:`ASC`}])}resetToOriginalPresets(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:`gender`,searchTerms:[`male`],operator:`=`},{columnId:`name`,searchTerms:[`Joh*oe`],operator:`StartsWithEndsWith`},{columnId:`company`,searchTerms:[`xyz`],operator:`IN`},{columnId:`finish`,searchTerms:[l,r],operator:`RangeInclusive`}]),this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`asc`},{columnId:`company`,direction:`DESC`}]),setTimeout(()=>{this.angularGrid.paginationService?.changeItemPerPage(20),this.angularGrid.paginationService?.goToPageNumber(2)})}setIsWithCursor(n){return this.isWithCursor=n,this.resetOptions({useCursor:this.isWithCursor}),!0}resetOptions(n){this.displaySpinner(!0);let l=this.gridOptions.backendServiceApi.service;this.angularGrid.paginationService.setCursorBased(n.useCursor),l.updateOptions(n),this.gridOptions=r({},this.gridOptions),this.angularGrid.paginationService?.goToFirstPage()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=BI({type:c,selectors:[[`ng-component`]],decls:181,vars:13,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example06.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[1,`small`],[1,`red`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[`href`,`https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex`,`target`,`_blank`],[`href`,`https://stackoverflow.com/a/37981802/1212166`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`reset-presets`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`10px`],[`for`,`radioOffset`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`offset`,`id`,`radioOffset`,`checked`,``,3,`change`,`value`],[`for`,`radioCursor`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`cursor`,`id`,`radioCursor`,3,`change`,`value`],[1,`row`,`mb-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid6`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`]],template:function(l,r){l&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 6: Grid connected to Backend Server with GraphQL
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return r.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`
  `),gi(18,`div`,6),oD(19,`
    Sorting/Paging connected to a Backend GraphQL Service (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`).
    `),mp(23,`br`),oD(24,`
    `),gi(25,`ul`,8),oD(26,`
      `),gi(27,`li`)(28,`span`,9),oD(29,`(*) NO DATA SHOWING`),xc(),oD(30,` - just change Filters & Pages and look at the "GraphQL Query" changing :)`),xc(),oD(31,`
      `),gi(32,`li`),oD(33,`This example also demos the Grid State feature, open the console log to see the changes`),xc(),oD(34,`
      `),gi(35,`li`),oD(36,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),xc(),oD(37,`
      `),gi(38,`ul`),oD(39,`
        `),gi(40,`li`),oD(41,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),xc(),oD(42,`
        `),gi(43,`li`),oD(44,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),xc(),oD(45,`
      `),xc(),oD(46,`
      `),gi(47,`li`),oD(48,`
        You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
        `),gi(49,`a`,10),oD(50,`Wiki - Grid Preset`),xc(),oD(51,`
      `),xc(),oD(52,`
      `),gi(53,`li`),oD(54,`
        Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.
      `),xc(),oD(55,`
      `),gi(56,`li`),oD(57,`
        Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura
        `),gi(58,`a`,11),oD(59,`_regex`),xc(),oD(60,`) or you
        could add your own implementation (e.g. see this SO `),gi(61,`a`,12),oD(62,`Question`),xc(),oD(63,`).
      `),xc(),oD(64,`
    `),xc(),oD(65,`
  `),xc(),oD(66,`

  `),gi(67,`div`,13),oD(68,`
    `),gi(69,`div`,14),oD(70,`
      `),gi(71,`div`,15),oD(72,`
        `),gi(73,`strong`),oD(74,`Status: `),xc(),oD(75),gi(76,`span`,16),oD(77,`
          `),mp(78,`i`,17),oD(79,`
        `),xc(),oD(80,`
      `),xc(),oD(81,`

      `),gi(82,`div`,13),oD(83,`
        `),gi(84,`div`,18),oD(85,`
          `),gi(86,`button`,19),Dp(`click`,function(){return r.clearAllFiltersAndSorts()}),oD(87,`
            `),mp(88,`i`,20),oD(89,`
            Clear all Filter & Sorts
          `),xc(),oD(90,`
          `),gi(91,`button`,21),Dp(`click`,function(){return r.setFiltersDynamically()}),oD(92,`
            Set Filters Dynamically
          `),xc(),oD(93,`
          `),gi(94,`button`,22),Dp(`click`,function(){return r.setSortingDynamically()}),oD(95,`
            Set Sorting Dynamically
          `),xc(),oD(96,`
          `),gi(97,`button`,23),Dp(`click`,function(){return r.resetToOriginalPresets()}),oD(98,`
            Reset Original Presets
          `),xc(),oD(99,`
          `),gi(100,`label`,24),oD(101,`Server Delay: `),xc(),oD(102,`
          `),gi(103,`input`,25),$p(`ngModelChange`,function(s){return cD(r.serverWaitDelay,s)||(r.serverWaitDelay=s),s}),xc(),Kv(),oD(104,`
        `),xc(),oD(105,`
      `),xc(),oD(106,`
      `),gi(107,`div`,26),oD(108,`
        `),gi(109,`div`,18),oD(110,`
          `),gi(111,`button`,27),Dp(`click`,function(){return r.switchLanguage()}),oD(112,`
            `),mp(113,`i`,28),oD(114,`
            Switch Language
          `),xc(),oD(115,`
          `),gi(116,`strong`),oD(117,`Locale:`),xc(),oD(118,`
          `),gi(119,`span`,29),oD(120),xc(),oD(121,`
        `),xc(),oD(122,`

        `),gi(123,`span`,30),oD(124,`
          `),gi(125,`label`,31),oD(126,`
            `),gi(127,`input`,32),Dp(`change`,function(){return r.setIsWithCursor(!1)}),xc(),oD(128,`
            Offset
          `),xc(),oD(129,`
          `),gi(130,`label`,33),oD(131,`
            `),gi(132,`input`,34),Dp(`change`,function(){return r.setIsWithCursor(!0)}),xc(),oD(133,`
            Cursor
          `),xc(),oD(134,`
        `),xc(),oD(135,`
      `),xc(),oD(136,`
      `),mp(137,`br`),oD(138,`
      `),dE(139,U,8,6),gi(140,`div`,35),oD(141,`
        `),gi(142,`div`,18),oD(143,`
          `),gi(144,`label`),oD(145,`Programmatically go to first/last page:`),xc(),oD(146,`
          `),gi(147,`div`,36),oD(148,`
            `),gi(149,`button`,37),Dp(`click`,function(){return r.goToFirstPage()}),oD(150,`
              `),mp(151,`i`,38),oD(152,`
            `),xc(),oD(153,`
            `),gi(154,`button`,39),Dp(`click`,function(){return r.goToLastPage()}),oD(155,`
              `),mp(156,`i`,40),oD(157,`
            `),xc(),oD(158,`
          `),xc(),oD(159,`
        `),xc(),oD(160,`
      `),xc(),oD(161,`
    `),xc(),oD(162,`

    `),gi(163,`div`,41),oD(164,`
      `),gi(165,`div`,42),oD(166,`
        `),gi(167,`strong`),oD(168,`GraphQL Query:`),xc(),oD(169,`
        `),mp(170,`div`,43),oD(171,`
      `),xc(),oD(172,`
    `),xc(),oD(173,`
  `),xc(),oD(174,`

  `),mp(175,`hr`),oD(176,`
  `),gi(177,`angular-slickgrid`,44),Dp(`onAngularGridCreated`,function(s){return r.angularGridReady(s.detail)})(`onGridStateChanged`,function(s){return r.gridStateChanged(s.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()}),oD(178,`
  `),xc(),oD(179,`
`),xc(),oD(180,`
`)),l&2&&(av(71),zE(r.status().class),av(4),Lc(` `,r.status().text,`
        `),av(),gp(`hidden`,!r.processing()),av(27),Bp(`ngModel`,r.serverWaitDelay),Xv(),av(17),Lc(`
            `,r.selectedLanguage()+`.json`,`
          `),av(7),gp(`value`,!1),av(5),gp(`value`,!0),av(7),fE(r.metrics()?139:-1),av(31),gp(`innerHTML`,r.graphqlQuery,my),av(7),gp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[q1,En,je,zt,Cn,qt,zp],encapsulation:2})}}return c})();export{me as Example6Component};