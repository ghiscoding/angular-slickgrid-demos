import{a as C}from"./chunk-L3B3F7LN.js";import{b as v}from"./chunk-CDWFOXJG.js";import{Ca as y,Da as _,u as T,wa as u,za as d}from"./chunk-IBXCHNN7.js";import{Aa as h,Ka as f,Kb as e,Lb as E,Pa as b,ia as g,ib as S,jb as t,kb as i,lb as s,vb as m}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var k=1500,F=(c,D,n,a,l,o)=>o.getOptions().i18n.instant("TASK_X",{x:n}),W=(()=>{class c{constructor(n){this.translate=n,this.subscriptions=[],this.selectedLanguage=g(""),this.duplicateTitleHeaderCount=1,this.hideSubTitle=!1,this.excelExportService=new v,this.textExportService=new C;let a="en";this.translate.use(a),this.selectedLanguage.set(a)}ngOnDestroy(){y(this.subscriptions)}ngOnInit(){this.columnDefinitions=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:F,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80},{id:"duration",name:"Duration (days)",field:"duration",nameKey:"DURATION",sortable:!0,formatter:d.percentCompleteBar,minWidth:100,exportWithFormatter:!1,filterable:!0,type:"number",filter:{model:u.slider,options:{hideSliderNumber:!0}}},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:d.dateIso,outputType:"dateIso",type:"date",exportWithFormatter:!0,filterable:!0,filter:{model:u.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:d.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:!0,filter:{model:u.compoundDate}},{id:"completedBool",name:"Completed",field:"completedBool",nameKey:"COMPLETED",minWidth:100,sortable:!0,formatter:d.checkmarkMaterial,exportCustomFormatter:d.translateBoolean,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,labelKey:"TRUE"},{value:!1,labelKey:"FALSE"}],model:u.singleSelect,enableTranslateLabel:!0}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",formatter:d.translate,sortable:!0,minWidth:100,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:"TRUE",labelKey:"TRUE"},{value:"FALSE",labelKey:"FALSE"}],collectionSortBy:{property:"labelKey"},enableTranslateLabel:!0,model:u.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCheckboxSelector:!0,enableSelection:!0,showCustomFooter:!0,customFooterOptions:{metricTexts:{itemsKey:"ITEMS",ofKey:"OF",lastUpdateKey:"LAST_UPDATE"},dateFormat:"YYYY-MM-DD, hh:mm a",hideTotalItemCount:!1,hideLastUpdateTimestamp:!1},excelExportOptions:{customExcelHeader:(n,a)=>{let l=this.translate.getCurrentLang()==="fr"?"Titre qui est suffisament long pour \xEAtre coup\xE9":"My header that is long enough to wrap",o=n.getStyleSheet(),r={font:{size:12,fontName:"Calibri",bold:!0,color:"FF0000FF"},alignment:{wrapText:!0}},p=o.createFormat(r);a.setRowInstructions(0,{height:30}),a.mergeCells("B1","D1");let x=[];x.push({value:""}),x.push({value:l,metadata:{style:p.id}}),a.data.push(x)}},gridMenu:{hideExportCsvCommand:!1,hideExportTextDelimitedCommand:!1},enableExcelExport:!0,enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]},this.loadData(k)}loadData(n){let a=[];for(let l=0;l<n;l++){let o=2e3+Math.floor(Math.random()*30),r=Math.floor(Math.random()*11),p=Math.floor(Math.random()*29);a[l]={id:l,description:l%5?"desc "+l:"\u{1F680}\u{1F984} espa\xF1ol",duration:Math.round(Math.random()*100)+"",start:new Date(o,r,p),finish:new Date(o,r+1,p),completedBool:l%5===0,completed:l%5===0?"TRUE":"FALSE"}}this.dataset=a}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid}dynamicallyAddTitleHeader(){let n={id:`title${this.duplicateTitleHeaderCount++}`,field:"id",nameKey:"TITLE",formatter:F,sortable:!0,minWidth:100,filterable:!0,params:{useFormatterOuputToFilter:!0}};this.columnDefinitions.push(n),this.columnDefinitions=this.columnDefinitions.slice()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"})}exportToFile(n="csv"){this.textExportService.exportToFile({delimiter:n==="csv"?",":"	",filename:"myExport",format:n==="csv"?"csv":"txt"})}gridStateChanged(n){console.log("Grid State changed:: ",n),console.log("Grid State changed:: ",n.change)}switchLanguage(){let n=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(a){return new(a||c)(f(T))}}static{this.\u0275cmp=b({type:c,selectors:[["ng-component"]],decls:142,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example12.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/localization/localization-with-ngx-translate","target","_blank"],[1,"small"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/select-filter","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/export-to-text-file","target","_blank"],[1,"row"],[1,"col-sm-12"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[2,"margin-left","20px"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-download"],[1,"mdi","mdi-file-excel-outline","text-success"],[1,"mdi","mdi-shape-square-plus"],["gridId","grid12",3,"onAngularGridCreated","onGridStateChanged","dataset","options","columns"]],template:function(a,l){a&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 12: Localization (i18n)
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),s(8,"span",3),e(9,` code
      `),i(),e(10,`
    `),i(),e(11,`
    `),t(12,"button",4),m("click",function(){return l.toggleSubTitle()}),e(13,`
      `),s(14,"span",5),e(15,`
    `),i(),e(16,`
  `),i(),e(17,`

  `),t(18,"div",6),e(19,`
    Support multiple locales with the ngx-translate plugin, following these steps (`),t(20,"a",7),e(21,"Wiki docs"),i(),e(22,`)
    `),t(23,"ol",8),e(24,`
      `),t(25,"li"),e(26,'You first need to "enableTranslate" in the Grid Options'),i(),e(27,`
      `),t(28,"li"),e(29,"In the Column Definitions, you have following options"),i(),e(30,`
      `),t(31,"ul"),e(32,`
        `),t(33,"li"),e(34,`To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')`),i(),e(35,`
        `),t(36,"li"),e(37,"For the cell values, you need to use a Formatter, there's 2 ways of doing it"),i(),e(38,`
        `),t(39,"ul"),e(40,`
          `),t(41,"li"),e(42,"formatter: myCustomTranslateFormatter "),t(43,"b"),e(44,'<= "Title" column uses it'),i()(),e(45,`
          `),t(46,"li"),e(47,"formatter: Formatters.translate, i18n: this.translateService "),t(48,"b"),e(49,'<= "Completed" column uses it'),i()(),e(50,`
        `),i(),e(51,`
      `),i(),e(52,`
      `),t(53,"li"),e(54,"For date localization, you need to create your own custom formatter."),i(),e(55,`
      `),t(56,"ul"),e(57,`
        `),t(58,"li"),e(59,'You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.'),i(),e(60,`
      `),i(),e(61,`
      `),t(62,"li"),e(63,'For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"'),i(),e(64,`
      `),t(65,"ul"),e(66,`
        `),t(67,"li"),e(68,`
          What if your select options have totally different value/label pair? In this case, you can use the
          `),t(69,"b"),e(70,"customStructure: { label: 'customLabel', value: 'customValue'}"),i(),e(71,` to change the property name(s) to use.'
        `),i(),e(72,`
        `),t(73,"li"),e(74,'What if you want to use "customStructure" and translation? Simply pass this flag '),t(75,"b"),e(76,"enableTranslateLabel: true"),i()(),e(77,`
        `),t(78,"li"),e(79,`
          More info on the Select Filter
          `),t(80,"a",9),e(81,"Wiki page"),i(),e(82,`
        `),i(),e(83,`
      `),i(),e(84,`
      `),t(85,"li"),e(86,`
        For more info about "Download to File", read the
        `),t(87,"a",10),e(88,"Wiki page"),i(),e(89,`
      `),i(),e(90,`
    `),i(),e(91,`
  `),i(),e(92,`

  `),s(93,"hr"),e(94,`

  `),t(95,"div",11),e(96,`
    `),t(97,"div",12),e(98,`
      `),t(99,"button",13),m("click",function(){return l.switchLanguage()}),e(100,`
        `),s(101,"i",14),e(102,`
        Switch Language
      `),i(),e(103,`
      `),t(104,"b"),e(105,"Locale:"),i(),e(106," "),t(107,"span",15),e(108),i(),e(109,`

      `),t(110,"span",16),e(111,`
        `),t(112,"button",17),m("click",function(){return l.exportToFile("csv")}),e(113,`
          `),s(114,"i",18),e(115,`
          Download to CSV
        `),i(),e(116,`
        `),t(117,"button",17),m("click",function(){return l.exportToFile("txt")}),e(118,`
          `),s(119,"i",18),e(120,`
          Download to Text
        `),i(),e(121,`
        `),t(122,"button",17),m("click",function(){return l.exportToExcel()}),e(123,`
          `),s(124,"i",19),e(125,`
          Download to Excel
        `),i(),e(126,`
        `),t(127,"button",17),m("click",function(){return l.dynamicallyAddTitleHeader()}),e(128,`
          `),s(129,"i",20),e(130,`
          Dynamically Duplicate Title Column
        `),i(),e(131,`
      `),i(),e(132,`
    `),i(),e(133,`
  `),i(),e(134,`

  `),t(135,"div",12),e(136,`
    `),t(137,"angular-slickgrid",21),m("onAngularGridCreated",function(r){return l.angularGridReady(r.detail)})("onGridStateChanged",function(r){return l.gridStateChanged(r.detail)}),e(138,`
    `),i(),e(139,`
  `),i(),e(140,`
`),i(),e(141,`
`)),a&2&&(h(108),E(l.selectedLanguage()+".json"),h(29),S("dataset",l.dataset)("options",l.gridOptions)("columns",l.columnDefinitions))},dependencies:[_],encapsulation:2})}}return c})();export{W as Example12Component};
