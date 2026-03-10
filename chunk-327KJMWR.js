import{a as k}from"./chunk-FXNNYFVL.js";import"./chunk-FK6H3RFT.js";import{a as S}from"./chunk-MLBYNUXN.js";import{b as y}from"./chunk-BNUP54LE.js";import{Aa as x,Da as C,T as v,ja as T,wa as c,xa as s,za as d}from"./chunk-V3K67AAF.js";import{Jb as e,Oa as _,hb as b,ib as r,jb as i,kb as u,ub as a,za as g}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var w=5e3,P=(()=>{class m{constructor(){this.hideSubTitle=!1,this.processing=!1,this.excelExportService=new y,this.pdfExportService=new k,this.textExportService=new S}ngOnInit(){this.initializeGrid()}initializeGrid(){let o=document.createElement("div"),n=document.createElement("button"),t=document.createElement("span");t.className="mdi mdi-help-circle no-padding",n.dataset.test="col1-hello-btn",n.className="btn btn-outline-secondary btn-xs btn-icon ms-1",n.textContent="Click me",n.title="simple column header test with a button click listener",n.addEventListener("click",()=>alert("Hello World")),n.appendChild(t),o.appendChild(document.createTextNode("Id ")),o.appendChild(n),this.columns=[{id:"num",name:o,field:"num",type:"number",columnPickerLabel:"Custom Label",width:140,maxWidth:150,excludeFromExport:!0,resizable:!0,filterable:!0,selectable:!1},{id:"title",name:"Title",field:"title",width:50,minWidth:50,cssClass:"cell-title",filterable:!0,sortable:!0},{id:"duration",name:"Duration",field:"duration",minWidth:50,width:60,filterable:!0,filter:{model:c.slider,operator:">="},sortable:!0,type:"number",groupTotalsFormatter:x.sumTotals,params:{groupFormatterPrefix:"Total: "}},{id:"%",name:"% Complete",field:"percentComplete",minWidth:70,width:90,formatter:d.percentCompleteBar,filterable:!0,filter:{model:c.compoundSlider},sortable:!0,type:"number",groupTotalsFormatter:x.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",minWidth:60,filterable:!0,filter:{model:c.compoundDate},sortable:!0,type:"dateIso",formatter:d.dateIso,exportWithFormatter:!0},{id:"finish",name:"Finish",field:"finish",minWidth:60,filterable:!0,filter:{model:c.compoundDate},sortable:!0,type:"dateIso",formatter:d.dateIso,exportWithFormatter:!0},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:c.compoundInputNumber},type:"number",formatter:d.currency,groupTotalsFormatter:x.sumTotalsCurrency,params:{displayNegativeNumberWithParentheses:!0,currencyPrefix:"\u20AC",groupFormatterCurrencyPrefix:"\u20AC",minDecimal:2,maxDecimal:4,groupFormatterPrefix:"<b>Total</b>: "},excelExportOptions:{style:{font:{outline:!0,italic:!0},format:"\u20AC0.00##;[Red](\u20AC0.00##)"},width:18},groupTotalsExcelExportOptions:{style:{alignment:{horizontal:"center"},font:{bold:!0,color:"FF005289",underline:"single",fontName:"Consolas",size:10},fill:{type:"pattern",patternType:"solid",fgColor:"FFE6F2F6"},border:{top:{color:"FFa500ff",style:"thick"},left:{color:"FFa500ff",style:"medium"},right:{color:"FFa500ff",style:"dotted"},bottom:{color:"FFa500ff",style:"double"}},format:'"Total: "\u20AC0.00##;[Red]"Total: "(\u20AC0.00##)'}}},{id:"effort-driven",name:"Effort Driven",minWidth:20,width:80,maxWidth:80,cssClass:"cell-effort-driven",field:"effortDriven",formatter:d.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:c.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelExport:!0,enableFiltering:!0,enableGrouping:!0,enableTextExport:!0,gridMenu:{hideExportTextDelimitedCommand:!1},excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],showCustomFooter:!0,customFooterOptions:{hideMetrics:!1,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},enablePdfExport:!0,pdfExportOptions:{repeatHeadersOnEachPage:!1,sanitizeDataExport:!0,documentTitle:"Grouping Grid"}},this.loadData(w)}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}loadData(o){let n=[];for(let t=0;t<o;t++){let l=2e3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),E=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),f=t%33===0?null:Math.round(Math.random()*1e4)/100;n[t]={id:"id_"+t,num:t,title:"Task "+t,duration:Math.round(Math.random()*100)+"",percentComplete:h,percentCompleteNumber:h,start:new Date(l,p,E),finish:new Date(l,p+1,E),cost:t%3?f:f!==null?-f:null,effortDriven:t%5===0}}this.dataset=n}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"})}exportToFile(o="csv"){this.textExportService.exportToFile({delimiter:o==="csv"?",":"	",filename:"myExport",format:o==="csv"?"csv":"txt"})}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0}]),this.dataviewObj.setGrouping({getter:"duration",formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new s.Avg("percentComplete"),new s.Sum("cost")],comparer:(o,n)=>T.numeric(o.value,n.value,v.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationOrderByCount(o){this.angularGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping({getter:"duration",formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,comparer:(n,t)=>n.count-t.count,aggregators:[new s.Avg("percentComplete"),new s.Sum("cost")],aggregateCollapsed:o,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){let o=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0}];this.angularGrid.filterService.setSortColumnIcons(o),this.dataviewObj.setGrouping([{getter:"duration",formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new s.Sum("duration"),new s.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:n=>`Effort-Driven: ${n.value?"True":"False"} <span style="color:green">(${n.count} items)</span>`,aggregators:[new s.Avg("percentComplete"),new s.Sum("cost")],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}groupByDurationEffortDrivenPercent(){let o=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0},{columnId:"percentComplete",sortAsc:!0}];this.angularGrid.filterService.setSortColumnIcons(o),this.dataviewObj.setGrouping([{getter:"duration",formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new s.Sum("duration"),new s.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:n=>`Effort-Driven: ${n.value?"True":"False"}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new s.Sum("duration"),new s.Sum("cost")],lazyTotalsCalculation:!0},{getter:"percentComplete",formatter:n=>`% Complete: ${n.value}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new s.Avg("percentComplete")],aggregateCollapsed:!0,collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(n){return new(n||m)}}static{this.\u0275cmp=_({type:m,selectors:[["ng-component"]],decls:108,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example13.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators","target","_blank"],[1,"row"],[1,"col-sm-12"],["data-test","add-5k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","add-50k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],["data-test","export-excel-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-file-excel-outline","text-success"],["data-test","export-pdf-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-file-pdf-outline","text-danger"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-sort-count-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-sort-count-collapse-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-effort-percent-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],["gridId","grid13",3,"onBeforeExportToTextFile","onAfterExportToTextFile","onBeforeExportToExcel","onAfterExportToExcel","onBeforeExportToPdf","onAfterExportToPdf","onAngularGridCreated","dataset","columns","options"]],template:function(n,t){n&1&&(r(0,"div",0),e(1,`
  `),r(2,"h2"),e(3,`
    Example 13: Grouping & Aggregators
    `),r(4,"span",1),e(5,`
      `),r(6,"a",2),e(7,`
        `),u(8,"span",3),e(9,` code
      `),i(),e(10,`
    `),i(),e(11,`
    `),r(12,"button",4),a("click",function(){return t.toggleSubTitle()}),e(13,`
      `),u(14,"span",5),e(15,`
    `),i(),e(16,`
  `),i(),e(17,`

  `),r(18,"div",6),e(19,`
    (`),r(20,"a",7),e(21,"Wiki docs"),i(),e(22,`)
    `),r(23,"ul"),e(24,`
      `),r(25,"li"),e(26,"Fully dynamic and interactive multi-level grouping with filtering and aggregates over 50'000 items"),i(),e(27,`
      `),r(28,"li"),e(29,"Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows).."),i(),e(30,`
    `),i(),e(31,`
  `),i(),e(32,`

  `),r(33,"div",8),e(34,`
    `),r(35,"div",9),e(36,`
      `),r(37,"button",10),a("click",function(){return t.loadData(5e3)}),e(38,"5K rows"),i(),e(39,`
      `),r(40,"button",11),a("click",function(){return t.loadData(5e4)}),e(41,"50K rows"),i(),e(42,`
      `),r(43,"button",12),a("click",function(){return t.clearGrouping()}),e(44,`
        `),u(45,"i",13),e(46,` Clear grouping
      `),i(),e(47,`
      `),r(48,"button",14),a("click",function(){return t.collapseAllGroups()}),e(49,`
        `),u(50,"i",15),e(51,` Collapse all groups
      `),i(),e(52,`
      `),r(53,"button",16),a("click",function(){return t.expandAllGroups()}),e(54,`
        `),u(55,"i",17),e(56,` Expand all groups
      `),i(),e(57,`
      `),r(58,"button",18),a("click",function(){return t.exportToExcel()}),e(59,`
        `),u(60,"i",19),e(61,` Export to Excel
      `),i(),e(62,`
      `),r(63,"button",20),a("click",function(){return t.exportToPdf()}),e(64,`
        `),u(65,"i",21),e(66,` Export to PDF
      `),i(),e(67,`
    `),i(),e(68,`
  `),i(),e(69,`
  `),u(70,"hr"),e(71,`
  `),r(72,"div",8),e(73,`
    `),r(74,"div",9),e(75,`
      `),r(76,"button",22),a("click",function(){return t.groupByDuration()}),e(77,`
        Group by duration & sort groups by value
      `),i(),e(78,`
      `),r(79,"button",23),a("click",function(){return t.groupByDurationOrderByCount(!1)}),e(80,`
        Group by duration & sort groups by count
      `),i(),e(81,`
    `),i(),e(82,`
  `),i(),e(83,`
  `),r(84,"div",8),e(85,`
    `),r(86,"div",9),e(87,`
      `),r(88,"button",24),a("click",function(){return t.groupByDurationOrderByCount(!0)}),e(89,`
        Group by duration & sort groups by count, aggregate collapsed
      `),i(),e(90,`
      `),r(91,"button",25),a("click",function(){return t.groupByDurationEffortDriven()}),e(92,`
        Group by duration then effort-driven
      `),i(),e(93,`
      `),r(94,"button",26),a("click",function(){return t.groupByDurationEffortDrivenPercent()}),e(95,`
        Group by duration then effort-driven then percent.
      `),i(),e(96,`
      `),r(97,"span",27),e(98,`
        `),u(99,"i",28),e(100,`
      `),i(),e(101,`
    `),i(),e(102,`
  `),i(),e(103,`

  `),r(104,"angular-slickgrid",29),a("onBeforeExportToTextFile",function(){return t.processing=!0})("onAfterExportToTextFile",function(){return t.processing=!1})("onBeforeExportToExcel",function(){return t.processing=!0})("onAfterExportToExcel",function(){return t.processing=!1})("onBeforeExportToPdf",function(){return t.processing=!0})("onAfterExportToPdf",function(){return t.processing=!1})("onAngularGridCreated",function(p){return t.angularGridReady(p.detail)}),e(105,`
  `),i(),e(106,`
`),i(),e(107,`
`)),n&2&&(g(97),b("hidden",!t.processing),g(7),b("dataset",t.dataset)("columns",t.columns)("options",t.gridOptions))},dependencies:[C],styles:[".slick-column-name[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus{outline:2px solid rgba(53,53,53,.5)}"]})}}return m})();export{P as Example13Component};
