import {X as XN,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,ap as Jf,W as Wy,a as ap,C as Cc,al as hp,b as bc,Y as YI,K as KI,h as pE,i as Nc,au as fD}from'./main-MYLFMRPB.js';function D(e,b){if(e&1&&(qE(0,`
      `),Cc(1,"div"),qE(2),bc(),qE(3,`
    `)),e&2){let o=pE();Wy(2),Nc("You've clicked me ",o.clickedTimes," time(s)");}}function G(e,b){e&1&&(qE(0,`
      `),ui(1,"h3"),qE(2,"Grid with header and footer slot"),Tc(),qE(3,`
    `));}function F(e,b){e&1&&(qE(0,`
      `),cp(1,"custom-footer"),qE(2,`
    `));}var w=995,I=(()=>{class e{constructor(){this.clickedTimes=0;}clickMe(){this.clickedTimes++;}static{this.\u0275fac=function(i){return new(i||e)};}static{this.\u0275cmp=_I({type:e,selectors:[["custom-footer"]],decls:4,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(Cc(0,"button",0),hp("click",function(){return n.clickMe()}),qE(1,"I'm a button from an Angular component (click me)"),bc(),qE(2,`
    `),YI(3,D,4,1)),i&2&&(Wy(3),KI(n.clickedTimes?3:-1));},encapsulation:2});}}return e})(),z=(()=>{class e{constructor(){this.columns=[],this.hideSubTitle=false;}angularGridReady(o){this.angularGrid=o;}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true},{id:"%",name:"% Complete",field:"percentComplete",sortable:true},{id:"start",name:"Start",field:"start",formatter:XN.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true}],this.gridOptions={enableAutoResize:false,enableSorting:true,gridHeight:225,gridWidth:800},this.dataset=this.mockData(w);}mockData(o){let i=[];for(let n=0;n<o;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:y,start:new Date(l,d+1,_),finish:new Date(l+1,d+1,_),effortDriven:n%5===0};}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(i){return new(i||e)};}static{this.\u0275cmp=_I({type:e,selectors:[["ng-component"]],decls:37,vars:3,consts:[["slickgridHeader",""],["slickgridFooter",""],["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset"]],template:function(i,n){i&1&&(ui(0,"div",2),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 29: Custom header & footer Templates
    `),ui(4,"span",3),qE(5,`
      `),ui(6,"a",4),qE(7,`
        `),cp(8,"span",5),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",6),pp("click",function(){return n.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",7),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",8),qE(19,`
    Basic Grid with templates for custom headers and footers
    `),ui(20,"ul"),qE(21,`
      `),ui(22,"li"),qE(23,"Pass in custom templates to be rendered at predefined header and footer destinations"),Tc(),qE(24,`
    `),Tc(),qE(25,`
  `),Tc(),qE(26,`

  `),ui(27,"angular-slickgrid",9),pp("onAngularGridCreated",function(d){return n.angularGridReady(d.detail)}),qE(28,`
    `),Jf(29,G,4,0,"ng-template",null,0,fD),qE(31,`

    `),Jf(32,F,3,0,"ng-template",null,1,fD),qE(34,`
  `),Tc(),qE(35,`
`),Tc(),qE(36,`
`)),i&2&&(Wy(27),ap("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset));},dependencies:[j1,I],encapsulation:2});}}return e})();export{I as CustomFooterComponent,z as Example29Component};