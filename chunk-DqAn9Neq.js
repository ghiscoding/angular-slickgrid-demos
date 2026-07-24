import {A as Ao,X as XN,e as Tu,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,Y as YI,W as Wy,a as ap,K as KI,V as sE,Z as Kl,h as pE,$ as Jl,o as ty}from'./main-MYLFMRPB.js';function y(u,w){if(u&1){let a=sE();qE(0,`
        `),ui(1,"span",25),qE(2,`
          `),ui(3,"div",10),qE(4,`
            `),ui(5,"button",11),pp("click",function(){Kl(a);let t=pE();return Jl(t.goToGrid2FirstPage())}),qE(6,`
              `),cp(7,"i",12),qE(8,`
            `),Tc(),qE(9,`
            `),ui(10,"button",13),pp("click",function(){Kl(a);let t=pE();return Jl(t.goToGrid2LastPage())}),qE(11,`
              `),cp(12,"i",14),qE(13,`
            `),Tc(),qE(14,`
          `),Tc(),qE(15,`
        `),Tc(),qE(16,`
      `);}}var R=(()=>{class u{constructor(){this.hideSubTitle=false,this.isGrid2WithPagination=true,this.selectedTitles=Ao(""),this.selectedTitle=Ao(""),this.selectedGrid2IDs=Ao([]);}ngOnInit(){this.prepareGrid();}angularGridReady1(a){this.angularGrid1=a,this.gridObj1=a&&a.slickGrid||{};}angularGridReady2(a){this.angularGrid2=a,this.gridObj2=a&&a.slickGrid||{};}prepareGrid(){this.columns1=[{id:"title",name:"Title",field:"title",sortable:true,filterable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",filterable:true},{id:"complete",name:"% Complete",field:"percentComplete",formatter:XN.percentCompleteBar,type:"number",filterable:true,sortable:true},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,exportWithFormatter:true,type:"date",filterable:true,sortable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,exportWithFormatter:true,type:"date",filterable:true,sortable:true,filter:{model:Tu.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:XN.checkmarkMaterial,type:"boolean",sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"true"},{value:false,label:"false"}],model:Tu.singleSelect}}],this.columns2=[{id:"title",name:"Title",field:"title",sortable:true,filterable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",filterable:true},{id:"complete",name:"% Complete",field:"percentComplete",formatter:XN.percentCompleteBar,type:"number",filterable:true,sortable:true},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,exportWithFormatter:true,type:"date",filterable:true,sortable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,exportWithFormatter:true,type:"date",filterable:true,sortable:true,filter:{model:Tu.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:XN.checkmarkMaterial,type:"boolean",sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"true"},{value:false,label:"false"}],model:Tu.singleSelect}}],this.gridOptions1={gridHeight:225,gridWidth:800,enableAutoResize:false,enableCellNavigation:true,enableSelection:true,enableCheckboxSelector:true,enableFiltering:true,checkboxSelector:{hideSelectAllCheckbox:true},multiSelect:false,selectionOptions:{selectActiveRow:true},columnPicker:{hideForceFitButton:true},gridMenu:{hideForceFitButton:true},enablePagination:true,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={gridHeight:255,gridWidth:800,enableAutoResize:false,enableCellNavigation:true,enableFiltering:true,checkboxSelector:{hideInFilterHeaderRow:false,hideInColumnTitleRow:true,applySelectOnAllPages:true},selectionOptions:{selectActiveRow:false},enableCheckboxSelector:true,enableSelection:true,enablePagination:true,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}},this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525);}prepareData(a){let o=[];for(let t=0;t<a;t++){let l=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);o[t]={id:t,title:"Task "+t,duration:Math.round(Math.random()*100)+"",percentComplete:v,percentCompleteNumber:v,start:new Date(l,r,_),finish:new Date(l,r+1,_),effortDriven:t%5===0};}return o}goToGrid1FirstPage(){this.angularGrid1.paginationService.goToFirstPage();}goToGrid1LastPage(){this.angularGrid1.paginationService.goToLastPage();}goToGrid2FirstPage(){this.angularGrid2.paginationService.goToFirstPage();}goToGrid2LastPage(){this.angularGrid2.paginationService.goToLastPage();}grid1StateChanged(a){console.log("Grid State changed:: ",a),console.log("Grid State changed:: ",a.change);}grid2StateChanged(a){if(console.log("Grid State changed:: ",a),console.log("Grid State changed:: ",a.change),a.gridState.rowSelection){let o=(a.gridState.rowSelection.filteredDataContextIds||[]).sort((l,r)=>l-r);this.selectedGrid2IDs.set(o);let t=o.map(l=>`Task ${l}`).join(",");t.length>293&&(t=t.substring(0,293)+"..."),this.selectedTitles.set(t);}}togglePaginationGrid2(){this.isGrid2WithPagination=!this.isGrid2WithPagination,this.angularGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination);}handleSelectedRowsChanged1(a,o){if(Array.isArray(o.rows)&&this.gridObj1){let t=o.rows.map(l=>this.gridObj1.getDataItem(l).title||"");this.selectedTitle.set(t);}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid2.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||u)};}static{this.\u0275cmp=_I({type:u,selectors:[["ng-component"]],decls:104,vars:10,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example10.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-selection","target","_blank"],[1,"row"],[1,"col-sm-4",2,"max-width","205px"],["role","group",1,"btn-group"],["data-test","goto-first-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-first"],["data-test","goto-last-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-last"],[1,"col-sm-8"],[1,"alert","alert-success"],["data-test","grid1-selections",3,"innerHTML"],[1,"overflow-hidden"],["gridId","grid1",3,"onAngularGridCreated","onGridStateChanged","onSelectedRowsChanged","columns","options","dataset"],[1,"col-md-6","offset-md-1"],[1,"col-sm-3","col-md-4",2,"max-width","215px"],["type","checkbox","data-test","toggle-pagination-grid2",3,"change","checked"],["data-test","grid2-selections",3,"innerHTML"],["gridId","grid2",3,"onAngularGridCreated","onGridStateChanged","columns","options","dataset"],[2,"margin-left","5px"]],template:function(o,t){o&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 10: Multiple Grids with Row Selection
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return t.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    Row selection, single or multi-select (`),ui(20,"a",7),qE(21,"Wiki docs"),Tc(),qE(22,`).
    `),ui(23,"ul"),qE(24,`
      `),ui(25,"li"),qE(26,"Single Select, you can click on any cell to make the row active"),Tc(),qE(27,`
      `),ui(28,"li"),qE(29,"Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections"),Tc(),qE(30,`
      `),ui(31,"li"),qE(32,`
        You can use "selectableOverride()" callback to override logic to display checkbox on every row (for example only show it every 2nd
        row)
      `),Tc(),qE(33,`
      `),ui(34,"li"),qE(35,`
        NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want
        it back)
      `),Tc(),qE(36,`
    `),Tc(),qE(37,`
  `),Tc(),qE(38,`

  `),ui(39,"div",8),qE(40,`
    `),ui(41,"div",9),qE(42,`
      Pagination
      `),ui(43,"div",10),qE(44,`
        `),ui(45,"button",11),pp("click",function(){return t.goToGrid1FirstPage()}),qE(46,`
          `),cp(47,"i",12),qE(48,`
        `),Tc(),qE(49,`
        `),ui(50,"button",13),pp("click",function(){return t.goToGrid1LastPage()}),qE(51,`
          `),cp(52,"i",14),qE(53,`
        `),Tc(),qE(54,`
      `),Tc(),qE(55,`
    `),Tc(),qE(56,`
    `),ui(57,"div",15),qE(58,`
      `),ui(59,"div",16),qE(60,`
        `),ui(61,"strong"),qE(62,"(single select) Selected Row:"),Tc(),qE(63,`
        `),cp(64,"span",17),qE(65,`
      `),Tc(),qE(66,`
    `),Tc(),qE(67,`
  `),Tc(),qE(68,`

  `),ui(69,"div",18),qE(70,`
    `),ui(71,"angular-slickgrid",19),pp("onAngularGridCreated",function(r){return t.angularGridReady1(r.detail)})("onGridStateChanged",function(r){return t.grid1StateChanged(r.detail)})("onSelectedRowsChanged",function(r){return t.handleSelectedRowsChanged1(r.detail.eventData,r.detail.args)}),qE(72,`
    `),Tc(),qE(73,`
  `),Tc(),qE(74,`

  `),cp(75,"hr",20),qE(76,`

  `),ui(77,"div",8),qE(78,`
    `),ui(79,"div",21),qE(80,`
      Pagination:
      `),ui(81,"input",22),pp("change",function(){return t.togglePaginationGrid2()}),Tc(),qE(82,`
      `),YI(83,y,17,0),Tc(),qE(84,`
    `),ui(85,"div",15),qE(86,`
      `),ui(87,"div",16),qE(88,`
        `),ui(89,"strong"),qE(90,"(multi-select) Selected Row(s):"),Tc(),qE(91,`
        `),cp(92,"span",23),qE(93,`
      `),Tc(),qE(94,`
    `),Tc(),qE(95,`
  `),Tc(),qE(96,`

  `),ui(97,"div",18),qE(98,`
    `),ui(99,"angular-slickgrid",24),pp("onAngularGridCreated",function(r){return t.angularGridReady2(r.detail)})("onGridStateChanged",function(r){return t.grid2StateChanged(r.detail)}),qE(100,`
    `),Tc(),qE(101,`
  `),Tc(),qE(102,`
`),Tc(),qE(103,`
`)),o&2&&(Wy(64),ap("innerHTML",t.selectedTitle(),ty),Wy(7),ap("columns",t.columns1)("options",t.gridOptions1)("dataset",t.dataset1),Wy(10),ap("checked",t.isGrid2WithPagination),Wy(2),KI(t.isGrid2WithPagination?83:-1),Wy(9),ap("innerHTML",t.selectedTitles(),ty),Wy(7),ap("columns",t.columns2)("options",t.gridOptions2)("dataset",t.dataset2));},dependencies:[j1],styles:[".alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:10px}",".col-sm-1[_ngcontent-%COMP%]{max-width:70px}"]});}}return u})();export{R as Example10Component};