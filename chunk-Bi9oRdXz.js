import {Q,L}from'./chunk-CH52TB_2.js';import {M as MM,a0 as OB,X as XN,f as Tu,a1 as PP,g as LB,a2 as te,b as bI,j as j1,F as En,G as je,I as zt,J as Cn,K as qt,u as ui,U as UE,c as cp,T as Tc,p as pp,R as Rp,O as Lv,W as Wy,P as Ap,Q as jv,d as ap,H as Hp,h as aD,N as Np,o as uD,q as AE,S as zE}from'./main-WTCLCICA.js';import {a as a$1}from'./chunk-B52EFzUa.js';var j=(()=>{class u{alertAssignee(o){alert(typeof o=="string"?`Assignee on this task is: ${o.toUpperCase()}`:"No one is assigned to this task.");}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a$1(`Deleted row with ${o.title}`,"danger"));}showNotification(o){a$1(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,"info");}static{this.\u0275fac=function(l){return new(l||u)};}static{this.\u0275cmp=bI({type:u,selectors:[["ng-component"]],decls:94,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-3","detail-label"],[1,"form-control","assignee",3,"ngModelChange","ngModel"],[1,"col-sm-8"],["data-test","assignee-btn",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-sm-4"],["data-test","delete-btn",1,"btn","btn-primary","btn-danger","btn-sm",3,"click"],["data-test","parent-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"]],template:function(l,i){l&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h3"),UE(3),Tc(),UE(4,`
  `),ui(5,"div",1),UE(6,`
    `),ui(7,"div",2)(8,"label"),UE(9,"Assignee:"),Tc(),UE(10," "),ui(11,"input",3),Rp("ngModelChange",function(r){return zE(i.model.assignee,r)||(i.model.assignee=r),r}),Tc(),Lv(),Tc(),UE(12,`
    `),ui(13,"div",2),UE(14,`
      `),ui(15,"label"),UE(16,"Reporter:"),Tc(),UE(17," "),ui(18,"span"),UE(19),Tc(),UE(20,`
    `),Tc(),UE(21,`
    `),ui(22,"div",2),UE(23,`
      `),ui(24,"label"),UE(25,"Duration:"),Tc(),UE(26," "),ui(27,"span"),UE(28),Tc(),UE(29,`
    `),Tc(),UE(30,`
    `),ui(31,"div",2),UE(32,`
      `),ui(33,"label"),UE(34,"% Complete:"),Tc(),UE(35," "),ui(36,"span"),UE(37),Tc(),UE(38,`
    `),Tc(),UE(39,`
  `),Tc(),UE(40,`

  `),ui(41,"div",1),UE(42,`
    `),ui(43,"div",2),UE(44,`
      `),ui(45,"label"),UE(46,"Start:"),Tc(),UE(47," "),ui(48,"span"),UE(49),aD(50,"date"),Tc(),UE(51,`
    `),Tc(),UE(52,`
    `),ui(53,"div",2),UE(54,`
      `),ui(55,"label"),UE(56,"Finish:"),Tc(),UE(57," "),ui(58,"span"),UE(59),aD(60,"date"),Tc(),UE(61,`
    `),Tc(),UE(62,`
    `),ui(63,"div",2)(64,"label"),UE(65,"Effort Driven:"),Tc(),UE(66," "),cp(67,"i"),Tc(),UE(68,`
  `),Tc(),UE(69,`

  `),cp(70,"hr"),UE(71,`

  `),ui(72,"div",4),UE(73,`
    `),ui(74,"h4"),UE(75,`
      Find out who is the Assignee
      `),ui(76,"small"),UE(77,`
        `),ui(78,"button",5),pp("click",function(){return i.alertAssignee(i.model==null?null:i.model.assignee)}),UE(79,"Click Me"),Tc(),UE(80,`
      `),Tc(),UE(81,`
    `),Tc(),UE(82,`
  `),Tc(),UE(83,`
  `),ui(84,"div",6),UE(85,`
    `),ui(86,"button",7),pp("click",function(){return i.deleteRow(i.model)}),UE(87,"Delete Row"),Tc(),UE(88,`
    `),ui(89,"button",8),pp("click",function(){return i.showNotification(i.model)}),UE(90,`
      Call Parent Method
    `),Tc(),UE(91,`
  `),Tc(),UE(92,`
`),Tc(),UE(93,`
`)),l&2&&(Wy(3),Np(i.model?.title),Wy(8),Ap("ngModel",i.model.assignee),jv(),Wy(8),Np(i.model?.reporter),Wy(9),Np(i.model?.duration),Wy(9),Np(i.model?.percentComplete),Wy(12),Np(uD(50,9,i.model==null?null:i.model.start,"yyyy-MM-dd")),Wy(10),Np(uD(60,12,i.model==null?null:i.model.finish,"yyyy-MM-dd")),Wy(8),AE(i.model?.effortDriven?"mdi mdi-check":""));},dependencies:[En,je,Cn,qt,Hp],styles:[".detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}","label[_ngcontent-%COMP%]{font-weight:600}"]});}}return u})();var $=250,J=1e3,ne=(()=>{class u{constructor(){this._darkMode=false,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=false,this.flashAlertType="info",this.message="",this.serverWaitDelay=$;}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration();}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid();}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,width:70,filterable:true,editor:{model:MM.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",minWidth:90,filterable:true},{id:"%",name:"% Complete",field:"percentComplete",minWidth:200,width:250,resizable:false,filterable:true,sortable:true,type:"number",formatter:XN.percentCompleteBar,groupTotalsFormatter:OB.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:true,filterable:true,filter:{model:Tu.compoundInputNumber},type:"number",formatter:XN.dollar,groupTotalsFormatter:OB.sumTotalsDollarBold},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:XN.checkmarkMaterial,type:"boolean",filterable:true,sortable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableGrouping:true,enableRowDetailView:true,rowTopOffsetRenderType:"top",darkMode:this._darkMode,externalResources:[L],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:true,singleRowExpand:false,useRowClick:false,panelRows:this.detailViewRowCount,preloadComponent:Q,viewComponent:j},selectionOptions:{selectActiveRow:true}},this.getData();}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),R=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:"Task "+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?R:-R,effortDriven:l%5===0};}this.dataset=o;}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o));}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll();}clearGrouping(){this.dataviewObj.setGrouping([]);}collapseAllGroups(){this.dataviewObj.collapseAllGroups();}expandAllGroups(){this.dataviewObj.expandAllGroups();}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:true}]),this.dataviewObj.setGrouping({getter:"duration",formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new PP.Avg("percentComplete"),new PP.Sum("cost")],comparer:(o,l)=>LB.numeric(o.value,l.value,te.asc),aggregateCollapsed:false,lazyTotalsCalculation:true}),this.gridObj.invalidate();}groupByDurationEffortDriven(){let o=[{columnId:"duration",sortAsc:true},{columnId:"effortDriven",sortAsc:true}];this.angularGrid.filterService.setSortColumnIcons(o),this.dataviewObj.setGrouping([{getter:"duration",formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new PP.Sum("duration"),new PP.Sum("cost")],aggregateCollapsed:true,lazyTotalsCalculation:true},{getter:"effortDriven",formatter:l=>`Effort-Driven: ${l.value?"True":"False"} <span style="color:green">(${l.count} items)</span>`,aggregators:[new PP.Avg("percentComplete"),new PP.Sum("cost")],collapsed:true,lazyTotalsCalculation:true}]),this.gridObj.invalidate();}simulateServerAsyncCall(o){let l=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||"",a.reporter=l[this.randomNumber(0,9)]||"",i(a);},this.serverWaitDelay);})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail();}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light");}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(2);}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.\u0275fac=function(l){return new(l||u)};}static{this.\u0275cmp=bI({type:u,selectors:[["ng-component"]],decls:87,vars:5,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["type","button","data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail","target","_blank"],["className","row"],["className","col-sm-12 d-flex gap-4px"],["type","button","data-test","collapse-all-rowdetail-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["type","button","data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["type","button","data-test","collapse-all-groups-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["type","button","data-test","expand-all-groups-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],["for","detailViewRowCount"],["id","detailViewRowCount","type","number",2,"height","22px","width","40px",3,"ngModelChange","ngModel"],["type","button","data-test","set-count-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","serverdelay",1,"ms-2"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"height","26px","width","55px",3,"ngModelChange","ngModel"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid47",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,i){l&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 47: Row Detail View + Grouping
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return i.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
    `),ui(17,"button",6),pp("click",function(){return i.toggleDarkMode()}),UE(18,`
      `),cp(19,"span",7),UE(20,`
      `),ui(21,"span"),UE(22,"Toggle Dark Mode"),Tc(),UE(23,`
    `),Tc(),UE(24,`
  `),Tc(),UE(25,`

  `),ui(26,"div",8),UE(27,`
    Provide ability for Row Detail to work with Grouping, see (`),ui(28,"a",9),UE(29,"Wiki docs"),Tc(),UE(30,`)
  `),Tc(),UE(31,`

  `),ui(32,"div",10),UE(33,`
    `),ui(34,"div",11),UE(35,`
      `),ui(36,"button",12),pp("click",function(){return i.closeAllRowDetail()}),UE(37,`
        Close All Row Details
      `),Tc(),UE(38,`
      `),ui(39,"button",13),pp("click",function(){return i.clearGrouping()}),UE(40,`
        `),cp(41,"i",14),UE(42,` Clear grouping
      `),Tc(),UE(43,`
      `),ui(44,"button",15),pp("click",function(){return i.collapseAllGroups()}),UE(45,`
        `),cp(46,"i",16),UE(47,` Collapse all groups
      `),Tc(),UE(48,`
      `),ui(49,"button",17),pp("click",function(){return i.expandAllGroups()}),UE(50,`
        `),cp(51,"i",18),UE(52,` Expand all groups
      `),Tc(),UE(53,`

      `),ui(54,"label",19),UE(55,"Detail View Rows Shown: "),Tc(),UE(56,`
      `),ui(57,"input",20),Rp("ngModelChange",function(r){return zE(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Tc(),Lv(),UE(58,`
      `),ui(59,"button",21),pp("click",function(){return i.changeDetailViewRowCount()}),UE(60,`
        Set
      `),Tc(),UE(61,`
      `),ui(62,"label",22),UE(63,"Server Delay: "),Tc(),UE(64,`
      `),ui(65,"input",23),Rp("ngModelChange",function(r){return zE(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Tc(),Lv(),UE(66,`
    `),Tc(),UE(67,`

    `),ui(68,"div",10),UE(69,`
      `),ui(70,"div",11),UE(71,`
        `),ui(72,"button",24),pp("click",function(){return i.groupByDuration()}),UE(73,`
          Group by Duration
        `),Tc(),UE(74,`
        `),ui(75,"button",25),pp("click",function(){return i.groupByDurationEffortDriven()}),UE(76,`
          Group by Duration then Effort-Driven
        `),Tc(),UE(77,`
      `),Tc(),UE(78,`
    `),Tc(),UE(79,`

    `),cp(80,"hr"),UE(81,`

    `),ui(82,"angular-slickgrid",26),pp("onAngularGridCreated",function(r){return i.angularGridReady(r.detail)}),UE(83,`
    `),Tc(),UE(84,`
  `),Tc(),UE(85,`
`),Tc(),UE(86,`
`)),l&2&&(Wy(57),Ap("ngModel",i.detailViewRowCount),jv(),Wy(8),Ap("ngModel",i.serverWaitDelay),jv(),Wy(17),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1,En,je,zt,Cn,qt],encapsulation:2});}}return u})();export{ne as Example47Component};