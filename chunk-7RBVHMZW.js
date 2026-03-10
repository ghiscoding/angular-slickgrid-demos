import{a as J}from"./chunk-RDWKU74C.js";import{c as Z}from"./chunk-5J3HPOY2.js";import{Da as j,n as H,wa as F}from"./chunk-V3K67AAF.js";import{$b as Q,Ib as R,Jb as e,Kb as $,Lb as V,Nb as q,Oa as N,U as z,Zb as W,cb as B,db as G,hb as y,ia as v,ib as n,jb as t,kb as C,ub as h,wa as I,wb as M,za as g}from"./chunk-CCOLL5XZ.js";import{a as D,b as L}from"./chunk-PRARYYF3.js";function X(b,K){if(b&1&&(e(0,`
        `),n(1,"div",47),e(2,`
          `),n(3,"em")(4,"strong"),e(5,"Backend Error:"),t(),e(6," "),C(7,"span",48),t(),e(8,`
        `),t(),e(9,`
      `)),b&2){let i=M();g(7),y("innerHTML",i.errorStatus(),I)}}function ee(b,K){if(b&1&&(e(0,`
        `),n(1,"span"),e(2,`
          `),n(3,"b"),e(4,"Metrics:"),t(),e(5),W(6,"date"),t(),e(7,`
      `)),b&2){let i,s=M();g(5),q(" ",Q(6,3,(i=s.metrics())==null?null:i.endTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",(i=s.metrics())==null?null:i.executionTime,`ms |
          `,(i=s.metrics())==null?null:i.totalItemCount,` items
        `)}}var U=20,te="assets/data",Y="%5E",ne="%25",ce=(()=>{class b{constructor(){this.http=z(Z),this.dataset=[],this.hideSubTitle=!1,this.metrics=v(void 0),this.paginationOptions=v(void 0),this.isCountEnabled=!0,this.isSelectEnabled=!1,this.isExpandEnabled=!1,this.odataVersion=2,this.odataQuery="",this.processing=v(!0),this.errorStatus=v(""),this.isPageErrorTest=!1,this.status=v({text:"processing...",class:"alert alert-danger"})}angularGridReady(i){this.angularGrid=i}ngOnInit(){this.columns=[{id:"name",name:"Name",field:"name",sortable:!0,filterable:!0,filter:{model:F.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:F.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:U,totalItems:0},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:"="}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:U}},backendServiceApi:{service:new J,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:i,columnDef:s,columnFilterOperator:a,searchValues:d})=>{if(a==="Custom"&&s?.id==="name"){let c=d[0].replace(/\*/g,".*");return c=c.slice(0,1)+Y+c.slice(1),c=c.slice(0,-1)+"$'",`matchesPattern(${i}, ${c})`}},version:this.odataVersion},onError:i=>{this.errorStatus.set(i.message),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(""),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,s){this.processing.set(i),s?this.status.set({text:"ERROR!!!",class:"alert alert-danger"}):this.status.set(i?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"})}getCustomerCallback(i){let s=i.totalRecordCount;this.isCountEnabled&&(s=this.odataVersion===4?i["@odata.count"]:i.d.__count),this.metrics()&&this.metrics.set(L(D({},this.metrics()),{totalItemCount:s})),this.paginationOptions.set(L(D({},this.gridOptions.pagination),{totalItems:s})),this.dataset=this.odataVersion===4?i.value:i.d.results,this.odataQuery=i.query}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}getCustomerDataApiMock(i){return new Promise(s=>{let a=i.toLowerCase().split("&"),d,c=0,w="",T=100,x={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error("Server timed out trying to retrieve data for the last page");for(let f of a){if(f.includes("$top=")&&(d=+f.substring(5),d===5e4))throw new Error("Server timed out retrieving 50,000 rows");if(f.includes("$skip=")&&(c=+f.substring(6)),f.includes("$orderby=")&&(w=f.substring(9)),f.includes("$filter=")){let l=f.substring(8).replace("%20"," ");if(l.includes("matchespattern")){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${Y}(.*?)'\\)`,"i"),m=l.match(r)||[],S=m[1].trim();x[S]={type:"matchespattern",term:"^"+m[2].trim()}}if(l.includes("contains")){let r=l.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),m=r[1].trim();x[m]={type:"substring",term:r[2].trim()}}if(l.includes("substringof")){let r=l.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),m=r[2].trim();x[m]={type:"substring",term:r[1].trim()}}for(let r of["eq","ne","le","lt","gt","ge"])if(l.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(l);if(Array.isArray(S)){let u=S[1].trim();x[u]={type:r,term:S[2].trim()}}}if(l.includes("startswith")&&l.includes("endswith")){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],m=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();x[S]={type:"starts+ends",term:[r[2].trim(),m[2].trim()]}}else if(l.includes("startswith")){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:"starts",term:r[2].trim()}}else if(l.includes("endswith")){let r=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:"ends",term:r[2].trim()}}if(l.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(w.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.get(`${te}/customers_100.json`).subscribe(f=>{let l=f;if(w?.length>0){let u=w.split(",");for(let P of u){let O=P.split(" "),k=O[0],_=E=>E;for(let E of k.split("/")){let o=_;_=A=>o(A)[E]}switch((O[1]??"asc").toLocaleLowerCase()){case"asc":l=l.sort((E,o)=>_(E).localeCompare(_(o)));break;case"desc":l=l.sort((E,o)=>_(o).localeCompare(_(E)));break}}}let r=c,m=l;if(x){for(let u in x)u in x&&(m=m.filter(P=>{let O=x[u].type,k=x[u].term,_=u;if(u?.indexOf(" ")!==-1){let o=u.split(" ");_=o[o.length-1]}let p,E=P;for(let o of _.split("/"))p=E[o],E=p;if(p){let[o,A]=Array.isArray(k)?k:[k];switch(O){case"eq":return p.toLowerCase()===o;case"ne":return p.toLowerCase()!==o;case"le":return p.toLowerCase()<=o;case"lt":return p.toLowerCase()<o;case"gt":return p.toLowerCase()>o;case"ge":return p.toLowerCase()>=o;case"ends":return p.toLowerCase().endsWith(o);case"starts":return p.toLowerCase().startsWith(o);case"starts+ends":return p.toLowerCase().startsWith(o)&&p.toLowerCase().endsWith(A);case"substring":return p.toLowerCase().includes(o);case"matchespattern":return new RegExp(o.replaceAll(ne,".*"),"i").test(p)}}}));T=m.length}r>m.length&&(i=i.replace(`$skip=${r}`,""),r=0);let S=m.slice(r,r+d);setTimeout(()=>{let u={query:i};this.isCountEnabled||(u.totalRecordCount=T),this.odataVersion===4?(u.value=S,this.isCountEnabled&&(u["@odata.count"]=T)):(u.d={results:S},this.isCountEnabled&&(u.d.__count=T)),s(u)},100)})})}gridStateChanged(i){console.log("Client sample, Grid State changed:: ",i.change)}throwPageChangeError(){this.isPageErrorTest=!0,this.angularGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(i){return!0}handleOnBeforeSearchChange(i){return!0}handleOnBeforePaginationChange(i){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(i){return this.odataVersion=i,this.resetOptions({version:this.odataVersion}),!0}resetOptions(i){this.displaySpinner(!0);let s=this.gridOptions.backendServiceApi.service;s.updateOptions(i),s.clearFilters(),this.angularGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(s){return new(s||b)}}static{this.\u0275cmp=N({type:b,selectors:[["ng-component"]],decls:196,vars:16,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example05.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"row"],[1,"col-sm-9"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/odata","target","_blank"],[1,"small"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset","target","_blank"],[1,"text-danger"],[1,"col-sm-3"],[1,"col-sm-2"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-sm-10"],["data-test","alert-odata-query",1,"alert","alert-info"],["data-test","odata-query-result"],[1,"col-sm-4"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"col-sm-8"],["data-test","radioVersion"],["for","radio2",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","data-test","version2","id","radio2","checked","",3,"change","value"],["for","radio4",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","data-test","version4","id","radio4",3,"change","value"],["for","enableCount",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","enableCount","data-test","enable-count",3,"click","checked"],[2,"font-weight","bold"],["for","enableSelect",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","enableSelect","data-test","enable-select",3,"click","checked"],["for","enableExpand",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","enableExpand","data-test","enable-expand",3,"click","checked"],[1,"row","mt-2","mb-1"],[1,"col-md-12"],["data-test","throw-page-error-btn",1,"btn","btn-outline-danger","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-page-last"],[1,"ms-2"],["role","group",1,"btn-group"],["data-test","goto-first-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-first"],["data-test","goto-last-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],["gridId","grid5",3,"onAngularGridCreated","onGridStateChanged","onBeforeSort","onBeforeSearchChange","onBeforePaginationChange","columns","options","paginationOptions","dataset"],["data-test","error-status",1,"alert","alert-danger"],[3,"innerHTML"]],template:function(s,a){s&1&&(n(0,"div",0),e(1,`
  `),n(2,"h2"),e(3,`
    Example 5: Grid connected to Backend Server with OData
    `),n(4,"span",1),e(5,`
      `),n(6,"a",2),e(7,`
        `),C(8,"span",3),e(9,` code
      `),t(),e(10,`
    `),t(),e(11,`
    `),n(12,"button",4),h("click",function(){return a.toggleSubTitle()}),e(13,`
      `),C(14,"span",5),e(15,`
    `),t(),e(16,`
  `),t(),e(17,`
  `),n(18,"div",6),e(19,`
    `),n(20,"div",7),e(21,`
      `),n(22,"div",8),e(23,`
        Sorting/Paging connected to a Backend OData Service (`),n(24,"a",9),e(25,"Docs"),t(),e(26,`).
        `),C(27,"br"),e(28,`
        `),n(29,"ul",10),e(30,`
          `),n(31,"li"),e(32,'Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported'),t(),e(33,`
          `),n(34,"li"),e(35,"This example also demos the Grid State feature, open the console log to see the changes"),t(),e(36,`
          `),n(37,"li"),e(38,"String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)"),t(),e(39,`
          `),n(40,"ul"),e(41,`
            `),n(42,"li"),e(43,'The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")'),t(),e(44,`
            `),n(45,"li"),e(46,'The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)'),t(),e(47,`
          `),t(),e(48,`
          `),n(49,"li"),e(50,"OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)"),t(),e(51,`
          `),n(52,"li"),e(53,`
            You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
            `),n(54,"a",11),e(55,"Docs - Grid Preset"),t(),e(56,`
          `),t(),e(57,`
          `),n(58,"li"),e(59,`
            `),n(60,"span",12),e(61,"NOTE:"),t(),e(62,` For demo purposes, the last column (filter & sort) will always throw an error and its
            only purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state
            before you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
          `),t(),e(63,`
        `),t(),e(64,`
      `),t(),e(65,`
    `),t(),e(66,`
    `),n(67,"div",13),e(68,`
      `),B(69,X,10,1),t(),e(70,`
  `),t(),e(71,`

  `),n(72,"div",6),e(73,`
    `),n(74,"div",14),e(75,`
      `),n(76,"div",15),e(77,`
        `),n(78,"strong"),e(79,"Status: "),t(),e(80),n(81,"span",16),e(82,`
          `),C(83,"i",17),e(84,`
        `),t(),e(85,`
      `),t(),e(86,`
    `),t(),e(87,`
    `),n(88,"div",18),e(89,`
      `),n(90,"div",19),e(91,`
        `),n(92,"strong"),e(93,"OData Query:"),t(),e(94," "),n(95,"span",20),e(96),t(),e(97,`
      `),t(),e(98,`
    `),t(),e(99,`
  `),t(),e(100,`

  `),n(101,"div",6),e(102,`
    `),n(103,"div",21),e(104,`
      `),n(105,"button",22),h("click",function(){return a.setFiltersDynamically()}),e(106,`
        Set Filters Dynamically
      `),t(),e(107,`
      `),n(108,"button",23),h("click",function(){return a.setSortingDynamically()}),e(109,`
        Set Sorting Dynamically
      `),t(),e(110,`
      `),C(111,"br"),e(112,`
      `),B(113,ee,8,6),t(),e(114,`

    `),n(115,"div",24),e(116,`
      `),n(117,"label"),e(118,"OData Version: "),t(),e(119,`
      `),n(120,"span",25),e(121,`
        `),n(122,"label",26),e(123,`
          `),n(124,"input",27),h("change",function(){return a.setOdataVersion(2)}),t(),e(125,`
          2
        `),t(),e(126,`
        `),n(127,"label",28),e(128,`
          `),n(129,"input",29),h("change",function(){return a.setOdataVersion(4)}),t(),e(130,` 4
        `),t(),e(131,`
      `),t(),e(132,`
      `),n(133,"label",30),e(134,`
        `),n(135,"input",31),h("click",function(){return a.changeCountEnableFlag()}),t(),e(136,`
        `),n(137,"span",32),e(138,"Enable Count"),t(),e(139,` (add to OData query)
      `),t(),e(140,`
      `),n(141,"label",33),e(142,`
        `),n(143,"input",34),h("click",function(){return a.changeEnableSelectFlag()}),t(),e(144,`
        `),n(145,"span",32),e(146,"Enable Select"),t(),e(147,` (add to OData query)
      `),t(),e(148,`
      `),n(149,"label",35),e(150,`
        `),n(151,"input",36),h("click",function(){return a.changeEnableExpandFlag()}),t(),e(152,`
        `),n(153,"span",32),e(154,"Enable Expand"),t(),e(155,` (add to OData query)
      `),t(),e(156,`
    `),t(),e(157,`
  `),t(),e(158,`
  `),n(159,"div",37),e(160,`
    `),n(161,"div",38),e(162,`
      `),n(163,"button",39),h("click",function(){return a.throwPageChangeError()}),e(164,`
        `),n(165,"span"),e(166,"Throw Error Going to Last Page... "),t(),e(167,`
        `),C(168,"i",40),e(169,`
      `),t(),e(170,`

      `),n(171,"span",41),e(172,`
        `),n(173,"label"),e(174,"Programmatically go to first/last page:"),t(),e(175,`
        `),n(176,"div",42),e(177,`
          `),n(178,"button",43),h("click",function(){return a.goToFirstPage()}),e(179,`
            `),C(180,"i",44),e(181,`
          `),t(),e(182,`
          `),n(183,"button",45),h("click",function(){return a.goToLastPage()}),e(184,`
            `),C(185,"i",40),e(186,`
          `),t(),e(187,`
        `),t(),e(188,`
      `),t(),e(189,`
    `),t(),e(190,`
  `),t(),e(191,`

  `),n(192,"angular-slickgrid",46),h("onAngularGridCreated",function(c){return a.angularGridReady(c.detail)})("onGridStateChanged",function(c){return a.gridStateChanged(c.detail)})("onBeforeSort",function(c){return a.handleOnBeforeSort(c)})("onBeforeSearchChange",function(c){return a.handleOnBeforeSearchChange(c)})("onBeforePaginationChange",function(c){return a.handleOnBeforePaginationChange(c)}),e(193,`
  `),t(),e(194,`
`),t(),e(195,`
`)),s&2&&(g(69),G(a.errorStatus()?69:-1),g(7),R(a.status().class),g(4),V(" ",a.status().text,`
        `),g(),y("hidden",!a.processing()),g(15),$(a.odataQuery),g(17),G(a.metrics()?113:-1),g(11),y("value",2),g(5),y("value",4),g(6),y("checked",a.isCountEnabled),g(8),y("checked",a.isSelectEnabled),g(8),y("checked",a.isExpandEnabled),g(41),y("columns",a.columns)("options",a.gridOptions)("paginationOptions",a.paginationOptions())("dataset",a.dataset))},dependencies:[j,H],encapsulation:2})}}return b})();export{ce as Example5Component};
