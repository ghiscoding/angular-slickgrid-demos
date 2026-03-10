import{b as E}from"./chunk-BNUP54LE.js";import{Da as b,na as S,za as u}from"./chunk-V3K67AAF.js";import{Jb as e,Oa as f,hb as h,ib as n,jb as i,kb as s,ub as c,za as p}from"./chunk-CCOLL5XZ.js";import{a as g,b as x}from"./chunk-PRARYYF3.js";var y=995,v=(()=>{class m{constructor(){this._eventHandler=new S,this.columns1=[],this.columns2=[],this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset1=this.mockData(y),this.dataset2=this.mockData(y)}angularGridReady1(l){this.angularGrid1=l;let o=l.slickGrid.getSelectionModel();this._eventHandler.subscribe(o.onSelectedRangesChanged,(t,a)=>{let r=document.querySelector("#selectionRange1");if(r){r.textContent="";for(let d of a)r.textContent+=JSON.stringify(d)}})}angularGridReady2(l){this.angularGrid2=l;let o=l.slickGrid.getSelectionModel();this._eventHandler.subscribe(o.onSelectedRangesChanged,(t,a)=>{let r=document.querySelector("#selectionRange2");if(r){r.textContent="";for(let d of a)r.textContent+=JSON.stringify(d)}})}defineGrids(){this.columns1=[{id:"id",name:"#",field:"id",width:32,maxWidth:40,excludeFromHeaderMenu:!0},{id:"title",name:"Title",field:"title",width:90,cssClass:"cell-title"},{id:"complete",name:"% Complete",field:"percentComplete",sortable:!0,width:90},{id:"start",name:"Start",field:"start",type:"date",sortable:!0,formatter:u.dateUs},{id:"finish",name:"Finish",field:"finish",type:"date",sortable:!0,formatter:u.dateUs},{id:"priority",name:"Priority",field:"priority",width:80,resizable:!1,sortable:!0,type:"number",sortComparer:(l,o,t)=>(t??0)*(l===o?0:l>o?1:-1),formatter:(l,o,t)=>{if(!t)return"";let a=+(t>=3?3:t);return a===3?"High":a===2?"Medium":"Low"}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",cssClass:"text-center",width:95,maxWidth:120,type:"boolean",sortable:!0,exportCustomFormatter:(l,o,t)=>t?"Yes":"No",formatter:u.checkmarkMaterial}],this.columns2=[...this.columns1],this.gridOptions1={autoResize:{container:".demo-container"},gridHeight:250,gridWidth:800,enableCellNavigation:!0,autoEdit:!0,editable:!0,headerRowHeight:35,rowHeight:35,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new E],enableSelection:!0,selectionOptions:{rowSelectColumnIds:["id"],selectionType:"mixed"},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:" "}},this.gridOptions2=x(g({},this.gridOptions1),{enableCheckboxSelector:!0,enableSelection:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row",dragToSelect:!0}})}mockData(l){let o=[];for(let t=0;t<l;t++){let a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),C=a+Math.floor(Math.random()*10),k=new Date(C,r+1,d);o[t]={id:t,title:"Task "+t,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(a,r,d,d),finish:k,priority:t%3?2:t%5?3:1,effortDriven:t%4===0}}return o}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden")}static{this.\u0275fac=function(o){return new(o||m)}}static{this.\u0275cmp=f({type:m,selectors:[["ng-component"]],decls:82,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example48.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"subtitle","ms-3","text-italic"],["id","selectionRange1"],[1,"grid-container1"],["gridId","grid48-1",3,"onAngularGridCreated","columns","options","dataset"],["id","selectionRange2"],[1,"grid-container"],["gridId","grid48-2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,t){o&1&&(n(0,"div",0),e(1,`
  `),n(2,"h2"),e(3,`
    Example 48: Hybrid Selection Model
    `),n(4,"span",1),e(5,`
      `),n(6,"a",2),e(7,`
        `),s(8,"span",3),e(9,` code
      `),i(),e(10,`
    `),i(),e(11,`
    `),n(12,"button",4),c("click",function(){return t.toggleSubTitle()}),e(13,`
      `),s(14,"span",5),e(15,`
    `),i(),e(16,`
  `),i(),e(17,`

  `),n(18,"div",6),e(19,`
    `),n(20,"code"),e(21,"SlickHybridSelectionModel"),i(),e(22,` This Selection Model is an hybrid approach that uses a combination of the row or cell selections
    depending on certain conditions.
    `),n(23,"ul"),e(24,`
      `),n(25,"li"),e(26,`
        1. clicking on the first column (`),n(27,"code"),e(28,"id"),i(),e(29,") will use "),n(30,"code"),e(31,"RowSelectionModel"),i(),e(32,` because of our configuration of
        `),n(33,"code"),e(34,"rowSelectColumnIds: ['id']"),i(),e(35,` as the columns that will trigger row selection.
      `),i(),e(36,`
      `),n(37,"li"),e(38,"2. clicking on the any other columns will use "),n(39,"code"),e(40,"CellSelectionModel"),i(),e(41," by default"),i(),e(42,`
    `),i(),e(43,`
  `),i(),e(44,`

  `),n(45,"h3"),e(46,`
    Grid 1
    `),n(47,"small",7),e(48,`
      `),n(49,"label"),e(50,"Range Selection"),i(),e(51,`
      `),s(52,"span",8),e(53,`
    `),i(),e(54,`
  `),i(),e(55,`
  `),n(56,"div",9),e(57,`
    `),n(58,"angular-slickgrid",10),c("onAngularGridCreated",function(r){return t.angularGridReady1(r.detail)}),e(59,`
    `),i(),e(60,`
  `),i(),e(61,`

  `),s(62,"hr"),e(63,`

  `),n(64,"h3"),e(65,`
    Grid 2
    `),n(66,"small",7),e(67,`
      `),n(68,"label"),e(69,"Range Selection"),i(),e(70,`
      `),s(71,"span",11),e(72,`
    `),i(),e(73,`
  `),i(),e(74,`
  `),n(75,"div",12),e(76,`
    `),n(77,"angular-slickgrid",13),c("onAngularGridCreated",function(r){return t.angularGridReady2(r.detail)}),e(78,`
    `),i(),e(79,`
  `),i(),e(80,`
`),i(),e(81,`
`)),o&2&&(p(58),h("columns",t.columns1)("options",t.gridOptions1)("dataset",t.dataset1),p(19),h("columns",t.columns2)("options",t.gridOptions2)("dataset",t.dataset2))},dependencies:[b],encapsulation:2})}}return m})();export{v as Example48Component};
