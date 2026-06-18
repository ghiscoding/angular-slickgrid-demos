import {m as mh}from'./chunk-BpxR36ms.js';import {c as c$1}from'./chunk-B7lLOQQM.js';import {A as Ao,a1 as FP,a0 as xB,h as Tu,k as kM,q as qN,i as MB,a2 as te$1,T as TI,U as U1,F as En,a5 as bn,a6 as An,a7 as Mn,a8 as rt,K as Cn,a9 as Vn,O as qt,aa as Ht,u as ui,B as BE,f as fp,a as ap,d as Tc,ab as YI,e as Uy,ac as KI,g as sp,Z as rE,P as Ap,ad as ZI,R as Ov,n as uE,ae as zE,V as xp,W as Lv,M as Mp,_ as Kl,Y as WE,$ as Jl}from'./main-C6PQTYH6.js';import {Z as Ze}from'./chunk-CP-2FMG8.js';function Z(m,b){if(m&1&&(BE(0,`
                    `),ui(1,"option",40),BE(2),Tc(),BE(3,`
                  `)),m&2){let t=b.$implicit;Uy(),sp("ngValue",t.id),Uy(),Mp(t.name);}}function ee(m,b){if(m&1){let t=rE();BE(0,`
              `),ui(1,"div",37),BE(2,`
                `),ui(3,"select",38),Ap("ngModelChange",function(n){let l=Kl(t).$index,d=uE();return WE(d.selectedGroupingFields()[l],n)||(d.selectedGroupingFields()[l]=n),Jl(n)}),fp("ngModelChange",function(n){let l=Kl(t).$index,d=uE();return Jl(d.onDropdownChange(n,l))}),BE(4,`
                  `),ap(5,"option",39),BE(6,`
                  `),YI(7,Z,4,2,null,null,ZI),Tc(),Ov(),BE(9,`
              `),Tc(),BE(10,`
            `);}if(m&2){let t=b.$index,o=uE();Uy(3),sp("name",zE("group-field-",t)),xp("ngModel",o.selectedGroupingFields()[t]),Lv(),Uy(4),KI(o.columns);}}var te=1e4,ue=(()=>{class m{constructor(){this._darkMode=false,this.durationOrderByCount=false,this.hideSubTitle=false,this.processing=false,this.selectedGroupingFields=Ao(["","",""]),this.excelExportService=new Ze,this.pdfExportService=new mh,this.textExportService=new c$1,this.loadData(te),this.defineGrid();}ngOnInit(){this.defineGrid();}ngOnDestroy(){document.querySelector(".panel-wm-content")?.classList.remove("dark-mode");let t=document.querySelector("#demo-container");t?.dataset&&(t.dataset.bsTheme="light");}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid,this.dataviewObj=t.dataView;}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",columnGroup:"Common Factor",hidden:true,width:70,minWidth:50,cssClass:"cell-title",filterable:true,sortable:true,grouping:{getter:"title",formatter:t=>`Title: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new FP.Sum("cost")],aggregateCollapsed:false,collapsed:false}},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor",width:70,sortable:true,filterable:true,editor:{model:kM.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:true},filter:{model:Tu.slider,operator:">="},type:"number",groupTotalsFormatter:xB.sumTotals,grouping:{getter:"duration",formatter:t=>`Duration: ${t.value} <span class="text-primary">(${t.count} items)</span>`,comparer:(t,o)=>this.durationOrderByCount?t.count-o.count:MB.numeric(t.value,o.value,te$1.asc),aggregators:[new FP.Sum("duration"),new FP.Sum("cost")],aggregateCollapsed:false,collapsed:false}},{id:"start",name:"Start",field:"start",columnGroup:"Period",minWidth:60,sortable:true,filterable:true,filter:{model:Tu.compoundDate},formatter:qN.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:true,grouping:{getter:"start",formatter:t=>`Start: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new FP.Sum("cost")],aggregateCollapsed:false,collapsed:false}},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period",minWidth:60,sortable:true,filterable:true,filter:{model:Tu.compoundDate},formatter:qN.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:true,grouping:{getter:"finish",formatter:t=>`Finish: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new FP.Sum("cost")],aggregateCollapsed:false,collapsed:false}},{id:"cost",name:"Cost",field:"cost",columnGroup:"Analysis",width:90,sortable:true,filterable:true,filter:{model:Tu.compoundInput},formatter:qN.dollar,groupTotalsFormatter:xB.sumTotalsDollar,type:"number",grouping:{getter:"cost",formatter:t=>`Cost: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new FP.Sum("cost")],aggregateCollapsed:true,collapsed:true}},{id:"percentComplete",name:"% Complete",field:"percentComplete",columnGroup:"Analysis",minWidth:70,width:90,formatter:qN.percentCompleteBar,type:"number",filterable:true,filter:{model:Tu.compoundSlider},sortable:true,groupTotalsFormatter:xB.avgTotalsPercentage,grouping:{getter:"percentComplete",formatter:t=>`% Complete: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new FP.Sum("cost")],aggregateCollapsed:false,collapsed:false},params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"effortDriven",name:"Effort-Driven",field:"effortDriven",columnGroup:"Analysis",width:80,minWidth:20,maxWidth:100,cssClass:"cell-effort-driven",sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect},formatter:qN.checkmarkMaterial,grouping:{getter:"effortDriven",formatter:t=>`Effort-Driven: ${t.value?"True":"False"} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new FP.Sum("duration"),new FP.Sum("cost")],collapsed:false}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableDraggableGrouping:true,autoEdit:true,autoCommitEdit:true,editable:true,enableCellNavigation:true,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:30,createTopHeaderPanel:true,showTopHeaderPanel:true,topHeaderPanelHeight:35,showCustomFooter:true,enableFiltering:true,enableSorting:true,textExportOptions:{sanitizeDataExport:true},gridMenu:{onCommand:(t,o)=>{o.command==="toggle-preheader"&&this.clearGrouping();}},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by the column",deleteIconCssClass:"mdi mdi-close color-danger",sortAscIconCssClass:"mdi mdi-arrow-up",sortDescIconCssClass:"mdi mdi-arrow-down",onGroupChanged:(t,o)=>this.onGroupChanged(o),onExtensionRegistered:t=>this.draggableGroupingPlugin=t,initialGroupBy:["duration"]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:true},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:true,documentTitle:"Grouping Grid"}},this.loadData(500);}loadData(t){let o=[];for(let n=0;n<t;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),y=Math.floor(Math.random()*29),v=Math.round(Math.random()*100),k=Math.round(Math.random()*1e4)/100;o[n]={id:"id_"+n,num:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:v,percentCompleteNumber:v,start:new Date(l,d,y),finish:new Date(l,d+1,y),cost:n%33===0?-k:k,effortDriven:n%5===0};}this.dataset=o;}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping();}clearGrouping(t=true){this.draggableGroupingPlugin?.clearDroppedGroups(),t&&this.gridObj?.invalidate();}clearGroupingSelects(){this.selectedGroupingFields.set(["","",""]);}collapseAllGroups(){this.dataviewObj.collapseAllGroups();}expandAllGroups(){this.dataviewObj.expandAllGroups();}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"});}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"});}exportToCsv(t="csv"){this.textExportService.exportToFile({delimiter:t==="csv"?",":"	",filename:"myExport",format:t==="csv"?"csv":"txt"});}groupByDurationOrderByCount(t=false){if(this.durationOrderByCount=t,this.clearGrouping(false),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups("duration");let o=t?[]:[{columnId:"duration",sortAsc:true}];this.gridObj?.setSortColumns(o),this.gridObj?.invalidate();}}groupByDurationEffortDriven(){this.clearGrouping(false),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(["duration","effortDriven"]),this.gridObj?.invalidate());}groupByFieldName(t,o){if(this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups){let n=this.selectedGroupingFields().filter(l=>l!=="");this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(n),this.gridObj.invalidate();}}onGroupChanged(t){let o=t?.caller||[],n=t?.groupColumns||[];if(Array.isArray(n)&&n.length>0){let l=n.map(d=>d?.getter??"");for(;l.length<3;)l.push("");this.selectedGroupingFields.set(l);}else n.length===0&&o==="remove-group"&&this.clearGroupingSelects();}onCellChanged(){this.angularGrid.dataView?.refresh();}onDropdownChange(t,o){let n=[...this.selectedGroupingFields()];n[o]=t,this.selectedGroupingFields.set(n),this.groupByFieldName(t,o);}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(true);}selectTrackByFn(t,o){return t}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:"percentComplete",operator:">=",searchTerms:["55"]},{columnId:"cost",operator:"<",searchTerms:["80"]}]);}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"percentComplete",direction:"ASC"}]);}toggleDraggableGroupingRow(){this.clearGrouping(),this.gridObj.setPreHeaderPanelVisibility(!this.gridObj.getOptions().showPreHeaderPanel);}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode});}toggleBodyBackground(){let t=document.querySelector(".panel-wm-content"),o=document.querySelector("#demo-container"),n="light";this._darkMode?(t?.classList.add("dark-mode"),n="dark"):(t?.classList.remove("dark-mode"),n="light"),o?.dataset&&(o.dataset.bsTheme=n);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList?.[t]("hidden"),this.angularGrid.resizerService?.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||m)};}static{this.\u0275cmp=TI({type:m,selectors:[["ng-component"]],decls:162,vars:3,consts:[["id","demo-container",1,"container-fluid"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example18.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators","target","_blank"],[1,"form-inline"],[1,"row"],[1,"col-sm-12"],["data-test","add-5k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","add-50k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],[1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-file-excel-outline","text-success"],[1,"mdi","mdi-file-pdf-outline","text-danger"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-sort-count-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-filter-outline"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-sort-ascending"],[1,"row","mt-2"],[1,"form-row"],[1,"row","form-group"],["for","field1",1,"col-sm-3","mb-2"],[1,"row","mt-1","mb-1"],["gridId","grid18",3,"onCellChange","onAngularGridCreated","dataset","columns","options"],[1,"form-group","col-md-3","grouping-selects"],[1,"form-select",3,"ngModelChange","name","ngModel"],["value",""],[3,"ngValue"]],template:function(o,n){o&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 18: Draggable Grouping & Aggregators
    `),ui(4,"button",1),fp("click",function(){return n.toggleSubTitle()}),BE(5,`
      `),ap(6,"span",2),BE(7,`
    `),Tc(),BE(8,`
    `),ui(9,"button",3),fp("click",function(){return n.toggleDarkMode()}),BE(10,`
      `),ap(11,"span",4),BE(12,`
      `),ui(13,"span"),BE(14,"Toggle Dark Mode"),Tc(),BE(15,`
    `),Tc(),BE(16,`
    `),ui(17,"span",5),BE(18,`
      `),ui(19,"a",6),BE(20,`
        `),ap(21,"span",7),BE(22,` code
      `),Tc(),BE(23,`
    `),Tc(),BE(24,`
  `),Tc(),BE(25,`

  `),ui(26,"div",8),BE(27,`
    `),ui(28,"ul"),BE(29,`
      `),ui(30,"li"),BE(31,`
        `),ui(32,"a",9),BE(33,"Wiki docs"),Tc(),BE(34,`
      `),Tc(),BE(35,`
      `),ui(36,"li"),BE(37,"This example shows 3 ways of grouping"),Tc(),BE(38,`
      `),ui(39,"ol"),BE(40,`
        `),ui(41,"li"),BE(42,`
          Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
          drop area).
        `),Tc(),BE(43,`
        `),ui(44,"li"),BE(45,"Use buttons and defined functions to group by wichever field you want"),Tc(),BE(46,`
        `),ui(47,"li"),BE(48,"Use the Select dropdown to group, the position of the Selects represent the grouping level"),Tc(),BE(49,`
      `),Tc(),BE(50,`
      `),ui(51,"li"),BE(52,"Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items"),Tc(),BE(53,`
      `),ui(54,"li"),BE(55,"Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows).."),Tc(),BE(56,`
      `),ui(57,"li"),BE(58,'Use "Aggregators" and "GroupTotalFormatters" directly from Angular-Slickgrid'),Tc(),BE(59,`
    `),Tc(),BE(60,`
  `),Tc(),BE(61,`

  `),ui(62,"form",10),BE(63,`
    `),ui(64,"div",11),BE(65,`
      `),ui(66,"div",12),BE(67,`
        `),ui(68,"button",13),fp("click",function(){return n.loadData(5e3)}),BE(69,"5K rows"),Tc(),BE(70,`
        `),ui(71,"button",14),fp("click",function(){return n.loadData(5e4)}),BE(72,"50K rows"),Tc(),BE(73,`
        `),ui(74,"button",15),fp("click",function(){return n.clearGroupsAndSelects()}),BE(75,`
          `),ap(76,"i",16),BE(77,` Clear grouping
        `),Tc(),BE(78,`
        `),ui(79,"button",17),fp("click",function(){return n.collapseAllGroups()}),BE(80,`
          `),ap(81,"i",18),BE(82,` Collapse all groups
        `),Tc(),BE(83,`
        `),ui(84,"button",19),fp("click",function(){return n.expandAllGroups()}),BE(85,`
          `),ap(86,"i",20),BE(87,` Expand all groups
        `),Tc(),BE(88,`
        `),ui(89,"button",21),fp("click",function(){return n.toggleDraggableGroupingRow()}),BE(90,`
          Toggle Draggable Grouping Row
        `),Tc(),BE(91,`
        `),ui(92,"button",21),fp("click",function(){return n.exportToExcel()}),BE(93,`
          `),ap(94,"i",22),BE(95,` Export to Excel
        `),Tc(),BE(96,`
        `),ui(97,"button",21),fp("click",function(){return n.exportToPdf()}),BE(98,`
          `),ap(99,"i",23),BE(100,` Export to PDF
        `),Tc(),BE(101,`
      `),Tc(),BE(102,`
    `),Tc(),BE(103,`
    `),ui(104,"div",11),BE(105,`
      `),ui(106,"div",12),BE(107,`
        `),ui(108,"button",24),fp("click",function(){return n.groupByDurationOrderByCount(false)}),BE(109,`
          Group by duration & sort groups by value
        `),Tc(),BE(110,`
        `),ui(111,"button",25),fp("click",function(){return n.groupByDurationOrderByCount(true)}),BE(112,`
          Group by duration & sort groups by count
        `),Tc(),BE(113,`
        `),ui(114,"button",26),fp("click",function(){return n.groupByDurationEffortDriven()}),BE(115,`
          Group by Duration & then Effort-Driven
        `),Tc(),BE(116,`
        `),ui(117,"button",27),fp("click",function(){return n.setFiltersDynamically()}),BE(118,`
          `),ap(119,"span",28),BE(120,`
          `),ui(121,"span"),BE(122," Set Filters Dynamically "),Tc(),BE(123,`
        `),Tc(),BE(124,`
        `),ui(125,"button",29),fp("click",function(){return n.setSortingDynamically()}),BE(126,`
          `),ap(127,"span",30),BE(128,`
          `),ui(129,"span"),BE(130," Set Sorting Dynamically "),Tc(),BE(131,`
        `),Tc(),BE(132,`
      `),Tc(),BE(133,`
    `),Tc(),BE(134,`
    `),ui(135,"div",31),BE(136,`
      `),ui(137,"div",12),BE(138,`
        `),ui(139,"div",32),BE(140,`
          `),ui(141,"div",33),BE(142,`
            `),ui(143,"label",34),BE(144,"Group by field(s)"),Tc(),BE(145,`
            `),YI(146,ee,11,3,null,null,n.selectTrackByFn,true),Tc(),BE(148,`
        `),Tc(),BE(149,`
      `),Tc(),BE(150,`
    `),Tc(),BE(151,`
  `),Tc(),BE(152,`
  `),ui(153,"div",35),BE(154,`
    `),ap(155,"hr"),BE(156,`
  `),Tc(),BE(157,`

  `),ui(158,"angular-slickgrid",36),fp("onCellChange",function(){return n.onCellChanged()})("onAngularGridCreated",function(d){return n.angularGridReady(d.detail)}),BE(159,`
  `),Tc(),BE(160,`
`),Tc(),BE(161,`
`)),o&2&&(Uy(146),KI(n.selectedGroupingFields()),Uy(12),sp("dataset",n.dataset)("columns",n.columns)("options",n.gridOptions));},dependencies:[U1,En,bn,An,Mn,rt,Cn,Vn,qt,Ht],encapsulation:2});}}return m})();export{ue as Example18Component};