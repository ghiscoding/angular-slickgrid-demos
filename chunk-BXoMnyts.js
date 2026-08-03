import{Dn as jp,Fn as mp,Gt as bD,Hn as oD,Wt as av,Z as NE,dn as gi,fr as wD,g as Dp,l as BI,on as fE,pn as gp,tn as dE,yr as xc}from"./chunk-B0w5H0p9.js";import{E as LF,S as JN,gt as q1,kt as zp,l as BB,x as Iu,xt as te}from"./chunk-C7G4ZLh2.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";import{r as s}from"./chunk-CiyLb43o.js";function I(s,F){if(s&1&&(oD(0,`
    `),gi(1,`div`,18),oD(2,`
      `),gi(3,`b`),oD(4,`Metrics:`),xc(),oD(5,`
      `),gi(6,`span`),oD(7,`
        `),gi(8,`span`),oD(9),wD(10,`date`),xc(),oD(11,` \u2014
        `),gi(12,`span`,19),oD(13),xc(),oD(14,`
        items
      `),xc(),oD(15,`
    `),xc(),oD(16,`
  `)),s&2){let e=NE();av(9),jp(bD(10,2,e.metrics.endTime,`dd MMM, h:mm:ssa`)),av(4),jp(e.metrics.totalItemCount)}}var u=50;var V=(()=>{class s$1{constructor(){this.dataset=[],this.hideSubTitle=!1,this.scrollEndCalled=!1,this.shouldResetOnSort=!1}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(0,u),this.metrics={itemCount:u,totalItemCount:u}}angularGridReady(e){this.angularGrid=e}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,type:`date`,outputType:`dateIso`,formatter:JN.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:Iu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,outputType:`dateIso`,formatter:JN.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:Iu.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,formatter:JN.checkmarkMaterial}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33,enableExcelExport:!0,externalResources:[new Ze]}}handleOnScroll(e){let a=e.grid.getViewportNode();if([`mousewheel`,`scroll`].includes(e.triggeredBy||``)&&!this.scrollEndCalled&&a.scrollTop>0&&Math.ceil(a.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log(`onScroll end reached, add more items`);let r=this.angularGrid.dataView?.getItemCount()||0,l=this.loadData(r,u);this.angularGrid.dataView?.addItems(l),this.scrollEndCalled=!1}}handleOnSort(){if(this.shouldResetOnSort){let e=this.loadData(0,u);this.angularGrid.slickGrid?.scrollTo(0),this.angularGrid.dataView?.setItems(e),this.angularGrid.dataView?.reSort()}}groupByDuration(){this.angularGrid?.dataView?.setGrouping({getter:`duration`,formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,a)=>BB.numeric(e.value,a.value,te.asc),aggregators:[new LF.Avg(`percentComplete`),new LF.Sum(`cost`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid?.invalidate()}loadData(e,a){let r=[];for(let l=e;l<e+a;l++)r.push(this.newItem(l));return r}newItem(e){return{id:e,title:`Task `+e,duration:Math.round(Math.random()*100)+``,percentComplete:s(1,12),start:new Date(2020,s(1,11),s(1,28)),finish:new Date(2022,s(1,11),s(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`start`,searchTerms:[`2020-08-25`],operator:`<=`}])}handleOnRowCountChanged(e){this.angularGrid&&e?.current>=0&&(this.angularGrid.dataView?.reSort(),this.metrics.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`title`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[e](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}static{this.ɵfac=function(a){return new(a||s$1)}}static{this.ɵcmp=BI({type:s$1,selectors:[[`ng-component`]],decls:73,vars:4,consts:[[1,`demo40`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example40.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-duration`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`ml-4`],[`data-test`,`onsort-on`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`onsort-off`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid40`,3,`onAngularGridCreated`,`onSort`,`onScroll`,`onRowCountChanged`,`columns`,`options`,`dataset`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`totalItemCount`]],template:function(a,r){a&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 40: Infinite Scroll from JSON data
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return r.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    `),gi(20,`ul`),oD(21,`
      `),gi(22,`li`),oD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      `),xc(),oD(24,`
      `),gi(25,`li`),oD(26,`
        NOTES: `),gi(27,`code`),oD(28,`presets.pagination`),xc(),oD(29,` is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      `),xc(),oD(30,`
    `),xc(),oD(31,`
  `),xc(),oD(32,`

  `),gi(33,`div`,7),oD(34,`
    `),gi(35,`div`,8),oD(36,`
      `),gi(37,`button`,9),Dp(`click`,function(){return r.clearAllFiltersAndSorts()}),oD(38,`
        `),mp(39,`span`,10),oD(40,`
        `),gi(41,`span`),oD(42,`Clear all Filter & Sorts`),xc(),oD(43,`
      `),xc(),oD(44,`
      `),gi(45,`button`,11),Dp(`click`,function(){return r.setFiltersDynamically()}),oD(46,`
        Set Filters Dynamically
      `),xc(),oD(47,`
      `),gi(48,`button`,12),Dp(`click`,function(){return r.setSortingDynamically()}),oD(49,`
        Set Sorting Dynamically
      `),xc(),oD(50,`
      `),gi(51,`button`,13),Dp(`click`,function(){return r.groupByDuration()}),oD(52,`
        Group by Duration
      `),xc(),oD(53,`

      `),gi(54,`label`,14),oD(55,`Reset Dataset `),gi(56,`code`),oD(57,`onSort`),xc(),oD(58,`:`),xc(),oD(59,`
      `),gi(60,`button`,15),Dp(`click`,function(){return r.onSortReset(!0)}),oD(61,`ON`),xc(),oD(62,`
      `),gi(63,`button`,16),Dp(`click`,function(){return r.onSortReset(!1)}),oD(64,`OFF`),xc(),oD(65,`
    `),xc(),oD(66,`
  `),xc(),oD(67,`

  `),dE(68,I,17,5),gi(69,`angular-slickgrid`,17),Dp(`onAngularGridCreated`,function(m){return r.angularGridReady(m.detail)})(`onSort`,function(){return r.handleOnSort()})(`onScroll`,function(m){return r.handleOnScroll(m.detail.args)})(`onRowCountChanged`,function(m){return r.handleOnRowCountChanged(m.detail.args)}),oD(70,`
  `),xc(),oD(71,`
`),xc(),oD(72,`
`)),a&2&&(av(68),fE(r.metrics?68:-1),av(),gp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[q1,zp],encapsulation:2})}}return s$1})();export{V as Example40Component};