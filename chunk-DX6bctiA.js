import{$ as MD,$n as pD,F as II,G as Kp,In as lD,M as Ho,Qt as Zp,Tr as xD,U as Jp,a as Ap,br as vI,bt as RI,kr as yI,mn as dv,on as bp,p as D,pr as tE,sr as rE,tn as _p,v as EI,xn as gI,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,D as Mi,U as Vn,d as E1,k as Ne,l as D1,ut as jp,yt as sI}from"./chunk-Dk5kBPyv.js";import{c as Dn,d as In,f as Mn,g as Ut,l as En,m as Nn,s as An,v as it,y as qt}from"./main-BEH6XCIK.js";import{t as Qe}from"./chunk-D0qctKwX.js";import{t as r}from"./chunk-D2A9m6Pt.js";import{t as S}from"./chunk-BN8xngTr.js";function ie(s,p){if(s&1&&(lD(0,`
    `),vi(1,`span`,22),lD(2,`
      `),vi(3,`b`),lD(4,`Metrics:`),Rc(),lD(5),MD(6,`date`),Rc(),lD(7,`
  `)),s&2){let i=RI();dv(5),Zp(` `,xD(6,3,i.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `)}}function re(s,p){if(s&1&&(lD(0,`
          `),vi(1,`option`,23),lD(2),Rc(),lD(3,`
        `)),s&2){let i=p.$implicit;dv(),bp(`ngValue`,i.value),dv(),Qp(i.label)}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:i});var Se=(()=>{class s{constructor(){this.translate=D(Mi),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Ho(``),this.filterList=[{value:``,label:``},{value:`currentYearTasks`,label:`Current Year Completed Tasks`},{value:`nextYearTasks`,label:`Next Year Active Tasks`}];let i=`en`;this.translate.use(i),this.selectedLanguage.set(i)}ngOnDestroy(){E1(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:le,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:sI.progressBar,type:`number`,filterable:!0,filter:{model:uu.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:sI.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:sI.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:uu.dateRange}},{id:`duration`,field:`duration`,nameKey:`DURATION`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:uu.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:90,formatter:sI.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect,options:{autoAdjustDropHeight:!0}}}];let i=Ne(Vn(new Date,-2),`YYYY-MM-DD`),l=Ne(Vn(new Date,25),`YYYY-MM-DD`);this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,presets:{filters:[{columnId:`duration`,searchTerms:[`4..88`]},{columnId:`percentComplete`,operator:`RangeInclusive`,searchTerms:[5,80]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}],sorters:[{columnId:`percentComplete`,direction:`DESC`},{columnId:`duration`,direction:`ASC`}]},externalResources:[new S,new Qe]},this.dataset=this.mockData(ae)}angularGridReady(i){this.angularGrid=i}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:`Task `+a,description:a%5?`desc `+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100})}return r}clearFilters(){this.selectedPredefinedFilter={value:``,label:``},this.angularGrid.filterService.clearFilters()}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){let i=Ne(Vn(new Date,-5),`YYYY-MM-DD`),l=Ne(Vn(new Date,25),`YYYY-MM-DD`);this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[`14..78`],operator:`RangeInclusive`},{columnId:`percentComplete`,operator:`RangeExclusive`,searchTerms:[15,85]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`finish`,direction:`DESC`},{columnId:`percentComplete`,direction:`ASC`}])}usePredefinedFilter(i){let l=[],r=new Date().getFullYear();switch(i){case`currentYearTasks`:l=[{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:`completed`,operator:`=`,searchTerms:[!0]}];break;case`nextYearTasks`:l=[{columnId:`start`,operator:`>=`,searchTerms:[`${r+1}-01-01`]}]}this.angularGrid.filterService.updateFilters(l)}switchLanguage(){let i=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=WE({type:s,selectors:[[`ng-component`]],decls:124,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters`,`target`,`_blank`],[1,`small`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`selectedFilter`,2,`margin-left`,`10px`],[`name`,`selectedFilter`,`data-test`,`select-dynamic-filter`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-2`],[`data-test`,`language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid23`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`],[3,`ngValue`]],template:function(l,r){l&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 23: Filtering from Range of Search Values
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    This demo shows how to use Filters with Range of Search Values (`),vi(20,`a`,7),lD(21,`Wiki docs`),Rc(),lD(22,`)
    `),_p(23,`br`),lD(24,`
    `),vi(25,`ul`,8),lD(26,`
      `),vi(27,`li`),lD(28,`All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range`),Rc(),lD(29,`
      `),vi(30,`li`),lD(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),Rc(),lD(32,`
      `),vi(33,`ul`),lD(34,`
        `),vi(35,`li`),lD(36,`For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range`),Rc(),lD(37,`
        `),vi(38,`li`),lD(39,`example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)`),Rc(),lD(40,`
      `),Rc(),lD(41,`
      `),vi(42,`ul`),lD(43,`
        `),vi(44,`li`),lD(45,`note that the examples shown below for the operator, are case sensitive`),Rc(),lD(46,`
        `),vi(47,`li`),lD(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),Rc(),lD(49,`
        `),vi(50,`li`),lD(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),Rc(),lD(52,`
      `),Rc(),lD(53,`
      `),vi(54,`li`),lD(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),Rc(),lD(56,`
    `),Rc(),lD(57,`
  `),Rc(),lD(58,`

  `),_p(59,`br`),lD(60,`

  `),gI(61,ie,8,6),vi(62,`form`,9),lD(63,`
    `),vi(64,`div`,10),lD(65,`
      `),vi(66,`button`,11),Ap(`click`,function(){return r.clearFilters()}),lD(67,`Clear Filters`),Rc(),lD(68,`
    `),Rc(),lD(69,`
    `),vi(70,`div`,10),lD(71,`
      `),vi(72,`button`,12),Ap(`click`,function(){return r.angularGrid.sortService.clearSorting()}),lD(73,`
        Clear Sorting
      `),Rc(),lD(74,`
    `),Rc(),lD(75,`
    `),vi(76,`div`,10),lD(77,`
      `),vi(78,`button`,13),Ap(`click`,function(){return r.setFiltersDynamically()}),lD(79,`
        Set Filters Dynamically
      `),Rc(),lD(80,`
    `),Rc(),lD(81,`
    `),vi(82,`div`,10),lD(83,`
      `),vi(84,`button`,14),Ap(`click`,function(){return r.setSortingDynamically()}),lD(85,`
        Set Sorting Dynamically
      `),Rc(),lD(86,`
    `),Rc(),lD(87,`
    `),vi(88,`div`,10),lD(89,`
      `),vi(90,`label`,15),lD(91,`Predefined Filters`),Rc(),lD(92,`
    `),Rc(),lD(93,`
    `),vi(94,`div`,10),lD(95,`
      `),vi(96,`select`,16),tE(),Jp(`ngModelChange`,function(o){return pD(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),Ap(`ngModelChange`,function(o){return r.usePredefinedFilter(o)}),lD(97,`
        `),EI(98,re,4,2,null,null,vI),Rc(),lD(100,`
    `),Rc(),lD(101,`
  `),Rc(),lD(102,`

  `),vi(103,`div`,17),lD(104,`
    `),vi(105,`div`,10),lD(106,`
      `),vi(107,`button`,18),Ap(`click`,function(){return r.switchLanguage()}),lD(108,`
        `),_p(109,`i`,19),lD(110,`
        Switch Language
      `),Rc(),lD(111,`
      `),vi(112,`b`),lD(113,`Locale:`),Rc(),lD(114,` `),vi(115,`span`,20),lD(116),Rc(),lD(117,`
    `),Rc(),lD(118,`
  `),Rc(),lD(119,`

  `),vi(120,`angular-slickgrid`,21),Ap(`onAngularGridCreated`,function(o){return r.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return r.gridStateChanged(o.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),lD(121,`
  `),Rc(),lD(122,`
`),Rc(),lD(123,`
`)),l&2&&(dv(61),yI(r.metrics?61:-1),dv(35),Kp(`ngModel`,r.selectedPredefinedFilter),rE(),dv(2),II(r.filterList),dv(18),Qp(r.selectedLanguage()+`.json`),dv(4),bp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[D1,In,Mn,En,Nn,it,Dn,An,qt,Ut,jp],encapsulation:2})}}return s})();export{Se as Example23Component};