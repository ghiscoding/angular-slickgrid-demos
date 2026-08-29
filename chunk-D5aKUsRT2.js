import{Dt as UE,En as iD,H as Jy,Kn as mp,Nt as Vp,Rn as lD,Tt as Tp,Wn as mi,hr as vp,ht as QI,kt as Up,ln as cy,o as Ac,pn as eE,qt as _D,r as $p,yr as wD}from"./chunk-06EGdSfW.js";import{H as _W,N as WA,_ as LM,b as Pm,c as GM,mt as nk,rt as gR,st as ip,wt as te}from"./chunk-CAMk6vEo.js";import{_ as Vn,b as zt,d as Fn,g as Te,s as $t}from"./main-T6P2BZBW.js";import{t as a}from"./chunk-CiyLb43o.js";import{n as j$1,t as Y}from"./chunk-YIIvJoE9.js";var j=(()=>{class u{alertAssignee(o){alert(typeof o==`string`?`Assignee on this task is: ${o.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a(`Deleted row with ${o.title}`,`danger`))}showNotification(o){a(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,`info`)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=UE({type:u,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,`assignee`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(l,i){l&1&&(mi(0,`div`,0),iD(1,`
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
    `),mi(89,`button`,8),Tp(`click`,function(){return i.showNotification(i.model)}),iD(90,`
      Call Parent Method
    `),Ac(),iD(91,`
  `),Ac(),iD(92,`
`),Ac(),iD(93,`
`)),l&2&&(cy(3),Vp(i.model?.title),cy(8),Up(`ngModel`,i.model.assignee),eE(),cy(8),Vp(i.model?.reporter),cy(9),Vp(i.model?.duration),cy(9),Vp(i.model?.percentComplete),cy(12),Vp(_D(50,9,i.model?.start,`yyyy-MM-dd`)),cy(10),Vp(_D(60,12,i.model?.finish,`yyyy-MM-dd`)),cy(8),QI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[Fn,Te,Vn,$t,Pm],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return u})();var $=250;var J=1e3;var ne=(()=>{class u{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=$}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:WA.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:`number`,formatter:nk.percentCompleteBar,groupTotalsFormatter:LM.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:ip.compoundInputNumber},type:`number`,formatter:nk.dollar,groupTotalsFormatter:LM.sumTotalsDollarBold},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:nk.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,rowTopOffsetRenderType:`top`,darkMode:this._darkMode,externalResources:[j$1],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:!0,singleRowExpand:!1,useRowClick:!1,panelRows:this.detailViewRowCount,preloadComponent:Y,viewComponent:j},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),R=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:`Task `+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?R:-R,effortDriven:l%5===0}}this.dataset=o}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o))}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],comparer:(o,l)=>GM.numeric(o.value,l.value,te.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:l=>`Effort-Driven: ${l.value?`True`:`False`} <span style="color:green">(${l.count} items)</span>`,aggregators:[new gR.Avg(`percentComplete`),new gR.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(o){let l=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||``,a.reporter=l[this.randomNumber(0,9)]||``,i(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=UE({type:u,selectors:[[`ng-component`]],decls:87,vars:5,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`type`,`button`,`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[`className`,`row`],[`className`,`col-sm-12 d-flex gap-4px`],[`type`,`button`,`data-test`,`collapse-all-rowdetail-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`type`,`button`,`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`type`,`button`,`data-test`,`collapse-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`type`,`button`,`data-test`,`expand-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid47`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,i){l&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 47: Row Detail View + Grouping
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
    Provide ability for Row Detail to work with Grouping, see (`),mi(28,`a`,9),iD(29,`Wiki docs`),Ac(),iD(30,`)
  `),Ac(),iD(31,`

  `),mi(32,`div`,10),iD(33,`
    `),mi(34,`div`,11),iD(35,`
      `),mi(36,`button`,12),Tp(`click`,function(){return i.closeAllRowDetail()}),iD(37,`
        Close All Row Details
      `),Ac(),iD(38,`
      `),mi(39,`button`,13),Tp(`click`,function(){return i.clearGrouping()}),iD(40,`
        `),vp(41,`i`,14),iD(42,` Clear grouping
      `),Ac(),iD(43,`
      `),mi(44,`button`,15),Tp(`click`,function(){return i.collapseAllGroups()}),iD(45,`
        `),vp(46,`i`,16),iD(47,` Collapse all groups
      `),Ac(),iD(48,`
      `),mi(49,`button`,17),Tp(`click`,function(){return i.expandAllGroups()}),iD(50,`
        `),vp(51,`i`,18),iD(52,` Expand all groups
      `),Ac(),iD(53,`

      `),mi(54,`label`,19),iD(55,`Detail View Rows Shown: `),Ac(),iD(56,`
      `),mi(57,`input`,20),$p(`ngModelChange`,function(r){return lD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Ac(),Jy(),iD(58,`
      `),mi(59,`button`,21),Tp(`click`,function(){return i.changeDetailViewRowCount()}),iD(60,`
        Set
      `),Ac(),iD(61,`
      `),mi(62,`label`,22),iD(63,`Server Delay: `),Ac(),iD(64,`
      `),mi(65,`input`,23),$p(`ngModelChange`,function(r){return lD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Ac(),Jy(),iD(66,`
    `),Ac(),iD(67,`

    `),mi(68,`div`,10),iD(69,`
      `),mi(70,`div`,11),iD(71,`
        `),mi(72,`button`,24),Tp(`click`,function(){return i.groupByDuration()}),iD(73,`
          Group by Duration
        `),Ac(),iD(74,`
        `),mi(75,`button`,25),Tp(`click`,function(){return i.groupByDurationEffortDriven()}),iD(76,`
          Group by Duration then Effort-Driven
        `),Ac(),iD(77,`
      `),Ac(),iD(78,`
    `),Ac(),iD(79,`

    `),vp(80,`hr`),iD(81,`

    `),mi(82,`angular-slickgrid`,26),Tp(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),iD(83,`
    `),Ac(),iD(84,`
  `),Ac(),iD(85,`
`),Ac(),iD(86,`
`)),l&2&&(cy(57),Up(`ngModel`,i.detailViewRowCount),eE(),cy(8),Up(`ngModel`,i.serverWaitDelay),eE(),cy(17),mp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W,Fn,Te,zt,Vn,$t],encapsulation:2})}}return u})();export{ne as Example47Component};