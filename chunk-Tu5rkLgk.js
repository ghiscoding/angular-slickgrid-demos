import{Dt as UE,En as iD,Kn as mp,Tt as Tp,Wn as mi,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W}from"./chunk-CAMk6vEo.js";import{t as Ze}from"./chunk-CVoct-s8.js";import{t as mh}from"./chunk-CKr-yhUg.js";var v=200;var G=(()=>{class m{constructor(){this.columns=[],this.dataset=[],this.excelExportService=new Ze,this.pdfExportService=new mh}angularGridReady(l){this.angularGrid=l}ngOnInit(){this.defineGrid(),this.dataset=this.getData(v)}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Story`,field:`title`,minWidth:180,width:220},{id:`owner`,name:`Owner`,field:`owner`,minWidth:110,width:130},{id:`rowHeight`,name:`Height`,field:`rowHeight`,exportWithFormatter:!0,formatter:(l,r,t)=>`${t}px`,minWidth:90,width:90},{id:`summary`,name:`Summary`,field:`summary`,cssClass:`cell-wrap`,minWidth:360,width:500,maxWidth:620}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[this.excelExportService,this.pdfExportService],excelExportOptions:{includeColumnWidth:!0},pdfExportOptions:{pageOrientation:`landscape`,includeColumnWidth:!0},rowHeight:40,gridHeight:560,gridWidth:1080,rowHeightProvider:(l,r,t)=>t.rowHeight}}getData(l){let r=[`Alex`,`Priya`,`Mia`,`Sam`,`Chris`],t=[`Refactor keyboard shortcut handling for better readability.`,`Adjust frozen rows when view-model updates after grouping.`,`Improve screen-reader labels on grid menu actions.`,`Align batch editor validation with backend constraints.`,`Capture edge-case around hidden columns and row-span.`],a=[];for(let o=0;o<l;o++){let c=o%4+1,p=Array.from({length:c},(_,S)=>`${t[(o+S)%t.length]}`).join(` `),b=p.trim().split(/\s+/).length,E=Math.max(45,8+c*16);a.push({id:o,title:`Story ${o}`,owner:r[o%r.length],summary:p,rowHeight:b<10?33:E})}return a}exportToExcel(){this.excelExportService.exportToExcel({filename:`export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`export`})}static{this.ɵfac=function(r){return new(r||m)}}static{this.ɵcmp=UE({type:m,selectors:[[`ng-component`]],decls:47,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example55.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`scroll-row-90-example55`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid55`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,t){r&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 55: Variable Row Height (provider)
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
  `),Ac(),iD(12,`

  `),mi(13,`div`,4),iD(14,`Variable row heights driven by `),mi(15,`code`),iD(16,`rowHeightProvider`),Ac(),iD(17,`.`),Ac(),iD(18,`

  `),mi(19,`div`,5),iD(20,`
    `),mi(21,`div`,6),iD(22,`
      `),mi(23,`button`,7),Tp(`click`,function(){return t.exportToExcel()}),iD(24,`
        `),vp(25,`i`,8),iD(26,` Export to Excel
      `),Ac(),iD(27,`
      `),mi(28,`button`,9),Tp(`click`,function(){return t.exportToPdf()}),iD(29,`
        `),vp(30,`i`,10),iD(31,` Export to PDF
      `),Ac(),iD(32,`
      `),mi(33,`button`,11),Tp(`click`,function(){return t.scrollToRow90()}),iD(34,`
        `),vp(35,`span`,12),iD(36,`
        `),mi(37,`span`),iD(38,` Scroll To row 90`),Ac(),iD(39,`
      `),Ac(),iD(40,`
    `),Ac(),iD(41,`
  `),Ac(),iD(42,`

  `),mi(43,`angular-slickgrid`,13),Tp(`onAngularGridCreated`,function(o){return t.angularGridReady(o.detail)}),iD(44,`
  `),Ac(),iD(45,`
`),Ac(),iD(46,`
`)),r&2&&(cy(43),mp(`columns`,t.columns)(`options`,t.gridOptions)(`dataset`,t.dataset))},dependencies:[_W],styles:[`#slickGridContainer-grid55{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid55 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return m})();export{G as Example55Component};