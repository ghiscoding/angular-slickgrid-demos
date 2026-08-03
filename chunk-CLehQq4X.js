import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{gt as q1}from"./chunk-C7G4ZLh2.js";import{t as mh}from"./chunk-CPh7I0Zy.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";var G=(()=>{class d{constructor(){this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,this.isColspanSpreading=!1}ngOnInit(){this.prepareGrid1(),this.prepareGrid2()}angularGridReady1(r){this.angularGrid1=r}angularGridReady2(r){this.angularGrid2=r,this.gridObj2=r.slickGrid}prepareGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,columnGroup:`Common Factor`},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`},{id:`%`,name:`% Complete`,field:`percentComplete`,selectable:!1,columnGroup:`Analysis`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,type:`boolean`,columnGroup:`Analysis`}],this.gridOptions1={gridHeight:275,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,explicitInitialization:!0,dataView:{globalItemMetadataProvider:{getRowMetadata:r=>this.renderDifferentColspan(r)}},gridMenu:{iconButtonContainer:`preheader`},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new Ze,new mh],spreadHiddenColspan:this.isColspanSpreading},this.dataset1=this.getData(500)}prepareGrid2(){this.columns2=[{id:`sel`,name:`#`,field:`num`,behavior:`select`,cssClass:`cell-selection`,width:40,resizable:!1,selectable:!1},{id:`title`,name:`Title`,field:`title`,sortable:!0,columnGroup:`Common Factor`},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`},{id:`%`,name:`% Complete`,field:`percentComplete`,selectable:!1,columnGroup:`Analysis`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,type:`boolean`,columnGroup:`Analysis`}],this.gridOptions2={gridHeight:275,gridWidth:800,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,frozenColumn:2,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new Ze,new mh]},this.dataset2=this.getData(500)}getData(r){let l=[];for(let n=0;n<r;n++)l[n]={id:n,num:n,title:`Task `+n,duration:`5 days`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};return l}setFrozenColumns2(r){this.gridObj2.setOptions({frozenColumn:r}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(r){return r.id%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:`*`}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.angularGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.angularGrid1.slickGrid?.resetActiveCell(),this.angularGrid1.slickGrid?.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||d)}}static{this.ɵcmp=BI({type:d,selectors:[[`ng-component`]],decls:69,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example14.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`data-test`,`spread-colspan-button`,`title`,`Should we always spread the same visible column count with or without hidden columns?`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,`ms-2`,3,`click`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[1,`col-sm`,`12`],[`data-test`,`remove-frozen-column-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-3frozen-columns`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-pin-outline`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,n){l&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 14: Column Span & Header Grouping
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return n.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    This example demonstrates how to easily span a row over multiple columns & how to group header titles.
    `),gi(20,`ul`),oD(21,`
      `),gi(22,`li`),oD(23,`
        Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by
        colspan it will still sort it
      `),xc(),oD(24,`
      `),gi(25,`li`),oD(26,`
        Header Grouping spanning accross multiple columns is working but has some UI issues on window resize. If anyone can fix it, probably
        some CSS issues, please let us know.
      `),xc(),oD(27,`
    `),xc(),oD(28,`
  `),xc(),oD(29,`

  `),gi(30,`h3`),oD(31,`
    Grid 1 `),gi(32,`small`),oD(33,`(with Header Grouping & Colspan)`),xc(),oD(34,`
    `),gi(35,`button`,7),Dp(`click`,function(){return n.spreadColspan()}),oD(36,`
      `),gi(37,`span`),oD(38,`Toggle Spreading of ColSpan with/without Hidden Columns`),xc(),oD(39,`
    `),xc(),oD(40,`
  `),xc(),oD(41,`

  `),gi(42,`angular-slickgrid`,8),Dp(`onAngularGridCreated`,function(m){return n.angularGridReady1(m.detail)}),oD(43,`
  `),xc(),oD(44,`

  `),mp(45,`hr`),oD(46,`

  `),gi(47,`h3`),oD(48,`Grid 2 `),gi(49,`small`),oD(50,`(with Header Grouping & Frozen/Pinned Columns)`),xc()(),oD(51,`
  `),gi(52,`div`,9),oD(53,`
    `),gi(54,`button`,10),Dp(`click`,function(){return n.setFrozenColumns2(-1)}),oD(55,`
      `),mp(56,`i`,11),oD(57,` Remove Frozen Columns
    `),xc(),oD(58,`
    `),gi(59,`button`,12),Dp(`click`,function(){return n.setFrozenColumns2(2)}),oD(60,`
      `),mp(61,`i`,13),oD(62,` Set 3 Frozen Columns
    `),xc(),oD(63,`
  `),xc(),oD(64,`
  `),gi(65,`angular-slickgrid`,14),Dp(`onAngularGridCreated`,function(m){return n.angularGridReady2(m.detail)}),oD(66,`
  `),xc(),oD(67,`
`),xc(),oD(68,`
`)),l&2&&(av(42),gp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),av(23),gp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[q1],styles:[`.slick-row[_ngcontent-%COMP%]   .slick-cell.frozen[_ngcontent-%COMP%]:last-child, .slick-headerrow-column.frozen[_ngcontent-%COMP%]:last-child, .slick-footerrow-column.frozen[_ngcontent-%COMP%]:last-child{border-right:1px solid #969696!important}.slick-pane-bottom[_ngcontent-%COMP%]{border-top:1px solid #969696!important}`]})}}return d})();export{G as Example14Component};