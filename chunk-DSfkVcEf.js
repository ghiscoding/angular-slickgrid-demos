import{t as r}from"./chunk-DarCEgGK.js";import{$ as MD,$n as pD,G as Kp,In as lD,M as Ho,Tr as xD,U as Jp,V as JI,a as Ap,bt as RI,f as Cy,jn as jc,kr as yI,mn as dv,on as bp,p as D,pr as tE,sr as rE,tn as _p,xn as gI,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,D as Mi,d as E1,l as D1,ut as jp}from"./chunk-Dk5kBPyv.js";import{b as zt,c as Dn,d as In,n as ze,u as Ge,y as qt}from"./main-BEH6XCIK.js";import{t as A}from"./chunk-Bcy5CVbq.js";function ce(p,ue){if(p&1&&(lD(0,`
        `),vi(1,`div`,25),lD(2,`
          `),vi(3,`b`),lD(4,`Metrics:`),Rc(),lD(5,`
          `),vi(6,`span`),lD(7,`
            `),vi(8,`span`),lD(9),MD(10,`date`),Rc(),lD(11,` \u2014
            `),vi(12,`span`,26),lD(13),Rc(),lD(14,`
            of
            `),vi(15,`span`,27),lD(16),Rc(),lD(17,`
            items
          `),Rc(),lD(18,`
          `),vi(19,`span`,28),lD(20,`All Data Loaded!!!`),Rc(),lD(21,`
        `),Rc(),lD(22,`
      `)),p&2){let t,l=RI();dv(9),Qp(xD(10,5,(t=l.metrics())==null?null:t.endTime,`dd MMM, h:mm:ssa`)),dv(4),Qp(l.metrics()?.itemCount),dv(3),Qp(l.metrics()?.totalItemCount),dv(3),JI(l.tagDataClass())}}var ne=`assets/data`;var y=`users`;var me=250;function G(p){return p.replace(/^"/,``).replace(/"$/,``).toLowerCase()}var ye=(()=>{class p{constructor(){this.http=D(ze),this.translate=D(Mi),this.subscriptions=[],this.dataset=[],this.hideSubTitle=!1,this.metrics=Ho(void 0),this.tagDataClass=Ho(``),this.graphqlQuery=`...`,this.processing=Ho(!1),this.selectedLanguage=Ho(``),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.serverWaitDelay=me,this.backendService=new A;let t=`en`;this.translate.use(t),this.selectedLanguage.set(t)}ngOnDestroy(){E1(this.subscriptions)}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,sortable:!0,filterable:!0,filter:{model:uu.compoundInput}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,filter:{model:uu.singleSelect,collection:[{value:``,label:``},{value:`male`,labelKey:`MALE`},{value:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,sortable:!0,filterable:!0,filter:{model:uu.multipleSelect,customStructure:{label:`company`,value:`company`},collectionSortBy:{property:`company`,sortDesc:!1},collectionAsync:this.http.get(`${ne}/customers_100.json`),options:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.translate,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:y,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set({endTime:new Date,totalItemCount:t.data[y].totalCount||0}),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(t){this.processing.set(t),this.status.set(t?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(t){let{nodes:l,totalCount:a}=t.data[y];if(this.angularGrid){let d=r({},this.metrics()??{});d.totalItemCount=a,t.infiniteScrollBottomHit?this.angularGrid.dataView?.addItems(l):(this.angularGrid.slickGrid?.scrollTo(0),this.dataset=l,d.itemCount=l.length,this.metrics.set(d))}}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return new Promise(l=>{let a=0,d=0,c=``,_=``;this.http.get(`${ne}/customers_100.json`).subscribe(ae=>{let g=ae;if(t.includes(`first:`)&&(a=+(t.match(/first:([0-9]+),/)||[])[1]),t.includes(`offset:`)&&(d=+(t.match(/offset:([0-9]+),/)||[])[1]),t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`filterBy:`)){let m=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi,u;for(;(u=m.exec(t))!==null;){let f=u[1]||``,I=u[2]||``,L=u[3]||``,[r,A]=L.split(`,`);f&&I&&L!==``&&(g=g.filter(se=>{let s=se[f];switch(r=G(r),A=G(A||``),I){case`EQ`:return s.toLowerCase()===r;case`NE`:return s.toLowerCase()!==r;case`LE`:return s.toLowerCase()<=r;case`LT`:return s.toLowerCase()<r;case`GT`:return s.toLowerCase()>r;case`GE`:return s.toLowerCase()>=r;case`EndsWith`:return s.toLowerCase().endsWith(r);case`StartsWith`:return s.toLowerCase().startsWith(r);case`Starts+Ends`:return s.toLowerCase().startsWith(r)&&s.toLowerCase().endsWith(A);case`Contains`:return s.toLowerCase().includes(r);case`Not_Contains`:return!s.toLowerCase().includes(r);case`IN`:let oe=L.toLocaleLowerCase().split(`,`);for(let de of oe)if(s.toLocaleLowerCase()===G(de))return!0}}))}}let S=d;S>g.length&&(t=t.replace(`offset:${S}`,``),S=0);let b=m=>c?m[c]:m;switch(_.toUpperCase()){case`ASC`:g=g.sort((m,u)=>b(m).localeCompare(b(u)));break;case`DESC`:g=g.sort((m,u)=>b(u).localeCompare(b(m)))}let le=g.slice(S,S+a),re={data:{[y]:{nodes:le,totalCount:g.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),l(re)},this.serverWaitDelay)})})}refreshMetrics(t){if(t?.current>=0){let l=r({},this.metrics()??{});l.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(l),this.tagDataClass.set(l.itemCount===l.totalItemCount?`fully-loaded`:`partial-load`)}}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)})),this.getCustomerApiCall(this.backendService.buildQuery()||``)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||p)}}static{this.ɵcmp=WE({type:p,selectors:[[`ng-component`]],decls:113,vars:11,consts:[[1,`demo39`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example39.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid39`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(l,a){l&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 39: GraphQL Backend Service with Infinite Scroll
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return a.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`h6`,6),lD(19,`
    `),vi(20,`ul`),lD(21,`
      `),vi(22,`li`),lD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),Rc(),lD(24,`
      `),vi(25,`li`),lD(26,`NOTES`),Rc(),lD(27,`
      `),vi(28,`ol`),lD(29,`
        `),vi(30,`li`),lD(31,`
          `),vi(32,`code`),lD(33,`presets.pagination`),Rc(),lD(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),Rc(),lD(35,`
        `),vi(36,`li`),lD(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),Rc(),lD(38,`
        `),vi(39,`li`),lD(40,`Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).`),Rc(),lD(41,`
      `),Rc(),lD(42,`
    `),Rc(),lD(43,`
  `),Rc(),lD(44,`

  `),vi(45,`div`,7),lD(46,`
    `),vi(47,`div`,8),lD(48,`
      `),vi(49,`div`,9),lD(50,`
        `),vi(51,`strong`),lD(52,`Status: `),Rc(),lD(53),vi(54,`span`,10),lD(55,`
          `),_p(56,`i`,11),lD(57,`
        `),Rc(),lD(58,`
      `),Rc(),lD(59,`

      `),vi(60,`div`,7),lD(61,`
        `),vi(62,`div`,12),lD(63,`
          `),vi(64,`button`,13),Ap(`click`,function(){return a.clearAllFiltersAndSorts()}),lD(65,`
            `),_p(66,`i`,14),lD(67,`
            Clear all Filter & Sorts
          `),Rc(),lD(68,`
          `),vi(69,`label`,15),lD(70,`Server Delay: `),Rc(),lD(71,`
          `),vi(72,`input`,16),tE(),Jp(`ngModelChange`,function(c){return pD(a.serverWaitDelay,c)||(a.serverWaitDelay=c),c}),Rc(),lD(73,`
        `),Rc(),lD(74,`
      `),Rc(),lD(75,`
      `),vi(76,`div`,17),lD(77,`
        `),vi(78,`div`,12),lD(79,`
          `),vi(80,`button`,18),Ap(`click`,function(){return a.switchLanguage()}),lD(81,`
            `),_p(82,`i`,19),lD(83,`
            Switch Language
          `),Rc(),lD(84,`
          `),vi(85,`strong`),lD(86,`Locale:`),Rc(),lD(87,`
          `),vi(88,`span`,20),lD(89),Rc(),lD(90,`
        `),Rc(),lD(91,`
      `),Rc(),lD(92,`
      `),_p(93,`br`),lD(94,`
      `),gI(95,ce,23,8),Rc(),lD(96,`

    `),vi(97,`div`,21),lD(98,`
      `),vi(99,`div`,22),lD(100,`
        `),vi(101,`strong`),lD(102,`GraphQL Query:`),Rc(),lD(103,`
        `),_p(104,`div`,23),lD(105,`
      `),Rc(),lD(106,`
    `),Rc(),lD(107,`
  `),Rc(),lD(108,`

  `),vi(109,`angular-slickgrid`,24),Ap(`onAngularGridCreated`,function(c){return a.angularGridReady(c.detail)})(`onRowCountChanged`,function(c){return a.refreshMetrics(c.detail.args)}),lD(110,`
  `),Rc(),lD(111,`
`),Rc(),lD(112,`
`)),l&2&&(dv(49),JI(a.status()?.class),dv(4),jc(` `,a.status()?.text,`
        `),dv(),bp(`hidden`,!a.processing()),dv(18),Kp(`ngModel`,a.serverWaitDelay),rE(),dv(17),jc(`
            `,a.selectedLanguage()+`.json`,`
          `),dv(6),yI(a.metrics()?95:-1),dv(9),bp(`innerHTML`,a.graphqlQuery,Cy),dv(5),bp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[D1,In,Ge,zt,Dn,qt,jp],styles:[`.demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return p})();export{ye as Example39Component};