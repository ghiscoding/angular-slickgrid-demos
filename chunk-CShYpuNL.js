import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Er as zE,Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,x as Iu}from"./chunk-C7G4ZLh2.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";var v=500;var F=(()=>{class h{constructor(){this.loadingClass=``,this.hideSubTitle=!1,this.isLargeDataset=!1,this.hasNoExpandCollapseChanged=!0,this.treeToggleItems=[]}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(v)}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,width:220,cssClass:`cell-title`,filterable:!0,sortable:!0,exportWithFormatter:!1,queryFieldSorter:`id`,formatter:JN.tree,exportCustomFormatter:JN.treeExport},{id:`duration`,name:`Duration`,field:`duration`,minWidth:90,filterable:!0},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,minWidth:120,maxWidth:200,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:Iu.compoundSlider,operator:`>=`},formatter:JN.percentCompleteBarWithText,type:`number`},{id:`start`,name:`Start`,field:`start`,minWidth:60,type:`dateIso`,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate},formatter:JN.dateIso},{id:`finish`,name:`Finish`,field:`finish`,minWidth:60,type:`dateIso`,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate},formatter:JN.dateIso},{id:`effortDriven`,name:`Effort Driven`,width:80,minWidth:20,maxWidth:80,cssClass:`cell-effort-driven`,field:`effortDriven`,exportWithFormatter:!1,formatter:JN.checkmarkMaterial,cannotTriggerInsert:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:Iu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new Ze],enableCellNavigation:!0,enableFiltering:!0,showCustomFooter:!0,enableTreeData:!0,treeDataOptions:{columnId:`title`,toggleOnNodeTitle:!0,parentPropName:`parentId`,levelPropName:`treeLevel`,indentMarginLeft:15,initiallyCollapsed:!0,initialSort:{columnId:`title`,direction:`ASC`},titleFormatter:(a,s,i,l,r)=>{let c=``;return r.treeLevel>0&&(c=`<span class="mdi mdi-subdirectory-arrow-right"></span>`),`${c}<span class="bold">${i}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${r.parentId})</span>`}},multiColumnSort:!1,presets:{filters:[{columnId:`percentComplete`,searchTerms:[25],operator:`>=`}]},headerRowHeight:45,rowHeight:40,filterTypingDebounce:250}}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView}addNewRow(){let a=this.dataViewObj.getItemCount(),s=this.dataViewObj.getItemById(1);if(s?.__hasChildren){let i={id:a,parentId:s.id,title:`Task ${a}`,duration:`1 day`,percentComplete:99,start:new Date,finish:new Date,effortDriven:!1};this.angularGrid.gridService.addItem(i)}}updateFirstRow(){let a=this.angularGrid.dataView.getItemById(0);this.angularGrid.gridService.updateItem(s(r({},a),{duration:`11 days`,percentComplete:77,start:new Date,finish:new Date,effortDriven:!1}))}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}collapseAllWithoutEvent(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0,!1)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}dynamicallyChangeFilter(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`<`,searchTerms:[40]}])}hideSpinner(){setTimeout(()=>this.loadingClass=``,200)}showSpinner(){this.isLargeDataset&&(this.loadingClass=`mdi mdi-load mdi-spin-1s font-24px`)}logHierarchicalStructure(){console.log(`exploded array`,this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log(`flat array`,this.angularGrid.treeDataService.dataset)}loadData(a){this.isLargeDataset=a>5e3;let s=0,i=[],l=[];for(let r=0;r<a;r++){let c=2e3+Math.floor(Math.random()*10),_=Math.floor(Math.random()*11),f=Math.floor(Math.random()*29),m=l[r]={},b;(r===1||r===0)&&(s=0,i.pop()),r===3?s=1:r===2||r===4||Math.random()>.8&&r>0&&s<3&&r-1!==0&&r-1!==2?(s++,i.push(r-1)):Math.random()<.3&&s>0&&(s--,i.pop()),i.length>0?b=i[i.length-1]:b=null,m.id=r,m.parentId=b,m.title=`Task ${r}`,m.duration=`5 days`,m.percentComplete=Math.round(Math.random()*100),m.start=new Date(c,_,f),m.finish=new Date(c,_+1,f),m.effortDriven=r%5===0}return this.dataset=l,l}handleOnTreeFullToggleEnd(a){console.log(`Tree Data changes`,a),this.hideSpinner()}handleOnTreeItemToggled(a){queueMicrotask(()=>{this.hasNoExpandCollapseChanged=!1,this.treeToggleItems=a.toggledItems}),console.log(`Tree Data changes`,a)}handleOnGridStateChanged(a){queueMicrotask(()=>{this.hasNoExpandCollapseChanged=!1,a?.change?.type===`treeData`&&(console.log(`Tree Data gridStateChange`,a?.gridState?.treeData),this.treeToggleItems=a?.gridState?.treeData?.toggledItems)})}logTreeDataToggledItems(){console.log(this.angularGrid.treeDataService.getToggledItems())}dynamicallyToggledFirstParent(){let a=`parentId`,s=`treeLevel`,l=this.dataset.find(c=>c[s]===1),r=this.angularGrid.dataView.getItemByIdx(l[a]);l&&r&&this.angularGrid.treeDataService.dynamicallyToggleItemState([{itemId:r.id,isCollapsed:!r.__collapsed}])}reapplyToggledItems(){this.angularGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}setMaxVisibleDepthFromInput(){let a=document.getElementById(`maxVisibleDepthInput`);if(!a)return;let s=parseInt(a.value,10),i=Number.isFinite(s)?s:void 0;this.angularGrid.treeDataService.setMaxVisibleDepth(i)}clearMaxVisibleDepth(){let a=document.getElementById(`maxVisibleDepthInput`);a&&(a.value=``),this.angularGrid.treeDataService.clearMaxVisibleDepth()}static{this.ɵfac=function(s){return new(s||h)}}static{this.ɵcmp=BI({type:h,selectors:[[`ng-component`]],decls:196,vars:7,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example27.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`4px`],[1,`col-md-12`],[`data-test`,`add-500-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-75k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-250k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`change-filter-dynamically`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`collapse-all-noevent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`reapply-toggled-items-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`,`disabled`],[1,`icon`,`mdi`,`mdi-history`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`dynamically-toggle-first-parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-history`],[1,`row`],[`data-test`,`add-item-btn`,1,`btn`,`btn-primary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-plus`,`color-white`],[`data-test`,`update-item-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-pencil`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Flat dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Hierarchical Tree dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`d-inline-block`,`ms-2`,`mt-2`],[1,`input-group`,`input-group-sm`,`mb-0`],[`id`,`maxVisibleDepthInput`,`type`,`number`,`placeholder`,`Max Visible Depth (e.g. 1)`,`aria-label`,`Max Visible Depth`,1,`form-control`],[`data-test`,`set-max-visible-depth-btn`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`aria-hidden`,`true`,1,`mdi`,`mdi-check`],[`data-test`,`clear-max-visible-depth-btn`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`aria-hidden`,`true`,1,`mdi`,`mdi-close`],[`gridId`,`grid27`,3,`onGridStateChanged`,`onAngularGridCreated`,`onBeforeFilterChange`,`onFilterChanged`,`onBeforeFilterClear`,`onFilterCleared`,`onBeforeSortChange`,`onSortChanged`,`onTreeFullToggleStart`,`onTreeFullToggleEnd`,`onTreeItemToggled`,`columns`,`options`,`dataset`]],template:function(s,i){s&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 27: Tree Data
    `),gi(4,`small`),oD(5,`
      `),mp(6,`span`,1),oD(7,` (from a flat dataset with `),gi(8,`code`),oD(9,`parentId`),xc(),oD(10,` references -
      `),gi(11,`a`,2),oD(12,`Wiki`),xc(),oD(13,`)`),xc(),oD(14,`
    `),gi(15,`span`,3),oD(16,`
      `),gi(17,`a`,4),oD(18,`
        `),mp(19,`span`,5),oD(20,` code
      `),xc(),oD(21,`
    `),xc(),oD(22,`
    `),gi(23,`button`,6),Dp(`click`,function(){return i.toggleSubTitle()}),oD(24,`
      `),mp(25,`span`,7),oD(26,`
    `),xc(),oD(27,`
  `),xc(),oD(28,`

  `),gi(29,`div`,8),oD(30,`
    `),gi(31,`ul`),oD(32,`
      `),gi(33,`li`),oD(34,`It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.`),xc(),oD(35,`
      `),gi(36,`ul`),oD(37,`
        `),gi(38,`li`),oD(39,`
          If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call
          "convertHierarchicalViewToParentChildArray()"
        `),xc(),oD(40,`
        `),gi(41,`li`),oD(42,`
          You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the
          next Hierarchical Example
        `),xc(),oD(43,`
      `),xc(),oD(44,`
    `),xc(),oD(45,`
  `),xc(),oD(46,`

  `),gi(47,`div`,9),oD(48,`
    `),gi(49,`div`,10),oD(50,`
      `),gi(51,`button`,11),Dp(`click`,function(){return i.loadData(500)}),oD(52,`500 rows`),xc(),oD(53,`
      `),gi(54,`button`,12),Dp(`click`,function(){return i.loadData(75e3)}),oD(55,`75k rows`),xc(),oD(56,`
      `),gi(57,`button`,13),Dp(`click`,function(){return i.loadData(25e4)}),oD(58,`250k rows`),xc(),oD(59,`
      `),gi(60,`button`,14),Dp(`click`,function(){return i.dynamicallyChangeFilter()}),oD(61,`
        `),mp(62,`span`,15),oD(63,`
        `),gi(64,`span`),oD(65,`Dynamically Change Filter (% complete < 40)`),xc(),oD(66,`
      `),xc(),oD(67,`
      `),gi(68,`button`,16),Dp(`click`,function(){return i.collapseAllWithoutEvent()}),oD(69,`
        `),mp(70,`span`,17),oD(71,`
        `),gi(72,`span`),oD(73,`Collapse All (without triggering event)`),xc(),oD(74,`
      `),xc(),oD(75,`
      `),gi(76,`button`,18),Dp(`click`,function(){return i.reapplyToggledItems()}),oD(77,`
        `),mp(78,`span`,19),oD(79,`
        `),gi(80,`span`),oD(81,`Reapply Previous Toggled Items`),xc(),oD(82,`
      `),xc(),oD(83,`
      `),gi(84,`button`,16),Dp(`click`,function(){return i.collapseAllWithoutEvent()}),oD(85,`
        `),mp(86,`span`,20),oD(87,`
        `),gi(88,`span`),oD(89,`Collapse All (without triggering event)`),xc(),oD(90,`
      `),xc(),oD(91,`
      `),gi(92,`button`,21),Dp(`click`,function(){return i.dynamicallyToggledFirstParent()}),oD(93,`
        `),gi(94,`span`),oD(95,`Dynamically Toggle First Parent`),xc(),oD(96,`
      `),xc(),oD(97,`
      `),gi(98,`button`,18),Dp(`click`,function(){return i.reapplyToggledItems()}),oD(99,`
        `),mp(100,`span`,22),oD(101,`
        `),gi(102,`span`),oD(103,`Reapply Previous Toggled Items`),xc(),oD(104,`
      `),xc(),oD(105,`
      `),mp(106,`div`),oD(107,`
    `),xc(),oD(108,`
  `),xc(),oD(109,`

  `),gi(110,`div`,23),oD(111,`
    `),gi(112,`div`,10),oD(113,`
      `),gi(114,`button`,24),Dp(`click`,function(){return i.addNewRow()}),oD(115,`
        `),mp(116,`span`,25),oD(117,`
        `),gi(118,`span`),oD(119,`Add New Item to "Task 1" group`),xc(),oD(120,`
      `),xc(),oD(121,`
      `),gi(122,`button`,26),Dp(`click`,function(){return i.updateFirstRow()}),oD(123,`
        `),mp(124,`span`,27),oD(125,`
        `),gi(126,`span`),oD(127,`Update 1st Row Item`),xc(),oD(128,`
      `),xc(),oD(129,`
      `),gi(130,`button`,28),Dp(`click`,function(){return i.collapseAll()}),oD(131,`
        `),mp(132,`span`,17),oD(133,`
        `),gi(134,`span`),oD(135,`Collapse All`),xc(),oD(136,`
      `),xc(),oD(137,`
      `),gi(138,`button`,29),Dp(`click`,function(){return i.expandAll()}),oD(139,`
        `),mp(140,`span`,30),oD(141,`
        `),gi(142,`span`),oD(143,`Expand All`),xc(),oD(144,`
      `),xc(),oD(145,`
      `),gi(146,`button`,31),Dp(`click`,function(){return i.logTreeDataToggledItems()}),oD(147,`
        `),gi(148,`span`),oD(149,`Log Tree Toggled Items`),xc(),oD(150,`
      `),xc(),oD(151,`
      `),gi(152,`button`,32),Dp(`click`,function(){return i.logFlatStructure()}),oD(153,`
        `),gi(154,`span`),oD(155,`Log Flat Structure`),xc(),oD(156,`
      `),xc(),oD(157,`
      `),gi(158,`button`,33),Dp(`click`,function(){return i.logHierarchicalStructure()}),oD(159,`
        `),gi(160,`span`),oD(161,`Log Hierarchical Structure`),xc(),oD(162,`
      `),xc(),oD(163,`
      `),gi(164,`button`,31),Dp(`click`,function(){return i.dynamicallyChangeFilter()}),oD(165,`
        `),gi(166,`span`),oD(167,`Dynamically Change Filter (% complete < 40)`),xc(),oD(168,`
      `),xc(),oD(169,`
    `),xc(),oD(170,`
    `),gi(171,`div`,34),oD(172,`
      `),gi(173,`div`,35),oD(174,`
        `),mp(175,`input`,36),oD(176,`
        `),gi(177,`button`,37),Dp(`click`,function(){return i.setMaxVisibleDepthFromInput()}),oD(178,`
          `),mp(179,`span`,38),oD(180,`
          Set
        `),xc(),oD(181,`
        `),gi(182,`button`,39),Dp(`click`,function(){return i.clearMaxVisibleDepth()}),oD(183,`
          `),mp(184,`span`,40),oD(185,`
          Clear
        `),xc(),oD(186,`
      `),xc(),oD(187,`
    `),xc(),oD(188,`
  `),xc(),oD(189,`

  `),mp(190,`br`),oD(191,`

  `),gi(192,`angular-slickgrid`,41),Dp(`onGridStateChanged`,function(r){return i.handleOnGridStateChanged(r.detail)})(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)})(`onBeforeFilterChange`,function(){return i.showSpinner()})(`onFilterChanged`,function(){return i.hideSpinner()})(`onBeforeFilterClear`,function(){return i.showSpinner()})(`onFilterCleared`,function(){return i.hideSpinner()})(`onBeforeSortChange`,function(){return i.showSpinner()})(`onSortChanged`,function(){return i.hideSpinner()})(`onTreeFullToggleStart`,function(){return i.showSpinner()})(`onTreeFullToggleEnd`,function(r){return i.handleOnTreeFullToggleEnd(r.detail)})(`onTreeItemToggled`,function(r){return i.handleOnTreeItemToggled(r.detail)}),oD(193,`
  `),xc(),oD(194,`
`),xc(),oD(195,`
`)),s&2&&(av(76),gp(`disabled`,i.hasNoExpandCollapseChanged),av(22),gp(`disabled`,i.hasNoExpandCollapseChanged),av(8),zE(i.loadingClass),av(86),gp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[q1],styles:[`#grid27 .slick-cell{display:inline-flex;align-items:center;gap:4px}#maxVisibleDepthInput{height:22px;width:100%;max-width:150px}
`],encapsulation:2})}}return h})();export{F as Example27Component};