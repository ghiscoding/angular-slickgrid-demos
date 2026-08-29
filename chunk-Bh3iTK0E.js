import{Dt as UE,En as iD,H as Jy,Kn as mp,Nn as jo,Nt as Vp,Rn as lD,Tt as Tp,Un as mI,Wn as mi,bn as gI,bt as SI,hr as vp,kn as iu,kt as Up,ln as cy,o as Ac,or as su,pn as eE,r as $p,un as dD,wn as hI,wt as TI}from"./chunk-06EGdSfW.js";import{H as _W,N as WA,_ as LM,c as GM,mt as nk,rt as gR,st as ip,wt as te$1}from"./chunk-CAMk6vEo.js";import{_ as Vn,c as An,d as Fn,l as Dn,m as Mn,p as Ht,s as $t,u as En,y as rt}from"./main-T6P2BZBW.js";import{t as Ze}from"./chunk-CVoct-s8.js";import{t as c}from"./chunk-sAUrlGt6.js";import{t as mh}from"./chunk-CKr-yhUg.js";function Z(m,b){if(m&1&&(iD(0,`
                    `),mi(1,`option`,40),iD(2),Ac(),iD(3,`
                  `)),m&2){let t=b.$implicit;cy(),mp(`ngValue`,t.id),cy(),Vp(t.name)}}function ee(m,b){if(m&1){let t=TI();iD(0,`
              `),mi(1,`div`,37),iD(2,`
                `),mi(3,`select`,38),$p(`ngModelChange`,function(n){let l=iu(t).$index,d=SI();return lD(d.selectedGroupingFields()[l],n)||(d.selectedGroupingFields()[l]=n),su(n)}),Tp(`ngModelChange`,function(n){let l=iu(t).$index;return su(SI().onDropdownChange(n,l))}),iD(4,`
                  `),vp(5,`option`,39),iD(6,`
                  `),gI(7,Z,4,2,null,null,hI),Ac(),Jy(),iD(9,`
              `),Ac(),iD(10,`
            `)}if(m&2){let t=b.$index,o=SI();cy(3),mp(`name`,dD(`group-field-`,t)),Up(`ngModel`,o.selectedGroupingFields()[t]),eE(),cy(4),mI(o.columns)}}var te=1e4;var ue=(()=>{class m{constructor(){this._darkMode=!1,this.durationOrderByCount=!1,this.hideSubTitle=!1,this.processing=!1,this.selectedGroupingFields=jo([``,``,``]),this.excelExportService=new Ze,this.pdfExportService=new mh,this.textExportService=new c,this.loadData(te),this.defineGrid()}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`)?.classList.remove(`dark-mode`);let t=document.querySelector(`#demo-container`);t?.dataset&&(t.dataset.bsTheme=`light`)}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid,this.dataviewObj=t.dataView}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,columnGroup:`Common Factor`,hidden:!0,width:70,minWidth:50,cssClass:`cell-title`,filterable:!0,sortable:!0,grouping:{getter:`title`,formatter:t=>`Title: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`,width:70,sortable:!0,filterable:!0,editor:{model:WA.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:!0},filter:{model:ip.slider,operator:`>=`},type:`number`,groupTotalsFormatter:LM.sumTotals,grouping:{getter:`duration`,formatter:t=>`Duration: ${t.value} <span class="text-primary">(${t.count} items)</span>`,comparer:(t,o)=>this.durationOrderByCount?t.count-o.count:GM.numeric(t.value,o.value,te$1.asc),aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`,minWidth:60,sortable:!0,filterable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso,type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`start`,formatter:t=>`Start: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`,minWidth:60,sortable:!0,filterable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso,type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`finish`,formatter:t=>`Finish: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`cost`,name:`Cost`,field:`cost`,columnGroup:`Analysis`,width:90,sortable:!0,filterable:!0,filter:{model:ip.compoundInput},formatter:nk.dollar,groupTotalsFormatter:LM.sumTotalsDollar,type:`number`,grouping:{getter:`cost`,formatter:t=>`Cost: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!0,collapsed:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,columnGroup:`Analysis`,minWidth:70,width:90,formatter:nk.percentCompleteBar,type:`number`,filterable:!0,filter:{model:ip.compoundSlider},sortable:!0,groupTotalsFormatter:LM.avgTotalsPercentage,grouping:{getter:`percentComplete`,formatter:t=>`% Complete: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`effortDriven`,name:`Effort-Driven`,field:`effortDriven`,columnGroup:`Analysis`,width:80,minWidth:20,maxWidth:100,cssClass:`cell-effort-driven`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect},formatter:nk.checkmarkMaterial,grouping:{getter:`effortDriven`,formatter:t=>`Effort-Driven: ${t.value?`True`:`False`} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],collapsed:!1}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableDraggableGrouping:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:30,createTopHeaderPanel:!0,showTopHeaderPanel:!0,topHeaderPanelHeight:35,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,textExportOptions:{sanitizeDataExport:!0},gridMenu:{onCommand:(t,o)=>{o.command===`toggle-preheader`&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:`Drop a column header here to group by the column`,deleteIconCssClass:`mdi mdi-close color-danger`,sortAscIconCssClass:`mdi mdi-arrow-up`,sortDescIconCssClass:`mdi mdi-arrow-down`,onGroupChanged:(t,o)=>this.onGroupChanged(o),onExtensionRegistered:t=>this.draggableGroupingPlugin=t,initialGroupBy:[`duration`]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:!0,documentTitle:`Grouping Grid`}},this.loadData(500)}loadData(t){let o=[];for(let n=0;n<t;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),y=Math.floor(Math.random()*29),v=Math.round(Math.random()*100),k=Math.round(Math.random()*1e4)/100;o[n]={id:`id_`+n,num:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:v,percentCompleteNumber:v,start:new Date(l,d,y),finish:new Date(l,d+1,y),cost:n%33===0?-k:k,effortDriven:n%5===0}}this.dataset=o}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGrouping(t=!0){this.draggableGroupingPlugin?.clearDroppedGroups(),t&&this.gridObj?.invalidate()}clearGroupingSelects(){this.selectedGroupingFields.set([``,``,``])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`Export`})}exportToCsv(t=`csv`){this.textExportService.exportToFile({delimiter:t===`csv`?`,`:`	`,filename:`myExport`,format:t===`csv`?`csv`:`txt`})}groupByDurationOrderByCount(t=!1){if(this.durationOrderByCount=t,this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(`duration`);let o=t?[]:[{columnId:`duration`,sortAsc:!0}];this.gridObj?.setSortColumns(o),this.gridObj?.invalidate()}}groupByDurationEffortDriven(){this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups([`duration`,`effortDriven`]),this.gridObj?.invalidate())}groupByFieldName(t,o){if(this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups){let n=this.selectedGroupingFields().filter(l=>l!==``);this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(n),this.gridObj.invalidate()}}onGroupChanged(t){let o=t?.caller||[],n=t?.groupColumns||[];if(Array.isArray(n)&&n.length>0){let l=n.map(d=>d?.getter??``);for(;l.length<3;)l.push(``);this.selectedGroupingFields.set(l)}else n.length===0&&o===`remove-group`&&this.clearGroupingSelects()}onCellChanged(){this.angularGrid.dataView?.refresh()}onDropdownChange(t,o){let n=[...this.selectedGroupingFields()];n[o]=t,this.selectedGroupingFields.set(n),this.groupByFieldName(t,o)}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}selectTrackByFn(t,o){return t}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`>=`,searchTerms:[`55`]},{columnId:`cost`,operator:`<`,searchTerms:[`80`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`percentComplete`,direction:`ASC`}])}toggleDraggableGroupingRow(){this.clearGrouping(),this.gridObj.setPreHeaderPanelVisibility(!this.gridObj.getOptions().showPreHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){let t=document.querySelector(`.panel-wm-content`),o=document.querySelector(`#demo-container`),n=`light`;this._darkMode?(t?.classList.add(`dark-mode`),n=`dark`):(t?.classList.remove(`dark-mode`),n=`light`),o?.dataset&&(o.dataset.bsTheme=n)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList?.[t](`hidden`),this.angularGrid.resizerService?.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||m)}}static{this.ɵcmp=UE({type:m,selectors:[[`ng-component`]],decls:162,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example18.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators`,`target`,`_blank`],[1,`form-inline`],[1,`row`],[1,`col-sm-12`],[`data-test`,`add-5k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-50k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-sort-ascending`],[1,`row`,`mt-2`],[1,`form-row`],[1,`row`,`form-group`],[`for`,`field1`,1,`col-sm-3`,`mb-2`],[1,`row`,`mt-1`,`mb-1`],[`gridId`,`grid18`,3,`onCellChange`,`onAngularGridCreated`,`dataset`,`columns`,`options`],[1,`form-group`,`col-md-3`,`grouping-selects`],[1,`form-select`,3,`ngModelChange`,`name`,`ngModel`],[`value`,``],[3,`ngValue`]],template:function(o,n){o&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 18: Draggable Grouping & Aggregators
    `),mi(4,`button`,1),Tp(`click`,function(){return n.toggleSubTitle()}),iD(5,`
      `),vp(6,`span`,2),iD(7,`
    `),Ac(),iD(8,`
    `),mi(9,`button`,3),Tp(`click`,function(){return n.toggleDarkMode()}),iD(10,`
      `),vp(11,`span`,4),iD(12,`
      `),mi(13,`span`),iD(14,`Toggle Dark Mode`),Ac(),iD(15,`
    `),Ac(),iD(16,`
    `),mi(17,`span`,5),iD(18,`
      `),mi(19,`a`,6),iD(20,`
        `),vp(21,`span`,7),iD(22,` code
      `),Ac(),iD(23,`
    `),Ac(),iD(24,`
  `),Ac(),iD(25,`

  `),mi(26,`div`,8),iD(27,`
    `),mi(28,`ul`),iD(29,`
      `),mi(30,`li`),iD(31,`
        `),mi(32,`a`,9),iD(33,`Wiki docs`),Ac(),iD(34,`
      `),Ac(),iD(35,`
      `),mi(36,`li`),iD(37,`This example shows 3 ways of grouping`),Ac(),iD(38,`
      `),mi(39,`ol`),iD(40,`
        `),mi(41,`li`),iD(42,`
          Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
          drop area).
        `),Ac(),iD(43,`
        `),mi(44,`li`),iD(45,`Use buttons and defined functions to group by wichever field you want`),Ac(),iD(46,`
        `),mi(47,`li`),iD(48,`Use the Select dropdown to group, the position of the Selects represent the grouping level`),Ac(),iD(49,`
      `),Ac(),iD(50,`
      `),mi(51,`li`),iD(52,`Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items`),Ac(),iD(53,`
      `),mi(54,`li`),iD(55,`Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..`),Ac(),iD(56,`
      `),mi(57,`li`),iD(58,`Use "Aggregators" and "GroupTotalFormatters" directly from Angular-Slickgrid`),Ac(),iD(59,`
    `),Ac(),iD(60,`
  `),Ac(),iD(61,`

  `),mi(62,`form`,10),iD(63,`
    `),mi(64,`div`,11),iD(65,`
      `),mi(66,`div`,12),iD(67,`
        `),mi(68,`button`,13),Tp(`click`,function(){return n.loadData(5e3)}),iD(69,`5K rows`),Ac(),iD(70,`
        `),mi(71,`button`,14),Tp(`click`,function(){return n.loadData(5e4)}),iD(72,`50K rows`),Ac(),iD(73,`
        `),mi(74,`button`,15),Tp(`click`,function(){return n.clearGroupsAndSelects()}),iD(75,`
          `),vp(76,`i`,16),iD(77,` Clear grouping
        `),Ac(),iD(78,`
        `),mi(79,`button`,17),Tp(`click`,function(){return n.collapseAllGroups()}),iD(80,`
          `),vp(81,`i`,18),iD(82,` Collapse all groups
        `),Ac(),iD(83,`
        `),mi(84,`button`,19),Tp(`click`,function(){return n.expandAllGroups()}),iD(85,`
          `),vp(86,`i`,20),iD(87,` Expand all groups
        `),Ac(),iD(88,`
        `),mi(89,`button`,21),Tp(`click`,function(){return n.toggleDraggableGroupingRow()}),iD(90,`
          Toggle Draggable Grouping Row
        `),Ac(),iD(91,`
        `),mi(92,`button`,21),Tp(`click`,function(){return n.exportToExcel()}),iD(93,`
          `),vp(94,`i`,22),iD(95,` Export to Excel
        `),Ac(),iD(96,`
        `),mi(97,`button`,21),Tp(`click`,function(){return n.exportToPdf()}),iD(98,`
          `),vp(99,`i`,23),iD(100,` Export to PDF
        `),Ac(),iD(101,`
      `),Ac(),iD(102,`
    `),Ac(),iD(103,`
    `),mi(104,`div`,11),iD(105,`
      `),mi(106,`div`,12),iD(107,`
        `),mi(108,`button`,24),Tp(`click`,function(){return n.groupByDurationOrderByCount(!1)}),iD(109,`
          Group by duration & sort groups by value
        `),Ac(),iD(110,`
        `),mi(111,`button`,25),Tp(`click`,function(){return n.groupByDurationOrderByCount(!0)}),iD(112,`
          Group by duration & sort groups by count
        `),Ac(),iD(113,`
        `),mi(114,`button`,26),Tp(`click`,function(){return n.groupByDurationEffortDriven()}),iD(115,`
          Group by Duration & then Effort-Driven
        `),Ac(),iD(116,`
        `),mi(117,`button`,27),Tp(`click`,function(){return n.setFiltersDynamically()}),iD(118,`
          `),vp(119,`span`,28),iD(120,`
          `),mi(121,`span`),iD(122,` Set Filters Dynamically `),Ac(),iD(123,`
        `),Ac(),iD(124,`
        `),mi(125,`button`,29),Tp(`click`,function(){return n.setSortingDynamically()}),iD(126,`
          `),vp(127,`span`,30),iD(128,`
          `),mi(129,`span`),iD(130,` Set Sorting Dynamically `),Ac(),iD(131,`
        `),Ac(),iD(132,`
      `),Ac(),iD(133,`
    `),Ac(),iD(134,`
    `),mi(135,`div`,31),iD(136,`
      `),mi(137,`div`,12),iD(138,`
        `),mi(139,`div`,32),iD(140,`
          `),mi(141,`div`,33),iD(142,`
            `),mi(143,`label`,34),iD(144,`Group by field(s)`),Ac(),iD(145,`
            `),gI(146,ee,11,3,null,null,n.selectTrackByFn,!0),Ac(),iD(148,`
        `),Ac(),iD(149,`
      `),Ac(),iD(150,`
    `),Ac(),iD(151,`
  `),Ac(),iD(152,`
  `),mi(153,`div`,35),iD(154,`
    `),vp(155,`hr`),iD(156,`
  `),Ac(),iD(157,`

  `),mi(158,`angular-slickgrid`,36),Tp(`onCellChange`,function(){return n.onCellChanged()})(`onAngularGridCreated`,function(d){return n.angularGridReady(d.detail)}),iD(159,`
  `),Ac(),iD(160,`
`),Ac(),iD(161,`
`)),o&2&&(cy(146),mI(n.selectedGroupingFields()),cy(12),mp(`dataset`,n.dataset)(`columns`,n.columns)(`options`,n.gridOptions))},dependencies:[_W,Fn,An,Mn,En,rt,Vn,Dn,$t,Ht],encapsulation:2})}}return m})();export{ue as Example18Component};