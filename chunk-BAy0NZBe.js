import{n as s,t as r}from"./chunk-DarCEgGK.js";import{In as lD,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{n as d}from"./chunk-CiyLb43o.js";var E=995;var C=(()=>{class l{constructor(){this._darkModeGrid1=!1,this.grid1ContainerClasses=[`border-bottom-dotted`,`space-bottom`],this.columns1=[],this.columns2=[]}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E)}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}angularGridReady1(a){this.angularGrid1=a}isBrowserDarkModeEnabled(){return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:sI.dateIso},{id:`finish`,name:`Finish`,field:`finish`,formatter:sI.dateIso},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.columns2=this.columns1,this.gridOptions2=s(r({},this.gridOptions1),{darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}})}mockData(a){let r=[];for(let n=0;n<a;n++){let d$1=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),h=Math.floor(Math.random()*29),G=Math.round(Math.random()*100);r[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:G,start:`${d(d$1)}-${d(m+1)}-${d(h)}`,finish:`${d(d$1+1)}-${d(m+1)}-${d(h)}`,effortDriven:n%5===0}}return r}resetGrid1(){let a=this.columns1.slice();a.forEach(r=>r.hidden=!1),this.angularGrid1.slickGrid?.setColumns(a),this.angularGrid1.slickGrid?.autosizeColumns()}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(`.grid-container1`)?.classList.add(`dark-mode`):document.querySelector(`.grid-container1`)?.classList.remove(`dark-mode`),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}static{this.ɵfac=function(r){return new(r||l)}}static{this.ɵcmp=WE({type:l,selectors:[[`ng-component`]],decls:68,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example01.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start`,`target`,`_blank`],[1,`column`],[1,`mr-3`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[`data-test`,`reset-grid1`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-alert-rhombus-outline`],[1,`grid-container1`],[`gridId`,`grid1-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`,`containerClasses`],[1,`grid-container`],[`gridId`,`grid1-2`,3,`columns`,`options`,`dataset`]],template:function(r,n){r&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 1: Basic Grids
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
  `),Rc(),lD(12,`
  `),vi(13,`div`,4),lD(14,`
    Basic Grids with fixed sizes (800 x 225) set by "gridHeight" & "gridWidth"
    `),vi(15,`ul`),lD(16,`
      `),vi(17,`li`)(18,`a`,5),lD(19,`Wiki HOWTO link`),Rc()(),lD(20,`
    `),Rc(),lD(21,`
  `),Rc(),lD(22,`

  `),vi(23,`h3`),lD(24,`
    `),vi(25,`div`,6),lD(26,`
      `),vi(27,`span`,7),lD(28,`Grid 1`),Rc(),lD(29,`
      `),vi(30,`button`,8),Ap(`click`,function(){return n.toggleDarkModeGrid1()}),lD(31,`
        `),_p(32,`i`,9),lD(33,`
        `),vi(34,`span`),lD(35,`Toggle Dark Mode`),Rc(),lD(36,`
      `),Rc(),lD(37,`
      `),vi(38,`button`,10),Ap(`click`,function(){return n.resetGrid1()}),lD(39,`
        `),_p(40,`span`,11),lD(41,`
        `),vi(42,`span`),lD(43,`Reset Grid (display all columns)`),Rc(),lD(44,`
      `),Rc(),lD(45,`
    `),Rc(),lD(46,`
  `),Rc(),lD(47,`

  `),vi(48,`div`,12),lD(49,`
    `),vi(50,`angular-slickgrid`,13),Ap(`onAngularGridCreated`,function(m){return n.angularGridReady1(m.detail)}),lD(51,`
    `),Rc(),lD(52,`
  `),Rc(),lD(53,`

  `),_p(54,`hr`),lD(55,`

  `),vi(56,`h3`),lD(57,`Grid 2 `),vi(58,`small`),lD(59,`(with local Pagination)`),Rc()(),lD(60,`
  `),vi(61,`div`,14),lD(62,`
    `),vi(63,`angular-slickgrid`,15),lD(64,` `),Rc(),lD(65,`
  `),Rc(),lD(66,`
`),Rc(),lD(67,`
`)),r&2&&(dv(50),bp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1)(`containerClasses`,n.grid1ContainerClasses),dv(13),bp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[D1],encapsulation:2})}}return l})();export{C as Example1Component};