import {s as s$1}from'./chunk-B52EFzUa.js';import {Z as Ze}from'./chunk-Df9HDp2d.js';import {f as Tu,X as XN,a1 as PP,g as LB,a2 as te,b as bI,j as j1,H as Hp,u as ui,U as UE,c as cp,T as Tc,p as pp,Z as ZI,W as Wy,Y as YI,d as ap,h as aD,i as fE,N as Np,o as uD}from'./main-WTCLCICA.js';function I(s,F){if(s&1&&(UE(0,`
    `),ui(1,"div",18),UE(2,`
      `),ui(3,"b"),UE(4,"Metrics:"),Tc(),UE(5,`
      `),ui(6,"span"),UE(7,`
        `),ui(8,"span"),UE(9),aD(10,"date"),Tc(),UE(11,` \u2014
        `),ui(12,"span",19),UE(13),Tc(),UE(14,`
        items
      `),Tc(),UE(15,`
    `),Tc(),UE(16,`
  `)),s&2){let e=fE();Wy(9),Np(uD(10,2,e.metrics.endTime,"dd MMM, h:mm:ssa")),Wy(4),Np(e.metrics.totalItemCount);}}var u=50,V=(()=>{class s{constructor(){this.dataset=[],this.hideSubTitle=false,this.scrollEndCalled=false,this.shouldResetOnSort=false;}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(0,u),this.metrics={itemCount:u,totalItemCount:u};}angularGridReady(e){this.angularGrid=e;}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,minWidth:100,filterable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,minWidth:100,filterable:true,type:"number"},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:true,minWidth:100,filterable:true,type:"number"},{id:"start",name:"Start",field:"start",type:"date",outputType:"dateIso",formatter:XN.date,exportWithFormatter:true,params:{dateFormat:"MMM DD, YYYY"},sortable:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",type:"date",outputType:"dateIso",formatter:XN.date,exportWithFormatter:true,params:{dateFormat:"MMM DD, YYYY"},sortable:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true,minWidth:100,filterable:true,formatter:XN.checkmarkMaterial}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:true,enableFiltering:true,enableGrouping:true,editable:false,rowHeight:33,enableExcelExport:true,externalResources:[new Ze]};}handleOnScroll(e){let a=e.grid.getViewportNode();if(["mousewheel","scroll"].includes(e.triggeredBy||"")&&!this.scrollEndCalled&&a.scrollTop>0&&Math.ceil(a.offsetHeight+e.scrollTop)>=e.scrollHeight){console.log("onScroll end reached, add more items");let r=this.angularGrid.dataView?.getItemCount()||0,l=this.loadData(r,u);this.angularGrid.dataView?.addItems(l),this.scrollEndCalled=false;}}handleOnSort(){if(this.shouldResetOnSort){let e=this.loadData(0,u);this.angularGrid.slickGrid?.scrollTo(0),this.angularGrid.dataView?.setItems(e),this.angularGrid.dataView?.reSort();}}groupByDuration(){this.angularGrid?.dataView?.setGrouping({getter:"duration",formatter:e=>`Duration: ${e.value} <span class="text-green">(${e.count} items)</span>`,comparer:(e,a)=>LB.numeric(e.value,a.value,te.asc),aggregators:[new PP.Avg("percentComplete"),new PP.Sum("cost")],aggregateCollapsed:false,lazyTotalsCalculation:true}),this.angularGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:true}]),this.angularGrid?.slickGrid?.invalidate();}loadData(e,a){let r=[];for(let l=e;l<e+a;l++)r.push(this.newItem(l));return r}newItem(e){return {id:e,title:"Task "+e,duration:Math.round(Math.random()*100)+"",percentComplete:s$1(1,12),start:new Date(2020,s$1(1,11),s$1(1,28)),finish:new Date(2022,s$1(1,11),s$1(1,28)),effortDriven:e%5===0}}onSortReset(e){this.shouldResetOnSort=e;}clearAllFiltersAndSorts(){this.angularGrid?.gridService&&this.angularGrid.gridService.clearAllFiltersAndSorts();}setFiltersDynamically(){this.angularGrid?.filterService.updateFilters([{columnId:"start",searchTerms:["2020-08-25"],operator:"<="}]);}handleOnRowCountChanged(e){this.angularGrid&&e?.current>=0&&(this.angularGrid.dataView?.reSort(),this.metrics.itemCount=this.angularGrid.dataView?.getFilteredItemCount()||0,this.metrics.totalItemCount=e.itemCount||0);}setSortingDynamically(){this.angularGrid?.sortService.updateSorting([{columnId:"title",direction:"DESC"}]);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.angularGrid.resizerService.resizeGrid(2);}static{this.\u0275fac=function(a){return new(a||s)};}static{this.\u0275cmp=bI({type:s,selectors:[["ng-component"]],decls:73,vars:4,consts:[[1,"demo40"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example40.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row"],[1,"col-sm-12"],["data-test","clear-filters-sorting","title","Clear all Filters & Sorts",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-by-duration",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"ml-4"],["data-test","onsort-on",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","onsort-off",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid40",3,"onAngularGridCreated","onSort","onScroll","onRowCountChanged","columns","options","dataset"],[1,"mt-2",2,"margin","10px 0px"],["data-test","totalItemCount"]],template:function(a,r){a&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 40: Infinite Scroll from JSON data
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return r.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",6),UE(19,`
    `),ui(20,"ul"),UE(21,`
      `),ui(22,"li"),UE(23,`
        Infinite scrolling allows the grid to lazy-load rows from the server when reaching the scroll bottom (end) position. In its simplest
        form, the more the user scrolls down, the more rows get loaded.
      `),Tc(),UE(24,`
      `),ui(25,"li"),UE(26,`
        NOTES: `),ui(27,"code"),UE(28,"presets.pagination"),Tc(),UE(29,` is not supported with Infinite Scroll and will revert to the first page, simply because since
        we keep appending data, we always have to start from index zero (no offset).
      `),Tc(),UE(30,`
    `),Tc(),UE(31,`
  `),Tc(),UE(32,`

  `),ui(33,"div",7),UE(34,`
    `),ui(35,"div",8),UE(36,`
      `),ui(37,"button",9),pp("click",function(){return r.clearAllFiltersAndSorts()}),UE(38,`
        `),cp(39,"span",10),UE(40,`
        `),ui(41,"span"),UE(42,"Clear all Filter & Sorts"),Tc(),UE(43,`
      `),Tc(),UE(44,`
      `),ui(45,"button",11),pp("click",function(){return r.setFiltersDynamically()}),UE(46,`
        Set Filters Dynamically
      `),Tc(),UE(47,`
      `),ui(48,"button",12),pp("click",function(){return r.setSortingDynamically()}),UE(49,`
        Set Sorting Dynamically
      `),Tc(),UE(50,`
      `),ui(51,"button",13),pp("click",function(){return r.groupByDuration()}),UE(52,`
        Group by Duration
      `),Tc(),UE(53,`

      `),ui(54,"label",14),UE(55,"Reset Dataset "),ui(56,"code"),UE(57,"onSort"),Tc(),UE(58,":"),Tc(),UE(59,`
      `),ui(60,"button",15),pp("click",function(){return r.onSortReset(true)}),UE(61,"ON"),Tc(),UE(62,`
      `),ui(63,"button",16),pp("click",function(){return r.onSortReset(false)}),UE(64,"OFF"),Tc(),UE(65,`
    `),Tc(),UE(66,`
  `),Tc(),UE(67,`

  `),ZI(68,I,17,5),ui(69,"angular-slickgrid",17),pp("onAngularGridCreated",function(m){return r.angularGridReady(m.detail)})("onSort",function(){return r.handleOnSort()})("onScroll",function(m){return r.handleOnScroll(m.detail.args)})("onRowCountChanged",function(m){return r.handleOnRowCountChanged(m.detail.args)}),UE(70,`
  `),Tc(),UE(71,`
`),Tc(),UE(72,`
`)),a&2&&(Wy(68),YI(r.metrics?68:-1),Wy(),ap("columns",r.columns)("options",r.gridOptions)("dataset",r.dataset));},dependencies:[j1,Hp],encapsulation:2});}}return s})();export{V as Example40Component};