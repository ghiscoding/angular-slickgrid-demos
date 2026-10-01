import{$ as Mp,C as Ei,En as iD,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp}from"./chunk-CtIlL7jI.js";import{H as ZI,Ot as xz,xt as uP}from"./chunk-C1NeHYCu.js";var _=(()=>{class g{constructor(){this.columns=[],this.hideSubTitle=!1,this.dataset=this.mockDataset(1e3)}angularGridReady(a){this.angularGrid=a,this.dataView=a.dataView,this.grid=a.slickGrid,this.gridService=a.gridService}ngOnInit(){this.columns=[{id:`delete`,field:`id`,excludeFromHeaderMenu:!0,formatter:uP.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(a,o)=>{console.log(o),confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}},{id:`title`,name:`Title`,field:`title`,sortable:!0,editor:{model:ZI.longText}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,editor:{model:ZI.text},onCellChange:(a,o)=>{alert(`onCellChange directly attached to the column definition`),console.log(o)}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:uP.percentCompleteBar,type:`number`,editor:{model:ZI.integer}},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:uP.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:uP.checkmarkMaterial,type:`number`,editor:{model:ZI.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:`#demo-container`,rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}mockDataset(a){let o=[];for(let n=0;n<a;n++){let r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),m=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);o[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,m),finish:new Date(r,l+1,m),effortDriven:n%5===0}}return o}addNewItem(a){let o=this.createNewItem(1);this.angularGrid.gridService.addItem(o,{position:a})}createNewItem(a=1){let o=this.angularGrid.dataView.getItems(),n=0;o.forEach(p=>{p.id>n&&(n=p.id)});let r=n+a,l=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),b=Math.round(Math.random()*100);return{id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:b,percentCompleteNumber:b,start:new Date(l,m,u),finish:new Date(l,m+2,u),effortDriven:!0}}highlighFifthRow(){this.scrollGridTop(),this.angularGrid.gridService.highlightRow(4,1500)}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate()}updateItemMetadataForDurationOver40(a){return n=>{let r=this.dataView.getItem(n),l={cssClasses:``};return typeof a==`object`&&(l=a(n)),l&&r&&r.duration&&+r.duration>40&&(l.cssClasses=(l.cssClasses||``)+` duration-bg`),l}}updateSecondItem(){this.scrollGridTop();let a=this.angularGrid.gridService.getDataItemByRowNumber(1);a.duration=Math.round(Math.random()*100),this.angularGrid.gridService.updateItem(a)}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||g)}}static{this.ɵcmp=BE({type:g,selectors:[[`ng-component`]],decls:120,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example11.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/add-update-highlight`,`target`,`_blank`],[`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/dynamic-item-metadata`,`target`,`_blank`],[1,`col-sm-12`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`add-new-item-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`add-new-item-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`update-second-item-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-row5-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-duration40-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`gridId`,`grid11`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,n){o&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 11: Add / Update / Highlight a Datagrid Item
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return n.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    Add / Update / Hightlight an Item from the Datagrid (`),Ei(20,`a`,7),iD(21,`Wiki docs`),Oc(),iD(22,`).
    `),Ei(23,`ul`),iD(24,`
      `),Ei(25,`li`)(26,`b`),iD(27,`Note:`),Oc(),iD(28,` this demo is `),Ei(29,`b`),iD(30,`only`),Oc(),iD(31,` on the datagrid (client) side, you still need to deal with the backend yourself`),Oc(),iD(32,`
      `),Ei(33,`li`),iD(34,`Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it`),Oc(),iD(35,`
      `),Ei(36,`li`),iD(37,`Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:`),Oc(),iD(38,`
      `),Ei(39,`ul`),iD(40,`
        `),Ei(41,`li`),iD(42,`You can enable "enableCheckboxSelector" or "enableSelection" to True`),Oc(),iD(43,`
      `),Oc(),iD(44,`
      `),Ei(45,`li`),iD(46,`Click on any of the buttons below to test this out`),Oc(),iD(47,`
      `),Ei(48,`li`),iD(49,`
        You can change the highlighted color & animation by changing the
        `),Ei(50,`a`,8),iD(51,`SASS Variables`),Oc(),iD(52,`:
      `),Oc(),iD(53,`
      `),Ei(54,`ul`),iD(55,`
        `),Ei(56,`li`),iD(57,`"$row-highlight-background-color" or "$row-highlight-fade-animation"`),Oc(),iD(58,`
      `),Oc(),iD(59,`
      `),Ei(60,`li`),iD(61,`You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)`),Oc(),iD(62,`
      `),Ei(63,`ul`),iD(64,`
        `),Ei(65,`li`),iD(66,`
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          `),Ei(67,`a`,9),iD(68,`Wiki doc`),Oc(),iD(69,`
        `),Oc(),iD(70,`
      `),Oc(),iD(71,`
    `),Oc(),iD(72,`
  `),Oc(),iD(73,`

  `),Ei(74,`div`,10),iD(75,`
    `),Ei(76,`span`),iD(77,`
      `),Ei(78,`label`),iD(79,`Scroll: `),Oc(),iD(80,`
      `),Ei(81,`div`,11),iD(82,`
        `),Ei(83,`button`,12),Mp(`click`,function(){return n.scrollGridTop()}),iD(84,`
          `),Tp(85,`i`,13),iD(86,`
        `),Oc(),iD(87,`
        `),Ei(88,`button`,14),Mp(`click`,function(){return n.scrollGridBottom()}),iD(89,`
          `),Tp(90,`i`,15),iD(91,`
        `),Oc(),iD(92,`
      `),Oc(),iD(93,`
      `),Ei(94,`button`,16),Mp(`click`,function(){return n.addNewItem()}),iD(95,`
        Add New Mocked Item
      `),Oc(),iD(96,`
      `),Ei(97,`button`,17),Mp(`click`,function(){return n.addNewItem(`bottom`)}),iD(98,`
        Add New Mocked Item (bottom)
      `),Oc(),iD(99,`
      `),Ei(100,`button`,18),Mp(`click`,function(){return n.updateSecondItem()}),iD(101,`
        Update 2nd Row Item with Random Duration
      `),Oc(),iD(102,`
      `),Ei(103,`button`,19),Mp(`click`,function(){return n.highlighFifthRow()}),iD(104,`
        Highlight 5th Row
      `),Oc(),iD(105,`
      `),Ei(106,`button`,20),Mp(`click`,function(){return n.changeDurationBackgroundColor()}),iD(107,`
        Highlight Rows with Duration over 40
      `),Oc(),iD(108,`
    `),Oc(),iD(109,`
    `),Tp(110,`hr`),iD(111,`
  `),Oc(),iD(112,`

  `),Ei(113,`div`,10),iD(114,`
    `),Ei(115,`angular-slickgrid`,21),Mp(`onAngularGridCreated`,function(l){return n.angularGridReady(l.detail)}),iD(116,`
    `),Oc(),iD(117,`
  `),Oc(),iD(118,`
`),Oc(),iD(119,`
`)),o&2&&(ay(115),Dp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[xz],styles:[`.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return g})();export{_ as Example11Component};