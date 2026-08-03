import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{gt as q1}from"./chunk-C7G4ZLh2.js";import{t as mh}from"./chunk-C7Bp09sS.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";var S=200;var H=(()=>{class l{constructor(){this.columns=[],this.dataset=[]}angularGridReady(a){this.angularGrid=a}ngOnInit(){this.defineGrid(),this.dataset=this.getData(S)}scrollToRow90(){this.angularGrid?.slickGrid?.scrollRowToTop(90)}defineGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,minWidth:60,maxWidth:70},{id:`title`,name:`Story`,field:`title`,minWidth:180,width:220},{id:`owner`,name:`Owner`,field:`owner`,minWidth:110,width:130},{id:`rowHeight`,name:`Height`,field:`rowHeight`,formatter:(a,r,t)=>`${t}px`,minWidth:90,width:90},{id:`summary`,name:`Summary`,field:`summary`,cssClass:`cell-wrap`,minWidth:360,width:500,maxWidth:620}],this.gridOptions={enableCellNavigation:!0,enableTextSelectionOnCells:!0,enableVariableRowHeight:!0,externalResources:[new Ze,new mh],excelExportOptions:{},pdfExportOptions:{pageOrientation:`landscape`},rowHeight:40,gridHeight:560,gridWidth:1080,rowHeightProvider:(a,r,t)=>t.rowHeight}}getData(a){let r=[`Alex`,`Priya`,`Mia`,`Sam`,`Chris`],t=[`Refactor keyboard shortcut handling for better readability.`,`Adjust frozen rows when view-model updates after grouping.`,`Improve screen-reader labels on grid menu actions.`,`Align batch editor validation with backend constraints.`,`Capture edge-case around hidden columns and row-span.`],d=[];for(let o=0;o<a;o++){let c=o%4+1,p=Array.from({length:c},(y,E)=>`${t[(o+E)%t.length]}`).join(` `),b=p.trim().split(/\s+/).length,v=Math.max(45,8+c*16);d.push({id:o,title:`Story ${o}`,owner:r[o%r.length],summary:p,rowHeight:b<10?33:v})}return d}static{this.ɵfac=function(r){return new(r||l)}}static{this.ɵcmp=BI({type:l,selectors:[[`ng-component`]],decls:37,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example55.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`row`,2,`margin-bottom`,`6px`],[1,`col-md-12`],[`data-test`,`scroll-row-90-example55`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`gridId`,`grid55`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,t){r&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 55: Variable Row Height (provider)
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
  `),xc(),oD(12,`

  `),gi(13,`div`,4),oD(14,`Variable row heights driven by `),gi(15,`code`),oD(16,`rowHeightProvider`),xc(),oD(17,`.`),xc(),oD(18,`

  `),gi(19,`div`,5),oD(20,`
    `),gi(21,`div`,6),oD(22,`
      `),gi(23,`button`,7),Dp(`click`,function(){return t.scrollToRow90()}),oD(24,`
        `),mp(25,`span`,8),oD(26,`
        `),gi(27,`span`),oD(28,` Scroll To row 90`),xc(),oD(29,`
      `),xc(),oD(30,`
    `),xc(),oD(31,`
  `),xc(),oD(32,`

  `),gi(33,`angular-slickgrid`,9),Dp(`onAngularGridCreated`,function(o){return t.angularGridReady(o.detail)}),oD(34,`
  `),xc(),oD(35,`
`),xc(),oD(36,`
`)),r&2&&(av(33),gp(`columns`,t.columns)(`options`,t.gridOptions)(`dataset`,t.dataset))},dependencies:[q1],styles:[`#slickGridContainer-grid55{--%NS%slick-cell-border-left: 1px solid #dedede}#slickGridContainer-grid55 .slickgrid-container .slick-cell.cell-wrap{white-space:normal;text-overflow:clip;overflow:hidden;overflow-wrap:anywhere}
`],encapsulation:2})}}return l})();export{H as Example55Component};