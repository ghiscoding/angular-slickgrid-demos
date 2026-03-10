import{b as M,c as k,f as v,j as w,k as T,l as G,o as V}from"./chunk-BBW77BDN.js";import{Da as F,za as u}from"./chunk-V3K67AAF.js";import{Jb as e,Kb as b,Oa as E,Ob as h,Pb as g,Qb as f,eb as _,fb as S,gb as C,hb as p,ib as t,jb as n,kb as c,ub as m,za as d}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";function W(s,x){if(s&1&&(e(0,`
          `),t(1,"option",17),e(2),n(),e(3,`
        `)),s&2){let l=x.$implicit;d(),p("ngValue",l),d(),b(l.name)}}function D(s,x){if(s&1&&(e(0,`
          `),t(1,"option",17),e(2),n(),e(3,`
        `)),s&2){let l=x.$implicit;d(),p("ngValue",l),d(),b(l)}}var B=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=!1,this.operatorList=["=","<","<=",">",">=","<>","StartsWith","EndsWith"],this.selectedOperator="=",this.searchValue=""}ngOnInit(){this.prepareGrid()}angularGridReady(l){this.angularGrid=l}prepareGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number"},{id:"complete",name:"% Complete",field:"percentComplete",formatter:u.percentCompleteBar,sortable:!0,type:"number"},{id:"start",name:"Start",field:"start",formatter:u.dateIso,sortable:!0,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:u.dateIso,sortable:!0,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:u.checkmarkMaterial,sortable:!0,type:"number"}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,showHeaderRow:!1,alwaysShowVerticalScroll:!1,enableColumnPicker:!0,enableCellNavigation:!0,enableSelection:!0};let l=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),a=Math.floor(Math.random()*29),y=Math.round(Math.random()*100);l[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:y,percentCompleteNumber:y,start:new Date(i,o,a),finish:new Date(i,o+1,a),effortDriven:r%5===0}}this.dataset=l}clearGridSearchInput(){this.searchValue="",this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||""}`,operator:this.selectedOperator,searchTerms:[this.searchValue||""]})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=E({type:s,selectors:[["ng-component"]],decls:77,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row","row-cols-lg-auto","g-1","align-items-center"],[1,"col"],["for","columnSelect"],["data-test","search-column-list","name","selectedColumn",1,"form-select",3,"ngModelChange","ngModel"],["data-test","search-operator-list","name","selectedOperator",1,"form-select",3,"ngModelChange","ngModel"],[1,"input-group"],["type","text","data-test","search-value-input","name","searchValue","placeholder","search value","autocomplete","off",1,"form-control",3,"input","ngModelChange","ngModel"],["data-test","clear-search-value",1,"btn","btn-outline-secondary","d-flex","align-items-center","pl-2","pr-2",3,"click"],[1,"mdi","mdi-close"],["gridId","grid21",3,"onAngularGridCreated","columns","options","dataset"],[3,"ngValue"]],template:function(r,i){r&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 21: Grid AutoHeight
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),c(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),t(12,"button",4),m("click",function(){return i.toggleSubTitle()}),e(13,`
      `),c(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),t(18,"div",6),e(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),t(20,"ul"),e(21,`
      `),t(22,"li"),e(23,'You define a fixed grid width via "gridWidth" in the View'),n(),e(24,`
      `),t(25,"li"),e(26,'You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)'),n(),e(27,`
      `),t(28,"li"),e(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),n(),e(30,`
    `),n(),e(31,`
  `),n(),e(32,`

  `),t(33,"div",7),e(34,`
    `),t(35,"div",8),e(36,`
      `),t(37,"label",9),e(38,"Single Search:"),n(),e(39,`
    `),n(),e(40,`
    `),t(41,"div",8),e(42,`
      `),t(43,"select",10),f("ngModelChange",function(a){return g(i.selectedColumn,a)||(i.selectedColumn=a),a}),m("ngModelChange",function(){return i.updateFilter()}),e(44,`
        `),S(45,W,4,2,null,null,_),n(),e(47,`
    `),n(),e(48,`
    `),t(49,"div",8),e(50,`
      `),t(51,"select",11),f("ngModelChange",function(a){return g(i.selectedOperator,a)||(i.selectedOperator=a),a}),m("ngModelChange",function(){return i.updateFilter()}),e(52,`
        `),S(53,D,4,2,null,null,_),n(),e(55,`
    `),n(),e(56,`

    `),t(57,"div",8),e(58,`
      `),t(59,"div",12),e(60,`
        `),t(61,"input",13),m("input",function(){return i.updateFilter()}),f("ngModelChange",function(a){return g(i.searchValue,a)||(i.searchValue=a),a}),n(),e(62,`
        `),t(63,"button",14),m("click",function(){return i.clearGridSearchInput()}),e(64,`
          `),c(65,"span",15),e(66,`
        `),n(),e(67,`
      `),n(),e(68,`
    `),n(),e(69,`
  `),n(),e(70,`

  `),c(71,"hr"),e(72,`

  `),t(73,"angular-slickgrid",16),m("onAngularGridCreated",function(a){return i.angularGridReady(a.detail)}),e(74,`
  `),n(),e(75,`
`),n(),e(76,`
`)),r&2&&(d(43),h("ngModel",i.selectedColumn),d(2),C(i.columns),d(6),h("ngModel",i.selectedOperator),d(2),C(i.operatorList),d(8),h("ngModel",i.searchValue),d(12),p("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset))},dependencies:[F,V,T,G,M,w,k,v],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2})}}return s})();export{B as Example21Component};
