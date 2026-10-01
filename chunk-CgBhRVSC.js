import{$ as Mp,Bn as lD,C as Ei,E as Fc,En as iD,K as Ky,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp,kr as zp,qt as Xy,yt as Qp}from"./chunk-CtIlL7jI.js";import{H as ZI,Ot as xz,P as U,St as ue,bt as rp,xt as uP}from"./chunk-C1NeHYCu.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-JBJUR4DQ.js";import{t as a}from"./chunk-CiyLb43o.js";var I=(()=>{class c{constructor(){this.frozenColumnCount=2,this.frozenRowCount=3,this.hideSubTitle=!1,this.isFrozenBottom=!1,this.slickEventHandler=new U}ngOnInit(){this.prepareDataGrid()}ngOnDestroy(){this.slickEventHandler.unsubscribeAll()}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,i=>this.colorizeHoveringRow(i,!0)),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,i=>this.colorizeHoveringRow(i,!1))}colorizeHoveringRow(o,i){let r=this.gridObj.getCellFromEvent(o),a=i?[r?.row??0]:[];this.gridObj.setSelectedRows(a),o.preventDefault()}prepareDataGrid(){this.columns=[{id:`sel`,name:`#`,field:`id`,minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:`title`,name:`Title`,field:`title`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,resizable:!1,minWidth:130,width:140,formatter:uP.percentCompleteBar,type:`number`,filterable:!0,filter:{model:rp.slider,operator:`>=`},sortable:!0},{id:`start`,name:`Start`,field:`start`,minWidth:100,width:120,filterable:!0,sortable:!0,formatter:uP.dateIso},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100,width:120,filterable:!0,sortable:!0,formatter:uP.dateIso},{id:`cost`,name:`Cost | Duration`,field:`cost`,formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:rp.compoundSlider},editor:{model:ZI.dualInput,params:{leftInput:{field:`cost`,type:`float`,decimal:2,minValue:0,maxValue:5e4,placeholder:`< 50K`,errorMessage:`Cost must be positive and below $50K.`},rightInput:{field:`duration`,type:`float`,minValue:0,maxValue:100,title:`make sure Duration is withing its range of 0 to 100`,errorMessage:`Duration must be between 0 and 100.`}}}},{id:`effortDriven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,width:120,formatter:uP.checkmarkMaterial,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:rp.singleSelect},sortable:!0},{id:`title1`,name:`Title 1`,field:`title1`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title2`,name:`Title 2`,field:`title2`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title3`,name:`Title 3`,field:`title3`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title4`,name:`Title 4`,field:`title4`,minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableCellNavigation:!0,editable:!0,autoEdit:!0,asyncEditorLoading:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}},this.dataset=this.getData()}getData(){let o=[];for(let i=0;i<500;i++)o[i]={id:i,title:`Task `+i,cost:i%33===0?null:Math.random()*1e4,duration:i%8?Math.round(Math.random()*100)+``:null,percentComplete:Math.round(Math.random()*100),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:i%5===0,title1:`Some Text ${Math.round(Math.random()*25)}`,title2:`Some Text ${Math.round(Math.random()*25)}`,title3:`Some Text ${Math.round(Math.random()*25)}`,title4:`Some Text ${Math.round(Math.random()*25)}`};return o}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(o,i,r,a,l){let D=this.isNullUndefinedOrEmpty(l.cost)?`n/a`:ue(l.cost,0,2,!1,`$`,``,`.`,`,`),C=`n/a`;return!this.isNullUndefinedOrEmpty(l.duration)&&l.duration>=0&&(C=`${l.duration} ${l.duration>1?`days`:`day`}`),`<b>${D}</b> | ${C}`}isNullUndefinedOrEmpty(o){return o===``||o===null||o===void 0}onValidationError(o,i){a(i.validationResults.msg,`danger`)}setFrozenColumns(o){this.gridObj.setOptions({frozenColumn:o}),this.gridOptions=this.gridObj.getOptions(),this.frozenColumnCount=o}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(i){return new(i||c)}}static{this.ɵcmp=BE({type:c,selectors:[[`ng-component`]],decls:108,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example20.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/frozen-columns-rows`,`target`,`_blank`],[1,`row`,`gx-2`,`mb-2`,`align-items-end`],[1,`col-2`],[`for`,`pinned-rows`],[`id`,`pinned-rows`,`type`,`number`,1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-auto`,`gr-2`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-1`],[`for`,`pinned-columns`],[`id`,`pinned-columns`,`type`,`number`,1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-auto`],[1,`row`],[1,`col-12`],[`data-test`,`remove-frozen-column-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-3frozen-columns`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-pin-outline`],[2,`margin-left`,`15px`],[1,`mdi`,`mdi-flip-vertical`],[2,`font-weight`,`bold`],[1,`row`,`mt-2`,`mb-2`],[`gridId`,`grid20`,`gridWidth`,`875`,3,`onValidationError`,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(i,r){i&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 20: Pinned (frozen) Columns/Rows
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return r.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (`),Ei(20,`a`,7),iD(21,`Wiki docs`),Oc(),iD(22,`)
    `),Ei(23,`ul`),iD(24,`
      `),Ei(25,`li`),iD(26,`Option to pin any number of columns (left only) or rows`),Oc(),iD(27,`
      `),Ei(28,`li`),iD(29,`Option to pin the rows at the bottom instead of the top (default)`),Oc(),iD(30,`
      `),Ei(31,`li`),iD(32,`You can also dynamically any of these options, through SlickGrid "setOptions()"`),Oc(),iD(33,`
      `),Ei(34,`li`),iD(35,`Possibility to change the styling of the line border between pinned columns/rows`),Oc(),iD(36,`
    `),Oc(),iD(37,`
  `),Oc(),iD(38,`

  `),Ei(39,`div`,8),iD(40,`
    `),Ei(41,`div`,9),iD(42,`
      `),Ei(43,`label`,10),iD(44,`Pinned Rows: `),Oc(),iD(45,`
      `),Ei(46,`input`,11),Ky(),Qp(`ngModelChange`,function(l){return lD(r.frozenRowCount,l)||(r.frozenRowCount=l),l}),Oc(),iD(47,`
    `),Oc(),iD(48,`
    `),Ei(49,`div`,12),iD(50,`
      `),Ei(51,`button`,13),Mp(`click`,function(){return r.changeFrozenRowCount()}),iD(52,`Set`),Oc(),iD(53,`
    `),Oc(),iD(54,`
    `),Tp(55,`div`,14),iD(56,`
    `),Ei(57,`div`,9),iD(58,`
      `),Ei(59,`label`,15),iD(60,`Pinned Columns: `),Oc(),iD(61,`
      `),Ei(62,`input`,16),Ky(),Qp(`ngModelChange`,function(l){return lD(r.frozenColumnCount,l)||(r.frozenColumnCount=l),l}),Oc(),iD(63,`
    `),Oc(),iD(64,`
    `),Ei(65,`div`,17),iD(66,`
      `),Ei(67,`button`,13),Mp(`click`,function(){return r.changeFrozenColumnCount()}),iD(68,`Set`),Oc(),iD(69,`
    `),Oc(),iD(70,`
  `),Oc(),iD(71,`

  `),Ei(72,`div`,18),iD(73,`
    `),Ei(74,`div`,19),iD(75,`
      `),Ei(76,`button`,20),Mp(`click`,function(){return r.setFrozenColumns(-1)}),iD(77,`
        `),Tp(78,`i`,21),iD(79,` Remove Frozen Columns
      `),Oc(),iD(80,`
      `),Ei(81,`button`,22),Mp(`click`,function(){return r.setFrozenColumns(2)}),iD(82,`
        `),Tp(83,`i`,23),iD(84,` Set 3 Frozen Columns
      `),Oc(),iD(85,`

      `),Ei(86,`span`,24),iD(87,`
        `),Ei(88,`button`,13),Mp(`click`,function(){return r.toggleFrozenBottomRows()}),iD(89,`
          `),Tp(90,`i`,25),iD(91,` Toggle Pinned Rows
        `),Oc(),iD(92,`
        `),Ei(93,`span`,26),iD(94),Oc(),iD(95,`
      `),Oc(),iD(96,`
    `),Oc(),iD(97,`
  `),Oc(),iD(98,`
  `),Ei(99,`div`,27),iD(100,`
    `),Tp(101,`hr`),iD(102,`
  `),Oc(),iD(103,`
  `),Ei(104,`angular-slickgrid`,28),Mp(`onValidationError`,function(l){return r.onValidationError(l.detail.eventData,l.detail.args)})(`onAngularGridCreated`,function(l){return r.angularGridReady(l.detail)}),iD(105,`
  `),Oc(),iD(106,`
`),Oc(),iD(107,`
`)),i&2&&(ay(46),zp(`ngModel`,r.frozenRowCount),Xy(),ay(16),zp(`ngModel`,r.frozenColumnCount),Xy(),ay(32),Fc(`: `,r.isFrozenBottom?`Bottom`:`Top`),ay(10),Dp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[xz,In,Ge,zt,Dn,qt],styles:[`.slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696!important}.slick-pane-bottom{border-top:1px solid #969696!important}
`],encapsulation:2})}}return c})();export{I as Example20Component};