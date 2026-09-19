import{F as Ip,Pn as ly,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W}from"./chunk-DLuyVhQJ.js";import{t as mh}from"./chunk-B-r9wchg.js";import{t as Ze}from"./chunk-C5onuIZj.js";var v=200;var G=(()=>{class m{constructor(){this.columns=[],this.dataset=[],this.excelExportService=new Ze,this.pdfExportService=new mh}angularGridReady(l){this.angularGrid=l}ngOnInit(){this.defineGrid(),this.dataset=this.getData(v)}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Story`,field:`title`,minWidth:180,width:220},{id:`owner`,name:`Owner`,field:`owner`,minWidth:110,width:130},{id:`rowHeight`,name:`Height`,field:`rowHeight`,exportWithFormatter:!0,formatter:(l,r,t)=>`${t}px`,minWidth:90,width:90},{id:`summary`,name:`Summary`,field:`summary`,cssClass:`cell-wrap`,minWidth:360,width:500,maxWidth:620}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[this.excelExportService,this.pdfExportService],excelExportOptions:{includeColumnWidth:!0},pdfExportOptions:{pageOrientation:`landscape`,includeColumnWidth:!0},rowHeight:40,gridHeight:560,gridWidth:1080,rowHeightProvider:(l,r,t)=>t.rowHeight}}getData(l){let r=[`Alex`,`Priya`,`Mia`,`Sam`,`Chris`],t=[`Refactor keyboard shortcut handling for better readability.`,`Adjust frozen rows when view-model updates after grouping.`,`Improve screen-reader labels on grid menu actions.`,`Align batch editor validation with backend constraints.`,`Capture edge-case around hidden columns and row-span.`],a=[];for(let o=0;o<l;o++){let c=o%4+1,p=Array.from({length:c},(_,S)=>`${t[(o+S)%t.length]}`).join(` `),b=p.trim().split(/\s+/).length,E=Math.max(45,8+c*16);a.push({id:o,title:`Story ${o}`,owner:r[o%r.length],summary:p,rowHeight:b<10?33:E})}return a}exportToExcel(){this.excelExportService.exportToExcel({filename:`export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`export`})}static{this.ɵfac=function(r){return new(r||m)}}static{this.ɵcmp=$E({type:m,selectors:[[`ng-component`]],decls:47,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example55.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`scroll-row-90-example55`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid55`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,t){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 55: Variable Row Height (provider)
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
  `),Rc(),sD(12,`

  `),yi(13,`div`,4),sD(14,`Variable row heights driven by `),yi(15,`code`),sD(16,`rowHeightProvider`),Rc(),sD(17,`.`),Rc(),sD(18,`

  `),yi(19,`div`,5),sD(20,`
    `),yi(21,`div`,6),sD(22,`
      `),yi(23,`button`,7),bp(`click`,function(){return t.exportToExcel()}),sD(24,`
        `),Ip(25,`i`,8),sD(26,` Export to Excel
      `),Rc(),sD(27,`
      `),yi(28,`button`,9),bp(`click`,function(){return t.exportToPdf()}),sD(29,`
        `),Ip(30,`i`,10),sD(31,` Export to PDF
      `),Rc(),sD(32,`
      `),yi(33,`button`,11),bp(`click`,function(){return t.scrollToRow90()}),sD(34,`
        `),Ip(35,`span`,12),sD(36,`
        `),yi(37,`span`),sD(38,` Scroll To row 90`),Rc(),sD(39,`
      `),Rc(),sD(40,`
    `),Rc(),sD(41,`
  `),Rc(),sD(42,`

  `),yi(43,`angular-slickgrid`,13),bp(`onAngularGridCreated`,function(o){return t.angularGridReady(o.detail)}),sD(44,`
  `),Rc(),sD(45,`
`),Rc(),sD(46,`
`)),r&2&&(ly(43),Ep(`columns`,t.columns)(`options`,t.gridOptions)(`dataset`,t.dataset))},dependencies:[_W],styles:[`#slickGridContainer-grid55{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid55 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return m})();export{G as Example55Component};