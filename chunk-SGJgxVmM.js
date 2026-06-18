import {S}from'./chunk-CljjKoz8.js';import {D,j as ji,A as Ao,G as G1,h as Tu,q as qN,y as Te,E as qn,T as TI,U as U1,F as En,a5 as bn,a6 as An,a7 as Mn,a8 as rt,K as Cn,a9 as Vn,O as qt,aa as Ht,H as Hp,u as ui,B as BE,a as ap,d as Tc,f as fp,z as zI,P as Ap,ab as YI,ad as ZI,R as Ov,e as Uy,Q as QI,V as xp,W as Lv,ac as KI,M as Mp,g as sp,m as iD,n as uE,S as Sp,p as cD,Y as WE}from'./main-C6PQTYH6.js';import {Z as Ze}from'./chunk-CP-2FMG8.js';import {r}from'./chunk-DnY-KoaL.js';function ie(s,p){if(s&1&&(BE(0,`
    `),ui(1,"span",22),BE(2,`
      `),ui(3,"b"),BE(4,"Metrics:"),Tc(),BE(5),iD(6,"date"),Tc(),BE(7,`
  `)),s&2){let i=uE();Uy(5),Sp(" ",cD(6,3,i.metrics.startTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `);}}function re(s,p){if(s&1&&(BE(0,`
          `),ui(1,"option",23),BE(2),Tc(),BE(3,`
        `)),s&2){let i=p.$implicit;Uy(),sp("ngValue",i.value),Uy(),Mp(i.label);}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant("TASK_X",{x:i}),Se=(()=>{class s{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=false,this.selectedLanguage=Ao(""),this.filterList=[{value:"",label:""},{value:"currentYearTasks",label:"Current Year Completed Tasks"},{value:"nextYearTasks",label:"Next Year Active Tasks"}];let i="en";this.translate.use(i),this.selectedLanguage.set(i);}ngOnDestroy(){G1(this.subscriptions);}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:le,sortable:true,filterable:true,params:{useFormatterOuputToFilter:true}},{id:"description",name:"Description",field:"description",filterable:true,sortable:true,minWidth:80,filter:{model:r,enableTrimWhiteSpace:true}},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:120,sortable:true,customTooltip:{position:"center"},formatter:qN.progressBar,type:"number",filterable:true,filter:{model:Tu.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:false,min:0,step:5}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:qN.dateIso,sortable:true,minWidth:75,width:100,exportWithFormatter:true,type:"date",filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:qN.dateIso,sortable:true,minWidth:75,width:120,exportWithFormatter:true,type:"date",filterable:true,filter:{model:Tu.dateRange}},{id:"duration",field:"duration",nameKey:"DURATION",maxWidth:90,type:"number",sortable:true,filterable:true,filter:{model:Tu.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:90,formatter:qN.checkmarkMaterial,exportWithFormatter:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect,options:{autoAdjustDropHeight:true}}}];let i=Te(qn(new Date,-2),"YYYY-MM-DD"),l=Te(qn(new Date,25),"YYYY-MM-DD");this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:true,enableFiltering:true,enableTranslate:true,i18n:this.translate,presets:{filters:[{columnId:"duration",searchTerms:["4..88"]},{columnId:"percentComplete",operator:"RangeInclusive",searchTerms:[5,80]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[i,l]}],sorters:[{columnId:"percentComplete",direction:"DESC"},{columnId:"duration",direction:"ASC"}]},externalResources:[new S,new Ze]},this.dataset=this.mockData(ae);}angularGridReady(i){this.angularGrid=i;}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100});}return r}clearFilters(){this.selectedPredefinedFilter={value:"",label:""},this.angularGrid.filterService.clearFilters();}gridStateChanged(i){console.log("Client sample, Grid State changed:: ",i);}saveCurrentGridState(){console.log("Client sample, last Grid State:: ",this.angularGrid.gridStateService.getCurrentGridState());}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0};});}setFiltersDynamically(){let i=Te(qn(new Date,-5),"YYYY-MM-DD"),l=Te(qn(new Date,25),"YYYY-MM-DD");this.angularGrid.filterService.updateFilters([{columnId:"duration",searchTerms:["14..78"],operator:"RangeInclusive"},{columnId:"percentComplete",operator:"RangeExclusive",searchTerms:[15,85]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[i,l]}]);}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"finish",direction:"DESC"},{columnId:"percentComplete",direction:"ASC"}]);}usePredefinedFilter(i){let l=[],r=new Date().getFullYear();switch(i){case "currentYearTasks":l=[{columnId:"finish",operator:"RangeInclusive",searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:"completed",operator:"=",searchTerms:[true]}];break;case "nextYearTasks":l=[{columnId:"start",operator:">=",searchTerms:[`${r+1}-01-01`]}];break}this.angularGrid.filterService.updateFilters(l);}switchLanguage(){let i=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i);}));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||s)};}static{this.\u0275cmp=TI({type:s,selectors:[["ng-component"]],decls:124,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters","target","_blank"],[1,"small"],[1,"row","row-cols-lg-auto","g-1","align-items-center"],[1,"col"],["data-test","clear-filters",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","clear-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","selectedFilter",2,"margin-left","10px"],["name","selectedFilter","data-test","select-dynamic-filter",1,"form-select",3,"ngModelChange","ngModel"],[1,"row","mt-2"],["data-test","language",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],["gridId","grid23",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","onRowCountChanged","columns","options","dataset"],[2,"margin-right","10px"],[3,"ngValue"]],template:function(l,r){l&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 23: Filtering from Range of Search Values
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return r.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    This demo shows how to use Filters with Range of Search Values (`),ui(20,"a",7),BE(21,"Wiki docs"),Tc(),BE(22,`)
    `),ap(23,"br"),BE(24,`
    `),ui(25,"ul",8),BE(26,`
      `),ui(27,"li"),BE(28,"All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range"),Tc(),BE(29,`
      `),ui(30,"li"),BE(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),Tc(),BE(32,`
      `),ui(33,"ul"),BE(34,`
        `),ui(35,"li"),BE(36,"For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range"),Tc(),BE(37,`
        `),ui(38,"li"),BE(39,'example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)'),Tc(),BE(40,`
      `),Tc(),BE(41,`
      `),ui(42,"ul"),BE(43,`
        `),ui(44,"li"),BE(45,"note that the examples shown below for the operator, are case sensitive"),Tc(),BE(46,`
        `),ui(47,"li"),BE(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),Tc(),BE(49,`
        `),ui(50,"li"),BE(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),Tc(),BE(52,`
      `),Tc(),BE(53,`
      `),ui(54,"li"),BE(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),Tc(),BE(56,`
    `),Tc(),BE(57,`
  `),Tc(),BE(58,`

  `),ap(59,"br"),BE(60,`

  `),zI(61,ie,8,6),ui(62,"form",9),BE(63,`
    `),ui(64,"div",10),BE(65,`
      `),ui(66,"button",11),fp("click",function(){return r.clearFilters()}),BE(67,"Clear Filters"),Tc(),BE(68,`
    `),Tc(),BE(69,`
    `),ui(70,"div",10),BE(71,`
      `),ui(72,"button",12),fp("click",function(){return r.angularGrid.sortService.clearSorting()}),BE(73,`
        Clear Sorting
      `),Tc(),BE(74,`
    `),Tc(),BE(75,`
    `),ui(76,"div",10),BE(77,`
      `),ui(78,"button",13),fp("click",function(){return r.setFiltersDynamically()}),BE(79,`
        Set Filters Dynamically
      `),Tc(),BE(80,`
    `),Tc(),BE(81,`
    `),ui(82,"div",10),BE(83,`
      `),ui(84,"button",14),fp("click",function(){return r.setSortingDynamically()}),BE(85,`
        Set Sorting Dynamically
      `),Tc(),BE(86,`
    `),Tc(),BE(87,`
    `),ui(88,"div",10),BE(89,`
      `),ui(90,"label",15),BE(91,"Predefined Filters"),Tc(),BE(92,`
    `),Tc(),BE(93,`
    `),ui(94,"div",10),BE(95,`
      `),ui(96,"select",16),Ap("ngModelChange",function(o){return WE(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),fp("ngModelChange",function(o){return r.usePredefinedFilter(o)}),BE(97,`
        `),YI(98,re,4,2,null,null,ZI),Tc(),Ov(),BE(100,`
    `),Tc(),BE(101,`
  `),Tc(),BE(102,`

  `),ui(103,"div",17),BE(104,`
    `),ui(105,"div",10),BE(106,`
      `),ui(107,"button",18),fp("click",function(){return r.switchLanguage()}),BE(108,`
        `),ap(109,"i",19),BE(110,`
        Switch Language
      `),Tc(),BE(111,`
      `),ui(112,"b"),BE(113,"Locale:"),Tc(),BE(114," "),ui(115,"span",20),BE(116),Tc(),BE(117,`
    `),Tc(),BE(118,`
  `),Tc(),BE(119,`

  `),ui(120,"angular-slickgrid",21),fp("onAngularGridCreated",function(o){return r.angularGridReady(o.detail)})("onGridStateChanged",function(o){return r.gridStateChanged(o.detail)})("onBeforeGridDestroy",function(){return r.saveCurrentGridState()})("onRowCountChanged",function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),BE(121,`
  `),Tc(),BE(122,`
`),Tc(),BE(123,`
`)),l&2&&(Uy(61),QI(r.metrics?61:-1),Uy(35),xp("ngModel",r.selectedPredefinedFilter),Lv(),Uy(2),KI(r.filterList),Uy(18),Mp(r.selectedLanguage()+".json"),Uy(4),sp("columns",r.columns)("options",r.gridOptions)("dataset",r.dataset));},dependencies:[U1,En,bn,An,Mn,rt,Cn,Vn,qt,Ht,Hp],encapsulation:2});}}return s})();export{Se as Example23Component};