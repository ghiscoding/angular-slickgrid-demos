import {S}from'./chunk-BHP64rgi.js';import {D,e as ji,A as Ao,w as U1,f as Tu,X as XN,z as Te,E as qn,b as bI,j as j1,F as En,a5 as bn,a6 as An,a7 as Mn,a8 as rt,J as Cn,a9 as Vn,K as qt,aa as Ht,H as Hp,u as ui,U as UE,c as cp,T as Tc,p as pp,Z as ZI,R as Rp,ab as JI,ad as KI,O as Lv,W as Wy,Y as YI,P as Ap,Q as jv,ac as XI,N as Np,d as ap,h as aD,i as fE,n as xp,o as uD,S as zE}from'./main-WTCLCICA.js';import {Z as Ze}from'./chunk-Df9HDp2d.js';import {r}from'./chunk-DnY-KoaL.js';function ie(s,p){if(s&1&&(UE(0,`
    `),ui(1,"span",22),UE(2,`
      `),ui(3,"b"),UE(4,"Metrics:"),Tc(),UE(5),aD(6,"date"),Tc(),UE(7,`
  `)),s&2){let i=fE();Wy(5),xp(" ",uD(6,3,i.metrics.startTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `);}}function re(s,p){if(s&1&&(UE(0,`
          `),ui(1,"option",23),UE(2),Tc(),UE(3,`
        `)),s&2){let i=p.$implicit;Wy(),ap("ngValue",i.value),Wy(),Np(i.label);}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant("TASK_X",{x:i}),Se=(()=>{class s{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=false,this.selectedLanguage=Ao(""),this.filterList=[{value:"",label:""},{value:"currentYearTasks",label:"Current Year Completed Tasks"},{value:"nextYearTasks",label:"Next Year Active Tasks"}];let i="en";this.translate.use(i),this.selectedLanguage.set(i);}ngOnDestroy(){U1(this.subscriptions);}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:le,sortable:true,filterable:true,params:{useFormatterOuputToFilter:true}},{id:"description",name:"Description",field:"description",filterable:true,sortable:true,minWidth:80,filter:{model:r,enableTrimWhiteSpace:true}},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:120,sortable:true,customTooltip:{position:"center"},formatter:XN.progressBar,type:"number",filterable:true,filter:{model:Tu.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:false,min:0,step:5}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:XN.dateIso,sortable:true,minWidth:75,width:100,exportWithFormatter:true,type:"date",filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:XN.dateIso,sortable:true,minWidth:75,width:120,exportWithFormatter:true,type:"date",filterable:true,filter:{model:Tu.dateRange}},{id:"duration",field:"duration",nameKey:"DURATION",maxWidth:90,type:"number",sortable:true,filterable:true,filter:{model:Tu.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:90,formatter:XN.checkmarkMaterial,exportWithFormatter:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect,options:{autoAdjustDropHeight:true}}}];let i=Te(qn(new Date,-2),"YYYY-MM-DD"),l=Te(qn(new Date,25),"YYYY-MM-DD");this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:true,enableFiltering:true,enableTranslate:true,i18n:this.translate,presets:{filters:[{columnId:"duration",searchTerms:["4..88"]},{columnId:"percentComplete",operator:"RangeInclusive",searchTerms:[5,80]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[i,l]}],sorters:[{columnId:"percentComplete",direction:"DESC"},{columnId:"duration",direction:"ASC"}]},externalResources:[new S,new Ze]},this.dataset=this.mockData(ae);}angularGridReady(i){this.angularGrid=i;}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100});}return r}clearFilters(){this.selectedPredefinedFilter={value:"",label:""},this.angularGrid.filterService.clearFilters();}gridStateChanged(i){console.log("Client sample, Grid State changed:: ",i);}saveCurrentGridState(){console.log("Client sample, last Grid State:: ",this.angularGrid.gridStateService.getCurrentGridState());}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0};});}setFiltersDynamically(){let i=Te(qn(new Date,-5),"YYYY-MM-DD"),l=Te(qn(new Date,25),"YYYY-MM-DD");this.angularGrid.filterService.updateFilters([{columnId:"duration",searchTerms:["14..78"],operator:"RangeInclusive"},{columnId:"percentComplete",operator:"RangeExclusive",searchTerms:[15,85]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[i,l]}]);}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"finish",direction:"DESC"},{columnId:"percentComplete",direction:"ASC"}]);}usePredefinedFilter(i){let l=[],r=new Date().getFullYear();switch(i){case "currentYearTasks":l=[{columnId:"finish",operator:"RangeInclusive",searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:"completed",operator:"=",searchTerms:[true]}];break;case "nextYearTasks":l=[{columnId:"start",operator:">=",searchTerms:[`${r+1}-01-01`]}];break}this.angularGrid.filterService.updateFilters(l);}switchLanguage(){let i=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i);}));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||s)};}static{this.\u0275cmp=bI({type:s,selectors:[["ng-component"]],decls:124,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters","target","_blank"],[1,"small"],[1,"row","row-cols-lg-auto","g-1","align-items-center"],[1,"col"],["data-test","clear-filters",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","clear-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","selectedFilter",2,"margin-left","10px"],["name","selectedFilter","data-test","select-dynamic-filter",1,"form-select",3,"ngModelChange","ngModel"],[1,"row","mt-2"],["data-test","language",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],["gridId","grid23",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","onRowCountChanged","columns","options","dataset"],[2,"margin-right","10px"],[3,"ngValue"]],template:function(l,r){l&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 23: Filtering from Range of Search Values
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
    This demo shows how to use Filters with Range of Search Values (`),ui(20,"a",7),UE(21,"Wiki docs"),Tc(),UE(22,`)
    `),cp(23,"br"),UE(24,`
    `),ui(25,"ul",8),UE(26,`
      `),ui(27,"li"),UE(28,"All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range"),Tc(),UE(29,`
      `),ui(30,"li"),UE(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),Tc(),UE(32,`
      `),ui(33,"ul"),UE(34,`
        `),ui(35,"li"),UE(36,"For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range"),Tc(),UE(37,`
        `),ui(38,"li"),UE(39,'example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)'),Tc(),UE(40,`
      `),Tc(),UE(41,`
      `),ui(42,"ul"),UE(43,`
        `),ui(44,"li"),UE(45,"note that the examples shown below for the operator, are case sensitive"),Tc(),UE(46,`
        `),ui(47,"li"),UE(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),Tc(),UE(49,`
        `),ui(50,"li"),UE(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),Tc(),UE(52,`
      `),Tc(),UE(53,`
      `),ui(54,"li"),UE(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),Tc(),UE(56,`
    `),Tc(),UE(57,`
  `),Tc(),UE(58,`

  `),cp(59,"br"),UE(60,`

  `),ZI(61,ie,8,6),ui(62,"form",9),UE(63,`
    `),ui(64,"div",10),UE(65,`
      `),ui(66,"button",11),pp("click",function(){return r.clearFilters()}),UE(67,"Clear Filters"),Tc(),UE(68,`
    `),Tc(),UE(69,`
    `),ui(70,"div",10),UE(71,`
      `),ui(72,"button",12),pp("click",function(){return r.angularGrid.sortService.clearSorting()}),UE(73,`
        Clear Sorting
      `),Tc(),UE(74,`
    `),Tc(),UE(75,`
    `),ui(76,"div",10),UE(77,`
      `),ui(78,"button",13),pp("click",function(){return r.setFiltersDynamically()}),UE(79,`
        Set Filters Dynamically
      `),Tc(),UE(80,`
    `),Tc(),UE(81,`
    `),ui(82,"div",10),UE(83,`
      `),ui(84,"button",14),pp("click",function(){return r.setSortingDynamically()}),UE(85,`
        Set Sorting Dynamically
      `),Tc(),UE(86,`
    `),Tc(),UE(87,`
    `),ui(88,"div",10),UE(89,`
      `),ui(90,"label",15),UE(91,"Predefined Filters"),Tc(),UE(92,`
    `),Tc(),UE(93,`
    `),ui(94,"div",10),UE(95,`
      `),ui(96,"select",16),Rp("ngModelChange",function(o){return zE(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),pp("ngModelChange",function(o){return r.usePredefinedFilter(o)}),UE(97,`
        `),JI(98,re,4,2,null,null,KI),Tc(),Lv(),UE(100,`
    `),Tc(),UE(101,`
  `),Tc(),UE(102,`

  `),ui(103,"div",17),UE(104,`
    `),ui(105,"div",10),UE(106,`
      `),ui(107,"button",18),pp("click",function(){return r.switchLanguage()}),UE(108,`
        `),cp(109,"i",19),UE(110,`
        Switch Language
      `),Tc(),UE(111,`
      `),ui(112,"b"),UE(113,"Locale:"),Tc(),UE(114," "),ui(115,"span",20),UE(116),Tc(),UE(117,`
    `),Tc(),UE(118,`
  `),Tc(),UE(119,`

  `),ui(120,"angular-slickgrid",21),pp("onAngularGridCreated",function(o){return r.angularGridReady(o.detail)})("onGridStateChanged",function(o){return r.gridStateChanged(o.detail)})("onBeforeGridDestroy",function(){return r.saveCurrentGridState()})("onRowCountChanged",function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),UE(121,`
  `),Tc(),UE(122,`
`),Tc(),UE(123,`
`)),l&2&&(Wy(61),YI(r.metrics?61:-1),Wy(35),Ap("ngModel",r.selectedPredefinedFilter),jv(),Wy(2),XI(r.filterList),Wy(18),Np(r.selectedLanguage()+".json"),Wy(4),ap("columns",r.columns)("options",r.gridOptions)("dataset",r.dataset));},dependencies:[j1,En,bn,An,Mn,rt,Cn,Vn,qt,Ht,Hp],encapsulation:2});}}return s})();export{Se as Example23Component};