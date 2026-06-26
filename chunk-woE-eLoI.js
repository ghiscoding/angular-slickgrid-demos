import {b as bI,j as j1,u as ui,U as UE,p as pp,c as cp,T as Tc,W as Wy,d as ap,M as MM}from'./main-WTCLCICA.js';var k=100,f=(()=>{class d{constructor(){this._darkMode=false,this.columns=[],this.hideSubTitle=false;}angularGridReady(n){this.angularGrid=n,this.updateAllTotals();}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(k);}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}defineGrid(){let n=[];for(let t=0;t<10;t++)n.push({id:t,name:String.fromCharCode(65+t),field:String(t),type:"number",width:58,editor:{model:MM.integer}});this.columns=n,this.gridOptions={autoEdit:true,autoCommitEdit:true,editable:true,darkMode:this._darkMode,gridHeight:450,gridWidth:800,enableCellNavigation:true,rowHeight:30,createFooterRow:true,showFooterRow:true,footerRowHeight:28};}loadData(n){let t=[];for(let i=0;i<n;i++){let l=t[i]={};l.id=i;for(let o=0;o<this.columns.length;o++)l[o]=Math.round(Math.random()*10);}return t}handleOnCellChange(n,t){this.updateTotal(t.cell);}handleOnColumnsReordered(){this.updateAllTotals();}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.updateAllTotals();}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light");}updateAllTotals(){let n=this.angularGrid.slickGrid?.getColumns().length||0;for(;n--;)this.updateTotal(n);}updateTotal(n){let t=this.angularGrid.slickGrid?.getColumns()[n].id,i=0,l=this.dataset.length;for(;l--;)i+=parseInt(this.dataset[l][t],10)||0;let o=this.angularGrid.slickGrid?.getFooterRowColumn(t);o&&(o.textContent=`Sum: ${i}`);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(t){return new(t||d)};}static{this.\u0275cmp=bI({type:d,selectors:[["ng-component"]],decls:33,vars:3,consts:[["id","demo-container",1,"container-fluid"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example37.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["gridId","grid37",3,"onAngularGridCreated","onCellChange","onColumnsReordered","columns","options","dataset"]],template:function(t,i){t&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 37: Footer Totals Row
    `),ui(4,"button",1),pp("click",function(){return i.toggleSubTitle()}),UE(5,`
      `),cp(6,"span",2),UE(7,`
    `),Tc(),UE(8,`
    `),ui(9,"button",3),pp("click",function(){return i.toggleDarkMode()}),UE(10,`
      `),cp(11,"span",4),UE(12,`
      `),ui(13,"span"),UE(14,"Toggle Dark Mode"),Tc(),UE(15,`
    `),Tc(),UE(16,`
    `),ui(17,"span",5),UE(18,`
      `),ui(19,"a",6),UE(20,`
        `),cp(21,"span",7),UE(22,` code
      `),Tc(),UE(23,`
    `),Tc(),UE(24,`
  `),Tc(),UE(25,`

  `),ui(26,"div",8),UE(27,"Display a totals row at the end of the grid."),Tc(),UE(28,`

  `),ui(29,"angular-slickgrid",9),pp("onAngularGridCreated",function(o){return i.angularGridReady(o.detail)})("onCellChange",function(o){return i.handleOnCellChange(o.detail.eventData,o.detail.args)})("onColumnsReordered",function(){return i.handleOnColumnsReordered()}),UE(30,`
  `),Tc(),UE(31,`
`),Tc(),UE(32,`
`)),t&2&&(Wy(29),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1],encapsulation:2});}}return d})();export{f as Example37Component};