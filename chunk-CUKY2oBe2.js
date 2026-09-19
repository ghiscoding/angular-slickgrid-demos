import{An as kc,En as jc,F as Ip,Jt as _p,Kn as pI,Pn as ly,W as Lc,b as Ep,gt as SD,hr as xI,pt as Rc,rn as bp,sr as up,t as $E,tr as sD,vn as hI,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W,ht as nk}from"./chunk-DLuyVhQJ.js";function D(e,b){if(e&1&&(sD(0,`
      `),kc(1,`div`),sD(2),Lc(),sD(3,`
    `)),e&2){let o=xI();ly(2),jc(`You've clicked me `,o.clickedTimes,` time(s)`)}}function G(e,b){e&1&&(sD(0,`
      `),yi(1,`h3`),sD(2,`Grid with header and footer slot`),Rc(),sD(3,`
    `))}function F(e,b){e&1&&(sD(0,`
      `),Ip(1,`custom-footer`),sD(2,`
    `))}var w=995;var I=(()=>{class e{constructor(){this.clickedTimes=0}clickMe(){this.clickedTimes++}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=$E({type:e,selectors:[[`custom-footer`]],decls:4,vars:1,consts:[[3,`click`]],template:function(i,n){i&1&&(kc(0,`button`,0),_p(`click`,function(){return n.clickMe()}),sD(1,`I'm a button from an Angular component (click me)`),Lc(),sD(2,`
    `),pI(3,D,4,1)),i&2&&(ly(3),hI(n.clickedTimes?3:-1))},encapsulation:2})}}return e})();var z=(()=>{class e{constructor(){this.columns=[],this.hideSubTitle=!1}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.dataset=this.mockData(w)}mockData(o){let i=[];for(let n=0;n<o;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);i[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:y,start:new Date(l,d+1,_),finish:new Date(l+1,d+1,_),effortDriven:n%5===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=$E({type:e,selectors:[[`ng-component`]],decls:37,vars:3,consts:[[`slickgridHeader`,``],[`slickgridFooter`,``],[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(i,n){i&1&&(yi(0,`div`,2),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 29: Custom header & footer Templates
    `),yi(4,`span`,3),sD(5,`
      `),yi(6,`a`,4),sD(7,`
        `),Ip(8,`span`,5),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,6),bp(`click`,function(){return n.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,7),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,8),sD(19,`
    Basic Grid with templates for custom headers and footers
    `),yi(20,`ul`),sD(21,`
      `),yi(22,`li`),sD(23,`Pass in custom templates to be rendered at predefined header and footer destinations`),Rc(),sD(24,`
    `),Rc(),sD(25,`
  `),Rc(),sD(26,`

  `),yi(27,`angular-slickgrid`,9),bp(`onAngularGridCreated`,function(d){return n.angularGridReady(d.detail)}),sD(28,`
    `),up(29,G,4,0,`ng-template`,null,0,SD),sD(31,`

    `),up(32,F,3,0,`ng-template`,null,1,SD),sD(34,`
  `),Rc(),sD(35,`
`),Rc(),sD(36,`
`)),i&2&&(ly(27),Ep(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W,I],encapsulation:2})}}return e})();export{z as Example29Component};