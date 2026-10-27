import{In as lD,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,bt as se,it as fT,jt as zA,l as D1,p as FA,yt as sI}from"./chunk-Dk5kBPyv.js";import{t as bh}from"./chunk-Co5s-2kw.js";import{t as Qe}from"./chunk-D0qctKwX.js";import{t as c}from"./chunk-CGe8-2e6.js";var w=5e3;var P=(()=>{class m{constructor(){this.hideSubTitle=!1,this.processing=!1,this.excelExportService=new Qe,this.pdfExportService=new bh,this.textExportService=new c}ngOnInit(){this.initializeGrid()}initializeGrid(){let o=document.createElement(`div`),n=document.createElement(`button`),t=document.createElement(`span`);t.className=`mdi mdi-help-circle no-padding`,n.dataset.test=`col1-hello-btn`,n.className=`btn btn-outline-secondary btn-xs btn-icon ms-1`,n.textContent=`Click me`,n.title=`simple column header test with a button click listener`,n.addEventListener(`click`,()=>alert(`Hello World`)),n.appendChild(t),o.appendChild(document.createTextNode(`Id `)),o.appendChild(n),this.columns=[{id:`num`,name:o,field:`num`,type:`number`,columnPickerLabel:`Custom Label`,width:140,maxWidth:150,excludeFromExport:!0,resizable:!0,filterable:!0,selectable:!1},{id:`title`,name:`Title`,field:`title`,width:50,minWidth:50,cssClass:`cell-title`,filterable:!0,sortable:!0},{id:`duration`,name:`Duration`,field:`duration`,minWidth:50,width:60,filterable:!0,filter:{model:uu.slider,operator:`>=`},sortable:!0,type:`number`,groupTotalsFormatter:FA.sumTotals,params:{groupFormatterPrefix:`Total: `}},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:70,width:90,formatter:sI.percentCompleteBar,filterable:!0,filter:{model:uu.compoundSlider},sortable:!0,type:`number`,groupTotalsFormatter:FA.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,minWidth:60,filterable:!0,filter:{model:uu.compoundDate},sortable:!0,type:`dateIso`,formatter:sI.dateIso,exportWithFormatter:!0},{id:`finish`,name:`Finish`,field:`finish`,minWidth:60,filterable:!0,filter:{model:uu.compoundDate},sortable:!0,type:`dateIso`,formatter:sI.dateIso,exportWithFormatter:!0},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:uu.compoundInputNumber},type:`number`,formatter:sI.currency,groupTotalsFormatter:FA.sumTotalsCurrency,params:{displayNegativeNumberWithParentheses:!0,currencyPrefix:`€`,groupFormatterCurrencyPrefix:`€`,minDecimal:2,maxDecimal:4,groupFormatterPrefix:`<b>Total</b>: `},excelExportOptions:{style:{font:{outline:!1,italic:!0},format:`€0.00##;[Red](€0.00##)`},width:18},groupTotalsExcelExportOptions:{style:{alignment:{horizontal:`center`},font:{bold:!0,color:`FF005289`,underline:`single`,fontName:`Consolas`,size:10},fill:{type:`pattern`,patternType:`solid`,fgColor:`FFE6F2F6`},border:{top:{color:`FFa500ff`,style:`thick`},left:{color:`FFa500ff`,style:`medium`},right:{color:`FFa500ff`,style:`dotted`},bottom:{color:`FFa500ff`,style:`double`}},format:`"Total: "€0.00##;[Red]"Total: "(€0.00##)`}}},{id:`effort-driven`,name:`Effort Driven`,minWidth:20,width:80,maxWidth:80,cssClass:`cell-effort-driven`,field:`effortDriven`,formatter:sI.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelExport:!0,enableFiltering:!0,enableGrouping:!0,groupItemMetadataOption:{toggleOnNodeTitle:!0},enableTextExport:!0,gridMenu:{hideCommands:[`toggle-dark-mode`]},excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],showCustomFooter:!0,customFooterOptions:{hideMetrics:!1,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},enablePdfExport:!0,pdfExportOptions:{repeatHeadersOnEachPage:!1,sanitizeDataExport:!0,documentTitle:`Grouping Grid`}},this.loadData(w)}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}loadData(o){let n=[];for(let t=0;t<o;t++){let l=2e3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),E=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),g=t%33===0?null:Math.round(Math.random()*1e4)/100;n[t]={id:`id_`+t,num:t,title:`Task `+t,duration:Math.round(Math.random()*100)+``,percentComplete:h,percentCompleteNumber:h,start:new Date(l,p,E),finish:new Date(l,p+1,E),cost:t%3?g:g!==null?-g:null,effortDriven:t%5===0}}this.dataset=n}clearGrouping(){this.dataviewObj.setGrouping([])}clearFilters(){this.angularGrid.filterService.clearFilters()}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`Export`})}exportToFile(o=`csv`){this.textExportService.exportToFile({delimiter:o===`csv`?`,`:`	`,filename:`myExport`,format:o===`csv`?`csv`:`txt`})}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new fT.Avg(`percentComplete`),new fT.Sum(`cost`)],comparer:(o,n)=>zA.numeric(o.value,n.value,se.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationOrderByCount(o){this.angularGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping({getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,comparer:(n,t)=>n.count-t.count,aggregators:[new fT.Avg(`percentComplete`),new fT.Sum(`cost`)],aggregateCollapsed:o,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new fT.Sum(`duration`),new fT.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:n=>`Effort-Driven: ${n.value?`True`:`False`} <span style="color:green">(${n.count} items)</span>`,aggregators:[new fT.Avg(`percentComplete`),new fT.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}groupByDurationEffortDrivenPercent(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0},{columnId:`percentComplete`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new fT.Sum(`duration`),new fT.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:n=>`Effort-Driven: ${n.value?`True`:`False`}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new fT.Sum(`duration`),new fT.Sum(`cost`)],lazyTotalsCalculation:!0},{getter:`percentComplete`,formatter:n=>`% Complete: ${n.value}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new fT.Avg(`percentComplete`)],aggregateCollapsed:!0,collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=WE({type:m,selectors:[[`ng-component`]],decls:113,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example13.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators`,`target`,`_blank`],[1,`row`],[1,`col-sm-12`],[`data-test`,`add-5k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-50k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`clear-filter-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-collapse-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-percent-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[`gridId`,`grid13`,3,`onBeforeExportToTextFile`,`onAfterExportToTextFile`,`onBeforeExportToExcel`,`onAfterExportToExcel`,`onBeforeExportToPdf`,`onAfterExportToPdf`,`onAngularGridCreated`,`dataset`,`columns`,`options`]],template:function(n,t){n&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 13: Grouping & Aggregators
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return t.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    (`),vi(20,`a`,7),lD(21,`Wiki docs`),Rc(),lD(22,`)
    `),vi(23,`ul`),lD(24,`
      `),vi(25,`li`),lD(26,`Fully dynamic and interactive multi-level grouping with filtering and aggregates over 50'000 items`),Rc(),lD(27,`
      `),vi(28,`li`),lD(29,`Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..`),Rc(),lD(30,`
    `),Rc(),lD(31,`
  `),Rc(),lD(32,`

  `),vi(33,`div`,8),lD(34,`
    `),vi(35,`div`,9),lD(36,`
      `),vi(37,`button`,10),Ap(`click`,function(){return t.loadData(5e3)}),lD(38,`5K rows`),Rc(),lD(39,`
      `),vi(40,`button`,11),Ap(`click`,function(){return t.loadData(5e4)}),lD(41,`50K rows`),Rc(),lD(42,`
      `),vi(43,`button`,12),Ap(`click`,function(){return t.clearGrouping()}),lD(44,`
        `),_p(45,`i`,13),lD(46,` Clear Grouping
      `),Rc(),lD(47,`
      `),vi(48,`button`,14),Ap(`click`,function(){return t.clearFilters()}),lD(49,`
        `),_p(50,`i`,13),lD(51,` Clear Filters
      `),Rc(),lD(52,`
      `),vi(53,`button`,15),Ap(`click`,function(){return t.collapseAllGroups()}),lD(54,`
        `),_p(55,`i`,16),lD(56,` Collapse all groups
      `),Rc(),lD(57,`
      `),vi(58,`button`,17),Ap(`click`,function(){return t.expandAllGroups()}),lD(59,`
        `),_p(60,`i`,18),lD(61,` Expand all groups
      `),Rc(),lD(62,`
      `),vi(63,`button`,19),Ap(`click`,function(){return t.exportToExcel()}),lD(64,`
        `),_p(65,`i`,20),lD(66,` Export to Excel
      `),Rc(),lD(67,`
      `),vi(68,`button`,21),Ap(`click`,function(){return t.exportToPdf()}),lD(69,`
        `),_p(70,`i`,22),lD(71,` Export to PDF
      `),Rc(),lD(72,`
    `),Rc(),lD(73,`
  `),Rc(),lD(74,`
  `),_p(75,`hr`),lD(76,`
  `),vi(77,`div`,8),lD(78,`
    `),vi(79,`div`,9),lD(80,`
      `),vi(81,`button`,23),Ap(`click`,function(){return t.groupByDuration()}),lD(82,`
        Group by duration & sort groups by value
      `),Rc(),lD(83,`
      `),vi(84,`button`,24),Ap(`click`,function(){return t.groupByDurationOrderByCount(!1)}),lD(85,`
        Group by duration & sort groups by count
      `),Rc(),lD(86,`
    `),Rc(),lD(87,`
  `),Rc(),lD(88,`
  `),vi(89,`div`,8),lD(90,`
    `),vi(91,`div`,9),lD(92,`
      `),vi(93,`button`,25),Ap(`click`,function(){return t.groupByDurationOrderByCount(!0)}),lD(94,`
        Group by duration & sort groups by count, aggregate collapsed
      `),Rc(),lD(95,`
      `),vi(96,`button`,26),Ap(`click`,function(){return t.groupByDurationEffortDriven()}),lD(97,`
        Group by duration then effort-driven
      `),Rc(),lD(98,`
      `),vi(99,`button`,27),Ap(`click`,function(){return t.groupByDurationEffortDrivenPercent()}),lD(100,`
        Group by duration then effort-driven then percent.
      `),Rc(),lD(101,`
      `),vi(102,`span`,28),lD(103,`
        `),_p(104,`i`,29),lD(105,`
      `),Rc(),lD(106,`
    `),Rc(),lD(107,`
  `),Rc(),lD(108,`

  `),vi(109,`angular-slickgrid`,30),Ap(`onBeforeExportToTextFile`,function(){return t.processing=!0})(`onAfterExportToTextFile`,function(){return t.processing=!1})(`onBeforeExportToExcel`,function(){return t.processing=!0})(`onAfterExportToExcel`,function(){return t.processing=!1})(`onBeforeExportToPdf`,function(){return t.processing=!0})(`onAfterExportToPdf`,function(){return t.processing=!1})(`onAngularGridCreated`,function(p){return t.angularGridReady(p.detail)}),lD(110,`
  `),Rc(),lD(111,`
`),Rc(),lD(112,`
`)),n&2&&(dv(102),bp(`hidden`,!t.processing),dv(7),bp(`dataset`,t.dataset)(`columns`,t.columns)(`options`,t.gridOptions))},dependencies:[D1],styles:[`.slick-column-name[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus{outline:2px solid rgba(53,53,53,.5)}`]})}}return m})();export{P as Example13Component};