import{S as oe,n as ze,x as W}from"./main-KCATS47T.js";import{Ct as ku,V as R$}from"./chunk-Lo0QQjTd.js";import{X as Lc,dr as uD,en as _p,f as D,in as bp,k as GE,o as Ap,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var E=`assets/data/customers_100.json`;var M=(()=>{class o{constructor(){this.http=D(ze),this.hideSubTitle=!1}angularGrid2Ready(r){this.angularGrid2=r}ngOnInit(){this.defineGrid1(),this.defineGrid2(),this.dataset1=this.mockData(),this.http.get(E).subscribe((r=>this.dataset2=r))}defineGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100},{id:`start`,name:`Start`,field:`start`,minWidth:100},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableSorting:!0}}defineGrid2(){this.columns2=[{id:`name`,name:`Name`,field:`name`,filterable:!0,sortable:!0},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:ku.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){let r=[];for(let a=0;a<1e3;a++){let n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);r[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*100)+``,percentComplete:v,start:`${l}/${d}/${n}`,finish:`${l}/${d}/${n}`,effortDriven:a%5===0}}return r}resizeGrid2(){this.angularGrid2.resizerService.resizeGrid(10)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=GE({type:o,selectors:[[`ng-component`]],decls:55,vars:7,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example22.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`heading`,`Javascript`,`id`,`javascript`,`data-test`,`javascript-tab`,3,`active`],[`gridId`,`grid1`,3,`columns`,`options`,`dataset`],[`heading`,`Http-Client`,`data-test`,`http-tab`,3,`selectTab`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(a,n){a&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 22: Grids in Bootstrap Tabs
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return n.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    This example demonstrate the creation of multiple grids in Bootstrap Tabs
    `),vi(20,`ol`),uD(21,`
      `),vi(22,`li`),uD(23,`Regular mocked data with JavaScript`),Lc(),uD(24,`
      `),vi(25,`li`),uD(26,`Load dataset through Http-Client. Also note we need to call a "resizeGrid()" after focusing on this tab`),Lc(),uD(27,`
    `),Lc(),uD(28,`
  `),Lc(),uD(29,`

  `),vi(30,`div`),uD(31,`
    `),vi(32,`tabset`),uD(33,`
      `),vi(34,`tab`,7),uD(35,`
        `),vi(36,`h4`),uD(37,`Grid 1 - Load Local Data`),Lc(),uD(38,`
        `),vi(39,`angular-slickgrid`,8),uD(40,` `),Lc(),uD(41,`
      `),Lc(),uD(42,`
      `),vi(43,`tab`,9),Ap(`selectTab`,function(){return n.resizeGrid2()}),uD(44,`
        `),vi(45,`h4`),uD(46,`Grid 2 - Load a JSON dataset through Http-Client`),Lc(),uD(47,`
        `),vi(48,`angular-slickgrid`,10),Ap(`onAngularGridCreated`,function(d){return n.angularGrid2Ready(d.detail)}),uD(49,`
        `),Lc(),uD(50,`
      `),Lc(),uD(51,`
    `),Lc(),uD(52,`
  `),Lc(),uD(53,`
`),Lc(),uD(54,`
`)),a&2&&(fv(34),bp(`active`,!0),fv(5),bp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),fv(9),bp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[W,oe,R$],encapsulation:2})}}return o})();export{M as Example22Component};