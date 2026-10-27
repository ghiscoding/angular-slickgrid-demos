import{In as lD,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{G as WO,l as D1}from"./chunk-Dk5kBPyv.js";var k=100;var f=(()=>{class d{constructor(){this._darkMode=!1,this.columns=[],this.hideSubTitle=!1}angularGridReady(n){this.angularGrid=n,this.updateAllTotals()}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(k)}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){let n=[];for(let t=0;t<10;t++)n.push({id:t,name:String.fromCharCode(65+t),field:String(t),type:`number`,width:58,editor:{model:WO.integer}});this.columns=n,this.gridOptions={autoEdit:!0,autoCommitEdit:!0,editable:!0,darkMode:this._darkMode,gridHeight:450,gridWidth:800,enableCellNavigation:!0,rowHeight:30,createFooterRow:!0,showFooterRow:!0,footerRowHeight:28}}loadData(n){let t=[];for(let i=0;i<n;i++){let l=t[i]={};l.id=i;for(let o=0;o<this.columns.length;o++)l[o]=Math.round(Math.random()*10)}return t}handleOnCellChange(n,t){this.updateTotal(t.cell)}handleOnColumnsReordered(){this.updateAllTotals()}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.updateAllTotals()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}updateAllTotals(){let n=this.angularGrid.slickGrid?.getColumns().length||0;for(;n--;)this.updateTotal(n)}updateTotal(n){let t=this.angularGrid.slickGrid?.getColumns()[n].id,i=0,l=this.dataset.length;for(;l--;)i+=parseInt(this.dataset[l][t],10)||0;let o=this.angularGrid.slickGrid?.getFooterRowColumn(t);o&&(o.textContent=`Sum: ${i}`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(t){return new(t||d)}}static{this.ɵcmp=WE({type:d,selectors:[[`ng-component`]],decls:33,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example37.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`gridId`,`grid37`,3,`onAngularGridCreated`,`onCellChange`,`onColumnsReordered`,`columns`,`options`,`dataset`]],template:function(t,i){t&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 37: Footer Totals Row
    `),vi(4,`button`,1),Ap(`click`,function(){return i.toggleSubTitle()}),lD(5,`
      `),_p(6,`span`,2),lD(7,`
    `),Rc(),lD(8,`
    `),vi(9,`button`,3),Ap(`click`,function(){return i.toggleDarkMode()}),lD(10,`
      `),_p(11,`span`,4),lD(12,`
      `),vi(13,`span`),lD(14,`Toggle Dark Mode`),Rc(),lD(15,`
    `),Rc(),lD(16,`
    `),vi(17,`span`,5),lD(18,`
      `),vi(19,`a`,6),lD(20,`
        `),_p(21,`span`,7),lD(22,` code
      `),Rc(),lD(23,`
    `),Rc(),lD(24,`
  `),Rc(),lD(25,`

  `),vi(26,`div`,8),lD(27,`Display a totals row at the end of the grid.`),Rc(),lD(28,`

  `),vi(29,`angular-slickgrid`,9),Ap(`onAngularGridCreated`,function(o){return i.angularGridReady(o.detail)})(`onCellChange`,function(o){return i.handleOnCellChange(o.detail.eventData,o.detail.args)})(`onColumnsReordered`,function(){return i.handleOnColumnsReordered()}),lD(30,`
  `),Rc(),lD(31,`
`),Rc(),lD(32,`
`)),t&2&&(dv(29),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[D1],encapsulation:2})}}return d})();export{f as Example37Component};