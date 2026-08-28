import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Dt as UE,En as iD,Kn as mp,Tt as Tp,Wn as mi,hr as vp,ht as QI,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W,mt as nk,st as ip}from"./chunk-CAMk6vEo.js";import{t as Ze}from"./chunk-CVoct-s8.js";var v=500;var F=(()=>{class h{constructor(){this.loadingClass=``,this.hideSubTitle=!1,this.isLargeDataset=!1,this.hasNoExpandCollapseChanged=!0,this.treeToggleItems=[]}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(v)}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,width:220,cssClass:`cell-title`,filterable:!0,sortable:!0,exportWithFormatter:!1,queryFieldSorter:`id`,formatter:nk.tree,exportCustomFormatter:nk.treeExport},{id:`duration`,name:`Duration`,field:`duration`,minWidth:90,filterable:!0},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,minWidth:120,maxWidth:200,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:ip.compoundSlider,operator:`>=`},formatter:nk.percentCompleteBarWithText,type:`number`},{id:`start`,name:`Start`,field:`start`,minWidth:60,type:`dateIso`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso},{id:`finish`,name:`Finish`,field:`finish`,minWidth:60,type:`dateIso`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso},{id:`effortDriven`,name:`Effort Driven`,width:80,minWidth:20,maxWidth:80,cssClass:`cell-effort-driven`,field:`effortDriven`,exportWithFormatter:!1,formatter:nk.checkmarkMaterial,cannotTriggerInsert:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new Ze],enableCellNavigation:!0,enableFiltering:!0,showCustomFooter:!0,enableTreeData:!0,treeDataOptions:{columnId:`title`,toggleOnNodeTitle:!0,parentPropName:`parentId`,levelPropName:`treeLevel`,indentMarginLeft:15,initiallyCollapsed:!0,initialSort:{columnId:`title`,direction:`ASC`},titleFormatter:(a,s,i,l,r)=>{let c=``;return r.treeLevel>0&&(c=`<span class="mdi mdi-subdirectory-arrow-right"></span>`),`${c}<span class="bold">${i}</span> <span style="font-size:11px; margin-left: 15px;">(parentId: ${r.parentId})</span>`}},multiColumnSort:!1,presets:{filters:[{columnId:`percentComplete`,searchTerms:[25],operator:`>=`}]},headerRowHeight:45,rowHeight:40,filterTypingDebounce:250}}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView}addNewRow(){let a=this.dataViewObj.getItemCount(),s=this.dataViewObj.getItemById(1);if(s?.__hasChildren){let i={id:a,parentId:s.id,title:`Task ${a}`,duration:`1 day`,percentComplete:99,start:new Date,finish:new Date,effortDriven:!1};this.angularGrid.gridService.addItem(i)}}updateFirstRow(){let a=this.angularGrid.dataView.getItemById(0);this.angularGrid.gridService.updateItem(s(r({},a),{duration:`11 days`,percentComplete:77,start:new Date,finish:new Date,effortDriven:!1}))}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}collapseAllWithoutEvent(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0,!1)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}dynamicallyChangeFilter(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`<`,searchTerms:[40]}])}hideSpinner(){setTimeout(()=>this.loadingClass=``,200)}showSpinner(){this.isLargeDataset&&(this.loadingClass=`mdi mdi-load mdi-spin-1s font-24px`)}logHierarchicalStructure(){console.log(`exploded array`,this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log(`flat array`,this.angularGrid.treeDataService.dataset)}loadData(a){this.isLargeDataset=a>5e3;let s=0,i=[],l=[];for(let r=0;r<a;r++){let c=2e3+Math.floor(Math.random()*10),_=Math.floor(Math.random()*11),f=Math.floor(Math.random()*29),m=l[r]={},b;(r===1||r===0)&&(s=0,i.pop()),r===3?s=1:r===2||r===4||Math.random()>.8&&r>0&&s<3&&r-1!==0&&r-1!==2?(s++,i.push(r-1)):Math.random()<.3&&s>0&&(s--,i.pop()),i.length>0?b=i[i.length-1]:b=null,m.id=r,m.parentId=b,m.title=`Task ${r}`,m.duration=`5 days`,m.percentComplete=Math.round(Math.random()*100),m.start=new Date(c,_,f),m.finish=new Date(c,_+1,f),m.effortDriven=r%5===0}return this.dataset=l,l}handleOnTreeFullToggleEnd(a){console.log(`Tree Data changes`,a),this.hideSpinner()}handleOnTreeItemToggled(a){queueMicrotask(()=>{this.hasNoExpandCollapseChanged=!1,this.treeToggleItems=a.toggledItems}),console.log(`Tree Data changes`,a)}handleOnGridStateChanged(a){queueMicrotask(()=>{this.hasNoExpandCollapseChanged=!1,a?.change?.type===`treeData`&&(console.log(`Tree Data gridStateChange`,a?.gridState?.treeData),this.treeToggleItems=a?.gridState?.treeData?.toggledItems)})}logTreeDataToggledItems(){console.log(this.angularGrid.treeDataService.getToggledItems())}dynamicallyToggledFirstParent(){let a=`parentId`,s=`treeLevel`,l=this.dataset.find(c=>c[s]===1),r=this.angularGrid.dataView.getItemByIdx(l[a]);l&&r&&this.angularGrid.treeDataService.dynamicallyToggleItemState([{itemId:r.id,isCollapsed:!r.__collapsed}])}reapplyToggledItems(){this.angularGrid.treeDataService.applyToggledItemStateChanges(this.treeToggleItems)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}setMaxVisibleDepthFromInput(){let a=document.getElementById(`maxVisibleDepthInput`);if(!a)return;let s=parseInt(a.value,10),i=Number.isFinite(s)?s:void 0;this.angularGrid.treeDataService.setMaxVisibleDepth(i)}clearMaxVisibleDepth(){let a=document.getElementById(`maxVisibleDepthInput`);a&&(a.value=``),this.angularGrid.treeDataService.clearMaxVisibleDepth()}static{this.ɵfac=function(s){return new(s||h)}}static{this.ɵcmp=UE({type:h,selectors:[[`ng-component`]],decls:196,vars:7,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example27.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`4px`],[1,`col-md-12`],[`data-test`,`add-500-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-75k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-250k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`change-filter-dynamically`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`collapse-all-noevent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`reapply-toggled-items-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`,`disabled`],[1,`icon`,`mdi`,`mdi-history`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`dynamically-toggle-first-parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-history`],[1,`row`],[`data-test`,`add-item-btn`,1,`btn`,`btn-primary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-plus`,`color-white`],[`data-test`,`update-item-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-pencil`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Flat dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Hierarchical Tree dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`d-inline-block`,`ms-2`,`mt-2`],[1,`input-group`,`input-group-sm`,`mb-0`],[`id`,`maxVisibleDepthInput`,`type`,`number`,`placeholder`,`Max Visible Depth (e.g. 1)`,`aria-label`,`Max Visible Depth`,1,`form-control`],[`data-test`,`set-max-visible-depth-btn`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`aria-hidden`,`true`,1,`mdi`,`mdi-check`],[`data-test`,`clear-max-visible-depth-btn`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`aria-hidden`,`true`,1,`mdi`,`mdi-close`],[`gridId`,`grid27`,3,`onGridStateChanged`,`onAngularGridCreated`,`onBeforeFilterChange`,`onFilterChanged`,`onBeforeFilterClear`,`onFilterCleared`,`onBeforeSortChange`,`onSortChanged`,`onTreeFullToggleStart`,`onTreeFullToggleEnd`,`onTreeItemToggled`,`columns`,`options`,`dataset`]],template:function(s,i){s&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 27: Tree Data
    `),mi(4,`small`),iD(5,`
      `),vp(6,`span`,1),iD(7,` (from a flat dataset with `),mi(8,`code`),iD(9,`parentId`),Ac(),iD(10,` references -
      `),mi(11,`a`,2),iD(12,`Wiki`),Ac(),iD(13,`)`),Ac(),iD(14,`
    `),mi(15,`span`,3),iD(16,`
      `),mi(17,`a`,4),iD(18,`
        `),vp(19,`span`,5),iD(20,` code
      `),Ac(),iD(21,`
    `),Ac(),iD(22,`
    `),mi(23,`button`,6),Tp(`click`,function(){return i.toggleSubTitle()}),iD(24,`
      `),vp(25,`span`,7),iD(26,`
    `),Ac(),iD(27,`
  `),Ac(),iD(28,`

  `),mi(29,`div`,8),iD(30,`
    `),mi(31,`ul`),iD(32,`
      `),mi(33,`li`),iD(34,`It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.`),Ac(),iD(35,`
      `),mi(36,`ul`),iD(37,`
        `),mi(38,`li`),iD(39,`
          If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call
          "convertHierarchicalViewToParentChildArray()"
        `),Ac(),iD(40,`
        `),mi(41,`li`),iD(42,`
          You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the
          next Hierarchical Example
        `),Ac(),iD(43,`
      `),Ac(),iD(44,`
    `),Ac(),iD(45,`
  `),Ac(),iD(46,`

  `),mi(47,`div`,9),iD(48,`
    `),mi(49,`div`,10),iD(50,`
      `),mi(51,`button`,11),Tp(`click`,function(){return i.loadData(500)}),iD(52,`500 rows`),Ac(),iD(53,`
      `),mi(54,`button`,12),Tp(`click`,function(){return i.loadData(75e3)}),iD(55,`75k rows`),Ac(),iD(56,`
      `),mi(57,`button`,13),Tp(`click`,function(){return i.loadData(25e4)}),iD(58,`250k rows`),Ac(),iD(59,`
      `),mi(60,`button`,14),Tp(`click`,function(){return i.dynamicallyChangeFilter()}),iD(61,`
        `),vp(62,`span`,15),iD(63,`
        `),mi(64,`span`),iD(65,`Dynamically Change Filter (% complete < 40)`),Ac(),iD(66,`
      `),Ac(),iD(67,`
      `),mi(68,`button`,16),Tp(`click`,function(){return i.collapseAllWithoutEvent()}),iD(69,`
        `),vp(70,`span`,17),iD(71,`
        `),mi(72,`span`),iD(73,`Collapse All (without triggering event)`),Ac(),iD(74,`
      `),Ac(),iD(75,`
      `),mi(76,`button`,18),Tp(`click`,function(){return i.reapplyToggledItems()}),iD(77,`
        `),vp(78,`span`,19),iD(79,`
        `),mi(80,`span`),iD(81,`Reapply Previous Toggled Items`),Ac(),iD(82,`
      `),Ac(),iD(83,`
      `),mi(84,`button`,16),Tp(`click`,function(){return i.collapseAllWithoutEvent()}),iD(85,`
        `),vp(86,`span`,20),iD(87,`
        `),mi(88,`span`),iD(89,`Collapse All (without triggering event)`),Ac(),iD(90,`
      `),Ac(),iD(91,`
      `),mi(92,`button`,21),Tp(`click`,function(){return i.dynamicallyToggledFirstParent()}),iD(93,`
        `),mi(94,`span`),iD(95,`Dynamically Toggle First Parent`),Ac(),iD(96,`
      `),Ac(),iD(97,`
      `),mi(98,`button`,18),Tp(`click`,function(){return i.reapplyToggledItems()}),iD(99,`
        `),vp(100,`span`,22),iD(101,`
        `),mi(102,`span`),iD(103,`Reapply Previous Toggled Items`),Ac(),iD(104,`
      `),Ac(),iD(105,`
      `),vp(106,`div`),iD(107,`
    `),Ac(),iD(108,`
  `),Ac(),iD(109,`

  `),mi(110,`div`,23),iD(111,`
    `),mi(112,`div`,10),iD(113,`
      `),mi(114,`button`,24),Tp(`click`,function(){return i.addNewRow()}),iD(115,`
        `),vp(116,`span`,25),iD(117,`
        `),mi(118,`span`),iD(119,`Add New Item to "Task 1" group`),Ac(),iD(120,`
      `),Ac(),iD(121,`
      `),mi(122,`button`,26),Tp(`click`,function(){return i.updateFirstRow()}),iD(123,`
        `),vp(124,`span`,27),iD(125,`
        `),mi(126,`span`),iD(127,`Update 1st Row Item`),Ac(),iD(128,`
      `),Ac(),iD(129,`
      `),mi(130,`button`,28),Tp(`click`,function(){return i.collapseAll()}),iD(131,`
        `),vp(132,`span`,17),iD(133,`
        `),mi(134,`span`),iD(135,`Collapse All`),Ac(),iD(136,`
      `),Ac(),iD(137,`
      `),mi(138,`button`,29),Tp(`click`,function(){return i.expandAll()}),iD(139,`
        `),vp(140,`span`,30),iD(141,`
        `),mi(142,`span`),iD(143,`Expand All`),Ac(),iD(144,`
      `),Ac(),iD(145,`
      `),mi(146,`button`,31),Tp(`click`,function(){return i.logTreeDataToggledItems()}),iD(147,`
        `),mi(148,`span`),iD(149,`Log Tree Toggled Items`),Ac(),iD(150,`
      `),Ac(),iD(151,`
      `),mi(152,`button`,32),Tp(`click`,function(){return i.logFlatStructure()}),iD(153,`
        `),mi(154,`span`),iD(155,`Log Flat Structure`),Ac(),iD(156,`
      `),Ac(),iD(157,`
      `),mi(158,`button`,33),Tp(`click`,function(){return i.logHierarchicalStructure()}),iD(159,`
        `),mi(160,`span`),iD(161,`Log Hierarchical Structure`),Ac(),iD(162,`
      `),Ac(),iD(163,`
      `),mi(164,`button`,31),Tp(`click`,function(){return i.dynamicallyChangeFilter()}),iD(165,`
        `),mi(166,`span`),iD(167,`Dynamically Change Filter (% complete < 40)`),Ac(),iD(168,`
      `),Ac(),iD(169,`
    `),Ac(),iD(170,`
    `),mi(171,`div`,34),iD(172,`
      `),mi(173,`div`,35),iD(174,`
        `),vp(175,`input`,36),iD(176,`
        `),mi(177,`button`,37),Tp(`click`,function(){return i.setMaxVisibleDepthFromInput()}),iD(178,`
          `),vp(179,`span`,38),iD(180,`
          Set
        `),Ac(),iD(181,`
        `),mi(182,`button`,39),Tp(`click`,function(){return i.clearMaxVisibleDepth()}),iD(183,`
          `),vp(184,`span`,40),iD(185,`
          Clear
        `),Ac(),iD(186,`
      `),Ac(),iD(187,`
    `),Ac(),iD(188,`
  `),Ac(),iD(189,`

  `),vp(190,`br`),iD(191,`

  `),mi(192,`angular-slickgrid`,41),Tp(`onGridStateChanged`,function(r){return i.handleOnGridStateChanged(r.detail)})(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)})(`onBeforeFilterChange`,function(){return i.showSpinner()})(`onFilterChanged`,function(){return i.hideSpinner()})(`onBeforeFilterClear`,function(){return i.showSpinner()})(`onFilterCleared`,function(){return i.hideSpinner()})(`onBeforeSortChange`,function(){return i.showSpinner()})(`onSortChanged`,function(){return i.hideSpinner()})(`onTreeFullToggleStart`,function(){return i.showSpinner()})(`onTreeFullToggleEnd`,function(r){return i.handleOnTreeFullToggleEnd(r.detail)})(`onTreeItemToggled`,function(r){return i.handleOnTreeItemToggled(r.detail)}),iD(193,`
  `),Ac(),iD(194,`
`),Ac(),iD(195,`
`)),s&2&&(cy(76),mp(`disabled`,i.hasNoExpandCollapseChanged),cy(22),mp(`disabled`,i.hasNoExpandCollapseChanged),cy(8),QI(i.loadingClass),cy(86),mp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W],styles:[`#grid27 .slick-cell{display:inline-flex;align-items:center;gap:4px}#maxVisibleDepthInput{height:22px;width:100%;max-width:150px}
`],encapsulation:2})}}return h})();export{F as Example27Component};