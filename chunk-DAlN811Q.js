import{Dn as jp,Fn as mp,Hn as oD,Kn as pE,P as Kv,Pt as Xv,Wt as av,Zt as cD,dn as gi,g as Dp,gn as hE,l as BI,n as $p,pn as gp,u as Bp,un as gE,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1}from"./chunk-C7G4ZLh2.js";import{_ as je,c as Cn,f as Mn,l as En,s as An,v as qt,y as rt}from"./main-INAAVGOX.js";function I(s,S){if(s&1&&(oD(0,`
          `),gi(1,`option`,17),oD(2),xc(),oD(3,`
        `)),s&2){let a=S.$implicit;av(),gp(`ngValue`,a),av(),jp(a.name)}}function O(s,S){if(s&1&&(oD(0,`
          `),gi(1,`option`,17),oD(2),xc(),oD(3,`
        `)),s&2){let a=S.$implicit;av(),gp(`ngValue`,a),av(),jp(a)}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=!1,this.operatorList=[`=`,`<`,`<=`,`>`,`>=`,`<>`,`StartsWith`,`EndsWith`],this.selectedOperator=`=`,this.searchValue=``}ngOnInit(){this.prepareGrid()}angularGridReady(a){this.angularGrid=a}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:JN.percentCompleteBar,sortable:!0,type:`number`},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso,sortable:!0,type:`date`},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso,sortable:!0,type:`date`},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:JN.checkmarkMaterial,sortable:!0,type:`number`}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:`Task `+r,duration:Math.round(Math.random()*100)+``,percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0}}this.dataset=a}clearGridSearchInput(){this.searchValue=``,this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||``}`,operator:this.selectedOperator,searchTerms:[this.searchValue||``]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=BI({type:s,selectors:[[`ng-component`]],decls:77,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`for`,`columnSelect`],[`data-test`,`search-column-list`,`name`,`selectedColumn`,1,`form-select`,3,`ngModelChange`,`ngModel`],[`data-test`,`search-operator-list`,`name`,`selectedOperator`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`input-group`],[`type`,`text`,`data-test`,`search-value-input`,`name`,`searchValue`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,3,`input`,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-value`,1,`btn`,`btn-outline-secondary`,`d-flex`,`align-items-center`,`pl-2`,`pr-2`,3,`click`],[1,`mdi`,`mdi-close`],[`gridId`,`grid21`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[3,`ngValue`]],template:function(r,i){r&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 21: Grid AutoHeight
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return i.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),gi(20,`ul`),oD(21,`
      `),gi(22,`li`),oD(23,`You define a fixed grid width via "gridWidth" in the View`),xc(),oD(24,`
      `),gi(25,`li`),oD(26,`You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)`),xc(),oD(27,`
      `),gi(28,`li`),oD(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),xc(),oD(30,`
    `),xc(),oD(31,`
  `),xc(),oD(32,`

  `),gi(33,`div`,7),oD(34,`
    `),gi(35,`div`,8),oD(36,`
      `),gi(37,`label`,9),oD(38,`Single Search:`),xc(),oD(39,`
    `),xc(),oD(40,`
    `),gi(41,`div`,8),oD(42,`
      `),gi(43,`select`,10),$p(`ngModelChange`,function(l){return cD(i.selectedColumn,l)||(i.selectedColumn=l),l}),Dp(`ngModelChange`,function(){return i.updateFilter()}),oD(44,`
        `),hE(45,I,4,2,null,null,pE),xc(),Kv(),oD(47,`
    `),xc(),oD(48,`
    `),gi(49,`div`,8),oD(50,`
      `),gi(51,`select`,11),$p(`ngModelChange`,function(l){return cD(i.selectedOperator,l)||(i.selectedOperator=l),l}),Dp(`ngModelChange`,function(){return i.updateFilter()}),oD(52,`
        `),hE(53,O,4,2,null,null,pE),xc(),Kv(),oD(55,`
    `),xc(),oD(56,`

    `),gi(57,`div`,8),oD(58,`
      `),gi(59,`div`,12),oD(60,`
        `),gi(61,`input`,13),Dp(`input`,function(){return i.updateFilter()}),$p(`ngModelChange`,function(l){return cD(i.searchValue,l)||(i.searchValue=l),l}),xc(),Kv(),oD(62,`
        `),gi(63,`button`,14),Dp(`click`,function(){return i.clearGridSearchInput()}),oD(64,`
          `),mp(65,`span`,15),oD(66,`
        `),xc(),oD(67,`
      `),xc(),oD(68,`
    `),xc(),oD(69,`
  `),xc(),oD(70,`

  `),mp(71,`hr`),oD(72,`

  `),gi(73,`angular-slickgrid`,16),Dp(`onAngularGridCreated`,function(l){return i.angularGridReady(l.detail)}),oD(74,`
  `),xc(),oD(75,`
`),xc(),oD(76,`
`)),r&2&&(av(43),Bp(`ngModel`,i.selectedColumn),Xv(),av(2),gE(i.columns),av(6),Bp(`ngModel`,i.selectedOperator),Xv(),av(2),gE(i.operatorList),av(8),Bp(`ngModel`,i.searchValue),Xv(),av(12),gp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[q1,En,An,Mn,je,rt,Cn,qt],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return s})();export{N as Example21Component};