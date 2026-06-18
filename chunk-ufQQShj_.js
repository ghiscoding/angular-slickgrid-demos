import {Q,L}from'./chunk-M8nz7waF.js';import {k as kM,a0 as xB,q as qN,h as Tu,a1 as FP,i as MB,a2 as te,T as TI,U as U1,F as En,I as je,J as zt,K as Cn,O as qt,u as ui,B as BE,a as ap,d as Tc,f as fp,P as Ap,R as Ov,e as Uy,V as xp,W as Lv,g as sp,H as Hp,m as iD,M as Mp,p as cD,v as SE,Y as WE}from'./main-C6PQTYH6.js';import {a as a$1}from'./chunk-B52EFzUa.js';var j=(()=>{class u{alertAssignee(o){alert(typeof o=="string"?`Assignee on this task is: ${o.toUpperCase()}`:"No one is assigned to this task.");}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a$1(`Deleted row with ${o.title}`,"danger"));}showNotification(o){a$1(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,"info");}static{this.\u0275fac=function(l){return new(l||u)};}static{this.\u0275cmp=TI({type:u,selectors:[["ng-component"]],decls:94,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-3","detail-label"],[1,"form-control","assignee",3,"ngModelChange","ngModel"],[1,"col-sm-8"],["data-test","assignee-btn",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-sm-4"],["data-test","delete-btn",1,"btn","btn-primary","btn-danger","btn-sm",3,"click"],["data-test","parent-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"]],template:function(l,i){l&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h3"),BE(3),Tc(),BE(4,`
  `),ui(5,"div",1),BE(6,`
    `),ui(7,"div",2)(8,"label"),BE(9,"Assignee:"),Tc(),BE(10," "),ui(11,"input",3),Ap("ngModelChange",function(r){return WE(i.model.assignee,r)||(i.model.assignee=r),r}),Tc(),Ov(),Tc(),BE(12,`
    `),ui(13,"div",2),BE(14,`
      `),ui(15,"label"),BE(16,"Reporter:"),Tc(),BE(17," "),ui(18,"span"),BE(19),Tc(),BE(20,`
    `),Tc(),BE(21,`
    `),ui(22,"div",2),BE(23,`
      `),ui(24,"label"),BE(25,"Duration:"),Tc(),BE(26," "),ui(27,"span"),BE(28),Tc(),BE(29,`
    `),Tc(),BE(30,`
    `),ui(31,"div",2),BE(32,`
      `),ui(33,"label"),BE(34,"% Complete:"),Tc(),BE(35," "),ui(36,"span"),BE(37),Tc(),BE(38,`
    `),Tc(),BE(39,`
  `),Tc(),BE(40,`

  `),ui(41,"div",1),BE(42,`
    `),ui(43,"div",2),BE(44,`
      `),ui(45,"label"),BE(46,"Start:"),Tc(),BE(47," "),ui(48,"span"),BE(49),iD(50,"date"),Tc(),BE(51,`
    `),Tc(),BE(52,`
    `),ui(53,"div",2),BE(54,`
      `),ui(55,"label"),BE(56,"Finish:"),Tc(),BE(57," "),ui(58,"span"),BE(59),iD(60,"date"),Tc(),BE(61,`
    `),Tc(),BE(62,`
    `),ui(63,"div",2)(64,"label"),BE(65,"Effort Driven:"),Tc(),BE(66," "),ap(67,"i"),Tc(),BE(68,`
  `),Tc(),BE(69,`

  `),ap(70,"hr"),BE(71,`

  `),ui(72,"div",4),BE(73,`
    `),ui(74,"h4"),BE(75,`
      Find out who is the Assignee
      `),ui(76,"small"),BE(77,`
        `),ui(78,"button",5),fp("click",function(){return i.alertAssignee(i.model==null?null:i.model.assignee)}),BE(79,"Click Me"),Tc(),BE(80,`
      `),Tc(),BE(81,`
    `),Tc(),BE(82,`
  `),Tc(),BE(83,`
  `),ui(84,"div",6),BE(85,`
    `),ui(86,"button",7),fp("click",function(){return i.deleteRow(i.model)}),BE(87,"Delete Row"),Tc(),BE(88,`
    `),ui(89,"button",8),fp("click",function(){return i.showNotification(i.model)}),BE(90,`
      Call Parent Method
    `),Tc(),BE(91,`
  `),Tc(),BE(92,`
`),Tc(),BE(93,`
`)),l&2&&(Uy(3),Mp(i.model?.title),Uy(8),xp("ngModel",i.model.assignee),Lv(),Uy(8),Mp(i.model?.reporter),Uy(9),Mp(i.model?.duration),Uy(9),Mp(i.model?.percentComplete),Uy(12),Mp(cD(50,9,i.model==null?null:i.model.start,"yyyy-MM-dd")),Uy(10),Mp(cD(60,12,i.model==null?null:i.model.finish,"yyyy-MM-dd")),Uy(8),SE(i.model?.effortDriven?"mdi mdi-check":""));},dependencies:[En,je,Cn,qt,Hp],styles:[".detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}","label[_ngcontent-%COMP%]{font-weight:600}"]});}}return u})();var $=250,J=1e3,ne=(()=>{class u{constructor(){this._darkMode=false,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=false,this.flashAlertType="info",this.message="",this.serverWaitDelay=$;}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration();}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid();}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,width:70,filterable:true,editor:{model:kM.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",minWidth:90,filterable:true},{id:"%",name:"% Complete",field:"percentComplete",minWidth:200,width:250,resizable:false,filterable:true,sortable:true,type:"number",formatter:qN.percentCompleteBar,groupTotalsFormatter:xB.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",formatter:qN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:qN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:true,filterable:true,filter:{model:Tu.compoundInputNumber},type:"number",formatter:qN.dollar,groupTotalsFormatter:xB.sumTotalsDollarBold},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:qN.checkmarkMaterial,type:"boolean",filterable:true,sortable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableGrouping:true,enableRowDetailView:true,rowTopOffsetRenderType:"top",darkMode:this._darkMode,externalResources:[L],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:true,singleRowExpand:false,useRowClick:false,panelRows:this.detailViewRowCount,preloadComponent:Q,viewComponent:j},selectionOptions:{selectActiveRow:true}},this.getData();}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),R=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:"Task "+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?R:-R,effortDriven:l%5===0};}this.dataset=o;}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o));}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll();}clearGrouping(){this.dataviewObj.setGrouping([]);}collapseAllGroups(){this.dataviewObj.collapseAllGroups();}expandAllGroups(){this.dataviewObj.expandAllGroups();}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:true}]),this.dataviewObj.setGrouping({getter:"duration",formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new FP.Avg("percentComplete"),new FP.Sum("cost")],comparer:(o,l)=>MB.numeric(o.value,l.value,te.asc),aggregateCollapsed:false,lazyTotalsCalculation:true}),this.gridObj.invalidate();}groupByDurationEffortDriven(){let o=[{columnId:"duration",sortAsc:true},{columnId:"effortDriven",sortAsc:true}];this.angularGrid.filterService.setSortColumnIcons(o),this.dataviewObj.setGrouping([{getter:"duration",formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new FP.Sum("duration"),new FP.Sum("cost")],aggregateCollapsed:true,lazyTotalsCalculation:true},{getter:"effortDriven",formatter:l=>`Effort-Driven: ${l.value?"True":"False"} <span style="color:green">(${l.count} items)</span>`,aggregators:[new FP.Avg("percentComplete"),new FP.Sum("cost")],collapsed:true,lazyTotalsCalculation:true}]),this.gridObj.invalidate();}simulateServerAsyncCall(o){let l=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||"",a.reporter=l[this.randomNumber(0,9)]||"",i(a);},this.serverWaitDelay);})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail();}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light");}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(2);}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.\u0275fac=function(l){return new(l||u)};}static{this.\u0275cmp=TI({type:u,selectors:[["ng-component"]],decls:87,vars:5,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["type","button","data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail","target","_blank"],["className","row"],["className","col-sm-12 d-flex gap-4px"],["type","button","data-test","collapse-all-rowdetail-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["type","button","data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["type","button","data-test","collapse-all-groups-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["type","button","data-test","expand-all-groups-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],["for","detailViewRowCount"],["id","detailViewRowCount","type","number",2,"height","22px","width","40px",3,"ngModelChange","ngModel"],["type","button","data-test","set-count-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","serverdelay",1,"ms-2"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"height","26px","width","55px",3,"ngModelChange","ngModel"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid47",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,i){l&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 47: Row Detail View + Grouping
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return i.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
    `),ui(17,"button",6),fp("click",function(){return i.toggleDarkMode()}),BE(18,`
      `),ap(19,"span",7),BE(20,`
      `),ui(21,"span"),BE(22,"Toggle Dark Mode"),Tc(),BE(23,`
    `),Tc(),BE(24,`
  `),Tc(),BE(25,`

  `),ui(26,"div",8),BE(27,`
    Provide ability for Row Detail to work with Grouping, see (`),ui(28,"a",9),BE(29,"Wiki docs"),Tc(),BE(30,`)
  `),Tc(),BE(31,`

  `),ui(32,"div",10),BE(33,`
    `),ui(34,"div",11),BE(35,`
      `),ui(36,"button",12),fp("click",function(){return i.closeAllRowDetail()}),BE(37,`
        Close All Row Details
      `),Tc(),BE(38,`
      `),ui(39,"button",13),fp("click",function(){return i.clearGrouping()}),BE(40,`
        `),ap(41,"i",14),BE(42,` Clear grouping
      `),Tc(),BE(43,`
      `),ui(44,"button",15),fp("click",function(){return i.collapseAllGroups()}),BE(45,`
        `),ap(46,"i",16),BE(47,` Collapse all groups
      `),Tc(),BE(48,`
      `),ui(49,"button",17),fp("click",function(){return i.expandAllGroups()}),BE(50,`
        `),ap(51,"i",18),BE(52,` Expand all groups
      `),Tc(),BE(53,`

      `),ui(54,"label",19),BE(55,"Detail View Rows Shown: "),Tc(),BE(56,`
      `),ui(57,"input",20),Ap("ngModelChange",function(r){return WE(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Tc(),Ov(),BE(58,`
      `),ui(59,"button",21),fp("click",function(){return i.changeDetailViewRowCount()}),BE(60,`
        Set
      `),Tc(),BE(61,`
      `),ui(62,"label",22),BE(63,"Server Delay: "),Tc(),BE(64,`
      `),ui(65,"input",23),Ap("ngModelChange",function(r){return WE(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Tc(),Ov(),BE(66,`
    `),Tc(),BE(67,`

    `),ui(68,"div",10),BE(69,`
      `),ui(70,"div",11),BE(71,`
        `),ui(72,"button",24),fp("click",function(){return i.groupByDuration()}),BE(73,`
          Group by Duration
        `),Tc(),BE(74,`
        `),ui(75,"button",25),fp("click",function(){return i.groupByDurationEffortDriven()}),BE(76,`
          Group by Duration then Effort-Driven
        `),Tc(),BE(77,`
      `),Tc(),BE(78,`
    `),Tc(),BE(79,`

    `),ap(80,"hr"),BE(81,`

    `),ui(82,"angular-slickgrid",26),fp("onAngularGridCreated",function(r){return i.angularGridReady(r.detail)}),BE(83,`
    `),Tc(),BE(84,`
  `),Tc(),BE(85,`
`),Tc(),BE(86,`
`)),l&2&&(Uy(57),xp("ngModel",i.detailViewRowCount),Lv(),Uy(8),xp("ngModel",i.serverWaitDelay),Lv(),Uy(17),sp("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[U1,En,je,zt,Cn,qt],encapsulation:2});}}return u})();export{ne as Example47Component};