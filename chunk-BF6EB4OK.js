import{a as H}from"./chunk-3CNIU24U.js";import{b as F,c as W,f as R,h as Q,o as Y}from"./chunk-ZTHMMPCT.js";import{Ca as z,Da as B,fa as K,ga as y,n as M,u as q,wa as p,za as h}from"./chunk-IBXCHNN7.js";import{Aa as o,Jb as k,Kb as e,Mb as f,Ob as A,Pa as C,Pb as D,Qb as L,Rb as O,U as b,_b as N,ac as w,db as I,eb as T,ia as g,ib as u,jb as i,kb as t,lb as d,mc as P,vb as m,xa as _,xb as G}from"./chunk-XXRVAQWA.js";import{a as v}from"./chunk-PRARYYF3.js";function j(c,$){if(c&1&&(e(0,`
        `),i(1,"div",45),e(2,`
          `),i(3,"b"),e(4,"Metrics:"),t(),e(5),N(6,"date"),t(),e(7,`
      `)),c&2){let n,l=G();o(5),A(" ",w(6,3,(n=l.metrics())==null?null:n.endTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",(n=l.metrics())==null?null:n.executionTime,`ms |
          `,(n=l.metrics())==null?null:n.totalItemCount,` items
        `)}}var J=20,E="users",Z="gridStateGraphql",U=250,oe=(()=>{class c{constructor(){this.cd=b(P),this.translate=b(q),this.subscriptions=[],this.dataset=[],this.metrics=g(void 0),this.hideSubTitle=!1,this.isWithCursor=!1,this.graphqlQuery="",this.processing=g(!0),this.status=g({text:"processing...",class:"alert alert-danger"}),this.selectedLanguage=g(""),this.serverWaitDelay=U;let n="en";this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){z(this.subscriptions)}ngOnInit(){this.columnDefinitions=[{id:"name",field:"name",nameKey:"NAME",width:60,columnGroupKey:"CUSTOMER_INFORMATION",sortable:!0,filterable:!0,filter:{model:p.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:!0,sortable:!0,width:60,columnGroupKey:"CUSTOMER_INFORMATION",filter:{model:p.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male",labelKey:"MALE"},{value:"female",label:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,columnGroupKey:"CUSTOMER_INFORMATION",sortable:!0,filterable:!0,filter:{model:p.multipleSelect,collection:[{value:"acme",label:"Acme"},{value:"abc",label:"Company ABC"},{value:"xyz",label:"Company XYZ"}],options:{filter:!0}}},{id:"billingAddressStreet",field:"billing.address.street",nameKey:"BILLING.ADDRESS.STREET",width:60,filterable:!0,sortable:!0,columnGroupKey:"BILLING.INFORMATION"},{id:"billingAddressZip",field:"billing.address.zip",nameKey:"BILLING.ADDRESS.ZIP",width:60,type:"number",columnGroupKey:"BILLING.INFORMATION",filterable:!0,sortable:!0,filter:{model:p.compoundInput},formatter:h.multiple,params:{formatters:[h.complexObject,h.translate]}},{id:"finish",field:"finish",name:"Date",formatter:h.dateIso,sortable:!0,minWidth:90,width:120,exportWithFormatter:!0,type:"date",columnGroupKey:"BILLING.INFORMATION",filterable:!0,filter:{model:p.dateRange,filterShortcuts:[{titleKey:"NEXT_20_DAYS",iconCssClass:"mdi mdi-calendar",searchTerms:[y(new Date,"YYYY-MM-DD"),y(K(new Date,20),"YYYY-MM-DD")]}]}}];let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.gridOptions={gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},enableFiltering:!0,enableCellNavigation:!0,enableTranslate:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,i18n:this.translate,gridMenu:{resizeOnShowHeaderRow:!0,commandItems:[{iconCssClass:"mdi mdi-close text-danger",title:"Reset Grid",disabled:!1,command:"reset-grid",positionOrder:60}],onCommand:(a,s)=>{s.command==="reset-grid"&&(this.angularGrid.gridService.resetGrid(this.columnDefinitions),localStorage[Z]=null)}},enablePagination:!0,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:J,totalItems:0},presets:{columns:[{columnId:"name",width:100},{columnId:"gender",width:55},{columnId:"company"},{columnId:"billingAddressZip"},{columnId:"billingAddressStreet",width:120},{columnId:"finish",width:130}],filters:[{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[l,r],operator:"RangeInclusive"}],sorters:[{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:new H,options:{datasetName:E,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],filterQueryOverride:({fieldName:a,columnDef:s,columnFilterOperator:S,searchValues:x})=>{if(S==="Custom"&&s?.id==="name")return{field:a,operator:"Like",value:x[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:!0},preProcess:()=>this.displaySpinner(!0),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics.set(a.metrics),this.displaySpinner(!1)}}}}angularGridReady(n){this.angularGrid=n}displaySpinner(n){this.processing.set(n),this.status.set(n?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"})}getCustomerApiCall(n){let l;if(this.angularGrid?.paginationService){let{paginationService:a}=this.angularGrid,s=a._initialized?a.getCurrentPageNumber():1,S=String.fromCharCode(65+s-1),x=String.fromCharCode(S.charCodeAt(0)+1);l={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:S,endCursor:x}}else l={hasPreviousPage:!1,hasNextPage:!0,startCursor:"A",endCursor:"B"};let r={data:{[E]:{nodes:[],totalCount:100,pageInfo:l}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.angularGrid.backendService.buildQuery(),this.isWithCursor&&this.angularGrid?.paginationService?.setCursorPageInfo(r.data[E].pageInfo),a(r)},this.serverWaitDelay)})}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}gridStateChanged(n){console.log("GraphQL Example, Grid State changed:: ",n),localStorage[Z]=JSON.stringify(n.gridState)}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}saveCurrentGridState(){console.log("GraphQL current grid state",this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["female"],operator:"="},{columnId:"name",searchTerms:["Jane"],operator:"StartsWith"},{columnId:"company",searchTerms:["acme"],operator:"IN"},{columnId:"billingAddressZip",searchTerms:["11"],operator:">="},{columnId:"finish",searchTerms:[l,r],operator:"RangeInclusive"}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}])}resetToOriginalPresets(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[l,r],operator:"RangeInclusive"}]),this.angularGrid.sortService.updateSorting([{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}]),setTimeout(()=>{this.angularGrid.paginationService?.changeItemPerPage(20),this.angularGrid.paginationService?.goToPageNumber(2)})}setIsWithCursor(n){return this.isWithCursor=n,this.resetOptions({useCursor:this.isWithCursor}),!0}resetOptions(n){this.displaySpinner(!0);let l=this.gridOptions.backendServiceApi.service;this.angularGrid.paginationService.setCursorBased(n.useCursor),l.updateOptions(n),this.gridOptions=v({},this.gridOptions),this.angularGrid.paginationService?.goToFirstPage()}switchLanguage(){let n=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(l){return new(l||c)}}static{this.\u0275cmp=C({type:c,selectors:[["ng-component"]],decls:181,vars:13,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example06.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql","target","_blank"],[1,"small"],[1,"red"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset","target","_blank"],["href","https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex","target","_blank"],["href","https://stackoverflow.com/a/37981802/1212166"],[1,"row"],[1,"col-sm-5"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-md-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-filter-remove-outline"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","reset-presets",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","serverdelay",1,"ml-4"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"width","55px",3,"ngModelChange","ngModel"],[1,"row","mt-1"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[2,"margin-left","10px"],["for","radioOffset",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","data-test","offset","id","radioOffset","checked","",3,"change","value"],["for","radioCursor",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","data-test","cursor","id","radioCursor",3,"change","value"],[1,"row","mb-2"],["role","group",1,"btn-group"],["data-test","goto-first-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-first"],["data-test","goto-last-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-last"],[1,"col-sm-7"],["data-test","alert-graphql-query",1,"alert","alert-info"],["data-test","graphql-query-result",3,"innerHTML"],["gridId","grid6",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","columns","options","dataset"],[2,"margin","10px 0px"]],template:function(l,r){l&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 6: Grid connected to Backend Server with GraphQL
    `),i(4,"span",1),e(5,`
      `),i(6,"a",2),e(7,`
        `),d(8,"span",3),e(9,` code
      `),t(),e(10,`
    `),t(),e(11,`
    `),i(12,"button",4),m("click",function(){return r.toggleSubTitle()}),e(13,`
      `),d(14,"span",5),e(15,`
    `),t(),e(16,`
  `),t(),e(17,`
  `),i(18,"div",6),e(19,`
    Sorting/Paging connected to a Backend GraphQL Service (`),i(20,"a",7),e(21,"Wiki docs"),t(),e(22,`).
    `),d(23,"br"),e(24,`
    `),i(25,"ul",8),e(26,`
      `),i(27,"li")(28,"span",9),e(29,"(*) NO DATA SHOWING"),t(),e(30,' - just change Filters & Pages and look at the "GraphQL Query" changing :)'),t(),e(31,`
      `),i(32,"li"),e(33,"This example also demos the Grid State feature, open the console log to see the changes"),t(),e(34,`
      `),i(35,"li"),e(36,"String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)"),t(),e(37,`
      `),i(38,"ul"),e(39,`
        `),i(40,"li"),e(41,'The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")'),t(),e(42,`
        `),i(43,"li"),e(44,'The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)'),t(),e(45,`
      `),t(),e(46,`
      `),i(47,"li"),e(48,`
        You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
        `),i(49,"a",10),e(50,"Wiki - Grid Preset"),t(),e(51,`
      `),t(),e(52,`
      `),i(53,"li"),e(54,`
        Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.
      `),t(),e(55,`
      `),i(56,"li"),e(57,`
        Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura
        `),i(58,"a",11),e(59,"_regex"),t(),e(60,`) or you
        could add your own implementation (e.g. see this SO `),i(61,"a",12),e(62,"Question"),t(),e(63,`).
      `),t(),e(64,`
    `),t(),e(65,`
  `),t(),e(66,`

  `),i(67,"div",13),e(68,`
    `),i(69,"div",14),e(70,`
      `),i(71,"div",15),e(72,`
        `),i(73,"strong"),e(74,"Status: "),t(),e(75),i(76,"span",16),e(77,`
          `),d(78,"i",17),e(79,`
        `),t(),e(80,`
      `),t(),e(81,`

      `),i(82,"div",13),e(83,`
        `),i(84,"div",18),e(85,`
          `),i(86,"button",19),m("click",function(){return r.clearAllFiltersAndSorts()}),e(87,`
            `),d(88,"i",20),e(89,`
            Clear all Filter & Sorts
          `),t(),e(90,`
          `),i(91,"button",21),m("click",function(){return r.setFiltersDynamically()}),e(92,`
            Set Filters Dynamically
          `),t(),e(93,`
          `),i(94,"button",22),m("click",function(){return r.setSortingDynamically()}),e(95,`
            Set Sorting Dynamically
          `),t(),e(96,`
          `),i(97,"button",23),m("click",function(){return r.resetToOriginalPresets()}),e(98,`
            Reset Original Presets
          `),t(),e(99,`
          `),i(100,"label",24),e(101,"Server Delay: "),t(),e(102,`
          `),i(103,"input",25),O("ngModelChange",function(s){return L(r.serverWaitDelay,s)||(r.serverWaitDelay=s),s}),t(),e(104,`
        `),t(),e(105,`
      `),t(),e(106,`
      `),i(107,"div",26),e(108,`
        `),i(109,"div",18),e(110,`
          `),i(111,"button",27),m("click",function(){return r.switchLanguage()}),e(112,`
            `),d(113,"i",28),e(114,`
            Switch Language
          `),t(),e(115,`
          `),i(116,"strong"),e(117,"Locale:"),t(),e(118,`
          `),i(119,"span",29),e(120),t(),e(121,`
        `),t(),e(122,`

        `),i(123,"span",30),e(124,`
          `),i(125,"label",31),e(126,`
            `),i(127,"input",32),m("change",function(){return r.setIsWithCursor(!1)}),t(),e(128,`
            Offset
          `),t(),e(129,`
          `),i(130,"label",33),e(131,`
            `),i(132,"input",34),m("change",function(){return r.setIsWithCursor(!0)}),t(),e(133,`
            Cursor
          `),t(),e(134,`
        `),t(),e(135,`
      `),t(),e(136,`
      `),d(137,"br"),e(138,`
      `),I(139,j,8,6),i(140,"div",35),e(141,`
        `),i(142,"div",18),e(143,`
          `),i(144,"label"),e(145,"Programmatically go to first/last page:"),t(),e(146,`
          `),i(147,"div",36),e(148,`
            `),i(149,"button",37),m("click",function(){return r.goToFirstPage()}),e(150,`
              `),d(151,"i",38),e(152,`
            `),t(),e(153,`
            `),i(154,"button",39),m("click",function(){return r.goToLastPage()}),e(155,`
              `),d(156,"i",40),e(157,`
            `),t(),e(158,`
          `),t(),e(159,`
        `),t(),e(160,`
      `),t(),e(161,`
    `),t(),e(162,`

    `),i(163,"div",41),e(164,`
      `),i(165,"div",42),e(166,`
        `),i(167,"strong"),e(168,"GraphQL Query:"),t(),e(169,`
        `),d(170,"div",43),e(171,`
      `),t(),e(172,`
    `),t(),e(173,`
  `),t(),e(174,`

  `),d(175,"hr"),e(176,`
  `),i(177,"angular-slickgrid",44),m("onAngularGridCreated",function(s){return r.angularGridReady(s.detail)})("onGridStateChanged",function(s){return r.gridStateChanged(s.detail)})("onBeforeGridDestroy",function(){return r.saveCurrentGridState()}),e(178,`
  `),t(),e(179,`
`),t(),e(180,`
`)),l&2&&(o(71),k(r.status().class),o(4),f(" ",r.status().text,`
        `),o(),u("hidden",!r.processing()),o(27),D("ngModel",r.serverWaitDelay),o(17),f(`
            `,r.selectedLanguage()+".json",`
          `),o(7),u("value",!1),o(5),u("value",!0),o(7),T(r.metrics()?139:-1),o(31),u("innerHTML",r.graphqlQuery,_),o(7),u("columns",r.columnDefinitions)("options",r.gridOptions)("dataset",r.dataset))},dependencies:[B,Y,F,Q,W,R,M],encapsulation:2})}}return c})();export{oe as Example6Component};
