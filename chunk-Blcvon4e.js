import {c as c$1}from'./chunk-C3SXWbo0.js';import {Z as Ze}from'./chunk-6W1Wahwc.js';import {D,d as ji,A as Ao,U as U1,e as Tu,X as XN,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,W as Wy,N as Np,a as ap}from'./main-MYLFMRPB.js';var k=1500,F=(c,w,n,r,l,a)=>a.getOptions().i18n.instant("TASK_X",{x:n}),W=(()=>{class c{constructor(){this.translate=D(ji),this.subscriptions=[],this.selectedLanguage=Ao(""),this.duplicateTitleHeaderCount=1,this.hideSubTitle=false,this.excelExportService=new Ze,this.textExportService=new c$1;let n="en";this.translate.use(n),this.selectedLanguage.set(n);}ngOnDestroy(){U1(this.subscriptions);}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:F,sortable:true,filterable:true,params:{useFormatterOuputToFilter:true}},{id:"description",name:"Description",field:"description",filterable:true,sortable:true,minWidth:80},{id:"duration",name:"Duration (days)",field:"duration",nameKey:"DURATION",sortable:true,formatter:XN.percentCompleteBar,minWidth:100,exportWithFormatter:false,filterable:true,type:"number",filter:{model:Tu.slider,options:{hideSliderNumber:true}}},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:XN.dateIso,outputType:"dateIso",type:"date",exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:XN.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:true,filter:{model:Tu.compoundDate}},{id:"completedBool",name:"Completed",field:"completedBool",nameKey:"COMPLETED",minWidth:100,sortable:true,formatter:XN.checkmarkMaterial,exportCustomFormatter:XN.translateBoolean,filterable:true,filter:{collection:[{value:"",label:""},{value:true,labelKey:"TRUE"},{value:false,labelKey:"FALSE"}],model:Tu.singleSelect,enableTranslateLabel:true}},{id:"completed",name:"Completed",field:"completed",nameKey:"COMPLETED",formatter:XN.translate,sortable:true,minWidth:100,exportWithFormatter:true,filterable:true,filter:{collection:[{value:"",label:""},{value:"TRUE",labelKey:"TRUE"},{value:"FALSE",labelKey:"FALSE"}],collectionSortBy:{property:"labelKey"},enableTranslateLabel:true,model:Tu.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:true,enableExcelCopyBuffer:true,enableFiltering:true,enableTranslate:true,i18n:this.translate,checkboxSelector:{hideInFilterHeaderRow:false,hideInColumnTitleRow:true},enableCheckboxSelector:true,enableSelection:true,showCustomFooter:true,customFooterOptions:{metricTexts:{itemsKey:"ITEMS",ofKey:"OF",lastUpdateKey:"LAST_UPDATE"},dateFormat:"YYYY-MM-DD, hh:mm a",hideTotalItemCount:false,hideLastUpdateTimestamp:false},excelExportOptions:{customExcelHeader:(n,r)=>{let l=this.translate.getCurrentLang()==="fr"?"Titre qui est suffisament long pour \xEAtre coup\xE9":"My header that is long enough to wrap",a=n.getStyleSheet(),o={font:{size:12,fontName:"Calibri",bold:true,color:"FF0000FF"},alignment:{wrapText:true}},p=a.createFormat(o);r.setRowInstructions(0,{height:30}),r.mergeCells("B1","D1");let x=[];x.push({value:""}),x.push({value:l,metadata:{style:p.id}}),r.data.push(x);}},gridMenu:{hideExportCsvCommand:false,hideExportTextDelimitedCommand:false},enableExcelExport:true,enableTextExport:true,textExportOptions:{exportWithFormatter:true,sanitizeDataExport:true},externalResources:[this.excelExportService,this.textExportService]},this.loadData(k);}loadData(n){let r=[];for(let l=0;l<n;l++){let a=2e3+Math.floor(Math.random()*30),o=Math.floor(Math.random()*11),p=Math.floor(Math.random()*29);r[l]={id:l,description:l%5?"desc "+l:"\u{1F680}\u{1F984} espa\xF1ol",duration:Math.round(Math.random()*100)+"",start:new Date(a,o,p),finish:new Date(a,o+1,p),completedBool:l%5===0,completed:l%5===0?"TRUE":"FALSE"};}this.dataset=r;}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid;}dynamicallyAddTitleHeader(){let n={id:`title${this.duplicateTitleHeaderCount++}`,field:"id",nameKey:"TITLE",formatter:F,sortable:true,minWidth:100,filterable:true,params:{useFormatterOuputToFilter:true}};this.columns.push(n),this.columns=this.columns.slice();}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:"xlsx"});}exportToFile(n="csv"){this.textExportService.exportToFile({delimiter:n==="csv"?",":"	",filename:"myExport",format:n==="csv"?"csv":"txt"});}gridStateChanged(n){console.log("Grid State changed:: ",n),console.log("Grid State changed:: ",n.change);}switchLanguage(){let n=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n);}));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(r){return new(r||c)};}static{this.\u0275cmp=_I({type:c,selectors:[["ng-component"]],decls:142,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example12.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/localization/localization-with-ngx-translate","target","_blank"],[1,"small"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/select-filter","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/export-to-text-file","target","_blank"],[1,"row"],[1,"col-sm-12"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[2,"margin-left","20px"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-download"],[1,"mdi","mdi-file-excel-outline","text-success"],[1,"mdi","mdi-shape-square-plus"],["gridId","grid12",3,"onAngularGridCreated","onGridStateChanged","dataset","options","columns"]],template:function(r,l){r&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 12: Localization (i18n)
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return l.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    Support multiple locales with the ngx-translate plugin, following these steps (`),ui(20,"a",7),qE(21,"Wiki docs"),Tc(),qE(22,`)
    `),ui(23,"ol",8),qE(24,`
      `),ui(25,"li"),qE(26,'You first need to "enableTranslate" in the Grid Options'),Tc(),qE(27,`
      `),ui(28,"li"),qE(29,"In the Column Definitions, you have following options"),Tc(),qE(30,`
      `),ui(31,"ul"),qE(32,`
        `),ui(33,"li"),qE(34,`To translate a header title, use "nameKey" with a translate key (nameKey: 'TITLE')`),Tc(),qE(35,`
        `),ui(36,"li"),qE(37,"For the cell values, you need to use a Formatter, there's 2 ways of doing it"),Tc(),qE(38,`
        `),ui(39,"ul"),qE(40,`
          `),ui(41,"li"),qE(42,"formatter: myCustomTranslateFormatter "),ui(43,"b"),qE(44,'<= "Title" column uses it'),Tc()(),qE(45,`
          `),ui(46,"li"),qE(47,"formatter: Formatters.translate, i18n: this.translateService "),ui(48,"b"),qE(49,'<= "Completed" column uses it'),Tc()(),qE(50,`
        `),Tc(),qE(51,`
      `),Tc(),qE(52,`
      `),ui(53,"li"),qE(54,"For date localization, you need to create your own custom formatter."),Tc(),qE(55,`
      `),ui(56,"ul"),qE(57,`
        `),ui(58,"li"),qE(59,'You can easily implement logic to switch between Formatters "dateIso" or "dateUs", depending on current locale.'),Tc(),qE(60,`
      `),Tc(),qE(61,`
      `),ui(62,"li"),qE(63,'For the Select (dropdown) filter, you can fill in the "labelKey" property, if found it will use it, else it will use "label"'),Tc(),qE(64,`
      `),ui(65,"ul"),qE(66,`
        `),ui(67,"li"),qE(68,`
          What if your select options have totally different value/label pair? In this case, you can use the
          `),ui(69,"b"),qE(70,"customStructure: { label: 'customLabel', value: 'customValue'}"),Tc(),qE(71,` to change the property name(s) to use.'
        `),Tc(),qE(72,`
        `),ui(73,"li"),qE(74,'What if you want to use "customStructure" and translation? Simply pass this flag '),ui(75,"b"),qE(76,"enableTranslateLabel: true"),Tc()(),qE(77,`
        `),ui(78,"li"),qE(79,`
          More info on the Select Filter
          `),ui(80,"a",9),qE(81,"Wiki page"),Tc(),qE(82,`
        `),Tc(),qE(83,`
      `),Tc(),qE(84,`
      `),ui(85,"li"),qE(86,`
        For more info about "Download to File", read the
        `),ui(87,"a",10),qE(88,"Wiki page"),Tc(),qE(89,`
      `),Tc(),qE(90,`
    `),Tc(),qE(91,`
  `),Tc(),qE(92,`

  `),cp(93,"hr"),qE(94,`

  `),ui(95,"div",11),qE(96,`
    `),ui(97,"div",12),qE(98,`
      `),ui(99,"button",13),pp("click",function(){return l.switchLanguage()}),qE(100,`
        `),cp(101,"i",14),qE(102,`
        Switch Language
      `),Tc(),qE(103,`
      `),ui(104,"b"),qE(105,"Locale:"),Tc(),qE(106," "),ui(107,"span",15),qE(108),Tc(),qE(109,`

      `),ui(110,"span",16),qE(111,`
        `),ui(112,"button",17),pp("click",function(){return l.exportToFile("csv")}),qE(113,`
          `),cp(114,"i",18),qE(115,`
          Download to CSV
        `),Tc(),qE(116,`
        `),ui(117,"button",17),pp("click",function(){return l.exportToFile("txt")}),qE(118,`
          `),cp(119,"i",18),qE(120,`
          Download to Text
        `),Tc(),qE(121,`
        `),ui(122,"button",17),pp("click",function(){return l.exportToExcel()}),qE(123,`
          `),cp(124,"i",19),qE(125,`
          Download to Excel
        `),Tc(),qE(126,`
        `),ui(127,"button",17),pp("click",function(){return l.dynamicallyAddTitleHeader()}),qE(128,`
          `),cp(129,"i",20),qE(130,`
          Dynamically Duplicate Title Column
        `),Tc(),qE(131,`
      `),Tc(),qE(132,`
    `),Tc(),qE(133,`
  `),Tc(),qE(134,`

  `),ui(135,"div",12),qE(136,`
    `),ui(137,"angular-slickgrid",21),pp("onAngularGridCreated",function(o){return l.angularGridReady(o.detail)})("onGridStateChanged",function(o){return l.gridStateChanged(o.detail)}),qE(138,`
    `),Tc(),qE(139,`
  `),Tc(),qE(140,`
`),Tc(),qE(141,`
`)),r&2&&(Wy(108),Np(l.selectedLanguage()+".json"),Wy(29),ap("dataset",l.dataset)("options",l.gridOptions)("columns",l.columns));},dependencies:[j1],encapsulation:2});}}return c})();export{W as Example12Component};