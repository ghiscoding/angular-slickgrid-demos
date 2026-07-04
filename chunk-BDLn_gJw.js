import {S}from'./chunk-Cyip8nDX.js';import {D,d as ji,A as Ao,U as U1,e as Tu,X as XN,w as Te,y as qn,_ as _I,j as j1,E as En,a5 as bn,a6 as An,a7 as Mn,a8 as rt,G as Cn,a9 as Vn,I as qt,aa as Ht,H as Hp,u as ui,q as qE,c as cp,T as Tc,p as pp,Y as YI,J as Rp,ab as XI,ad as JI,O as Lv,W as Wy,K as KI,P as Ap,Q as jv,ac as eE,N as Np,a as ap,g as cD,h as pE,m as xp,n as dD,S as QE}from'./main-MYLFMRPB.js';import {Z as Ze}from'./chunk-6W1Wahwc.js';import {r}from'./chunk-DnY-KoaL.js';function ie(s,p){if(s&1&&(qE(0,`
    `),ui(1,"span",22),qE(2,`
      `),ui(3,"b"),qE(4,"Metrics:"),Tc(),qE(5),cD(6,"date"),Tc(),qE(7,`
  `)),s&2){let i=pE();Wy(5),xp(" ",dD(6,3,i.metrics.startTime,"yyyy-MM-dd hh:mm aaaaa'm'")," | ",i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `);}}function re(s,p){if(s&1&&(qE(0,`
          `),ui(1,"option",23),qE(2),Tc(),qE(3,`
        `)),s&2){let i=p.$implicit;Wy(),ap("ngValue",i.value),Wy(),Np(i.label);}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant("TASK_X",{x:i}),Se=(()=>{class s{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=false,this.selectedLanguage=Ao(""),this.filterList=[{value:"",label:""},{value:"currentYearTasks",label:"Current Year Completed Tasks"},{value:"nextYearTasks",label:"Next Year Active Tasks"}];let i="en";this.translate.use(i),this.selectedLanguage.set(i);}ngOnDestroy(){U1(this.subscriptions);}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:le,sortable:true,filterable:true,params:{useFormatterOuputToFilter:true}},{id:"description",name:"Description",field:"description",filterable:true,sortable:true,minWidth:80,filter:{model:r,enableTrimWhiteSpace:true}},{id:"percentComplete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:120,sortable:true,customTooltip:{position:"center"},formatter:XN.progressBar,type:"number",filterable:true,filter:{model:Tu.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:false,min:0,step:5}}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:XN.dateIso,sortable:true,minWidth:75,width:100,exportWithFormatter:true,type:"date",filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:XN.dateIso,sortable:true,minWidth:75,width:120,exportWithFormatter:true,type:"date",filterable:true,filter:{model:Tu.dateRange}},{id:"duration",field:"duration",nameKey:"DURATION",maxWidth:90,type:"number",sortable:true,filterable:true,filter:{model:Tu.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:90,formatter:XN.checkmarkMaterial,exportWithFormatter:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect,options:{autoAdjustDropHeight:true}}}];let i=Te(qn(new Date,-2),"YYYY-MM-DD"),l=Te(qn(new Date,25),"YYYY-MM-DD");this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:true,enableFiltering:true,enableTranslate:true,i18n:this.translate,presets:{filters:[{columnId:"duration",searchTerms:["4..88"]},{columnId:"percentComplete",operator:"RangeInclusive",searchTerms:[5,80]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[i,l]}],sorters:[{columnId:"percentComplete",direction:"DESC"},{columnId:"duration",direction:"ASC"}]},externalResources:[new S,new Ze]},this.dataset=this.mockData(ae);}angularGridReady(i){this.angularGrid=i;}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:"Task "+a,description:a%5?"desc "+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100});}return r}clearFilters(){this.selectedPredefinedFilter={value:"",label:""},this.angularGrid.filterService.clearFilters();}gridStateChanged(i){console.log("Client sample, Grid State changed:: ",i);}saveCurrentGridState(){console.log("Client sample, last Grid State:: ",this.angularGrid.gridStateService.getCurrentGridState());}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0};});}setFiltersDynamically(){let i=Te(qn(new Date,-5),"YYYY-MM-DD"),l=Te(qn(new Date,25),"YYYY-MM-DD");this.angularGrid.filterService.updateFilters([{columnId:"duration",searchTerms:["14..78"],operator:"RangeInclusive"},{columnId:"percentComplete",operator:"RangeExclusive",searchTerms:[15,85]},{columnId:"finish",operator:"RangeInclusive",searchTerms:[i,l]}]);}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:"finish",direction:"DESC"},{columnId:"percentComplete",direction:"ASC"}]);}usePredefinedFilter(i){let l=[],r=new Date().getFullYear();switch(i){case "currentYearTasks":l=[{columnId:"finish",operator:"RangeInclusive",searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:"completed",operator:"=",searchTerms:[true]}];break;case "nextYearTasks":l=[{columnId:"start",operator:">=",searchTerms:[`${r+1}-01-01`]}];break}this.angularGrid.filterService.updateFilters(l);}switchLanguage(){let i=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i);}));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||s)};}static{this.\u0275cmp=_I({type:s,selectors:[["ng-component"]],decls:124,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters","target","_blank"],[1,"small"],[1,"row","row-cols-lg-auto","g-1","align-items-center"],[1,"col"],["data-test","clear-filters",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","clear-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-filter",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","set-dynamic-sorting",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["for","selectedFilter",2,"margin-left","10px"],["name","selectedFilter","data-test","select-dynamic-filter",1,"form-select",3,"ngModelChange","ngModel"],[1,"row","mt-2"],["data-test","language",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],["gridId","grid23",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","onRowCountChanged","columns","options","dataset"],[2,"margin-right","10px"],[3,"ngValue"]],template:function(l,r){l&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 23: Filtering from Range of Search Values
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return r.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    This demo shows how to use Filters with Range of Search Values (`),ui(20,"a",7),qE(21,"Wiki docs"),Tc(),qE(22,`)
    `),cp(23,"br"),qE(24,`
    `),ui(25,"ul",8),qE(26,`
      `),ui(27,"li"),qE(28,"All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range"),Tc(),qE(29,`
      `),ui(30,"li"),qE(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),Tc(),qE(32,`
      `),ui(33,"ul"),qE(34,`
        `),ui(35,"li"),qE(36,"For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range"),Tc(),qE(37,`
        `),ui(38,"li"),qE(39,'example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)'),Tc(),qE(40,`
      `),Tc(),qE(41,`
      `),ui(42,"ul"),qE(43,`
        `),ui(44,"li"),qE(45,"note that the examples shown below for the operator, are case sensitive"),Tc(),qE(46,`
        `),ui(47,"li"),qE(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),Tc(),qE(49,`
        `),ui(50,"li"),qE(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),Tc(),qE(52,`
      `),Tc(),qE(53,`
      `),ui(54,"li"),qE(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),Tc(),qE(56,`
    `),Tc(),qE(57,`
  `),Tc(),qE(58,`

  `),cp(59,"br"),qE(60,`

  `),YI(61,ie,8,6),ui(62,"form",9),qE(63,`
    `),ui(64,"div",10),qE(65,`
      `),ui(66,"button",11),pp("click",function(){return r.clearFilters()}),qE(67,"Clear Filters"),Tc(),qE(68,`
    `),Tc(),qE(69,`
    `),ui(70,"div",10),qE(71,`
      `),ui(72,"button",12),pp("click",function(){return r.angularGrid.sortService.clearSorting()}),qE(73,`
        Clear Sorting
      `),Tc(),qE(74,`
    `),Tc(),qE(75,`
    `),ui(76,"div",10),qE(77,`
      `),ui(78,"button",13),pp("click",function(){return r.setFiltersDynamically()}),qE(79,`
        Set Filters Dynamically
      `),Tc(),qE(80,`
    `),Tc(),qE(81,`
    `),ui(82,"div",10),qE(83,`
      `),ui(84,"button",14),pp("click",function(){return r.setSortingDynamically()}),qE(85,`
        Set Sorting Dynamically
      `),Tc(),qE(86,`
    `),Tc(),qE(87,`
    `),ui(88,"div",10),qE(89,`
      `),ui(90,"label",15),qE(91,"Predefined Filters"),Tc(),qE(92,`
    `),Tc(),qE(93,`
    `),ui(94,"div",10),qE(95,`
      `),ui(96,"select",16),Rp("ngModelChange",function(o){return QE(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),pp("ngModelChange",function(o){return r.usePredefinedFilter(o)}),qE(97,`
        `),XI(98,re,4,2,null,null,JI),Tc(),Lv(),qE(100,`
    `),Tc(),qE(101,`
  `),Tc(),qE(102,`

  `),ui(103,"div",17),qE(104,`
    `),ui(105,"div",10),qE(106,`
      `),ui(107,"button",18),pp("click",function(){return r.switchLanguage()}),qE(108,`
        `),cp(109,"i",19),qE(110,`
        Switch Language
      `),Tc(),qE(111,`
      `),ui(112,"b"),qE(113,"Locale:"),Tc(),qE(114," "),ui(115,"span",20),qE(116),Tc(),qE(117,`
    `),Tc(),qE(118,`
  `),Tc(),qE(119,`

  `),ui(120,"angular-slickgrid",21),pp("onAngularGridCreated",function(o){return r.angularGridReady(o.detail)})("onGridStateChanged",function(o){return r.gridStateChanged(o.detail)})("onBeforeGridDestroy",function(){return r.saveCurrentGridState()})("onRowCountChanged",function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),qE(121,`
  `),Tc(),qE(122,`
`),Tc(),qE(123,`
`)),l&2&&(Wy(61),KI(r.metrics?61:-1),Wy(35),Ap("ngModel",r.selectedPredefinedFilter),jv(),Wy(2),eE(r.filterList),Wy(18),Np(r.selectedLanguage()+".json"),Wy(4),ap("columns",r.columns)("options",r.gridOptions)("dataset",r.dataset));},dependencies:[j1,En,bn,An,Mn,rt,Cn,Vn,qt,Ht,Hp],encapsulation:2});}}return s})();export{Se as Example23Component};