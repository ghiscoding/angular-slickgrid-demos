import{t as g}from"./chunk-BHSVMkUx.js";import{n as et}from"./chunk-BzRTDaIv.js";import{Ct as ku,V as R$,Z as Wi,rt as ZR,w as I$}from"./chunk-Lo0QQjTd.js";import{I as Ho,X as Lc,dr as uD,en as _p,f as D,in as bp,k as GE,o as Ap,wt as Qp,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var C=1500;var k=(c,w,n,r,l,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:n});var W=(()=>{class c{constructor(){this.translate=D(Wi),this.subscriptions=[],this.selectedLanguage=Ho(``),this.duplicateTitleHeaderCount=1,this.hideSubTitle=!1,this.excelExportService=new et,this.textExportService=new g;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){I$(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:k,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`duration`,name:`Duration (days)`,field:`duration`,nameKey:`DURATION`,sortable:!0,formatter:ZR.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:`number`,filter:{model:ku.slider,options:{hideSliderNumber:!0}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,minWidth:100,formatter:ZR.dateIso,outputType:`dateIso`,type:`date`,exportWithFormatter:!0,filterable:!0,filter:{model:ku.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:ZR.dateIso,outputType:`dateIso`,type:`date`,minWidth:100,filterable:!0,filter:{model:ku.compoundDate}},{id:`completedBool`,name:`Completed`,field:`completedBool`,nameKey:`COMPLETED`,minWidth:100,sortable:!0,formatter:ZR.checkmarkMaterial,exportCustomFormatter:ZR.translateBoolean,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,labelKey:`TRUE`},{value:!1,labelKey:`FALSE`}],model:ku.singleSelect,enableTranslateLabel:!0}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,formatter:ZR.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:`TRUE`,labelKey:`TRUE`},{value:`FALSE`,labelKey:`FALSE`}],collectionSortBy:{property:`labelKey`},enableTranslateLabel:!0,model:ku.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:`ITEMS`,ofKey:`OF`,lastUpdateKey:`LAST_UPDATE`},dateFormat:`YYYY-MM-DD, hh:mm a`,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},excelExportOptions:{customExcelHeader:(n,r)=>{let l=this.translate.getCurrentLang()===`fr`?`Titre qui est suffisament long pour être coupé`:`My header that is long enough to wrap`,p=n.getStyleSheet().createFormat({font:{size:12,fontName:`Calibri`,bold:!0,color:`FF0000FF`},alignment:{wrapText:!0}});r.setRowInstructions(0,{height:30}),r.mergeCells(`B1`,`D1`);let x=[];x.push({value:``}),x.push({value:l,metadata:{style:p.id}}),r.data.push(x)}},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,menuFormats:[`csv`,`txt`],sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]},this.loadData(C)}loadData(n){let r=[];for(let l=0;l<n;l++){let a=2e3+Math.floor(Math.random()*30),o=Math.floor(Math.random()*11),p=Math.floor(Math.random()*29);r[l]={id:l,description:l%5?`desc `+l:`🚀🦄 español`,duration:Math.round(Math.random()*100)+``,start:new Date(a,o,p),finish:new Date(a,o+1,p),completedBool:l%5===0,completed:l%5===0?`TRUE`:`FALSE`}}this.dataset=r}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid}dynamicallyAddTitleHeader(){let n={id:`title${this.duplicateTitleHeaderCount++}`,field:`id`,nameKey:`TITLE`,formatter:k,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columns.push(n),this.columns=this.columns.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToFile(n=`csv`){this.textExportService.exportToFile({delimiter:n===`csv`?`,`:`	`,filename:`myExport`,format:n===`csv`?`csv`:`txt`})}gridStateChanged(n){console.log(`Grid State changed:: `,n),console.log(`Grid State changed:: `,n.change)}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||c)}}static{this.ɵcmp=GE({type:c,selectors:[[`ng-component`]],decls:142,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example12.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/localization/localization-with-ngx-translate`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/select-filter`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/export-to-text-file`,`target`,`_blank`],[1,`row`],[1,`col-sm-12`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`20px`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-download`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-shape-square-plus`],[`gridId`,`grid12`,3,`onAngularGridCreated`,`onGridStateChanged`,`dataset`,`options`,`columns`]],template:function(r,l){r&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 12: Localization (i18n)
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return l.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    Support multiple locales with the ngx-translate plugin, following these steps (`),vi(20,`a`,7),uD(21,`Wiki docs`),Lc(),uD(22,`)
    `),vi(23,`ol`,8),uD(24,`
      `),vi(25,`li`),uD(26,`You first need to "enableTranslate" in the Grid Options`),Lc(),uD(27,`
      `),vi(28,`li`),uD(29,`In the Column Definitions, you have following options`),Lc(),uD(30,`
      `),vi(31,`ul`),uD(32,`
        `),vi(33,`li`),uD(34,`To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')`),Lc(),uD(35,`
        `),vi(36,`li`),uD(37,`For the cell values, you need to use a Formatter, there's 2 ways of doing it`),Lc(),uD(38,`
        `),vi(39,`ul`),uD(40,`
          `),vi(41,`li`),uD(42,`formatter: myCustomTranslateFormatter `),vi(43,`b`),uD(44,`<= "Title" column uses it`),Lc()(),uD(45,`
          `),vi(46,`li`),uD(47,`formatter: Formatters.translate, i18n: this.translateService `),vi(48,`b`),uD(49,`<= "Completed" column uses it`),Lc()(),uD(50,`
        `),Lc(),uD(51,`
      `),Lc(),uD(52,`
      `),vi(53,`li`),uD(54,`For date localization, you need to create your own custom formatter.`),Lc(),uD(55,`
      `),vi(56,`ul`),uD(57,`
        `),vi(58,`li`),uD(59,`You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.`),Lc(),uD(60,`
      `),Lc(),uD(61,`
      `),vi(62,`li`),uD(63,`For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"`),Lc(),uD(64,`
      `),vi(65,`ul`),uD(66,`
        `),vi(67,`li`),uD(68,`
          What if your select options have totally different value/label pair? In this case, you can use the
          `),vi(69,`b`),uD(70,`customStructure: { label: 'customLabel', value: 'customValue'}`),Lc(),uD(71,` to change the property name(s) to use.'
        `),Lc(),uD(72,`
        `),vi(73,`li`),uD(74,`What if you want to use "customStructure" and translation? Simply pass this flag `),vi(75,`b`),uD(76,`enableTranslateLabel: true`),Lc()(),uD(77,`
        `),vi(78,`li`),uD(79,`
          More info on the Select Filter
          `),vi(80,`a`,9),uD(81,`Wiki page`),Lc(),uD(82,`
        `),Lc(),uD(83,`
      `),Lc(),uD(84,`
      `),vi(85,`li`),uD(86,`
        For more info about "Download to File", read the
        `),vi(87,`a`,10),uD(88,`Wiki page`),Lc(),uD(89,`
      `),Lc(),uD(90,`
    `),Lc(),uD(91,`
  `),Lc(),uD(92,`

  `),_p(93,`hr`),uD(94,`

  `),vi(95,`div`,11),uD(96,`
    `),vi(97,`div`,12),uD(98,`
      `),vi(99,`button`,13),Ap(`click`,function(){return l.switchLanguage()}),uD(100,`
        `),_p(101,`i`,14),uD(102,`
        Switch Language
      `),Lc(),uD(103,`
      `),vi(104,`b`),uD(105,`Locale:`),Lc(),uD(106,` `),vi(107,`span`,15),uD(108),Lc(),uD(109,`

      `),vi(110,`span`,16),uD(111,`
        `),vi(112,`button`,17),Ap(`click`,function(){return l.exportToFile(`csv`)}),uD(113,`
          `),_p(114,`i`,18),uD(115,`
          Download to CSV
        `),Lc(),uD(116,`
        `),vi(117,`button`,17),Ap(`click`,function(){return l.exportToFile(`txt`)}),uD(118,`
          `),_p(119,`i`,18),uD(120,`
          Download to Text
        `),Lc(),uD(121,`
        `),vi(122,`button`,17),Ap(`click`,function(){return l.exportToExcel()}),uD(123,`
          `),_p(124,`i`,19),uD(125,`
          Download to Excel
        `),Lc(),uD(126,`
        `),vi(127,`button`,17),Ap(`click`,function(){return l.dynamicallyAddTitleHeader()}),uD(128,`
          `),_p(129,`i`,20),uD(130,`
          Dynamically Duplicate Title Column
        `),Lc(),uD(131,`
      `),Lc(),uD(132,`
    `),Lc(),uD(133,`
  `),Lc(),uD(134,`

  `),vi(135,`div`,12),uD(136,`
    `),vi(137,`angular-slickgrid`,21),Ap(`onAngularGridCreated`,function(o){return l.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return l.gridStateChanged(o.detail)}),uD(138,`
    `),Lc(),uD(139,`
  `),Lc(),uD(140,`
`),Lc(),uD(141,`
`)),r&2&&(fv(108),Qp(l.selectedLanguage()+`.json`),fv(29),bp(`dataset`,l.dataset)(`options`,l.gridOptions)(`columns`,l.columns))},dependencies:[R$],encapsulation:2})}}return c})();export{W as Example12Component};