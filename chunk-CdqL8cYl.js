import {m as mh}from'./chunk-4Yz8tzqK.js';import {c as c$1}from'./chunk-D0CqchKx.js';import {A as Ao,a1 as PP,a0 as OB,f as Tu,M as MM,X as XN,g as LB,a2 as te$1,b as bI,j as j1,F as En,a5 as bn,a6 as An,a7 as Mn,a8 as rt,J as Cn,a9 as Vn,K as qt,aa as Ht,u as ui,U as UE,p as pp,c as cp,T as Tc,ab as JI,W as Wy,ac as XI,d as ap,V as iE,R as Rp,ad as KI,O as Lv,i as fE,ae as ZE,P as Ap,Q as jv,N as Np,_ as Kl,S as zE,$ as Jl}from'./main-WTCLCICA.js';import {Z as Ze}from'./chunk-Df9HDp2d.js';function Z(m,b){if(m&1&&(UE(0,`
                    `),ui(1,"option",40),UE(2),Tc(),UE(3,`
                  `)),m&2){let t=b.$implicit;Wy(),ap("ngValue",t.id),Wy(),Np(t.name);}}function ee(m,b){if(m&1){let t=iE();UE(0,`
              `),ui(1,"div",37),UE(2,`
                `),ui(3,"select",38),Rp("ngModelChange",function(n){let l=Kl(t).$index,d=fE();return zE(d.selectedGroupingFields()[l],n)||(d.selectedGroupingFields()[l]=n),Jl(n)}),pp("ngModelChange",function(n){let l=Kl(t).$index,d=fE();return Jl(d.onDropdownChange(n,l))}),UE(4,`
                  `),cp(5,"option",39),UE(6,`
                  `),JI(7,Z,4,2,null,null,KI),Tc(),Lv(),UE(9,`
              `),Tc(),UE(10,`
            `);}if(m&2){let t=b.$index,o=fE();Wy(3),ap("name",ZE("group-field-",t)),Ap("ngModel",o.selectedGroupingFields()[t]),jv(),Wy(4),XI(o.columns);}}var te=1e4,ue=(()=>{class m{constructor(){this._darkMode=false,this.durationOrderByCount=false,this.hideSubTitle=false,this.processing=false,this.selectedGroupingFields=Ao(["","",""]),this.excelExportService=new Ze,this.pdfExportService=new mh,this.textExportService=new c$1,this.loadData(te),this.defineGrid();}ngOnInit(){this.defineGrid();}ngOnDestroy(){document.querySelector(".panel-wm-content")?.classList.remove("dark-mode");let t=document.querySelector("#demo-container");t?.dataset&&(t.dataset.bsTheme="light");}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid,this.dataviewObj=t.dataView;}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",columnGroup:"Common Factor",hidden:true,width:70,minWidth:50,cssClass:"cell-title",filterable:true,sortable:true,grouping:{getter:"title",formatter:t=>`Title: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new PP.Sum("cost")],aggregateCollapsed:false,collapsed:false}},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor",width:70,sortable:true,filterable:true,editor:{model:MM.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:true},filter:{model:Tu.slider,operator:">="},type:"number",groupTotalsFormatter:OB.sumTotals,grouping:{getter:"duration",formatter:t=>`Duration: ${t.value} <span class="text-primary">(${t.count} items)</span>`,comparer:(t,o)=>this.durationOrderByCount?t.count-o.count:LB.numeric(t.value,o.value,te$1.asc),aggregators:[new PP.Sum("duration"),new PP.Sum("cost")],aggregateCollapsed:false,collapsed:false}},{id:"start",name:"Start",field:"start",columnGroup:"Period",minWidth:60,sortable:true,filterable:true,filter:{model:Tu.compoundDate},formatter:XN.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:true,grouping:{getter:"start",formatter:t=>`Start: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new PP.Sum("cost")],aggregateCollapsed:false,collapsed:false}},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period",minWidth:60,sortable:true,filterable:true,filter:{model:Tu.compoundDate},formatter:XN.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:true,grouping:{getter:"finish",formatter:t=>`Finish: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new PP.Sum("cost")],aggregateCollapsed:false,collapsed:false}},{id:"cost",name:"Cost",field:"cost",columnGroup:"Analysis",width:90,sortable:true,filterable:true,filter:{model:Tu.compoundInput},formatter:XN.dollar,groupTotalsFormatter:OB.sumTotalsDollar,type:"number",grouping:{getter:"cost",formatter:t=>`Cost: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new PP.Sum("cost")],aggregateCollapsed:true,collapsed:true}},{id:"percentComplete",name:"% Complete",field:"percentComplete",columnGroup:"Analysis",minWidth:70,width:90,formatter:XN.percentCompleteBar,type:"number",filterable:true,filter:{model:Tu.compoundSlider},sortable:true,groupTotalsFormatter:OB.avgTotalsPercentage,grouping:{getter:"percentComplete",formatter:t=>`% Complete: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new PP.Sum("cost")],aggregateCollapsed:false,collapsed:false},params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"effortDriven",name:"Effort-Driven",field:"effortDriven",columnGroup:"Analysis",width:80,minWidth:20,maxWidth:100,cssClass:"cell-effort-driven",sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect},formatter:XN.checkmarkMaterial,grouping:{getter:"effortDriven",formatter:t=>`Effort-Driven: ${t.value?"True":"False"} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new PP.Sum("duration"),new PP.Sum("cost")],collapsed:false}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableDraggableGrouping:true,autoEdit:true,autoCommitEdit:true,editable:true,enableCellNavigation:true,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:30,createTopHeaderPanel:true,showTopHeaderPanel:true,topHeaderPanelHeight:35,showCustomFooter:true,enableFiltering:true,enableSorting:true,textExportOptions:{sanitizeDataExport:true},gridMenu:{onCommand:(t,o)=>{o.command==="toggle-preheader"&&this.clearGrouping();}},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by the column",deleteIconCssClass:"mdi mdi-close color-danger",sortAscIconCssClass:"mdi mdi-arrow-up",sortDescIconCssClass:"mdi mdi-arrow-down",onGroupChanged:(t,o)=>this.onGroupChanged(o),onExtensionRegistered:t=>this.draggableGroupingPlugin=t,initialGroupBy:["duration"]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:true},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:true,documentTitle:"Grouping Grid"}},this.loadData(500);}loadData(t){let o=[];for(let n=0;n<t;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),y=Math.floor(Math.random()*29),v=Math.round(Math.random()*100),k=Math.round(Math.random()*1e4)/100;o[n]={id:"id_"+n,num:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:v,percentCompleteNumber:v,start:new Date(l,d,y),finish:new Date(l,d+1,y),cost:n%33===0?-k:k,effortDriven:n%5===0};}this.dataset=o;}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping();}clearGrouping(t=true){this.draggableGroupingPlugin?.clearDroppedGroups(),t&&this.gridObj?.invalidate();}clearGroupingSelects(){this.selectedGroupingFields.set(["","",""]);}collapseAllGroups(){this.dataviewObj.collapseAllGroups();}expandAllGroups(){this.dataviewObj.expandAllGroups();}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"});}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"});}exportToCsv(t="csv"){this.textExportService.exportToFile({delimiter:t==="csv"?",":"	",filename:"myExport",format:t==="csv"?"csv":"txt"});}groupByDurationOrderByCount(t=false){if(this.durationOrderByCount=t,this.clearGrouping(false),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups("duration");let o=t?[]:[{columnId:"duration",sortAsc:true}];this.gridObj?.setSortColumns(o),this.gridObj?.invalidate();}}groupByDurationEffortDriven(){this.clearGrouping(false),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(["duration","effortDriven"]),this.gridObj?.invalidate());}groupByFieldName(t,o){if(this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups){let n=this.selectedGroupingFields().filter(l=>l!=="");this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(n),this.gridObj.invalidate();}}onGroupChanged(t){let o=t?.caller||[],n=t?.groupColumns||[];if(Array.isArray(n)&&n.length>0){let l=n.map(d=>d?.getter??"");for(;l.length<3;)l.push("");this.selectedGroupingFields.set(l);}else n.length===0&&o==="remove-group"&&this.clearGroupingSelects();}onCellChanged(){this.angularGrid.dataView?.refresh();}onDropdownChange(t,o){let n=[...this.selectedGroupingFields()];n[o]=t,this.selectedGroupingFields.set(n),this.groupByFieldName(t,o);}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(true);}selectTrackByFn(t,o){return t}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:"percentComplete",operator:">=",searchTerms:["55"]},{columnId:"cost",operator:"<",searchTerms:["80"]}]);}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"percentComplete",direction:"ASC"}]);}toggleDraggableGroupingRow(){this.clearGrouping(),this.gridObj.setPreHeaderPanelVisibility(!this.gridObj.getOptions().showPreHeaderPanel);}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode});}toggleBodyBackground(){let t=document.querySelector(".panel-wm-content"),o=document.querySelector("#demo-container"),n="light";this._darkMode?(t?.classList.add("dark-mode"),n="dark"):(t?.classList.remove("dark-mode"),n="light"),o?.dataset&&(o.dataset.bsTheme=n);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList?.[t]("hidden"),this.angularGrid.resizerService?.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||m)};}static{this.\u0275cmp=bI({type:m,selectors:[["ng-component"]],decls:162,vars:3,consts:[["id","demo-container",1,"container-fluid"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example18.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators","target","_blank"],[1,"form-inline"],[1,"row"],[1,"col-sm-12"],["data-test","add-5k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","add-50k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],[1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-file-excel-outline","text-success"],[1,"mdi","mdi-file-pdf-outline","text-danger"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-sort-count-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-filter-outline"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-sort-ascending"],[1,"row","mt-2"],[1,"form-row"],[1,"row","form-group"],["for","field1",1,"col-sm-3","mb-2"],[1,"row","mt-1","mb-1"],["gridId","grid18",3,"onCellChange","onAngularGridCreated","dataset","columns","options"],[1,"form-group","col-md-3","grouping-selects"],[1,"form-select",3,"ngModelChange","name","ngModel"],["value",""],[3,"ngValue"]],template:function(o,n){o&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 18: Draggable Grouping & Aggregators
    `),ui(4,"button",1),pp("click",function(){return n.toggleSubTitle()}),UE(5,`
      `),cp(6,"span",2),UE(7,`
    `),Tc(),UE(8,`
    `),ui(9,"button",3),pp("click",function(){return n.toggleDarkMode()}),UE(10,`
      `),cp(11,"span",4),UE(12,`
      `),ui(13,"span"),UE(14,"Toggle Dark Mode"),Tc(),UE(15,`
    `),Tc(),UE(16,`
    `),ui(17,"span",5),UE(18,`
      `),ui(19,"a",6),UE(20,`
        `),cp(21,"span",7),UE(22,` code
      `),Tc(),UE(23,`
    `),Tc(),UE(24,`
  `),Tc(),UE(25,`

  `),ui(26,"div",8),UE(27,`
    `),ui(28,"ul"),UE(29,`
      `),ui(30,"li"),UE(31,`
        `),ui(32,"a",9),UE(33,"Wiki docs"),Tc(),UE(34,`
      `),Tc(),UE(35,`
      `),ui(36,"li"),UE(37,"This example shows 3 ways of grouping"),Tc(),UE(38,`
      `),ui(39,"ol"),UE(40,`
        `),ui(41,"li"),UE(42,`
          Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
          drop area).
        `),Tc(),UE(43,`
        `),ui(44,"li"),UE(45,"Use buttons and defined functions to group by wichever field you want"),Tc(),UE(46,`
        `),ui(47,"li"),UE(48,"Use the Select dropdown to group, the position of the Selects represent the grouping level"),Tc(),UE(49,`
      `),Tc(),UE(50,`
      `),ui(51,"li"),UE(52,"Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items"),Tc(),UE(53,`
      `),ui(54,"li"),UE(55,"Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows).."),Tc(),UE(56,`
      `),ui(57,"li"),UE(58,'Use "Aggregators" and "GroupTotalFormatters" directly from Angular-Slickgrid'),Tc(),UE(59,`
    `),Tc(),UE(60,`
  `),Tc(),UE(61,`

  `),ui(62,"form",10),UE(63,`
    `),ui(64,"div",11),UE(65,`
      `),ui(66,"div",12),UE(67,`
        `),ui(68,"button",13),pp("click",function(){return n.loadData(5e3)}),UE(69,"5K rows"),Tc(),UE(70,`
        `),ui(71,"button",14),pp("click",function(){return n.loadData(5e4)}),UE(72,"50K rows"),Tc(),UE(73,`
        `),ui(74,"button",15),pp("click",function(){return n.clearGroupsAndSelects()}),UE(75,`
          `),cp(76,"i",16),UE(77,` Clear grouping
        `),Tc(),UE(78,`
        `),ui(79,"button",17),pp("click",function(){return n.collapseAllGroups()}),UE(80,`
          `),cp(81,"i",18),UE(82,` Collapse all groups
        `),Tc(),UE(83,`
        `),ui(84,"button",19),pp("click",function(){return n.expandAllGroups()}),UE(85,`
          `),cp(86,"i",20),UE(87,` Expand all groups
        `),Tc(),UE(88,`
        `),ui(89,"button",21),pp("click",function(){return n.toggleDraggableGroupingRow()}),UE(90,`
          Toggle Draggable Grouping Row
        `),Tc(),UE(91,`
        `),ui(92,"button",21),pp("click",function(){return n.exportToExcel()}),UE(93,`
          `),cp(94,"i",22),UE(95,` Export to Excel
        `),Tc(),UE(96,`
        `),ui(97,"button",21),pp("click",function(){return n.exportToPdf()}),UE(98,`
          `),cp(99,"i",23),UE(100,` Export to PDF
        `),Tc(),UE(101,`
      `),Tc(),UE(102,`
    `),Tc(),UE(103,`
    `),ui(104,"div",11),UE(105,`
      `),ui(106,"div",12),UE(107,`
        `),ui(108,"button",24),pp("click",function(){return n.groupByDurationOrderByCount(false)}),UE(109,`
          Group by duration & sort groups by value
        `),Tc(),UE(110,`
        `),ui(111,"button",25),pp("click",function(){return n.groupByDurationOrderByCount(true)}),UE(112,`
          Group by duration & sort groups by count
        `),Tc(),UE(113,`
        `),ui(114,"button",26),pp("click",function(){return n.groupByDurationEffortDriven()}),UE(115,`
          Group by Duration & then Effort-Driven
        `),Tc(),UE(116,`
        `),ui(117,"button",27),pp("click",function(){return n.setFiltersDynamically()}),UE(118,`
          `),cp(119,"span",28),UE(120,`
          `),ui(121,"span"),UE(122," Set Filters Dynamically "),Tc(),UE(123,`
        `),Tc(),UE(124,`
        `),ui(125,"button",29),pp("click",function(){return n.setSortingDynamically()}),UE(126,`
          `),cp(127,"span",30),UE(128,`
          `),ui(129,"span"),UE(130," Set Sorting Dynamically "),Tc(),UE(131,`
        `),Tc(),UE(132,`
      `),Tc(),UE(133,`
    `),Tc(),UE(134,`
    `),ui(135,"div",31),UE(136,`
      `),ui(137,"div",12),UE(138,`
        `),ui(139,"div",32),UE(140,`
          `),ui(141,"div",33),UE(142,`
            `),ui(143,"label",34),UE(144,"Group by field(s)"),Tc(),UE(145,`
            `),JI(146,ee,11,3,null,null,n.selectTrackByFn,true),Tc(),UE(148,`
        `),Tc(),UE(149,`
      `),Tc(),UE(150,`
    `),Tc(),UE(151,`
  `),Tc(),UE(152,`
  `),ui(153,"div",35),UE(154,`
    `),cp(155,"hr"),UE(156,`
  `),Tc(),UE(157,`

  `),ui(158,"angular-slickgrid",36),pp("onCellChange",function(){return n.onCellChanged()})("onAngularGridCreated",function(d){return n.angularGridReady(d.detail)}),UE(159,`
  `),Tc(),UE(160,`
`),Tc(),UE(161,`
`)),o&2&&(Wy(146),XI(n.selectedGroupingFields()),Wy(12),ap("dataset",n.dataset)("columns",n.columns)("options",n.gridOptions));},dependencies:[j1,En,bn,An,Mn,rt,Cn,Vn,qt,Ht],encapsulation:2});}}return m})();export{ue as Example18Component};