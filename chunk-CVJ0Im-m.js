import{$ as MD,$n as pD,G as Kp,In as lD,Tr as xD,U as Jp,V as JI,a as Ap,bn as gD,bt as RI,jn as jc,kr as yI,mn as dv,on as bp,pr as tE,sr as rE,tn as _p,xn as gI,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,G as WO,l as D1,ut as jp,yt as sI}from"./chunk-Dk5kBPyv.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-BEH6XCIK.js";import{n as Y$1,t as T}from"./chunk-BJtsPH7h.js";var L=(()=>{class s{constructor(){this.model={}}alertAssignee(l){alert(typeof l==`string`?`Assignee on this task is: ${l.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(l){confirm(`Are you sure that you want to delete ${l.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(l.rowId),this.parentRef.showFlashMessage(`Deleted row with ${l.title}`,`danger`))}callParentMethod(l){this.parentRef.showFlashMessage(`We just called Parent Method from the Row Detail Child Component on ${l.title}`)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=WE({type:s,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(a,i){a&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h3`),lD(3),Rc(),lD(4,`
  `),vi(5,`div`,1),lD(6,`
    `),vi(7,`div`,2)(8,`label`),lD(9,`Assignee:`),Rc(),lD(10,` `),vi(11,`input`,3),tE(),Jp(`ngModelChange`,function(r){return pD(i.model.assignee,r)||(i.model.assignee=r),r}),Rc()(),lD(12,`
    `),vi(13,`div`,2),lD(14,`
      `),vi(15,`label`),lD(16,`Reporter:`),Rc(),lD(17,` `),vi(18,`span`),lD(19),Rc(),lD(20,`
    `),Rc(),lD(21,`
    `),vi(22,`div`,2),lD(23,`
      `),vi(24,`label`),lD(25,`Duration:`),Rc(),lD(26,` `),vi(27,`span`),lD(28),Rc(),lD(29,`
    `),Rc(),lD(30,`
    `),vi(31,`div`,2),lD(32,`
      `),vi(33,`label`),lD(34,`% Complete:`),Rc(),lD(35,` `),vi(36,`span`),lD(37),Rc(),lD(38,`
    `),Rc(),lD(39,`
  `),Rc(),lD(40,`

  `),vi(41,`div`,1),lD(42,`
    `),vi(43,`div`,2),lD(44,`
      `),vi(45,`label`),lD(46,`Start:`),Rc(),lD(47,` `),vi(48,`span`),lD(49),MD(50,`date`),Rc(),lD(51,`
    `),Rc(),lD(52,`
    `),vi(53,`div`,2),lD(54,`
      `),vi(55,`label`),lD(56,`Finish:`),Rc(),lD(57,` `),vi(58,`span`),lD(59),MD(60,`date`),Rc(),lD(61,`
    `),Rc(),lD(62,`
    `),vi(63,`div`,2)(64,`label`),lD(65,`Effort Driven:`),Rc(),lD(66,` `),_p(67,`i`),Rc(),lD(68,`
  `),Rc(),lD(69,`

  `),_p(70,`hr`),lD(71,`

  `),vi(72,`div`,4),lD(73,`
    `),vi(74,`h4`),lD(75,`
      Find out who is the Assignee
      `),vi(76,`small`),lD(77,`
        `),vi(78,`button`,5),Ap(`click`,function(){return i.alertAssignee(i.model==null?null:i.model.assignee)}),lD(79,`
          Click Me
        `),Rc(),lD(80,`
      `),Rc(),lD(81,`
    `),Rc(),lD(82,`
  `),Rc(),lD(83,`
  `),vi(84,`div`,6),lD(85,`
    `),vi(86,`button`,7),Ap(`click`,function(){return i.deleteRow(i.model)}),lD(87,`Delete Row`),Rc(),lD(88,`
    `),vi(89,`button`,8),Ap(`click`,function(){return i.callParentMethod(i.model)}),lD(90,`
      Call Parent Method
    `),Rc(),lD(91,`
  `),Rc(),lD(92,`
`),Rc(),lD(93,`
`)),a&2&&(dv(3),Qp(i.model?.title),dv(8),Kp(`ngModel`,i.model.assignee),rE(),dv(8),Qp(i.model?.reporter),dv(9),Qp(i.model?.duration),dv(9),Qp(i.model?.percentComplete),dv(12),Qp(xD(50,9,i.model==null?null:i.model.start,`yyyy-MM-dd`)),dv(10),Qp(xD(60,12,i.model==null?null:i.model.finish,`yyyy-MM-dd`)),dv(8),JI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[In,Ge,Dn,qt,jp],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return s})();function J(s,K){if(s&1&&(lD(0,`
      `),vi(1,`div`,21),lD(2),Rc(),lD(3,`
    `)),s&2){let l=RI();dv(),JI(gD(`alert alert-`,l.flashAlertType,` col-sm-6`)),dv(),jc(`
        `,l.message,`
      `)}}var Y=250;var j=1e3;var ne=(()=>{class s{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=Y}angularGridReady(l){this.angularGrid=l}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:WO.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`percent2`,name:`% Complete`,field:`percentComplete2`,editor:{model:WO.slider},formatter:sI.progressBar,type:`number`,sortable:!0,minWidth:100,filterable:!0,filter:{model:uu.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,formatter:sI.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:sI.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:uu.compoundDate}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:sI.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,darkMode:this._darkMode,datasetIdPropertyName:`rowId`,externalResources:[T],rowDetailView:{process:l=>this.simulateServerAsyncCall(l),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadComponent:Y$1,viewComponent:L,parentRef:this,onBeforeRowDetailToggle:(l,a)=>(console.log(`before toggling row detail`,a.item),!0)},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let l=[];for(let a=0;a<j;a++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),v=Math.round(Math.random()*100);l[a]={rowId:a,title:`Task `+a,duration:a%33===0?null:Math.floor(Math.random()*100)+1,percentComplete:v,percentComplete2:v,percentCompleteNumber:v,start:new Date(i,o,r),finish:new Date(i,o+1,r),effortDriven:a%5===0}}this.dataset=l}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let l=this.rowDetailInstance.getOptions();l?.panelRows&&(l.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(l))}}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.angularGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}showFlashMessage(l,a=`info`){this.message=l,this.flashAlertType=a}simulateServerAsyncCall(l){let a=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let o=l;o.assignee=a[this.randomNumber(0,9)]||``,o.reporter=a[this.randomNumber(0,9)]||``,i(o)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(l,a){return Math.floor(Math.random()*(a-l+1)+l)}static{this.ɵfac=function(a){return new(a||s)}}static{this.ɵcmp=WE({type:s,selectors:[[`ng-component`]],decls:79,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example19.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[1,`row`],[1,`col-sm-6`],[`data-test`,`editable-grid-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`d-inline-flex`,`gap-4px`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid19`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`data-test`,`flash-msg`]],template:function(a,i){a&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 19: Row Detail View
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return i.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
    `),vi(17,`button`,6),Ap(`click`,function(){return i.toggleDarkMode()}),lD(18,`
      `),_p(19,`span`,7),lD(20,`
      `),vi(21,`span`),lD(22,`Toggle Dark Mode`),Rc(),lD(23,`
    `),Rc(),lD(24,`
  `),Rc(),lD(25,`

  `),vi(26,`div`,8),lD(27,`
    Add functionality to show extra information with a Row Detail View, (`),vi(28,`a`,9),lD(29,`Wiki docs`),Rc(),lD(30,`)
    `),vi(31,`ul`),lD(32,`
      `),vi(33,`li`),lD(34,`Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")`),Rc(),lD(35,`
      `),vi(36,`li`),lD(37,`Pass a View/Model as a Template to the Row Detail`),Rc(),lD(38,`
      `),vi(39,`li`),lD(40,`
        You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every
        2nd row)
      `),Rc(),lD(41,`
    `),Rc(),lD(42,`
  `),Rc(),lD(43,`

  `),vi(44,`div`,10),lD(45,`
    `),vi(46,`div`,11),lD(47,`
      `),vi(48,`button`,12),Ap(`click`,function(){return i.changeEditableGrid()}),lD(49,`
        Make Grid Editable
      `),Rc(),lD(50,`
      `),vi(51,`button`,13),Ap(`click`,function(){return i.closeAllRowDetail()}),lD(52,`
        Close All Row Details
      `),Rc(),lD(53,`
      \xA0\xA0

      `),vi(54,`span`,14),lD(55,`
        `),vi(56,`label`,15),lD(57,`Detail View Rows Shown: `),Rc(),lD(58,`
        `),vi(59,`input`,16),tE(),Jp(`ngModelChange`,function(r){return pD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Rc(),lD(60,`
        `),vi(61,`button`,17),Ap(`click`,function(){return i.changeDetailViewRowCount()}),lD(62,`
          Set
        `),Rc(),lD(63,`
        `),vi(64,`label`,18),lD(65,`Server Delay: `),Rc(),lD(66,`
        `),vi(67,`input`,19),tE(),Jp(`ngModelChange`,function(r){return pD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Rc(),lD(68,`
      `),Rc(),lD(69,`
    `),Rc(),lD(70,`
    `),gI(71,J,4,4),Rc(),lD(72,`

  `),_p(73,`hr`),lD(74,`

  `),vi(75,`angular-slickgrid`,20),Ap(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),lD(76,`
  `),Rc(),lD(77,`
`),Rc(),lD(78,`
`)),a&2&&(dv(59),Kp(`ngModel`,i.detailViewRowCount),rE(),dv(8),Kp(`ngModel`,i.serverWaitDelay),rE(),dv(4),yI(i.message?71:-1),dv(4),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[D1,In,Ge,zt,Dn,qt],encapsulation:2})}}return s})();export{ne as Example19Component};