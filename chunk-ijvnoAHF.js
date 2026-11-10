import{V as R$,rt as ZR,x as HO}from"./chunk-Lo0QQjTd.js";import{X as Lc,dr as uD,en as _p,in as bp,k as GE,o as Ap,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var _=(()=>{class g{constructor(){this.columns=[],this.hideSubTitle=!1,this.dataset=this.mockDataset(1e3)}angularGridReady(a){this.angularGrid=a,this.dataView=a.dataView,this.grid=a.slickGrid,this.gridService=a.gridService}ngOnInit(){this.columns=[{id:`delete`,field:`id`,excludeFromHeaderMenu:!0,formatter:ZR.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(a,o)=>{console.log(o),confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}},{id:`title`,name:`Title`,field:`title`,sortable:!0,editor:{model:HO.longText}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,editor:{model:HO.text},onCellChange:(a,o)=>{alert(`onCellChange directly attached to the column definition`),console.log(o)}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:ZR.percentCompleteBar,type:`number`,editor:{model:HO.integer}},{id:`start`,name:`Start`,field:`start`,formatter:ZR.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:ZR.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:ZR.checkmarkMaterial,type:`number`,editor:{model:HO.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:`#demo-container`,rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}mockDataset(a){let o=[];for(let n=0;n<a;n++){let r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),m=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);o[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,m),finish:new Date(r,l+1,m),effortDriven:n%5===0}}return o}addNewItem(a){let o=this.createNewItem(1);this.angularGrid.gridService.addItem(o,{position:a})}createNewItem(a=1){let o=this.angularGrid.dataView.getItems(),n=0;o.forEach(p=>{p.id>n&&(n=p.id)});let r=n+a,l=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),b=Math.round(Math.random()*100);return{id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:b,percentCompleteNumber:b,start:new Date(l,m,u),finish:new Date(l,m+2,u),effortDriven:!0}}highlighFifthRow(){this.scrollGridTop(),this.angularGrid.gridService.highlightRow(4,1500)}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate()}updateItemMetadataForDurationOver40(a){return n=>{let r=this.dataView.getItem(n),l={cssClasses:``};return typeof a==`object`&&(l=a(n)),l&&r&&r.duration&&+r.duration>40&&(l.cssClasses=(l.cssClasses||``)+` duration-bg`),l}}updateSecondItem(){this.scrollGridTop();let a=this.angularGrid.gridService.getDataItemByRowNumber(1);a.duration=Math.round(Math.random()*100),this.angularGrid.gridService.updateItem(a)}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||g)}}static{this.ɵcmp=GE({type:g,selectors:[[`ng-component`]],decls:120,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example11.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/add-update-highlight`,`target`,`_blank`],[`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/dynamic-item-metadata`,`target`,`_blank`],[1,`col-sm-12`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`add-new-item-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`add-new-item-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`update-second-item-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-row5-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-duration40-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`gridId`,`grid11`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,n){o&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 11: Add / Update / Highlight a Datagrid Item
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return n.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    Add / Update / Hightlight an Item from the Datagrid (`),vi(20,`a`,7),uD(21,`Wiki docs`),Lc(),uD(22,`).
    `),vi(23,`ul`),uD(24,`
      `),vi(25,`li`)(26,`b`),uD(27,`Note:`),Lc(),uD(28,` this demo is `),vi(29,`b`),uD(30,`only`),Lc(),uD(31,` on the datagrid (client) side, you still need to deal with the backend yourself`),Lc(),uD(32,`
      `),vi(33,`li`),uD(34,`Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it`),Lc(),uD(35,`
      `),vi(36,`li`),uD(37,`Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:`),Lc(),uD(38,`
      `),vi(39,`ul`),uD(40,`
        `),vi(41,`li`),uD(42,`You can enable "enableCheckboxSelector" or "enableSelection" to True`),Lc(),uD(43,`
      `),Lc(),uD(44,`
      `),vi(45,`li`),uD(46,`Click on any of the buttons below to test this out`),Lc(),uD(47,`
      `),vi(48,`li`),uD(49,`
        You can change the highlighted color & animation by changing the
        `),vi(50,`a`,8),uD(51,`SASS Variables`),Lc(),uD(52,`:
      `),Lc(),uD(53,`
      `),vi(54,`ul`),uD(55,`
        `),vi(56,`li`),uD(57,`"$row-highlight-background-color" or "$row-highlight-fade-animation"`),Lc(),uD(58,`
      `),Lc(),uD(59,`
      `),vi(60,`li`),uD(61,`You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)`),Lc(),uD(62,`
      `),vi(63,`ul`),uD(64,`
        `),vi(65,`li`),uD(66,`
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          `),vi(67,`a`,9),uD(68,`Wiki doc`),Lc(),uD(69,`
        `),Lc(),uD(70,`
      `),Lc(),uD(71,`
    `),Lc(),uD(72,`
  `),Lc(),uD(73,`

  `),vi(74,`div`,10),uD(75,`
    `),vi(76,`span`),uD(77,`
      `),vi(78,`label`),uD(79,`Scroll: `),Lc(),uD(80,`
      `),vi(81,`div`,11),uD(82,`
        `),vi(83,`button`,12),Ap(`click`,function(){return n.scrollGridTop()}),uD(84,`
          `),_p(85,`i`,13),uD(86,`
        `),Lc(),uD(87,`
        `),vi(88,`button`,14),Ap(`click`,function(){return n.scrollGridBottom()}),uD(89,`
          `),_p(90,`i`,15),uD(91,`
        `),Lc(),uD(92,`
      `),Lc(),uD(93,`
      `),vi(94,`button`,16),Ap(`click`,function(){return n.addNewItem()}),uD(95,`
        Add New Mocked Item
      `),Lc(),uD(96,`
      `),vi(97,`button`,17),Ap(`click`,function(){return n.addNewItem(`bottom`)}),uD(98,`
        Add New Mocked Item (bottom)
      `),Lc(),uD(99,`
      `),vi(100,`button`,18),Ap(`click`,function(){return n.updateSecondItem()}),uD(101,`
        Update 2nd Row Item with Random Duration
      `),Lc(),uD(102,`
      `),vi(103,`button`,19),Ap(`click`,function(){return n.highlighFifthRow()}),uD(104,`
        Highlight 5th Row
      `),Lc(),uD(105,`
      `),vi(106,`button`,20),Ap(`click`,function(){return n.changeDurationBackgroundColor()}),uD(107,`
        Highlight Rows with Duration over 40
      `),Lc(),uD(108,`
    `),Lc(),uD(109,`
    `),_p(110,`hr`),uD(111,`
  `),Lc(),uD(112,`

  `),vi(113,`div`,10),uD(114,`
    `),vi(115,`angular-slickgrid`,21),Ap(`onAngularGridCreated`,function(l){return n.angularGridReady(l.detail)}),uD(116,`
    `),Lc(),uD(117,`
  `),Lc(),uD(118,`
`),Lc(),uD(119,`
`)),o&2&&(fv(115),bp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[R$],styles:[`.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return g})();export{_ as Example11Component};