import{t as r}from"./chunk-DarCEgGK.js";import{Ct as T,Dt as UE,En as iD,H as Jy,Kn as mp,Nn as jo,Nt as Vp,Qn as pI,Rn as lD,Tt as Tp,Wn as mi,_n as fI,bt as SI,dt as Pc,hr as vp,ht as QI,kt as Up,ln as cy,o as Ac,pn as eE,qt as _D,r as $p,vr as vv,yr as wD}from"./chunk-06EGdSfW.js";import{H as _W,b as Pm,m as Ki,n as CW,st as ip}from"./chunk-CAMk6vEo.js";import{_ as Vn,b as zt,d as Fn,g as Te,n as ze,s as $t}from"./main-T6P2BZBW.js";import{t as A}from"./chunk-DCwS4vqO.js";function ce(p,ue){if(p&1&&(iD(0,`
        `),mi(1,`div`,25),iD(2,`
          `),mi(3,`b`),iD(4,`Metrics:`),Ac(),iD(5,`
          `),mi(6,`span`),iD(7,`
            `),mi(8,`span`),iD(9),wD(10,`date`),Ac(),iD(11,` \u2014
            `),mi(12,`span`,26),iD(13),Ac(),iD(14,`
            of
            `),mi(15,`span`,27),iD(16),Ac(),iD(17,`
            items
          `),Ac(),iD(18,`
          `),mi(19,`span`,28),iD(20,`All Data Loaded!!!`),Ac(),iD(21,`
        `),Ac(),iD(22,`
      `)),p&2){let t=SI();cy(9),Vp(_D(10,5,t.metrics()?.endTime,`dd MMM, h:mm:ssa`)),cy(4),Vp(t.metrics()?.itemCount),cy(3),Vp(t.metrics()?.totalItemCount),cy(3),QI(t.tagDataClass())}}var ne=`assets/data`;var y=`users`;var me=250;function G(p){return p.replace(/^"/,``).replace(/"$/,``).toLowerCase()}var ye=(()=>{class p{constructor(){this.http=T(ze),this.translate=T(Ki),this.subscriptions=[],this.dataset=[],this.hideSubTitle=!1,this.metrics=jo(void 0),this.tagDataClass=jo(``),this.graphqlQuery=`...`,this.processing=jo(!1),this.selectedLanguage=jo(``),this.status=jo({text:`processing...`,class:`alert alert-danger`}),this.serverWaitDelay=me,this.backendService=new A;let t=`en`;this.translate.use(t),this.selectedLanguage.set(t)}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,sortable:!0,filterable:!0,filter:{model:ip.compoundInput}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:`male`,labelKey:`MALE`},{value:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,sortable:!0,filterable:!0,filter:{model:ip.multipleSelect,customStructure:{label:`company`,value:`company`},collectionSortBy:{property:`company`,sortDesc:!1},collectionAsync:this.http.get(`${ne}/customers_100.json`),options:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.translate,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:y,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set({endTime:new Date,totalItemCount:t.data[y].totalCount||0}),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(t){this.processing.set(t),this.status.set(t?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(t){let{nodes:r$1,totalCount:a}=t.data[y];if(this.angularGrid){let d=r({},this.metrics()??{});d.totalItemCount=a,t.infiniteScrollBottomHit?this.angularGrid.dataView?.addItems(r$1):(this.angularGrid.slickGrid?.scrollTo(0),this.dataset=r$1,d.itemCount=r$1.length,this.metrics.set(d))}}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return new Promise(r=>{let a=0,d=0,c=``,_=``;this.http.get(`${ne}/customers_100.json`).subscribe(ae=>{let g=ae;if(t.includes(`first:`)&&(a=+(t.match(/first:([0-9]+),/)||[])[1]),t.includes(`offset:`)&&(d=+(t.match(/offset:([0-9]+),/)||[])[1]),t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`filterBy:`)){let m=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi,u;for(;(u=m.exec(t))!==null;){let f=u[1]||``,I=u[2]||``,L=u[3]||``,[l,A]=L.split(`,`);f&&I&&L!==``&&(g=g.filter(se=>{let s=se[f];switch(l=G(l),A=G(A||``),I){case`EQ`:return s.toLowerCase()===l;case`NE`:return s.toLowerCase()!==l;case`LE`:return s.toLowerCase()<=l;case`LT`:return s.toLowerCase()<l;case`GT`:return s.toLowerCase()>l;case`GE`:return s.toLowerCase()>=l;case`EndsWith`:return s.toLowerCase().endsWith(l);case`StartsWith`:return s.toLowerCase().startsWith(l);case`Starts+Ends`:return s.toLowerCase().startsWith(l)&&s.toLowerCase().endsWith(A);case`Contains`:return s.toLowerCase().includes(l);case`Not_Contains`:return!s.toLowerCase().includes(l);case`IN`:let oe=L.toLocaleLowerCase().split(`,`);for(let de of oe)if(s.toLocaleLowerCase()===G(de))return!0;break}}))}}let S=d;S>g.length&&(t=t.replace(`offset:${S}`,``),S=0);let b=m=>c?m[c]:m;switch(_.toUpperCase()){case`ASC`:g=g.sort((m,u)=>b(m).localeCompare(b(u)));break;case`DESC`:g=g.sort((m,u)=>b(u).localeCompare(b(m)));break}let re=g.slice(S,S+a),le={data:{[y]:{nodes:re,totalCount:g.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),r(le)},this.serverWaitDelay)})})}refreshMetrics(t){if(t?.current>=0){let r$2=r({},this.metrics()??{});r$2.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(r$2),this.tagDataClass.set(r$2.itemCount===r$2.totalItemCount?`fully-loaded`:`partial-load`)}}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)})),this.getCustomerApiCall(this.backendService.buildQuery()||``)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||p)}}static{this.ɵcmp=UE({type:p,selectors:[[`ng-component`]],decls:113,vars:11,consts:[[1,`demo39`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example39.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid39`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(r,a){r&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 39: GraphQL Backend Service with Infinite Scroll
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return a.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`h6`,6),iD(19,`
    `),mi(20,`ul`),iD(21,`
      `),mi(22,`li`),iD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),Ac(),iD(24,`
      `),mi(25,`li`),iD(26,`NOTES`),Ac(),iD(27,`
      `),mi(28,`ol`),iD(29,`
        `),mi(30,`li`),iD(31,`
          `),mi(32,`code`),iD(33,`presets.pagination`),Ac(),iD(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),Ac(),iD(35,`
        `),mi(36,`li`),iD(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),Ac(),iD(38,`
        `),mi(39,`li`),iD(40,`Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).`),Ac(),iD(41,`
      `),Ac(),iD(42,`
    `),Ac(),iD(43,`
  `),Ac(),iD(44,`

  `),mi(45,`div`,7),iD(46,`
    `),mi(47,`div`,8),iD(48,`
      `),mi(49,`div`,9),iD(50,`
        `),mi(51,`strong`),iD(52,`Status: `),Ac(),iD(53),mi(54,`span`,10),iD(55,`
          `),vp(56,`i`,11),iD(57,`
        `),Ac(),iD(58,`
      `),Ac(),iD(59,`

      `),mi(60,`div`,7),iD(61,`
        `),mi(62,`div`,12),iD(63,`
          `),mi(64,`button`,13),Tp(`click`,function(){return a.clearAllFiltersAndSorts()}),iD(65,`
            `),vp(66,`i`,14),iD(67,`
            Clear all Filter & Sorts
          `),Ac(),iD(68,`
          `),mi(69,`label`,15),iD(70,`Server Delay: `),Ac(),iD(71,`
          `),mi(72,`input`,16),$p(`ngModelChange`,function(c){return lD(a.serverWaitDelay,c)||(a.serverWaitDelay=c),c}),Ac(),Jy(),iD(73,`
        `),Ac(),iD(74,`
      `),Ac(),iD(75,`
      `),mi(76,`div`,17),iD(77,`
        `),mi(78,`div`,12),iD(79,`
          `),mi(80,`button`,18),Tp(`click`,function(){return a.switchLanguage()}),iD(81,`
            `),vp(82,`i`,19),iD(83,`
            Switch Language
          `),Ac(),iD(84,`
          `),mi(85,`strong`),iD(86,`Locale:`),Ac(),iD(87,`
          `),mi(88,`span`,20),iD(89),Ac(),iD(90,`
        `),Ac(),iD(91,`
      `),Ac(),iD(92,`
      `),vp(93,`br`),iD(94,`
      `),fI(95,ce,23,8),Ac(),iD(96,`

    `),mi(97,`div`,21),iD(98,`
      `),mi(99,`div`,22),iD(100,`
        `),mi(101,`strong`),iD(102,`GraphQL Query:`),Ac(),iD(103,`
        `),vp(104,`div`,23),iD(105,`
      `),Ac(),iD(106,`
    `),Ac(),iD(107,`
  `),Ac(),iD(108,`

  `),mi(109,`angular-slickgrid`,24),Tp(`onAngularGridCreated`,function(c){return a.angularGridReady(c.detail)})(`onRowCountChanged`,function(c){return a.refreshMetrics(c.detail.args)}),iD(110,`
  `),Ac(),iD(111,`
`),Ac(),iD(112,`
`)),r&2&&(cy(49),QI(a.status()?.class),cy(4),Pc(` `,a.status()?.text,`
        `),cy(),mp(`hidden`,!a.processing()),cy(18),Up(`ngModel`,a.serverWaitDelay),eE(),cy(17),Pc(`
            `,a.selectedLanguage()+`.json`,`
          `),cy(6),pI(a.metrics()?95:-1),cy(9),mp(`innerHTML`,a.graphqlQuery,vv),cy(5),mp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[_W,Fn,Te,zt,Vn,$t,Pm],styles:[`.demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return p})();export{ye as Example39Component};