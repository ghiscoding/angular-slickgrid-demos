import{n as s,t as r}from"./chunk-DarCEgGK.js";import{$ as Mp,C as Ei,En as iD,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp}from"./chunk-CtIlL7jI.js";import{Ot as xz,xt as uP}from"./chunk-o9GGBwbJ.js";import{n as d}from"./chunk-CiyLb43o.js";var E=995;var C=(()=>{class l{constructor(){this._darkModeGrid1=!1,this.grid1ContainerClasses=[`border-bottom-dotted`,`space-bottom`],this.columns1=[],this.columns2=[]}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E)}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}angularGridReady1(a){this.angularGrid1=a}isBrowserDarkModeEnabled(){return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso},{id:`finish`,name:`Finish`,field:`finish`,formatter:uP.dateIso},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.columns2=this.columns1,this.gridOptions2=s(r({},this.gridOptions1),{darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}})}mockData(a){let r=[];for(let n=0;n<a;n++){let d$1=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),h=Math.floor(Math.random()*29),G=Math.round(Math.random()*100);r[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:G,start:`${d(d$1)}-${d(m+1)}-${d(h)}`,finish:`${d(d$1+1)}-${d(m+1)}-${d(h)}`,effortDriven:n%5===0}}return r}resetGrid1(){let a=this.columns1.slice();a.forEach(r=>r.hidden=!1),this.angularGrid1.slickGrid?.setColumns(a),this.angularGrid1.slickGrid?.autosizeColumns()}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(`.grid-container1`)?.classList.add(`dark-mode`):document.querySelector(`.grid-container1`)?.classList.remove(`dark-mode`),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}static{this.ɵfac=function(r){return new(r||l)}}static{this.ɵcmp=BE({type:l,selectors:[[`ng-component`]],decls:68,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example01.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start`,`target`,`_blank`],[1,`column`],[1,`mr-3`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[`data-test`,`reset-grid1`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-alert-rhombus-outline`],[1,`grid-container1`],[`gridId`,`grid1-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`,`containerClasses`],[1,`grid-container`],[`gridId`,`grid1-2`,3,`columns`,`options`,`dataset`]],template:function(r,n){r&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 1: Basic Grids
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
  `),Oc(),iD(12,`
  `),Ei(13,`div`,4),iD(14,`
    Basic Grids with fixed sizes (800 x 225) set by "gridHeight" & "gridWidth"
    `),Ei(15,`ul`),iD(16,`
      `),Ei(17,`li`)(18,`a`,5),iD(19,`Wiki HOWTO link`),Oc()(),iD(20,`
    `),Oc(),iD(21,`
  `),Oc(),iD(22,`

  `),Ei(23,`h3`),iD(24,`
    `),Ei(25,`div`,6),iD(26,`
      `),Ei(27,`span`,7),iD(28,`Grid 1`),Oc(),iD(29,`
      `),Ei(30,`button`,8),Mp(`click`,function(){return n.toggleDarkModeGrid1()}),iD(31,`
        `),Tp(32,`i`,9),iD(33,`
        `),Ei(34,`span`),iD(35,`Toggle Dark Mode`),Oc(),iD(36,`
      `),Oc(),iD(37,`
      `),Ei(38,`button`,10),Mp(`click`,function(){return n.resetGrid1()}),iD(39,`
        `),Tp(40,`span`,11),iD(41,`
        `),Ei(42,`span`),iD(43,`Reset Grid (display all columns)`),Oc(),iD(44,`
      `),Oc(),iD(45,`
    `),Oc(),iD(46,`
  `),Oc(),iD(47,`

  `),Ei(48,`div`,12),iD(49,`
    `),Ei(50,`angular-slickgrid`,13),Mp(`onAngularGridCreated`,function(m){return n.angularGridReady1(m.detail)}),iD(51,`
    `),Oc(),iD(52,`
  `),Oc(),iD(53,`

  `),Tp(54,`hr`),iD(55,`

  `),Ei(56,`h3`),iD(57,`Grid 2 `),Ei(58,`small`),iD(59,`(with local Pagination)`),Oc()(),iD(60,`
  `),Ei(61,`div`,14),iD(62,`
    `),Ei(63,`angular-slickgrid`,15),iD(64,` `),Oc(),iD(65,`
  `),Oc(),iD(66,`
`),Oc(),iD(67,`
`)),r&2&&(ay(50),Dp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1)(`containerClasses`,n.grid1ContainerClasses),ay(13),Dp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[xz],encapsulation:2})}}return l})();export{C as Example1Component};