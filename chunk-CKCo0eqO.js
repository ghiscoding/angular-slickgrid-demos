import{Ct as T,Dt as UE,En as iD,Kn as mp,Nn as jo,Tt as Tp,Wn as mi,dt as Pc,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{At as xe,H as _W,m as Ki,mt as nk,n as CW,st as ip}from"./chunk-CAMk6vEo.js";function d(l,w){return Math.floor(Math.random()*(w-l+1)+l)}var F=25;var h=`gridState`;var A=500;var R=(()=>{class l{constructor(){this.translate=T(Ki),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=jo(``),this.selectedLanguage.set(this.translate.getFallbackLang()||`en`)}angularGridReady(t){this.angularGrid=t}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){let t=JSON.parse(localStorage[h]||null);this.defineGrid(t);let o=`en`;this.translate.use(o),this.selectedLanguage.set(o)}clearGridStateFromLocalStorage(){this.angularGrid.gridService.resetGrid(this.columns),this.angularGrid.paginationService.changeItemPerPage(F),setTimeout(()=>{localStorage[h]=null})}defineGrid(t){let o=[];for(let n=0;n<A;n++)o.push({value:n,label:n});this.columns=[{id:`title`,name:`Title`,field:`title`,nameKey:`TITLE`,filterable:!0,sortable:!0,minWidth:45,width:100,filter:{model:ip.compoundInput}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,width:100,filter:{model:ip.input,filterShortcuts:[{titleKey:`BLANK_VALUES`,searchTerms:[`< A`],iconCssClass:`mdi mdi-filter-minus-outline`},{titleKey:`NON_BLANK_VALUES`,searchTerms:[`> A`],iconCssClass:`mdi mdi-filter-plus-outline`}]}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:`DURATION`,filterable:!0,filter:{collection:o,model:ip.multipleSelect,options:{maxHeight:250,width:175}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:70,type:`number`,sortable:!0,width:100,formatter:nk.percentCompleteBar,filterable:!0,filter:{model:ip.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:nk.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:`date`,filterable:!0,filter:{model:ip.compoundDate,filterShortcuts:[{titleKey:`PAST`,searchTerms:[xe(new Date,`YYYY-MM-DD`)],operator:`<`,iconCssClass:`mdi mdi-calendar`},{titleKey:`FUTURE`,searchTerms:[xe(new Date,`YYYY-MM-DD`)],operator:`>`,iconCssClass:`mdi mdi-calendar-clock`}]}},{id:`completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:85,formatter:nk.checkmarkMaterial,width:100,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:F},autoFitColumnsOnFirstLoad:!1,enableAutoSizeColumns:!1,autosizeColumnsByCellContentOnFirstLoad:!0,enableAutoResizeColumnsByCellContent:!0},t&&(this.gridOptions.presets=t),this.dataset=this.getData(A)}getData(t){let o=new Date().getFullYear(),n=[];for(let a=0;a<t;a++){let u=Math.round(Math.random()*100),C=d(o-15,o+8),I=d(10,25),c=d(1,12),M=c<10?`0${c}`:c,S=d(10,28),x=d(0,100),O=d(10,23),_=d(10,59);n[a]={id:a,title:`Task `+a,etc:`Something hidden `+a,description:a%5?`desc `+a:null,duration:u,percentComplete:x,percentCompleteNumber:x,start:new Date(C,c,S),usDateShort:`${c}/${S}/${I}`,utcDate:`${C}-${M}-${S}T${O}:${_}:${_}Z`,completed:a%3===0}}return n}gridStateChanged(t){console.log(`Client sample, Grid State changed:: `,t),localStorage[h]=JSON.stringify(t.gridState)}saveCurrentGridState(){let t=this.angularGrid.gridStateService.getCurrentGridState();console.log(`Client sample, last Grid State:: `,t),localStorage[h]=JSON.stringify(t)}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)}))}useDefaultPresets(){return{columns:[{columnId:`description`,width:170},{columnId:`title`,width:55},{columnId:`duration`},{columnId:`complete`},{columnId:`start`},{columnId:`usDateShort`},{columnId:`utcDate`}],filters:[{columnId:`duration`,searchTerms:[2,22,44]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||l)}}static{this.ɵcmp=UE({type:l,selectors:[[`ng-component`]],decls:61,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example15.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`small`],[`data-test`,`reset-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid15`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`]],template:function(o,n){o&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 15: Grid State & Presets using Local Storage
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return n.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    Grid State & Preset (`),mi(20,`a`,7),iD(21,`Wiki docs`),Ac(),iD(22,`)
    `),vp(23,`br`),iD(24,`
    `),mi(25,`ul`,8),iD(26,`
      `),mi(27,`li`),iD(28,`Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it's previous state`),Ac(),iD(29,`
      `),mi(30,`ul`),iD(31,`
        `),mi(32,`li`),iD(33,`
          to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)
        `),Ac(),iD(34,`
      `),Ac(),iD(35,`
      `),mi(36,`li`),iD(37,`Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)`),Ac(),iD(38,`
    `),Ac(),iD(39,`
  `),Ac(),iD(40,`

  `),mi(41,`button`,9),Tp(`click`,function(){return n.clearGridStateFromLocalStorage()}),iD(42,`
    `),vp(43,`i`,10),iD(44,`
    Clear Grid State from Local Storage & Reset Grid
  `),Ac(),iD(45,`

  `),mi(46,`button`,11),Tp(`click`,function(){return n.switchLanguage()}),iD(47,`
    `),vp(48,`i`,12),iD(49,`
    Switch Language
  `),Ac(),iD(50,`
  `),mi(51,`b`),iD(52,`Locale:`),Ac(),iD(53,`
  `),mi(54,`span`,13),iD(55),Ac(),iD(56,`

  `),mi(57,`angular-slickgrid`,14),Tp(`onAngularGridCreated`,function(u){return n.angularGridReady(u.detail)})(`onGridStateChanged`,function(u){return n.gridStateChanged(u.detail)})(`onBeforeGridDestroy`,function(){return n.saveCurrentGridState()}),iD(58,`
  `),Ac(),iD(59,`
`),Ac(),iD(60,`
`)),o&2&&(cy(55),Pc(`
    `,n.selectedLanguage()+`.json`,`
  `),cy(2),mp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W],encapsulation:2})}}return l})();export{R as Example15Component};