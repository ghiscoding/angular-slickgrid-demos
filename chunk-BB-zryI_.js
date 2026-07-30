import {_ as _I,j as j1,u as ui,q as qE,p as pp,c as cp,T as Tc,W as Wy,a as ap,M as MM}from'./main-MR3B775B.js';var k=100,f=(()=>{class d{constructor(){this._darkMode=false,this.columns=[],this.hideSubTitle=false;}angularGridReady(n){this.angularGrid=n,this.updateAllTotals();}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(k);}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}defineGrid(){let n=[];for(let t=0;t<10;t++)n.push({id:t,name:String.fromCharCode(65+t),field:String(t),type:"number",width:58,editor:{model:MM.integer}});this.columns=n,this.gridOptions={autoEdit:true,autoCommitEdit:true,editable:true,darkMode:this._darkMode,gridHeight:450,gridWidth:800,enableCellNavigation:true,rowHeight:30,createFooterRow:true,showFooterRow:true,footerRowHeight:28};}loadData(n){let t=[];for(let i=0;i<n;i++){let l=t[i]={};l.id=i;for(let o=0;o<this.columns.length;o++)l[o]=Math.round(Math.random()*10);}return t}handleOnCellChange(n,t){this.updateTotal(t.cell);}handleOnColumnsReordered(){this.updateAllTotals();}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.updateAllTotals();}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light");}updateAllTotals(){let n=this.angularGrid.slickGrid?.getColumns().length||0;for(;n--;)this.updateTotal(n);}updateTotal(n){let t=this.angularGrid.slickGrid?.getColumns()[n].id,i=0,l=this.dataset.length;for(;l--;)i+=parseInt(this.dataset[l][t],10)||0;let o=this.angularGrid.slickGrid?.getFooterRowColumn(t);o&&(o.textContent=`Sum: ${i}`);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(t){return new(t||d)};}static{this.\u0275cmp=_I({type:d,selectors:[["ng-component"]],decls:33,vars:3,consts:[["id","demo-container",1,"container-fluid"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example37.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["gridId","grid37",3,"onAngularGridCreated","onCellChange","onColumnsReordered","columns","options","dataset"]],template:function(t,i){t&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 37: Footer Totals Row
    `),ui(4,"button",1),pp("click",function(){return i.toggleSubTitle()}),qE(5,`
      `),cp(6,"span",2),qE(7,`
    `),Tc(),qE(8,`
    `),ui(9,"button",3),pp("click",function(){return i.toggleDarkMode()}),qE(10,`
      `),cp(11,"span",4),qE(12,`
      `),ui(13,"span"),qE(14,"Toggle Dark Mode"),Tc(),qE(15,`
    `),Tc(),qE(16,`
    `),ui(17,"span",5),qE(18,`
      `),ui(19,"a",6),qE(20,`
        `),cp(21,"span",7),qE(22,` code
      `),Tc(),qE(23,`
    `),Tc(),qE(24,`
  `),Tc(),qE(25,`

  `),ui(26,"div",8),qE(27,"Display a totals row at the end of the grid."),Tc(),qE(28,`

  `),ui(29,"angular-slickgrid",9),pp("onAngularGridCreated",function(o){return i.angularGridReady(o.detail)})("onCellChange",function(o){return i.handleOnCellChange(o.detail.eventData,o.detail.args)})("onColumnsReordered",function(){return i.handleOnColumnsReordered()}),qE(30,`
  `),Tc(),qE(31,`
`),Tc(),qE(32,`
`)),t&2&&(Wy(29),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1],encapsulation:2});}}return d})();export{f as Example37Component};