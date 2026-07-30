import {Z as Ze}from'./chunk-SWBuXIHG.js';import {X as XN,e as Tu,s,r as r$1,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,W as Wy,a as ap,R as RE}from'./main-MR3B775B.js';var v=500,F=(()=>{class h{constructor(){this.loadingClass="",this.hideSubTitle=false,this.isLargeDataset=false,this.hasNoExpandCollapseChanged=true,this.treeToggleItems=[];}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(v);}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",width:220,cssClass:"cell-title",filterable:true,sortable:true,exportWithFormatter:false,queryFieldSorter:"id",formatter:XN.tree,exportCustomFormatter:XN.treeExport},{id:"duration",name:"Duration",field:"duration",minWidth:90,filterable:true},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,maxWidth:200,exportWithFormatter:false,sortable:true,filterable:true,filter:{model:Tu.compoundSlider,operator:">="},formatter:XN.percentCompleteBarWithText,type:"number"},{id:"start",name:"Start",field:"start",minWidth:60,type:"dateIso",filterable:true,sortable:true,filter:{model:Tu.compoundDate},formatter:XN.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:60,type:"dateIso",filterable:true,sortable:true,filter:{model:Tu.compoundDate},formatter:XN.dateIso},{id:"effortDriven",name:"Effort Driven",width:80,minWidth:20,maxWidth:80,cssClass:"cell-effort-driven",field:"effortDriven",exportWithFormatter:false,formatter:XN.checkmarkMaterial,cannotTriggerInsert:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:true,enableAutoResize:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:true,sanitizeDataExport:true},externalResources:[new Ze],enableCellNavigation:true,enableFiltering:true,showCustomFooter:true,enableTreeData:true,treeDataOptions:{columnId:"title",toggleOnNodeTitle:true,parentPropName:"parentId",levelPropName:"treeLevel",indentMarginLeft:15,initiallyCollapsed:true,initialSort:{columnId:"title",direction:"ASC"},titleFormatter:(r,s,i,l,a)=>{let c="";return a.treeLevel>0&&(c='<span class="mdi mdi-subdirectory-arrow-right"></span>'),`${c}<span class="bold">${i}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${a.parentId})</span>`}},multiColumnSort:false,presets:{filters:[{columnId:"percentComplete",searchTerms:[25],operator:">="}]},headerRowHeight:45,rowHeight:40,filterTypingDebounce:250};}angularGridReady(r){this.angularGrid=r,this.gridObj=r.slickGrid,this.dataViewObj=r.dataView;}addNewRow(){let r=this.dataViewObj.getItemCount(),s=this.dataViewObj.getItemById(1);if(s?.__hasChildren){let i={id:r,parentId:s.id,title:`Task ${r}`,duration:"1 day",percentComplete:99,start:new Date,finish:new Date,effortDriven:false};this.angularGrid.gridService.addItem(i);}}updateFirstRow(){let r=this.angularGrid.dataView.getItemById(0);this.angularGrid.gridService.updateItem(s(r$1({},r),{duration:"11 days",percentComplete:77,start:new Date,finish:new Date,effortDriven:false}));}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(true);}collapseAllWithoutEvent(){this.angularGrid.treeDataService.toggleTreeDataCollapse(true,false);}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(false);}dynamicallyChangeFilter(){this.angularGrid.filterService.updateFilters([{columnId:"percentComplete",operator:"<",searchTerms:[40]}]);}hideSpinner(){setTimeout(()=>this.loadingClass="",200);}showSpinner(){this.isLargeDataset&&(this.loadingClass="mdi mdi-load mdi-spin-1s font-24px");}logHierarchicalStructure(){console.log("exploded array",this.angularGrid.treeDataService.datasetHierarchical);}logFlatStructure(){console.log("flat array",this.angularGrid.treeDataService.dataset);}loadData(r){this.isLargeDataset=r>5e3;let s=0,i=[],l=[];for(let a=0;a<r;a++){let c=2e3+Math.floor(Math.random()*10),f=Math.floor(Math.random()*11),b=Math.floor(Math.random()*29),m=l[a]={},_;(a===1||a===0)&&(s=0,i.pop()),a===3?s=1:a===2||a===4||Math.random()>.8&&a>0&&s<3&&a-1!==0&&a-1!==2?(s++,i.push(a-1)):Math.random()<.3&&s>0&&(s--,i.pop()),i.length>0?_=i[i.length-1]:_=null,m.id=a,m.parentId=_,m.title=`Task ${a}`,m.duration="5 days",m.percentComplete=Math.round(Math.random()*100),m.start=new Date(c,f,b),m.finish=new Date(c,f+1,b),m.effortDriven=a%5===0;}return this.dataset=l,l}handleOnTreeFullToggleEnd(r){console.log("Tree Data changes",r),this.hideSpinner();}handleOnTreeItemToggled(r){this.hasNoExpandCollapseChanged=false,this.treeToggleItems=r.toggledItems,console.log("Tree Data changes",r);}handleOnGridStateChanged(r){this.hasNoExpandCollapseChanged=false,r?.change?.type==="treeData"&&(console.log("Tree Data gridStateChange",r?.gridState?.treeData),this.treeToggleItems=r?.gridState?.treeData?.toggledItems);}logTreeDataToggledItems(){console.log(this.angularGrid.treeDataService.getToggledItems());}dynamicallyToggledFirstParent(){let r="parentId",s="treeLevel",l=this.dataset.find(c=>c[s]===1),a=this.angularGrid.dataView.getItemByIdx(l[r]);l&&a&&this.angularGrid.treeDataService.dynamicallyToggleItemState([{itemId:a.id,isCollapsed:!a.__collapsed}]);}reapplyToggledItems(){this.angularGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(s){return new(s||h)};}static{this.\u0275cmp=_I({type:h,selectors:[["ng-component"]],decls:175,vars:7,consts:[[1,"container-fluid"],[1,"mdi","mdi-file-tree","font-27px"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid","target","_blank"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example27.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row",2,"margin-bottom","4px"],[1,"col-md-12"],["data-test","add-500-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","add-75k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","change-filter-dynamically",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-filter-outline"],["data-test","collapse-all-noevent-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-collapse"],["data-test","reapply-toggled-items-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click","disabled"],[1,"icon","mdi","mdi-history"],[1,"mdi","mdi-arrow-collapse"],["data-test","dynamically-toggle-first-parent-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-history"],[1,"row"],["data-test","add-item-btn",1,"btn","btn-primary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-plus","color-white"],["data-test","update-item-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-pencil"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-expand"],[1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["title","console.log of the Flat dataset",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["title","console.log of the Hierarchical Tree dataset",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["gridId","grid27",3,"onGridStateChanged","onAngularGridCreated","onBeforeFilterChange","onFilterChanged","onBeforeFilterClear","onFilterCleared","onBeforeSortChange","onSortChanged","onTreeFullToggleStart","onTreeFullToggleEnd","onTreeItemToggled","columns","options","dataset"]],template:function(s,i){s&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 27: Tree Data
    `),ui(4,"small"),qE(5,`
      `),cp(6,"span",1),qE(7," (from a flat dataset with "),ui(8,"code"),qE(9,"parentId"),Tc(),qE(10,` references -
      `),ui(11,"a",2),qE(12,"Wiki"),Tc(),qE(13,")"),Tc(),qE(14,`
    `),ui(15,"span",3),qE(16,`
      `),ui(17,"a",4),qE(18,`
        `),cp(19,"span",5),qE(20,` code
      `),Tc(),qE(21,`
    `),Tc(),qE(22,`
    `),ui(23,"button",6),pp("click",function(){return i.toggleSubTitle()}),qE(24,`
      `),cp(25,"span",7),qE(26,`
    `),Tc(),qE(27,`
  `),Tc(),qE(28,`

  `),ui(29,"div",8),qE(30,`
    `),ui(31,"ul"),qE(32,`
      `),ui(33,"li"),qE(34,"It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property."),Tc(),qE(35,`
      `),ui(36,"ul"),qE(37,`
        `),ui(38,"li"),qE(39,`
          If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call
          "convertHierarchicalViewToParentChildArray()"
        `),Tc(),qE(40,`
        `),ui(41,"li"),qE(42,`
          You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the
          next Hierarchical Example
        `),Tc(),qE(43,`
      `),Tc(),qE(44,`
    `),Tc(),qE(45,`
  `),Tc(),qE(46,`

  `),ui(47,"div",9),qE(48,`
    `),ui(49,"div",10),qE(50,`
      `),ui(51,"button",11),pp("click",function(){return i.loadData(500)}),qE(52,"500 rows"),Tc(),qE(53,`
      `),ui(54,"button",12),pp("click",function(){return i.loadData(75e3)}),qE(55,"75k rows"),Tc(),qE(56,`
      `),ui(57,"button",13),pp("click",function(){return i.dynamicallyChangeFilter()}),qE(58,`
        `),cp(59,"span",14),qE(60,`
        `),ui(61,"span"),qE(62,"Dynamically Change Filter (% complete < 40)"),Tc(),qE(63,`
      `),Tc(),qE(64,`
      `),ui(65,"button",15),pp("click",function(){return i.collapseAllWithoutEvent()}),qE(66,`
        `),cp(67,"span",16),qE(68,`
        `),ui(69,"span"),qE(70,"Collapse All (without triggering event)"),Tc(),qE(71,`
      `),Tc(),qE(72,`
      `),ui(73,"button",17),pp("click",function(){return i.reapplyToggledItems()}),qE(74,`
        `),cp(75,"span",18),qE(76,`
        `),ui(77,"span"),qE(78,"Reapply Previous Toggled Items"),Tc(),qE(79,`
      `),Tc(),qE(80,`
      `),ui(81,"button",15),pp("click",function(){return i.collapseAllWithoutEvent()}),qE(82,`
        `),cp(83,"span",19),qE(84,`
        `),ui(85,"span"),qE(86,"Collapse All (without triggering event)"),Tc(),qE(87,`
      `),Tc(),qE(88,`
      `),ui(89,"button",20),pp("click",function(){return i.dynamicallyToggledFirstParent()}),qE(90,`
        `),ui(91,"span"),qE(92,"Dynamically Toggle First Parent"),Tc(),qE(93,`
      `),Tc(),qE(94,`
      `),ui(95,"button",17),pp("click",function(){return i.reapplyToggledItems()}),qE(96,`
        `),cp(97,"span",21),qE(98,`
        `),ui(99,"span"),qE(100,"Reapply Previous Toggled Items"),Tc(),qE(101,`
      `),Tc(),qE(102,`
      `),cp(103,"div"),qE(104,`
    `),Tc(),qE(105,`
  `),Tc(),qE(106,`

  `),ui(107,"div",22),qE(108,`
    `),ui(109,"div",10),qE(110,`
      `),ui(111,"button",23),pp("click",function(){return i.addNewRow()}),qE(112,`
        `),cp(113,"span",24),qE(114,`
        `),ui(115,"span"),qE(116,'Add New Item to "Task 1" group'),Tc(),qE(117,`
      `),Tc(),qE(118,`
      `),ui(119,"button",25),pp("click",function(){return i.updateFirstRow()}),qE(120,`
        `),cp(121,"span",26),qE(122,`
        `),ui(123,"span"),qE(124,"Update 1st Row Item"),Tc(),qE(125,`
      `),Tc(),qE(126,`
      `),ui(127,"button",27),pp("click",function(){return i.collapseAll()}),qE(128,`
        `),cp(129,"span",16),qE(130,`
        `),ui(131,"span"),qE(132,"Collapse All"),Tc(),qE(133,`
      `),Tc(),qE(134,`
      `),ui(135,"button",28),pp("click",function(){return i.expandAll()}),qE(136,`
        `),cp(137,"span",29),qE(138,`
        `),ui(139,"span"),qE(140,"Expand All"),Tc(),qE(141,`
      `),Tc(),qE(142,`
      `),ui(143,"button",30),pp("click",function(){return i.logTreeDataToggledItems()}),qE(144,`
        `),ui(145,"span"),qE(146,"Log Tree Toggled Items"),Tc(),qE(147,`
      `),Tc(),qE(148,`
      `),ui(149,"button",31),pp("click",function(){return i.logFlatStructure()}),qE(150,`
        `),ui(151,"span"),qE(152,"Log Flat Structure"),Tc(),qE(153,`
      `),Tc(),qE(154,`
      `),ui(155,"button",32),pp("click",function(){return i.logHierarchicalStructure()}),qE(156,`
        `),ui(157,"span"),qE(158,"Log Hierarchical Structure"),Tc(),qE(159,`
      `),Tc(),qE(160,`
      `),ui(161,"button",30),pp("click",function(){return i.dynamicallyChangeFilter()}),qE(162,`
        `),ui(163,"span"),qE(164,"Dynamically Change Filter (% complete < 40)"),Tc(),qE(165,`
      `),Tc(),qE(166,`
    `),Tc(),qE(167,`
  `),Tc(),qE(168,`

  `),cp(169,"br"),qE(170,`

  `),ui(171,"angular-slickgrid",33),pp("onGridStateChanged",function(a){return i.handleOnGridStateChanged(a.detail)})("onAngularGridCreated",function(a){return i.angularGridReady(a.detail)})("onBeforeFilterChange",function(){return i.showSpinner()})("onFilterChanged",function(){return i.hideSpinner()})("onBeforeFilterClear",function(){return i.showSpinner()})("onFilterCleared",function(){return i.hideSpinner()})("onBeforeSortChange",function(){return i.showSpinner()})("onSortChanged",function(){return i.hideSpinner()})("onTreeFullToggleStart",function(){return i.showSpinner()})("onTreeFullToggleEnd",function(a){return i.handleOnTreeFullToggleEnd(a.detail)})("onTreeItemToggled",function(a){return i.handleOnTreeItemToggled(a.detail)}),qE(172,`
  `),Tc(),qE(173,`
`),Tc(),qE(174,`
`)),s&2&&(Wy(73),ap("disabled",i.hasNoExpandCollapseChanged),Wy(22),ap("disabled",i.hasNoExpandCollapseChanged),Wy(8),RE(i.loadingClass),Wy(68),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1],styles:[`#grid27 .slick-cell{display:inline-flex;align-items:center;gap:4px}
`],encapsulation:2});}}return h})();export{F as Example27Component};