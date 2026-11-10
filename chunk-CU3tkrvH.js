import{V as R$,rt as ZR}from"./chunk-Lo0QQjTd.js";import{Gn as mI,In as kI,Kn as mp,P as Hc,T as Fc,X as Lc,_t as Pc,dr as uD,dt as OD,en as _p,in as bp,k as GE,o as Ap,pt as Op,vr as vI,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";function D(e,b){if(e&1&&(uD(0,`
      `),Pc(1,`div`),uD(2),Fc(),uD(3,`
    `)),e&2){let o=kI();fv(2),Hc(`You've clicked me `,o.clickedTimes,` time(s)`)}}function G(e,b){e&1&&(uD(0,`
      `),vi(1,`h3`),uD(2,`Grid with header and footer slot`),Lc(),uD(3,`
    `))}function F(e,b){e&1&&(uD(0,`
      `),_p(1,`custom-footer`),uD(2,`
    `))}var w=995;var I=(()=>{class e{constructor(){this.clickedTimes=0}clickMe(){this.clickedTimes++}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=GE({type:e,selectors:[[`custom-footer`]],decls:4,vars:1,consts:[[3,`click`]],template:function(i,n){i&1&&(Pc(0,`button`,0),Op(`click`,function(){return n.clickMe()}),uD(1,`I'm a button from an Angular component (click me)`),Fc(),uD(2,`
    `),mI(3,D,4,1)),i&2&&(fv(3),vI(n.clickedTimes?3:-1))},encapsulation:2})}}return e})();var z=(()=>{class e{constructor(){this.columns=[],this.hideSubTitle=!1}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:ZR.dateIso},{id:`finish`,name:`Finish`,field:`finish`,formatter:ZR.dateIso},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.dataset=this.mockData(w)}mockData(o){let i=[];for(let n=0;n<o;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);i[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:y,start:new Date(l,d+1,_),finish:new Date(l+1,d+1,_),effortDriven:n%5===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=GE({type:e,selectors:[[`ng-component`]],decls:37,vars:3,consts:[[`slickgridHeader`,``],[`slickgridFooter`,``],[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(i,n){i&1&&(vi(0,`div`,2),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 29: Custom header & footer Templates
    `),vi(4,`span`,3),uD(5,`
      `),vi(6,`a`,4),uD(7,`
        `),_p(8,`span`,5),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,6),Ap(`click`,function(){return n.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,7),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,8),uD(19,`
    Basic Grid with templates for custom headers and footers
    `),vi(20,`ul`),uD(21,`
      `),vi(22,`li`),uD(23,`Pass in custom templates to be rendered at predefined header and footer destinations`),Lc(),uD(24,`
    `),Lc(),uD(25,`
  `),Lc(),uD(26,`

  `),vi(27,`angular-slickgrid`,9),Ap(`onAngularGridCreated`,function(d){return n.angularGridReady(d.detail)}),uD(28,`
    `),mp(29,G,4,0,`ng-template`,null,0,OD),uD(31,`

    `),mp(32,F,3,0,`ng-template`,null,1,OD),uD(34,`
  `),Lc(),uD(35,`
`),Lc(),uD(36,`
`)),i&2&&(fv(27),bp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[R$,I],encapsulation:2})}}return e})();export{z as Example29Component};