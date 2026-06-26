import {m as mh}from'./chunk-4Yz8tzqK.js';import {c as c$1}from'./chunk-D0CqchKx.js';import {Z as Ze}from'./chunk-Df9HDp2d.js';import {a0 as OB,f as Tu,X as XN,a1 as PP,g as LB,a2 as te,b as bI,j as j1,u as ui,U as UE,c as cp,T as Tc,p as pp,W as Wy,d as ap}from'./main-WTCLCICA.js';var w=5e3,P=(()=>{class m{constructor(){this.hideSubTitle=false,this.processing=false,this.excelExportService=new Ze,this.pdfExportService=new mh,this.textExportService=new c$1;}ngOnInit(){this.initializeGrid();}initializeGrid(){let o=document.createElement("div"),n=document.createElement("button"),t=document.createElement("span");t.className="mdi mdi-help-circle no-padding",n.dataset.test="col1-hello-btn",n.className="btn btn-outline-secondary btn-xs btn-icon ms-1",n.textContent="Click me",n.title="simple column header test with a button click listener",n.addEventListener("click",()=>alert("Hello World")),n.appendChild(t),o.appendChild(document.createTextNode("Id ")),o.appendChild(n),this.columns=[{id:"num",name:o,field:"num",type:"number",columnPickerLabel:"Custom Label",width:140,maxWidth:150,excludeFromExport:true,resizable:true,filterable:true,selectable:false},{id:"title",name:"Title",field:"title",width:50,minWidth:50,cssClass:"cell-title",filterable:true,sortable:true},{id:"duration",name:"Duration",field:"duration",minWidth:50,width:60,filterable:true,filter:{model:Tu.slider,operator:">="},sortable:true,type:"number",groupTotalsFormatter:OB.sumTotals,params:{groupFormatterPrefix:"Total: "}},{id:"%",name:"% Complete",field:"percentComplete",minWidth:70,width:90,formatter:XN.percentCompleteBar,filterable:true,filter:{model:Tu.compoundSlider},sortable:true,type:"number",groupTotalsFormatter:OB.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",minWidth:60,filterable:true,filter:{model:Tu.compoundDate},sortable:true,type:"dateIso",formatter:XN.dateIso,exportWithFormatter:true},{id:"finish",name:"Finish",field:"finish",minWidth:60,filterable:true,filter:{model:Tu.compoundDate},sortable:true,type:"dateIso",formatter:XN.dateIso,exportWithFormatter:true},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:true,filterable:true,filter:{model:Tu.compoundInputNumber},type:"number",formatter:XN.currency,groupTotalsFormatter:OB.sumTotalsCurrency,params:{displayNegativeNumberWithParentheses:true,currencyPrefix:"\u20AC",groupFormatterCurrencyPrefix:"\u20AC",minDecimal:2,maxDecimal:4,groupFormatterPrefix:"<b>Total</b>: "},excelExportOptions:{style:{font:{outline:false,italic:true},format:"\u20AC0.00##;[Red](\u20AC0.00##)"},width:18},groupTotalsExcelExportOptions:{style:{alignment:{horizontal:"center"},font:{bold:true,color:"FF005289",underline:"single",fontName:"Consolas",size:10},fill:{type:"pattern",patternType:"solid",fgColor:"FFE6F2F6"},border:{top:{color:"FFa500ff",style:"thick"},left:{color:"FFa500ff",style:"medium"},right:{color:"FFa500ff",style:"dotted"},bottom:{color:"FFa500ff",style:"double"}},format:'"Total: "\u20AC0.00##;[Red]"Total: "(\u20AC0.00##)'}}},{id:"effort-driven",name:"Effort Driven",minWidth:20,width:80,maxWidth:80,cssClass:"cell-effort-driven",field:"effortDriven",formatter:XN.checkmarkMaterial,sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelExport:true,enableFiltering:true,enableGrouping:true,groupItemMetadataOption:{toggleOnNodeTitle:true},enableTextExport:true,gridMenu:{hideExportTextDelimitedCommand:false},excelExportOptions:{sanitizeDataExport:true},textExportOptions:{sanitizeDataExport:true},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],showCustomFooter:true,customFooterOptions:{hideMetrics:false,hideTotalItemCount:false,hideLastUpdateTimestamp:false},enablePdfExport:true,pdfExportOptions:{repeatHeadersOnEachPage:false,sanitizeDataExport:true,documentTitle:"Grouping Grid"}},this.loadData(w);}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration();}loadData(o){let n=[];for(let t=0;t<o;t++){let l=2e3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),E=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),f=t%33===0?null:Math.round(Math.random()*1e4)/100;n[t]={id:"id_"+t,num:t,title:"Task "+t,duration:Math.round(Math.random()*100)+"",percentComplete:h,percentCompleteNumber:h,start:new Date(l,p,E),finish:new Date(l,p+1,E),cost:t%3?f:f!==null?-f:null,effortDriven:t%5===0};}this.dataset=n;}clearGrouping(){this.dataviewObj.setGrouping([]);}clearFilters(){this.angularGrid.filterService.clearFilters();}collapseAllGroups(){this.dataviewObj.collapseAllGroups();}expandAllGroups(){this.dataviewObj.expandAllGroups();}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"});}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"});}exportToFile(o="csv"){this.textExportService.exportToFile({delimiter:o==="csv"?",":"	",filename:"myExport",format:o==="csv"?"csv":"txt"});}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:true}]),this.dataviewObj.setGrouping({getter:"duration",formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new PP.Avg("percentComplete"),new PP.Sum("cost")],comparer:(o,n)=>LB.numeric(o.value,n.value,te.asc),aggregateCollapsed:false,lazyTotalsCalculation:true}),this.gridObj.invalidate();}groupByDurationOrderByCount(o){this.angularGrid.filterService.setSortColumnIcons([]),this.dataviewObj.setGrouping({getter:"duration",formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,comparer:(n,t)=>n.count-t.count,aggregators:[new PP.Avg("percentComplete"),new PP.Sum("cost")],aggregateCollapsed:o,lazyTotalsCalculation:true}),this.gridObj.invalidate();}groupByDurationEffortDriven(){let o=[{columnId:"duration",sortAsc:true},{columnId:"effortDriven",sortAsc:true}];this.angularGrid.filterService.setSortColumnIcons(o),this.dataviewObj.setGrouping([{getter:"duration",formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new PP.Sum("duration"),new PP.Sum("cost")],aggregateCollapsed:true,lazyTotalsCalculation:true},{getter:"effortDriven",formatter:n=>`Effort-Driven: ${n.value?"True":"False"} <span style="color:green">(${n.count} items)</span>`,aggregators:[new PP.Avg("percentComplete"),new PP.Sum("cost")],collapsed:true,lazyTotalsCalculation:true}]),this.gridObj.invalidate();}groupByDurationEffortDrivenPercent(){let o=[{columnId:"duration",sortAsc:true},{columnId:"effortDriven",sortAsc:true},{columnId:"percentComplete",sortAsc:true}];this.angularGrid.filterService.setSortColumnIcons(o),this.dataviewObj.setGrouping([{getter:"duration",formatter:n=>`Duration: ${n.value} <span style="color:green">(${n.count} items)</span>`,aggregators:[new PP.Sum("duration"),new PP.Sum("cost")],aggregateCollapsed:true,lazyTotalsCalculation:true},{getter:"effortDriven",formatter:n=>`Effort-Driven: ${n.value?"True":"False"}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new PP.Sum("duration"),new PP.Sum("cost")],lazyTotalsCalculation:true},{getter:"percentComplete",formatter:n=>`% Complete: ${n.value}  <span style="color:green">(${n.count} items)</span>`,aggregators:[new PP.Avg("percentComplete")],aggregateCollapsed:true,collapsed:true,lazyTotalsCalculation:true}]),this.gridObj.invalidate();}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(n){return new(n||m)};}static{this.\u0275cmp=bI({type:m,selectors:[["ng-component"]],decls:113,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example13.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators","target","_blank"],[1,"row"],[1,"col-sm-12"],["data-test","add-5k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","add-50k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","clear-filter-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],["data-test","export-excel-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-file-excel-outline","text-success"],["data-test","export-pdf-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-file-pdf-outline","text-danger"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-sort-count-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-sort-count-collapse-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-effort-percent-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],["gridId","grid13",3,"onBeforeExportToTextFile","onAfterExportToTextFile","onBeforeExportToExcel","onAfterExportToExcel","onBeforeExportToPdf","onAfterExportToPdf","onAngularGridCreated","dataset","columns","options"]],template:function(n,t){n&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 13: Grouping & Aggregators
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return t.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",6),UE(19,`
    (`),ui(20,"a",7),UE(21,"Wiki docs"),Tc(),UE(22,`)
    `),ui(23,"ul"),UE(24,`
      `),ui(25,"li"),UE(26,"Fully dynamic and interactive multi-level grouping with filtering and aggregates over 50'000 items"),Tc(),UE(27,`
      `),ui(28,"li"),UE(29,"Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows).."),Tc(),UE(30,`
    `),Tc(),UE(31,`
  `),Tc(),UE(32,`

  `),ui(33,"div",8),UE(34,`
    `),ui(35,"div",9),UE(36,`
      `),ui(37,"button",10),pp("click",function(){return t.loadData(5e3)}),UE(38,"5K rows"),Tc(),UE(39,`
      `),ui(40,"button",11),pp("click",function(){return t.loadData(5e4)}),UE(41,"50K rows"),Tc(),UE(42,`
      `),ui(43,"button",12),pp("click",function(){return t.clearGrouping()}),UE(44,`
        `),cp(45,"i",13),UE(46,` Clear Grouping
      `),Tc(),UE(47,`
      `),ui(48,"button",14),pp("click",function(){return t.clearFilters()}),UE(49,`
        `),cp(50,"i",13),UE(51,` Clear Filters
      `),Tc(),UE(52,`
      `),ui(53,"button",15),pp("click",function(){return t.collapseAllGroups()}),UE(54,`
        `),cp(55,"i",16),UE(56,` Collapse all groups
      `),Tc(),UE(57,`
      `),ui(58,"button",17),pp("click",function(){return t.expandAllGroups()}),UE(59,`
        `),cp(60,"i",18),UE(61,` Expand all groups
      `),Tc(),UE(62,`
      `),ui(63,"button",19),pp("click",function(){return t.exportToExcel()}),UE(64,`
        `),cp(65,"i",20),UE(66,` Export to Excel
      `),Tc(),UE(67,`
      `),ui(68,"button",21),pp("click",function(){return t.exportToPdf()}),UE(69,`
        `),cp(70,"i",22),UE(71,` Export to PDF
      `),Tc(),UE(72,`
    `),Tc(),UE(73,`
  `),Tc(),UE(74,`
  `),cp(75,"hr"),UE(76,`
  `),ui(77,"div",8),UE(78,`
    `),ui(79,"div",9),UE(80,`
      `),ui(81,"button",23),pp("click",function(){return t.groupByDuration()}),UE(82,`
        Group by duration & sort groups by value
      `),Tc(),UE(83,`
      `),ui(84,"button",24),pp("click",function(){return t.groupByDurationOrderByCount(false)}),UE(85,`
        Group by duration & sort groups by count
      `),Tc(),UE(86,`
    `),Tc(),UE(87,`
  `),Tc(),UE(88,`
  `),ui(89,"div",8),UE(90,`
    `),ui(91,"div",9),UE(92,`
      `),ui(93,"button",25),pp("click",function(){return t.groupByDurationOrderByCount(true)}),UE(94,`
        Group by duration & sort groups by count, aggregate collapsed
      `),Tc(),UE(95,`
      `),ui(96,"button",26),pp("click",function(){return t.groupByDurationEffortDriven()}),UE(97,`
        Group by duration then effort-driven
      `),Tc(),UE(98,`
      `),ui(99,"button",27),pp("click",function(){return t.groupByDurationEffortDrivenPercent()}),UE(100,`
        Group by duration then effort-driven then percent.
      `),Tc(),UE(101,`
      `),ui(102,"span",28),UE(103,`
        `),cp(104,"i",29),UE(105,`
      `),Tc(),UE(106,`
    `),Tc(),UE(107,`
  `),Tc(),UE(108,`

  `),ui(109,"angular-slickgrid",30),pp("onBeforeExportToTextFile",function(){return t.processing=true})("onAfterExportToTextFile",function(){return t.processing=false})("onBeforeExportToExcel",function(){return t.processing=true})("onAfterExportToExcel",function(){return t.processing=false})("onBeforeExportToPdf",function(){return t.processing=true})("onAfterExportToPdf",function(){return t.processing=false})("onAngularGridCreated",function(p){return t.angularGridReady(p.detail)}),UE(110,`
  `),Tc(),UE(111,`
`),Tc(),UE(112,`
`)),n&2&&(Wy(102),ap("hidden",!t.processing),Wy(7),ap("dataset",t.dataset)("columns",t.columns)("options",t.gridOptions));},dependencies:[j1],styles:[".slick-column-name[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus{outline:2px solid rgba(53,53,53,.5)}"]});}}return m})();export{P as Example13Component};