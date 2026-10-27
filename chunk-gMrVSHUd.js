import{In as lD,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{l as D1}from"./chunk-Dk5kBPyv.js";import{t as bh}from"./chunk-Co5s-2kw.js";import{t as Qe}from"./chunk-D0qctKwX.js";var b=150;var S=(()=>{class c{constructor(){this.columns=[],this.dataset=[],this.isCompact=!1,this.excelExportService=new Qe,this.pdfExportService=new bh}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.defineGrid(),this.dataset=this.getData(b)}toggleDensity(){this.isCompact=!this.isCompact,this.angularGrid?.slickGrid?.invalidateRowHeights?.()}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Task`,field:`title`,minWidth:180,width:220},{id:`status`,name:`Status`,field:`status`,minWidth:120,width:140},{id:`rowHeight`,name:`Height`,field:`rowHeight`,exportWithFormatter:!0,formatter:(o,l,n,r,a,m)=>`${m.getItemMetadaWhenExists(o)?.height??0}px`,minWidth:90,width:90},{id:`notes`,name:`Notes`,field:`notes`,cssClass:`cell-wrap`,width:420,maxWidth:520}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[this.excelExportService,this.pdfExportService],excelExportOptions:{includeColumnWidth:!0},pdfExportOptions:{pageOrientation:`landscape`,includeColumnWidth:!0},rowHeight:40,pinning:{rows:{top:[0,1]}},gridHeight:560,gridWidth:1080,dataView:{globalItemMetadataProvider:{getRowMetadata:o=>{if(o.notes===`Short note.`)return{height:this.isCompact?40:33};let l=this.getEstimatedLineCount(o.notes),n=8,r=this.isCompact?21:18,a=this.isCompact?46:40;return{height:Math.max(a,n+l*r)}}}}}}getEstimatedLineCount(o){return Math.max(1,Math.ceil(o.length/55))}getData(o){let l=[`Todo`,`In Progress`,`Done`],n=[`Short note.`,`Need to validate keyboard navigation and ensure screen reader output remains stable across pinned panes.`,`Review row height invalidation path when data changes quickly due to live updates from backend polling.`,`Longer QA note: validate scrolling behavior at top and bottom boundaries, compare rendered range against expected rows, and confirm no visual clipping for wrapped cells.`],r=[];for(let a=0;a<o;a++)r.push({id:a,title:`Task ${a}`,status:l[a%l.length],notes:n[a%n.length]});return r}exportToExcel(){this.excelExportService.exportToExcel({filename:`export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`export`})}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=WE({type:c,selectors:[[`ng-component`]],decls:58,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example56.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`toggle-density`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-flip-vertical`],[`data-test`,`scroll-row-90-example56`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`ms-2`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid56`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,n){l&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 56: Variable Row Height (item metadata)
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
  `),Rc(),lD(12,`

  `),vi(13,`div`,4),lD(14,`
    Variable row heights via `),vi(15,`code`),lD(16,`ItemMetadata.height`),Rc(),lD(17,` fallback, with compact mode rebuilding heights through
    `),vi(18,`code`),lD(19,`invalidateRowHeights()`),Rc(),lD(20,`.
  `),Rc(),lD(21,`

  `),vi(22,`div`,5),lD(23,`
    `),vi(24,`div`,6),lD(25,`
      `),vi(26,`button`,7),Ap(`click`,function(){return n.exportToExcel()}),lD(27,`
        `),_p(28,`i`,8),lD(29,` Export to Excel
      `),Rc(),lD(30,`
      `),vi(31,`button`,9),Ap(`click`,function(){return n.exportToPdf()}),lD(32,`
        `),_p(33,`i`,10),lD(34,` Export to PDF
      `),Rc(),lD(35,`
      `),vi(36,`button`,11),Ap(`click`,function(){return n.toggleDensity()}),lD(37,`
        `),_p(38,`span`,12),lD(39,`
        `),vi(40,`span`),lD(41,` Toggle Compact Density`),Rc(),lD(42,`
      `),Rc(),lD(43,`
      `),vi(44,`button`,13),Ap(`click`,function(){return n.scrollToRow90()}),lD(45,`
        `),_p(46,`span`,14),lD(47,`
        `),vi(48,`span`),lD(49,` Scroll To row 90`),Rc(),lD(50,`
      `),Rc(),lD(51,`
    `),Rc(),lD(52,`
  `),Rc(),lD(53,`

  `),vi(54,`angular-slickgrid`,15),Ap(`onAngularGridCreated`,function(a){return n.angularGridReady(a.detail)}),lD(55,`
  `),Rc(),lD(56,`
`),Rc(),lD(57,`
`)),l&2&&(dv(54),bp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[D1],styles:[`#slickGridContainer-grid56{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid56 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return c})();export{S as Example56Component};