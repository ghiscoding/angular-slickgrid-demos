import{$ as Mp,Bn as lD,C as Ei,En as iD,Gn as mI,K as Ky,Sn as gI,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp,kr as zp,qt as Xy,sr as qp,wn as hI,yt as Qp}from"./chunk-CtIlL7jI.js";import{Ot as xz,xt as uP}from"./chunk-C1NeHYCu.js";import{c as Dn,d as In,l as En,m as Nn,u as Ge,v as it,y as qt}from"./main-JBJUR4DQ.js";function I(s,S){if(s&1&&(iD(0,`
          `),Ei(1,`option`,17),iD(2),Oc(),iD(3,`
        `)),s&2){let a=S.$implicit;ay(),Dp(`ngValue`,a),ay(),qp(a.name)}}function O(s,S){if(s&1&&(iD(0,`
          `),Ei(1,`option`,17),iD(2),Oc(),iD(3,`
        `)),s&2){let a=S.$implicit;ay(),Dp(`ngValue`,a),ay(),qp(a)}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=!1,this.operatorList=[`=`,`<`,`<=`,`>`,`>=`,`<>`,`StartsWith`,`EndsWith`],this.selectedOperator=`=`,this.searchValue=``}ngOnInit(){this.prepareGrid()}angularGridReady(a){this.angularGrid=a}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:uP.percentCompleteBar,sortable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:uP.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:uP.checkmarkMaterial,sortable:!0,type:`number`}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0}}this.dataset=a}clearGridSearchInput(){this.searchValue=``,this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||``}`,operator:this.selectedOperator,searchTerms:[this.searchValue||``]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=BE({type:s,selectors:[[`ng-component`]],decls:77,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`for`,`columnSelect`],[`data-test`,`search-column-list`,`name`,`selectedColumn`,1,`form-select`,3,`ngModelChange`,`ngModel`],[`data-test`,`search-operator-list`,`name`,`selectedOperator`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`input-group`],[`type`,`text`,`data-test`,`search-value-input`,`name`,`searchValue`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,3,`input`,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-value`,1,`btn`,`btn-outline-secondary`,`d-flex`,`align-items-center`,`pl-2`,`pr-2`,3,`click`],[1,`mdi`,`mdi-close`],[`gridId`,`grid21`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[3,`ngValue`]],template:function(r,i){r&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 21: Grid AutoHeight
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return i.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),Ei(20,`ul`),iD(21,`
      `),Ei(22,`li`),iD(23,`You define a fixed grid width via "gridWidth" in the View`),Oc(),iD(24,`
      `),Ei(25,`li`),iD(26,`You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)`),Oc(),iD(27,`
      `),Ei(28,`li`),iD(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),Oc(),iD(30,`
    `),Oc(),iD(31,`
  `),Oc(),iD(32,`

  `),Ei(33,`div`,7),iD(34,`
    `),Ei(35,`div`,8),iD(36,`
      `),Ei(37,`label`,9),iD(38,`Single Search:`),Oc(),iD(39,`
    `),Oc(),iD(40,`
    `),Ei(41,`div`,8),iD(42,`
      `),Ei(43,`select`,10),Ky(),Qp(`ngModelChange`,function(l){return lD(i.selectedColumn,l)||(i.selectedColumn=l),l}),Mp(`ngModelChange`,function(){return i.updateFilter()}),iD(44,`
        `),gI(45,I,4,2,null,null,hI),Oc(),iD(47,`
    `),Oc(),iD(48,`
    `),Ei(49,`div`,8),iD(50,`
      `),Ei(51,`select`,11),Ky(),Qp(`ngModelChange`,function(l){return lD(i.selectedOperator,l)||(i.selectedOperator=l),l}),Mp(`ngModelChange`,function(){return i.updateFilter()}),iD(52,`
        `),gI(53,O,4,2,null,null,hI),Oc(),iD(55,`
    `),Oc(),iD(56,`

    `),Ei(57,`div`,8),iD(58,`
      `),Ei(59,`div`,12),iD(60,`
        `),Ei(61,`input`,13),Ky(),Mp(`input`,function(){return i.updateFilter()}),Qp(`ngModelChange`,function(l){return lD(i.searchValue,l)||(i.searchValue=l),l}),Oc(),iD(62,`
        `),Ei(63,`button`,14),Mp(`click`,function(){return i.clearGridSearchInput()}),iD(64,`
          `),Tp(65,`span`,15),iD(66,`
        `),Oc(),iD(67,`
      `),Oc(),iD(68,`
    `),Oc(),iD(69,`
  `),Oc(),iD(70,`

  `),Tp(71,`hr`),iD(72,`

  `),Ei(73,`angular-slickgrid`,16),Mp(`onAngularGridCreated`,function(l){return i.angularGridReady(l.detail)}),iD(74,`
  `),Oc(),iD(75,`
`),Oc(),iD(76,`
`)),r&2&&(ay(43),zp(`ngModel`,i.selectedColumn),Xy(),ay(2),mI(i.columns),ay(6),zp(`ngModel`,i.selectedOperator),Xy(),ay(2),mI(i.operatorList),ay(8),zp(`ngModel`,i.searchValue),Xy(),ay(12),Dp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[xz,In,En,Nn,Ge,it,Dn,qt],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return s})();export{N as Example21Component};