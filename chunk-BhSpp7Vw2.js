import{t as r}from"./chunk-DarCEgGK.js";import{En as jc,F as Ip,Kn as pI,Lt as Wp,O as Gp,Ot as Up,Pn as ly,Wt as ZI,b as Ep,hr as xI,ir as tE,j as Ho,or as uD,p as CD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,vn as hI,wr as yv,xr as yi,xt as T,zt as Xy}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,m as Ki,n as CW,x as Pm}from"./chunk-DLuyVhQJ.js";import{_ as Vn,b as zt,d as Fn,g as Te,n as ze,s as $t}from"./main-CCTR2RMO.js";import{t as A}from"./chunk-BN5KFnF7.js";function ce(p,ue){if(p&1&&(sD(0,`
        `),yi(1,`div`,25),sD(2,`
          `),yi(3,`b`),sD(4,`Metrics:`),Rc(),sD(5,`
          `),yi(6,`span`),sD(7,`
            `),yi(8,`span`),sD(9),CD(10,`date`),Rc(),sD(11,` \u2014
            `),yi(12,`span`,26),sD(13),Rc(),sD(14,`
            of
            `),yi(15,`span`,27),sD(16),Rc(),sD(17,`
            items
          `),Rc(),sD(18,`
          `),yi(19,`span`,28),sD(20,`All Data Loaded!!!`),Rc(),sD(21,`
        `),Rc(),sD(22,`
      `)),p&2){let t=xI();ly(9),Up(MD(10,5,t.metrics()?.endTime,`dd MMM, h:mm:ssa`)),ly(4),Up(t.metrics()?.itemCount),ly(3),Up(t.metrics()?.totalItemCount),ly(3),ZI(t.tagDataClass())}}var ne=`assets/data`;var y=`users`;var me=250;function G(p){return p.replace(/^"/,``).replace(/"$/,``).toLowerCase()}var ye=(()=>{class p{constructor(){this.http=T(ze),this.translate=T(Ki),this.subscriptions=[],this.dataset=[],this.hideSubTitle=!1,this.metrics=Ho(void 0),this.tagDataClass=Ho(``),this.graphqlQuery=`...`,this.processing=Ho(!1),this.selectedLanguage=Ho(``),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.serverWaitDelay=me,this.backendService=new A;let t=`en`;this.translate.use(t),this.selectedLanguage.set(t)}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,sortable:!0,filterable:!0,filter:{model:ip.compoundInput}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:`male`,labelKey:`MALE`},{value:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,sortable:!0,filterable:!0,filter:{model:ip.multipleSelect,customStructure:{label:`company`,value:`company`},collectionSortBy:{property:`company`,sortDesc:!1},collectionAsync:this.http.get(`${ne}/customers_100.json`),options:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.translate,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:y,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set({endTime:new Date,totalItemCount:t.data[y].totalCount||0}),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(t){this.processing.set(t),this.status.set(t?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(t){let{nodes:r$1,totalCount:a}=t.data[y];if(this.angularGrid){let d=r({},this.metrics()??{});d.totalItemCount=a,t.infiniteScrollBottomHit?this.angularGrid.dataView?.addItems(r$1):(this.angularGrid.slickGrid?.scrollTo(0),this.dataset=r$1,d.itemCount=r$1.length,this.metrics.set(d))}}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return new Promise(r=>{let a=0,d=0,c=``,_=``;this.http.get(`${ne}/customers_100.json`).subscribe(ae=>{let g=ae;if(t.includes(`first:`)&&(a=+(t.match(/first:([0-9]+),/)||[])[1]),t.includes(`offset:`)&&(d=+(t.match(/offset:([0-9]+),/)||[])[1]),t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`filterBy:`)){let m=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi,u;for(;(u=m.exec(t))!==null;){let f=u[1]||``,I=u[2]||``,L=u[3]||``,[l,A]=L.split(`,`);f&&I&&L!==``&&(g=g.filter(se=>{let s=se[f];switch(l=G(l),A=G(A||``),I){case`EQ`:return s.toLowerCase()===l;case`NE`:return s.toLowerCase()!==l;case`LE`:return s.toLowerCase()<=l;case`LT`:return s.toLowerCase()<l;case`GT`:return s.toLowerCase()>l;case`GE`:return s.toLowerCase()>=l;case`EndsWith`:return s.toLowerCase().endsWith(l);case`StartsWith`:return s.toLowerCase().startsWith(l);case`Starts+Ends`:return s.toLowerCase().startsWith(l)&&s.toLowerCase().endsWith(A);case`Contains`:return s.toLowerCase().includes(l);case`Not_Contains`:return!s.toLowerCase().includes(l);case`IN`:let oe=L.toLocaleLowerCase().split(`,`);for(let de of oe)if(s.toLocaleLowerCase()===G(de))return!0;break}}))}}let S=d;S>g.length&&(t=t.replace(`offset:${S}`,``),S=0);let b=m=>c?m[c]:m;switch(_.toUpperCase()){case`ASC`:g=g.sort((m,u)=>b(m).localeCompare(b(u)));break;case`DESC`:g=g.sort((m,u)=>b(u).localeCompare(b(m)));break}let re=g.slice(S,S+a),le={data:{[y]:{nodes:re,totalCount:g.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),r(le)},this.serverWaitDelay)})})}refreshMetrics(t){if(t?.current>=0){let r$2=r({},this.metrics()??{});r$2.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(r$2),this.tagDataClass.set(r$2.itemCount===r$2.totalItemCount?`fully-loaded`:`partial-load`)}}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)})),this.getCustomerApiCall(this.backendService.buildQuery()||``)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||p)}}static{this.ɵcmp=$E({type:p,selectors:[[`ng-component`]],decls:113,vars:11,consts:[[1,`demo39`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example39.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid39`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(r,a){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 39: GraphQL Backend Service with Infinite Scroll
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return a.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`h6`,6),sD(19,`
    `),yi(20,`ul`),sD(21,`
      `),yi(22,`li`),sD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),Rc(),sD(24,`
      `),yi(25,`li`),sD(26,`NOTES`),Rc(),sD(27,`
      `),yi(28,`ol`),sD(29,`
        `),yi(30,`li`),sD(31,`
          `),yi(32,`code`),sD(33,`presets.pagination`),Rc(),sD(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),Rc(),sD(35,`
        `),yi(36,`li`),sD(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),Rc(),sD(38,`
        `),yi(39,`li`),sD(40,`Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).`),Rc(),sD(41,`
      `),Rc(),sD(42,`
    `),Rc(),sD(43,`
  `),Rc(),sD(44,`

  `),yi(45,`div`,7),sD(46,`
    `),yi(47,`div`,8),sD(48,`
      `),yi(49,`div`,9),sD(50,`
        `),yi(51,`strong`),sD(52,`Status: `),Rc(),sD(53),yi(54,`span`,10),sD(55,`
          `),Ip(56,`i`,11),sD(57,`
        `),Rc(),sD(58,`
      `),Rc(),sD(59,`

      `),yi(60,`div`,7),sD(61,`
        `),yi(62,`div`,12),sD(63,`
          `),yi(64,`button`,13),bp(`click`,function(){return a.clearAllFiltersAndSorts()}),sD(65,`
            `),Ip(66,`i`,14),sD(67,`
            Clear all Filter & Sorts
          `),Rc(),sD(68,`
          `),yi(69,`label`,15),sD(70,`Server Delay: `),Rc(),sD(71,`
          `),yi(72,`input`,16),Wp(`ngModelChange`,function(c){return uD(a.serverWaitDelay,c)||(a.serverWaitDelay=c),c}),Rc(),Xy(),sD(73,`
        `),Rc(),sD(74,`
      `),Rc(),sD(75,`
      `),yi(76,`div`,17),sD(77,`
        `),yi(78,`div`,12),sD(79,`
          `),yi(80,`button`,18),bp(`click`,function(){return a.switchLanguage()}),sD(81,`
            `),Ip(82,`i`,19),sD(83,`
            Switch Language
          `),Rc(),sD(84,`
          `),yi(85,`strong`),sD(86,`Locale:`),Rc(),sD(87,`
          `),yi(88,`span`,20),sD(89),Rc(),sD(90,`
        `),Rc(),sD(91,`
      `),Rc(),sD(92,`
      `),Ip(93,`br`),sD(94,`
      `),pI(95,ce,23,8),Rc(),sD(96,`

    `),yi(97,`div`,21),sD(98,`
      `),yi(99,`div`,22),sD(100,`
        `),yi(101,`strong`),sD(102,`GraphQL Query:`),Rc(),sD(103,`
        `),Ip(104,`div`,23),sD(105,`
      `),Rc(),sD(106,`
    `),Rc(),sD(107,`
  `),Rc(),sD(108,`

  `),yi(109,`angular-slickgrid`,24),bp(`onAngularGridCreated`,function(c){return a.angularGridReady(c.detail)})(`onRowCountChanged`,function(c){return a.refreshMetrics(c.detail.args)}),sD(110,`
  `),Rc(),sD(111,`
`),Rc(),sD(112,`
`)),r&2&&(ly(49),ZI(a.status()?.class),ly(4),jc(` `,a.status()?.text,`
        `),ly(),Ep(`hidden`,!a.processing()),ly(18),Gp(`ngModel`,a.serverWaitDelay),tE(),ly(17),jc(`
            `,a.selectedLanguage()+`.json`,`
          `),ly(6),hI(a.metrics()?95:-1),ly(9),Ep(`innerHTML`,a.graphqlQuery,yv),ly(5),Ep(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[_W,Fn,Te,zt,Vn,$t,Pm],styles:[`.demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return p})();export{ye as Example39Component};