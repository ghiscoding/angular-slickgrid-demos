import{En as jc,F as Ip,Lt as Wp,O as Gp,Pn as ly,b as Ep,ir as tE,or as uD,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,zt as Xy}from"./chunk-Rd4ToC_L.js";import{A as U,F as WA,W as _W,ct as ip,ht as nk,q as ce}from"./chunk-DLuyVhQJ.js";import{_ as Vn,b as zt,d as Fn,g as Te,s as $t}from"./main-CCTR2RMO.js";import{t as a}from"./chunk-CiyLb43o.js";var I=(()=>{class c{constructor(){this.frozenColumnCount=2,this.frozenRowCount=3,this.hideSubTitle=!1,this.isFrozenBottom=!1,this.slickEventHandler=new U}ngOnInit(){this.prepareDataGrid()}ngOnDestroy(){this.slickEventHandler.unsubscribeAll()}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,i=>this.colorizeHoveringRow(i,!0)),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,i=>this.colorizeHoveringRow(i,!1))}colorizeHoveringRow(o,i){let r=this.gridObj.getCellFromEvent(o),a=i?[r?.row??0]:[];this.gridObj.setSelectedRows(a),o.preventDefault()}prepareDataGrid(){this.columns=[{id:`sel`,name:`#`,field:`id`,minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:`title`,name:`Title`,field:`title`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,resizable:!1,minWidth:130,width:140,formatter:nk.percentCompleteBar,type:`number`,filterable:!0,filter:{model:ip.slider,operator:`>=`},sortable:!0},{id:`start`,name:`Start`,field:`start`,minWidth:100,width:120,filterable:!0,sortable:!0,formatter:nk.dateIso},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100,width:120,filterable:!0,sortable:!0,formatter:nk.dateIso},{id:`cost`,name:`Cost | Duration`,field:`cost`,formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:ip.compoundSlider},editor:{model:WA.dualInput,params:{leftInput:{field:`cost`,type:`float`,decimal:2,minValue:0,maxValue:5e4,placeholder:`< 50K`,errorMessage:`Cost must be positive and below $50K.`},rightInput:{field:`duration`,type:`float`,minValue:0,maxValue:100,title:`make sure Duration is withing its range of 0 to 100`,errorMessage:`Duration must be between 0 and 100.`}}}},{id:`effortDriven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,width:120,formatter:nk.checkmarkMaterial,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect},sortable:!0},{id:`title1`,name:`Title 1`,field:`title1`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title2`,name:`Title 2`,field:`title2`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title3`,name:`Title 3`,field:`title3`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title4`,name:`Title 4`,field:`title4`,minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableCellNavigation:!0,editable:!0,autoEdit:!0,asyncEditorLoading:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}},this.dataset=this.getData()}getData(){let o=[];for(let i=0;i<500;i++)o[i]={id:i,title:`Task `+i,cost:i%33===0?null:Math.random()*1e4,duration:i%8?Math.round(Math.random()*100)+``:null,percentComplete:Math.round(Math.random()*100),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:i%5===0,title1:`Some Text ${Math.round(Math.random()*25)}`,title2:`Some Text ${Math.round(Math.random()*25)}`,title3:`Some Text ${Math.round(Math.random()*25)}`,title4:`Some Text ${Math.round(Math.random()*25)}`};return o}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(o,i,r,a,l){let D=this.isNullUndefinedOrEmpty(l.cost)?`n/a`:ce(l.cost,0,2,!1,`$`,``,`.`,`,`),C=`n/a`;return!this.isNullUndefinedOrEmpty(l.duration)&&l.duration>=0&&(C=`${l.duration} ${l.duration>1?`days`:`day`}`),`<b>${D}</b> | ${C}`}isNullUndefinedOrEmpty(o){return o===``||o===null||o===void 0}onValidationError(o,i){a(i.validationResults.msg,`danger`)}setFrozenColumns(o){this.gridObj.setOptions({frozenColumn:o}),this.gridOptions=this.gridObj.getOptions(),this.frozenColumnCount=o}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(i){return new(i||c)}}static{this.ɵcmp=$E({type:c,selectors:[[`ng-component`]],decls:108,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example20.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/frozen-columns-rows`,`target`,`_blank`],[1,`row`,`gx-2`,`mb-2`,`align-items-end`],[1,`col-2`],[`for`,`pinned-rows`],[`id`,`pinned-rows`,`type`,`number`,1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-auto`,`gr-2`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-1`],[`for`,`pinned-columns`],[`id`,`pinned-columns`,`type`,`number`,1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-auto`],[1,`row`],[1,`col-12`],[`data-test`,`remove-frozen-column-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-3frozen-columns`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-pin-outline`],[2,`margin-left`,`15px`],[1,`mdi`,`mdi-flip-vertical`],[2,`font-weight`,`bold`],[1,`row`,`mt-2`,`mb-2`],[`gridId`,`grid20`,`gridWidth`,`875`,3,`onValidationError`,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(i,r){i&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 20: Pinned (frozen) Columns/Rows
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return r.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`)
    `),yi(23,`ul`),sD(24,`
      `),yi(25,`li`),sD(26,`Option to pin any number of columns (left only) or rows`),Rc(),sD(27,`
      `),yi(28,`li`),sD(29,`Option to pin the rows at the bottom instead of the top (default)`),Rc(),sD(30,`
      `),yi(31,`li`),sD(32,`You can also dynamically any of these options, through SlickGrid "setOptions()"`),Rc(),sD(33,`
      `),yi(34,`li`),sD(35,`Possibility to change the styling of the line border between pinned columns/rows`),Rc(),sD(36,`
    `),Rc(),sD(37,`
  `),Rc(),sD(38,`

  `),yi(39,`div`,8),sD(40,`
    `),yi(41,`div`,9),sD(42,`
      `),yi(43,`label`,10),sD(44,`Pinned Rows: `),Rc(),sD(45,`
      `),yi(46,`input`,11),Wp(`ngModelChange`,function(l){return uD(r.frozenRowCount,l)||(r.frozenRowCount=l),l}),Rc(),Xy(),sD(47,`
    `),Rc(),sD(48,`
    `),yi(49,`div`,12),sD(50,`
      `),yi(51,`button`,13),bp(`click`,function(){return r.changeFrozenRowCount()}),sD(52,`Set`),Rc(),sD(53,`
    `),Rc(),sD(54,`
    `),Ip(55,`div`,14),sD(56,`
    `),yi(57,`div`,9),sD(58,`
      `),yi(59,`label`,15),sD(60,`Pinned Columns: `),Rc(),sD(61,`
      `),yi(62,`input`,16),Wp(`ngModelChange`,function(l){return uD(r.frozenColumnCount,l)||(r.frozenColumnCount=l),l}),Rc(),Xy(),sD(63,`
    `),Rc(),sD(64,`
    `),yi(65,`div`,17),sD(66,`
      `),yi(67,`button`,13),bp(`click`,function(){return r.changeFrozenColumnCount()}),sD(68,`Set`),Rc(),sD(69,`
    `),Rc(),sD(70,`
  `),Rc(),sD(71,`

  `),yi(72,`div`,18),sD(73,`
    `),yi(74,`div`,19),sD(75,`
      `),yi(76,`button`,20),bp(`click`,function(){return r.setFrozenColumns(-1)}),sD(77,`
        `),Ip(78,`i`,21),sD(79,` Remove Frozen Columns
      `),Rc(),sD(80,`
      `),yi(81,`button`,22),bp(`click`,function(){return r.setFrozenColumns(2)}),sD(82,`
        `),Ip(83,`i`,23),sD(84,` Set 3 Frozen Columns
      `),Rc(),sD(85,`

      `),yi(86,`span`,24),sD(87,`
        `),yi(88,`button`,13),bp(`click`,function(){return r.toggleFrozenBottomRows()}),sD(89,`
          `),Ip(90,`i`,25),sD(91,` Toggle Pinned Rows
        `),Rc(),sD(92,`
        `),yi(93,`span`,26),sD(94),Rc(),sD(95,`
      `),Rc(),sD(96,`
    `),Rc(),sD(97,`
  `),Rc(),sD(98,`
  `),yi(99,`div`,27),sD(100,`
    `),Ip(101,`hr`),sD(102,`
  `),Rc(),sD(103,`
  `),yi(104,`angular-slickgrid`,28),bp(`onValidationError`,function(l){return r.onValidationError(l.detail.eventData,l.detail.args)})(`onAngularGridCreated`,function(l){return r.angularGridReady(l.detail)}),sD(105,`
  `),Rc(),sD(106,`
`),Rc(),sD(107,`
`)),i&2&&(ly(46),Gp(`ngModel`,r.frozenRowCount),tE(),ly(16),Gp(`ngModel`,r.frozenColumnCount),tE(),ly(32),jc(`: `,r.isFrozenBottom?`Bottom`:`Top`),ly(10),Ep(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[_W,Fn,Te,zt,Vn,$t],styles:[`.slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696!important}.slick-pane-bottom{border-top:1px solid #969696!important}
`],encapsulation:2})}}return c})();export{I as Example20Component};