import{b as ot,d as In,h as Wt,m as Sn,p as Nn,s as An,y as ke}from"./main-KCATS47T.js";import{V as R$,rt as ZR}from"./chunk-Lo0QQjTd.js";import{B as II,K as Jp,Tn as hD,X as Lc,Y as Kp,Yn as oE,dr as uD,en as _p,h as DI,in as bp,k as GE,o as Ap,qn as nE,wt as Qp,xn as fv,y as EI,yr as vi}from"./chunk-Cxd1Oem8.js";function I(s,S){if(s&1&&(uD(0,`
          `),vi(1,`option`,17),uD(2),Lc(),uD(3,`
        `)),s&2){let a=S.$implicit;fv(),bp(`ngValue`,a),fv(),Qp(a.name)}}function O(s,S){if(s&1&&(uD(0,`
          `),vi(1,`option`,17),uD(2),Lc(),uD(3,`
        `)),s&2){let a=S.$implicit;fv(),bp(`ngValue`,a),fv(),Qp(a)}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=!1,this.operatorList=[`=`,`<`,`<=`,`>`,`>=`,`<>`,`StartsWith`,`EndsWith`],this.selectedOperator=`=`,this.searchValue=``}ngOnInit(){this.prepareGrid()}angularGridReady(a){this.angularGrid=a}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:ZR.percentCompleteBar,sortable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,formatter:ZR.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:ZR.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:ZR.checkmarkMaterial,sortable:!0,type:`number`}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0}}this.dataset=a}clearGridSearchInput(){this.searchValue=``,this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||``}`,operator:this.selectedOperator,searchTerms:[this.searchValue||``]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=GE({type:s,selectors:[[`ng-component`]],decls:77,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`for`,`columnSelect`],[`data-test`,`search-column-list`,`name`,`selectedColumn`,1,`form-select`,3,`ngModelChange`,`ngModel`],[`data-test`,`search-operator-list`,`name`,`selectedOperator`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`input-group`],[`type`,`text`,`data-test`,`search-value-input`,`name`,`searchValue`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,3,`input`,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-value`,1,`btn`,`btn-outline-secondary`,`d-flex`,`align-items-center`,`pl-2`,`pr-2`,3,`click`],[1,`mdi`,`mdi-close`],[`gridId`,`grid21`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[3,`ngValue`]],template:function(r,i){r&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 21: Grid AutoHeight
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return i.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),vi(20,`ul`),uD(21,`
      `),vi(22,`li`),uD(23,`You define a fixed grid width via "gridWidth" in the View`),Lc(),uD(24,`
      `),vi(25,`li`),uD(26,`You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)`),Lc(),uD(27,`
      `),vi(28,`li`),uD(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),Lc(),uD(30,`
    `),Lc(),uD(31,`
  `),Lc(),uD(32,`

  `),vi(33,`div`,7),uD(34,`
    `),vi(35,`div`,8),uD(36,`
      `),vi(37,`label`,9),uD(38,`Single Search:`),Lc(),uD(39,`
    `),Lc(),uD(40,`
    `),vi(41,`div`,8),uD(42,`
      `),vi(43,`select`,10),nE(),Jp(`ngModelChange`,function(l){return hD(i.selectedColumn,l)||(i.selectedColumn=l),l}),Ap(`ngModelChange`,function(){return i.updateFilter()}),uD(44,`
        `),II(45,I,4,2,null,null,EI),Lc(),uD(47,`
    `),Lc(),uD(48,`
    `),vi(49,`div`,8),uD(50,`
      `),vi(51,`select`,11),nE(),Jp(`ngModelChange`,function(l){return hD(i.selectedOperator,l)||(i.selectedOperator=l),l}),Ap(`ngModelChange`,function(){return i.updateFilter()}),uD(52,`
        `),II(53,O,4,2,null,null,EI),Lc(),uD(55,`
    `),Lc(),uD(56,`

    `),vi(57,`div`,8),uD(58,`
      `),vi(59,`div`,12),uD(60,`
        `),vi(61,`input`,13),nE(),Ap(`input`,function(){return i.updateFilter()}),Jp(`ngModelChange`,function(l){return hD(i.searchValue,l)||(i.searchValue=l),l}),Lc(),uD(62,`
        `),vi(63,`button`,14),Ap(`click`,function(){return i.clearGridSearchInput()}),uD(64,`
          `),_p(65,`span`,15),uD(66,`
        `),Lc(),uD(67,`
      `),Lc(),uD(68,`
    `),Lc(),uD(69,`
  `),Lc(),uD(70,`

  `),_p(71,`hr`),uD(72,`

  `),vi(73,`angular-slickgrid`,16),Ap(`onAngularGridCreated`,function(l){return i.angularGridReady(l.detail)}),uD(74,`
  `),Lc(),uD(75,`
`),Lc(),uD(76,`
`)),r&2&&(fv(43),Kp(`ngModel`,i.selectedColumn),oE(),fv(2),DI(i.columns),fv(6),Kp(`ngModel`,i.selectedOperator),oE(),fv(2),DI(i.operatorList),fv(8),Kp(`ngModel`,i.searchValue),oE(),fv(12),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[R$,Sn,Nn,In,ke,ot,An,Wt],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return s})();export{N as Example21Component};