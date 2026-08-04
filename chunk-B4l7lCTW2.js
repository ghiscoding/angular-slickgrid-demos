import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{E as LF,S as JN,a as AB,gt as q1,l as BB,x as Iu,xt as te}from"./chunk-C7G4ZLh2.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";import{t as mh}from"./chunk-Bz_28csk.js";import{t as c}from"./chunk-NBH_THzt2.js";var w=5e3;var P=(()=>{class m{constructor(){this.hideSubTitle=!1,this.processing=!1,this.excelExportService=new Ze,this.pdfExportService=new mh,this.textExportService=new c}ngOnInit(){this.initializeGrid()}initializeGrid(){let o=document.createElement(`div`),n=document.createElement(`button`),t=document.createElement(`span`);t.className=`mdi mdi-help-circle no-padding`,n.dataset.test=`col1-hello-btn`,n.className=`btn btn-outline-secondary btn-xs btn-icon ms-1`,n.textContent=`Click me`,n.title=`simple column header test with a button click listener`,n.addEventListener(`click`,()=>alert(`Hello World`)),n.appendChild(t),o.appendChild(document.createTextNode(`Id `)),o.appendChild(n),this.columns=[{id:`num`,name:o,field:`num`,type:`number`,columnPickerLabel:`Custom Label`,width:140,maxWidth:150,excludeFromExport:!0,resizable:!0,filterable:!0,selectable:!1},{id:`title`,name:`Title`,field:`title`,width:50,minWidth:50,cssClass:`cell-title`,filterable:!0,sortable:!0},{id:`duration`,name:`Duration`,field:`duration`,minWidth:50,width:60,filterable:!0,filter:{model:Iu.slider,operator:`>=`},sortable:!0,type:`number`,groupTotalsFormatter:AB.sumTotals,params:{groupFormatterPrefix:`Total: `}},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:70,width:90,formatter:JN.percentCompleteBar,filterable:!0,filter:{model:Iu.compoundSlider},sortable:!0,type:`number`,groupTotalsFormatter:AB.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,minWidth:60,filterable:!0,filter:{model:Iu.compoundDate},sortable:!0,type:`dateIso`,formatter:JN.dateIso,exportWithFormatter:!0},{id:`finish`,name:`Finish`,field:`finish`,minWidth:60,filterable:!0,filter:{model:Iu.compoundDate},sortable:!0,type:`dateIso`,formatter:JN.dateIso,exportWithFormatter:!0},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:Iu.compoundInputNumber},type:`number`,formatter:JN.currency,groupTotalsFormatter:AB.sumTotalsCurrency,params:{displayNegativeNumberWithParentheses:!0,currencyPrefix:`€`,groupFormatterCurrencyPrefix:`€`,minDecimal:2,maxDecimal:4,groupFormatterPrefix:`<b>Total</b>: `},excelExportOptions:{style:{font:{outline:!1,italic:!0},format:`€0.00##;[Red](€0.00##)`},width:18},groupTotalsExcelExportOptions:{style:{alignment:{horizontal:`center`},font:{bold:!0,color:`FF005289`,underline:`single`,fontName:`Consolas`,size:10},fill:{type:`pattern`,patternType:`solid`,fgColor:`FFE6F2F6`},border:{top:{color:`FFa500ff`,style:`thick`},left:{color:`FFa500ff`,style:`medium`},right:{color:`FFa500ff`,style:`dotted`},bottom:{color:`FFa500ff`,style:`double`}},format:`"Total: "€0.00##;[Red]"Total: "(€0.00##)`}}},{id:`effort-driven`,name:`Effort Driven`,minWidth:20,width:80,maxWidth:80,cssClass:`cell-effort-driven`,field:`effortDriven`,formatter:JN.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:Iu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelExport:!0,enableFiltering:!0,enableGrouping:!0,groupItemMetadataOption:{toggleOnNodeTitle:!0},enableTextExport:!0,gridMenu:{hideExportTextDelimitedCommand:!1},excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],showCustomFooter:!0,customFooterOptions:{hideMetrics:!1,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},enablePdfExport:!0,pdfExportOptions:{repeatHeadersOnEachPage:!1,sanitizeDataExport:!0,documentTitle:`Grouping Grid`}},this.loadData(w)}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}loadData(o){let n=[];for(let t=0;t<o;t++){let l=2e3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),E=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),f=t%33===0?null:Math.round(Math.random()*1e4)/100;n[t]={id:`id_`+t,num:t,title:`Task `+t,duration:Math.round(Math.random()*100)+``,percentComplete:h,percentCompleteNumber:h,start:new Date(l,p,E),finish:new Date(l,p+1,E),cost:t%3?f:f!==null?-f:null,effortDriven:t%5===0}}this.dataset=n}clearGrouping(){this.dataviewObj.setGrouping([])}clearFilters(){this.angularGrid.filterService.clearFilters()}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`Export`})}exportToFile(o=`csv`){this.textExportService.exportToFile({delimiter:o===`csv`?`,`:`	`,filename:`myExport`,format:o===`csv`?`csv`:`txt`})}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new LF.Avg(`percentComplete`),new LF.Sum(`cost`)],comparer:(o,n)=>BB.numeric(o.value,n.value,te.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationOrderByCount(o){this.angularGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping({getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,comparer:(n,t)=>n.count-t.count,aggregators:[new LF.Avg(`percentComplete`),new LF.Sum(`cost`)],aggregateCollapsed:o,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new LF.Sum(`duration`),new LF.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:n=>`Effort-Driven: ${n.value?`True`:`False`} <span style="color:green">(${n.count} items)</span>`,aggregators:[new LF.Avg(`percentComplete`),new LF.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}groupByDurationEffortDrivenPercent(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0},{columnId:`percentComplete`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new LF.Sum(`duration`),new LF.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:n=>`Effort-Driven: ${n.value?`True`:`False`}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new LF.Sum(`duration`),new LF.Sum(`cost`)],lazyTotalsCalculation:!0},{getter:`percentComplete`,formatter:n=>`% Complete: ${n.value}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new LF.Avg(`percentComplete`)],aggregateCollapsed:!0,collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=BI({type:m,selectors:[[`ng-component`]],decls:113,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example13.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators`,`target`,`_blank`],[1,`row`],[1,`col-sm-12`],[`data-test`,`add-5k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-50k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`clear-filter-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-collapse-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-percent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[`gridId`,`grid13`,3,`onBeforeExportToTextFile`,`onAfterExportToTextFile`,`onBeforeExportToExcel`,`onAfterExportToExcel`,`onBeforeExportToPdf`,`onAfterExportToPdf`,`onAngularGridCreated`,`dataset`,`columns`,`options`]],template:function(n,t){n&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 13: Grouping & Aggregators
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return t.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`)
    `),gi(23,`ul`),oD(24,`
      `),gi(25,`li`),oD(26,`Fully dynamic and interactive multi-level grouping with filtering and aggregates over 50'000 items`),xc(),oD(27,`
      `),gi(28,`li`),oD(29,`Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..`),xc(),oD(30,`
    `),xc(),oD(31,`
  `),xc(),oD(32,`

  `),gi(33,`div`,8),oD(34,`
    `),gi(35,`div`,9),oD(36,`
      `),gi(37,`button`,10),Dp(`click`,function(){return t.loadData(5e3)}),oD(38,`5K rows`),xc(),oD(39,`
      `),gi(40,`button`,11),Dp(`click`,function(){return t.loadData(5e4)}),oD(41,`50K rows`),xc(),oD(42,`
      `),gi(43,`button`,12),Dp(`click`,function(){return t.clearGrouping()}),oD(44,`
        `),mp(45,`i`,13),oD(46,` Clear Grouping
      `),xc(),oD(47,`
      `),gi(48,`button`,14),Dp(`click`,function(){return t.clearFilters()}),oD(49,`
        `),mp(50,`i`,13),oD(51,` Clear Filters
      `),xc(),oD(52,`
      `),gi(53,`button`,15),Dp(`click`,function(){return t.collapseAllGroups()}),oD(54,`
        `),mp(55,`i`,16),oD(56,` Collapse all groups
      `),xc(),oD(57,`
      `),gi(58,`button`,17),Dp(`click`,function(){return t.expandAllGroups()}),oD(59,`
        `),mp(60,`i`,18),oD(61,` Expand all groups
      `),xc(),oD(62,`
      `),gi(63,`button`,19),Dp(`click`,function(){return t.exportToExcel()}),oD(64,`
        `),mp(65,`i`,20),oD(66,` Export to Excel
      `),xc(),oD(67,`
      `),gi(68,`button`,21),Dp(`click`,function(){return t.exportToPdf()}),oD(69,`
        `),mp(70,`i`,22),oD(71,` Export to PDF
      `),xc(),oD(72,`
    `),xc(),oD(73,`
  `),xc(),oD(74,`
  `),mp(75,`hr`),oD(76,`
  `),gi(77,`div`,8),oD(78,`
    `),gi(79,`div`,9),oD(80,`
      `),gi(81,`button`,23),Dp(`click`,function(){return t.groupByDuration()}),oD(82,`
        Group by duration & sort groups by value
      `),xc(),oD(83,`
      `),gi(84,`button`,24),Dp(`click`,function(){return t.groupByDurationOrderByCount(!1)}),oD(85,`
        Group by duration & sort groups by count
      `),xc(),oD(86,`
    `),xc(),oD(87,`
  `),xc(),oD(88,`
  `),gi(89,`div`,8),oD(90,`
    `),gi(91,`div`,9),oD(92,`
      `),gi(93,`button`,25),Dp(`click`,function(){return t.groupByDurationOrderByCount(!0)}),oD(94,`
        Group by duration & sort groups by count, aggregate collapsed
      `),xc(),oD(95,`
      `),gi(96,`button`,26),Dp(`click`,function(){return t.groupByDurationEffortDriven()}),oD(97,`
        Group by duration then effort-driven
      `),xc(),oD(98,`
      `),gi(99,`button`,27),Dp(`click`,function(){return t.groupByDurationEffortDrivenPercent()}),oD(100,`
        Group by duration then effort-driven then percent.
      `),xc(),oD(101,`
      `),gi(102,`span`,28),oD(103,`
        `),mp(104,`i`,29),oD(105,`
      `),xc(),oD(106,`
    `),xc(),oD(107,`
  `),xc(),oD(108,`

  `),gi(109,`angular-slickgrid`,30),Dp(`onBeforeExportToTextFile`,function(){return t.processing=!0})(`onAfterExportToTextFile`,function(){return t.processing=!1})(`onBeforeExportToExcel`,function(){return t.processing=!0})(`onAfterExportToExcel`,function(){return t.processing=!1})(`onBeforeExportToPdf`,function(){return t.processing=!0})(`onAfterExportToPdf`,function(){return t.processing=!1})(`onAngularGridCreated`,function(p){return t.angularGridReady(p.detail)}),oD(110,`
  `),xc(),oD(111,`
`),xc(),oD(112,`
`)),n&2&&(av(102),gp(`hidden`,!t.processing),av(7),gp(`dataset`,t.dataset)(`columns`,t.columns)(`options`,t.gridOptions))},dependencies:[q1],styles:[`.slick-column-name[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus{outline:2px solid rgba(53,53,53,.5)}`]})}}return m})();export{P as Example13Component};