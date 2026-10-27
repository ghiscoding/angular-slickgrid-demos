import{$n as pD,$t as _I,F as II,G as Kp,Gn as lu,In as lD,M as Ho,U as Jp,a as Ap,bn as gD,br as vI,bt as RI,mn as dv,on as bp,pr as tE,sr as rE,tn as _p,un as cu,v as EI,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,G as WO,bt as se,it as fT,jt as zA,l as D1,p as FA,yt as sI}from"./chunk-Dk5kBPyv.js";import{c as Dn,d as In,f as Mn,g as Ut,l as En,m as Nn,s as An,v as it,y as qt}from"./main-BEH6XCIK.js";import{t as bh}from"./chunk-Co5s-2kw.js";import{t as Qe}from"./chunk-D0qctKwX.js";import{t as c}from"./chunk-CGe8-2e6.js";function ee(d,_){if(d&1&&(lD(0,`
                    `),vi(1,`option`,41),lD(2),Rc(),lD(3,`
                  `)),d&2){let t=_.$implicit;dv(),bp(`ngValue`,t.id),dv(),Qp(t.name)}}function te(d,_){if(d&1){let t=_I();lD(0,`
              `),vi(1,`div`,38),lD(2,`
                `),vi(3,`select`,39),tE(),Jp(`ngModelChange`,function(r){let o=cu(t).$index,m=RI();return pD(m.selectedGroupingFields()[o],r)||(m.selectedGroupingFields()[o]=r),lu(r)}),Ap(`ngModelChange`,function(r){let o=cu(t).$index,m=RI();return lu(m.onDropdownChange(r,o))}),lD(4,`
                  `),_p(5,`option`,40),lD(6,`
                  `),EI(7,ee,4,2,null,null,vI),Rc(),lD(9,`
              `),Rc(),lD(10,`
            `)}if(d&2){let t=_.$index,l=RI();dv(3),bp(`name`,gD(`group-field-`,t)),Kp(`ngModel`,l.selectedGroupingFields()[t]),rE(),dv(4),II(l.columns)}}var ne=1e4;var ce=(()=>{class d{constructor(){this._darkMode=!1,this.durationOrderByCount=!1,this.hideSubTitle=!1,this.processing=!1,this.selectedGroupingFields=Ho([``,``,``]),this.excelExportService=new Qe,this.pdfExportService=new bh,this.textExportService=new c,this.loadData(ne),this.defineGrid()}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`)?.classList.remove(`dark-mode`);let t=document.querySelector(`#demo-container`);t?.dataset&&(t.dataset.bsTheme=`light`)}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid,this.dataviewObj=t.dataView}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,columnGroup:`Common Factor`,hidden:!0,filterable:!0,sortable:!0,grouping:{getter:`title`,formatter:t=>`Title: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new fT.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`,sortable:!0,filterable:!0,editor:{model:WO.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:!0},filter:{model:uu.slider,operator:`>=`},type:`number`,groupTotalsFormatter:FA.sumTotals,grouping:{getter:`duration`,formatter:t=>`Duration: ${t.value} <span class="text-primary">(${t.count} items)</span>`,comparer:(t,l)=>this.durationOrderByCount?t.count-l.count:zA.numeric(t.value,l.value,se.asc),aggregators:[new fT.Sum(`duration`),new fT.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`,sortable:!0,filterable:!0,filter:{model:uu.compoundDate},formatter:sI.dateIso,editor:{model:WO.date},type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`start`,formatter:t=>`Start: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new fT.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`,sortable:!0,filterable:!0,filter:{model:uu.compoundDate},formatter:sI.dateIso,editor:{model:WO.date},type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`finish`,formatter:t=>`Finish: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new fT.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`cost`,name:`Cost`,field:`cost`,columnGroup:`Analysis`,width:90,sortable:!0,filterable:!0,filter:{model:uu.compoundInput},formatter:sI.dollar,groupTotalsFormatter:FA.sumTotalsDollar,type:`number`,grouping:{getter:`cost`,formatter:t=>`Cost: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new fT.Sum(`cost`)],aggregateCollapsed:!0,collapsed:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,columnGroup:`Analysis`,formatter:sI.percentCompleteBar,type:`number`,filterable:!0,filter:{model:uu.compoundSlider},sortable:!0,groupTotalsFormatter:FA.avgTotalsPercentage,grouping:{getter:`percentComplete`,formatter:t=>`% Complete: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new fT.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`effortDriven`,name:`Effort-Driven`,field:`effortDriven`,columnGroup:`Analysis`,width:80,minWidth:20,maxWidth:100,cssClass:`cell-effort-driven`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect},formatter:sI.checkmarkMaterial,grouping:{getter:`effortDriven`,formatter:t=>`Effort-Driven: ${t.value?`True`:`False`} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new fT.Sum(`duration`),new fT.Sum(`cost`)],collapsed:!1}},{id:`action`,name:`Action`,field:`action`,width:90,maxWidth:90,excludeFromExport:!0,formatter:()=>`<div class="fake-hyperlink color-primary flex justify-center">Action <i class="mdi mdi-chevron-down"></i></div>`,cellMenu:{commandTitle:`Commands`,commandItems:[{command:`help`,title:`Help`}]}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableDraggableGrouping:!0,enableSelection:!0,enableCheckboxSelector:!0,selectionOptions:{selectActiveRow:!1},checkboxSelector:{hideInColumnTitleRow:!0,hideInFilterHeaderRow:!1},enableCellMenu:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:26,createTopHeaderPanel:!0,showTopHeaderPanel:!0,topHeaderPanelHeight:35,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,textExportOptions:{sanitizeDataExport:!0},gridMenu:{onCommand:(t,l)=>{l.command===`toggle-preheader`&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:`Drop a column header here to group by the column`,deleteIconCssClass:`mdi mdi-close color-danger`,sortAscIconCssClass:`mdi mdi-arrow-up`,sortDescIconCssClass:`mdi mdi-arrow-down`,onGroupChanged:(t,l)=>this.onGroupChanged(l),onExtensionRegistered:t=>this.draggableGroupingPlugin=t,initialGroupBy:[`duration`]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:!0,documentTitle:`Grouping Grid`}}}loadData(t){let l=[],r=new Date().getFullYear();for(let o=0;o<t;o++){let m=r-3+Math.floor(Math.random()*10),v=Math.floor(Math.random()*10),k=Math.floor(Math.random()*29),G=new Date(m,v+1,k),w=Math.round(Math.random()*1e4)/100;l[o]={id:o,title:`Task `+o,duration:Math.round(Math.random()*100)+``,percentComplete:Math.round(Math.random()*100),start:new Date(r-2,v,k),finish:G<new Date?``:G,cost:o%33===0?-w:w,effortDriven:o%5===0}}this.dataset=l}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGrouping(t=!0){this.draggableGroupingPlugin?.clearDroppedGroups(),t&&this.gridObj?.invalidate()}clearGroupingSelects(){this.selectedGroupingFields.set([``,``,``])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`Export`})}exportToCsv(t=`csv`){this.textExportService.exportToFile({delimiter:t===`csv`?`,`:`	`,filename:`myExport`,format:t===`csv`?`csv`:`txt`})}groupByDurationOrderByCount(t=!1){if(this.durationOrderByCount=t,this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(`duration`);let l=t?[]:[{columnId:`duration`,sortAsc:!0}];this.gridObj?.setSortColumns(l),this.gridObj?.invalidate()}}groupByDurationEffortDriven(){this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups([`duration`,`effortDriven`]),this.gridObj?.invalidate())}groupByFieldName(t,l){if(this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups){let r=this.selectedGroupingFields().filter(o=>o!==``);this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(r),this.gridObj.invalidate()}}onGroupChanged(t){let l=t?.caller||[],r=t?.groupColumns||[];if(Array.isArray(r)&&r.length>0){let o=r.map(m=>m?.getter??``);for(;o.length<3;)o.push(``);this.selectedGroupingFields.set(o)}else r.length===0&&l===`remove-group`&&this.clearGroupingSelects()}onCellChanged(){this.angularGrid.dataView?.refresh()}onDropdownChange(t,l){let r=[...this.selectedGroupingFields()];r[l]=t,this.selectedGroupingFields.set(r),this.groupByFieldName(t,l)}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}selectTrackByFn(t,l){return t}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`>=`,searchTerms:[`55`]},{columnId:`cost`,operator:`<`,searchTerms:[`80`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`percentComplete`,direction:`ASC`}])}toggleDraggableGroupingRow(){this.clearGrouping(),this.gridObj.setTopHeaderPanelVisibility(!this.gridObj.getOptions().showTopHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){let t=document.querySelector(`.panel-wm-content`),l=document.querySelector(`#demo-container`),r=`light`;this._darkMode?(t?.classList.add(`dark-mode`),r=`dark`):(t?.classList.remove(`dark-mode`),r=`light`),l?.dataset&&(l.dataset.bsTheme=r)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList?.[t](`hidden`),this.angularGrid.resizerService?.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||d)}}static{this.ɵcmp=WE({type:d,selectors:[[`ng-component`]],decls:162,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example18.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators`,`target`,`_blank`],[1,`form-inline`],[1,`row`],[1,`col-sm-12`],[`data-test`,`add-5k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-500k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`data-test`,`toggle-draggable-grouping-row`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-sort-ascending`],[1,`row`,`mt-2`],[1,`form-row`],[1,`row`,`form-group`],[`for`,`field1`,1,`col-sm-3`,`mb-2`],[1,`row`,`mt-1`,`mb-1`],[`gridId`,`grid18`,3,`onCellChange`,`onAngularGridCreated`,`dataset`,`columns`,`options`],[1,`form-group`,`col-md-3`,`grouping-selects`],[1,`form-select`,3,`ngModelChange`,`name`,`ngModel`],[`value`,``],[3,`ngValue`]],template:function(l,r){l&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 18: Draggable Grouping & Aggregators
    `),vi(4,`button`,1),Ap(`click`,function(){return r.toggleSubTitle()}),lD(5,`
      `),_p(6,`span`,2),lD(7,`
    `),Rc(),lD(8,`
    `),vi(9,`button`,3),Ap(`click`,function(){return r.toggleDarkMode()}),lD(10,`
      `),_p(11,`span`,4),lD(12,`
      `),vi(13,`span`),lD(14,`Toggle Dark Mode`),Rc(),lD(15,`
    `),Rc(),lD(16,`
    `),vi(17,`span`,5),lD(18,`
      `),vi(19,`a`,6),lD(20,`
        `),_p(21,`span`,7),lD(22,` code
      `),Rc(),lD(23,`
    `),Rc(),lD(24,`
  `),Rc(),lD(25,`

  `),vi(26,`div`,8),lD(27,`
    `),vi(28,`ul`),lD(29,`
      `),vi(30,`li`),lD(31,`
        `),vi(32,`a`,9),lD(33,`Wiki docs`),Rc(),lD(34,`
      `),Rc(),lD(35,`
      `),vi(36,`li`),lD(37,`This example shows 3 ways of grouping`),Rc(),lD(38,`
      `),vi(39,`ol`),lD(40,`
        `),vi(41,`li`),lD(42,`
          Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
          drop area).
        `),Rc(),lD(43,`
        `),vi(44,`li`),lD(45,`Use buttons and defined functions to group by wichever field you want`),Rc(),lD(46,`
        `),vi(47,`li`),lD(48,`Use the Select dropdown to group, the position of the Selects represent the grouping level`),Rc(),lD(49,`
      `),Rc(),lD(50,`
      `),vi(51,`li`),lD(52,`Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items`),Rc(),lD(53,`
      `),vi(54,`li`),lD(55,`Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..`),Rc(),lD(56,`
      `),vi(57,`li`),lD(58,`Use "Aggregators" and "GroupTotalFormatters" directly from Angular-Slickgrid`),Rc(),lD(59,`
    `),Rc(),lD(60,`
  `),Rc(),lD(61,`

  `),vi(62,`form`,10),lD(63,`
    `),vi(64,`div`,11),lD(65,`
      `),vi(66,`div`,12),lD(67,`
        `),vi(68,`button`,13),Ap(`click`,function(){return r.loadData(5e3)}),lD(69,`5K rows`),Rc(),lD(70,`
        `),vi(71,`button`,14),Ap(`click`,function(){return r.loadData(5e5)}),lD(72,`
          500K rows
        `),Rc(),lD(73,`
        `),vi(74,`button`,15),Ap(`click`,function(){return r.clearGroupsAndSelects()}),lD(75,`
          `),_p(76,`i`,16),lD(77,` Clear grouping
        `),Rc(),lD(78,`
        `),vi(79,`button`,17),Ap(`click`,function(){return r.collapseAllGroups()}),lD(80,`
          `),_p(81,`i`,18),lD(82,` Collapse all groups
        `),Rc(),lD(83,`
        `),vi(84,`button`,19),Ap(`click`,function(){return r.expandAllGroups()}),lD(85,`
          `),_p(86,`i`,20),lD(87,` Expand all groups
        `),Rc(),lD(88,`
        `),vi(89,`button`,21),Ap(`click`,function(){return r.toggleDraggableGroupingRow()}),lD(90,`
          Toggle Draggable Grouping Row
        `),Rc(),lD(91,`
        `),vi(92,`button`,22),Ap(`click`,function(){return r.exportToExcel()}),lD(93,`
          `),_p(94,`i`,23),lD(95,` Export to Excel
        `),Rc(),lD(96,`
        `),vi(97,`button`,22),Ap(`click`,function(){return r.exportToPdf()}),lD(98,`
          `),_p(99,`i`,24),lD(100,` Export to PDF
        `),Rc(),lD(101,`
      `),Rc(),lD(102,`
    `),Rc(),lD(103,`
    `),vi(104,`div`,11),lD(105,`
      `),vi(106,`div`,12),lD(107,`
        `),vi(108,`button`,25),Ap(`click`,function(){return r.groupByDurationOrderByCount(!1)}),lD(109,`
          Group by duration & sort groups by value
        `),Rc(),lD(110,`
        `),vi(111,`button`,26),Ap(`click`,function(){return r.groupByDurationOrderByCount(!0)}),lD(112,`
          Group by duration & sort groups by count
        `),Rc(),lD(113,`
        `),vi(114,`button`,27),Ap(`click`,function(){return r.groupByDurationEffortDriven()}),lD(115,`
          Group by Duration & then Effort-Driven
        `),Rc(),lD(116,`
        `),vi(117,`button`,28),Ap(`click`,function(){return r.setFiltersDynamically()}),lD(118,`
          `),_p(119,`span`,29),lD(120,`
          `),vi(121,`span`),lD(122,` Set Filters Dynamically `),Rc(),lD(123,`
        `),Rc(),lD(124,`
        `),vi(125,`button`,30),Ap(`click`,function(){return r.setSortingDynamically()}),lD(126,`
          `),_p(127,`span`,31),lD(128,`
          `),vi(129,`span`),lD(130,` Set Sorting Dynamically `),Rc(),lD(131,`
        `),Rc(),lD(132,`
      `),Rc(),lD(133,`
    `),Rc(),lD(134,`
    `),vi(135,`div`,32),lD(136,`
      `),vi(137,`div`,12),lD(138,`
        `),vi(139,`div`,33),lD(140,`
          `),vi(141,`div`,34),lD(142,`
            `),vi(143,`label`,35),lD(144,`Group by field(s)`),Rc(),lD(145,`
            `),EI(146,te,11,3,null,null,r.selectTrackByFn,!0),Rc(),lD(148,`
        `),Rc(),lD(149,`
      `),Rc(),lD(150,`
    `),Rc(),lD(151,`
  `),Rc(),lD(152,`
  `),vi(153,`div`,36),lD(154,`
    `),_p(155,`hr`),lD(156,`
  `),Rc(),lD(157,`

  `),vi(158,`angular-slickgrid`,37),Ap(`onCellChange`,function(){return r.onCellChanged()})(`onAngularGridCreated`,function(m){return r.angularGridReady(m.detail)}),lD(159,`
  `),Rc(),lD(160,`
`),Rc(),lD(161,`
`)),l&2&&(dv(146),II(r.selectedGroupingFields()),dv(12),bp(`dataset`,r.dataset)(`columns`,r.columns)(`options`,r.gridOptions))},dependencies:[D1,In,Mn,En,Nn,it,Dn,An,qt,Ut],encapsulation:2})}}return d})();export{ce as Example18Component};