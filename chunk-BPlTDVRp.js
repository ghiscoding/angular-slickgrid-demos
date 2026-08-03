import{Dn as jp,Fn as mp,Hn as oD,Wt as av,b as Fo,dn as gi,g as Dp,l as BI,m as D,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{C as K1,S as JN,gt as q1,ot as ji,x as Iu}from"./chunk-C7G4ZLh2.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";import{t as c}from"./chunk-NBH_THzt2.js";var k=1500;var F=(c,w,n,r,l,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:n});var W=(()=>{class c$1{constructor(){this.translate=D(ji),this.subscriptions=[],this.selectedLanguage=Fo(``),this.duplicateTitleHeaderCount=1,this.hideSubTitle=!1,this.excelExportService=new Ze,this.textExportService=new c;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){K1(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:F,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`duration`,name:`Duration (days)`,field:`duration`,nameKey:`DURATION`,sortable:!0,formatter:JN.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:`number`,filter:{model:Iu.slider,options:{hideSliderNumber:!0}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,minWidth:100,formatter:JN.dateIso,outputType:`dateIso`,type:`date`,exportWithFormatter:!0,filterable:!0,filter:{model:Iu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:JN.dateIso,outputType:`dateIso`,type:`date`,minWidth:100,filterable:!0,filter:{model:Iu.compoundDate}},{id:`completedBool`,name:`Completed`,field:`completedBool`,nameKey:`COMPLETED`,minWidth:100,sortable:!0,formatter:JN.checkmarkMaterial,exportCustomFormatter:JN.translateBoolean,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,labelKey:`TRUE`},{value:!1,labelKey:`FALSE`}],model:Iu.singleSelect,enableTranslateLabel:!0}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,formatter:JN.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:`TRUE`,labelKey:`TRUE`},{value:`FALSE`,labelKey:`FALSE`}],collectionSortBy:{property:`labelKey`},enableTranslateLabel:!0,model:Iu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:`ITEMS`,ofKey:`OF`,lastUpdateKey:`LAST_UPDATE`},dateFormat:`YYYY-MM-DD, hh:mm a`,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},excelExportOptions:{customExcelHeader:(n,r)=>{let l=this.translate.getCurrentLang()===`fr`?`Titre qui est suffisament long pour être coupé`:`My header that is long enough to wrap`,p=n.getStyleSheet().createFormat({font:{size:12,fontName:`Calibri`,bold:!0,color:`FF0000FF`},alignment:{wrapText:!0}});r.setRowInstructions(0,{height:30}),r.mergeCells(`B1`,`D1`);let x=[];x.push({value:``}),x.push({value:l,metadata:{style:p.id}}),r.data.push(x)}},gridMenu:{hideExportCsvCommand:!1,hideExportTextDelimitedCommand:!1},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]},this.loadData(k)}loadData(n){let r=[];for(let l=0;l<n;l++){let a=2e3+Math.floor(Math.random()*30),o=Math.floor(Math.random()*11),p=Math.floor(Math.random()*29);r[l]={id:l,description:l%5?`desc `+l:`🚀🦄 español`,duration:Math.round(Math.random()*100)+``,start:new Date(a,o,p),finish:new Date(a,o+1,p),completedBool:l%5===0,completed:l%5===0?`TRUE`:`FALSE`}}this.dataset=r}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid}dynamicallyAddTitleHeader(){let n={id:`title${this.duplicateTitleHeaderCount++}`,field:`id`,nameKey:`TITLE`,formatter:F,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columns.push(n),this.columns=this.columns.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToFile(n=`csv`){this.textExportService.exportToFile({delimiter:n===`csv`?`,`:`	`,filename:`myExport`,format:n===`csv`?`csv`:`txt`})}gridStateChanged(n){console.log(`Grid State changed:: `,n),console.log(`Grid State changed:: `,n.change)}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||c$1)}}static{this.ɵcmp=BI({type:c$1,selectors:[[`ng-component`]],decls:142,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example12.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/localization/localization-with-ngx-translate`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/select-filter`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/export-to-text-file`,`target`,`_blank`],[1,`row`],[1,`col-sm-12`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`20px`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-download`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-shape-square-plus`],[`gridId`,`grid12`,3,`onAngularGridCreated`,`onGridStateChanged`,`dataset`,`options`,`columns`]],template:function(r,l){r&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 12: Localization (i18n)
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return l.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    Support multiple locales with the ngx-translate plugin, following these steps (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`)
    `),gi(23,`ol`,8),oD(24,`
      `),gi(25,`li`),oD(26,`You first need to "enableTranslate" in the Grid Options`),xc(),oD(27,`
      `),gi(28,`li`),oD(29,`In the Column Definitions, you have following options`),xc(),oD(30,`
      `),gi(31,`ul`),oD(32,`
        `),gi(33,`li`),oD(34,`To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')`),xc(),oD(35,`
        `),gi(36,`li`),oD(37,`For the cell values, you need to use a Formatter, there's 2 ways of doing it`),xc(),oD(38,`
        `),gi(39,`ul`),oD(40,`
          `),gi(41,`li`),oD(42,`formatter: myCustomTranslateFormatter `),gi(43,`b`),oD(44,`<= "Title" column uses it`),xc()(),oD(45,`
          `),gi(46,`li`),oD(47,`formatter: Formatters.translate, i18n: this.translateService `),gi(48,`b`),oD(49,`<= "Completed" column uses it`),xc()(),oD(50,`
        `),xc(),oD(51,`
      `),xc(),oD(52,`
      `),gi(53,`li`),oD(54,`For date localization, you need to create your own custom formatter.`),xc(),oD(55,`
      `),gi(56,`ul`),oD(57,`
        `),gi(58,`li`),oD(59,`You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.`),xc(),oD(60,`
      `),xc(),oD(61,`
      `),gi(62,`li`),oD(63,`For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"`),xc(),oD(64,`
      `),gi(65,`ul`),oD(66,`
        `),gi(67,`li`),oD(68,`
          What if your select options have totally different value/label pair? In this case, you can use the
          `),gi(69,`b`),oD(70,`customStructure: { label: 'customLabel', value: 'customValue'}`),xc(),oD(71,` to change the property name(s) to use.'
        `),xc(),oD(72,`
        `),gi(73,`li`),oD(74,`What if you want to use "customStructure" and translation? Simply pass this flag `),gi(75,`b`),oD(76,`enableTranslateLabel: true`),xc()(),oD(77,`
        `),gi(78,`li`),oD(79,`
          More info on the Select Filter
          `),gi(80,`a`,9),oD(81,`Wiki page`),xc(),oD(82,`
        `),xc(),oD(83,`
      `),xc(),oD(84,`
      `),gi(85,`li`),oD(86,`
        For more info about "Download to File", read the
        `),gi(87,`a`,10),oD(88,`Wiki page`),xc(),oD(89,`
      `),xc(),oD(90,`
    `),xc(),oD(91,`
  `),xc(),oD(92,`

  `),mp(93,`hr`),oD(94,`

  `),gi(95,`div`,11),oD(96,`
    `),gi(97,`div`,12),oD(98,`
      `),gi(99,`button`,13),Dp(`click`,function(){return l.switchLanguage()}),oD(100,`
        `),mp(101,`i`,14),oD(102,`
        Switch Language
      `),xc(),oD(103,`
      `),gi(104,`b`),oD(105,`Locale:`),xc(),oD(106,` `),gi(107,`span`,15),oD(108),xc(),oD(109,`

      `),gi(110,`span`,16),oD(111,`
        `),gi(112,`button`,17),Dp(`click`,function(){return l.exportToFile(`csv`)}),oD(113,`
          `),mp(114,`i`,18),oD(115,`
          Download to CSV
        `),xc(),oD(116,`
        `),gi(117,`button`,17),Dp(`click`,function(){return l.exportToFile(`txt`)}),oD(118,`
          `),mp(119,`i`,18),oD(120,`
          Download to Text
        `),xc(),oD(121,`
        `),gi(122,`button`,17),Dp(`click`,function(){return l.exportToExcel()}),oD(123,`
          `),mp(124,`i`,19),oD(125,`
          Download to Excel
        `),xc(),oD(126,`
        `),gi(127,`button`,17),Dp(`click`,function(){return l.dynamicallyAddTitleHeader()}),oD(128,`
          `),mp(129,`i`,20),oD(130,`
          Dynamically Duplicate Title Column
        `),xc(),oD(131,`
      `),xc(),oD(132,`
    `),xc(),oD(133,`
  `),xc(),oD(134,`

  `),gi(135,`div`,12),oD(136,`
    `),gi(137,`angular-slickgrid`,21),Dp(`onAngularGridCreated`,function(o){return l.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return l.gridStateChanged(o.detail)}),oD(138,`
    `),xc(),oD(139,`
  `),xc(),oD(140,`
`),xc(),oD(141,`
`)),r&2&&(av(108),jp(l.selectedLanguage()+`.json`),av(29),gp(`dataset`,l.dataset)(`options`,l.gridOptions)(`columns`,l.columns))},dependencies:[q1],encapsulation:2})}}return c$1})();export{W as Example12Component};