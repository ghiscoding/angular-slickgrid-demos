import {D,L as Le,h as Tu,T as TI,ah as W,ai as re,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,g as sp}from'./main-C6PQTYH6.js';var E="assets/data/customers_100.json",M=(()=>{class o{constructor(){this.http=D(Le),this.hideSubTitle=false;}angularGrid2Ready(r){this.angularGrid2=r;}ngOnInit(){this.defineGrid1(),this.defineGrid2(),this.dataset1=this.mockData(),this.http.get(E).subscribe(r=>this.dataset2=r);}defineGrid1(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:true,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:true,minWidth:100},{id:"start",name:"Start",field:"start",minWidth:100},{id:"finish",name:"Finish",field:"finish",minWidth:100},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true,minWidth:100}],this.gridOptions1={enableAutoResize:true,autoResize:{container:"#demo-container",rightPadding:10},enableSorting:true};}defineGrid2(){this.columns2=[{id:"name",name:"Name",field:"name",filterable:true,sortable:true},{id:"gender",name:"Gender",field:"gender",filterable:true,sortable:true,filter:{model:Tu.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:true,sortable:true}],this.gridOptions2={enableAutoResize:true,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableSorting:true};}mockData(){let r=[];for(let a=0;a<1e3;a++){let n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);r[a]={id:a,title:"Task "+a,duration:Math.round(Math.random()*100)+"",percentComplete:v,start:`${l}/${d}/${n}`,finish:`${l}/${d}/${n}`,effortDriven:a%5===0};}return r}resizeGrid2(){this.angularGrid2.resizerService.resizeGrid(10);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid2.resizerService.resizeGrid(0);}static{this.\u0275fac=function(a){return new(a||o)};}static{this.\u0275cmp=TI({type:o,selectors:[["ng-component"]],decls:55,vars:7,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example22.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["heading","Javascript","id","javascript","data-test","javascript-tab",3,"active"],["gridId","grid1",3,"columns","options","dataset"],["heading","Http-Client","data-test","http-tab",3,"selectTab"],["gridId","grid2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(a,n){a&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 22: Grids in Bootstrap Tabs
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return n.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    This example demonstrate the creation of multiple grids in Bootstrap Tabs
    `),ui(20,"ol"),BE(21,`
      `),ui(22,"li"),BE(23,"Regular mocked data with JavaScript"),Tc(),BE(24,`
      `),ui(25,"li"),BE(26,'Load dataset through Http-Client. Also note we need to call a "resizeGrid()" after focusing on this tab'),Tc(),BE(27,`
    `),Tc(),BE(28,`
  `),Tc(),BE(29,`

  `),ui(30,"div"),BE(31,`
    `),ui(32,"tabset"),BE(33,`
      `),ui(34,"tab",7),BE(35,`
        `),ui(36,"h4"),BE(37,"Grid 1 - Load Local Data"),Tc(),BE(38,`
        `),ui(39,"angular-slickgrid",8),BE(40," "),Tc(),BE(41,`
      `),Tc(),BE(42,`
      `),ui(43,"tab",9),fp("selectTab",function(){return n.resizeGrid2()}),BE(44,`
        `),ui(45,"h4"),BE(46,"Grid 2 - Load a JSON dataset through Http-Client"),Tc(),BE(47,`
        `),ui(48,"angular-slickgrid",10),fp("onAngularGridCreated",function(d){return n.angularGrid2Ready(d.detail)}),BE(49,`
        `),Tc(),BE(50,`
      `),Tc(),BE(51,`
    `),Tc(),BE(52,`
  `),Tc(),BE(53,`
`),Tc(),BE(54,`
`)),a&2&&(Uy(34),sp("active",true),Uy(5),sp("columns",n.columns1)("options",n.gridOptions1)("dataset",n.dataset1),Uy(9),sp("columns",n.columns2)("options",n.gridOptions2)("dataset",n.dataset2));},dependencies:[W,re,U1],encapsulation:2});}}return o})();export{M as Example22Component};