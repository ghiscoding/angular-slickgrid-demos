import{a as h}from"./chunk-FXNNYFVL.js";import"./chunk-FK6H3RFT.js";import{b as c}from"./chunk-BNUP54LE.js";import{Da as f}from"./chunk-V3K67AAF.js";import{Jb as e,Oa as g,hb as p,ib as t,jb as i,kb as a,ub as o,za as u}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var G=(()=>{class d{constructor(){this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,this.isColspanSpreading=!1}ngOnInit(){this.prepareGrid1(),this.prepareGrid2()}angularGridReady1(r){this.angularGrid1=r}angularGridReady2(r){this.angularGrid2=r,this.gridObj2=r.slickGrid}prepareGrid1(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions1={gridHeight:275,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,explicitInitialization:!0,dataView:{globalItemMetadataProvider:{getRowMetadata:r=>this.renderDifferentColspan(r)}},gridMenu:{iconButtonContainer:"preheader"},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new c,new h],spreadHiddenColspan:this.isColspanSpreading},this.dataset1=this.getData(500)}prepareGrid2(){this.columns2=[{id:"sel",name:"#",field:"num",behavior:"select",cssClass:"cell-selection",width:40,resizable:!1,selectable:!1},{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:"boolean",columnGroup:"Analysis"}],this.gridOptions2={gridHeight:275,gridWidth:800,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,frozenColumn:2,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new c,new h]},this.dataset2=this.getData(500)}getData(r){let l=[];for(let n=0;n<r;n++)l[n]={id:n,num:n,title:"Task "+n,duration:"5 days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:n%5===0};return l}setFrozenColumns2(r){this.gridObj2.setOptions({frozenColumn:r}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(r){return r.id%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:"*"}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.angularGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.angularGrid1.slickGrid?.resetActiveCell(),this.angularGrid1.slickGrid?.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid2.resizerService.resizeGrid(0)}static{this.\u0275fac=function(l){return new(l||d)}}static{this.\u0275cmp=g({type:d,selectors:[["ng-component"]],decls:69,vars:6,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example14.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["data-test","spread-colspan-button","title","Should we always spread the same visible column count with or without hidden columns?",1,"btn","btn-outline-secondary","btn-sm","btn-icon","ms-2",3,"click"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset"],[1,"col-sm","12"],["data-test","remove-frozen-column-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-3frozen-columns",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-pin-outline"],["gridId","grid2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,n){l&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 14: Column Span & Header Grouping
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),a(8,"span",3),e(9,` code
      `),i(),e(10,`
    `),i(),e(11,`
    `),t(12,"button",4),o("click",function(){return n.toggleSubTitle()}),e(13,`
      `),a(14,"span",5),e(15,`
    `),i(),e(16,`
  `),i(),e(17,`

  `),t(18,"div",6),e(19,`
    This example demonstrates how to easily span a row over multiple columns & how to group header titles.
    `),t(20,"ul"),e(21,`
      `),t(22,"li"),e(23,`
        Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by
        colspan it will still sort it
      `),i(),e(24,`
      `),t(25,"li"),e(26,`
        Header Grouping spanning accross multiple columns is working but has some UI issues on window resize. If anyone can fix it, probably
        some CSS issues, please let us know.
      `),i(),e(27,`
    `),i(),e(28,`
  `),i(),e(29,`

  `),t(30,"h3"),e(31,`
    Grid 1 `),t(32,"small"),e(33,"(with Header Grouping & Colspan)"),i(),e(34,`
    `),t(35,"button",7),o("click",function(){return n.spreadColspan()}),e(36,`
      `),t(37,"span"),e(38,"Toggle Spreading of ColSpan with/without Hidden Columns"),i(),e(39,`
    `),i(),e(40,`
  `),i(),e(41,`

  `),t(42,"angular-slickgrid",8),o("onAngularGridCreated",function(m){return n.angularGridReady1(m.detail)}),e(43,`
  `),i(),e(44,`

  `),a(45,"hr"),e(46,`

  `),t(47,"h3"),e(48,"Grid 2 "),t(49,"small"),e(50,"(with Header Grouping & Frozen/Pinned Columns)"),i()(),e(51,`
  `),t(52,"div",9),e(53,`
    `),t(54,"button",10),o("click",function(){return n.setFrozenColumns2(-1)}),e(55,`
      `),a(56,"i",11),e(57,` Remove Frozen Columns
    `),i(),e(58,`
    `),t(59,"button",12),o("click",function(){return n.setFrozenColumns2(2)}),e(60,`
      `),a(61,"i",13),e(62,` Set 3 Frozen Columns
    `),i(),e(63,`
  `),i(),e(64,`
  `),t(65,"angular-slickgrid",14),o("onAngularGridCreated",function(m){return n.angularGridReady2(m.detail)}),e(66,`
  `),i(),e(67,`
`),i(),e(68,`
`)),l&2&&(u(42),p("columns",n.columns1)("options",n.gridOptions1)("dataset",n.dataset1),u(23),p("columns",n.columns2)("options",n.gridOptions2)("dataset",n.dataset2))},dependencies:[f],styles:[".slick-row[_ngcontent-%COMP%]   .slick-cell.frozen[_ngcontent-%COMP%]:last-child, .slick-headerrow-column.frozen[_ngcontent-%COMP%]:last-child, .slick-footerrow-column.frozen[_ngcontent-%COMP%]:last-child{border-right:1px solid #969696!important}.slick-pane-bottom[_ngcontent-%COMP%]{border-top:1px solid #969696!important}"]})}}return d})();export{G as Example14Component};
