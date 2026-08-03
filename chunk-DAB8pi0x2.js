import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1}from"./chunk-C7G4ZLh2.js";import{n as d}from"./chunk-CiyLb43o.js";var E=995;var C=(()=>{class l{constructor(){this._darkModeGrid1=!1,this.grid1ContainerClasses=[`border-bottom-dotted`,`space-bottom`],this.columns1=[],this.columns2=[]}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E)}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}angularGridReady1(a){this.angularGrid1=a}isBrowserDarkModeEnabled(){return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.columns2=this.columns1,this.gridOptions2=s(r({},this.gridOptions1),{darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}})}mockData(a){let r=[];for(let n=0;n<a;n++){let d$1=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),h=Math.floor(Math.random()*29),G=Math.round(Math.random()*100);r[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:G,start:`${d(d$1)}-${d(m+1)}-${d(h)}`,finish:`${d(d$1+1)}-${d(m+1)}-${d(h)}`,effortDriven:n%5===0}}return r}resetGrid1(){let a=this.columns1.slice();a.forEach(r=>r.hidden=!1),this.angularGrid1.slickGrid?.setColumns(a),this.angularGrid1.slickGrid?.autosizeColumns()}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(`.grid-container1`)?.classList.add(`dark-mode`):document.querySelector(`.grid-container1`)?.classList.remove(`dark-mode`),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}static{this.ɵfac=function(r){return new(r||l)}}static{this.ɵcmp=BI({type:l,selectors:[[`ng-component`]],decls:68,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example01.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start`,`target`,`_blank`],[1,`column`],[1,`mr-3`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[`data-test`,`reset-grid1`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-alert-rhombus-outline`],[1,`grid-container1`],[`gridId`,`grid1-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`,`containerClasses`],[1,`grid-container`],[`gridId`,`grid1-2`,3,`columns`,`options`,`dataset`]],template:function(r,n){r&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 1: Basic Grids
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
  `),xc(),oD(12,`
  `),gi(13,`div`,4),oD(14,`
    Basic Grids with fixed sizes (800 x 225) set by "gridHeight" & "gridWidth"
    `),gi(15,`ul`),oD(16,`
      `),gi(17,`li`)(18,`a`,5),oD(19,`Wiki HOWTO link`),xc()(),oD(20,`
    `),xc(),oD(21,`
  `),xc(),oD(22,`

  `),gi(23,`h3`),oD(24,`
    `),gi(25,`div`,6),oD(26,`
      `),gi(27,`span`,7),oD(28,`Grid 1`),xc(),oD(29,`
      `),gi(30,`button`,8),Dp(`click`,function(){return n.toggleDarkModeGrid1()}),oD(31,`
        `),mp(32,`i`,9),oD(33,`
        `),gi(34,`span`),oD(35,`Toggle Dark Mode`),xc(),oD(36,`
      `),xc(),oD(37,`
      `),gi(38,`button`,10),Dp(`click`,function(){return n.resetGrid1()}),oD(39,`
        `),mp(40,`span`,11),oD(41,`
        `),gi(42,`span`),oD(43,`Reset Grid (display all columns)`),xc(),oD(44,`
      `),xc(),oD(45,`
    `),xc(),oD(46,`
  `),xc(),oD(47,`

  `),gi(48,`div`,12),oD(49,`
    `),gi(50,`angular-slickgrid`,13),Dp(`onAngularGridCreated`,function(m){return n.angularGridReady1(m.detail)}),oD(51,`
    `),xc(),oD(52,`
  `),xc(),oD(53,`

  `),mp(54,`hr`),oD(55,`

  `),gi(56,`h3`),oD(57,`Grid 2 `),gi(58,`small`),oD(59,`(with local Pagination)`),xc()(),oD(60,`
  `),gi(61,`div`,14),oD(62,`
    `),gi(63,`angular-slickgrid`,15),oD(64,` `),xc(),oD(65,`
  `),xc(),oD(66,`
`),xc(),oD(67,`
`)),r&2&&(av(50),gp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1)(`containerClasses`,n.grid1ContainerClasses),av(13),gp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[q1],encapsulation:2})}}return l})();export{C as Example1Component};