import {m as mh}from'./chunk-iymBLPps.js';import {Z as Ze}from'./chunk-SWBuXIHG.js';import {_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,W as Wy,a as ap}from'./main-MR3B775B.js';var G=(()=>{class d{constructor(){this.dataset1=[],this.dataset2=[],this.hideSubTitle=false,this.isColspanSpreading=false;}ngOnInit(){this.prepareGrid1(),this.prepareGrid2();}angularGridReady1(r){this.angularGrid1=r;}angularGridReady2(r){this.angularGrid2=r,this.gridObj2=r.slickGrid;}prepareGrid1(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:true,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:false,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions1={gridHeight:275,gridWidth:800,enableAutoResize:false,enableCellNavigation:true,enableSorting:true,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:28,explicitInitialization:true,dataView:{globalItemMetadataProvider:{getRowMetadata:r=>this.renderDifferentColspan(r)}},gridMenu:{iconButtonContainer:"preheader"},enablePdfExport:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:false},externalResources:[new Ze,new mh],spreadHiddenColspan:this.isColspanSpreading},this.dataset1=this.getData(500);}prepareGrid2(){this.columns2=[{id:"sel",name:"#",field:"num",behavior:"select",cssClass:"cell-selection",width:40,resizable:false,selectable:false},{id:"title",name:"Title",field:"title",sortable:true,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:false,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions2={gridHeight:275,gridWidth:800,enableCellNavigation:true,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:25,explicitInitialization:true,frozenColumn:2,gridMenu:{hideClearFrozenColumnsCommand:false},headerMenu:{hideFreezeColumnsCommand:false},enablePdfExport:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:false},externalResources:[new Ze,new mh]},this.dataset2=this.getData(500);}getData(r){let l=[];for(let n=0;n<r;n++)l[n]={id:n,num:n,title:"Task "+n,duration:"5 days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:n%5===0};return l}setFrozenColumns2(r){this.gridObj2.setOptions({frozenColumn:r}),this.gridOptions2=this.gridObj2.getOptions();}renderDifferentColspan(r){return r.id%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:"*"}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.angularGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.angularGrid1.slickGrid?.resetActiveCell(),this.angularGrid1.slickGrid?.invalidate();}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid2.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||d)};}static{this.\u0275cmp=_I({type:d,selectors:[["ng-component"]],decls:69,vars:6,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example14.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["data-test","spread-colspan-button","title","Should we always spread the same visible column count with or without hidden columns?",1,"btn","btn-outline-secondary","btn-sm","btn-icon","ms-2",3,"click"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset"],[1,"col-sm","12"],["data-test","remove-frozen-column-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-3frozen-columns",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-pin-outline"],["gridId","grid2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,n){l&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 14: Column Span & Header Grouping
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return n.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    This example demonstrates how to easily span a row over multiple columns & how to group header titles.
    `),ui(20,"ul"),qE(21,`
      `),ui(22,"li"),qE(23,`
        Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by
        colspan it will still sort it
      `),Tc(),qE(24,`
      `),ui(25,"li"),qE(26,`
        Header Grouping spanning accross multiple columns is working but has some UI issues on window resize. If anyone can fix it, probably
        some CSS issues, please let us know.
      `),Tc(),qE(27,`
    `),Tc(),qE(28,`
  `),Tc(),qE(29,`

  `),ui(30,"h3"),qE(31,`
    Grid 1 `),ui(32,"small"),qE(33,"(with Header Grouping & Colspan)"),Tc(),qE(34,`
    `),ui(35,"button",7),pp("click",function(){return n.spreadColspan()}),qE(36,`
      `),ui(37,"span"),qE(38,"Toggle Spreading of ColSpan with/without Hidden Columns"),Tc(),qE(39,`
    `),Tc(),qE(40,`
  `),Tc(),qE(41,`

  `),ui(42,"angular-slickgrid",8),pp("onAngularGridCreated",function(m){return n.angularGridReady1(m.detail)}),qE(43,`
  `),Tc(),qE(44,`

  `),cp(45,"hr"),qE(46,`

  `),ui(47,"h3"),qE(48,"Grid 2 "),ui(49,"small"),qE(50,"(with Header Grouping & Frozen/Pinned Columns)"),Tc()(),qE(51,`
  `),ui(52,"div",9),qE(53,`
    `),ui(54,"button",10),pp("click",function(){return n.setFrozenColumns2(-1)}),qE(55,`
      `),cp(56,"i",11),qE(57,` Remove Frozen Columns
    `),Tc(),qE(58,`
    `),ui(59,"button",12),pp("click",function(){return n.setFrozenColumns2(2)}),qE(60,`
      `),cp(61,"i",13),qE(62,` Set 3 Frozen Columns
    `),Tc(),qE(63,`
  `),Tc(),qE(64,`
  `),ui(65,"angular-slickgrid",14),pp("onAngularGridCreated",function(m){return n.angularGridReady2(m.detail)}),qE(66,`
  `),Tc(),qE(67,`
`),Tc(),qE(68,`
`)),l&2&&(Wy(42),ap("columns",n.columns1)("options",n.gridOptions1)("dataset",n.dataset1),Wy(23),ap("columns",n.columns2)("options",n.gridOptions2)("dataset",n.dataset2));},dependencies:[j1],styles:[".slick-row[_ngcontent-%COMP%]   .slick-cell.frozen[_ngcontent-%COMP%]:last-child, .slick-headerrow-column.frozen[_ngcontent-%COMP%]:last-child, .slick-footerrow-column.frozen[_ngcontent-%COMP%]:last-child{border-right:1px solid #969696!important}.slick-pane-bottom[_ngcontent-%COMP%]{border-top:1px solid #969696!important}"]});}}return d})();export{G as Example14Component};