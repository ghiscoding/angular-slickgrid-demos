import{$ as Mp,C as Ei,En as iD,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp}from"./chunk-CtIlL7jI.js";import{Ot as xz}from"./chunk-C1NeHYCu.js";import{t as bh}from"./chunk-DV7U_9UX.js";import{t as Ze}from"./chunk-dI_4WJwX.js";var G=(()=>{class d{constructor(){this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,this.isColspanSpreading=!1}ngOnInit(){this.prepareGrid1(),this.prepareGrid2()}angularGridReady1(r){this.angularGrid1=r}angularGridReady2(r){this.angularGrid2=r,this.gridObj2=r.slickGrid}prepareGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,columnGroup:`Common Factor`},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`},{id:`%`,name:`% Complete`,field:`percentComplete`,selectable:!1,columnGroup:`Analysis`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,type:`boolean`,columnGroup:`Analysis`}],this.gridOptions1={gridHeight:275,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,explicitInitialization:!0,dataView:{globalItemMetadataProvider:{getRowMetadata:r=>this.renderDifferentColspan(r)}},gridMenu:{iconButtonContainer:`preheader`},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new Ze,new bh],spreadHiddenColspan:this.isColspanSpreading},this.dataset1=this.getData(500)}prepareGrid2(){this.columns2=[{id:`sel`,name:`#`,field:`num`,behavior:`select`,cssClass:`cell-selection`,width:40,resizable:!1,selectable:!1},{id:`title`,name:`Title`,field:`title`,sortable:!0,columnGroup:`Common Factor`},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`},{id:`%`,name:`% Complete`,field:`percentComplete`,selectable:!1,columnGroup:`Analysis`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,type:`boolean`,columnGroup:`Analysis`}],this.gridOptions2={gridHeight:275,gridWidth:800,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,frozenColumn:2,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new Ze,new bh]},this.dataset2=this.getData(500)}getData(r){let l=[];for(let n=0;n<r;n++)l[n]={id:n,num:n,title:`Task `+n,duration:`5 days`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};return l}setFrozenColumns2(r){this.gridObj2.setOptions({frozenColumn:r}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(r){return r.id%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:`*`}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.angularGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.angularGrid1.slickGrid?.resetActiveCell(),this.angularGrid1.slickGrid?.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||d)}}static{this.ɵcmp=BE({type:d,selectors:[[`ng-component`]],decls:69,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example14.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`data-test`,`spread-colspan-button`,`title`,`Should we always spread the same visible column count with or without hidden columns?`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,`ms-2`,3,`click`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[1,`col-sm`,`12`],[`data-test`,`remove-frozen-column-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-3frozen-columns`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-pin-outline`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,n){l&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 14: Column Span & Header Grouping
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return n.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    This example demonstrates how to easily span a row over multiple columns & how to group header titles.
    `),Ei(20,`ul`),iD(21,`
      `),Ei(22,`li`),iD(23,`
        Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by
        colspan it will still sort it
      `),Oc(),iD(24,`
      `),Ei(25,`li`),iD(26,`
        Header Grouping spanning accross multiple columns is working but has some UI issues on window resize. If anyone can fix it, probably
        some CSS issues, please let us know.
      `),Oc(),iD(27,`
    `),Oc(),iD(28,`
  `),Oc(),iD(29,`

  `),Ei(30,`h3`),iD(31,`
    Grid 1 `),Ei(32,`small`),iD(33,`(with Header Grouping & Colspan)`),Oc(),iD(34,`
    `),Ei(35,`button`,7),Mp(`click`,function(){return n.spreadColspan()}),iD(36,`
      `),Ei(37,`span`),iD(38,`Toggle Spreading of ColSpan with/without Hidden Columns`),Oc(),iD(39,`
    `),Oc(),iD(40,`
  `),Oc(),iD(41,`

  `),Ei(42,`angular-slickgrid`,8),Mp(`onAngularGridCreated`,function(m){return n.angularGridReady1(m.detail)}),iD(43,`
  `),Oc(),iD(44,`

  `),Tp(45,`hr`),iD(46,`

  `),Ei(47,`h3`),iD(48,`Grid 2 `),Ei(49,`small`),iD(50,`(with Header Grouping & Frozen/Pinned Columns)`),Oc()(),iD(51,`
  `),Ei(52,`div`,9),iD(53,`
    `),Ei(54,`button`,10),Mp(`click`,function(){return n.setFrozenColumns2(-1)}),iD(55,`
      `),Tp(56,`i`,11),iD(57,` Remove Frozen Columns
    `),Oc(),iD(58,`
    `),Ei(59,`button`,12),Mp(`click`,function(){return n.setFrozenColumns2(2)}),iD(60,`
      `),Tp(61,`i`,13),iD(62,` Set 3 Frozen Columns
    `),Oc(),iD(63,`
  `),Oc(),iD(64,`
  `),Ei(65,`angular-slickgrid`,14),Mp(`onAngularGridCreated`,function(m){return n.angularGridReady2(m.detail)}),iD(66,`
  `),Oc(),iD(67,`
`),Oc(),iD(68,`
`)),l&2&&(ay(42),Dp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),ay(23),Dp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[xz],styles:[`.slick-row[_ngcontent-%COMP%]   .slick-cell.frozen[_ngcontent-%COMP%]:last-child, .slick-headerrow-column.frozen[_ngcontent-%COMP%]:last-child, .slick-footerrow-column.frozen[_ngcontent-%COMP%]:last-child{border-right:1px solid #969696!important}.slick-pane-bottom[_ngcontent-%COMP%]{border-top:1px solid #969696!important}`]})}}return d})();export{G as Example14Component};