import{Dn as jp,Fn as mp,Gt as bD,Hn as oD,Kn as pE,P as Kv,Pt as Xv,T as Hp,Wt as av,Z as NE,Zt as cD,b as Fo,dn as gi,fr as wD,g as Dp,gn as hE,l as BI,m as D,n as $p,on as fE,pn as gp,tn as dE,u as Bp,un as gE,yr as xc}from"./chunk-B0w5H0p9.js";import{C as K1,F as Te,S as JN,gt as q1,kt as zp,ot as ji,w as Kn,x as Iu}from"./chunk-C7G4ZLh2.js";import{c as Cn,d as Ht,f as Mn,g as bn,l as En,m as Vn,s as An,v as qt,y as rt}from"./main-G4HCM3L6.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";import{t as r}from"./chunk-D2A9m6Pt.js";import{t as S}from"./chunk-D1IjchuW.js";function ie(s,p){if(s&1&&(oD(0,`
    `),gi(1,`span`,22),oD(2,`
      `),gi(3,`b`),oD(4,`Metrics:`),xc(),oD(5),wD(6,`date`),xc(),oD(7,`
  `)),s&2){let i=NE();av(5),Hp(` `,bD(6,3,i.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `)}}function re(s,p){if(s&1&&(oD(0,`
          `),gi(1,`option`,23),oD(2),xc(),oD(3,`
        `)),s&2){let i=p.$implicit;av(),gp(`ngValue`,i.value),av(),jp(i.label)}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:i});var Se=(()=>{class s{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Fo(``),this.filterList=[{value:``,label:``},{value:`currentYearTasks`,label:`Current Year Completed Tasks`},{value:`nextYearTasks`,label:`Next Year Active Tasks`}];let i=`en`;this.translate.use(i),this.selectedLanguage.set(i)}ngOnDestroy(){K1(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:le,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:JN.progressBar,type:`number`,filterable:!0,filter:{model:Iu.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:JN.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:Iu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:JN.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:Iu.dateRange}},{id:`duration`,field:`duration`,nameKey:`DURATION`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:Iu.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:90,formatter:JN.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:Iu.singleSelect,options:{autoAdjustDropHeight:!0}}}];let i=Te(Kn(new Date,-2),`YYYY-MM-DD`),l=Te(Kn(new Date,25),`YYYY-MM-DD`);this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,presets:{filters:[{columnId:`duration`,searchTerms:[`4..88`]},{columnId:`percentComplete`,operator:`RangeInclusive`,searchTerms:[5,80]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}],sorters:[{columnId:`percentComplete`,direction:`DESC`},{columnId:`duration`,direction:`ASC`}]},externalResources:[new S,new Ze]},this.dataset=this.mockData(ae)}angularGridReady(i){this.angularGrid=i}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:`Task `+a,description:a%5?`desc `+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100})}return r}clearFilters(){this.selectedPredefinedFilter={value:``,label:``},this.angularGrid.filterService.clearFilters()}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){let i=Te(Kn(new Date,-5),`YYYY-MM-DD`),l=Te(Kn(new Date,25),`YYYY-MM-DD`);this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[`14..78`],operator:`RangeInclusive`},{columnId:`percentComplete`,operator:`RangeExclusive`,searchTerms:[15,85]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`finish`,direction:`DESC`},{columnId:`percentComplete`,direction:`ASC`}])}usePredefinedFilter(i){let l=[],r=new Date().getFullYear();switch(i){case`currentYearTasks`:l=[{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:`completed`,operator:`=`,searchTerms:[!0]}];break;case`nextYearTasks`:l=[{columnId:`start`,operator:`>=`,searchTerms:[`${r+1}-01-01`]}];break}this.angularGrid.filterService.updateFilters(l)}switchLanguage(){let i=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=BI({type:s,selectors:[[`ng-component`]],decls:124,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters`,`target`,`_blank`],[1,`small`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`selectedFilter`,2,`margin-left`,`10px`],[`name`,`selectedFilter`,`data-test`,`select-dynamic-filter`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-2`],[`data-test`,`language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid23`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`],[3,`ngValue`]],template:function(l,r){l&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 23: Filtering from Range of Search Values
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return r.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    This demo shows how to use Filters with Range of Search Values (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`)
    `),mp(23,`br`),oD(24,`
    `),gi(25,`ul`,8),oD(26,`
      `),gi(27,`li`),oD(28,`All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range`),xc(),oD(29,`
      `),gi(30,`li`),oD(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),xc(),oD(32,`
      `),gi(33,`ul`),oD(34,`
        `),gi(35,`li`),oD(36,`For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range`),xc(),oD(37,`
        `),gi(38,`li`),oD(39,`example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)`),xc(),oD(40,`
      `),xc(),oD(41,`
      `),gi(42,`ul`),oD(43,`
        `),gi(44,`li`),oD(45,`note that the examples shown below for the operator, are case sensitive`),xc(),oD(46,`
        `),gi(47,`li`),oD(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),xc(),oD(49,`
        `),gi(50,`li`),oD(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),xc(),oD(52,`
      `),xc(),oD(53,`
      `),gi(54,`li`),oD(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),xc(),oD(56,`
    `),xc(),oD(57,`
  `),xc(),oD(58,`

  `),mp(59,`br`),oD(60,`

  `),dE(61,ie,8,6),gi(62,`form`,9),oD(63,`
    `),gi(64,`div`,10),oD(65,`
      `),gi(66,`button`,11),Dp(`click`,function(){return r.clearFilters()}),oD(67,`Clear Filters`),xc(),oD(68,`
    `),xc(),oD(69,`
    `),gi(70,`div`,10),oD(71,`
      `),gi(72,`button`,12),Dp(`click`,function(){return r.angularGrid.sortService.clearSorting()}),oD(73,`
        Clear Sorting
      `),xc(),oD(74,`
    `),xc(),oD(75,`
    `),gi(76,`div`,10),oD(77,`
      `),gi(78,`button`,13),Dp(`click`,function(){return r.setFiltersDynamically()}),oD(79,`
        Set Filters Dynamically
      `),xc(),oD(80,`
    `),xc(),oD(81,`
    `),gi(82,`div`,10),oD(83,`
      `),gi(84,`button`,14),Dp(`click`,function(){return r.setSortingDynamically()}),oD(85,`
        Set Sorting Dynamically
      `),xc(),oD(86,`
    `),xc(),oD(87,`
    `),gi(88,`div`,10),oD(89,`
      `),gi(90,`label`,15),oD(91,`Predefined Filters`),xc(),oD(92,`
    `),xc(),oD(93,`
    `),gi(94,`div`,10),oD(95,`
      `),gi(96,`select`,16),$p(`ngModelChange`,function(o){return cD(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),Dp(`ngModelChange`,function(o){return r.usePredefinedFilter(o)}),oD(97,`
        `),hE(98,re,4,2,null,null,pE),xc(),Kv(),oD(100,`
    `),xc(),oD(101,`
  `),xc(),oD(102,`

  `),gi(103,`div`,17),oD(104,`
    `),gi(105,`div`,10),oD(106,`
      `),gi(107,`button`,18),Dp(`click`,function(){return r.switchLanguage()}),oD(108,`
        `),mp(109,`i`,19),oD(110,`
        Switch Language
      `),xc(),oD(111,`
      `),gi(112,`b`),oD(113,`Locale:`),xc(),oD(114,` `),gi(115,`span`,20),oD(116),xc(),oD(117,`
    `),xc(),oD(118,`
  `),xc(),oD(119,`

  `),gi(120,`angular-slickgrid`,21),Dp(`onAngularGridCreated`,function(o){return r.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return r.gridStateChanged(o.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),oD(121,`
  `),xc(),oD(122,`
`),xc(),oD(123,`
`)),l&2&&(av(61),fE(r.metrics?61:-1),av(35),Bp(`ngModel`,r.selectedPredefinedFilter),Xv(),av(2),gE(r.filterList),av(18),jp(r.selectedLanguage()+`.json`),av(4),gp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[q1,En,bn,An,Mn,rt,Cn,Vn,qt,Ht,zp],encapsulation:2})}}return s})();export{Se as Example23Component};