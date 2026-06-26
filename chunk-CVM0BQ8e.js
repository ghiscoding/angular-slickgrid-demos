import {A}from'./chunk-BUfaobcJ.js';import {D,L as Le,A as Ao,f as Tu,X as XN,b as bI,j as j1,u as ui,U as UE,c as cp,T as Tc,p as pp,W as Wy,q as AE,k as Nc,d as ap}from'./main-WTCLCICA.js';var p="https://countries.trevorblades.com/",k=(()=>{class s{constructor(){this.http=D(Le),this.dataset=[],this.hideSubTitle=false,this.metrics=Ao(void 0),this.graphqlQuery="",this.processing=Ao(true),this.status=Ao({text:"processing...",class:"alert alert-danger"}),this.isDataLoaded=Ao(false);}ngOnInit(){this.columns=[{id:"countryCode",field:"code",name:"Code",maxWidth:90,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryName",field:"name",name:"Name",width:60,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryNative",field:"native",name:"Native",width:60,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryPhone",field:"phone",name:"Phone Area Code",maxWidth:110,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryCurrency",field:"currency",name:"Currency",maxWidth:90,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryEmoji",field:"emoji",name:"Emoji",maxWidth:90,sortable:true,columnGroup:"Country"},{id:"languageName",field:"languages.name",name:"Names",width:60,formatter:XN.arrayObjectToCsv,columnGroup:"Language",params:{propertyNames:["name"],useFormatterOuputToFilter:true},filterable:true,filter:{model:Tu.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:true,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"name",value:"",operator:"NE"},{property:"name",value:null,operator:"NE"}],collectionSortBy:{property:"name"},customStructure:{value:"name",label:"name"},options:{filter:true}}},{id:"languageNative",field:"languages.native",name:"Native",width:60,formatter:XN.arrayObjectToCsv,params:{propertyNames:["native"],useFormatterOuputToFilter:true},columnGroup:"Language",filterable:true,filter:{model:Tu.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:true,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"native",value:"",operator:"NE"},{property:"native",value:null,operator:"NE"}],collectionSortBy:{property:"native"},customStructure:{value:"native",label:"native"},options:{filter:true}}},{id:"languageCode",field:"languages.code",name:"Codes",maxWidth:100,formatter:XN.arrayObjectToCsv,params:{propertyNames:["code"],useFormatterOuputToFilter:true},columnGroup:"Language",filterable:true},{id:"continentName",field:"continent.name",name:"Name",width:60,sortable:true,filterable:true,formatter:XN.complexObject,columnGroup:"Continent"},{id:"continentCode",field:"continent.code",name:"Code",maxWidth:90,sortable:true,filterable:true,filter:{model:Tu.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:"data.continents",addBlankEntry:true,separatorBetweenTextLabels:": "},customStructure:{value:"code",label:"code",labelSuffix:"name"}},formatter:XN.complexObject,columnGroup:"Continent"}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableCellNavigation:true,enablePagination:false,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:28,datasetIdPropertyName:"code",showCustomFooter:true,backendServiceApi:{service:new A,useLocalFiltering:true,useLocalSorting:true,options:{datasetName:"countries"},preProcess:()=>this.isDataLoaded()?"":this.displaySpinner(true),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(false),this.isDataLoaded.set(true);}}};}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"});}getCountries(i){return this.http.post(p,{query:i})}getContinents(){return this.http.post(p,{query:"query { continents { code, name  }}"})}getLanguages(){return this.http.post(p,{query:"query { languages { code, name, native  }}"})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(u){return new(u||s)};}static{this.\u0275cmp=bI({type:s,selectors:[["ng-component"]],decls:81,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","row"],[1,"col-12"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql","target","_blank"],["href","https://countries.trevorblades.com/","target","_blank"],[1,"row"],[1,"col-xs-6","col-sm-3"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],["gridId","grid25",3,"columns","options","dataset"]],template:function(u,a){u&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 25: GraphQL Basic API without Pagination
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return a.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",6),UE(19,`
    `),ui(20,"div",7),UE(21,`
      Use basic GraphQL query with any external public APIs (`),ui(22,"a",8),UE(23,"Wiki docs"),Tc(),UE(24,`).
      `),ui(25,"ul"),UE(26,`
        `),ui(27,"li"),UE(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),ui(29,"a",9),UE(30,"https://countries.trevorblades.com/"),Tc(),UE(31,`
        `),Tc(),UE(32,`
        `),ui(33,"li"),UE(34,"Compare to the regular and default GraphQL implementation, you will find the following differences"),Tc(),UE(35,`
        `),ui(36,"ul"),UE(37,`
          `),ui(38,"li"),UE(39,`
            There are no Pagination and we only use GraphQL `),ui(40,"b"),UE(41,"once"),Tc(),UE(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),Tc(),UE(43,`
          `),ui(44,"li"),UE(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),Tc(),UE(46,`
        `),Tc(),UE(47,`
        `),ui(48,"li"),UE(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),ui(50,"b"),UE(51,"ONLY"),Tc(),UE(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),Tc(),UE(53,`
        `),ui(54,"li"),UE(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),Tc(),UE(56,`
      `),Tc(),UE(57,`
    `),Tc(),UE(58,`
  `),Tc(),UE(59,`

  `),ui(60,"div",10),UE(61,`
    `),ui(62,"div",11),UE(63,`
      `),ui(64,"div",12),UE(65,`
        `),ui(66,"strong"),UE(67,"Status: "),Tc(),UE(68),ui(69,"span",13),UE(70,`
          `),cp(71,"i",14),UE(72,`
        `),Tc(),UE(73,`
      `),Tc(),UE(74,`
    `),Tc(),UE(75,`
  `),Tc(),UE(76,`

  `),ui(77,"angular-slickgrid",15),UE(78," "),Tc(),UE(79,`
`),Tc(),UE(80,`
`)),u&2&&(Wy(64),AE(a.status()?.class),Wy(4),Nc(" ",a.status()?.text,`
        `),Wy(),ap("hidden",!a.processing()),Wy(8),ap("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[j1],styles:[`.alert{padding:8px}
`],encapsulation:2});}}return s})();export{k as Example25Component};