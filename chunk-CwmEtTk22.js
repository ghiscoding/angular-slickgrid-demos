import{Dt as UE,En as iD,Kn as mp,Tt as Tp,Wn as mi,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W,_ as LM,c as GM,mt as nk,rt as gR,st as ip,wt as te}from"./chunk-CAMk6vEo.js";import{t as Ze}from"./chunk-CVoct-s8.js";import{t as c}from"./chunk-sAUrlGt6.js";import{t as mh}from"./chunk-CKr-yhUg.js";var w=5e3;var P=(()=>{class m{constructor(){this.hideSubTitle=!1,this.processing=!1,this.excelExportService=new Ze,this.pdfExportService=new mh,this.textExportService=new c}ngOnInit(){this.initializeGrid()}initializeGrid(){let o=document.createElement(`div`),n=document.createElement(`button`),t=document.createElement(`span`);t.className=`mdi mdi-help-circle no-padding`,n.dataset.test=`col1-hello-btn`,n.className=`btn btn-outline-secondary btn-xs btn-icon ms-1`,n.textContent=`Click me`,n.title=`simple column header test with a button click listener`,n.addEventListener(`click`,()=>alert(`Hello World`)),n.appendChild(t),o.appendChild(document.createTextNode(`Id `)),o.appendChild(n),this.columns=[{id:`num`,name:o,field:`num`,type:`number`,columnPickerLabel:`Custom Label`,width:140,maxWidth:150,excludeFromExport:!0,resizable:!0,filterable:!0,selectable:!1},{id:`title`,name:`Title`,field:`title`,width:50,minWidth:50,cssClass:`cell-title`,filterable:!0,sortable:!0},{id:`duration`,name:`Duration`,field:`duration`,minWidth:50,width:60,filterable:!0,filter:{model:ip.slider,operator:`>=`},sortable:!0,type:`number`,groupTotalsFormatter:LM.sumTotals,params:{groupFormatterPrefix:`Total: `}},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:70,width:90,formatter:nk.percentCompleteBar,filterable:!0,filter:{model:ip.compoundSlider},sortable:!0,type:`number`,groupTotalsFormatter:LM.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,minWidth:60,filterable:!0,filter:{model:ip.compoundDate},sortable:!0,type:`dateIso`,formatter:nk.dateIso,exportWithFormatter:!0},{id:`finish`,name:`Finish`,field:`finish`,minWidth:60,filterable:!0,filter:{model:ip.compoundDate},sortable:!0,type:`dateIso`,formatter:nk.dateIso,exportWithFormatter:!0},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:ip.compoundInputNumber},type:`number`,formatter:nk.currency,groupTotalsFormatter:LM.sumTotalsCurrency,params:{displayNegativeNumberWithParentheses:!0,currencyPrefix:`€`,groupFormatterCurrencyPrefix:`€`,minDecimal:2,maxDecimal:4,groupFormatterPrefix:`<b>Total</b>: `},excelExportOptions:{style:{font:{outline:!1,italic:!0},format:`€0.00##;[Red](€0.00##)`},width:18},groupTotalsExcelExportOptions:{style:{alignment:{horizontal:`center`},font:{bold:!0,color:`FF005289`,underline:`single`,fontName:`Consolas`,size:10},fill:{type:`pattern`,patternType:`solid`,fgColor:`FFE6F2F6`},border:{top:{color:`FFa500ff`,style:`thick`},left:{color:`FFa500ff`,style:`medium`},right:{color:`FFa500ff`,style:`dotted`},bottom:{color:`FFa500ff`,style:`double`}},format:`"Total: "€0.00##;[Red]"Total: "(€0.00##)`}}},{id:`effort-driven`,name:`Effort Driven`,minWidth:20,width:80,maxWidth:80,cssClass:`cell-effort-driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelExport:!0,enableFiltering:!0,enableGrouping:!0,groupItemMetadataOption:{toggleOnNodeTitle:!0},enableTextExport:!0,gridMenu:{hideExportTextDelimitedCommand:!1},excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],showCustomFooter:!0,customFooterOptions:{hideMetrics:!1,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},enablePdfExport:!0,pdfExportOptions:{repeatHeadersOnEachPage:!1,sanitizeDataExport:!0,documentTitle:`Grouping Grid`}},this.loadData(w)}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}loadData(o){let n=[];for(let t=0;t<o;t++){let l=2e3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),E=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),f=t%33===0?null:Math.round(Math.random()*1e4)/100;n[t]={id:`id_`+t,num:t,title:`Task `+t,duration:Math.round(Math.random()*100)+``,percentComplete:h,percentCompleteNumber:h,start:new Date(l,p,E),finish:new Date(l,p+1,E),cost:t%3?f:f!==null?-f:null,effortDriven:t%5===0}}this.dataset=n}clearGrouping(){this.dataviewObj.setGrouping([])}clearFilters(){this.angularGrid.filterService.clearFilters()}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`Export`})}exportToFile(o=`csv`){this.textExportService.exportToFile({delimiter:o===`csv`?`,`:`	`,filename:`myExport`,format:o===`csv`?`csv`:`txt`})}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],comparer:(o,n)=>GM.numeric(o.value,n.value,te.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationOrderByCount(o){this.angularGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping({getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,comparer:(n,t)=>n.count-t.count,aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],aggregateCollapsed:o,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:n=>`Effort-Driven: ${n.value?`True`:`False`} <span style="color:green">(${n.count} items)</span>`,aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}groupByDurationEffortDrivenPercent(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0},{columnId:`percentComplete`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:n=>`Effort-Driven: ${n.value?`True`:`False`}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],lazyTotalsCalculation:!0},{getter:`percentComplete`,formatter:n=>`% Complete: ${n.value}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new gR.Avg(`percentComplete`)],aggregateCollapsed:!0,collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=UE({type:m,selectors:[[`ng-component`]],decls:113,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example13.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators`,`target`,`_blank`],[1,`row`],[1,`col-sm-12`],[`data-test`,`add-5k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-50k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`clear-filter-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-collapse-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-percent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[`gridId`,`grid13`,3,`onBeforeExportToTextFile`,`onAfterExportToTextFile`,`onBeforeExportToExcel`,`onAfterExportToExcel`,`onBeforeExportToPdf`,`onAfterExportToPdf`,`onAngularGridCreated`,`dataset`,`columns`,`options`]],template:function(n,t){n&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 13: Grouping & Aggregators
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return t.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    (`),mi(20,`a`,7),iD(21,`Wiki docs`),Ac(),iD(22,`)
    `),mi(23,`ul`),iD(24,`
      `),mi(25,`li`),iD(26,`Fully dynamic and interactive multi-level grouping with filtering and aggregates over 50'000 items`),Ac(),iD(27,`
      `),mi(28,`li`),iD(29,`Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..`),Ac(),iD(30,`
    `),Ac(),iD(31,`
  `),Ac(),iD(32,`

  `),mi(33,`div`,8),iD(34,`
    `),mi(35,`div`,9),iD(36,`
      `),mi(37,`button`,10),Tp(`click`,function(){return t.loadData(5e3)}),iD(38,`5K rows`),Ac(),iD(39,`
      `),mi(40,`button`,11),Tp(`click`,function(){return t.loadData(5e4)}),iD(41,`50K rows`),Ac(),iD(42,`
      `),mi(43,`button`,12),Tp(`click`,function(){return t.clearGrouping()}),iD(44,`
        `),vp(45,`i`,13),iD(46,` Clear Grouping
      `),Ac(),iD(47,`
      `),mi(48,`button`,14),Tp(`click`,function(){return t.clearFilters()}),iD(49,`
        `),vp(50,`i`,13),iD(51,` Clear Filters
      `),Ac(),iD(52,`
      `),mi(53,`button`,15),Tp(`click`,function(){return t.collapseAllGroups()}),iD(54,`
        `),vp(55,`i`,16),iD(56,` Collapse all groups
      `),Ac(),iD(57,`
      `),mi(58,`button`,17),Tp(`click`,function(){return t.expandAllGroups()}),iD(59,`
        `),vp(60,`i`,18),iD(61,` Expand all groups
      `),Ac(),iD(62,`
      `),mi(63,`button`,19),Tp(`click`,function(){return t.exportToExcel()}),iD(64,`
        `),vp(65,`i`,20),iD(66,` Export to Excel
      `),Ac(),iD(67,`
      `),mi(68,`button`,21),Tp(`click`,function(){return t.exportToPdf()}),iD(69,`
        `),vp(70,`i`,22),iD(71,` Export to PDF
      `),Ac(),iD(72,`
    `),Ac(),iD(73,`
  `),Ac(),iD(74,`
  `),vp(75,`hr`),iD(76,`
  `),mi(77,`div`,8),iD(78,`
    `),mi(79,`div`,9),iD(80,`
      `),mi(81,`button`,23),Tp(`click`,function(){return t.groupByDuration()}),iD(82,`
        Group by duration & sort groups by value
      `),Ac(),iD(83,`
      `),mi(84,`button`,24),Tp(`click`,function(){return t.groupByDurationOrderByCount(!1)}),iD(85,`
        Group by duration & sort groups by count
      `),Ac(),iD(86,`
    `),Ac(),iD(87,`
  `),Ac(),iD(88,`
  `),mi(89,`div`,8),iD(90,`
    `),mi(91,`div`,9),iD(92,`
      `),mi(93,`button`,25),Tp(`click`,function(){return t.groupByDurationOrderByCount(!0)}),iD(94,`
        Group by duration & sort groups by count, aggregate collapsed
      `),Ac(),iD(95,`
      `),mi(96,`button`,26),Tp(`click`,function(){return t.groupByDurationEffortDriven()}),iD(97,`
        Group by duration then effort-driven
      `),Ac(),iD(98,`
      `),mi(99,`button`,27),Tp(`click`,function(){return t.groupByDurationEffortDrivenPercent()}),iD(100,`
        Group by duration then effort-driven then percent.
      `),Ac(),iD(101,`
      `),mi(102,`span`,28),iD(103,`
        `),vp(104,`i`,29),iD(105,`
      `),Ac(),iD(106,`
    `),Ac(),iD(107,`
  `),Ac(),iD(108,`

  `),mi(109,`angular-slickgrid`,30),Tp(`onBeforeExportToTextFile`,function(){return t.processing=!0})(`onAfterExportToTextFile`,function(){return t.processing=!1})(`onBeforeExportToExcel`,function(){return t.processing=!0})(`onAfterExportToExcel`,function(){return t.processing=!1})(`onBeforeExportToPdf`,function(){return t.processing=!0})(`onAfterExportToPdf`,function(){return t.processing=!1})(`onAngularGridCreated`,function(p){return t.angularGridReady(p.detail)}),iD(110,`
  `),Ac(),iD(111,`
`),Ac(),iD(112,`
`)),n&2&&(cy(102),mp(`hidden`,!t.processing),cy(7),mp(`dataset`,t.dataset)(`columns`,t.columns)(`options`,t.gridOptions))},dependencies:[_W],styles:[`.slick-column-name[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus{outline:2px solid rgba(53,53,53,.5)}`]})}}return m})();export{P as Example13Component};