import{Da as w,za as C}from"./chunk-IBXCHNN7.js";import{$ as p,Aa as m,Kb as e,Mb as y,Pa as f,Ua as h,_ as u,bc as _,db as E,eb as S,ib as v,jb as a,kb as r,lb as c,mb as g,nb as x,sb as T,vb as b,wb as M,xb as D}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";function F(t,k){if(t&1&&(e(0,`
      `),g(1,"div"),e(2),x(),e(3,`
    `)),t&2){let o=D();m(2),y("You've clicked me ",o.clickedTimes," time(s)")}}function I(t,k){t&1&&(e(0,`
      `),a(1,"h3"),e(2,"Grid with header and footer slot"),r(),e(3,`
    `))}function A(t,k){t&1&&(e(0,`
      `),c(1,"custom-footer"),e(2,`
    `))}var R=995,V=(()=>{class t{constructor(){this.clickedTimes=0}clickMe(){this.clickedTimes++}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["custom-footer"]],decls:4,vars:1,consts:[[3,"click"]],template:function(n,i){n&1&&(g(0,"button",0),M("click",function(){return i.clickMe()}),e(1,"I'm a button from an Angular component (click me)"),x(),e(2,`
    `),E(3,F,4,1)),n&2&&(m(3),S(i.clickedTimes?3:-1))},encapsulation:2})}}return t})(),B=(()=>{class t{constructor(){this.columnDefinitions=[],this.hideSubTitle=!1}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0},{id:"start",name:"Start",field:"start",formatter:C.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:C.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0}],this.gridOptions={enableAutoResize:!1,enableSorting:!0,gridHeight:225,gridWidth:800},this.dataset=this.mockData(R)}mockData(o){let n=[];for(let i=0;i<o;i++){let l=2e3+Math.floor(Math.random()*10),s=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),G=Math.round(Math.random()*100);n[i]={id:i,title:"Task "+i,duration:Math.round(Math.random()*100)+"",percentComplete:G,start:new Date(l,s+1,d),finish:new Date(l+1,s+1,d),effortDriven:i%5===0}}return n}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ng-component"]],decls:37,vars:3,consts:[["slickgridHeader",""],["slickgridFooter",""],["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset"]],template:function(n,i){if(n&1){let l=T();a(0,"div",2),e(1,`
  `),a(2,"h2"),e(3,`
    Example 29: Custom header & footer Templates
    `),a(4,"span",3),e(5,`
      `),a(6,"a",4),e(7,`
        `),c(8,"span",5),e(9,` code
      `),r(),e(10,`
    `),r(),e(11,`
    `),a(12,"button",6),b("click",function(){return u(l),p(i.toggleSubTitle())}),e(13,`
      `),c(14,"span",7),e(15,`
    `),r(),e(16,`
  `),r(),e(17,`

  `),a(18,"div",8),e(19,`
    Basic Grid with templates for custom headers and footers
    `),a(20,"ul"),e(21,`
      `),a(22,"li"),e(23,"Pass in custom templates to be rendered at predefined header and footer destinations"),r(),e(24,`
    `),r(),e(25,`
  `),r(),e(26,`

  `),a(27,"angular-slickgrid",9),b("onAngularGridCreated",function(d){return u(l),p(i.angularGridReady(d.detail))}),e(28,`
    `),h(29,I,4,0,"ng-template",null,0,_),e(31,`

    `),h(32,A,3,0,"ng-template",null,1,_),e(34,`
  `),r(),e(35,`
`),r(),e(36,`
`)}n&2&&(m(27),v("columns",i.columnDefinitions)("options",i.gridOptions)("dataset",i.dataset))},dependencies:[w,V],encapsulation:2})}}return t})();export{V as CustomFooterComponent,B as Example29Component};
