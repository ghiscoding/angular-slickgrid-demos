import{t as r}from"./chunk-DarCEgGK.js";import{Dn as jp,Er as zE,Fn as mp,Gt as bD,Hn as oD,L as Lc,P as Kv,Pt as Xv,Rn as my,Wt as av,Z as NE,Zt as cD,b as Fo,dn as gi,fr as wD,g as Dp,l as BI,m as D,n as $p,on as fE,pn as gp,tn as dE,u as Bp,yr as xc}from"./chunk-B0w5H0p9.js";import{C as K1,gt as q1,kt as zp,ot as ji,x as Iu}from"./chunk-C7G4ZLh2.js";import{_ as je,b as zt,c as Cn,l as En,t as Xe,v as qt}from"./main-OKEWRQDY.js";import{t as A}from"./chunk-DL_xewK9.js";function ce(p,ue){if(p&1&&(oD(0,`
        `),gi(1,`div`,25),oD(2,`
          `),gi(3,`b`),oD(4,`Metrics:`),xc(),oD(5,`
          `),gi(6,`span`),oD(7,`
            `),gi(8,`span`),oD(9),wD(10,`date`),xc(),oD(11,` \u2014
            `),gi(12,`span`,26),oD(13),xc(),oD(14,`
            of
            `),gi(15,`span`,27),oD(16),xc(),oD(17,`
            items
          `),xc(),oD(18,`
          `),gi(19,`span`,28),oD(20,`All Data Loaded!!!`),xc(),oD(21,`
        `),xc(),oD(22,`
      `)),p&2){let t,l=NE();av(9),jp(bD(10,5,(t=l.metrics())==null?null:t.endTime,`dd MMM, h:mm:ssa`)),av(4),jp(l.metrics()?.itemCount),av(3),jp(l.metrics()?.totalItemCount),av(3),zE(l.tagDataClass())}}var ne=`assets/data`;var y=`users`;var me=250;function G(p){return p.replace(/^"/,``).replace(/"$/,``).toLowerCase()}var ye=(()=>{class p{constructor(){this.http=D(Xe),this.translate=D(ji),this.subscriptions=[],this.dataset=[],this.hideSubTitle=!1,this.metrics=Fo(void 0),this.tagDataClass=Fo(``),this.graphqlQuery=`...`,this.processing=Fo(!1),this.selectedLanguage=Fo(``),this.status=Fo({text:`processing...`,class:`alert alert-danger`}),this.serverWaitDelay=me,this.backendService=new A;let t=`en`;this.translate.use(t),this.selectedLanguage.set(t)}ngOnDestroy(){K1(this.subscriptions)}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:`name`,field:`name`,nameKey:`NAME`,width:60,sortable:!0,filterable:!0,filter:{model:Iu.compoundInput}},{id:`gender`,field:`gender`,nameKey:`GENDER`,filterable:!0,sortable:!0,width:60,filter:{model:Iu.singleSelect,collection:[{value:``,label:``},{value:`male`,labelKey:`MALE`},{value:`female`,labelKey:`FEMALE`}]}},{id:`company`,field:`company`,nameKey:`COMPANY`,width:60,sortable:!0,filterable:!0,filter:{model:Iu.multipleSelect,customStructure:{label:`company`,value:`company`},collectionSortBy:{property:`company`,sortDesc:!1},collectionAsync:this.http.get(`${ne}/customers_100.json`),options:{filter:!0}}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableAutoTooltip:!0,autoTooltipOptions:{enableForHeaderCells:!0},enableTranslate:!0,i18n:this.translate,enableFiltering:!0,enableCellNavigation:!0,multiColumnSort:!1,gridMenu:{resizeOnShowHeaderRow:!0},backendServiceApi:{disableInternalPostProcess:!0,service:this.backendService,options:{datasetName:y,addLocaleIntoQuery:!0,extraQueryArguments:[{field:`userId`,value:123}],infiniteScroll:{fetchSize:30}},preProcess:()=>this.displaySpinner(!0),process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set({endTime:new Date,totalItemCount:t.data[y].totalCount||0}),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}displaySpinner(t){this.processing.set(t),this.status.set(t?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(t){let{nodes:l,totalCount:a}=t.data[y];if(this.angularGrid){let d=r({},this.metrics()??{});d.totalItemCount=a,t.infiniteScrollBottomHit?this.angularGrid.dataView?.addItems(l):(this.angularGrid.slickGrid?.scrollTo(0),this.dataset=l,d.itemCount=l.length,this.metrics.set(d))}}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return new Promise(l=>{let a=0,d=0,c=``,_=``;this.http.get(`${ne}/customers_100.json`).subscribe(ae=>{let g=ae;if(t.includes(`first:`)&&(a=+(t.match(/first:([0-9]+),/)||[])[1]),t.includes(`offset:`)&&(d=+(t.match(/offset:([0-9]+),/)||[])[1]),t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`orderBy:`)){let[m,u,f]=/orderBy:\[{field:([a-zA-Z/]+),direction:(ASC|DESC)}\]/gi.exec(t)||[];c=u||``,_=f||``}if(t.includes(`filterBy:`)){let m=/{field:(\w+),operator:(\w+),value:([0-9a-z',"\s]*)}/gi,u;for(;(u=m.exec(t))!==null;){let f=u[1]||``,I=u[2]||``,L=u[3]||``,[r,A]=L.split(`,`);f&&I&&L!==``&&(g=g.filter(se=>{let s=se[f];switch(r=G(r),A=G(A||``),I){case`EQ`:return s.toLowerCase()===r;case`NE`:return s.toLowerCase()!==r;case`LE`:return s.toLowerCase()<=r;case`LT`:return s.toLowerCase()<r;case`GT`:return s.toLowerCase()>r;case`GE`:return s.toLowerCase()>=r;case`EndsWith`:return s.toLowerCase().endsWith(r);case`StartsWith`:return s.toLowerCase().startsWith(r);case`Starts+Ends`:return s.toLowerCase().startsWith(r)&&s.toLowerCase().endsWith(A);case`Contains`:return s.toLowerCase().includes(r);case`Not_Contains`:return!s.toLowerCase().includes(r);case`IN`:let oe=L.toLocaleLowerCase().split(`,`);for(let de of oe)if(s.toLocaleLowerCase()===G(de))return!0;break}}))}}let S=d;S>g.length&&(t=t.replace(`offset:${S}`,``),S=0);let b=m=>c?m[c]:m;switch(_.toUpperCase()){case`ASC`:g=g.sort((m,u)=>b(m).localeCompare(b(u)));break;case`DESC`:g=g.sort((m,u)=>b(u).localeCompare(b(m)));break}let le=g.slice(S,S+a),re={data:{[y]:{nodes:le,totalCount:g.length}}};setTimeout(()=>{this.graphqlQuery=this.gridOptions.backendServiceApi.service.buildQuery(),l(re)},this.serverWaitDelay)})})}refreshMetrics(t){if(t?.current>=0){let l=r({},this.metrics()??{});l.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(l),this.tagDataClass.set(l.itemCount===l.totalItemCount?`fully-loaded`:`partial-load`)}}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)})),this.getCustomerApiCall(this.backendService.buildQuery()||``)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||p)}}static{this.ɵcmp=BI({type:p,selectors:[[`ng-component`]],decls:113,vars:11,consts:[[1,`demo39`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example39.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-5`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-md-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`for`,`serverdelay`,1,`ml-4`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-1`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-7`],[`data-test`,`alert-graphql-query`,1,`alert`,`alert-info`],[`data-test`,`graphql-query-result`,3,`innerHTML`],[`gridId`,`grid39`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(l,a){l&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 39: GraphQL Backend Service with Infinite Scroll
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return a.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`h6`,6),oD(19,`
    `),gi(20,`ul`),oD(21,`
      `),gi(22,`li`),oD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),xc(),oD(24,`
      `),gi(25,`li`),oD(26,`NOTES`),xc(),oD(27,`
      `),gi(28,`ol`),oD(29,`
        `),gi(30,`li`),oD(31,`
          `),gi(32,`code`),oD(33,`presets.pagination`),xc(),oD(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),xc(),oD(35,`
        `),gi(36,`li`),oD(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),xc(),oD(38,`
        `),gi(39,`li`),oD(40,`Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).`),xc(),oD(41,`
      `),xc(),oD(42,`
    `),xc(),oD(43,`
  `),xc(),oD(44,`

  `),gi(45,`div`,7),oD(46,`
    `),gi(47,`div`,8),oD(48,`
      `),gi(49,`div`,9),oD(50,`
        `),gi(51,`strong`),oD(52,`Status: `),xc(),oD(53),gi(54,`span`,10),oD(55,`
          `),mp(56,`i`,11),oD(57,`
        `),xc(),oD(58,`
      `),xc(),oD(59,`

      `),gi(60,`div`,7),oD(61,`
        `),gi(62,`div`,12),oD(63,`
          `),gi(64,`button`,13),Dp(`click`,function(){return a.clearAllFiltersAndSorts()}),oD(65,`
            `),mp(66,`i`,14),oD(67,`
            Clear all Filter & Sorts
          `),xc(),oD(68,`
          `),gi(69,`label`,15),oD(70,`Server Delay: `),xc(),oD(71,`
          `),gi(72,`input`,16),$p(`ngModelChange`,function(c){return cD(a.serverWaitDelay,c)||(a.serverWaitDelay=c),c}),xc(),Kv(),oD(73,`
        `),xc(),oD(74,`
      `),xc(),oD(75,`
      `),gi(76,`div`,17),oD(77,`
        `),gi(78,`div`,12),oD(79,`
          `),gi(80,`button`,18),Dp(`click`,function(){return a.switchLanguage()}),oD(81,`
            `),mp(82,`i`,19),oD(83,`
            Switch Language
          `),xc(),oD(84,`
          `),gi(85,`strong`),oD(86,`Locale:`),xc(),oD(87,`
          `),gi(88,`span`,20),oD(89),xc(),oD(90,`
        `),xc(),oD(91,`
      `),xc(),oD(92,`
      `),mp(93,`br`),oD(94,`
      `),dE(95,ce,23,8),xc(),oD(96,`

    `),gi(97,`div`,21),oD(98,`
      `),gi(99,`div`,22),oD(100,`
        `),gi(101,`strong`),oD(102,`GraphQL Query:`),xc(),oD(103,`
        `),mp(104,`div`,23),oD(105,`
      `),xc(),oD(106,`
    `),xc(),oD(107,`
  `),xc(),oD(108,`

  `),gi(109,`angular-slickgrid`,24),Dp(`onAngularGridCreated`,function(c){return a.angularGridReady(c.detail)})(`onRowCountChanged`,function(c){return a.refreshMetrics(c.detail.args)}),oD(110,`
  `),xc(),oD(111,`
`),xc(),oD(112,`
`)),l&2&&(av(49),zE(a.status()?.class),av(4),Lc(` `,a.status()?.text,`
        `),av(),gp(`hidden`,!a.processing()),av(18),Bp(`ngModel`,a.serverWaitDelay),Xv(),av(17),Lc(`
            `,a.selectedLanguage()+`.json`,`
          `),av(6),fE(a.metrics()?95:-1),av(9),gp(`innerHTML`,a.graphqlQuery,my),av(5),gp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[q1,En,je,zt,Cn,qt,zp],styles:[`.demo39 .badge{display:none}.demo39 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return p})();export{ye as Example39Component};