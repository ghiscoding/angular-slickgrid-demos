import{Ct as T,Dt as UE,En as iD,H as Jy,Kn as mp,Nn as jo,Nt as Vp,Qn as pI,Rn as lD,Tt as Tp,Un as mI,Wn as mi,_n as fI,bn as gI,bt as SI,f as Bp,hr as vp,kt as Up,ln as cy,o as Ac,pn as eE,qt as _D,r as $p,wn as hI,yr as wD}from"./chunk-06EGdSfW.js";import{At as xe,H as _W,V as Zn,b as Pm,m as Ki,mt as nk,n as CW,st as ip}from"./chunk-CAMk6vEo.js";import{_ as Vn,c as An,d as Fn,l as Dn,m as Mn,p as Ht,s as $t,u as En,y as rt}from"./main-ZP4IXK6Z.js";import{t as S}from"./chunk-on6_ksyh.js";import{t as Ze}from"./chunk-CVoct-s8.js";import{t as r}from"./chunk-D2A9m6Pt.js";function ie(s,p){if(s&1&&(iD(0,`
    `),mi(1,`span`,22),iD(2,`
      `),mi(3,`b`),iD(4,`Metrics:`),Ac(),iD(5),wD(6,`date`),Ac(),iD(7,`
  `)),s&2){let i=SI();cy(5),Bp(` `,_D(6,3,i.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `)}}function re(s,p){if(s&1&&(iD(0,`
          `),mi(1,`option`,23),iD(2),Ac(),iD(3,`
        `)),s&2){let i=p.$implicit;cy(),mp(`ngValue`,i.value),cy(),Vp(i.label)}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:i});var Se=(()=>{class s{constructor(){this.translate=T(Ki),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=jo(``),this.filterList=[{value:``,label:``},{value:`currentYearTasks`,label:`Current Year Completed Tasks`},{value:`nextYearTasks`,label:`Next Year Active Tasks`}];let i=`en`;this.translate.use(i),this.selectedLanguage.set(i)}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:le,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:nk.progressBar,type:`number`,filterable:!0,filter:{model:ip.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:nk.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:nk.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ip.dateRange}},{id:`duration`,field:`duration`,nameKey:`DURATION`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:ip.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:90,formatter:nk.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect,options:{autoAdjustDropHeight:!0}}}];let i=xe(Zn(new Date,-2),`YYYY-MM-DD`),l=xe(Zn(new Date,25),`YYYY-MM-DD`);this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,presets:{filters:[{columnId:`duration`,searchTerms:[`4..88`]},{columnId:`percentComplete`,operator:`RangeInclusive`,searchTerms:[5,80]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}],sorters:[{columnId:`percentComplete`,direction:`DESC`},{columnId:`duration`,direction:`ASC`}]},externalResources:[new S,new Ze]},this.dataset=this.mockData(ae)}angularGridReady(i){this.angularGrid=i}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:`Task `+a,description:a%5?`desc `+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100})}return r}clearFilters(){this.selectedPredefinedFilter={value:``,label:``},this.angularGrid.filterService.clearFilters()}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){let i=xe(Zn(new Date,-5),`YYYY-MM-DD`),l=xe(Zn(new Date,25),`YYYY-MM-DD`);this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[`14..78`],operator:`RangeInclusive`},{columnId:`percentComplete`,operator:`RangeExclusive`,searchTerms:[15,85]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`finish`,direction:`DESC`},{columnId:`percentComplete`,direction:`ASC`}])}usePredefinedFilter(i){let l=[],r=new Date().getFullYear();switch(i){case`currentYearTasks`:l=[{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:`completed`,operator:`=`,searchTerms:[!0]}];break;case`nextYearTasks`:l=[{columnId:`start`,operator:`>=`,searchTerms:[`${r+1}-01-01`]}];break}this.angularGrid.filterService.updateFilters(l)}switchLanguage(){let i=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=UE({type:s,selectors:[[`ng-component`]],decls:124,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters`,`target`,`_blank`],[1,`small`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`selectedFilter`,2,`margin-left`,`10px`],[`name`,`selectedFilter`,`data-test`,`select-dynamic-filter`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-2`],[`data-test`,`language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid23`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`],[3,`ngValue`]],template:function(l,r){l&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 23: Filtering from Range of Search Values
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return r.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    This demo shows how to use Filters with Range of Search Values (`),mi(20,`a`,7),iD(21,`Wiki docs`),Ac(),iD(22,`)
    `),vp(23,`br`),iD(24,`
    `),mi(25,`ul`,8),iD(26,`
      `),mi(27,`li`),iD(28,`All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range`),Ac(),iD(29,`
      `),mi(30,`li`),iD(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),Ac(),iD(32,`
      `),mi(33,`ul`),iD(34,`
        `),mi(35,`li`),iD(36,`For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range`),Ac(),iD(37,`
        `),mi(38,`li`),iD(39,`example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)`),Ac(),iD(40,`
      `),Ac(),iD(41,`
      `),mi(42,`ul`),iD(43,`
        `),mi(44,`li`),iD(45,`note that the examples shown below for the operator, are case sensitive`),Ac(),iD(46,`
        `),mi(47,`li`),iD(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),Ac(),iD(49,`
        `),mi(50,`li`),iD(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),Ac(),iD(52,`
      `),Ac(),iD(53,`
      `),mi(54,`li`),iD(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),Ac(),iD(56,`
    `),Ac(),iD(57,`
  `),Ac(),iD(58,`

  `),vp(59,`br`),iD(60,`

  `),fI(61,ie,8,6),mi(62,`form`,9),iD(63,`
    `),mi(64,`div`,10),iD(65,`
      `),mi(66,`button`,11),Tp(`click`,function(){return r.clearFilters()}),iD(67,`Clear Filters`),Ac(),iD(68,`
    `),Ac(),iD(69,`
    `),mi(70,`div`,10),iD(71,`
      `),mi(72,`button`,12),Tp(`click`,function(){return r.angularGrid.sortService.clearSorting()}),iD(73,`
        Clear Sorting
      `),Ac(),iD(74,`
    `),Ac(),iD(75,`
    `),mi(76,`div`,10),iD(77,`
      `),mi(78,`button`,13),Tp(`click`,function(){return r.setFiltersDynamically()}),iD(79,`
        Set Filters Dynamically
      `),Ac(),iD(80,`
    `),Ac(),iD(81,`
    `),mi(82,`div`,10),iD(83,`
      `),mi(84,`button`,14),Tp(`click`,function(){return r.setSortingDynamically()}),iD(85,`
        Set Sorting Dynamically
      `),Ac(),iD(86,`
    `),Ac(),iD(87,`
    `),mi(88,`div`,10),iD(89,`
      `),mi(90,`label`,15),iD(91,`Predefined Filters`),Ac(),iD(92,`
    `),Ac(),iD(93,`
    `),mi(94,`div`,10),iD(95,`
      `),mi(96,`select`,16),$p(`ngModelChange`,function(o){return lD(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),Tp(`ngModelChange`,function(o){return r.usePredefinedFilter(o)}),iD(97,`
        `),gI(98,re,4,2,null,null,hI),Ac(),Jy(),iD(100,`
    `),Ac(),iD(101,`
  `),Ac(),iD(102,`

  `),mi(103,`div`,17),iD(104,`
    `),mi(105,`div`,10),iD(106,`
      `),mi(107,`button`,18),Tp(`click`,function(){return r.switchLanguage()}),iD(108,`
        `),vp(109,`i`,19),iD(110,`
        Switch Language
      `),Ac(),iD(111,`
      `),mi(112,`b`),iD(113,`Locale:`),Ac(),iD(114,` `),mi(115,`span`,20),iD(116),Ac(),iD(117,`
    `),Ac(),iD(118,`
  `),Ac(),iD(119,`

  `),mi(120,`angular-slickgrid`,21),Tp(`onAngularGridCreated`,function(o){return r.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return r.gridStateChanged(o.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),iD(121,`
  `),Ac(),iD(122,`
`),Ac(),iD(123,`
`)),l&2&&(cy(61),pI(r.metrics?61:-1),cy(35),Up(`ngModel`,r.selectedPredefinedFilter),eE(),cy(2),mI(r.filterList),cy(18),Vp(r.selectedLanguage()+`.json`),cy(4),mp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[_W,Fn,An,Mn,En,rt,Vn,Dn,$t,Ht,Pm],encapsulation:2})}}return s})();export{Se as Example23Component};