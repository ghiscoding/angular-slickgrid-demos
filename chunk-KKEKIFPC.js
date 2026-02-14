import{Da as S,ya as h,za as c}from"./chunk-IBXCHNN7.js";import{Aa as x,Kb as t,Pa as f,ib as k,jb as i,kb as e,lb as s,vb as d}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var _=(()=>{class g{constructor(){this.columnDefinitions=[],this.hideSubTitle=!1,this.dataset=this.mockDataset(1e3)}angularGridReady(a){this.angularGrid=a,this.dataView=a.dataView,this.grid=a.slickGrid,this.gridService=a.gridService}ngOnInit(){this.columnDefinitions=[{id:"delete",field:"id",excludeFromHeaderMenu:!0,formatter:c.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(a,o)=>{console.log(o),confirm("Are you sure?")&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}},{id:"title",name:"Title",field:"title",sortable:!0,editor:{model:h.longText}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",editor:{model:h.text},onCellChange:(a,o)=>{alert("onCellChange directly attached to the column definition"),console.log(o)}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:c.percentCompleteBar,type:"number",editor:{model:h.integer}},{id:"start",name:"Start",field:"start",formatter:c.dateIso,sortable:!0,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:c.dateIso,sortable:!0,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:c.checkmarkMaterial,type:"number",editor:{model:h.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0}}mockDataset(a){let o=[];for(let n=0;n<a;n++){let r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),m=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);o[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,m),finish:new Date(r,l+1,m),effortDriven:n%5===0}}return o}addNewItem(a){let o=this.createNewItem(1);this.angularGrid.gridService.addItem(o,{position:a})}createNewItem(a=1){let o=this.angularGrid.dataView.getItems(),n=0;o.forEach(p=>{p.id>n&&(n=p.id)});let r=n+a,l=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),b=Math.round(Math.random()*100);return{id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:b,percentCompleteNumber:b,start:new Date(l,m,u),finish:new Date(l,m+2,u),effortDriven:!0}}highlighFifthRow(){this.scrollGridTop(),this.angularGrid.gridService.highlightRow(4,1500)}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate()}updateItemMetadataForDurationOver40(a){let o="duration-bg";return n=>{let r=this.dataView.getItem(n),l={cssClasses:""};return typeof a=="object"&&(l=a(n)),l&&r&&r.duration&&+r.duration>40&&(l.cssClasses=(l.cssClasses||"")+" "+o),l}}updateSecondItem(){this.scrollGridTop();let a=this.angularGrid.gridService.getDataItemByRowNumber(1);a.duration=Math.round(Math.random()*100),this.angularGrid.gridService.updateItem(a)}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(o){return new(o||g)}}static{this.\u0275cmp=f({type:g,selectors:[["ng-component"]],decls:120,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example11.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/add-update-highlight","target","_blank"],["href","https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/dynamic-item-metadata","target","_blank"],[1,"col-sm-12"],["role","group",1,"btn-group"],["data-test","scroll-top-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down","mdi-rotate-180"],["data-test","scroll-bottom-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down"],["data-test","add-new-item-top-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","add-new-item-bottom-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","update-second-item-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","highlight-row5-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","highlight-duration40-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["gridId","grid11",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,n){o&1&&(i(0,"div",0),t(1,`
  `),i(2,"h2"),t(3,`
    Example 11: Add / Update / Highlight a Datagrid Item
    `),i(4,"span",1),t(5,`
      `),i(6,"a",2),t(7,`
        `),s(8,"span",3),t(9,` code
      `),e(),t(10,`
    `),e(),t(11,`
    `),i(12,"button",4),d("click",function(){return n.toggleSubTitle()}),t(13,`
      `),s(14,"span",5),t(15,`
    `),e(),t(16,`
  `),e(),t(17,`

  `),i(18,"div",6),t(19,`
    Add / Update / Hightlight an Item from the Datagrid (`),i(20,"a",7),t(21,"Wiki docs"),e(),t(22,`).
    `),i(23,"ul"),t(24,`
      `),i(25,"li")(26,"b"),t(27,"Note:"),e(),t(28," this demo is "),i(29,"b"),t(30,"only"),e(),t(31," on the datagrid (client) side, you still need to deal with the backend yourself"),e(),t(32,`
      `),i(33,"li"),t(34,"Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it"),e(),t(35,`
      `),i(36,"li"),t(37,"Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:"),e(),t(38,`
      `),i(39,"ul"),t(40,`
        `),i(41,"li"),t(42,'You can enable "enableCheckboxSelector" or "enableSelection" to True'),e(),t(43,`
      `),e(),t(44,`
      `),i(45,"li"),t(46,"Click on any of the buttons below to test this out"),e(),t(47,`
      `),i(48,"li"),t(49,`
        You can change the highlighted color & animation by changing the
        `),i(50,"a",8),t(51,"SASS Variables"),e(),t(52,`:
      `),e(),t(53,`
      `),i(54,"ul"),t(55,`
        `),i(56,"li"),t(57,'"$row-highlight-background-color" or "$row-highlight-fade-animation"'),e(),t(58,`
      `),e(),t(59,`
      `),i(60,"li"),t(61,"You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)"),e(),t(62,`
      `),i(63,"ul"),t(64,`
        `),i(65,"li"),t(66,`
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          `),i(67,"a",9),t(68,"Wiki doc"),e(),t(69,`
        `),e(),t(70,`
      `),e(),t(71,`
    `),e(),t(72,`
  `),e(),t(73,`

  `),i(74,"div",10),t(75,`
    `),i(76,"span"),t(77,`
      `),i(78,"label"),t(79,"Scroll: "),e(),t(80,`
      `),i(81,"div",11),t(82,`
        `),i(83,"button",12),d("click",function(){return n.scrollGridTop()}),t(84,`
          `),s(85,"i",13),t(86,`
        `),e(),t(87,`
        `),i(88,"button",14),d("click",function(){return n.scrollGridBottom()}),t(89,`
          `),s(90,"i",15),t(91,`
        `),e(),t(92,`
      `),e(),t(93,`
      `),i(94,"button",16),d("click",function(){return n.addNewItem()}),t(95,`
        Add New Mocked Item
      `),e(),t(96,`
      `),i(97,"button",17),d("click",function(){return n.addNewItem("bottom")}),t(98,`
        Add New Mocked Item (bottom)
      `),e(),t(99,`
      `),i(100,"button",18),d("click",function(){return n.updateSecondItem()}),t(101,`
        Update 2nd Row Item with Random Duration
      `),e(),t(102,`
      `),i(103,"button",19),d("click",function(){return n.highlighFifthRow()}),t(104,`
        Highlight 5th Row
      `),e(),t(105,`
      `),i(106,"button",20),d("click",function(){return n.changeDurationBackgroundColor()}),t(107,`
        Highlight Rows with Duration over 40
      `),e(),t(108,`
    `),e(),t(109,`
    `),s(110,"hr"),t(111,`
  `),e(),t(112,`

  `),i(113,"div",10),t(114,`
    `),i(115,"angular-slickgrid",21),d("onAngularGridCreated",function(l){return n.angularGridReady(l.detail)}),t(116,`
    `),e(),t(117,`
  `),e(),t(118,`
`),e(),t(119,`
`)),o&2&&(x(115),k("columns",n.columnDefinitions)("options",n.gridOptions)("dataset",n.dataset))},dependencies:[S],styles:[`.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return g})();export{_ as Example11Component};
