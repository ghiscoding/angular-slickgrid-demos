import{t as r}from"./chunk-DarCEgGK.js";import{Dn as jp,Er as zE,Fn as mp,Gt as bD,Hn as oD,L as Lc,Rn as my,Wt as av,Z as NE,b as Fo,dn as gi,fr as wD,g as Dp,l as BI,m as D,on as fE,pn as gp,tn as dE,yr as xc}from"./chunk-B0w5H0p9.js";import{E as LF,gt as q1,kt as zp,l as BB,x as Iu}from"./chunk-C7G4ZLh2.js";import{t as Xe}from"./main-INAAVGOX.js";import{t as C}from"./chunk-d3NppWaY.js";function K(h,J){if(h&1&&(oD(0,`
        `),gi(1,`div`,23),oD(2,`
          `),gi(3,`em`)(4,`strong`),oD(5,`Backend Error:`),xc(),oD(6,` `),mp(7,`span`,24),xc(),oD(8,`
        `),xc(),oD(9,`
      `)),h&2){let i=NE();av(7),gp(`innerHTML`,i.errorStatus(),my)}}function X(h,J){if(h&1&&(oD(0,`
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
      `)),h&2){let i,a=NE();av(9),jp(bD(10,5,(i=a.metrics())==null?null:i.endTime,`dd MMM, h:mm:ssa`)),av(4),jp(a.metrics()?.itemCount),av(3),jp(a.metrics()?.totalItemCount),av(3),zE(a.tagDataClass())}}var Y=`assets/data`;var ee=`%5E`;var te=`%25`;var me=(()=>{class h{constructor(){this.http=D(Xe),this.dataset=[],this.hideSubTitle=!1,this.isPageErrorTest=!1,this.metrics=Fo(void 0),this.tagDataClass=Fo(``),this.odataQuery=Fo(``),this.processing=Fo(!1),this.errorStatus=Fo(``),this.errorStatusClass=Fo(`hidden`),this.status=Fo({text:`processing...`,class:`alert alert-danger`}),this.backendService=new C}ngOnInit(){this.initializeGrid()}angularGridReady(i){this.angularGrid=i}initializeGrid(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:Iu.compoundInput}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:Iu.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0,formatter:(i,a,l,c,C)=>C.category?.name||``}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enableGrouping:!0,headerMenu:{hideFreezeColumnsCommand:!1},presets:{},backendServiceApi:{service:this.backendService,options:{infiniteScroll:{fetchSize:30},enableCount:!0,version:4},onError:i=>{this.errorStatus.set(i.message),this.errorStatusClass.set(`visible notification is-light is-danger is-small is-narrow`),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.errorStatusClass.set(`hidden`),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,a){this.processing.set(i),a?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(i?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(i){let a=i[`@odata.count`],l=r({},this.metrics());if(l.totalItemCount=a,this.metrics.set(l),i.infiniteScrollBottomHit)this.angularGrid.dataView?.addItems(i.value);else{this.angularGrid.slickGrid?.scrollTo(0),this.dataset=i.value;let c=r({},this.metrics());c.itemCount=i.value.length,this.metrics.set(c)}this.odataQuery.set(i.query)}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}getCustomerDataApiMock(i){return this.errorStatusClass.set(`hidden`),new Promise(a=>{let l=i.toLowerCase().split(`&`),c=0,C=0,k=``,N=100,g={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of l){if(f.includes(`$top=`)&&(c=+f.substring(5),c===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(C=+f.substring(6)),f.includes(`$orderby=`)&&(k=f.substring(9)),f.includes(`$filter=`)){let s=f.substring(8).replace(`%20`,` `);if(s.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${ee}(.*?)'\\)`,`i`),d=s.match(r)||[],S=d[1].trim();g[S]={type:`matchespattern`,term:`^`+d[2].trim()}}if(s.includes(`contains`)){let r=s.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:`substring`,term:r[2].trim()}}if(s.includes(`substringof`)){let r=s.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/)||[],d=r[2].trim();g[d]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(s.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(s);if(Array.isArray(S)){let u=S[1].trim();g[u]={type:r,term:S[2].trim()}}}if(s.includes(`startswith`)&&s.includes(`endswith`)){let r=s.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=s.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();g[S]={type:`starts+ends`,term:[r[2].trim(),d[2].trim()]}}else if(s.includes(`startswith`)){let r=s.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:`starts`,term:r[2].trim()}}else if(s.includes(`endswith`)){let r=s.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],d=r[1].trim();g[d]={type:`ends`,term:r[2].trim()}}if(s.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(k.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${Y}/customers_100.json`).subscribe(f=>{let s=f;if(k?.length>0){let u=k.split(`,`);for(let D of u){let T=D.split(` `),w=T[0],b=x=>x;for(let x of w.split(`/`)){let o=b;b=G=>o(G)[x]}switch((T[1]??`asc`).toLocaleLowerCase()){case`asc`:s=s.sort((x,o)=>b(x).localeCompare(b(o)));break;case`desc`:s=s.sort((x,o)=>b(o).localeCompare(b(x)));break}}}let r=C,d=s;if(g){for(let u in g)u in g&&(d=d.filter(D=>{let T=g[u].type,w=g[u].term,b=u;if(u?.indexOf(` `)!==-1){let o=u.split(` `);b=o[o.length-1]}let m,x=D;for(let o of b.split(`/`))m=x[o],x=m;if(m){let[o,G]=Array.isArray(w)?w:[w];switch(T){case`eq`:return m.toLowerCase()===o;case`ne`:return m.toLowerCase()!==o;case`le`:return m.toLowerCase()<=o;case`lt`:return m.toLowerCase()<o;case`gt`:return m.toLowerCase()>o;case`ge`:return m.toLowerCase()>=o;case`ends`:return m.toLowerCase().endsWith(o);case`starts`:return m.toLowerCase().startsWith(o);case`starts+ends`:return m.toLowerCase().startsWith(o)&&m.toLowerCase().endsWith(G);case`substring`:return m.toLowerCase().includes(o);case`matchespattern`:return new RegExp(o.replaceAll(te,`.*`),`i`).test(m)}}}));N=d.length}r>d.length&&(i=i.replace(`$skip=${r}`,``),r=0);let S=d.slice(r,r+c);setTimeout(()=>{let u={query:i};u.value=S,u[`@odata.count`]=N,a(u)},100)})})}groupByGender(){this.angularGrid?.dataView?.setGrouping({getter:`gender`,formatter:i=>`Gender: ${i.value} <span class="text-green">(${i.count} items)</span>`,comparer:(i,a)=>BB.string(i.value,a.value),aggregators:[new LF.Sum(`gemder`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid.invalidate()}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`gender`,searchTerms:[`female`]}])}refreshMetrics(i){if(i?.current>=0){let a=r({},this.metrics());a.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.set(a),this.tagDataClass.set(a.itemCount===a.totalItemCount?`fully-loaded`:`partial-load`)}}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||h)}}static{this.ɵcmp=BI({type:h,selectors:[[`ng-component`]],decls:106,vars:10,consts:[[1,`demo38`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example38.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`is-6`,`italic`,`content`],[1,`row`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-remove-outline`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-gender`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid38`,3,`onAngularGridCreated`,`onRowCountChanged`,`columns`,`options`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`itemCount`],[`data-test`,`totalItemCount`],[`data-test`,`data-loaded-tag`,1,`badge`,`rounded-pill`,`text-bg-primary`]],template:function(a,l){a&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 38: OData (v4) Backend Service with Infinite Scroll
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return l.toggleSubTitle()}),oD(13,`
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
      `),dE(49,K,10,1),xc(),oD(50,`
  `),xc(),oD(51,`

  `),gi(52,`div`,7),oD(53,`
    `),gi(54,`div`,9),oD(55,`
      `),gi(56,`div`,10),oD(57,`
        `),gi(58,`strong`),oD(59,`Status: `),xc(),oD(60),gi(61,`span`,11),oD(62,`
          `),mp(63,`i`,12),oD(64,`
        `),xc(),oD(65,`
      `),xc(),oD(66,`
    `),xc(),oD(67,`
    `),gi(68,`div`,13),oD(69,`
      `),gi(70,`div`,14),oD(71,`
        `),gi(72,`strong`),oD(73,`OData Query:`),xc(),oD(74,` `),gi(75,`span`,15),oD(76),xc(),oD(77,`
      `),xc(),oD(78,`
    `),xc(),oD(79,`
  `),xc(),oD(80,`

  `),gi(81,`div`,7),oD(82,`
    `),gi(83,`div`,16),oD(84,`
      `),gi(85,`button`,17),Dp(`click`,function(){return l.clearAllFiltersAndSorts()}),oD(86,`
        `),mp(87,`i`,18),oD(88,`
        Clear all Filter & Sorts
      `),xc(),oD(89,`
      `),gi(90,`button`,19),Dp(`click`,function(){return l.setFiltersDynamically()}),oD(91,`
        Set Filters Dynamically
      `),xc(),oD(92,`
      `),gi(93,`button`,20),Dp(`click`,function(){return l.setSortingDynamically()}),oD(94,`
        Set Sorting Dynamically
      `),xc(),oD(95,`
      `),gi(96,`button`,21),Dp(`click`,function(){return l.groupByGender()}),oD(97,`
        Group by Gender
      `),xc(),oD(98,`

      `),dE(99,X,23,8),xc(),oD(100,`
  `),xc(),oD(101,`

  `),gi(102,`angular-slickgrid`,22),Dp(`onAngularGridCreated`,function(C){return l.angularGridReady(C.detail)})(`onRowCountChanged`,function(C){return l.refreshMetrics(C.detail.args)}),oD(103,`
  `),xc(),oD(104,`
`),xc(),oD(105,`
`)),a&2&&(av(49),fE(l.errorStatus()?49:-1),av(7),zE(l.status()?.class),av(4),Lc(` `,l.status()?.text,`
        `),av(),gp(`hidden`,!l.processing()),av(15),jp(l.odataQuery()),av(23),fE(l.metrics()?99:-1),av(3),gp(`columns`,l.columns)(`options`,l.gridOptions)(`dataset`,l.dataset))},dependencies:[q1,zp],styles:[`.demo38 .badge{display:none}.demo38 .badge.fully-loaded{display:inline-flex}
`],encapsulation:2})}}return h})();export{me as Example38Component};