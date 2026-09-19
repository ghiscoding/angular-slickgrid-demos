import{t as r}from"./chunk-DarCEgGK.js";import{En as jc,F as Ip,Kn as pI,Ot as Up,Pn as ly,Wt as ZI,b as Ep,hr as xI,j as Ho,p as CD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,vn as hI,wr as yv,xr as yi,xt as T}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,it as gR,s as GM,x as Pm}from"./chunk-DLuyVhQJ.js";import{n as ze}from"./main-CCTR2RMO.js";import{t as C}from"./chunk-DABGlTfE.js";function K(h,J){if(h&1&&(sD(0,`
        `),yi(1,`div`,23),sD(2,`
          `),yi(3,`em`)(4,`strong`),sD(5,`Backend Error:`),Rc(),sD(6,` `),Ip(7,`span`,24),Rc(),sD(8,`
        `),Rc(),sD(9,`
      `)),h&2){let t=xI();ly(7),Ep(`innerHTML`,t.errorStatus(),yv)}}function X(h,J){if(h&1&&(sD(0,`
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
      `)),h&2){let t=xI();ly(9),Up(MD(10,5,t.metrics()?.endTime,`dd MMM, h:mm:ssa`)),ly(4),Up(t.metrics()?.itemCount),ly(3),Up(t.metrics()?.totalItemCount),ly(3),ZI(t.tagDataClass())}}var Y=`assets/data`;var ee=`%5E`;var te=`%25`;var me=(()=>{class h{constructor(){this.http=T(ze),this.dataset=[],this.hideSubTitle=!1,this.isPageErrorTest=!1,this.metrics=Ho(void 0),this.tagDataClass=Ho(``),this.odataQuery=Ho(``),this.processing=Ho(!1),this.errorStatus=Ho(``),this.errorStatusClass=Ho(`hidden`),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.backendService=new C}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:ip.compoundInput}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0,formatter:(t,d,s,c,C)=>C.category?.name||``}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enableGrouping:!0,headerMenu:{hideFreezeColumnsCommand:!1},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:t=>{this.errorStatus.set(t.message),this.errorStatusClass.set(`visible notification is-light is-danger is-small is-narrow`),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.errorStatusClass.set(`hidden`),this.displaySpinner(!0)},process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set(t.metrics),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}displaySpinner(t,d){this.processing.set(t),d?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(t?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(t){let d=t[`@odata.count`],s=r({},this.metrics());if(s.totalItemCount=d,this.metrics.set(s),t.infiniteScrollBottomHit)this.angularGrid.dataView?.addItems(t.value);else{this.angularGrid.slickGrid?.scrollTo(0),this.dataset=t.value;let c=r({},this.metrics());c.itemCount=t.value.length,this.metrics.set(c)}this.odataQuery.set(t.query)}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return this.errorStatusClass.set(`hidden`),new Promise(d=>{let s=t.toLowerCase().split(`&`),c=0,C=0,k=``,N=100,g={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of s){if(f.includes(`$top=`)&&(c=+f.substring(5),c===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(C=+f.substring(6)),f.includes(`$orderby=`)&&(k=f.substring(9)),f.includes(`$filter=`)){let a=f.substring(8).replace(`%20`,` `);if(a.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${ee}(.*?)'\\)`,`i`),o=a.match(r)||[],S=o[1].trim();g[S]={type:`matchespattern`,term:`^`+o[2].trim()}}if(a.includes(`contains`)){let r=a.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`substring`,term:r[2].trim()}}if(a.includes(`substringof`)){let r=a.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],o=r[2].trim();g[o]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(a.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(a);if(Array.isArray(S)){let u=S[1].trim();g[u]={type:r,term:S[2].trim()}}}if(a.includes(`startswith`)&&a.includes(`endswith`)){let r=a.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=a.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();g[S]={type:`starts+ends`,term:[r[2].trim(),o[2].trim()]}}else if(a.includes(`startswith`)){let r=a.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`starts`,term:r[2].trim()}}else if(a.includes(`endswith`)){let r=a.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`ends`,term:r[2].trim()}}if(a.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(k.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${Y}/customers_100.json`).subscribe(f=>{let a=f;if(k?.length>0){let u=k.split(`,`);for(let D of u){let T=D.split(` `),w=T[0],b=x=>x;for(let x of w.split(`/`)){let l=b;b=G=>l(G)[x]}switch((T[1]??`asc`).toLocaleLowerCase()){case`asc`:a=a.sort((x,l)=>b(x).localeCompare(b(l)));break;case`desc`:a=a.sort((x,l)=>b(l).localeCompare(b(x)));break}}}let r=C,o=a;if(g){for(let u in g)u in g&&(o=o.filter(D=>{let T=g[u].type,w=g[u].term,b=u;if(u?.indexOf(` `)!==-1){let l=u.split(` `);b=l[l.length-1]}let m,x=D;for(let l of b.split(`/`))m=x[l],x=m;if(m){let[l,G]=Array.isArray(w)?w:[w];switch(T){case`eq`:return m.toLowerCase()===l;case`ne`:return m.toLowerCase()!==l;case`le`:return m.toLowerCase()<=l;case`lt`:return m.toLowerCase()<l;case`gt`:return m.toLowerCase()>l;case`ge`:return m.toLowerCase()>=l;case`ends`:return m.toLowerCase().endsWith(l);case`starts`:return m.toLowerCase().startsWith(l);case`starts+ends`:return m.toLowerCase().startsWith(l)&&m.toLowerCase().endsWith(G);case`substring`:return m.toLowerCase().includes(l);case`matchespattern`:return new RegExp(l.replaceAll(te,`.*`),`i`).test(m)}}}));N=o.length}r>o.length&&(t=t.replace(`$skip=${r}`,``),r=0);let S=o.slice(r,r+c);setTimeout(()=>{let u={query:t};u.value=S,u[`@odata.count`]=N,d(u)},100)})})}groupByGender(){this.angularGrid?.dataView?.setGrouping({getter:`gender`,formatter:t=>`Gender: ${t.value} <span class="text-green">(${t.count} items)</span>`,comparer:(t,d)=>GM.string(t.value,d.value),aggregators:[new gR.Sum(`gemder`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`]}])}refreshMetrics(t){if(t?.current>=0){let d=r({},this.metrics());d.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(d),this.tagDataClass.set(d.itemCount===d.totalItemCount?`fully-loaded`:`partial-load`)}}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(d){return new(d||h)}}static{this.ɵcmp=$E({type:h,selectors:[[`ng-component`]],decls:106,vars:10,consts:[[1,`demo38`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example38.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-gender`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid38`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(d,s){d&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 38: OData (v4) Backend Service with Infinite Scroll
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return s.toggleSubTitle()}),sD(13,`
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
      `),pI(49,K,10,1),Rc(),sD(50,`
  `),Rc(),sD(51,`

  `),yi(52,`div`,7),sD(53,`
    `),yi(54,`div`,9),sD(55,`
      `),yi(56,`div`,10),sD(57,`
        `),yi(58,`strong`),sD(59,`Status: `),Rc(),sD(60),yi(61,`span`,11),sD(62,`
          `),Ip(63,`i`,12),sD(64,`
        `),Rc(),sD(65,`
      `),Rc(),sD(66,`
    `),Rc(),sD(67,`
    `),yi(68,`div`,13),sD(69,`
      `),yi(70,`div`,14),sD(71,`
        `),yi(72,`strong`),sD(73,`OData Query:`),Rc(),sD(74,` `),yi(75,`span`,15),sD(76),Rc(),sD(77,`
      `),Rc(),sD(78,`
    `),Rc(),sD(79,`
  `),Rc(),sD(80,`

  `),yi(81,`div`,7),sD(82,`
    `),yi(83,`div`,16),sD(84,`
      `),yi(85,`button`,17),bp(`click`,function(){return s.clearAllFiltersAndSorts()}),sD(86,`
        `),Ip(87,`i`,18),sD(88,`
        Clear all Filter & Sorts
      `),Rc(),sD(89,`
      `),yi(90,`button`,19),bp(`click`,function(){return s.setFiltersDynamically()}),sD(91,`
        Set Filters Dynamically
      `),Rc(),sD(92,`
      `),yi(93,`button`,20),bp(`click`,function(){return s.setSortingDynamically()}),sD(94,`
        Set Sorting Dynamically
      `),Rc(),sD(95,`
      `),yi(96,`button`,21),bp(`click`,function(){return s.groupByGender()}),sD(97,`
        Group by Gender
      `),Rc(),sD(98,`

      `),pI(99,X,23,8),Rc(),sD(100,`
  `),Rc(),sD(101,`

  `),yi(102,`angular-slickgrid`,22),bp(`onAngularGridCreated`,function(C){return s.angularGridReady(C.detail)})(`onRowCountChanged`,function(C){return s.refreshMetrics(C.detail.args)}),sD(103,`
  `),Rc(),sD(104,`
`),Rc(),sD(105,`
`)),d&2&&(ly(49),hI(s.errorStatus()?49:-1),ly(7),ZI(s.status()?.class),ly(4),jc(` `,s.status()?.text,`
        `),ly(),Ep(`hidden`,!s.processing()),ly(15),Up(s.odataQuery()),ly(23),hI(s.metrics()?99:-1),ly(3),Ep(`columns`,s.columns)(`options`,s.gridOptions)(`dataset`,s.dataset))},dependencies:[_W,Pm],styles:[`.demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return h})();export{me as Example38Component};