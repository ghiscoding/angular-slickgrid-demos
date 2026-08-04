import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{gt as q1}from"./chunk-C7G4ZLh2.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";import{t as mh}from"./chunk-Bz_28csk.js";var w=150;var C=(()=>{class s{constructor(){this.columns=[],this.dataset=[],this.isCompact=!1}angularGridReady(n){this.angularGrid=n}ngOnInit(){this.defineGrid(),this.dataset=this.getData(w)}toggleDensity(){this.isCompact=!this.isCompact,this.angularGrid?.slickGrid?.invalidateRowHeights?.()}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Task`,field:`title`,minWidth:180,width:220},{id:`status`,name:`Status`,field:`status`,minWidth:120,width:140},{id:`rowHeight`,name:`Height`,field:`rowHeight`,formatter:(n,l,a,r,o,c)=>`${c.getItemMetadaWhenExists(n)?.height??0}px`,minWidth:90,width:90},{id:`notes`,name:`Notes`,field:`notes`,cssClass:`cell-wrap`,width:420,maxWidth:520}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[new Ze,new mh],excelExportOptions:{},pdfExportOptions:{pageOrientation:`landscape`},rowHeight:40,frozenRow:2,gridHeight:560,gridWidth:1080,dataView:{globalItemMetadataProvider:{getRowMetadata:n=>{if(n.notes===`Short note.`)return{height:this.isCompact?40:33};let l=this.getEstimatedLineCount(n.notes),a=8,r=this.isCompact?21:18,o=this.isCompact?46:40;return{height:Math.max(o,a+l*r)}}}}}}getEstimatedLineCount(n){return Math.max(1,Math.ceil(n.length/55))}getData(n){let l=[`Todo`,`In Progress`,`Done`],a=[`Short note.`,`Need to validate keyboard navigation and ensure screen reader output remains stable across frozen panes.`,`Review row height invalidation path when data changes quickly due to live updates from backend polling.`,`Longer QA note: validate scrolling behavior at top and bottom boundaries, compare rendered range against expected rows, and confirm no visual clipping for wrapped cells.`],r=[];for(let o=0;o<n;o++)r.push({id:o,title:`Task ${o}`,status:l[o%l.length],notes:a[o%a.length]});return r}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=BI({type:s,selectors:[[`ng-component`]],decls:48,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example56.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`toggle-density`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-flip-vertical`],[`data-test`,`scroll-row-90-example56`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`ms-2`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid56`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,a){l&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 56: Variable Row Height (item metadata)
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
  `),xc(),oD(12,`

  `),gi(13,`div`,4),oD(14,`
    Variable row heights via `),gi(15,`code`),oD(16,`ItemMetadata.height`),xc(),oD(17,` fallback, with compact mode rebuilding heights through
    `),gi(18,`code`),oD(19,`invalidateRowHeights()`),xc(),oD(20,`.
  `),xc(),oD(21,`

  `),gi(22,`div`,5),oD(23,`
    `),gi(24,`div`,6),oD(25,`
      `),gi(26,`button`,7),Dp(`click`,function(){return a.toggleDensity()}),oD(27,`
        `),mp(28,`span`,8),oD(29,`
        `),gi(30,`span`),oD(31,` Toggle Compact Density`),xc(),oD(32,`
      `),xc(),oD(33,`
      `),gi(34,`button`,9),Dp(`click`,function(){return a.scrollToRow90()}),oD(35,`
        `),mp(36,`span`,10),oD(37,`
        `),gi(38,`span`),oD(39,` Scroll To row 90`),xc(),oD(40,`
      `),xc(),oD(41,`
    `),xc(),oD(42,`
  `),xc(),oD(43,`

  `),gi(44,`angular-slickgrid`,11),Dp(`onAngularGridCreated`,function(o){return a.angularGridReady(o.detail)}),oD(45,`
  `),xc(),oD(46,`
`),xc(),oD(47,`
`)),l&2&&(av(44),gp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[q1],styles:[`#slickGridContainer-grid56{--%NS%slick-cell-border-left: 1px solid #dedede;--%NS%slick-font-size-base: 13px}#slickGridContainer-grid56 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return s})();export{C as Example56Component};