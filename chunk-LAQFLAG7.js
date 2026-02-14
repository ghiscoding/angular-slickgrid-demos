import{a as C}from"./chunk-3CNIU24U.js";import{c as S}from"./chunk-MAV7VLQV.js";import{Da as E,wa as m,za as r}from"./chunk-IBXCHNN7.js";import{Aa as o,Jb as f,Ka as x,Kb as e,Mb as v,Pa as y,ia as l,ib as p,jb as t,kb as n,lb as d,vb as b}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var g="https://countries.trevorblades.com/",P=(()=>{class s{constructor(i){this.http=i,this.dataset=[],this.hideSubTitle=!1,this.metrics=l(void 0),this.graphqlQuery="",this.processing=l(!0),this.status=l({text:"processing...",class:"alert alert-danger"}),this.isDataLoaded=l(!1)}ngOnInit(){this.columnDefinitions=[{id:"countryCode",field:"code",name:"Code",maxWidth:90,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryName",field:"name",name:"Name",width:60,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryNative",field:"native",name:"Native",width:60,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryPhone",field:"phone",name:"Phone Area Code",maxWidth:110,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryCurrency",field:"currency",name:"Currency",maxWidth:90,sortable:!0,filterable:!0,columnGroup:"Country"},{id:"countryEmoji",field:"emoji",name:"Emoji",maxWidth:90,sortable:!0,columnGroup:"Country"},{id:"languageName",field:"languages.name",name:"Names",width:60,formatter:r.arrayObjectToCsv,columnGroup:"Language",params:{propertyNames:["name"],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:m.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"name",value:"",operator:"NE"},{property:"name",value:null,operator:"NE"}],collectionSortBy:{property:"name"},customStructure:{value:"name",label:"name"},options:{filter:!0}}},{id:"languageNative",field:"languages.native",name:"Native",width:60,formatter:r.arrayObjectToCsv,params:{propertyNames:["native"],useFormatterOuputToFilter:!0},columnGroup:"Language",filterable:!0,filter:{model:m.multipleSelect,collectionAsync:this.getLanguages(),operator:"IN_CONTAINS",collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:"data.languages"},collectionFilterBy:[{property:"native",value:"",operator:"NE"},{property:"native",value:null,operator:"NE"}],collectionSortBy:{property:"native"},customStructure:{value:"native",label:"native"},options:{filter:!0}}},{id:"languageCode",field:"languages.code",name:"Codes",maxWidth:100,formatter:r.arrayObjectToCsv,params:{propertyNames:["code"],useFormatterOuputToFilter:!0},columnGroup:"Language",filterable:!0},{id:"continentName",field:"continent.name",name:"Name",width:60,sortable:!0,filterable:!0,formatter:r.complexObject,columnGroup:"Continent"},{id:"continentCode",field:"continent.code",name:"Code",maxWidth:90,sortable:!0,filterable:!0,filter:{model:m.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:"data.continents",addBlankEntry:!0,separatorBetweenTextLabels:": "},customStructure:{value:"code",label:"code",labelSuffix:"name"}},formatter:r.complexObject,columnGroup:"Continent"}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:"code",showCustomFooter:!0,backendServiceApi:{service:new C,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:"countries"},preProcess:()=>this.isDataLoaded()?"":this.displaySpinner(!0),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.isDataLoaded.set(!0)}}}}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:"processing...",class:"alert alert-danger"}:{text:"finished",class:"alert alert-success"})}getCountries(i){return this.http.post(g,{query:i})}getContinents(){return this.http.post(g,{query:"query { continents { code, name  }}"})}getLanguages(){return this.http.post(g,{query:"query { languages { code, name, native  }}"})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[i]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(u){return new(u||s)(x(S))}}static{this.\u0275cmp=y({type:s,selectors:[["ng-component"]],decls:81,vars:7,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","row"],[1,"col-12"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql","target","_blank"],["href","https://countries.trevorblades.com/","target","_blank"],[1,"row"],[1,"col-xs-6","col-sm-3"],["role","alert","data-test","status"],[3,"hidden"],[1,"mdi","mdi-sync","mdi-spin-1s"],["gridId","grid25",3,"columns","options","dataset"]],template:function(u,a){if(u&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 25: GraphQL Basic API without Pagination
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),d(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),t(12,"button",4),b("click",function(){return a.toggleSubTitle()}),e(13,`
      `),d(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),t(18,"div",6),e(19,`
    `),t(20,"div",7),e(21,`
      Use basic GraphQL query with any external public APIs (`),t(22,"a",8),e(23,"Wiki docs"),n(),e(24,`).
      `),t(25,"ul"),e(26,`
        `),t(27,"li"),e(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),t(29,"a",9),e(30,"https://countries.trevorblades.com/"),n(),e(31,`
        `),n(),e(32,`
        `),t(33,"li"),e(34,"Compare to the regular and default GraphQL implementation, you will find the following differences"),n(),e(35,`
        `),t(36,"ul"),e(37,`
          `),t(38,"li"),e(39,`
            There are no Pagination and we only use GraphQL `),t(40,"b"),e(41,"once"),n(),e(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),n(),e(43,`
          `),t(44,"li"),e(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),n(),e(46,`
        `),n(),e(47,`
        `),t(48,"li"),e(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),t(50,"b"),e(51,"ONLY"),n(),e(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),n(),e(53,`
        `),t(54,"li"),e(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),n(),e(56,`
      `),n(),e(57,`
    `),n(),e(58,`
  `),n(),e(59,`

  `),t(60,"div",10),e(61,`
    `),t(62,"div",11),e(63,`
      `),t(64,"div",12),e(65,`
        `),t(66,"strong"),e(67,"Status: "),n(),e(68),t(69,"span",13),e(70,`
          `),d(71,"i",14),e(72,`
        `),n(),e(73,`
      `),n(),e(74,`
    `),n(),e(75,`
  `),n(),e(76,`

  `),t(77,"angular-slickgrid",15),e(78," "),n(),e(79,`
`),n(),e(80,`
`)),u&2){let c,h;o(64),f((c=a.status())==null?null:c.class),o(4),v(" ",(h=a.status())==null?null:h.text,`
        `),o(),p("hidden",!a.processing()),o(8),p("columns",a.columnDefinitions)("options",a.gridOptions)("dataset",a.dataset)}},dependencies:[E],styles:[`.alert{padding:8px}
`],encapsulation:2})}}return s})();export{P as Example25Component};
