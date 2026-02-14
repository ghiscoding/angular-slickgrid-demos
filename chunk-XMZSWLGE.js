import{Da as G,wa as g,za as m}from"./chunk-IBXCHNN7.js";import{$ as x,Aa as c,Kb as e,Pa as C,_ as f,db as k,eb as E,ia as h,ib as p,jb as i,kb as n,lb as d,sb as T,vb as s,xa as b,xb as S}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";function y(u,w){if(u&1){let a=T();e(0,`
        `),i(1,"span",25),e(2,`
          `),i(3,"div",10),e(4,`
            `),i(5,"button",11),s("click",function(){f(a);let t=S();return x(t.goToGrid2FirstPage())}),e(6,`
              `),d(7,"i",12),e(8,`
            `),n(),e(9,`
            `),i(10,"button",13),s("click",function(){f(a);let t=S();return x(t.goToGrid2LastPage())}),e(11,`
              `),d(12,"i",14),e(13,`
            `),n(),e(14,`
          `),n(),e(15,`
        `),n(),e(16,`
      `)}}var R=(()=>{class u{constructor(){this.hideSubTitle=!1,this.isGrid2WithPagination=!0,this.selectedTitles=h(""),this.selectedTitle=h(""),this.selectedGrid2IDs=h([])}ngOnInit(){this.prepareGrid()}angularGridReady1(a){this.angularGrid1=a,this.gridObj1=a&&a.slickGrid||{}}angularGridReady2(a){this.angularGrid2=a,this.gridObj2=a&&a.slickGrid||{}}prepareGrid(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:m.percentCompleteBar,type:"number",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:m.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:g.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:m.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:g.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:m.checkmarkMaterial,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:g.singleSelect}}],this.columnDefinitions2=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",filterable:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:m.percentCompleteBar,type:"number",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",formatter:m.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:g.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:m.dateIso,exportWithFormatter:!0,type:"date",filterable:!0,sortable:!0,filter:{model:g.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:m.checkmarkMaterial,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"true"},{value:!1,label:"false"}],model:g.singleSelect}}],this.gridOptions1={gridHeight:225,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,selectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={gridHeight:255,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},selectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}},this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}prepareData(a){let o=[];for(let t=0;t<a;t++){let l=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);o[t]={id:t,title:"Task "+t,duration:Math.round(Math.random()*100)+"",percentComplete:v,percentCompleteNumber:v,start:new Date(l,r,_),finish:new Date(l,r+1,_),effortDriven:t%5===0}}return o}goToGrid1FirstPage(){this.angularGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.angularGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.angularGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.angularGrid2.paginationService.goToLastPage()}grid1StateChanged(a){console.log("Grid State changed:: ",a),console.log("Grid State changed:: ",a.change)}grid2StateChanged(a){if(console.log("Grid State changed:: ",a),console.log("Grid State changed:: ",a.change),a.gridState.rowSelection){let o=(a.gridState.rowSelection.filteredDataContextIds||[]).sort((l,r)=>l-r);this.selectedGrid2IDs.set(o);let t=o.map(l=>`Task ${l}`).join(",");t.length>293&&(t=t.substring(0,293)+"..."),this.selectedTitles.set(t)}}togglePaginationGrid2(){this.isGrid2WithPagination=!this.isGrid2WithPagination,this.angularGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}handleSelectedRowsChanged1(a,o){if(Array.isArray(o.rows)&&this.gridObj1){let t=o.rows.map(l=>this.gridObj1.getDataItem(l).title||"");this.selectedTitle.set(t)}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid2.resizerService.resizeGrid(0)}static{this.\u0275fac=function(o){return new(o||u)}}static{this.\u0275cmp=C({type:u,selectors:[["ng-component"]],decls:104,vars:10,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example10.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-selection","target","_blank"],[1,"row"],[1,"col-sm-4",2,"max-width","205px"],["role","group",1,"btn-group"],["data-test","goto-first-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-first"],["data-test","goto-last-page",1,"btn","btn-outline-secondary","btn-xs","btn-icon","px-2",3,"click"],[1,"mdi","mdi-page-last"],[1,"col-sm-8"],[1,"alert","alert-success"],["data-test","grid1-selections",3,"innerHTML"],[1,"overflow-hidden"],["gridId","grid1",3,"onAngularGridCreated","onGridStateChanged","onSelectedRowsChanged","columns","options","dataset"],[1,"col-md-6","offset-md-1"],[1,"col-sm-3","col-md-4",2,"max-width","215px"],["type","checkbox","data-test","toggle-pagination-grid2",3,"change","checked"],["data-test","grid2-selections",3,"innerHTML"],["gridId","grid2",3,"onAngularGridCreated","onGridStateChanged","columns","options","dataset"],[2,"margin-left","5px"]],template:function(o,t){o&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 10: Multiple Grids with Row Selection
    `),i(4,"span",1),e(5,`
      `),i(6,"a",2),e(7,`
        `),d(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),i(12,"button",4),s("click",function(){return t.toggleSubTitle()}),e(13,`
      `),d(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),i(18,"div",6),e(19,`
    Row selection, single or multi-select (`),i(20,"a",7),e(21,"Wiki docs"),n(),e(22,`).
    `),i(23,"ul"),e(24,`
      `),i(25,"li"),e(26,"Single Select, you can click on any cell to make the row active"),n(),e(27,`
      `),i(28,"li"),e(29,"Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections"),n(),e(30,`
      `),i(31,"li"),e(32,`
        You can use "selectableOverride()" callback to override logic to display checkbox on every row (for example only show it every 2nd
        row)
      `),n(),e(33,`
      `),i(34,"li"),e(35,`
        NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want
        it back)
      `),n(),e(36,`
    `),n(),e(37,`
  `),n(),e(38,`

  `),i(39,"div",8),e(40,`
    `),i(41,"div",9),e(42,`
      Pagination
      `),i(43,"div",10),e(44,`
        `),i(45,"button",11),s("click",function(){return t.goToGrid1FirstPage()}),e(46,`
          `),d(47,"i",12),e(48,`
        `),n(),e(49,`
        `),i(50,"button",13),s("click",function(){return t.goToGrid1LastPage()}),e(51,`
          `),d(52,"i",14),e(53,`
        `),n(),e(54,`
      `),n(),e(55,`
    `),n(),e(56,`
    `),i(57,"div",15),e(58,`
      `),i(59,"div",16),e(60,`
        `),i(61,"strong"),e(62,"(single select) Selected Row:"),n(),e(63,`
        `),d(64,"span",17),e(65,`
      `),n(),e(66,`
    `),n(),e(67,`
  `),n(),e(68,`

  `),i(69,"div",18),e(70,`
    `),i(71,"angular-slickgrid",19),s("onAngularGridCreated",function(r){return t.angularGridReady1(r.detail)})("onGridStateChanged",function(r){return t.grid1StateChanged(r.detail)})("onSelectedRowsChanged",function(r){return t.handleSelectedRowsChanged1(r.detail.eventData,r.detail.args)}),e(72,`
    `),n(),e(73,`
  `),n(),e(74,`

  `),d(75,"hr",20),e(76,`

  `),i(77,"div",8),e(78,`
    `),i(79,"div",21),e(80,`
      Pagination:
      `),i(81,"input",22),s("change",function(){return t.togglePaginationGrid2()}),n(),e(82,`
      `),k(83,y,17,0),n(),e(84,`
    `),i(85,"div",15),e(86,`
      `),i(87,"div",16),e(88,`
        `),i(89,"strong"),e(90,"(multi-select) Selected Row(s):"),n(),e(91,`
        `),d(92,"span",23),e(93,`
      `),n(),e(94,`
    `),n(),e(95,`
  `),n(),e(96,`

  `),i(97,"div",18),e(98,`
    `),i(99,"angular-slickgrid",24),s("onAngularGridCreated",function(r){return t.angularGridReady2(r.detail)})("onGridStateChanged",function(r){return t.grid2StateChanged(r.detail)}),e(100,`
    `),n(),e(101,`
  `),n(),e(102,`
`),n(),e(103,`
`)),o&2&&(c(64),p("innerHTML",t.selectedTitle(),b),c(7),p("columns",t.columnDefinitions1)("options",t.gridOptions1)("dataset",t.dataset1),c(10),p("checked",t.isGrid2WithPagination),c(2),E(t.isGrid2WithPagination?83:-1),c(9),p("innerHTML",t.selectedTitles(),b),c(7),p("columns",t.columnDefinitions2)("options",t.gridOptions2)("dataset",t.dataset2))},dependencies:[G],styles:[".alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:10px}",".col-sm-1[_ngcontent-%COMP%]{max-width:70px}"]})}}return u})();export{R as Example10Component};
