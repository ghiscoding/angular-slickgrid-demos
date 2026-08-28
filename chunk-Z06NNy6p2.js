import{Dt as UE,En as iD,Kn as mp,Nt as Vp,Qn as pI,Tt as Tp,Wn as mi,_n as fI,bt as SI,hr as vp,ln as cy,o as Ac,qt as _D,yr as wD}from"./chunk-06EGdSfW.js";import{H as _W,b as Pm,c as GM,mt as nk,rt as gR,st as ip,wt as te}from"./chunk-CAMk6vEo.js";import{t as Ze}from"./chunk-CVoct-s8.js";import{r as s}from"./chunk-CiyLb43o.js";function I(s,F){if(s&1&&(iD(0,`
    `),mi(1,`div`,18),iD(2,`
      `),mi(3,`b`),iD(4,`Metrics:`),Ac(),iD(5,`
      `),mi(6,`span`),iD(7,`
        `),mi(8,`span`),iD(9),wD(10,`date`),Ac(),iD(11,` \u2014
        `),mi(12,`span`,19),iD(13),Ac(),iD(14,`
        items
      `),Ac(),iD(15,`
    `),Ac(),iD(16,`
  `)),s&2){let e=SI();cy(9),Vp(_D(10,2,e.metrics.endTime,`dd MMM, h:mm:ssa`)),cy(4),Vp(e.metrics.totalItemCount)}}var u=50;var V=(()=>{class s$1{constructor(){this.dataset=[],this.hideSubTitle=!1,this.scrollEndCalled=!1,this.shouldResetOnSort=!1}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(0,u),this.metrics={itemCount:u,totalItemCount:u}}angularGridReady(e){this.angularGrid=e}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,type:`date`,outputType:`dateIso`,formatter:nk.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,outputType:`dateIso`,formatter:nk.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,formatter:nk.checkmarkMaterial}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33,enableExcelExport:!0,externalResources:[new Ze]}}handleOnScroll(e){let a=e.grid.getViewportNode();if([`mousewheel`,`scroll`].includes(e.triggeredBy||``)&&!this.scrollEndCalled&&a.scrollTop>0&&Math.ceil(a.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log(`onScroll end reached, add more items`);let r=this.angularGrid.dataView?.getItemCount()||0,l=this.loadData(r,u);this.angularGrid.dataView?.addItems(l),this.scrollEndCalled=!1}}handleOnSort(){if(this.shouldResetOnSort){let e=this.loadData(0,u);this.angularGrid.slickGrid?.scrollTo(0),this.angularGrid.dataView?.setItems(e),this.angularGrid.dataView?.reSort()}}groupByDuration(){this.angularGrid?.dataView?.setGrouping({getter:`duration`,formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,a)=>GM.numeric(e.value,a.value,te.asc),aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid?.invalidate()}loadData(e,a){let r=[];for(let l=e;l<e+a;l++)r.push(this.newItem(l));return r}newItem(e){return{id:e,title:`Task `+e,duration:Math.round(Math.random()*100)+``,percentComplete:s(1,12),start:new Date(2020,s(1,11),s(1,28)),finish:new Date(2022,s(1,11),s(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`start`,searchTerms:[`2020-08-25`],operator:`<=`}])}handleOnRowCountChanged(e){this.angularGrid&&e?.current>=0&&(this.angularGrid.dataView?.reSort(),this.metrics.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`title`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[e](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}static{this.ɵfac=function(a){return new(a||s$1)}}static{this.ɵcmp=UE({type:s$1,selectors:[[`ng-component`]],decls:73,vars:4,consts:[[1,`demo40`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example40.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-duration`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`ml-4`],[`data-test`,`onsort-on`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`onsort-off`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid40`,3,`onAngularGridCreated`,`onSort`,`onScroll`,`onRowCountChanged`,`columns`,`options`,`dataset`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`totalItemCount`]],template:function(a,r){a&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 40: Infinite Scroll from JSON data
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return r.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    `),mi(20,`ul`),iD(21,`
      `),mi(22,`li`),iD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      `),Ac(),iD(24,`
      `),mi(25,`li`),iD(26,`
        NOTES: `),mi(27,`code`),iD(28,`presets.pagination`),Ac(),iD(29,` is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      `),Ac(),iD(30,`
    `),Ac(),iD(31,`
  `),Ac(),iD(32,`

  `),mi(33,`div`,7),iD(34,`
    `),mi(35,`div`,8),iD(36,`
      `),mi(37,`button`,9),Tp(`click`,function(){return r.clearAllFiltersAndSorts()}),iD(38,`
        `),vp(39,`span`,10),iD(40,`
        `),mi(41,`span`),iD(42,`Clear all Filter & Sorts`),Ac(),iD(43,`
      `),Ac(),iD(44,`
      `),mi(45,`button`,11),Tp(`click`,function(){return r.setFiltersDynamically()}),iD(46,`
        Set Filters Dynamically
      `),Ac(),iD(47,`
      `),mi(48,`button`,12),Tp(`click`,function(){return r.setSortingDynamically()}),iD(49,`
        Set Sorting Dynamically
      `),Ac(),iD(50,`
      `),mi(51,`button`,13),Tp(`click`,function(){return r.groupByDuration()}),iD(52,`
        Group by Duration
      `),Ac(),iD(53,`

      `),mi(54,`label`,14),iD(55,`Reset Dataset `),mi(56,`code`),iD(57,`onSort`),Ac(),iD(58,`:`),Ac(),iD(59,`
      `),mi(60,`button`,15),Tp(`click`,function(){return r.onSortReset(!0)}),iD(61,`ON`),Ac(),iD(62,`
      `),mi(63,`button`,16),Tp(`click`,function(){return r.onSortReset(!1)}),iD(64,`OFF`),Ac(),iD(65,`
    `),Ac(),iD(66,`
  `),Ac(),iD(67,`

  `),fI(68,I,17,5),mi(69,`angular-slickgrid`,17),Tp(`onAngularGridCreated`,function(m){return r.angularGridReady(m.detail)})(`onSort`,function(){return r.handleOnSort()})(`onScroll`,function(m){return r.handleOnScroll(m.detail.args)})(`onRowCountChanged`,function(m){return r.handleOnRowCountChanged(m.detail.args)}),iD(70,`
  `),Ac(),iD(71,`
`),Ac(),iD(72,`
`)),a&2&&(cy(68),pI(r.metrics?68:-1),cy(),mp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[_W,Pm],encapsulation:2})}}return s$1})();export{V as Example40Component};