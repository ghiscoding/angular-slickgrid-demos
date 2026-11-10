import{t as vh}from"./chunk-BO2KAVk6.js";import{n as et}from"./chunk-BzRTDaIv.js";import{V as R$}from"./chunk-Lo0QQjTd.js";import{X as Lc,dr as uD,en as _p,in as bp,k as GE,o as Ap,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var G=(()=>{class d{constructor(){this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,this.isColspanSpreading=!1}ngOnInit(){this.prepareGrid1(),this.prepareGrid2()}angularGridReady1(r){this.angularGrid1=r}angularGridReady2(r){this.angularGrid2=r,this.gridObj2=r.slickGrid}prepareGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,columnGroup:`Common Factor`},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`},{id:`%`,name:`% Complete`,field:`percentComplete`,selectable:!1,columnGroup:`Analysis`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,type:`boolean`,columnGroup:`Analysis`}],this.gridOptions1={gridHeight:275,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,rowHeight:33,explicitInitialization:!0,dataView:{globalItemMetadataProvider:{getRowMetadata:r=>this.renderDifferentColspan(r)}},gridMenu:{iconButtonContainer:`preheader`},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new et,new vh],spreadHiddenColspan:this.isColspanSpreading},this.dataset1=this.getData(500)}prepareGrid2(){this.columns2=[{id:`sel`,name:`#`,field:`num`,behavior:`select`,cssClass:`cell-selection`,width:40,resizable:!1,selectable:!1},{id:`title`,name:`Title`,field:`title`,sortable:!0,columnGroup:`Common Factor`},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`},{id:`%`,name:`% Complete`,field:`percentComplete`,selectable:!1,columnGroup:`Analysis`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,type:`boolean`,columnGroup:`Analysis`}],this.gridOptions2={gridHeight:275,gridWidth:800,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,pinning:{columns:{left:2}},rowHeight:33,enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new et,new vh]},this.dataset2=this.getData(500)}getData(r){let l=[];for(let n=0;n<r;n++)l[n]={id:n,num:n,title:`Task `+n,duration:`5 days with some long text to test column span`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};return l}setPinnedColumns2(r){this.gridObj2.setOptions({pinning:{columns:{left:r}}}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(r){return r.id%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:`*`}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.angularGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.angularGrid1.slickGrid?.resetActiveCell(),this.angularGrid1.slickGrid?.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||d)}}static{this.ɵcmp=GE({type:d,selectors:[[`ng-component`]],decls:69,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example14.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`data-test`,`spread-colspan-button`,`title`,`Should we always spread the same visible column count with or without hidden columns?`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,`ms-2`,3,`click`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[1,`col-sm`,`12`],[`data-test`,`remove-pinned-column-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-3pinned-columns`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-pin-outline`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,n){l&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 14: Column Span & Header Grouping
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return n.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    This example demonstrates how to easily span a row over multiple columns & how to group header titles.
    `),vi(20,`ul`),uD(21,`
      `),vi(22,`li`),uD(23,`
        Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by
        colspan it will still sort it
      `),Lc(),uD(24,`
      `),vi(25,`li`),uD(26,`
        Header Grouping spanning accross multiple columns is working but has some UI issues on window resize. If anyone can fix it, probably
        some CSS issues, please let us know.
      `),Lc(),uD(27,`
    `),Lc(),uD(28,`
  `),Lc(),uD(29,`

  `),vi(30,`h3`),uD(31,`
    Grid 1 `),vi(32,`small`),uD(33,`(with Header Grouping & Colspan)`),Lc(),uD(34,`
    `),vi(35,`button`,7),Ap(`click`,function(){return n.spreadColspan()}),uD(36,`
      `),vi(37,`span`),uD(38,`Toggle Spreading of ColSpan with/without Hidden Columns`),Lc(),uD(39,`
    `),Lc(),uD(40,`
  `),Lc(),uD(41,`

  `),vi(42,`angular-slickgrid`,8),Ap(`onAngularGridCreated`,function(m){return n.angularGridReady1(m.detail)}),uD(43,`
  `),Lc(),uD(44,`

  `),_p(45,`hr`),uD(46,`

  `),vi(47,`h3`),uD(48,`Grid 2 `),vi(49,`small`),uD(50,`(with Header Grouping & Pinned Columns)`),Lc()(),uD(51,`
  `),vi(52,`div`,9),uD(53,`
    `),vi(54,`button`,10),Ap(`click`,function(){return n.setPinnedColumns2(-1)}),uD(55,`
      `),_p(56,`i`,11),uD(57,` Remove Pinned Columns
    `),Lc(),uD(58,`
    `),vi(59,`button`,12),Ap(`click`,function(){return n.setPinnedColumns2(2)}),uD(60,`
      `),_p(61,`i`,13),uD(62,` Set 3 Pinned Columns
    `),Lc(),uD(63,`
  `),Lc(),uD(64,`
  `),vi(65,`angular-slickgrid`,14),Ap(`onAngularGridCreated`,function(m){return n.angularGridReady2(m.detail)}),uD(66,`
  `),Lc(),uD(67,`
`),Lc(),uD(68,`
`)),l&2&&(fv(42),bp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),fv(23),bp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[R$],encapsulation:2})}}return d})();export{G as Example14Component};