import{Dn as jp,Er as zE,Fn as mp,Gt as bD,Hn as oD,P as Kv,Pt as Xv,Wt as av,Zt as cD,dn as gi,fr as wD,g as Dp,l as BI,n as $p,pn as gp,u as Bp,yr as xc}from"./chunk-B0w5H0p9.js";import{E as LF,S as JN,a as AB,gt as q1,kt as zp,l as BB,v as HM,x as Iu,xt as te}from"./chunk-C7G4ZLh2.js";import{_ as je,b as zt,c as Cn,l as En,v as qt}from"./main-OKEWRQDY.js";import{t as a}from"./chunk-CiyLb43o.js";import{n as j$1,t as Y}from"./chunk-BgplpY8v.js";var j=(()=>{class u{alertAssignee(o){alert(typeof o==`string`?`Assignee on this task is: ${o.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a(`Deleted row with ${o.title}`,`danger`))}showNotification(o){a(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,`info`)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=BI({type:u,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,`assignee`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(l,i){l&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h3`),oD(3),xc(),oD(4,`
  `),gi(5,`div`,1),oD(6,`
    `),gi(7,`div`,2)(8,`label`),oD(9,`Assignee:`),xc(),oD(10,` `),gi(11,`input`,3),$p(`ngModelChange`,function(r){return cD(i.model.assignee,r)||(i.model.assignee=r),r}),xc(),Kv(),xc(),oD(12,`
    `),gi(13,`div`,2),oD(14,`
      `),gi(15,`label`),oD(16,`Reporter:`),xc(),oD(17,` `),gi(18,`span`),oD(19),xc(),oD(20,`
    `),xc(),oD(21,`
    `),gi(22,`div`,2),oD(23,`
      `),gi(24,`label`),oD(25,`Duration:`),xc(),oD(26,` `),gi(27,`span`),oD(28),xc(),oD(29,`
    `),xc(),oD(30,`
    `),gi(31,`div`,2),oD(32,`
      `),gi(33,`label`),oD(34,`% Complete:`),xc(),oD(35,` `),gi(36,`span`),oD(37),xc(),oD(38,`
    `),xc(),oD(39,`
  `),xc(),oD(40,`

  `),gi(41,`div`,1),oD(42,`
    `),gi(43,`div`,2),oD(44,`
      `),gi(45,`label`),oD(46,`Start:`),xc(),oD(47,` `),gi(48,`span`),oD(49),wD(50,`date`),xc(),oD(51,`
    `),xc(),oD(52,`
    `),gi(53,`div`,2),oD(54,`
      `),gi(55,`label`),oD(56,`Finish:`),xc(),oD(57,` `),gi(58,`span`),oD(59),wD(60,`date`),xc(),oD(61,`
    `),xc(),oD(62,`
    `),gi(63,`div`,2)(64,`label`),oD(65,`Effort Driven:`),xc(),oD(66,` `),mp(67,`i`),xc(),oD(68,`
  `),xc(),oD(69,`

  `),mp(70,`hr`),oD(71,`

  `),gi(72,`div`,4),oD(73,`
    `),gi(74,`h4`),oD(75,`
      Find out who is the Assignee
      `),gi(76,`small`),oD(77,`
        `),gi(78,`button`,5),Dp(`click`,function(){return i.alertAssignee(i.model==null?null:i.model.assignee)}),oD(79,`Click Me`),xc(),oD(80,`
      `),xc(),oD(81,`
    `),xc(),oD(82,`
  `),xc(),oD(83,`
  `),gi(84,`div`,6),oD(85,`
    `),gi(86,`button`,7),Dp(`click`,function(){return i.deleteRow(i.model)}),oD(87,`Delete Row`),xc(),oD(88,`
    `),gi(89,`button`,8),Dp(`click`,function(){return i.showNotification(i.model)}),oD(90,`
      Call Parent Method
    `),xc(),oD(91,`
  `),xc(),oD(92,`
`),xc(),oD(93,`
`)),l&2&&(av(3),jp(i.model?.title),av(8),Bp(`ngModel`,i.model.assignee),Xv(),av(8),jp(i.model?.reporter),av(9),jp(i.model?.duration),av(9),jp(i.model?.percentComplete),av(12),jp(bD(50,9,i.model==null?null:i.model.start,`yyyy-MM-dd`)),av(10),jp(bD(60,12,i.model==null?null:i.model.finish,`yyyy-MM-dd`)),av(8),zE(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[En,je,Cn,qt,zp],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return u})();var $=250;var J=1e3;var ne=(()=>{class u{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=$}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:HM.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:`number`,formatter:JN.percentCompleteBar,groupTotalsFormatter:AB.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:Iu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:Iu.compoundDate}},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:Iu.compoundInputNumber},type:`number`,formatter:JN.dollar,groupTotalsFormatter:AB.sumTotalsDollarBold},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:JN.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:Iu.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,rowTopOffsetRenderType:`top`,darkMode:this._darkMode,externalResources:[j$1],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:!0,singleRowExpand:!1,useRowClick:!1,panelRows:this.detailViewRowCount,preloadComponent:Y,viewComponent:j},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),R=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:`Task `+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?R:-R,effortDriven:l%5===0}}this.dataset=o}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o))}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new LF.Avg(`percentComplete`),new LF.Sum(`cost`)],comparer:(o,l)=>BB.numeric(o.value,l.value,te.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new LF.Sum(`duration`),new LF.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:l=>`Effort-Driven: ${l.value?`True`:`False`} <span style="color:green">(${l.count} items)</span>`,aggregators:[new LF.Avg(`percentComplete`),new LF.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(o){let l=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||``,a.reporter=l[this.randomNumber(0,9)]||``,i(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=BI({type:u,selectors:[[`ng-component`]],decls:87,vars:5,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`type`,`button`,`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[`className`,`row`],[`className`,`col-sm-12 d-flex gap-4px`],[`type`,`button`,`data-test`,`collapse-all-rowdetail-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`type`,`button`,`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`type`,`button`,`data-test`,`collapse-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`type`,`button`,`data-test`,`expand-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid47`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,i){l&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 47: Row Detail View + Grouping
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return i.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
    `),gi(17,`button`,6),Dp(`click`,function(){return i.toggleDarkMode()}),oD(18,`
      `),mp(19,`span`,7),oD(20,`
      `),gi(21,`span`),oD(22,`Toggle Dark Mode`),xc(),oD(23,`
    `),xc(),oD(24,`
  `),xc(),oD(25,`

  `),gi(26,`div`,8),oD(27,`
    Provide ability for Row Detail to work with Grouping, see (`),gi(28,`a`,9),oD(29,`Wiki docs`),xc(),oD(30,`)
  `),xc(),oD(31,`

  `),gi(32,`div`,10),oD(33,`
    `),gi(34,`div`,11),oD(35,`
      `),gi(36,`button`,12),Dp(`click`,function(){return i.closeAllRowDetail()}),oD(37,`
        Close All Row Details
      `),xc(),oD(38,`
      `),gi(39,`button`,13),Dp(`click`,function(){return i.clearGrouping()}),oD(40,`
        `),mp(41,`i`,14),oD(42,` Clear grouping
      `),xc(),oD(43,`
      `),gi(44,`button`,15),Dp(`click`,function(){return i.collapseAllGroups()}),oD(45,`
        `),mp(46,`i`,16),oD(47,` Collapse all groups
      `),xc(),oD(48,`
      `),gi(49,`button`,17),Dp(`click`,function(){return i.expandAllGroups()}),oD(50,`
        `),mp(51,`i`,18),oD(52,` Expand all groups
      `),xc(),oD(53,`

      `),gi(54,`label`,19),oD(55,`Detail View Rows Shown: `),xc(),oD(56,`
      `),gi(57,`input`,20),$p(`ngModelChange`,function(r){return cD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),xc(),Kv(),oD(58,`
      `),gi(59,`button`,21),Dp(`click`,function(){return i.changeDetailViewRowCount()}),oD(60,`
        Set
      `),xc(),oD(61,`
      `),gi(62,`label`,22),oD(63,`Server Delay: `),xc(),oD(64,`
      `),gi(65,`input`,23),$p(`ngModelChange`,function(r){return cD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),xc(),Kv(),oD(66,`
    `),xc(),oD(67,`

    `),gi(68,`div`,10),oD(69,`
      `),gi(70,`div`,11),oD(71,`
        `),gi(72,`button`,24),Dp(`click`,function(){return i.groupByDuration()}),oD(73,`
          Group by Duration
        `),xc(),oD(74,`
        `),gi(75,`button`,25),Dp(`click`,function(){return i.groupByDurationEffortDriven()}),oD(76,`
          Group by Duration then Effort-Driven
        `),xc(),oD(77,`
      `),xc(),oD(78,`
    `),xc(),oD(79,`

    `),mp(80,`hr`),oD(81,`

    `),gi(82,`angular-slickgrid`,26),Dp(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),oD(83,`
    `),xc(),oD(84,`
  `),xc(),oD(85,`
`),xc(),oD(86,`
`)),l&2&&(av(57),Bp(`ngModel`,i.detailViewRowCount),Xv(),av(8),Bp(`ngModel`,i.serverWaitDelay),Xv(),av(17),gp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[q1,En,je,zt,Cn,qt],encapsulation:2})}}return u})();export{ne as Example47Component};