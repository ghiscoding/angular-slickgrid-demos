import{n as s,t as r}from"./chunk-DarCEgGK.js";import{F as Ip,Pn as ly,Wt as ZI,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,ht as nk}from"./chunk-DLuyVhQJ.js";import{t as Ze}from"./chunk-C5onuIZj.js";var v=500;var F=(()=>{class h{constructor(){this.loadingClass=``,this.hideSubTitle=!1,this.isLargeDataset=!1,this.hasNoExpandCollapseChanged=!0,this.treeToggleItems=[]}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(v)}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,width:220,cssClass:`cell-title`,filterable:!0,sortable:!0,exportWithFormatter:!1,queryFieldSorter:`id`,formatter:nk.tree,exportCustomFormatter:nk.treeExport},{id:`duration`,name:`Duration`,field:`duration`,minWidth:90,filterable:!0},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,minWidth:120,maxWidth:200,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:ip.compoundSlider,operator:`>=`},formatter:nk.percentCompleteBarWithText,type:`number`},{id:`start`,name:`Start`,field:`start`,minWidth:60,type:`dateIso`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso},{id:`finish`,name:`Finish`,field:`finish`,minWidth:60,type:`dateIso`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso},{id:`effortDriven`,name:`Effort Driven`,width:80,minWidth:20,maxWidth:80,cssClass:`cell-effort-driven`,field:`effortDriven`,exportWithFormatter:!1,formatter:nk.checkmarkMaterial,cannotTriggerInsert:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new Ze],enableCellNavigation:!0,enableFiltering:!0,showCustomFooter:!0,enableTreeData:!0,treeDataOptions:{columnId:`title`,toggleOnNodeTitle:!0,parentPropName:`parentId`,levelPropName:`treeLevel`,indentMarginLeft:15,initiallyCollapsed:!0,initialSort:{columnId:`title`,direction:`ASC`},titleFormatter:(a,s,i,l,r)=>{let c=``;return r.treeLevel>0&&(c=`<span class="mdi mdi-subdirectory-arrow-right"></span>`),`${c}<span class="bold">${i}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${r.parentId})</span>`}},multiColumnSort:!1,presets:{filters:[{columnId:`percentComplete`,searchTerms:[25],operator:`>=`}]},headerRowHeight:45,rowHeight:40,filterTypingDebounce:250}}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView}addNewRow(){let a=this.dataViewObj.getItemCount(),s=this.dataViewObj.getItemById(1);if(s?.__hasChildren){let i={id:a,parentId:s.id,title:`Task ${a}`,duration:`1 day`,percentComplete:99,start:new Date,finish:new Date,effortDriven:!1};this.angularGrid.gridService.addItem(i)}}updateFirstRow(){let a=this.angularGrid.dataView.getItemById(0);this.angularGrid.gridService.updateItem(s(r({},a),{duration:`11 days`,percentComplete:77,start:new Date,finish:new Date,effortDriven:!1}))}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}collapseAllWithoutEvent(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0,!1)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}dynamicallyChangeFilter(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`<`,searchTerms:[40]}])}hideSpinner(){setTimeout(()=>this.loadingClass=``,200)}showSpinner(){this.isLargeDataset&&(this.loadingClass=`mdi mdi-load mdi-spin-1s font-24px`)}logHierarchicalStructure(){console.log(`exploded array`,this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log(`flat array`,this.angularGrid.treeDataService.dataset)}loadData(a){this.isLargeDataset=a>5e3;let s=0,i=[],l=[];for(let r=0;r<a;r++){let c=2e3+Math.floor(Math.random()*10),_=Math.floor(Math.random()*11),f=Math.floor(Math.random()*29),m=l[r]={},b;(r===1||r===0)&&(s=0,i.pop()),r===3?s=1:r===2||r===4||Math.random()>.8&&r>0&&s<3&&r-1!==0&&r-1!==2?(s++,i.push(r-1)):Math.random()<.3&&s>0&&(s--,i.pop()),i.length>0?b=i[i.length-1]:b=null,m.id=r,m.parentId=b,m.title=`Task ${r}`,m.duration=`5 days`,m.percentComplete=Math.round(Math.random()*100),m.start=new Date(c,_,f),m.finish=new Date(c,_+1,f),m.effortDriven=r%5===0}return this.dataset=l,l}handleOnTreeFullToggleEnd(a){console.log(`Tree Data changes`,a),this.hideSpinner()}handleOnTreeItemToggled(a){queueMicrotask(()=>{this.hasNoExpandCollapseChanged=!1,this.treeToggleItems=a.toggledItems}),console.log(`Tree Data changes`,a)}handleOnGridStateChanged(a){queueMicrotask(()=>{this.hasNoExpandCollapseChanged=!1,a?.change?.type===`treeData`&&(console.log(`Tree Data gridStateChange`,a?.gridState?.treeData),this.treeToggleItems=a?.gridState?.treeData?.toggledItems)})}logTreeDataToggledItems(){console.log(this.angularGrid.treeDataService.getToggledItems())}dynamicallyToggledFirstParent(){let a=`parentId`,s=`treeLevel`,l=this.dataset.find(c=>c[s]===1),r=this.angularGrid.dataView.getItemByIdx(l[a]);l&&r&&this.angularGrid.treeDataService.dynamicallyToggleItemState([{itemId:r.id,isCollapsed:!r.__collapsed}])}reapplyToggledItems(){this.angularGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}setMaxVisibleDepthFromInput(){let a=document.getElementById(`maxVisibleDepthInput`);if(!a)return;let s=parseInt(a.value,10),i=Number.isFinite(s)?s:void 0;this.angularGrid.treeDataService.setMaxVisibleDepth(i)}clearMaxVisibleDepth(){let a=document.getElementById(`maxVisibleDepthInput`);a&&(a.value=``),this.angularGrid.treeDataService.clearMaxVisibleDepth()}static{this.ɵfac=function(s){return new(s||h)}}static{this.ɵcmp=$E({type:h,selectors:[[`ng-component`]],decls:196,vars:7,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example27.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`4px`],[1,`col-md-12`],[`data-test`,`add-500-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-75k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-250k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`change-filter-dynamically`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`collapse-all-noevent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`reapply-toggled-items-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`,`disabled`],[1,`icon`,`mdi`,`mdi-history`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`dynamically-toggle-first-parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-history`],[1,`row`],[`data-test`,`add-item-btn`,1,`btn`,`btn-primary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-plus`,`color-white`],[`data-test`,`update-item-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-pencil`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Flat dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Hierarchical Tree dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`d-inline-block`,`ms-2`,`mt-2`],[1,`input-group`,`input-group-sm`,`mb-0`],[`id`,`maxVisibleDepthInput`,`type`,`number`,`placeholder`,`Max Visible Depth (e.g. 1)`,`aria-label`,`Max Visible Depth`,1,`form-control`],[`data-test`,`set-max-visible-depth-btn`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`aria-hidden`,`true`,1,`mdi`,`mdi-check`],[`data-test`,`clear-max-visible-depth-btn`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`aria-hidden`,`true`,1,`mdi`,`mdi-close`],[`gridId`,`grid27`,3,`onGridStateChanged`,`onAngularGridCreated`,`onBeforeFilterChange`,`onFilterChanged`,`onBeforeFilterClear`,`onFilterCleared`,`onBeforeSortChange`,`onSortChanged`,`onTreeFullToggleStart`,`onTreeFullToggleEnd`,`onTreeItemToggled`,`columns`,`options`,`dataset`]],template:function(s,i){s&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 27: Tree Data
    `),yi(4,`small`),sD(5,`
      `),Ip(6,`span`,1),sD(7,` (from a flat dataset with `),yi(8,`code`),sD(9,`parentId`),Rc(),sD(10,` references -
      `),yi(11,`a`,2),sD(12,`Wiki`),Rc(),sD(13,`)`),Rc(),sD(14,`
    `),yi(15,`span`,3),sD(16,`
      `),yi(17,`a`,4),sD(18,`
        `),Ip(19,`span`,5),sD(20,` code
      `),Rc(),sD(21,`
    `),Rc(),sD(22,`
    `),yi(23,`button`,6),bp(`click`,function(){return i.toggleSubTitle()}),sD(24,`
      `),Ip(25,`span`,7),sD(26,`
    `),Rc(),sD(27,`
  `),Rc(),sD(28,`

  `),yi(29,`div`,8),sD(30,`
    `),yi(31,`ul`),sD(32,`
      `),yi(33,`li`),sD(34,`It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.`),Rc(),sD(35,`
      `),yi(36,`ul`),sD(37,`
        `),yi(38,`li`),sD(39,`
          If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call
          "convertHierarchicalViewToParentChildArray()"
        `),Rc(),sD(40,`
        `),yi(41,`li`),sD(42,`
          You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the
          next Hierarchical Example
        `),Rc(),sD(43,`
      `),Rc(),sD(44,`
    `),Rc(),sD(45,`
  `),Rc(),sD(46,`

  `),yi(47,`div`,9),sD(48,`
    `),yi(49,`div`,10),sD(50,`
      `),yi(51,`button`,11),bp(`click`,function(){return i.loadData(500)}),sD(52,`500 rows`),Rc(),sD(53,`
      `),yi(54,`button`,12),bp(`click`,function(){return i.loadData(75e3)}),sD(55,`75k rows`),Rc(),sD(56,`
      `),yi(57,`button`,13),bp(`click`,function(){return i.loadData(25e4)}),sD(58,`250k rows`),Rc(),sD(59,`
      `),yi(60,`button`,14),bp(`click`,function(){return i.dynamicallyChangeFilter()}),sD(61,`
        `),Ip(62,`span`,15),sD(63,`
        `),yi(64,`span`),sD(65,`Dynamically Change Filter (% complete < 40)`),Rc(),sD(66,`
      `),Rc(),sD(67,`
      `),yi(68,`button`,16),bp(`click`,function(){return i.collapseAllWithoutEvent()}),sD(69,`
        `),Ip(70,`span`,17),sD(71,`
        `),yi(72,`span`),sD(73,`Collapse All (without triggering event)`),Rc(),sD(74,`
      `),Rc(),sD(75,`
      `),yi(76,`button`,18),bp(`click`,function(){return i.reapplyToggledItems()}),sD(77,`
        `),Ip(78,`span`,19),sD(79,`
        `),yi(80,`span`),sD(81,`Reapply Previous Toggled Items`),Rc(),sD(82,`
      `),Rc(),sD(83,`
      `),yi(84,`button`,16),bp(`click`,function(){return i.collapseAllWithoutEvent()}),sD(85,`
        `),Ip(86,`span`,20),sD(87,`
        `),yi(88,`span`),sD(89,`Collapse All (without triggering event)`),Rc(),sD(90,`
      `),Rc(),sD(91,`
      `),yi(92,`button`,21),bp(`click`,function(){return i.dynamicallyToggledFirstParent()}),sD(93,`
        `),yi(94,`span`),sD(95,`Dynamically Toggle First Parent`),Rc(),sD(96,`
      `),Rc(),sD(97,`
      `),yi(98,`button`,18),bp(`click`,function(){return i.reapplyToggledItems()}),sD(99,`
        `),Ip(100,`span`,22),sD(101,`
        `),yi(102,`span`),sD(103,`Reapply Previous Toggled Items`),Rc(),sD(104,`
      `),Rc(),sD(105,`
      `),Ip(106,`div`),sD(107,`
    `),Rc(),sD(108,`
  `),Rc(),sD(109,`

  `),yi(110,`div`,23),sD(111,`
    `),yi(112,`div`,10),sD(113,`
      `),yi(114,`button`,24),bp(`click`,function(){return i.addNewRow()}),sD(115,`
        `),Ip(116,`span`,25),sD(117,`
        `),yi(118,`span`),sD(119,`Add New Item to "Task 1" group`),Rc(),sD(120,`
      `),Rc(),sD(121,`
      `),yi(122,`button`,26),bp(`click`,function(){return i.updateFirstRow()}),sD(123,`
        `),Ip(124,`span`,27),sD(125,`
        `),yi(126,`span`),sD(127,`Update 1st Row Item`),Rc(),sD(128,`
      `),Rc(),sD(129,`
      `),yi(130,`button`,28),bp(`click`,function(){return i.collapseAll()}),sD(131,`
        `),Ip(132,`span`,17),sD(133,`
        `),yi(134,`span`),sD(135,`Collapse All`),Rc(),sD(136,`
      `),Rc(),sD(137,`
      `),yi(138,`button`,29),bp(`click`,function(){return i.expandAll()}),sD(139,`
        `),Ip(140,`span`,30),sD(141,`
        `),yi(142,`span`),sD(143,`Expand All`),Rc(),sD(144,`
      `),Rc(),sD(145,`
      `),yi(146,`button`,31),bp(`click`,function(){return i.logTreeDataToggledItems()}),sD(147,`
        `),yi(148,`span`),sD(149,`Log Tree Toggled Items`),Rc(),sD(150,`
      `),Rc(),sD(151,`
      `),yi(152,`button`,32),bp(`click`,function(){return i.logFlatStructure()}),sD(153,`
        `),yi(154,`span`),sD(155,`Log Flat Structure`),Rc(),sD(156,`
      `),Rc(),sD(157,`
      `),yi(158,`button`,33),bp(`click`,function(){return i.logHierarchicalStructure()}),sD(159,`
        `),yi(160,`span`),sD(161,`Log Hierarchical Structure`),Rc(),sD(162,`
      `),Rc(),sD(163,`
      `),yi(164,`button`,31),bp(`click`,function(){return i.dynamicallyChangeFilter()}),sD(165,`
        `),yi(166,`span`),sD(167,`Dynamically Change Filter (% complete < 40)`),Rc(),sD(168,`
      `),Rc(),sD(169,`
    `),Rc(),sD(170,`
    `),yi(171,`div`,34),sD(172,`
      `),yi(173,`div`,35),sD(174,`
        `),Ip(175,`input`,36),sD(176,`
        `),yi(177,`button`,37),bp(`click`,function(){return i.setMaxVisibleDepthFromInput()}),sD(178,`
          `),Ip(179,`span`,38),sD(180,`
          Set
        `),Rc(),sD(181,`
        `),yi(182,`button`,39),bp(`click`,function(){return i.clearMaxVisibleDepth()}),sD(183,`
          `),Ip(184,`span`,40),sD(185,`
          Clear
        `),Rc(),sD(186,`
      `),Rc(),sD(187,`
    `),Rc(),sD(188,`
  `),Rc(),sD(189,`

  `),Ip(190,`br`),sD(191,`

  `),yi(192,`angular-slickgrid`,41),bp(`onGridStateChanged`,function(r){return i.handleOnGridStateChanged(r.detail)})(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)})(`onBeforeFilterChange`,function(){return i.showSpinner()})(`onFilterChanged`,function(){return i.hideSpinner()})(`onBeforeFilterClear`,function(){return i.showSpinner()})(`onFilterCleared`,function(){return i.hideSpinner()})(`onBeforeSortChange`,function(){return i.showSpinner()})(`onSortChanged`,function(){return i.hideSpinner()})(`onTreeFullToggleStart`,function(){return i.showSpinner()})(`onTreeFullToggleEnd`,function(r){return i.handleOnTreeFullToggleEnd(r.detail)})(`onTreeItemToggled`,function(r){return i.handleOnTreeItemToggled(r.detail)}),sD(193,`
  `),Rc(),sD(194,`
`),Rc(),sD(195,`
`)),s&2&&(ly(76),Ep(`disabled`,i.hasNoExpandCollapseChanged),ly(22),Ep(`disabled`,i.hasNoExpandCollapseChanged),ly(8),ZI(i.loadingClass),ly(86),Ep(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W],styles:[`#grid27 .slick-cell{display:inline-flex;align-items:center;gap:4px}#maxVisibleDepthInput{height:22px;width:100%;max-width:150px}
`],encapsulation:2})}}return h})();export{F as Example27Component};