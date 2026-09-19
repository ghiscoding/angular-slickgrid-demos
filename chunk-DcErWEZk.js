import{F as Ip,In as mI,Lt as Wp,O as Gp,Ot as Up,Pn as ly,b as Ep,gn as gI,ir as tE,lr as vI,or as uD,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,zt as Xy}from"./chunk-Rd4ToC_L.js";import{W as _W,ht as nk}from"./chunk-DLuyVhQJ.js";import{_ as Vn,d as Fn,g as Te,m as Mn,s as $t,u as En,y as rt}from"./main-CCTR2RMO.js";function I(s,S){if(s&1&&(sD(0,`
          `),yi(1,`option`,17),sD(2),Rc(),sD(3,`
        `)),s&2){let a=S.$implicit;ly(),Ep(`ngValue`,a),ly(),Up(a.name)}}function O(s,S){if(s&1&&(sD(0,`
          `),yi(1,`option`,17),sD(2),Rc(),sD(3,`
        `)),s&2){let a=S.$implicit;ly(),Ep(`ngValue`,a),ly(),Up(a)}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=!1,this.operatorList=[`=`,`<`,`<=`,`>`,`>=`,`<>`,`StartsWith`,`EndsWith`],this.selectedOperator=`=`,this.searchValue=``}ngOnInit(){this.prepareGrid()}angularGridReady(a){this.angularGrid=a}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,sortable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:nk.checkmarkMaterial,sortable:!0,type:`number`}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0}}this.dataset=a}clearGridSearchInput(){this.searchValue=``,this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||``}`,operator:this.selectedOperator,searchTerms:[this.searchValue||``]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=$E({type:s,selectors:[[`ng-component`]],decls:77,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`for`,`columnSelect`],[`data-test`,`search-column-list`,`name`,`selectedColumn`,1,`form-select`,3,`ngModelChange`,`ngModel`],[`data-test`,`search-operator-list`,`name`,`selectedOperator`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`input-group`],[`type`,`text`,`data-test`,`search-value-input`,`name`,`searchValue`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,3,`input`,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-value`,1,`btn`,`btn-outline-secondary`,`d-flex`,`align-items-center`,`pl-2`,`pr-2`,3,`click`],[1,`mdi`,`mdi-close`],[`gridId`,`grid21`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[3,`ngValue`]],template:function(r,i){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 21: Grid AutoHeight
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return i.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),yi(20,`ul`),sD(21,`
      `),yi(22,`li`),sD(23,`You define a fixed grid width via "gridWidth" in the View`),Rc(),sD(24,`
      `),yi(25,`li`),sD(26,`You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)`),Rc(),sD(27,`
      `),yi(28,`li`),sD(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),Rc(),sD(30,`
    `),Rc(),sD(31,`
  `),Rc(),sD(32,`

  `),yi(33,`div`,7),sD(34,`
    `),yi(35,`div`,8),sD(36,`
      `),yi(37,`label`,9),sD(38,`Single Search:`),Rc(),sD(39,`
    `),Rc(),sD(40,`
    `),yi(41,`div`,8),sD(42,`
      `),yi(43,`select`,10),Wp(`ngModelChange`,function(l){return uD(i.selectedColumn,l)||(i.selectedColumn=l),l}),bp(`ngModelChange`,function(){return i.updateFilter()}),sD(44,`
        `),mI(45,I,4,2,null,null,gI),Rc(),Xy(),sD(47,`
    `),Rc(),sD(48,`
    `),yi(49,`div`,8),sD(50,`
      `),yi(51,`select`,11),Wp(`ngModelChange`,function(l){return uD(i.selectedOperator,l)||(i.selectedOperator=l),l}),bp(`ngModelChange`,function(){return i.updateFilter()}),sD(52,`
        `),mI(53,O,4,2,null,null,gI),Rc(),Xy(),sD(55,`
    `),Rc(),sD(56,`

    `),yi(57,`div`,8),sD(58,`
      `),yi(59,`div`,12),sD(60,`
        `),yi(61,`input`,13),bp(`input`,function(){return i.updateFilter()}),Wp(`ngModelChange`,function(l){return uD(i.searchValue,l)||(i.searchValue=l),l}),Rc(),Xy(),sD(62,`
        `),yi(63,`button`,14),bp(`click`,function(){return i.clearGridSearchInput()}),sD(64,`
          `),Ip(65,`span`,15),sD(66,`
        `),Rc(),sD(67,`
      `),Rc(),sD(68,`
    `),Rc(),sD(69,`
  `),Rc(),sD(70,`

  `),Ip(71,`hr`),sD(72,`

  `),yi(73,`angular-slickgrid`,16),bp(`onAngularGridCreated`,function(l){return i.angularGridReady(l.detail)}),sD(74,`
  `),Rc(),sD(75,`
`),Rc(),sD(76,`
`)),r&2&&(ly(43),Gp(`ngModel`,i.selectedColumn),tE(),ly(2),vI(i.columns),ly(6),Gp(`ngModel`,i.selectedOperator),tE(),ly(2),vI(i.operatorList),ly(8),Gp(`ngModel`,i.searchValue),tE(),ly(12),Ep(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W,Fn,Mn,En,Te,rt,Vn,$t],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return s})();export{N as Example21Component};