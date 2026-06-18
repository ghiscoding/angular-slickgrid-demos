import {d}from'./chunk-B52EFzUa.js';import {q as qN,s,r as r$1,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,g as sp}from'./main-C6PQTYH6.js';var E=995,C=(()=>{class l{constructor(){this._darkModeGrid1=false,this.grid1ContainerClasses=["border-bottom-dotted","space-bottom"],this.columns1=[],this.columns2=[];}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E);}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}angularGridReady1(a){this.angularGrid1=a;}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??false}prepareGrid(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true},{id:"%",name:"% Complete",field:"percentComplete",sortable:true},{id:"start",name:"Start",field:"start",formatter:qN.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:qN.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:false,enableSorting:true,gridHeight:225,gridWidth:800},this.columns2=this.columns1,this.gridOptions2=s(r$1({},this.gridOptions1),{darkMode:false,enablePagination:true,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}});}mockData(a){let r=[];for(let n=0;n<a;n++){let d$1=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),h=Math.floor(Math.random()*29),G=Math.round(Math.random()*100);r[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:G,start:`${d(d$1)}-${d(m+1)}-${d(h)}`,finish:`${d(d$1+1)}-${d(m+1)}-${d(h)}`,effortDriven:n%5===0};}return r}resetGrid1(){let a=this.columns1.slice();a.forEach(r=>r.hidden=false),this.angularGrid1.slickGrid?.setColumns(a),this.angularGrid1.slickGrid?.autosizeColumns();}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(".grid-container1")?.classList.add("dark-mode"):document.querySelector(".grid-container1")?.classList.remove("dark-mode"),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1});}static{this.\u0275fac=function(r){return new(r||l)};}static{this.\u0275cmp=TI({type:l,selectors:[["ng-component"]],decls:68,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example01.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start","target","_blank"],[1,"column"],[1,"mr-3"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],["data-test","reset-grid1",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-alert-rhombus-outline"],[1,"grid-container1"],["gridId","grid1-1",3,"onAngularGridCreated","columns","options","dataset","containerClasses"],[1,"grid-container"],["gridId","grid1-2",3,"columns","options","dataset"]],template:function(r,n){r&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 1: Basic Grids
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
  `),Tc(),BE(12,`
  `),ui(13,"div",4),BE(14,`
    Basic Grids with fixed sizes (800 x 225) set by "gridHeight" & "gridWidth"
    `),ui(15,"ul"),BE(16,`
      `),ui(17,"li")(18,"a",5),BE(19,"Wiki HOWTO link"),Tc()(),BE(20,`
    `),Tc(),BE(21,`
  `),Tc(),BE(22,`

  `),ui(23,"h3"),BE(24,`
    `),ui(25,"div",6),BE(26,`
      `),ui(27,"span",7),BE(28,"Grid 1"),Tc(),BE(29,`
      `),ui(30,"button",8),fp("click",function(){return n.toggleDarkModeGrid1()}),BE(31,`
        `),ap(32,"i",9),BE(33,`
        `),ui(34,"span"),BE(35,"Toggle Dark Mode"),Tc(),BE(36,`
      `),Tc(),BE(37,`
      `),ui(38,"button",10),fp("click",function(){return n.resetGrid1()}),BE(39,`
        `),ap(40,"span",11),BE(41,`
        `),ui(42,"span"),BE(43,"Reset Grid (display all columns)"),Tc(),BE(44,`
      `),Tc(),BE(45,`
    `),Tc(),BE(46,`
  `),Tc(),BE(47,`

  `),ui(48,"div",12),BE(49,`
    `),ui(50,"angular-slickgrid",13),fp("onAngularGridCreated",function(m){return n.angularGridReady1(m.detail)}),BE(51,`
    `),Tc(),BE(52,`
  `),Tc(),BE(53,`

  `),ap(54,"hr"),BE(55,`

  `),ui(56,"h3"),BE(57,"Grid 2 "),ui(58,"small"),BE(59,"(with local Pagination)"),Tc()(),BE(60,`
  `),ui(61,"div",14),BE(62,`
    `),ui(63,"angular-slickgrid",15),BE(64," "),Tc(),BE(65,`
  `),Tc(),BE(66,`
`),Tc(),BE(67,`
`)),r&2&&(Uy(50),sp("columns",n.columns1)("options",n.gridOptions1)("dataset",n.dataset1)("containerClasses",n.grid1ContainerClasses),Uy(13),sp("columns",n.columns2)("options",n.gridOptions2)("dataset",n.dataset2));},dependencies:[U1],encapsulation:2});}}return l})();export{C as Example1Component};