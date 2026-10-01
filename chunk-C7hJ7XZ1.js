import{$ as Mp,Bn as lD,C as Ei,En as iD,Et as SI,Gn as mI,K as Ky,N as Gp,Sn as gI,_ as D,b as Dp,c as BE,cn as ay,ct as Oc,en as _D,er as pI,f as Bo,hn as dI,jt as Tp,kr as zp,qt as Xy,sr as qp,wn as hI,xr as wD,yt as Qp}from"./chunk-CtIlL7jI.js";import{O as Oe,Ot as xz,T as Lm,W as Zn,bt as rp,m as Gi,u as Dz,xt as uP}from"./chunk-C1NeHYCu.js";import{c as Dn,d as In,f as Mn,g as Ut,l as En,m as Nn,s as An,v as it,y as qt}from"./main-JBJUR4DQ.js";import{t as Ze}from"./chunk-dI_4WJwX.js";import{t as S}from"./chunk-oom1Gkxp.js";import{t as r}from"./chunk-D2A9m6Pt.js";function ie(s,p){if(s&1&&(iD(0,`
    `),Ei(1,`span`,22),iD(2,`
      `),Ei(3,`b`),iD(4,`Metrics:`),Oc(),iD(5),wD(6,`date`),Oc(),iD(7,`
  `)),s&2){let i=SI();ay(5),Gp(` `,_D(6,3,i.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `)}}function re(s,p){if(s&1&&(iD(0,`
          `),Ei(1,`option`,23),iD(2),Oc(),iD(3,`
        `)),s&2){let i=p.$implicit;ay(),Dp(`ngValue`,i.value),ay(),qp(i.label)}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:i});var Se=(()=>{class s{constructor(){this.translate=D(Gi),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Bo(``),this.filterList=[{value:``,label:``},{value:`currentYearTasks`,label:`Current Year Completed Tasks`},{value:`nextYearTasks`,label:`Next Year Active Tasks`}];let i=`en`;this.translate.use(i),this.selectedLanguage.set(i)}ngOnDestroy(){Dz(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:le,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:uP.progressBar,type:`number`,filterable:!0,filter:{model:rp.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:uP.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:rp.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:uP.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:rp.dateRange}},{id:`duration`,field:`duration`,nameKey:`DURATION`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:rp.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:90,formatter:uP.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:rp.singleSelect,options:{autoAdjustDropHeight:!0}}}];let i=Oe(Zn(new Date,-2),`YYYY-MM-DD`),l=Oe(Zn(new Date,25),`YYYY-MM-DD`);this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,presets:{filters:[{columnId:`duration`,searchTerms:[`4..88`]},{columnId:`percentComplete`,operator:`RangeInclusive`,searchTerms:[5,80]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}],sorters:[{columnId:`percentComplete`,direction:`DESC`},{columnId:`duration`,direction:`ASC`}]},externalResources:[new S,new Ze]},this.dataset=this.mockData(ae)}angularGridReady(i){this.angularGrid=i}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:`Task `+a,description:a%5?`desc `+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100})}return r}clearFilters(){this.selectedPredefinedFilter={value:``,label:``},this.angularGrid.filterService.clearFilters()}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){let i=Oe(Zn(new Date,-5),`YYYY-MM-DD`),l=Oe(Zn(new Date,25),`YYYY-MM-DD`);this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[`14..78`],operator:`RangeInclusive`},{columnId:`percentComplete`,operator:`RangeExclusive`,searchTerms:[15,85]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`finish`,direction:`DESC`},{columnId:`percentComplete`,direction:`ASC`}])}usePredefinedFilter(i){let l=[],r=new Date().getFullYear();switch(i){case`currentYearTasks`:l=[{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:`completed`,operator:`=`,searchTerms:[!0]}];break;case`nextYearTasks`:l=[{columnId:`start`,operator:`>=`,searchTerms:[`${r+1}-01-01`]}]}this.angularGrid.filterService.updateFilters(l)}switchLanguage(){let i=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=BE({type:s,selectors:[[`ng-component`]],decls:124,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters`,`target`,`_blank`],[1,`small`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`selectedFilter`,2,`margin-left`,`10px`],[`name`,`selectedFilter`,`data-test`,`select-dynamic-filter`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-2`],[`data-test`,`language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid23`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`],[3,`ngValue`]],template:function(l,r){l&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 23: Filtering from Range of Search Values
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return r.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    This demo shows how to use Filters with Range of Search Values (`),Ei(20,`a`,7),iD(21,`Wiki docs`),Oc(),iD(22,`)
    `),Tp(23,`br`),iD(24,`
    `),Ei(25,`ul`,8),iD(26,`
      `),Ei(27,`li`),iD(28,`All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range`),Oc(),iD(29,`
      `),Ei(30,`li`),iD(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),Oc(),iD(32,`
      `),Ei(33,`ul`),iD(34,`
        `),Ei(35,`li`),iD(36,`For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range`),Oc(),iD(37,`
        `),Ei(38,`li`),iD(39,`example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)`),Oc(),iD(40,`
      `),Oc(),iD(41,`
      `),Ei(42,`ul`),iD(43,`
        `),Ei(44,`li`),iD(45,`note that the examples shown below for the operator, are case sensitive`),Oc(),iD(46,`
        `),Ei(47,`li`),iD(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),Oc(),iD(49,`
        `),Ei(50,`li`),iD(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),Oc(),iD(52,`
      `),Oc(),iD(53,`
      `),Ei(54,`li`),iD(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),Oc(),iD(56,`
    `),Oc(),iD(57,`
  `),Oc(),iD(58,`

  `),Tp(59,`br`),iD(60,`

  `),dI(61,ie,8,6),Ei(62,`form`,9),iD(63,`
    `),Ei(64,`div`,10),iD(65,`
      `),Ei(66,`button`,11),Mp(`click`,function(){return r.clearFilters()}),iD(67,`Clear Filters`),Oc(),iD(68,`
    `),Oc(),iD(69,`
    `),Ei(70,`div`,10),iD(71,`
      `),Ei(72,`button`,12),Mp(`click`,function(){return r.angularGrid.sortService.clearSorting()}),iD(73,`
        Clear Sorting
      `),Oc(),iD(74,`
    `),Oc(),iD(75,`
    `),Ei(76,`div`,10),iD(77,`
      `),Ei(78,`button`,13),Mp(`click`,function(){return r.setFiltersDynamically()}),iD(79,`
        Set Filters Dynamically
      `),Oc(),iD(80,`
    `),Oc(),iD(81,`
    `),Ei(82,`div`,10),iD(83,`
      `),Ei(84,`button`,14),Mp(`click`,function(){return r.setSortingDynamically()}),iD(85,`
        Set Sorting Dynamically
      `),Oc(),iD(86,`
    `),Oc(),iD(87,`
    `),Ei(88,`div`,10),iD(89,`
      `),Ei(90,`label`,15),iD(91,`Predefined Filters`),Oc(),iD(92,`
    `),Oc(),iD(93,`
    `),Ei(94,`div`,10),iD(95,`
      `),Ei(96,`select`,16),Ky(),Qp(`ngModelChange`,function(o){return lD(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),Mp(`ngModelChange`,function(o){return r.usePredefinedFilter(o)}),iD(97,`
        `),gI(98,re,4,2,null,null,hI),Oc(),iD(100,`
    `),Oc(),iD(101,`
  `),Oc(),iD(102,`

  `),Ei(103,`div`,17),iD(104,`
    `),Ei(105,`div`,10),iD(106,`
      `),Ei(107,`button`,18),Mp(`click`,function(){return r.switchLanguage()}),iD(108,`
        `),Tp(109,`i`,19),iD(110,`
        Switch Language
      `),Oc(),iD(111,`
      `),Ei(112,`b`),iD(113,`Locale:`),Oc(),iD(114,` `),Ei(115,`span`,20),iD(116),Oc(),iD(117,`
    `),Oc(),iD(118,`
  `),Oc(),iD(119,`

  `),Ei(120,`angular-slickgrid`,21),Mp(`onAngularGridCreated`,function(o){return r.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return r.gridStateChanged(o.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),iD(121,`
  `),Oc(),iD(122,`
`),Oc(),iD(123,`
`)),l&2&&(ay(61),pI(r.metrics?61:-1),ay(35),zp(`ngModel`,r.selectedPredefinedFilter),Xy(),ay(2),mI(r.filterList),ay(18),qp(r.selectedLanguage()+`.json`),ay(4),Dp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[xz,In,Mn,En,Nn,it,Dn,An,qt,Ut,Lm],encapsulation:2})}}return s})();export{Se as Example23Component};