import {Q,L as L$1}from'./chunk-ChTt2faV.js';import {M as MM,e as Tu,X as XN,_ as _I,j as j1,E as En,z as je,F as zt,G as Cn,I as qt,u as ui,q as qE,c as cp,T as Tc,p as pp,J as Rp,O as Lv,Y as YI,W as Wy,P as Ap,Q as jv,K as KI,a as ap,H as Hp,g as cD,N as Np,n as dD,R as RE,h as pE,ae as YE,i as Nc,S as QE}from'./main-MYLFMRPB.js';var L=(()=>{class s{constructor(){this.model={};}alertAssignee(l){alert(typeof l=="string"?`Assignee on this task is: ${l.toUpperCase()}`:"No one is assigned to this task.");}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.rowId),this.parentRef.showFlashMessage(`Deleted row with ${l.title}`,"danger"));}callParentMethod(l){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${l.title}`);}static{this.\u0275fac=function(a){return new(a||s)};}static{this.\u0275cmp=_I({type:s,selectors:[["ng-component"]],decls:94,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-3","detail-label"],[1,"form-control",3,"ngModelChange","ngModel"],[1,"col-sm-8"],["data-test","assignee-btn",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-sm-4"],["data-test","delete-btn",1,"btn","btn-primary","btn-danger","btn-sm",3,"click"],["data-test","parent-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"]],template:function(a,i){a&1&&(ui(0,"div",0),qE(1,`
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
    `),ui(89,"button",8),pp("click",function(){return i.callParentMethod(i.model)}),qE(90,`
      Call Parent Method
    `),Tc(),qE(91,`
  `),Tc(),qE(92,`
`),Tc(),qE(93,`
`)),a&2&&(Wy(3),Np(i.model?.title),Wy(8),Ap("ngModel",i.model.assignee),jv(),Wy(8),Np(i.model?.reporter),Wy(9),Np(i.model?.duration),Wy(9),Np(i.model?.percentComplete),Wy(12),Np(dD(50,9,i.model==null?null:i.model.start,"yyyy-MM-dd")),Wy(10),Np(dD(60,12,i.model==null?null:i.model.finish,"yyyy-MM-dd")),Wy(8),RE(i.model?.effortDriven?"mdi mdi-check":""));},dependencies:[En,je,Cn,qt,Hp],styles:[".detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}","label[_ngcontent-%COMP%]{font-weight:600}"]});}}return s})();function J(s,K){if(s&1&&(qE(0,`
      `),ui(1,"div",21),qE(2),Tc(),qE(3,`
    `)),s&2){let l=pE();Wy(),RE(YE("alert alert-",l.flashAlertType," col-sm-6")),Wy(),Nc(`
        `,l.message,`
      `);}}var Y=250,j=1e3,ne=(()=>{class s{constructor(){this._darkMode=false,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=false,this.flashAlertType="info",this.message="",this.serverWaitDelay=Y;}angularGridReady(l){this.angularGrid=l;}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid();}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,width:70,filterable:true,editor:{model:MM.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",minWidth:90,filterable:true},{id:"percent2",name:"% Complete",field:"percentComplete2",editor:{model:MM.slider},formatter:XN.progressBar,type:"number",sortable:true,minWidth:100,filterable:true,filter:{model:Tu.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:XN.checkmarkMaterial,type:"boolean",filterable:true,sortable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableRowDetailView:true,rowTopOffsetRenderType:"top",darkMode:this._darkMode,datasetIdPropertyName:"rowId",externalResources:[L$1],rowDetailView:{process:l=>this.simulateServerAsyncCall(l),loadOnce:true,singleRowExpand:false,useRowClick:true,panelRows:this.detailViewRowCount,preloadComponent:Q,viewComponent:L,parentRef:this,onBeforeRowDetailToggle:(l,a)=>(console.log("before toggling row detail",a.item),true)},selectionOptions:{selectActiveRow:true}},this.getData();}getData(){let l=[];for(let a=0;a<j;a++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);l[a]={rowId:a,title:"Task "+a,duration:a%33===0?null:Math.floor(Math.random()*100)+1,percentComplete:v,percentComplete2:v,percentCompleteNumber:v,start:new Date(i,o,r),finish:new Date(i,o+1,r),effortDriven:a%5===0};}this.dataset=l;}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l));}}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=false,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.angularGrid?.slickGrid.setOptions({editable:true,autoEdit:true,enableCellNavigation:true}),true}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll();}showFlashMessage(l,a="info"){this.message=l,this.flashAlertType=a;}simulateServerAsyncCall(l){let a=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(i=>{setTimeout(()=>{let o=l;o.assignee=a[this.randomNumber(0,9)]||"",o.reporter=a[this.randomNumber(0,9)]||"",i(o);},this.serverWaitDelay);})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail();}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light");}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(2);}randomNumber(l,a){return Math.floor(Math.random()*(a-l+1)+l)}static{this.\u0275fac=function(a){return new(a||s)};}static{this.\u0275cmp=_I({type:s,selectors:[["ng-component"]],decls:79,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example19.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail","target","_blank"],[1,"row"],[1,"col-sm-6"],["data-test","editable-grid-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"d-inline-flex","gap-4px"],["for","detailViewRowCount"],["id","detailViewRowCount","type","number",2,"height","22px","width","40px",3,"ngModelChange","ngModel"],["data-test","set-count-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["for","serverdelay",1,"ms-2"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"height","26px","width","55px",3,"ngModelChange","ngModel"],["gridId","grid19",3,"onAngularGridCreated","columns","options","dataset"],["data-test","flash-msg"]],template:function(a,i){a&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 19: Row Detail View
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
    Add functionality to show extra information with a Row Detail View, (`),ui(28,"a",9),qE(29,"Wiki docs"),Tc(),qE(30,`)
    `),ui(31,"ul"),qE(32,`
      `),ui(33,"li"),qE(34,'Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")'),Tc(),qE(35,`
      `),ui(36,"li"),qE(37,"Pass a View/Model as a Template to the Row Detail"),Tc(),qE(38,`
      `),ui(39,"li"),qE(40,`
        You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every
        2nd row)
      `),Tc(),qE(41,`
    `),Tc(),qE(42,`
  `),Tc(),qE(43,`

  `),ui(44,"div",10),qE(45,`
    `),ui(46,"div",11),qE(47,`
      `),ui(48,"button",12),pp("click",function(){return i.changeEditableGrid()}),qE(49,`
        Make Grid Editable
      `),Tc(),qE(50,`
      `),ui(51,"button",13),pp("click",function(){return i.closeAllRowDetail()}),qE(52,`
        Close All Row Details
      `),Tc(),qE(53,`
      \xA0\xA0

      `),ui(54,"span",14),qE(55,`
        `),ui(56,"label",15),qE(57,"Detail View Rows Shown: "),Tc(),qE(58,`
        `),ui(59,"input",16),Rp("ngModelChange",function(r){return QE(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Tc(),Lv(),qE(60,`
        `),ui(61,"button",17),pp("click",function(){return i.changeDetailViewRowCount()}),qE(62,`
          Set
        `),Tc(),qE(63,`
        `),ui(64,"label",18),qE(65,"Server Delay: "),Tc(),qE(66,`
        `),ui(67,"input",19),Rp("ngModelChange",function(r){return QE(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Tc(),Lv(),qE(68,`
      `),Tc(),qE(69,`
    `),Tc(),qE(70,`
    `),YI(71,J,4,4),Tc(),qE(72,`

  `),cp(73,"hr"),qE(74,`

  `),ui(75,"angular-slickgrid",20),pp("onAngularGridCreated",function(r){return i.angularGridReady(r.detail)}),qE(76,`
  `),Tc(),qE(77,`
`),Tc(),qE(78,`
`)),a&2&&(Wy(59),Ap("ngModel",i.detailViewRowCount),jv(),Wy(8),Ap("ngModel",i.serverWaitDelay),jv(),Wy(4),KI(i.message?71:-1),Wy(4),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1,En,je,zt,Cn,qt],encapsulation:2});}}return s})();export{ne as Example19Component};