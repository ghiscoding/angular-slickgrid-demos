import{F as Ip,Pn as ly,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W}from"./chunk-DLuyVhQJ.js";import{t as mh}from"./chunk-B-r9wchg.js";import{t as Ze}from"./chunk-C5onuIZj.js";var G=(()=>{class d{constructor(){this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,this.isColspanSpreading=!1}ngOnInit(){this.prepareGrid1(),this.prepareGrid2()}angularGridReady1(r){this.angularGrid1=r}angularGridReady2(r){this.angularGrid2=r,this.gridObj2=r.slickGrid}prepareGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,columnGroup:`Common Factor`},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`},{id:`%`,name:`% Complete`,field:`percentComplete`,selectable:!1,columnGroup:`Analysis`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,type:`boolean`,columnGroup:`Analysis`}],this.gridOptions1={gridHeight:275,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,explicitInitialization:!0,dataView:{globalItemMetadataProvider:{getRowMetadata:r=>this.renderDifferentColspan(r)}},gridMenu:{iconButtonContainer:`preheader`},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new Ze,new mh],spreadHiddenColspan:this.isColspanSpreading},this.dataset1=this.getData(500)}prepareGrid2(){this.columns2=[{id:`sel`,name:`#`,field:`num`,behavior:`select`,cssClass:`cell-selection`,width:40,resizable:!1,selectable:!1},{id:`title`,name:`Title`,field:`title`,sortable:!0,columnGroup:`Common Factor`},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`},{id:`%`,name:`% Complete`,field:`percentComplete`,selectable:!1,columnGroup:`Analysis`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,type:`boolean`,columnGroup:`Analysis`}],this.gridOptions2={gridHeight:275,gridWidth:800,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,frozenColumn:2,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePdfExport:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new Ze,new mh]},this.dataset2=this.getData(500)}getData(r){let l=[];for(let n=0;n<r;n++)l[n]={id:n,num:n,title:`Task `+n,duration:`5 days`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};return l}setFrozenColumns2(r){this.gridObj2.setOptions({frozenColumn:r}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(r){return r.id%2===1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:`*`}}}}spreadColspan(){this.isColspanSpreading=!this.isColspanSpreading,this.angularGrid1.slickGrid?.setOptions({spreadHiddenColspan:this.isColspanSpreading}),this.angularGrid1.slickGrid?.resetActiveCell(),this.angularGrid1.slickGrid?.invalidate()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||d)}}static{this.ɵcmp=$E({type:d,selectors:[[`ng-component`]],decls:69,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example14.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`data-test`,`spread-colspan-button`,`title`,`Should we always spread the same visible column count with or without hidden columns?`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,`ms-2`,3,`click`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[1,`col-sm`,`12`],[`data-test`,`remove-frozen-column-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-3frozen-columns`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-pin-outline`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,n){l&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 14: Column Span & Header Grouping
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return n.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    This example demonstrates how to easily span a row over multiple columns & how to group header titles.
    `),yi(20,`ul`),sD(21,`
      `),yi(22,`li`),sD(23,`
        Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by
        colspan it will still sort it
      `),Rc(),sD(24,`
      `),yi(25,`li`),sD(26,`
        Header Grouping spanning accross multiple columns is working but has some UI issues on window resize. If anyone can fix it, probably
        some CSS issues, please let us know.
      `),Rc(),sD(27,`
    `),Rc(),sD(28,`
  `),Rc(),sD(29,`

  `),yi(30,`h3`),sD(31,`
    Grid 1 `),yi(32,`small`),sD(33,`(with Header Grouping & Colspan)`),Rc(),sD(34,`
    `),yi(35,`button`,7),bp(`click`,function(){return n.spreadColspan()}),sD(36,`
      `),yi(37,`span`),sD(38,`Toggle Spreading of ColSpan with/without Hidden Columns`),Rc(),sD(39,`
    `),Rc(),sD(40,`
  `),Rc(),sD(41,`

  `),yi(42,`angular-slickgrid`,8),bp(`onAngularGridCreated`,function(m){return n.angularGridReady1(m.detail)}),sD(43,`
  `),Rc(),sD(44,`

  `),Ip(45,`hr`),sD(46,`

  `),yi(47,`h3`),sD(48,`Grid 2 `),yi(49,`small`),sD(50,`(with Header Grouping & Frozen/Pinned Columns)`),Rc()(),sD(51,`
  `),yi(52,`div`,9),sD(53,`
    `),yi(54,`button`,10),bp(`click`,function(){return n.setFrozenColumns2(-1)}),sD(55,`
      `),Ip(56,`i`,11),sD(57,` Remove Frozen Columns
    `),Rc(),sD(58,`
    `),yi(59,`button`,12),bp(`click`,function(){return n.setFrozenColumns2(2)}),sD(60,`
      `),Ip(61,`i`,13),sD(62,` Set 3 Frozen Columns
    `),Rc(),sD(63,`
  `),Rc(),sD(64,`
  `),yi(65,`angular-slickgrid`,14),bp(`onAngularGridCreated`,function(m){return n.angularGridReady2(m.detail)}),sD(66,`
  `),Rc(),sD(67,`
`),Rc(),sD(68,`
`)),l&2&&(ly(42),Ep(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),ly(23),Ep(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[_W],styles:[`.slick-row[_ngcontent-%COMP%]   .slick-cell.frozen[_ngcontent-%COMP%]:last-child, .slick-headerrow-column.frozen[_ngcontent-%COMP%]:last-child, .slick-footerrow-column.frozen[_ngcontent-%COMP%]:last-child{border-right:1px solid #969696!important}.slick-pane-bottom[_ngcontent-%COMP%]{border-top:1px solid #969696!important}`]})}}return d})();export{G as Example14Component};