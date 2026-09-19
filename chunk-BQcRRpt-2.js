import{En as jc,F as Ip,Pn as ly,b as Ep,j as Ho,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,xt as T}from"./chunk-Rd4ToC_L.js";import{At as xe,W as _W,ct as ip,ht as nk,m as Ki,n as CW}from"./chunk-DLuyVhQJ.js";function d(l,w){return Math.floor(Math.random()*(w-l+1)+l)}var F=25;var h=`gridState`;var A=500;var R=(()=>{class l{constructor(){this.translate=T(Ki),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Ho(``),this.selectedLanguage.set(this.translate.getFallbackLang()||`en`)}angularGridReady(t){this.angularGrid=t}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){let t=JSON.parse(localStorage[h]||null);this.defineGrid(t);let o=`en`;this.translate.use(o),this.selectedLanguage.set(o)}clearGridStateFromLocalStorage(){this.angularGrid.gridService.resetGrid(this.columns),this.angularGrid.paginationService.changeItemPerPage(F),setTimeout(()=>{localStorage[h]=null})}defineGrid(t){let o=[];for(let n=0;n<A;n++)o.push({value:n,label:n});this.columns=[{id:`title`,name:`Title`,field:`title`,nameKey:`TITLE`,filterable:!0,sortable:!0,minWidth:45,width:100,filter:{model:ip.compoundInput}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,width:100,filter:{model:ip.input,filterShortcuts:[{titleKey:`BLANK_VALUES`,searchTerms:[`< A`],iconCssClass:`mdi mdi-filter-minus-outline`},{titleKey:`NON_BLANK_VALUES`,searchTerms:[`> A`],iconCssClass:`mdi mdi-filter-plus-outline`}]}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:`DURATION`,filterable:!0,filter:{collection:o,model:ip.multipleSelect,options:{maxHeight:250,width:175}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:70,type:`number`,sortable:!0,width:100,formatter:nk.percentCompleteBar,filterable:!0,filter:{model:ip.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:nk.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:`date`,filterable:!0,filter:{model:ip.compoundDate,filterShortcuts:[{titleKey:`PAST`,searchTerms:[xe(new Date,`YYYY-MM-DD`)],operator:`<`,iconCssClass:`mdi mdi-calendar`},{titleKey:`FUTURE`,searchTerms:[xe(new Date,`YYYY-MM-DD`)],operator:`>`,iconCssClass:`mdi mdi-calendar-clock`}]}},{id:`completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:85,formatter:nk.checkmarkMaterial,width:100,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:F},autoFitColumnsOnFirstLoad:!1,enableAutoSizeColumns:!1,autosizeColumnsByCellContentOnFirstLoad:!0,enableAutoResizeColumnsByCellContent:!0},t&&(this.gridOptions.presets=t),this.dataset=this.getData(A)}getData(t){let o=new Date().getFullYear(),n=[];for(let a=0;a<t;a++){let u=Math.round(Math.random()*100),C=d(o-15,o+8),I=d(10,25),c=d(1,12),M=c<10?`0${c}`:c,S=d(10,28),x=d(0,100),O=d(10,23),_=d(10,59);n[a]={id:a,title:`Task `+a,etc:`Something hidden `+a,description:a%5?`desc `+a:null,duration:u,percentComplete:x,percentCompleteNumber:x,start:new Date(C,c,S),usDateShort:`${c}/${S}/${I}`,utcDate:`${C}-${M}-${S}T${O}:${_}:${_}Z`,completed:a%3===0}}return n}gridStateChanged(t){console.log(`Client sample, Grid State changed:: `,t),localStorage[h]=JSON.stringify(t.gridState)}saveCurrentGridState(){let t=this.angularGrid.gridStateService.getCurrentGridState();console.log(`Client sample, last Grid State:: `,t),localStorage[h]=JSON.stringify(t)}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)}))}useDefaultPresets(){return{columns:[{columnId:`description`,width:170},{columnId:`title`,width:55},{columnId:`duration`},{columnId:`complete`},{columnId:`start`},{columnId:`usDateShort`},{columnId:`utcDate`}],filters:[{columnId:`duration`,searchTerms:[2,22,44]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||l)}}static{this.ɵcmp=$E({type:l,selectors:[[`ng-component`]],decls:61,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example15.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`small`],[`data-test`,`reset-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid15`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`]],template:function(o,n){o&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 15: Grid State & Presets using Local Storage
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return n.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    Grid State & Preset (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`)
    `),Ip(23,`br`),sD(24,`
    `),yi(25,`ul`,8),sD(26,`
      `),yi(27,`li`),sD(28,`Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it's previous state`),Rc(),sD(29,`
      `),yi(30,`ul`),sD(31,`
        `),yi(32,`li`),sD(33,`
          to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)
        `),Rc(),sD(34,`
      `),Rc(),sD(35,`
      `),yi(36,`li`),sD(37,`Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)`),Rc(),sD(38,`
    `),Rc(),sD(39,`
  `),Rc(),sD(40,`

  `),yi(41,`button`,9),bp(`click`,function(){return n.clearGridStateFromLocalStorage()}),sD(42,`
    `),Ip(43,`i`,10),sD(44,`
    Clear Grid State from Local Storage & Reset Grid
  `),Rc(),sD(45,`

  `),yi(46,`button`,11),bp(`click`,function(){return n.switchLanguage()}),sD(47,`
    `),Ip(48,`i`,12),sD(49,`
    Switch Language
  `),Rc(),sD(50,`
  `),yi(51,`b`),sD(52,`Locale:`),Rc(),sD(53,`
  `),yi(54,`span`,13),sD(55),Rc(),sD(56,`

  `),yi(57,`angular-slickgrid`,14),bp(`onAngularGridCreated`,function(u){return n.angularGridReady(u.detail)})(`onGridStateChanged`,function(u){return n.gridStateChanged(u.detail)})(`onBeforeGridDestroy`,function(){return n.saveCurrentGridState()}),sD(58,`
  `),Rc(),sD(59,`
`),Rc(),sD(60,`
`)),o&2&&(ly(55),jc(`
    `,n.selectedLanguage()+`.json`,`
  `),ly(2),Ep(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W],encapsulation:2})}}return l})();export{R as Example15Component};