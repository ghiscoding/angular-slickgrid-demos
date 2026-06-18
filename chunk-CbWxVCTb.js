import {h as Tu,q as qN,aq as At,ar as M,a1 as FP,as as Xi,T as TI,U as U1,F as En,I as je,K as Cn,O as qt,u as ui,B as BE,a as ap,d as Tc,f as fp,P as Ap,R as Ov,e as Uy,g as sp,V as xp,W as Lv,at as zn,Y as WE}from'./main-C6PQTYH6.js';import {Z as Ze}from'./chunk-CP-2FMG8.js';var Q=(()=>{class g{constructor(){this.datasetHierarchical=[],this.hideSubTitle=false,this.isExcludingChildWhenFiltering=false,this.isAutoApproveParentItemWhenTreeColumnIsValid=true,this.isAutoRecalcTotalsOnFilterChange=false,this.isRemoveLastInsertedPopSongDisabled=true,this.searchString="",this.treeFormatter=(a,r,n,l,o,h)=>{let d=h.getOptions()?.treeDataOptions?.levelPropName||"__treeLevel";if(n==null||o===void 0)return "";let p=h.getData(),C=p.getItems(),B=p.getIdPropertyName()||"id",_=p.getIdxById(o[B]),T=this.getFileIcon(n),f=o[d],E=".";n=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");let k=`<span class="display-inline-block width-${15*f}px"></span>`,w=zn(5*f),v=`<span class="slick-tree-title">${n}</span>`;if(C[_+1]?.[d]>C[_][d]||C[_].__hasChildren){let I=`<i class="mdi font-22px ${o.__collapsed?"mdi-folder":"mdi-folder-open"}"></i>`;return o.__collapsed?`<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle collapsed" level="${f}"></span>${I} ${T} ${v}`:`<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle expanded" level="${f}"></span>${I} ${T} ${v}`}else return `<span class="hidden">${E}</span>${k}${w} <span class="slick-group-toggle" level="${f}"></span>${T} ${v}`};}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset();}defineGrid(){this.columns=[{id:"file",name:"Files",field:"file",width:150,formatter:this.treeFormatter,filterable:true,sortable:true},{id:"dateModified",name:"Date Modified",field:"dateModified",formatter:qN.dateIso,type:"dateUtc",outputType:"dateIso",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"description",name:"Description",field:"description",minWidth:90,filterable:true,sortable:true},{id:"size",name:"Size",field:"size",minWidth:90,type:"number",exportWithFormatter:true,excelExportOptions:{autoDetectCellFormat:false},filterable:true,filter:{model:Tu.compoundInputNumber},formatter:(a,r,n,l,o)=>{let h=l.field;if(o?.__treeTotals!==void 0){let S=o[this.gridOptions?.treeDataOptions?.levelPropName||"__treeLevel"],d=o?.__treeTotals?.sum[h],p=o?.__treeTotals?.avg[h];if(p!==void 0&&d!==void 0)return isNaN(d)?"":`<span class="text-primary bold">sum: ${At(d,0,2)} MB</span> / <span class="avg-total">avg: ${At(p,0,2)} MB</span> <span class="total-suffix">(${S===0?"total":"sub-total"})</span>`;if(d!==void 0)return isNaN(d)?"":`<span class="text-primary bold">sum: ${At(d,0,2)} MB</span> <span class="total-suffix">(${S===0?"total":"sub-total"})</span>`}return M(n)?`${n} MB`:""}}],this.gridOptions={autoResize:{autoHeight:false,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:true,enableAutoResize:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:true,sanitizeDataExport:true},externalResources:[new Ze],enableCellNavigation:true,enableFiltering:true,enableTreeData:true,multiColumnSort:false,treeDataOptions:{columnId:"file",childrenPropName:"files",excludeChildrenWhenFilteringTree:this.isExcludingChildWhenFiltering,autoApproveParentItemWhenTreeColumnIsValid:this.isAutoApproveParentItemWhenTreeColumnIsValid,aggregators:[new FP.Avg("size"),new FP.Sum("size")],autoRecalcTotalsOnFilterChange:this.isAutoRecalcTotalsOnFilterChange},headerRowHeight:35,rowHeight:33,showCustomFooter:true,presets:{treeData:{toggledItems:[{itemId:4,isCollapsed:true}]}},contextMenu:{iconCollapseAllGroupsCommand:"mdi mdi-arrow-collapse",iconExpandAllGroupsCommand:"mdi mdi-arrow-expand",iconClearGroupingCommand:"mdi mdi-close",iconCopyCellValueCommand:"mdi mdi-content-copy",iconExportCsvCommand:"mdi mdi-file-document-outline",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-file-document-outline"},gridMenu:{iconCssClass:"mdi mdi-menu",iconClearAllFiltersCommand:"mdi mdi-filter-remove-outline",iconClearAllSortingCommand:"mdi mdi-swap-vertical",iconExportCsvCommand:"mdi mdi-file-document-outline",iconExportExcelCommand:"mdi mdi-file-excel-outline",iconExportTextDelimitedCommand:"mdi mdi-file-document-outline",iconRefreshDatasetCommand:"mdi mdi-sync",iconToggleFilterCommand:"mdi mdi-flip-vertical",iconTogglePreHeaderCommand:"mdi mdi-flip-vertical"},headerMenu:{iconClearFilterCommand:"mdi mdi mdi-filter-remove-outline",iconClearSortCommand:"mdi mdi-swap-vertical",iconSortAscCommand:"mdi mdi-sort-ascending",iconSortDescCommand:"mdi mdi-flip-v mdi-sort-descending",iconColumnHideCommand:"mdi mdi-close"}};}angularGridReady(a){this.angularGrid=a,this.gridObj=a.slickGrid,this.dataViewObj=a.dataView;}changeAutoApproveParentItem(){return this.isAutoApproveParentItemWhenTreeColumnIsValid=!this.isAutoApproveParentItemWhenTreeColumnIsValid,this.gridOptions.treeDataOptions.autoApproveParentItemWhenTreeColumnIsValid=this.isAutoApproveParentItemWhenTreeColumnIsValid,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),true}changeAutoRecalcTotalsOnFilterChange(){return this.isAutoRecalcTotalsOnFilterChange=!this.isAutoRecalcTotalsOnFilterChange,this.gridOptions.treeDataOptions.autoRecalcTotalsOnFilterChange=this.isAutoRecalcTotalsOnFilterChange,this.angularGrid.slickGrid?.setOptions(this.gridOptions),this.angularGrid.filterService.clearFilters(),this.angularGrid.treeDataService.enableAutoRecalcTotalsFeature(),true}changeExcludeChildWhenFiltering(){return this.isExcludingChildWhenFiltering=!this.isExcludingChildWhenFiltering,this.gridOptions.treeDataOptions.excludeChildrenWhenFilteringTree=this.isExcludingChildWhenFiltering,this.angularGrid.slickGrid.setOptions(this.gridOptions),this.angularGrid.filterService.refreshTreeDataFilters(),true}clearSearch(){this.searchString="",this.updateFilter();}searchStringChanged(){this.updateFilter();}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:"file",searchTerms:[this.searchString]}],true,false,true);}getFileIcon(a){let r="";return a.includes(".pdf")?r='<span class="mdi icon mdi-file-pdf-outline"></span>':a.includes(".txt")?r='<span class="mdi icon mdi-file-document-outline"></span>':a.includes(".xls")?r='<span class="mdi icon mdi-file-excel-outline"></span>':a.includes(".mp3")&&(r='<span class="mdi icon mdi-file-music-outline"></span>'),r}addNewFile(){let a=this.dataViewObj.getLength()+50,r=[...this.datasetHierarchical],n=Xi(r,l=>l.file==="pop","files");n&&Array.isArray(n.files)&&(n.files.push({id:a,file:`pop-${a}.mp3`,dateModified:new Date,size:a+3}),this.lastInsertedPopSongId=a,this.isRemoveLastInsertedPopSongDisabled=false,this.datasetHierarchical=r,setTimeout(()=>{let l=this.dataViewObj.getRowById(n.id);this.gridObj.scrollRowIntoView(l+3);},10));}deleteFile(){let a=[...this.datasetHierarchical],r=Xi(this.datasetHierarchical,l=>l.file==="pop","files"),n=Xi(this.datasetHierarchical,l=>l.id===this.lastInsertedPopSongId,"files");if(r&&n){let l=r.files.findIndex(o=>o.id===n.id);l>=0&&(r.files.splice(l,1),this.lastInsertedPopSongId=void 0,this.isRemoveLastInsertedPopSongDisabled=true,this.datasetHierarchical=a);}}clearFilters(){this.angularGrid.filterService.clearFilters();}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(true);}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(false);}logHierarchicalStructure(){console.log("exploded array",this.angularGrid.treeDataService.datasetHierarchical);}logFlatStructure(){console.log("flat array",this.angularGrid.treeDataService.dataset);}mockDataset(){return [{id:24,file:"bucket-list.txt",dateModified:"2012-03-05T12:44:00.123Z",size:.5},{id:18,file:"something.txt",dateModified:"2015-03-03T03:50:00.123Z",size:90},{id:21,file:"documents",files:[{id:2,file:"txt",files:[{id:3,file:"todo.txt",description:"things to do someday maybe",dateModified:"2015-05-12T14:50:00.123Z",size:.7}]},{id:4,file:"pdf",files:[{id:22,file:"map2.pdf",dateModified:"2015-07-21T08:22:00.123Z",size:2.9},{id:5,file:"map.pdf",dateModified:"2015-05-21T10:22:00.123Z",size:3.1},{id:6,file:"internet-bill.pdf",dateModified:"2015-05-12T14:50:00.123Z",size:1.3},{id:23,file:"phone-bill.pdf",dateModified:"2015-05-01T07:50:00.123Z",size:1.5}]},{id:9,file:"misc",files:[{id:10,file:"warranties.txt",dateModified:"2015-02-26T16:50:00.123Z",size:.4}]},{id:7,file:"xls",files:[{id:8,file:"compilation.xls",dateModified:"2014-10-02T14:50:00.123Z",size:2.3}]},{id:55,file:"unclassified.csv",dateModified:"2015-04-08T03:44:12.333Z",size:.25},{id:56,file:"unresolved.csv",dateModified:"2015-04-03T03:21:12.000Z",size:.79},{id:57,file:"zebra.dll",dateModified:"2016-12-08T13:22:12.432",size:1.22}]},{id:11,file:"music",files:[{id:12,file:"mp3",files:[{id:16,file:"rock",files:[{id:17,file:"soft.mp3",dateModified:"2015-05-13T13:50:00Z",size:98}]},{id:14,file:"pop",files:[{id:15,file:"theme.mp3",description:"Movie Theme Song",dateModified:"2015-03-01T17:05:00Z",size:47},{id:25,file:"song.mp3",description:"it is a song...",dateModified:"2016-10-04T06:33:44Z",size:6.3}]},{id:33,file:"other",files:[]}]}]},{id:26,file:"recipes",description:"Cake Recipes",dateModified:"2012-03-05T12:44:00.123Z",files:[{id:29,file:"cheesecake",description:"strawberry cheesecake",dateModified:"2012-04-04T13:52:00.123Z",size:.2},{id:30,file:"chocolate-cake",description:"tasty sweet chocolate cake",dateModified:"2012-05-05T09:22:00.123Z",size:.2},{id:31,file:"coffee-cake",description:"chocolate coffee cake",dateModified:"2012-01-01T08:08:48.123Z",size:.2}]}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(r){return new(r||g)};}static{this.\u0275cmp=TI({type:g,selectors:[["ng-component"]],decls:154,vars:8,consts:[[1,"container-fluid"],[1,"mdi","mdi-file-tree","font-27px"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid","target","_blank"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example28.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row"],[1,"col-md-7"],["data-test","add-item-btn",1,"btn","btn-xs","btn-icon","btn-primary",3,"click"],[1,"icon","mdi","mdi-plus","color-white"],["data-test","remove-item-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click","disabled"],[1,"mdi","mdi-minus"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-expand"],["data-test","clear-filters-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["title","console.log of the Flat dataset",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["title","console.log of the Hierarchical Tree dataset",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"col-md-5"],[1,"input-group"],["type","text","data-test","search-string","placeholder","search value","autocomplete","off",1,"form-control","search-string",3,"ngModelChange","ngModel"],["data-test","clear-search-string",1,"btn","btn-sm","btn-outline-secondary","d-flex","align-items-center",3,"click"],[1,"icon","mdi","mdi-close-thick"],["for","excludeChildWhenFiltering",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","excludeChildWhenFiltering","data-test","exclude-child-when-filtering",3,"click","checked"],["title","for example if we filter the word 'pop' and we exclude children, then only the folder 'pop' will show up without any content unless we uncheck this flag"],["for","autoApproveParentItem",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","autoApproveParentItem","data-test","auto-approve-parent-item",3,"click","checked"],["title",`for example in this demo if we filter with 'music' and size '> 70' nothing will show up unless we have this flag enabled
            because none of the files have both criteria at the same time, however the column with the tree 'file' does pass the filter criteria 'music'
            and with this flag we tell the lib to skip any other filter(s) as soon as the with the tree (file in this demo) passes its own filter criteria`],["for","autoRecalcTotalsOnFilterChange",1,"checkbox-inline","control-label",2,"margin-left","20px"],["type","checkbox","id","autoRecalcTotalsOnFilterChange","data-test","auto-recalc-totals",3,"click","checked"],["title","Should we recalculate Tree Data Totals (when Aggregators are defined) while filtering? This feature is disabled by default."],["gridId","grid28",3,"onAngularGridCreated","columns","options","datasetHierarchical"]],template:function(r,n){r&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 28: Tree Data with Aggregators
    `),ui(4,"small"),ap(5,"span",1),BE(6,` (from a Hierarchical Dataset -
      `),ui(7,"a",2),BE(8,"Wiki"),Tc(),BE(9,")"),Tc(),BE(10,`
    `),ui(11,"span",3),BE(12,`
      `),ui(13,"a",4),BE(14,`
        `),ap(15,"span",5),BE(16,` code
      `),Tc(),BE(17,`
    `),Tc(),BE(18,`
    `),ui(19,"button",6),fp("click",function(){return n.toggleSubTitle()}),BE(20,`
      `),ap(21,"span",7),BE(22,`
    `),Tc(),BE(23,`
  `),Tc(),BE(24,`

  `),ui(25,"div",8),BE(26,`
    `),ui(27,"ul"),BE(28,`
      `),ui(29,"li"),BE(30,`
        `),ui(31,"b"),BE(32,"NOTE #1:"),Tc(),BE(33,` The grid will automatically sort Ascending with the column that has the Tree Data, you could add a "sortByFieldId"
        in your column "treeData" option if you wish to sort on a different column
      `),Tc(),BE(34,`
      `),ui(35,"li"),BE(36,`
        `),ui(37,"b"),BE(38,"NOTE #2:"),Tc(),BE(39," Tree Totals are only calculated once and are "),ui(40,"b"),BE(41,"NOT"),Tc(),BE(42,` recalculated while filtering data, if you do want that
        feature then you will need to enable `),ui(43,"code"),BE(44,"autoRecalcTotalsOnFilterChange"),Tc(),BE(45," "),ui(46,"i"),BE(47,"(see checkbox below)"),Tc(),BE(48,`
      `),Tc(),BE(49,`
    `),Tc(),BE(50,`
  `),Tc(),BE(51,`

  `),ui(52,"div",9),BE(53,`
    `),ui(54,"div",10),BE(55,`
      `),ui(56,"button",11),fp("click",function(){return n.addNewFile()}),BE(57,`
        `),ap(58,"span",12),BE(59,`
        `),ui(60,"span"),BE(61,"Add New Pop Song"),Tc(),BE(62,`
      `),Tc(),BE(63,`
      `),ui(64,"button",13),fp("click",function(){return n.deleteFile()}),BE(65,`
        `),ap(66,"span",14),BE(67,`
        `),ui(68,"span"),BE(69,"Remove Last Inserted Pop Song"),Tc(),BE(70,`
      `),Tc(),BE(71,`
      `),ui(72,"button",15),fp("click",function(){return n.collapseAll()}),BE(73,`
        `),ap(74,"span",16),BE(75,`
        `),ui(76,"span"),BE(77,"Collapse All"),Tc(),BE(78,`
      `),Tc(),BE(79,`
      `),ui(80,"button",17),fp("click",function(){return n.expandAll()}),BE(81,`
        `),ap(82,"span",18),BE(83,`
        `),ui(84,"span"),BE(85,"Expand All"),Tc(),BE(86,`
      `),Tc(),BE(87,`
      `),ui(88,"button",19),fp("click",function(){return n.clearFilters()}),BE(89,`
        `),ap(90,"span",20),BE(91,`
        `),ui(92,"span"),BE(93,"Clear Filters"),Tc(),BE(94,`
      `),Tc(),BE(95,`
      `),ui(96,"button",21),fp("click",function(){return n.logFlatStructure()}),BE(97,`
        `),ui(98,"span"),BE(99,"Log Flat Structure"),Tc(),BE(100,`
      `),Tc(),BE(101,`
      `),ui(102,"button",22),fp("click",function(){return n.logHierarchicalStructure()}),BE(103,`
        `),ui(104,"span"),BE(105,"Log Hierarchical Structure"),Tc(),BE(106,`
      `),Tc(),BE(107,`
    `),Tc(),BE(108,`

    `),ui(109,"div",23),BE(110,`
      `),ui(111,"div",24),BE(112,`
        `),ui(113,"input",25),Ap("ngModelChange",function(o){return WE(n.searchString,o)||(n.searchString=o),o}),fp("ngModelChange",function(){return n.searchStringChanged()}),Tc(),Ov(),BE(114,`
        `),ui(115,"button",26),fp("click",function(){return n.clearSearch()}),BE(116,`
          `),ap(117,"span",27),BE(118,`
        `),Tc(),BE(119,`
      `),Tc(),BE(120,`
    `),Tc(),BE(121,`
  `),Tc(),BE(122,`

  `),ui(123,"div"),BE(124,`
    `),ui(125,"label",28),BE(126,`
      `),ui(127,"input",29),fp("click",function(){return n.changeExcludeChildWhenFiltering()}),Tc(),BE(128,`
      `),ui(129,"span",30),BE(130,`
        Exclude Children when Filtering Tree
      `),Tc(),BE(131,`
    `),Tc(),BE(132,`
    `),ui(133,"label",31),BE(134,`
      `),ui(135,"input",32),fp("click",function(){return n.changeAutoApproveParentItem()}),Tc(),BE(136,`
      `),ui(137,"span",33),BE(138,`
        Skip Other Filter Criteria when Parent with Tree is valid
      `),Tc(),BE(139,`
    `),Tc(),BE(140,`
    `),ui(141,"label",34),BE(142,`
      `),ui(143,"input",35),fp("click",function(){return n.changeAutoRecalcTotalsOnFilterChange()}),Tc(),BE(144,`
      `),ui(145,"span",36),BE(146,`
        auto-recalc Tree Data totals on filter changed
      `),Tc(),BE(147,`
    `),Tc(),BE(148,`
  `),Tc(),BE(149,`

  `),ui(150,"angular-slickgrid",37),fp("onAngularGridCreated",function(o){return n.angularGridReady(o.detail)}),BE(151,`
  `),Tc(),BE(152,`
`),Tc(),BE(153,`
`)),r&2&&(Uy(64),sp("disabled",n.isRemoveLastInsertedPopSongDisabled),Uy(49),xp("ngModel",n.searchString),Lv(),Uy(14),sp("checked",n.isExcludingChildWhenFiltering),Uy(8),sp("checked",n.isAutoApproveParentItemWhenTreeColumnIsValid),Uy(8),sp("checked",n.isAutoRecalcTotalsOnFilterChange),Uy(7),sp("columns",n.columns)("options",n.gridOptions)("datasetHierarchical",n.datasetHierarchical));},dependencies:[U1,En,je,Cn,qt],styles:[`#grid28 .slick-cell{display:inline-flex;align-items:center;gap:4px}#grid28 .avg-total{color:#a365ff}#grid28 .bold{font-weight:700}#grid28 .total-suffix{margin-left:10px}#grid28 .hidden{display:none}#grid28 .mdi-file-pdf-outline{color:#f14668;opacity:.9}#grid28 .mdi-folder,#grid28 .mdi-folder-open{color:orange;opacity:.9}#grid28 .mdi-file-music-outline{color:#3298dc;opacity:.9}#grid28 .mdi-file-excel-outline{color:#1e9f75;opacity:.9}#grid28 .mdi-file-document-outline,#grid28 .mdi-file-question-outline{color:#686868;opacity:.9}#grid28 .display-inline-block{display:inline-block}.width-15px{width:15px}.width-30px{width:30px}.width-45px{width:45px}.width-60px{width:60px}.width-75px{width:75px}.width-90px{width:90px}
`],encapsulation:2});}}return g})();export{Q as Example28Component};