import{b as k}from"./chunk-BNUP54LE.js";import{Da as y,wa as g,za as p}from"./chunk-V3K67AAF.js";import{Ib as E,Jb as e,Oa as C,hb as x,ib as t,jb as n,kb as d,ub as o,za as u}from"./chunk-CCOLL5XZ.js";import{a as S,b as T}from"./chunk-PRARYYF3.js";var v=500,F=(()=>{class h{constructor(){this.loadingClass="",this.hideSubTitle=!1,this.isLargeDataset=!1,this.hasNoExpandCollapseChanged=!0,this.treeToggleItems=[]}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(v)}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",width:220,cssClass:"cell-title",filterable:!0,sortable:!0,exportWithFormatter:!1,queryFieldSorter:"id",formatter:p.tree,exportCustomFormatter:p.treeExport},{id:"duration",name:"Duration",field:"duration",minWidth:90,filterable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,maxWidth:200,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:g.compoundSlider,operator:">="},formatter:p.percentCompleteBarWithText,type:"number"},{id:"start",name:"Start",field:"start",minWidth:60,type:"dateIso",filterable:!0,sortable:!0,filter:{model:g.compoundDate},formatter:p.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:60,type:"dateIso",filterable:!0,sortable:!0,filter:{model:g.compoundDate},formatter:p.dateIso},{id:"effortDriven",name:"Effort Driven",width:80,minWidth:20,maxWidth:80,cssClass:"cell-effort-driven",field:"effortDriven",exportWithFormatter:!1,formatter:p.checkmarkMaterial,cannotTriggerInsert:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:g.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new k],enableFiltering:!0,showCustomFooter:!0,enableTreeData:!0,treeDataOptions:{columnId:"title",parentPropName:"parentId",levelPropName:"treeLevel",indentMarginLeft:15,initiallyCollapsed:!0,initialSort:{columnId:"title",direction:"ASC"},titleFormatter:(r,s,i,l,a)=>{let c="";return a.treeLevel>0&&(c='<span class="mdi mdi-subdirectory-arrow-right"></span>'),`${c}<span class="bold">${i}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${a.parentId})</span>`}},multiColumnSort:!1,presets:{filters:[{columnId:"percentComplete",searchTerms:[25],operator:">="}]},headerRowHeight:45,rowHeight:40,filterTypingDebounce:250}}angularGridReady(r){this.angularGrid=r,this.gridObj=r.slickGrid,this.dataViewObj=r.dataView}addNewRow(){let r=this.dataViewObj.getItemCount(),s=this.dataViewObj.getItemById(1);if(s?.__hasChildren){let i={id:r,parentId:s.id,title:`Task ${r}`,duration:"1 day",percentComplete:99,start:new Date,finish:new Date,effortDriven:!1};this.angularGrid.gridService.addItem(i)}}updateFirstRow(){let r=this.angularGrid.dataView.getItemById(0);this.angularGrid.gridService.updateItem(T(S({},r),{duration:"11 days",percentComplete:77,start:new Date,finish:new Date,effortDriven:!1}))}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}collapseAllWithoutEvent(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0,!1)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}dynamicallyChangeFilter(){this.angularGrid.filterService.updateFilters([{columnId:"percentComplete",operator:"<",searchTerms:[40]}])}hideSpinner(){setTimeout(()=>this.loadingClass="",200)}showSpinner(){this.isLargeDataset&&(this.loadingClass="mdi mdi-load mdi-spin-1s font-24px")}logHierarchicalStructure(){console.log("exploded array",this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log("flat array",this.angularGrid.treeDataService.dataset)}loadData(r){this.isLargeDataset=r>5e3;let s=0,i=[],l=[];for(let a=0;a<r;a++){let c=2e3+Math.floor(Math.random()*10),f=Math.floor(Math.random()*11),b=Math.floor(Math.random()*29),m=l[a]={},_;(a===1||a===0)&&(s=0,i.pop()),a===3?s=1:a===2||a===4||Math.random()>.8&&a>0&&s<3&&a-1!==0&&a-1!==2?(s++,i.push(a-1)):Math.random()<.3&&s>0&&(s--,i.pop()),i.length>0?_=i[i.length-1]:_=null,m.id=a,m.parentId=_,m.title=`Task ${a}`,m.duration="5 days",m.percentComplete=Math.round(Math.random()*100),m.start=new Date(c,f,b),m.finish=new Date(c,f+1,b),m.effortDriven=a%5===0}return this.dataset=l,l}handleOnTreeFullToggleEnd(r){console.log("Tree Data changes",r),this.hideSpinner()}handleOnTreeItemToggled(r){this.hasNoExpandCollapseChanged=!1,this.treeToggleItems=r.toggledItems,console.log("Tree Data changes",r)}handleOnGridStateChanged(r){this.hasNoExpandCollapseChanged=!1,r?.change?.type==="treeData"&&(console.log("Tree Data gridStateChange",r?.gridState?.treeData),this.treeToggleItems=r?.gridState?.treeData?.toggledItems)}logTreeDataToggledItems(){console.log(this.angularGrid.treeDataService.getToggledItems())}dynamicallyToggledFirstParent(){let r="parentId",s="treeLevel",l=this.dataset.find(c=>c[s]===1),a=this.angularGrid.dataView.getItemByIdx(l[r]);l&&a&&this.angularGrid.treeDataService.dynamicallyToggleItemState([{itemId:a.id,isCollapsed:!a.__collapsed}])}reapplyToggledItems(){this.angularGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(s){return new(s||h)}}static{this.\u0275cmp=C({type:h,selectors:[["ng-component"]],decls:175,vars:7,consts:[[1,"container-fluid"],[1,"mdi","mdi-file-tree","font-27px"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid","target","_blank"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example27.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row",2,"margin-bottom","4px"],[1,"col-md-12"],["data-test","add-500-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","add-75k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","change-filter-dynamically",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-filter-outline"],["data-test","collapse-all-noevent-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-collapse"],["data-test","reapply-toggled-items-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click","disabled"],[1,"icon","mdi","mdi-history"],[1,"mdi","mdi-arrow-collapse"],["data-test","dynamically-toggle-first-parent-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-history"],[1,"row"],["data-test","add-item-btn",1,"btn","btn-primary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-plus","color-white"],["data-test","update-item-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-pencil"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-expand"],[1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["title","console.log of the Flat dataset",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["title","console.log of the Hierarchical Tree dataset",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["gridId","grid27",3,"onGridStateChanged","onAngularGridCreated","onBeforeFilterChange","onFilterChanged","onBeforeFilterClear","onFilterCleared","onBeforeSortChange","onSortChanged","onTreeFullToggleStart","onTreeFullToggleEnd","onTreeItemToggled","columns","options","dataset"]],template:function(s,i){s&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 27: Tree Data
    `),t(4,"small"),e(5,`
      `),d(6,"span",1),e(7," (from a flat dataset with "),t(8,"code"),e(9,"parentId"),n(),e(10,` references -
      `),t(11,"a",2),e(12,"Wiki"),n(),e(13,")"),n(),e(14,`
    `),t(15,"span",3),e(16,`
      `),t(17,"a",4),e(18,`
        `),d(19,"span",5),e(20,` code
      `),n(),e(21,`
    `),n(),e(22,`
    `),t(23,"button",6),o("click",function(){return i.toggleSubTitle()}),e(24,`
      `),d(25,"span",7),e(26,`
    `),n(),e(27,`
  `),n(),e(28,`

  `),t(29,"div",8),e(30,`
    `),t(31,"ul"),e(32,`
      `),t(33,"li"),e(34,"It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property."),n(),e(35,`
      `),t(36,"ul"),e(37,`
        `),t(38,"li"),e(39,`
          If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call
          "convertHierarchicalViewToParentChildArray()"
        `),n(),e(40,`
        `),t(41,"li"),e(42,`
          You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the
          next Hierarchical Example
        `),n(),e(43,`
      `),n(),e(44,`
    `),n(),e(45,`
  `),n(),e(46,`

  `),t(47,"div",9),e(48,`
    `),t(49,"div",10),e(50,`
      `),t(51,"button",11),o("click",function(){return i.loadData(500)}),e(52,"500 rows"),n(),e(53,`
      `),t(54,"button",12),o("click",function(){return i.loadData(75e3)}),e(55,"75k rows"),n(),e(56,`
      `),t(57,"button",13),o("click",function(){return i.dynamicallyChangeFilter()}),e(58,`
        `),d(59,"span",14),e(60,`
        `),t(61,"span"),e(62,"Dynamically Change Filter (% complete < 40)"),n(),e(63,`
      `),n(),e(64,`
      `),t(65,"button",15),o("click",function(){return i.collapseAllWithoutEvent()}),e(66,`
        `),d(67,"span",16),e(68,`
        `),t(69,"span"),e(70,"Collapse All (without triggering event)"),n(),e(71,`
      `),n(),e(72,`
      `),t(73,"button",17),o("click",function(){return i.reapplyToggledItems()}),e(74,`
        `),d(75,"span",18),e(76,`
        `),t(77,"span"),e(78,"Reapply Previous Toggled Items"),n(),e(79,`
      `),n(),e(80,`
      `),t(81,"button",15),o("click",function(){return i.collapseAllWithoutEvent()}),e(82,`
        `),d(83,"span",19),e(84,`
        `),t(85,"span"),e(86,"Collapse All (without triggering event)"),n(),e(87,`
      `),n(),e(88,`
      `),t(89,"button",20),o("click",function(){return i.dynamicallyToggledFirstParent()}),e(90,`
        `),t(91,"span"),e(92,"Dynamically Toggle First Parent"),n(),e(93,`
      `),n(),e(94,`
      `),t(95,"button",17),o("click",function(){return i.reapplyToggledItems()}),e(96,`
        `),d(97,"span",21),e(98,`
        `),t(99,"span"),e(100,"Reapply Previous Toggled Items"),n(),e(101,`
      `),n(),e(102,`
      `),d(103,"div"),e(104,`
    `),n(),e(105,`
  `),n(),e(106,`

  `),t(107,"div",22),e(108,`
    `),t(109,"div",10),e(110,`
      `),t(111,"button",23),o("click",function(){return i.addNewRow()}),e(112,`
        `),d(113,"span",24),e(114,`
        `),t(115,"span"),e(116,'Add New Item to "Task 1" group'),n(),e(117,`
      `),n(),e(118,`
      `),t(119,"button",25),o("click",function(){return i.updateFirstRow()}),e(120,`
        `),d(121,"span",26),e(122,`
        `),t(123,"span"),e(124,"Update 1st Row Item"),n(),e(125,`
      `),n(),e(126,`
      `),t(127,"button",27),o("click",function(){return i.collapseAll()}),e(128,`
        `),d(129,"span",16),e(130,`
        `),t(131,"span"),e(132,"Collapse All"),n(),e(133,`
      `),n(),e(134,`
      `),t(135,"button",28),o("click",function(){return i.expandAll()}),e(136,`
        `),d(137,"span",29),e(138,`
        `),t(139,"span"),e(140,"Expand All"),n(),e(141,`
      `),n(),e(142,`
      `),t(143,"button",30),o("click",function(){return i.logTreeDataToggledItems()}),e(144,`
        `),t(145,"span"),e(146,"Log Tree Toggled Items"),n(),e(147,`
      `),n(),e(148,`
      `),t(149,"button",31),o("click",function(){return i.logFlatStructure()}),e(150,`
        `),t(151,"span"),e(152,"Log Flat Structure"),n(),e(153,`
      `),n(),e(154,`
      `),t(155,"button",32),o("click",function(){return i.logHierarchicalStructure()}),e(156,`
        `),t(157,"span"),e(158,"Log Hierarchical Structure"),n(),e(159,`
      `),n(),e(160,`
      `),t(161,"button",30),o("click",function(){return i.dynamicallyChangeFilter()}),e(162,`
        `),t(163,"span"),e(164,"Dynamically Change Filter (% complete < 40)"),n(),e(165,`
      `),n(),e(166,`
    `),n(),e(167,`
  `),n(),e(168,`

  `),d(169,"br"),e(170,`

  `),t(171,"angular-slickgrid",33),o("onGridStateChanged",function(a){return i.handleOnGridStateChanged(a.detail)})("onAngularGridCreated",function(a){return i.angularGridReady(a.detail)})("onBeforeFilterChange",function(){return i.showSpinner()})("onFilterChanged",function(){return i.hideSpinner()})("onBeforeFilterClear",function(){return i.showSpinner()})("onFilterCleared",function(){return i.hideSpinner()})("onBeforeSortChange",function(){return i.showSpinner()})("onSortChanged",function(){return i.hideSpinner()})("onTreeFullToggleStart",function(){return i.showSpinner()})("onTreeFullToggleEnd",function(a){return i.handleOnTreeFullToggleEnd(a.detail)})("onTreeItemToggled",function(a){return i.handleOnTreeItemToggled(a.detail)}),e(172,`
  `),n(),e(173,`
`),n(),e(174,`
`)),s&2&&(u(73),x("disabled",i.hasNoExpandCollapseChanged),u(22),x("disabled",i.hasNoExpandCollapseChanged),u(8),E(i.loadingClass),u(68),x("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset))},dependencies:[y],styles:[`#grid27 .slick-cell{display:inline-flex;align-items:center;gap:4px}
`],encapsulation:2})}}return h})();export{F as Example27Component};
