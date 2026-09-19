import{$t as au,F as Ip,In as mI,Lt as Wp,O as Gp,Ot as Up,Pn as ly,b as Ep,gn as gI,hr as xI,ir as tE,j as Ho,lr as vI,or as uD,pn as fD,pr as wI,pt as Rc,rn as bp,rr as su,t as $E,tr as sD,xr as yi,zt as Xy}from"./chunk-Rd4ToC_L.js";import{F as WA,Tt as te$1,W as _W,_ as LM,ct as ip,ht as nk,it as gR,s as GM}from"./chunk-DLuyVhQJ.js";import{_ as Vn,c as An,d as Fn,l as Dn,m as Mn,p as Ht,s as $t,u as En,y as rt}from"./main-CCTR2RMO.js";import{t as mh}from"./chunk-B-r9wchg.js";import{t as Ze}from"./chunk-C5onuIZj.js";import{t as c}from"./chunk-xMySoz5s.js";function Z(m,b){if(m&1&&(sD(0,`
                    `),yi(1,`option`,40),sD(2),Rc(),sD(3,`
                  `)),m&2){let t=b.$implicit;ly(),Ep(`ngValue`,t.id),ly(),Up(t.name)}}function ee(m,b){if(m&1){let t=wI();sD(0,`
              `),yi(1,`div`,37),sD(2,`
                `),yi(3,`select`,38),Wp(`ngModelChange`,function(n){let l=su(t).$index,d=xI();return uD(d.selectedGroupingFields()[l],n)||(d.selectedGroupingFields()[l]=n),au(n)}),bp(`ngModelChange`,function(n){let l=su(t).$index;return au(xI().onDropdownChange(n,l))}),sD(4,`
                  `),Ip(5,`option`,39),sD(6,`
                  `),mI(7,Z,4,2,null,null,gI),Rc(),Xy(),sD(9,`
              `),Rc(),sD(10,`
            `)}if(m&2){let t=b.$index,o=xI();ly(3),Ep(`name`,fD(`group-field-`,t)),Gp(`ngModel`,o.selectedGroupingFields()[t]),tE(),ly(4),vI(o.columns)}}var te=1e4;var ue=(()=>{class m{constructor(){this._darkMode=!1,this.durationOrderByCount=!1,this.hideSubTitle=!1,this.processing=!1,this.selectedGroupingFields=Ho([``,``,``]),this.excelExportService=new Ze,this.pdfExportService=new mh,this.textExportService=new c,this.loadData(te),this.defineGrid()}ngOnInit(){this.defineGrid()}ngOnDestroy(){document.querySelector(`.panel-wm-content`)?.classList.remove(`dark-mode`);let t=document.querySelector(`#demo-container`);t?.dataset&&(t.dataset.bsTheme=`light`)}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid,this.dataviewObj=t.dataView}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,columnGroup:`Common Factor`,hidden:!0,width:70,minWidth:50,cssClass:`cell-title`,filterable:!0,sortable:!0,grouping:{getter:`title`,formatter:t=>`Title: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`duration`,name:`Duration`,field:`duration`,columnGroup:`Common Factor`,width:70,sortable:!0,filterable:!0,editor:{model:WA.float,decimal:2,valueStep:1,maxValue:1e4,alwaysSaveOnEnterKey:!0},filter:{model:ip.slider,operator:`>=`},type:`number`,groupTotalsFormatter:LM.sumTotals,grouping:{getter:`duration`,formatter:t=>`Duration: ${t.value} <span class="text-primary">(${t.count} items)</span>`,comparer:(t,o)=>this.durationOrderByCount?t.count-o.count:GM.numeric(t.value,o.value,te$1.asc),aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`start`,name:`Start`,field:`start`,columnGroup:`Period`,minWidth:60,sortable:!0,filterable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso,type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`start`,formatter:t=>`Start: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`finish`,name:`Finish`,field:`finish`,columnGroup:`Period`,minWidth:60,sortable:!0,filterable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso,type:`dateUtc`,outputType:`dateIso`,exportWithFormatter:!0,grouping:{getter:`finish`,formatter:t=>`Finish: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1}},{id:`cost`,name:`Cost`,field:`cost`,columnGroup:`Analysis`,width:90,sortable:!0,filterable:!0,filter:{model:ip.compoundInput},formatter:nk.dollar,groupTotalsFormatter:LM.sumTotalsDollar,type:`number`,grouping:{getter:`cost`,formatter:t=>`Cost: ${t.value} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!0,collapsed:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,columnGroup:`Analysis`,minWidth:70,width:90,formatter:nk.percentCompleteBar,type:`number`,filterable:!0,filter:{model:ip.compoundSlider},sortable:!0,groupTotalsFormatter:LM.avgTotalsPercentage,grouping:{getter:`percentComplete`,formatter:t=>`% Complete: ${t.value}  <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`cost`)],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:`<i>Avg</i>: `}},{id:`effortDriven`,name:`Effort-Driven`,field:`effortDriven`,columnGroup:`Analysis`,width:80,minWidth:20,maxWidth:100,cssClass:`cell-effort-driven`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect},formatter:nk.checkmarkMaterial,grouping:{getter:`effortDriven`,formatter:t=>`Effort-Driven: ${t.value?`True`:`False`} <span class="text-primary">(${t.count} items)</span>`,aggregators:[new gR.Sum(`duration`),new gR.Sum(`cost`)],collapsed:!1}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableDraggableGrouping:!0,autoEdit:!0,autoCommitEdit:!0,editable:!0,enableCellNavigation:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:30,createTopHeaderPanel:!0,showTopHeaderPanel:!0,topHeaderPanelHeight:35,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,textExportOptions:{sanitizeDataExport:!0},gridMenu:{onCommand:(t,o)=>{o.command===`toggle-preheader`&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:`Drop a column header here to group by the column`,deleteIconCssClass:`mdi mdi-close color-danger`,sortAscIconCssClass:`mdi mdi-arrow-up`,sortDescIconCssClass:`mdi mdi-arrow-down`,onGroupChanged:(t,o)=>this.onGroupChanged(o),onExtensionRegistered:t=>this.draggableGroupingPlugin=t,initialGroupBy:[`duration`]},darkMode:this._darkMode,excelExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.pdfExportService,this.textExportService],pdfExportOptions:{repeatHeadersOnEachPage:!0,documentTitle:`Grouping Grid`}},this.loadData(500)}loadData(t){let o=[];for(let n=0;n<t;n++){let l=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),y=Math.floor(Math.random()*29),v=Math.round(Math.random()*100),k=Math.round(Math.random()*1e4)/100;o[n]={id:`id_`+n,num:n,title:`Task `+n,duration:Math.round(Math.random()*100)+``,percentComplete:v,percentCompleteNumber:v,start:new Date(l,d,y),finish:new Date(l,d+1,y),cost:n%33===0?-k:k,effortDriven:n%5===0}}this.dataset=o}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGrouping(t=!0){this.draggableGroupingPlugin?.clearDroppedGroups(),t&&this.gridObj?.invalidate()}clearGroupingSelects(){this.selectedGroupingFields.set([``,``,``])}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:`Export`,format:`xlsx`})}exportToPdf(){this.pdfExportService.exportToPdf({filename:`Export`})}exportToCsv(t=`csv`){this.textExportService.exportToFile({delimiter:t===`csv`?`,`:`	`,filename:`myExport`,format:t===`csv`?`csv`:`txt`})}groupByDurationOrderByCount(t=!1){if(this.durationOrderByCount=t,this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(`duration`);let o=t?[]:[{columnId:`duration`,sortAsc:!0}];this.gridObj?.setSortColumns(o),this.gridObj?.invalidate()}}groupByDurationEffortDriven(){this.clearGrouping(!1),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups([`duration`,`effortDriven`]),this.gridObj?.invalidate())}groupByFieldName(t,o){if(this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups){let n=this.selectedGroupingFields().filter(l=>l!==``);this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(n),this.gridObj.invalidate()}}onGroupChanged(t){let o=t?.caller||[],n=t?.groupColumns||[];if(Array.isArray(n)&&n.length>0){let l=n.map(d=>d?.getter??``);for(;l.length<3;)l.push(``);this.selectedGroupingFields.set(l)}else n.length===0&&o===`remove-group`&&this.clearGroupingSelects()}onCellChanged(){this.angularGrid.dataView?.refresh()}onDropdownChange(t,o){let n=[...this.selectedGroupingFields()];n[o]=t,this.selectedGroupingFields.set(n),this.groupByFieldName(t,o)}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}selectTrackByFn(t,o){return t}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`percentComplete`,operator:`>=`,searchTerms:[`55`]},{columnId:`cost`,operator:`<`,searchTerms:[`80`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`percentComplete`,direction:`ASC`}])}toggleDraggableGroupingRow(){this.clearGrouping(),this.gridObj.setPreHeaderPanelVisibility(!this.gridObj.getOptions().showPreHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){let t=document.querySelector(`.panel-wm-content`),o=document.querySelector(`#demo-container`),n=`light`;this._darkMode?(t?.classList.add(`dark-mode`),n=`dark`):(t?.classList.remove(`dark-mode`),n=`light`),o?.dataset&&(o.dataset.bsTheme=n)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList?.[t](`hidden`),this.angularGrid.resizerService?.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||m)}}static{this.ɵcmp=$E({type:m,selectors:[[`ng-component`]],decls:162,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-theme-light-dark`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example18.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grouping-and-aggregators`,`target`,`_blank`],[1,`form-inline`],[1,`row`],[1,`col-sm-12`],[`data-test`,`add-5k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`add-50k-rows-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-file-excel-outline`,`text-success`],[1,`mdi`,`mdi-file-pdf-outline`,`text-danger`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-sort-count-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`group-duration-effort-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-filter-outline`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-sort-ascending`],[1,`row`,`mt-2`],[1,`form-row`],[1,`row`,`form-group`],[`for`,`field1`,1,`col-sm-3`,`mb-2`],[1,`row`,`mt-1`,`mb-1`],[`gridId`,`grid18`,3,`onCellChange`,`onAngularGridCreated`,`dataset`,`columns`,`options`],[1,`form-group`,`col-md-3`,`grouping-selects`],[1,`form-select`,3,`ngModelChange`,`name`,`ngModel`],[`value`,``],[3,`ngValue`]],template:function(o,n){o&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 18: Draggable Grouping & Aggregators
    `),yi(4,`button`,1),bp(`click`,function(){return n.toggleSubTitle()}),sD(5,`
      `),Ip(6,`span`,2),sD(7,`
    `),Rc(),sD(8,`
    `),yi(9,`button`,3),bp(`click`,function(){return n.toggleDarkMode()}),sD(10,`
      `),Ip(11,`span`,4),sD(12,`
      `),yi(13,`span`),sD(14,`Toggle Dark Mode`),Rc(),sD(15,`
    `),Rc(),sD(16,`
    `),yi(17,`span`,5),sD(18,`
      `),yi(19,`a`,6),sD(20,`
        `),Ip(21,`span`,7),sD(22,` code
      `),Rc(),sD(23,`
    `),Rc(),sD(24,`
  `),Rc(),sD(25,`

  `),yi(26,`div`,8),sD(27,`
    `),yi(28,`ul`),sD(29,`
      `),yi(30,`li`),sD(31,`
        `),yi(32,`a`,9),sD(33,`Wiki docs`),Rc(),sD(34,`
      `),Rc(),sD(35,`
      `),yi(36,`li`),sD(37,`This example shows 3 ways of grouping`),Rc(),sD(38,`
      `),yi(39,`ol`),sD(40,`
        `),yi(41,`li`),sD(42,`
          Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the
          drop area).
        `),Rc(),sD(43,`
        `),yi(44,`li`),sD(45,`Use buttons and defined functions to group by wichever field you want`),Rc(),sD(46,`
        `),yi(47,`li`),sD(48,`Use the Select dropdown to group, the position of the Selects represent the grouping level`),Rc(),sD(49,`
      `),Rc(),sD(50,`
      `),yi(51,`li`),sD(52,`Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50'000 items`),Rc(),sD(53,`
      `),yi(54,`li`),sD(55,`Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..`),Rc(),sD(56,`
      `),yi(57,`li`),sD(58,`Use "Aggregators" and "GroupTotalFormatters" directly from Angular-Slickgrid`),Rc(),sD(59,`
    `),Rc(),sD(60,`
  `),Rc(),sD(61,`

  `),yi(62,`form`,10),sD(63,`
    `),yi(64,`div`,11),sD(65,`
      `),yi(66,`div`,12),sD(67,`
        `),yi(68,`button`,13),bp(`click`,function(){return n.loadData(5e3)}),sD(69,`5K rows`),Rc(),sD(70,`
        `),yi(71,`button`,14),bp(`click`,function(){return n.loadData(5e4)}),sD(72,`50K rows`),Rc(),sD(73,`
        `),yi(74,`button`,15),bp(`click`,function(){return n.clearGroupsAndSelects()}),sD(75,`
          `),Ip(76,`i`,16),sD(77,` Clear grouping
        `),Rc(),sD(78,`
        `),yi(79,`button`,17),bp(`click`,function(){return n.collapseAllGroups()}),sD(80,`
          `),Ip(81,`i`,18),sD(82,` Collapse all groups
        `),Rc(),sD(83,`
        `),yi(84,`button`,19),bp(`click`,function(){return n.expandAllGroups()}),sD(85,`
          `),Ip(86,`i`,20),sD(87,` Expand all groups
        `),Rc(),sD(88,`
        `),yi(89,`button`,21),bp(`click`,function(){return n.toggleDraggableGroupingRow()}),sD(90,`
          Toggle Draggable Grouping Row
        `),Rc(),sD(91,`
        `),yi(92,`button`,21),bp(`click`,function(){return n.exportToExcel()}),sD(93,`
          `),Ip(94,`i`,22),sD(95,` Export to Excel
        `),Rc(),sD(96,`
        `),yi(97,`button`,21),bp(`click`,function(){return n.exportToPdf()}),sD(98,`
          `),Ip(99,`i`,23),sD(100,` Export to PDF
        `),Rc(),sD(101,`
      `),Rc(),sD(102,`
    `),Rc(),sD(103,`
    `),yi(104,`div`,11),sD(105,`
      `),yi(106,`div`,12),sD(107,`
        `),yi(108,`button`,24),bp(`click`,function(){return n.groupByDurationOrderByCount(!1)}),sD(109,`
          Group by duration & sort groups by value
        `),Rc(),sD(110,`
        `),yi(111,`button`,25),bp(`click`,function(){return n.groupByDurationOrderByCount(!0)}),sD(112,`
          Group by duration & sort groups by count
        `),Rc(),sD(113,`
        `),yi(114,`button`,26),bp(`click`,function(){return n.groupByDurationEffortDriven()}),sD(115,`
          Group by Duration & then Effort-Driven
        `),Rc(),sD(116,`
        `),yi(117,`button`,27),bp(`click`,function(){return n.setFiltersDynamically()}),sD(118,`
          `),Ip(119,`span`,28),sD(120,`
          `),yi(121,`span`),sD(122,` Set Filters Dynamically `),Rc(),sD(123,`
        `),Rc(),sD(124,`
        `),yi(125,`button`,29),bp(`click`,function(){return n.setSortingDynamically()}),sD(126,`
          `),Ip(127,`span`,30),sD(128,`
          `),yi(129,`span`),sD(130,` Set Sorting Dynamically `),Rc(),sD(131,`
        `),Rc(),sD(132,`
      `),Rc(),sD(133,`
    `),Rc(),sD(134,`
    `),yi(135,`div`,31),sD(136,`
      `),yi(137,`div`,12),sD(138,`
        `),yi(139,`div`,32),sD(140,`
          `),yi(141,`div`,33),sD(142,`
            `),yi(143,`label`,34),sD(144,`Group by field(s)`),Rc(),sD(145,`
            `),mI(146,ee,11,3,null,null,n.selectTrackByFn,!0),Rc(),sD(148,`
        `),Rc(),sD(149,`
      `),Rc(),sD(150,`
    `),Rc(),sD(151,`
  `),Rc(),sD(152,`
  `),yi(153,`div`,35),sD(154,`
    `),Ip(155,`hr`),sD(156,`
  `),Rc(),sD(157,`

  `),yi(158,`angular-slickgrid`,36),bp(`onCellChange`,function(){return n.onCellChanged()})(`onAngularGridCreated`,function(d){return n.angularGridReady(d.detail)}),sD(159,`
  `),Rc(),sD(160,`
`),Rc(),sD(161,`
`)),o&2&&(ly(146),vI(n.selectedGroupingFields()),ly(12),Ep(`dataset`,n.dataset)(`columns`,n.columns)(`options`,n.gridOptions))},dependencies:[_W,Fn,An,Mn,En,rt,Vn,Dn,$t,Ht],encapsulation:2})}}return m})();export{ue as Example18Component};