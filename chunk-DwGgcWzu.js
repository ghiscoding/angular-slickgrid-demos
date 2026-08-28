import{Ct as T,Dt as UE,En as iD,Kn as mp,Nn as jo,Nt as Vp,Tt as Tp,Wn as mi,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W,m as Ki,mt as nk,n as CW,st as ip}from"./chunk-CAMk6vEo.js";import{t as Ze}from"./chunk-CVoct-s8.js";import{t as c}from"./chunk-sAUrlGt6.js";var k=1500;var F=(c,w,n,r,l,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:n});var W=(()=>{class c$1{constructor(){this.translate=T(Ki),this.subscriptions=[],this.selectedLanguage=jo(``),this.duplicateTitleHeaderCount=1,this.hideSubTitle=!1,this.excelExportService=new Ze,this.textExportService=new c;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:F,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`duration`,name:`Duration (days)`,field:`duration`,nameKey:`DURATION`,sortable:!0,formatter:nk.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:`number`,filter:{model:ip.slider,options:{hideSliderNumber:!0}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,minWidth:100,formatter:nk.dateIso,outputType:`dateIso`,type:`date`,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:nk.dateIso,outputType:`dateIso`,type:`date`,minWidth:100,filterable:!0,filter:{model:ip.compoundDate}},{id:`completedBool`,name:`Completed`,field:`completedBool`,nameKey:`COMPLETED`,minWidth:100,sortable:!0,formatter:nk.checkmarkMaterial,exportCustomFormatter:nk.translateBoolean,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,labelKey:`TRUE`},{value:!1,labelKey:`FALSE`}],model:ip.singleSelect,enableTranslateLabel:!0}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,formatter:nk.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:`TRUE`,labelKey:`TRUE`},{value:`FALSE`,labelKey:`FALSE`}],collectionSortBy:{property:`labelKey`},enableTranslateLabel:!0,model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:`ITEMS`,ofKey:`OF`,lastUpdateKey:`LAST_UPDATE`},dateFormat:`YYYY-MM-DD, hh:mm a`,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},excelExportOptions:{customExcelHeader:(n,r)=>{let l=this.translate.getCurrentLang()===`fr`?`Titre qui est suffisament long pour être coupé`:`My header that is long enough to wrap`,p=n.getStyleSheet().createFormat({font:{size:12,fontName:`Calibri`,bold:!0,color:`FF0000FF`},alignment:{wrapText:!0}});r.setRowInstructions(0,{height:30}),r.mergeCells(`B1`,`D1`);let x=[];x.push({value:``}),x.push({value:l,metadata:{style:p.id}}),r.data.push(x)}},gridMenu:{hideExportCsvCommand:!1,hideExportTextDelimitedCommand:!1},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]},this.loadData(k)}loadData(n){let r=[];for(let l=0;l<n;l++){let a=2e3+Math.floor(Math.random()*30),o=Math.floor(Math.random()*11),p=Math.floor(Math.random()*29);r[l]={id:l,description:l%5?`desc `+l:`🚀🦄 español`,duration:Math.round(Math.random()*100)+``,start:new Date(a,o,p),finish:new Date(a,o+1,p),completedBool:l%5===0,completed:l%5===0?`TRUE`:`FALSE`}}this.dataset=r}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid}dynamicallyAddTitleHeader(){let n={id:`title${this.duplicateTitleHeaderCount++}`,field:`id`,nameKey:`TITLE`,formatter:F,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columns.push(n),this.columns=this.columns.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToFile(n=`csv`){this.textExportService.exportToFile({delimiter:n===`csv`?`,`:`	`,filename:`myExport`,format:n===`csv`?`csv`:`txt`})}gridStateChanged(n){console.log(`Grid State changed:: `,n),console.log(`Grid State changed:: `,n.change)}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||c$1)}}static{this.ɵcmp=UE({type:c$1,selectors:[[`ng-component`]],decls:142,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example12.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/localization/localization-with-ngx-translate`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/select-filter`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/export-to-text-file`,`target`,`_blank`],[1,`row`],[1,`col-sm-12`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`20px`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-download`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-shape-square-plus`],[`gridId`,`grid12`,3,`onAngularGridCreated`,`onGridStateChanged`,`dataset`,`options`,`columns`]],template:function(r,l){r&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 12: Localization (i18n)
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return l.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    Support multiple locales with the ngx-translate plugin, following these steps (`),mi(20,`a`,7),iD(21,`Wiki docs`),Ac(),iD(22,`)
    `),mi(23,`ol`,8),iD(24,`
      `),mi(25,`li`),iD(26,`You first need to "enableTranslate" in the Grid Options`),Ac(),iD(27,`
      `),mi(28,`li`),iD(29,`In the Column Definitions, you have following options`),Ac(),iD(30,`
      `),mi(31,`ul`),iD(32,`
        `),mi(33,`li`),iD(34,`To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')`),Ac(),iD(35,`
        `),mi(36,`li`),iD(37,`For the cell values, you need to use a Formatter, there's 2 ways of doing it`),Ac(),iD(38,`
        `),mi(39,`ul`),iD(40,`
          `),mi(41,`li`),iD(42,`formatter: myCustomTranslateFormatter `),mi(43,`b`),iD(44,`<= "Title" column uses it`),Ac()(),iD(45,`
          `),mi(46,`li`),iD(47,`formatter: Formatters.translate, i18n: this.translateService `),mi(48,`b`),iD(49,`<= "Completed" column uses it`),Ac()(),iD(50,`
        `),Ac(),iD(51,`
      `),Ac(),iD(52,`
      `),mi(53,`li`),iD(54,`For date localization, you need to create your own custom formatter.`),Ac(),iD(55,`
      `),mi(56,`ul`),iD(57,`
        `),mi(58,`li`),iD(59,`You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.`),Ac(),iD(60,`
      `),Ac(),iD(61,`
      `),mi(62,`li`),iD(63,`For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"`),Ac(),iD(64,`
      `),mi(65,`ul`),iD(66,`
        `),mi(67,`li`),iD(68,`
          What if your select options have totally different value/label pair? In this case, you can use the
          `),mi(69,`b`),iD(70,`customStructure: { label: 'customLabel', value: 'customValue'}`),Ac(),iD(71,` to change the property name(s) to use.'
        `),Ac(),iD(72,`
        `),mi(73,`li`),iD(74,`What if you want to use "customStructure" and translation? Simply pass this flag `),mi(75,`b`),iD(76,`enableTranslateLabel: true`),Ac()(),iD(77,`
        `),mi(78,`li`),iD(79,`
          More info on the Select Filter
          `),mi(80,`a`,9),iD(81,`Wiki page`),Ac(),iD(82,`
        `),Ac(),iD(83,`
      `),Ac(),iD(84,`
      `),mi(85,`li`),iD(86,`
        For more info about "Download to File", read the
        `),mi(87,`a`,10),iD(88,`Wiki page`),Ac(),iD(89,`
      `),Ac(),iD(90,`
    `),Ac(),iD(91,`
  `),Ac(),iD(92,`

  `),vp(93,`hr`),iD(94,`

  `),mi(95,`div`,11),iD(96,`
    `),mi(97,`div`,12),iD(98,`
      `),mi(99,`button`,13),Tp(`click`,function(){return l.switchLanguage()}),iD(100,`
        `),vp(101,`i`,14),iD(102,`
        Switch Language
      `),Ac(),iD(103,`
      `),mi(104,`b`),iD(105,`Locale:`),Ac(),iD(106,` `),mi(107,`span`,15),iD(108),Ac(),iD(109,`

      `),mi(110,`span`,16),iD(111,`
        `),mi(112,`button`,17),Tp(`click`,function(){return l.exportToFile(`csv`)}),iD(113,`
          `),vp(114,`i`,18),iD(115,`
          Download to CSV
        `),Ac(),iD(116,`
        `),mi(117,`button`,17),Tp(`click`,function(){return l.exportToFile(`txt`)}),iD(118,`
          `),vp(119,`i`,18),iD(120,`
          Download to Text
        `),Ac(),iD(121,`
        `),mi(122,`button`,17),Tp(`click`,function(){return l.exportToExcel()}),iD(123,`
          `),vp(124,`i`,19),iD(125,`
          Download to Excel
        `),Ac(),iD(126,`
        `),mi(127,`button`,17),Tp(`click`,function(){return l.dynamicallyAddTitleHeader()}),iD(128,`
          `),vp(129,`i`,20),iD(130,`
          Dynamically Duplicate Title Column
        `),Ac(),iD(131,`
      `),Ac(),iD(132,`
    `),Ac(),iD(133,`
  `),Ac(),iD(134,`

  `),mi(135,`div`,12),iD(136,`
    `),mi(137,`angular-slickgrid`,21),Tp(`onAngularGridCreated`,function(o){return l.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return l.gridStateChanged(o.detail)}),iD(138,`
    `),Ac(),iD(139,`
  `),Ac(),iD(140,`
`),Ac(),iD(141,`
`)),r&2&&(cy(108),Vp(l.selectedLanguage()+`.json`),cy(29),mp(`dataset`,l.dataset)(`options`,l.gridOptions)(`columns`,l.columns))},dependencies:[_W],encapsulation:2})}}return c$1})();export{W as Example12Component};