import{b as M,c as z,f as P,o as W}from"./chunk-BBW77BDN.js";import{b as N}from"./chunk-BNUP54LE.js";import{Da as H,E as G,X as b,Y as S,wa as v,xa as y,y as R,za as $}from"./chunk-V3K67AAF.js";import{Jb as e,Oa as I,Ob as A,Pb as D,Qb as O,hb as u,ib as t,jb as i,kb as c,ub as s,za as m}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var U=(()=>{class x{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.isExcludingChildWhenFiltering=!1,this.isAutoApproveParentItemWhenTreeColumnIsValid=!0,this.isAutoRecalcTotalsOnFilterChange=!1,this.isRemoveLastInsertedPopSongDisabled=!0,this.searchString="",this.treeFormatter=(a,r,n,l,o,h)=>{let f=h.getOptions(),d=f.treeDataOptions&&f.treeDataOptions.levelPropName||"__treeLevel";if(n==null||o===void 0)return"";let p=h.getData(),C=p.getItems(),V=p.getIdPropertyName()||"id",_=p.getIdxById(o[V]),T=this.getFileIcon(n),g=o[d],E=".";n=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");let w=`<span style="display:inline-block; width:${15*g}px;"></span>`,k=R(5*g);if(C[_+1]?.[d]>C[_][d]||C[_].__hasChildren){let F=`<span class="mdi icon ${o.__collapsed?"mdi-folder":"mdi-folder-open"}"></span>`;return o.__collapsed?`<span class="hidden">${E}</span>${w}${k} <span class="slick-group-toggle collapsed" level="${g}"></span>${F} ${T} ${n}`:`<span class="hidden">${E}</span>${w}${k} <span class="slick-group-toggle expanded" level="${g}"></span>${F} ${T} ${n}`}else return`<span class="hidden">${E}</span>${w}${k} <span class="slick-group-toggle" level="${g}"></span>${T} ${n}`}}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:"file",name:"Files",field:"file",width:150,formatter:this.treeFormatter,filterable:!0,sortable:!0},{id:"dateModified",name:"Date Modified",field:"dateModified",formatter:$.dateIso,type:"dateUtc",outputType:"dateIso",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:v.compoundDate}},{id:"description",name:"Description",field:"description",minWidth:90,filterable:!0,sortable:!0},{id:"size",name:"Size",field:"size",minWidth:90,type:"number",exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:v.compoundInputNumber},formatter:(a,r,n,l,o)=>{let h=l.field;if(o?.__treeTotals!==void 0){let f=o[this.gridOptions?.treeDataOptions?.levelPropName||"__treeLevel"],d=o?.__treeTotals?.sum[h],p=o?.__treeTotals?.avg[h];if(p!==void 0&&d!==void 0)return isNaN(d)?"":`<span class="text-primary bold">sum: ${S(d,0,2)} MB</span> / <span class="avg-total">avg: ${S(p,0,2)} MB</span> <span class="total-suffix">(${f===0?"total":"sub-total"})</span>`;if(d!==void 0)return isNaN(d)?"":`<span class="text-primary bold">sum: ${S(d,0,2)} MB</span> <span class="total-suffix">(${f===0?"total":"sub-total"})</span>`}return G(n)?`${n} MB`:""}}],this.gridOptions={autoResize:{autoHeight:!1,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new N],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,treeDataOptions:{columnId:"file",childrenPropName:"files",excludeChildrenWhenFilteringTree:this.isExcludingChildWhenFiltering,autoApproveParentItemWhenTreeColumnIsValid:this.isAutoApproveParentItemWhenTreeColumnIsValid,aggregators:[new y.Avg("size"),new y.Sum("size")],autoRecalcTotalsOnFilterChange:this.isAutoRecalcTotalsOnFilterChange},headerRowHeight:35,rowHeight:33,showCustomFooter:!0,presets:{treeData:{toggledItems:[{itemId:4,isCollapsed:!0}]}},contextMenu:{iconCollapseAllGroupsCommand:"mdi mdi-arrow-collapse",iconExpandAllGroupsCommand:"mdi mdi-arrow-expand",iconClearGroupingCommand:"mdi mdi-close",iconCopyCellValueCommand:"mdi mdi-content-copy",iconExportCsvCommand:"mdi mdi-download",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-download"},gridMenu:{iconCssClass:"mdi mdi-menu",iconClearAllFiltersCommand:"mdi mdi-filter-remove-outline",iconClearAllSortingCommand:"mdi mdi-swap-vertical",iconExportCsvCommand:"mdi mdi-download",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-download",iconRefreshDatasetCommand:"mdi mdi-sync",iconToggleFilterCommand:"mdi mdi-flip-vertical",iconTogglePreHeaderCommand:"mdi mdi-flip-vertical"},headerMenu:{iconClearFilterCommand:"mdi mdi mdi-filter-remove-outline",iconClearSortCommand:"mdi mdi-swap-vertical",iconSortAscCommand:"mdi mdi-sort-ascending",iconSortDescCommand:"mdi mdi-flip-v mdi-sort-descending",iconColumnHideCommand:"mdi mdi-close"}}}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView}changeAutoApproveParentItem(){return this.isAutoApproveParentItemWhenTreeColumnIsValid=!this.isAutoApproveParentItemWhenTreeColumnIsValid,this.gridOptions.treeDataOptions.autoApproveParentItemWhenTreeColumnIsValid=this.isAutoApproveParentItemWhenTreeColumnIsValid,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),!0}changeAutoRecalcTotalsOnFilterChange(){return this.isAutoRecalcTotalsOnFilterChange=!this.isAutoRecalcTotalsOnFilterChange,this.gridOptions.treeDataOptions.autoRecalcTotalsOnFilterChange=this.isAutoRecalcTotalsOnFilterChange,this.angularGrid.slickGrid?.setOptions(this.gridOptions),this.angularGrid.filterService.clearFilters(),this.angularGrid.treeDataService.enableAutoRecalcTotalsFeature(),!0}changeExcludeChildWhenFiltering(){return this.isExcludingChildWhenFiltering=!this.isExcludingChildWhenFiltering,this.gridOptions.treeDataOptions.excludeChildrenWhenFilteringTree=this.isExcludingChildWhenFiltering,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),!0}clearSearch(){this.searchString="",this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:"file",searchTerms:[this.searchString]}],!0,!1,!0)}getFileIcon(a){let r="";return a.includes(".pdf")?r='<span class="mdi icon mdi-file-pdf-outline"></span>':a.includes(".txt")?r='<span class="mdi icon mdi-file-document-outline"></span>':a.includes(".xls")?r='<span class="mdi icon mdi-file-excel-outline"></span>':a.includes(".mp3")&&(r='<span class="mdi icon mdi-file-music-outline"></span>'),r}addNewFile(){let a=this.dataViewObj.getLength()+50,r=[...this.datasetHierarchical],n=b(r,l=>l.file==="pop","files");n&&Array.isArray(n.files)&&(n.files.push({id:a,file:`pop-${a}.mp3`,dateModified:new Date,size:a+3}),this.lastInsertedPopSongId=a,this.isRemoveLastInsertedPopSongDisabled=!1,this.datasetHierarchical=r,setTimeout(()=>{let l=this.dataViewObj.getRowById(n.id);this.gridObj.scrollRowIntoView(l+3)},10))}deleteFile(){let a=[...this.datasetHierarchical],r=b(this.datasetHierarchical,l=>l.file==="pop","files"),n=b(this.datasetHierarchical,l=>l.id===this.lastInsertedPopSongId,"files");if(r&&n){let l=r.files.findIndex(o=>o.id===n.id);l>=0&&(r.files.splice(l,1),this.lastInsertedPopSongId=void 0,this.isRemoveLastInsertedPopSongDisabled=!0,this.datasetHierarchical=a)}}clearFilters(){this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}logHierarchicalStructure(){console.log("exploded array",this.angularGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log("flat array",this.angularGrid.treeDataService.dataset)}mockDataset(){return[{id:24,file:"bucket-list.txt",dateModified:"2012-03-05T12:44:00.123Z",size:.5},{id:18,file:"something.txt",dateModified:"2015-03-03T03:50:00.123Z",size:90},{id:21,file:"documents",files:[{id:2,file:"txt",files:[{id:3,file:"todo.txt",description:"things to do someday maybe",dateModified:"2015-05-12T14:50:00.123Z",size:.7}]},{id:4,file:"pdf",files:[{id:22,file:"map2.pdf",dateModified:"2015-07-21T08:22:00.123Z",size:2.9},{id:5,file:"map.pdf",dateModified:"2015-05-21T10:22:00.123Z",size:3.1},{id:6,file:"internet-bill.pdf",dateModified:"2015-05-12T14:50:00.123Z",size:1.3},{id:23,file:"phone-bill.pdf",dateModified:"2015-05-01T07:50:00.123Z",size:1.5}]},{id:9,file:"misc",files:[{id:10,file:"warranties.txt",dateModified:"2015-02-26T16:50:00.123Z",size:.4}]},{id:7,file:"xls",files:[{id:8,file:"compilation.xls",dateModified:"2014-10-02T14:50:00.123Z",size:2.3}]},{id:55,file:"unclassified.csv",dateModified:"2015-04-08T03:44:12.333Z",size:.25},{id:56,file:"unresolved.csv",dateModified:"2015-04-03T03:21:12.000Z",size:.79},{id:57,file:"zebra.dll",dateModified:"2016-12-08T13:22:12.432",size:1.22}]},{id:11,file:"music",files:[{id:12,file:"mp3",files:[{id:16,file:"rock",files:[{id:17,file:"soft.mp3",dateModified:"2015-05-13T13:50:00Z",size:98}]},{id:14,file:"pop",files:[{id:15,file:"theme.mp3",description:"Movie Theme Song",dateModified:"2015-03-01T17:05:00Z",size:47},{id:25,file:"song.mp3",description:"it is a song...",dateModified:"2016-10-04T06:33:44Z",size:6.3}]},{id:33,file:"other",files:[]}]}]},{id:26,file:"recipes",description:"Cake Recipes",dateModified:"2012-03-05T12:44:00.123Z",files:[{id:29,file:"cheesecake",description:"strawberry cheesecake",dateModified:"2012-04-04T13:52:00.123Z",size:.2},{id:30,file:"chocolate-cake",description:"tasty sweet chocolate cake",dateModified:"2012-05-05T09:22:00.123Z",size:.2},{id:31,file:"coffee-cake",description:"chocolate coffee cake",dateModified:"2012-01-01T08:08:48.123Z",size:.2}]}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(r){return new(r||x)}}static{this.\u0275cmp=I({type:x,selectors:[["ng-component"]],decls:154,vars:8,consts:[[1,"container-fluid"],[1,"mdi","mdi-file-tree","font-27px"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid","target","_blank"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example28.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row"],[1,"col-md-7"],["data-test","add-item-btn",1,"btn","btn-xs","btn-icon","btn-primary",3,"click"],[1,"icon","mdi","mdi-plus","color-white"],["data-test","remove-item-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click","disabled"],[1,"mdi","mdi-minus"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-expand"],["data-test","clear-filters-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["title","console.log of the Flat dataset",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["title","console.log of the Hierarchical Tree dataset",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"col-md-5"],[1,"input-group"],["type","text","data-test","search-string","placeholder","search value","autocomplete","off",1,"form-control","search-string",3,"ngModelChange","ngModel"],["data-test","clear-search-string",1,"btn","btn-sm","btn-outline-secondary","d-flex","align-items-center",3,"click"],[1,"icon","mdi","mdi-close-thick"],["for","excludeChildWhenFiltering",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","excludeChildWhenFiltering","data-test","exclude-child-when-filtering",3,"click","checked"],["title","for example if we filter the word 'pop' and we exclude children, then only the folder 'pop' will show up without any content unless we uncheck this flag"],["for","autoApproveParentItem",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","autoApproveParentItem","data-test","auto-approve-parent-item",3,"click","checked"],["title",`for example in this demo if we filter with 'music' and size '> 70' nothing will show up unless we have this flag enabled
            because none of the files have both criteria at the same time, however the column with the tree 'file' does pass the filter criteria 'music'
            and with this flag we tell the lib to skip any other filter(s) as soon as the with the tree (file in this demo) passes its own filter criteria`],["for","autoRecalcTotalsOnFilterChange",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","autoRecalcTotalsOnFilterChange","data-test","auto-recalc-totals",3,"click","checked"],["title","Should we recalculate Tree Data Totals (when Aggregators are defined) while filtering? This feature is disabled by default."],["gridId","grid28",3,"onAngularGridCreated","columns","options","datasetHierarchical"]],template:function(r,n){r&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 28: Tree Data with Aggregators
    `),t(4,"small"),c(5,"span",1),e(6,` (from a Hierarchical Dataset -
      `),t(7,"a",2),e(8,"Wiki"),i(),e(9,")"),i(),e(10,`
    `),t(11,"span",3),e(12,`
      `),t(13,"a",4),e(14,`
        `),c(15,"span",5),e(16,` code
      `),i(),e(17,`
    `),i(),e(18,`
    `),t(19,"button",6),s("click",function(){return n.toggleSubTitle()}),e(20,`
      `),c(21,"span",7),e(22,`
    `),i(),e(23,`
  `),i(),e(24,`

  `),t(25,"div",8),e(26,`
    `),t(27,"ul"),e(28,`
      `),t(29,"li"),e(30,`
        `),t(31,"b"),e(32,"NOTE #1:"),i(),e(33,` The grid will automatically sort Ascending with the column that has the Tree Data, you could add a "sortByFieldId"
        in your column "treeData" option if you wish to sort on a different column
      `),i(),e(34,`
      `),t(35,"li"),e(36,`
        `),t(37,"b"),e(38,"NOTE #2:"),i(),e(39," Tree Totals are only calculated once and are "),t(40,"b"),e(41,"NOT"),i(),e(42,` recalculated while filtering data, if you do want that
        feature then you will need to enable `),t(43,"code"),e(44,"autoRecalcTotalsOnFilterChange"),i(),e(45," "),t(46,"i"),e(47,"(see checkbox below)"),i(),e(48,`
      `),i(),e(49,`
    `),i(),e(50,`
  `),i(),e(51,`

  `),t(52,"div",9),e(53,`
    `),t(54,"div",10),e(55,`
      `),t(56,"button",11),s("click",function(){return n.addNewFile()}),e(57,`
        `),c(58,"span",12),e(59,`
        `),t(60,"span"),e(61,"Add New Pop Song"),i(),e(62,`
      `),i(),e(63,`
      `),t(64,"button",13),s("click",function(){return n.deleteFile()}),e(65,`
        `),c(66,"span",14),e(67,`
        `),t(68,"span"),e(69,"Remove Last Inserted Pop Song"),i(),e(70,`
      `),i(),e(71,`
      `),t(72,"button",15),s("click",function(){return n.collapseAll()}),e(73,`
        `),c(74,"span",16),e(75,`
        `),t(76,"span"),e(77,"Collapse All"),i(),e(78,`
      `),i(),e(79,`
      `),t(80,"button",17),s("click",function(){return n.expandAll()}),e(81,`
        `),c(82,"span",18),e(83,`
        `),t(84,"span"),e(85,"Expand All"),i(),e(86,`
      `),i(),e(87,`
      `),t(88,"button",19),s("click",function(){return n.clearFilters()}),e(89,`
        `),c(90,"span",20),e(91,`
        `),t(92,"span"),e(93,"Clear Filters"),i(),e(94,`
      `),i(),e(95,`
      `),t(96,"button",21),s("click",function(){return n.logFlatStructure()}),e(97,`
        `),t(98,"span"),e(99,"Log Flat Structure"),i(),e(100,`
      `),i(),e(101,`
      `),t(102,"button",22),s("click",function(){return n.logHierarchicalStructure()}),e(103,`
        `),t(104,"span"),e(105,"Log Hierarchical Structure"),i(),e(106,`
      `),i(),e(107,`
    `),i(),e(108,`

    `),t(109,"div",23),e(110,`
      `),t(111,"div",24),e(112,`
        `),t(113,"input",25),O("ngModelChange",function(o){return D(n.searchString,o)||(n.searchString=o),o}),s("ngModelChange",function(){return n.searchStringChanged()}),i(),e(114,`
        `),t(115,"button",26),s("click",function(){return n.clearSearch()}),e(116,`
          `),c(117,"span",27),e(118,`
        `),i(),e(119,`
      `),i(),e(120,`
    `),i(),e(121,`
  `),i(),e(122,`

  `),t(123,"div"),e(124,`
    `),t(125,"label",28),e(126,`
      `),t(127,"input",29),s("click",function(){return n.changeExcludeChildWhenFiltering()}),i(),e(128,`
      `),t(129,"span",30),e(130,`
        Exclude Children when Filtering Tree
      `),i(),e(131,`
    `),i(),e(132,`
    `),t(133,"label",31),e(134,`
      `),t(135,"input",32),s("click",function(){return n.changeAutoApproveParentItem()}),i(),e(136,`
      `),t(137,"span",33),e(138,`
        Skip Other Filter Criteria when Parent with Tree is valid
      `),i(),e(139,`
    `),i(),e(140,`
    `),t(141,"label",34),e(142,`
      `),t(143,"input",35),s("click",function(){return n.changeAutoRecalcTotalsOnFilterChange()}),i(),e(144,`
      `),t(145,"span",36),e(146,`
        auto-recalc Tree Data totals on filter changed
      `),i(),e(147,`
    `),i(),e(148,`
  `),i(),e(149,`

  `),t(150,"angular-slickgrid",37),s("onAngularGridCreated",function(o){return n.angularGridReady(o.detail)}),e(151,`
  `),i(),e(152,`
`),i(),e(153,`
`)),r&2&&(m(64),u("disabled",n.isRemoveLastInsertedPopSongDisabled),m(49),A("ngModel",n.searchString),m(14),u("checked",n.isExcludingChildWhenFiltering),m(8),u("checked",n.isAutoApproveParentItemWhenTreeColumnIsValid),m(8),u("checked",n.isAutoRecalcTotalsOnFilterChange),m(7),u("columns",n.columns)("options",n.gridOptions)("datasetHierarchical",n.datasetHierarchical))},dependencies:[H,W,M,z,P],styles:[`#grid28 .slick-cell{display:inline-flex;align-items:center;gap:4px}#grid28 .avg-total{color:#a365ff}#grid28 .bold{font-weight:700}#grid28 .total-suffix{margin-left:10px}#grid28 .hidden{display:none}#grid28 .mdi-file-pdf-outline{color:#f14668;opacity:.9}#grid28 .mdi-folder,#grid28 .mdi-folder-open{color:orange;opacity:.9}#grid28 .mdi-file-music-outline{color:#3298dc;opacity:.9}#grid28 .mdi-file-excel-outline{color:#1e9f75;opacity:.9}#grid28 .mdi-file-document-outline,#grid28 .mdi-file-question-outline{color:#686868;opacity:.9}#grid28 .display-inline-block{display:inline-block}.width-15px{width:15px}.width-30px{width:30px}.width-45px{width:45px}.width-60px{width:60px}.width-75px{width:75px}.width-90px{width:90px}
`],encapsulation:2})}}return x})();export{U as Example28Component};
