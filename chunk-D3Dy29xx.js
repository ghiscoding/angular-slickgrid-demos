import {d}from'./chunk-B52EFzUa.js';import {X as XN,s,r as r$1,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,W as Wy,a as ap}from'./main-MR3B775B.js';var E=995,C=(()=>{class l{constructor(){this._darkModeGrid1=false,this.grid1ContainerClasses=["border-bottom-dotted","space-bottom"],this.columns1=[],this.columns2=[];}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E);}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}angularGridReady1(a){this.angularGrid1=a;}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??false}prepareGrid(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true},{id:"%",name:"% Complete",field:"percentComplete",sortable:true},{id:"start",name:"Start",field:"start",formatter:XN.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:false,enableSorting:true,gridHeight:225,gridWidth:800},this.columns2=this.columns1,this.gridOptions2=s(r$1({},this.gridOptions1),{darkMode:false,enablePagination:true,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}});}mockData(a){let r=[];for(let n=0;n<a;n++){let d$1=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),h=Math.floor(Math.random()*29),G=Math.round(Math.random()*100);r[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:G,start:`${d(d$1)}-${d(m+1)}-${d(h)}`,finish:`${d(d$1+1)}-${d(m+1)}-${d(h)}`,effortDriven:n%5===0};}return r}resetGrid1(){let a=this.columns1.slice();a.forEach(r=>r.hidden=false),this.angularGrid1.slickGrid?.setColumns(a),this.angularGrid1.slickGrid?.autosizeColumns();}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(".grid-container1")?.classList.add("dark-mode"):document.querySelector(".grid-container1")?.classList.remove("dark-mode"),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1});}static{this.\u0275fac=function(r){return new(r||l)};}static{this.\u0275cmp=_I({type:l,selectors:[["ng-component"]],decls:68,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example01.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start","target","_blank"],[1,"column"],[1,"mr-3"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],["data-test","reset-grid1",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-alert-rhombus-outline"],[1,"grid-container1"],["gridId","grid1-1",3,"onAngularGridCreated","columns","options","dataset","containerClasses"],[1,"grid-container"],["gridId","grid1-2",3,"columns","options","dataset"]],template:function(r,n){r&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 1: Basic Grids
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
  `),Tc(),qE(12,`
  `),ui(13,"div",4),qE(14,`
    Basic Grids with fixed sizes (800 x 225) set by "gridHeight" & "gridWidth"
    `),ui(15,"ul"),qE(16,`
      `),ui(17,"li")(18,"a",5),qE(19,"Wiki HOWTO link"),Tc()(),qE(20,`
    `),Tc(),qE(21,`
  `),Tc(),qE(22,`

  `),ui(23,"h3"),qE(24,`
    `),ui(25,"div",6),qE(26,`
      `),ui(27,"span",7),qE(28,"Grid 1"),Tc(),qE(29,`
      `),ui(30,"button",8),pp("click",function(){return n.toggleDarkModeGrid1()}),qE(31,`
        `),cp(32,"i",9),qE(33,`
        `),ui(34,"span"),qE(35,"Toggle Dark Mode"),Tc(),qE(36,`
      `),Tc(),qE(37,`
      `),ui(38,"button",10),pp("click",function(){return n.resetGrid1()}),qE(39,`
        `),cp(40,"span",11),qE(41,`
        `),ui(42,"span"),qE(43,"Reset Grid (display all columns)"),Tc(),qE(44,`
      `),Tc(),qE(45,`
    `),Tc(),qE(46,`
  `),Tc(),qE(47,`

  `),ui(48,"div",12),qE(49,`
    `),ui(50,"angular-slickgrid",13),pp("onAngularGridCreated",function(m){return n.angularGridReady1(m.detail)}),qE(51,`
    `),Tc(),qE(52,`
  `),Tc(),qE(53,`

  `),cp(54,"hr"),qE(55,`

  `),ui(56,"h3"),qE(57,"Grid 2 "),ui(58,"small"),qE(59,"(with local Pagination)"),Tc()(),qE(60,`
  `),ui(61,"div",14),qE(62,`
    `),ui(63,"angular-slickgrid",15),qE(64," "),Tc(),qE(65,`
  `),Tc(),qE(66,`
`),Tc(),qE(67,`
`)),r&2&&(Wy(50),ap("columns",n.columns1)("options",n.gridOptions1)("dataset",n.dataset1)("containerClasses",n.grid1ContainerClasses),Wy(13),ap("columns",n.columns2)("options",n.gridOptions2)("dataset",n.dataset2));},dependencies:[j1],encapsulation:2});}}return l})();export{C as Example1Component};