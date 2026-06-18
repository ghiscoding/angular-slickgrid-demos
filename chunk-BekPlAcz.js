import {s as s$1}from'./chunk-B52EFzUa.js';import {Z as Ze}from'./chunk-CP-2FMG8.js';import {h as Tu,q as qN,a1 as FP,i as MB,a2 as te,T as TI,U as U1,H as Hp,u as ui,B as BE,a as ap,d as Tc,f as fp,z as zI,e as Uy,Q as QI,g as sp,m as iD,n as uE,M as Mp,p as cD}from'./main-C6PQTYH6.js';function I(s,F){if(s&1&&(BE(0,`
    `),ui(1,"div",18),BE(2,`
      `),ui(3,"b"),BE(4,"Metrics:"),Tc(),BE(5,`
      `),ui(6,"span"),BE(7,`
        `),ui(8,"span"),BE(9),iD(10,"date"),Tc(),BE(11,` \u2014
        `),ui(12,"span",19),BE(13),Tc(),BE(14,`
        items
      `),Tc(),BE(15,`
    `),Tc(),BE(16,`
  `)),s&2){let e=uE();Uy(9),Mp(cD(10,2,e.metrics.endTime,"dd MMM, h:mm:ssa")),Uy(4),Mp(e.metrics.totalItemCount);}}var u=50,V=(()=>{class s{constructor(){this.dataset=[],this.hideSubTitle=false,this.scrollEndCalled=false,this.shouldResetOnSort=false;}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(0,u),this.metrics={itemCount:u,totalItemCount:u};}angularGridReady(e){this.angularGrid=e;}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,minWidth:100,filterable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,minWidth:100,filterable:true,type:"number"},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:true,minWidth:100,filterable:true,type:"number"},{id:"start",name:"Start",field:"start",type:"date",outputType:"dateIso",formatter:qN.date,exportWithFormatter:true,params:{dateFormat:"MMM DD, YYYY"},sortable:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",type:"date",outputType:"dateIso",formatter:qN.date,exportWithFormatter:true,params:{dateFormat:"MMM DD, YYYY"},sortable:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true,minWidth:100,filterable:true,formatter:qN.checkmarkMaterial}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:true,enableFiltering:true,enableGrouping:true,editable:false,rowHeight:33,enableExcelExport:true,externalResources:[new Ze]};}handleOnScroll(e){let a=e.grid.getViewportNode();if(["mousewheel","scroll"].includes(e.triggeredBy||"")&&!this.scrollEndCalled&&a.scrollTop>0&&Math.ceil(a.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log("onScroll end reached, add more items");let r=this.angularGrid.dataView?.getItemCount()||0,l=this.loadData(r,u);this.angularGrid.dataView?.addItems(l),this.scrollEndCalled=false;}}handleOnSort(){if(this.shouldResetOnSort){let e=this.loadData(0,u);this.angularGrid.slickGrid?.scrollTo(0),this.angularGrid.dataView?.setItems(e),this.angularGrid.dataView?.reSort();}}groupByDuration(){this.angularGrid?.dataView?.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,a)=>MB.numeric(e.value,a.value,te.asc),aggregators:[new FP.Avg("percentComplete"),new FP.Sum("cost")],aggregateCollapsed:false,lazyTotalsCalculation:true}),this.angularGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:true}]),this.angularGrid?.slickGrid?.invalidate();}loadData(e,a){let r=[];for(let l=e;l<e+a;l++)r.push(this.newItem(l));return r}newItem(e){return {id:e,title:"Task "+e,duration:Math.round(Math.random()*100)+"",percentComplete:s$1(1,12),start:new Date(2020,s$1(1,11),s$1(1,28)),finish:new Date(2022,s$1(1,11),s$1(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e;}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts();}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:"start",searchTerms:["2020-08-25"],operator:"<="}]);}handleOnRowCountChanged(e){this.angularGrid&&e?.current>=0&&(this.angularGrid.dataView?.reSort(),this.metrics.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0);}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:"title",direction:"DESC"}]);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.angularGrid.resizerService.resizeGrid(2);}static{this.\u0275fac=function(a){return new(a||s)};}static{this.\u0275cmp=TI({type:s,selectors:[["ng-component"]],decls:73,vars:4,consts:[[1,"demo40"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example40.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row"],[1,"col-sm-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-by-duration",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"ml-4"],["data-test","onsort-on",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","onsort-off",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid40",3,"onAngularGridCreated","onSort","onScroll","onRowCountChanged","columns","options","dataset"],[1,"mt-2",2,"margin","10px 0px"],["data-test","totalItemCount"]],template:function(a,r){a&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 40: Infinite Scroll from JSON data
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return r.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    `),ui(20,"ul"),BE(21,`
      `),ui(22,"li"),BE(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      `),Tc(),BE(24,`
      `),ui(25,"li"),BE(26,`
        NOTES: `),ui(27,"code"),BE(28,"presets.pagination"),Tc(),BE(29,` is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      `),Tc(),BE(30,`
    `),Tc(),BE(31,`
  `),Tc(),BE(32,`

  `),ui(33,"div",7),BE(34,`
    `),ui(35,"div",8),BE(36,`
      `),ui(37,"button",9),fp("click",function(){return r.clearAllFiltersAndSorts()}),BE(38,`
        `),ap(39,"span",10),BE(40,`
        `),ui(41,"span"),BE(42,"Clear all Filter & Sorts"),Tc(),BE(43,`
      `),Tc(),BE(44,`
      `),ui(45,"button",11),fp("click",function(){return r.setFiltersDynamically()}),BE(46,`
        Set Filters Dynamically
      `),Tc(),BE(47,`
      `),ui(48,"button",12),fp("click",function(){return r.setSortingDynamically()}),BE(49,`
        Set Sorting Dynamically
      `),Tc(),BE(50,`
      `),ui(51,"button",13),fp("click",function(){return r.groupByDuration()}),BE(52,`
        Group by Duration
      `),Tc(),BE(53,`

      `),ui(54,"label",14),BE(55,"Reset Dataset "),ui(56,"code"),BE(57,"onSort"),Tc(),BE(58,":"),Tc(),BE(59,`
      `),ui(60,"button",15),fp("click",function(){return r.onSortReset(true)}),BE(61,"ON"),Tc(),BE(62,`
      `),ui(63,"button",16),fp("click",function(){return r.onSortReset(false)}),BE(64,"OFF"),Tc(),BE(65,`
    `),Tc(),BE(66,`
  `),Tc(),BE(67,`

  `),zI(68,I,17,5),ui(69,"angular-slickgrid",17),fp("onAngularGridCreated",function(m){return r.angularGridReady(m.detail)})("onSort",function(){return r.handleOnSort()})("onScroll",function(m){return r.handleOnScroll(m.detail.args)})("onRowCountChanged",function(m){return r.handleOnRowCountChanged(m.detail.args)}),BE(70,`
  `),Tc(),BE(71,`
`),Tc(),BE(72,`
`)),a&2&&(Uy(68),QI(r.metrics?68:-1),Uy(),sp("columns",r.columns)("options",r.gridOptions)("dataset",r.dataset));},dependencies:[U1,Hp],encapsulation:2});}}return s})();export{V as Example40Component};