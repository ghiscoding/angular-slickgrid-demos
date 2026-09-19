import{F as Ip,Pn as ly,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,xt as T}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip}from"./chunk-DLuyVhQJ.js";import{S as re,n as ze,x as W}from"./main-CCTR2RMO.js";var E=`assets/data/customers_100.json`;var M=(()=>{class o{constructor(){this.http=T(ze),this.hideSubTitle=!1}angularGrid2Ready(r){this.angularGrid2=r}ngOnInit(){this.defineGrid1(),this.defineGrid2(),this.dataset1=this.mockData(),this.http.get(E).subscribe((r=>this.dataset2=r))}defineGrid1(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100},{id:`start`,name:`Start`,field:`start`,minWidth:100},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableSorting:!0}}defineGrid2(){this.columns2=[{id:`name`,name:`Name`,field:`name`,filterable:!0,sortable:!0},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){let r=[];for(let a=0;a<1e3;a++){let n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);r[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*100)+``,percentComplete:v,start:`${l}/${d}/${n}`,finish:`${l}/${d}/${n}`,effortDriven:a%5===0}}return r}resizeGrid2(){this.angularGrid2.resizerService.resizeGrid(10)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||o)}}static{this.ɵcmp=$E({type:o,selectors:[[`ng-component`]],decls:55,vars:7,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example22.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`heading`,`Javascript`,`id`,`javascript`,`data-test`,`javascript-tab`,3,`active`],[`gridId`,`grid1`,3,`columns`,`options`,`dataset`],[`heading`,`Http-Client`,`data-test`,`http-tab`,3,`selectTab`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(a,n){a&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 22: Grids in Bootstrap Tabs
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return n.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    This example demonstrate the creation of multiple grids in Bootstrap Tabs
    `),yi(20,`ol`),sD(21,`
      `),yi(22,`li`),sD(23,`Regular mocked data with JavaScript`),Rc(),sD(24,`
      `),yi(25,`li`),sD(26,`Load dataset through Http-Client. Also note we need to call a "resizeGrid()" after focusing on this tab`),Rc(),sD(27,`
    `),Rc(),sD(28,`
  `),Rc(),sD(29,`

  `),yi(30,`div`),sD(31,`
    `),yi(32,`tabset`),sD(33,`
      `),yi(34,`tab`,7),sD(35,`
        `),yi(36,`h4`),sD(37,`Grid 1 - Load Local Data`),Rc(),sD(38,`
        `),yi(39,`angular-slickgrid`,8),sD(40,` `),Rc(),sD(41,`
      `),Rc(),sD(42,`
      `),yi(43,`tab`,9),bp(`selectTab`,function(){return n.resizeGrid2()}),sD(44,`
        `),yi(45,`h4`),sD(46,`Grid 2 - Load a JSON dataset through Http-Client`),Rc(),sD(47,`
        `),yi(48,`angular-slickgrid`,10),bp(`onAngularGridCreated`,function(d){return n.angularGrid2Ready(d.detail)}),sD(49,`
        `),Rc(),sD(50,`
      `),Rc(),sD(51,`
    `),Rc(),sD(52,`
  `),Rc(),sD(53,`
`),Rc(),sD(54,`
`)),a&2&&(ly(34),Ep(`active`,!0),ly(5),Ep(`columns`,n.columns1)(`options`,n.gridOptions1)(`dataset`,n.dataset1),ly(9),Ep(`columns`,n.columns2)(`options`,n.gridOptions2)(`dataset`,n.dataset2))},dependencies:[W,re,_W],encapsulation:2})}}return o})();export{M as Example22Component};