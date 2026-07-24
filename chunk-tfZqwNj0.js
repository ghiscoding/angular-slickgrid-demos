import {Q,L}from'./chunk-CNsicAIC.js';import {M as MM,a0 as OB,X as XN,e as Tu,a1 as PP,f as LB,a2 as te,_ as _I,j as j1,E as En,z as je,F as zt,G as Cn,I as qt,u as ui,q as qE,c as cp,T as Tc,p as pp,J as Rp,O as Lv,W as Wy,P as Ap,Q as jv,a as ap,H as Hp,g as cD,N as Np,n as dD,R as RE,S as QE}from'./main-MR3B775B.js';import {a as a$1}from'./chunk-B52EFzUa.js';var j=(()=>{class u{alertAssignee(o){alert(typeof o=="string"?`Assignee on this task is: ${o.toUpperCase()}`:"No one is assigned to this task.");}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a$1(`Deleted row with ${o.title}`,"danger"));}showNotification(o){a$1(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,"info");}static{this.\u0275fac=function(l){return new(l||u)};}static{this.\u0275cmp=_I({type:u,selectors:[["ng-component"]],decls:94,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-3","detail-label"],[1,"form-control","assignee",3,"ngModelChange","ngModel"],[1,"col-sm-8"],["data-test","assignee-btn",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-sm-4"],["data-test","delete-btn",1,"btn","btn-primary","btn-danger","btn-sm",3,"click"],["data-test","parent-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"]],template:function(l,i){l&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h3"),qE(3),Tc(),qE(4,`
  `),ui(5,"div",1),qE(6,`
    `),ui(7,"div",2)(8,"label"),qE(9,"Assignee:"),Tc(),qE(10," "),ui(11,"input",3),Rp("ngModelChange",function(r){return QE(i.model.assignee,r)||(i.model.assignee=r),r}),Tc(),Lv(),Tc(),qE(12,`
    `),ui(13,"div",2),qE(14,`
      `),ui(15,"label"),qE(16,"Reporter:"),Tc(),qE(17," "),ui(18,"span"),qE(19),Tc(),qE(20,`
    `),Tc(),qE(21,`
    `),ui(22,"div",2),qE(23,`
      `),ui(24,"label"),qE(25,"Duration:"),Tc(),qE(26," "),ui(27,"span"),qE(28),Tc(),qE(29,`
    `),Tc(),qE(30,`
    `),ui(31,"div",2),qE(32,`
      `),ui(33,"label"),qE(34,"% Complete:"),Tc(),qE(35," "),ui(36,"span"),qE(37),Tc(),qE(38,`
    `),Tc(),qE(39,`
  `),Tc(),qE(40,`

  `),ui(41,"div",1),qE(42,`
    `),ui(43,"div",2),qE(44,`
      `),ui(45,"label"),qE(46,"Start:"),Tc(),qE(47," "),ui(48,"span"),qE(49),cD(50,"date"),Tc(),qE(51,`
    `),Tc(),qE(52,`
    `),ui(53,"div",2),qE(54,`
      `),ui(55,"label"),qE(56,"Finish:"),Tc(),qE(57," "),ui(58,"span"),qE(59),cD(60,"date"),Tc(),qE(61,`
    `),Tc(),qE(62,`
    `),ui(63,"div",2)(64,"label"),qE(65,"Effort Driven:"),Tc(),qE(66," "),cp(67,"i"),Tc(),qE(68,`
  `),Tc(),qE(69,`

  `),cp(70,"hr"),qE(71,`

  `),ui(72,"div",4),qE(73,`
    `),ui(74,"h4"),qE(75,`
      Find out who is the Assignee
      `),ui(76,"small"),qE(77,`
        `),ui(78,"button",5),pp("click",function(){return i.alertAssignee(i.model==null?null:i.model.assignee)}),qE(79,"Click Me"),Tc(),qE(80,`
      `),Tc(),qE(81,`
    `),Tc(),qE(82,`
  `),Tc(),qE(83,`
  `),ui(84,"div",6),qE(85,`
    `),ui(86,"button",7),pp("click",function(){return i.deleteRow(i.model)}),qE(87,"Delete Row"),Tc(),qE(88,`
    `),ui(89,"button",8),pp("click",function(){return i.showNotification(i.model)}),qE(90,`
      Call Parent Method
    `),Tc(),qE(91,`
  `),Tc(),qE(92,`
`),Tc(),qE(93,`
`)),l&2&&(Wy(3),Np(i.model?.title),Wy(8),Ap("ngModel",i.model.assignee),jv(),Wy(8),Np(i.model?.reporter),Wy(9),Np(i.model?.duration),Wy(9),Np(i.model?.percentComplete),Wy(12),Np(dD(50,9,i.model==null?null:i.model.start,"yyyy-MM-dd")),Wy(10),Np(dD(60,12,i.model==null?null:i.model.finish,"yyyy-MM-dd")),Wy(8),RE(i.model?.effortDriven?"mdi mdi-check":""));},dependencies:[En,je,Cn,qt,Hp],styles:[".detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}","label[_ngcontent-%COMP%]{font-weight:600}"]});}}return u})();var $=250,J=1e3,ne=(()=>{class u{constructor(){this._darkMode=false,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=false,this.flashAlertType="info",this.message="",this.serverWaitDelay=$;}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration();}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid();}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,width:70,filterable:true,editor:{model:MM.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",minWidth:90,filterable:true},{id:"%",name:"% Complete",field:"percentComplete",minWidth:200,width:250,resizable:false,filterable:true,sortable:true,type:"number",formatter:XN.percentCompleteBar,groupTotalsFormatter:OB.avgTotalsPercentage,params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"cost",name:"Cost",field:"cost",minWidth:70,width:80,sortable:true,filterable:true,filter:{model:Tu.compoundInputNumber},type:"number",formatter:XN.dollar,groupTotalsFormatter:OB.sumTotalsDollarBold},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:XN.checkmarkMaterial,type:"boolean",filterable:true,sortable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableGrouping:true,enableRowDetailView:true,rowTopOffsetRenderType:"top",darkMode:this._darkMode,externalResources:[L],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:true,singleRowExpand:false,useRowClick:false,panelRows:this.detailViewRowCount,preloadComponent:Q,viewComponent:j},selectionOptions:{selectActiveRow:true}},this.getData();}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),R=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:"Task "+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?R:-R,effortDriven:l%5===0};}this.dataset=o;}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o));}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll();}clearGrouping(){this.dataviewObj.setGrouping([]);}collapseAllGroups(){this.dataviewObj.collapseAllGroups();}expandAllGroups(){this.dataviewObj.expandAllGroups();}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:"duration",sortAsc:true}]),this.dataviewObj.setGrouping({getter:"duration",formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new PP.Avg("percentComplete"),new PP.Sum("cost")],comparer:(o,l)=>LB.numeric(o.value,l.value,te.asc),aggregateCollapsed:false,lazyTotalsCalculation:true}),this.gridObj.invalidate();}groupByDurationEffortDriven(){let o=[{columnId:"duration",sortAsc:true},{columnId:"effortDriven",sortAsc:true}];this.angularGrid.filterService.setSortColumnIcons(o),this.dataviewObj.setGrouping([{getter:"duration",formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new PP.Sum("duration"),new PP.Sum("cost")],aggregateCollapsed:true,lazyTotalsCalculation:true},{getter:"effortDriven",formatter:l=>`Effort-Driven: ${l.value?"True":"False"} <span style="color:green">(${l.count} items)</span>`,aggregators:[new PP.Avg("percentComplete"),new PP.Sum("cost")],collapsed:true,lazyTotalsCalculation:true}]),this.gridObj.invalidate();}simulateServerAsyncCall(o){let l=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||"",a.reporter=l[this.randomNumber(0,9)]||"",i(a);},this.serverWaitDelay);})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail();}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light");}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(2);}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.\u0275fac=function(l){return new(l||u)};}static{this.\u0275cmp=_I({type:u,selectors:[["ng-component"]],decls:87,vars:5,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["type","button","data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail","target","_blank"],["className","row"],["className","col-sm-12 d-flex gap-4px"],["type","button","data-test","collapse-all-rowdetail-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["type","button","data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["type","button","data-test","collapse-all-groups-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["type","button","data-test","expand-all-groups-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],["for","detailViewRowCount"],["id","detailViewRowCount","type","number",2,"height","22px","width","40px",3,"ngModelChange","ngModel"],["type","button","data-test","set-count-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","serverdelay",1,"ms-2"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"height","26px","width","55px",3,"ngModelChange","ngModel"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","group-duration-effort-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid47",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,i){l&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 47: Row Detail View + Grouping
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return i.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
    `),ui(17,"button",6),pp("click",function(){return i.toggleDarkMode()}),qE(18,`
      `),cp(19,"span",7),qE(20,`
      `),ui(21,"span"),qE(22,"Toggle Dark Mode"),Tc(),qE(23,`
    `),Tc(),qE(24,`
  `),Tc(),qE(25,`

  `),ui(26,"div",8),qE(27,`
    Provide ability for Row Detail to work with Grouping, see (`),ui(28,"a",9),qE(29,"Wiki docs"),Tc(),qE(30,`)
  `),Tc(),qE(31,`

  `),ui(32,"div",10),qE(33,`
    `),ui(34,"div",11),qE(35,`
      `),ui(36,"button",12),pp("click",function(){return i.closeAllRowDetail()}),qE(37,`
        Close All Row Details
      `),Tc(),qE(38,`
      `),ui(39,"button",13),pp("click",function(){return i.clearGrouping()}),qE(40,`
        `),cp(41,"i",14),qE(42,` Clear grouping
      `),Tc(),qE(43,`
      `),ui(44,"button",15),pp("click",function(){return i.collapseAllGroups()}),qE(45,`
        `),cp(46,"i",16),qE(47,` Collapse all groups
      `),Tc(),qE(48,`
      `),ui(49,"button",17),pp("click",function(){return i.expandAllGroups()}),qE(50,`
        `),cp(51,"i",18),qE(52,` Expand all groups
      `),Tc(),qE(53,`

      `),ui(54,"label",19),qE(55,"Detail View Rows Shown: "),Tc(),qE(56,`
      `),ui(57,"input",20),Rp("ngModelChange",function(r){return QE(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Tc(),Lv(),qE(58,`
      `),ui(59,"button",21),pp("click",function(){return i.changeDetailViewRowCount()}),qE(60,`
        Set
      `),Tc(),qE(61,`
      `),ui(62,"label",22),qE(63,"Server Delay: "),Tc(),qE(64,`
      `),ui(65,"input",23),Rp("ngModelChange",function(r){return QE(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Tc(),Lv(),qE(66,`
    `),Tc(),qE(67,`

    `),ui(68,"div",10),qE(69,`
      `),ui(70,"div",11),qE(71,`
        `),ui(72,"button",24),pp("click",function(){return i.groupByDuration()}),qE(73,`
          Group by Duration
        `),Tc(),qE(74,`
        `),ui(75,"button",25),pp("click",function(){return i.groupByDurationEffortDriven()}),qE(76,`
          Group by Duration then Effort-Driven
        `),Tc(),qE(77,`
      `),Tc(),qE(78,`
    `),Tc(),qE(79,`

    `),cp(80,"hr"),qE(81,`

    `),ui(82,"angular-slickgrid",26),pp("onAngularGridCreated",function(r){return i.angularGridReady(r.detail)}),qE(83,`
    `),Tc(),qE(84,`
  `),Tc(),qE(85,`
`),Tc(),qE(86,`
`)),l&2&&(Wy(57),Ap("ngModel",i.detailViewRowCount),jv(),Wy(8),Ap("ngModel",i.serverWaitDelay),jv(),Wy(17),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1,En,je,zt,Cn,qt],encapsulation:2});}}return u})();export{ne as Example47Component};