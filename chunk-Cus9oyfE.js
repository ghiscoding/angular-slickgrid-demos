import{$ as MD,$n as pD,G as Kp,In as lD,Tr as xD,U as Jp,V as JI,a as Ap,mn as dv,on as bp,pr as tE,sr as rE,tn as _p,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,G as WO,bt as se,it as fT,jt as zA,l as D1,p as FA,ut as jp,yt as sI}from"./chunk-Dk5kBPyv.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-BEH6XCIK.js";import{t as a}from"./chunk-CiyLb43o.js";import{n as Y,t as T}from"./chunk-BJtsPH7h.js";var j=(()=>{class u{alertAssignee(o){alert(typeof o==`string`?`Assignee on this task is: ${o.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a(`Deleted row with ${o.title}`,`danger`))}showNotification(o){a(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,`info`)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=WE({type:u,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,`assignee`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(l,i){l&1&&(vi(0,`div`,0),lD(1,`
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
    `),vi(89,`button`,8),Ap(`click`,function(){return i.showNotification(i.model)}),lD(90,`
      Call Parent Method
    `),Rc(),lD(91,`
  `),Rc(),lD(92,`
`),Rc(),lD(93,`
`)),l&2&&(dv(3),Qp(i.model?.title),dv(8),Kp(`ngModel`,i.model.assignee),rE(),dv(8),Qp(i.model?.reporter),dv(9),Qp(i.model?.duration),dv(9),Qp(i.model?.percentComplete),dv(12),Qp(xD(50,9,i.model==null?null:i.model.start,`yyyy-MM-dd`)),dv(10),Qp(xD(60,12,i.model==null?null:i.model.finish,`yyyy-MM-dd`)),dv(8),JI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[In,Ge,Dn,qt,jp],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return u})();var $=250;var J=1e3;var ne=(()=>{class u{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=$}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:WO.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:`number`,formatter:sI.percentCompleteBar,groupTotalsFormatter:FA.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,formatter:sI.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:sI.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:uu.compoundDate}},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:uu.compoundInputNumber},type:`number`,formatter:sI.dollar,groupTotalsFormatter:FA.sumTotalsDollarBold},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:sI.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,darkMode:this._darkMode,externalResources:[T],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:!0,singleRowExpand:!1,useRowClick:!1,panelRows:this.detailViewRowCount,preloadComponent:Y,viewComponent:j},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),T=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:`Task `+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?T:-T,effortDriven:l%5===0}}this.dataset=o}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o))}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new fT.Avg(`percentComplete`),new fT.Sum(`cost`)],comparer:(o,l)=>zA.numeric(o.value,l.value,se.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new fT.Sum(`duration`),new fT.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:l=>`Effort-Driven: ${l.value?`True`:`False`} <span style="color:green">(${l.count} items)</span>`,aggregators:[new fT.Avg(`percentComplete`),new fT.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(o){let l=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||``,a.reporter=l[this.randomNumber(0,9)]||``,i(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=WE({type:u,selectors:[[`ng-component`]],decls:87,vars:5,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`type`,`button`,`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[`className`,`row`],[`className`,`col-sm-12 d-flex gap-4px`],[`type`,`button`,`data-test`,`collapse-all-rowdetail-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`type`,`button`,`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`type`,`button`,`data-test`,`collapse-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`type`,`button`,`data-test`,`expand-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid47`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,i){l&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 47: Row Detail View + Grouping
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
    Provide ability for Row Detail to work with Grouping, see (`),vi(28,`a`,9),lD(29,`Wiki docs`),Rc(),lD(30,`)
  `),Rc(),lD(31,`

  `),vi(32,`div`,10),lD(33,`
    `),vi(34,`div`,11),lD(35,`
      `),vi(36,`button`,12),Ap(`click`,function(){return i.closeAllRowDetail()}),lD(37,`
        Close All Row Details
      `),Rc(),lD(38,`
      `),vi(39,`button`,13),Ap(`click`,function(){return i.clearGrouping()}),lD(40,`
        `),_p(41,`i`,14),lD(42,` Clear grouping
      `),Rc(),lD(43,`
      `),vi(44,`button`,15),Ap(`click`,function(){return i.collapseAllGroups()}),lD(45,`
        `),_p(46,`i`,16),lD(47,` Collapse all groups
      `),Rc(),lD(48,`
      `),vi(49,`button`,17),Ap(`click`,function(){return i.expandAllGroups()}),lD(50,`
        `),_p(51,`i`,18),lD(52,` Expand all groups
      `),Rc(),lD(53,`

      `),vi(54,`label`,19),lD(55,`Detail View Rows Shown: `),Rc(),lD(56,`
      `),vi(57,`input`,20),tE(),Jp(`ngModelChange`,function(r){return pD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Rc(),lD(58,`
      `),vi(59,`button`,21),Ap(`click`,function(){return i.changeDetailViewRowCount()}),lD(60,`
        Set
      `),Rc(),lD(61,`
      `),vi(62,`label`,22),lD(63,`Server Delay: `),Rc(),lD(64,`
      `),vi(65,`input`,23),tE(),Jp(`ngModelChange`,function(r){return pD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Rc(),lD(66,`
    `),Rc(),lD(67,`

    `),vi(68,`div`,10),lD(69,`
      `),vi(70,`div`,11),lD(71,`
        `),vi(72,`button`,24),Ap(`click`,function(){return i.groupByDuration()}),lD(73,`
          Group by Duration
        `),Rc(),lD(74,`
        `),vi(75,`button`,25),Ap(`click`,function(){return i.groupByDurationEffortDriven()}),lD(76,`
          Group by Duration then Effort-Driven
        `),Rc(),lD(77,`
      `),Rc(),lD(78,`
    `),Rc(),lD(79,`

    `),_p(80,`hr`),lD(81,`

    `),vi(82,`angular-slickgrid`,26),Ap(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),lD(83,`
    `),Rc(),lD(84,`
  `),Rc(),lD(85,`
`),Rc(),lD(86,`
`)),l&2&&(dv(57),Kp(`ngModel`,i.detailViewRowCount),rE(),dv(8),Kp(`ngModel`,i.serverWaitDelay),rE(),dv(17),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[D1,In,Ge,zt,Dn,qt],encapsulation:2})}}return u})();export{ne as Example47Component};