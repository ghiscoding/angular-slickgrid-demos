import{F as Ip,Pn as ly,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W}from"./chunk-DLuyVhQJ.js";import{t as mh}from"./chunk-B-r9wchg.js";import{t as Ze}from"./chunk-C5onuIZj.js";var b=150;var S=(()=>{class c{constructor(){this.columns=[],this.dataset=[],this.isCompact=!1,this.excelExportService=new Ze,this.pdfExportService=new mh}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.defineGrid(),this.dataset=this.getData(b)}toggleDensity(){this.isCompact=!this.isCompact,this.angularGrid?.slickGrid?.invalidateRowHeights?.()}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Task`,field:`title`,minWidth:180,width:220},{id:`status`,name:`Status`,field:`status`,minWidth:120,width:140},{id:`rowHeight`,name:`Height`,field:`rowHeight`,exportWithFormatter:!0,formatter:(o,l,n,r,a,m)=>`${m.getItemMetadaWhenExists(o)?.height??0}px`,minWidth:90,width:90},{id:`notes`,name:`Notes`,field:`notes`,cssClass:`cell-wrap`,width:420,maxWidth:520}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[this.excelExportService,this.pdfExportService],excelExportOptions:{includeColumnWidth:!0},pdfExportOptions:{pageOrientation:`landscape`,includeColumnWidth:!0},rowHeight:40,frozenRow:2,gridHeight:560,gridWidth:1080,dataView:{globalItemMetadataProvider:{getRowMetadata:o=>{if(o.notes===`Short note.`)return{height:this.isCompact?40:33};let l=this.getEstimatedLineCount(o.notes),n=8,r=this.isCompact?21:18,a=this.isCompact?46:40;return{height:Math.max(a,n+l*r)}}}}}}getEstimatedLineCount(o){return Math.max(1,Math.ceil(o.length/55))}getData(o){let l=[`Todo`,`In Progress`,`Done`],n=[`Short note.`,`Need to validate keyboard navigation and ensure screen reader output remains stable across frozen panes.`,`Review row height invalidation path when data changes quickly due to live updates from backend polling.`,`Longer QA note: validate scrolling behavior at top and bottom boundaries, compare rendered range against expected rows, and confirm no visual clipping for wrapped cells.`],r=[];for(let a=0;a<o;a++)r.push({id:a,title:`Task ${a}`,status:l[a%l.length],notes:n[a%n.length]});return r}exportToExcel(){this.excelExportService.exportToExcel({filename:`export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`export`})}static{this.ɵfac=function(l){return new(l||c)}}static{this.ɵcmp=$E({type:c,selectors:[[`ng-component`]],decls:58,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example56.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`export-excel-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[`data-test`,`export-pdf-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`toggle-density`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-flip-vertical`],[`data-test`,`scroll-row-90-example56`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`ms-2`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid56`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,n){l&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 56: Variable Row Height (item metadata)
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
  `),Rc(),sD(12,`

  `),yi(13,`div`,4),sD(14,`
    Variable row heights via `),yi(15,`code`),sD(16,`ItemMetadata.height`),Rc(),sD(17,` fallback, with compact mode rebuilding heights through
    `),yi(18,`code`),sD(19,`invalidateRowHeights()`),Rc(),sD(20,`.
  `),Rc(),sD(21,`

  `),yi(22,`div`,5),sD(23,`
    `),yi(24,`div`,6),sD(25,`
      `),yi(26,`button`,7),bp(`click`,function(){return n.exportToExcel()}),sD(27,`
        `),Ip(28,`i`,8),sD(29,` Export to Excel
      `),Rc(),sD(30,`
      `),yi(31,`button`,9),bp(`click`,function(){return n.exportToPdf()}),sD(32,`
        `),Ip(33,`i`,10),sD(34,` Export to PDF
      `),Rc(),sD(35,`
      `),yi(36,`button`,11),bp(`click`,function(){return n.toggleDensity()}),sD(37,`
        `),Ip(38,`span`,12),sD(39,`
        `),yi(40,`span`),sD(41,` Toggle Compact Density`),Rc(),sD(42,`
      `),Rc(),sD(43,`
      `),yi(44,`button`,13),bp(`click`,function(){return n.scrollToRow90()}),sD(45,`
        `),Ip(46,`span`,14),sD(47,`
        `),yi(48,`span`),sD(49,` Scroll To row 90`),Rc(),sD(50,`
      `),Rc(),sD(51,`
    `),Rc(),sD(52,`
  `),Rc(),sD(53,`

  `),yi(54,`angular-slickgrid`,15),bp(`onAngularGridCreated`,function(a){return n.angularGridReady(a.detail)}),sD(55,`
  `),Rc(),sD(56,`
`),Rc(),sD(57,`
`)),l&2&&(ly(54),Ep(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W],styles:[`#slickGridContainer-grid56{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid56 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return c})();export{S as Example56Component};