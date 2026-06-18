import {q as qN,k as kM,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,g as sp}from'./main-C6PQTYH6.js';var _=(()=>{class g{constructor(){this.columns=[],this.hideSubTitle=false,this.dataset=this.mockDataset(1e3);}angularGridReady(a){this.angularGrid=a,this.dataView=a.dataView,this.grid=a.slickGrid,this.gridService=a.gridService;}ngOnInit(){this.columns=[{id:"delete",field:"id",excludeFromHeaderMenu:true,formatter:qN.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(a,o)=>{console.log(o),confirm("Are you sure?")&&this.angularGrid.gridService.deleteItemById(o.dataContext.id);}},{id:"title",name:"Title",field:"title",sortable:true,editor:{model:kM.longText}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",editor:{model:kM.text},onCellChange:(a,o)=>{alert("onCellChange directly attached to the column definition"),console.log(o);}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:qN.percentCompleteBar,type:"number",editor:{model:kM.integer}},{id:"start",name:"Start",field:"start",formatter:qN.dateIso,sortable:true,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:qN.dateIso,sortable:true,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:qN.checkmarkMaterial,type:"number",editor:{model:kM.checkbox}}],this.gridOptions={asyncEditorLoading:false,autoResize:{container:"#demo-container",rightPadding:10},editable:true,enableColumnPicker:true,enableCellNavigation:true,enableSelection:true};}mockDataset(a){let o=[];for(let n=0;n<a;n++){let r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),m=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);o[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,m),finish:new Date(r,l+1,m),effortDriven:n%5===0};}return o}addNewItem(a){let o=this.createNewItem(1);this.angularGrid.gridService.addItem(o,{position:a});}createNewItem(a=1){let o=this.angularGrid.dataView.getItems(),n=0;o.forEach(p=>{p.id>n&&(n=p.id);});let r=n+a,l=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),b=Math.round(Math.random()*100);return {id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:b,percentCompleteNumber:b,start:new Date(l,m,u),finish:new Date(l,m+2,u),effortDriven:true}}highlighFifthRow(){this.scrollGridTop(),this.angularGrid.gridService.highlightRow(4,1500);}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate();}updateItemMetadataForDurationOver40(a){let o="duration-bg";return n=>{let r=this.dataView.getItem(n),l={cssClasses:""};return typeof a=="object"&&(l=a(n)),l&&r&&r.duration&&+r.duration>40&&(l.cssClasses=(l.cssClasses||"")+" "+o),l}}updateSecondItem(){this.scrollGridTop();let a=this.angularGrid.gridService.getDataItemByRowNumber(1);a.duration=Math.round(Math.random()*100),this.angularGrid.gridService.updateItem(a);}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom();}scrollGridTop(){this.angularGrid.slickGrid.navigateTop();}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||g)};}static{this.\u0275cmp=TI({type:g,selectors:[["ng-component"]],decls:120,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example11.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/add-update-highlight","target","_blank"],["href","https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/dynamic-item-metadata","target","_blank"],[1,"col-sm-12"],["role","group",1,"btn-group"],["data-test","scroll-top-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down","mdi-rotate-180"],["data-test","scroll-bottom-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down"],["data-test","add-new-item-top-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","add-new-item-bottom-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","update-second-item-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","highlight-row5-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","highlight-duration40-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["gridId","grid11",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,n){o&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 11: Add / Update / Highlight a Datagrid Item
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return n.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    Add / Update / Hightlight an Item from the Datagrid (`),ui(20,"a",7),BE(21,"Wiki docs"),Tc(),BE(22,`).
    `),ui(23,"ul"),BE(24,`
      `),ui(25,"li")(26,"b"),BE(27,"Note:"),Tc(),BE(28," this demo is "),ui(29,"b"),BE(30,"only"),Tc(),BE(31," on the datagrid (client) side, you still need to deal with the backend yourself"),Tc(),BE(32,`
      `),ui(33,"li"),BE(34,"Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it"),Tc(),BE(35,`
      `),ui(36,"li"),BE(37,"Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:"),Tc(),BE(38,`
      `),ui(39,"ul"),BE(40,`
        `),ui(41,"li"),BE(42,'You can enable "enableCheckboxSelector" or "enableSelection" to True'),Tc(),BE(43,`
      `),Tc(),BE(44,`
      `),ui(45,"li"),BE(46,"Click on any of the buttons below to test this out"),Tc(),BE(47,`
      `),ui(48,"li"),BE(49,`
        You can change the highlighted color & animation by changing the
        `),ui(50,"a",8),BE(51,"SASS Variables"),Tc(),BE(52,`:
      `),Tc(),BE(53,`
      `),ui(54,"ul"),BE(55,`
        `),ui(56,"li"),BE(57,'"$row-highlight-background-color" or "$row-highlight-fade-animation"'),Tc(),BE(58,`
      `),Tc(),BE(59,`
      `),ui(60,"li"),BE(61,"You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)"),Tc(),BE(62,`
      `),ui(63,"ul"),BE(64,`
        `),ui(65,"li"),BE(66,`
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          `),ui(67,"a",9),BE(68,"Wiki doc"),Tc(),BE(69,`
        `),Tc(),BE(70,`
      `),Tc(),BE(71,`
    `),Tc(),BE(72,`
  `),Tc(),BE(73,`

  `),ui(74,"div",10),BE(75,`
    `),ui(76,"span"),BE(77,`
      `),ui(78,"label"),BE(79,"Scroll: "),Tc(),BE(80,`
      `),ui(81,"div",11),BE(82,`
        `),ui(83,"button",12),fp("click",function(){return n.scrollGridTop()}),BE(84,`
          `),ap(85,"i",13),BE(86,`
        `),Tc(),BE(87,`
        `),ui(88,"button",14),fp("click",function(){return n.scrollGridBottom()}),BE(89,`
          `),ap(90,"i",15),BE(91,`
        `),Tc(),BE(92,`
      `),Tc(),BE(93,`
      `),ui(94,"button",16),fp("click",function(){return n.addNewItem()}),BE(95,`
        Add New Mocked Item
      `),Tc(),BE(96,`
      `),ui(97,"button",17),fp("click",function(){return n.addNewItem("bottom")}),BE(98,`
        Add New Mocked Item (bottom)
      `),Tc(),BE(99,`
      `),ui(100,"button",18),fp("click",function(){return n.updateSecondItem()}),BE(101,`
        Update 2nd Row Item with Random Duration
      `),Tc(),BE(102,`
      `),ui(103,"button",19),fp("click",function(){return n.highlighFifthRow()}),BE(104,`
        Highlight 5th Row
      `),Tc(),BE(105,`
      `),ui(106,"button",20),fp("click",function(){return n.changeDurationBackgroundColor()}),BE(107,`
        Highlight Rows with Duration over 40
      `),Tc(),BE(108,`
    `),Tc(),BE(109,`
    `),ap(110,"hr"),BE(111,`
  `),Tc(),BE(112,`

  `),ui(113,"div",10),BE(114,`
    `),ui(115,"angular-slickgrid",21),fp("onAngularGridCreated",function(l){return n.angularGridReady(l.detail)}),BE(116,`
    `),Tc(),BE(117,`
  `),Tc(),BE(118,`
`),Tc(),BE(119,`
`)),o&2&&(Uy(115),sp("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset));},dependencies:[U1],styles:[`.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2});}}return g})();export{_ as Example11Component};