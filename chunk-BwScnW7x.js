import{$ as Mp,Bn as lD,C as Ei,E as Fc,En as iD,Et as SI,K as Ky,_t as QI,b as Dp,c as BE,cn as ay,ct as Oc,en as _D,er as pI,hn as dI,jt as Tp,kr as zp,mn as dD,qt as Xy,sr as qp,xr as wD,yt as Qp}from"./chunk-CtIlL7jI.js";import{Ot as xz,U as ZI,pt as lp,v as Hm,xt as uP}from"./chunk-o9GGBwbJ.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-G4ADOSVB.js";import{n as Y$1,t as S}from"./chunk-7jWZyNXF.js";var L=(()=>{class s{constructor(){this.model={}}alertAssignee(l){alert(typeof l==`string`?`Assignee on this task is: ${l.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.rowId),this.parentRef.showFlashMessage(`Deleted row with ${l.title}`,`danger`))}callParentMethod(l){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${l.title}`)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=BE({type:s,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(a,i){a&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h3`),iD(3),Oc(),iD(4,`
  `),Ei(5,`div`,1),iD(6,`
    `),Ei(7,`div`,2)(8,`label`),iD(9,`Assignee:`),Oc(),iD(10,` `),Ei(11,`input`,3),Ky(),Qp(`ngModelChange`,function(r){return lD(i.model.assignee,r)||(i.model.assignee=r),r}),Oc()(),iD(12,`
    `),Ei(13,`div`,2),iD(14,`
      `),Ei(15,`label`),iD(16,`Reporter:`),Oc(),iD(17,` `),Ei(18,`span`),iD(19),Oc(),iD(20,`
    `),Oc(),iD(21,`
    `),Ei(22,`div`,2),iD(23,`
      `),Ei(24,`label`),iD(25,`Duration:`),Oc(),iD(26,` `),Ei(27,`span`),iD(28),Oc(),iD(29,`
    `),Oc(),iD(30,`
    `),Ei(31,`div`,2),iD(32,`
      `),Ei(33,`label`),iD(34,`% Complete:`),Oc(),iD(35,` `),Ei(36,`span`),iD(37),Oc(),iD(38,`
    `),Oc(),iD(39,`
  `),Oc(),iD(40,`

  `),Ei(41,`div`,1),iD(42,`
    `),Ei(43,`div`,2),iD(44,`
      `),Ei(45,`label`),iD(46,`Start:`),Oc(),iD(47,` `),Ei(48,`span`),iD(49),wD(50,`date`),Oc(),iD(51,`
    `),Oc(),iD(52,`
    `),Ei(53,`div`,2),iD(54,`
      `),Ei(55,`label`),iD(56,`Finish:`),Oc(),iD(57,` `),Ei(58,`span`),iD(59),wD(60,`date`),Oc(),iD(61,`
    `),Oc(),iD(62,`
    `),Ei(63,`div`,2)(64,`label`),iD(65,`Effort Driven:`),Oc(),iD(66,` `),Tp(67,`i`),Oc(),iD(68,`
  `),Oc(),iD(69,`

  `),Tp(70,`hr`),iD(71,`

  `),Ei(72,`div`,4),iD(73,`
    `),Ei(74,`h4`),iD(75,`
      Find out who is the Assignee
      `),Ei(76,`small`),iD(77,`
        `),Ei(78,`button`,5),Mp(`click`,function(){return i.alertAssignee(i.model?.assignee)}),iD(79,`Click Me`),Oc(),iD(80,`
      `),Oc(),iD(81,`
    `),Oc(),iD(82,`
  `),Oc(),iD(83,`
  `),Ei(84,`div`,6),iD(85,`
    `),Ei(86,`button`,7),Mp(`click`,function(){return i.deleteRow(i.model)}),iD(87,`Delete Row`),Oc(),iD(88,`
    `),Ei(89,`button`,8),Mp(`click`,function(){return i.callParentMethod(i.model)}),iD(90,`
      Call Parent Method
    `),Oc(),iD(91,`
  `),Oc(),iD(92,`
`),Oc(),iD(93,`
`)),a&2&&(ay(3),qp(i.model?.title),ay(8),zp(`ngModel`,i.model.assignee),Xy(),ay(8),qp(i.model?.reporter),ay(9),qp(i.model?.duration),ay(9),qp(i.model?.percentComplete),ay(12),qp(_D(50,9,i.model?.start,`yyyy-MM-dd`)),ay(10),qp(_D(60,12,i.model?.finish,`yyyy-MM-dd`)),ay(8),QI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[In,Ge,Dn,qt,Hm],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return s})();function J(s,K){if(s&1&&(iD(0,`
      `),Ei(1,`div`,21),iD(2),Oc(),iD(3,`
    `)),s&2){let l=SI();ay(),QI(dD(`alert alert-`,l.flashAlertType,` col-sm-6`)),ay(),Fc(`
        `,l.message,`
      `)}}var Y=250;var j=1e3;var ne=(()=>{class s{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=Y}angularGridReady(l){this.angularGrid=l}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:ZI.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`percent2`,name:`% Complete`,field:`percentComplete2`,editor:{model:ZI.slider},formatter:uP.progressBar,type:`number`,sortable:!0,minWidth:100,filterable:!0,filter:{model:lp.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:lp.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:uP.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:lp.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:uP.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:lp.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,darkMode:this._darkMode,datasetIdPropertyName:`rowId`,externalResources:[S],rowDetailView:{process:l=>this.simulateServerAsyncCall(l),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadComponent:Y$1,viewComponent:L,parentRef:this,onBeforeRowDetailToggle:(l,a)=>(console.log(`before toggling row detail`,a.item),!0)},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let l=[];for(let a=0;a<j;a++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);l[a]={rowId:a,title:`Task `+a,duration:a%33===0?null:Math.floor(Math.random()*100)+1,percentComplete:v,percentComplete2:v,percentCompleteNumber:v,start:new Date(i,o,r),finish:new Date(i,o+1,r),effortDriven:a%5===0}}this.dataset=l}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l))}}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.angularGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}showFlashMessage(l,a=`info`){this.message=l,this.flashAlertType=a}simulateServerAsyncCall(l){let a=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let o=l;o.assignee=a[this.randomNumber(0,9)]||``,o.reporter=a[this.randomNumber(0,9)]||``,i(o)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(l,a){return Math.floor(Math.random()*(a-l+1)+l)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=BE({type:s,selectors:[[`ng-component`]],decls:79,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example19.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[1,`row`],[1,`col-sm-6`],[`data-test`,`editable-grid-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`d-inline-flex`,`gap-4px`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid19`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`data-test`,`flash-msg`]],template:function(a,i){a&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 19: Row Detail View
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return i.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
    `),Ei(17,`button`,6),Mp(`click`,function(){return i.toggleDarkMode()}),iD(18,`
      `),Tp(19,`span`,7),iD(20,`
      `),Ei(21,`span`),iD(22,`Toggle Dark Mode`),Oc(),iD(23,`
    `),Oc(),iD(24,`
  `),Oc(),iD(25,`

  `),Ei(26,`div`,8),iD(27,`
    Add functionality to show extra information with a Row Detail View, (`),Ei(28,`a`,9),iD(29,`Wiki docs`),Oc(),iD(30,`)
    `),Ei(31,`ul`),iD(32,`
      `),Ei(33,`li`),iD(34,`Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")`),Oc(),iD(35,`
      `),Ei(36,`li`),iD(37,`Pass a View/Model as a Template to the Row Detail`),Oc(),iD(38,`
      `),Ei(39,`li`),iD(40,`
        You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every
        2nd row)
      `),Oc(),iD(41,`
    `),Oc(),iD(42,`
  `),Oc(),iD(43,`

  `),Ei(44,`div`,10),iD(45,`
    `),Ei(46,`div`,11),iD(47,`
      `),Ei(48,`button`,12),Mp(`click`,function(){return i.changeEditableGrid()}),iD(49,`
        Make Grid Editable
      `),Oc(),iD(50,`
      `),Ei(51,`button`,13),Mp(`click`,function(){return i.closeAllRowDetail()}),iD(52,`
        Close All Row Details
      `),Oc(),iD(53,`
      \xA0\xA0

      `),Ei(54,`span`,14),iD(55,`
        `),Ei(56,`label`,15),iD(57,`Detail View Rows Shown: `),Oc(),iD(58,`
        `),Ei(59,`input`,16),Ky(),Qp(`ngModelChange`,function(r){return lD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Oc(),iD(60,`
        `),Ei(61,`button`,17),Mp(`click`,function(){return i.changeDetailViewRowCount()}),iD(62,`
          Set
        `),Oc(),iD(63,`
        `),Ei(64,`label`,18),iD(65,`Server Delay: `),Oc(),iD(66,`
        `),Ei(67,`input`,19),Ky(),Qp(`ngModelChange`,function(r){return lD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Oc(),iD(68,`
      `),Oc(),iD(69,`
    `),Oc(),iD(70,`
    `),dI(71,J,4,4),Oc(),iD(72,`

  `),Tp(73,`hr`),iD(74,`

  `),Ei(75,`angular-slickgrid`,20),Mp(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),iD(76,`
  `),Oc(),iD(77,`
`),Oc(),iD(78,`
`)),a&2&&(ay(59),zp(`ngModel`,i.detailViewRowCount),Xy(),ay(8),zp(`ngModel`,i.serverWaitDelay),Xy(),ay(4),pI(i.message?71:-1),ay(4),Dp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[xz,In,Ge,zt,Dn,qt],encapsulation:2})}}return s})();export{ne as Example19Component};