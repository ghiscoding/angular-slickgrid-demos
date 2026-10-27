import{n as s,t as r}from"./chunk-DarCEgGK.js";import{In as lD,V as JI,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{t as Qe}from"./chunk-D0qctKwX.js";var v=500;var F=(()=>{class h{constructor(){this.loadingClass=``,this.hideSubTitle=!1,this.isLargeDataset=!1,this.hasNoExpandCollapseChanged=!0,this.treeToggleItems=[]}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(v)}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,width:220,cssClass:`cell-title`,filterable:!0,sortable:!0,exportWithFormatter:!1,queryFieldSorter:`id`,formatter:sI.tree,exportCustomFormatter:sI.treeExport},{id:`duration`,name:`Duration`,field:`duration`,minWidth:90,filterable:!0},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,minWidth:120,maxWidth:200,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:uu.compoundSlider,operator:`>=`},formatter:sI.percentCompleteBarWithText,type:`number`},{id:`start`,name:`Start`,field:`start`,minWidth:60,type:`dateIso`,filterable:!0,sortable:!0,filter:{model:uu.compoundDate},formatter:sI.dateIso},{id:`finish`,name:`Finish`,field:`finish`,minWidth:60,type:`dateIso`,filterable:!0,sortable:!0,filter:{model:uu.compoundDate},formatter:sI.dateIso},{id:`effortDriven`,name:`Effort Driven`,width:80,minWidth:20,maxWidth:80,cssClass:`cell-effort-driven`,field:`effortDriven`,exportWithFormatter:!1,formatter:sI.checkmarkMaterial,cannotTriggerInsert:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new Qe],enableCellNavigation:!0,enableFiltering:!0,showCustomFooter:!0,enableTreeData:!0,treeDataOptions:{columnId:`title`,toggleOnNodeTitle:!0,parentPropName:`parentId`,levelPropName:`treeLevel`,indentMarginLeft:15,initiallyCollapsed:!0,initialSort:{columnId:`title`,direction:`ASC`},titleFormatter:(a,s,i,l,r)=>{let c=``;return r.treeLevel>0&&(c=`<span class="mdi mdi-subdirectory-arrow-right"></span>`),`${c}<span class="bold">${i}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${r.parentId})</span>`}},multiColumnSort:!1,presets:{filters:[{columnId:`percentComplete`,searchTerms:[25],operator:`>=`}]},headerRowHeight:45,rowHeight:40,filterTypingDebounce:250}}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView}addNewRow(){let a=this.dataViewObj.getItemCount(),s=this.dataViewObj.getItemById(1);if(s?.__hasChildren){let i={id:a,parentId:s.id,title:`Task ${a}`,duration:`1 day`,percentComplete:99,start:new Date,finish:new Date,effortDriven:!1};this.angularGrid.gridService.addItem(i)}}updateFirstRow(){let a=this.angularGrid.dataView.getItemById(0);this.angularGrid.gridService.updateItem(s(r({},a),{duration:`11 days`,percentComplete:77,start:new Date,finish:new Date,effortDriven:!1}))}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}collapseAllWithoutEvent(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0,!1)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}dynamicallyChangeFilter(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`<`,searchTerms:[40]}])}hideSpinner(){setTimeout(()=>this.loadingClass=``,200)}showSpinner(){this.isLargeDataset&&(this.loadingClass=`mdi mdi-load mdi-spin-1s font-24px`)}logHierarchicalStructure(){console.log(`exploded array`,this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log(`flat array`,this.angularGrid.treeDataService.dataset)}loadData(a){this.isLargeDataset=a>5e3;let s=0,i=[],l=[];for(let r=0;r<a;r++){let c=2e3+Math.floor(Math.random()*10),_=Math.floor(Math.random()*11),f=Math.floor(Math.random()*29),m=l[r]={},b;(r===1||r===0)&&(s=0,i.pop()),r===3?s=1:r===2||r===4||Math.random()>.8&&r>0&&s<3&&r-1!==0&&r-1!==2?(s++,i.push(r-1)):Math.random()<.3&&s>0&&(s--,i.pop()),i.length>0?b=i[i.length-1]:b=null,m.id=r,m.parentId=b,m.title=`Task ${r}`,m.duration=`5 days`,m.percentComplete=Math.round(Math.random()*100),m.start=new Date(c,_,f),m.finish=new Date(c,_+1,f),m.effortDriven=r%5===0}return this.dataset=l,l}handleOnTreeFullToggleEnd(a){console.log(`Tree Data changes`,a),this.hideSpinner()}handleOnTreeItemToggled(a){queueMicrotask(()=>{this.hasNoExpandCollapseChanged=!1,this.treeToggleItems=a.toggledItems}),console.log(`Tree Data changes`,a)}handleOnGridStateChanged(a){queueMicrotask(()=>{this.hasNoExpandCollapseChanged=!1,a?.change?.type===`treeData`&&(console.log(`Tree Data gridStateChange`,a?.gridState?.treeData),this.treeToggleItems=a?.gridState?.treeData?.toggledItems)})}logTreeDataToggledItems(){console.log(this.angularGrid.treeDataService.getToggledItems())}dynamicallyToggledFirstParent(){let a=`parentId`,s=`treeLevel`,l=this.dataset.find(c=>c[s]===1),r=this.angularGrid.dataView.getItemByIdx(l[a]);l&&r&&this.angularGrid.treeDataService.dynamicallyToggleItemState([{itemId:r.id,isCollapsed:!r.__collapsed}])}reapplyToggledItems(){this.angularGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}setMaxVisibleDepthFromInput(){let a=document.getElementById(`maxVisibleDepthInput`);if(!a)return;let s=parseInt(a.value,10),i=Number.isFinite(s)?s:void 0;this.angularGrid.treeDataService.setMaxVisibleDepth(i)}clearMaxVisibleDepth(){let a=document.getElementById(`maxVisibleDepthInput`);a&&(a.value=``),this.angularGrid.treeDataService.clearMaxVisibleDepth()}static{this.ɵfac=function(s){return new(s||h)}}static{this.ɵcmp=WE({type:h,selectors:[[`ng-component`]],decls:196,vars:7,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example27.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`4px`],[1,`col-md-12`],[`data-test`,`add-500-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-75k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-250k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`change-filter-dynamically`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`collapse-all-noevent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`reapply-toggled-items-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`,`disabled`],[1,`icon`,`mdi`,`mdi-history`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`dynamically-toggle-first-parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-history`],[1,`row`],[`data-test`,`add-item-btn`,1,`btn`,`btn-primary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-plus`,`color-white`],[`data-test`,`update-item-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-pencil`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Flat dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Hierarchical Tree dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`d-inline-block`,`ms-2`,`mt-2`],[1,`input-group`,`input-group-sm`,`mb-0`],[`id`,`maxVisibleDepthInput`,`type`,`number`,`placeholder`,`Max Visible Depth (e.g. 1)`,`aria-label`,`Max Visible Depth`,1,`form-control`],[`data-test`,`set-max-visible-depth-btn`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`aria-hidden`,`true`,1,`mdi`,`mdi-check`],[`data-test`,`clear-max-visible-depth-btn`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`aria-hidden`,`true`,1,`mdi`,`mdi-close`],[`gridId`,`grid27`,3,`onGridStateChanged`,`onAngularGridCreated`,`onBeforeFilterChange`,`onFilterChanged`,`onBeforeFilterClear`,`onFilterCleared`,`onBeforeSortChange`,`onSortChanged`,`onTreeFullToggleStart`,`onTreeFullToggleEnd`,`onTreeItemToggled`,`columns`,`options`,`dataset`]],template:function(s,i){s&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 27: Tree Data
    `),vi(4,`small`),lD(5,`
      `),_p(6,`span`,1),lD(7,` (from a flat dataset with `),vi(8,`code`),lD(9,`parentId`),Rc(),lD(10,` references -
      `),vi(11,`a`,2),lD(12,`Wiki`),Rc(),lD(13,`)`),Rc(),lD(14,`
    `),vi(15,`span`,3),lD(16,`
      `),vi(17,`a`,4),lD(18,`
        `),_p(19,`span`,5),lD(20,` code
      `),Rc(),lD(21,`
    `),Rc(),lD(22,`
    `),vi(23,`button`,6),Ap(`click`,function(){return i.toggleSubTitle()}),lD(24,`
      `),_p(25,`span`,7),lD(26,`
    `),Rc(),lD(27,`
  `),Rc(),lD(28,`

  `),vi(29,`div`,8),lD(30,`
    `),vi(31,`ul`),lD(32,`
      `),vi(33,`li`),lD(34,`It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.`),Rc(),lD(35,`
      `),vi(36,`ul`),lD(37,`
        `),vi(38,`li`),lD(39,`
          If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call
          "convertHierarchicalViewToParentChildArray()"
        `),Rc(),lD(40,`
        `),vi(41,`li`),lD(42,`
          You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the
          next Hierarchical Example
        `),Rc(),lD(43,`
      `),Rc(),lD(44,`
    `),Rc(),lD(45,`
  `),Rc(),lD(46,`

  `),vi(47,`div`,9),lD(48,`
    `),vi(49,`div`,10),lD(50,`
      `),vi(51,`button`,11),Ap(`click`,function(){return i.loadData(500)}),lD(52,`500 rows`),Rc(),lD(53,`
      `),vi(54,`button`,12),Ap(`click`,function(){return i.loadData(75e3)}),lD(55,`75k rows`),Rc(),lD(56,`
      `),vi(57,`button`,13),Ap(`click`,function(){return i.loadData(25e4)}),lD(58,`250k rows`),Rc(),lD(59,`
      `),vi(60,`button`,14),Ap(`click`,function(){return i.dynamicallyChangeFilter()}),lD(61,`
        `),_p(62,`span`,15),lD(63,`
        `),vi(64,`span`),lD(65,`Dynamically Change Filter (% complete < 40)`),Rc(),lD(66,`
      `),Rc(),lD(67,`
      `),vi(68,`button`,16),Ap(`click`,function(){return i.collapseAllWithoutEvent()}),lD(69,`
        `),_p(70,`span`,17),lD(71,`
        `),vi(72,`span`),lD(73,`Collapse All (without triggering event)`),Rc(),lD(74,`
      `),Rc(),lD(75,`
      `),vi(76,`button`,18),Ap(`click`,function(){return i.reapplyToggledItems()}),lD(77,`
        `),_p(78,`span`,19),lD(79,`
        `),vi(80,`span`),lD(81,`Reapply Previous Toggled Items`),Rc(),lD(82,`
      `),Rc(),lD(83,`
      `),vi(84,`button`,16),Ap(`click`,function(){return i.collapseAllWithoutEvent()}),lD(85,`
        `),_p(86,`span`,20),lD(87,`
        `),vi(88,`span`),lD(89,`Collapse All (without triggering event)`),Rc(),lD(90,`
      `),Rc(),lD(91,`
      `),vi(92,`button`,21),Ap(`click`,function(){return i.dynamicallyToggledFirstParent()}),lD(93,`
        `),vi(94,`span`),lD(95,`Dynamically Toggle First Parent`),Rc(),lD(96,`
      `),Rc(),lD(97,`
      `),vi(98,`button`,18),Ap(`click`,function(){return i.reapplyToggledItems()}),lD(99,`
        `),_p(100,`span`,22),lD(101,`
        `),vi(102,`span`),lD(103,`Reapply Previous Toggled Items`),Rc(),lD(104,`
      `),Rc(),lD(105,`
      `),_p(106,`div`),lD(107,`
    `),Rc(),lD(108,`
  `),Rc(),lD(109,`

  `),vi(110,`div`,23),lD(111,`
    `),vi(112,`div`,10),lD(113,`
      `),vi(114,`button`,24),Ap(`click`,function(){return i.addNewRow()}),lD(115,`
        `),_p(116,`span`,25),lD(117,`
        `),vi(118,`span`),lD(119,`Add New Item to "Task 1" group`),Rc(),lD(120,`
      `),Rc(),lD(121,`
      `),vi(122,`button`,26),Ap(`click`,function(){return i.updateFirstRow()}),lD(123,`
        `),_p(124,`span`,27),lD(125,`
        `),vi(126,`span`),lD(127,`Update 1st Row Item`),Rc(),lD(128,`
      `),Rc(),lD(129,`
      `),vi(130,`button`,28),Ap(`click`,function(){return i.collapseAll()}),lD(131,`
        `),_p(132,`span`,17),lD(133,`
        `),vi(134,`span`),lD(135,`Collapse All`),Rc(),lD(136,`
      `),Rc(),lD(137,`
      `),vi(138,`button`,29),Ap(`click`,function(){return i.expandAll()}),lD(139,`
        `),_p(140,`span`,30),lD(141,`
        `),vi(142,`span`),lD(143,`Expand All`),Rc(),lD(144,`
      `),Rc(),lD(145,`
      `),vi(146,`button`,31),Ap(`click`,function(){return i.logTreeDataToggledItems()}),lD(147,`
        `),vi(148,`span`),lD(149,`Log Tree Toggled Items`),Rc(),lD(150,`
      `),Rc(),lD(151,`
      `),vi(152,`button`,32),Ap(`click`,function(){return i.logFlatStructure()}),lD(153,`
        `),vi(154,`span`),lD(155,`Log Flat Structure`),Rc(),lD(156,`
      `),Rc(),lD(157,`
      `),vi(158,`button`,33),Ap(`click`,function(){return i.logHierarchicalStructure()}),lD(159,`
        `),vi(160,`span`),lD(161,`Log Hierarchical Structure`),Rc(),lD(162,`
      `),Rc(),lD(163,`
      `),vi(164,`button`,31),Ap(`click`,function(){return i.dynamicallyChangeFilter()}),lD(165,`
        `),vi(166,`span`),lD(167,`Dynamically Change Filter (% complete < 40)`),Rc(),lD(168,`
      `),Rc(),lD(169,`
    `),Rc(),lD(170,`
    `),vi(171,`div`,34),lD(172,`
      `),vi(173,`div`,35),lD(174,`
        `),_p(175,`input`,36),lD(176,`
        `),vi(177,`button`,37),Ap(`click`,function(){return i.setMaxVisibleDepthFromInput()}),lD(178,`
          `),_p(179,`span`,38),lD(180,`
          Set
        `),Rc(),lD(181,`
        `),vi(182,`button`,39),Ap(`click`,function(){return i.clearMaxVisibleDepth()}),lD(183,`
          `),_p(184,`span`,40),lD(185,`
          Clear
        `),Rc(),lD(186,`
      `),Rc(),lD(187,`
    `),Rc(),lD(188,`
  `),Rc(),lD(189,`

  `),_p(190,`br`),lD(191,`

  `),vi(192,`angular-slickgrid`,41),Ap(`onGridStateChanged`,function(r){return i.handleOnGridStateChanged(r.detail)})(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)})(`onBeforeFilterChange`,function(){return i.showSpinner()})(`onFilterChanged`,function(){return i.hideSpinner()})(`onBeforeFilterClear`,function(){return i.showSpinner()})(`onFilterCleared`,function(){return i.hideSpinner()})(`onBeforeSortChange`,function(){return i.showSpinner()})(`onSortChanged`,function(){return i.hideSpinner()})(`onTreeFullToggleStart`,function(){return i.showSpinner()})(`onTreeFullToggleEnd`,function(r){return i.handleOnTreeFullToggleEnd(r.detail)})(`onTreeItemToggled`,function(r){return i.handleOnTreeItemToggled(r.detail)}),lD(193,`
  `),Rc(),lD(194,`
`),Rc(),lD(195,`
`)),s&2&&(dv(76),bp(`disabled`,i.hasNoExpandCollapseChanged),dv(22),bp(`disabled`,i.hasNoExpandCollapseChanged),dv(8),JI(i.loadingClass),dv(86),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[D1],styles:[`#grid27 .slick-cell{display:inline-flex;align-items:center;gap:4px}#maxVisibleDepthInput{height:22px;width:100%;max-width:150px}
`],encapsulation:2})}}return h})();export{F as Example27Component};