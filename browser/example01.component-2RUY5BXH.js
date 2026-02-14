import{c as a}from"./chunk-OR2DNZBV.js";import{Da as b,za as u}from"./chunk-37LE67SH.js";import{Aa as c,Kb as e,Pa as x,ib as g,jb as t,kb as i,lb as m,vb as p}from"./chunk-M6IC3X47.js";import{a as f,b as k}from"./chunk-JQGRFILQ.js";var M=995,G=(()=>{class d{constructor(){this._darkModeGrid1=!1,this.grid1ContainerClasses=["border-bottom-dotted","space-bottom"],this.columnDefinitions1=[],this.columnDefinitions2=[]}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(M),this.dataset2=this.mockData(M)}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}angularGridReady1(o){this.angularGrid1=o}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}prepareGrid(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0},{id:"start",name:"Start",field:"start",formatter:u.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:u.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.columnDefinitions2=this.columnDefinitions1,this.gridOptions2=k(f({},this.gridOptions1),{darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}})}mockData(o){let r=[];for(let n=0;n<o;n++){let s=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),h=Math.floor(Math.random()*29),S=Math.round(Math.random()*100);r[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:S,start:`${a(s)}-${a(l+1)}-${a(h)}`,finish:`${a(s+1)}-${a(l+1)}-${a(h)}`,effortDriven:n%5===0}}return r}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(".grid-container1")?.classList.add("dark-mode"):document.querySelector(".grid-container1")?.classList.remove("dark-mode"),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["ng-component"]],decls:61,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example01.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start","target","_blank"],[1,"column"],[1,"mr-3"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"grid-container1"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset","containerClasses"],[1,"grid-container"],["gridId","grid2",3,"columns","options","dataset"]],template:function(r,n){r&1&&(e(0,`
`),t(1,"div",0),e(2,`
  `),t(3,"h2"),e(4,`
    Example 1: Basic Grids
    `),t(5,"span",1),e(6,`
      `),t(7,"a",2),e(8,`
        `),m(9,"span",3),e(10,` code
      `),i(),e(11,`
    `),i(),e(12,`
  `),i(),e(13,`
  `),t(14,"div",4),e(15,`
    Basic Grids with fixed sizes (800 x 225) set by "gridHeight" & "gridWidth"
    `),t(16,"ul"),e(17,`
      `),t(18,"li")(19,"a",5),e(20,"Wiki HOWTO link"),i()(),e(21,`
    `),i(),e(22,`
  `),i(),e(23,`

  `),t(24,"h3"),e(25,`
    `),t(26,"div",6),e(27,`
      `),t(28,"span",7),e(29,"Grid 1"),i(),e(30,`
      `),t(31,"button",8),p("click",function(){return n.toggleDarkModeGrid1()}),e(32,`
        `),m(33,"i",9),e(34,`
        `),t(35,"span"),e(36,"Toggle Dark Mode"),i(),e(37,`
      `),i(),e(38,`
    `),i(),e(39,`
  `),i(),e(40,`

  `),t(41,"div",10),e(42,`
    `),t(43,"angular-slickgrid",11),p("onAngularGridCreated",function(l){return n.angularGridReady1(l.detail)}),e(44,`
    `),i(),e(45,`
  `),i(),e(46,`

  `),m(47,"hr"),e(48,`

  `),t(49,"h3"),e(50,"Grid 2 "),t(51,"small"),e(52,"(with local Pagination)"),i()(),e(53,`
  `),t(54,"div",12),e(55,`
    `),t(56,"angular-slickgrid",13),e(57," "),i(),e(58,`
  `),i(),e(59,`
`),i(),e(60,`
`)),r&2&&(c(43),g("columns",n.columnDefinitions1)("options",n.gridOptions1)("dataset",n.dataset1)("containerClasses",n.grid1ContainerClasses),c(13),g("columns",n.columnDefinitions2)("options",n.gridOptions2)("dataset",n.dataset2))},dependencies:[b],styles:[`[_nghost-%COMP%]     .border-bottom-dotted{border-bottom:3px dotted black}[_nghost-%COMP%]     .space-bottom{margin-bottom:20px}
/*# sourceMappingURL=example01.component-C3XC5MI2.css.map */`]})}}return d})();export{G as Example1Component};
//# sourceMappingURL=example01.component-2RUY5BXH.js.map
