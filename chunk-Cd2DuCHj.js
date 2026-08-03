import{Fn as mp,Hn as oD,L as Lc,Wt as av,Z as NE,dn as gi,er as sp,g as Dp,hr as wp,l as BI,mt as Rc,o as Ac,on as fE,pn as gp,tn as dE,yr as xc,zt as _D}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1}from"./chunk-C7G4ZLh2.js";function D(e,b){if(e&1&&(oD(0,`
      `),Ac(1,`div`),oD(2),Rc(),oD(3,`
    `)),e&2){let o=NE();av(2),Lc(`You've clicked me `,o.clickedTimes,` time(s)`)}}function G(e,b){e&1&&(oD(0,`
      `),gi(1,`h3`),oD(2,`Grid with header and footer slot`),xc(),oD(3,`
    `))}function F(e,b){e&1&&(oD(0,`
      `),mp(1,`custom-footer`),oD(2,`
    `))}var w=995;var I=(()=>{class e{constructor(){this.clickedTimes=0}clickMe(){this.clickedTimes++}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=BI({type:e,selectors:[[`custom-footer`]],decls:4,vars:1,consts:[[3,`click`]],template:function(i,n){i&1&&(Ac(0,`button`,0),wp(`click`,function(){return n.clickMe()}),oD(1,`I'm a button from an Angular component (click me)`),Rc(),oD(2,`
    `),dE(3,D,4,1)),i&2&&(av(3),fE(n.clickedTimes?3:-1))},encapsulation:2})}}return e})();var z=(()=>{class e{constructor(){this.columns=[],this.hideSubTitle=!1}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.dataset=this.mockData(w)}mockData(o){let i=[];for(let n=0;n<o;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);i[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:y,start:new Date(l,d+1,_),finish:new Date(l+1,d+1,_),effortDriven:n%5===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=BI({type:e,selectors:[[`ng-component`]],decls:37,vars:3,consts:[[`slickgridHeader`,``],[`slickgridFooter`,``],[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(i,n){i&1&&(gi(0,`div`,2),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 29: Custom header & footer Templates
    `),gi(4,`span`,3),oD(5,`
      `),gi(6,`a`,4),oD(7,`
        `),mp(8,`span`,5),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,6),Dp(`click`,function(){return n.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,7),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,8),oD(19,`
    Basic Grid with templates for custom headers and footers
    `),gi(20,`ul`),oD(21,`
      `),gi(22,`li`),oD(23,`Pass in custom templates to be rendered at predefined header and footer destinations`),xc(),oD(24,`
    `),xc(),oD(25,`
  `),xc(),oD(26,`

  `),gi(27,`angular-slickgrid`,9),Dp(`onAngularGridCreated`,function(d){return n.angularGridReady(d.detail)}),oD(28,`
    `),sp(29,G,4,0,`ng-template`,null,0,_D),oD(31,`

    `),sp(32,F,3,0,`ng-template`,null,1,_D),oD(34,`
  `),xc(),oD(35,`
`),xc(),oD(36,`
`)),i&2&&(av(27),gp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[q1,I],encapsulation:2})}}return e})();export{z as Example29Component};