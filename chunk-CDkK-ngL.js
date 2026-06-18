import {m as mh}from'./chunk-BpxR36ms.js';import {Z as Ze}from'./chunk-CP-2FMG8.js';import {T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,g as sp}from'./main-C6PQTYH6.js';var G=(()=>{class d{constructor(){this.dataset1=[],this.dataset2=[],this.hideSubTitle=false,this.isColspanSpreading=false;}ngOnInit(){this.prepareGrid1(),this.prepareGrid2();}angularGridReady1(r){this.angularGrid1=r;}angularGridReady2(r){this.angularGrid2=r,this.gridObj2=r.slickGrid;}prepareGrid1(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:true,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:false,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions1={gridHeight:275,gridWidth:800,enableAutoResize:false,enableCellNavigation:true,enableSorting:true,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:28,explicitInitialization:true,dataView:{globalItemMetadataProvider:{getRowMetadata:r=>this.renderDifferentColspan(r)}},gridMenu:{iconButtonContainer:"preheader"},enablePdfExport:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:false},externalResources:[new Ze,new mh],spreadHiddenColspan:this.isColspanSpreading},this.dataset1=this.getData(500);}prepareGrid2(){this.columns2=[{id:"sel",name:"#",field:"num",behavior:"select",cssClass:"cell-selection",width:40,resizable:false,selectable:false},{id:"title",name:"Title",field:"title",sortable:true,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:false,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions2={gridHeight:275,gridWidth:800,enableCellNavigation:true,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:25,explicitInitialization:true,frozenColumn:2,gridMenu:{hideClearFrozenColumnsCommand:false},headerMenu:{hideFreezeColumnsCommand:false},enablePdfExport:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:false},externalResources:[new Ze,new mh]},this.dataset2=this.getData(500);}getData(r){let l=[];for(let n=0;n<r;n++)l[n]={id:n,num:n,title:"Task "+n,duration:"5 days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:n%5===0};return l}setFrozenColumns2(r){this.gridObj2.setOptions({frozenColumn:r}),this.gridOptions2=this.gridObj2.getOptions();}renderDifferentColspan(r){return r.id%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:"*"}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.angularGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.angularGrid1.slickGrid?.resetActiveCell(),this.angularGrid1.slickGrid?.invalidate();}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid2.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||d)};}static{this.\u0275cmp=TI({type:d,selectors:[["ng-component"]],decls:69,vars:6,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example14.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["data-test","spread-colspan-button","title","Should we always spread the same visible column count with or without hidden columns?",1,"btn","btn-outline-secondary","btn-sm","btn-icon","ms-2",3,"click"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset"],[1,"col-sm","12"],["data-test","remove-frozen-column-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-3frozen-columns",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-pin-outline"],["gridId","grid2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,n){l&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 14: Column Span & Header Grouping
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return n.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    This example demonstrates how to easily span a row over multiple columns & how to group header titles.
    `),ui(20,"ul"),BE(21,`
      `),ui(22,"li"),BE(23,`
        Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by
        colspan it will still sort it
      `),Tc(),BE(24,`
      `),ui(25,"li"),BE(26,`
        Header Grouping spanning accross multiple columns is working but has some UI issues on window resize. If anyone can fix it, probably
        some CSS issues, please let us know.
      `),Tc(),BE(27,`
    `),Tc(),BE(28,`
  `),Tc(),BE(29,`

  `),ui(30,"h3"),BE(31,`
    Grid 1 `),ui(32,"small"),BE(33,"(with Header Grouping & Colspan)"),Tc(),BE(34,`
    `),ui(35,"button",7),fp("click",function(){return n.spreadColspan()}),BE(36,`
      `),ui(37,"span"),BE(38,"Toggle Spreading of ColSpan with/without Hidden Columns"),Tc(),BE(39,`
    `),Tc(),BE(40,`
  `),Tc(),BE(41,`

  `),ui(42,"angular-slickgrid",8),fp("onAngularGridCreated",function(m){return n.angularGridReady1(m.detail)}),BE(43,`
  `),Tc(),BE(44,`

  `),ap(45,"hr"),BE(46,`

  `),ui(47,"h3"),BE(48,"Grid 2 "),ui(49,"small"),BE(50,"(with Header Grouping & Frozen/Pinned Columns)"),Tc()(),BE(51,`
  `),ui(52,"div",9),BE(53,`
    `),ui(54,"button",10),fp("click",function(){return n.setFrozenColumns2(-1)}),BE(55,`
      `),ap(56,"i",11),BE(57,` Remove Frozen Columns
    `),Tc(),BE(58,`
    `),ui(59,"button",12),fp("click",function(){return n.setFrozenColumns2(2)}),BE(60,`
      `),ap(61,"i",13),BE(62,` Set 3 Frozen Columns
    `),Tc(),BE(63,`
  `),Tc(),BE(64,`
  `),ui(65,"angular-slickgrid",14),fp("onAngularGridCreated",function(m){return n.angularGridReady2(m.detail)}),BE(66,`
  `),Tc(),BE(67,`
`),Tc(),BE(68,`
`)),l&2&&(Uy(42),sp("columns",n.columns1)("options",n.gridOptions1)("dataset",n.dataset1),Uy(23),sp("columns",n.columns2)("options",n.gridOptions2)("dataset",n.dataset2));},dependencies:[U1],styles:[".slick-row[_ngcontent-%COMP%]   .slick-cell.frozen[_ngcontent-%COMP%]:last-child, .slick-headerrow-column.frozen[_ngcontent-%COMP%]:last-child, .slick-footerrow-column.frozen[_ngcontent-%COMP%]:last-child{border-right:1px solid #969696!important}.slick-pane-bottom[_ngcontent-%COMP%]{border-top:1px solid #969696!important}"]});}}return d})();export{G as Example14Component};