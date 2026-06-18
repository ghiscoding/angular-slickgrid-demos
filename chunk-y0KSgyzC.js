import {Q,L as L$1}from'./chunk-M8nz7waF.js';import {k as kM,h as Tu,q as qN,T as TI,U as U1,F as En,I as je,J as zt,K as Cn,O as qt,u as ui,B as BE,a as ap,d as Tc,f as fp,P as Ap,R as Ov,z as zI,e as Uy,V as xp,W as Lv,Q as QI,g as sp,H as Hp,m as iD,M as Mp,p as cD,v as SE,n as uE,ae as zE,N as Nc,Y as WE}from'./main-C6PQTYH6.js';var L=(()=>{class s{constructor(){this.model={};}alertAssignee(l){alert(typeof l=="string"?`Assignee on this task is: ${l.toUpperCase()}`:"No one is assigned to this task.");}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.rowId),this.parentRef.showFlashMessage(`Deleted row with ${l.title}`,"danger"));}callParentMethod(l){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${l.title}`);}static{this.\u0275fac=function(a){return new(a||s)};}static{this.\u0275cmp=TI({type:s,selectors:[["ng-component"]],decls:94,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-3","detail-label"],[1,"form-control",3,"ngModelChange","ngModel"],[1,"col-sm-8"],["data-test","assignee-btn",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-sm-4"],["data-test","delete-btn",1,"btn","btn-primary","btn-danger","btn-sm",3,"click"],["data-test","parent-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"]],template:function(a,i){a&1&&(ui(0,"div",0),BE(1,`
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
    `),ui(89,"button",8),fp("click",function(){return i.callParentMethod(i.model)}),BE(90,`
      Call Parent Method
    `),Tc(),BE(91,`
  `),Tc(),BE(92,`
`),Tc(),BE(93,`
`)),a&2&&(Uy(3),Mp(i.model?.title),Uy(8),xp("ngModel",i.model.assignee),Lv(),Uy(8),Mp(i.model?.reporter),Uy(9),Mp(i.model?.duration),Uy(9),Mp(i.model?.percentComplete),Uy(12),Mp(cD(50,9,i.model==null?null:i.model.start,"yyyy-MM-dd")),Uy(10),Mp(cD(60,12,i.model==null?null:i.model.finish,"yyyy-MM-dd")),Uy(8),SE(i.model?.effortDriven?"mdi mdi-check":""));},dependencies:[En,je,Cn,qt,Hp],styles:[".detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}","label[_ngcontent-%COMP%]{font-weight:600}"]});}}return s})();function J(s,K){if(s&1&&(BE(0,`
      `),ui(1,"div",21),BE(2),Tc(),BE(3,`
    `)),s&2){let l=uE();Uy(),SE(zE("alert alert-",l.flashAlertType," col-sm-6")),Uy(),Nc(`
        `,l.message,`
      `);}}var Y=250,j=1e3,ne=(()=>{class s{constructor(){this._darkMode=false,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=false,this.flashAlertType="info",this.message="",this.serverWaitDelay=Y;}angularGridReady(l){this.angularGrid=l;}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid();}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,width:70,filterable:true,editor:{model:kM.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",minWidth:90,filterable:true},{id:"percent2",name:"% Complete",field:"percentComplete2",editor:{model:kM.slider},formatter:qN.progressBar,type:"number",sortable:true,minWidth:100,filterable:true,filter:{model:Tu.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:qN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:qN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:qN.checkmarkMaterial,type:"boolean",filterable:true,sortable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableRowDetailView:true,rowTopOffsetRenderType:"top",darkMode:this._darkMode,datasetIdPropertyName:"rowId",externalResources:[L$1],rowDetailView:{process:l=>this.simulateServerAsyncCall(l),loadOnce:true,singleRowExpand:false,useRowClick:true,panelRows:this.detailViewRowCount,preloadComponent:Q,viewComponent:L,parentRef:this,onBeforeRowDetailToggle:(l,a)=>(console.log("before toggling row detail",a.item),true)},selectionOptions:{selectActiveRow:true}},this.getData();}getData(){let l=[];for(let a=0;a<j;a++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);l[a]={rowId:a,title:"Task "+a,duration:a%33===0?null:Math.floor(Math.random()*100)+1,percentComplete:v,percentComplete2:v,percentCompleteNumber:v,start:new Date(i,o,r),finish:new Date(i,o+1,r),effortDriven:a%5===0};}this.dataset=l;}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l));}}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=false,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.angularGrid?.slickGrid.setOptions({editable:true,autoEdit:true,enableCellNavigation:true}),true}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll();}showFlashMessage(l,a="info"){this.message=l,this.flashAlertType=a;}simulateServerAsyncCall(l){let a=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(i=>{setTimeout(()=>{let o=l;o.assignee=a[this.randomNumber(0,9)]||"",o.reporter=a[this.randomNumber(0,9)]||"",i(o);},this.serverWaitDelay);})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail();}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light");}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(2);}randomNumber(l,a){return Math.floor(Math.random()*(a-l+1)+l)}static{this.\u0275fac=function(a){return new(a||s)};}static{this.\u0275cmp=TI({type:s,selectors:[["ng-component"]],decls:79,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example19.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail","target","_blank"],[1,"row"],[1,"col-sm-6"],["data-test","editable-grid-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"d-inline-flex","gap-4px"],["for","detailViewRowCount"],["id","detailViewRowCount","type","number",2,"height","22px","width","40px",3,"ngModelChange","ngModel"],["data-test","set-count-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["for","serverdelay",1,"ms-2"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"height","26px","width","55px",3,"ngModelChange","ngModel"],["gridId","grid19",3,"onAngularGridCreated","columns","options","dataset"],["data-test","flash-msg"]],template:function(a,i){a&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 19: Row Detail View
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
    Add functionality to show extra information with a Row Detail View, (`),ui(28,"a",9),BE(29,"Wiki docs"),Tc(),BE(30,`)
    `),ui(31,"ul"),BE(32,`
      `),ui(33,"li"),BE(34,'Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")'),Tc(),BE(35,`
      `),ui(36,"li"),BE(37,"Pass a View/Model as a Template to the Row Detail"),Tc(),BE(38,`
      `),ui(39,"li"),BE(40,`
        You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every
        2nd row)
      `),Tc(),BE(41,`
    `),Tc(),BE(42,`
  `),Tc(),BE(43,`

  `),ui(44,"div",10),BE(45,`
    `),ui(46,"div",11),BE(47,`
      `),ui(48,"button",12),fp("click",function(){return i.changeEditableGrid()}),BE(49,`
        Make Grid Editable
      `),Tc(),BE(50,`
      `),ui(51,"button",13),fp("click",function(){return i.closeAllRowDetail()}),BE(52,`
        Close All Row Details
      `),Tc(),BE(53,`
      \xA0\xA0

      `),ui(54,"span",14),BE(55,`
        `),ui(56,"label",15),BE(57,"Detail View Rows Shown: "),Tc(),BE(58,`
        `),ui(59,"input",16),Ap("ngModelChange",function(r){return WE(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Tc(),Ov(),BE(60,`
        `),ui(61,"button",17),fp("click",function(){return i.changeDetailViewRowCount()}),BE(62,`
          Set
        `),Tc(),BE(63,`
        `),ui(64,"label",18),BE(65,"Server Delay: "),Tc(),BE(66,`
        `),ui(67,"input",19),Ap("ngModelChange",function(r){return WE(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Tc(),Ov(),BE(68,`
      `),Tc(),BE(69,`
    `),Tc(),BE(70,`
    `),zI(71,J,4,4),Tc(),BE(72,`

  `),ap(73,"hr"),BE(74,`

  `),ui(75,"angular-slickgrid",20),fp("onAngularGridCreated",function(r){return i.angularGridReady(r.detail)}),BE(76,`
  `),Tc(),BE(77,`
`),Tc(),BE(78,`
`)),a&2&&(Uy(59),xp("ngModel",i.detailViewRowCount),Lv(),Uy(8),xp("ngModel",i.serverWaitDelay),Lv(),Uy(4),QI(i.message?71:-1),Uy(4),sp("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[U1,En,je,zt,Cn,qt],encapsulation:2});}}return s})();export{ne as Example19Component};