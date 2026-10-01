import{$ as Mp,C as Ei,En as iD,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp}from"./chunk-CtIlL7jI.js";import{Ot as xz}from"./chunk-C1NeHYCu.js";import{t as bh}from"./chunk-DV7U_9UX.js";import{t as Ze}from"./chunk-dI_4WJwX.js";var b=150;var S=(()=>{class c{constructor(){this.columns=[],this.dataset=[],this.isCompact=!1,this.excelExportService=new Ze,this.pdfExportService=new bh}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.defineGrid(),this.dataset=this.getData(b)}toggleDensity(){this.isCompact=!this.isCompact,this.angularGrid?.slickGrid?.invalidateRowHeights?.()}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Task`,field:`title`,minWidth:180,width:220},{id:`status`,name:`Status`,field:`status`,minWidth:120,width:140},{id:`rowHeight`,name:`Height`,field:`rowHeight`,exportWithFormatter:!0,formatter:(o,l,n,r,a,m)=>`${m.getItemMetadaWhenExists(o)?.height??0}px`,minWidth:90,width:90},{id:`notes`,name:`Notes`,field:`notes`,cssClass:`cell-wrap`,width:420,maxWidth:520}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[this.excelExportService,this.pdfExportService],excelExportOptions:{includeColumnWidth:!0},pdfExportOptions:{pageOrientation:`landscape`,includeColumnWidth:!0},rowHeight:40,frozenRow:2,gridHeight:560,gridWidth:1080,dataView:{globalItemMetadataProvider:{getRowMetadata:o=>{if(o.notes===`Short note.`)return{height:this.isCompact?40:33};let l=this.getEstimatedLineCount(o.notes),n=8,r=this.isCompact?21:18,a=this.isCompact?46:40;return{height:Math.max(a,n+l*r)}}}}}}getEstimatedLineCount(o){return Math.max(1,Math.ceil(o.length/55))}getData(o){let l=[`Todo`,`In Progress`,`Done`],n=[`Short note.`,`Need to validate keyboard navigation and ensure screen reader output remains stable across frozen panes.`,`Review row height invalidation path when data changes quickly due to live updates from backend polling.`,`Longer QA note: validate scrolling behavior at top and bottom boundaries, compare rendered range against expected rows, and confirm no visual clipping for wrapped cells.`],r=[];for(let a=0;a<o;a++)r.push({id:a,title:`Task ${a}`,status:l[a%l.length],notes:n[a%n.length]});return r}exportToExcel(){this.excelExportService.exportToExcel({filename:`export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`export`})}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=BE({type:c,selectors:[[`ng-component`]],decls:58,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example56.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`toggle-density`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-flip-vertical`],[`data-test`,`scroll-row-90-example56`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`ms-2`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid56`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,n){l&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 56: Variable Row Height (item metadata)
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
  `),Oc(),iD(12,`

  `),Ei(13,`div`,4),iD(14,`
    Variable row heights via `),Ei(15,`code`),iD(16,`ItemMetadata.height`),Oc(),iD(17,` fallback, with compact mode rebuilding heights through
    `),Ei(18,`code`),iD(19,`invalidateRowHeights()`),Oc(),iD(20,`.
  `),Oc(),iD(21,`

  `),Ei(22,`div`,5),iD(23,`
    `),Ei(24,`div`,6),iD(25,`
      `),Ei(26,`button`,7),Mp(`click`,function(){return n.exportToExcel()}),iD(27,`
        `),Tp(28,`i`,8),iD(29,` Export to Excel
      `),Oc(),iD(30,`
      `),Ei(31,`button`,9),Mp(`click`,function(){return n.exportToPdf()}),iD(32,`
        `),Tp(33,`i`,10),iD(34,` Export to PDF
      `),Oc(),iD(35,`
      `),Ei(36,`button`,11),Mp(`click`,function(){return n.toggleDensity()}),iD(37,`
        `),Tp(38,`span`,12),iD(39,`
        `),Ei(40,`span`),iD(41,` Toggle Compact Density`),Oc(),iD(42,`
      `),Oc(),iD(43,`
      `),Ei(44,`button`,13),Mp(`click`,function(){return n.scrollToRow90()}),iD(45,`
        `),Tp(46,`span`,14),iD(47,`
        `),Ei(48,`span`),iD(49,` Scroll To row 90`),Oc(),iD(50,`
      `),Oc(),iD(51,`
    `),Oc(),iD(52,`
  `),Oc(),iD(53,`

  `),Ei(54,`angular-slickgrid`,15),Mp(`onAngularGridCreated`,function(a){return n.angularGridReady(a.detail)}),iD(55,`
  `),Oc(),iD(56,`
`),Oc(),iD(57,`
`)),l&2&&(ay(54),Dp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[xz],styles:[`#slickGridContainer-grid56{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid56 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return c})();export{S as Example56Component};