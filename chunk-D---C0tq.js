import{t as r}from"./chunk-DarCEgGK.js";import{Ct as T,Dt as UE,En as iD,Kn as mp,Nn as jo,Nt as Vp,Qn as pI,Tt as Tp,Wn as mi,_n as fI,bt as SI,dt as Pc,hr as vp,ht as QI,ln as cy,o as Ac,qt as _D,vr as vv,yr as wD}from"./chunk-06EGdSfW.js";import{H as _W,b as Pm,c as GM,rt as gR,st as ip}from"./chunk-CAMk6vEo.js";import{n as ze}from"./main-T6P2BZBW.js";import{t as C}from"./chunk-BsilNgu2.js";function K(h,J){if(h&1&&(iD(0,`
        `),mi(1,`div`,23),iD(2,`
          `),mi(3,`em`)(4,`strong`),iD(5,`Backend Error:`),Ac(),iD(6,` `),vp(7,`span`,24),Ac(),iD(8,`
        `),Ac(),iD(9,`
      `)),h&2){let t=SI();cy(7),mp(`innerHTML`,t.errorStatus(),vv)}}function X(h,J){if(h&1&&(iD(0,`
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
      `)),h&2){let t=SI();cy(9),Vp(_D(10,5,t.metrics()?.endTime,`dd MMM, h:mm:ssa`)),cy(4),Vp(t.metrics()?.itemCount),cy(3),Vp(t.metrics()?.totalItemCount),cy(3),QI(t.tagDataClass())}}var Y=`assets/data`;var ee=`%5E`;var te=`%25`;var me=(()=>{class h{constructor(){this.http=T(ze),this.dataset=[],this.hideSubTitle=!1,this.isPageErrorTest=!1,this.metrics=jo(void 0),this.tagDataClass=jo(``),this.odataQuery=jo(``),this.processing=jo(!1),this.errorStatus=jo(``),this.errorStatusClass=jo(`hidden`),this.status=jo({text:`processing...`,class:`alert alert-danger`}),this.backendService=new C}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:ip.compoundInput}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0,formatter:(t,d,s,c,C)=>C.category?.name||``}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enableGrouping:!0,headerMenu:{hideFreezeColumnsCommand:!1},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:t=>{this.errorStatus.set(t.message),this.errorStatusClass.set(`visible notification is-light is-danger is-small is-narrow`),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.errorStatusClass.set(`hidden`),this.displaySpinner(!0)},process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set(t.metrics),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}displaySpinner(t,d){this.processing.set(t),d?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(t?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(t){let d=t[`@odata.count`],s=r({},this.metrics());if(s.totalItemCount=d,this.metrics.set(s),t.infiniteScrollBottomHit)this.angularGrid.dataView?.addItems(t.value);else{this.angularGrid.slickGrid?.scrollTo(0),this.dataset=t.value;let c=r({},this.metrics());c.itemCount=t.value.length,this.metrics.set(c)}this.odataQuery.set(t.query)}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return this.errorStatusClass.set(`hidden`),new Promise(d=>{let s=t.toLowerCase().split(`&`),c=0,C=0,k=``,N=100,g={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of s){if(f.includes(`$top=`)&&(c=+f.substring(5),c===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(C=+f.substring(6)),f.includes(`$orderby=`)&&(k=f.substring(9)),f.includes(`$filter=`)){let a=f.substring(8).replace(`%20`,` `);if(a.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${ee}(.*?)'\\)`,`i`),o=a.match(r)||[],S=o[1].trim();g[S]={type:`matchespattern`,term:`^`+o[2].trim()}}if(a.includes(`contains`)){let r=a.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`substring`,term:r[2].trim()}}if(a.includes(`substringof`)){let r=a.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],o=r[2].trim();g[o]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(a.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(a);if(Array.isArray(S)){let u=S[1].trim();g[u]={type:r,term:S[2].trim()}}}if(a.includes(`startswith`)&&a.includes(`endswith`)){let r=a.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=a.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();g[S]={type:`starts+ends`,term:[r[2].trim(),o[2].trim()]}}else if(a.includes(`startswith`)){let r=a.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`starts`,term:r[2].trim()}}else if(a.includes(`endswith`)){let r=a.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`ends`,term:r[2].trim()}}if(a.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(k.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${Y}/customers_100.json`).subscribe(f=>{let a=f;if(k?.length>0){let u=k.split(`,`);for(let D of u){let T=D.split(` `),w=T[0],b=x=>x;for(let x of w.split(`/`)){let l=b;b=G=>l(G)[x]}switch((T[1]??`asc`).toLocaleLowerCase()){case`asc`:a=a.sort((x,l)=>b(x).localeCompare(b(l)));break;case`desc`:a=a.sort((x,l)=>b(l).localeCompare(b(x)));break}}}let r=C,o=a;if(g){for(let u in g)u in g&&(o=o.filter(D=>{let T=g[u].type,w=g[u].term,b=u;if(u?.indexOf(` `)!==-1){let l=u.split(` `);b=l[l.length-1]}let m,x=D;for(let l of b.split(`/`))m=x[l],x=m;if(m){let[l,G]=Array.isArray(w)?w:[w];switch(T){case`eq`:return m.toLowerCase()===l;case`ne`:return m.toLowerCase()!==l;case`le`:return m.toLowerCase()<=l;case`lt`:return m.toLowerCase()<l;case`gt`:return m.toLowerCase()>l;case`ge`:return m.toLowerCase()>=l;case`ends`:return m.toLowerCase().endsWith(l);case`starts`:return m.toLowerCase().startsWith(l);case`starts+ends`:return m.toLowerCase().startsWith(l)&&m.toLowerCase().endsWith(G);case`substring`:return m.toLowerCase().includes(l);case`matchespattern`:return new RegExp(l.replaceAll(te,`.*`),`i`).test(m)}}}));N=o.length}r>o.length&&(t=t.replace(`$skip=${r}`,``),r=0);let S=o.slice(r,r+c);setTimeout(()=>{let u={query:t};u.value=S,u[`@odata.count`]=N,d(u)},100)})})}groupByGender(){this.angularGrid?.dataView?.setGrouping({getter:`gender`,formatter:t=>`Gender: ${t.value} <span class="text-green">(${t.count} items)</span>`,comparer:(t,d)=>GM.string(t.value,d.value),aggregators:[new gR.Sum(`gemder`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`]}])}refreshMetrics(t){if(t?.current>=0){let d=r({},this.metrics());d.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(d),this.tagDataClass.set(d.itemCount===d.totalItemCount?`fully-loaded`:`partial-load`)}}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(d){return new(d||h)}}static{this.ɵcmp=UE({type:h,selectors:[[`ng-component`]],decls:106,vars:10,consts:[[1,`demo38`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example38.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-gender`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid38`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(d,s){d&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 38: OData (v4) Backend Service with Infinite Scroll
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return s.toggleSubTitle()}),iD(13,`
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
      `),fI(49,K,10,1),Ac(),iD(50,`
  `),Ac(),iD(51,`

  `),mi(52,`div`,7),iD(53,`
    `),mi(54,`div`,9),iD(55,`
      `),mi(56,`div`,10),iD(57,`
        `),mi(58,`strong`),iD(59,`Status: `),Ac(),iD(60),mi(61,`span`,11),iD(62,`
          `),vp(63,`i`,12),iD(64,`
        `),Ac(),iD(65,`
      `),Ac(),iD(66,`
    `),Ac(),iD(67,`
    `),mi(68,`div`,13),iD(69,`
      `),mi(70,`div`,14),iD(71,`
        `),mi(72,`strong`),iD(73,`OData Query:`),Ac(),iD(74,` `),mi(75,`span`,15),iD(76),Ac(),iD(77,`
      `),Ac(),iD(78,`
    `),Ac(),iD(79,`
  `),Ac(),iD(80,`

  `),mi(81,`div`,7),iD(82,`
    `),mi(83,`div`,16),iD(84,`
      `),mi(85,`button`,17),Tp(`click`,function(){return s.clearAllFiltersAndSorts()}),iD(86,`
        `),vp(87,`i`,18),iD(88,`
        Clear all Filter & Sorts
      `),Ac(),iD(89,`
      `),mi(90,`button`,19),Tp(`click`,function(){return s.setFiltersDynamically()}),iD(91,`
        Set Filters Dynamically
      `),Ac(),iD(92,`
      `),mi(93,`button`,20),Tp(`click`,function(){return s.setSortingDynamically()}),iD(94,`
        Set Sorting Dynamically
      `),Ac(),iD(95,`
      `),mi(96,`button`,21),Tp(`click`,function(){return s.groupByGender()}),iD(97,`
        Group by Gender
      `),Ac(),iD(98,`

      `),fI(99,X,23,8),Ac(),iD(100,`
  `),Ac(),iD(101,`

  `),mi(102,`angular-slickgrid`,22),Tp(`onAngularGridCreated`,function(C){return s.angularGridReady(C.detail)})(`onRowCountChanged`,function(C){return s.refreshMetrics(C.detail.args)}),iD(103,`
  `),Ac(),iD(104,`
`),Ac(),iD(105,`
`)),d&2&&(cy(49),pI(s.errorStatus()?49:-1),cy(7),QI(s.status()?.class),cy(4),Pc(` `,s.status()?.text,`
        `),cy(),mp(`hidden`,!s.processing()),cy(15),Vp(s.odataQuery()),cy(23),pI(s.metrics()?99:-1),cy(3),mp(`columns`,s.columns)(`options`,s.gridOptions)(`dataset`,s.dataset))},dependencies:[_W,Pm],styles:[`.demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return h})();export{me as Example38Component};