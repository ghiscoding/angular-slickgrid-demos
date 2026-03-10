import{c as o}from"./chunk-3ZF7QZND.js";import{Da as b,za as p}from"./chunk-V3K67AAF.js";import{Jb as e,Oa as x,hb as g,ib as t,jb as i,kb as s,ub as c,za as u}from"./chunk-CCOLL5XZ.js";import{a as f,b as k}from"./chunk-PRARYYF3.js";var E=995,C=(()=>{class l{constructor(){this._darkModeGrid1=!1,this.grid1ContainerClasses=["border-bottom-dotted","space-bottom"],this.columns1=[],this.columns2=[]}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E)}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}angularGridReady1(a){this.angularGrid1=a}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}prepareGrid(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0},{id:"start",name:"Start",field:"start",formatter:p.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:p.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.columns2=this.columns1,this.gridOptions2=k(f({},this.gridOptions1),{darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}})}mockData(a){let r=[];for(let n=0;n<a;n++){let d=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),h=Math.floor(Math.random()*29),G=Math.round(Math.random()*100);r[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:G,start:`${o(d)}-${o(m+1)}-${o(h)}`,finish:`${o(d+1)}-${o(m+1)}-${o(h)}`,effortDriven:n%5===0}}return r}resetGrid1(){let a=this.columns1.slice();a.forEach(r=>r.hidden=!1),this.angularGrid1.slickGrid?.setColumns(a),this.angularGrid1.slickGrid?.autosizeColumns()}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(".grid-container1")?.classList.add("dark-mode"):document.querySelector(".grid-container1")?.classList.remove("dark-mode"),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=x({type:l,selectors:[["ng-component"]],decls:68,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example01.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start","target","_blank"],[1,"column"],[1,"mr-3"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],["data-test","reset-grid1",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-alert-rhombus-outline"],[1,"grid-container1"],["gridId","grid1-1",3,"onAngularGridCreated","columns","options","dataset","containerClasses"],[1,"grid-container"],["gridId","grid1-2",3,"columns","options","dataset"]],template:function(r,n){r&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 1: Basic Grids
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),s(8,"span",3),e(9,` code
      `),i(),e(10,`
    `),i(),e(11,`
  `),i(),e(12,`
  `),t(13,"div",4),e(14,`
    Basic Grids with fixed sizes (800 x 225) set by "gridHeight" & "gridWidth"
    `),t(15,"ul"),e(16,`
      `),t(17,"li")(18,"a",5),e(19,"Wiki HOWTO link"),i()(),e(20,`
    `),i(),e(21,`
  `),i(),e(22,`

  `),t(23,"h3"),e(24,`
    `),t(25,"div",6),e(26,`
      `),t(27,"span",7),e(28,"Grid 1"),i(),e(29,`
      `),t(30,"button",8),c("click",function(){return n.toggleDarkModeGrid1()}),e(31,`
        `),s(32,"i",9),e(33,`
        `),t(34,"span"),e(35,"Toggle Dark Mode"),i(),e(36,`
      `),i(),e(37,`
      `),t(38,"button",10),c("click",function(){return n.resetGrid1()}),e(39,`
        `),s(40,"span",11),e(41,`
        `),t(42,"span"),e(43,"Reset Grid (display all columns)"),i(),e(44,`
      `),i(),e(45,`
    `),i(),e(46,`
  `),i(),e(47,`

  `),t(48,"div",12),e(49,`
    `),t(50,"angular-slickgrid",13),c("onAngularGridCreated",function(m){return n.angularGridReady1(m.detail)}),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`

  `),s(54,"hr"),e(55,`

  `),t(56,"h3"),e(57,"Grid 2 "),t(58,"small"),e(59,"(with local Pagination)"),i()(),e(60,`
  `),t(61,"div",14),e(62,`
    `),t(63,"angular-slickgrid",15),e(64," "),i(),e(65,`
  `),i(),e(66,`
`),i(),e(67,`
`)),r&2&&(u(50),g("columns",n.columns1)("options",n.gridOptions1)("dataset",n.dataset1)("containerClasses",n.grid1ContainerClasses),u(13),g("columns",n.columns2)("options",n.gridOptions2)("dataset",n.dataset2))},dependencies:[b],encapsulation:2})}}return l})();export{C as Example1Component};
