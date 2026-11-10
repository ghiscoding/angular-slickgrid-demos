import{n as Y,t as T}from"./chunk-onxKXfDw.js";import{g as Yt,h as Wt,m as Sn,s as An,y as ke}from"./main-KCATS47T.js";import{t as a}from"./chunk-CiyLb43o.js";import{Ct as ku,P as OP,Rt as ye,V as R$,j as NP,lt as dm,mt as h0,rt as ZR,x as HO}from"./chunk-Lo0QQjTd.js";import{K as Jp,Tn as hD,X as Lc,Y as Kp,Yn as oE,dr as uD,en as _p,in as bp,k as GE,o as Ap,ot as ND,qn as nE,qt as XI,r as AD,wt as Qp,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var j=(()=>{class u{alertAssignee(o){alert(typeof o==`string`?`Assignee on this task is: ${o.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a(`Deleted row with ${o.title}`,`danger`))}showNotification(o){a(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,`info`)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=GE({type:u,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,`assignee`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(l,i){l&1&&(vi(0,`div`,0),uD(1,`
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
    `),vi(89,`button`,8),Ap(`click`,function(){return i.showNotification(i.model)}),uD(90,`
      Call Parent Method
    `),Lc(),uD(91,`
  `),Lc(),uD(92,`
`),Lc(),uD(93,`
`)),l&2&&(fv(3),Qp(i.model?.title),fv(8),Kp(`ngModel`,i.model.assignee),oE(),fv(8),Qp(i.model?.reporter),fv(9),Qp(i.model?.duration),fv(9),Qp(i.model?.percentComplete),fv(12),Qp(AD(50,9,i.model==null?null:i.model.start,`yyyy-MM-dd`)),fv(10),Qp(AD(60,12,i.model==null?null:i.model.finish,`yyyy-MM-dd`)),fv(8),XI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[Sn,ke,An,Wt,dm],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return u})();var $=250;var J=1e3;var ne=(()=>{class u{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=$}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:HO.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:`number`,formatter:ZR.percentCompleteBar,groupTotalsFormatter:OP.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,formatter:ZR.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ku.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:ZR.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ku.compoundDate}},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:ku.compoundInputNumber},type:`number`,formatter:ZR.dollar,groupTotalsFormatter:OP.sumTotalsDollarBold},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:ZR.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ku.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,darkMode:this._darkMode,externalResources:[T],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:!0,singleRowExpand:!1,useRowClick:!1,panelRows:this.detailViewRowCount,preloadComponent:Y,viewComponent:j},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),T=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:`Task `+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?T:-T,effortDriven:l%5===0}}this.dataset=o}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o))}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new h0.Avg(`percentComplete`),new h0.Sum(`cost`)],comparer:(o,l)=>NP.numeric(o.value,l.value,ye.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new h0.Sum(`duration`),new h0.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:l=>`Effort-Driven: ${l.value?`True`:`False`} <span style="color:green">(${l.count} items)</span>`,aggregators:[new h0.Avg(`percentComplete`),new h0.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(o){let l=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||``,a.reporter=l[this.randomNumber(0,9)]||``,i(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=GE({type:u,selectors:[[`ng-component`]],decls:87,vars:5,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`type`,`button`,`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[`className`,`row`],[`className`,`col-sm-12 d-flex gap-4px`],[`type`,`button`,`data-test`,`collapse-all-rowdetail-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`type`,`button`,`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`type`,`button`,`data-test`,`collapse-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`type`,`button`,`data-test`,`expand-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid47`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,i){l&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 47: Row Detail View + Grouping
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
    Provide ability for Row Detail to work with Grouping, see (`),vi(28,`a`,9),uD(29,`Wiki docs`),Lc(),uD(30,`)
  `),Lc(),uD(31,`

  `),vi(32,`div`,10),uD(33,`
    `),vi(34,`div`,11),uD(35,`
      `),vi(36,`button`,12),Ap(`click`,function(){return i.closeAllRowDetail()}),uD(37,`
        Close All Row Details
      `),Lc(),uD(38,`
      `),vi(39,`button`,13),Ap(`click`,function(){return i.clearGrouping()}),uD(40,`
        `),_p(41,`i`,14),uD(42,` Clear grouping
      `),Lc(),uD(43,`
      `),vi(44,`button`,15),Ap(`click`,function(){return i.collapseAllGroups()}),uD(45,`
        `),_p(46,`i`,16),uD(47,` Collapse all groups
      `),Lc(),uD(48,`
      `),vi(49,`button`,17),Ap(`click`,function(){return i.expandAllGroups()}),uD(50,`
        `),_p(51,`i`,18),uD(52,` Expand all groups
      `),Lc(),uD(53,`

      `),vi(54,`label`,19),uD(55,`Detail View Rows Shown: `),Lc(),uD(56,`
      `),vi(57,`input`,20),nE(),Jp(`ngModelChange`,function(r){return hD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Lc(),uD(58,`
      `),vi(59,`button`,21),Ap(`click`,function(){return i.changeDetailViewRowCount()}),uD(60,`
        Set
      `),Lc(),uD(61,`
      `),vi(62,`label`,22),uD(63,`Server Delay: `),Lc(),uD(64,`
      `),vi(65,`input`,23),nE(),Jp(`ngModelChange`,function(r){return hD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Lc(),uD(66,`
    `),Lc(),uD(67,`

    `),vi(68,`div`,10),uD(69,`
      `),vi(70,`div`,11),uD(71,`
        `),vi(72,`button`,24),Ap(`click`,function(){return i.groupByDuration()}),uD(73,`
          Group by Duration
        `),Lc(),uD(74,`
        `),vi(75,`button`,25),Ap(`click`,function(){return i.groupByDurationEffortDriven()}),uD(76,`
          Group by Duration then Effort-Driven
        `),Lc(),uD(77,`
      `),Lc(),uD(78,`
    `),Lc(),uD(79,`

    `),_p(80,`hr`),uD(81,`

    `),vi(82,`angular-slickgrid`,26),Ap(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),uD(83,`
    `),Lc(),uD(84,`
  `),Lc(),uD(85,`
`),Lc(),uD(86,`
`)),l&2&&(fv(57),Kp(`ngModel`,i.detailViewRowCount),oE(),fv(8),Kp(`ngModel`,i.serverWaitDelay),oE(),fv(17),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[R$,Sn,ke,Yt,An,Wt],encapsulation:2})}}return u})();export{ne as Example47Component};