import {X as XN,M as MM,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,W as Wy,a as ap}from'./main-MYLFMRPB.js';var _=(()=>{class g{constructor(){this.columns=[],this.hideSubTitle=false,this.dataset=this.mockDataset(1e3);}angularGridReady(a){this.angularGrid=a,this.dataView=a.dataView,this.grid=a.slickGrid,this.gridService=a.gridService;}ngOnInit(){this.columns=[{id:"delete",field:"id",excludeFromHeaderMenu:true,formatter:XN.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(a,o)=>{console.log(o),confirm("Are you sure?")&&this.angularGrid.gridService.deleteItemById(o.dataContext.id);}},{id:"title",name:"Title",field:"title",sortable:true,editor:{model:MM.longText}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",editor:{model:MM.text},onCellChange:(a,o)=>{alert("onCellChange directly attached to the column definition"),console.log(o);}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:XN.percentCompleteBar,type:"number",editor:{model:MM.integer}},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,sortable:true,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:XN.checkmarkMaterial,type:"number",editor:{model:MM.checkbox}}],this.gridOptions={asyncEditorLoading:false,autoResize:{container:"#demo-container",rightPadding:10},editable:true,enableColumnPicker:true,enableCellNavigation:true,enableSelection:true};}mockDataset(a){let o=[];for(let n=0;n<a;n++){let r=2e3+Math.floor(Math.random()*10),l=Math.floor(Math.random()*11),m=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);o[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*100)+"",percentComplete:u,percentCompleteNumber:u,start:new Date(r,l,m),finish:new Date(r,l+1,m),effortDriven:n%5===0};}return o}addNewItem(a){let o=this.createNewItem(1);this.angularGrid.gridService.addItem(o,{position:a});}createNewItem(a=1){let o=this.angularGrid.dataView.getItems(),n=0;o.forEach(p=>{p.id>n&&(n=p.id);});let r=n+a,l=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),u=Math.floor(Math.random()*29),b=Math.round(Math.random()*100);return {id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:b,percentCompleteNumber:b,start:new Date(l,m,u),finish:new Date(l,m+2,u),effortDriven:true}}highlighFifthRow(){this.scrollGridTop(),this.angularGrid.gridService.highlightRow(4,1500);}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate();}updateItemMetadataForDurationOver40(a){let o="duration-bg";return n=>{let r=this.dataView.getItem(n),l={cssClasses:""};return typeof a=="object"&&(l=a(n)),l&&r&&r.duration&&+r.duration>40&&(l.cssClasses=(l.cssClasses||"")+" "+o),l}}updateSecondItem(){this.scrollGridTop();let a=this.angularGrid.gridService.getDataItemByRowNumber(1);a.duration=Math.round(Math.random()*100),this.angularGrid.gridService.updateItem(a);}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom();}scrollGridTop(){this.angularGrid.slickGrid.navigateTop();}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||g)};}static{this.\u0275cmp=_I({type:g,selectors:[["ng-component"]],decls:120,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example11.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/add-update-highlight","target","_blank"],["href","https://github.com/ghiscoding/slickgrid-universal/blob/master/packages/common/src/styles/_variables.scss","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/dynamic-item-metadata","target","_blank"],[1,"col-sm-12"],["role","group",1,"btn-group"],["data-test","scroll-top-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down","mdi-rotate-180"],["data-test","scroll-bottom-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down"],["data-test","add-new-item-top-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","add-new-item-bottom-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","update-second-item-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","highlight-row5-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["data-test","highlight-duration40-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],["gridId","grid11",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,n){o&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 11: Add / Update / Highlight a Datagrid Item
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return n.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    Add / Update / Hightlight an Item from the Datagrid (`),ui(20,"a",7),qE(21,"Wiki docs"),Tc(),qE(22,`).
    `),ui(23,"ul"),qE(24,`
      `),ui(25,"li")(26,"b"),qE(27,"Note:"),Tc(),qE(28," this demo is "),ui(29,"b"),qE(30,"only"),Tc(),qE(31," on the datagrid (client) side, you still need to deal with the backend yourself"),Tc(),qE(32,`
      `),ui(33,"li"),qE(34,"Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it"),Tc(),qE(35,`
      `),ui(36,"li"),qE(37,"Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:"),Tc(),qE(38,`
      `),ui(39,"ul"),qE(40,`
        `),ui(41,"li"),qE(42,'You can enable "enableCheckboxSelector" or "enableSelection" to True'),Tc(),qE(43,`
      `),Tc(),qE(44,`
      `),ui(45,"li"),qE(46,"Click on any of the buttons below to test this out"),Tc(),qE(47,`
      `),ui(48,"li"),qE(49,`
        You can change the highlighted color & animation by changing the
        `),ui(50,"a",8),qE(51,"SASS Variables"),Tc(),qE(52,`:
      `),Tc(),qE(53,`
      `),ui(54,"ul"),qE(55,`
        `),ui(56,"li"),qE(57,'"$row-highlight-background-color" or "$row-highlight-fade-animation"'),Tc(),qE(58,`
      `),Tc(),qE(59,`
      `),ui(60,"li"),qE(61,"You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)"),Tc(),qE(62,`
      `),ui(63,"ul"),qE(64,`
        `),ui(65,"li"),qE(66,`
          Example, click on button "Highlight Rows with Duration over 50" to see row styling changing.
          `),ui(67,"a",9),qE(68,"Wiki doc"),Tc(),qE(69,`
        `),Tc(),qE(70,`
      `),Tc(),qE(71,`
    `),Tc(),qE(72,`
  `),Tc(),qE(73,`

  `),ui(74,"div",10),qE(75,`
    `),ui(76,"span"),qE(77,`
      `),ui(78,"label"),qE(79,"Scroll: "),Tc(),qE(80,`
      `),ui(81,"div",11),qE(82,`
        `),ui(83,"button",12),pp("click",function(){return n.scrollGridTop()}),qE(84,`
          `),cp(85,"i",13),qE(86,`
        `),Tc(),qE(87,`
        `),ui(88,"button",14),pp("click",function(){return n.scrollGridBottom()}),qE(89,`
          `),cp(90,"i",15),qE(91,`
        `),Tc(),qE(92,`
      `),Tc(),qE(93,`
      `),ui(94,"button",16),pp("click",function(){return n.addNewItem()}),qE(95,`
        Add New Mocked Item
      `),Tc(),qE(96,`
      `),ui(97,"button",17),pp("click",function(){return n.addNewItem("bottom")}),qE(98,`
        Add New Mocked Item (bottom)
      `),Tc(),qE(99,`
      `),ui(100,"button",18),pp("click",function(){return n.updateSecondItem()}),qE(101,`
        Update 2nd Row Item with Random Duration
      `),Tc(),qE(102,`
      `),ui(103,"button",19),pp("click",function(){return n.highlighFifthRow()}),qE(104,`
        Highlight 5th Row
      `),Tc(),qE(105,`
      `),ui(106,"button",20),pp("click",function(){return n.changeDurationBackgroundColor()}),qE(107,`
        Highlight Rows with Duration over 40
      `),Tc(),qE(108,`
    `),Tc(),qE(109,`
    `),cp(110,"hr"),qE(111,`
  `),Tc(),qE(112,`

  `),ui(113,"div",10),qE(114,`
    `),ui(115,"angular-slickgrid",21),pp("onAngularGridCreated",function(l){return n.angularGridReady(l.detail)}),qE(116,`
    `),Tc(),qE(117,`
  `),Tc(),qE(118,`
`),Tc(),qE(119,`
`)),o&2&&(Wy(115),ap("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset));},dependencies:[j1],styles:[`.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2});}}return g})();export{_ as Example11Component};