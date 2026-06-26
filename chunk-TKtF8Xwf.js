import {X as XN,b as bI,j as j1,u as ui,U as UE,c as cp,T as Tc,p as pp,ap as Jf,W as Wy,d as ap,C as Cc,al as hp,a as bc,Z as ZI,Y as YI,i as fE,k as Nc,au as dD}from'./main-WTCLCICA.js';function D(e,b){if(e&1&&(UE(0,`
      `),Cc(1,"div"),UE(2),bc(),UE(3,`
    `)),e&2){let o=fE();Wy(2),Nc("You've clicked me ",o.clickedTimes," time(s)");}}function G(e,b){e&1&&(UE(0,`
      `),ui(1,"h3"),UE(2,"Grid with header and footer slot"),Tc(),UE(3,`
    `));}function F(e,b){e&1&&(UE(0,`
      `),cp(1,"custom-footer"),UE(2,`
    `));}var w=995,I=(()=>{class e{constructor(){this.clickedTimes=0;}clickMe(){this.clickedTimes++;}static{this.\u0275fac=function(i){return new(i||e)};}static{this.\u0275cmp=bI({type:e,selectors:[["custom-footer"]],decls:4,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(Cc(0,"button",0),hp("click",function(){return n.clickMe()}),UE(1,"I'm a button from an Angular component (click me)"),bc(),UE(2,`
    `),ZI(3,D,4,1)),i&2&&(Wy(3),YI(n.clickedTimes?3:-1));},encapsulation:2});}}return e})(),z=(()=>{class e{constructor(){this.columns=[],this.hideSubTitle=false;}angularGridReady(o){this.angularGrid=o;}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true},{id:"%",name:"% Complete",field:"percentComplete",sortable:true},{id:"start",name:"Start",field:"start",formatter:XN.dateIso},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true}],this.gridOptions={enableAutoResize:false,enableSorting:true,gridHeight:225,gridWidth:800},this.dataset=this.mockData(w);}mockData(o){let i=[];for(let n=0;n<o;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);i[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:y,start:new Date(l,d+1,_),finish:new Date(l+1,d+1,_),effortDriven:n%5===0};}return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(i){return new(i||e)};}static{this.\u0275cmp=bI({type:e,selectors:[["ng-component"]],decls:37,vars:3,consts:[["slickgridHeader",""],["slickgridFooter",""],["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example29.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["gridId","grid1",3,"onAngularGridCreated","columns","options","dataset"]],template:function(i,n){i&1&&(ui(0,"div",2),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 29: Custom header & footer Templates
    `),ui(4,"span",3),UE(5,`
      `),ui(6,"a",4),UE(7,`
        `),cp(8,"span",5),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",6),pp("click",function(){return n.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",7),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",8),UE(19,`
    Basic Grid with templates for custom headers and footers
    `),ui(20,"ul"),UE(21,`
      `),ui(22,"li"),UE(23,"Pass in custom templates to be rendered at predefined header and footer destinations"),Tc(),UE(24,`
    `),Tc(),UE(25,`
  `),Tc(),UE(26,`

  `),ui(27,"angular-slickgrid",9),pp("onAngularGridCreated",function(d){return n.angularGridReady(d.detail)}),UE(28,`
    `),Jf(29,G,4,0,"ng-template",null,0,dD),UE(31,`

    `),Jf(32,F,3,0,"ng-template",null,1,dD),UE(34,`
  `),Tc(),UE(35,`
`),Tc(),UE(36,`
`)),i&2&&(Wy(27),ap("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset));},dependencies:[j1,I],encapsulation:2});}}return e})();export{I as CustomFooterComponent,z as Example29Component};