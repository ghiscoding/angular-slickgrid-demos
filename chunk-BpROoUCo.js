import{n as s,t as r}from"./chunk-DarCEgGK.js";import{F as Ip,Pn as ly,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W,ht as nk}from"./chunk-DLuyVhQJ.js";import{n as d}from"./chunk-CiyLb43o.js";var E=995;var C=(()=>{class l{constructor(){this._darkModeGrid1=!1,this.grid1ContainerClasses=[`border-bottom-dotted`,`space-bottom`],this.columns1=[],this.columns2=[]}ngOnInit(){this.prepareGrid(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E)}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}angularGridReady1(a){this.angularGrid1=a}isBrowserDarkModeEnabled(){return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0}],this._darkModeGrid1=this.isBrowserDarkModeEnabled(),this.gridOptions1={darkMode:this._darkModeGrid1,enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.columns2=this.columns1,this.gridOptions2=s(r({},this.gridOptions1),{darkMode:!1,enablePagination:!0,pagination:{pageSizes:[5,10,20,25,50],pageSize:5}})}mockData(a){let r=[];for(let n=0;n<a;n++){let d$1=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),h=Math.floor(Math.random()*29),G=Math.round(Math.random()*100);r[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:G,start:`${d(d$1)}-${d(m+1)}-${d(h)}`,finish:`${d(d$1+1)}-${d(m+1)}-${d(h)}`,effortDriven:n%5===0}}return r}resetGrid1(){let a=this.columns1.slice();a.forEach(r=>r.hidden=!1),this.angularGrid1.slickGrid?.setColumns(a),this.angularGrid1.slickGrid?.autosizeColumns()}toggleDarkModeGrid1(){this._darkModeGrid1=!this._darkModeGrid1,this._darkModeGrid1?document.querySelector(`.grid-container1`)?.classList.add(`dark-mode`):document.querySelector(`.grid-container1`)?.classList.remove(`dark-mode`),this.angularGrid1.slickGrid?.setOptions({darkMode:this._darkModeGrid1})}static{this.ɵfac=function(r){return new(r||l)}}static{this.ɵcmp=$E({type:l,selectors:[[`ng-component`]],decls:68,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example01.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/getting-started/quick-start`,`target`,`_blank`],[1,`column`],[1,`mr-3`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[`data-test`,`reset-grid1`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-alert-rhombus-outline`],[1,`grid-container1`],[`gridId`,`grid1-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`,`containerClasses`],[1,`grid-container`],[`gridId`,`grid1-2`,3,`columns`,`options`,`dataset`]],template:function(r,n){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 1: Basic Grids
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
  `),Rc(),sD(12,`
  `),yi(13,`div`,4),sD(14,`
    Basic Grids with fixed sizes (800 x 225) set by "gridHeight" & "gridWidth"
    `),yi(15,`ul`),sD(16,`
      `),yi(17,`li`)(18,`a`,5),sD(19,`Wiki HOWTO link`),Rc()(),sD(20,`
    `),Rc(),sD(21,`
  `),Rc(),sD(22,`

  `),yi(23,`h3`),sD(24,`
    `),yi(25,`div`,6),sD(26,`
      `),yi(27,`span`,7),sD(28,`Grid 1`),Rc(),sD(29,`
      `),yi(30,`button`,8),bp(`click`,function(){return n.toggleDarkModeGrid1()}),sD(31,`
        `),Ip(32,`i`,9),sD(33,`
        `),yi(34,`span`),sD(35,`Toggle Dark Mode`),Rc(),sD(36,`
      `),Rc(),sD(37,`
      `),yi(38,`button`,10),bp(`click`,function(){return n.resetGrid1()}),sD(39,`
        `),Ip(40,`span`,11),sD(41,`
        `),yi(42,`span`),sD(43,`Reset Grid (display all columns)`),Rc(),sD(44,`
      `),Rc(),sD(45,`
    `),Rc(),sD(46,`
  `),Rc(),sD(47,`

  `),yi(48,`div`,12),sD(49,`
    `),yi(50,`angular-slickgrid`,13),bp(`onAngularGridCreated`,function(m){return n.angularGridReady1(m.detail)}),sD(51,`
    `),Rc(),sD(52,`
  `),Rc(),sD(53,`

  `),Ip(54,`hr`),sD(55,`

  `),yi(56,`h3`),sD(57,`Grid 2 `),yi(58,`small`),sD(59,`(with local Pagination)`),Rc()(),sD(60,`
  `),yi(61,`div`,14),sD(62,`
    `),yi(63,`angular-slickgrid`,15),sD(64,` `),Rc(),sD(65,`
  `),Rc(),sD(66,`
`),Rc(),sD(67,`
`)),r&2&&(ly(50),Ep(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1)(`containerClasses`,n.grid1ContainerClasses),ly(13),Ep(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[_W],encapsulation:2})}}return l})();export{C as Example1Component};