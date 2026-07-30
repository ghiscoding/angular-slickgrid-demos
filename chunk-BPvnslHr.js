import {C}from'./chunk-C69cdUxF.js';import {D,L as Le,A as Ao,e as Tu,r as r$1,a1 as PP,f as LB,_ as _I,j as j1,H as Hp,u as ui,q as qE,c as cp,T as Tc,p as pp,Y as YI,W as Wy,K as KI,R as RE,i as Nc,a as ap,N as Np,h as pE,g as cD,n as dD,o as ty}from'./main-MR3B775B.js';function K(h,J){if(h&1&&(qE(0,`
        `),ui(1,"div",23),qE(2,`
          `),ui(3,"em")(4,"strong"),qE(5,"Backend Error:"),Tc(),qE(6," "),cp(7,"span",24),Tc(),qE(8,`
        `),Tc(),qE(9,`
      `)),h&2){let i=pE();Wy(7),ap("innerHTML",i.errorStatus(),ty);}}function X(h,J){if(h&1&&(qE(0,`
        `),ui(1,"div",25),qE(2,`
          `),ui(3,"b"),qE(4,"Metrics:"),Tc(),qE(5,`
          `),ui(6,"span"),qE(7,`
            `),ui(8,"span"),qE(9),cD(10,"date"),Tc(),qE(11,` \u2014
            `),ui(12,"span",26),qE(13),Tc(),qE(14,`
            of
            `),ui(15,"span",27),qE(16),Tc(),qE(17,`
            items
          `),Tc(),qE(18,`
          `),ui(19,"span",28),qE(20,"All Data Loaded!!!"),Tc(),qE(21,`
        `),Tc(),qE(22,`
      `)),h&2){let i,a=pE();Wy(9),Np(dD(10,5,(i=a.metrics())==null?null:i.endTime,"dd MMM, h:mm:ssa")),Wy(4),Np(a.metrics()?.itemCount),Wy(3),Np(a.metrics()?.totalItemCount),Wy(3),RE(a.tagDataClass());}}var Y="assets/data",ee="%5E",te="%25",me=(()=>{class h{constructor(){this.http=D(Le),this.dataset=[],this.hideSubTitle=false,this.isPageErrorTest=false,this.metrics=Ao(void 0),this.tagDataClass=Ao(""),this.odataQuery=Ao(""),this.processing=Ao(false),this.errorStatus=Ao(""),this.errorStatusClass=Ao("hidden"),this.status=Ao({text:"processing...",class:"alert alert-danger"}),this.backendService=new C;}ngOnInit(){this.initializeGrid();}angularGridReady(i){this.angularGrid=i;}initializeGrid(){this.columns=[{id:"name",name:"Name",field:"name",sortable:true,filterable:true,filter:{model:Tu.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:true,sortable:true,filter:{model:Tu.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:true,sortable:true},{id:"category_name",name:"Category",field:"category/name",filterable:true,sortable:true,formatter:(i,a,l,c,C)=>C.category?.name||""}],this.gridOptions={enableAutoResize:true,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:false,hideInColumnTitleRow:true},enableCellNavigation:true,enableFiltering:true,enableCheckboxSelector:true,enableSelection:true,enableGrouping:true,headerMenu:{hideFreezeColumnsCommand:false},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:true,version:4},onError:i=>{this.errorStatus.set(i.message),this.errorStatusClass.set("visible notification is-light is-danger is-small is-narrow"),this.displaySpinner(false,true);},preProcess:()=>{this.errorStatus.set(""),this.errorStatusClass.set("hidden"),this.displaySpinner(true);},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(false),this.getCustomerCallback(i);}}};}displaySpinner(i,a){this.processing.set(i),a?this.status.set({text:"ERROR!!!",class:"alert alert-danger"}):this.status.set(i?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"});}getCustomerCallback(i){let a=i["@odata.count"],l=r$1({},this.metrics());if(l.totalItemCount=a,this.metrics.set(l),i.infiniteScrollBottomHit)this.angularGrid.dataView?.addItems(i.value);else {this.angularGrid.slickGrid?.scrollTo(0),this.dataset=i.value;let c=r$1({},this.metrics());c.itemCount=i.value.length,this.metrics.set(c);}this.odataQuery.set(i.query);}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}getCustomerDataApiMock(i){return this.errorStatusClass.set("hidden"),new Promise(a=>{let l=i.toLowerCase().split("&"),c=0,C=0,k="",N=100,g={};if(this.isPageErrorTest)throw this.isPageErrorTest=false,new Error("Server timed out trying to retrieve data for the last page");for(let f of l){if(f.includes("$top=")&&(c=+f.substring(5),c===5e4))throw new Error("Server timed out retrieving 50,000 rows");if(f.includes("$skip=")&&(C=+f.substring(6)),f.includes("$orderby=")&&(k=f.substring(9)),f.includes("$filter=")){let s=f.substring(8).replace("%20"," ");if(s.includes("matchespattern")){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${ee}(.*?)'\\)`,"i"),d=s.match(r)||[],S=d[1].trim();g[S]={type:"matchespattern",term:"^"+d[2].trim()};}if(s.includes("contains")){let r=s.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:"substring",term:r[2].trim()};}if(s.includes("substringof")){let r=s.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],d=r[2].trim();g[d]={type:"substring",term:r[1].trim()};}for(let r of ["eq","ne","le","lt","gt","ge"])if(s.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(s);if(Array.isArray(S)){let u=S[1].trim();g[u]={type:r,term:S[2].trim()};}}if(s.includes("startswith")&&s.includes("endswith")){let r=s.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=s.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();g[S]={type:"starts+ends",term:[r[2].trim(),d[2].trim()]};}else if(s.includes("startswith")){let r=s.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:"starts",term:r[2].trim()};}else if(s.includes("endswith")){let r=s.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:"ends",term:r[2].trim()};}if(s.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(k.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.get(`${Y}/customers_100.json`).subscribe(f=>{let s=f;if(k?.length>0){let u=k.split(",");for(let D of u){let T=D.split(" "),w=T[0],b=x=>x;for(let x of w.split("/")){let o=b;b=G=>o(G)[x];}switch((T[1]??"asc").toLocaleLowerCase()){case "asc":s=s.sort((x,o)=>b(x).localeCompare(b(o)));break;case "desc":s=s.sort((x,o)=>b(o).localeCompare(b(x)));break}}}let r=C,d=s;if(g){for(let u in g)u in g&&(d=d.filter(D=>{let T=g[u].type,w=g[u].term,b=u;if(u?.indexOf(" ")!==-1){let o=u.split(" ");b=o[o.length-1];}let m,x=D;for(let o of b.split("/"))m=x[o],x=m;if(m){let[o,G]=Array.isArray(w)?w:[w];switch(T){case "eq":return m.toLowerCase()===o;case "ne":return m.toLowerCase()!==o;case "le":return m.toLowerCase()<=o;case "lt":return m.toLowerCase()<o;case "gt":return m.toLowerCase()>o;case "ge":return m.toLowerCase()>=o;case "ends":return m.toLowerCase().endsWith(o);case "starts":return m.toLowerCase().startsWith(o);case "starts+ends":return m.toLowerCase().startsWith(o)&&m.toLowerCase().endsWith(G);case "substring":return m.toLowerCase().includes(o);case "matchespattern":return new RegExp(o.replaceAll(te,".*"),"i").test(m)}}}));N=d.length;}r>d.length&&(i=i.replace(`$skip=${r}`,""),r=0);let S=d.slice(r,r+c);setTimeout(()=>{let u={query:i};u.value=S,u["@odata.count"]=N,a(u);},100);});})}groupByGender(){this.angularGrid?.dataView?.setGrouping({getter:"gender",formatter:i=>`Gender: ${i.value} <span class="text-green">(${i.count} items)</span>`,comparer:(i,a)=>LB.string(i.value,a.value),aggregators:[new PP.Sum("gemder")],aggregateCollapsed:false,lazyTotalsCalculation:true}),this.angularGrid?.slickGrid.setSortColumns([{columnId:"duration",sortAsc:true}]),this.angularGrid?.slickGrid.invalidate();}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts();}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:"gender",searchTerms:["female"]}]);}refreshMetrics(i){if(i?.current>=0){let a=r$1({},this.metrics());a.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(a),this.tagDataClass.set(a.itemCount===a.totalItemCount?"fully-loaded":"partial-load");}}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:"name",direction:"DESC"}]);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(a){return new(a||h)};}static{this.\u0275cmp=_I({type:h,selectors:[["ng-component"]],decls:106,vars:10,consts:[[1,"demo38"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example38.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","is-6","italic","content"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-2"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-sm-10"],["data-test","alert-odata-query",1,"alert","alert-info"],["data-test","odata-query-result"],[1,"col-sm-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-filter-remove-outline"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-by-gender",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid38",3,"onAngularGridCreated","onRowCountChanged","columns","options","dataset"],["data-test","error-status",1,"alert","alert-danger"],[3,"innerHTML"],[1,"mt-2",2,"margin","10px 0px"],["data-test","itemCount"],["data-test","totalItemCount"],["data-test","data-loaded-tag",1,"badge","rounded-pill","text-bg-primary"]],template:function(a,l){a&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 38: OData (v4) Backend Service with Infinite Scroll
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return l.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"h6",6),qE(19,`
    `),ui(20,"ul"),qE(21,`
      `),ui(22,"li"),qE(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),Tc(),qE(24,`
      `),ui(25,"li"),qE(26,"NOTES"),Tc(),qE(27,`
      `),ui(28,"ol"),qE(29,`
        `),ui(30,"li"),qE(31,`
          `),ui(32,"code"),qE(33,"presets.pagination"),Tc(),qE(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),Tc(),qE(35,`
        `),ui(36,"li"),qE(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),Tc(),qE(38,`
        `),ui(39,"li"),qE(40,"Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page)."),Tc(),qE(41,`
      `),Tc(),qE(42,`
    `),Tc(),qE(43,`
  `),Tc(),qE(44,`

  `),ui(45,"div",7),qE(46,`
    `),ui(47,"div",8),qE(48,`
      `),YI(49,K,10,1),Tc(),qE(50,`
  `),Tc(),qE(51,`

  `),ui(52,"div",7),qE(53,`
    `),ui(54,"div",9),qE(55,`
      `),ui(56,"div",10),qE(57,`
        `),ui(58,"strong"),qE(59,"Status: "),Tc(),qE(60),ui(61,"span",11),qE(62,`
          `),cp(63,"i",12),qE(64,`
        `),Tc(),qE(65,`
      `),Tc(),qE(66,`
    `),Tc(),qE(67,`
    `),ui(68,"div",13),qE(69,`
      `),ui(70,"div",14),qE(71,`
        `),ui(72,"strong"),qE(73,"OData Query:"),Tc(),qE(74," "),ui(75,"span",15),qE(76),Tc(),qE(77,`
      `),Tc(),qE(78,`
    `),Tc(),qE(79,`
  `),Tc(),qE(80,`

  `),ui(81,"div",7),qE(82,`
    `),ui(83,"div",16),qE(84,`
      `),ui(85,"button",17),pp("click",function(){return l.clearAllFiltersAndSorts()}),qE(86,`
        `),cp(87,"i",18),qE(88,`
        Clear all Filter & Sorts
      `),Tc(),qE(89,`
      `),ui(90,"button",19),pp("click",function(){return l.setFiltersDynamically()}),qE(91,`
        Set Filters Dynamically
      `),Tc(),qE(92,`
      `),ui(93,"button",20),pp("click",function(){return l.setSortingDynamically()}),qE(94,`
        Set Sorting Dynamically
      `),Tc(),qE(95,`
      `),ui(96,"button",21),pp("click",function(){return l.groupByGender()}),qE(97,`
        Group by Gender
      `),Tc(),qE(98,`

      `),YI(99,X,23,8),Tc(),qE(100,`
  `),Tc(),qE(101,`

  `),ui(102,"angular-slickgrid",22),pp("onAngularGridCreated",function(C){return l.angularGridReady(C.detail)})("onRowCountChanged",function(C){return l.refreshMetrics(C.detail.args)}),qE(103,`
  `),Tc(),qE(104,`
`),Tc(),qE(105,`
`)),a&2&&(Wy(49),KI(l.errorStatus()?49:-1),Wy(7),RE(l.status()?.class),Wy(4),Nc(" ",l.status()?.text,`
        `),Wy(),ap("hidden",!l.processing()),Wy(15),Np(l.odataQuery()),Wy(23),KI(l.metrics()?99:-1),Wy(3),ap("columns",l.columns)("options",l.gridOptions)("dataset",l.dataset));},dependencies:[j1,Hp],styles:[`.demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2});}}return h})();export{me as Example38Component};