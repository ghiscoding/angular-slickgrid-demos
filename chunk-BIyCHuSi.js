import{F as Ip,Ot as Up,Pn as ly,b as Ep,j as Ho,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,xt as T}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,ht as nk,m as Ki,n as CW}from"./chunk-DLuyVhQJ.js";import{t as Ze}from"./chunk-C5onuIZj.js";import{t as c}from"./chunk-xMySoz5s.js";var k=1500;var F=(c,w,n,r,l,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:n});var W=(()=>{class c$1{constructor(){this.translate=T(Ki),this.subscriptions=[],this.selectedLanguage=Ho(``),this.duplicateTitleHeaderCount=1,this.hideSubTitle=!1,this.excelExportService=new Ze,this.textExportService=new c;let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:F,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`duration`,name:`Duration (days)`,field:`duration`,nameKey:`DURATION`,sortable:!0,formatter:nk.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:`number`,filter:{model:ip.slider,options:{hideSliderNumber:!0}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,minWidth:100,formatter:nk.dateIso,outputType:`dateIso`,type:`date`,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:nk.dateIso,outputType:`dateIso`,type:`date`,minWidth:100,filterable:!0,filter:{model:ip.compoundDate}},{id:`completedBool`,name:`Completed`,field:`completedBool`,nameKey:`COMPLETED`,minWidth:100,sortable:!0,formatter:nk.checkmarkMaterial,exportCustomFormatter:nk.translateBoolean,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,labelKey:`TRUE`},{value:!1,labelKey:`FALSE`}],model:ip.singleSelect,enableTranslateLabel:!0}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,formatter:nk.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:`TRUE`,labelKey:`TRUE`},{value:`FALSE`,labelKey:`FALSE`}],collectionSortBy:{property:`labelKey`},enableTranslateLabel:!0,model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:`ITEMS`,ofKey:`OF`,lastUpdateKey:`LAST_UPDATE`},dateFormat:`YYYY-MM-DD, hh:mm a`,hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},excelExportOptions:{customExcelHeader:(n,r)=>{let l=this.translate.getCurrentLang()===`fr`?`Titre qui est suffisament long pour être coupé`:`My header that is long enough to wrap`,p=n.getStyleSheet().createFormat({font:{size:12,fontName:`Calibri`,bold:!0,color:`FF0000FF`},alignment:{wrapText:!0}});r.setRowInstructions(0,{height:30}),r.mergeCells(`B1`,`D1`);let x=[];x.push({value:``}),x.push({value:l,metadata:{style:p.id}}),r.data.push(x)}},gridMenu:{hideExportCsvCommand:!1,hideExportTextDelimitedCommand:!1},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]},this.loadData(k)}loadData(n){let r=[];for(let l=0;l<n;l++){let a=2e3+Math.floor(Math.random()*30),o=Math.floor(Math.random()*11),p=Math.floor(Math.random()*29);r[l]={id:l,description:l%5?`desc `+l:`🚀🦄 español`,duration:Math.round(Math.random()*100)+``,start:new Date(a,o,p),finish:new Date(a,o+1,p),completedBool:l%5===0,completed:l%5===0?`TRUE`:`FALSE`}}this.dataset=r}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid}dynamicallyAddTitleHeader(){let n={id:`title${this.duplicateTitleHeaderCount++}`,field:`id`,nameKey:`TITLE`,formatter:F,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columns.push(n),this.columns=this.columns.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToFile(n=`csv`){this.textExportService.exportToFile({delimiter:n===`csv`?`,`:`	`,filename:`myExport`,format:n===`csv`?`csv`:`txt`})}gridStateChanged(n){console.log(`Grid State changed:: `,n),console.log(`Grid State changed:: `,n.change)}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||c$1)}}static{this.ɵcmp=$E({type:c$1,selectors:[[`ng-component`]],decls:142,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example12.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/localization/localization-with-ngx-translate`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/select-filter`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/export-to-text-file`,`target`,`_blank`],[1,`row`],[1,`col-sm-12`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[2,`margin-left`,`20px`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-download`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-shape-square-plus`],[`gridId`,`grid12`,3,`onAngularGridCreated`,`onGridStateChanged`,`dataset`,`options`,`columns`]],template:function(r,l){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 12: Localization (i18n)
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return l.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    Support multiple locales with the ngx-translate plugin, following these steps (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`)
    `),yi(23,`ol`,8),sD(24,`
      `),yi(25,`li`),sD(26,`You first need to "enableTranslate" in the Grid Options`),Rc(),sD(27,`
      `),yi(28,`li`),sD(29,`In the Column Definitions, you have following options`),Rc(),sD(30,`
      `),yi(31,`ul`),sD(32,`
        `),yi(33,`li`),sD(34,`To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')`),Rc(),sD(35,`
        `),yi(36,`li`),sD(37,`For the cell values, you need to use a Formatter, there's 2 ways of doing it`),Rc(),sD(38,`
        `),yi(39,`ul`),sD(40,`
          `),yi(41,`li`),sD(42,`formatter: myCustomTranslateFormatter `),yi(43,`b`),sD(44,`<= "Title" column uses it`),Rc()(),sD(45,`
          `),yi(46,`li`),sD(47,`formatter: Formatters.translate, i18n: this.translateService `),yi(48,`b`),sD(49,`<= "Completed" column uses it`),Rc()(),sD(50,`
        `),Rc(),sD(51,`
      `),Rc(),sD(52,`
      `),yi(53,`li`),sD(54,`For date localization, you need to create your own custom formatter.`),Rc(),sD(55,`
      `),yi(56,`ul`),sD(57,`
        `),yi(58,`li`),sD(59,`You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.`),Rc(),sD(60,`
      `),Rc(),sD(61,`
      `),yi(62,`li`),sD(63,`For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"`),Rc(),sD(64,`
      `),yi(65,`ul`),sD(66,`
        `),yi(67,`li`),sD(68,`
          What if your select options have totally different value/label pair? In this case, you can use the
          `),yi(69,`b`),sD(70,`customStructure: { label: 'customLabel', value: 'customValue'}`),Rc(),sD(71,` to change the property name(s) to use.'
        `),Rc(),sD(72,`
        `),yi(73,`li`),sD(74,`What if you want to use "customStructure" and translation? Simply pass this flag `),yi(75,`b`),sD(76,`enableTranslateLabel: true`),Rc()(),sD(77,`
        `),yi(78,`li`),sD(79,`
          More info on the Select Filter
          `),yi(80,`a`,9),sD(81,`Wiki page`),Rc(),sD(82,`
        `),Rc(),sD(83,`
      `),Rc(),sD(84,`
      `),yi(85,`li`),sD(86,`
        For more info about "Download to File", read the
        `),yi(87,`a`,10),sD(88,`Wiki page`),Rc(),sD(89,`
      `),Rc(),sD(90,`
    `),Rc(),sD(91,`
  `),Rc(),sD(92,`

  `),Ip(93,`hr`),sD(94,`

  `),yi(95,`div`,11),sD(96,`
    `),yi(97,`div`,12),sD(98,`
      `),yi(99,`button`,13),bp(`click`,function(){return l.switchLanguage()}),sD(100,`
        `),Ip(101,`i`,14),sD(102,`
        Switch Language
      `),Rc(),sD(103,`
      `),yi(104,`b`),sD(105,`Locale:`),Rc(),sD(106,` `),yi(107,`span`,15),sD(108),Rc(),sD(109,`

      `),yi(110,`span`,16),sD(111,`
        `),yi(112,`button`,17),bp(`click`,function(){return l.exportToFile(`csv`)}),sD(113,`
          `),Ip(114,`i`,18),sD(115,`
          Download to CSV
        `),Rc(),sD(116,`
        `),yi(117,`button`,17),bp(`click`,function(){return l.exportToFile(`txt`)}),sD(118,`
          `),Ip(119,`i`,18),sD(120,`
          Download to Text
        `),Rc(),sD(121,`
        `),yi(122,`button`,17),bp(`click`,function(){return l.exportToExcel()}),sD(123,`
          `),Ip(124,`i`,19),sD(125,`
          Download to Excel
        `),Rc(),sD(126,`
        `),yi(127,`button`,17),bp(`click`,function(){return l.dynamicallyAddTitleHeader()}),sD(128,`
          `),Ip(129,`i`,20),sD(130,`
          Dynamically Duplicate Title Column
        `),Rc(),sD(131,`
      `),Rc(),sD(132,`
    `),Rc(),sD(133,`
  `),Rc(),sD(134,`

  `),yi(135,`div`,12),sD(136,`
    `),yi(137,`angular-slickgrid`,21),bp(`onAngularGridCreated`,function(o){return l.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return l.gridStateChanged(o.detail)}),sD(138,`
    `),Rc(),sD(139,`
  `),Rc(),sD(140,`
`),Rc(),sD(141,`
`)),r&2&&(ly(108),Up(l.selectedLanguage()+`.json`),ly(29),Ep(`dataset`,l.dataset)(`options`,l.gridOptions)(`columns`,l.columns))},dependencies:[_W],encapsulation:2})}}return c$1})();export{W as Example12Component};