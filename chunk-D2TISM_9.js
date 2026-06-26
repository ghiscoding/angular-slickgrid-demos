import {Z as Ze}from'./chunk-Df9HDp2d.js';import {r}from'./chunk-DnY-KoaL.js';import {D,L as Le,e as ji,f as Tu,X as XN,b as bI,j as j1,H as Hp,u as ui,U as UE,c as cp,T as Tc,p as pp,Z as ZI,W as Wy,Y as YI,d as ap,h as aD,i as fE,n as xp,o as uD}from'./main-WTCLCICA.js';function H(l,S){if(l&1&&(UE(0,`
    `),ui(1,"span",20),UE(2,`
      `),ui(3,"b"),UE(4,"Metrics:"),Tc(),UE(5),aD(6,"date"),Tc(),UE(7,`
  `)),l&2){let o=fE();Wy(5),xp(" ",uD(6,3,o.metrics.startTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",o.metrics.itemCount,` of
      `,o.metrics.totalItemCount,` items
    `);}}function m(l,S){return Math.floor(Math.random()*(S-l+1)+l)}var P=10500,N="assets/data/collection_500_numbers.json",X=(()=>{class l{constructor(){this.http=D(Le),this.translate=D(ji),this.columns=[],this.hideSubTitle=false;}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,minWidth:55,filterable:true,filter:{model:Tu.compoundInputText}},{id:"description",name:"Description",field:"description",filterable:true,sortable:true,minWidth:80,filter:{model:r,enableTrimWhiteSpace:true}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",exportCsvForceToKeepAsString:true,minWidth:55,filterable:true,filter:{collectionAsync:this.http.get(N),collectionFilterBy:[{property:"value",operator:"!=",value:360},{property:"value",operator:"!=",value:365}],collectionSortBy:{property:"value",sortDesc:true,fieldType:"number"},customStructure:{value:"value",label:"label",optionLabel:"value",labelSuffix:"text"},collectionOptions:{separatorBetweenTextLabels:" ",filterResultAfterEachPass:"chain"},model:Tu.multipleSelect,options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:true}}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:XN.percentCompleteBar,minWidth:70,type:"number",sortable:true,filterable:true,filter:{model:Tu.compoundInputNumber}},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,minWidth:75,type:"date",filterable:true,filter:{model:Tu.compoundDate}},{id:"usDateShort",name:"US Date Short",field:"usDateShort",sortable:true,minWidth:70,width:70,type:"dateUsShort",exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"utcDate",name:"UTC Date",field:"utcDate",formatter:XN.dateTimeIsoAmPm,sortable:true,minWidth:115,type:"dateUtc",exportWithFormatter:true,outputType:"dateTimeIsoAmPm",filterable:true,filter:{model:Tu.compoundDate,options:{displayDateMin:"today"}}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven.isEffort",minWidth:85,maxWidth:85,type:"boolean",sortable:true,exportCustomFormatter:XN.complexObject,formatter:XN.multiple,params:{formatters:[XN.complexObject,XN.checkmarkMaterial]},filterable:true,filter:{collection:[{isEffort:"",label:""},{isEffort:true,label:"True"},{isEffort:false,label:"False"}],customStructure:{value:"isEffort",label:"label"},model:Tu.singleSelect,options:{autoAdjustDropHeight:true}}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelExport:true,enableExcelCopyBuffer:true,enableFiltering:true,i18n:this.translate,showCustomFooter:true,presets:{filters:[{columnId:"duration",searchTerms:[10,98]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]},externalResources:[new Ze]},this.dataset=this.mockData(P);}angularGridReady(o){this.angularGrid=o;}mockData(o,a=0){let r=[];for(let n=a;n<a+o;n++){let d=Math.round(Math.random()*100),x=m(2e3,2035),O=m(10,35),f=m(1,12),R=f<10?`0${f}`:f,b=m(10,28),_=m(0,100),L=m(10,23),y=m(10,59),U=`${m(1,9)}${m(10,99)}`,C=n%3===0;r.push({id:n,title:"Task "+n,description:n%5?"desc "+n:null,duration:d,percentComplete:_,percentCompleteNumber:_,start:n%4?null:new Date(x,f,b),usDateShort:`${f}/${b}/${O}`,utcDate:`${x}-${R}-${b}T${L}:${y}:${y}.${U}Z`,effortDriven:{isEffort:C,label:C?"Effort":"NoEffort"}});}return r}gridStateChanged(o){console.log("Client sample, Grid State changed:: ",o.change);}saveCurrentGridState(){console.log("Client sample, last Grid State:: ",this.angularGrid.gridStateService.getCurrentGridState());}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:"duration",searchTerms:[2,25,48,50]},{columnId:"complete",searchTerms:[95],operator:"<"},{columnId:"effort-driven",searchTerms:[true]},{columnId:"start",operator:">=",searchTerms:["2001-02-28"]}]);}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"duration",direction:"ASC"},{columnId:"start",direction:"DESC"}]);}refreshMetrics(o,a){a?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:a?.current||0,totalItemCount:this.dataset.length||0};});}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom();}scrollGridTop(){this.angularGrid.slickGrid.navigateTop();}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(a){return new(a||l)};}static{this.\u0275cmp=bI({type:l,selectors:[["ng-component"]],decls:100,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example04.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/sorting","target","_blank"],[1,"small"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/custom-filter","target","_blank"],["role","group",1,"btn-group"],["data-test","scroll-top-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down","mdi-rotate-180"],["data-test","scroll-bottom-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down"],["data-test","clear-filters",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","clear-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid4",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","onRowCountChanged","columns","options","dataset"],[2,"margin-right","10px"]],template:function(a,r){a&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 4: Client Side Sort/Filter
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return r.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`
  `),ui(18,"div",6),UE(19,`
    Sort/Filter on client side only using SlickGrid DataView (`),ui(20,"a",7),UE(21,"Wiki docs"),Tc(),UE(22,`)
    `),cp(23,"br"),UE(24,`
    `),ui(25,"ul",8),UE(26,`
      `),ui(27,"li"),UE(28,'Support multi-sort (by default), hold "Shift" key and click on the next column to sort.'),Tc(),UE(29,`
      `),ui(30,"li"),UE(31,"All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)"),Tc(),UE(32,`
      `),ui(33,"ul"),UE(34,`
        `),ui(35,"li"),UE(36,"Example: >100 ... >=2001-01-01 ... >02/28/17"),Tc(),UE(37,`
        `),ui(38,"li"),UE(39,`
          `),ui(40,"b"),UE(41,"Note:"),Tc(),UE(42,` For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not
          the Formatter)
        `),Tc(),UE(43,`
      `),Tc(),UE(44,`
      `),ui(45,"li"),UE(46,"Date Filters"),Tc(),UE(47,`
      `),ui(48,"ul"),UE(49,`
        `),ui(50,"li"),UE(51,`
          FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily. For
          example, in the "UTC Date" field below, you can type ">02/28/2017", also when dealing with UTC you have to take the time
          difference in consideration.
        `),Tc(),UE(52,`
      `),Tc(),UE(53,`
      `),ui(54,"li"),UE(55,'On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")'),Tc(),UE(56,`
      `),ui(57,"li"),UE(58,`
        Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See
        `),ui(59,"a",9),UE(60,"Wiki - Custom Filter"),Tc(),UE(61,`
      `),Tc(),UE(62,`
      `),ui(63,"li"),UE(64,'MultipleSelect & SingeSelect Filters can use a regular "collection" or "collectionAsync" to load it asynchronously'),Tc(),UE(65,`
    `),Tc(),UE(66,`
  `),Tc(),UE(67,`

  `),cp(68,"br"),UE(69,`
  `),ZI(70,H,8,6),ui(71,"div",10),UE(72,`
    `),ui(73,"button",11),pp("click",function(){return r.scrollGridTop()}),UE(74,`
      `),cp(75,"i",12),UE(76,`
    `),Tc(),UE(77,`
    `),ui(78,"button",13),pp("click",function(){return r.scrollGridBottom()}),UE(79,`
      `),cp(80,"i",14),UE(81,`
    `),Tc(),UE(82,`
  `),Tc(),UE(83,`
  `),ui(84,"button",15),pp("click",function(){return r.angularGrid.filterService.clearFilters()}),UE(85,`
    Clear Filters
  `),Tc(),UE(86,`
  `),ui(87,"button",16),pp("click",function(){return r.angularGrid.sortService.clearSorting()}),UE(88,`
    Clear Sorting
  `),Tc(),UE(89,`
  `),ui(90,"button",17),pp("click",function(){return r.setFiltersDynamically()}),UE(91,`
    Set Filters Dynamically
  `),Tc(),UE(92,`
  `),ui(93,"button",18),pp("click",function(){return r.setSortingDynamically()}),UE(94,`
    Set Sorting Dynamically
  `),Tc(),UE(95,`

  `),ui(96,"angular-slickgrid",19),pp("onAngularGridCreated",function(d){return r.angularGridReady(d.detail)})("onGridStateChanged",function(d){return r.gridStateChanged(d.detail)})("onBeforeGridDestroy",function(){return r.saveCurrentGridState()})("onRowCountChanged",function(d){return r.refreshMetrics(d.detail.eventData,d.detail.args)}),UE(97,`
  `),Tc(),UE(98,`
`),Tc(),UE(99,`
`)),a&2&&(Wy(70),YI(r.metrics?70:-1),Wy(26),ap("columns",r.columns)("options",r.gridOptions)("dataset",r.dataset));},dependencies:[j1,Hp],encapsulation:2});}}return l})();export{X as Example4Component};