import{a as U}from"./chunk-RDWKU74C.js";import{c as Q}from"./chunk-5J3HPOY2.js";import{Da as j,ja as V,n as q,wa as F,xa as W}from"./chunk-V3K67AAF.js";import{$b as Z,Ib as R,Jb as e,Kb as _,Lb as O,Oa as B,U as P,Zb as H,cb as I,db as z,hb as M,ia as y,ib as n,jb as t,kb as E,ub as v,wa as $,wb as L,za as p}from"./chunk-CCOLL5XZ.js";import{a as A}from"./chunk-PRARYYF3.js";function K(f,J){if(f&1&&(e(0,`
        `),n(1,"div",23),e(2,`
          `),n(3,"em")(4,"strong"),e(5,"Backend Error:"),t(),e(6," "),E(7,"span",24),t(),e(8,`
        `),t(),e(9,`
      `)),f&2){let i=L();p(7),M("innerHTML",i.errorStatus(),$)}}function X(f,J){if(f&1&&(e(0,`
        `),n(1,"div",25),e(2,`
          `),n(3,"b"),e(4,"Metrics:"),t(),e(5,`
          `),n(6,"span"),e(7,`
            `),n(8,"span"),e(9),H(10,"date"),t(),e(11,` \u2014
            `),n(12,"span",26),e(13),t(),e(14,`
            of
            `),n(15,"span",27),e(16),t(),e(17,`
            items
          `),t(),e(18,`
          `),n(19,"span",28),e(20,"All Data Loaded!!!"),t(),e(21,`
        `),t(),e(22,`
      `)),f&2){let i,d,a,l=L();p(9),_(Z(10,5,(i=l.metrics())==null?null:i.endTime,"dd MMM, h:mm:ssa")),p(4),_((d=l.metrics())==null?null:d.itemCount),p(3),_((a=l.metrics())==null?null:a.totalItemCount),p(3),R(l.tagDataClass())}}var Y="assets/data",ee="%5E",te="%25",me=(()=>{class f{constructor(){this.http=P(Q),this.dataset=[],this.hideSubTitle=!1,this.isPageErrorTest=!1,this.metrics=y(void 0),this.tagDataClass=y(""),this.odataQuery=y(""),this.processing=y(!1),this.errorStatus=y(""),this.errorStatusClass=y("hidden"),this.status=y({text:"processing...",class:"alert alert-danger"}),this.backendService=new U}ngOnInit(){this.initializeGrid()}angularGridReady(i){this.angularGrid=i}initializeGrid(){this.columns=[{id:"name",name:"Name",field:"name",sortable:!0,filterable:!0,filter:{model:F.compoundInput}},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:F.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0},{id:"category_name",name:"Category",field:"category/name",filterable:!0,sortable:!0,formatter:(i,d,a,l,h)=>h.category?.name||""}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enableGrouping:!0,headerMenu:{hideFreezeColumnsCommand:!1},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:i=>{this.errorStatus.set(i.message),this.errorStatusClass.set("visible notification is-light is-danger is-small is-narrow"),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(""),this.errorStatusClass.set("hidden"),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,d){this.processing.set(i),d?this.status.set({text:"ERROR!!!",class:"alert alert-danger"}):this.status.set(i?{text:"loading",class:"alert alert-warning"}:{text:"finished",class:"alert alert-success"})}getCustomerCallback(i){let d=i["@odata.count"],a=A({},this.metrics());if(a.totalItemCount=d,this.metrics.set(a),i.infiniteScrollBottomHit)this.angularGrid.dataView?.addItems(i.value);else{this.angularGrid.slickGrid?.scrollTo(0),this.dataset=i.value;let l=A({},this.metrics());l.itemCount=i.value.length,this.metrics.set(l)}this.odataQuery.set(i.query)}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}getCustomerDataApiMock(i){return this.errorStatusClass.set("hidden"),new Promise(d=>{let a=i.toLowerCase().split("&"),l=0,h=0,k="",N=100,g={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error("Server timed out trying to retrieve data for the last page");for(let x of a){if(x.includes("$top=")&&(l=+x.substring(5),l===5e4))throw new Error("Server timed out retrieving 50,000 rows");if(x.includes("$skip=")&&(h=+x.substring(6)),x.includes("$orderby=")&&(k=x.substring(9)),x.includes("$filter=")){let s=x.substring(8).replace("%20"," ");if(s.includes("matchespattern")){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${ee}(.*?)'\\)`,"i"),m=s.match(r)||[],b=m[1].trim();g[b]={type:"matchespattern",term:"^"+m[2].trim()}}if(s.includes("contains")){let r=s.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],m=r[1].trim();g[m]={type:"substring",term:r[2].trim()}}if(s.includes("substringof")){let r=s.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],m=r[2].trim();g[m]={type:"substring",term:r[1].trim()}}for(let r of["eq","ne","le","lt","gt","ge"])if(s.includes(r)){let b=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(s);if(Array.isArray(b)){let u=b[1].trim();g[u]={type:r,term:b[2].trim()}}}if(s.includes("startswith")&&s.includes("endswith")){let r=s.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],m=s.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],b=r[1].trim();g[b]={type:"starts+ends",term:[r[2].trim(),m[2].trim()]}}else if(s.includes("startswith")){let r=s.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],m=r[1].trim();g[m]={type:"starts",term:r[2].trim()}}else if(s.includes("endswith")){let r=s.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],m=r[1].trim();g[m]={type:"ends",term:r[2].trim()}}if(s.includes("company"))throw new Error('Server could not filter using the field "Company"')}}if(k.includes("company"))throw new Error('Server could not sort using the field "Company"');this.http.get(`${Y}/customers_100.json`).subscribe(x=>{let s=x;if(k?.length>0){let u=k.split(",");for(let D of u){let T=D.split(" "),w=T[0],C=S=>S;for(let S of w.split("/")){let o=C;C=G=>o(G)[S]}switch((T[1]??"asc").toLocaleLowerCase()){case"asc":s=s.sort((S,o)=>C(S).localeCompare(C(o)));break;case"desc":s=s.sort((S,o)=>C(o).localeCompare(C(S)));break}}}let r=h,m=s;if(g){for(let u in g)u in g&&(m=m.filter(D=>{let T=g[u].type,w=g[u].term,C=u;if(u?.indexOf(" ")!==-1){let o=u.split(" ");C=o[o.length-1]}let c,S=D;for(let o of C.split("/"))c=S[o],S=c;if(c){let[o,G]=Array.isArray(w)?w:[w];switch(T){case"eq":return c.toLowerCase()===o;case"ne":return c.toLowerCase()!==o;case"le":return c.toLowerCase()<=o;case"lt":return c.toLowerCase()<o;case"gt":return c.toLowerCase()>o;case"ge":return c.toLowerCase()>=o;case"ends":return c.toLowerCase().endsWith(o);case"starts":return c.toLowerCase().startsWith(o);case"starts+ends":return c.toLowerCase().startsWith(o)&&c.toLowerCase().endsWith(G);case"substring":return c.toLowerCase().includes(o);case"matchespattern":return new RegExp(o.replaceAll(te,".*"),"i").test(c)}}}));N=m.length}r>m.length&&(i=i.replace(`$skip=${r}`,""),r=0);let b=m.slice(r,r+l);setTimeout(()=>{let u={query:i};u.value=b,u["@odata.count"]=N,d(u)},100)})})}groupByGender(){this.angularGrid?.dataView?.setGrouping({getter:"gender",formatter:i=>`Gender: ${i.value} <span class="text-green">(${i.count} items)</span>`,comparer:(i,d)=>V.string(i.value,d.value),aggregators:[new W.Sum("gemder")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.angularGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:"gender",searchTerms:["female"]}])}refreshMetrics(i){if(i?.current>=0){let d=A({},this.metrics());d.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(d),this.tagDataClass.set(d.itemCount===d.totalItemCount?"fully-loaded":"partial-load")}}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:"name",direction:"DESC"}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(d){return new(d||f)}}static{this.\u0275cmp=B({type:f,selectors:[["ng-component"]],decls:106,vars:10,consts:[[1,"demo38"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example38.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","is-6","italic","content"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-2"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-sm-10"],["data-test","alert-odata-query",1,"alert","alert-info"],["data-test","odata-query-result"],[1,"col-sm-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-filter-remove-outline"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-by-gender",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid38",3,"onAngularGridCreated","onRowCountChanged","columns","options","dataset"],["data-test","error-status",1,"alert","alert-danger"],[3,"innerHTML"],[1,"mt-2",2,"margin","10px 0px"],["data-test","itemCount"],["data-test","totalItemCount"],["data-test","data-loaded-tag",1,"badge","rounded-pill","text-bg-primary"]],template:function(d,a){if(d&1&&(n(0,"div",0),e(1,`
  `),n(2,"h2"),e(3,`
    Example 38: OData (v4) Backend Service with Infinite Scroll
    `),n(4,"span",1),e(5,`
      `),n(6,"a",2),e(7,`
        `),E(8,"span",3),e(9,` code
      `),t(),e(10,`
    `),t(),e(11,`
    `),n(12,"button",4),v("click",function(){return a.toggleSubTitle()}),e(13,`
      `),E(14,"span",5),e(15,`
    `),t(),e(16,`
  `),t(),e(17,`

  `),n(18,"h6",6),e(19,`
    `),n(20,"ul"),e(21,`
      `),n(22,"li"),e(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),t(),e(24,`
      `),n(25,"li"),e(26,"NOTES"),t(),e(27,`
      `),n(28,"ol"),e(29,`
        `),n(30,"li"),e(31,`
          `),n(32,"code"),e(33,"presets.pagination"),t(),e(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),t(),e(35,`
        `),n(36,"li"),e(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),t(),e(38,`
        `),n(39,"li"),e(40,"Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page)."),t(),e(41,`
      `),t(),e(42,`
    `),t(),e(43,`
  `),t(),e(44,`

  `),n(45,"div",7),e(46,`
    `),n(47,"div",8),e(48,`
      `),I(49,K,10,1),t(),e(50,`
  `),t(),e(51,`

  `),n(52,"div",7),e(53,`
    `),n(54,"div",9),e(55,`
      `),n(56,"div",10),e(57,`
        `),n(58,"strong"),e(59,"Status: "),t(),e(60),n(61,"span",11),e(62,`
          `),E(63,"i",12),e(64,`
        `),t(),e(65,`
      `),t(),e(66,`
    `),t(),e(67,`
    `),n(68,"div",13),e(69,`
      `),n(70,"div",14),e(71,`
        `),n(72,"strong"),e(73,"OData Query:"),t(),e(74," "),n(75,"span",15),e(76),t(),e(77,`
      `),t(),e(78,`
    `),t(),e(79,`
  `),t(),e(80,`

  `),n(81,"div",7),e(82,`
    `),n(83,"div",16),e(84,`
      `),n(85,"button",17),v("click",function(){return a.clearAllFiltersAndSorts()}),e(86,`
        `),E(87,"i",18),e(88,`
        Clear all Filter & Sorts
      `),t(),e(89,`
      `),n(90,"button",19),v("click",function(){return a.setFiltersDynamically()}),e(91,`
        Set Filters Dynamically
      `),t(),e(92,`
      `),n(93,"button",20),v("click",function(){return a.setSortingDynamically()}),e(94,`
        Set Sorting Dynamically
      `),t(),e(95,`
      `),n(96,"button",21),v("click",function(){return a.groupByGender()}),e(97,`
        Group by Gender
      `),t(),e(98,`

      `),I(99,X,23,8),t(),e(100,`
  `),t(),e(101,`

  `),n(102,"angular-slickgrid",22),v("onAngularGridCreated",function(h){return a.angularGridReady(h.detail)})("onRowCountChanged",function(h){return a.refreshMetrics(h.detail.args)}),e(103,`
  `),t(),e(104,`
`),t(),e(105,`
`)),d&2){let l,h;p(49),z(a.errorStatus()?49:-1),p(7),R((l=a.status())==null?null:l.class),p(4),O(" ",(h=a.status())==null?null:h.text,`
        `),p(),M("hidden",!a.processing()),p(15),_(a.odataQuery()),p(23),z(a.metrics()?99:-1),p(3),M("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset)}},dependencies:[j,q],styles:[`.demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return f})();export{me as Example38Component};
