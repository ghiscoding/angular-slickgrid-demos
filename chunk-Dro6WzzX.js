import{$ as MD,In as lD,Tr as xD,a as Ap,bt as RI,kr as yI,mn as dv,on as bp,tn as _p,xn as gI,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,bt as se,it as fT,jt as zA,l as D1,ut as jp,yt as sI}from"./chunk-Dk5kBPyv.js";import{t as Qe}from"./chunk-D0qctKwX.js";import{r as s}from"./chunk-CiyLb43o.js";function I(s,F){if(s&1&&(lD(0,`
    `),vi(1,`div`,18),lD(2,`
      `),vi(3,`b`),lD(4,`Metrics:`),Rc(),lD(5,`
      `),vi(6,`span`),lD(7,`
        `),vi(8,`span`),lD(9),MD(10,`date`),Rc(),lD(11,` \u2014
        `),vi(12,`span`,19),lD(13),Rc(),lD(14,`
        items
      `),Rc(),lD(15,`
    `),Rc(),lD(16,`
  `)),s&2){let e=RI();dv(9),Qp(xD(10,2,e.metrics.endTime,`dd MMM, h:mm:ssa`)),dv(4),Qp(e.metrics.totalItemCount)}}var u=50;var V=(()=>{class s$1{constructor(){this.dataset=[],this.hideSubTitle=!1,this.scrollEndCalled=!1,this.shouldResetOnSort=!1}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(0,u),this.metrics={itemCount:u,totalItemCount:u}}angularGridReady(e){this.angularGrid=e}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,type:`date`,outputType:`dateIso`,formatter:sI.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,outputType:`dateIso`,formatter:sI.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:uu.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,formatter:sI.checkmarkMaterial}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33,enableExcelExport:!0,externalResources:[new Qe]}}handleOnScroll(e){let a=e.grid.getViewportNode();if([`mousewheel`,`scroll`].includes(e.triggeredBy||``)&&!this.scrollEndCalled&&a.scrollTop>0&&Math.ceil(a.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log(`onScroll end reached, add more items`);let r=this.angularGrid.dataView?.getItemCount()||0,l=this.loadData(r,u);this.angularGrid.dataView?.addItems(l),this.scrollEndCalled=!1}}handleOnSort(){if(this.shouldResetOnSort){let e=this.loadData(0,u);this.angularGrid.slickGrid?.scrollTo(0),this.angularGrid.dataView?.setItems(e),this.angularGrid.dataView?.reSort()}}groupByDuration(){this.angularGrid?.dataView?.setGrouping({getter:`duration`,formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,a)=>zA.numeric(e.value,a.value,se.asc),aggregators:[new fT.Avg(`percentComplete`),new fT.Sum(`cost`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid?.invalidate()}loadData(e,a){let r=[];for(let l=e;l<e+a;l++)r.push(this.newItem(l));return r}newItem(e){return{id:e,title:`Task `+e,duration:Math.round(Math.random()*100)+``,percentComplete:s(1,12),start:new Date(2020,s(1,11),s(1,28)),finish:new Date(2022,s(1,11),s(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`start`,searchTerms:[`2020-08-25`],operator:`<=`}])}handleOnRowCountChanged(e){this.angularGrid&&e?.current>=0&&(this.angularGrid.dataView?.reSort(),this.metrics.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`title`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[e](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}static{this.ɵfac=function(a){return new(a||s$1)}}static{this.ɵcmp=WE({type:s$1,selectors:[[`ng-component`]],decls:73,vars:4,consts:[[1,`demo40`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example40.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-duration`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`ml-4`],[`data-test`,`onsort-on`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`onsort-off`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid40`,3,`onAngularGridCreated`,`onSort`,`onScroll`,`onRowCountChanged`,`columns`,`options`,`dataset`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`totalItemCount`]],template:function(a,r){a&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 40: Infinite Scroll from JSON data
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    `),vi(20,`ul`),lD(21,`
      `),vi(22,`li`),lD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      `),Rc(),lD(24,`
      `),vi(25,`li`),lD(26,`
        NOTES: `),vi(27,`code`),lD(28,`presets.pagination`),Rc(),lD(29,` is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      `),Rc(),lD(30,`
    `),Rc(),lD(31,`
  `),Rc(),lD(32,`

  `),vi(33,`div`,7),lD(34,`
    `),vi(35,`div`,8),lD(36,`
      `),vi(37,`button`,9),Ap(`click`,function(){return r.clearAllFiltersAndSorts()}),lD(38,`
        `),_p(39,`span`,10),lD(40,`
        `),vi(41,`span`),lD(42,`Clear all Filter & Sorts`),Rc(),lD(43,`
      `),Rc(),lD(44,`
      `),vi(45,`button`,11),Ap(`click`,function(){return r.setFiltersDynamically()}),lD(46,`
        Set Filters Dynamically
      `),Rc(),lD(47,`
      `),vi(48,`button`,12),Ap(`click`,function(){return r.setSortingDynamically()}),lD(49,`
        Set Sorting Dynamically
      `),Rc(),lD(50,`
      `),vi(51,`button`,13),Ap(`click`,function(){return r.groupByDuration()}),lD(52,`
        Group by Duration
      `),Rc(),lD(53,`

      `),vi(54,`label`,14),lD(55,`Reset Dataset `),vi(56,`code`),lD(57,`onSort`),Rc(),lD(58,`:`),Rc(),lD(59,`
      `),vi(60,`button`,15),Ap(`click`,function(){return r.onSortReset(!0)}),lD(61,`ON`),Rc(),lD(62,`
      `),vi(63,`button`,16),Ap(`click`,function(){return r.onSortReset(!1)}),lD(64,`OFF`),Rc(),lD(65,`
    `),Rc(),lD(66,`
  `),Rc(),lD(67,`

  `),gI(68,I,17,5),vi(69,`angular-slickgrid`,17),Ap(`onAngularGridCreated`,function(m){return r.angularGridReady(m.detail)})(`onSort`,function(){return r.handleOnSort()})(`onScroll`,function(m){return r.handleOnScroll(m.detail.args)})(`onRowCountChanged`,function(m){return r.handleOnRowCountChanged(m.detail.args)}),lD(70,`
  `),Rc(),lD(71,`
`),Rc(),lD(72,`
`)),a&2&&(dv(68),yI(r.metrics?68:-1),dv(),bp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[D1,jp],encapsulation:2})}}return s$1})();export{V as Example40Component};