import{a as ee}from"./chunk-SJGGOD7H.js";import{b as j,c as U,f as Y,h as Z,o as $}from"./chunk-BBW77BDN.js";import{c as V}from"./chunk-5J3HPOY2.js";import{Ca as X,Da as q,n as K,u as J,wa as w}from"./chunk-V3K67AAF.js";import{$b as H,Ib as D,Jb as e,Kb as v,Lb as T,Oa as z,Ob as B,Pb as Q,Qb as P,U as M,Zb as O,cb as R,db as F,hb as E,ia as x,ib as i,jb as n,kb as h,ub as b,wa as N,wb as W,za as m}from"./chunk-CCOLL5XZ.js";import{a as k}from"./chunk-PRARYYF3.js";function oe(p,me){if(p&1&&(e(0,`
        `),i(1,"div",25),e(2,`
          `),i(3,"b"),e(4,"Metrics:"),n(),e(5,`
          `),i(6,"span"),e(7,`
            `),i(8,"span"),e(9),O(10,"date"),n(),e(11,` \u2014
            `),i(12,"span",26),e(13),n(),e(14,`
            of
            `),i(15,"span",27),e(16),n(),e(17,`
            items
          `),n(),e(18,`
          `),i(19,"span",28),e(20,"All Data Loaded!!!"),n(),e(21,`
        `),n(),e(22,`
      `)),p&2){let t,r,a,l=W();m(9),v(H(10,5,(t=l.metrics())==null?null:t.endTime,"dd MMM, h:mm:ssa")),m(4),v((r=l.metrics())==null?null:r.itemCount),m(3),v((a=l.metrics())==null?null:a.totalItemCount),m(3),D(l.tagDataClass())}}var te="assets/data",y="users",de=250;function G(p){return p.replace(/^"/,"").replace(/"$/,"").toLowerCase()}var ve=(()=>{class p{constructor(){this.http=M(V),this.translate=M(J),this.subscriptions=[],this.dataset=[],this.hideSubTitle=!1,this.metrics=x(void 0),this.tagDataClass=x(""),this.graphqlQuery="...",this.processing=x(!1),this.selectedLanguage=x(""),this.status=x({text:"processing...",class:"alert alert-danger"}),this.serverWaitDelay=de,this.backendService=new ee;let t="en";this.translate.use(t),this.selectedLanguage.set(t)}ngOnDestroy(){X(this.subscriptions)}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:"name",field:"name",nameKey:"NAME",width:60,sortable:!0,filterable:!0,filter:{model:w.compoundInput}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:!0,sortable:!0,width:60,filter:{model:w.singleSelect,collection:[{value:"",label:""},{value:"male",labelKey:"MALE"},{value:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,sortable:!0,filterable:!0,filter:{model:w.multipleSelect,customStructure:{label:"company",value:"company"},collectionSortBy:{property:"company",sortDesc:!1},collectionAsync:this.http.get(`${te}/customers_100.json`),options:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.translate,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:y,addLocaleIntoQuery:!0,extraQueryArguments:[{field:"userId",value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set({endTime:new Date,totalItemCount:t.data[y].totalCount||0}),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(t){this.processing.set(t),this.status.set(t?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"})}getCustomerCallback(t){let{nodes:r,totalCount:a}=t.data[y];if(this.angularGrid){let l=k({},this.metrics()??{});l.totalItemCount=a,t.infiniteScrollBottomHit?this.angularGrid.dataView?.addItems(r):(this.angularGrid.slickGrid?.scrollTo(0),this.dataset=r,l.itemCount=r.length,this.metrics.set(l))}}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return new Promise(r=>{let a=0,l=0,s="",_="";this.http.get(`${te}/customers_100.json`).subscribe(ie=>{let g=ie;if(t.includes("first:")&&(a=+(t.match(/first:([0-9]+),/)||[])[1]),t.includes("offset:")&&(l=+(t.match(/offset:([0-9]+),/)||[])[1]),t.includes("orderBy:")){let[c,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];s=u||"",_=f||""}if(t.includes("orderBy:")){let[c,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];s=u||"",_=f||""}if(t.includes("filterBy:")){let c=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi,u;for(;(u=c.exec(t))!==null;){let f=u[1]||"",I=u[2]||"",L=u[3]||"",[o,A]=L.split(",");f&&I&&L!==""&&(g=g.filter(le=>{let d=le[f];switch(o=G(o),A=G(A||""),I){case"EQ":return d.toLowerCase()===o;case"NE":return d.toLowerCase()!==o;case"LE":return d.toLowerCase()<=o;case"LT":return d.toLowerCase()<o;case"GT":return d.toLowerCase()>o;case"GE":return d.toLowerCase()>=o;case"EndsWith":return d.toLowerCase().endsWith(o);case"StartsWith":return d.toLowerCase().startsWith(o);case"Starts+Ends":return d.toLowerCase().startsWith(o)&&d.toLowerCase().endsWith(A);case"Contains":return d.toLowerCase().includes(o);case"Not_Contains":return!d.toLowerCase().includes(o);case"IN":let re=L.toLocaleLowerCase().split(",");for(let se of re)if(d.toLocaleLowerCase()===G(se))return!0;break}}))}}let S=l;S>g.length&&(t=t.replace(`offset:${S}`,""),S=0);let C=c=>s?c[s]:c;switch(_.toUpperCase()){case"ASC":g=g.sort((c,u)=>C(c).localeCompare(C(u)));break;case"DESC":g=g.sort((c,u)=>C(u).localeCompare(C(c)));break}let ne=g.slice(S,S+a),ae={data:{[y]:{nodes:ne,totalCount:g.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),r(ae)},this.serverWaitDelay)})})}refreshMetrics(t){if(t?.current>=0){let r=k({},this.metrics()??{});r.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(r),this.tagDataClass.set(r.itemCount===r.totalItemCount?"fully-loaded":"partial-load")}}switchLanguage(){let t=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)})),this.getCustomerApiCall(this.backendService.buildQuery()||"")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(r){return new(r||p)}}static{this.\u0275cmp=z({type:p,selectors:[["ng-component"]],decls:113,vars:11,consts:[[1,"demo39"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example39.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","is-6","italic","content"],[1,"row"],[1,"col-sm-5"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-md-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-filter-remove-outline"],["for","serverdelay",1,"ml-4"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"width","55px",3,"ngModelChange","ngModel"],[1,"row","mt-1"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-7"],["data-test","alert-graphql-query",1,"alert","alert-info"],["data-test","graphql-query-result",3,"innerHTML"],["gridId","grid39",3,"onAngularGridCreated","onRowCountChanged","columns","options","dataset"],[2,"margin","10px 0px"],["data-test","itemCount"],["data-test","totalItemCount"],["data-test","data-loaded-tag",1,"badge","rounded-pill","text-bg-primary"]],template:function(r,a){if(r&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 39: GraphQL Backend Service with Infinite Scroll
    `),i(4,"span",1),e(5,`
      `),i(6,"a",2),e(7,`
        `),h(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),i(12,"button",4),b("click",function(){return a.toggleSubTitle()}),e(13,`
      `),h(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),i(18,"h6",6),e(19,`
    `),i(20,"ul"),e(21,`
      `),i(22,"li"),e(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),n(),e(24,`
      `),i(25,"li"),e(26,"NOTES"),n(),e(27,`
      `),i(28,"ol"),e(29,`
        `),i(30,"li"),e(31,`
          `),i(32,"code"),e(33,"presets.pagination"),n(),e(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),n(),e(35,`
        `),i(36,"li"),e(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),n(),e(38,`
        `),i(39,"li"),e(40,"Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page)."),n(),e(41,`
      `),n(),e(42,`
    `),n(),e(43,`
  `),n(),e(44,`

  `),i(45,"div",7),e(46,`
    `),i(47,"div",8),e(48,`
      `),i(49,"div",9),e(50,`
        `),i(51,"strong"),e(52,"Status: "),n(),e(53),i(54,"span",10),e(55,`
          `),h(56,"i",11),e(57,`
        `),n(),e(58,`
      `),n(),e(59,`

      `),i(60,"div",7),e(61,`
        `),i(62,"div",12),e(63,`
          `),i(64,"button",13),b("click",function(){return a.clearAllFiltersAndSorts()}),e(65,`
            `),h(66,"i",14),e(67,`
            Clear all Filter & Sorts
          `),n(),e(68,`
          `),i(69,"label",15),e(70,"Server Delay: "),n(),e(71,`
          `),i(72,"input",16),P("ngModelChange",function(s){return Q(a.serverWaitDelay,s)||(a.serverWaitDelay=s),s}),n(),e(73,`
        `),n(),e(74,`
      `),n(),e(75,`
      `),i(76,"div",17),e(77,`
        `),i(78,"div",12),e(79,`
          `),i(80,"button",18),b("click",function(){return a.switchLanguage()}),e(81,`
            `),h(82,"i",19),e(83,`
            Switch Language
          `),n(),e(84,`
          `),i(85,"strong"),e(86,"Locale:"),n(),e(87,`
          `),i(88,"span",20),e(89),n(),e(90,`
        `),n(),e(91,`
      `),n(),e(92,`
      `),h(93,"br"),e(94,`
      `),R(95,oe,23,8),n(),e(96,`

    `),i(97,"div",21),e(98,`
      `),i(99,"div",22),e(100,`
        `),i(101,"strong"),e(102,"GraphQL Query:"),n(),e(103,`
        `),h(104,"div",23),e(105,`
      `),n(),e(106,`
    `),n(),e(107,`
  `),n(),e(108,`

  `),i(109,"angular-slickgrid",24),b("onAngularGridCreated",function(s){return a.angularGridReady(s.detail)})("onRowCountChanged",function(s){return a.refreshMetrics(s.detail.args)}),e(110,`
  `),n(),e(111,`
`),n(),e(112,`
`)),r&2){let l,s;m(49),D((l=a.status())==null?null:l.class),m(4),T(" ",(s=a.status())==null?null:s.text,`
        `),m(),E("hidden",!a.processing()),m(18),B("ngModel",a.serverWaitDelay),m(17),T(`
            `,a.selectedLanguage()+".json",`
          `),m(6),F(a.metrics()?95:-1),m(9),E("innerHTML",a.graphqlQuery,N),m(5),E("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset)}},dependencies:[q,$,j,Z,U,Y,K],styles:[`.demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return p})();export{ve as Example39Component};
