import{t as r}from"./chunk-DarCEgGK.js";import{$ as MD,In as lD,M as Ho,Tr as xD,V as JI,a as Ap,bt as RI,f as Cy,jn as jc,kr as yI,mn as dv,on as bp,p as D,tn as _p,xn as gI,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,it as fT,jt as zA,l as D1,ut as jp}from"./chunk-Dk5kBPyv.js";import{n as ze}from"./main-BEH6XCIK.js";import{t as C}from"./chunk-Cdy9uPKG.js";function K(h,J){if(h&1&&(lD(0,`
        `),vi(1,`div`,23),lD(2,`
          `),vi(3,`em`)(4,`strong`),lD(5,`Backend Error:`),Rc(),lD(6,` `),_p(7,`span`,24),Rc(),lD(8,`
        `),Rc(),lD(9,`
      `)),h&2){let i=RI();dv(7),bp(`innerHTML`,i.errorStatus(),Cy)}}function X(h,J){if(h&1&&(lD(0,`
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
      `)),h&2){let i,a=RI();dv(9),Qp(xD(10,5,(i=a.metrics())==null?null:i.endTime,`dd MMM, h:mm:ssa`)),dv(4),Qp(a.metrics()?.itemCount),dv(3),Qp(a.metrics()?.totalItemCount),dv(3),JI(a.tagDataClass())}}var Y=`assets/data`;var ee=`%5E`;var te=`%25`;var ce=(()=>{class h{constructor(){this.http=D(ze),this.dataset=[],this.hideSubTitle=!1,this.isPageErrorTest=!1,this.metrics=Ho(void 0),this.tagDataClass=Ho(``),this.odataQuery=Ho(``),this.processing=Ho(!1),this.errorStatus=Ho(``),this.errorStatusClass=Ho(`hidden`),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.backendService=new C}ngOnInit(){this.initializeGrid()}angularGridReady(i){this.angularGrid=i}initializeGrid(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:uu.compoundInput}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:uu.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0,formatter:(i,a,l,m,C)=>C.category?.name||``}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enableGrouping:!0,presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:i=>{this.errorStatus.set(i.message),this.errorStatusClass.set(`visible notification is-light is-danger is-small is-narrow`),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.errorStatusClass.set(`hidden`),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,a){this.processing.set(i),a?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(i?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(i){let a=i[`@odata.count`],l=r({},this.metrics());if(l.totalItemCount=a,this.metrics.set(l),i.infiniteScrollBottomHit)this.angularGrid.dataView?.addItems(i.value);else{this.angularGrid.slickGrid?.scrollTo(0),this.dataset=i.value;let m=r({},this.metrics());m.itemCount=i.value.length,this.metrics.set(m)}this.odataQuery.set(i.query)}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}getCustomerDataApiMock(i){return this.errorStatusClass.set(`hidden`),new Promise(a=>{let l=i.toLowerCase().split(`&`),m=0,C=0,k=``,N=100,g={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of l){if(f.includes(`$top=`)&&(m=+f.substring(5),m===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(C=+f.substring(6)),f.includes(`$orderby=`)&&(k=f.substring(9)),f.includes(`$filter=`)){let s=f.substring(8).replace(`%20`,` `);if(s.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${ee}(.*?)'\\)`,`i`),d=s.match(r)||[],S=d[1].trim();g[S]={type:`matchespattern`,term:`^`+d[2].trim()}}if(s.includes(`contains`)){let r=s.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:`substring`,term:r[2].trim()}}if(s.includes(`substringof`)){let r=s.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],d=r[2].trim();g[d]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(s.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(s);if(Array.isArray(S)){let u=S[1].trim();g[u]={type:r,term:S[2].trim()}}}if(s.includes(`startswith`)&&s.includes(`endswith`)){let r=s.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=s.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();g[S]={type:`starts+ends`,term:[r[2].trim(),d[2].trim()]}}else if(s.includes(`startswith`)){let r=s.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:`starts`,term:r[2].trim()}}else if(s.includes(`endswith`)){let r=s.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:`ends`,term:r[2].trim()}}if(s.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(k.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${Y}/customers_100.json`).subscribe(f=>{let s=f;if(k?.length>0){let u=k.split(`,`);for(let G of u){let T=G.split(` `),w=T[0],b=x=>x;for(let x of w.split(`/`)){let o=b;b=M=>o(M)[x]}switch((T[1]??`asc`).toLocaleLowerCase()){case`asc`:s=s.sort((x,o)=>b(x).localeCompare(b(o)));break;case`desc`:s=s.sort((x,o)=>b(o).localeCompare(b(x)))}}}let r=C,d=s;if(g){for(let u in g)u in g&&(d=d.filter(G=>{let T=g[u].type,w=g[u].term,b=u;if(u?.indexOf(` `)!==-1){let o=u.split(` `);b=o[o.length-1]}let c,x=G;for(let o of b.split(`/`))c=x[o],x=c;if(c){let[o,M]=Array.isArray(w)?w:[w];switch(T){case`eq`:return c.toLowerCase()===o;case`ne`:return c.toLowerCase()!==o;case`le`:return c.toLowerCase()<=o;case`lt`:return c.toLowerCase()<o;case`gt`:return c.toLowerCase()>o;case`ge`:return c.toLowerCase()>=o;case`ends`:return c.toLowerCase().endsWith(o);case`starts`:return c.toLowerCase().startsWith(o);case`starts+ends`:return c.toLowerCase().startsWith(o)&&c.toLowerCase().endsWith(M);case`substring`:return c.toLowerCase().includes(o);case`matchespattern`:return new RegExp(o.replaceAll(te,`.*`),`i`).test(c)}}}));N=d.length}r>d.length&&(i=i.replace(`$skip=${r}`,``),r=0);let S=d.slice(r,r+m);setTimeout(()=>{let u={query:i};u.value=S,u[`@odata.count`]=N,a(u)},100)})})}groupByGender(){this.angularGrid?.dataView?.setGrouping({getter:`gender`,formatter:i=>`Gender: ${i.value} <span class="text-green">(${i.count} items)</span>`,comparer:(i,a)=>zA.string(i.value,a.value),aggregators:[new fT.Sum(`gemder`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`]}])}refreshMetrics(i){if(i?.current>=0){let a=r({},this.metrics());a.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(a),this.tagDataClass.set(a.itemCount===a.totalItemCount?`fully-loaded`:`partial-load`)}}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||h)}}static{this.ɵcmp=WE({type:h,selectors:[[`ng-component`]],decls:106,vars:10,consts:[[1,`demo38`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example38.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-gender`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid38`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(a,l){a&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 38: OData (v4) Backend Service with Infinite Scroll
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return l.toggleSubTitle()}),lD(13,`
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
      `),gI(49,K,10,1),Rc(),lD(50,`
  `),Rc(),lD(51,`

  `),vi(52,`div`,7),lD(53,`
    `),vi(54,`div`,9),lD(55,`
      `),vi(56,`div`,10),lD(57,`
        `),vi(58,`strong`),lD(59,`Status: `),Rc(),lD(60),vi(61,`span`,11),lD(62,`
          `),_p(63,`i`,12),lD(64,`
        `),Rc(),lD(65,`
      `),Rc(),lD(66,`
    `),Rc(),lD(67,`
    `),vi(68,`div`,13),lD(69,`
      `),vi(70,`div`,14),lD(71,`
        `),vi(72,`strong`),lD(73,`OData Query:`),Rc(),lD(74,` `),vi(75,`span`,15),lD(76),Rc(),lD(77,`
      `),Rc(),lD(78,`
    `),Rc(),lD(79,`
  `),Rc(),lD(80,`

  `),vi(81,`div`,7),lD(82,`
    `),vi(83,`div`,16),lD(84,`
      `),vi(85,`button`,17),Ap(`click`,function(){return l.clearAllFiltersAndSorts()}),lD(86,`
        `),_p(87,`i`,18),lD(88,`
        Clear all Filter & Sorts
      `),Rc(),lD(89,`
      `),vi(90,`button`,19),Ap(`click`,function(){return l.setFiltersDynamically()}),lD(91,`
        Set Filters Dynamically
      `),Rc(),lD(92,`
      `),vi(93,`button`,20),Ap(`click`,function(){return l.setSortingDynamically()}),lD(94,`
        Set Sorting Dynamically
      `),Rc(),lD(95,`
      `),vi(96,`button`,21),Ap(`click`,function(){return l.groupByGender()}),lD(97,`
        Group by Gender
      `),Rc(),lD(98,`

      `),gI(99,X,23,8),Rc(),lD(100,`
  `),Rc(),lD(101,`

  `),vi(102,`angular-slickgrid`,22),Ap(`onAngularGridCreated`,function(C){return l.angularGridReady(C.detail)})(`onRowCountChanged`,function(C){return l.refreshMetrics(C.detail.args)}),lD(103,`
  `),Rc(),lD(104,`
`),Rc(),lD(105,`
`)),a&2&&(dv(49),yI(l.errorStatus()?49:-1),dv(7),JI(l.status()?.class),dv(4),jc(` `,l.status()?.text,`
        `),dv(),bp(`hidden`,!l.processing()),dv(15),Qp(l.odataQuery()),dv(23),yI(l.metrics()?99:-1),dv(3),bp(`columns`,l.columns)(`options`,l.gridOptions)(`dataset`,l.dataset))},dependencies:[D1,jp],styles:[`.demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return h})();export{ce as Example38Component};