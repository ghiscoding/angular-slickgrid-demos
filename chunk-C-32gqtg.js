import{$ as Mp,At as TI,C as Ei,En as iD,Et as SI,H as Iv,b as Dp,c as BE,cn as ay,ct as Oc,er as pI,f as Bo,hn as dI,hr as su,jt as Tp,sn as au}from"./chunk-CtIlL7jI.js";import{Ot as xz,bt as rp,xt as uP}from"./chunk-C1NeHYCu.js";function y(u,w){if(u&1){let a=TI();iD(0,`
        `),Ei(1,`span`,25),iD(2,`
          `),Ei(3,`div`,10),iD(4,`
            `),Ei(5,`button`,11),Mp(`click`,function(){su(a);let t=SI();return au(t.goToGrid2FirstPage())}),iD(6,`
              `),Tp(7,`i`,12),iD(8,`
            `),Oc(),iD(9,`
            `),Ei(10,`button`,13),Mp(`click`,function(){su(a);let t=SI();return au(t.goToGrid2LastPage())}),iD(11,`
              `),Tp(12,`i`,14),iD(13,`
            `),Oc(),iD(14,`
          `),Oc(),iD(15,`
        `),Oc(),iD(16,`
      `)}}var R=(()=>{class u{constructor(){this.hideSubTitle=!1,this.isGrid2WithPagination=!0,this.selectedTitles=Bo(``),this.selectedTitle=Bo(``),this.selectedGrid2IDs=Bo([])}ngOnInit(){this.prepareGrid()}angularGridReady1(a){this.angularGrid1=a,this.gridObj1=a&&a.slickGrid||{}}angularGridReady2(a){this.angularGrid2=a,this.gridObj2=a&&a.slickGrid||{}}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:uP.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:rp.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:uP.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:rp.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:uP.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:rp.singleSelect}}],this.columns2=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:uP.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:rp.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:uP.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:rp.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:uP.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:rp.singleSelect}}],this.gridOptions1={gridHeight:225,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,selectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={gridHeight:255,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},selectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}},this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}prepareData(a){let o=[];for(let t=0;t<a;t++){let l=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);o[t]={id:t,title:`Task `+t,duration:Math.round(Math.random()*100)+``,percentComplete:v,percentCompleteNumber:v,start:new Date(l,r,_),finish:new Date(l,r+1,_),effortDriven:t%5===0}}return o}goToGrid1FirstPage(){this.angularGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.angularGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.angularGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.angularGrid2.paginationService.goToLastPage()}grid1StateChanged(a){console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change)}grid2StateChanged(a){if(console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change),a.gridState.rowSelection){let o=(a.gridState.rowSelection.filteredDataContextIds||[]).sort((l,r)=>l-r);this.selectedGrid2IDs.set(o);let t=o.map(l=>`Task ${l}`).join(`,`);t.length>293&&(t=t.substring(0,293)+`...`),this.selectedTitles.set(t)}}togglePaginationGrid2(){this.isGrid2WithPagination=!this.isGrid2WithPagination,this.angularGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}handleSelectedRowsChanged1(a,o){if(Array.isArray(o.rows)&&this.gridObj1){let t=o.rows.map(l=>this.gridObj1.getDataItem(l).title||``);this.selectedTitle.set(t)}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||u)}}static{this.ɵcmp=BE({type:u,selectors:[[`ng-component`]],decls:104,vars:10,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example10.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-selection`,`target`,`_blank`],[1,`row`],[1,`col-sm-4`,2,`max-width`,`205px`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-8`],[1,`alert`,`alert-success`],[`data-test`,`grid1-selections`,3,`innerHTML`],[1,`overflow-hidden`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`onGridStateChanged`,`onSelectedRowsChanged`,`columns`,`options`,`dataset`],[1,`col-md-6`,`offset-md-1`],[1,`col-sm-3`,`col-md-4`,2,`max-width`,`215px`],[`type`,`checkbox`,`data-test`,`toggle-pagination-grid2`,3,`change`,`checked`],[`data-test`,`grid2-selections`,3,`innerHTML`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`onGridStateChanged`,`columns`,`options`,`dataset`],[2,`margin-left`,`5px`]],template:function(o,t){o&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 10: Multiple Grids with Row Selection
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return t.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    Row selection, single or multi-select (`),Ei(20,`a`,7),iD(21,`Wiki docs`),Oc(),iD(22,`).
    `),Ei(23,`ul`),iD(24,`
      `),Ei(25,`li`),iD(26,`Single Select, you can click on any cell to make the row active`),Oc(),iD(27,`
      `),Ei(28,`li`),iD(29,`Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections`),Oc(),iD(30,`
      `),Ei(31,`li`),iD(32,`
        You can use "selectableOverride()" callback to override logic to display checkbox on every row (for example only show it every 2nd
        row)
      `),Oc(),iD(33,`
      `),Ei(34,`li`),iD(35,`
        NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want
        it back)
      `),Oc(),iD(36,`
    `),Oc(),iD(37,`
  `),Oc(),iD(38,`

  `),Ei(39,`div`,8),iD(40,`
    `),Ei(41,`div`,9),iD(42,`
      Pagination
      `),Ei(43,`div`,10),iD(44,`
        `),Ei(45,`button`,11),Mp(`click`,function(){return t.goToGrid1FirstPage()}),iD(46,`
          `),Tp(47,`i`,12),iD(48,`
        `),Oc(),iD(49,`
        `),Ei(50,`button`,13),Mp(`click`,function(){return t.goToGrid1LastPage()}),iD(51,`
          `),Tp(52,`i`,14),iD(53,`
        `),Oc(),iD(54,`
      `),Oc(),iD(55,`
    `),Oc(),iD(56,`
    `),Ei(57,`div`,15),iD(58,`
      `),Ei(59,`div`,16),iD(60,`
        `),Ei(61,`strong`),iD(62,`(single select) Selected Row:`),Oc(),iD(63,`
        `),Tp(64,`span`,17),iD(65,`
      `),Oc(),iD(66,`
    `),Oc(),iD(67,`
  `),Oc(),iD(68,`

  `),Ei(69,`div`,18),iD(70,`
    `),Ei(71,`angular-slickgrid`,19),Mp(`onAngularGridCreated`,function(r){return t.angularGridReady1(r.detail)})(`onGridStateChanged`,function(r){return t.grid1StateChanged(r.detail)})(`onSelectedRowsChanged`,function(r){return t.handleSelectedRowsChanged1(r.detail.eventData,r.detail.args)}),iD(72,`
    `),Oc(),iD(73,`
  `),Oc(),iD(74,`

  `),Tp(75,`hr`,20),iD(76,`

  `),Ei(77,`div`,8),iD(78,`
    `),Ei(79,`div`,21),iD(80,`
      Pagination:
      `),Ei(81,`input`,22),Mp(`change`,function(){return t.togglePaginationGrid2()}),Oc(),iD(82,`
      `),dI(83,y,17,0),Oc(),iD(84,`
    `),Ei(85,`div`,15),iD(86,`
      `),Ei(87,`div`,16),iD(88,`
        `),Ei(89,`strong`),iD(90,`(multi-select) Selected Row(s):`),Oc(),iD(91,`
        `),Tp(92,`span`,23),iD(93,`
      `),Oc(),iD(94,`
    `),Oc(),iD(95,`
  `),Oc(),iD(96,`

  `),Ei(97,`div`,18),iD(98,`
    `),Ei(99,`angular-slickgrid`,24),Mp(`onAngularGridCreated`,function(r){return t.angularGridReady2(r.detail)})(`onGridStateChanged`,function(r){return t.grid2StateChanged(r.detail)}),iD(100,`
    `),Oc(),iD(101,`
  `),Oc(),iD(102,`
`),Oc(),iD(103,`
`)),o&2&&(ay(64),Dp(`innerHTML`,t.selectedTitle(),Iv),ay(7),Dp(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),ay(10),Dp(`checked`,t.isGrid2WithPagination),ay(2),pI(t.isGrid2WithPagination?83:-1),ay(9),Dp(`innerHTML`,t.selectedTitles(),Iv),ay(7),Dp(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[xz],styles:[`.alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:10px}`,`.col-sm-1[_ngcontent-%COMP%]{max-width:70px}`]})}}return u})();export{R as Example10Component};