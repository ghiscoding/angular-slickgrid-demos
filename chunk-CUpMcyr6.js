import{In as lD,M as Ho,a as Ap,mn as dv,on as bp,p as D,tn as _p,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,D as Mi,d as E1,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{t as Qe}from"./chunk-D0qctKwX.js";import{t as c}from"./chunk-CGe8-2e6.js";var C=1500;var k=(c,w,n,r,l,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:n});var W=(()=>{class c$1{constructor(){this.translate=D(Mi),this.subscriptions=[],this.selectedLanguage=Ho(``),this.duplicateTitleHeaderCount=1,this.hideSubTitle=!1,this.excelExportService=new Qe,this.textExportService=new c;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){E1(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:k,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`duration`,name:`Duration (days)`,field:`duration`,nameKey:`DURATION`,sortable:!0,formatter:sI.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:`number`,filter:{model:uu.slider,options:{hideSliderNumber:!0}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,minWidth:100,formatter:sI.dateIso,outputType:`dateIso`,type:`date`,exportWithFormatter:!0,filterable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:sI.dateIso,outputType:`dateIso`,type:`date`,minWidth:100,filterable:!0,filter:{model:uu.compoundDate}},{id:`completedBool`,name:`Completed`,field:`completedBool`,nameKey:`COMPLETED`,minWidth:100,sortable:!0,formatter:sI.checkmarkMaterial,exportCustomFormatter:sI.translateBoolean,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,labelKey:`TRUE`},{value:!1,labelKey:`FALSE`}],model:uu.singleSelect,enableTranslateLabel:!0}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,formatter:sI.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:`TRUE`,labelKey:`TRUE`},{value:`FALSE`,labelKey:`FALSE`}],collectionSortBy:{property:`labelKey`},enableTranslateLabel:!0,model:uu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:`ITEMS`,ofKey:`OF`,lastUpdateKey:`LAST_UPDATE`},dateFormat:`YYYY-MM-DD, hh:mm a`,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},excelExportOptions:{customExcelHeader:(n,r)=>{let l=this.translate.getCurrentLang()===`fr`?`Titre qui est suffisament long pour être coupé`:`My header that is long enough to wrap`,p=n.getStyleSheet().createFormat({font:{size:12,fontName:`Calibri`,bold:!0,color:`FF0000FF`},alignment:{wrapText:!0}});r.setRowInstructions(0,{height:30}),r.mergeCells(`B1`,`D1`);let x=[];x.push({value:``}),x.push({value:l,metadata:{style:p.id}}),r.data.push(x)}},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,menuFormats:[`csv`,`txt`],sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]},this.loadData(C)}loadData(n){let r=[];for(let l=0;l<n;l++){let a=2e3+Math.floor(Math.random()*30),o=Math.floor(Math.random()*11),p=Math.floor(Math.random()*29);r[l]={id:l,description:l%5?`desc `+l:`🚀🦄 español`,duration:Math.round(Math.random()*100)+``,start:new Date(a,o,p),finish:new Date(a,o+1,p),completedBool:l%5===0,completed:l%5===0?`TRUE`:`FALSE`}}this.dataset=r}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid}dynamicallyAddTitleHeader(){let n={id:`title${this.duplicateTitleHeaderCount++}`,field:`id`,nameKey:`TITLE`,formatter:k,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columns.push(n),this.columns=this.columns.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToFile(n=`csv`){this.textExportService.exportToFile({delimiter:n===`csv`?`,`:`	`,filename:`myExport`,format:n===`csv`?`csv`:`txt`})}gridStateChanged(n){console.log(`Grid State changed:: `,n),console.log(`Grid State changed:: `,n.change)}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||c$1)}}static{this.ɵcmp=WE({type:c$1,selectors:[[`ng-component`]],decls:142,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example12.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/localization/localization-with-ngx-translate`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/select-filter`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/export-to-text-file`,`target`,`_blank`],[1,`row`],[1,`col-sm-12`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`20px`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-download`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-shape-square-plus`],[`gridId`,`grid12`,3,`onAngularGridCreated`,`onGridStateChanged`,`dataset`,`options`,`columns`]],template:function(r,l){r&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 12: Localization (i18n)
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return l.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    Support multiple locales with the ngx-translate plugin, following these steps (`),vi(20,`a`,7),lD(21,`Wiki docs`),Rc(),lD(22,`)
    `),vi(23,`ol`,8),lD(24,`
      `),vi(25,`li`),lD(26,`You first need to "enableTranslate" in the Grid Options`),Rc(),lD(27,`
      `),vi(28,`li`),lD(29,`In the Column Definitions, you have following options`),Rc(),lD(30,`
      `),vi(31,`ul`),lD(32,`
        `),vi(33,`li`),lD(34,`To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')`),Rc(),lD(35,`
        `),vi(36,`li`),lD(37,`For the cell values, you need to use a Formatter, there's 2 ways of doing it`),Rc(),lD(38,`
        `),vi(39,`ul`),lD(40,`
          `),vi(41,`li`),lD(42,`formatter: myCustomTranslateFormatter `),vi(43,`b`),lD(44,`<= "Title" column uses it`),Rc()(),lD(45,`
          `),vi(46,`li`),lD(47,`formatter: Formatters.translate, i18n: this.translateService `),vi(48,`b`),lD(49,`<= "Completed" column uses it`),Rc()(),lD(50,`
        `),Rc(),lD(51,`
      `),Rc(),lD(52,`
      `),vi(53,`li`),lD(54,`For date localization, you need to create your own custom formatter.`),Rc(),lD(55,`
      `),vi(56,`ul`),lD(57,`
        `),vi(58,`li`),lD(59,`You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.`),Rc(),lD(60,`
      `),Rc(),lD(61,`
      `),vi(62,`li`),lD(63,`For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"`),Rc(),lD(64,`
      `),vi(65,`ul`),lD(66,`
        `),vi(67,`li`),lD(68,`
          What if your select options have totally different value/label pair? In this case, you can use the
          `),vi(69,`b`),lD(70,`customStructure: { label: 'customLabel', value: 'customValue'}`),Rc(),lD(71,` to change the property name(s) to use.'
        `),Rc(),lD(72,`
        `),vi(73,`li`),lD(74,`What if you want to use "customStructure" and translation? Simply pass this flag `),vi(75,`b`),lD(76,`enableTranslateLabel: true`),Rc()(),lD(77,`
        `),vi(78,`li`),lD(79,`
          More info on the Select Filter
          `),vi(80,`a`,9),lD(81,`Wiki page`),Rc(),lD(82,`
        `),Rc(),lD(83,`
      `),Rc(),lD(84,`
      `),vi(85,`li`),lD(86,`
        For more info about "Download to File", read the
        `),vi(87,`a`,10),lD(88,`Wiki page`),Rc(),lD(89,`
      `),Rc(),lD(90,`
    `),Rc(),lD(91,`
  `),Rc(),lD(92,`

  `),_p(93,`hr`),lD(94,`

  `),vi(95,`div`,11),lD(96,`
    `),vi(97,`div`,12),lD(98,`
      `),vi(99,`button`,13),Ap(`click`,function(){return l.switchLanguage()}),lD(100,`
        `),_p(101,`i`,14),lD(102,`
        Switch Language
      `),Rc(),lD(103,`
      `),vi(104,`b`),lD(105,`Locale:`),Rc(),lD(106,` `),vi(107,`span`,15),lD(108),Rc(),lD(109,`

      `),vi(110,`span`,16),lD(111,`
        `),vi(112,`button`,17),Ap(`click`,function(){return l.exportToFile(`csv`)}),lD(113,`
          `),_p(114,`i`,18),lD(115,`
          Download to CSV
        `),Rc(),lD(116,`
        `),vi(117,`button`,17),Ap(`click`,function(){return l.exportToFile(`txt`)}),lD(118,`
          `),_p(119,`i`,18),lD(120,`
          Download to Text
        `),Rc(),lD(121,`
        `),vi(122,`button`,17),Ap(`click`,function(){return l.exportToExcel()}),lD(123,`
          `),_p(124,`i`,19),lD(125,`
          Download to Excel
        `),Rc(),lD(126,`
        `),vi(127,`button`,17),Ap(`click`,function(){return l.dynamicallyAddTitleHeader()}),lD(128,`
          `),_p(129,`i`,20),lD(130,`
          Dynamically Duplicate Title Column
        `),Rc(),lD(131,`
      `),Rc(),lD(132,`
    `),Rc(),lD(133,`
  `),Rc(),lD(134,`

  `),vi(135,`div`,12),lD(136,`
    `),vi(137,`angular-slickgrid`,21),Ap(`onAngularGridCreated`,function(o){return l.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return l.gridStateChanged(o.detail)}),lD(138,`
    `),Rc(),lD(139,`
  `),Rc(),lD(140,`
`),Rc(),lD(141,`
`)),r&2&&(dv(108),Qp(l.selectedLanguage()+`.json`),dv(29),bp(`dataset`,l.dataset)(`options`,l.gridOptions)(`columns`,l.columns))},dependencies:[D1],encapsulation:2})}}return c$1})();export{W as Example12Component};