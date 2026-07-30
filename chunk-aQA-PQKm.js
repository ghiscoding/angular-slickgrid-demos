import {A}from'./chunk-z8XK80Lx.js';import {D,v as vL,d as ji,A as Ao,U as U1,e as Tu,X as XN,w as Te,y as qn,r as r$1,_ as _I,j as j1,E as En,z as je,F as zt,G as Cn,I as qt,H as Hp,u as ui,q as qE,c as cp,T as Tc,p as pp,J as Rp,O as Lv,Y as YI,W as Wy,R as RE,i as Nc,a as ap,P as Ap,Q as jv,K as KI,g as cD,h as pE,m as xp,n as dD,S as QE,o as ty}from'./main-MR3B775B.js';function U(c,X){if(c&1&&(qE(0,`
        `),ui(1,"div",45),qE(2,`
          `),ui(3,"b"),qE(4,"Metrics:"),Tc(),qE(5),cD(6,"date"),Tc(),qE(7,`
      `)),c&2){let n,l=pE();Wy(5),xp(" ",dD(6,3,(n=l.metrics())==null?null:n.endTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",l.metrics()?.executionTime,`ms |
          `,l.metrics()?.totalItemCount,` items
        `);}}var $=20,E="users",J="gridStateGraphql",V=250,me=(()=>{class c{constructor(){this.cd=D(vL),this.translate=D(ji),this.subscriptions=[],this.dataset=[],this.metrics=Ao(void 0),this.hideSubTitle=false,this.isWithCursor=false,this.graphqlQuery="",this.processing=Ao(true),this.status=Ao({text:"processing...",class:"alert alert-danger"}),this.selectedLanguage=Ao(""),this.serverWaitDelay=V;let n="en";this.translate.use(n),this.selectedLanguage.set(n);}ngOnDestroy(){U1(this.subscriptions);}ngOnInit(){this.columns=[{id:"name",field:"name",nameKey:"NAME",width:60,columnGroupKey:"CUSTOMER_INFORMATION",sortable:true,filterable:true,filter:{model:Tu.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:true,sortable:true,width:60,columnGroupKey:"CUSTOMER_INFORMATION",filter:{model:Tu.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male",labelKey:"MALE"},{value:"female",label:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,columnGroupKey:"CUSTOMER_INFORMATION",sortable:true,filterable:true,filter:{model:Tu.multipleSelect,collection:[{value:"acme",label:"Acme"},{value:"abc",label:"Company ABC"},{value:"xyz",label:"Company XYZ"}],options:{filter:true}}},{id:"billingAddressStreet",field:"billing.address.street",nameKey:"BILLING.ADDRESS.STREET",width:60,filterable:true,sortable:true,columnGroupKey:"BILLING.INFORMATION"},{id:"billingAddressZip",field:"billing.address.zip",nameKey:"BILLING.ADDRESS.ZIP",width:60,type:"number",columnGroupKey:"BILLING.INFORMATION",filterable:true,sortable:true,filter:{model:Tu.compoundInput},formatter:XN.multiple,params:{formatters:[XN.complexObject,XN.translate]}},{id:"finish",field:"finish",name:"Date",formatter:XN.dateIso,sortable:true,minWidth:90,width:120,exportWithFormatter:true,type:"date",columnGroupKey:"BILLING.INFORMATION",filterable:true,filter:{model:Tu.dateRange,filterShortcuts:[{titleKey:"NEXT_20_DAYS",iconCssClass:"mdi mdi-calendar",searchTerms:[Te(new Date,"YYYY-MM-DD"),Te(qn(new Date,20),"YYYY-MM-DD")]}]}}];let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.gridOptions={gridHeight:200,gridWidth:900,compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},enableFiltering:true,enableCellNavigation:true,enableTranslate:true,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:28,i18n:this.translate,gridMenu:{resizeOnShowHeaderRow:true,commandItems:[{iconCssClass:"mdi mdi-close text-danger",title:"Reset Grid",disabled:false,command:"reset-grid",positionOrder:60}],onCommand:(a,s)=>{s.command==="reset-grid"&&(this.angularGrid.gridService.resetGrid(this.columns),localStorage[J]=null);}},enablePagination:true,pagination:{pageSizes:[10,15,20,25,30,40,50,75,100],pageSize:$,totalItems:0},presets:{columns:[{columnId:"name",width:100},{columnId:"gender",width:55},{columnId:"company"},{columnId:"billingAddressZip"},{columnId:"billingAddressStreet",width:120},{columnId:"finish",width:130}],filters:[{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[l,r],operator:"RangeInclusive"}],sorters:[{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}],pagination:{pageNumber:this.isWithCursor?1:2,pageSize:20}},backendServiceApi:{service:new A,options:{datasetName:E,addLocaleIntoQuery:true,extraQueryArguments:[{field:"userId",value:123}],filterQueryOverride:({fieldName:a,columnDef:s,columnFilterOperator:S,searchValues:x})=>{if(S==="Custom"&&s?.id==="name")return {field:a,operator:"Like",value:x[0]}},useCursor:this.isWithCursor,keepArgumentFieldDoubleQuotes:true},preProcess:()=>this.displaySpinner(true),process:a=>this.getCustomerApiCall(a),postProcess:a=>{this.metrics.set(a.metrics),this.displaySpinner(false);}}};}angularGridReady(n){this.angularGrid=n;}displaySpinner(n){this.processing.set(n),this.status.set(n?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"});}getCustomerApiCall(n){let l;if(this.angularGrid?.paginationService){let{paginationService:a}=this.angularGrid,s=a._initialized?a.getCurrentPageNumber():1,S=String.fromCharCode(65+s-1),x=String.fromCharCode(S.charCodeAt(0)+1);l={hasPreviousPage:a.dataFrom===0,hasNextPage:a.dataTo===100,startCursor:S,endCursor:x};}else l={hasPreviousPage:false,hasNextPage:true,startCursor:"A",endCursor:"B"};let r={data:{[E]:{nodes:[],totalCount:100,pageInfo:l}}};return new Promise(a=>{setTimeout(()=>{this.graphqlQuery=this.angularGrid.backendService.buildQuery(),this.isWithCursor&&this.angularGrid?.paginationService?.setCursorPageInfo(r.data[E].pageInfo),a(r);},this.serverWaitDelay);})}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage();}goToLastPage(){this.angularGrid.paginationService.goToLastPage();}gridStateChanged(n){console.log("GraphQL Example, Grid State changed:: ",n),localStorage[J]=JSON.stringify(n.gridState);}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts();}saveCurrentGridState(){console.log("GraphQL current grid state",this.angularGrid.gridStateService.getCurrentGridState());}setFiltersDynamically(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["female"],operator:"="},{columnId:"name",searchTerms:["Jane"],operator:"StartsWith"},{columnId:"company",searchTerms:["acme"],operator:"IN"},{columnId:"billingAddressZip",searchTerms:["11"],operator:">="},{columnId:"finish",searchTerms:[l,r],operator:"RangeInclusive"}]);}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"billingAddressZip",direction:"DESC"},{columnId:"company",direction:"ASC"}]);}resetToOriginalPresets(){let n=new Date().getFullYear(),l=`${n}-01-01`,r=`${n}-02-15`;this.angularGrid.filterService.updateFilters([{columnId:"gender",searchTerms:["male"],operator:"="},{columnId:"name",searchTerms:["Joh*oe"],operator:"StartsWithEndsWith"},{columnId:"company",searchTerms:["xyz"],operator:"IN"},{columnId:"finish",searchTerms:[l,r],operator:"RangeInclusive"}]),this.angularGrid.sortService.updateSorting([{columnId:"name",direction:"asc"},{columnId:"company",direction:"DESC"}]),setTimeout(()=>{this.angularGrid.paginationService?.changeItemPerPage(20),this.angularGrid.paginationService?.goToPageNumber(2);});}setIsWithCursor(n){return this.isWithCursor=n,this.resetOptions({useCursor:this.isWithCursor}),true}resetOptions(n){this.displaySpinner(true);let l=this.gridOptions.backendServiceApi.service;this.angularGrid.paginationService.setCursorBased(n.useCursor),l.updateOptions(n),this.gridOptions=r$1({},this.gridOptions),this.angularGrid.paginationService?.goToFirstPage();}switchLanguage(){let n=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n);}));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||c)};}static{this.\u0275cmp=_I({type:c,selectors:[["ng-component"]],decls:181,vars:13,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example06.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql","target","_blank"],[1,"small"],[1,"red"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset","target","_blank"],["href","https://hasura.io/docs/latest/queries/postgres/filters/text-search-operators/#_regex","target","_blank"],["href","https://stackoverflow.com/a/37981802/1212166"],[1,"row"],[1,"col-sm-5"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-md-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-filter-remove-outline"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","reset-presets",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","serverdelay",1,"ml-4"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"width","55px",3,"ngModelChange","ngModel"],[1,"row","mt-1"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[2,"margin-left","10px"],["for","radioOffset",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","data-test","offset","id","radioOffset","checked","",3,"change","value"],["for","radioCursor",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","data-test","cursor","id","radioCursor",3,"change","value"],[1,"row","mb-2"],["role","group",1,"btn-group"],["data-test","goto-first-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-first"],["data-test","goto-last-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-last"],[1,"col-sm-7"],["data-test","alert-graphql-query",1,"alert","alert-info"],["data-test","graphql-query-result",3,"innerHTML"],["gridId","grid6",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","columns","options","dataset"],[2,"margin","10px 0px"]],template:function(l,r){l&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 6: Grid connected to Backend Server with GraphQL
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return r.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`
  `),ui(18,"div",6),qE(19,`
    Sorting/Paging connected to a Backend GraphQL Service (`),ui(20,"a",7),qE(21,"Wiki docs"),Tc(),qE(22,`).
    `),cp(23,"br"),qE(24,`
    `),ui(25,"ul",8),qE(26,`
      `),ui(27,"li")(28,"span",9),qE(29,"(*) NO DATA SHOWING"),Tc(),qE(30,' - just change Filters & Pages and look at the "GraphQL Query" changing :)'),Tc(),qE(31,`
      `),ui(32,"li"),qE(33,"This example also demos the Grid State feature, open the console log to see the changes"),Tc(),qE(34,`
      `),ui(35,"li"),qE(36,"String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)"),Tc(),qE(37,`
      `),ui(38,"ul"),qE(39,`
        `),ui(40,"li"),qE(41,'The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")'),Tc(),qE(42,`
        `),ui(43,"li"),qE(44,'The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)'),Tc(),qE(45,`
      `),Tc(),qE(46,`
      `),ui(47,"li"),qE(48,`
        You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
        `),ui(49,"a",10),qE(50,"Wiki - Grid Preset"),Tc(),qE(51,`
      `),Tc(),qE(52,`
      `),ui(53,"li"),qE(54,`
        Also note that the column Name has a filter with a custom %% operator that behaves like an SQL LIKE operator supporting % wildcards.
      `),Tc(),qE(55,`
      `),ui(56,"li"),qE(57,`
        Depending on your configuration, your GraphQL Server might already support regex querying (e.g. Hasura
        `),ui(58,"a",11),qE(59,"_regex"),Tc(),qE(60,`) or you
        could add your own implementation (e.g. see this SO `),ui(61,"a",12),qE(62,"Question"),Tc(),qE(63,`).
      `),Tc(),qE(64,`
    `),Tc(),qE(65,`
  `),Tc(),qE(66,`

  `),ui(67,"div",13),qE(68,`
    `),ui(69,"div",14),qE(70,`
      `),ui(71,"div",15),qE(72,`
        `),ui(73,"strong"),qE(74,"Status: "),Tc(),qE(75),ui(76,"span",16),qE(77,`
          `),cp(78,"i",17),qE(79,`
        `),Tc(),qE(80,`
      `),Tc(),qE(81,`

      `),ui(82,"div",13),qE(83,`
        `),ui(84,"div",18),qE(85,`
          `),ui(86,"button",19),pp("click",function(){return r.clearAllFiltersAndSorts()}),qE(87,`
            `),cp(88,"i",20),qE(89,`
            Clear all Filter & Sorts
          `),Tc(),qE(90,`
          `),ui(91,"button",21),pp("click",function(){return r.setFiltersDynamically()}),qE(92,`
            Set Filters Dynamically
          `),Tc(),qE(93,`
          `),ui(94,"button",22),pp("click",function(){return r.setSortingDynamically()}),qE(95,`
            Set Sorting Dynamically
          `),Tc(),qE(96,`
          `),ui(97,"button",23),pp("click",function(){return r.resetToOriginalPresets()}),qE(98,`
            Reset Original Presets
          `),Tc(),qE(99,`
          `),ui(100,"label",24),qE(101,"Server Delay: "),Tc(),qE(102,`
          `),ui(103,"input",25),Rp("ngModelChange",function(s){return QE(r.serverWaitDelay,s)||(r.serverWaitDelay=s),s}),Tc(),Lv(),qE(104,`
        `),Tc(),qE(105,`
      `),Tc(),qE(106,`
      `),ui(107,"div",26),qE(108,`
        `),ui(109,"div",18),qE(110,`
          `),ui(111,"button",27),pp("click",function(){return r.switchLanguage()}),qE(112,`
            `),cp(113,"i",28),qE(114,`
            Switch Language
          `),Tc(),qE(115,`
          `),ui(116,"strong"),qE(117,"Locale:"),Tc(),qE(118,`
          `),ui(119,"span",29),qE(120),Tc(),qE(121,`
        `),Tc(),qE(122,`

        `),ui(123,"span",30),qE(124,`
          `),ui(125,"label",31),qE(126,`
            `),ui(127,"input",32),pp("change",function(){return r.setIsWithCursor(false)}),Tc(),qE(128,`
            Offset
          `),Tc(),qE(129,`
          `),ui(130,"label",33),qE(131,`
            `),ui(132,"input",34),pp("change",function(){return r.setIsWithCursor(true)}),Tc(),qE(133,`
            Cursor
          `),Tc(),qE(134,`
        `),Tc(),qE(135,`
      `),Tc(),qE(136,`
      `),cp(137,"br"),qE(138,`
      `),YI(139,U,8,6),ui(140,"div",35),qE(141,`
        `),ui(142,"div",18),qE(143,`
          `),ui(144,"label"),qE(145,"Programmatically go to first/last page:"),Tc(),qE(146,`
          `),ui(147,"div",36),qE(148,`
            `),ui(149,"button",37),pp("click",function(){return r.goToFirstPage()}),qE(150,`
              `),cp(151,"i",38),qE(152,`
            `),Tc(),qE(153,`
            `),ui(154,"button",39),pp("click",function(){return r.goToLastPage()}),qE(155,`
              `),cp(156,"i",40),qE(157,`
            `),Tc(),qE(158,`
          `),Tc(),qE(159,`
        `),Tc(),qE(160,`
      `),Tc(),qE(161,`
    `),Tc(),qE(162,`

    `),ui(163,"div",41),qE(164,`
      `),ui(165,"div",42),qE(166,`
        `),ui(167,"strong"),qE(168,"GraphQL Query:"),Tc(),qE(169,`
        `),cp(170,"div",43),qE(171,`
      `),Tc(),qE(172,`
    `),Tc(),qE(173,`
  `),Tc(),qE(174,`

  `),cp(175,"hr"),qE(176,`
  `),ui(177,"angular-slickgrid",44),pp("onAngularGridCreated",function(s){return r.angularGridReady(s.detail)})("onGridStateChanged",function(s){return r.gridStateChanged(s.detail)})("onBeforeGridDestroy",function(){return r.saveCurrentGridState()}),qE(178,`
  `),Tc(),qE(179,`
`),Tc(),qE(180,`
`)),l&2&&(Wy(71),RE(r.status().class),Wy(4),Nc(" ",r.status().text,`
        `),Wy(),ap("hidden",!r.processing()),Wy(27),Ap("ngModel",r.serverWaitDelay),jv(),Wy(17),Nc(`
            `,r.selectedLanguage()+".json",`
          `),Wy(7),ap("value",false),Wy(5),ap("value",true),Wy(7),KI(r.metrics()?139:-1),Wy(31),ap("innerHTML",r.graphqlQuery,ty),Wy(7),ap("columns",r.columns)("options",r.gridOptions)("dataset",r.dataset));},dependencies:[j1,En,je,zt,Cn,qt,Hp],encapsulation:2});}}return c})();export{me as Example6Component};