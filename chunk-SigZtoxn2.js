import{F as Ip,Lt as Wp,O as Gp,Ot as Up,Pn as ly,Wt as ZI,b as Ep,ir as tE,or as uD,p as CD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,xr as yi,zt as Xy}from"./chunk-Rd4ToC_L.js";import{F as WA,Tt as te,W as _W,_ as LM,ct as ip,ht as nk,it as gR,s as GM,x as Pm}from"./chunk-DLuyVhQJ.js";import{_ as Vn,b as zt,d as Fn,g as Te,s as $t}from"./main-CCTR2RMO.js";import{t as a}from"./chunk-CiyLb43o.js";import{n as j$1,t as Y}from"./chunk-DP9fMQa8.js";var j=(()=>{class u{alertAssignee(o){alert(typeof o==`string`?`Assignee on this task is: ${o.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a(`Deleted row with ${o.title}`,`danger`))}showNotification(o){a(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,`info`)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=$E({type:u,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,`assignee`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(l,i){l&1&&(yi(0,`div`,0),sD(1,`
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
    `),yi(89,`button`,8),bp(`click`,function(){return i.showNotification(i.model)}),sD(90,`
      Call Parent Method
    `),Rc(),sD(91,`
  `),Rc(),sD(92,`
`),Rc(),sD(93,`
`)),l&2&&(ly(3),Up(i.model?.title),ly(8),Gp(`ngModel`,i.model.assignee),tE(),ly(8),Up(i.model?.reporter),ly(9),Up(i.model?.duration),ly(9),Up(i.model?.percentComplete),ly(12),Up(MD(50,9,i.model?.start,`yyyy-MM-dd`)),ly(10),Up(MD(60,12,i.model?.finish,`yyyy-MM-dd`)),ly(8),ZI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[Fn,Te,Vn,$t,Pm],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return u})();var $=250;var J=1e3;var ne=(()=>{class u{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=$}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:WA.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:`number`,formatter:nk.percentCompleteBar,groupTotalsFormatter:LM.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:ip.compoundInputNumber},type:`number`,formatter:nk.dollar,groupTotalsFormatter:LM.sumTotalsDollarBold},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:nk.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,rowTopOffsetRenderType:`top`,darkMode:this._darkMode,externalResources:[j$1],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:!0,singleRowExpand:!1,useRowClick:!1,panelRows:this.detailViewRowCount,preloadComponent:Y,viewComponent:j},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),R=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:`Task `+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?R:-R,effortDriven:l%5===0}}this.dataset=o}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o))}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],comparer:(o,l)=>GM.numeric(o.value,l.value,te.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:l=>`Effort-Driven: ${l.value?`True`:`False`} <span style="color:green">(${l.count} items)</span>`,aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(o){let l=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||``,a.reporter=l[this.randomNumber(0,9)]||``,i(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=$E({type:u,selectors:[[`ng-component`]],decls:87,vars:5,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`type`,`button`,`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[`className`,`row`],[`className`,`col-sm-12 d-flex gap-4px`],[`type`,`button`,`data-test`,`collapse-all-rowdetail-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`type`,`button`,`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`type`,`button`,`data-test`,`collapse-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`type`,`button`,`data-test`,`expand-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid47`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,i){l&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 47: Row Detail View + Grouping
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
    Provide ability for Row Detail to work with Grouping, see (`),yi(28,`a`,9),sD(29,`Wiki docs`),Rc(),sD(30,`)
  `),Rc(),sD(31,`

  `),yi(32,`div`,10),sD(33,`
    `),yi(34,`div`,11),sD(35,`
      `),yi(36,`button`,12),bp(`click`,function(){return i.closeAllRowDetail()}),sD(37,`
        Close All Row Details
      `),Rc(),sD(38,`
      `),yi(39,`button`,13),bp(`click`,function(){return i.clearGrouping()}),sD(40,`
        `),Ip(41,`i`,14),sD(42,` Clear grouping
      `),Rc(),sD(43,`
      `),yi(44,`button`,15),bp(`click`,function(){return i.collapseAllGroups()}),sD(45,`
        `),Ip(46,`i`,16),sD(47,` Collapse all groups
      `),Rc(),sD(48,`
      `),yi(49,`button`,17),bp(`click`,function(){return i.expandAllGroups()}),sD(50,`
        `),Ip(51,`i`,18),sD(52,` Expand all groups
      `),Rc(),sD(53,`

      `),yi(54,`label`,19),sD(55,`Detail View Rows Shown: `),Rc(),sD(56,`
      `),yi(57,`input`,20),Wp(`ngModelChange`,function(r){return uD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Rc(),Xy(),sD(58,`
      `),yi(59,`button`,21),bp(`click`,function(){return i.changeDetailViewRowCount()}),sD(60,`
        Set
      `),Rc(),sD(61,`
      `),yi(62,`label`,22),sD(63,`Server Delay: `),Rc(),sD(64,`
      `),yi(65,`input`,23),Wp(`ngModelChange`,function(r){return uD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Rc(),Xy(),sD(66,`
    `),Rc(),sD(67,`

    `),yi(68,`div`,10),sD(69,`
      `),yi(70,`div`,11),sD(71,`
        `),yi(72,`button`,24),bp(`click`,function(){return i.groupByDuration()}),sD(73,`
          Group by Duration
        `),Rc(),sD(74,`
        `),yi(75,`button`,25),bp(`click`,function(){return i.groupByDurationEffortDriven()}),sD(76,`
          Group by Duration then Effort-Driven
        `),Rc(),sD(77,`
      `),Rc(),sD(78,`
    `),Rc(),sD(79,`

    `),Ip(80,`hr`),sD(81,`

    `),yi(82,`angular-slickgrid`,26),bp(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),sD(83,`
    `),Rc(),sD(84,`
  `),Rc(),sD(85,`
`),Rc(),sD(86,`
`)),l&2&&(ly(57),Gp(`ngModel`,i.detailViewRowCount),tE(),ly(8),Gp(`ngModel`,i.serverWaitDelay),tE(),ly(17),Ep(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W,Fn,Te,zt,Vn,$t],encapsulation:2})}}return u})();export{ne as Example47Component};