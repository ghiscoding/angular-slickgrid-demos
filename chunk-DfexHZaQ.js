import {A}from'./chunk-BUfaobcJ.js';import {D,L as Le,e as ji,A as Ao,w as U1,f as Tu,r as r$1,b as bI,j as j1,F as En,G as je,I as zt,J as Cn,K as qt,H as Hp,u as ui,U as UE,c as cp,T as Tc,p as pp,R as Rp,O as Lv,Z as ZI,W as Wy,q as AE,k as Nc,d as ap,P as Ap,Q as jv,Y as YI,h as aD,i as fE,N as Np,o as uD,S as zE,v as ty}from'./main-WTCLCICA.js';function ce(p,ue){if(p&1&&(UE(0,`
        `),ui(1,"div",25),UE(2,`
          `),ui(3,"b"),UE(4,"Metrics:"),Tc(),UE(5,`
          `),ui(6,"span"),UE(7,`
            `),ui(8,"span"),UE(9),aD(10,"date"),Tc(),UE(11,` \u2014
            `),ui(12,"span",26),UE(13),Tc(),UE(14,`
            of
            `),ui(15,"span",27),UE(16),Tc(),UE(17,`
            items
          `),Tc(),UE(18,`
          `),ui(19,"span",28),UE(20,"All Data Loaded!!!"),Tc(),UE(21,`
        `),Tc(),UE(22,`
      `)),p&2){let t,l=fE();Wy(9),Np(uD(10,5,(t=l.metrics())==null?null:t.endTime,"dd MMM, h:mm:ssa")),Wy(4),Np(l.metrics()?.itemCount),Wy(3),Np(l.metrics()?.totalItemCount),Wy(3),AE(l.tagDataClass());}}var ne="assets/data",y="users",me=250;function G(p){return p.replace(/^"/,"").replace(/"$/,"").toLowerCase()}var ye=(()=>{class p{constructor(){this.http=D(Le),this.translate=D(ji),this.subscriptions=[],this.dataset=[],this.hideSubTitle=false,this.metrics=Ao(void 0),this.tagDataClass=Ao(""),this.graphqlQuery="...",this.processing=Ao(false),this.selectedLanguage=Ao(""),this.status=Ao({text:"processing...",class:"alert alert-danger"}),this.serverWaitDelay=me,this.backendService=new A;let t="en";this.translate.use(t),this.selectedLanguage.set(t);}ngOnDestroy(){U1(this.subscriptions);}ngOnInit(){this.initializeGrid();}angularGridReady(t){this.angularGrid=t;}initializeGrid(){this.columns=[{id:"name",field:"name",nameKey:"NAME",width:60,sortable:true,filterable:true,filter:{model:Tu.compoundInput}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:true,sortable:true,width:60,filter:{model:Tu.singleSelect,collection:[{value:"",label:""},{value:"male",labelKey:"MALE"},{value:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,sortable:true,filterable:true,filter:{model:Tu.multipleSelect,customStructure:{label:"company",value:"company"},collectionSortBy:{property:"company",sortDesc:false},collectionAsync:this.http.get(`${ne}/customers_100.json`),options:{filter:true}}}],this.gridOptions={enableAutoResize:true,autoResize:{container:"#demo-container",rightPadding:10},enableAutoTooltip:true,autoTooltipOptions:{enableForHeaderCells:true},enableTranslate:true,i18n:this.translate,enableFiltering:true,enableCellNavigation:true,multiColumnSort:false,gridMenu:{resizeOnShowHeaderRow:true},backendServiceApi:{disableInternalPostProcess:true,service:this.backendService,options:{datasetName:y,addLocaleIntoQuery:true,extraQueryArguments:[{field:"userId",value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(true),process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set({endTime:new Date,totalItemCount:t.data[y].totalCount||0}),this.displaySpinner(false),this.getCustomerCallback(t);}}};}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts();}displaySpinner(t){this.processing.set(t),this.status.set(t?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"});}getCustomerCallback(t){let{nodes:l,totalCount:a}=t.data[y];if(this.angularGrid){let d=r$1({},this.metrics()??{});d.totalItemCount=a,t.infiniteScrollBottomHit?this.angularGrid.dataView?.addItems(l):(this.angularGrid.slickGrid?.scrollTo(0),this.dataset=l,d.itemCount=l.length,this.metrics.set(d));}}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return new Promise(l=>{let a=0,d=0,c="",_="";this.http.get(`${ne}/customers_100.json`).subscribe(ae=>{let g=ae;if(t.includes("first:")&&(a=+(t.match(/first:([0-9]+),/)||[])[1]),t.includes("offset:")&&(d=+(t.match(/offset:([0-9]+),/)||[])[1]),t.includes("orderBy:")){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||"",_=f||"";}if(t.includes("orderBy:")){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||"",_=f||"";}if(t.includes("filterBy:")){let m=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi,u;for(;(u=m.exec(t))!==null;){let f=u[1]||"",I=u[2]||"",L=u[3]||"",[r,A]=L.split(",");f&&I&&L!==""&&(g=g.filter(se=>{let s=se[f];switch(r=G(r),A=G(A||""),I){case "EQ":return s.toLowerCase()===r;case "NE":return s.toLowerCase()!==r;case "LE":return s.toLowerCase()<=r;case "LT":return s.toLowerCase()<r;case "GT":return s.toLowerCase()>r;case "GE":return s.toLowerCase()>=r;case "EndsWith":return s.toLowerCase().endsWith(r);case "StartsWith":return s.toLowerCase().startsWith(r);case "Starts+Ends":return s.toLowerCase().startsWith(r)&&s.toLowerCase().endsWith(A);case "Contains":return s.toLowerCase().includes(r);case "Not_Contains":return !s.toLowerCase().includes(r);case "IN":let oe=L.toLocaleLowerCase().split(",");for(let de of oe)if(s.toLocaleLowerCase()===G(de))return  true;break}}));}}let S=d;S>g.length&&(t=t.replace(`offset:${S}`,""),S=0);let b=m=>c?m[c]:m;switch(_.toUpperCase()){case "ASC":g=g.sort((m,u)=>b(m).localeCompare(b(u)));break;case "DESC":g=g.sort((m,u)=>b(u).localeCompare(b(m)));break}let le=g.slice(S,S+a),re={data:{[y]:{nodes:le,totalCount:g.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),l(re);},this.serverWaitDelay);});})}refreshMetrics(t){if(t?.current>=0){let l=r$1({},this.metrics()??{});l.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(l),this.tagDataClass.set(l.itemCount===l.totalItemCount?"fully-loaded":"partial-load");}}switchLanguage(){let t=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t);})),this.getCustomerApiCall(this.backendService.buildQuery()||"");}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||p)};}static{this.\u0275cmp=bI({type:p,selectors:[["ng-component"]],decls:113,vars:11,consts:[[1,"demo39"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example39.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","is-6","italic","content"],[1,"row"],[1,"col-sm-5"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-md-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-filter-remove-outline"],["for","serverdelay",1,"ml-4"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"width","55px",3,"ngModelChange","ngModel"],[1,"row","mt-1"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-7"],["data-test","alert-graphql-query",1,"alert","alert-info"],["data-test","graphql-query-result",3,"innerHTML"],["gridId","grid39",3,"onAngularGridCreated","onRowCountChanged","columns","options","dataset"],[2,"margin","10px 0px"],["data-test","itemCount"],["data-test","totalItemCount"],["data-test","data-loaded-tag",1,"badge","rounded-pill","text-bg-primary"]],template:function(l,a){l&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 39: GraphQL Backend Service with Infinite Scroll
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return a.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"h6",6),UE(19,`
    `),ui(20,"ul"),UE(21,`
      `),ui(22,"li"),UE(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),Tc(),UE(24,`
      `),ui(25,"li"),UE(26,"NOTES"),Tc(),UE(27,`
      `),ui(28,"ol"),UE(29,`
        `),ui(30,"li"),UE(31,`
          `),ui(32,"code"),UE(33,"presets.pagination"),Tc(),UE(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),Tc(),UE(35,`
        `),ui(36,"li"),UE(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),Tc(),UE(38,`
        `),ui(39,"li"),UE(40,"Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page)."),Tc(),UE(41,`
      `),Tc(),UE(42,`
    `),Tc(),UE(43,`
  `),Tc(),UE(44,`

  `),ui(45,"div",7),UE(46,`
    `),ui(47,"div",8),UE(48,`
      `),ui(49,"div",9),UE(50,`
        `),ui(51,"strong"),UE(52,"Status: "),Tc(),UE(53),ui(54,"span",10),UE(55,`
          `),cp(56,"i",11),UE(57,`
        `),Tc(),UE(58,`
      `),Tc(),UE(59,`

      `),ui(60,"div",7),UE(61,`
        `),ui(62,"div",12),UE(63,`
          `),ui(64,"button",13),pp("click",function(){return a.clearAllFiltersAndSorts()}),UE(65,`
            `),cp(66,"i",14),UE(67,`
            Clear all Filter & Sorts
          `),Tc(),UE(68,`
          `),ui(69,"label",15),UE(70,"Server Delay: "),Tc(),UE(71,`
          `),ui(72,"input",16),Rp("ngModelChange",function(c){return zE(a.serverWaitDelay,c)||(a.serverWaitDelay=c),c}),Tc(),Lv(),UE(73,`
        `),Tc(),UE(74,`
      `),Tc(),UE(75,`
      `),ui(76,"div",17),UE(77,`
        `),ui(78,"div",12),UE(79,`
          `),ui(80,"button",18),pp("click",function(){return a.switchLanguage()}),UE(81,`
            `),cp(82,"i",19),UE(83,`
            Switch Language
          `),Tc(),UE(84,`
          `),ui(85,"strong"),UE(86,"Locale:"),Tc(),UE(87,`
          `),ui(88,"span",20),UE(89),Tc(),UE(90,`
        `),Tc(),UE(91,`
      `),Tc(),UE(92,`
      `),cp(93,"br"),UE(94,`
      `),ZI(95,ce,23,8),Tc(),UE(96,`

    `),ui(97,"div",21),UE(98,`
      `),ui(99,"div",22),UE(100,`
        `),ui(101,"strong"),UE(102,"GraphQL Query:"),Tc(),UE(103,`
        `),cp(104,"div",23),UE(105,`
      `),Tc(),UE(106,`
    `),Tc(),UE(107,`
  `),Tc(),UE(108,`

  `),ui(109,"angular-slickgrid",24),pp("onAngularGridCreated",function(c){return a.angularGridReady(c.detail)})("onRowCountChanged",function(c){return a.refreshMetrics(c.detail.args)}),UE(110,`
  `),Tc(),UE(111,`
`),Tc(),UE(112,`
`)),l&2&&(Wy(49),AE(a.status()?.class),Wy(4),Nc(" ",a.status()?.text,`
        `),Wy(),ap("hidden",!a.processing()),Wy(18),Ap("ngModel",a.serverWaitDelay),jv(),Wy(17),Nc(`
            `,a.selectedLanguage()+".json",`
          `),Wy(6),YI(a.metrics()?95:-1),Wy(9),ap("innerHTML",a.graphqlQuery,ty),Wy(5),ap("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[j1,En,je,zt,Cn,qt,Hp],styles:[`.demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2});}}return p})();export{ye as Example39Component};