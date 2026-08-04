import{Dn as jp,Fn as mp,Gn as ou,Hn as oD,Kn as pE,P as Kv,Pt as Xv,Sn as iu,Wt as av,Z as NE,Zt as cD,b as Fo,dn as gi,g as Dp,gn as hE,h as DE,l as BI,n as $p,pn as gp,rr as uD,u as Bp,un as gE,yr as xc}from"./chunk-B0w5H0p9.js";import{E as LF,S as JN,a as AB,gt as q1,l as BB,v as HM,x as Iu,xt as te$1}from"./chunk-C7G4ZLh2.js";import{c as Cn,d as Ht,f as Mn,g as bn,l as En,m as Vn,s as An,v as qt,y as rt}from"./main-OKEWRQDY.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";import{t as mh}from"./chunk-DMTVog-l.js";import{t as c}from"./chunk-NBH_THzt2.js";function Z(m,b){if(m&1&&(oD(0,`
                    `),gi(1,`option`,40),oD(2),xc(),oD(3,`
                  `)),m&2){let t=b.$implicit;av(),gp(`ngValue`,t.id),av(),jp(t.name)}}function ee(m,b){if(m&1){let t=DE();oD(0,`
              `),gi(1,`div`,37),oD(2,`
                `),gi(3,`select`,38),$p(`ngModelChange`,function(n){let l=ou(t).$index,d=NE();return cD(d.selectedGroupingFields()[l],n)||(d.selectedGroupingFields()[l]=n),iu(n)}),Dp(`ngModelChange`,function(n){let l=ou(t).$index;return iu(NE().onDropdownChange(n,l))}),oD(4,`
                  `),mp(5,`option`,39),oD(6,`
                  `),hE(7,Z,4,2,null,null,pE),xc(),Kv(),oD(9,`
              `),xc(),oD(10,`
            `)}if(m&2){let t=b.$index,o=NE();av(3),gp(`name`,uD(`group-field-`,t)),Bp(`ngModel`,o.selectedGroupingFields()[t]),Xv(),av(4),gE(o.columns)}}var te=1e4;var ue=(()=>{class m{constructor(){this._darkMode=!1,this.durationOrderByCount=!1,this.hideSubTitle=!1,this.processing=!1,this.selectedGroupingFields=Fo([``,``,``]),this.excelExportService=new Ze,this.pdfExportService=new mh,this.textExportService=new c,this.loadData(te),this.defineGrid()}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`)?.classList.remove(`dark-mode`);let t=document.querySelector(`#demo-container`);t?.dataset&&(t.dataset.bsTheme=`light`)}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid,this.dataviewObj=t.dataView}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,columnGroup:`Common Factor`,hidden:!0,width:70,minWidth:50,cssClass:`cell-title`,filterable:!0,sortable:!0,grouping:{getter:`title`,formatter:t=>`Title: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new LF.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`,width:70,sortable:!0,filterable:!0,editor:{model:HM.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:!0},filter:{model:Iu.slider,operator:`>=`},type:`number`,groupTotalsFormatter:AB.sumTotals,grouping:{getter:`duration`,formatter:t=>`Duration: ${t.value} <span class="text-primary">(${t.count} items)</span>`,comparer:(t,o)=>this.durationOrderByCount?t.count-o.count:BB.numeric(t.value,o.value,te$1.asc),aggregators:[new LF.Sum(`duration`),new LF.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`,minWidth:60,sortable:!0,filterable:!0,filter:{model:Iu.compoundDate},formatter:JN.dateIso,type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`start`,formatter:t=>`Start: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new LF.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`,minWidth:60,sortable:!0,filterable:!0,filter:{model:Iu.compoundDate},formatter:JN.dateIso,type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`finish`,formatter:t=>`Finish: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new LF.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`cost`,name:`Cost`,field:`cost`,columnGroup:`Analysis`,width:90,sortable:!0,filterable:!0,filter:{model:Iu.compoundInput},formatter:JN.dollar,groupTotalsFormatter:AB.sumTotalsDollar,type:`number`,grouping:{getter:`cost`,formatter:t=>`Cost: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new LF.Sum(`cost`)],aggregateCollapsed:!0,collapsed:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,columnGroup:`Analysis`,minWidth:70,width:90,formatter:JN.percentCompleteBar,type:`number`,filterable:!0,filter:{model:Iu.compoundSlider},sortable:!0,groupTotalsFormatter:AB.avgTotalsPercentage,grouping:{getter:`percentComplete`,formatter:t=>`% Complete: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new LF.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`effortDriven`,name:`Effort-Driven`,field:`effortDriven`,columnGroup:`Analysis`,width:80,minWidth:20,maxWidth:100,cssClass:`cell-effort-driven`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:Iu.singleSelect},formatter:JN.checkmarkMaterial,grouping:{getter:`effortDriven`,formatter:t=>`Effort-Driven: ${t.value?`True`:`False`} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new LF.Sum(`duration`),new LF.Sum(`cost`)],collapsed:!1}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableDraggableGrouping:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:30,createTopHeaderPanel:!0,showTopHeaderPanel:!0,topHeaderPanelHeight:35,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,textExportOptions:{sanitizeDataExport:!0},gridMenu:{onCommand:(t,o)=>{o.command===`toggle-preheader`&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:`Drop a column header here to group by the column`,deleteIconCssClass:`mdi mdi-close color-danger`,sortAscIconCssClass:`mdi mdi-arrow-up`,sortDescIconCssClass:`mdi mdi-arrow-down`,onGroupChanged:(t,o)=>this.onGroupChanged(o),onExtensionRegistered:t=>this.draggableGroupingPlugin=t,initialGroupBy:[`duration`]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:!0,documentTitle:`Grouping Grid`}},this.loadData(500)}loadData(t){let o=[];for(let n=0;n<t;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),y=Math.floor(Math.random()*29),v=Math.round(Math.random()*100),k=Math.round(Math.random()*1e4)/100;o[n]={id:`id_`+n,num:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:v,percentCompleteNumber:v,start:new Date(l,d,y),finish:new Date(l,d+1,y),cost:n%33===0?-k:k,effortDriven:n%5===0}}this.dataset=o}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGrouping(t=!0){this.draggableGroupingPlugin?.clearDroppedGroups(),t&&this.gridObj?.invalidate()}clearGroupingSelects(){this.selectedGroupingFields.set([``,``,``])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`Export`})}exportToCsv(t=`csv`){this.textExportService.exportToFile({delimiter:t===`csv`?`,`:`	`,filename:`myExport`,format:t===`csv`?`csv`:`txt`})}groupByDurationOrderByCount(t=!1){if(this.durationOrderByCount=t,this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(`duration`);let o=t?[]:[{columnId:`duration`,sortAsc:!0}];this.gridObj?.setSortColumns(o),this.gridObj?.invalidate()}}groupByDurationEffortDriven(){this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups([`duration`,`effortDriven`]),this.gridObj?.invalidate())}groupByFieldName(t,o){if(this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups){let n=this.selectedGroupingFields().filter(l=>l!==``);this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(n),this.gridObj.invalidate()}}onGroupChanged(t){let o=t?.caller||[],n=t?.groupColumns||[];if(Array.isArray(n)&&n.length>0){let l=n.map(d=>d?.getter??``);for(;l.length<3;)l.push(``);this.selectedGroupingFields.set(l)}else n.length===0&&o===`remove-group`&&this.clearGroupingSelects()}onCellChanged(){this.angularGrid.dataView?.refresh()}onDropdownChange(t,o){let n=[...this.selectedGroupingFields()];n[o]=t,this.selectedGroupingFields.set(n),this.groupByFieldName(t,o)}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}selectTrackByFn(t,o){return t}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`>=`,searchTerms:[`55`]},{columnId:`cost`,operator:`<`,searchTerms:[`80`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`percentComplete`,direction:`ASC`}])}toggleDraggableGroupingRow(){this.clearGrouping(),this.gridObj.setPreHeaderPanelVisibility(!this.gridObj.getOptions().showPreHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){let t=document.querySelector(`.panel-wm-content`),o=document.querySelector(`#demo-container`),n=`light`;this._darkMode?(t?.classList.add(`dark-mode`),n=`dark`):(t?.classList.remove(`dark-mode`),n=`light`),o?.dataset&&(o.dataset.bsTheme=n)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList?.[t](`hidden`),this.angularGrid.resizerService?.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||m)}}static{this.ɵcmp=BI({type:m,selectors:[[`ng-component`]],decls:162,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example18.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators`,`target`,`_blank`],[1,`form-inline`],[1,`row`],[1,`col-sm-12`],[`data-test`,`add-5k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-50k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-sort-ascending`],[1,`row`,`mt-2`],[1,`form-row`],[1,`row`,`form-group`],[`for`,`field1`,1,`col-sm-3`,`mb-2`],[1,`row`,`mt-1`,`mb-1`],[`gridId`,`grid18`,3,`onCellChange`,`onAngularGridCreated`,`dataset`,`columns`,`options`],[1,`form-group`,`col-md-3`,`grouping-selects`],[1,`form-select`,3,`ngModelChange`,`name`,`ngModel`],[`value`,``],[3,`ngValue`]],template:function(o,n){o&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 18: Draggable Grouping & Aggregators
    `),gi(4,`button`,1),Dp(`click`,function(){return n.toggleSubTitle()}),oD(5,`
      `),mp(6,`span`,2),oD(7,`
    `),xc(),oD(8,`
    `),gi(9,`button`,3),Dp(`click`,function(){return n.toggleDarkMode()}),oD(10,`
      `),mp(11,`span`,4),oD(12,`
      `),gi(13,`span`),oD(14,`Toggle Dark Mode`),xc(),oD(15,`
    `),xc(),oD(16,`
    `),gi(17,`span`,5),oD(18,`
      `),gi(19,`a`,6),oD(20,`
        `),mp(21,`span`,7),oD(22,` code
      `),xc(),oD(23,`
    `),xc(),oD(24,`
  `),xc(),oD(25,`

  `),gi(26,`div`,8),oD(27,`
    `),gi(28,`ul`),oD(29,`
      `),gi(30,`li`),oD(31,`
        `),gi(32,`a`,9),oD(33,`Wiki docs`),xc(),oD(34,`
      `),xc(),oD(35,`
      `),gi(36,`li`),oD(37,`This example shows 3 ways of grouping`),xc(),oD(38,`
      `),gi(39,`ol`),oD(40,`
        `),gi(41,`li`),oD(42,`
          Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
          drop area).
        `),xc(),oD(43,`
        `),gi(44,`li`),oD(45,`Use buttons and defined functions to group by wichever field you want`),xc(),oD(46,`
        `),gi(47,`li`),oD(48,`Use the Select dropdown to group, the position of the Selects represent the grouping level`),xc(),oD(49,`
      `),xc(),oD(50,`
      `),gi(51,`li`),oD(52,`Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items`),xc(),oD(53,`
      `),gi(54,`li`),oD(55,`Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..`),xc(),oD(56,`
      `),gi(57,`li`),oD(58,`Use "Aggregators" and "GroupTotalFormatters" directly from Angular-Slickgrid`),xc(),oD(59,`
    `),xc(),oD(60,`
  `),xc(),oD(61,`

  `),gi(62,`form`,10),oD(63,`
    `),gi(64,`div`,11),oD(65,`
      `),gi(66,`div`,12),oD(67,`
        `),gi(68,`button`,13),Dp(`click`,function(){return n.loadData(5e3)}),oD(69,`5K rows`),xc(),oD(70,`
        `),gi(71,`button`,14),Dp(`click`,function(){return n.loadData(5e4)}),oD(72,`50K rows`),xc(),oD(73,`
        `),gi(74,`button`,15),Dp(`click`,function(){return n.clearGroupsAndSelects()}),oD(75,`
          `),mp(76,`i`,16),oD(77,` Clear grouping
        `),xc(),oD(78,`
        `),gi(79,`button`,17),Dp(`click`,function(){return n.collapseAllGroups()}),oD(80,`
          `),mp(81,`i`,18),oD(82,` Collapse all groups
        `),xc(),oD(83,`
        `),gi(84,`button`,19),Dp(`click`,function(){return n.expandAllGroups()}),oD(85,`
          `),mp(86,`i`,20),oD(87,` Expand all groups
        `),xc(),oD(88,`
        `),gi(89,`button`,21),Dp(`click`,function(){return n.toggleDraggableGroupingRow()}),oD(90,`
          Toggle Draggable Grouping Row
        `),xc(),oD(91,`
        `),gi(92,`button`,21),Dp(`click`,function(){return n.exportToExcel()}),oD(93,`
          `),mp(94,`i`,22),oD(95,` Export to Excel
        `),xc(),oD(96,`
        `),gi(97,`button`,21),Dp(`click`,function(){return n.exportToPdf()}),oD(98,`
          `),mp(99,`i`,23),oD(100,` Export to PDF
        `),xc(),oD(101,`
      `),xc(),oD(102,`
    `),xc(),oD(103,`
    `),gi(104,`div`,11),oD(105,`
      `),gi(106,`div`,12),oD(107,`
        `),gi(108,`button`,24),Dp(`click`,function(){return n.groupByDurationOrderByCount(!1)}),oD(109,`
          Group by duration & sort groups by value
        `),xc(),oD(110,`
        `),gi(111,`button`,25),Dp(`click`,function(){return n.groupByDurationOrderByCount(!0)}),oD(112,`
          Group by duration & sort groups by count
        `),xc(),oD(113,`
        `),gi(114,`button`,26),Dp(`click`,function(){return n.groupByDurationEffortDriven()}),oD(115,`
          Group by Duration & then Effort-Driven
        `),xc(),oD(116,`
        `),gi(117,`button`,27),Dp(`click`,function(){return n.setFiltersDynamically()}),oD(118,`
          `),mp(119,`span`,28),oD(120,`
          `),gi(121,`span`),oD(122,` Set Filters Dynamically `),xc(),oD(123,`
        `),xc(),oD(124,`
        `),gi(125,`button`,29),Dp(`click`,function(){return n.setSortingDynamically()}),oD(126,`
          `),mp(127,`span`,30),oD(128,`
          `),gi(129,`span`),oD(130,` Set Sorting Dynamically `),xc(),oD(131,`
        `),xc(),oD(132,`
      `),xc(),oD(133,`
    `),xc(),oD(134,`
    `),gi(135,`div`,31),oD(136,`
      `),gi(137,`div`,12),oD(138,`
        `),gi(139,`div`,32),oD(140,`
          `),gi(141,`div`,33),oD(142,`
            `),gi(143,`label`,34),oD(144,`Group by field(s)`),xc(),oD(145,`
            `),hE(146,ee,11,3,null,null,n.selectTrackByFn,!0),xc(),oD(148,`
        `),xc(),oD(149,`
      `),xc(),oD(150,`
    `),xc(),oD(151,`
  `),xc(),oD(152,`
  `),gi(153,`div`,35),oD(154,`
    `),mp(155,`hr`),oD(156,`
  `),xc(),oD(157,`

  `),gi(158,`angular-slickgrid`,36),Dp(`onCellChange`,function(){return n.onCellChanged()})(`onAngularGridCreated`,function(d){return n.angularGridReady(d.detail)}),oD(159,`
  `),xc(),oD(160,`
`),xc(),oD(161,`
`)),o&2&&(av(146),gE(n.selectedGroupingFields()),av(12),gp(`dataset`,n.dataset)(`columns`,n.columns)(`options`,n.gridOptions))},dependencies:[q1,En,bn,An,Mn,rt,Cn,Vn,qt,Ht],encapsulation:2})}}return m})();export{ue as Example18Component};