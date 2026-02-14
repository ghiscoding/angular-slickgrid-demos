import{a as F,b as N}from"./chunk-TPPU4ZY2.js";import{b as _,c as E,f as v,h as W,o as C}from"./chunk-ZTHMMPCT.js";import{b as k}from"./chunk-3ZF7QZND.js";import{Aa as D,Da as O,T as B,ja as I,n as A,p as G,wa as x,xa as c,ya as V,za as g}from"./chunk-IBXCHNN7.js";import{Aa as d,Jb as R,Kb as e,Lb as p,Pa as w,Pb as b,Qb as f,Rb as h,_b as y,ac as S,ib as T,jb as n,kb as t,lb as m,vb as s}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var P=(()=>{class u{alertAssignee(l){alert(typeof l=="string"?`Assignee on this task is: ${l.toUpperCase()}`:"No one is assigned to this task.")}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.id),k(`Deleted row with ${l.title}`,"danger"))}showNotification(l){k(`We just called Parent Method from the Row Detail Child Component on ${l.title}`,"info")}static{this.\u0275fac=function(o){return new(o||u)}}static{this.\u0275cmp=w({type:u,selectors:[["ng-component"]],decls:95,vars:18,consts:[[1,"container-fluid"],[1,"row"],[1,"col-3","detail-label"],[1,"form-control","assignee",3,"ngModelChange","ngModel"],[1,"col-sm-8"],["data-test","assignee-btn",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-sm-4"],["data-test","delete-btn",1,"btn","btn-primary","btn-danger","btn-sm",3,"click"],["data-test","parent-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"]],template:function(o,i){o&1&&(n(0,"div",0),e(1,`
  `),n(2,"h3"),e(3),t(),e(4,`
  `),n(5,"div",1),e(6,`
    `),n(7,"div",2)(8,"label"),e(9,"Assignee:"),t(),e(10," "),n(11,"input",3),h("ngModelChange",function(r){return f(i.model.assignee,r)||(i.model.assignee=r),r}),t()(),e(12,`
    `),n(13,"div",2),e(14,`
      `),n(15,"label"),e(16,"Reporter:"),t(),e(17," "),n(18,"span"),e(19),t(),e(20,`
    `),t(),e(21,`
    `),n(22,"div",2),e(23,`
      `),n(24,"label"),e(25,"Duration:"),t(),e(26," "),n(27,"span"),e(28),y(29,"number"),t(),e(30,`
    `),t(),e(31,`
    `),n(32,"div",2),e(33,`
      `),n(34,"label"),e(35,"% Complete:"),t(),e(36," "),n(37,"span"),e(38),t(),e(39,`
    `),t(),e(40,`
  `),t(),e(41,`

  `),n(42,"div",1),e(43,`
    `),n(44,"div",2),e(45,`
      `),n(46,"label"),e(47,"Start:"),t(),e(48," "),n(49,"span"),e(50),y(51,"date"),t(),e(52,`
    `),t(),e(53,`
    `),n(54,"div",2),e(55,`
      `),n(56,"label"),e(57,"Finish:"),t(),e(58," "),n(59,"span"),e(60),y(61,"date"),t(),e(62,`
    `),t(),e(63,`
    `),n(64,"div",2)(65,"label"),e(66,"Effort Driven:"),t(),e(67," "),m(68,"i"),t(),e(69,`
  `),t(),e(70,`

  `),m(71,"hr"),e(72,`

  `),n(73,"div",4),e(74,`
    `),n(75,"h4"),e(76,`
      Find out who is the Assignee
      `),n(77,"small"),e(78,`
        `),n(79,"button",5),s("click",function(){return i.alertAssignee(i.model==null?null:i.model.assignee)}),e(80,"Click Me"),t(),e(81,`
      `),t(),e(82,`
    `),t(),e(83,`
  `),t(),e(84,`
  `),n(85,"div",6),e(86,`
    `),n(87,"button",7),s("click",function(){return i.deleteRow(i.model)}),e(88,"Delete Row"),t(),e(89,`
    `),n(90,"button",8),s("click",function(){return i.showNotification(i.model)}),e(91,`
      Call Parent Method
    `),t(),e(92,`
  `),t(),e(93,`
`),t(),e(94,`
`)),o&2&&(d(3),p(i.model==null?null:i.model.title),d(8),b("ngModel",i.model.assignee),d(8),p(i.model==null?null:i.model.reporter),d(9),p(S(29,9,i.model==null?null:i.model.duration,"1.2-2")),d(10),p(i.model==null?null:i.model.percentComplete),d(12),p(S(51,12,i.model==null?null:i.model.start,"yyyy-MM-dd")),d(10),p(S(61,15,i.model==null?null:i.model.finish,"yyyy-MM-dd")),d(8),R(i.model!=null&&i.model.effortDriven?"mdi mdi-check":""))},dependencies:[C,_,E,v,G,A],styles:[".detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}","label[_ngcontent-%COMP%]{font-weight:600}"]})}}return u})();var q=250,$=1e3,te=(()=>{class u{constructor(){this._darkMode=!1,this.columnDefinitions=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType="info",this.message="",this.serverWaitDelay=q}angularGridReady(l){this.angularGrid=l,this.gridObj=l.slickGrid,this.dataviewObj=l.dataView,this.groupByDuration()}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,width:70,filterable:!0,editor:{model:V.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",minWidth:90,filterable:!0},{id:"%",name:"% Complete",field:"percentComplete",minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:"number",formatter:g.percentCompleteBar,groupTotalsFormatter:D.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",formatter:g.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:x.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:g.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:x.compoundDate}},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:x.compoundInputNumber},type:"number",formatter:g.dollar,groupTotalsFormatter:D.sumTotalsDollarBold},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:g.checkmarkMaterial,type:"boolean",filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:x.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,rowTopOffsetRenderType:"top",darkMode:this._darkMode,externalResources:[F],rowDetailView:{process:l=>this.simulateServerAsyncCall(l),loadOnce:!0,singleRowExpand:!1,useRowClick:!1,panelRows:this.detailViewRowCount,preloadComponent:N,viewComponent:P},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let l=[];for(let o=0;o<$;o++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),j=Math.round(Math.random()*100),M=Math.round(Math.random()*1e4)/100;l[o]={id:o,title:"Task "+o,duration:Math.floor(Math.random()*100),percentComplete:j,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:o%3?M:-M,effortDriven:o%5===0}}this.dataset=l}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l))}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:!0}]),this.dataviewObj.setGrouping({getter:"duration",formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new c.Avg("percentComplete"),new c.Sum("cost")],comparer:(l,o)=>I.numeric(l.value,o.value,B.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){let l=[{columnId:"duration",sortAsc:!0},{columnId:"effortDriven",sortAsc:!0}];this.angularGrid.filterService.setSortColumnIcons(l),this.dataviewObj.setGrouping([{getter:"duration",formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new c.Sum("duration"),new c.Sum("cost")],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:"effortDriven",formatter:o=>`Effort-Driven: ${o.value?"True":"False"} <span style="color:green">(${o.count} items)</span>`,aggregators:[new c.Avg("percentComplete"),new c.Sum("cost")],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(l){let o=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(i=>{setTimeout(()=>{let a=l;a.assignee=o[this.randomNumber(0,9)]||"",a.reporter=o[this.randomNumber(0,9)]||"",i(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(l,o){return Math.floor(Math.random()*(o-l+1)+l)}static{this.\u0275fac=function(o){return new(o||u)}}static{this.\u0275cmp=w({type:u,selectors:[["ng-component"]],decls:87,vars:5,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["type","button","data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail","target","_blank"],["className","row"],["className","col-sm-12 d-flex gap-4px"],["type","button","data-test","collapse-all-rowdetail-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["type","button","data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["type","button","data-test","collapse-all-groups-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["type","button","data-test","expand-all-groups-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],["for","detailViewRowCount"],["id","detailViewRowCount","type","number",2,"height","22px","width","40px",3,"ngModelChange","ngModel"],["type","button","data-test","set-count-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","serverdelay",1,"ms-2"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"height","26px","width","55px",3,"ngModelChange","ngModel"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid47",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,i){o&1&&(n(0,"div",0),e(1,`
  `),n(2,"h2"),e(3,`
    Example 47: Row Detail View + Grouping
    `),n(4,"span",1),e(5,`
      `),n(6,"a",2),e(7,`
        `),m(8,"span",3),e(9,` code
      `),t(),e(10,`
    `),t(),e(11,`
    `),n(12,"button",4),s("click",function(){return i.toggleSubTitle()}),e(13,`
      `),m(14,"span",5),e(15,`
    `),t(),e(16,`
    `),n(17,"button",6),s("click",function(){return i.toggleDarkMode()}),e(18,`
      `),m(19,"span",7),e(20,`
      `),n(21,"span"),e(22,"Toggle Dark Mode"),t(),e(23,`
    `),t(),e(24,`
  `),t(),e(25,`

  `),n(26,"div",8),e(27,`
    Provide ability for Row Detail to work with Grouping, see (`),n(28,"a",9),e(29,"Wiki docs"),t(),e(30,`)
  `),t(),e(31,`

  `),n(32,"div",10),e(33,`
    `),n(34,"div",11),e(35,`
      `),n(36,"button",12),s("click",function(){return i.closeAllRowDetail()}),e(37,`
        Close All Row Details
      `),t(),e(38,`
      `),n(39,"button",13),s("click",function(){return i.clearGrouping()}),e(40,`
        `),m(41,"i",14),e(42,` Clear grouping
      `),t(),e(43,`
      `),n(44,"button",15),s("click",function(){return i.collapseAllGroups()}),e(45,`
        `),m(46,"i",16),e(47,` Collapse all groups
      `),t(),e(48,`
      `),n(49,"button",17),s("click",function(){return i.expandAllGroups()}),e(50,`
        `),m(51,"i",18),e(52,` Expand all groups
      `),t(),e(53,`

      `),n(54,"label",19),e(55,"Detail View Rows Shown: "),t(),e(56,`
      `),n(57,"input",20),h("ngModelChange",function(r){return f(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),t(),e(58,`
      `),n(59,"button",21),s("click",function(){return i.changeDetailViewRowCount()}),e(60,`
        Set
      `),t(),e(61,`
      `),n(62,"label",22),e(63,"Server Delay: "),t(),e(64,`
      `),n(65,"input",23),h("ngModelChange",function(r){return f(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),t(),e(66,`
    `),t(),e(67,`

    `),n(68,"div",10),e(69,`
      `),n(70,"div",11),e(71,`
        `),n(72,"button",24),s("click",function(){return i.groupByDuration()}),e(73,`
          Group by Duration
        `),t(),e(74,`
        `),n(75,"button",25),s("click",function(){return i.groupByDurationEffortDriven()}),e(76,`
          Group by Duration then Effort-Driven
        `),t(),e(77,`
      `),t(),e(78,`
    `),t(),e(79,`

    `),m(80,"hr"),e(81,`

    `),n(82,"angular-slickgrid",26),s("onAngularGridCreated",function(r){return i.angularGridReady(r.detail)}),e(83,`
    `),t(),e(84,`
  `),t(),e(85,`
`),t(),e(86,`
`)),o&2&&(d(57),b("ngModel",i.detailViewRowCount),d(8),b("ngModel",i.serverWaitDelay),d(17),T("columns",i.columnDefinitions)("options",i.gridOptions)("dataset",i.dataset))},dependencies:[O,C,_,W,E,v],encapsulation:2})}}return u})();export{te as Example47Component};
