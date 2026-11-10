import{t as H}from"./chunk-B8ulfNh_.js";import{b as ot,c as En,d as In,h as Wt,m as Sn,p as Nn,s as An,u as Ht,v as bn}from"./main-KCATS47T.js";import{n as et}from"./chunk-BzRTDaIv.js";import{t as r}from"./chunk-D2A9m6Pt.js";import{Ct as ku,M as Ne,V as R$,Z as Wi,lt as dm,rt as ZR,w as I$,z as Qn}from"./chunk-Lo0QQjTd.js";import{B as II,Gn as mI,I as Ho,In as kI,K as Jp,Qt as Zp,Tn as hD,X as Lc,Y as Kp,Yn as oE,dr as uD,en as _p,f as D,h as DI,in as bp,k as GE,o as Ap,ot as ND,qn as nE,r as AD,vr as vI,wt as Qp,xn as fv,y as EI,yr as vi}from"./chunk-Cxd1Oem8.js";function ie(s,p){if(s&1&&(uD(0,`
    `),vi(1,`span`,22),uD(2,`
      `),vi(3,`b`),uD(4,`Metrics:`),Lc(),uD(5),ND(6,`date`),Lc(),uD(7,`
  `)),s&2){let i=kI();fv(5),Zp(` `,AD(6,3,i.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `)}}function re(s,p){if(s&1&&(uD(0,`
          `),vi(1,`option`,23),uD(2),Lc(),uD(3,`
        `)),s&2){let i=p.$implicit;fv(),bp(`ngValue`,i.value),fv(),Qp(i.label)}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:i});var Se=(()=>{class s{constructor(){this.translate=D(Wi),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Ho(``),this.filterList=[{value:``,label:``},{value:`currentYearTasks`,label:`Current Year Completed Tasks`},{value:`nextYearTasks`,label:`Next Year Active Tasks`}];let i=`en`;this.translate.use(i),this.selectedLanguage.set(i)}ngOnDestroy(){I$(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:le,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:ZR.progressBar,type:`number`,filterable:!0,filter:{model:ku.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:ZR.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ku.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:ZR.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ku.dateRange}},{id:`duration`,field:`duration`,nameKey:`DURATION`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:ku.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:90,formatter:ZR.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ku.singleSelect,options:{autoAdjustDropHeight:!0}}}];let i=Ne(Qn(/* @__PURE__ */ new Date,-2),`YYYY-MM-DD`),l=Ne(Qn(/* @__PURE__ */ new Date,25),`YYYY-MM-DD`);this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,presets:{filters:[{columnId:`duration`,searchTerms:[`4..88`]},{columnId:`percentComplete`,operator:`RangeInclusive`,searchTerms:[5,80]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}],sorters:[{columnId:`percentComplete`,direction:`DESC`},{columnId:`duration`,direction:`ASC`}]},externalResources:[new H,new et]},this.dataset=this.mockData(ae)}angularGridReady(i){this.angularGrid=i}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x((/* @__PURE__ */ new Date()).getFullYear(),(/* @__PURE__ */ new Date()).getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:`Task `+a,description:a%5?`desc `+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100})}return r}clearFilters(){this.selectedPredefinedFilter={value:``,label:``},this.angularGrid.filterService.clearFilters()}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:/* @__PURE__ */ new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){let i=Ne(Qn(/* @__PURE__ */ new Date,-5),`YYYY-MM-DD`),l=Ne(Qn(/* @__PURE__ */ new Date,25),`YYYY-MM-DD`);this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[`14..78`],operator:`RangeInclusive`},{columnId:`percentComplete`,operator:`RangeExclusive`,searchTerms:[15,85]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`finish`,direction:`DESC`},{columnId:`percentComplete`,direction:`ASC`}])}usePredefinedFilter(i){let l=[],r=(/* @__PURE__ */ new Date()).getFullYear();switch(i){case`currentYearTasks`:l=[{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:`completed`,operator:`=`,searchTerms:[!0]}];break;case`nextYearTasks`:l=[{columnId:`start`,operator:`>=`,searchTerms:[`${r+1}-01-01`]}]}this.angularGrid.filterService.updateFilters(l)}switchLanguage(){let i=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=GE({type:s,selectors:[[`ng-component`]],decls:124,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters`,`target`,`_blank`],[1,`small`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`selectedFilter`,2,`margin-left`,`10px`],[`name`,`selectedFilter`,`data-test`,`select-dynamic-filter`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-2`],[`data-test`,`language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid23`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`],[3,`ngValue`]],template:function(l,r){l&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 23: Filtering from Range of Search Values
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    This demo shows how to use Filters with Range of Search Values (`),vi(20,`a`,7),uD(21,`Wiki docs`),Lc(),uD(22,`)
    `),_p(23,`br`),uD(24,`
    `),vi(25,`ul`,8),uD(26,`
      `),vi(27,`li`),uD(28,`All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range`),Lc(),uD(29,`
      `),vi(30,`li`),uD(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),Lc(),uD(32,`
      `),vi(33,`ul`),uD(34,`
        `),vi(35,`li`),uD(36,`For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range`),Lc(),uD(37,`
        `),vi(38,`li`),uD(39,`example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)`),Lc(),uD(40,`
      `),Lc(),uD(41,`
      `),vi(42,`ul`),uD(43,`
        `),vi(44,`li`),uD(45,`note that the examples shown below for the operator, are case sensitive`),Lc(),uD(46,`
        `),vi(47,`li`),uD(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),Lc(),uD(49,`
        `),vi(50,`li`),uD(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),Lc(),uD(52,`
      `),Lc(),uD(53,`
      `),vi(54,`li`),uD(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),Lc(),uD(56,`
    `),Lc(),uD(57,`
  `),Lc(),uD(58,`

  `),_p(59,`br`),uD(60,`

  `),mI(61,ie,8,6),vi(62,`form`,9),uD(63,`
    `),vi(64,`div`,10),uD(65,`
      `),vi(66,`button`,11),Ap(`click`,function(){return r.clearFilters()}),uD(67,`Clear Filters`),Lc(),uD(68,`
    `),Lc(),uD(69,`
    `),vi(70,`div`,10),uD(71,`
      `),vi(72,`button`,12),Ap(`click`,function(){return r.angularGrid.sortService.clearSorting()}),uD(73,`
        Clear Sorting
      `),Lc(),uD(74,`
    `),Lc(),uD(75,`
    `),vi(76,`div`,10),uD(77,`
      `),vi(78,`button`,13),Ap(`click`,function(){return r.setFiltersDynamically()}),uD(79,`
        Set Filters Dynamically
      `),Lc(),uD(80,`
    `),Lc(),uD(81,`
    `),vi(82,`div`,10),uD(83,`
      `),vi(84,`button`,14),Ap(`click`,function(){return r.setSortingDynamically()}),uD(85,`
        Set Sorting Dynamically
      `),Lc(),uD(86,`
    `),Lc(),uD(87,`
    `),vi(88,`div`,10),uD(89,`
      `),vi(90,`label`,15),uD(91,`Predefined Filters`),Lc(),uD(92,`
    `),Lc(),uD(93,`
    `),vi(94,`div`,10),uD(95,`
      `),vi(96,`select`,16),nE(),Jp(`ngModelChange`,function(o){return hD(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),Ap(`ngModelChange`,function(o){return r.usePredefinedFilter(o)}),uD(97,`
        `),II(98,re,4,2,null,null,EI),Lc(),uD(100,`
    `),Lc(),uD(101,`
  `),Lc(),uD(102,`

  `),vi(103,`div`,17),uD(104,`
    `),vi(105,`div`,10),uD(106,`
      `),vi(107,`button`,18),Ap(`click`,function(){return r.switchLanguage()}),uD(108,`
        `),_p(109,`i`,19),uD(110,`
        Switch Language
      `),Lc(),uD(111,`
      `),vi(112,`b`),uD(113,`Locale:`),Lc(),uD(114,` `),vi(115,`span`,20),uD(116),Lc(),uD(117,`
    `),Lc(),uD(118,`
  `),Lc(),uD(119,`

  `),vi(120,`angular-slickgrid`,21),Ap(`onAngularGridCreated`,function(o){return r.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return r.gridStateChanged(o.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),uD(121,`
  `),Lc(),uD(122,`
`),Lc(),uD(123,`
`)),l&2&&(fv(61),vI(r.metrics?61:-1),fv(35),Kp(`ngModel`,r.selectedPredefinedFilter),oE(),fv(2),DI(r.filterList),fv(18),Qp(r.selectedLanguage()+`.json`),fv(4),bp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[R$,Sn,En,Nn,In,ot,An,bn,Wt,Ht,dm],encapsulation:2})}}return s})();export{Se as Example23Component};