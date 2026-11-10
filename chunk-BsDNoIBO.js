import{t as A}from"./chunk-Cwh4hLmS.js";import{g as Yt,h as Wt,m as Sn,n as ze,s as An,y as ke}from"./main-KCATS47T.js";import{Ct as ku,V as R$,Z as Wi,lt as dm,w as I$}from"./chunk-Lo0QQjTd.js";import{Gn as mI,I as Ho,In as kI,K as Jp,P as Hc,Tn as hD,X as Lc,Y as Kp,Yn as oE,an as by,dr as uD,en as _p,f as D,in as bp,k as GE,o as Ap,ot as ND,qn as nE,qt as XI,r as AD,vr as vI,wt as Qp,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";import{t as r}from"./chunk-DarCEgGK.js";function ce(p,ue){if(p&1&&(uD(0,`
        `),vi(1,`div`,25),uD(2,`
          `),vi(3,`b`),uD(4,`Metrics:`),Lc(),uD(5,`
          `),vi(6,`span`),uD(7,`
            `),vi(8,`span`),uD(9),ND(10,`date`),Lc(),uD(11,` \u2014
            `),vi(12,`span`,26),uD(13),Lc(),uD(14,`
            of
            `),vi(15,`span`,27),uD(16),Lc(),uD(17,`
            items
          `),Lc(),uD(18,`
          `),vi(19,`span`,28),uD(20,`All Data Loaded!!!`),Lc(),uD(21,`
        `),Lc(),uD(22,`
      `)),p&2){let t,l=kI();fv(9),Qp(AD(10,5,(t=l.metrics())==null?null:t.endTime,`dd MMM, h:mm:ssa`)),fv(4),Qp(l.metrics()?.itemCount),fv(3),Qp(l.metrics()?.totalItemCount),fv(3),XI(l.tagDataClass())}}var ne=`assets/data`;var y=`users`;var me=250;function G(p){return p.replace(/^"/,``).replace(/"$/,``).toLowerCase()}var ye=(()=>{class p{constructor(){this.http=D(ze),this.translate=D(Wi),this.subscriptions=[],this.dataset=[],this.hideSubTitle=!1,this.metrics=Ho(void 0),this.tagDataClass=Ho(``),this.graphqlQuery=`...`,this.processing=Ho(!1),this.selectedLanguage=Ho(``),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.serverWaitDelay=me,this.backendService=new A;let t=`en`;this.translate.use(t),this.selectedLanguage.set(t)}ngOnDestroy(){I$(this.subscriptions)}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,sortable:!0,filterable:!0,filter:{model:ku.compoundInput}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,filter:{model:ku.singleSelect,collection:[{value:``,label:``},{value:`male`,labelKey:`MALE`},{value:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,sortable:!0,filterable:!0,filter:{model:ku.multipleSelect,customStructure:{label:`company`,value:`company`},collectionSortBy:{property:`company`,sortDesc:!1},collectionAsync:this.http.get(`${ne}/customers_100.json`),options:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.translate,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:y,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set({endTime:/* @__PURE__ */ new Date,totalItemCount:t.data[y].totalCount||0}),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(t){this.processing.set(t),this.status.set(t?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(t){let{nodes:l,totalCount:a}=t.data[y];if(this.angularGrid){let d=r({},this.metrics()??{});d.totalItemCount=a,t.infiniteScrollBottomHit?this.angularGrid.dataView?.addItems(l):(this.angularGrid.slickGrid?.scrollTo(0),this.dataset=l,d.itemCount=l.length,this.metrics.set(d))}}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return new Promise(l=>{let a=0,d=0,c=``,_=``;this.http.get(`${ne}/customers_100.json`).subscribe(ae=>{let g=ae;if(t.includes(`first:`)&&(a=+(t.match(/first:([0-9]+),/)||[])[1]),t.includes(`offset:`)&&(d=+(t.match(/offset:([0-9]+),/)||[])[1]),t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`filterBy:`)){let m=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi,u;for(;(u=m.exec(t))!==null;){let f=u[1]||``,I=u[2]||``,L=u[3]||``,[r,A]=L.split(`,`);f&&I&&L!==``&&(g=g.filter(se=>{let s=se[f];switch(r=G(r),A=G(A||``),I){case`EQ`:return s.toLowerCase()===r;case`NE`:return s.toLowerCase()!==r;case`LE`:return s.toLowerCase()<=r;case`LT`:return s.toLowerCase()<r;case`GT`:return s.toLowerCase()>r;case`GE`:return s.toLowerCase()>=r;case`EndsWith`:return s.toLowerCase().endsWith(r);case`StartsWith`:return s.toLowerCase().startsWith(r);case`Starts+Ends`:return s.toLowerCase().startsWith(r)&&s.toLowerCase().endsWith(A);case`Contains`:return s.toLowerCase().includes(r);case`Not_Contains`:return!s.toLowerCase().includes(r);case`IN`:let oe=L.toLocaleLowerCase().split(`,`);for(let de of oe)if(s.toLocaleLowerCase()===G(de))return!0}}))}}let S=d;S>g.length&&(t=t.replace(`offset:${S}`,``),S=0);let b=m=>c?m[c]:m;switch(_.toUpperCase()){case`ASC`:g=g.sort((m,u)=>b(m).localeCompare(b(u)));break;case`DESC`:g=g.sort((m,u)=>b(u).localeCompare(b(m)))}let le=g.slice(S,S+a),re={data:{[y]:{nodes:le,totalCount:g.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),l(re)},this.serverWaitDelay)})})}refreshMetrics(t){if(t?.current>=0){let l=r({},this.metrics()??{});l.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(l),this.tagDataClass.set(l.itemCount===l.totalItemCount?`fully-loaded`:`partial-load`)}}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)})),this.getCustomerApiCall(this.backendService.buildQuery()||``)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||p)}}static{this.ɵcmp=GE({type:p,selectors:[[`ng-component`]],decls:113,vars:11,consts:[[1,`demo39`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example39.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid39`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(l,a){l&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 39: GraphQL Backend Service with Infinite Scroll
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return a.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`h6`,6),uD(19,`
    `),vi(20,`ul`),uD(21,`
      `),vi(22,`li`),uD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),Lc(),uD(24,`
      `),vi(25,`li`),uD(26,`NOTES`),Lc(),uD(27,`
      `),vi(28,`ol`),uD(29,`
        `),vi(30,`li`),uD(31,`
          `),vi(32,`code`),uD(33,`presets.pagination`),Lc(),uD(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),Lc(),uD(35,`
        `),vi(36,`li`),uD(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),Lc(),uD(38,`
        `),vi(39,`li`),uD(40,`Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).`),Lc(),uD(41,`
      `),Lc(),uD(42,`
    `),Lc(),uD(43,`
  `),Lc(),uD(44,`

  `),vi(45,`div`,7),uD(46,`
    `),vi(47,`div`,8),uD(48,`
      `),vi(49,`div`,9),uD(50,`
        `),vi(51,`strong`),uD(52,`Status: `),Lc(),uD(53),vi(54,`span`,10),uD(55,`
          `),_p(56,`i`,11),uD(57,`
        `),Lc(),uD(58,`
      `),Lc(),uD(59,`

      `),vi(60,`div`,7),uD(61,`
        `),vi(62,`div`,12),uD(63,`
          `),vi(64,`button`,13),Ap(`click`,function(){return a.clearAllFiltersAndSorts()}),uD(65,`
            `),_p(66,`i`,14),uD(67,`
            Clear all Filter & Sorts
          `),Lc(),uD(68,`
          `),vi(69,`label`,15),uD(70,`Server Delay: `),Lc(),uD(71,`
          `),vi(72,`input`,16),nE(),Jp(`ngModelChange`,function(c){return hD(a.serverWaitDelay,c)||(a.serverWaitDelay=c),c}),Lc(),uD(73,`
        `),Lc(),uD(74,`
      `),Lc(),uD(75,`
      `),vi(76,`div`,17),uD(77,`
        `),vi(78,`div`,12),uD(79,`
          `),vi(80,`button`,18),Ap(`click`,function(){return a.switchLanguage()}),uD(81,`
            `),_p(82,`i`,19),uD(83,`
            Switch Language
          `),Lc(),uD(84,`
          `),vi(85,`strong`),uD(86,`Locale:`),Lc(),uD(87,`
          `),vi(88,`span`,20),uD(89),Lc(),uD(90,`
        `),Lc(),uD(91,`
      `),Lc(),uD(92,`
      `),_p(93,`br`),uD(94,`
      `),mI(95,ce,23,8),Lc(),uD(96,`

    `),vi(97,`div`,21),uD(98,`
      `),vi(99,`div`,22),uD(100,`
        `),vi(101,`strong`),uD(102,`GraphQL Query:`),Lc(),uD(103,`
        `),_p(104,`div`,23),uD(105,`
      `),Lc(),uD(106,`
    `),Lc(),uD(107,`
  `),Lc(),uD(108,`

  `),vi(109,`angular-slickgrid`,24),Ap(`onAngularGridCreated`,function(c){return a.angularGridReady(c.detail)})(`onRowCountChanged`,function(c){return a.refreshMetrics(c.detail.args)}),uD(110,`
  `),Lc(),uD(111,`
`),Lc(),uD(112,`
`)),l&2&&(fv(49),XI(a.status()?.class),fv(4),Hc(` `,a.status()?.text,`
        `),fv(),bp(`hidden`,!a.processing()),fv(18),Kp(`ngModel`,a.serverWaitDelay),oE(),fv(17),Hc(`
            `,a.selectedLanguage()+`.json`,`
          `),fv(6),vI(a.metrics()?95:-1),fv(9),bp(`innerHTML`,a.graphqlQuery,by),fv(5),bp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[R$,Sn,ke,Yt,An,Wt,dm],styles:[`.demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return p})();export{ye as Example39Component};