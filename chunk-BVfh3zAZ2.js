import{Fn as mp,Hn as oD,L as Lc,P as Kv,Pt as Xv,Wt as av,Zt as cD,dn as gi,g as Dp,l as BI,n as $p,pn as gp,u as Bp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,X as ce,gt as q1,it as j,v as HM,x as Iu}from"./chunk-C7G4ZLh2.js";import{_ as je,b as zt,c as Cn,l as En,v as qt}from"./main-OKEWRQDY.js";import{t as a}from"./chunk-CiyLb43o.js";var I=(()=>{class c{constructor(){this.frozenColumnCount=2,this.frozenRowCount=3,this.hideSubTitle=!1,this.isFrozenBottom=!1,this.slickEventHandler=new j}ngOnInit(){this.prepareDataGrid()}ngOnDestroy(){this.slickEventHandler.unsubscribeAll()}angularGridReady(o){this.angularGrid=o,this.gridObj=o.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,i=>this.colorizeHoveringRow(i,!0)),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,i=>this.colorizeHoveringRow(i,!1))}colorizeHoveringRow(o,i){let r=this.gridObj.getCellFromEvent(o),a=i?[r?.row??0]:[];this.gridObj.setSelectedRows(a),o.preventDefault()}prepareDataGrid(){this.columns=[{id:`sel`,name:`#`,field:`id`,minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:`title`,name:`Title`,field:`title`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,resizable:!1,minWidth:130,width:140,formatter:JN.percentCompleteBar,type:`number`,filterable:!0,filter:{model:Iu.slider,operator:`>=`},sortable:!0},{id:`start`,name:`Start`,field:`start`,minWidth:100,width:120,filterable:!0,sortable:!0,formatter:JN.dateIso},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100,width:120,filterable:!0,sortable:!0,formatter:JN.dateIso},{id:`cost`,name:`Cost | Duration`,field:`cost`,formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:Iu.compoundSlider},editor:{model:HM.dualInput,params:{leftInput:{field:`cost`,type:`float`,decimal:2,minValue:0,maxValue:5e4,placeholder:`< 50K`,errorMessage:`Cost must be positive and below $50K.`},rightInput:{field:`duration`,type:`float`,minValue:0,maxValue:100,title:`make sure Duration is withing its range of 0 to 100`,errorMessage:`Duration must be between 0 and 100.`}}}},{id:`effortDriven`,name:`Effort Driven`,field:`effortDriven`,minWidth:100,width:120,formatter:JN.checkmarkMaterial,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:Iu.singleSelect},sortable:!0},{id:`title1`,name:`Title 1`,field:`title1`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title2`,name:`Title 2`,field:`title2`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title3`,name:`Title 3`,field:`title3`,minWidth:100,width:120,filterable:!0,sortable:!0},{id:`title4`,name:`Title 4`,field:`title4`,minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableCellNavigation:!0,editable:!0,autoEdit:!0,asyncEditorLoading:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}},this.dataset=this.getData()}getData(){let o=[];for(let i=0;i<500;i++)o[i]={id:i,title:`Task `+i,cost:i%33===0?null:Math.random()*1e4,duration:i%8?Math.round(Math.random()*100)+``:null,percentComplete:Math.round(Math.random()*100),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:i%5===0,title1:`Some Text ${Math.round(Math.random()*25)}`,title2:`Some Text ${Math.round(Math.random()*25)}`,title3:`Some Text ${Math.round(Math.random()*25)}`,title4:`Some Text ${Math.round(Math.random()*25)}`};return o}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(o,i,r,a,l){let D=this.isNullUndefinedOrEmpty(l.cost)?`n/a`:ce(l.cost,0,2,!1,`$`,``,`.`,`,`),C=`n/a`;return!this.isNullUndefinedOrEmpty(l.duration)&&l.duration>=0&&(C=`${l.duration} ${l.duration>1?`days`:`day`}`),`<b>${D}</b> | ${C}`}isNullUndefinedOrEmpty(o){return o===``||o===null||o===void 0}onValidationError(o,i){a(i.validationResults.msg,`danger`)}setFrozenColumns(o){this.gridObj.setOptions({frozenColumn:o}),this.gridOptions=this.gridObj.getOptions(),this.frozenColumnCount=o}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(i){return new(i||c)}}static{this.ɵcmp=BI({type:c,selectors:[[`ng-component`]],decls:108,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example20.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/frozen-columns-rows`,`target`,`_blank`],[1,`row`,`gx-2`,`mb-2`,`align-items-end`],[1,`col-2`],[`for`,`pinned-rows`],[`id`,`pinned-rows`,`type`,`number`,1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-auto`,`gr-2`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-1`],[`for`,`pinned-columns`],[`id`,`pinned-columns`,`type`,`number`,1,`form-control`,3,`ngModelChange`,`ngModel`],[1,`col-auto`],[1,`row`],[1,`col-12`],[`data-test`,`remove-frozen-column-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`set-3frozen-columns`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-pin-outline`],[2,`margin-left`,`15px`],[1,`mdi`,`mdi-flip-vertical`],[2,`font-weight`,`bold`],[1,`row`,`mt-2`,`mb-2`],[`gridId`,`grid20`,`gridWidth`,`875`,3,`onValidationError`,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(i,r){i&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 20: Pinned (frozen) Columns/Rows
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return r.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`)
    `),gi(23,`ul`),oD(24,`
      `),gi(25,`li`),oD(26,`Option to pin any number of columns (left only) or rows`),xc(),oD(27,`
      `),gi(28,`li`),oD(29,`Option to pin the rows at the bottom instead of the top (default)`),xc(),oD(30,`
      `),gi(31,`li`),oD(32,`You can also dynamically any of these options, through SlickGrid "setOptions()"`),xc(),oD(33,`
      `),gi(34,`li`),oD(35,`Possibility to change the styling of the line border between pinned columns/rows`),xc(),oD(36,`
    `),xc(),oD(37,`
  `),xc(),oD(38,`

  `),gi(39,`div`,8),oD(40,`
    `),gi(41,`div`,9),oD(42,`
      `),gi(43,`label`,10),oD(44,`Pinned Rows: `),xc(),oD(45,`
      `),gi(46,`input`,11),$p(`ngModelChange`,function(l){return cD(r.frozenRowCount,l)||(r.frozenRowCount=l),l}),xc(),Kv(),oD(47,`
    `),xc(),oD(48,`
    `),gi(49,`div`,12),oD(50,`
      `),gi(51,`button`,13),Dp(`click`,function(){return r.changeFrozenRowCount()}),oD(52,`Set`),xc(),oD(53,`
    `),xc(),oD(54,`
    `),mp(55,`div`,14),oD(56,`
    `),gi(57,`div`,9),oD(58,`
      `),gi(59,`label`,15),oD(60,`Pinned Columns: `),xc(),oD(61,`
      `),gi(62,`input`,16),$p(`ngModelChange`,function(l){return cD(r.frozenColumnCount,l)||(r.frozenColumnCount=l),l}),xc(),Kv(),oD(63,`
    `),xc(),oD(64,`
    `),gi(65,`div`,17),oD(66,`
      `),gi(67,`button`,13),Dp(`click`,function(){return r.changeFrozenColumnCount()}),oD(68,`Set`),xc(),oD(69,`
    `),xc(),oD(70,`
  `),xc(),oD(71,`

  `),gi(72,`div`,18),oD(73,`
    `),gi(74,`div`,19),oD(75,`
      `),gi(76,`button`,20),Dp(`click`,function(){return r.setFrozenColumns(-1)}),oD(77,`
        `),mp(78,`i`,21),oD(79,` Remove Frozen Columns
      `),xc(),oD(80,`
      `),gi(81,`button`,22),Dp(`click`,function(){return r.setFrozenColumns(2)}),oD(82,`
        `),mp(83,`i`,23),oD(84,` Set 3 Frozen Columns
      `),xc(),oD(85,`

      `),gi(86,`span`,24),oD(87,`
        `),gi(88,`button`,13),Dp(`click`,function(){return r.toggleFrozenBottomRows()}),oD(89,`
          `),mp(90,`i`,25),oD(91,` Toggle Pinned Rows
        `),xc(),oD(92,`
        `),gi(93,`span`,26),oD(94),xc(),oD(95,`
      `),xc(),oD(96,`
    `),xc(),oD(97,`
  `),xc(),oD(98,`
  `),gi(99,`div`,27),oD(100,`
    `),mp(101,`hr`),oD(102,`
  `),xc(),oD(103,`
  `),gi(104,`angular-slickgrid`,28),Dp(`onValidationError`,function(l){return r.onValidationError(l.detail.eventData,l.detail.args)})(`onAngularGridCreated`,function(l){return r.angularGridReady(l.detail)}),oD(105,`
  `),xc(),oD(106,`
`),xc(),oD(107,`
`)),i&2&&(av(46),Bp(`ngModel`,r.frozenRowCount),Xv(),av(16),Bp(`ngModel`,r.frozenColumnCount),Xv(),av(32),Lc(`: `,r.isFrozenBottom?`Bottom`:`Top`),av(10),gp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[q1,En,je,zt,Cn,qt],styles:[`.slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696!important}.slick-pane-bottom{border-top:1px solid #969696!important}
`],encapsulation:2})}}return c})();export{I as Example20Component};