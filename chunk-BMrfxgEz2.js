import{En as jc,F as Ip,Kn as pI,Lt as Wp,O as Gp,Ot as Up,Pn as ly,Wt as ZI,b as Ep,hr as xI,ir as tE,or as uD,p as CD,pn as fD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,vn as hI,xr as yi,zt as Xy}from"./chunk-Rd4ToC_L.js";import{F as WA,W as _W,ct as ip,ht as nk,x as Pm}from"./chunk-DLuyVhQJ.js";import{_ as Vn,b as zt,d as Fn,g as Te,s as $t}from"./main-CCTR2RMO.js";import{n as j$1,t as Y$1}from"./chunk-DP9fMQa8.js";var L=(()=>{class s{constructor(){this.model={}}alertAssignee(l){alert(typeof l==`string`?`Assignee on this task is: ${l.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.rowId),this.parentRef.showFlashMessage(`Deleted row with ${l.title}`,`danger`))}callParentMethod(l){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${l.title}`)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=$E({type:s,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(a,i){a&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h3`),sD(3),Rc(),sD(4,`
  `),yi(5,`div`,1),sD(6,`
    `),yi(7,`div`,2)(8,`label`),sD(9,`Assignee:`),Rc(),sD(10,` `),yi(11,`input`,3),Wp(`ngModelChange`,function(r){return uD(i.model.assignee,r)||(i.model.assignee=r),r}),Rc(),Xy(),Rc(),sD(12,`
    `),yi(13,`div`,2),sD(14,`
      `),yi(15,`label`),sD(16,`Reporter:`),Rc(),sD(17,` `),yi(18,`span`),sD(19),Rc(),sD(20,`
    `),Rc(),sD(21,`
    `),yi(22,`div`,2),sD(23,`
      `),yi(24,`label`),sD(25,`Duration:`),Rc(),sD(26,` `),yi(27,`span`),sD(28),Rc(),sD(29,`
    `),Rc(),sD(30,`
    `),yi(31,`div`,2),sD(32,`
      `),yi(33,`label`),sD(34,`% Complete:`),Rc(),sD(35,` `),yi(36,`span`),sD(37),Rc(),sD(38,`
    `),Rc(),sD(39,`
  `),Rc(),sD(40,`

  `),yi(41,`div`,1),sD(42,`
    `),yi(43,`div`,2),sD(44,`
      `),yi(45,`label`),sD(46,`Start:`),Rc(),sD(47,` `),yi(48,`span`),sD(49),CD(50,`date`),Rc(),sD(51,`
    `),Rc(),sD(52,`
    `),yi(53,`div`,2),sD(54,`
      `),yi(55,`label`),sD(56,`Finish:`),Rc(),sD(57,` `),yi(58,`span`),sD(59),CD(60,`date`),Rc(),sD(61,`
    `),Rc(),sD(62,`
    `),yi(63,`div`,2)(64,`label`),sD(65,`Effort Driven:`),Rc(),sD(66,` `),Ip(67,`i`),Rc(),sD(68,`
  `),Rc(),sD(69,`

  `),Ip(70,`hr`),sD(71,`

  `),yi(72,`div`,4),sD(73,`
    `),yi(74,`h4`),sD(75,`
      Find out who is the Assignee
      `),yi(76,`small`),sD(77,`
        `),yi(78,`button`,5),bp(`click`,function(){return i.alertAssignee(i.model?.assignee)}),sD(79,`Click Me`),Rc(),sD(80,`
      `),Rc(),sD(81,`
    `),Rc(),sD(82,`
  `),Rc(),sD(83,`
  `),yi(84,`div`,6),sD(85,`
    `),yi(86,`button`,7),bp(`click`,function(){return i.deleteRow(i.model)}),sD(87,`Delete Row`),Rc(),sD(88,`
    `),yi(89,`button`,8),bp(`click`,function(){return i.callParentMethod(i.model)}),sD(90,`
      Call Parent Method
    `),Rc(),sD(91,`
  `),Rc(),sD(92,`
`),Rc(),sD(93,`
`)),a&2&&(ly(3),Up(i.model?.title),ly(8),Gp(`ngModel`,i.model.assignee),tE(),ly(8),Up(i.model?.reporter),ly(9),Up(i.model?.duration),ly(9),Up(i.model?.percentComplete),ly(12),Up(MD(50,9,i.model?.start,`yyyy-MM-dd`)),ly(10),Up(MD(60,12,i.model?.finish,`yyyy-MM-dd`)),ly(8),ZI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[Fn,Te,Vn,$t,Pm],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return s})();function J(s,K){if(s&1&&(sD(0,`
      `),yi(1,`div`,21),sD(2),Rc(),sD(3,`
    `)),s&2){let l=xI();ly(),ZI(fD(`alert alert-`,l.flashAlertType,` col-sm-6`)),ly(),jc(`
        `,l.message,`
      `)}}var Y=250;var j=1e3;var ne=(()=>{class s{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=Y}angularGridReady(l){this.angularGrid=l}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:WA.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`percent2`,name:`% Complete`,field:`percentComplete2`,editor:{model:WA.slider},formatter:nk.progressBar,type:`number`,sortable:!0,minWidth:100,filterable:!0,filter:{model:ip.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:nk.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,darkMode:this._darkMode,datasetIdPropertyName:`rowId`,externalResources:[j$1],rowDetailView:{process:l=>this.simulateServerAsyncCall(l),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadComponent:Y$1,viewComponent:L,parentRef:this,onBeforeRowDetailToggle:(l,a)=>(console.log(`before toggling row detail`,a.item),!0)},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let l=[];for(let a=0;a<j;a++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);l[a]={rowId:a,title:`Task `+a,duration:a%33===0?null:Math.floor(Math.random()*100)+1,percentComplete:v,percentComplete2:v,percentCompleteNumber:v,start:new Date(i,o,r),finish:new Date(i,o+1,r),effortDriven:a%5===0}}this.dataset=l}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l))}}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.angularGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}showFlashMessage(l,a=`info`){this.message=l,this.flashAlertType=a}simulateServerAsyncCall(l){let a=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let o=l;o.assignee=a[this.randomNumber(0,9)]||``,o.reporter=a[this.randomNumber(0,9)]||``,i(o)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(l,a){return Math.floor(Math.random()*(a-l+1)+l)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=$E({type:s,selectors:[[`ng-component`]],decls:79,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example19.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[1,`row`],[1,`col-sm-6`],[`data-test`,`editable-grid-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`d-inline-flex`,`gap-4px`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid19`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`data-test`,`flash-msg`]],template:function(a,i){a&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 19: Row Detail View
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return i.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
    `),yi(17,`button`,6),bp(`click`,function(){return i.toggleDarkMode()}),sD(18,`
      `),Ip(19,`span`,7),sD(20,`
      `),yi(21,`span`),sD(22,`Toggle Dark Mode`),Rc(),sD(23,`
    `),Rc(),sD(24,`
  `),Rc(),sD(25,`

  `),yi(26,`div`,8),sD(27,`
    Add functionality to show extra information with a Row Detail View, (`),yi(28,`a`,9),sD(29,`Wiki docs`),Rc(),sD(30,`)
    `),yi(31,`ul`),sD(32,`
      `),yi(33,`li`),sD(34,`Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")`),Rc(),sD(35,`
      `),yi(36,`li`),sD(37,`Pass a View/Model as a Template to the Row Detail`),Rc(),sD(38,`
      `),yi(39,`li`),sD(40,`
        You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every
        2nd row)
      `),Rc(),sD(41,`
    `),Rc(),sD(42,`
  `),Rc(),sD(43,`

  `),yi(44,`div`,10),sD(45,`
    `),yi(46,`div`,11),sD(47,`
      `),yi(48,`button`,12),bp(`click`,function(){return i.changeEditableGrid()}),sD(49,`
        Make Grid Editable
      `),Rc(),sD(50,`
      `),yi(51,`button`,13),bp(`click`,function(){return i.closeAllRowDetail()}),sD(52,`
        Close All Row Details
      `),Rc(),sD(53,`
      \xA0\xA0

      `),yi(54,`span`,14),sD(55,`
        `),yi(56,`label`,15),sD(57,`Detail View Rows Shown: `),Rc(),sD(58,`
        `),yi(59,`input`,16),Wp(`ngModelChange`,function(r){return uD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Rc(),Xy(),sD(60,`
        `),yi(61,`button`,17),bp(`click`,function(){return i.changeDetailViewRowCount()}),sD(62,`
          Set
        `),Rc(),sD(63,`
        `),yi(64,`label`,18),sD(65,`Server Delay: `),Rc(),sD(66,`
        `),yi(67,`input`,19),Wp(`ngModelChange`,function(r){return uD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Rc(),Xy(),sD(68,`
      `),Rc(),sD(69,`
    `),Rc(),sD(70,`
    `),pI(71,J,4,4),Rc(),sD(72,`

  `),Ip(73,`hr`),sD(74,`

  `),yi(75,`angular-slickgrid`,20),bp(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),sD(76,`
  `),Rc(),sD(77,`
`),Rc(),sD(78,`
`)),a&2&&(ly(59),Gp(`ngModel`,i.detailViewRowCount),tE(),ly(8),Gp(`ngModel`,i.serverWaitDelay),tE(),ly(4),hI(i.message?71:-1),ly(4),Ep(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W,Fn,Te,zt,Vn,$t],encapsulation:2})}}return s})();export{ne as Example19Component};