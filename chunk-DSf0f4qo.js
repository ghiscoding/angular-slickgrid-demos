import{$t as _I,Gn as lu,In as lD,M as Ho,a as Ap,bt as RI,f as Cy,kr as yI,mn as dv,on as bp,tn as _p,un as cu,xn as gI,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";function y(u,w){if(u&1){let a=_I();lD(0,`
        `),vi(1,`span`,25),lD(2,`
          `),vi(3,`div`,10),lD(4,`
            `),vi(5,`button`,11),Ap(`click`,function(){cu(a);let t=RI();return lu(t.goToGrid2FirstPage())}),lD(6,`
              `),_p(7,`i`,12),lD(8,`
            `),Rc(),lD(9,`
            `),vi(10,`button`,13),Ap(`click`,function(){cu(a);let t=RI();return lu(t.goToGrid2LastPage())}),lD(11,`
              `),_p(12,`i`,14),lD(13,`
            `),Rc(),lD(14,`
          `),Rc(),lD(15,`
        `),Rc(),lD(16,`
      `)}}var R=(()=>{class u{constructor(){this.hideSubTitle=!1,this.isGrid2WithPagination=!0,this.selectedTitles=Ho(``),this.selectedTitle=Ho(``),this.selectedGrid2IDs=Ho([])}ngOnInit(){this.prepareGrid()}angularGridReady1(a){this.angularGrid1=a,this.gridObj1=a&&a.slickGrid||{}}angularGridReady2(a){this.angularGrid2=a,this.gridObj2=a&&a.slickGrid||{}}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:sI.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:sI.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:sI.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:uu.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:sI.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:uu.singleSelect}}],this.columns2=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:sI.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:sI.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:sI.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:uu.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:sI.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:uu.singleSelect}}],this.gridOptions1={gridHeight:225,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,selectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={gridHeight:255,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},selectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}},this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}prepareData(a){let o=[];for(let t=0;t<a;t++){let l=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);o[t]={id:t,title:`Task `+t,duration:Math.round(Math.random()*100)+``,percentComplete:v,percentCompleteNumber:v,start:new Date(l,r,_),finish:new Date(l,r+1,_),effortDriven:t%5===0}}return o}goToGrid1FirstPage(){this.angularGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.angularGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.angularGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.angularGrid2.paginationService.goToLastPage()}grid1StateChanged(a){console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change)}grid2StateChanged(a){if(console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change),a.gridState.rowSelection){let o=(a.gridState.rowSelection.filteredDataContextIds||[]).sort((l,r)=>l-r);this.selectedGrid2IDs.set(o);let t=o.map(l=>`Task ${l}`).join(`,`);t.length>293&&(t=t.substring(0,293)+`...`),this.selectedTitles.set(t)}}togglePaginationGrid2(){this.isGrid2WithPagination=!this.isGrid2WithPagination,this.angularGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}handleSelectedRowsChanged1(a,o){if(Array.isArray(o.rows)&&this.gridObj1){let t=o.rows.map(l=>this.gridObj1.getDataItem(l).title||``);this.selectedTitle.set(t)}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||u)}}static{this.ɵcmp=WE({type:u,selectors:[[`ng-component`]],decls:104,vars:10,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example10.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-selection`,`target`,`_blank`],[1,`row`],[1,`col-sm-4`,2,`max-width`,`205px`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-8`],[1,`alert`,`alert-success`],[`data-test`,`grid1-selections`,3,`innerHTML`],[1,`overflow-hidden`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`onGridStateChanged`,`onSelectedRowsChanged`,`columns`,`options`,`dataset`],[1,`col-md-6`,`offset-md-1`],[1,`col-sm-3`,`col-md-4`,2,`max-width`,`215px`],[`type`,`checkbox`,`data-test`,`toggle-pagination-grid2`,3,`change`,`checked`],[`data-test`,`grid2-selections`,3,`innerHTML`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`onGridStateChanged`,`columns`,`options`,`dataset`],[2,`margin-left`,`5px`]],template:function(o,t){o&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 10: Multiple Grids with Row Selection
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return t.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    Row selection, single or multi-select (`),vi(20,`a`,7),lD(21,`Wiki docs`),Rc(),lD(22,`).
    `),vi(23,`ul`),lD(24,`
      `),vi(25,`li`),lD(26,`Single Select, you can click on any cell to make the row active`),Rc(),lD(27,`
      `),vi(28,`li`),lD(29,`Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections`),Rc(),lD(30,`
      `),vi(31,`li`),lD(32,`
        You can use "selectableOverride()" callback to override logic to display checkbox on every row (for example only show it every 2nd
        row)
      `),Rc(),lD(33,`
      `),vi(34,`li`),lD(35,`
        NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want
        it back)
      `),Rc(),lD(36,`
    `),Rc(),lD(37,`
  `),Rc(),lD(38,`

  `),vi(39,`div`,8),lD(40,`
    `),vi(41,`div`,9),lD(42,`
      Pagination
      `),vi(43,`div`,10),lD(44,`
        `),vi(45,`button`,11),Ap(`click`,function(){return t.goToGrid1FirstPage()}),lD(46,`
          `),_p(47,`i`,12),lD(48,`
        `),Rc(),lD(49,`
        `),vi(50,`button`,13),Ap(`click`,function(){return t.goToGrid1LastPage()}),lD(51,`
          `),_p(52,`i`,14),lD(53,`
        `),Rc(),lD(54,`
      `),Rc(),lD(55,`
    `),Rc(),lD(56,`
    `),vi(57,`div`,15),lD(58,`
      `),vi(59,`div`,16),lD(60,`
        `),vi(61,`strong`),lD(62,`(single select) Selected Row:`),Rc(),lD(63,`
        `),_p(64,`span`,17),lD(65,`
      `),Rc(),lD(66,`
    `),Rc(),lD(67,`
  `),Rc(),lD(68,`

  `),vi(69,`div`,18),lD(70,`
    `),vi(71,`angular-slickgrid`,19),Ap(`onAngularGridCreated`,function(r){return t.angularGridReady1(r.detail)})(`onGridStateChanged`,function(r){return t.grid1StateChanged(r.detail)})(`onSelectedRowsChanged`,function(r){return t.handleSelectedRowsChanged1(r.detail.eventData,r.detail.args)}),lD(72,`
    `),Rc(),lD(73,`
  `),Rc(),lD(74,`

  `),_p(75,`hr`,20),lD(76,`

  `),vi(77,`div`,8),lD(78,`
    `),vi(79,`div`,21),lD(80,`
      Pagination:
      `),vi(81,`input`,22),Ap(`change`,function(){return t.togglePaginationGrid2()}),Rc(),lD(82,`
      `),gI(83,y,17,0),Rc(),lD(84,`
    `),vi(85,`div`,15),lD(86,`
      `),vi(87,`div`,16),lD(88,`
        `),vi(89,`strong`),lD(90,`(multi-select) Selected Row(s):`),Rc(),lD(91,`
        `),_p(92,`span`,23),lD(93,`
      `),Rc(),lD(94,`
    `),Rc(),lD(95,`
  `),Rc(),lD(96,`

  `),vi(97,`div`,18),lD(98,`
    `),vi(99,`angular-slickgrid`,24),Ap(`onAngularGridCreated`,function(r){return t.angularGridReady2(r.detail)})(`onGridStateChanged`,function(r){return t.grid2StateChanged(r.detail)}),lD(100,`
    `),Rc(),lD(101,`
  `),Rc(),lD(102,`
`),Rc(),lD(103,`
`)),o&2&&(dv(64),bp(`innerHTML`,t.selectedTitle(),Cy),dv(7),bp(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),dv(10),bp(`checked`,t.isGrid2WithPagination),dv(2),yI(t.isGrid2WithPagination?83:-1),dv(9),bp(`innerHTML`,t.selectedTitles(),Cy),dv(7),bp(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[D1],styles:[`.alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:10px}`,`.col-sm-1[_ngcontent-%COMP%]{max-width:70px}`]})}}return u})();export{R as Example10Component};