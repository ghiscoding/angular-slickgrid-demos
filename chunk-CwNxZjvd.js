import{Dt as UE,En as iD,H as Jy,Kn as mp,Rn as lD,Tt as Tp,Wn as mi,hr as vp,kt as Up,ln as cy,o as Ac,pn as eE,r as $p}from"./chunk-06EGdSfW.js";import{H as _W,S as Qi,g as L,mt as nk,rt as gR,s as Ft,st as ip,u as Gn}from"./chunk-CAMk6vEo.js";import{_ as Vn,d as Fn,g as Te,s as $t}from"./main-ZP4IXK6Z.js";import{t as Ze}from"./chunk-CVoct-s8.js";var Q=(()=>{class g{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.isExcludingChildWhenFiltering=!1,this.isAutoApproveParentItemWhenTreeColumnIsValid=!0,this.isAutoRecalcTotalsOnFilterChange=!1,this.isRemoveLastInsertedPopSongDisabled=!0,this.searchString=``,this.treeFormatter=(a,r,n,l,o,h)=>{let d=h.getOptions()?.treeDataOptions?.levelPropName||`__treeLevel`;if(n==null||o===void 0)return``;let p=h.getData(),C=p.getItems(),B=p.getIdPropertyName()||`id`,_=p.getIdxById(o[B]),T=this.getFileIcon(n),f=o[d],E=`.`;n=n.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);let k=`<span class="display-inline-block width-${15*f}px"></span>`,w=Gn(5*f),v=`<span class="slick-tree-title">${n}</span>`;if(C[_+1]?.[d]>C[_][d]||C[_].__hasChildren){let I=`<i class="mdi font-22px ${o.__collapsed?`mdi-folder`:`mdi-folder-open`}"></i>`;return o.__collapsed?`<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle collapsed" level="${f}"></span>${I} ${T} ${v}`:`<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle expanded" level="${f}"></span>${I} ${T} ${v}`}else return`<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle" level="${f}"></span>${T} ${v}`}}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:`file`,name:`Files`,field:`file`,width:150,formatter:this.treeFormatter,filterable:!0,sortable:!0},{id:`dateModified`,name:`Date Modified`,field:`dateModified`,formatter:nk.dateIso,type:`dateUtc`,outputType:`dateIso`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`description`,name:`Description`,field:`description`,minWidth:90,filterable:!0,sortable:!0},{id:`size`,name:`Size`,field:`size`,minWidth:90,type:`number`,exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:ip.compoundInputNumber},formatter:(a,r,n,l,o)=>{let h=l.field;if(o?.__treeTotals!==void 0){let S=o[this.gridOptions?.treeDataOptions?.levelPropName||`__treeLevel`],d=o?.__treeTotals?.sum[h],p=o?.__treeTotals?.avg[h];if(p!==void 0&&d!==void 0)return isNaN(d)?``:`<span class="text-primary bold">sum: ${Ft(d,0,2)} MB</span> / <span class="avg-total">avg: ${Ft(p,0,2)} MB</span> <span class="total-suffix">(${S===0?`total`:`sub-total`})</span>`;if(d!==void 0)return isNaN(d)?``:`<span class="text-primary bold">sum: ${Ft(d,0,2)} MB</span> <span class="total-suffix">(${S===0?`total`:`sub-total`})</span>`}return L(n)?`${n} MB`:``}}],this.gridOptions={autoResize:{autoHeight:!1,container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new Ze],enableCellNavigation:!0,enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,treeDataOptions:{columnId:`file`,childrenPropName:`files`,excludeChildrenWhenFilteringTree:this.isExcludingChildWhenFiltering,autoApproveParentItemWhenTreeColumnIsValid:this.isAutoApproveParentItemWhenTreeColumnIsValid,aggregators:[new gR.Avg(`size`),new gR.Sum(`size`)],autoRecalcTotalsOnFilterChange:this.isAutoRecalcTotalsOnFilterChange},headerRowHeight:35,rowHeight:33,showCustomFooter:!0,presets:{treeData:{toggledItems:[{itemId:4,isCollapsed:!0}]}},contextMenu:{iconCollapseAllGroupsCommand:`mdi mdi-arrow-collapse`,iconExpandAllGroupsCommand:`mdi mdi-arrow-expand`,iconClearGroupingCommand:`mdi mdi-close`,iconCopyCellValueCommand:`mdi mdi-content-copy`,iconExportCsvCommand:`mdi mdi-file-document-outline`,iconExportExcelCommand:`mdi mdi-file-excel-outline`,iconExportTextDelimitedCommand:`mdi mdi-file-document-outline`},gridMenu:{iconCssClass:`mdi mdi-menu`,iconClearAllFiltersCommand:`mdi mdi-filter-remove-outline`,iconClearAllSortingCommand:`mdi mdi-swap-vertical`,iconExportCsvCommand:`mdi mdi-file-document-outline`,iconExportExcelCommand:`mdi mdi-file-excel-outline`,iconExportTextDelimitedCommand:`mdi mdi-file-document-outline`,iconRefreshDatasetCommand:`mdi mdi-sync`,iconToggleFilterCommand:`mdi mdi-flip-vertical`,iconTogglePreHeaderCommand:`mdi mdi-flip-vertical`},headerMenu:{iconClearFilterCommand:`mdi mdi mdi-filter-remove-outline`,iconClearSortCommand:`mdi mdi-swap-vertical`,iconSortAscCommand:`mdi mdi-sort-ascending`,iconSortDescCommand:`mdi mdi-flip-v mdi-sort-descending`,iconColumnHideCommand:`mdi mdi-close`}}}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView}changeAutoApproveParentItem(){return this.isAutoApproveParentItemWhenTreeColumnIsValid=!this.isAutoApproveParentItemWhenTreeColumnIsValid,this.gridOptions.treeDataOptions.autoApproveParentItemWhenTreeColumnIsValid=this.isAutoApproveParentItemWhenTreeColumnIsValid,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),!0}changeAutoRecalcTotalsOnFilterChange(){return this.isAutoRecalcTotalsOnFilterChange=!this.isAutoRecalcTotalsOnFilterChange,this.gridOptions.treeDataOptions.autoRecalcTotalsOnFilterChange=this.isAutoRecalcTotalsOnFilterChange,this.angularGrid.slickGrid?.setOptions(this.gridOptions),this.angularGrid.filterService.clearFilters(),this.angularGrid.treeDataService.enableAutoRecalcTotalsFeature(),!0}changeExcludeChildWhenFiltering(){return this.isExcludingChildWhenFiltering=!this.isExcludingChildWhenFiltering,this.gridOptions.treeDataOptions.excludeChildrenWhenFilteringTree=this.isExcludingChildWhenFiltering,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),!0}clearSearch(){this.searchString=``,this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:`file`,searchTerms:[this.searchString]}],!0,!1,!0)}getFileIcon(a){let r=``;return a.includes(`.pdf`)?r=`<span class="mdi icon mdi-file-pdf-outline"></span>`:a.includes(`.txt`)?r=`<span class="mdi icon mdi-file-document-outline"></span>`:a.includes(`.xls`)?r=`<span class="mdi icon mdi-file-excel-outline"></span>`:a.includes(`.mp3`)&&(r=`<span class="mdi icon mdi-file-music-outline"></span>`),r}addNewFile(){let a=this.dataViewObj.getLength()+50,r=[...this.datasetHierarchical],n=Qi(r,l=>l.file===`pop`,`files`);n&&Array.isArray(n.files)&&(n.files.push({id:a,file:`pop-${a}.mp3`,dateModified:new Date,size:a+3}),this.lastInsertedPopSongId=a,this.isRemoveLastInsertedPopSongDisabled=!1,this.datasetHierarchical=r,setTimeout(()=>{let l=this.dataViewObj.getRowById(n.id);this.gridObj.scrollRowIntoView(l+3)},10))}deleteFile(){let a=[...this.datasetHierarchical],r=Qi(this.datasetHierarchical,l=>l.file===`pop`,`files`),n=Qi(this.datasetHierarchical,l=>l.id===this.lastInsertedPopSongId,`files`);if(r&&n){let l=r.files.findIndex(o=>o.id===n.id);l>=0&&(r.files.splice(l,1),this.lastInsertedPopSongId=void 0,this.isRemoveLastInsertedPopSongDisabled=!0,this.datasetHierarchical=a)}}clearFilters(){this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}logHierarchicalStructure(){console.log(`exploded array`,this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log(`flat array`,this.angularGrid.treeDataService.dataset)}mockDataset(){return[{id:24,file:`bucket-list.txt`,dateModified:`2012-03-05T12:44:00.123Z`,size:.5},{id:18,file:`something.txt`,dateModified:`2015-03-03T03:50:00.123Z`,size:90},{id:21,file:`documents`,files:[{id:2,file:`txt`,files:[{id:3,file:`todo.txt`,description:`things to do someday maybe`,dateModified:`2015-05-12T14:50:00.123Z`,size:.7}]},{id:4,file:`pdf`,files:[{id:22,file:`map2.pdf`,dateModified:`2015-07-21T08:22:00.123Z`,size:2.9},{id:5,file:`map.pdf`,dateModified:`2015-05-21T10:22:00.123Z`,size:3.1},{id:6,file:`internet-bill.pdf`,dateModified:`2015-05-12T14:50:00.123Z`,size:1.3},{id:23,file:`phone-bill.pdf`,dateModified:`2015-05-01T07:50:00.123Z`,size:1.5}]},{id:9,file:`misc`,files:[{id:10,file:`warranties.txt`,dateModified:`2015-02-26T16:50:00.123Z`,size:.4}]},{id:7,file:`xls`,files:[{id:8,file:`compilation.xls`,dateModified:`2014-10-02T14:50:00.123Z`,size:2.3}]},{id:55,file:`unclassified.csv`,dateModified:`2015-04-08T03:44:12.333Z`,size:.25},{id:56,file:`unresolved.csv`,dateModified:`2015-04-03T03:21:12.000Z`,size:.79},{id:57,file:`zebra.dll`,dateModified:`2016-12-08T13:22:12.432`,size:1.22}]},{id:11,file:`music`,files:[{id:12,file:`mp3`,files:[{id:16,file:`rock`,files:[{id:17,file:`soft.mp3`,dateModified:`2015-05-13T13:50:00Z`,size:98}]},{id:14,file:`pop`,files:[{id:15,file:`theme.mp3`,description:`Movie Theme Song`,dateModified:`2015-03-01T17:05:00Z`,size:47},{id:25,file:`song.mp3`,description:`it is a song...`,dateModified:`2016-10-04T06:33:44Z`,size:6.3}]},{id:33,file:`other`,files:[]}]}]},{id:26,file:`recipes`,description:`Cake Recipes`,dateModified:`2012-03-05T12:44:00.123Z`,files:[{id:29,file:`cheesecake`,description:`strawberry cheesecake`,dateModified:`2012-04-04T13:52:00.123Z`,size:.2},{id:30,file:`chocolate-cake`,description:`tasty sweet chocolate cake`,dateModified:`2012-05-05T09:22:00.123Z`,size:.2},{id:31,file:`coffee-cake`,description:`chocolate coffee cake`,dateModified:`2012-01-01T08:08:48.123Z`,size:.2}]}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||g)}}static{this.ɵcmp=UE({type:g,selectors:[[`ng-component`]],decls:154,vars:8,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example28.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-md-7`],[`data-test`,`add-item-btn`,1,`btn`,`btn-xs`,`btn-icon`,`btn-primary`,3,`click`],[1,`icon`,`mdi`,`mdi-plus`,`color-white`],[`data-test`,`remove-item-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`,`disabled`],[1,`mdi`,`mdi-minus`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[`data-test`,`clear-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`title`,`console.log of the Flat dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`title`,`console.log of the Hierarchical Tree dataset`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`col-md-5`],[1,`input-group`],[`type`,`text`,`data-test`,`search-string`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,`search-string`,3,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-string`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`d-flex`,`align-items-center`,3,`click`],[1,`icon`,`mdi`,`mdi-close-thick`],[`for`,`excludeChildWhenFiltering`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`excludeChildWhenFiltering`,`data-test`,`exclude-child-when-filtering`,3,`click`,`checked`],[`title`,`for example if we filter the word 'pop' and we exclude children, then only the folder 'pop' will show up without any content unless we uncheck this flag`],[`for`,`autoApproveParentItem`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`autoApproveParentItem`,`data-test`,`auto-approve-parent-item`,3,`click`,`checked`],[`title`,`for example in this demo if we filter with 'music' and size '> 70' nothing will show up unless we have this flag enabled
            because none of the files have both criteria at the same time, however the column with the tree 'file' does pass the filter criteria 'music'
            and with this flag we tell the lib to skip any other filter(s) as soon as the with the tree (file in this demo) passes its own filter criteria`],[`for`,`autoRecalcTotalsOnFilterChange`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`autoRecalcTotalsOnFilterChange`,`data-test`,`auto-recalc-totals`,3,`click`,`checked`],[`title`,`Should we recalculate Tree Data Totals (when Aggregators are defined) while filtering? This feature is disabled by default.`],[`gridId`,`grid28`,3,`onAngularGridCreated`,`columns`,`options`,`datasetHierarchical`]],template:function(r,n){r&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 28: Tree Data with Aggregators
    `),mi(4,`small`),vp(5,`span`,1),iD(6,` (from a Hierarchical Dataset -
      `),mi(7,`a`,2),iD(8,`Wiki`),Ac(),iD(9,`)`),Ac(),iD(10,`
    `),mi(11,`span`,3),iD(12,`
      `),mi(13,`a`,4),iD(14,`
        `),vp(15,`span`,5),iD(16,` code
      `),Ac(),iD(17,`
    `),Ac(),iD(18,`
    `),mi(19,`button`,6),Tp(`click`,function(){return n.toggleSubTitle()}),iD(20,`
      `),vp(21,`span`,7),iD(22,`
    `),Ac(),iD(23,`
  `),Ac(),iD(24,`

  `),mi(25,`div`,8),iD(26,`
    `),mi(27,`ul`),iD(28,`
      `),mi(29,`li`),iD(30,`
        `),mi(31,`b`),iD(32,`NOTE #1:`),Ac(),iD(33,` The grid will automatically sort Ascending with the column that has the Tree Data, you could add a "sortByFieldId"
        in your column "treeData" option if you wish to sort on a different column
      `),Ac(),iD(34,`
      `),mi(35,`li`),iD(36,`
        `),mi(37,`b`),iD(38,`NOTE #2:`),Ac(),iD(39,` Tree Totals are only calculated once and are `),mi(40,`b`),iD(41,`NOT`),Ac(),iD(42,` recalculated while filtering data, if you do want that
        feature then you will need to enable `),mi(43,`code`),iD(44,`autoRecalcTotalsOnFilterChange`),Ac(),iD(45,` `),mi(46,`i`),iD(47,`(see checkbox below)`),Ac(),iD(48,`
      `),Ac(),iD(49,`
    `),Ac(),iD(50,`
  `),Ac(),iD(51,`

  `),mi(52,`div`,9),iD(53,`
    `),mi(54,`div`,10),iD(55,`
      `),mi(56,`button`,11),Tp(`click`,function(){return n.addNewFile()}),iD(57,`
        `),vp(58,`span`,12),iD(59,`
        `),mi(60,`span`),iD(61,`Add New Pop Song`),Ac(),iD(62,`
      `),Ac(),iD(63,`
      `),mi(64,`button`,13),Tp(`click`,function(){return n.deleteFile()}),iD(65,`
        `),vp(66,`span`,14),iD(67,`
        `),mi(68,`span`),iD(69,`Remove Last Inserted Pop Song`),Ac(),iD(70,`
      `),Ac(),iD(71,`
      `),mi(72,`button`,15),Tp(`click`,function(){return n.collapseAll()}),iD(73,`
        `),vp(74,`span`,16),iD(75,`
        `),mi(76,`span`),iD(77,`Collapse All`),Ac(),iD(78,`
      `),Ac(),iD(79,`
      `),mi(80,`button`,17),Tp(`click`,function(){return n.expandAll()}),iD(81,`
        `),vp(82,`span`,18),iD(83,`
        `),mi(84,`span`),iD(85,`Expand All`),Ac(),iD(86,`
      `),Ac(),iD(87,`
      `),mi(88,`button`,19),Tp(`click`,function(){return n.clearFilters()}),iD(89,`
        `),vp(90,`span`,20),iD(91,`
        `),mi(92,`span`),iD(93,`Clear Filters`),Ac(),iD(94,`
      `),Ac(),iD(95,`
      `),mi(96,`button`,21),Tp(`click`,function(){return n.logFlatStructure()}),iD(97,`
        `),mi(98,`span`),iD(99,`Log Flat Structure`),Ac(),iD(100,`
      `),Ac(),iD(101,`
      `),mi(102,`button`,22),Tp(`click`,function(){return n.logHierarchicalStructure()}),iD(103,`
        `),mi(104,`span`),iD(105,`Log Hierarchical Structure`),Ac(),iD(106,`
      `),Ac(),iD(107,`
    `),Ac(),iD(108,`

    `),mi(109,`div`,23),iD(110,`
      `),mi(111,`div`,24),iD(112,`
        `),mi(113,`input`,25),$p(`ngModelChange`,function(o){return lD(n.searchString,o)||(n.searchString=o),o}),Tp(`ngModelChange`,function(){return n.searchStringChanged()}),Ac(),Jy(),iD(114,`
        `),mi(115,`button`,26),Tp(`click`,function(){return n.clearSearch()}),iD(116,`
          `),vp(117,`span`,27),iD(118,`
        `),Ac(),iD(119,`
      `),Ac(),iD(120,`
    `),Ac(),iD(121,`
  `),Ac(),iD(122,`

  `),mi(123,`div`),iD(124,`
    `),mi(125,`label`,28),iD(126,`
      `),mi(127,`input`,29),Tp(`click`,function(){return n.changeExcludeChildWhenFiltering()}),Ac(),iD(128,`
      `),mi(129,`span`,30),iD(130,`
        Exclude Children when Filtering Tree
      `),Ac(),iD(131,`
    `),Ac(),iD(132,`
    `),mi(133,`label`,31),iD(134,`
      `),mi(135,`input`,32),Tp(`click`,function(){return n.changeAutoApproveParentItem()}),Ac(),iD(136,`
      `),mi(137,`span`,33),iD(138,`
        Skip Other Filter Criteria when Parent with Tree is valid
      `),Ac(),iD(139,`
    `),Ac(),iD(140,`
    `),mi(141,`label`,34),iD(142,`
      `),mi(143,`input`,35),Tp(`click`,function(){return n.changeAutoRecalcTotalsOnFilterChange()}),Ac(),iD(144,`
      `),mi(145,`span`,36),iD(146,`
        auto-recalc Tree Data totals on filter changed
      `),Ac(),iD(147,`
    `),Ac(),iD(148,`
  `),Ac(),iD(149,`

  `),mi(150,`angular-slickgrid`,37),Tp(`onAngularGridCreated`,function(o){return n.angularGridReady(o.detail)}),iD(151,`
  `),Ac(),iD(152,`
`),Ac(),iD(153,`
`)),r&2&&(cy(64),mp(`disabled`,n.isRemoveLastInsertedPopSongDisabled),cy(49),Up(`ngModel`,n.searchString),eE(),cy(14),mp(`checked`,n.isExcludingChildWhenFiltering),cy(8),mp(`checked`,n.isAutoApproveParentItemWhenTreeColumnIsValid),cy(8),mp(`checked`,n.isAutoRecalcTotalsOnFilterChange),cy(7),mp(`columns`,n.columns)(`options`,n.gridOptions)(`datasetHierarchical`,n.datasetHierarchical))},dependencies:[_W,Fn,Te,Vn,$t],styles:[`#grid28 .slick-cell{display:inline-flex;align-items:center;gap:4px}#grid28 .avg-total{color:#a365ff}#grid28 .bold{font-weight:700}#grid28 .total-suffix{margin-left:10px}#grid28 .hidden{display:none}#grid28 .mdi-file-pdf-outline{color:#f14668;opacity:.9}#grid28 .mdi-folder,#grid28 .mdi-folder-open{color:orange;opacity:.9}#grid28 .mdi-file-music-outline{color:#3298dc;opacity:.9}#grid28 .mdi-file-excel-outline{color:#1e9f75;opacity:.9}#grid28 .mdi-file-document-outline,#grid28 .mdi-file-question-outline{color:#686868;opacity:.9}#grid28 .display-inline-block{display:inline-block}.width-15px{width:15px}.width-30px{width:30px}.width-45px{width:45px}.width-60px{width:60px}.width-75px{width:75px}.width-90px{width:90px}
`],encapsulation:2})}}return g})();export{Q as Example28Component};