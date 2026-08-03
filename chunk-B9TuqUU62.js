import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,v as HM}from"./chunk-C7G4ZLh2.js";var _=(()=>{class g{constructor(){this.columns=[],this.hideSubTitle=!1,this.dataset=this.mockDataset(1e3)}angularGridReady(a){this.angularGrid=a,this.dataView=a.dataView,this.grid=a.slickGrid,this.gridService=a.gridService}ngOnInit(){this.columns=[{id:`delete`,field:`id`,excludeFromHeaderMenu:!0,formatter:JN.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(a,o)=>{console.log(o),confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}},{id:`title`,name:`Title`,field:`title`,sortable:!0,editor:{model:HM.longText}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,editor:{model:HM.text},onCellChange:(a,o)=>{alert(`onCellChange directly attached to the column definition`),console.log(o)}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:JN.percentCompleteBar,type:`number`,editor:{model:HM.integer}},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:JN.checkmarkMaterial,type:`number`,editor:{model:HM.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:`#demo-container`,rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}mockDataset(a){let o=[];for(let n=0;n<a;n++){let r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),m=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);o[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,m),finish:new Date(r,l+1,m),effortDriven:n%5===0}}return o}addNewItem(a){let o=this.createNewItem(1);this.angularGrid.gridService.addItem(o,{position:a})}createNewItem(a=1){let o=this.angularGrid.dataView.getItems(),n=0;o.forEach(p=>{p.id>n&&(n=p.id)});let r=n+a,l=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),b=Math.round(Math.random()*100);return{id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:b,percentCompleteNumber:b,start:new Date(l,m,u),finish:new Date(l,m+2,u),effortDriven:!0}}highlighFifthRow(){this.scrollGridTop(),this.angularGrid.gridService.highlightRow(4,1500)}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate()}updateItemMetadataForDurationOver40(a){return n=>{let r=this.dataView.getItem(n),l={cssClasses:``};return typeof a==`object`&&(l=a(n)),l&&r&&r.duration&&+r.duration>40&&(l.cssClasses=(l.cssClasses||``)+` duration-bg`),l}}updateSecondItem(){this.scrollGridTop();let a=this.angularGrid.gridService.getDataItemByRowNumber(1);a.duration=Math.round(Math.random()*100),this.angularGrid.gridService.updateItem(a)}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||g)}}static{this.ɵcmp=BI({type:g,selectors:[[`ng-component`]],decls:120,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example11.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/add-update-highlight`,`target`,`_blank`],[`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/dynamic-item-metadata`,`target`,`_blank`],[1,`col-sm-12`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`add-new-item-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`add-new-item-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`update-second-item-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-row5-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`data-test`,`highlight-duration40-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[`gridId`,`grid11`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,n){o&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 11: Add / Update / Highlight a Datagrid Item
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return n.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    Add / Update / Hightlight an Item from the Datagrid (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`).
    `),gi(23,`ul`),oD(24,`
      `),gi(25,`li`)(26,`b`),oD(27,`Note:`),xc(),oD(28,` this demo is `),gi(29,`b`),oD(30,`only`),xc(),oD(31,` on the datagrid (client) side, you still need to deal with the backend yourself`),xc(),oD(32,`
      `),gi(33,`li`),oD(34,`Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it`),xc(),oD(35,`
      `),gi(36,`li`),oD(37,`Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:`),xc(),oD(38,`
      `),gi(39,`ul`),oD(40,`
        `),gi(41,`li`),oD(42,`You can enable "enableCheckboxSelector" or "enableSelection" to True`),xc(),oD(43,`
      `),xc(),oD(44,`
      `),gi(45,`li`),oD(46,`Click on any of the buttons below to test this out`),xc(),oD(47,`
      `),gi(48,`li`),oD(49,`
        You can change the highlighted color & animation by changing the
        `),gi(50,`a`,8),oD(51,`SASS Variables`),xc(),oD(52,`:
      `),xc(),oD(53,`
      `),gi(54,`ul`),oD(55,`
        `),gi(56,`li`),oD(57,`"$row-highlight-background-color" or "$row-highlight-fade-animation"`),xc(),oD(58,`
      `),xc(),oD(59,`
      `),gi(60,`li`),oD(61,`You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)`),xc(),oD(62,`
      `),gi(63,`ul`),oD(64,`
        `),gi(65,`li`),oD(66,`
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          `),gi(67,`a`,9),oD(68,`Wiki doc`),xc(),oD(69,`
        `),xc(),oD(70,`
      `),xc(),oD(71,`
    `),xc(),oD(72,`
  `),xc(),oD(73,`

  `),gi(74,`div`,10),oD(75,`
    `),gi(76,`span`),oD(77,`
      `),gi(78,`label`),oD(79,`Scroll: `),xc(),oD(80,`
      `),gi(81,`div`,11),oD(82,`
        `),gi(83,`button`,12),Dp(`click`,function(){return n.scrollGridTop()}),oD(84,`
          `),mp(85,`i`,13),oD(86,`
        `),xc(),oD(87,`
        `),gi(88,`button`,14),Dp(`click`,function(){return n.scrollGridBottom()}),oD(89,`
          `),mp(90,`i`,15),oD(91,`
        `),xc(),oD(92,`
      `),xc(),oD(93,`
      `),gi(94,`button`,16),Dp(`click`,function(){return n.addNewItem()}),oD(95,`
        Add New Mocked Item
      `),xc(),oD(96,`
      `),gi(97,`button`,17),Dp(`click`,function(){return n.addNewItem(`bottom`)}),oD(98,`
        Add New Mocked Item (bottom)
      `),xc(),oD(99,`
      `),gi(100,`button`,18),Dp(`click`,function(){return n.updateSecondItem()}),oD(101,`
        Update 2nd Row Item with Random Duration
      `),xc(),oD(102,`
      `),gi(103,`button`,19),Dp(`click`,function(){return n.highlighFifthRow()}),oD(104,`
        Highlight 5th Row
      `),xc(),oD(105,`
      `),gi(106,`button`,20),Dp(`click`,function(){return n.changeDurationBackgroundColor()}),oD(107,`
        Highlight Rows with Duration over 40
      `),xc(),oD(108,`
    `),xc(),oD(109,`
    `),mp(110,`hr`),oD(111,`
  `),xc(),oD(112,`

  `),gi(113,`div`,10),oD(114,`
    `),gi(115,`angular-slickgrid`,21),Dp(`onAngularGridCreated`,function(l){return n.angularGridReady(l.detail)}),oD(116,`
    `),xc(),oD(117,`
  `),xc(),oD(118,`
`),xc(),oD(119,`
`)),o&2&&(av(115),gp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[q1],styles:[`.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return g})();export{_ as Example11Component};