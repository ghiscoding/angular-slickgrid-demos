import{a as ee}from"./chunk-EJRQICLX.js";import{c as P,d as B,e as V,f as K,g as z,j as H,k as j,l as q,o as U}from"./chunk-ZTHMMPCT.js";import{b as Z}from"./chunk-CDWFOXJG.js";import{a as Q}from"./chunk-BASBBGFD.js";import{Ca as $,Da as J,fa as g,ga as h,n as A,u as X,wa as u,za as f}from"./chunk-IBXCHNN7.js";import{Aa as d,Ka as T,Kb as e,Lb as _,Ob as G,Pa as D,Pb as R,Qb as L,Rb as N,_b as O,ac as W,db as k,eb as w,fb as F,gb as I,hb as M,ia as v,ib as C,jb as t,kb as n,lb as c,vb as m,xb as Y}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";function te(s,p){if(s&1&&(e(0,`
    `),t(1,"span",22),e(2,`
      `),t(3,"b"),e(4,"Metrics:"),n(),e(5),O(6,"date"),n(),e(7,`
  `)),s&2){let i=Y();d(5),G(" ",W(6,3,i.metrics.startTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `)}}function ne(s,p){if(s&1&&(e(0,`
          `),t(1,"option",23),e(2),n(),e(3,`
        `)),s&2){let i=p.$implicit;d(),C("ngValue",i.value),d(),_(i.label)}}var ie=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var re=(s,p,i,a,r,l)=>l.getOptions().i18n.instant("TASK_X",{x:i}),xe=(()=>{class s{constructor(i){this.translate=i,this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=v(""),this.filterList=[{value:"",label:""},{value:"currentYearTasks",label:"Current Year Completed Tasks"},{value:"nextYearTasks",label:"Next Year Active Tasks"}];let a="en";this.translate.use(a),this.selectedLanguage.set(a)}ngOnDestroy(){$(this.subscriptions)}ngOnInit(){this.columnDefinitions=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:re,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,filter:{model:Q,enableTrimWhiteSpace:!0}},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:120,sortable:!0,customTooltip:{position:"center"},formatter:f.progressBar,type:"number",filterable:!0,filter:{model:u.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:!1,min:0,step:5}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:f.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:u.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:f.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:u.dateRange}},{id:"duration",field:"duration",nameKey:"DURATION",maxWidth:90,type:"number",sortable:!0,filterable:!0,filter:{model:u.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:90,formatter:f.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:u.singleSelect,options:{autoAdjustDropHeight:!0}}}];let i=h(g(new Date,-2),"YYYY-MM-DD"),a=h(g(new Date,25),"YYYY-MM-DD");this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,presets:{filters:[{columnId:"duration",searchTerms:["4..88"]},{columnId:"percentComplete",operator:"RangeInclusive",searchTerms:[5,80]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[i,a]}],sorters:[{columnId:"percentComplete",direction:"DESC"},{columnId:"duration",direction:"ASC"}]},externalResources:[new ee,new Z]},this.dataset=this.mockData(ie)}angularGridReady(i){this.angularGrid=i}mockData(i,a=0){let r=[];for(let l=a;l<a+i;l++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:l,title:"Task "+l,description:l%5?"desc "+l:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:l%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100})}return r}clearFilters(){this.selectedPredefinedFilter={value:"",label:""},this.angularGrid.filterService.clearFilters()}gridStateChanged(i){console.log("Client sample, Grid State changed:: ",i)}saveCurrentGridState(){console.log("Client sample, last Grid State:: ",this.angularGrid.gridStateService.getCurrentGridState())}refreshMetrics(i,a){a?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:a?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){let i=h(g(new Date,-5),"YYYY-MM-DD"),a=h(g(new Date,25),"YYYY-MM-DD");this.angularGrid.filterService.updateFilters([{columnId:"duration",searchTerms:["14..78"],operator:"RangeInclusive"},{columnId:"percentComplete",operator:"RangeExclusive",searchTerms:[15,85]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[i,a]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"finish",direction:"DESC"},{columnId:"percentComplete",direction:"ASC"}])}usePredefinedFilter(i){let a=[],r=new Date().getFullYear();switch(i){case"currentYearTasks":a=[{columnId:"finish",operator:"RangeInclusive",searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:"completed",operator:"=",searchTerms:[!0]}];break;case"nextYearTasks":a=[{columnId:"start",operator:">=",searchTerms:[`${r+1}-01-01`]}];break}this.angularGrid.filterService.updateFilters(a)}switchLanguage(){let i=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(a){return new(a||s)(T(X))}}static{this.\u0275cmp=D({type:s,selectors:[["ng-component"]],decls:124,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters","target","_blank"],[1,"small"],[1,"row","row-cols-lg-auto","g-1","align-items-center"],[1,"col"],["data-test","clear-filters",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","clear-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","selectedFilter",2,"margin-left","10px"],["name","selectedFilter","data-test","select-dynamic-filter",1,"form-select",3,"ngModelChange","ngModel"],[1,"row","mt-2"],["data-test","language",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],["gridId","grid23",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","onRowCountChanged","columns","options","dataset"],[2,"margin-right","10px"],[3,"ngValue"]],template:function(a,r){a&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 23: Filtering from Range of Search Values
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),c(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),t(12,"button",4),m("click",function(){return r.toggleSubTitle()}),e(13,`
      `),c(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),t(18,"div",6),e(19,`
    This demo shows how to use Filters with Range of Search Values (`),t(20,"a",7),e(21,"Wiki docs"),n(),e(22,`)
    `),c(23,"br"),e(24,`
    `),t(25,"ul",8),e(26,`
      `),t(27,"li"),e(28,"All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range"),n(),e(29,`
      `),t(30,"li"),e(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),n(),e(32,`
      `),t(33,"ul"),e(34,`
        `),t(35,"li"),e(36,"For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range"),n(),e(37,`
        `),t(38,"li"),e(39,'example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)'),n(),e(40,`
      `),n(),e(41,`
      `),t(42,"ul"),e(43,`
        `),t(44,"li"),e(45,"note that the examples shown below for the operator, are case sensitive"),n(),e(46,`
        `),t(47,"li"),e(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),n(),e(49,`
        `),t(50,"li"),e(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),n(),e(52,`
      `),n(),e(53,`
      `),t(54,"li"),e(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),n(),e(56,`
    `),n(),e(57,`
  `),n(),e(58,`

  `),c(59,"br"),e(60,`

  `),k(61,te,8,6),t(62,"form",9),e(63,`
    `),t(64,"div",10),e(65,`
      `),t(66,"button",11),m("click",function(){return r.clearFilters()}),e(67,"Clear Filters"),n(),e(68,`
    `),n(),e(69,`
    `),t(70,"div",10),e(71,`
      `),t(72,"button",12),m("click",function(){return r.angularGrid.sortService.clearSorting()}),e(73,`
        Clear Sorting
      `),n(),e(74,`
    `),n(),e(75,`
    `),t(76,"div",10),e(77,`
      `),t(78,"button",13),m("click",function(){return r.setFiltersDynamically()}),e(79,`
        Set Filters Dynamically
      `),n(),e(80,`
    `),n(),e(81,`
    `),t(82,"div",10),e(83,`
      `),t(84,"button",14),m("click",function(){return r.setSortingDynamically()}),e(85,`
        Set Sorting Dynamically
      `),n(),e(86,`
    `),n(),e(87,`
    `),t(88,"div",10),e(89,`
      `),t(90,"label",15),e(91,"Predefined Filters"),n(),e(92,`
    `),n(),e(93,`
    `),t(94,"div",10),e(95,`
      `),t(96,"select",16),N("ngModelChange",function(o){return L(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),m("ngModelChange",function(o){return r.usePredefinedFilter(o)}),e(97,`
        `),I(98,ne,4,2,null,null,F),n(),e(100,`
    `),n(),e(101,`
  `),n(),e(102,`

  `),t(103,"div",17),e(104,`
    `),t(105,"div",10),e(106,`
      `),t(107,"button",18),m("click",function(){return r.switchLanguage()}),e(108,`
        `),c(109,"i",19),e(110,`
        Switch Language
      `),n(),e(111,`
      `),t(112,"b"),e(113,"Locale:"),n(),e(114," "),t(115,"span",20),e(116),n(),e(117,`
    `),n(),e(118,`
  `),n(),e(119,`

  `),t(120,"angular-slickgrid",21),m("onAngularGridCreated",function(o){return r.angularGridReady(o.detail)})("onGridStateChanged",function(o){return r.gridStateChanged(o.detail)})("onBeforeGridDestroy",function(){return r.saveCurrentGridState()})("onRowCountChanged",function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),e(121,`
  `),n(),e(122,`
`),n(),e(123,`
`)),a&2&&(d(61),w(r.metrics?61:-1),d(35),R("ngModel",r.selectedPredefinedFilter),d(2),M(r.filterList),d(18),_(r.selectedLanguage()+".json"),d(4),C("columns",r.columnDefinitions)("options",r.gridOptions)("dataset",r.dataset))},dependencies:[J,U,z,j,q,H,P,B,K,V,A],encapsulation:2})}}return s})();export{xe as Example23Component};
