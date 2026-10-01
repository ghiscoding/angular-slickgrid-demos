import{t as r}from"./chunk-DarCEgGK.js";import{$ as Mp,C as Ei,E as Fc,En as iD,Et as SI,H as Iv,_ as D,_t as QI,b as Dp,c as BE,cn as ay,ct as Oc,en as _D,er as pI,f as Bo,hn as dI,jt as Tp,sr as qp,xr as wD}from"./chunk-CtIlL7jI.js";import{Ot as xz,T as Lm,bt as rp,f as E0,j as Qk}from"./chunk-C1NeHYCu.js";import{n as ze}from"./main-JBJUR4DQ.js";import{t as C}from"./chunk-DxKazLAv.js";function K(h,J){if(h&1&&(iD(0,`
        `),Ei(1,`div`,23),iD(2,`
          `),Ei(3,`em`)(4,`strong`),iD(5,`Backend Error:`),Oc(),iD(6,` `),Tp(7,`span`,24),Oc(),iD(8,`
        `),Oc(),iD(9,`
      `)),h&2){let t=SI();ay(7),Dp(`innerHTML`,t.errorStatus(),Iv)}}function X(h,J){if(h&1&&(iD(0,`
        `),Ei(1,`div`,25),iD(2,`
          `),Ei(3,`b`),iD(4,`Metrics:`),Oc(),iD(5,`
          `),Ei(6,`span`),iD(7,`
            `),Ei(8,`span`),iD(9),wD(10,`date`),Oc(),iD(11,` \u2014
            `),Ei(12,`span`,26),iD(13),Oc(),iD(14,`
            of
            `),Ei(15,`span`,27),iD(16),Oc(),iD(17,`
            items
          `),Oc(),iD(18,`
          `),Ei(19,`span`,28),iD(20,`All Data Loaded!!!`),Oc(),iD(21,`
        `),Oc(),iD(22,`
      `)),h&2){let t=SI();ay(9),qp(_D(10,5,t.metrics()?.endTime,`dd MMM, h:mm:ssa`)),ay(4),qp(t.metrics()?.itemCount),ay(3),qp(t.metrics()?.totalItemCount),ay(3),QI(t.tagDataClass())}}var Y=`assets/data`;var ee=`%5E`;var te=`%25`;var me=(()=>{class h{constructor(){this.http=D(ze),this.dataset=[],this.hideSubTitle=!1,this.isPageErrorTest=!1,this.metrics=Bo(void 0),this.tagDataClass=Bo(``),this.odataQuery=Bo(``),this.processing=Bo(!1),this.errorStatus=Bo(``),this.errorStatusClass=Bo(`hidden`),this.status=Bo({text:`processing...`,class:`alert alert-danger`}),this.backendService=new C}ngOnInit(){this.initializeGrid()}angularGridReady(t){this.angularGrid=t}initializeGrid(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:rp.compoundInput}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:rp.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0,formatter:(t,d,s,c,C)=>C.category?.name||``}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enableGrouping:!0,headerMenu:{hideFreezeColumnsCommand:!1},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:t=>{this.errorStatus.set(t.message),this.errorStatusClass.set(`visible notification is-light is-danger is-small is-narrow`),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.errorStatusClass.set(`hidden`),this.displaySpinner(!0)},process:t=>this.getCustomerApiCall(t),postProcess:t=>{this.metrics.set(t.metrics),this.displaySpinner(!1),this.getCustomerCallback(t)}}}}displaySpinner(t,d){this.processing.set(t),d?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(t?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(t){let d=t[`@odata.count`],s=r({},this.metrics());if(s.totalItemCount=d,this.metrics.set(s),t.infiniteScrollBottomHit)this.angularGrid.dataView?.addItems(t.value);else{this.angularGrid.slickGrid?.scrollTo(0),this.dataset=t.value;let c=r({},this.metrics());c.itemCount=t.value.length,this.metrics.set(c)}this.odataQuery.set(t.query)}getCustomerApiCall(t){return this.getCustomerDataApiMock(t)}getCustomerDataApiMock(t){return this.errorStatusClass.set(`hidden`),new Promise(d=>{let s=t.toLowerCase().split(`&`),c=0,C=0,k=``,N=100,g={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of s){if(f.includes(`$top=`)&&(c=+f.substring(5),c===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(C=+f.substring(6)),f.includes(`$orderby=`)&&(k=f.substring(9)),f.includes(`$filter=`)){let a=f.substring(8).replace(`%20`,` `);if(a.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${ee}(.*?)'\\)`,`i`),o=a.match(r)||[],S=o[1].trim();g[S]={type:`matchespattern`,term:`^`+o[2].trim()}}if(a.includes(`contains`)){let r=a.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`substring`,term:r[2].trim()}}if(a.includes(`substringof`)){let r=a.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],o=r[2].trim();g[o]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(a.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(a);if(Array.isArray(S)){let u=S[1].trim();g[u]={type:r,term:S[2].trim()}}}if(a.includes(`startswith`)&&a.includes(`endswith`)){let r=a.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=a.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();g[S]={type:`starts+ends`,term:[r[2].trim(),o[2].trim()]}}else if(a.includes(`startswith`)){let r=a.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`starts`,term:r[2].trim()}}else if(a.includes(`endswith`)){let r=a.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],o=r[1].trim();g[o]={type:`ends`,term:r[2].trim()}}if(a.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(k.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${Y}/customers_100.json`).subscribe(f=>{let a=f;if(k?.length>0){let u=k.split(`,`);for(let D of u){let T=D.split(` `),w=T[0],b=x=>x;for(let x of w.split(`/`)){let l=b;b=G=>l(G)[x]}switch((T[1]??`asc`).toLocaleLowerCase()){case`asc`:a=a.sort((x,l)=>b(x).localeCompare(b(l)));break;case`desc`:a=a.sort((x,l)=>b(l).localeCompare(b(x)))}}}let r=C,o=a;if(g){for(let u in g)u in g&&(o=o.filter(D=>{let T=g[u].type,w=g[u].term,b=u;if(u?.indexOf(` `)!==-1){let l=u.split(` `);b=l[l.length-1]}let m,x=D;for(let l of b.split(`/`))m=x[l],x=m;if(m){let[l,G]=Array.isArray(w)?w:[w];switch(T){case`eq`:return m.toLowerCase()===l;case`ne`:return m.toLowerCase()!==l;case`le`:return m.toLowerCase()<=l;case`lt`:return m.toLowerCase()<l;case`gt`:return m.toLowerCase()>l;case`ge`:return m.toLowerCase()>=l;case`ends`:return m.toLowerCase().endsWith(l);case`starts`:return m.toLowerCase().startsWith(l);case`starts+ends`:return m.toLowerCase().startsWith(l)&&m.toLowerCase().endsWith(G);case`substring`:return m.toLowerCase().includes(l);case`matchespattern`:return new RegExp(l.replaceAll(te,`.*`),`i`).test(m)}}}));N=o.length}r>o.length&&(t=t.replace(`$skip=${r}`,``),r=0);let S=o.slice(r,r+c);setTimeout(()=>{let u={query:t};u.value=S,u[`@odata.count`]=N,d(u)},100)})})}groupByGender(){this.angularGrid?.dataView?.setGrouping({getter:`gender`,formatter:t=>`Gender: ${t.value} <span class="text-green">(${t.count} items)</span>`,comparer:(t,d)=>Qk.string(t.value,d.value),aggregators:[new E0.Sum(`gemder`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`]}])}refreshMetrics(t){if(t?.current>=0){let d=r({},this.metrics());d.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(d),this.tagDataClass.set(d.itemCount===d.totalItemCount?`fully-loaded`:`partial-load`)}}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(d){return new(d||h)}}static{this.ɵcmp=BE({type:h,selectors:[[`ng-component`]],decls:106,vars:10,consts:[[1,`demo38`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example38.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-gender`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid38`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(d,s){d&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 38: OData (v4) Backend Service with Infinite Scroll
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return s.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`h6`,6),iD(19,`
    `),Ei(20,`ul`),iD(21,`
      `),Ei(22,`li`),iD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded. If we reached the end of the dataset and there is no more data to
        load, then we'll assume to have the entire dataset loaded in memory. This contrast with the regular Pagination approach which will
        hold only hold data for 1 page at a time.
      `),Oc(),iD(24,`
      `),Ei(25,`li`),iD(26,`NOTES`),Oc(),iD(27,`
      `),Ei(28,`ol`),iD(29,`
        `),Ei(30,`li`),iD(31,`
          `),Ei(32,`code`),iD(33,`presets.pagination`),Oc(),iD(34,` is not supported with Infinite Scroll and will revert to the first page, simply because since we
          keep appending data, we always have to start from index zero (no offset).
        `),Oc(),iD(35,`
        `),Ei(36,`li`),iD(37,`
          Pagination is not shown BUT in fact, that is what is being used behind the scene whenever reaching the scroll end (fetching next
          batch).
        `),Oc(),iD(38,`
        `),Ei(39,`li`),iD(40,`Also note that whenever the user changes the Sort(s)/Filter(s) it will always reset and go back to zero index (first page).`),Oc(),iD(41,`
      `),Oc(),iD(42,`
    `),Oc(),iD(43,`
  `),Oc(),iD(44,`

  `),Ei(45,`div`,7),iD(46,`
    `),Ei(47,`div`,8),iD(48,`
      `),dI(49,K,10,1),Oc(),iD(50,`
  `),Oc(),iD(51,`

  `),Ei(52,`div`,7),iD(53,`
    `),Ei(54,`div`,9),iD(55,`
      `),Ei(56,`div`,10),iD(57,`
        `),Ei(58,`strong`),iD(59,`Status: `),Oc(),iD(60),Ei(61,`span`,11),iD(62,`
          `),Tp(63,`i`,12),iD(64,`
        `),Oc(),iD(65,`
      `),Oc(),iD(66,`
    `),Oc(),iD(67,`
    `),Ei(68,`div`,13),iD(69,`
      `),Ei(70,`div`,14),iD(71,`
        `),Ei(72,`strong`),iD(73,`OData Query:`),Oc(),iD(74,` `),Ei(75,`span`,15),iD(76),Oc(),iD(77,`
      `),Oc(),iD(78,`
    `),Oc(),iD(79,`
  `),Oc(),iD(80,`

  `),Ei(81,`div`,7),iD(82,`
    `),Ei(83,`div`,16),iD(84,`
      `),Ei(85,`button`,17),Mp(`click`,function(){return s.clearAllFiltersAndSorts()}),iD(86,`
        `),Tp(87,`i`,18),iD(88,`
        Clear all Filter & Sorts
      `),Oc(),iD(89,`
      `),Ei(90,`button`,19),Mp(`click`,function(){return s.setFiltersDynamically()}),iD(91,`
        Set Filters Dynamically
      `),Oc(),iD(92,`
      `),Ei(93,`button`,20),Mp(`click`,function(){return s.setSortingDynamically()}),iD(94,`
        Set Sorting Dynamically
      `),Oc(),iD(95,`
      `),Ei(96,`button`,21),Mp(`click`,function(){return s.groupByGender()}),iD(97,`
        Group by Gender
      `),Oc(),iD(98,`

      `),dI(99,X,23,8),Oc(),iD(100,`
  `),Oc(),iD(101,`

  `),Ei(102,`angular-slickgrid`,22),Mp(`onAngularGridCreated`,function(C){return s.angularGridReady(C.detail)})(`onRowCountChanged`,function(C){return s.refreshMetrics(C.detail.args)}),iD(103,`
  `),Oc(),iD(104,`
`),Oc(),iD(105,`
`)),d&2&&(ay(49),pI(s.errorStatus()?49:-1),ay(7),QI(s.status()?.class),ay(4),Fc(` `,s.status()?.text,`
        `),ay(),Dp(`hidden`,!s.processing()),ay(15),qp(s.odataQuery()),ay(23),pI(s.metrics()?99:-1),ay(3),Dp(`columns`,s.columns)(`options`,s.gridOptions)(`dataset`,s.dataset))},dependencies:[xz,Lm],styles:[`.demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return h})();export{me as Example38Component};