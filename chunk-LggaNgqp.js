import {Z as Ze}from'./chunk-CP-2FMG8.js';import {af as j,q as qN,s,r as r$1,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,g as sp}from'./main-C6PQTYH6.js';var y=995,v=(()=>{class m{constructor(){this._eventHandler=new j,this.columns1=[],this.columns2=[],this.hideSubTitle=false;}ngOnInit(){this.defineGrids(),this.dataset1=this.mockData(y),this.dataset2=this.mockData(y);}angularGridReady1(l){this.angularGrid1=l;let o=l.slickGrid.getSelectionModel();this._eventHandler.subscribe(o.onSelectedRangesChanged,(t,a)=>{let r=document.querySelector("#selectionRange1");if(r){r.textContent="";for(let d of a)r.textContent+=JSON.stringify(d);}});}angularGridReady2(l){this.angularGrid2=l;let o=l.slickGrid.getSelectionModel();this._eventHandler.subscribe(o.onSelectedRangesChanged,(t,a)=>{let r=document.querySelector("#selectionRange2");if(r){r.textContent="";for(let d of a)r.textContent+=JSON.stringify(d);}});}defineGrids(){this.columns1=[{id:"id",name:"#",field:"id",width:32,maxWidth:40,excludeFromHeaderMenu:true},{id:"title",name:"Title",field:"title",width:90,cssClass:"cell-title"},{id:"complete",name:"% Complete",field:"percentComplete",sortable:true,width:90},{id:"start",name:"Start",field:"start",type:"date",sortable:true,formatter:qN.dateUs},{id:"finish",name:"Finish",field:"finish",type:"date",sortable:true,formatter:qN.dateUs},{id:"priority",name:"Priority",field:"priority",width:80,resizable:false,sortable:true,type:"number",sortComparer:(l,o,t)=>(t??0)*(l===o?0:l>o?1:-1),formatter:(l,o,t)=>{if(!t)return "";let a=+(t>=3?3:t);return a===3?"High":a===2?"Medium":"Low"}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",cssClass:"text-center",width:95,maxWidth:120,type:"boolean",sortable:true,exportCustomFormatter:(l,o,t)=>t?"Yes":"No",formatter:qN.checkmarkMaterial}],this.columns2=[...this.columns1],this.gridOptions1={autoResize:{container:".demo-container"},gridHeight:250,gridWidth:800,enableCellNavigation:true,autoEdit:true,editable:true,headerRowHeight:35,rowHeight:35,enableExcelExport:true,excelExportOptions:{exportWithFormatter:true},externalResources:[new Ze],enableSelection:true,selectionOptions:{rowSelectColumnIds:["id"],selectionType:"mixed"},enableExcelCopyBuffer:true,excelCopyBufferOptions:{copyActiveEditorCell:true,removeDoubleQuotesOnPaste:true,replaceNewlinesWith:" "}},this.gridOptions2=s(r$1({},this.gridOptions1),{enableCheckboxSelector:true,enableSelection:true,selectionOptions:{selectActiveRow:false,selectionType:"row",dragToSelect:true}});}mockData(l){let o=[];for(let t=0;t<l;t++){let a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),C=a+Math.floor(Math.random()*10),k=new Date(C,r+1,d);o[t]={id:t,title:"Task "+t,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(a,r,d,d),finish:k,priority:t%3?2:t%5?3:1,effortDriven:t%4===0};}return o}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden");}static{this.\u0275fac=function(o){return new(o||m)};}static{this.\u0275cmp=TI({type:m,selectors:[["ng-component"]],decls:82,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example48.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"subtitle","ms-3","text-italic"],["id","selectionRange1"],[1,"grid-container1"],["gridId","grid48-1",3,"onAngularGridCreated","columns","options","dataset"],["id","selectionRange2"],[1,"grid-container"],["gridId","grid48-2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,t){o&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 48: Hybrid Selection Model
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return t.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    `),ui(20,"code"),BE(21,"SlickHybridSelectionModel"),Tc(),BE(22,` This Selection Model is an hybrid approach that uses a combination of the row or cell selections
    depending on certain conditions.
    `),ui(23,"ul"),BE(24,`
      `),ui(25,"li"),BE(26,`
        1. clicking on the first column (`),ui(27,"code"),BE(28,"id"),Tc(),BE(29,") will use "),ui(30,"code"),BE(31,"RowSelectionModel"),Tc(),BE(32,` because of our configuration of
        `),ui(33,"code"),BE(34,"rowSelectColumnIds: ['id']"),Tc(),BE(35,` as the columns that will trigger row selection.
      `),Tc(),BE(36,`
      `),ui(37,"li"),BE(38,"2. clicking on the any other columns will use "),ui(39,"code"),BE(40,"CellSelectionModel"),Tc(),BE(41," by default"),Tc(),BE(42,`
    `),Tc(),BE(43,`
  `),Tc(),BE(44,`

  `),ui(45,"h3"),BE(46,`
    Grid 1
    `),ui(47,"small",7),BE(48,`
      `),ui(49,"label"),BE(50,"Range Selection"),Tc(),BE(51,`
      `),ap(52,"span",8),BE(53,`
    `),Tc(),BE(54,`
  `),Tc(),BE(55,`
  `),ui(56,"div",9),BE(57,`
    `),ui(58,"angular-slickgrid",10),fp("onAngularGridCreated",function(r){return t.angularGridReady1(r.detail)}),BE(59,`
    `),Tc(),BE(60,`
  `),Tc(),BE(61,`

  `),ap(62,"hr"),BE(63,`

  `),ui(64,"h3"),BE(65,`
    Grid 2
    `),ui(66,"small",7),BE(67,`
      `),ui(68,"label"),BE(69,"Range Selection"),Tc(),BE(70,`
      `),ap(71,"span",11),BE(72,`
    `),Tc(),BE(73,`
  `),Tc(),BE(74,`
  `),ui(75,"div",12),BE(76,`
    `),ui(77,"angular-slickgrid",13),fp("onAngularGridCreated",function(r){return t.angularGridReady2(r.detail)}),BE(78,`
    `),Tc(),BE(79,`
  `),Tc(),BE(80,`
`),Tc(),BE(81,`
`)),o&2&&(Uy(58),sp("columns",t.columns1)("options",t.gridOptions1)("dataset",t.dataset1),Uy(19),sp("columns",t.columns2)("options",t.gridOptions2)("dataset",t.dataset2));},dependencies:[U1],encapsulation:2});}}return m})();export{v as Example48Component};