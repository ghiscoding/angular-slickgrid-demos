import{Dt as UE,En as iD,Kn as mp,Tt as Tp,Wn as mi,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W}from"./chunk-CAMk6vEo.js";import{t as Ze}from"./chunk-CVoct-s8.js";import{t as mh}from"./chunk-D8gOnIe-.js";var b=150;var S=(()=>{class c{constructor(){this.columns=[],this.dataset=[],this.isCompact=!1,this.excelExportService=new Ze,this.pdfExportService=new mh}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.defineGrid(),this.dataset=this.getData(b)}toggleDensity(){this.isCompact=!this.isCompact,this.angularGrid?.slickGrid?.invalidateRowHeights?.()}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Task`,field:`title`,minWidth:180,width:220},{id:`status`,name:`Status`,field:`status`,minWidth:120,width:140},{id:`rowHeight`,name:`Height`,field:`rowHeight`,exportWithFormatter:!0,formatter:(o,l,n,r,a,m)=>`${m.getItemMetadaWhenExists(o)?.height??0}px`,minWidth:90,width:90},{id:`notes`,name:`Notes`,field:`notes`,cssClass:`cell-wrap`,width:420,maxWidth:520}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[this.excelExportService,this.pdfExportService],excelExportOptions:{includeColumnWidth:!0},pdfExportOptions:{pageOrientation:`landscape`,includeColumnWidth:!0},rowHeight:40,frozenRow:2,gridHeight:560,gridWidth:1080,dataView:{globalItemMetadataProvider:{getRowMetadata:o=>{if(o.notes===`Short note.`)return{height:this.isCompact?40:33};let l=this.getEstimatedLineCount(o.notes),n=8,r=this.isCompact?21:18,a=this.isCompact?46:40;return{height:Math.max(a,n+l*r)}}}}}}getEstimatedLineCount(o){return Math.max(1,Math.ceil(o.length/55))}getData(o){let l=[`Todo`,`In Progress`,`Done`],n=[`Short note.`,`Need to validate keyboard navigation and ensure screen reader output remains stable across frozen panes.`,`Review row height invalidation path when data changes quickly due to live updates from backend polling.`,`Longer QA note: validate scrolling behavior at top and bottom boundaries, compare rendered range against expected rows, and confirm no visual clipping for wrapped cells.`],r=[];for(let a=0;a<o;a++)r.push({id:a,title:`Task ${a}`,status:l[a%l.length],notes:n[a%n.length]});return r}exportToExcel(){this.excelExportService.exportToExcel({filename:`export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`export`})}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=UE({type:c,selectors:[[`ng-component`]],decls:58,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example56.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`toggle-density`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-flip-vertical`],[`data-test`,`scroll-row-90-example56`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`ms-2`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid56`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,n){l&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 56: Variable Row Height (item metadata)
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
  `),Ac(),iD(12,`

  `),mi(13,`div`,4),iD(14,`
    Variable row heights via `),mi(15,`code`),iD(16,`ItemMetadata.height`),Ac(),iD(17,` fallback, with compact mode rebuilding heights through
    `),mi(18,`code`),iD(19,`invalidateRowHeights()`),Ac(),iD(20,`.
  `),Ac(),iD(21,`

  `),mi(22,`div`,5),iD(23,`
    `),mi(24,`div`,6),iD(25,`
      `),mi(26,`button`,7),Tp(`click`,function(){return n.exportToExcel()}),iD(27,`
        `),vp(28,`i`,8),iD(29,` Export to Excel
      `),Ac(),iD(30,`
      `),mi(31,`button`,9),Tp(`click`,function(){return n.exportToPdf()}),iD(32,`
        `),vp(33,`i`,10),iD(34,` Export to PDF
      `),Ac(),iD(35,`
      `),mi(36,`button`,11),Tp(`click`,function(){return n.toggleDensity()}),iD(37,`
        `),vp(38,`span`,12),iD(39,`
        `),mi(40,`span`),iD(41,` Toggle Compact Density`),Ac(),iD(42,`
      `),Ac(),iD(43,`
      `),mi(44,`button`,13),Tp(`click`,function(){return n.scrollToRow90()}),iD(45,`
        `),vp(46,`span`,14),iD(47,`
        `),mi(48,`span`),iD(49,` Scroll To row 90`),Ac(),iD(50,`
      `),Ac(),iD(51,`
    `),Ac(),iD(52,`
  `),Ac(),iD(53,`

  `),mi(54,`angular-slickgrid`,15),Tp(`onAngularGridCreated`,function(a){return n.angularGridReady(a.detail)}),iD(55,`
  `),Ac(),iD(56,`
`),Ac(),iD(57,`
`)),l&2&&(cy(54),mp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W],styles:[`#slickGridContainer-grid56{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid56 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return c})();export{S as Example56Component};