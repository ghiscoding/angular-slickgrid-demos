import{Aa as b,Hb as h,Kb as M,Ma as u,Na as t,Oa as i,Pa as m,Qa as g,Ua as e,a as x,b as k,na as p}from"./chunk-X22BZC5Q.js";function o(a){let c=parseInt(a,10);return c<10?`0${c}`:c}var y=995,G=(()=>{class a{constructor(){this._darkModeGrid1=!1,this.grid1ContainerClasses=["border-bottom-dotted","space-bottom"],this.columnDefinitions1=[],this.columnDefinitions2=[]}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(y),this.dataset2=this.mockData(y)}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}angularGridReady1(d){this.angularGrid1=d}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}prepareGrid(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0},{id:"start",name:"Start",field:"start",formatter:h.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:h.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.columnDefinitions2=this.columnDefinitions1,this.gridOptions2=k(x({},this.gridOptions1),{darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}})}mockData(d){let r=[];for(let n=0;n<d;n++){let s=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),f=Math.floor(Math.random()*29),E=Math.round(Math.random()*100);r[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:E,start:`${o(s)}-${o(l+1)}-${o(f)}`,finish:`${o(s+1)}-${o(l+1)}-${o(f)}`,effortDriven:n%5===0}}return r}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(".grid-container1")?.classList.add("dark-mode"):document.querySelector(".grid-container1")?.classList.remove("dark-mode"),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275cmp=b({type:a,selectors:[["ng-component"]],decls:61,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/angular-slickgrid-demos/tree/master/standalone-single-locale/src/app/examples/example01.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start","target","_blank"],[1,"column"],[1,"mr-3"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"grid-container1"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset","containerClasses"],[1,"grid-container"],["gridId","grid2",3,"columns","options","dataset"]],template:function(r,n){r&1&&(e(0,`
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
      `),t(31,"button",8),g("click",function(){return n.toggleDarkModeGrid1()}),e(32,`
        `),m(33,"i",9),e(34,`
        `),t(35,"span"),e(36,"Toggle Dark Mode"),i(),e(37,`
      `),i(),e(38,`
    `),i(),e(39,`
  `),i(),e(40,`

  `),t(41,"div",10),e(42,`
    `),t(43,"angular-slickgrid",11),g("onAngularGridCreated",function(l){return n.angularGridReady1(l.detail)}),e(44,`
    `),i(),e(45,`
  `),i(),e(46,`

  `),m(47,"hr"),e(48,`

  `),t(49,"h3"),e(50,"Grid 2 "),t(51,"small"),e(52,"(with local Pagination)"),i()(),e(53,`
  `),t(54,"div",12),e(55,`
    `),t(56,"angular-slickgrid",13),e(57," "),i(),e(58,`
  `),i(),e(59,`
`),i(),e(60,`
`)),r&2&&(p(43),u("columns",n.columnDefinitions1)("options",n.gridOptions1)("dataset",n.dataset1)("containerClasses",n.grid1ContainerClasses),p(13),u("columns",n.columnDefinitions2)("options",n.gridOptions2)("dataset",n.dataset2))},dependencies:[M],styles:[`[_nghost-%COMP%]     .border-bottom-dotted{border-bottom:3px dotted black}[_nghost-%COMP%]     .space-bottom{margin-bottom:20px}
/*# sourceMappingURL=example01.component-ODQ5QDA4.css.map */`]})}}return a})();export{G as Example1Component};
//# sourceMappingURL=example01.component-YP7JPGCU.js.map
