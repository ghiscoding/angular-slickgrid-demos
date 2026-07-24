import {C}from'./chunk-C69cdUxF.js';import {D,L as Le,A as Ao,e as Tu,s,r as r$1,_ as _I,j as j1,H as Hp,u as ui,q as qE,c as cp,T as Tc,p as pp,Y as YI,W as Wy,K as KI,R as RE,i as Nc,a as ap,N as Np,h as pE,g as cD,m as xp,n as dD,o as ty}from'./main-MR3B775B.js';function X(b,K){if(b&1&&(qE(0,`
        `),ui(1,"div",47),qE(2,`
          `),ui(3,"em")(4,"strong"),qE(5,"Backend Error:"),Tc(),qE(6," "),cp(7,"span",48),Tc(),qE(8,`
        `),Tc(),qE(9,`
      `)),b&2){let i=pE();Wy(7),ap("innerHTML",i.errorStatus(),ty);}}function ee(b,K){if(b&1&&(qE(0,`
        `),ui(1,"span"),qE(2,`
          `),ui(3,"b"),qE(4,"Metrics:"),Tc(),qE(5),cD(6,"date"),Tc(),qE(7,`
      `)),b&2){let i,s=pE();Wy(5),xp(" ",dD(6,3,(i=s.metrics())==null?null:i.endTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",s.metrics()?.executionTime,`ms |
          `,s.metrics()?.totalItemCount,` items
        `);}}var U=20,te="assets/data",Y="%5E",ne="%25",ce=(()=>{class b{constructor(){this.http=D(Le),this.dataset=[],this.hideSubTitle=false,this.metrics=Ao(void 0),this.paginationOptions=Ao(void 0),this.isCountEnabled=true,this.isSelectEnabled=false,this.isExpandEnabled=false,this.odataVersion=2,this.odataQuery="",this.processing=Ao(true),this.errorStatus=Ao(""),this.isPageErrorTest=false,this.status=Ao({text:"processing...",class:"alert alert-danger"});}angularGridReady(i){this.angularGrid=i;}ngOnInit(){this.columns=[{id:"name",name:"Name",field:"name",sortable:true,filterable:true,filter:{model:Tu.compoundInput,compoundOperatorList:[{operator:"",desc:"Contains"},{operator:"<>",desc:"Not Contains"},{operator:"=",desc:"Equals"},{operator:"!=",desc:"Not equal to"},{operator:"a*",desc:"Starts With"},{operator:"Custom",desc:"SQL Like"}]}},{id:"gender",name:"Gender",field:"gender",filterable:true,sortable:true,filter:{model:Tu.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:true,sortable:true},{id:"category_name",name:"Category",field:"category/name",filterable:true,sortable:true}],this.gridOptions={enableAutoResize:true,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:false,hideInColumnTitleRow:true},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:"%%",descAlt:"SQL Like"}}},enableCellNavigation:true,enableFiltering:true,enableCheckboxSelector:true,enableSelection:true,enablePagination:true,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:U,totalItems:0},presets:{filters:[{columnId:"gender",searchTerms:["male"],operator:"="}],sorters:[{columnId:"name",direction:"asc"}],pagination:{pageNumber:2,pageSize:U}},backendServiceApi:{service:new C,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:i,columnDef:s,columnFilterOperator:a,searchValues:d})=>{if(a==="Custom"&&s?.id==="name"){let c=d[0].replace(/\*/g,".*");return c=c.slice(0,1)+Y+c.slice(1),c=c.slice(0,-1)+"$'",`matchesPattern(${i}, ${c})`}},version:this.odataVersion},onError:i=>{this.errorStatus.set(i.message),this.displaySpinner(false,true);},preProcess:()=>{this.errorStatus.set(""),this.displaySpinner(true);},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(false),this.getCustomerCallback(i);}}};}displaySpinner(i,s){this.processing.set(i),s?this.status.set({text:"ERROR!!!",class:"alert alert-danger"}):this.status.set(i?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"});}getCustomerCallback(i){let s$1=i.totalRecordCount;this.isCountEnabled&&(s$1=this.odataVersion===4?i["@odata.count"]:i.d.__count),this.metrics()&&this.metrics.set(s(r$1({},this.metrics()),{totalItemCount:s$1})),this.paginationOptions.set(s(r$1({},this.gridOptions.pagination),{totalItems:s$1})),this.dataset=this.odataVersion===4?i.value:i.d.results,this.odataQuery=i.query;}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage();}goToLastPage(){this.angularGrid.paginationService.goToLastPage();}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:"name",searchTerms:["A"],operator:"a*"}]);}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"name",direction:"DESC"}]);}getCustomerDataApiMock(i){return new Promise(s=>{let a=i.toLowerCase().split("&"),d,c=0,w="",T=100,x={};if(this.isPageErrorTest)throw this.isPageErrorTest=false,new Error("Server timed out trying to retrieve data for the last page");for(let f of a){if(f.includes("$top=")&&(d=+f.substring(5),d===5e4))throw new Error("Server timed out retrieving 50,000 rows");if(f.includes("$skip=")&&(c=+f.substring(6)),f.includes("$orderby=")&&(w=f.substring(9)),f.includes("$filter=")){let l=f.substring(8).replace("%20"," ");if(l.includes("matchespattern")){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${Y}(.*?)'\\)`,"i"),m=l.match(r)||[],S=m[1].trim();x[S]={type:"matchespattern",term:"^"+m[2].trim()};}if(l.includes("contains")){let r=l.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),m=r[1].trim();x[m]={type:"substring",term:r[2].trim()};}if(l.includes("substringof")){let r=l.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),m=r[2].trim();x[m]={type:"substring",term:r[1].trim()};}for(let r of ["eq","ne","le","lt","gt","ge"])if(l.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(l);if(Array.isArray(S)){let u=S[1].trim();x[u]={type:r,term:S[2].trim()};}}if(l.includes("startswith")&&l.includes("endswith")){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],m=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();x[S]={type:"starts+ends",term:[r[2].trim(),m[2].trim()]};}else if(l.includes("startswith")){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:"starts",term:r[2].trim()};}else if(l.includes("endswith")){let r=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:"ends",term:r[2].trim()};}if(l.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(w.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.get(`${te}/customers_100.json`).subscribe(f=>{let l=f;if(w?.length>0){let u=w.split(",");for(let P of u){let O=P.split(" "),k=O[0],_=E=>E;for(let E of k.split("/")){let o=_;_=A=>o(A)[E];}switch((O[1]??"asc").toLocaleLowerCase()){case "asc":l=l.sort((E,o)=>_(E).localeCompare(_(o)));break;case "desc":l=l.sort((E,o)=>_(o).localeCompare(_(E)));break}}}let r=c,m=l;if(x){for(let u in x)u in x&&(m=m.filter(P=>{let O=x[u].type,k=x[u].term,_=u;if(u?.indexOf(" ")!==-1){let o=u.split(" ");_=o[o.length-1];}let p,E=P;for(let o of _.split("/"))p=E[o],E=p;if(p){let[o,A]=Array.isArray(k)?k:[k];switch(O){case "eq":return p.toLowerCase()===o;case "ne":return p.toLowerCase()!==o;case "le":return p.toLowerCase()<=o;case "lt":return p.toLowerCase()<o;case "gt":return p.toLowerCase()>o;case "ge":return p.toLowerCase()>=o;case "ends":return p.toLowerCase().endsWith(o);case "starts":return p.toLowerCase().startsWith(o);case "starts+ends":return p.toLowerCase().startsWith(o)&&p.toLowerCase().endsWith(A);case "substring":return p.toLowerCase().includes(o);case "matchespattern":return new RegExp(o.replaceAll(ne,".*"),"i").test(p)}}}));T=m.length;}r>m.length&&(i=i.replace(`$skip=${r}`,""),r=0);let S=m.slice(r,r+d);setTimeout(()=>{let u={query:i};this.isCountEnabled||(u.totalRecordCount=T),this.odataVersion===4?(u.value=S,this.isCountEnabled&&(u["@odata.count"]=T)):(u.d={results:S},this.isCountEnabled&&(u.d.__count=T)),s(u);},100);});})}gridStateChanged(i){console.log("Client sample, Grid State changed:: ",i.change);}throwPageChangeError(){this.isPageErrorTest=true,this.angularGrid?.paginationService?.goToLastPage();}handleOnBeforeSort(i){return  true}handleOnBeforeSearchChange(i){return  true}handleOnBeforePaginationChange(i){return  true}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),true}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),true}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),true}setOdataVersion(i){return this.odataVersion=i,this.resetOptions({version:this.odataVersion}),true}resetOptions(i){this.displaySpinner(true);let s=this.gridOptions.backendServiceApi.service;s.updateOptions(i),s.clearFilters(),this.angularGrid?.filterService.clearFilters();}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(s){return new(s||b)};}static{this.\u0275cmp=_I({type:b,selectors:[["ng-component"]],decls:196,vars:16,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example05.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"row"],[1,"col-sm-9"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/odata","target","_blank"],[1,"small"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset","target","_blank"],[1,"text-danger"],[1,"col-sm-3"],[1,"col-sm-2"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-sm-10"],["data-test","alert-odata-query",1,"alert","alert-info"],["data-test","odata-query-result"],[1,"col-sm-4"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"col-sm-8"],["data-test","radioVersion"],["for","radio2",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","data-test","version2","id","radio2","checked","",3,"change","value"],["for","radio4",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","data-test","version4","id","radio4",3,"change","value"],["for","enableCount",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","enableCount","data-test","enable-count",3,"click","checked"],[2,"font-weight","bold"],["for","enableSelect",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","enableSelect","data-test","enable-select",3,"click","checked"],["for","enableExpand",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","enableExpand","data-test","enable-expand",3,"click","checked"],[1,"row","mt-2","mb-1"],[1,"col-md-12"],["data-test","throw-page-error-btn",1,"btn","btn-outline-danger","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-page-last"],[1,"ms-2"],["role","group",1,"btn-group"],["data-test","goto-first-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-first"],["data-test","goto-last-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],["gridId","grid5",3,"onAngularGridCreated","onGridStateChanged","onBeforeSort","onBeforeSearchChange","onBeforePaginationChange","columns","options","paginationOptions","dataset"],["data-test","error-status",1,"alert","alert-danger"],[3,"innerHTML"]],template:function(s,a){s&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 5: Grid connected to Backend Server with OData
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return a.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`
  `),ui(18,"div",6),qE(19,`
    `),ui(20,"div",7),qE(21,`
      `),ui(22,"div",8),qE(23,`
        Sorting/Paging connected to a Backend OData Service (`),ui(24,"a",9),qE(25,"Docs"),Tc(),qE(26,`).
        `),cp(27,"br"),qE(28,`
        `),ui(29,"ul",10),qE(30,`
          `),ui(31,"li"),qE(32,'Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported'),Tc(),qE(33,`
          `),ui(34,"li"),qE(35,"This example also demos the Grid State feature, open the console log to see the changes"),Tc(),qE(36,`
          `),ui(37,"li"),qE(38,"String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)"),Tc(),qE(39,`
          `),ui(40,"ul"),qE(41,`
            `),ui(42,"li"),qE(43,'The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")'),Tc(),qE(44,`
            `),ui(45,"li"),qE(46,'The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)'),Tc(),qE(47,`
          `),Tc(),qE(48,`
          `),ui(49,"li"),qE(50,"OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)"),Tc(),qE(51,`
          `),ui(52,"li"),qE(53,`
            You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
            `),ui(54,"a",11),qE(55,"Docs - Grid Preset"),Tc(),qE(56,`
          `),Tc(),qE(57,`
          `),ui(58,"li"),qE(59,`
            `),ui(60,"span",12),qE(61,"NOTE:"),Tc(),qE(62,` For demo purposes, the last column (filter & sort) will always throw an error and its
            only purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state
            before you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
          `),Tc(),qE(63,`
        `),Tc(),qE(64,`
      `),Tc(),qE(65,`
    `),Tc(),qE(66,`
    `),ui(67,"div",13),qE(68,`
      `),YI(69,X,10,1),Tc(),qE(70,`
  `),Tc(),qE(71,`

  `),ui(72,"div",6),qE(73,`
    `),ui(74,"div",14),qE(75,`
      `),ui(76,"div",15),qE(77,`
        `),ui(78,"strong"),qE(79,"Status: "),Tc(),qE(80),ui(81,"span",16),qE(82,`
          `),cp(83,"i",17),qE(84,`
        `),Tc(),qE(85,`
      `),Tc(),qE(86,`
    `),Tc(),qE(87,`
    `),ui(88,"div",18),qE(89,`
      `),ui(90,"div",19),qE(91,`
        `),ui(92,"strong"),qE(93,"OData Query:"),Tc(),qE(94," "),ui(95,"span",20),qE(96),Tc(),qE(97,`
      `),Tc(),qE(98,`
    `),Tc(),qE(99,`
  `),Tc(),qE(100,`

  `),ui(101,"div",6),qE(102,`
    `),ui(103,"div",21),qE(104,`
      `),ui(105,"button",22),pp("click",function(){return a.setFiltersDynamically()}),qE(106,`
        Set Filters Dynamically
      `),Tc(),qE(107,`
      `),ui(108,"button",23),pp("click",function(){return a.setSortingDynamically()}),qE(109,`
        Set Sorting Dynamically
      `),Tc(),qE(110,`
      `),cp(111,"br"),qE(112,`
      `),YI(113,ee,8,6),Tc(),qE(114,`

    `),ui(115,"div",24),qE(116,`
      `),ui(117,"label"),qE(118,"OData Version: "),Tc(),qE(119,`
      `),ui(120,"span",25),qE(121,`
        `),ui(122,"label",26),qE(123,`
          `),ui(124,"input",27),pp("change",function(){return a.setOdataVersion(2)}),Tc(),qE(125,`
          2
        `),Tc(),qE(126,`
        `),ui(127,"label",28),qE(128,`
          `),ui(129,"input",29),pp("change",function(){return a.setOdataVersion(4)}),Tc(),qE(130,` 4
        `),Tc(),qE(131,`
      `),Tc(),qE(132,`
      `),ui(133,"label",30),qE(134,`
        `),ui(135,"input",31),pp("click",function(){return a.changeCountEnableFlag()}),Tc(),qE(136,`
        `),ui(137,"span",32),qE(138,"Enable Count"),Tc(),qE(139,` (add to OData query)
      `),Tc(),qE(140,`
      `),ui(141,"label",33),qE(142,`
        `),ui(143,"input",34),pp("click",function(){return a.changeEnableSelectFlag()}),Tc(),qE(144,`
        `),ui(145,"span",32),qE(146,"Enable Select"),Tc(),qE(147,` (add to OData query)
      `),Tc(),qE(148,`
      `),ui(149,"label",35),qE(150,`
        `),ui(151,"input",36),pp("click",function(){return a.changeEnableExpandFlag()}),Tc(),qE(152,`
        `),ui(153,"span",32),qE(154,"Enable Expand"),Tc(),qE(155,` (add to OData query)
      `),Tc(),qE(156,`
    `),Tc(),qE(157,`
  `),Tc(),qE(158,`
  `),ui(159,"div",37),qE(160,`
    `),ui(161,"div",38),qE(162,`
      `),ui(163,"button",39),pp("click",function(){return a.throwPageChangeError()}),qE(164,`
        `),ui(165,"span"),qE(166,"Throw Error Going to Last Page... "),Tc(),qE(167,`
        `),cp(168,"i",40),qE(169,`
      `),Tc(),qE(170,`

      `),ui(171,"span",41),qE(172,`
        `),ui(173,"label"),qE(174,"Programmatically go to first/last page:"),Tc(),qE(175,`
        `),ui(176,"div",42),qE(177,`
          `),ui(178,"button",43),pp("click",function(){return a.goToFirstPage()}),qE(179,`
            `),cp(180,"i",44),qE(181,`
          `),Tc(),qE(182,`
          `),ui(183,"button",45),pp("click",function(){return a.goToLastPage()}),qE(184,`
            `),cp(185,"i",40),qE(186,`
          `),Tc(),qE(187,`
        `),Tc(),qE(188,`
      `),Tc(),qE(189,`
    `),Tc(),qE(190,`
  `),Tc(),qE(191,`

  `),ui(192,"angular-slickgrid",46),pp("onAngularGridCreated",function(c){return a.angularGridReady(c.detail)})("onGridStateChanged",function(c){return a.gridStateChanged(c.detail)})("onBeforeSort",function(c){return a.handleOnBeforeSort(c)})("onBeforeSearchChange",function(c){return a.handleOnBeforeSearchChange(c)})("onBeforePaginationChange",function(c){return a.handleOnBeforePaginationChange(c)}),qE(193,`
  `),Tc(),qE(194,`
`),Tc(),qE(195,`
`)),s&2&&(Wy(69),KI(a.errorStatus()?69:-1),Wy(7),RE(a.status().class),Wy(4),Nc(" ",a.status().text,`
        `),Wy(),ap("hidden",!a.processing()),Wy(15),Np(a.odataQuery),Wy(17),KI(a.metrics()?113:-1),Wy(11),ap("value",2),Wy(5),ap("value",4),Wy(6),ap("checked",a.isCountEnabled),Wy(8),ap("checked",a.isSelectEnabled),Wy(8),ap("checked",a.isExpandEnabled),Wy(41),ap("columns",a.columns)("options",a.gridOptions)("paginationOptions",a.paginationOptions())("dataset",a.dataset));},dependencies:[j1,Hp],encapsulation:2});}}return b})();export{ce as Example5Component};