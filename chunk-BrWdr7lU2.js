import{Fn as mp,Gn as ou,Hn as oD,Rn as my,Sn as iu,Wt as av,Z as NE,b as Fo,dn as gi,g as Dp,h as DE,l as BI,on as fE,pn as gp,tn as dE,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,x as Iu}from"./chunk-C7G4ZLh2.js";function y(u,w){if(u&1){let a=DE();oD(0,`
        `),gi(1,`span`,25),oD(2,`
          `),gi(3,`div`,10),oD(4,`
            `),gi(5,`button`,11),Dp(`click`,function(){ou(a);return iu(NE().goToGrid2FirstPage())}),oD(6,`
              `),mp(7,`i`,12),oD(8,`
            `),xc(),oD(9,`
            `),gi(10,`button`,13),Dp(`click`,function(){ou(a);return iu(NE().goToGrid2LastPage())}),oD(11,`
              `),mp(12,`i`,14),oD(13,`
            `),xc(),oD(14,`
          `),xc(),oD(15,`
        `),xc(),oD(16,`
      `)}}var R=(()=>{class u{constructor(){this.hideSubTitle=!1,this.isGrid2WithPagination=!0,this.selectedTitles=Fo(``),this.selectedTitle=Fo(``),this.selectedGrid2IDs=Fo([])}ngOnInit(){this.prepareGrid()}angularGridReady1(a){this.angularGrid1=a,this.gridObj1=a&&a.slickGrid||{}}angularGridReady2(a){this.angularGrid2=a,this.gridObj2=a&&a.slickGrid||{}}prepareGrid(){this.columns1=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:JN.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:JN.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:Iu.singleSelect}}],this.columns2=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,filterable:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:JN.percentCompleteBar,type:`number`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso,exportWithFormatter:!0,type:`date`,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:JN.checkmarkMaterial,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`true`},{value:!1,label:`false`}],model:Iu.singleSelect}}],this.gridOptions1={gridHeight:225,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableSelection:!0,enableCheckboxSelector:!0,enableFiltering:!0,checkboxSelector:{hideSelectAllCheckbox:!0},multiSelect:!1,selectionOptions:{selectActiveRow:!0},columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{pagination:{pageNumber:2,pageSize:5}}},this.gridOptions2={gridHeight:255,gridWidth:800,enableAutoResize:!1,enableCellNavigation:!0,enableFiltering:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,applySelectOnAllPages:!0},selectionOptions:{selectActiveRow:!1},enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,50,75,100],pageSize:5},presets:{rowSelection:{dataContextIds:[3,12,13,522]}}},this.dataset1=this.prepareData(495),this.dataset2=this.prepareData(525)}prepareData(a){let o=[];for(let t=0;t<a;t++){let l=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),_=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);o[t]={id:t,title:`Task `+t,duration:Math.round(Math.random()*100)+``,percentComplete:v,percentCompleteNumber:v,start:new Date(l,r,_),finish:new Date(l,r+1,_),effortDriven:t%5===0}}return o}goToGrid1FirstPage(){this.angularGrid1.paginationService.goToFirstPage()}goToGrid1LastPage(){this.angularGrid1.paginationService.goToLastPage()}goToGrid2FirstPage(){this.angularGrid2.paginationService.goToFirstPage()}goToGrid2LastPage(){this.angularGrid2.paginationService.goToLastPage()}grid1StateChanged(a){console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change)}grid2StateChanged(a){if(console.log(`Grid State changed:: `,a),console.log(`Grid State changed:: `,a.change),a.gridState.rowSelection){let o=(a.gridState.rowSelection.filteredDataContextIds||[]).sort((l,r)=>l-r);this.selectedGrid2IDs.set(o);let t=o.map(l=>`Task ${l}`).join(`,`);t.length>293&&(t=t.substring(0,293)+`...`),this.selectedTitles.set(t)}}togglePaginationGrid2(){this.isGrid2WithPagination=!this.isGrid2WithPagination,this.angularGrid2.paginationService.togglePaginationVisibility(this.isGrid2WithPagination)}handleSelectedRowsChanged1(a,o){if(Array.isArray(o.rows)&&this.gridObj1){let t=o.rows.map(l=>this.gridObj1.getDataItem(l).title||``);this.selectedTitle.set(t)}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||u)}}static{this.ɵcmp=BI({type:u,selectors:[[`ng-component`]],decls:104,vars:10,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example10.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-selection`,`target`,`_blank`],[1,`row`],[1,`col-sm-4`,2,`max-width`,`205px`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`col-sm-8`],[1,`alert`,`alert-success`],[`data-test`,`grid1-selections`,3,`innerHTML`],[1,`overflow-hidden`],[`gridId`,`grid1`,3,`onAngularGridCreated`,`onGridStateChanged`,`onSelectedRowsChanged`,`columns`,`options`,`dataset`],[1,`col-md-6`,`offset-md-1`],[1,`col-sm-3`,`col-md-4`,2,`max-width`,`215px`],[`type`,`checkbox`,`data-test`,`toggle-pagination-grid2`,3,`change`,`checked`],[`data-test`,`grid2-selections`,3,`innerHTML`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`onGridStateChanged`,`columns`,`options`,`dataset`],[2,`margin-left`,`5px`]],template:function(o,t){o&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 10: Multiple Grids with Row Selection
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return t.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    Row selection, single or multi-select (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`).
    `),gi(23,`ul`),oD(24,`
      `),gi(25,`li`),oD(26,`Single Select, you can click on any cell to make the row active`),xc(),oD(27,`
      `),gi(28,`li`),oD(29,`Multiple Selections, you need to specifically click on the checkbox to make 1 or more selections`),xc(),oD(30,`
      `),gi(31,`li`),oD(32,`
        You can use "selectableOverride()" callback to override logic to display checkbox on every row (for example only show it every 2nd
        row)
      `),xc(),oD(33,`
      `),gi(34,`li`),oD(35,`
        NOTE: Any Row Selection(s) will be reset when using Pagination and changing Page (you will need to set it back manually if you want
        it back)
      `),xc(),oD(36,`
    `),xc(),oD(37,`
  `),xc(),oD(38,`

  `),gi(39,`div`,8),oD(40,`
    `),gi(41,`div`,9),oD(42,`
      Pagination
      `),gi(43,`div`,10),oD(44,`
        `),gi(45,`button`,11),Dp(`click`,function(){return t.goToGrid1FirstPage()}),oD(46,`
          `),mp(47,`i`,12),oD(48,`
        `),xc(),oD(49,`
        `),gi(50,`button`,13),Dp(`click`,function(){return t.goToGrid1LastPage()}),oD(51,`
          `),mp(52,`i`,14),oD(53,`
        `),xc(),oD(54,`
      `),xc(),oD(55,`
    `),xc(),oD(56,`
    `),gi(57,`div`,15),oD(58,`
      `),gi(59,`div`,16),oD(60,`
        `),gi(61,`strong`),oD(62,`(single select) Selected Row:`),xc(),oD(63,`
        `),mp(64,`span`,17),oD(65,`
      `),xc(),oD(66,`
    `),xc(),oD(67,`
  `),xc(),oD(68,`

  `),gi(69,`div`,18),oD(70,`
    `),gi(71,`angular-slickgrid`,19),Dp(`onAngularGridCreated`,function(r){return t.angularGridReady1(r.detail)})(`onGridStateChanged`,function(r){return t.grid1StateChanged(r.detail)})(`onSelectedRowsChanged`,function(r){return t.handleSelectedRowsChanged1(r.detail.eventData,r.detail.args)}),oD(72,`
    `),xc(),oD(73,`
  `),xc(),oD(74,`

  `),mp(75,`hr`,20),oD(76,`

  `),gi(77,`div`,8),oD(78,`
    `),gi(79,`div`,21),oD(80,`
      Pagination:
      `),gi(81,`input`,22),Dp(`change`,function(){return t.togglePaginationGrid2()}),xc(),oD(82,`
      `),dE(83,y,17,0),xc(),oD(84,`
    `),gi(85,`div`,15),oD(86,`
      `),gi(87,`div`,16),oD(88,`
        `),gi(89,`strong`),oD(90,`(multi-select) Selected Row(s):`),xc(),oD(91,`
        `),mp(92,`span`,23),oD(93,`
      `),xc(),oD(94,`
    `),xc(),oD(95,`
  `),xc(),oD(96,`

  `),gi(97,`div`,18),oD(98,`
    `),gi(99,`angular-slickgrid`,24),Dp(`onAngularGridCreated`,function(r){return t.angularGridReady2(r.detail)})(`onGridStateChanged`,function(r){return t.grid2StateChanged(r.detail)}),oD(100,`
    `),xc(),oD(101,`
  `),xc(),oD(102,`
`),xc(),oD(103,`
`)),o&2&&(av(64),gp(`innerHTML`,t.selectedTitle(),my),av(7),gp(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),av(10),gp(`checked`,t.isGrid2WithPagination),av(2),fE(t.isGrid2WithPagination?83:-1),av(9),gp(`innerHTML`,t.selectedTitles(),my),av(7),gp(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[q1],styles:[`.alert[_ngcontent-%COMP%]{padding:8px;margin-bottom:10px}`,`.col-sm-1[_ngcontent-%COMP%]{max-width:70px}`]})}}return u})();export{R as Example10Component};