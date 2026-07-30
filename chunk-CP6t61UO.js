import {D,d as ji,A as Ao,U as U1,e as Tu,X as XN,w as Te,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,W as Wy,i as Nc,a as ap}from'./main-MR3B775B.js';function d(l,F){return Math.floor(Math.random()*(F-l+1)+l)}var w=25,h="gridState",A=500,z=(()=>{class l{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=false,this.selectedLanguage=Ao(""),this.selectedLanguage.set(this.translate.getFallbackLang()||"en");}angularGridReady(t){this.angularGrid=t;}ngOnDestroy(){U1(this.subscriptions);}ngOnInit(){let t=JSON.parse(localStorage[h]||null);this.defineGrid(t);let o="en";this.translate.use(o),this.selectedLanguage.set(o);}clearGridStateFromLocalStorage(){this.angularGrid.gridService.resetGrid(this.columns),this.angularGrid.paginationService.changeItemPerPage(w),setTimeout(()=>localStorage[h]=null);}defineGrid(t){let o=[];for(let i=0;i<A;i++)o.push({value:i,label:i});this.columns=[{id:"title",name:"Title",field:"title",nameKey:"TITLE",filterable:true,sortable:true,minWidth:45,width:100,filter:{model:Tu.compoundInput}},{id:"description",name:"Description",field:"description",filterable:true,sortable:true,minWidth:80,width:100,filter:{model:Tu.input,filterShortcuts:[{titleKey:"BLANK_VALUES",searchTerms:["< A"],iconCssClass:"mdi mdi-filter-minus-outline"},{titleKey:"NON_BLANK_VALUES",searchTerms:["> A"],iconCssClass:"mdi mdi-filter-plus-outline"}]}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number",exportCsvForceToKeepAsString:true,minWidth:55,width:100,nameKey:"DURATION",filterable:true,filter:{collection:o,model:Tu.multipleSelect,options:{maxHeight:250,width:175}}},{id:"complete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:70,type:"number",sortable:true,width:100,formatter:XN.percentCompleteBar,filterable:true,filter:{model:Tu.slider,operator:">"}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:XN.dateIso,sortable:true,minWidth:75,exportWithFormatter:true,width:100,type:"date",filterable:true,filter:{model:Tu.compoundDate,filterShortcuts:[{titleKey:"PAST",searchTerms:[Te(new Date,"YYYY-MM-DD")],operator:"<",iconCssClass:"mdi mdi-calendar"},{titleKey:"FUTURE",searchTerms:[Te(new Date,"YYYY-MM-DD")],operator:">",iconCssClass:"mdi mdi-calendar-clock"}]}},{id:"completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:85,formatter:XN.checkmarkMaterial,width:100,type:"boolean",sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect,options:{autoAdjustDropHeight:true}}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCheckboxSelector:true,enableFiltering:true,enableTranslate:true,i18n:this.translate,columnPicker:{hideForceFitButton:true},gridMenu:{hideForceFitButton:true,hideClearFrozenColumnsCommand:false},headerMenu:{hideFreezeColumnsCommand:false},enablePagination:true,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:w}},t&&(this.gridOptions.presets=t),this.dataset=this.getData(A);}getData(t){let o=new Date().getFullYear(),i=[];for(let a=0;a<t;a++){let c=Math.round(Math.random()*100),x=d(o-15,o+8),I=d(10,25),u=d(1,12),M=u<10?`0${u}`:u,S=d(10,28),C=d(0,100),O=d(10,23),_=d(10,59);i[a]={id:a,title:"Task "+a,etc:"Something hidden "+a,description:a%5?"desc "+a:null,duration:c,percentComplete:C,percentCompleteNumber:C,start:new Date(x,u,S),usDateShort:`${u}/${S}/${I}`,utcDate:`${x}-${M}-${S}T${O}:${_}:${_}Z`,completed:a%3===0};}return i}gridStateChanged(t){console.log("Client sample, Grid State changed:: ",t),localStorage[h]=JSON.stringify(t.gridState);}saveCurrentGridState(){let t=this.angularGrid.gridStateService.getCurrentGridState();console.log("Client sample, last Grid State:: ",t),localStorage[h]=JSON.stringify(t);}switchLanguage(){let t=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t);}));}useDefaultPresets(){return {columns:[{columnId:"description",width:170},{columnId:"title",width:55},{columnId:"duration"},{columnId:"complete"},{columnId:"start"},{columnId:"usDateShort"},{columnId:"utcDate"}],filters:[{columnId:"duration",searchTerms:[2,22,44]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||l)};}static{this.\u0275cmp=_I({type:l,selectors:[["ng-component"]],decls:61,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example15.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset","target","_blank"],[1,"small"],["data-test","reset-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],["gridId","grid15",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","columns","options","dataset"]],template:function(o,i){o&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 15: Grid State & Presets using Local Storage
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return i.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    Grid State & Preset (`),ui(20,"a",7),qE(21,"Wiki docs"),Tc(),qE(22,`)
    `),cp(23,"br"),qE(24,`
    `),ui(25,"ul",8),qE(26,`
      `),ui(27,"li"),qE(28,`Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it's previous state`),Tc(),qE(29,`
      `),ui(30,"ul"),qE(31,`
        `),ui(32,"li"),qE(33,`
          to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)
        `),Tc(),qE(34,`
      `),Tc(),qE(35,`
      `),ui(36,"li"),qE(37,"Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)"),Tc(),qE(38,`
    `),Tc(),qE(39,`
  `),Tc(),qE(40,`

  `),ui(41,"button",9),pp("click",function(){return i.clearGridStateFromLocalStorage()}),qE(42,`
    `),cp(43,"i",10),qE(44,`
    Clear Grid State from Local Storage & Reset Grid
  `),Tc(),qE(45,`

  `),ui(46,"button",11),pp("click",function(){return i.switchLanguage()}),qE(47,`
    `),cp(48,"i",12),qE(49,`
    Switch Language
  `),Tc(),qE(50,`
  `),ui(51,"b"),qE(52,"Locale:"),Tc(),qE(53,`
  `),ui(54,"span",13),qE(55),Tc(),qE(56,`

  `),ui(57,"angular-slickgrid",14),pp("onAngularGridCreated",function(c){return i.angularGridReady(c.detail)})("onGridStateChanged",function(c){return i.gridStateChanged(c.detail)})("onBeforeGridDestroy",function(){return i.saveCurrentGridState()}),qE(58,`
  `),Tc(),qE(59,`
`),Tc(),qE(60,`
`)),o&2&&(Wy(55),Nc(`
    `,i.selectedLanguage()+".json",`
  `),Wy(2),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1],encapsulation:2});}}return l})();export{z as Example15Component};