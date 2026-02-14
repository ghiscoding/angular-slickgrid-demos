import{b as E}from"./chunk-CDWFOXJG.js";import{Da as b,na as S,za as u}from"./chunk-IBXCHNN7.js";import{Aa as p,Kb as e,Pa as x,ib as h,jb as i,kb as n,lb as s,vb as c}from"./chunk-XXRVAQWA.js";import{a as g,b as f}from"./chunk-PRARYYF3.js";var y=995,v=(()=>{class m{constructor(){this._eventHandler=new S,this.columnDefinitions1=[],this.columnDefinitions2=[],this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset1=this.mockData(y),this.dataset2=this.mockData(y)}angularGridReady1(o){this.angularGrid1=o;let l=o.slickGrid.getSelectionModel();this._eventHandler.subscribe(l.onSelectedRangesChanged,(t,a)=>{let r=document.querySelector("#selectionRange1");if(r){r.textContent="";for(let d of a)r.textContent+=JSON.stringify(d)}})}angularGridReady2(o){this.angularGrid2=o;let l=o.slickGrid.getSelectionModel();this._eventHandler.subscribe(l.onSelectedRangesChanged,(t,a)=>{let r=document.querySelector("#selectionRange2");if(r){r.textContent="";for(let d of a)r.textContent+=JSON.stringify(d)}})}defineGrids(){this.columnDefinitions1=[{id:"id",name:"#",field:"id",width:32,maxWidth:40,excludeFromHeaderMenu:!0},{id:"title",name:"Title",field:"title",width:90,cssClass:"cell-title"},{id:"complete",name:"% Complete",field:"percentComplete",sortable:!0,width:90},{id:"start",name:"Start",field:"start",type:"date",sortable:!0,formatter:u.dateUs},{id:"finish",name:"Finish",field:"finish",type:"date",sortable:!0,formatter:u.dateUs},{id:"priority",name:"Priority",field:"priority",width:80,resizable:!1,sortable:!0,type:"number",sortComparer:(o,l,t)=>(t??0)*(o===l?0:o>l?1:-1),formatter:(o,l,t)=>{if(!t)return"";let a=+(t>=3?3:t);return a===3?"High":a===2?"Medium":"Low"}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",cssClass:"text-center",width:95,maxWidth:120,type:"boolean",sortable:!0,exportCustomFormatter:(o,l,t)=>t?"Yes":"No",formatter:u.checkmarkMaterial}],this.columnDefinitions2=[...this.columnDefinitions1],this.gridOptions1={autoResize:{container:".demo-container"},gridHeight:250,gridWidth:800,enableCellNavigation:!0,autoEdit:!0,editable:!0,headerRowHeight:35,rowHeight:35,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new E],enableSelection:!0,selectionOptions:{rowSelectColumnIds:["id"],selectionType:"mixed"},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:" "}},this.gridOptions2=f(g({},this.gridOptions1),{enableCheckboxSelector:!0,enableSelection:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row",dragToSelect:!0}})}mockData(o){let l=[];for(let t=0;t<o;t++){let a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),C=a+Math.floor(Math.random()*10),k=new Date(C,r+1,d);l[t]={id:t,title:"Task "+t,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(a,r,d,d),finish:k,priority:t%3?2:t%5?3:1,effortDriven:t%4===0}}return l}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden")}static{this.\u0275fac=function(l){return new(l||m)}}static{this.\u0275cmp=x({type:m,selectors:[["ng-component"]],decls:82,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example48.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"subtitle","ms-3","text-italic"],["id","selectionRange1"],[1,"grid-container1"],["gridId","grid48-1",3,"onAngularGridCreated","columns","options","dataset"],["id","selectionRange2"],[1,"grid-container"],["gridId","grid48-2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,t){l&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 48: Hybrid Selection Model
    `),i(4,"span",1),e(5,`
      `),i(6,"a",2),e(7,`
        `),s(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),i(12,"button",4),c("click",function(){return t.toggleSubTitle()}),e(13,`
      `),s(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),i(18,"div",6),e(19,`
    `),i(20,"code"),e(21,"SlickHybridSelectionModel"),n(),e(22,` This Selection Model is an hybrid approach that uses a combination of the row or cell selections
    depending on certain conditions.
    `),i(23,"ul"),e(24,`
      `),i(25,"li"),e(26,`
        1. clicking on the first column (`),i(27,"code"),e(28,"id"),n(),e(29,") will use "),i(30,"code"),e(31,"RowSelectionModel"),n(),e(32,` because of our configuration of
        `),i(33,"code"),e(34,"rowSelectColumnIds: ['id']"),n(),e(35,` as the columns that will trigger row selection.
      `),n(),e(36,`
      `),i(37,"li"),e(38,"2. clicking on the any other columns will use "),i(39,"code"),e(40,"CellSelectionModel"),n(),e(41," by default"),n(),e(42,`
    `),n(),e(43,`
  `),n(),e(44,`

  `),i(45,"h3"),e(46,`
    Grid 1
    `),i(47,"small",7),e(48,`
      `),i(49,"label"),e(50,"Range Selection"),n(),e(51,`
      `),s(52,"span",8),e(53,`
    `),n(),e(54,`
  `),n(),e(55,`
  `),i(56,"div",9),e(57,`
    `),i(58,"angular-slickgrid",10),c("onAngularGridCreated",function(r){return t.angularGridReady1(r.detail)}),e(59,`
    `),n(),e(60,`
  `),n(),e(61,`

  `),s(62,"hr"),e(63,`

  `),i(64,"h3"),e(65,`
    Grid 2
    `),i(66,"small",7),e(67,`
      `),i(68,"label"),e(69,"Range Selection"),n(),e(70,`
      `),s(71,"span",11),e(72,`
    `),n(),e(73,`
  `),n(),e(74,`
  `),i(75,"div",12),e(76,`
    `),i(77,"angular-slickgrid",13),c("onAngularGridCreated",function(r){return t.angularGridReady2(r.detail)}),e(78,`
    `),n(),e(79,`
  `),n(),e(80,`
`),n(),e(81,`
`)),l&2&&(p(58),h("columns",t.columnDefinitions1)("options",t.gridOptions1)("dataset",t.dataset1),p(19),h("columns",t.columnDefinitions2)("options",t.gridOptions2)("dataset",t.dataset2))},dependencies:[b],encapsulation:2})}}return m})();export{v as Example48Component};
