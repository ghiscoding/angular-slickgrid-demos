import{F as Ip,Lt as Wp,O as Gp,Pn as ly,b as Ep,ir as tE,or as uD,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,zt as Xy}from"./chunk-Rd4ToC_L.js";import{C as Qi,W as _W,ct as ip,g as L,ht as nk,it as gR,l as Gn,o as Ft}from"./chunk-DLuyVhQJ.js";import{_ as Vn,d as Fn,g as Te,s as $t}from"./main-CCTR2RMO.js";import{t as Ze}from"./chunk-C5onuIZj.js";var Q=(()=>{class g{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.isExcludingChildWhenFiltering=!1,this.isAutoApproveParentItemWhenTreeColumnIsValid=!0,this.isAutoRecalcTotalsOnFilterChange=!1,this.isRemoveLastInsertedPopSongDisabled=!0,this.searchString=``,this.treeFormatter=(a,r,n,l,o,h)=>{let d=h.getOptions()?.treeDataOptions?.levelPropName||`__treeLevel`;if(n==null||o===void 0)return``;let p=h.getData(),C=p.getItems(),B=p.getIdPropertyName()||`id`,_=p.getIdxById(o[B]),T=this.getFileIcon(n),f=o[d],E=`.`;n=n.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);let k=`<span class="display-inline-block width-${15*f}px"></span>`,w=Gn(5*f),v=`<span class="slick-tree-title">${n}</span>`;if(C[_+1]?.[d]>C[_][d]||C[_].__hasChildren){let I=`<i class="mdi font-22px ${o.__collapsed?`mdi-folder`:`mdi-folder-open`}"></i>`;return o.__collapsed?`<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle collapsed" level="${f}"></span>${I} ${T} ${v}`:`<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle expanded" level="${f}"></span>${I} ${T} ${v}`}else return`<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle" level="${f}"></span>${T} ${v}`}}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:`file`,name:`Files`,field:`file`,width:150,formatter:this.treeFormatter,filterable:!0,sortable:!0},{id:`dateModified`,name:`Date Modified`,field:`dateModified`,formatter:nk.dateIso,type:`dateUtc`,outputType:`dateIso`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`description`,name:`Description`,field:`description`,minWidth:90,filterable:!0,sortable:!0},{id:`size`,name:`Size`,field:`size`,minWidth:90,type:`number`,exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:ip.compoundInputNumber},formatter:(a,r,n,l,o)=>{let h=l.field;if(o?.__treeTotals!==void 0){let S=o[this.gridOptions?.treeDataOptions?.levelPropName||`__treeLevel`],d=o?.__treeTotals?.sum[h],p=o?.__treeTotals?.avg[h];if(p!==void 0&&d!==void 0)return isNaN(d)?``:`<span class="text-primary bold">sum: ${Ft(d,0,2)} MB</span> / <span class="avg-total">avg: ${Ft(p,0,2)} MB</span> <span class="total-suffix">(${S===0?`total`:`sub-total`})</span>`;if(d!==void 0)return isNaN(d)?``:`<span class="text-primary bold">sum: ${Ft(d,0,2)} MB</span> <span class="total-suffix">(${S===0?`total`:`sub-total`})</span>`}return L(n)?`${n} MB`:``}}],this.gridOptions={autoResize:{autoHeight:!1,container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new Ze],enableCellNavigation:!0,enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,treeDataOptions:{columnId:`file`,childrenPropName:`files`,excludeChildrenWhenFilteringTree:this.isExcludingChildWhenFiltering,autoApproveParentItemWhenTreeColumnIsValid:this.isAutoApproveParentItemWhenTreeColumnIsValid,aggregators:[new gR.Avg(`size`),new gR.Sum(`size`)],autoRecalcTotalsOnFilterChange:this.isAutoRecalcTotalsOnFilterChange},headerRowHeight:35,rowHeight:33,showCustomFooter:!0,presets:{treeData:{toggledItems:[{itemId:4,isCollapsed:!0}]}},contextMenu:{iconCollapseAllGroupsCommand:`mdi mdi-arrow-collapse`,iconExpandAllGroupsCommand:`mdi mdi-arrow-expand`,iconClearGroupingCommand:`mdi mdi-close`,iconCopyCellValueCommand:`mdi mdi-content-copy`,iconExportCsvCommand:`mdi mdi-file-document-outline`,iconExportExcelCommand:`mdi mdi-file-excel-outline`,iconExportTextDelimitedCommand:`mdi mdi-file-document-outline`},gridMenu:{iconCssClass:`mdi mdi-menu`,iconClearAllFiltersCommand:`mdi mdi-filter-remove-outline`,iconClearAllSortingCommand:`mdi mdi-swap-vertical`,iconExportCsvCommand:`mdi mdi-file-document-outline`,iconExportExcelCommand:`mdi mdi-file-excel-outline`,iconExportTextDelimitedCommand:`mdi mdi-file-document-outline`,iconRefreshDatasetCommand:`mdi mdi-sync`,iconToggleFilterCommand:`mdi mdi-flip-vertical`,iconTogglePreHeaderCommand:`mdi mdi-flip-vertical`},headerMenu:{iconClearFilterCommand:`mdi mdi mdi-filter-remove-outline`,iconClearSortCommand:`mdi mdi-swap-vertical`,iconSortAscCommand:`mdi mdi-sort-ascending`,iconSortDescCommand:`mdi mdi-flip-v mdi-sort-descending`,iconColumnHideCommand:`mdi mdi-close`}}}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView}changeAutoApproveParentItem(){return this.isAutoApproveParentItemWhenTreeColumnIsValid=!this.isAutoApproveParentItemWhenTreeColumnIsValid,this.gridOptions.treeDataOptions.autoApproveParentItemWhenTreeColumnIsValid=this.isAutoApproveParentItemWhenTreeColumnIsValid,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),!0}changeAutoRecalcTotalsOnFilterChange(){return this.isAutoRecalcTotalsOnFilterChange=!this.isAutoRecalcTotalsOnFilterChange,this.gridOptions.treeDataOptions.autoRecalcTotalsOnFilterChange=this.isAutoRecalcTotalsOnFilterChange,this.angularGrid.slickGrid?.setOptions(this.gridOptions),this.angularGrid.filterService.clearFilters(),this.angularGrid.treeDataService.enableAutoRecalcTotalsFeature(),!0}changeExcludeChildWhenFiltering(){return this.isExcludingChildWhenFiltering=!this.isExcludingChildWhenFiltering,this.gridOptions.treeDataOptions.excludeChildrenWhenFilteringTree=this.isExcludingChildWhenFiltering,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),!0}clearSearch(){this.searchString=``,this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:`file`,searchTerms:[this.searchString]}],!0,!1,!0)}getFileIcon(a){let r=``;return a.includes(`.pdf`)?r=`<span class="mdi icon mdi-file-pdf-outline"></span>`:a.includes(`.txt`)?r=`<span class="mdi icon mdi-file-document-outline"></span>`:a.includes(`.xls`)?r=`<span class="mdi icon mdi-file-excel-outline"></span>`:a.includes(`.mp3`)&&(r=`<span class="mdi icon mdi-file-music-outline"></span>`),r}addNewFile(){let a=this.dataViewObj.getLength()+50,r=[...this.datasetHierarchical],n=Qi(r,l=>l.file===`pop`,`files`);n&&Array.isArray(n.files)&&(n.files.push({id:a,file:`pop-${a}.mp3`,dateModified:new Date,size:a+3}),this.lastInsertedPopSongId=a,this.isRemoveLastInsertedPopSongDisabled=!1,this.datasetHierarchical=r,setTimeout(()=>{let l=this.dataViewObj.getRowById(n.id);this.gridObj.scrollRowIntoView(l+3)},10))}deleteFile(){let a=[...this.datasetHierarchical],r=Qi(this.datasetHierarchical,l=>l.file===`pop`,`files`),n=Qi(this.datasetHierarchical,l=>l.id===this.lastInsertedPopSongId,`files`);if(r&&n){let l=r.files.findIndex(o=>o.id===n.id);l>=0&&(r.files.splice(l,1),this.lastInsertedPopSongId=void 0,this.isRemoveLastInsertedPopSongDisabled=!0,this.datasetHierarchical=a)}}clearFilters(){this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}logHierarchicalStructure(){console.log(`exploded array`,this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log(`flat array`,this.angularGrid.treeDataService.dataset)}mockDataset(){return[{id:24,file:`bucket-list.txt`,dateModified:`2012-03-05T12:44:00.123Z`,size:.5},{id:18,file:`something.txt`,dateModified:`2015-03-03T03:50:00.123Z`,size:90},{id:21,file:`documents`,files:[{id:2,file:`txt`,files:[{id:3,file:`todo.txt`,description:`things to do someday maybe`,dateModified:`2015-05-12T14:50:00.123Z`,size:.7}]},{id:4,file:`pdf`,files:[{id:22,file:`map2.pdf`,dateModified:`2015-07-21T08:22:00.123Z`,size:2.9},{id:5,file:`map.pdf`,dateModified:`2015-05-21T10:22:00.123Z`,size:3.1},{id:6,file:`internet-bill.pdf`,dateModified:`2015-05-12T14:50:00.123Z`,size:1.3},{id:23,file:`phone-bill.pdf`,dateModified:`2015-05-01T07:50:00.123Z`,size:1.5}]},{id:9,file:`misc`,files:[{id:10,file:`warranties.txt`,dateModified:`2015-02-26T16:50:00.123Z`,size:.4}]},{id:7,file:`xls`,files:[{id:8,file:`compilation.xls`,dateModified:`2014-10-02T14:50:00.123Z`,size:2.3}]},{id:55,file:`unclassified.csv`,dateModified:`2015-04-08T03:44:12.333Z`,size:.25},{id:56,file:`unresolved.csv`,dateModified:`2015-04-03T03:21:12.000Z`,size:.79},{id:57,file:`zebra.dll`,dateModified:`2016-12-08T13:22:12.432`,size:1.22}]},{id:11,file:`music`,files:[{id:12,file:`mp3`,files:[{id:16,file:`rock`,files:[{id:17,file:`soft.mp3`,dateModified:`2015-05-13T13:50:00Z`,size:98}]},{id:14,file:`pop`,files:[{id:15,file:`theme.mp3`,description:`Movie Theme Song`,dateModified:`2015-03-01T17:05:00Z`,size:47},{id:25,file:`song.mp3`,description:`it is a song...`,dateModified:`2016-10-04T06:33:44Z`,size:6.3}]},{id:33,file:`other`,files:[]}]}]},{id:26,file:`recipes`,description:`Cake Recipes`,dateModified:`2012-03-05T12:44:00.123Z`,files:[{id:29,file:`cheesecake`,description:`strawberry cheesecake`,dateModified:`2012-04-04T13:52:00.123Z`,size:.2},{id:30,file:`chocolate-cake`,description:`tasty sweet chocolate cake`,dateModified:`2012-05-05T09:22:00.123Z`,size:.2},{id:31,file:`coffee-cake`,description:`chocolate coffee cake`,dateModified:`2012-01-01T08:08:48.123Z`,size:.2}]}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||g)}}static{this.ɵcmp=$E({type:g,selectors:[[`ng-component`]],decls:154,vars:8,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example28.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-md-7`],[`data-test`,`add-item-btn`,1,`btn`,`btn-xs`,`btn-icon`,`btn-primary`,3,`click`],[1,`icon`,`mdi`,`mdi-plus`,`color-white`],[`data-test`,`remove-item-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`,`disabled`],[1,`mdi`,`mdi-minus`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[`data-test`,`clear-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`title`,`console.log of the Flat dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Hierarchical Tree dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`col-md-5`],[1,`input-group`],[`type`,`text`,`data-test`,`search-string`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,`search-string`,3,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-string`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`d-flex`,`align-items-center`,3,`click`],[1,`icon`,`mdi`,`mdi-close-thick`],[`for`,`excludeChildWhenFiltering`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`excludeChildWhenFiltering`,`data-test`,`exclude-child-when-filtering`,3,`click`,`checked`],[`title`,`for example if we filter the word 'pop' and we exclude children, then only the folder 'pop' will show up without any content unless we uncheck this flag`],[`for`,`autoApproveParentItem`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`autoApproveParentItem`,`data-test`,`auto-approve-parent-item`,3,`click`,`checked`],[`title`,`for example in this demo if we filter with 'music' and size '> 70' nothing will show up unless we have this flag enabled
            because none of the files have both criteria at the same time, however the column with the tree 'file' does pass the filter criteria 'music'
            and with this flag we tell the lib to skip any other filter(s) as soon as the with the tree (file in this demo) passes its own filter criteria`],[`for`,`autoRecalcTotalsOnFilterChange`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`autoRecalcTotalsOnFilterChange`,`data-test`,`auto-recalc-totals`,3,`click`,`checked`],[`title`,`Should we recalculate Tree Data Totals (when Aggregators are defined) while filtering? This feature is disabled by default.`],[`gridId`,`grid28`,3,`onAngularGridCreated`,`columns`,`options`,`datasetHierarchical`]],template:function(r,n){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 28: Tree Data with Aggregators
    `),yi(4,`small`),Ip(5,`span`,1),sD(6,` (from a Hierarchical Dataset -
      `),yi(7,`a`,2),sD(8,`Wiki`),Rc(),sD(9,`)`),Rc(),sD(10,`
    `),yi(11,`span`,3),sD(12,`
      `),yi(13,`a`,4),sD(14,`
        `),Ip(15,`span`,5),sD(16,` code
      `),Rc(),sD(17,`
    `),Rc(),sD(18,`
    `),yi(19,`button`,6),bp(`click`,function(){return n.toggleSubTitle()}),sD(20,`
      `),Ip(21,`span`,7),sD(22,`
    `),Rc(),sD(23,`
  `),Rc(),sD(24,`

  `),yi(25,`div`,8),sD(26,`
    `),yi(27,`ul`),sD(28,`
      `),yi(29,`li`),sD(30,`
        `),yi(31,`b`),sD(32,`NOTE #1:`),Rc(),sD(33,` The grid will automatically sort Ascending with the column that has the Tree Data, you could add a "sortByFieldId"
        in your column "treeData" option if you wish to sort on a different column
      `),Rc(),sD(34,`
      `),yi(35,`li`),sD(36,`
        `),yi(37,`b`),sD(38,`NOTE #2:`),Rc(),sD(39,` Tree Totals are only calculated once and are `),yi(40,`b`),sD(41,`NOT`),Rc(),sD(42,` recalculated while filtering data, if you do want that
        feature then you will need to enable `),yi(43,`code`),sD(44,`autoRecalcTotalsOnFilterChange`),Rc(),sD(45,` `),yi(46,`i`),sD(47,`(see checkbox below)`),Rc(),sD(48,`
      `),Rc(),sD(49,`
    `),Rc(),sD(50,`
  `),Rc(),sD(51,`

  `),yi(52,`div`,9),sD(53,`
    `),yi(54,`div`,10),sD(55,`
      `),yi(56,`button`,11),bp(`click`,function(){return n.addNewFile()}),sD(57,`
        `),Ip(58,`span`,12),sD(59,`
        `),yi(60,`span`),sD(61,`Add New Pop Song`),Rc(),sD(62,`
      `),Rc(),sD(63,`
      `),yi(64,`button`,13),bp(`click`,function(){return n.deleteFile()}),sD(65,`
        `),Ip(66,`span`,14),sD(67,`
        `),yi(68,`span`),sD(69,`Remove Last Inserted Pop Song`),Rc(),sD(70,`
      `),Rc(),sD(71,`
      `),yi(72,`button`,15),bp(`click`,function(){return n.collapseAll()}),sD(73,`
        `),Ip(74,`span`,16),sD(75,`
        `),yi(76,`span`),sD(77,`Collapse All`),Rc(),sD(78,`
      `),Rc(),sD(79,`
      `),yi(80,`button`,17),bp(`click`,function(){return n.expandAll()}),sD(81,`
        `),Ip(82,`span`,18),sD(83,`
        `),yi(84,`span`),sD(85,`Expand All`),Rc(),sD(86,`
      `),Rc(),sD(87,`
      `),yi(88,`button`,19),bp(`click`,function(){return n.clearFilters()}),sD(89,`
        `),Ip(90,`span`,20),sD(91,`
        `),yi(92,`span`),sD(93,`Clear Filters`),Rc(),sD(94,`
      `),Rc(),sD(95,`
      `),yi(96,`button`,21),bp(`click`,function(){return n.logFlatStructure()}),sD(97,`
        `),yi(98,`span`),sD(99,`Log Flat Structure`),Rc(),sD(100,`
      `),Rc(),sD(101,`
      `),yi(102,`button`,22),bp(`click`,function(){return n.logHierarchicalStructure()}),sD(103,`
        `),yi(104,`span`),sD(105,`Log Hierarchical Structure`),Rc(),sD(106,`
      `),Rc(),sD(107,`
    `),Rc(),sD(108,`

    `),yi(109,`div`,23),sD(110,`
      `),yi(111,`div`,24),sD(112,`
        `),yi(113,`input`,25),Wp(`ngModelChange`,function(o){return uD(n.searchString,o)||(n.searchString=o),o}),bp(`ngModelChange`,function(){return n.searchStringChanged()}),Rc(),Xy(),sD(114,`
        `),yi(115,`button`,26),bp(`click`,function(){return n.clearSearch()}),sD(116,`
          `),Ip(117,`span`,27),sD(118,`
        `),Rc(),sD(119,`
      `),Rc(),sD(120,`
    `),Rc(),sD(121,`
  `),Rc(),sD(122,`

  `),yi(123,`div`),sD(124,`
    `),yi(125,`label`,28),sD(126,`
      `),yi(127,`input`,29),bp(`click`,function(){return n.changeExcludeChildWhenFiltering()}),Rc(),sD(128,`
      `),yi(129,`span`,30),sD(130,`
        Exclude Children when Filtering Tree
      `),Rc(),sD(131,`
    `),Rc(),sD(132,`
    `),yi(133,`label`,31),sD(134,`
      `),yi(135,`input`,32),bp(`click`,function(){return n.changeAutoApproveParentItem()}),Rc(),sD(136,`
      `),yi(137,`span`,33),sD(138,`
        Skip Other Filter Criteria when Parent with Tree is valid
      `),Rc(),sD(139,`
    `),Rc(),sD(140,`
    `),yi(141,`label`,34),sD(142,`
      `),yi(143,`input`,35),bp(`click`,function(){return n.changeAutoRecalcTotalsOnFilterChange()}),Rc(),sD(144,`
      `),yi(145,`span`,36),sD(146,`
        auto-recalc Tree Data totals on filter changed
      `),Rc(),sD(147,`
    `),Rc(),sD(148,`
  `),Rc(),sD(149,`

  `),yi(150,`angular-slickgrid`,37),bp(`onAngularGridCreated`,function(o){return n.angularGridReady(o.detail)}),sD(151,`
  `),Rc(),sD(152,`
`),Rc(),sD(153,`
`)),r&2&&(ly(64),Ep(`disabled`,n.isRemoveLastInsertedPopSongDisabled),ly(49),Gp(`ngModel`,n.searchString),tE(),ly(14),Ep(`checked`,n.isExcludingChildWhenFiltering),ly(8),Ep(`checked`,n.isAutoApproveParentItemWhenTreeColumnIsValid),ly(8),Ep(`checked`,n.isAutoRecalcTotalsOnFilterChange),ly(7),Ep(`columns`,n.columns)(`options`,n.gridOptions)(`datasetHierarchical`,n.datasetHierarchical))},dependencies:[_W,Fn,Te,Vn,$t],styles:[`#grid28 .slick-cell{display:inline-flex;align-items:center;gap:4px}#grid28 .avg-total{color:#a365ff}#grid28 .bold{font-weight:700}#grid28 .total-suffix{margin-left:10px}#grid28 .hidden{display:none}#grid28 .mdi-file-pdf-outline{color:#f14668;opacity:.9}#grid28 .mdi-folder,#grid28 .mdi-folder-open{color:orange;opacity:.9}#grid28 .mdi-file-music-outline{color:#3298dc;opacity:.9}#grid28 .mdi-file-excel-outline{color:#1e9f75;opacity:.9}#grid28 .mdi-file-document-outline,#grid28 .mdi-file-question-outline{color:#686868;opacity:.9}#grid28 .display-inline-block{display:inline-block}.width-15px{width:15px}.width-30px{width:30px}.width-45px{width:45px}.width-60px{width:60px}.width-75px{width:75px}.width-90px{width:90px}
`],encapsulation:2})}}return g})();export{Q as Example28Component};