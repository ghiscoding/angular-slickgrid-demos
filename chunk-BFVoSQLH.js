import{$n as pD,F as II,G as Kp,In as lD,U as Jp,a as Ap,br as vI,mn as dv,on as bp,pr as tE,sr as rE,tn as _p,v as EI,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{c as Dn,d as In,l as En,m as Nn,u as Ge,v as it,y as qt}from"./main-BEH6XCIK.js";function I(s,S){if(s&1&&(lD(0,`
          `),vi(1,`option`,17),lD(2),Rc(),lD(3,`
        `)),s&2){let a=S.$implicit;dv(),bp(`ngValue`,a),dv(),Qp(a.name)}}function O(s,S){if(s&1&&(lD(0,`
          `),vi(1,`option`,17),lD(2),Rc(),lD(3,`
        `)),s&2){let a=S.$implicit;dv(),bp(`ngValue`,a),dv(),Qp(a)}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=!1,this.operatorList=[`=`,`<`,`<=`,`>`,`>=`,`<>`,`StartsWith`,`EndsWith`],this.selectedOperator=`=`,this.searchValue=``}ngOnInit(){this.prepareGrid()}angularGridReady(a){this.angularGrid=a}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:sI.percentCompleteBar,sortable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,formatter:sI.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:sI.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:sI.checkmarkMaterial,sortable:!0,type:`number`}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0}}this.dataset=a}clearGridSearchInput(){this.searchValue=``,this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||``}`,operator:this.selectedOperator,searchTerms:[this.searchValue||``]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=WE({type:s,selectors:[[`ng-component`]],decls:77,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`for`,`columnSelect`],[`data-test`,`search-column-list`,`name`,`selectedColumn`,1,`form-select`,3,`ngModelChange`,`ngModel`],[`data-test`,`search-operator-list`,`name`,`selectedOperator`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`input-group`],[`type`,`text`,`data-test`,`search-value-input`,`name`,`searchValue`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,3,`input`,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-value`,1,`btn`,`btn-outline-secondary`,`d-flex`,`align-items-center`,`pl-2`,`pr-2`,3,`click`],[1,`mdi`,`mdi-close`],[`gridId`,`grid21`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[3,`ngValue`]],template:function(r,i){r&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 21: Grid AutoHeight
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return i.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),vi(20,`ul`),lD(21,`
      `),vi(22,`li`),lD(23,`You define a fixed grid width via "gridWidth" in the View`),Rc(),lD(24,`
      `),vi(25,`li`),lD(26,`You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)`),Rc(),lD(27,`
      `),vi(28,`li`),lD(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),Rc(),lD(30,`
    `),Rc(),lD(31,`
  `),Rc(),lD(32,`

  `),vi(33,`div`,7),lD(34,`
    `),vi(35,`div`,8),lD(36,`
      `),vi(37,`label`,9),lD(38,`Single Search:`),Rc(),lD(39,`
    `),Rc(),lD(40,`
    `),vi(41,`div`,8),lD(42,`
      `),vi(43,`select`,10),tE(),Jp(`ngModelChange`,function(l){return pD(i.selectedColumn,l)||(i.selectedColumn=l),l}),Ap(`ngModelChange`,function(){return i.updateFilter()}),lD(44,`
        `),EI(45,I,4,2,null,null,vI),Rc(),lD(47,`
    `),Rc(),lD(48,`
    `),vi(49,`div`,8),lD(50,`
      `),vi(51,`select`,11),tE(),Jp(`ngModelChange`,function(l){return pD(i.selectedOperator,l)||(i.selectedOperator=l),l}),Ap(`ngModelChange`,function(){return i.updateFilter()}),lD(52,`
        `),EI(53,O,4,2,null,null,vI),Rc(),lD(55,`
    `),Rc(),lD(56,`

    `),vi(57,`div`,8),lD(58,`
      `),vi(59,`div`,12),lD(60,`
        `),vi(61,`input`,13),tE(),Ap(`input`,function(){return i.updateFilter()}),Jp(`ngModelChange`,function(l){return pD(i.searchValue,l)||(i.searchValue=l),l}),Rc(),lD(62,`
        `),vi(63,`button`,14),Ap(`click`,function(){return i.clearGridSearchInput()}),lD(64,`
          `),_p(65,`span`,15),lD(66,`
        `),Rc(),lD(67,`
      `),Rc(),lD(68,`
    `),Rc(),lD(69,`
  `),Rc(),lD(70,`

  `),_p(71,`hr`),lD(72,`

  `),vi(73,`angular-slickgrid`,16),Ap(`onAngularGridCreated`,function(l){return i.angularGridReady(l.detail)}),lD(74,`
  `),Rc(),lD(75,`
`),Rc(),lD(76,`
`)),r&2&&(dv(43),Kp(`ngModel`,i.selectedColumn),rE(),dv(2),II(i.columns),dv(6),Kp(`ngModel`,i.selectedOperator),rE(),dv(2),II(i.operatorList),dv(8),Kp(`ngModel`,i.searchValue),rE(),dv(12),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[D1,In,En,Nn,Ge,it,Dn,qt],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return s})();export{N as Example21Component};