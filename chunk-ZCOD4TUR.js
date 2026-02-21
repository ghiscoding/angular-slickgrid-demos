import{a as J}from"./chunk-KU3PZZFE.js";import"./chunk-FK6H3RFT.js";import{a as Y}from"./chunk-L3B3F7LN.js";import{c as B,d as $,e as H,f as I,g as N,j as V,k as j,l as W,o as R}from"./chunk-ZTHMMPCT.js";import{b as K}from"./chunk-CDWFOXJG.js";import{Aa as h,Da as U,T as z,ja as q,wa as p,xa as u,ya as L,za as g}from"./chunk-IBXCHNN7.js";import{$ as S,Aa as c,Kb as e,Lb as F,Pa as w,Pb as M,Qb as P,Rb as O,Tb as A,_,fb as T,gb as E,hb as C,ia as G,ib as x,jb as i,kb as r,lb as s,sb as D,vb as a,xb as f}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";function Q(m,b){if(m&1&&(e(0,`
                    `),i(1,"option",40),e(2),r(),e(3,`
                  `)),m&2){let t=b.$implicit;c(),x("ngValue",t.id),c(),F(t.name)}}function X(m,b){if(m&1){let t=D();e(0,`
              `),i(1,"div",37),e(2,`
                `),i(3,"select",38),O("ngModelChange",function(n){let l=_(t).$index,d=f();return P(d.selectedGroupingFields()[l],n)||(d.selectedGroupingFields()[l]=n),S(n)}),a("ngModelChange",function(n){let l=_(t).$index,d=f();return S(d.onDropdownChange(n,l))}),e(4,`
                  `),s(5,"option",39),e(6,`
                  `),E(7,Q,4,2,null,null,T),r(),e(9,`
              `),r(),e(10,`
            `)}if(m&2){let t=b.$index,o=f();c(3),x("name",A("group-field-",t)),M("ngModel",o.selectedGroupingFields()[t]),c(4),C(o.columnDefinitions)}}var Z=1e4,de=(()=>{class m{constructor(){this._darkMode=!1,this.durationOrderByCount=!1,this.hideSubTitle=!1,this.processing=!1,this.selectedGroupingFields=G(["","",""]),this.excelExportService=new K,this.pdfExportService=new J,this.textExportService=new Y,this.loadData(Z),this.defineGrid()}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(".panel-wm-content")?.classList.remove("dark-mode");let t=document.querySelector("#demo-container");t?.dataset&&(t.dataset.bsTheme="light")}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid,this.dataviewObj=t.dataView}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",columnGroup:"Common Factor",width:70,minWidth:50,cssClass:"cell-title",filterable:!0,sortable:!0,grouping:{getter:"title",formatter:t=>`Title: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new u.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor",width:70,sortable:!0,filterable:!0,editor:{model:L.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:!0},filter:{model:p.slider,operator:">="},type:"number",groupTotalsFormatter:h.sumTotals,grouping:{getter:"duration",formatter:t=>`Duration: ${t.value} <span class="text-primary">(${t.count} items)</span>`,comparer:(t,o)=>this.durationOrderByCount?t.count-o.count:q.numeric(t.value,o.value,z.asc),aggregators:[new u.Sum("duration"),new u.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"start",name:"Start",field:"start",columnGroup:"Period",minWidth:60,sortable:!0,filterable:!0,filter:{model:p.compoundDate},formatter:g.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:!0,grouping:{getter:"start",formatter:t=>`Start: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new u.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period",minWidth:60,sortable:!0,filterable:!0,filter:{model:p.compoundDate},formatter:g.dateIso,type:"dateUtc",outputType:"dateIso",exportWithFormatter:!0,grouping:{getter:"finish",formatter:t=>`Finish: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new u.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"cost",name:"Cost",field:"cost",columnGroup:"Analysis",width:90,sortable:!0,filterable:!0,filter:{model:p.compoundInput},formatter:g.dollar,groupTotalsFormatter:h.sumTotalsDollar,type:"number",grouping:{getter:"cost",formatter:t=>`Cost: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new u.Sum("cost")],aggregateCollapsed:!0,collapsed:!0}},{id:"percentComplete",name:"% Complete",field:"percentComplete",columnGroup:"Analysis",minWidth:70,width:90,formatter:g.percentCompleteBar,type:"number",filterable:!0,filter:{model:p.compoundSlider},sortable:!0,groupTotalsFormatter:h.avgTotalsPercentage,grouping:{getter:"percentComplete",formatter:t=>`% Complete: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new u.Sum("cost")],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"effortDriven",name:"Effort-Driven",field:"effortDriven",columnGroup:"Analysis",width:80,minWidth:20,maxWidth:100,cssClass:"cell-effort-driven",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:p.singleSelect},formatter:g.checkmarkMaterial,grouping:{getter:"effortDriven",formatter:t=>`Effort-Driven: ${t.value?"True":"False"} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new u.Sum("duration"),new u.Sum("cost")],collapsed:!1}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableDraggableGrouping:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:30,createTopHeaderPanel:!0,showTopHeaderPanel:!0,topHeaderPanelHeight:35,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,textExportOptions:{sanitizeDataExport:!0},gridMenu:{onCommand:(t,o)=>{o.command==="toggle-preheader"&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by the column",deleteIconCssClass:"mdi mdi-close color-danger",sortAscIconCssClass:"mdi mdi-arrow-up",sortDescIconCssClass:"mdi mdi-arrow-down",onGroupChanged:(t,o)=>this.onGroupChanged(o),onExtensionRegistered:t=>this.draggableGroupingPlugin=t,initialGroupBy:["duration"]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:!0,documentTitle:"Grouping Grid"}},this.loadData(500)}loadData(t){let o=[];for(let n=0;n<t;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),y=Math.floor(Math.random()*29),v=Math.round(Math.random()*100),k=Math.round(Math.random()*1e4)/100;o[n]={id:"id_"+n,num:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:v,percentCompleteNumber:v,start:new Date(l,d,y),finish:new Date(l,d+1,y),cost:n%33===0?-k:k,effortDriven:n%5===0}}this.dataset=o}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGrouping(t=!0){this.draggableGroupingPlugin?.clearDroppedGroups(),t&&this.gridObj?.invalidate()}clearGroupingSelects(){this.selectedGroupingFields.set(["","",""])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToPdf(){this.pdfExportService.exportToPdf({filename:"Export"})}exportToCsv(t="csv"){this.textExportService.exportToFile({delimiter:t==="csv"?",":"	",filename:"myExport",format:t==="csv"?"csv":"txt"})}groupByDurationOrderByCount(t=!1){if(this.durationOrderByCount=t,this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups("duration");let o=t?[]:[{columnId:"duration",sortAsc:!0}];this.gridObj?.setSortColumns(o),this.gridObj?.invalidate()}}groupByDurationEffortDriven(){this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(["duration","effortDriven"]),this.gridObj?.invalidate())}groupByFieldName(t,o){if(this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups){let n=this.selectedGroupingFields().filter(l=>l!=="");this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(n),this.gridObj.invalidate()}}onGroupChanged(t){let o=t?.caller||[],n=t?.groupColumns||[];if(Array.isArray(n)&&n.length>0){let l=n.map(d=>d?.getter??"");for(;l.length<3;)l.push("");this.selectedGroupingFields.set(l)}else n.length===0&&o==="remove-group"&&this.clearGroupingSelects()}onCellChanged(){this.angularGrid.dataView?.refresh()}onDropdownChange(t,o){let n=[...this.selectedGroupingFields()];n[o]=t,this.selectedGroupingFields.set(n),this.groupByFieldName(t,o)}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}selectTrackByFn(t,o){return t}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:"percentComplete",operator:">=",searchTerms:["55"]},{columnId:"cost",operator:"<",searchTerms:["80"]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"percentComplete",direction:"ASC"}])}toggleDraggableGroupingRow(){this.clearGrouping(),this.gridObj.setPreHeaderPanelVisibility(!this.gridObj.getOptions().showPreHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){let t=document.querySelector(".panel-wm-content"),o=document.querySelector("#demo-container"),n="light";this._darkMode?(t?.classList.add("dark-mode"),n="dark"):(t?.classList.remove("dark-mode"),n="light"),o?.dataset&&(o.dataset.bsTheme=n)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList?.[t]("hidden"),this.angularGrid.resizerService?.resizeGrid(0)}static{this.\u0275fac=function(o){return new(o||m)}}static{this.\u0275cmp=w({type:m,selectors:[["ng-component"]],decls:162,vars:3,consts:[["id","demo-container",1,"container-fluid"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example18.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators","target","_blank"],[1,"form-inline"],[1,"row"],[1,"col-sm-12"],["data-test","add-5k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","add-50k-rows-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],[1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-file-excel-outline","text-success"],[1,"mdi","mdi-file-pdf-outline","text-danger"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-sort-count-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-filter-outline"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-sort-ascending"],[1,"row","mt-2"],[1,"form-row"],[1,"row","form-group"],["for","field1",1,"col-sm-3","mb-2"],[1,"row","mt-1","mb-1"],["gridId","grid18",3,"onCellChange","onAngularGridCreated","dataset","columns","options"],[1,"form-group","col-md-3","grouping-selects"],[1,"form-select",3,"ngModelChange","name","ngModel"],["value",""],[3,"ngValue"]],template:function(o,n){o&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 18: Draggable Grouping & Aggregators
    `),i(4,"button",1),a("click",function(){return n.toggleSubTitle()}),e(5,`
      `),s(6,"span",2),e(7,`
    `),r(),e(8,`
    `),i(9,"button",3),a("click",function(){return n.toggleDarkMode()}),e(10,`
      `),s(11,"span",4),e(12,`
      `),i(13,"span"),e(14,"Toggle Dark Mode"),r(),e(15,`
    `),r(),e(16,`
    `),i(17,"span",5),e(18,`
      `),i(19,"a",6),e(20,`
        `),s(21,"span",7),e(22,` code
      `),r(),e(23,`
    `),r(),e(24,`
  `),r(),e(25,`

  `),i(26,"div",8),e(27,`
    `),i(28,"ul"),e(29,`
      `),i(30,"li"),e(31,`
        `),i(32,"a",9),e(33,"Wiki docs"),r(),e(34,`
      `),r(),e(35,`
      `),i(36,"li"),e(37,"This example shows 3 ways of grouping"),r(),e(38,`
      `),i(39,"ol"),e(40,`
        `),i(41,"li"),e(42,`
          Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
          drop area).
        `),r(),e(43,`
        `),i(44,"li"),e(45,"Use buttons and defined functions to group by wichever field you want"),r(),e(46,`
        `),i(47,"li"),e(48,"Use the Select dropdown to group, the position of the Selects represent the grouping level"),r(),e(49,`
      `),r(),e(50,`
      `),i(51,"li"),e(52,"Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items"),r(),e(53,`
      `),i(54,"li"),e(55,"Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows).."),r(),e(56,`
      `),i(57,"li"),e(58,'Use "Aggregators" and "GroupTotalFormatters" directly from Angular-Slickgrid'),r(),e(59,`
    `),r(),e(60,`
  `),r(),e(61,`

  `),i(62,"form",10),e(63,`
    `),i(64,"div",11),e(65,`
      `),i(66,"div",12),e(67,`
        `),i(68,"button",13),a("click",function(){return n.loadData(5e3)}),e(69,"5K rows"),r(),e(70,`
        `),i(71,"button",14),a("click",function(){return n.loadData(5e4)}),e(72,"50K rows"),r(),e(73,`
        `),i(74,"button",15),a("click",function(){return n.clearGroupsAndSelects()}),e(75,`
          `),s(76,"i",16),e(77,` Clear grouping
        `),r(),e(78,`
        `),i(79,"button",17),a("click",function(){return n.collapseAllGroups()}),e(80,`
          `),s(81,"i",18),e(82,` Collapse all groups
        `),r(),e(83,`
        `),i(84,"button",19),a("click",function(){return n.expandAllGroups()}),e(85,`
          `),s(86,"i",20),e(87,` Expand all groups
        `),r(),e(88,`
        `),i(89,"button",21),a("click",function(){return n.toggleDraggableGroupingRow()}),e(90,`
          Toggle Draggable Grouping Row
        `),r(),e(91,`
        `),i(92,"button",21),a("click",function(){return n.exportToExcel()}),e(93,`
          `),s(94,"i",22),e(95,` Export to Excel
        `),r(),e(96,`
        `),i(97,"button",21),a("click",function(){return n.exportToPdf()}),e(98,`
          `),s(99,"i",23),e(100,` Export to PDF
        `),r(),e(101,`
      `),r(),e(102,`
    `),r(),e(103,`
    `),i(104,"div",11),e(105,`
      `),i(106,"div",12),e(107,`
        `),i(108,"button",24),a("click",function(){return n.groupByDurationOrderByCount(!1)}),e(109,`
          Group by duration & sort groups by value
        `),r(),e(110,`
        `),i(111,"button",25),a("click",function(){return n.groupByDurationOrderByCount(!0)}),e(112,`
          Group by duration & sort groups by count
        `),r(),e(113,`
        `),i(114,"button",26),a("click",function(){return n.groupByDurationEffortDriven()}),e(115,`
          Group by Duration & then Effort-Driven
        `),r(),e(116,`
        `),i(117,"button",27),a("click",function(){return n.setFiltersDynamically()}),e(118,`
          `),s(119,"span",28),e(120,`
          `),i(121,"span"),e(122," Set Filters Dynamically "),r(),e(123,`
        `),r(),e(124,`
        `),i(125,"button",29),a("click",function(){return n.setSortingDynamically()}),e(126,`
          `),s(127,"span",30),e(128,`
          `),i(129,"span"),e(130," Set Sorting Dynamically "),r(),e(131,`
        `),r(),e(132,`
      `),r(),e(133,`
    `),r(),e(134,`
    `),i(135,"div",31),e(136,`
      `),i(137,"div",12),e(138,`
        `),i(139,"div",32),e(140,`
          `),i(141,"div",33),e(142,`
            `),i(143,"label",34),e(144,"Group by field(s)"),r(),e(145,`
            `),E(146,X,11,3,null,null,n.selectTrackByFn,!0),r(),e(148,`
        `),r(),e(149,`
      `),r(),e(150,`
    `),r(),e(151,`
  `),r(),e(152,`
  `),i(153,"div",35),e(154,`
    `),s(155,"hr"),e(156,`
  `),r(),e(157,`

  `),i(158,"angular-slickgrid",36),a("onCellChange",function(){return n.onCellChanged()})("onAngularGridCreated",function(d){return n.angularGridReady(d.detail)}),e(159,`
  `),r(),e(160,`
`),r(),e(161,`
`)),o&2&&(c(146),C(n.selectedGroupingFields()),c(12),x("dataset",n.dataset)("columns",n.columnDefinitions)("options",n.gridOptions))},dependencies:[U,R,N,j,W,V,B,$,I,H],encapsulation:2})}}return m})();export{de as Example18Component};
