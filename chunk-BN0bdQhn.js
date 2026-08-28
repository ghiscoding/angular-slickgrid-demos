import{Dt as UE,En as iD,J as MD,Kn as mp,Qn as pI,Sr as wp,Tt as Tp,Wn as mi,_n as fI,bt as SI,dt as Pc,en as ap,hr as vp,ln as cy,o as Ac,st as Oc,yt as Rc}from"./chunk-06EGdSfW.js";import{H as _W,mt as nk}from"./chunk-CAMk6vEo.js";function D(e,b){if(e&1&&(iD(0,`
      `),Oc(1,`div`),iD(2),Rc(),iD(3,`
    `)),e&2){let o=SI();cy(2),Pc(`You've clicked me `,o.clickedTimes,` time(s)`)}}function G(e,b){e&1&&(iD(0,`
      `),mi(1,`h3`),iD(2,`Grid with header and footer slot`),Ac(),iD(3,`
    `))}function F(e,b){e&1&&(iD(0,`
      `),vp(1,`custom-footer`),iD(2,`
    `))}var w=995;var I=(()=>{class e{constructor(){this.clickedTimes=0}clickMe(){this.clickedTimes++}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=UE({type:e,selectors:[[`custom-footer`]],decls:4,vars:1,consts:[[3,`click`]],template:function(i,n){i&1&&(Oc(0,`button`,0),wp(`click`,function(){return n.clickMe()}),iD(1,`I'm a button from an Angular component (click me)`),Rc(),iD(2,`
    `),fI(3,D,4,1)),i&2&&(cy(3),pI(n.clickedTimes?3:-1))},encapsulation:2})}}return e})();var z=(()=>{class e{constructor(){this.columns=[],this.hideSubTitle=!1}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.dataset=this.mockData(w)}mockData(o){let i=[];for(let n=0;n<o;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);i[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:y,start:new Date(l,d+1,_),finish:new Date(l+1,d+1,_),effortDriven:n%5===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=UE({type:e,selectors:[[`ng-component`]],decls:37,vars:3,consts:[[`slickgridHeader`,``],[`slickgridFooter`,``],[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(i,n){i&1&&(mi(0,`div`,2),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 29: Custom header & footer Templates
    `),mi(4,`span`,3),iD(5,`
      `),mi(6,`a`,4),iD(7,`
        `),vp(8,`span`,5),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,6),Tp(`click`,function(){return n.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,7),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,8),iD(19,`
    Basic Grid with templates for custom headers and footers
    `),mi(20,`ul`),iD(21,`
      `),mi(22,`li`),iD(23,`Pass in custom templates to be rendered at predefined header and footer destinations`),Ac(),iD(24,`
    `),Ac(),iD(25,`
  `),Ac(),iD(26,`

  `),mi(27,`angular-slickgrid`,9),Tp(`onAngularGridCreated`,function(d){return n.angularGridReady(d.detail)}),iD(28,`
    `),ap(29,G,4,0,`ng-template`,null,0,MD),iD(31,`

    `),ap(32,F,3,0,`ng-template`,null,1,MD),iD(34,`
  `),Ac(),iD(35,`
`),Ac(),iD(36,`
`)),i&2&&(cy(27),mp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W,I],encapsulation:2})}}return e})();export{z as Example29Component};