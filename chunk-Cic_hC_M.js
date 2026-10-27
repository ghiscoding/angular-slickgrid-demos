import{In as lD,a as Ap,mn as dv,on as bp,p as D,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,l as D1}from"./chunk-Dk5kBPyv.js";import{S as oe,n as ze,x as W}from"./main-BEH6XCIK.js";var E=`assets/data/customers_100.json`;var M=(()=>{class o{constructor(){this.http=D(ze),this.hideSubTitle=!1}angularGrid2Ready(r){this.angularGrid2=r}ngOnInit(){this.defineGrid1(),this.defineGrid2(),this.dataset1=this.mockData(),this.http.get(E).subscribe((r=>this.dataset2=r))}defineGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100},{id:`start`,name:`Start`,field:`start`,minWidth:100},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableSorting:!0}}defineGrid2(){this.columns2=[{id:`name`,name:`Name`,field:`name`,filterable:!0,sortable:!0},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:uu.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){let r=[];for(let a=0;a<1e3;a++){let n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);r[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*100)+``,percentComplete:v,start:`${l}/${d}/${n}`,finish:`${l}/${d}/${n}`,effortDriven:a%5===0}}return r}resizeGrid2(){this.angularGrid2.resizerService.resizeGrid(10)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=WE({type:o,selectors:[[`ng-component`]],decls:55,vars:7,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example22.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`heading`,`Javascript`,`id`,`javascript`,`data-test`,`javascript-tab`,3,`active`],[`gridId`,`grid1`,3,`columns`,`options`,`dataset`],[`heading`,`Http-Client`,`data-test`,`http-tab`,3,`selectTab`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(a,n){a&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 22: Grids in Bootstrap Tabs
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return n.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    This example demonstrate the creation of multiple grids in Bootstrap Tabs
    `),vi(20,`ol`),lD(21,`
      `),vi(22,`li`),lD(23,`Regular mocked data with JavaScript`),Rc(),lD(24,`
      `),vi(25,`li`),lD(26,`Load dataset through Http-Client. Also note we need to call a "resizeGrid()" after focusing on this tab`),Rc(),lD(27,`
    `),Rc(),lD(28,`
  `),Rc(),lD(29,`

  `),vi(30,`div`),lD(31,`
    `),vi(32,`tabset`),lD(33,`
      `),vi(34,`tab`,7),lD(35,`
        `),vi(36,`h4`),lD(37,`Grid 1 - Load Local Data`),Rc(),lD(38,`
        `),vi(39,`angular-slickgrid`,8),lD(40,` `),Rc(),lD(41,`
      `),Rc(),lD(42,`
      `),vi(43,`tab`,9),Ap(`selectTab`,function(){return n.resizeGrid2()}),lD(44,`
        `),vi(45,`h4`),lD(46,`Grid 2 - Load a JSON dataset through Http-Client`),Rc(),lD(47,`
        `),vi(48,`angular-slickgrid`,10),Ap(`onAngularGridCreated`,function(d){return n.angularGrid2Ready(d.detail)}),lD(49,`
        `),Rc(),lD(50,`
      `),Rc(),lD(51,`
    `),Rc(),lD(52,`
  `),Rc(),lD(53,`
`),Rc(),lD(54,`
`)),a&2&&(dv(34),bp(`active`,!0),dv(5),bp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),dv(9),bp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[W,oe,D1],encapsulation:2})}}return o})();export{M as Example22Component};