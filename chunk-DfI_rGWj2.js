import{Dt as UE,En as iD,Kn as mp,Nn as jo,Qn as pI,Tt as Tp,Wn as mi,_n as fI,bt as SI,hr as vp,kn as iu,ln as cy,o as Ac,or as su,vr as vv,wt as TI}from"./chunk-06EGdSfW.js";import{H as _W,mt as nk,st as ip}from"./chunk-CAMk6vEo.js";function y(u,w){if(u&1){let a=TI();iD(0,`
        `),mi(1,`span`,25),iD(2,`
          `),mi(3,`div`,10),iD(4,`
            `),mi(5,`button`,11),Tp(`click`,function(){iu(a);return su(SI().goToGrid2FirstPage())}),iD(6,`
              `),vp(7,`i`,12),iD(8,`
            `),Ac(),iD(9,`
            `),mi(10,`button`,13),Tp(`click`,function(){iu(a);return su(SI().goToGrid2LastPage())}),iD(11,`
              `),vp(12,`i`,14),iD(13,`
            `),Ac(),iD(14,`
          `),Ac(),iD(15,`
        `),Ac(),iD(16,`
      `)}}var R=(()=>{class u{constructor(){this.hideSubTitle=!1,this.isGrid2WithPagination=!0,this.selectedTitles=jo(``),this.selectedTitle=jo(``),this.selectedGrid2IDs=jo([])}ngOnInit(){this.prepareGrid()}angularGridReady1(a){this.angularGrid1=a,this.gridObj1=a&&a.slickGrid||{}}angularGridReady2(a){this.angularGrid2=a,this.gridObj2=a&&a.slickGrid||{}}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:ip.singleSelect}}],this.columns2=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:ip.singleSelect}}],this.gridOptions1={gridHeight:225,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,selectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={gridHeight:255,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},selectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}},this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}prepareData(a){let o=[];for(let t=0;t<a;t++){let l=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);o[t]={id:t,title:`Task `+t,duration:Math.round(Math.random()*100)+``,percentComplete:v,percentCompleteNumber:v,start:new Date(l,r,_),finish:new Date(l,r+1,_),effortDriven:t%5===0}}return o}goToGrid1FirstPage(){this.angularGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.angularGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.angularGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.angularGrid2.paginationService.goToLastPage()}grid1StateChanged(a){console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change)}grid2StateChanged(a){if(console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change),a.gridState.rowSelection){let o=(a.gridState.rowSelection.filteredDataContextIds||[]).sort((l,r)=>l-r);this.selectedGrid2IDs.set(o);let t=o.map(l=>`Task ${l}`).join(`,`);t.length>293&&(t=t.substring(0,293)+`...`),this.selectedTitles.set(t)}}togglePaginationGrid2(){this.isGrid2WithPagination=!this.isGrid2WithPagination,this.angularGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}handleSelectedRowsChanged1(a,o){if(Array.isArray(o.rows)&&this.gridObj1){let t=o.rows.map(l=>this.gridObj1.getDataItem(l).title||``);this.selectedTitle.set(t)}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||u)}}static{this.ɵcmp=UE({type:u,selectors:[[`ng-component`]],decls:104,vars:10,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example10.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-selection`,`target`,`_blank`],[1,`row`],[1,`col-sm-4`,2,`max-width`,`205px`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-8`],[1,`alert`,`alert-success`],[`data-test`,`grid1-selections`,3,`innerHTML`],[1,`overflow-hidden`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`onGridStateChanged`,`onSelectedRowsChanged`,`columns`,`options`,`dataset`],[1,`col-md-6`,`offset-md-1`],[1,`col-sm-3`,`col-md-4`,2,`max-width`,`215px`],[`type`,`checkbox`,`data-test`,`toggle-pagination-grid2`,3,`change`,`checked`],[`data-test`,`grid2-selections`,3,`innerHTML`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`onGridStateChanged`,`columns`,`options`,`dataset`],[2,`margin-left`,`5px`]],template:function(o,t){o&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 10: Multiple Grids with Row Selection
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return t.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    Row selection, single or multi-select (`),mi(20,`a`,7),iD(21,`Wiki docs`),Ac(),iD(22,`).
    `),mi(23,`ul`),iD(24,`
      `),mi(25,`li`),iD(26,`Single Select, you can click on any cell to make the row active`),Ac(),iD(27,`
      `),mi(28,`li`),iD(29,`Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections`),Ac(),iD(30,`
      `),mi(31,`li`),iD(32,`
        You can use "selectableOverride()" callback to override logic to display checkbox on every row (for example only show it every 2nd
        row)
      `),Ac(),iD(33,`
      `),mi(34,`li`),iD(35,`
        NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want
        it back)
      `),Ac(),iD(36,`
    `),Ac(),iD(37,`
  `),Ac(),iD(38,`

  `),mi(39,`div`,8),iD(40,`
    `),mi(41,`div`,9),iD(42,`
      Pagination
      `),mi(43,`div`,10),iD(44,`
        `),mi(45,`button`,11),Tp(`click`,function(){return t.goToGrid1FirstPage()}),iD(46,`
          `),vp(47,`i`,12),iD(48,`
        `),Ac(),iD(49,`
        `),mi(50,`button`,13),Tp(`click`,function(){return t.goToGrid1LastPage()}),iD(51,`
          `),vp(52,`i`,14),iD(53,`
        `),Ac(),iD(54,`
      `),Ac(),iD(55,`
    `),Ac(),iD(56,`
    `),mi(57,`div`,15),iD(58,`
      `),mi(59,`div`,16),iD(60,`
        `),mi(61,`strong`),iD(62,`(single select) Selected Row:`),Ac(),iD(63,`
        `),vp(64,`span`,17),iD(65,`
      `),Ac(),iD(66,`
    `),Ac(),iD(67,`
  `),Ac(),iD(68,`

  `),mi(69,`div`,18),iD(70,`
    `),mi(71,`angular-slickgrid`,19),Tp(`onAngularGridCreated`,function(r){return t.angularGridReady1(r.detail)})(`onGridStateChanged`,function(r){return t.grid1StateChanged(r.detail)})(`onSelectedRowsChanged`,function(r){return t.handleSelectedRowsChanged1(r.detail.eventData,r.detail.args)}),iD(72,`
    `),Ac(),iD(73,`
  `),Ac(),iD(74,`

  `),vp(75,`hr`,20),iD(76,`

  `),mi(77,`div`,8),iD(78,`
    `),mi(79,`div`,21),iD(80,`
      Pagination:
      `),mi(81,`input`,22),Tp(`change`,function(){return t.togglePaginationGrid2()}),Ac(),iD(82,`
      `),fI(83,y,17,0),Ac(),iD(84,`
    `),mi(85,`div`,15),iD(86,`
      `),mi(87,`div`,16),iD(88,`
        `),mi(89,`strong`),iD(90,`(multi-select) Selected Row(s):`),Ac(),iD(91,`
        `),vp(92,`span`,23),iD(93,`
      `),Ac(),iD(94,`
    `),Ac(),iD(95,`
  `),Ac(),iD(96,`

  `),mi(97,`div`,18),iD(98,`
    `),mi(99,`angular-slickgrid`,24),Tp(`onAngularGridCreated`,function(r){return t.angularGridReady2(r.detail)})(`onGridStateChanged`,function(r){return t.grid2StateChanged(r.detail)}),iD(100,`
    `),Ac(),iD(101,`
  `),Ac(),iD(102,`
`),Ac(),iD(103,`
`)),o&2&&(cy(64),mp(`innerHTML`,t.selectedTitle(),vv),cy(7),mp(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),cy(10),mp(`checked`,t.isGrid2WithPagination),cy(2),pI(t.isGrid2WithPagination?83:-1),cy(9),mp(`innerHTML`,t.selectedTitles(),vv),cy(7),mp(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[_W],styles:[`.alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:10px}`,`.col-sm-1[_ngcontent-%COMP%]{max-width:70px}`]})}}return u})();export{R as Example10Component};