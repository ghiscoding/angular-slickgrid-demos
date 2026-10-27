import{In as lD,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{l as D1}from"./chunk-Dk5kBPyv.js";import{t as bh}from"./chunk-Co5s-2kw.js";import{t as Qe}from"./chunk-D0qctKwX.js";var v=200;var G=(()=>{class m{constructor(){this.columns=[],this.dataset=[],this.excelExportService=new Qe,this.pdfExportService=new bh}angularGridReady(l){this.angularGrid=l}ngOnInit(){this.defineGrid(),this.dataset=this.getData(v)}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Story`,field:`title`,minWidth:180,width:220},{id:`owner`,name:`Owner`,field:`owner`,minWidth:110,width:130},{id:`rowHeight`,name:`Height`,field:`rowHeight`,exportWithFormatter:!0,formatter:(l,r,t)=>`${t}px`,minWidth:90,width:90},{id:`summary`,name:`Summary`,field:`summary`,cssClass:`cell-wrap`,minWidth:360,width:500,maxWidth:620}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[this.excelExportService,this.pdfExportService],excelExportOptions:{includeColumnWidth:!0},pdfExportOptions:{pageOrientation:`landscape`,includeColumnWidth:!0},rowHeight:40,gridHeight:560,gridWidth:1080,rowHeightProvider:(l,r,t)=>t.rowHeight}}getData(l){let r=[`Alex`,`Priya`,`Mia`,`Sam`,`Chris`],t=[`Refactor keyboard shortcut handling for better readability.`,`Adjust pinned rows when view-model updates after grouping.`,`Improve screen-reader labels on grid menu actions.`,`Align batch editor validation with backend constraints.`,`Capture edge-case around hidden columns and row-span.`],a=[];for(let o=0;o<l;o++){let c=o%4+1,p=Array.from({length:c},(_,S)=>`${t[(o+S)%t.length]}`).join(` `),b=p.trim().split(/\s+/).length,E=Math.max(45,8+c*16);a.push({id:o,title:`Story ${o}`,owner:r[o%r.length],summary:p,rowHeight:b<10?33:E})}return a}exportToExcel(){this.excelExportService.exportToExcel({filename:`export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`export`})}static{this.ɵfac=function(r){return new(r||m)}}static{this.ɵcmp=WE({type:m,selectors:[[`ng-component`]],decls:47,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example55.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`scroll-row-90-example55`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid55`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,t){r&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 55: Variable Row Height (provider)
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
  `),Rc(),lD(12,`

  `),vi(13,`div`,4),lD(14,`Variable row heights driven by `),vi(15,`code`),lD(16,`rowHeightProvider`),Rc(),lD(17,`.`),Rc(),lD(18,`

  `),vi(19,`div`,5),lD(20,`
    `),vi(21,`div`,6),lD(22,`
      `),vi(23,`button`,7),Ap(`click`,function(){return t.exportToExcel()}),lD(24,`
        `),_p(25,`i`,8),lD(26,` Export to Excel
      `),Rc(),lD(27,`
      `),vi(28,`button`,9),Ap(`click`,function(){return t.exportToPdf()}),lD(29,`
        `),_p(30,`i`,10),lD(31,` Export to PDF
      `),Rc(),lD(32,`
      `),vi(33,`button`,11),Ap(`click`,function(){return t.scrollToRow90()}),lD(34,`
        `),_p(35,`span`,12),lD(36,`
        `),vi(37,`span`),lD(38,` Scroll To row 90`),Rc(),lD(39,`
      `),Rc(),lD(40,`
    `),Rc(),lD(41,`
  `),Rc(),lD(42,`

  `),vi(43,`angular-slickgrid`,13),Ap(`onAngularGridCreated`,function(o){return t.angularGridReady(o.detail)}),lD(44,`
  `),Rc(),lD(45,`
`),Rc(),lD(46,`
`)),r&2&&(dv(43),bp(`columns`,t.columns)(`options`,t.gridOptions)(`dataset`,t.dataset))},dependencies:[D1],styles:[`#slickGridContainer-grid55{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid55 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return m})();export{G as Example55Component};