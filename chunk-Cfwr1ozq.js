import{F as Ip,Pn as ly,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{F as WA,W as _W,ht as nk}from"./chunk-DLuyVhQJ.js";var _=(()=>{class g{constructor(){this.columns=[],this.hideSubTitle=!1,this.dataset=this.mockDataset(1e3)}angularGridReady(a){this.angularGrid=a,this.dataView=a.dataView,this.grid=a.slickGrid,this.gridService=a.gridService}ngOnInit(){this.columns=[{id:`delete`,field:`id`,excludeFromHeaderMenu:!0,formatter:nk.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(a,o)=>{console.log(o),confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}},{id:`title`,name:`Title`,field:`title`,sortable:!0,editor:{model:WA.longText}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,editor:{model:WA.text},onCellChange:(a,o)=>{alert(`onCellChange directly attached to the column definition`),console.log(o)}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,type:`number`,editor:{model:WA.integer}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,type:`number`,editor:{model:WA.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:`#demo-container`,rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}mockDataset(a){let o=[];for(let n=0;n<a;n++){let r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),m=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);o[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,m),finish:new Date(r,l+1,m),effortDriven:n%5===0}}return o}addNewItem(a){let o=this.createNewItem(1);this.angularGrid.gridService.addItem(o,{position:a})}createNewItem(a=1){let o=this.angularGrid.dataView.getItems(),n=0;o.forEach(p=>{p.id>n&&(n=p.id)});let r=n+a,l=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),b=Math.round(Math.random()*100);return{id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:b,percentCompleteNumber:b,start:new Date(l,m,u),finish:new Date(l,m+2,u),effortDriven:!0}}highlighFifthRow(){this.scrollGridTop(),this.angularGrid.gridService.highlightRow(4,1500)}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate()}updateItemMetadataForDurationOver40(a){return n=>{let r=this.dataView.getItem(n),l={cssClasses:``};return typeof a==`object`&&(l=a(n)),l&&r&&r.duration&&+r.duration>40&&(l.cssClasses=(l.cssClasses||``)+` duration-bg`),l}}updateSecondItem(){this.scrollGridTop();let a=this.angularGrid.gridService.getDataItemByRowNumber(1);a.duration=Math.round(Math.random()*100),this.angularGrid.gridService.updateItem(a)}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||g)}}static{this.ɵcmp=$E({type:g,selectors:[[`ng-component`]],decls:120,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example11.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/add-update-highlight`,`target`,`_blank`],[`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/dynamic-item-metadata`,`target`,`_blank`],[1,`col-sm-12`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`add-new-item-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`add-new-item-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`update-second-item-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-row5-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-duration40-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`gridId`,`grid11`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,n){o&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 11: Add / Update / Highlight a Datagrid Item
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return n.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    Add / Update / Hightlight an Item from the Datagrid (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`).
    `),yi(23,`ul`),sD(24,`
      `),yi(25,`li`)(26,`b`),sD(27,`Note:`),Rc(),sD(28,` this demo is `),yi(29,`b`),sD(30,`only`),Rc(),sD(31,` on the datagrid (client) side, you still need to deal with the backend yourself`),Rc(),sD(32,`
      `),yi(33,`li`),sD(34,`Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it`),Rc(),sD(35,`
      `),yi(36,`li`),sD(37,`Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:`),Rc(),sD(38,`
      `),yi(39,`ul`),sD(40,`
        `),yi(41,`li`),sD(42,`You can enable "enableCheckboxSelector" or "enableSelection" to True`),Rc(),sD(43,`
      `),Rc(),sD(44,`
      `),yi(45,`li`),sD(46,`Click on any of the buttons below to test this out`),Rc(),sD(47,`
      `),yi(48,`li`),sD(49,`
        You can change the highlighted color & animation by changing the
        `),yi(50,`a`,8),sD(51,`SASS Variables`),Rc(),sD(52,`:
      `),Rc(),sD(53,`
      `),yi(54,`ul`),sD(55,`
        `),yi(56,`li`),sD(57,`"$row-highlight-background-color" or "$row-highlight-fade-animation"`),Rc(),sD(58,`
      `),Rc(),sD(59,`
      `),yi(60,`li`),sD(61,`You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)`),Rc(),sD(62,`
      `),yi(63,`ul`),sD(64,`
        `),yi(65,`li`),sD(66,`
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          `),yi(67,`a`,9),sD(68,`Wiki doc`),Rc(),sD(69,`
        `),Rc(),sD(70,`
      `),Rc(),sD(71,`
    `),Rc(),sD(72,`
  `),Rc(),sD(73,`

  `),yi(74,`div`,10),sD(75,`
    `),yi(76,`span`),sD(77,`
      `),yi(78,`label`),sD(79,`Scroll: `),Rc(),sD(80,`
      `),yi(81,`div`,11),sD(82,`
        `),yi(83,`button`,12),bp(`click`,function(){return n.scrollGridTop()}),sD(84,`
          `),Ip(85,`i`,13),sD(86,`
        `),Rc(),sD(87,`
        `),yi(88,`button`,14),bp(`click`,function(){return n.scrollGridBottom()}),sD(89,`
          `),Ip(90,`i`,15),sD(91,`
        `),Rc(),sD(92,`
      `),Rc(),sD(93,`
      `),yi(94,`button`,16),bp(`click`,function(){return n.addNewItem()}),sD(95,`
        Add New Mocked Item
      `),Rc(),sD(96,`
      `),yi(97,`button`,17),bp(`click`,function(){return n.addNewItem(`bottom`)}),sD(98,`
        Add New Mocked Item (bottom)
      `),Rc(),sD(99,`
      `),yi(100,`button`,18),bp(`click`,function(){return n.updateSecondItem()}),sD(101,`
        Update 2nd Row Item with Random Duration
      `),Rc(),sD(102,`
      `),yi(103,`button`,19),bp(`click`,function(){return n.highlighFifthRow()}),sD(104,`
        Highlight 5th Row
      `),Rc(),sD(105,`
      `),yi(106,`button`,20),bp(`click`,function(){return n.changeDurationBackgroundColor()}),sD(107,`
        Highlight Rows with Duration over 40
      `),Rc(),sD(108,`
    `),Rc(),sD(109,`
    `),Ip(110,`hr`),sD(111,`
  `),Rc(),sD(112,`

  `),yi(113,`div`,10),sD(114,`
    `),yi(115,`angular-slickgrid`,21),bp(`onAngularGridCreated`,function(l){return n.angularGridReady(l.detail)}),sD(116,`
    `),Rc(),sD(117,`
  `),Rc(),sD(118,`
`),Rc(),sD(119,`
`)),o&2&&(ly(115),Ep(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W],styles:[`.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return g})();export{_ as Example11Component};