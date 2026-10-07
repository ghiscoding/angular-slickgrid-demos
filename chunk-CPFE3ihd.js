import{$ as Mp,Bn as lD,C as Ei,En as iD,K as Ky,_t as QI,b as Dp,c as BE,cn as ay,ct as Oc,en as _D,jt as Tp,kr as zp,qt as Xy,sr as qp,xr as wD,yt as Qp}from"./chunk-CtIlL7jI.js";import{A as Qk,Ot as xz,U as ZI,_ as Gk,ct as ie,m as E0,pt as lp,v as Hm,xt as uP}from"./chunk-o9GGBwbJ.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-G4ADOSVB.js";import{n as Y,t as S}from"./chunk-7jWZyNXF.js";import{t as a}from"./chunk-CiyLb43o.js";var j=(()=>{class u{alertAssignee(o){alert(typeof o==`string`?`Assignee on this task is: ${o.toUpperCase()}`:`No one is assigned to this task.`)}deleteRow(o){confirm(`Are you sure that you want to delete ${o.title}?`)&&(this.addon.collapseAll(),this.dataView.deleteItem(o.id),a(`Deleted row with ${o.title}`,`danger`))}showNotification(o){a(`We just called Parent Method from the Row Detail Child Component on ${o.title}`,`info`)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=BE({type:u,selectors:[[`ng-component`]],decls:94,vars:15,consts:[[1,`container-fluid`],[1,`row`],[1,`col-3`,`detail-label`],[1,`form-control`,`assignee`,3,`ngModelChange`,`ngModel`],[1,`col-sm-8`],[`data-test`,`assignee-btn`,1,`btn`,`btn-primary`,`btn-sm`,3,`click`],[1,`col-sm-4`],[`data-test`,`delete-btn`,1,`btn`,`btn-primary`,`btn-danger`,`btn-sm`,3,`click`],[`data-test`,`parent-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`]],template:function(l,i){l&1&&(Ei(0,`div`,0),iD(1,`
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
    `),Ei(89,`button`,8),Mp(`click`,function(){return i.showNotification(i.model)}),iD(90,`
      Call Parent Method
    `),Oc(),iD(91,`
  `),Oc(),iD(92,`
`),Oc(),iD(93,`
`)),l&2&&(ay(3),qp(i.model?.title),ay(8),zp(`ngModel`,i.model.assignee),Xy(),ay(8),qp(i.model?.reporter),ay(9),qp(i.model?.duration),ay(9),qp(i.model?.percentComplete),ay(12),qp(_D(50,9,i.model?.start,`yyyy-MM-dd`)),ay(10),qp(_D(60,12,i.model?.finish,`yyyy-MM-dd`)),ay(8),QI(i.model?.effortDriven?`mdi mdi-check`:``))},dependencies:[In,Ge,Dn,qt,Hm],styles:[`.detail-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px}`,`label[_ngcontent-%COMP%]{font-weight:600}`]})}}return u})();var $=250;var J=1e3;var ne=(()=>{class u{constructor(){this._darkMode=!1,this.columns=[],this.dataset=[],this.detailViewRowCount=9,this.hideSubTitle=!1,this.flashAlertType=`info`,this.message=``,this.serverWaitDelay=$}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.dataviewObj=o.dataView,this.groupByDuration()}get rowDetailInstance(){return this.angularGrid.extensions.rowDetailView?.instance||{}}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70,filterable:!0,editor:{model:ZI.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,minWidth:90,filterable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,minWidth:200,width:250,resizable:!1,filterable:!0,sortable:!0,type:`number`,formatter:uP.percentCompleteBar,groupTotalsFormatter:Gk.avgTotalsPercentage,params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:lp.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:uP.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:lp.compoundDate}},{id:`cost`,name:`Cost`,field:`cost`,minWidth:70,width:80,sortable:!0,filterable:!0,filter:{model:lp.compoundInputNumber},type:`number`,formatter:uP.dollar,groupTotalsFormatter:Gk.sumTotalsDollarBold},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,formatter:uP.checkmarkMaterial,type:`boolean`,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:lp.singleSelect}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableGrouping:!0,enableRowDetailView:!0,rowTopOffsetRenderType:`top`,darkMode:this._darkMode,externalResources:[S],rowDetailView:{process:o=>this.simulateServerAsyncCall(o),loadOnce:!0,singleRowExpand:!1,useRowClick:!1,panelRows:this.detailViewRowCount,preloadComponent:Y,viewComponent:j},selectionOptions:{selectActiveRow:!0}},this.getData()}getData(){let o=[];for(let l=0;l<J;l++){let i=2e3+Math.floor(Math.random()*10),a=Math.floor(Math.random()*11),r=Math.floor(Math.random()*29),L=Math.round(Math.random()*100),R=Math.round(Math.random()*1e4)/100;o[l]={id:l,title:`Task `+l,duration:Math.floor(Math.random()*100),percentComplete:L,start:new Date(i,a,r),finish:new Date(i,a+1,r),cost:l%3?R:-R,effortDriven:l%5===0}}this.dataset=o}changeDetailViewRowCount(){if(this.angularGrid?.extensionService){let o=this.rowDetailInstance.getOptions();o?.panelRows&&(o.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(o))}}closeAllRowDetail(){this.angularGrid?.extensionService&&this.rowDetailInstance.collapseAll()}clearGrouping(){this.dataviewObj.setGrouping([])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}groupByDuration(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0}]),this.dataviewObj.setGrouping({getter:`duration`,formatter:o=>`Duration: ${o.value} <span style="color:green">(${o.count} items)</span>`,aggregators:[new E0.Avg(`percentComplete`),new E0.Sum(`cost`)],comparer:(o,l)=>Qk.numeric(o.value,l.value,ie.asc),aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.gridObj.invalidate()}groupByDurationEffortDriven(){this.angularGrid.filterService.setSortColumnIcons([{columnId:`duration`,sortAsc:!0},{columnId:`effortDriven`,sortAsc:!0}]),this.dataviewObj.setGrouping([{getter:`duration`,formatter:l=>`Duration: ${l.value} <span style="color:green">(${l.count} items)</span>`,aggregators:[new E0.Sum(`duration`),new E0.Sum(`cost`)],aggregateCollapsed:!0,lazyTotalsCalculation:!0},{getter:`effortDriven`,formatter:l=>`Effort-Driven: ${l.value?`True`:`False`} <span style="color:green">(${l.count} items)</span>`,aggregators:[new E0.Avg(`percentComplete`),new E0.Sum(`cost`)],collapsed:!0,lazyTotalsCalculation:!0}]),this.gridObj.invalidate()}simulateServerAsyncCall(o){let l=[`John Doe`,`Jane Doe`,`Chuck Norris`,`Bumblebee`,`Jackie Chan`,`Elvis Presley`,`Bob Marley`,`Mohammed Ali`,`Bruce Lee`,`Rocky Balboa`];return new Promise(i=>{setTimeout(()=>{let a=o;a.assignee=l[this.randomNumber(0,9)]||``,a.reporter=l[this.randomNumber(0,9)]||``,i(a)},this.serverWaitDelay)})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(2)}randomNumber(o,l){return Math.floor(Math.random()*(l-o+1)+o)}static{this.ɵfac=function(l){return new(l||u)}}static{this.ɵcmp=BE({type:u,selectors:[[`ng-component`]],decls:87,vars:5,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example47.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`type`,`button`,`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/row-detail`,`target`,`_blank`],[`className`,`row`],[`className`,`col-sm-12 d-flex gap-4px`],[`type`,`button`,`data-test`,`collapse-all-rowdetail-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`type`,`button`,`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`type`,`button`,`data-test`,`collapse-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`type`,`button`,`data-test`,`expand-all-groups-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`for`,`detailViewRowCount`],[`id`,`detailViewRowCount`,`type`,`number`,2,`height`,`22px`,`width`,`40px`,3,`ngModelChange`,`ngModel`],[`type`,`button`,`data-test`,`set-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`serverdelay`,1,`ms-2`],[`id`,`serverdelay`,`type`,`number`,`data-test`,`server-delay`,`title`,`input a fake timer delay to simulate slow server response`,2,`height`,`26px`,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid47`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,i){l&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 47: Row Detail View + Grouping
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
    Provide ability for Row Detail to work with Grouping, see (`),Ei(28,`a`,9),iD(29,`Wiki docs`),Oc(),iD(30,`)
  `),Oc(),iD(31,`

  `),Ei(32,`div`,10),iD(33,`
    `),Ei(34,`div`,11),iD(35,`
      `),Ei(36,`button`,12),Mp(`click`,function(){return i.closeAllRowDetail()}),iD(37,`
        Close All Row Details
      `),Oc(),iD(38,`
      `),Ei(39,`button`,13),Mp(`click`,function(){return i.clearGrouping()}),iD(40,`
        `),Tp(41,`i`,14),iD(42,` Clear grouping
      `),Oc(),iD(43,`
      `),Ei(44,`button`,15),Mp(`click`,function(){return i.collapseAllGroups()}),iD(45,`
        `),Tp(46,`i`,16),iD(47,` Collapse all groups
      `),Oc(),iD(48,`
      `),Ei(49,`button`,17),Mp(`click`,function(){return i.expandAllGroups()}),iD(50,`
        `),Tp(51,`i`,18),iD(52,` Expand all groups
      `),Oc(),iD(53,`

      `),Ei(54,`label`,19),iD(55,`Detail View Rows Shown: `),Oc(),iD(56,`
      `),Ei(57,`input`,20),Ky(),Qp(`ngModelChange`,function(r){return lD(i.detailViewRowCount,r)||(i.detailViewRowCount=r),r}),Oc(),iD(58,`
      `),Ei(59,`button`,21),Mp(`click`,function(){return i.changeDetailViewRowCount()}),iD(60,`
        Set
      `),Oc(),iD(61,`
      `),Ei(62,`label`,22),iD(63,`Server Delay: `),Oc(),iD(64,`
      `),Ei(65,`input`,23),Ky(),Qp(`ngModelChange`,function(r){return lD(i.serverWaitDelay,r)||(i.serverWaitDelay=r),r}),Oc(),iD(66,`
    `),Oc(),iD(67,`

    `),Ei(68,`div`,10),iD(69,`
      `),Ei(70,`div`,11),iD(71,`
        `),Ei(72,`button`,24),Mp(`click`,function(){return i.groupByDuration()}),iD(73,`
          Group by Duration
        `),Oc(),iD(74,`
        `),Ei(75,`button`,25),Mp(`click`,function(){return i.groupByDurationEffortDriven()}),iD(76,`
          Group by Duration then Effort-Driven
        `),Oc(),iD(77,`
      `),Oc(),iD(78,`
    `),Oc(),iD(79,`

    `),Tp(80,`hr`),iD(81,`

    `),Ei(82,`angular-slickgrid`,26),Mp(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),iD(83,`
    `),Oc(),iD(84,`
  `),Oc(),iD(85,`
`),Oc(),iD(86,`
`)),l&2&&(ay(57),zp(`ngModel`,i.detailViewRowCount),Xy(),ay(8),zp(`ngModel`,i.serverWaitDelay),Xy(),ay(17),Dp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[xz,In,Ge,zt,Dn,qt],encapsulation:2})}}return u})();export{ne as Example47Component};