import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,m as D,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{gt as q1,x as Iu}from"./chunk-C7G4ZLh2.js";import{S as re,t as Xe,x as W}from"./main-4YT7AQ4D.js";var E=`assets/data/customers_100.json`;var M=(()=>{class o{constructor(){this.http=D(Xe),this.hideSubTitle=!1}angularGrid2Ready(r){this.angularGrid2=r}ngOnInit(){this.defineGrid1(),this.defineGrid2(),this.dataset1=this.mockData(),this.http.get(E).subscribe((r=>this.dataset2=r))}defineGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100},{id:`start`,name:`Start`,field:`start`,minWidth:100},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableSorting:!0}}defineGrid2(){this.columns2=[{id:`name`,name:`Name`,field:`name`,filterable:!0,sortable:!0},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:Iu.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){let r=[];for(let a=0;a<1e3;a++){let n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);r[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*100)+``,percentComplete:v,start:`${l}/${d}/${n}`,finish:`${l}/${d}/${n}`,effortDriven:a%5===0}}return r}resizeGrid2(){this.angularGrid2.resizerService.resizeGrid(10)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=BI({type:o,selectors:[[`ng-component`]],decls:55,vars:7,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example22.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`heading`,`Javascript`,`id`,`javascript`,`data-test`,`javascript-tab`,3,`active`],[`gridId`,`grid1`,3,`columns`,`options`,`dataset`],[`heading`,`Http-Client`,`data-test`,`http-tab`,3,`selectTab`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(a,n){a&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 22: Grids in Bootstrap Tabs
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return n.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    This example demonstrate the creation of multiple grids in Bootstrap Tabs
    `),gi(20,`ol`),oD(21,`
      `),gi(22,`li`),oD(23,`Regular mocked data with JavaScript`),xc(),oD(24,`
      `),gi(25,`li`),oD(26,`Load dataset through Http-Client. Also note we need to call a "resizeGrid()" after focusing on this tab`),xc(),oD(27,`
    `),xc(),oD(28,`
  `),xc(),oD(29,`

  `),gi(30,`div`),oD(31,`
    `),gi(32,`tabset`),oD(33,`
      `),gi(34,`tab`,7),oD(35,`
        `),gi(36,`h4`),oD(37,`Grid 1 - Load Local Data`),xc(),oD(38,`
        `),gi(39,`angular-slickgrid`,8),oD(40,` `),xc(),oD(41,`
      `),xc(),oD(42,`
      `),gi(43,`tab`,9),Dp(`selectTab`,function(){return n.resizeGrid2()}),oD(44,`
        `),gi(45,`h4`),oD(46,`Grid 2 - Load a JSON dataset through Http-Client`),xc(),oD(47,`
        `),gi(48,`angular-slickgrid`,10),Dp(`onAngularGridCreated`,function(d){return n.angularGrid2Ready(d.detail)}),oD(49,`
        `),xc(),oD(50,`
      `),xc(),oD(51,`
    `),xc(),oD(52,`
  `),xc(),oD(53,`
`),xc(),oD(54,`
`)),a&2&&(av(34),gp(`active`,!0),av(5),gp(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),av(9),gp(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[W,re,q1],encapsulation:2})}}return o})();export{M as Example22Component};