import{Da as M,za as x}from"./chunk-V3K67AAF.js";import{Jb as t,Lb as T,Oa as c,Ta as u,ac as g,cb as k,db as C,hb as E,ib as a,jb as r,kb as s,lb as p,mb as f,ub as h,vb as S,wb as v,za as m}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";function D(e,b){if(e&1&&(t(0,`
      `),p(1,"div"),t(2),f(),t(3,`
    `)),e&2){let o=v();m(2),T("You've clicked me ",o.clickedTimes," time(s)")}}function G(e,b){e&1&&(t(0,`
      `),a(1,"h3"),t(2,"Grid with header and footer slot"),r(),t(3,`
    `))}function F(e,b){e&1&&(t(0,`
      `),s(1,"custom-footer"),t(2,`
    `))}var w=995,I=(()=>{class e{constructor(){this.clickedTimes=0}clickMe(){this.clickedTimes++}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["custom-footer"]],decls:4,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(p(0,"button",0),S("click",function(){return n.clickMe()}),t(1,"I'm a button from an Angular component (click me)"),f(),t(2,`
    `),k(3,D,4,1)),i&2&&(m(3),C(n.clickedTimes?3:-1))},encapsulation:2})}}return e})(),z=(()=>{class e{constructor(){this.columns=[],this.hideSubTitle=!1}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0},{id:"start",name:"Start",field:"start",formatter:x.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:x.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.dataset=this.mockData(w)}mockData(o){let i=[];for(let n=0;n<o;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:y,start:new Date(l,d+1,_),finish:new Date(l+1,d+1,_),effortDriven:n%5===0}}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["ng-component"]],decls:37,vars:3,consts:[["slickgridHeader",""],["slickgridFooter",""],["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset"]],template:function(i,n){i&1&&(a(0,"div",2),t(1,`
  `),a(2,"h2"),t(3,`
    Example 29: Custom header & footer Templates
    `),a(4,"span",3),t(5,`
      `),a(6,"a",4),t(7,`
        `),s(8,"span",5),t(9,` code
      `),r(),t(10,`
    `),r(),t(11,`
    `),a(12,"button",6),h("click",function(){return n.toggleSubTitle()}),t(13,`
      `),s(14,"span",7),t(15,`
    `),r(),t(16,`
  `),r(),t(17,`

  `),a(18,"div",8),t(19,`
    Basic Grid with templates for custom headers and footers
    `),a(20,"ul"),t(21,`
      `),a(22,"li"),t(23,"Pass in custom templates to be rendered at predefined header and footer destinations"),r(),t(24,`
    `),r(),t(25,`
  `),r(),t(26,`

  `),a(27,"angular-slickgrid",9),h("onAngularGridCreated",function(d){return n.angularGridReady(d.detail)}),t(28,`
    `),u(29,G,4,0,"ng-template",null,0,g),t(31,`

    `),u(32,F,3,0,"ng-template",null,1,g),t(34,`
  `),r(),t(35,`
`),r(),t(36,`
`)),i&2&&(m(27),E("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset))},dependencies:[M,I],encapsulation:2})}}return e})();export{I as CustomFooterComponent,z as Example29Component};
