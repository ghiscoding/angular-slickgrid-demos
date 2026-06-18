import {A}from'./chunk-DsmTeHex.js';import {D,L as Le,j as ji,A as Ao,G as G1,h as Tu,r as r$1,T as TI,U as U1,F as En,I as je,J as zt,K as Cn,O as qt,H as Hp,u as ui,B as BE,a as ap,d as Tc,f as fp,P as Ap,R as Ov,z as zI,e as Uy,v as SE,N as Nc,g as sp,V as xp,W as Lv,Q as QI,m as iD,n as uE,M as Mp,p as cD,Y as WE,X as Xm}from'./main-C6PQTYH6.js';function ce(p,ue){if(p&1&&(BE(0,`
        `),ui(1,"div",25),BE(2,`
          `),ui(3,"b"),BE(4,"Metrics:"),Tc(),BE(5,`
          `),ui(6,"span"),BE(7,`
            `),ui(8,"span"),BE(9),iD(10,"date"),Tc(),BE(11,` \u2014
            `),ui(12,"span",26),BE(13),Tc(),BE(14,`
            of
            `),ui(15,"span",27),BE(16),Tc(),BE(17,`
            items
          `),Tc(),BE(18,`
          `),ui(19,"span",28),BE(20,"All Data Loaded!!!"),Tc(),BE(21,`
        `),Tc(),BE(22,`
      `)),p&2){let t,l=uE();Uy(9),Mp(cD(10,5,(t=l.metrics())==null?null:t.endTime,"dd MMM, h:mm:ssa")),Uy(4),Mp(l.metrics()?.itemCount),Uy(3),Mp(l.metrics()?.totalItemCount),Uy(3),SE(l.tagDataClass());}}var ne="assets/data",y="users",me=250;function G(p){return p.replace(/^"/,"").replace(/"$/,"").toLowerCase()}var ye=(()=>{class p{constructor(){this.http=D(Le),this.translate=D(ji),this.subscriptions=[],this.dataset=[],this.hideSubTitle=false,this.metrics=Ao(void 0),this.tagDataClass=Ao(""),this.graphqlQuery="...",this.processing=Ao(false),this.selectedLanguage=Ao(""),this.status=Ao({text:"processing...",class:"alert alert-danger"}),this.serverWaitDelay=me,this.backendService=new A;let t="en";this.translate.use(t),this.selectedLanguage.set(t);}ngOnDestroy(){G1(this.subscriptions);}ngOnInit(){this.initializeGrid();}angularGridReady(t){this.angularGrid=t;}initializeGrid(){this.columns=[{id:"name",field:"name",nameKey:"NAME",width:60,sortable:true,filterable:true,filter:{model:Tu.compoundInput}},{id:"gender",field:"gender",nameKey:"GENDER",filterable:true,sortable:true,width:60,filter:{model:Tu.singleSelect,collection:[{value:"",label:""},{value:"male",labelKey:"MALE"},{value:"female",labelKey:"FEMALE"}]}},{id:"company",field:"company",nameKey:"COMPANY",width:60,sortable:true,filterable:true,filter:{model:Tu.multipleSelect,customStructure:{label:"company",value:"company"},collectionSortBy:{property:"company",sortDesc:false},collectionAsync:this.http.get(`${ne}/customers_100.json`),options:{filter:true}}}],this.gridOptions={enableAutoResize:true,autoResize:{container:"#demo-container",rightPadding:10},enableAutoTooltip:true,autoTooltipOptions:{enableForHeaderCells:true},enableTranslate:true,i18n:this.translate,enableFiltering:true,enableCellNavigation:true,multiColumnSort:false,gridMenu:{resizeOnShowHeaderRow:true},backendServiceApi:{disableInternalPostProcess:true,service:this.backendService,options:{datasetName:y,addLocaleIntoQuery:true,extraQueryArguments:[{field:"userId",value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(true),process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set({endTime:new Date,totalItemCount:t.data[y].totalCount||0}),this.displaySpinner(false),this.getCustomerCallback(t);}}};}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts();}displaySpinner(t){this.processing.set(t),this.status.set(t?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"});}getCustomerCallback(t){let{nodes:l,totalCount:a}=t.data[y];if(this.angularGrid){let d=r$1({},this.metrics()??{});d.totalItemCount=a,t.infiniteScrollBottomHit?this.angularGrid.dataView?.addItems(l):(this.angularGrid.slickGrid?.scrollTo(0),this.dataset=l,d.itemCount=l.length,this.metrics.set(d));}}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return new Promise(l=>{let a=0,d=0,c="",_="";this.http.get(`${ne}/customers_100.json`).subscribe(ae=>{let g=ae;if(t.includes("first:")&&(a=+(t.match(/first:([0-9]+),/)||[])[1]),t.includes("offset:")&&(d=+(t.match(/offset:([0-9]+),/)||[])[1]),t.includes("orderBy:")){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||"",_=f||"";}if(t.includes("orderBy:")){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||"",_=f||"";}if(t.includes("filterBy:")){let m=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi,u;for(;(u=m.exec(t))!==null;){let f=u[1]||"",I=u[2]||"",L=u[3]||"",[r,A]=L.split(",");f&&I&&L!==""&&(g=g.filter(se=>{let s=se[f];switch(r=G(r),A=G(A||""),I){case "EQ":return s.toLowerCase()===r;case "NE":return s.toLowerCase()!==r;case "LE":return s.toLowerCase()<=r;case "LT":return s.toLowerCase()<r;case "GT":return s.toLowerCase()>r;case "GE":return s.toLowerCase()>=r;case "EndsWith":return s.toLowerCase().endsWith(r);case "StartsWith":return s.toLowerCase().startsWith(r);case "Starts+Ends":return s.toLowerCase().startsWith(r)&&s.toLowerCase().endsWith(A);case "Contains":return s.toLowerCase().includes(r);case "Not_Contains":return !s.toLowerCase().includes(r);case "IN":let oe=L.toLocaleLowerCase().split(",");for(let de of oe)if(s.toLocaleLowerCase()===G(de))return  true;break}}));}}let S=d;S>g.length&&(t=t.replace(`offset:${S}`,""),S=0);let b=m=>c?m[c]:m;switch(_.toUpperCase()){case "ASC":g=g.sort((m,u)=>b(m).localeCompare(b(u)));break;case "DESC":g=g.sort((m,u)=>b(u).localeCompare(b(m)));break}let le=g.slice(S,S+a),re={data:{[y]:{nodes:le,totalCount:g.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),l(re);},this.serverWaitDelay);});})}refreshMetrics(t){if(t?.current>=0){let l=r$1({},this.metrics()??{});l.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(l),this.tagDataClass.set(l.itemCount===l.totalItemCount?"fully-loaded":"partial-load");}}switchLanguage(){let t=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t);})),this.getCustomerApiCall(this.backendService.buildQuery()||"");}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||p)};}static{this.\u0275cmp=TI({type:p,selectors:[["ng-component"]],decls:113,vars:11,consts:[[1,"demo39"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example39.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","is-6","italic","content"],[1,"row"],[1,"col-sm-5"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],[1,"col-md-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-filter-remove-outline"],["for","serverdelay",1,"ml-4"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"width","55px",3,"ngModelChange","ngModel"],[1,"row","mt-1"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-7"],["data-test","alert-graphql-query",1,"alert","alert-info"],["data-test","graphql-query-result",3,"innerHTML"],["gridId","grid39",3,"onAngularGridCreated","onRowCountChanged","columns","options","dataset"],[2,"margin","10px 0px"],["data-test","itemCount"],["data-test","totalItemCount"],["data-test","data-loaded-tag",1,"badge","rounded-pill","text-bg-primary"]],template:function(l,a){l&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 39: GraphQL Backend Service with Infinite Scroll
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return a.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"h6",6),BE(19,`
    `),ui(20,"ul"),BE(21,`
      `),ui(22,"li"),BE(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),Tc(),BE(24,`
      `),ui(25,"li"),BE(26,"NOTES"),Tc(),BE(27,`
      `),ui(28,"ol"),BE(29,`
        `),ui(30,"li"),BE(31,`
          `),ui(32,"code"),BE(33,"presets.pagination"),Tc(),BE(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),Tc(),BE(35,`
        `),ui(36,"li"),BE(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),Tc(),BE(38,`
        `),ui(39,"li"),BE(40,"Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page)."),Tc(),BE(41,`
      `),Tc(),BE(42,`
    `),Tc(),BE(43,`
  `),Tc(),BE(44,`

  `),ui(45,"div",7),BE(46,`
    `),ui(47,"div",8),BE(48,`
      `),ui(49,"div",9),BE(50,`
        `),ui(51,"strong"),BE(52,"Status: "),Tc(),BE(53),ui(54,"span",10),BE(55,`
          `),ap(56,"i",11),BE(57,`
        `),Tc(),BE(58,`
      `),Tc(),BE(59,`

      `),ui(60,"div",7),BE(61,`
        `),ui(62,"div",12),BE(63,`
          `),ui(64,"button",13),fp("click",function(){return a.clearAllFiltersAndSorts()}),BE(65,`
            `),ap(66,"i",14),BE(67,`
            Clear all Filter & Sorts
          `),Tc(),BE(68,`
          `),ui(69,"label",15),BE(70,"Server Delay: "),Tc(),BE(71,`
          `),ui(72,"input",16),Ap("ngModelChange",function(c){return WE(a.serverWaitDelay,c)||(a.serverWaitDelay=c),c}),Tc(),Ov(),BE(73,`
        `),Tc(),BE(74,`
      `),Tc(),BE(75,`
      `),ui(76,"div",17),BE(77,`
        `),ui(78,"div",12),BE(79,`
          `),ui(80,"button",18),fp("click",function(){return a.switchLanguage()}),BE(81,`
            `),ap(82,"i",19),BE(83,`
            Switch Language
          `),Tc(),BE(84,`
          `),ui(85,"strong"),BE(86,"Locale:"),Tc(),BE(87,`
          `),ui(88,"span",20),BE(89),Tc(),BE(90,`
        `),Tc(),BE(91,`
      `),Tc(),BE(92,`
      `),ap(93,"br"),BE(94,`
      `),zI(95,ce,23,8),Tc(),BE(96,`

    `),ui(97,"div",21),BE(98,`
      `),ui(99,"div",22),BE(100,`
        `),ui(101,"strong"),BE(102,"GraphQL Query:"),Tc(),BE(103,`
        `),ap(104,"div",23),BE(105,`
      `),Tc(),BE(106,`
    `),Tc(),BE(107,`
  `),Tc(),BE(108,`

  `),ui(109,"angular-slickgrid",24),fp("onAngularGridCreated",function(c){return a.angularGridReady(c.detail)})("onRowCountChanged",function(c){return a.refreshMetrics(c.detail.args)}),BE(110,`
  `),Tc(),BE(111,`
`),Tc(),BE(112,`
`)),l&2&&(Uy(49),SE(a.status()?.class),Uy(4),Nc(" ",a.status()?.text,`
        `),Uy(),sp("hidden",!a.processing()),Uy(18),xp("ngModel",a.serverWaitDelay),Lv(),Uy(17),Nc(`
            `,a.selectedLanguage()+".json",`
          `),Uy(6),QI(a.metrics()?95:-1),Uy(9),sp("innerHTML",a.graphqlQuery,Xm),Uy(5),sp("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[U1,En,je,zt,Cn,qt,Hp],styles:[`.demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2});}}return p})();export{ye as Example39Component};