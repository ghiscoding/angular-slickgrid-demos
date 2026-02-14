import{a as d}from"./chunk-3ZF7QZND.js";import{b as G}from"./chunk-CDWFOXJG.js";import{Da as T,T as D,ja as v,n as w,wa as f,xa as b,za as g}from"./chunk-IBXCHNN7.js";import{Aa as c,Kb as t,Lb as h,Pa as S,_b as y,ac as k,db as x,eb as _,ib as C,jb as n,kb as i,lb as p,vb as o,xb as E}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";function I(s,F){if(s&1&&(t(0,`
    `),n(1,"div",18),t(2,`
      `),n(3,"b"),t(4,"Metrics:"),i(),t(5,`
      `),n(6,"span"),t(7,`
        `),n(8,"span"),t(9),y(10,"date"),i(),t(11,` \u2014
        `),n(12,"span",19),t(13),i(),t(14,`
        items
      `),i(),t(15,`
    `),i(),t(16,`
  `)),s&2){let e=E();c(9),h(k(10,2,e.metrics.endTime,"dd MMM, h:mm:ssa")),c(4),h(e.metrics.totalItemCount)}}var u=50,V=(()=>{class s{constructor(){this.dataset=[],this.hideSubTitle=!1,this.scrollEndCalled=!1,this.shouldResetOnSort=!1}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(0,u),this.metrics={itemCount:u,totalItemCount:u}}angularGridReady(e){this.angularGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:"number"},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:"number"},{id:"start",name:"Start",field:"start",type:"date",outputType:"dateIso",formatter:g.date,exportWithFormatter:!0,params:{dateFormat:"MMM DD, YYYY"},sortable:!0,filterable:!0,filter:{model:f.compoundDate}},{id:"finish",name:"Finish",field:"finish",type:"date",outputType:"dateIso",formatter:g.date,exportWithFormatter:!0,params:{dateFormat:"MMM DD, YYYY"},sortable:!0,filterable:!0,filter:{model:f.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,formatter:g.checkmarkMaterial}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableFiltering:!0,enableGrouping:!0,editable:!1,rowHeight:33,enableExcelExport:!0,externalResources:[new G]}}handleOnScroll(e){let a=e.grid.getViewportNode();if(["mousewheel","scroll"].includes(e.triggeredBy||"")&&!this.scrollEndCalled&&a.scrollTop>0&&Math.ceil(a.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log("onScroll end reached, add more items");let r=this.angularGrid.dataView?.getItemCount()||0,l=this.loadData(r,u);this.angularGrid.dataView?.addItems(l),this.scrollEndCalled=!1}}handleOnSort(){if(this.shouldResetOnSort){let e=this.loadData(0,u);this.angularGrid.slickGrid?.scrollTo(0),this.angularGrid.dataView?.setItems(e),this.angularGrid.dataView?.reSort()}}groupByDuration(){this.angularGrid?.dataView?.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,a)=>v.numeric(e.value,a.value,D.asc),aggregators:[new b.Avg("percentComplete"),new b.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.angularGrid?.slickGrid?.invalidate()}loadData(e,a){let r=[];for(let l=e;l<e+a;l++)r.push(this.newItem(l));return r}newItem(e){return{id:e,title:"Task "+e,duration:Math.round(Math.random()*100)+"",percentComplete:d(1,12),start:new Date(2020,d(1,11),d(1,28)),finish:new Date(2022,d(1,11),d(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts()}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:"start",searchTerms:["2020-08-25"],operator:"<="}])}handleOnRowCountChanged(e){this.angularGrid&&e?.current>=0&&(this.angularGrid.dataView?.reSort(),this.metrics.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0)}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:"title",direction:"DESC"}])}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.angularGrid.resizerService.resizeGrid(2)}static{this.\u0275fac=function(a){return new(a||s)}}static{this.\u0275cmp=S({type:s,selectors:[["ng-component"]],decls:73,vars:4,consts:[[1,"demo40"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example40.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row"],[1,"col-sm-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-by-duration",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"ml-4"],["data-test","onsort-on",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","onsort-off",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid40",3,"onAngularGridCreated","onSort","onScroll","onRowCountChanged","columns","options","dataset"],[1,"mt-2",2,"margin","10px 0px"],["data-test","totalItemCount"]],template:function(a,r){a&1&&(n(0,"div",0),t(1,`
  `),n(2,"h2"),t(3,`
    Example 40: Infinite Scroll from JSON data
    `),n(4,"span",1),t(5,`
      `),n(6,"a",2),t(7,`
        `),p(8,"span",3),t(9,` code
      `),i(),t(10,`
    `),i(),t(11,`
    `),n(12,"button",4),o("click",function(){return r.toggleSubTitle()}),t(13,`
      `),p(14,"span",5),t(15,`
    `),i(),t(16,`
  `),i(),t(17,`

  `),n(18,"div",6),t(19,`
    `),n(20,"ul"),t(21,`
      `),n(22,"li"),t(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      `),i(),t(24,`
      `),n(25,"li"),t(26,`
        NOTES: `),n(27,"code"),t(28,"presets.pagination"),i(),t(29,` is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      `),i(),t(30,`
    `),i(),t(31,`
  `),i(),t(32,`

  `),n(33,"div",7),t(34,`
    `),n(35,"div",8),t(36,`
      `),n(37,"button",9),o("click",function(){return r.clearAllFiltersAndSorts()}),t(38,`
        `),p(39,"span",10),t(40,`
        `),n(41,"span"),t(42,"Clear all Filter & Sorts"),i(),t(43,`
      `),i(),t(44,`
      `),n(45,"button",11),o("click",function(){return r.setFiltersDynamically()}),t(46,`
        Set Filters Dynamically
      `),i(),t(47,`
      `),n(48,"button",12),o("click",function(){return r.setSortingDynamically()}),t(49,`
        Set Sorting Dynamically
      `),i(),t(50,`
      `),n(51,"button",13),o("click",function(){return r.groupByDuration()}),t(52,`
        Group by Duration
      `),i(),t(53,`

      `),n(54,"label",14),t(55,"Reset Dataset "),n(56,"code"),t(57,"onSort"),i(),t(58,":"),i(),t(59,`
      `),n(60,"button",15),o("click",function(){return r.onSortReset(!0)}),t(61,"ON"),i(),t(62,`
      `),n(63,"button",16),o("click",function(){return r.onSortReset(!1)}),t(64,"OFF"),i(),t(65,`
    `),i(),t(66,`
  `),i(),t(67,`

  `),x(68,I,17,5),n(69,"angular-slickgrid",17),o("onAngularGridCreated",function(m){return r.angularGridReady(m.detail)})("onSort",function(){return r.handleOnSort()})("onScroll",function(m){return r.handleOnScroll(m.detail.args)})("onRowCountChanged",function(m){return r.handleOnRowCountChanged(m.detail.args)}),t(70,`
  `),i(),t(71,`
`),i(),t(72,`
`)),a&2&&(c(68),_(r.metrics?68:-1),c(),C("columns",r.columnDefinitions)("options",r.gridOptions)("dataset",r.dataset))},dependencies:[T,w],encapsulation:2})}}return s})();export{V as Example40Component};
