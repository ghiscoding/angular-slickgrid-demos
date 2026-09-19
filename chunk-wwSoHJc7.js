import{F as Ip,Kn as pI,Ot as Up,Pn as ly,b as Ep,hr as xI,p as CD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,vn as hI,xr as yi}from"./chunk-Rd4ToC_L.js";import{Tt as te,W as _W,ct as ip,ht as nk,it as gR,s as GM,x as Pm}from"./chunk-DLuyVhQJ.js";import{r as s}from"./chunk-CiyLb43o.js";import{t as Ze}from"./chunk-C5onuIZj.js";function I(s,F){if(s&1&&(sD(0,`
    `),yi(1,`div`,18),sD(2,`
      `),yi(3,`b`),sD(4,`Metrics:`),Rc(),sD(5,`
      `),yi(6,`span`),sD(7,`
        `),yi(8,`span`),sD(9),CD(10,`date`),Rc(),sD(11,` \u2014
        `),yi(12,`span`,19),sD(13),Rc(),sD(14,`
        items
      `),Rc(),sD(15,`
    `),Rc(),sD(16,`
  `)),s&2){let e=xI();ly(9),Up(MD(10,2,e.metrics.endTime,`dd MMM, h:mm:ssa`)),ly(4),Up(e.metrics.totalItemCount)}}var u=50;var V=(()=>{class s$1{constructor(){this.dataset=[],this.hideSubTitle=!1,this.scrollEndCalled=!1,this.shouldResetOnSort=!1}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(0,u),this.metrics={itemCount:u,totalItemCount:u}}angularGridReady(e){this.angularGrid=e}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,type:`date`,outputType:`dateIso`,formatter:nk.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,outputType:`dateIso`,formatter:nk.date,exportWithFormatter:!0,params:{dateFormat:`MMM DD, YYYY`},sortable:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,formatter:nk.checkmarkMaterial}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33,enableExcelExport:!0,externalResources:[new Ze]}}handleOnScroll(e){let a=e.grid.getViewportNode();if([`mousewheel`,`scroll`].includes(e.triggeredBy||``)&&!this.scrollEndCalled&&a.scrollTop>0&&Math.ceil(a.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log(`onScroll end reached, add more items`);let r=this.angularGrid.dataView?.getItemCount()||0,l=this.loadData(r,u);this.angularGrid.dataView?.addItems(l),this.scrollEndCalled=!1}}handleOnSort(){if(this.shouldResetOnSort){let e=this.loadData(0,u);this.angularGrid.slickGrid?.scrollTo(0),this.angularGrid.dataView?.setItems(e),this.angularGrid.dataView?.reSort()}}groupByDuration(){this.angularGrid?.dataView?.setGrouping({getter:`duration`,formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,a)=>GM.numeric(e.value,a.value,te.asc),aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.slickGrid?.invalidate()}loadData(e,a){let r=[];for(let l=e;l<e+a;l++)r.push(this.newItem(l));return r}newItem(e){return{id:e,title:`Task `+e,duration:Math.round(Math.random()*100)+``,percentComplete:s(1,12),start:new Date(2020,s(1,11),s(1,28)),finish:new Date(2022,s(1,11),s(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:`start`,searchTerms:[`2020-08-25`],operator:`<=`}])}handleOnRowCountChanged(e){this.angularGrid&&e?.current>=0&&(this.angularGrid.dataView?.reSort(),this.metrics.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:`title`,direction:`DESC`}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[e](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}static{this.ɵfac=function(a){return new(a||s$1)}}static{this.ɵcmp=$E({type:s$1,selectors:[[`ng-component`]],decls:73,vars:4,consts:[[1,`demo40`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example40.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-sm-12`],[`data-test`,`clear-filters-sorting`,`title`,`Clear all Filters & Sorts`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-by-duration`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`ml-4`],[`data-test`,`onsort-on`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`onsort-off`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid40`,3,`onAngularGridCreated`,`onSort`,`onScroll`,`onRowCountChanged`,`columns`,`options`,`dataset`],[1,`mt-2`,2,`margin`,`10px 0px`],[`data-test`,`totalItemCount`]],template:function(a,r){a&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 40: Infinite Scroll from JSON data
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return r.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    `),yi(20,`ul`),sD(21,`
      `),yi(22,`li`),sD(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      `),Rc(),sD(24,`
      `),yi(25,`li`),sD(26,`
        NOTES: `),yi(27,`code`),sD(28,`presets.pagination`),Rc(),sD(29,` is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      `),Rc(),sD(30,`
    `),Rc(),sD(31,`
  `),Rc(),sD(32,`

  `),yi(33,`div`,7),sD(34,`
    `),yi(35,`div`,8),sD(36,`
      `),yi(37,`button`,9),bp(`click`,function(){return r.clearAllFiltersAndSorts()}),sD(38,`
        `),Ip(39,`span`,10),sD(40,`
        `),yi(41,`span`),sD(42,`Clear all Filter & Sorts`),Rc(),sD(43,`
      `),Rc(),sD(44,`
      `),yi(45,`button`,11),bp(`click`,function(){return r.setFiltersDynamically()}),sD(46,`
        Set Filters Dynamically
      `),Rc(),sD(47,`
      `),yi(48,`button`,12),bp(`click`,function(){return r.setSortingDynamically()}),sD(49,`
        Set Sorting Dynamically
      `),Rc(),sD(50,`
      `),yi(51,`button`,13),bp(`click`,function(){return r.groupByDuration()}),sD(52,`
        Group by Duration
      `),Rc(),sD(53,`

      `),yi(54,`label`,14),sD(55,`Reset Dataset `),yi(56,`code`),sD(57,`onSort`),Rc(),sD(58,`:`),Rc(),sD(59,`
      `),yi(60,`button`,15),bp(`click`,function(){return r.onSortReset(!0)}),sD(61,`ON`),Rc(),sD(62,`
      `),yi(63,`button`,16),bp(`click`,function(){return r.onSortReset(!1)}),sD(64,`OFF`),Rc(),sD(65,`
    `),Rc(),sD(66,`
  `),Rc(),sD(67,`

  `),pI(68,I,17,5),yi(69,`angular-slickgrid`,17),bp(`onAngularGridCreated`,function(m){return r.angularGridReady(m.detail)})(`onSort`,function(){return r.handleOnSort()})(`onScroll`,function(m){return r.handleOnScroll(m.detail.args)})(`onRowCountChanged`,function(m){return r.handleOnRowCountChanged(m.detail.args)}),sD(70,`
  `),Rc(),sD(71,`
`),Rc(),sD(72,`
`)),a&2&&(ly(68),hI(r.metrics?68:-1),ly(),Ep(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[_W,Pm],encapsulation:2})}}return s$1})();export{V as Example40Component};