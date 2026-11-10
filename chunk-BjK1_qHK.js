import{n as Y$1,t as T}from"./chunk-onxKXfDw.js";import{g as Yt,h as Wt,m as Sn,s as An,y as ke}from"./main-KCATS47T.js";import{Ct as ku,V as R$,lt as dm,rt as ZR,x as HO}from"./chunk-Lo0QQjTd.js";import{Gn as mI,In as kI,K as Jp,P as Hc,Tn as hD,Wn as mD,X as Lc,Y as Kp,Yn as oE,dr as uD,en as _p,in as bp,k as GE,o as Ap,ot as ND,qn as nE,qt as XI,r as AD,vr as vI,wt as Qp,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var L=(()=>{class s{constructor(){this.model={}}alertAssignee(l){alert(typeof l==`string`?`Assignee on this task is: ${l.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.rowId),this.parentRef.showFlashMessage(`Deleted row with ${l.title}`,`danger`))}callParentMethod(l){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${l.title}`)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=GE({type:s,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(a,i){a&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h3`),uD(3),Lc(),uD(4,`
  `),vi(5,`div`,1),uD(6,`
    `),vi(7,`div`,2)(8,`label`),uD(9,`Assignee:`),Lc(),uD(10,` `),vi(11,`input`,3),nE(),Jp(`ngModelChange`,function(r){return hD(i.model.assignee,r)||(i.model.assignee=r),r}),Lc()(),uD(12,`
    `),vi(13,`div`,2),uD(14,`
      `),vi(15,`label`),uD(16,`Reporter:`),Lc(),uD(17,` `),vi(18,`span`),uD(19),Lc(),uD(20,`
    `),Lc(),uD(21,`
    `),vi(22,`div`,2),uD(23,`
      `),vi(24,`label`),uD(25,`Duration:`),Lc(),uD(26,` `),vi(27,`span`),uD(28),Lc(),uD(29,`
    `),Lc(),uD(30,`
    `),vi(31,`div`,2),uD(32,`
      `),vi(33,`label`),uD(34,`% Complete:`),Lc(),uD(35,` `),vi(36,`span`),uD(37),Lc(),uD(38,`
    `),Lc(),uD(39,`
  `),Lc(),uD(40,`

  `),vi(41,`div`,1),uD(42,`
    `),vi(43,`div`,2),uD(44,`
      `),vi(45,`label`),uD(46,`Start:`),Lc(),uD(47,` `),vi(48,`span`),uD(49),ND(50,`date`),Lc(),uD(51,`
    `),Lc(),uD(52,`
    `),vi(53,`div`,2),uD(54,`
      `),vi(55,`label`),uD(56,`Finish:`),Lc(),uD(57,` `),vi(58,`span`),uD(59),ND(60,`date`),Lc(),uD(61,`
    `),Lc(),uD(62,`
    `),vi(63,`div`,2)(64,`label`),uD(65,`Effort Driven:`),Lc(),uD(66,` `),_p(67,`i`),Lc(),uD(68,`
  `),Lc(),uD(69,`

  `),_p(70,`hr`),uD(71,`

  `),vi(72,`div`,4),uD(73,`
    `),vi(74,`h4`),uD(75,`
      Find out who is the Assignee
      `),vi(76,`small`),uD(77,`
        `),vi(78,`button`,5),Ap(`click`,function(){return i.alertAssignee(i.model==null?null:i.model.assignee)}),uD(79,`
          Click Me
        `),Lc(),uD(80,`
      `),Lc(),uD(81,`
    `),Lc(),uD(82,`
  `),Lc(),uD(83,`
  `),vi(84,`div`,6),uD(85,`
    `),vi(86,`button`,7),Ap(`click`,function(){return i.deleteRow(i.model)}),uD(87,`Delete Row`),Lc(),uD(88,`
    `),vi(89,`button`,8),Ap(`click`,function(){return i.callParentMethod(i.model)}),uD(90,`
      Call Parent Method
    `),Lc(),uD(91,`
  `),Lc(),uD(92,`
`),Lc(),uD(93,`
`)),a&2&&(fv(3),Qp(i.model?.title),fv(8),Kp(`ngModel`,i.model.assignee),oE(),fv(8),Qp(i.model?.reporter),fv(9),Qp(i.model?.duration),fv(9),Qp(i.model?.percentComplete),fv(12),Qp(AD(50,9,i.model==null?null:i.model.start,`yyyy-MM-dd`)),fv(10),Qp(AD(60,12,i.model==null?null:i.model.finish,`yyyy-MM-dd`)),fv(8),XI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[Sn,ke,An,Wt,dm],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return s})();function J(s,K){if(s&1&&(uD(0,`
      `),vi(1,`div`,21),uD(2),Lc(),uD(3,`
    `)),s&2){let l=kI();fv(),XI(mD(`alert alert-`,l.flashAlertType,` col-sm-6`)),fv(),Hc(`
        `,l.message,`
      `)}}var Y=250;var j=1e3;var ne=(()=>{class s{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=Y}angularGridReady(l){this.angularGrid=l}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:HO.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`percent2`,name:`% Complete`,field:`percentComplete2`,editor:{model:HO.slider},formatter:ZR.progressBar,type:`number`,sortable:!0,minWidth:100,filterable:!0,filter:{model:ku.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,formatter:ZR.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ku.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:ZR.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ku.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:ZR.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ku.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,darkMode:this._darkMode,datasetIdPropertyName:`rowId`,externalResources:[T],rowDetailView:{process:l=>this.simulateServerAsyncCall(l),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadComponent:Y$1,viewComponent:L,parentRef:this,onBeforeRowDetailToggle:(l,a)=>(console.log(`before toggling row detail`,a.item),!0)},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let l=[];for(let a=0;a<j;a++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);l[a]={rowId:a,title:`Task `+a,duration:a%33===0?null:Math.floor(Math.random()*100)+1,percentComplete:v,percentComplete2:v,percentCompleteNumber:v,start:new Date(i,o,r),finish:new Date(i,o+1,r),effortDriven:a%5===0}}this.dataset=l}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l))}}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.angularGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}showFlashMessage(l,a=`info`){this.message=l,this.flashAlertType=a}simulateServerAsyncCall(l){let a=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let o=l;o.assignee=a[this.randomNumber(0,9)]||``,o.reporter=a[this.randomNumber(0,9)]||``,i(o)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(l,a){return Math.floor(Math.random()*(a-l+1)+l)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=GE({type:s,selectors:[[`ng-component`]],decls:79,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example19.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[1,`row`],[1,`col-sm-6`],[`data-test`,`editable-grid-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`d-inline-flex`,`gap-4px`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid19`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`data-test`,`flash-msg`]],template:function(a,i){a&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 19: Row Detail View
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return i.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
    `),vi(17,`button`,6),Ap(`click`,function(){return i.toggleDarkMode()}),uD(18,`
      `),_p(19,`span`,7),uD(20,`
      `),vi(21,`span`),uD(22,`Toggle Dark Mode`),Lc(),uD(23,`
    `),Lc(),uD(24,`
  `),Lc(),uD(25,`

  `),vi(26,`div`,8),uD(27,`
    Add functionality to show extra information with a Row Detail View, (`),vi(28,`a`,9),uD(29,`Wiki docs`),Lc(),uD(30,`)
    `),vi(31,`ul`),uD(32,`
      `),vi(33,`li`),uD(34,`Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")`),Lc(),uD(35,`
      `),vi(36,`li`),uD(37,`Pass a View/Model as a Template to the Row Detail`),Lc(),uD(38,`
      `),vi(39,`li`),uD(40,`
        You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every
        2nd row)
      `),Lc(),uD(41,`
    `),Lc(),uD(42,`
  `),Lc(),uD(43,`

  `),vi(44,`div`,10),uD(45,`
    `),vi(46,`div`,11),uD(47,`
      `),vi(48,`button`,12),Ap(`click`,function(){return i.changeEditableGrid()}),uD(49,`
        Make Grid Editable
      `),Lc(),uD(50,`
      `),vi(51,`button`,13),Ap(`click`,function(){return i.closeAllRowDetail()}),uD(52,`
        Close All Row Details
      `),Lc(),uD(53,`
      \xA0\xA0

      `),vi(54,`span`,14),uD(55,`
        `),vi(56,`label`,15),uD(57,`Detail View Rows Shown: `),Lc(),uD(58,`
        `),vi(59,`input`,16),nE(),Jp(`ngModelChange`,function(r){return hD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Lc(),uD(60,`
        `),vi(61,`button`,17),Ap(`click`,function(){return i.changeDetailViewRowCount()}),uD(62,`
          Set
        `),Lc(),uD(63,`
        `),vi(64,`label`,18),uD(65,`Server Delay: `),Lc(),uD(66,`
        `),vi(67,`input`,19),nE(),Jp(`ngModelChange`,function(r){return hD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Lc(),uD(68,`
      `),Lc(),uD(69,`
    `),Lc(),uD(70,`
    `),mI(71,J,4,4),Lc(),uD(72,`

  `),_p(73,`hr`),uD(74,`

  `),vi(75,`angular-slickgrid`,20),Ap(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),uD(76,`
  `),Lc(),uD(77,`
`),Lc(),uD(78,`
`)),a&2&&(fv(59),Kp(`ngModel`,i.detailViewRowCount),oE(),fv(8),Kp(`ngModel`,i.serverWaitDelay),oE(),fv(4),vI(i.message?71:-1),fv(4),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[R$,Sn,ke,Yt,An,Wt],encapsulation:2})}}return s})();export{ne as Example19Component};