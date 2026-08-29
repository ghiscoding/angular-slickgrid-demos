import{Dt as UE,En as iD,H as Jy,Kn as mp,Nt as Vp,Qn as pI,Rn as lD,Tt as Tp,Wn as mi,_n as fI,bt as SI,dt as Pc,hr as vp,ht as QI,kt as Up,ln as cy,o as Ac,pn as eE,qt as _D,r as $p,un as dD,yr as wD}from"./chunk-06EGdSfW.js";import{H as _W,N as WA,b as Pm,mt as nk,st as ip}from"./chunk-CAMk6vEo.js";import{_ as Vn,b as zt,d as Fn,g as Te,s as $t}from"./main-T6P2BZBW.js";import{n as j$1,t as Y$1}from"./chunk-YIIvJoE9.js";var L=(()=>{class s{constructor(){this.model={}}alertAssignee(l){alert(typeof l==`string`?`Assignee on this task is: ${l.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.rowId),this.parentRef.showFlashMessage(`Deleted row with ${l.title}`,`danger`))}callParentMethod(l){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${l.title}`)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=UE({type:s,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(a,i){a&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h3`),iD(3),Ac(),iD(4,`
  `),mi(5,`div`,1),iD(6,`
    `),mi(7,`div`,2)(8,`label`),iD(9,`Assignee:`),Ac(),iD(10,` `),mi(11,`input`,3),$p(`ngModelChange`,function(r){return lD(i.model.assignee,r)||(i.model.assignee=r),r}),Ac(),Jy(),Ac(),iD(12,`
    `),mi(13,`div`,2),iD(14,`
      `),mi(15,`label`),iD(16,`Reporter:`),Ac(),iD(17,` `),mi(18,`span`),iD(19),Ac(),iD(20,`
    `),Ac(),iD(21,`
    `),mi(22,`div`,2),iD(23,`
      `),mi(24,`label`),iD(25,`Duration:`),Ac(),iD(26,` `),mi(27,`span`),iD(28),Ac(),iD(29,`
    `),Ac(),iD(30,`
    `),mi(31,`div`,2),iD(32,`
      `),mi(33,`label`),iD(34,`% Complete:`),Ac(),iD(35,` `),mi(36,`span`),iD(37),Ac(),iD(38,`
    `),Ac(),iD(39,`
  `),Ac(),iD(40,`

  `),mi(41,`div`,1),iD(42,`
    `),mi(43,`div`,2),iD(44,`
      `),mi(45,`label`),iD(46,`Start:`),Ac(),iD(47,` `),mi(48,`span`),iD(49),wD(50,`date`),Ac(),iD(51,`
    `),Ac(),iD(52,`
    `),mi(53,`div`,2),iD(54,`
      `),mi(55,`label`),iD(56,`Finish:`),Ac(),iD(57,` `),mi(58,`span`),iD(59),wD(60,`date`),Ac(),iD(61,`
    `),Ac(),iD(62,`
    `),mi(63,`div`,2)(64,`label`),iD(65,`Effort Driven:`),Ac(),iD(66,` `),vp(67,`i`),Ac(),iD(68,`
  `),Ac(),iD(69,`

  `),vp(70,`hr`),iD(71,`

  `),mi(72,`div`,4),iD(73,`
    `),mi(74,`h4`),iD(75,`
      Find out who is the Assignee
      `),mi(76,`small`),iD(77,`
        `),mi(78,`button`,5),Tp(`click`,function(){return i.alertAssignee(i.model?.assignee)}),iD(79,`Click Me`),Ac(),iD(80,`
      `),Ac(),iD(81,`
    `),Ac(),iD(82,`
  `),Ac(),iD(83,`
  `),mi(84,`div`,6),iD(85,`
    `),mi(86,`button`,7),Tp(`click`,function(){return i.deleteRow(i.model)}),iD(87,`Delete Row`),Ac(),iD(88,`
    `),mi(89,`button`,8),Tp(`click`,function(){return i.callParentMethod(i.model)}),iD(90,`
      Call Parent Method
    `),Ac(),iD(91,`
  `),Ac(),iD(92,`
`),Ac(),iD(93,`
`)),a&2&&(cy(3),Vp(i.model?.title),cy(8),Up(`ngModel`,i.model.assignee),eE(),cy(8),Vp(i.model?.reporter),cy(9),Vp(i.model?.duration),cy(9),Vp(i.model?.percentComplete),cy(12),Vp(_D(50,9,i.model?.start,`yyyy-MM-dd`)),cy(10),Vp(_D(60,12,i.model?.finish,`yyyy-MM-dd`)),cy(8),QI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[Fn,Te,Vn,$t,Pm],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return s})();function J(s,K){if(s&1&&(iD(0,`
      `),mi(1,`div`,21),iD(2),Ac(),iD(3,`
    `)),s&2){let l=SI();cy(),QI(dD(`alert alert-`,l.flashAlertType,` col-sm-6`)),cy(),Pc(`
        `,l.message,`
      `)}}var Y=250;var j=1e3;var ne=(()=>{class s{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=Y}angularGridReady(l){this.angularGrid=l}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:WA.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`percent2`,name:`% Complete`,field:`percentComplete2`,editor:{model:WA.slider},formatter:nk.progressBar,type:`number`,sortable:!0,minWidth:100,filterable:!0,filter:{model:ip.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:nk.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,darkMode:this._darkMode,datasetIdPropertyName:`rowId`,externalResources:[j$1],rowDetailView:{renderMode:`overlay`,process:l=>this.simulateServerAsyncCall(l),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadComponent:Y$1,viewComponent:L,parentRef:this,onBeforeRowDetailToggle:(l,a)=>(console.log(`before toggling row detail`,a.item),!0)},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let l=[];for(let a=0;a<j;a++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);l[a]={rowId:a,title:`Task `+a,duration:a%33===0?null:Math.floor(Math.random()*100)+1,percentComplete:v,percentComplete2:v,percentCompleteNumber:v,start:new Date(i,o,r),finish:new Date(i,o+1,r),effortDriven:a%5===0}}this.dataset=l}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l))}}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.angularGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}showFlashMessage(l,a=`info`){this.message=l,this.flashAlertType=a}simulateServerAsyncCall(l){let a=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let o=l;o.assignee=a[this.randomNumber(0,9)]||``,o.reporter=a[this.randomNumber(0,9)]||``,i(o)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(l,a){return Math.floor(Math.random()*(a-l+1)+l)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=UE({type:s,selectors:[[`ng-component`]],decls:79,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example19.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[1,`row`],[1,`col-sm-6`],[`data-test`,`editable-grid-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`d-inline-flex`,`gap-4px`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid19`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`data-test`,`flash-msg`]],template:function(a,i){a&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 19: Row Detail View
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return i.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
    `),mi(17,`button`,6),Tp(`click`,function(){return i.toggleDarkMode()}),iD(18,`
      `),vp(19,`span`,7),iD(20,`
      `),mi(21,`span`),iD(22,`Toggle Dark Mode`),Ac(),iD(23,`
    `),Ac(),iD(24,`
  `),Ac(),iD(25,`

  `),mi(26,`div`,8),iD(27,`
    Add functionality to show extra information with a Row Detail View, (`),mi(28,`a`,9),iD(29,`Wiki docs`),Ac(),iD(30,`)
    `),mi(31,`ul`),iD(32,`
      `),mi(33,`li`),iD(34,`Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")`),Ac(),iD(35,`
      `),mi(36,`li`),iD(37,`Pass a View/Model as a Template to the Row Detail`),Ac(),iD(38,`
      `),mi(39,`li`),iD(40,`
        You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every
        2nd row)
      `),Ac(),iD(41,`
    `),Ac(),iD(42,`
  `),Ac(),iD(43,`

  `),mi(44,`div`,10),iD(45,`
    `),mi(46,`div`,11),iD(47,`
      `),mi(48,`button`,12),Tp(`click`,function(){return i.changeEditableGrid()}),iD(49,`
        Make Grid Editable
      `),Ac(),iD(50,`
      `),mi(51,`button`,13),Tp(`click`,function(){return i.closeAllRowDetail()}),iD(52,`
        Close All Row Details
      `),Ac(),iD(53,`
      \xA0\xA0

      `),mi(54,`span`,14),iD(55,`
        `),mi(56,`label`,15),iD(57,`Detail View Rows Shown: `),Ac(),iD(58,`
        `),mi(59,`input`,16),$p(`ngModelChange`,function(r){return lD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Ac(),Jy(),iD(60,`
        `),mi(61,`button`,17),Tp(`click`,function(){return i.changeDetailViewRowCount()}),iD(62,`
          Set
        `),Ac(),iD(63,`
        `),mi(64,`label`,18),iD(65,`Server Delay: `),Ac(),iD(66,`
        `),mi(67,`input`,19),$p(`ngModelChange`,function(r){return lD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Ac(),Jy(),iD(68,`
      `),Ac(),iD(69,`
    `),Ac(),iD(70,`
    `),fI(71,J,4,4),Ac(),iD(72,`

  `),vp(73,`hr`),iD(74,`

  `),mi(75,`angular-slickgrid`,20),Tp(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),iD(76,`
  `),Ac(),iD(77,`
`),Ac(),iD(78,`
`)),a&2&&(cy(59),Up(`ngModel`,i.detailViewRowCount),eE(),cy(8),Up(`ngModel`,i.serverWaitDelay),eE(),cy(4),pI(i.message?71:-1),cy(4),mp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W,Fn,Te,zt,Vn,$t],encapsulation:2})}}return s})();export{ne as Example19Component};