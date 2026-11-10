import{r as s}from"./chunk-CiyLb43o.js";import{n as et}from"./chunk-BzRTDaIv.js";import{Ct as ku,Rt as ye,V as R$,j as NP,lt as dm,mt as h0,rt as ZR}from"./chunk-Lo0QQjTd.js";import{Gn as mI,In as kI,X as Lc,dr as uD,en as _p,in as bp,k as GE,o as Ap,ot as ND,r as AD,vr as vI,wt as Qp,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";function I(s,F){if(s&1&&(uD(0,`
    `),vi(1,`div`,18),uD(2,`
      `),vi(3,`b`),uD(4,`Metrics:`),Lc(),uD(5,`
      `),vi(6,`span`),uD(7,`
        `),vi(8,`span`),uD(9),ND(10,`date`),Lc(),uD(11,` \u2014
        `),vi(12,`span`,19),uD(13),Lc(),uD(14,`
        items
      `),Lc(),uD(15,`
    `),Lc(),uD(16,`
  `)),s&2){let e=kI();fv(9),Qp(AD(10,2,e.metrics.endTime,`dd MMM, h:mm:ssa`)),fv(4),Qp(e.metrics.totalItemCount)}}var u=50;var V=(()=>{class s$1{constructor(){this.dataset=[],this.hideSubTitle=!1,this.scrollEndCalled=!1,this.shouldResetOnSort=!1}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(0,u),this.metrics={itemCount:u,totalItemCount:u}}angularGridReady(e){this.angularGrid=e}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,type:`date`,outputType:`dateIso`,formatter:ZR.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:ku.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,outputType:`dateIso`,formatter:ZR.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:ku.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,formatter:ZR.checkmarkMaterial}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33,enableExcelExport:!0,externalResources:[new et]}}handleOnScroll(e){let a=e.grid.getViewportNode();if([`mousewheel`,`scroll`].includes(e.triggeredBy||``)&&!this.scrollEndCalled&&a.scrollTop>0&&Math.ceil(a.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log(`onScroll end reached, add more items`);let r=this.angularGrid.dataView?.getItemCount()||0,l=this.loadData(r,u);this.angularGrid.dataView?.addItems(l),this.scrollEndCalled=!1}}handleOnSort(){if(this.shouldResetOnSort){let e=this.loadData(0,u);this.angularGrid.slickGrid?.scrollTo(0),this.angularGrid.dataView?.setItems(e),this.angularGrid.dataView?.reSort()}}groupByDuration(){this.angularGrid?.dataView?.setGrouping({getter:`duration`,formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,a)=>NP.numeric(e.value,a.value,ye.asc),aggregators:[new h0.Avg(`percentComplete`),new h0.Sum(`cost`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid?.invalidate()}loadData(e,a){let r=[];for(let l=e;l<e+a;l++)r.push(this.newItem(l));return r}newItem(e){return{id:e,title:`Task `+e,duration:Math.round(Math.random()*100)+``,percentComplete:s(1,12),start:new Date(2020,s(1,11),s(1,28)),finish:new Date(2022,s(1,11),s(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`start`,searchTerms:[`2020-08-25`],operator:`<=`}])}handleOnRowCountChanged(e){this.angularGrid&&e?.current>=0&&(this.angularGrid.dataView?.reSort(),this.metrics.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`title`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[e](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}static{this.ɵfac=function(a){return new(a||s$1)}}static{this.ɵcmp=GE({type:s$1,selectors:[[`ng-component`]],decls:73,vars:4,consts:[[1,`demo40`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example40.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-duration`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`ml-4`],[`data-test`,`onsort-on`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`onsort-off`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid40`,3,`onAngularGridCreated`,`onSort`,`onScroll`,`onRowCountChanged`,`columns`,`options`,`dataset`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`totalItemCount`]],template:function(a,r){a&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 40: Infinite Scroll from JSON data
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    `),vi(20,`ul`),uD(21,`
      `),vi(22,`li`),uD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      `),Lc(),uD(24,`
      `),vi(25,`li`),uD(26,`
        NOTES: `),vi(27,`code`),uD(28,`presets.pagination`),Lc(),uD(29,` is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      `),Lc(),uD(30,`
    `),Lc(),uD(31,`
  `),Lc(),uD(32,`

  `),vi(33,`div`,7),uD(34,`
    `),vi(35,`div`,8),uD(36,`
      `),vi(37,`button`,9),Ap(`click`,function(){return r.clearAllFiltersAndSorts()}),uD(38,`
        `),_p(39,`span`,10),uD(40,`
        `),vi(41,`span`),uD(42,`Clear all Filter & Sorts`),Lc(),uD(43,`
      `),Lc(),uD(44,`
      `),vi(45,`button`,11),Ap(`click`,function(){return r.setFiltersDynamically()}),uD(46,`
        Set Filters Dynamically
      `),Lc(),uD(47,`
      `),vi(48,`button`,12),Ap(`click`,function(){return r.setSortingDynamically()}),uD(49,`
        Set Sorting Dynamically
      `),Lc(),uD(50,`
      `),vi(51,`button`,13),Ap(`click`,function(){return r.groupByDuration()}),uD(52,`
        Group by Duration
      `),Lc(),uD(53,`

      `),vi(54,`label`,14),uD(55,`Reset Dataset `),vi(56,`code`),uD(57,`onSort`),Lc(),uD(58,`:`),Lc(),uD(59,`
      `),vi(60,`button`,15),Ap(`click`,function(){return r.onSortReset(!0)}),uD(61,`ON`),Lc(),uD(62,`
      `),vi(63,`button`,16),Ap(`click`,function(){return r.onSortReset(!1)}),uD(64,`OFF`),Lc(),uD(65,`
    `),Lc(),uD(66,`
  `),Lc(),uD(67,`

  `),mI(68,I,17,5),vi(69,`angular-slickgrid`,17),Ap(`onAngularGridCreated`,function(m){return r.angularGridReady(m.detail)})(`onSort`,function(){return r.handleOnSort()})(`onScroll`,function(m){return r.handleOnScroll(m.detail.args)})(`onRowCountChanged`,function(m){return r.handleOnRowCountChanged(m.detail.args)}),uD(70,`
  `),Lc(),uD(71,`
`),Lc(),uD(72,`
`)),a&2&&(fv(68),vI(r.metrics?68:-1),fv(),bp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[R$,dm],encapsulation:2})}}return s$1})();export{V as Example40Component};