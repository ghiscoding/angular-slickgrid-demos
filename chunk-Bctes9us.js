import {A}from'./chunk-DsmTeHex.js';import {D,L as Le,A as Ao,h as Tu,q as qN,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,v as SE,N as Nc,g as sp}from'./main-C6PQTYH6.js';var p="https://countries.trevorblades.com/",k=(()=>{class s{constructor(){this.http=D(Le),this.dataset=[],this.hideSubTitle=false,this.metrics=Ao(void 0),this.graphqlQuery="",this.processing=Ao(true),this.status=Ao({text:"processing...",class:"alert alert-danger"}),this.isDataLoaded=Ao(false);}ngOnInit(){this.columns=[{id:"countryCode",field:"code",name:"Code",maxWidth:90,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryName",field:"name",name:"Name",width:60,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryNative",field:"native",name:"Native",width:60,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryPhone",field:"phone",name:"Phone Area Code",maxWidth:110,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryCurrency",field:"currency",name:"Currency",maxWidth:90,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryEmoji",field:"emoji",name:"Emoji",maxWidth:90,sortable:true,columnGroup:"Country"},{id:"languageName",field:"languages.name",name:"Names",width:60,formatter:qN.arrayObjectToCsv,columnGroup:"Language",params:{propertyNames:["name"],useFormatterOuputToFilter:true},filterable:true,filter:{model:Tu.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:true,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"name",value:"",operator:"NE"},{property:"name",value:null,operator:"NE"}],collectionSortBy:{property:"name"},customStructure:{value:"name",label:"name"},options:{filter:true}}},{id:"languageNative",field:"languages.native",name:"Native",width:60,formatter:qN.arrayObjectToCsv,params:{propertyNames:["native"],useFormatterOuputToFilter:true},columnGroup:"Language",filterable:true,filter:{model:Tu.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:true,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"native",value:"",operator:"NE"},{property:"native",value:null,operator:"NE"}],collectionSortBy:{property:"native"},customStructure:{value:"native",label:"native"},options:{filter:true}}},{id:"languageCode",field:"languages.code",name:"Codes",maxWidth:100,formatter:qN.arrayObjectToCsv,params:{propertyNames:["code"],useFormatterOuputToFilter:true},columnGroup:"Language",filterable:true},{id:"continentName",field:"continent.name",name:"Name",width:60,sortable:true,filterable:true,formatter:qN.complexObject,columnGroup:"Continent"},{id:"continentCode",field:"continent.code",name:"Code",maxWidth:90,sortable:true,filterable:true,filter:{model:Tu.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:"data.continents",addBlankEntry:true,separatorBetweenTextLabels:": "},customStructure:{value:"code",label:"code",labelSuffix:"name"}},formatter:qN.complexObject,columnGroup:"Continent"}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableCellNavigation:true,enablePagination:false,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:28,datasetIdPropertyName:"code",showCustomFooter:true,backendServiceApi:{service:new A,useLocalFiltering:true,useLocalSorting:true,options:{datasetName:"countries"},preProcess:()=>this.isDataLoaded()?"":this.displaySpinner(true),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(false),this.isDataLoaded.set(true);}}};}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"});}getCountries(i){return this.http.post(p,{query:i})}getContinents(){return this.http.post(p,{query:"query { continents { code, name  }}"})}getLanguages(){return this.http.post(p,{query:"query { languages { code, name, native  }}"})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(u){return new(u||s)};}static{this.\u0275cmp=TI({type:s,selectors:[["ng-component"]],decls:81,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","row"],[1,"col-12"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql","target","_blank"],["href","https://countries.trevorblades.com/","target","_blank"],[1,"row"],[1,"col-xs-6","col-sm-3"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],["gridId","grid25",3,"columns","options","dataset"]],template:function(u,a){u&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 25: GraphQL Basic API without Pagination
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return a.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    `),ui(20,"div",7),BE(21,`
      Use basic GraphQL query with any external public APIs (`),ui(22,"a",8),BE(23,"Wiki docs"),Tc(),BE(24,`).
      `),ui(25,"ul"),BE(26,`
        `),ui(27,"li"),BE(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),ui(29,"a",9),BE(30,"https://countries.trevorblades.com/"),Tc(),BE(31,`
        `),Tc(),BE(32,`
        `),ui(33,"li"),BE(34,"Compare to the regular and default GraphQL implementation, you will find the following differences"),Tc(),BE(35,`
        `),ui(36,"ul"),BE(37,`
          `),ui(38,"li"),BE(39,`
            There are no Pagination and we only use GraphQL `),ui(40,"b"),BE(41,"once"),Tc(),BE(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),Tc(),BE(43,`
          `),ui(44,"li"),BE(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),Tc(),BE(46,`
        `),Tc(),BE(47,`
        `),ui(48,"li"),BE(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),ui(50,"b"),BE(51,"ONLY"),Tc(),BE(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),Tc(),BE(53,`
        `),ui(54,"li"),BE(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),Tc(),BE(56,`
      `),Tc(),BE(57,`
    `),Tc(),BE(58,`
  `),Tc(),BE(59,`

  `),ui(60,"div",10),BE(61,`
    `),ui(62,"div",11),BE(63,`
      `),ui(64,"div",12),BE(65,`
        `),ui(66,"strong"),BE(67,"Status: "),Tc(),BE(68),ui(69,"span",13),BE(70,`
          `),ap(71,"i",14),BE(72,`
        `),Tc(),BE(73,`
      `),Tc(),BE(74,`
    `),Tc(),BE(75,`
  `),Tc(),BE(76,`

  `),ui(77,"angular-slickgrid",15),BE(78," "),Tc(),BE(79,`
`),Tc(),BE(80,`
`)),u&2&&(Uy(64),SE(a.status()?.class),Uy(4),Nc(" ",a.status()?.text,`
        `),Uy(),sp("hidden",!a.processing()),Uy(8),sp("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[U1],styles:[`.alert{padding:8px}
`],encapsulation:2});}}return s})();export{k as Example25Component};