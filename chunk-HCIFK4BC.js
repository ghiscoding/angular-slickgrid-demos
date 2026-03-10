import{a as F,b as O}from"./chunk-YBCESIN2.js";import{b as S,c as C,f as _,h as P,o as k}from"./chunk-BBW77BDN.js";import{Da as B,n as W,p as G,wa as x,ya as D,za as p}from"./chunk-V3K67AAF.js";import{$b as y,Ib as w,Jb as e,Kb as c,Lb as I,Oa as b,Ob as h,Pb as g,Qb as f,Sb as V,Zb as E,cb as M,db as R,hb as T,ib as n,jb as t,kb as u,ub as m,wb as A,za as d}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var N=(()=>{class s{constructor(){this.model={}}alertAssignee(l){alert(typeof l=="string"?`Assignee on this task is: ${l.toUpperCase()}`:"No one is assigned to this task.")}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.rowId),this.parentRef.showFlashMessage(`Deleted row with ${l.title}`,"danger"))}callParentMethod(l){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${l.title}`)}static{this.\u0275fac=function(a){return new(a||s)}}static{this.\u0275cmp=b({type:s,selectors:[["ng-component"]],decls:95,vars:18,consts:[[1,"container-fluid"],[1,"row"],[1,"col-3","detail-label"],[1,"form-control",3,"ngModelChange","ngModel"],[1,"col-sm-8"],["data-test","assignee-btn",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-sm-4"],["data-test","delete-btn",1,"btn","btn-primary","btn-danger","btn-sm",3,"click"],["data-test","parent-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"]],template:function(a,i){a&1&&(n(0,"div",0),e(1,`
  `),n(2,"h3"),e(3),t(),e(4,`
  `),n(5,"div",1),e(6,`
    `),n(7,"div",2)(8,"label"),e(9,"Assignee:"),t(),e(10," "),n(11,"input",3),f("ngModelChange",function(r){return g(i.model.assignee,r)||(i.model.assignee=r),r}),t()(),e(12,`
    `),n(13,"div",2),e(14,`
      `),n(15,"label"),e(16,"Reporter:"),t(),e(17," "),n(18,"span"),e(19),t(),e(20,`
    `),t(),e(21,`
    `),n(22,"div",2),e(23,`
      `),n(24,"label"),e(25,"Duration:"),t(),e(26," "),n(27,"span"),e(28),E(29,"number"),t(),e(30,`
    `),t(),e(31,`
    `),n(32,"div",2),e(33,`
      `),n(34,"label"),e(35,"% Complete:"),t(),e(36," "),n(37,"span"),e(38),t(),e(39,`
    `),t(),e(40,`
  `),t(),e(41,`

  `),n(42,"div",1),e(43,`
    `),n(44,"div",2),e(45,`
      `),n(46,"label"),e(47,"Start:"),t(),e(48," "),n(49,"span"),e(50),E(51,"date"),t(),e(52,`
    `),t(),e(53,`
    `),n(54,"div",2),e(55,`
      `),n(56,"label"),e(57,"Finish:"),t(),e(58," "),n(59,"span"),e(60),E(61,"date"),t(),e(62,`
    `),t(),e(63,`
    `),n(64,"div",2)(65,"label"),e(66,"Effort Driven:"),t(),e(67," "),u(68,"i"),t(),e(69,`
  `),t(),e(70,`

  `),u(71,"hr"),e(72,`

  `),n(73,"div",4),e(74,`
    `),n(75,"h4"),e(76,`
      Find out who is the Assignee
      `),n(77,"small"),e(78,`
        `),n(79,"button",5),m("click",function(){return i.alertAssignee(i.model==null?null:i.model.assignee)}),e(80,"Click Me"),t(),e(81,`
      `),t(),e(82,`
    `),t(),e(83,`
  `),t(),e(84,`
  `),n(85,"div",6),e(86,`
    `),n(87,"button",7),m("click",function(){return i.deleteRow(i.model)}),e(88,"Delete Row"),t(),e(89,`
    `),n(90,"button",8),m("click",function(){return i.callParentMethod(i.model)}),e(91,`
      Call Parent Method
    `),t(),e(92,`
  `),t(),e(93,`
`),t(),e(94,`
`)),a&2&&(d(3),c(i.model==null?null:i.model.title),d(8),h("ngModel",i.model.assignee),d(8),c(i.model==null?null:i.model.reporter),d(9),c(y(29,9,i.model==null?null:i.model.duration,"1.2-2")),d(10),c(i.model==null?null:i.model.percentComplete),d(12),c(y(51,12,i.model==null?null:i.model.start,"yyyy-MM-dd")),d(10),c(y(61,15,i.model==null?null:i.model.finish,"yyyy-MM-dd")),d(8),w(i.model!=null&&i.model.effortDriven?"mdi mdi-check":""))},dependencies:[k,S,C,_,W,G],styles:[".detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}","label[_ngcontent-%COMP%]{font-weight:600}"]})}}return s})();function z(s,j){if(s&1&&(e(0,`
      `),n(1,"div",21),e(2),t(),e(3,`
    `)),s&2){let l=A();d(),w(V("alert alert-",l.flashAlertType," col-sm-6")),d(),I(`
        `,l.message,`
      `)}}var J=250,Y=1e3,te=(()=>{class s{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType="info",this.message="",this.serverWaitDelay=J}angularGridReady(l){this.angularGrid=l}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,width:70,filterable:!0,editor:{model:D.text}},{id:"duration",name:"Duration (days)",field:"duration",formatter:p.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:"number",minWidth:90,filterable:!0},{id:"percent2",name:"% Complete",field:"percentComplete2",editor:{model:D.slider},formatter:p.progressBar,type:"number",sortable:!0,minWidth:100,filterable:!0,filter:{model:x.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:p.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:x.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:p.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:x.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:p.checkmarkMaterial,type:"boolean",filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:x.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,rowTopOffsetRenderType:"top",darkMode:this._darkMode,datasetIdPropertyName:"rowId",externalResources:[F],rowDetailView:{process:l=>this.simulateServerAsyncCall(l),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadComponent:O,viewComponent:N,parentRef:this,onBeforeRowDetailToggle:(l,a)=>(console.log("before toggling row detail",a.item),!0)},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let l=[];for(let a=0;a<Y;a++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);l[a]={rowId:a,title:"Task "+a,duration:a%33===0?null:Math.random()*100+"",percentComplete:v,percentComplete2:v,percentCompleteNumber:v,start:new Date(i,o,r),finish:new Date(i,o+1,r),effortDriven:a%5===0}}this.dataset=l}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l))}}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.angularGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}showFlashMessage(l,a="info"){this.message=l,this.flashAlertType=a}simulateServerAsyncCall(l){let a=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise(i=>{setTimeout(()=>{let o=l;o.assignee=a[this.randomNumber(0,9)]||"",o.reporter=a[this.randomNumber(0,9)]||"",i(o)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(l,a){return Math.floor(Math.random()*(a-l+1)+l)}static{this.\u0275fac=function(a){return new(a||s)}}static{this.\u0275cmp=b({type:s,selectors:[["ng-component"]],decls:79,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example19.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail","target","_blank"],[1,"row"],[1,"col-sm-6"],["data-test","editable-grid-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"d-inline-flex","gap-4px"],["for","detailViewRowCount"],["id","detailViewRowCount","type","number",2,"height","22px","width","40px",3,"ngModelChange","ngModel"],["data-test","set-count-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["for","serverdelay",1,"ms-2"],["id","serverdelay","type","number","data-test","server-delay","title","input a fake timer delay to simulate slow server response",2,"height","26px","width","55px",3,"ngModelChange","ngModel"],["gridId","grid19",3,"onAngularGridCreated","columns","options","dataset"],["data-test","flash-msg"]],template:function(a,i){a&1&&(n(0,"div",0),e(1,`
  `),n(2,"h2"),e(3,`
    Example 19: Row Detail View
    `),n(4,"span",1),e(5,`
      `),n(6,"a",2),e(7,`
        `),u(8,"span",3),e(9,` code
      `),t(),e(10,`
    `),t(),e(11,`
    `),n(12,"button",4),m("click",function(){return i.toggleSubTitle()}),e(13,`
      `),u(14,"span",5),e(15,`
    `),t(),e(16,`
    `),n(17,"button",6),m("click",function(){return i.toggleDarkMode()}),e(18,`
      `),u(19,"span",7),e(20,`
      `),n(21,"span"),e(22,"Toggle Dark Mode"),t(),e(23,`
    `),t(),e(24,`
  `),t(),e(25,`

  `),n(26,"div",8),e(27,`
    Add functionality to show extra information with a Row Detail View, (`),n(28,"a",9),e(29,"Wiki docs"),t(),e(30,`)
    `),n(31,"ul"),e(32,`
      `),n(33,"li"),e(34,'Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")'),t(),e(35,`
      `),n(36,"li"),e(37,"Pass a View/Model as a Template to the Row Detail"),t(),e(38,`
      `),n(39,"li"),e(40,`
        You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every
        2nd row)
      `),t(),e(41,`
    `),t(),e(42,`
  `),t(),e(43,`

  `),n(44,"div",10),e(45,`
    `),n(46,"div",11),e(47,`
      `),n(48,"button",12),m("click",function(){return i.changeEditableGrid()}),e(49,`
        Make Grid Editable
      `),t(),e(50,`
      `),n(51,"button",13),m("click",function(){return i.closeAllRowDetail()}),e(52,`
        Close All Row Details
      `),t(),e(53,`
      \xA0\xA0

      `),n(54,"span",14),e(55,`
        `),n(56,"label",15),e(57,"Detail View Rows Shown: "),t(),e(58,`
        `),n(59,"input",16),f("ngModelChange",function(r){return g(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),t(),e(60,`
        `),n(61,"button",17),m("click",function(){return i.changeDetailViewRowCount()}),e(62,`
          Set
        `),t(),e(63,`
        `),n(64,"label",18),e(65,"Server Delay: "),t(),e(66,`
        `),n(67,"input",19),f("ngModelChange",function(r){return g(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),t(),e(68,`
      `),t(),e(69,`
    `),t(),e(70,`
    `),M(71,z,4,4),t(),e(72,`

  `),u(73,"hr"),e(74,`

  `),n(75,"angular-slickgrid",20),m("onAngularGridCreated",function(r){return i.angularGridReady(r.detail)}),e(76,`
  `),t(),e(77,`
`),t(),e(78,`
`)),a&2&&(d(59),h("ngModel",i.detailViewRowCount),d(8),h("ngModel",i.serverWaitDelay),d(4),R(i.message?71:-1),d(4),T("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset))},dependencies:[B,k,S,P,C,_],encapsulation:2})}}return s})();export{te as Example19Component};
