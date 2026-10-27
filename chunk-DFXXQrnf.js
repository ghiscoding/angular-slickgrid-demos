import{$n as pD,G as Kp,In as lD,U as Jp,a as Ap,mn as dv,on as bp,pr as tE,sr as rE,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,a as Bi,it as fT,l as D1,r as B,u as Dt,v as Fn,yt as sI}from"./chunk-Dk5kBPyv.js";import{c as Dn,d as In,u as Ge,y as qt}from"./main-BEH6XCIK.js";import{t as Qe}from"./chunk-D0qctKwX.js";var Q=(()=>{class g{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.isExcludingChildWhenFiltering=!1,this.isAutoApproveParentItemWhenTreeColumnIsValid=!0,this.isAutoRecalcTotalsOnFilterChange=!1,this.isRemoveLastInsertedPopSongDisabled=!0,this.searchString=``,this.treeFormatter=(a,r,n,l,o,h)=>{let d=h.getOptions()?.treeDataOptions?.levelPropName||`__treeLevel`;if(n==null||o===void 0)return``;let p=h.getData(),C=p.getItems(),B=p.getIdPropertyName()||`id`,_=p.getIdxById(o[B]),T=this.getFileIcon(n),f=o[d],E=`.`;n=n.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);let w=`<span class="display-inline-block width-${15*f}px"></span>`,k=Fn(5*f),v=`<span class="slick-tree-title">${n}</span>`;if(C[_+1]?.[d]>C[_][d]||C[_].__hasChildren){let I=`<i class="mdi font-22px ${o.__collapsed?`mdi-folder`:`mdi-folder-open`}"></i>`;return o.__collapsed?`<span class="hidden">${E}</span>${w}${k} <span class="slick-tree-toggle collapsed" level="${f}"></span>${I} ${T} ${v}`:`<span class="hidden">${E}</span>${w}${k} <span class="slick-tree-toggle expanded" level="${f}"></span>${I} ${T} ${v}`}else return`<span class="hidden">${E}</span>${w}${k} <span class="slick-tree-toggle" level="${f}"></span>${T} ${v}`}}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:`file`,name:`Files`,field:`file`,width:150,formatter:this.treeFormatter,filterable:!0,sortable:!0},{id:`dateModified`,name:`Date Modified`,field:`dateModified`,formatter:sI.dateIso,type:`dateUtc`,outputType:`dateIso`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:uu.compoundDate}},{id:`description`,name:`Description`,field:`description`,minWidth:90,filterable:!0,sortable:!0},{id:`size`,name:`Size`,field:`size`,minWidth:90,type:`number`,exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:uu.compoundInputNumber},formatter:(a,r,n,l,o)=>{let h=l.field;if(o?.__treeTotals!==void 0){let S=o[this.gridOptions?.treeDataOptions?.levelPropName||`__treeLevel`],d=o?.__treeTotals?.sum[h],p=o?.__treeTotals?.avg[h];if(p!==void 0&&d!==void 0)return isNaN(d)?``:`<span class="text-primary bold">sum: ${Dt(d,0,2)} MB</span> / <span class="avg-total">avg: ${Dt(p,0,2)} MB</span> <span class="total-suffix">(${S===0?`total`:`sub-total`})</span>`;if(d!==void 0)return isNaN(d)?``:`<span class="text-primary bold">sum: ${Dt(d,0,2)} MB</span> <span class="total-suffix">(${S===0?`total`:`sub-total`})</span>`}return B(n)?`${n} MB`:``}}],this.gridOptions={autoResize:{autoHeight:!1,container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new Qe],enableCellNavigation:!0,enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,treeDataOptions:{columnId:`file`,childrenPropName:`files`,excludeChildrenWhenFilteringTree:this.isExcludingChildWhenFiltering,autoApproveParentItemWhenTreeColumnIsValid:this.isAutoApproveParentItemWhenTreeColumnIsValid,aggregators:[new fT.Avg(`size`),new fT.Sum(`size`)],autoRecalcTotalsOnFilterChange:this.isAutoRecalcTotalsOnFilterChange},headerRowHeight:35,rowHeight:33,showCustomFooter:!0,presets:{treeData:{toggledItems:[{itemId:4,isCollapsed:!0}]}},contextMenu:{iconCollapseAllGroupsCommand:`mdi mdi-arrow-collapse`,iconExpandAllGroupsCommand:`mdi mdi-arrow-expand`,iconClearGroupingCommand:`mdi mdi-close`,iconCopyCellValueCommand:`mdi mdi-content-copy`,iconExportCsvCommand:`mdi mdi-file-document-outline`,iconExportExcelCommand:`mdi mdi-file-excel-outline`,iconExportTextDelimitedCommand:`mdi mdi-file-document-outline`},gridMenu:{iconCssClass:`mdi mdi-menu`,iconClearAllFiltersCommand:`mdi mdi-filter-remove-outline`,iconClearAllSortingCommand:`mdi mdi-swap-vertical`,iconExportCsvCommand:`mdi mdi-file-document-outline`,iconExportExcelCommand:`mdi mdi-file-excel-outline`,iconExportTextDelimitedCommand:`mdi mdi-file-document-outline`,iconRefreshDatasetCommand:`mdi mdi-sync`,iconToggleFilterCommand:`mdi mdi-flip-vertical`,iconTogglePreHeaderCommand:`mdi mdi-flip-vertical`},headerMenu:{iconClearFilterCommand:`mdi mdi mdi-filter-remove-outline`,iconClearSortCommand:`mdi mdi-swap-vertical`,iconSortAscCommand:`mdi mdi-arrow-up`,iconSortDescCommand:`mdi mdi-arrow-down`,iconColumnHideCommand:`mdi mdi-close`}}}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView}changeAutoApproveParentItem(){return this.isAutoApproveParentItemWhenTreeColumnIsValid=!this.isAutoApproveParentItemWhenTreeColumnIsValid,this.gridOptions.treeDataOptions.autoApproveParentItemWhenTreeColumnIsValid=this.isAutoApproveParentItemWhenTreeColumnIsValid,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),!0}changeAutoRecalcTotalsOnFilterChange(){return this.isAutoRecalcTotalsOnFilterChange=!this.isAutoRecalcTotalsOnFilterChange,this.gridOptions.treeDataOptions.autoRecalcTotalsOnFilterChange=this.isAutoRecalcTotalsOnFilterChange,this.angularGrid.slickGrid?.setOptions(this.gridOptions),this.angularGrid.filterService.clearFilters(),this.angularGrid.treeDataService.enableAutoRecalcTotalsFeature(),!0}changeExcludeChildWhenFiltering(){return this.isExcludingChildWhenFiltering=!this.isExcludingChildWhenFiltering,this.gridOptions.treeDataOptions.excludeChildrenWhenFilteringTree=this.isExcludingChildWhenFiltering,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),!0}clearSearch(){this.searchString=``,this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:`file`,searchTerms:[this.searchString]}],!0,!1,!0)}getFileIcon(a){let r=``;return a.includes(`.pdf`)?r=`<span class="mdi icon mdi-file-pdf-outline"></span>`:a.includes(`.txt`)?r=`<span class="mdi icon mdi-file-document-outline"></span>`:a.includes(`.xls`)?r=`<span class="mdi icon mdi-file-excel-outline"></span>`:a.includes(`.mp3`)&&(r=`<span class="mdi icon mdi-file-music-outline"></span>`),r}addNewFile(){let a=this.dataViewObj.getLength()+50,r=[...this.datasetHierarchical],n=Bi(r,l=>l.file===`pop`,`files`);n&&Array.isArray(n.files)&&(n.files.push({id:a,file:`pop-${a}.mp3`,dateModified:new Date,size:a+3}),this.lastInsertedPopSongId=a,this.isRemoveLastInsertedPopSongDisabled=!1,this.datasetHierarchical=r,setTimeout(()=>{let l=this.dataViewObj.getRowById(n.id);this.gridObj.scrollRowIntoView(l+3)},10))}deleteFile(){let a=[...this.datasetHierarchical],r=Bi(this.datasetHierarchical,l=>l.file===`pop`,`files`),n=Bi(this.datasetHierarchical,l=>l.id===this.lastInsertedPopSongId,`files`);if(r&&n){let l=r.files.findIndex(o=>o.id===n.id);l>=0&&(r.files.splice(l,1),this.lastInsertedPopSongId=void 0,this.isRemoveLastInsertedPopSongDisabled=!0,this.datasetHierarchical=a)}}clearFilters(){this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}logHierarchicalStructure(){console.log(`exploded array`,this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log(`flat array`,this.angularGrid.treeDataService.dataset)}mockDataset(){return[{id:24,file:`bucket-list.txt`,dateModified:`2012-03-05T12:44:00.123Z`,size:.5},{id:18,file:`something.txt`,dateModified:`2015-03-03T03:50:00.123Z`,size:90},{id:21,file:`documents`,files:[{id:2,file:`txt`,files:[{id:3,file:`todo.txt`,description:`things to do someday maybe`,dateModified:`2015-05-12T14:50:00.123Z`,size:.7}]},{id:4,file:`pdf`,files:[{id:22,file:`map2.pdf`,dateModified:`2015-07-21T08:22:00.123Z`,size:2.9},{id:5,file:`map.pdf`,dateModified:`2015-05-21T10:22:00.123Z`,size:3.1},{id:6,file:`internet-bill.pdf`,dateModified:`2015-05-12T14:50:00.123Z`,size:1.3},{id:23,file:`phone-bill.pdf`,dateModified:`2015-05-01T07:50:00.123Z`,size:1.5}]},{id:9,file:`misc`,files:[{id:10,file:`warranties.txt`,dateModified:`2015-02-26T16:50:00.123Z`,size:.4}]},{id:7,file:`xls`,files:[{id:8,file:`compilation.xls`,dateModified:`2014-10-02T14:50:00.123Z`,size:2.3}]},{id:55,file:`unclassified.csv`,dateModified:`2015-04-08T03:44:12.333Z`,size:.25},{id:56,file:`unresolved.csv`,dateModified:`2015-04-03T03:21:12.000Z`,size:.79},{id:57,file:`zebra.dll`,dateModified:`2016-12-08T13:22:12.432`,size:1.22}]},{id:11,file:`music`,files:[{id:12,file:`mp3`,files:[{id:16,file:`rock`,files:[{id:17,file:`soft.mp3`,dateModified:`2015-05-13T13:50:00Z`,size:98}]},{id:14,file:`pop`,files:[{id:15,file:`theme.mp3`,description:`Movie Theme Song`,dateModified:`2015-03-01T17:05:00Z`,size:47},{id:25,file:`song.mp3`,description:`it is a song...`,dateModified:`2016-10-04T06:33:44Z`,size:6.3}]},{id:33,file:`other`,files:[]}]}]},{id:26,file:`recipes`,description:`Cake Recipes`,dateModified:`2012-03-05T12:44:00.123Z`,files:[{id:29,file:`cheesecake`,description:`strawberry cheesecake`,dateModified:`2012-04-04T13:52:00.123Z`,size:.2},{id:30,file:`chocolate-cake`,description:`tasty sweet chocolate cake`,dateModified:`2012-05-05T09:22:00.123Z`,size:.2},{id:31,file:`coffee-cake`,description:`chocolate coffee cake`,dateModified:`2012-01-01T08:08:48.123Z`,size:.2}]}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||g)}}static{this.ɵcmp=WE({type:g,selectors:[[`ng-component`]],decls:154,vars:8,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example28.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-md-7`],[`data-test`,`add-item-btn`,1,`btn`,`btn-xs`,`btn-icon`,`btn-primary`,3,`click`],[1,`icon`,`mdi`,`mdi-plus`,`color-white`],[`data-test`,`remove-item-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`,`disabled`],[1,`mdi`,`mdi-minus`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[`data-test`,`clear-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`title`,`console.log of the Flat dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Hierarchical Tree dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`col-md-5`],[1,`input-group`],[`type`,`text`,`data-test`,`search-string`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,`search-string`,3,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-string`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`d-flex`,`align-items-center`,3,`click`],[1,`icon`,`mdi`,`mdi-close-thick`],[`for`,`excludeChildWhenFiltering`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`excludeChildWhenFiltering`,`data-test`,`exclude-child-when-filtering`,3,`click`,`checked`],[`title`,`for example if we filter the word 'pop' and we exclude children, then only the folder 'pop' will show up without any content unless we uncheck this flag`],[`for`,`autoApproveParentItem`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`autoApproveParentItem`,`data-test`,`auto-approve-parent-item`,3,`click`,`checked`],[`title`,`for example in this demo if we filter with 'music' and size '> 70' nothing will show up unless we have this flag enabled
            because none of the files have both criteria at the same time, however the column with the tree 'file' does pass the filter criteria 'music'
            and with this flag we tell the lib to skip any other filter(s) as soon as the with the tree (file in this demo) passes its own filter criteria`],[`for`,`autoRecalcTotalsOnFilterChange`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`autoRecalcTotalsOnFilterChange`,`data-test`,`auto-recalc-totals`,3,`click`,`checked`],[`title`,`Should we recalculate Tree Data Totals (when Aggregators are defined) while filtering? This feature is disabled by default.`],[`gridId`,`grid28`,3,`onAngularGridCreated`,`columns`,`options`,`datasetHierarchical`]],template:function(r,n){r&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 28: Tree Data with Aggregators
    `),vi(4,`small`),_p(5,`span`,1),lD(6,` (from a Hierarchical Dataset -
      `),vi(7,`a`,2),lD(8,`Wiki`),Rc(),lD(9,`)`),Rc(),lD(10,`
    `),vi(11,`span`,3),lD(12,`
      `),vi(13,`a`,4),lD(14,`
        `),_p(15,`span`,5),lD(16,` code
      `),Rc(),lD(17,`
    `),Rc(),lD(18,`
    `),vi(19,`button`,6),Ap(`click`,function(){return n.toggleSubTitle()}),lD(20,`
      `),_p(21,`span`,7),lD(22,`
    `),Rc(),lD(23,`
  `),Rc(),lD(24,`

  `),vi(25,`div`,8),lD(26,`
    `),vi(27,`ul`),lD(28,`
      `),vi(29,`li`),lD(30,`
        `),vi(31,`b`),lD(32,`NOTE #1:`),Rc(),lD(33,` The grid will automatically sort Ascending with the column that has the Tree Data, you could add a "sortByFieldId"
        in your column "treeData" option if you wish to sort on a different column
      `),Rc(),lD(34,`
      `),vi(35,`li`),lD(36,`
        `),vi(37,`b`),lD(38,`NOTE #2:`),Rc(),lD(39,` Tree Totals are only calculated once and are `),vi(40,`b`),lD(41,`NOT`),Rc(),lD(42,` recalculated while filtering data, if you do want that
        feature then you will need to enable `),vi(43,`code`),lD(44,`autoRecalcTotalsOnFilterChange`),Rc(),lD(45,` `),vi(46,`i`),lD(47,`(see checkbox below)`),Rc(),lD(48,`
      `),Rc(),lD(49,`
    `),Rc(),lD(50,`
  `),Rc(),lD(51,`

  `),vi(52,`div`,9),lD(53,`
    `),vi(54,`div`,10),lD(55,`
      `),vi(56,`button`,11),Ap(`click`,function(){return n.addNewFile()}),lD(57,`
        `),_p(58,`span`,12),lD(59,`
        `),vi(60,`span`),lD(61,`Add New Pop Song`),Rc(),lD(62,`
      `),Rc(),lD(63,`
      `),vi(64,`button`,13),Ap(`click`,function(){return n.deleteFile()}),lD(65,`
        `),_p(66,`span`,14),lD(67,`
        `),vi(68,`span`),lD(69,`Remove Last Inserted Pop Song`),Rc(),lD(70,`
      `),Rc(),lD(71,`
      `),vi(72,`button`,15),Ap(`click`,function(){return n.collapseAll()}),lD(73,`
        `),_p(74,`span`,16),lD(75,`
        `),vi(76,`span`),lD(77,`Collapse All`),Rc(),lD(78,`
      `),Rc(),lD(79,`
      `),vi(80,`button`,17),Ap(`click`,function(){return n.expandAll()}),lD(81,`
        `),_p(82,`span`,18),lD(83,`
        `),vi(84,`span`),lD(85,`Expand All`),Rc(),lD(86,`
      `),Rc(),lD(87,`
      `),vi(88,`button`,19),Ap(`click`,function(){return n.clearFilters()}),lD(89,`
        `),_p(90,`span`,20),lD(91,`
        `),vi(92,`span`),lD(93,`Clear Filters`),Rc(),lD(94,`
      `),Rc(),lD(95,`
      `),vi(96,`button`,21),Ap(`click`,function(){return n.logFlatStructure()}),lD(97,`
        `),vi(98,`span`),lD(99,`Log Flat Structure`),Rc(),lD(100,`
      `),Rc(),lD(101,`
      `),vi(102,`button`,22),Ap(`click`,function(){return n.logHierarchicalStructure()}),lD(103,`
        `),vi(104,`span`),lD(105,`Log Hierarchical Structure`),Rc(),lD(106,`
      `),Rc(),lD(107,`
    `),Rc(),lD(108,`

    `),vi(109,`div`,23),lD(110,`
      `),vi(111,`div`,24),lD(112,`
        `),vi(113,`input`,25),tE(),Jp(`ngModelChange`,function(o){return pD(n.searchString,o)||(n.searchString=o),o}),Ap(`ngModelChange`,function(){return n.searchStringChanged()}),Rc(),lD(114,`
        `),vi(115,`button`,26),Ap(`click`,function(){return n.clearSearch()}),lD(116,`
          `),_p(117,`span`,27),lD(118,`
        `),Rc(),lD(119,`
      `),Rc(),lD(120,`
    `),Rc(),lD(121,`
  `),Rc(),lD(122,`

  `),vi(123,`div`),lD(124,`
    `),vi(125,`label`,28),lD(126,`
      `),vi(127,`input`,29),Ap(`click`,function(){return n.changeExcludeChildWhenFiltering()}),Rc(),lD(128,`
      `),vi(129,`span`,30),lD(130,`
        Exclude Children when Filtering Tree
      `),Rc(),lD(131,`
    `),Rc(),lD(132,`
    `),vi(133,`label`,31),lD(134,`
      `),vi(135,`input`,32),Ap(`click`,function(){return n.changeAutoApproveParentItem()}),Rc(),lD(136,`
      `),vi(137,`span`,33),lD(138,`
        Skip Other Filter Criteria when Parent with Tree is valid
      `),Rc(),lD(139,`
    `),Rc(),lD(140,`
    `),vi(141,`label`,34),lD(142,`
      `),vi(143,`input`,35),Ap(`click`,function(){return n.changeAutoRecalcTotalsOnFilterChange()}),Rc(),lD(144,`
      `),vi(145,`span`,36),lD(146,`
        auto-recalc Tree Data totals on filter changed
      `),Rc(),lD(147,`
    `),Rc(),lD(148,`
  `),Rc(),lD(149,`

  `),vi(150,`angular-slickgrid`,37),Ap(`onAngularGridCreated`,function(o){return n.angularGridReady(o.detail)}),lD(151,`
  `),Rc(),lD(152,`
`),Rc(),lD(153,`
`)),r&2&&(dv(64),bp(`disabled`,n.isRemoveLastInsertedPopSongDisabled),dv(49),Kp(`ngModel`,n.searchString),rE(),dv(14),bp(`checked`,n.isExcludingChildWhenFiltering),dv(8),bp(`checked`,n.isAutoApproveParentItemWhenTreeColumnIsValid),dv(8),bp(`checked`,n.isAutoRecalcTotalsOnFilterChange),dv(7),bp(`columns`,n.columns)(`options`,n.gridOptions)(`datasetHierarchical`,n.datasetHierarchical))},dependencies:[D1,In,Ge,Dn,qt],styles:[`#grid28 .slick-cell{display:inline-flex;align-items:center;gap:4px}#grid28 .avg-total{color:#a365ff}#grid28 .bold{font-weight:700}#grid28 .total-suffix{margin-left:10px}#grid28 .hidden{display:none}#grid28 .mdi-file-pdf-outline{color:#f14668;opacity:.9}#grid28 .mdi-folder,#grid28 .mdi-folder-open{color:orange;opacity:.9}#grid28 .mdi-file-music-outline{color:#3298dc;opacity:.9}#grid28 .mdi-file-excel-outline{color:#1e9f75;opacity:.9}#grid28 .mdi-file-document-outline,#grid28 .mdi-file-question-outline{color:#686868;opacity:.9}#grid28 .display-inline-block{display:inline-block}.width-15px{width:15px}.width-30px{width:30px}.width-45px{width:45px}.width-60px{width:60px}.width-75px{width:75px}.width-90px{width:90px}
`],encapsulation:2})}}return g})();export{Q as Example28Component};