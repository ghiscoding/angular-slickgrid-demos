import{Dt as UE,En as iD,Kn as mp,Tt as Tp,Wn as mi,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W,N as WA,mt as nk}from"./chunk-CAMk6vEo.js";var _=(()=>{class g{constructor(){this.columns=[],this.hideSubTitle=!1,this.dataset=this.mockDataset(1e3)}angularGridReady(a){this.angularGrid=a,this.dataView=a.dataView,this.grid=a.slickGrid,this.gridService=a.gridService}ngOnInit(){this.columns=[{id:`delete`,field:`id`,excludeFromHeaderMenu:!0,formatter:nk.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(a,o)=>{console.log(o),confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}},{id:`title`,name:`Title`,field:`title`,sortable:!0,editor:{model:WA.longText}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,editor:{model:WA.text},onCellChange:(a,o)=>{alert(`onCellChange directly attached to the column definition`),console.log(o)}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,type:`number`,editor:{model:WA.integer}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,type:`number`,editor:{model:WA.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:`#demo-container`,rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}mockDataset(a){let o=[];for(let n=0;n<a;n++){let r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),m=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);o[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,m),finish:new Date(r,l+1,m),effortDriven:n%5===0}}return o}addNewItem(a){let o=this.createNewItem(1);this.angularGrid.gridService.addItem(o,{position:a})}createNewItem(a=1){let o=this.angularGrid.dataView.getItems(),n=0;o.forEach(p=>{p.id>n&&(n=p.id)});let r=n+a,l=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),b=Math.round(Math.random()*100);return{id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:b,percentCompleteNumber:b,start:new Date(l,m,u),finish:new Date(l,m+2,u),effortDriven:!0}}highlighFifthRow(){this.scrollGridTop(),this.angularGrid.gridService.highlightRow(4,1500)}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate()}updateItemMetadataForDurationOver40(a){return n=>{let r=this.dataView.getItem(n),l={cssClasses:``};return typeof a==`object`&&(l=a(n)),l&&r&&r.duration&&+r.duration>40&&(l.cssClasses=(l.cssClasses||``)+` duration-bg`),l}}updateSecondItem(){this.scrollGridTop();let a=this.angularGrid.gridService.getDataItemByRowNumber(1);a.duration=Math.round(Math.random()*100),this.angularGrid.gridService.updateItem(a)}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||g)}}static{this.ɵcmp=UE({type:g,selectors:[[`ng-component`]],decls:120,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example11.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/add-update-highlight`,`target`,`_blank`],[`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/dynamic-item-metadata`,`target`,`_blank`],[1,`col-sm-12`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`add-new-item-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`add-new-item-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`update-second-item-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-row5-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-duration40-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`gridId`,`grid11`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,n){o&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 11: Add / Update / Highlight a Datagrid Item
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return n.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    Add / Update / Hightlight an Item from the Datagrid (`),mi(20,`a`,7),iD(21,`Wiki docs`),Ac(),iD(22,`).
    `),mi(23,`ul`),iD(24,`
      `),mi(25,`li`)(26,`b`),iD(27,`Note:`),Ac(),iD(28,` this demo is `),mi(29,`b`),iD(30,`only`),Ac(),iD(31,` on the datagrid (client) side, you still need to deal with the backend yourself`),Ac(),iD(32,`
      `),mi(33,`li`),iD(34,`Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it`),Ac(),iD(35,`
      `),mi(36,`li`),iD(37,`Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:`),Ac(),iD(38,`
      `),mi(39,`ul`),iD(40,`
        `),mi(41,`li`),iD(42,`You can enable "enableCheckboxSelector" or "enableSelection" to True`),Ac(),iD(43,`
      `),Ac(),iD(44,`
      `),mi(45,`li`),iD(46,`Click on any of the buttons below to test this out`),Ac(),iD(47,`
      `),mi(48,`li`),iD(49,`
        You can change the highlighted color & animation by changing the
        `),mi(50,`a`,8),iD(51,`SASS Variables`),Ac(),iD(52,`:
      `),Ac(),iD(53,`
      `),mi(54,`ul`),iD(55,`
        `),mi(56,`li`),iD(57,`"$row-highlight-background-color" or "$row-highlight-fade-animation"`),Ac(),iD(58,`
      `),Ac(),iD(59,`
      `),mi(60,`li`),iD(61,`You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)`),Ac(),iD(62,`
      `),mi(63,`ul`),iD(64,`
        `),mi(65,`li`),iD(66,`
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          `),mi(67,`a`,9),iD(68,`Wiki doc`),Ac(),iD(69,`
        `),Ac(),iD(70,`
      `),Ac(),iD(71,`
    `),Ac(),iD(72,`
  `),Ac(),iD(73,`

  `),mi(74,`div`,10),iD(75,`
    `),mi(76,`span`),iD(77,`
      `),mi(78,`label`),iD(79,`Scroll: `),Ac(),iD(80,`
      `),mi(81,`div`,11),iD(82,`
        `),mi(83,`button`,12),Tp(`click`,function(){return n.scrollGridTop()}),iD(84,`
          `),vp(85,`i`,13),iD(86,`
        `),Ac(),iD(87,`
        `),mi(88,`button`,14),Tp(`click`,function(){return n.scrollGridBottom()}),iD(89,`
          `),vp(90,`i`,15),iD(91,`
        `),Ac(),iD(92,`
      `),Ac(),iD(93,`
      `),mi(94,`button`,16),Tp(`click`,function(){return n.addNewItem()}),iD(95,`
        Add New Mocked Item
      `),Ac(),iD(96,`
      `),mi(97,`button`,17),Tp(`click`,function(){return n.addNewItem(`bottom`)}),iD(98,`
        Add New Mocked Item (bottom)
      `),Ac(),iD(99,`
      `),mi(100,`button`,18),Tp(`click`,function(){return n.updateSecondItem()}),iD(101,`
        Update 2nd Row Item with Random Duration
      `),Ac(),iD(102,`
      `),mi(103,`button`,19),Tp(`click`,function(){return n.highlighFifthRow()}),iD(104,`
        Highlight 5th Row
      `),Ac(),iD(105,`
      `),mi(106,`button`,20),Tp(`click`,function(){return n.changeDurationBackgroundColor()}),iD(107,`
        Highlight Rows with Duration over 40
      `),Ac(),iD(108,`
    `),Ac(),iD(109,`
    `),vp(110,`hr`),iD(111,`
  `),Ac(),iD(112,`

  `),mi(113,`div`,10),iD(114,`
    `),mi(115,`angular-slickgrid`,21),Tp(`onAngularGridCreated`,function(l){return n.angularGridReady(l.detail)}),iD(116,`
    `),Ac(),iD(117,`
  `),Ac(),iD(118,`
`),Ac(),iD(119,`
`)),o&2&&(cy(115),mp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W],styles:[`.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return g})();export{_ as Example11Component};