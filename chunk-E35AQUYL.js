import{b as $}from"./chunk-CDWFOXJG.js";import{a as B}from"./chunk-BASBBGFD.js";import{c as I}from"./chunk-MAV7VLQV.js";import{Da as W,n as M,u as A,wa as c,za as u}from"./chunk-IBXCHNN7.js";import{Aa as h,Kb as t,Ob as G,Pa as E,U as g,_b as F,ac as w,db as T,eb as k,ib as D,jb as e,kb as i,lb as p,vb as s,xb as v}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";function H(l,S){if(l&1&&(t(0,`
    `),e(1,"span",20),t(2,`
      `),e(3,"b"),t(4,"Metrics:"),i(),t(5),F(6,"date"),i(),t(7,`
  `)),l&2){let o=v();h(5),G(" ",w(6,3,o.metrics.startTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",o.metrics.itemCount,` of
      `,o.metrics.totalItemCount,` items
    `)}}function m(l,S){return Math.floor(Math.random()*(S-l+1)+l)}var P=10500,N="assets/data/collection_500_numbers.json",X=(()=>{class l{constructor(){this.http=g(I),this.translate=g(A),this.columnDefinitions=[],this.hideSubTitle=!1}ngOnInit(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:55,filterable:!0,filter:{model:c.compoundInputText}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,filter:{model:B,enableTrimWhiteSpace:!0}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{collectionAsync:this.http.get(N),collectionFilterBy:[{property:"value",operator:"!=",value:360},{property:"value",operator:"!=",value:365}],collectionSortBy:{property:"value",sortDesc:!0,fieldType:"number"},customStructure:{value:"value",label:"label",optionLabel:"value",labelSuffix:"text"},collectionOptions:{separatorBetweenTextLabels:" ",filterResultAfterEachPass:"chain"},model:c.multipleSelect,options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:u.percentCompleteBar,minWidth:70,type:"number",sortable:!0,filterable:!0,filter:{model:c.compoundInputNumber}},{id:"start",name:"Start",field:"start",formatter:u.dateIso,sortable:!0,minWidth:75,type:"date",filterable:!0,filter:{model:c.compoundDate}},{id:"usDateShort",name:"US Date Short",field:"usDateShort",sortable:!0,minWidth:70,width:70,type:"dateUsShort",exportWithFormatter:!0,filterable:!0,filter:{model:c.compoundDate}},{id:"utcDate",name:"UTC Date",field:"utcDate",formatter:u.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:"dateUtc",exportWithFormatter:!0,outputType:"dateTimeIsoAmPm",filterable:!0,filter:{model:c.compoundDate,options:{displayDateMin:"today"}}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven.isEffort",minWidth:85,maxWidth:85,type:"boolean",sortable:!0,exportCustomFormatter:u.complexObject,formatter:u.multiple,params:{formatters:[u.complexObject,u.checkmarkMaterial]},filterable:!0,filter:{collection:[{isEffort:"",label:""},{isEffort:!0,label:"True"},{isEffort:!1,label:"False"}],customStructure:{value:"isEffort",label:"label"},model:c.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,i18n:this.translate,showCustomFooter:!0,presets:{filters:[{columnId:"duration",searchTerms:[10,98]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]},externalResources:[new $]},this.dataset=this.mockData(P)}angularGridReady(o){this.angularGrid=o}mockData(o,a=0){let r=[];for(let n=a;n<a+o;n++){let d=Math.round(Math.random()*100),x=m(2e3,2035),O=m(10,35),f=m(1,12),R=f<10?`0${f}`:f,b=m(10,28),_=m(0,100),L=m(10,23),y=m(10,59),U=`${m(1,9)}${m(10,99)}`,C=n%3===0;r.push({id:n,title:"Task "+n,description:n%5?"desc "+n:null,duration:d,percentComplete:_,percentCompleteNumber:_,start:n%4?null:new Date(x,f,b),usDateShort:`${f}/${b}/${O}`,utcDate:`${x}-${R}-${b}T${L}:${y}:${y}.${U}Z`,effortDriven:{isEffort:C,label:C?"Effort":"NoEffort"}})}return r}gridStateChanged(o){console.log("Client sample, Grid State changed:: ",o.change)}saveCurrentGridState(){console.log("Client sample, last Grid State:: ",this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:"duration",searchTerms:[2,25,48,50]},{columnId:"complete",searchTerms:[95],operator:"<"},{columnId:"effort-driven",searchTerms:[!0]},{columnId:"start",operator:">=",searchTerms:["2001-02-28"]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"duration",direction:"ASC"},{columnId:"start",direction:"DESC"}])}refreshMetrics(o,a){a?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:a?.current||0,totalItemCount:this.dataset.length||0}})}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(a){return new(a||l)}}static{this.\u0275cmp=E({type:l,selectors:[["ng-component"]],decls:100,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example04.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/sorting","target","_blank"],[1,"small"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/custom-filter","target","_blank"],["role","group",1,"btn-group"],["data-test","scroll-top-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down","mdi-rotate-180"],["data-test","scroll-bottom-btn",1,"btn","btn-sm","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-arrow-down"],["data-test","clear-filters",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","clear-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid4",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","onRowCountChanged","columns","options","dataset"],[2,"margin-right","10px"]],template:function(a,r){a&1&&(e(0,"div",0),t(1,`
  `),e(2,"h2"),t(3,`
    Example 4: Client Side Sort/Filter
    `),e(4,"span",1),t(5,`
      `),e(6,"a",2),t(7,`
        `),p(8,"span",3),t(9,` code
      `),i(),t(10,`
    `),i(),t(11,`
    `),e(12,"button",4),s("click",function(){return r.toggleSubTitle()}),t(13,`
      `),p(14,"span",5),t(15,`
    `),i(),t(16,`
  `),i(),t(17,`
  `),e(18,"div",6),t(19,`
    Sort/Filter on client side only using SlickGrid DataView (`),e(20,"a",7),t(21,"Wiki docs"),i(),t(22,`)
    `),p(23,"br"),t(24,`
    `),e(25,"ul",8),t(26,`
      `),e(27,"li"),t(28,'Support multi-sort (by default), hold "Shift" key and click on the next column to sort.'),i(),t(29,`
      `),e(30,"li"),t(31,"All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)"),i(),t(32,`
      `),e(33,"ul"),t(34,`
        `),e(35,"li"),t(36,"Example: >100 ... >=2001-01-01 ... >02/28/17"),i(),t(37,`
        `),e(38,"li"),t(39,`
          `),e(40,"b"),t(41,"Note:"),i(),t(42,` For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not
          the Formatter)
        `),i(),t(43,`
      `),i(),t(44,`
      `),e(45,"li"),t(46,"Date Filters"),i(),t(47,`
      `),e(48,"ul"),t(49,`
        `),e(50,"li"),t(51,`
          FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily. For
          example, in the "UTC Date" field below, you can type ">02/28/2017", also when dealing with UTC you have to take the time
          difference in consideration.
        `),i(),t(52,`
      `),i(),t(53,`
      `),e(54,"li"),t(55,'On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")'),i(),t(56,`
      `),e(57,"li"),t(58,`
        Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See
        `),e(59,"a",9),t(60,"Wiki - Custom Filter"),i(),t(61,`
      `),i(),t(62,`
      `),e(63,"li"),t(64,'MultipleSelect & SingeSelect Filters can use a regular "collection" or "collectionAsync" to load it asynchronously'),i(),t(65,`
    `),i(),t(66,`
  `),i(),t(67,`

  `),p(68,"br"),t(69,`
  `),T(70,H,8,6),e(71,"div",10),t(72,`
    `),e(73,"button",11),s("click",function(){return r.scrollGridTop()}),t(74,`
      `),p(75,"i",12),t(76,`
    `),i(),t(77,`
    `),e(78,"button",13),s("click",function(){return r.scrollGridBottom()}),t(79,`
      `),p(80,"i",14),t(81,`
    `),i(),t(82,`
  `),i(),t(83,`
  `),e(84,"button",15),s("click",function(){return r.angularGrid.filterService.clearFilters()}),t(85,`
    Clear Filters
  `),i(),t(86,`
  `),e(87,"button",16),s("click",function(){return r.angularGrid.sortService.clearSorting()}),t(88,`
    Clear Sorting
  `),i(),t(89,`
  `),e(90,"button",17),s("click",function(){return r.setFiltersDynamically()}),t(91,`
    Set Filters Dynamically
  `),i(),t(92,`
  `),e(93,"button",18),s("click",function(){return r.setSortingDynamically()}),t(94,`
    Set Sorting Dynamically
  `),i(),t(95,`

  `),e(96,"angular-slickgrid",19),s("onAngularGridCreated",function(d){return r.angularGridReady(d.detail)})("onGridStateChanged",function(d){return r.gridStateChanged(d.detail)})("onBeforeGridDestroy",function(){return r.saveCurrentGridState()})("onRowCountChanged",function(d){return r.refreshMetrics(d.detail.eventData,d.detail.args)}),t(97,`
  `),i(),t(98,`
`),i(),t(99,`
`)),a&2&&(h(70),k(r.metrics?70:-1),h(26),D("columns",r.columnDefinitions)("options",r.gridOptions)("dataset",r.dataset))},dependencies:[W,M],encapsulation:2})}}return l})();export{X as Example4Component};
