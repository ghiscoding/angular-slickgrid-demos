import{$ as Mp,Bn as lD,C as Ei,En as iD,b as Dp,c as BE,cn as ay,ct as Oc,f as Bo,jt as Tp,kr as zp,yt as Qp}from"./chunk-CtIlL7jI.js";import{Ot as xz,bt as rp,xt as uP}from"./chunk-C1NeHYCu.js";var w=(()=>{class m{constructor(){this.dataset=Bo([]),this.hideSubTitle=!1}angularGridReady(a){this.angularGrid=a}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,filterable:!0},{id:`duration`,name:`Duration`,field:`duration`,filterable:!0,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,filterable:!0,sortable:!0,filter:{model:rp.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,filterable:!0,sortable:!0,filter:{model:rp.compoundDate}},{id:`effort-driven`,name:`Completed`,field:`effortDriven`,formatter:uP.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:rp.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:35,onAfterMoveRows:(a,n)=>{this.dataset.set(n.updatedItems)},columnIndexPosition:0},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}},this.getData()}getData(){let a=[];for(let n=0;n<500;n++)a[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*25)+` days`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};this.dataset.set(a)}hideDurationColumnDynamically(){this.angularGrid.gridService.hideColumnById(`duration`)}disableFilters(){this.angularGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.angularGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if(this.columns[0].id!==`change-symbol`){let a=[{id:`change-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:uP.icon,params:{iconCssClass:`mdi mdi-pencil pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{alert(`Technically we should Edit "Task ${o.dataContext.id}"`)}},{id:`delete-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:uP.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}}],n=this.angularGrid.gridService.getAllColumnDefinitions();this.columns=[...a,...n]}}toggleFilter(){this.angularGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.angularGrid.sortService.toggleSortFunctionality()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=BE({type:m,selectors:[[`ng-component`]],decls:102,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example16.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`mb-2`],[1,`col-sm-12`],[`data-test`,`hide-duration-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-eye-off-outline`],[`data-test`,`disable-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`disable-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-filtering-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[`data-test`,`toggle-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`add-crud-columns-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-plus`],[1,`row`],[`gridId`,`grid16`,3,`columnsChange`,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(n,l){n&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 16: Row Move & Checkbox Selector
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return l.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    This example demonstrates using the `),Ei(20,`b`),iD(21,`Slick.Plugins.RowMoveManager`),Oc(),iD(22,` plugin to easily move a row in the grid.`),Tp(23,`br`),iD(24,`
    `),Ei(25,`ul`),iD(26,`
      `),Ei(27,`li`),iD(28,`Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range.`),Oc(),iD(29,`
      `),Ei(30,`li`),iD(31,`Drag one or more rows by the handle (icon) to reorder`),Oc(),iD(32,`
      `),Ei(33,`li`),iD(34,`If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"`),Oc(),iD(35,`
      `),Ei(36,`li`),iD(37,`You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)`),Oc(),iD(38,`
      `),Ei(39,`ul`),iD(40,`
        `),Ei(41,`li`),iD(42,`You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move`),Oc(),iD(43,`
      `),Oc(),iD(44,`
      `),Ei(45,`li`),iD(46,`
        If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and
        "disableRowSelection: false"
      `),Oc(),iD(47,`
      `),Ei(48,`ul`),iD(49,`
        `),Ei(50,`li`),iD(51,`
          SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you
          disable the flag
        `),Oc(),iD(52,`
      `),Oc(),iD(53,`
    `),Oc(),iD(54,`
  `),Oc(),iD(55,`

  `),Ei(56,`div`,7),iD(57,`
    `),Ei(58,`div`,8),iD(59,`
      `),Ei(60,`button`,9),Mp(`click`,function(){return l.hideDurationColumnDynamically()}),iD(61,`
        `),Tp(62,`i`,10),iD(63,`
        Dynamically Hide "Duration"
      `),Oc(),iD(64,`
      `),Ei(65,`button`,11),Mp(`click`,function(){return l.disableFilters()}),iD(66,`
        `),Tp(67,`i`,12),iD(68,`
        Disable Filters
      `),Oc(),iD(69,`
      `),Ei(70,`button`,13),Mp(`click`,function(){return l.disableSorting()}),iD(71,`
        `),Tp(72,`i`,12),iD(73,`
        Disable Sorting
      `),Oc(),iD(74,`
      `),Ei(75,`button`,14),Mp(`click`,function(){return l.toggleFilter()}),iD(76,`
        `),Tp(77,`i`,15),iD(78,`
        Toggle Filtering
      `),Oc(),iD(79,`
      `),Ei(80,`button`,16),Mp(`click`,function(){return l.toggleSorting()}),iD(81,`
        `),Tp(82,`i`,15),iD(83,`
        Toggle Sorting
      `),Oc(),iD(84,`
      `),Ei(85,`button`,17),Mp(`click`,function(){return l.addEditDeleteColumns()}),iD(86,`
        `),Tp(87,`i`,18),iD(88,`
        Add Edit/Delete Columns
      `),Oc(),iD(89,`
    `),Oc(),iD(90,`
  `),Oc(),iD(91,`
  `),Ei(92,`div`,19),iD(93,`
    `),Ei(94,`div`,8),iD(95,`
      `),Ei(96,`angular-slickgrid`,20),Qp(`columnsChange`,function(s){return lD(l.columns,s)||(l.columns=s),s}),Mp(`onAngularGridCreated`,function(s){return l.angularGridReady(s.detail)}),iD(97,`
      `),Oc(),iD(98,`
    `),Oc(),iD(99,`
  `),Oc(),iD(100,`
`),Oc(),iD(101,`
`)),n&2&&(ay(96),zp(`columns`,l.columns),Dp(`options`,l.gridOptions)(`dataset`,l.dataset()))},dependencies:[xz],encapsulation:2})}}return m})();export{w as Example16Component};