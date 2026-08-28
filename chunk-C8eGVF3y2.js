import{Dt as UE,En as iD,H as Jy,Kn as mp,Nt as Vp,Rn as lD,Tt as Tp,Un as mI,Wn as mi,bn as gI,hr as vp,kt as Up,ln as cy,o as Ac,pn as eE,r as $p,wn as hI}from"./chunk-06EGdSfW.js";import{H as _W,mt as nk}from"./chunk-CAMk6vEo.js";import{_ as Vn,d as Fn,g as Te,m as Mn,s as $t,u as En,y as rt}from"./main-ZP4IXK6Z.js";function I(s,S){if(s&1&&(iD(0,`
          `),mi(1,`option`,17),iD(2),Ac(),iD(3,`
        `)),s&2){let a=S.$implicit;cy(),mp(`ngValue`,a),cy(),Vp(a.name)}}function O(s,S){if(s&1&&(iD(0,`
          `),mi(1,`option`,17),iD(2),Ac(),iD(3,`
        `)),s&2){let a=S.$implicit;cy(),mp(`ngValue`,a),cy(),Vp(a)}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=!1,this.operatorList=[`=`,`<`,`<=`,`>`,`>=`,`<>`,`StartsWith`,`EndsWith`],this.selectedOperator=`=`,this.searchValue=``}ngOnInit(){this.prepareGrid()}angularGridReady(a){this.angularGrid=a}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,sortable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,sortable:!0,type:`number`}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0}}this.dataset=a}clearGridSearchInput(){this.searchValue=``,this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||``}`,operator:this.selectedOperator,searchTerms:[this.searchValue||``]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=UE({type:s,selectors:[[`ng-component`]],decls:77,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`for`,`columnSelect`],[`data-test`,`search-column-list`,`name`,`selectedColumn`,1,`form-select`,3,`ngModelChange`,`ngModel`],[`data-test`,`search-operator-list`,`name`,`selectedOperator`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`input-group`],[`type`,`text`,`data-test`,`search-value-input`,`name`,`searchValue`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,3,`input`,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-value`,1,`btn`,`btn-outline-secondary`,`d-flex`,`align-items-center`,`pl-2`,`pr-2`,3,`click`],[1,`mdi`,`mdi-close`],[`gridId`,`grid21`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[3,`ngValue`]],template:function(r,i){r&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 21: Grid AutoHeight
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return i.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),mi(20,`ul`),iD(21,`
      `),mi(22,`li`),iD(23,`You define a fixed grid width via "gridWidth" in the View`),Ac(),iD(24,`
      `),mi(25,`li`),iD(26,`You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)`),Ac(),iD(27,`
      `),mi(28,`li`),iD(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),Ac(),iD(30,`
    `),Ac(),iD(31,`
  `),Ac(),iD(32,`

  `),mi(33,`div`,7),iD(34,`
    `),mi(35,`div`,8),iD(36,`
      `),mi(37,`label`,9),iD(38,`Single Search:`),Ac(),iD(39,`
    `),Ac(),iD(40,`
    `),mi(41,`div`,8),iD(42,`
      `),mi(43,`select`,10),$p(`ngModelChange`,function(l){return lD(i.selectedColumn,l)||(i.selectedColumn=l),l}),Tp(`ngModelChange`,function(){return i.updateFilter()}),iD(44,`
        `),gI(45,I,4,2,null,null,hI),Ac(),Jy(),iD(47,`
    `),Ac(),iD(48,`
    `),mi(49,`div`,8),iD(50,`
      `),mi(51,`select`,11),$p(`ngModelChange`,function(l){return lD(i.selectedOperator,l)||(i.selectedOperator=l),l}),Tp(`ngModelChange`,function(){return i.updateFilter()}),iD(52,`
        `),gI(53,O,4,2,null,null,hI),Ac(),Jy(),iD(55,`
    `),Ac(),iD(56,`

    `),mi(57,`div`,8),iD(58,`
      `),mi(59,`div`,12),iD(60,`
        `),mi(61,`input`,13),Tp(`input`,function(){return i.updateFilter()}),$p(`ngModelChange`,function(l){return lD(i.searchValue,l)||(i.searchValue=l),l}),Ac(),Jy(),iD(62,`
        `),mi(63,`button`,14),Tp(`click`,function(){return i.clearGridSearchInput()}),iD(64,`
          `),vp(65,`span`,15),iD(66,`
        `),Ac(),iD(67,`
      `),Ac(),iD(68,`
    `),Ac(),iD(69,`
  `),Ac(),iD(70,`

  `),vp(71,`hr`),iD(72,`

  `),mi(73,`angular-slickgrid`,16),Tp(`onAngularGridCreated`,function(l){return i.angularGridReady(l.detail)}),iD(74,`
  `),Ac(),iD(75,`
`),Ac(),iD(76,`
`)),r&2&&(cy(43),Up(`ngModel`,i.selectedColumn),eE(),cy(2),mI(i.columns),cy(6),Up(`ngModel`,i.selectedOperator),eE(),cy(2),mI(i.operatorList),cy(8),Up(`ngModel`,i.searchValue),eE(),cy(12),mp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W,Fn,Mn,En,Te,rt,Vn,$t],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return s})();export{N as Example21Component};