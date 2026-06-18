import {c as c$1}from'./chunk-B7lLOQQM.js';import {Z as Ze}from'./chunk-CP-2FMG8.js';import {D,j as ji,A as Ao,G as G1,h as Tu,q as qN,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,M as Mp,g as sp}from'./main-C6PQTYH6.js';var k=1500,F=(c,w,n,r,l,a)=>a.getOptions().i18n.instant("TASK_X",{x:n}),W=(()=>{class c{constructor(){this.translate=D(ji),this.subscriptions=[],this.selectedLanguage=Ao(""),this.duplicateTitleHeaderCount=1,this.hideSubTitle=false,this.excelExportService=new Ze,this.textExportService=new c$1;let n="en";this.translate.use(n),this.selectedLanguage.set(n);}ngOnDestroy(){G1(this.subscriptions);}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:F,sortable:true,filterable:true,params:{useFormatterOuputToFilter:true}},{id:"description",name:"Description",field:"description",filterable:true,sortable:true,minWidth:80},{id:"duration",name:"Duration (days)",field:"duration",nameKey:"DURATION",sortable:true,formatter:qN.percentCompleteBar,minWidth:100,exportWithFormatter:false,filterable:true,type:"number",filter:{model:Tu.slider,options:{hideSliderNumber:true}}},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:qN.dateIso,outputType:"dateIso",type:"date",exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:qN.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:true,filter:{model:Tu.compoundDate}},{id:"completedBool",name:"Completed",field:"completedBool",nameKey:"COMPLETED",minWidth:100,sortable:true,formatter:qN.checkmarkMaterial,exportCustomFormatter:qN.translateBoolean,filterable:true,filter:{collection:[{value:"",label:""},{value:true,labelKey:"TRUE"},{value:false,labelKey:"FALSE"}],model:Tu.singleSelect,enableTranslateLabel:true}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",formatter:qN.translate,sortable:true,minWidth:100,exportWithFormatter:true,filterable:true,filter:{collection:[{value:"",label:""},{value:"TRUE",labelKey:"TRUE"},{value:"FALSE",labelKey:"FALSE"}],collectionSortBy:{property:"labelKey"},enableTranslateLabel:true,model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:true,enableExcelCopyBuffer:true,enableFiltering:true,enableTranslate:true,i18n:this.translate,checkboxSelector:{hideInFilterHeaderRow:false,hideInColumnTitleRow:true},enableCheckboxSelector:true,enableSelection:true,showCustomFooter:true,customFooterOptions:{metricTexts:{itemsKey:"ITEMS",ofKey:"OF",lastUpdateKey:"LAST_UPDATE"},dateFormat:"YYYY-MM-DD, hh:mm a",hideTotalItemCount:false,hideLastUpdateTimestamp:false},excelExportOptions:{customExcelHeader:(n,r)=>{let l=this.translate.getCurrentLang()==="fr"?"Titre qui est suffisament long pour \xEAtre coup\xE9":"My header that is long enough to wrap",a=n.getStyleSheet(),o={font:{size:12,fontName:"Calibri",bold:true,color:"FF0000FF"},alignment:{wrapText:true}},p=a.createFormat(o);r.setRowInstructions(0,{height:30}),r.mergeCells("B1","D1");let x=[];x.push({value:""}),x.push({value:l,metadata:{style:p.id}}),r.data.push(x);}},gridMenu:{hideExportCsvCommand:false,hideExportTextDelimitedCommand:false},enableExcelExport:true,enableTextExport:true,textExportOptions:{exportWithFormatter:true,sanitizeDataExport:true},externalResources:[this.excelExportService,this.textExportService]},this.loadData(k);}loadData(n){let r=[];for(let l=0;l<n;l++){let a=2e3+Math.floor(Math.random()*30),o=Math.floor(Math.random()*11),p=Math.floor(Math.random()*29);r[l]={id:l,description:l%5?"desc "+l:"\u{1F680}\u{1F984} espa\xF1ol",duration:Math.round(Math.random()*100)+"",start:new Date(a,o,p),finish:new Date(a,o+1,p),completedBool:l%5===0,completed:l%5===0?"TRUE":"FALSE"};}this.dataset=r;}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid;}dynamicallyAddTitleHeader(){let n={id:`title${this.duplicateTitleHeaderCount++}`,field:"id",nameKey:"TITLE",formatter:F,sortable:true,minWidth:100,filterable:true,params:{useFormatterOuputToFilter:true}};this.columns.push(n),this.columns=this.columns.slice();}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"});}exportToFile(n="csv"){this.textExportService.exportToFile({delimiter:n==="csv"?",":"	",filename:"myExport",format:n==="csv"?"csv":"txt"});}gridStateChanged(n){console.log("Grid State changed:: ",n),console.log("Grid State changed:: ",n.change);}switchLanguage(){let n=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n);}));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(r){return new(r||c)};}static{this.\u0275cmp=TI({type:c,selectors:[["ng-component"]],decls:142,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example12.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/localization/localization-with-ngx-translate","target","_blank"],[1,"small"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/select-filter","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/export-to-text-file","target","_blank"],[1,"row"],[1,"col-sm-12"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[2,"margin-left","20px"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-download"],[1,"mdi","mdi-file-excel-outline","text-success"],[1,"mdi","mdi-shape-square-plus"],["gridId","grid12",3,"onAngularGridCreated","onGridStateChanged","dataset","options","columns"]],template:function(r,l){r&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 12: Localization (i18n)
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return l.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    Support multiple locales with the ngx-translate plugin, following these steps (`),ui(20,"a",7),BE(21,"Wiki docs"),Tc(),BE(22,`)
    `),ui(23,"ol",8),BE(24,`
      `),ui(25,"li"),BE(26,'You first need to "enableTranslate" in the Grid Options'),Tc(),BE(27,`
      `),ui(28,"li"),BE(29,"In the Column Definitions, you have following options"),Tc(),BE(30,`
      `),ui(31,"ul"),BE(32,`
        `),ui(33,"li"),BE(34,`To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')`),Tc(),BE(35,`
        `),ui(36,"li"),BE(37,"For the cell values, you need to use a Formatter, there's 2 ways of doing it"),Tc(),BE(38,`
        `),ui(39,"ul"),BE(40,`
          `),ui(41,"li"),BE(42,"formatter: myCustomTranslateFormatter "),ui(43,"b"),BE(44,'<= "Title" column uses it'),Tc()(),BE(45,`
          `),ui(46,"li"),BE(47,"formatter: Formatters.translate, i18n: this.translateService "),ui(48,"b"),BE(49,'<= "Completed" column uses it'),Tc()(),BE(50,`
        `),Tc(),BE(51,`
      `),Tc(),BE(52,`
      `),ui(53,"li"),BE(54,"For date localization, you need to create your own custom formatter."),Tc(),BE(55,`
      `),ui(56,"ul"),BE(57,`
        `),ui(58,"li"),BE(59,'You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.'),Tc(),BE(60,`
      `),Tc(),BE(61,`
      `),ui(62,"li"),BE(63,'For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"'),Tc(),BE(64,`
      `),ui(65,"ul"),BE(66,`
        `),ui(67,"li"),BE(68,`
          What if your select options have totally different value/label pair? In this case, you can use the
          `),ui(69,"b"),BE(70,"customStructure: { label: 'customLabel', value: 'customValue'}"),Tc(),BE(71,` to change the property name(s) to use.'
        `),Tc(),BE(72,`
        `),ui(73,"li"),BE(74,'What if you want to use "customStructure" and translation? Simply pass this flag '),ui(75,"b"),BE(76,"enableTranslateLabel: true"),Tc()(),BE(77,`
        `),ui(78,"li"),BE(79,`
          More info on the Select Filter
          `),ui(80,"a",9),BE(81,"Wiki page"),Tc(),BE(82,`
        `),Tc(),BE(83,`
      `),Tc(),BE(84,`
      `),ui(85,"li"),BE(86,`
        For more info about "Download to File", read the
        `),ui(87,"a",10),BE(88,"Wiki page"),Tc(),BE(89,`
      `),Tc(),BE(90,`
    `),Tc(),BE(91,`
  `),Tc(),BE(92,`

  `),ap(93,"hr"),BE(94,`

  `),ui(95,"div",11),BE(96,`
    `),ui(97,"div",12),BE(98,`
      `),ui(99,"button",13),fp("click",function(){return l.switchLanguage()}),BE(100,`
        `),ap(101,"i",14),BE(102,`
        Switch Language
      `),Tc(),BE(103,`
      `),ui(104,"b"),BE(105,"Locale:"),Tc(),BE(106," "),ui(107,"span",15),BE(108),Tc(),BE(109,`

      `),ui(110,"span",16),BE(111,`
        `),ui(112,"button",17),fp("click",function(){return l.exportToFile("csv")}),BE(113,`
          `),ap(114,"i",18),BE(115,`
          Download to CSV
        `),Tc(),BE(116,`
        `),ui(117,"button",17),fp("click",function(){return l.exportToFile("txt")}),BE(118,`
          `),ap(119,"i",18),BE(120,`
          Download to Text
        `),Tc(),BE(121,`
        `),ui(122,"button",17),fp("click",function(){return l.exportToExcel()}),BE(123,`
          `),ap(124,"i",19),BE(125,`
          Download to Excel
        `),Tc(),BE(126,`
        `),ui(127,"button",17),fp("click",function(){return l.dynamicallyAddTitleHeader()}),BE(128,`
          `),ap(129,"i",20),BE(130,`
          Dynamically Duplicate Title Column
        `),Tc(),BE(131,`
      `),Tc(),BE(132,`
    `),Tc(),BE(133,`
  `),Tc(),BE(134,`

  `),ui(135,"div",12),BE(136,`
    `),ui(137,"angular-slickgrid",21),fp("onAngularGridCreated",function(o){return l.angularGridReady(o.detail)})("onGridStateChanged",function(o){return l.gridStateChanged(o.detail)}),BE(138,`
    `),Tc(),BE(139,`
  `),Tc(),BE(140,`
`),Tc(),BE(141,`
`)),r&2&&(Uy(108),Mp(l.selectedLanguage()+".json"),Uy(29),sp("dataset",l.dataset)("options",l.gridOptions)("columns",l.columns));},dependencies:[U1],encapsulation:2});}}return c})();export{W as Example12Component};