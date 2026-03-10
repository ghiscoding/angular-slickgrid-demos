import{a as x,b as S}from"./chunk-LZHMKADX.js";import{c as g}from"./chunk-5J3HPOY2.js";import{Da as b,wa as f}from"./chunk-V3K67AAF.js";import{Jb as e,Oa as h,U as p,hb as m,ib as t,jb as i,kb as c,ub as u,za as s}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var E="assets/data/customers_100.json",M=(()=>{class o{constructor(){this.http=p(g),this.hideSubTitle=!1}angularGrid2Ready(r){this.angularGrid2=r}ngOnInit(){this.defineGrid1(),this.defineGrid2(),this.dataset1=this.mockData(),this.http.get(E).subscribe(r=>this.dataset2=r)}defineGrid1(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",minWidth:100},{id:"finish",name:"Finish",field:"finish",minWidth:100},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100}],this.gridOptions1={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableSorting:!0}}defineGrid2(){this.columns2=[{id:"name",name:"Name",field:"name",filterable:!0,sortable:!0},{id:"gender",name:"Gender",field:"gender",filterable:!0,sortable:!0,filter:{model:f.singleSelect,collection:[{value:"",label:""},{value:"male",label:"male"},{value:"female",label:"female"}]}},{id:"company",name:"Company",field:"company",filterable:!0,sortable:!0}],this.gridOptions2={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableSorting:!0}}mockData(){let r=[];for(let a=0;a<1e3;a++){let n=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);r[a]={id:a,title:"Task "+a,duration:Math.round(Math.random()*100)+"",percentComplete:v,start:`${l}/${d}/${n}`,finish:`${l}/${d}/${n}`,effortDriven:a%5===0}}return r}resizeGrid2(){this.angularGrid2.resizerService.resizeGrid(10)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid2.resizerService.resizeGrid(0)}static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275cmp=h({type:o,selectors:[["ng-component"]],decls:55,vars:7,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example22.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["heading","Javascript","id","javascript","data-test","javascript-tab",3,"active"],["gridId","grid1",3,"columns","options","dataset"],["heading","Http-Client","data-test","http-tab",3,"selectTab"],["gridId","grid2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(a,n){a&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 22: Grids in Bootstrap Tabs
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),c(8,"span",3),e(9,` code
      `),i(),e(10,`
    `),i(),e(11,`
    `),t(12,"button",4),u("click",function(){return n.toggleSubTitle()}),e(13,`
      `),c(14,"span",5),e(15,`
    `),i(),e(16,`
  `),i(),e(17,`

  `),t(18,"div",6),e(19,`
    This example demonstrate the creation of multiple grids in Bootstrap Tabs
    `),t(20,"ol"),e(21,`
      `),t(22,"li"),e(23,"Regular mocked data with JavaScript"),i(),e(24,`
      `),t(25,"li"),e(26,'Load dataset through Http-Client. Also note we need to call a "resizeGrid()" after focusing on this tab'),i(),e(27,`
    `),i(),e(28,`
  `),i(),e(29,`

  `),t(30,"div"),e(31,`
    `),t(32,"tabset"),e(33,`
      `),t(34,"tab",7),e(35,`
        `),t(36,"h4"),e(37,"Grid 1 - Load Local Data"),i(),e(38,`
        `),t(39,"angular-slickgrid",8),e(40," "),i(),e(41,`
      `),i(),e(42,`
      `),t(43,"tab",9),u("selectTab",function(){return n.resizeGrid2()}),e(44,`
        `),t(45,"h4"),e(46,"Grid 2 - Load a JSON dataset through Http-Client"),i(),e(47,`
        `),t(48,"angular-slickgrid",10),u("onAngularGridCreated",function(d){return n.angularGrid2Ready(d.detail)}),e(49,`
        `),i(),e(50,`
      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i(),e(54,`
`)),a&2&&(s(34),m("active",!0),s(5),m("columns",n.columns1)("options",n.gridOptions1)("dataset",n.dataset1),s(9),m("columns",n.columns2)("options",n.gridOptions2)("dataset",n.dataset2))},dependencies:[x,S,b],encapsulation:2})}}return o})();export{M as Example22Component};
