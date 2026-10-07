import{$ as Mp,C as Ei,En as iD,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp}from"./chunk-CtIlL7jI.js";import{Ot as xz}from"./chunk-o9GGBwbJ.js";import{t as bh}from"./chunk-CGMnk6N3.js";import{t as Qe}from"./chunk-ZlembOOL.js";var v=200;var G=(()=>{class m{constructor(){this.columns=[],this.dataset=[],this.excelExportService=new Qe,this.pdfExportService=new bh}angularGridReady(l){this.angularGrid=l}ngOnInit(){this.defineGrid(),this.dataset=this.getData(v)}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Story`,field:`title`,minWidth:180,width:220},{id:`owner`,name:`Owner`,field:`owner`,minWidth:110,width:130},{id:`rowHeight`,name:`Height`,field:`rowHeight`,exportWithFormatter:!0,formatter:(l,r,t)=>`${t}px`,minWidth:90,width:90},{id:`summary`,name:`Summary`,field:`summary`,cssClass:`cell-wrap`,minWidth:360,width:500,maxWidth:620}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[this.excelExportService,this.pdfExportService],excelExportOptions:{includeColumnWidth:!0},pdfExportOptions:{pageOrientation:`landscape`,includeColumnWidth:!0},rowHeight:40,gridHeight:560,gridWidth:1080,rowHeightProvider:(l,r,t)=>t.rowHeight}}getData(l){let r=[`Alex`,`Priya`,`Mia`,`Sam`,`Chris`],t=[`Refactor keyboard shortcut handling for better readability.`,`Adjust frozen rows when view-model updates after grouping.`,`Improve screen-reader labels on grid menu actions.`,`Align batch editor validation with backend constraints.`,`Capture edge-case around hidden columns and row-span.`],a=[];for(let o=0;o<l;o++){let c=o%4+1,p=Array.from({length:c},(_,S)=>`${t[(o+S)%t.length]}`).join(` `),b=p.trim().split(/\s+/).length,E=Math.max(45,8+c*16);a.push({id:o,title:`Story ${o}`,owner:r[o%r.length],summary:p,rowHeight:b<10?33:E})}return a}exportToExcel(){this.excelExportService.exportToExcel({filename:`export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`export`})}static{this.ɵfac=function(r){return new(r||m)}}static{this.ɵcmp=BE({type:m,selectors:[[`ng-component`]],decls:47,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example55.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`scroll-row-90-example55`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid55`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,t){r&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 55: Variable Row Height (provider)
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
  `),Oc(),iD(12,`

  `),Ei(13,`div`,4),iD(14,`Variable row heights driven by `),Ei(15,`code`),iD(16,`rowHeightProvider`),Oc(),iD(17,`.`),Oc(),iD(18,`

  `),Ei(19,`div`,5),iD(20,`
    `),Ei(21,`div`,6),iD(22,`
      `),Ei(23,`button`,7),Mp(`click`,function(){return t.exportToExcel()}),iD(24,`
        `),Tp(25,`i`,8),iD(26,` Export to Excel
      `),Oc(),iD(27,`
      `),Ei(28,`button`,9),Mp(`click`,function(){return t.exportToPdf()}),iD(29,`
        `),Tp(30,`i`,10),iD(31,` Export to PDF
      `),Oc(),iD(32,`
      `),Ei(33,`button`,11),Mp(`click`,function(){return t.scrollToRow90()}),iD(34,`
        `),Tp(35,`span`,12),iD(36,`
        `),Ei(37,`span`),iD(38,` Scroll To row 90`),Oc(),iD(39,`
      `),Oc(),iD(40,`
    `),Oc(),iD(41,`
  `),Oc(),iD(42,`

  `),Ei(43,`angular-slickgrid`,13),Mp(`onAngularGridCreated`,function(o){return t.angularGridReady(o.detail)}),iD(44,`
  `),Oc(),iD(45,`
`),Oc(),iD(46,`
`)),r&2&&(ay(43),Dp(`columns`,t.columns)(`options`,t.gridOptions)(`dataset`,t.dataset))},dependencies:[xz],styles:[`#slickGridContainer-grid55{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid55 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return m})();export{G as Example55Component};