import {A}from'./chunk-z8XK80Lx.js';import {D,L as Le,A as Ao,e as Tu,X as XN,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,W as Wy,R as RE,i as Nc,a as ap}from'./main-MR3B775B.js';var p="https://countries.trevorblades.com/",k=(()=>{class s{constructor(){this.http=D(Le),this.dataset=[],this.hideSubTitle=false,this.metrics=Ao(void 0),this.graphqlQuery="",this.processing=Ao(true),this.status=Ao({text:"processing...",class:"alert alert-danger"}),this.isDataLoaded=Ao(false);}ngOnInit(){this.columns=[{id:"countryCode",field:"code",name:"Code",maxWidth:90,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryName",field:"name",name:"Name",width:60,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryNative",field:"native",name:"Native",width:60,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryPhone",field:"phone",name:"Phone Area Code",maxWidth:110,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryCurrency",field:"currency",name:"Currency",maxWidth:90,sortable:true,filterable:true,columnGroup:"Country"},{id:"countryEmoji",field:"emoji",name:"Emoji",maxWidth:90,sortable:true,columnGroup:"Country"},{id:"languageName",field:"languages.name",name:"Names",width:60,formatter:XN.arrayObjectToCsv,columnGroup:"Language",params:{propertyNames:["name"],useFormatterOuputToFilter:true},filterable:true,filter:{model:Tu.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:true,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"name",value:"",operator:"NE"},{property:"name",value:null,operator:"NE"}],collectionSortBy:{property:"name"},customStructure:{value:"name",label:"name"},options:{filter:true}}},{id:"languageNative",field:"languages.native",name:"Native",width:60,formatter:XN.arrayObjectToCsv,params:{propertyNames:["native"],useFormatterOuputToFilter:true},columnGroup:"Language",filterable:true,filter:{model:Tu.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:true,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"native",value:"",operator:"NE"},{property:"native",value:null,operator:"NE"}],collectionSortBy:{property:"native"},customStructure:{value:"native",label:"native"},options:{filter:true}}},{id:"languageCode",field:"languages.code",name:"Codes",maxWidth:100,formatter:XN.arrayObjectToCsv,params:{propertyNames:["code"],useFormatterOuputToFilter:true},columnGroup:"Language",filterable:true},{id:"continentName",field:"continent.name",name:"Name",width:60,sortable:true,filterable:true,formatter:XN.complexObject,columnGroup:"Continent"},{id:"continentCode",field:"continent.code",name:"Code",maxWidth:90,sortable:true,filterable:true,filter:{model:Tu.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:"data.continents",addBlankEntry:true,separatorBetweenTextLabels:": "},customStructure:{value:"code",label:"code",labelSuffix:"name"}},formatter:XN.complexObject,columnGroup:"Continent"}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,enableCellNavigation:true,enablePagination:false,createPreHeaderPanel:true,showPreHeaderPanel:true,preHeaderPanelHeight:28,datasetIdPropertyName:"code",showCustomFooter:true,backendServiceApi:{service:new A,useLocalFiltering:true,useLocalSorting:true,options:{datasetName:"countries"},preProcess:()=>this.isDataLoaded()?"":this.displaySpinner(true),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(false),this.isDataLoaded.set(true);}}};}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"});}getCountries(i){return this.http.post(p,{query:i})}getContinents(){return this.http.post(p,{query:"query { continents { code, name  }}"})}getLanguages(){return this.http.post(p,{query:"query { languages { code, name, native  }}"})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(u){return new(u||s)};}static{this.\u0275cmp=_I({type:s,selectors:[["ng-component"]],decls:81,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","row"],[1,"col-12"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql","target","_blank"],["href","https://countries.trevorblades.com/","target","_blank"],[1,"row"],[1,"col-xs-6","col-sm-3"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],["gridId","grid25",3,"columns","options","dataset"]],template:function(u,a){u&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 25: GraphQL Basic API without Pagination
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return a.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    `),ui(20,"div",7),qE(21,`
      Use basic GraphQL query with any external public APIs (`),ui(22,"a",8),qE(23,"Wiki docs"),Tc(),qE(24,`).
      `),ui(25,"ul"),qE(26,`
        `),ui(27,"li"),qE(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),ui(29,"a",9),qE(30,"https://countries.trevorblades.com/"),Tc(),qE(31,`
        `),Tc(),qE(32,`
        `),ui(33,"li"),qE(34,"Compare to the regular and default GraphQL implementation, you will find the following differences"),Tc(),qE(35,`
        `),ui(36,"ul"),qE(37,`
          `),ui(38,"li"),qE(39,`
            There are no Pagination and we only use GraphQL `),ui(40,"b"),qE(41,"once"),Tc(),qE(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),Tc(),qE(43,`
          `),ui(44,"li"),qE(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),Tc(),qE(46,`
        `),Tc(),qE(47,`
        `),ui(48,"li"),qE(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),ui(50,"b"),qE(51,"ONLY"),Tc(),qE(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),Tc(),qE(53,`
        `),ui(54,"li"),qE(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),Tc(),qE(56,`
      `),Tc(),qE(57,`
    `),Tc(),qE(58,`
  `),Tc(),qE(59,`

  `),ui(60,"div",10),qE(61,`
    `),ui(62,"div",11),qE(63,`
      `),ui(64,"div",12),qE(65,`
        `),ui(66,"strong"),qE(67,"Status: "),Tc(),qE(68),ui(69,"span",13),qE(70,`
          `),cp(71,"i",14),qE(72,`
        `),Tc(),qE(73,`
      `),Tc(),qE(74,`
    `),Tc(),qE(75,`
  `),Tc(),qE(76,`

  `),ui(77,"angular-slickgrid",15),qE(78," "),Tc(),qE(79,`
`),Tc(),qE(80,`
`)),u&2&&(Wy(64),RE(a.status()?.class),Wy(4),Nc(" ",a.status()?.text,`
        `),Wy(),ap("hidden",!a.processing()),Wy(8),ap("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[j1],styles:[`.alert{padding:8px}
`],encapsulation:2});}}return s})();export{k as Example25Component};