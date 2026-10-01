import{$ as Mp,C as Ei,En as iD,_ as D,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp}from"./chunk-CtIlL7jI.js";import{Ot as xz,bt as rp}from"./chunk-C1NeHYCu.js";import{S as oe,n as ze,x as W}from"./main-JBJUR4DQ.js";var E=`assets/data/customers_100.json`;var M=(()=>{class o{constructor(){this.http=D(ze),this.hideSubTitle=!1}angularGrid2Ready(r){this.angularGrid2=r}ngOnInit(){this.defineGrid1(),this.defineGrid2(),this.dataset1=this.mockData(),this.http.get(E).subscribe((r=>this.dataset2=r))}defineGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100},{id:`start`,name:`Start`,field:`start`,minWidth:100},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableSorting:!0}}defineGrid2(){this.columns2=[{id:`name`,name:`Name`,field:`name`,filterable:!0,sortable:!0},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:rp.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){let r=[];for(let a=0;a<1e3;a++){let n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);r[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*100)+``,percentComplete:v,start:`${l}/${d}/${n}`,finish:`${l}/${d}/${n}`,effortDriven:a%5===0}}return r}resizeGrid2(){this.angularGrid2.resizerService.resizeGrid(10)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=BE({type:o,selectors:[[`ng-component`]],decls:55,vars:7,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example22.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`heading`,`Javascript`,`id`,`javascript`,`data-test`,`javascript-tab`,3,`active`],[`gridId`,`grid1`,3,`columns`,`options`,`dataset`],[`heading`,`Http-Client`,`data-test`,`http-tab`,3,`selectTab`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(a,n){a&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 22: Grids in Bootstrap Tabs
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return n.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    This example demonstrate the creation of multiple grids in Bootstrap Tabs
    `),Ei(20,`ol`),iD(21,`
      `),Ei(22,`li`),iD(23,`Regular mocked data with JavaScript`),Oc(),iD(24,`
      `),Ei(25,`li`),iD(26,`Load dataset through Http-Client. Also note we need to call a "resizeGrid()" after focusing on this tab`),Oc(),iD(27,`
    `),Oc(),iD(28,`
  `),Oc(),iD(29,`

  `),Ei(30,`div`),iD(31,`
    `),Ei(32,`tabset`),iD(33,`
      `),Ei(34,`tab`,7),iD(35,`
        `),Ei(36,`h4`),iD(37,`Grid 1 - Load Local Data`),Oc(),iD(38,`
        `),Ei(39,`angular-slickgrid`,8),iD(40,` `),Oc(),iD(41,`
      `),Oc(),iD(42,`
      `),Ei(43,`tab`,9),Mp(`selectTab`,function(){return n.resizeGrid2()}),iD(44,`
        `),Ei(45,`h4`),iD(46,`Grid 2 - Load a JSON dataset through Http-Client`),Oc(),iD(47,`
        `),Ei(48,`angular-slickgrid`,10),Mp(`onAngularGridCreated`,function(d){return n.angularGrid2Ready(d.detail)}),iD(49,`
        `),Oc(),iD(50,`
      `),Oc(),iD(51,`
    `),Oc(),iD(52,`
  `),Oc(),iD(53,`
`),Oc(),iD(54,`
`)),a&2&&(ay(34),Dp(`active`,!0),ay(5),Dp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),ay(9),Dp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[W,oe,xz],encapsulation:2})}}return o})();export{M as Example22Component};