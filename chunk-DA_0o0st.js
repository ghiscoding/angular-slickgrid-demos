import{t as vh}from"./chunk-BO2KAVk6.js";import{t as g}from"./chunk-BHSVMkUx.js";import{b as ot,c as En,d as In,h as Wt,m as Sn,p as Nn,s as An,u as Ht,v as bn}from"./main-KCATS47T.js";import{n as et}from"./chunk-BzRTDaIv.js";import{Ct as ku,P as OP,Rt as ye,V as R$,j as NP,mt as h0,rt as ZR,x as HO}from"./chunk-Lo0QQjTd.js";import{B as II,I as Ho,In as kI,K as Jp,Tn as hD,Wn as mD,X as Lc,Y as Kp,Yn as oE,dr as uD,en as _p,h as DI,in as bp,k as GE,o as Ap,qn as nE,tn as au,tt as MI,un as cu,wt as Qp,xn as fv,y as EI,yr as vi}from"./chunk-Cxd1Oem8.js";function ee(d,_){if(d&1&&(uD(0,`
                    `),vi(1,`option`,41),uD(2),Lc(),uD(3,`
                  `)),d&2){let t=_.$implicit;fv(),bp(`ngValue`,t.id),fv(),Qp(t.name)}}function te(d,_){if(d&1){let t=MI();uD(0,`
              `),vi(1,`div`,38),uD(2,`
                `),vi(3,`select`,39),nE(),Jp(`ngModelChange`,function(r){let o=au(t).$index,m=kI();return hD(m.selectedGroupingFields()[o],r)||(m.selectedGroupingFields()[o]=r),cu(r)}),Ap(`ngModelChange`,function(r){let o=au(t).$index,m=kI();return cu(m.onDropdownChange(r,o))}),uD(4,`
                  `),_p(5,`option`,40),uD(6,`
                  `),II(7,ee,4,2,null,null,EI),Lc(),uD(9,`
              `),Lc(),uD(10,`
            `)}if(d&2){let t=_.$index,l=kI();fv(3),bp(`name`,mD(`group-field-`,t)),Kp(`ngModel`,l.selectedGroupingFields()[t]),oE(),fv(4),DI(l.columns)}}var ne=1e4;var ce=(()=>{class d{constructor(){this._darkMode=!1,this.durationOrderByCount=!1,this.hideSubTitle=!1,this.processing=!1,this.selectedGroupingFields=Ho([``,``,``]),this.excelExportService=new et,this.pdfExportService=new vh,this.textExportService=new g,this.loadData(ne),this.defineGrid()}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`)?.classList.remove(`dark-mode`);let t=document.querySelector(`#demo-container`);t?.dataset&&(t.dataset.bsTheme=`light`)}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid,this.dataviewObj=t.dataView}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,columnGroup:`Common Factor`,hidden:!0,filterable:!0,sortable:!0,grouping:{getter:`title`,formatter:t=>`Title: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new h0.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`,sortable:!0,filterable:!0,editor:{model:HO.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:!0},filter:{model:ku.slider,operator:`>=`},type:`number`,groupTotalsFormatter:OP.sumTotals,grouping:{getter:`duration`,formatter:t=>`Duration: ${t.value} <span class="text-primary">(${t.count} items)</span>`,comparer:(t,l)=>this.durationOrderByCount?t.count-l.count:NP.numeric(t.value,l.value,ye.asc),aggregators:[new h0.Sum(`duration`),new h0.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`,sortable:!0,filterable:!0,filter:{model:ku.compoundDate},formatter:ZR.dateIso,editor:{model:HO.date},type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`start`,formatter:t=>`Start: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new h0.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`,sortable:!0,filterable:!0,filter:{model:ku.compoundDate},formatter:ZR.dateIso,editor:{model:HO.date},type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`finish`,formatter:t=>`Finish: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new h0.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`cost`,name:`Cost`,field:`cost`,columnGroup:`Analysis`,width:90,sortable:!0,filterable:!0,filter:{model:ku.compoundInput},formatter:ZR.dollar,groupTotalsFormatter:OP.sumTotalsDollar,type:`number`,grouping:{getter:`cost`,formatter:t=>`Cost: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new h0.Sum(`cost`)],aggregateCollapsed:!0,collapsed:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,columnGroup:`Analysis`,formatter:ZR.percentCompleteBar,type:`number`,filterable:!0,filter:{model:ku.compoundSlider},sortable:!0,groupTotalsFormatter:OP.avgTotalsPercentage,grouping:{getter:`percentComplete`,formatter:t=>`% Complete: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new h0.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`effortDriven`,name:`Effort-Driven`,field:`effortDriven`,columnGroup:`Analysis`,width:80,minWidth:20,maxWidth:100,cssClass:`cell-effort-driven`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ku.singleSelect},formatter:ZR.checkmarkMaterial,grouping:{getter:`effortDriven`,formatter:t=>`Effort-Driven: ${t.value?`True`:`False`} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new h0.Sum(`duration`),new h0.Sum(`cost`)],collapsed:!1}},{id:`action`,name:`Action`,field:`action`,width:90,maxWidth:90,excludeFromExport:!0,formatter:()=>`<div class="fake-hyperlink color-primary flex justify-center">Action <i class="mdi mdi-chevron-down"></i></div>`,cellMenu:{commandTitle:`Commands`,commandItems:[{command:`help`,title:`Help`}]}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableDraggableGrouping:!0,enableSelection:!0,enableCheckboxSelector:!0,selectionOptions:{selectActiveRow:!1},checkboxSelector:{hideInColumnTitleRow:!0,hideInFilterHeaderRow:!1},enableCellMenu:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:26,createTopHeaderPanel:!0,showTopHeaderPanel:!0,topHeaderPanelHeight:35,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,textExportOptions:{sanitizeDataExport:!0},gridMenu:{onCommand:(t,l)=>{l.command===`toggle-preheader`&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:`Drop a column header here to group by the column`,deleteIconCssClass:`mdi mdi-close color-danger`,sortAscIconCssClass:`mdi mdi-arrow-up`,sortDescIconCssClass:`mdi mdi-arrow-down`,onGroupChanged:(t,l)=>this.onGroupChanged(l),onExtensionRegistered:t=>this.draggableGroupingPlugin=t,initialGroupBy:[`duration`]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:!0,documentTitle:`Grouping Grid`}}}loadData(t){let l=[],r=(/* @__PURE__ */ new Date()).getFullYear();for(let o=0;o<t;o++){let m=r-3+Math.floor(Math.random()*10),v=Math.floor(Math.random()*10),k=Math.floor(Math.random()*29),G=new Date(m,v+1,k),w=Math.round(Math.random()*1e4)/100;l[o]={id:o,title:`Task `+o,duration:Math.round(Math.random()*100)+``,percentComplete:Math.round(Math.random()*100),start:new Date(r-2,v,k),finish:G</* @__PURE__ */ new Date?``:G,cost:o%33===0?-w:w,effortDriven:o%5===0}}this.dataset=l}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGrouping(t=!0){this.draggableGroupingPlugin?.clearDroppedGroups(),t&&this.gridObj?.invalidate()}clearGroupingSelects(){this.selectedGroupingFields.set([``,``,``])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`Export`})}exportToCsv(t=`csv`){this.textExportService.exportToFile({delimiter:t===`csv`?`,`:`	`,filename:`myExport`,format:t===`csv`?`csv`:`txt`})}groupByDurationOrderByCount(t=!1){if(this.durationOrderByCount=t,this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(`duration`);let l=t?[]:[{columnId:`duration`,sortAsc:!0}];this.gridObj?.setSortColumns(l),this.gridObj?.invalidate()}}groupByDurationEffortDriven(){this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups([`duration`,`effortDriven`]),this.gridObj?.invalidate())}groupByFieldName(t,l){if(this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups){let r=this.selectedGroupingFields().filter(o=>o!==``);this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(r),this.gridObj.invalidate()}}onGroupChanged(t){let l=t?.caller||[],r=t?.groupColumns||[];if(Array.isArray(r)&&r.length>0){let o=r.map(m=>m?.getter??``);for(;o.length<3;)o.push(``);this.selectedGroupingFields.set(o)}else r.length===0&&l===`remove-group`&&this.clearGroupingSelects()}onCellChanged(){this.angularGrid.dataView?.refresh()}onDropdownChange(t,l){let r=[...this.selectedGroupingFields()];r[l]=t,this.selectedGroupingFields.set(r),this.groupByFieldName(t,l)}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}selectTrackByFn(t,l){return t}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`>=`,searchTerms:[`55`]},{columnId:`cost`,operator:`<`,searchTerms:[`80`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`percentComplete`,direction:`ASC`}])}toggleDraggableGroupingRow(){this.clearGrouping(),this.gridObj.setTopHeaderPanelVisibility(!this.gridObj.getOptions().showTopHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){let t=document.querySelector(`.panel-wm-content`),l=document.querySelector(`#demo-container`),r=`light`;this._darkMode?(t?.classList.add(`dark-mode`),r=`dark`):(t?.classList.remove(`dark-mode`),r=`light`),l?.dataset&&(l.dataset.bsTheme=r)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList?.[t](`hidden`),this.angularGrid.resizerService?.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||d)}}static{this.ɵcmp=GE({type:d,selectors:[[`ng-component`]],decls:162,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example18.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators`,`target`,`_blank`],[1,`form-inline`],[1,`row`],[1,`col-sm-12`],[`data-test`,`add-5k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-500k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`data-test`,`toggle-draggable-grouping-row`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-sort-ascending`],[1,`row`,`mt-2`],[1,`form-row`],[1,`row`,`form-group`],[`for`,`field1`,1,`col-sm-3`,`mb-2`],[1,`row`,`mt-1`,`mb-1`],[`gridId`,`grid18`,3,`onCellChange`,`onAngularGridCreated`,`dataset`,`columns`,`options`],[1,`form-group`,`col-md-3`,`grouping-selects`],[1,`form-select`,3,`ngModelChange`,`name`,`ngModel`],[`value`,``],[3,`ngValue`]],template:function(l,r){l&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 18: Draggable Grouping & Aggregators
    `),vi(4,`button`,1),Ap(`click`,function(){return r.toggleSubTitle()}),uD(5,`
      `),_p(6,`span`,2),uD(7,`
    `),Lc(),uD(8,`
    `),vi(9,`button`,3),Ap(`click`,function(){return r.toggleDarkMode()}),uD(10,`
      `),_p(11,`span`,4),uD(12,`
      `),vi(13,`span`),uD(14,`Toggle Dark Mode`),Lc(),uD(15,`
    `),Lc(),uD(16,`
    `),vi(17,`span`,5),uD(18,`
      `),vi(19,`a`,6),uD(20,`
        `),_p(21,`span`,7),uD(22,` code
      `),Lc(),uD(23,`
    `),Lc(),uD(24,`
  `),Lc(),uD(25,`

  `),vi(26,`div`,8),uD(27,`
    `),vi(28,`ul`),uD(29,`
      `),vi(30,`li`),uD(31,`
        `),vi(32,`a`,9),uD(33,`Wiki docs`),Lc(),uD(34,`
      `),Lc(),uD(35,`
      `),vi(36,`li`),uD(37,`This example shows 3 ways of grouping`),Lc(),uD(38,`
      `),vi(39,`ol`),uD(40,`
        `),vi(41,`li`),uD(42,`
          Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
          drop area).
        `),Lc(),uD(43,`
        `),vi(44,`li`),uD(45,`Use buttons and defined functions to group by wichever field you want`),Lc(),uD(46,`
        `),vi(47,`li`),uD(48,`Use the Select dropdown to group, the position of the Selects represent the grouping level`),Lc(),uD(49,`
      `),Lc(),uD(50,`
      `),vi(51,`li`),uD(52,`Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items`),Lc(),uD(53,`
      `),vi(54,`li`),uD(55,`Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..`),Lc(),uD(56,`
      `),vi(57,`li`),uD(58,`Use "Aggregators" and "GroupTotalFormatters" directly from Angular-Slickgrid`),Lc(),uD(59,`
    `),Lc(),uD(60,`
  `),Lc(),uD(61,`

  `),vi(62,`form`,10),uD(63,`
    `),vi(64,`div`,11),uD(65,`
      `),vi(66,`div`,12),uD(67,`
        `),vi(68,`button`,13),Ap(`click`,function(){return r.loadData(5e3)}),uD(69,`5K rows`),Lc(),uD(70,`
        `),vi(71,`button`,14),Ap(`click`,function(){return r.loadData(5e5)}),uD(72,`
          500K rows
        `),Lc(),uD(73,`
        `),vi(74,`button`,15),Ap(`click`,function(){return r.clearGroupsAndSelects()}),uD(75,`
          `),_p(76,`i`,16),uD(77,` Clear grouping
        `),Lc(),uD(78,`
        `),vi(79,`button`,17),Ap(`click`,function(){return r.collapseAllGroups()}),uD(80,`
          `),_p(81,`i`,18),uD(82,` Collapse all groups
        `),Lc(),uD(83,`
        `),vi(84,`button`,19),Ap(`click`,function(){return r.expandAllGroups()}),uD(85,`
          `),_p(86,`i`,20),uD(87,` Expand all groups
        `),Lc(),uD(88,`
        `),vi(89,`button`,21),Ap(`click`,function(){return r.toggleDraggableGroupingRow()}),uD(90,`
          Toggle Draggable Grouping Row
        `),Lc(),uD(91,`
        `),vi(92,`button`,22),Ap(`click`,function(){return r.exportToExcel()}),uD(93,`
          `),_p(94,`i`,23),uD(95,` Export to Excel
        `),Lc(),uD(96,`
        `),vi(97,`button`,22),Ap(`click`,function(){return r.exportToPdf()}),uD(98,`
          `),_p(99,`i`,24),uD(100,` Export to PDF
        `),Lc(),uD(101,`
      `),Lc(),uD(102,`
    `),Lc(),uD(103,`
    `),vi(104,`div`,11),uD(105,`
      `),vi(106,`div`,12),uD(107,`
        `),vi(108,`button`,25),Ap(`click`,function(){return r.groupByDurationOrderByCount(!1)}),uD(109,`
          Group by duration & sort groups by value
        `),Lc(),uD(110,`
        `),vi(111,`button`,26),Ap(`click`,function(){return r.groupByDurationOrderByCount(!0)}),uD(112,`
          Group by duration & sort groups by count
        `),Lc(),uD(113,`
        `),vi(114,`button`,27),Ap(`click`,function(){return r.groupByDurationEffortDriven()}),uD(115,`
          Group by Duration & then Effort-Driven
        `),Lc(),uD(116,`
        `),vi(117,`button`,28),Ap(`click`,function(){return r.setFiltersDynamically()}),uD(118,`
          `),_p(119,`span`,29),uD(120,`
          `),vi(121,`span`),uD(122,` Set Filters Dynamically `),Lc(),uD(123,`
        `),Lc(),uD(124,`
        `),vi(125,`button`,30),Ap(`click`,function(){return r.setSortingDynamically()}),uD(126,`
          `),_p(127,`span`,31),uD(128,`
          `),vi(129,`span`),uD(130,` Set Sorting Dynamically `),Lc(),uD(131,`
        `),Lc(),uD(132,`
      `),Lc(),uD(133,`
    `),Lc(),uD(134,`
    `),vi(135,`div`,32),uD(136,`
      `),vi(137,`div`,12),uD(138,`
        `),vi(139,`div`,33),uD(140,`
          `),vi(141,`div`,34),uD(142,`
            `),vi(143,`label`,35),uD(144,`Group by field(s)`),Lc(),uD(145,`
            `),II(146,te,11,3,null,null,r.selectTrackByFn,!0),Lc(),uD(148,`
        `),Lc(),uD(149,`
      `),Lc(),uD(150,`
    `),Lc(),uD(151,`
  `),Lc(),uD(152,`
  `),vi(153,`div`,36),uD(154,`
    `),_p(155,`hr`),uD(156,`
  `),Lc(),uD(157,`

  `),vi(158,`angular-slickgrid`,37),Ap(`onCellChange`,function(){return r.onCellChanged()})(`onAngularGridCreated`,function(m){return r.angularGridReady(m.detail)}),uD(159,`
  `),Lc(),uD(160,`
`),Lc(),uD(161,`
`)),l&2&&(fv(146),DI(r.selectedGroupingFields()),fv(12),bp(`dataset`,r.dataset)(`columns`,r.columns)(`options`,r.gridOptions))},dependencies:[R$,Sn,En,Nn,In,ot,An,bn,Wt,Ht],encapsulation:2})}}return d})();export{ce as Example18Component};