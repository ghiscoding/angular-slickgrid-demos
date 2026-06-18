import {q as qN,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,ap as Kf,e as Uy,g as sp,C as Cc,al as pp,b as bc,z as zI,Q as QI,n as uE,N as Nc,au as lD}from'./main-C6PQTYH6.js';function D(e,b){if(e&1&&(BE(0,`
      `),Cc(1,"div"),BE(2),bc(),BE(3,`
    `)),e&2){let o=uE();Uy(2),Nc("You've clicked me ",o.clickedTimes," time(s)");}}function G(e,b){e&1&&(BE(0,`
      `),ui(1,"h3"),BE(2,"Grid with header and footer slot"),Tc(),BE(3,`
    `));}function F(e,b){e&1&&(BE(0,`
      `),ap(1,"custom-footer"),BE(2,`
    `));}var w=995,I=(()=>{class e{constructor(){this.clickedTimes=0;}clickMe(){this.clickedTimes++;}static{this.\u0275fac=function(i){return new(i||e)};}static{this.\u0275cmp=TI({type:e,selectors:[["custom-footer"]],decls:4,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(Cc(0,"button",0),pp("click",function(){return n.clickMe()}),BE(1,"I'm a button from an Angular component (click me)"),bc(),BE(2,`
    `),zI(3,D,4,1)),i&2&&(Uy(3),QI(n.clickedTimes?3:-1));},encapsulation:2});}}return e})(),z=(()=>{class e{constructor(){this.columns=[],this.hideSubTitle=false;}angularGridReady(o){this.angularGrid=o;}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true},{id:"%",name:"% Complete",field:"percentComplete",sortable:true},{id:"start",name:"Start",field:"start",formatter:qN.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:qN.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true}],this.gridOptions={enableAutoResize:false,enableSorting:true,gridHeight:225,gridWidth:800},this.dataset=this.mockData(w);}mockData(o){let i=[];for(let n=0;n<o;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:y,start:new Date(l,d+1,_),finish:new Date(l+1,d+1,_),effortDriven:n%5===0};}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(i){return new(i||e)};}static{this.\u0275cmp=TI({type:e,selectors:[["ng-component"]],decls:37,vars:3,consts:[["slickgridHeader",""],["slickgridFooter",""],["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset"]],template:function(i,n){i&1&&(ui(0,"div",2),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 29: Custom header & footer Templates
    `),ui(4,"span",3),BE(5,`
      `),ui(6,"a",4),BE(7,`
        `),ap(8,"span",5),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",6),fp("click",function(){return n.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",7),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",8),BE(19,`
    Basic Grid with templates for custom headers and footers
    `),ui(20,"ul"),BE(21,`
      `),ui(22,"li"),BE(23,"Pass in custom templates to be rendered at predefined header and footer destinations"),Tc(),BE(24,`
    `),Tc(),BE(25,`
  `),Tc(),BE(26,`

  `),ui(27,"angular-slickgrid",9),fp("onAngularGridCreated",function(d){return n.angularGridReady(d.detail)}),BE(28,`
    `),Kf(29,G,4,0,"ng-template",null,0,lD),BE(31,`

    `),Kf(32,F,3,0,"ng-template",null,1,lD),BE(34,`
  `),Tc(),BE(35,`
`),Tc(),BE(36,`
`)),i&2&&(Uy(27),sp("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset));},dependencies:[U1,I],encapsulation:2});}}return e})();export{I as CustomFooterComponent,z as Example29Component};