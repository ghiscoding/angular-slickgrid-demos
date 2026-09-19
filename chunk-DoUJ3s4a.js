import{$t as au,F as Ip,Kn as pI,Pn as ly,b as Ep,hr as xI,j as Ho,pr as wI,pt as Rc,rn as bp,rr as su,t as $E,tr as sD,vn as hI,wr as yv,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,ht as nk}from"./chunk-DLuyVhQJ.js";function y(u,w){if(u&1){let a=wI();sD(0,`
        `),yi(1,`span`,25),sD(2,`
          `),yi(3,`div`,10),sD(4,`
            `),yi(5,`button`,11),bp(`click`,function(){su(a);return au(xI().goToGrid2FirstPage())}),sD(6,`
              `),Ip(7,`i`,12),sD(8,`
            `),Rc(),sD(9,`
            `),yi(10,`button`,13),bp(`click`,function(){su(a);return au(xI().goToGrid2LastPage())}),sD(11,`
              `),Ip(12,`i`,14),sD(13,`
            `),Rc(),sD(14,`
          `),Rc(),sD(15,`
        `),Rc(),sD(16,`
      `)}}var R=(()=>{class u{constructor(){this.hideSubTitle=!1,this.isGrid2WithPagination=!0,this.selectedTitles=Ho(``),this.selectedTitle=Ho(``),this.selectedGrid2IDs=Ho([])}ngOnInit(){this.prepareGrid()}angularGridReady1(a){this.angularGrid1=a,this.gridObj1=a&&a.slickGrid||{}}angularGridReady2(a){this.angularGrid2=a,this.gridObj2=a&&a.slickGrid||{}}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:ip.singleSelect}}],this.columns2=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:ip.singleSelect}}],this.gridOptions1={gridHeight:225,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,selectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={gridHeight:255,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},selectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}},this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}prepareData(a){let o=[];for(let t=0;t<a;t++){let l=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);o[t]={id:t,title:`Task `+t,duration:Math.round(Math.random()*100)+``,percentComplete:v,percentCompleteNumber:v,start:new Date(l,r,_),finish:new Date(l,r+1,_),effortDriven:t%5===0}}return o}goToGrid1FirstPage(){this.angularGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.angularGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.angularGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.angularGrid2.paginationService.goToLastPage()}grid1StateChanged(a){console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change)}grid2StateChanged(a){if(console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change),a.gridState.rowSelection){let o=(a.gridState.rowSelection.filteredDataContextIds||[]).sort((l,r)=>l-r);this.selectedGrid2IDs.set(o);let t=o.map(l=>`Task ${l}`).join(`,`);t.length>293&&(t=t.substring(0,293)+`...`),this.selectedTitles.set(t)}}togglePaginationGrid2(){this.isGrid2WithPagination=!this.isGrid2WithPagination,this.angularGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}handleSelectedRowsChanged1(a,o){if(Array.isArray(o.rows)&&this.gridObj1){let t=o.rows.map(l=>this.gridObj1.getDataItem(l).title||``);this.selectedTitle.set(t)}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||u)}}static{this.ɵcmp=$E({type:u,selectors:[[`ng-component`]],decls:104,vars:10,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example10.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-selection`,`target`,`_blank`],[1,`row`],[1,`col-sm-4`,2,`max-width`,`205px`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-8`],[1,`alert`,`alert-success`],[`data-test`,`grid1-selections`,3,`innerHTML`],[1,`overflow-hidden`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`onGridStateChanged`,`onSelectedRowsChanged`,`columns`,`options`,`dataset`],[1,`col-md-6`,`offset-md-1`],[1,`col-sm-3`,`col-md-4`,2,`max-width`,`215px`],[`type`,`checkbox`,`data-test`,`toggle-pagination-grid2`,3,`change`,`checked`],[`data-test`,`grid2-selections`,3,`innerHTML`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`onGridStateChanged`,`columns`,`options`,`dataset`],[2,`margin-left`,`5px`]],template:function(o,t){o&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 10: Multiple Grids with Row Selection
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return t.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    Row selection, single or multi-select (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`).
    `),yi(23,`ul`),sD(24,`
      `),yi(25,`li`),sD(26,`Single Select, you can click on any cell to make the row active`),Rc(),sD(27,`
      `),yi(28,`li`),sD(29,`Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections`),Rc(),sD(30,`
      `),yi(31,`li`),sD(32,`
        You can use "selectableOverride()" callback to override logic to display checkbox on every row (for example only show it every 2nd
        row)
      `),Rc(),sD(33,`
      `),yi(34,`li`),sD(35,`
        NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want
        it back)
      `),Rc(),sD(36,`
    `),Rc(),sD(37,`
  `),Rc(),sD(38,`

  `),yi(39,`div`,8),sD(40,`
    `),yi(41,`div`,9),sD(42,`
      Pagination
      `),yi(43,`div`,10),sD(44,`
        `),yi(45,`button`,11),bp(`click`,function(){return t.goToGrid1FirstPage()}),sD(46,`
          `),Ip(47,`i`,12),sD(48,`
        `),Rc(),sD(49,`
        `),yi(50,`button`,13),bp(`click`,function(){return t.goToGrid1LastPage()}),sD(51,`
          `),Ip(52,`i`,14),sD(53,`
        `),Rc(),sD(54,`
      `),Rc(),sD(55,`
    `),Rc(),sD(56,`
    `),yi(57,`div`,15),sD(58,`
      `),yi(59,`div`,16),sD(60,`
        `),yi(61,`strong`),sD(62,`(single select) Selected Row:`),Rc(),sD(63,`
        `),Ip(64,`span`,17),sD(65,`
      `),Rc(),sD(66,`
    `),Rc(),sD(67,`
  `),Rc(),sD(68,`

  `),yi(69,`div`,18),sD(70,`
    `),yi(71,`angular-slickgrid`,19),bp(`onAngularGridCreated`,function(r){return t.angularGridReady1(r.detail)})(`onGridStateChanged`,function(r){return t.grid1StateChanged(r.detail)})(`onSelectedRowsChanged`,function(r){return t.handleSelectedRowsChanged1(r.detail.eventData,r.detail.args)}),sD(72,`
    `),Rc(),sD(73,`
  `),Rc(),sD(74,`

  `),Ip(75,`hr`,20),sD(76,`

  `),yi(77,`div`,8),sD(78,`
    `),yi(79,`div`,21),sD(80,`
      Pagination:
      `),yi(81,`input`,22),bp(`change`,function(){return t.togglePaginationGrid2()}),Rc(),sD(82,`
      `),pI(83,y,17,0),Rc(),sD(84,`
    `),yi(85,`div`,15),sD(86,`
      `),yi(87,`div`,16),sD(88,`
        `),yi(89,`strong`),sD(90,`(multi-select) Selected Row(s):`),Rc(),sD(91,`
        `),Ip(92,`span`,23),sD(93,`
      `),Rc(),sD(94,`
    `),Rc(),sD(95,`
  `),Rc(),sD(96,`

  `),yi(97,`div`,18),sD(98,`
    `),yi(99,`angular-slickgrid`,24),bp(`onAngularGridCreated`,function(r){return t.angularGridReady2(r.detail)})(`onGridStateChanged`,function(r){return t.grid2StateChanged(r.detail)}),sD(100,`
    `),Rc(),sD(101,`
  `),Rc(),sD(102,`
`),Rc(),sD(103,`
`)),o&2&&(ly(64),Ep(`innerHTML`,t.selectedTitle(),yv),ly(7),Ep(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),ly(10),Ep(`checked`,t.isGrid2WithPagination),ly(2),hI(t.isGrid2WithPagination?83:-1),ly(9),Ep(`innerHTML`,t.selectedTitles(),yv),ly(7),Ep(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[_W],styles:[`.alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:10px}`,`.col-sm-1[_ngcontent-%COMP%]{max-width:70px}`]})}}return u})();export{R as Example10Component};