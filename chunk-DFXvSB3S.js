import {q as qN,T as TI,U as U1,F as En,a6 as An,a7 as Mn,I as je,a8 as rt,K as Cn,O as qt,u as ui,B as BE,a as ap,d as Tc,f as fp,P as Ap,ab as YI,ad as ZI,R as Ov,e as Uy,V as xp,W as Lv,ac as KI,g as sp,M as Mp,Y as WE}from'./main-C6PQTYH6.js';function I(s,S){if(s&1&&(BE(0,`
          `),ui(1,"option",17),BE(2),Tc(),BE(3,`
        `)),s&2){let a=S.$implicit;Uy(),sp("ngValue",a),Uy(),Mp(a.name);}}function O(s,S){if(s&1&&(BE(0,`
          `),ui(1,"option",17),BE(2),Tc(),BE(3,`
        `)),s&2){let a=S.$implicit;Uy(),sp("ngValue",a),Uy(),Mp(a);}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=false,this.operatorList=["=","<","<=",">",">=","<>","StartsWith","EndsWith"],this.selectedOperator="=",this.searchValue="";}ngOnInit(){this.prepareGrid();}angularGridReady(a){this.angularGrid=a;}prepareGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number"},{id:"complete",name:"% Complete",field:"percentComplete",formatter:qN.percentCompleteBar,sortable:true,type:"number"},{id:"start",name:"Start",field:"start",formatter:qN.dateIso,sortable:true,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:qN.dateIso,sortable:true,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:qN.checkmarkMaterial,sortable:true,type:"number"}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:true,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,showHeaderRow:false,alwaysShowVerticalScroll:false,enableColumnPicker:true,enableCellNavigation:true,enableSelection:true};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0};}this.dataset=a;}clearGridSearchInput(){this.searchValue="",this.updateFilter();}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||""}`,operator:this.selectedOperator,searchTerms:[this.searchValue||""]});}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(r){return new(r||s)};}static{this.\u0275cmp=TI({type:s,selectors:[["ng-component"]],decls:77,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row","row-cols-lg-auto","g-1","align-items-center"],[1,"col"],["for","columnSelect"],["data-test","search-column-list","name","selectedColumn",1,"form-select",3,"ngModelChange","ngModel"],["data-test","search-operator-list","name","selectedOperator",1,"form-select",3,"ngModelChange","ngModel"],[1,"input-group"],["type","text","data-test","search-value-input","name","searchValue","placeholder","search value","autocomplete","off",1,"form-control",3,"input","ngModelChange","ngModel"],["data-test","clear-search-value",1,"btn","btn-outline-secondary","d-flex","align-items-center","pl-2","pr-2",3,"click"],[1,"mdi","mdi-close"],["gridId","grid21",3,"onAngularGridCreated","columns","options","dataset"],[3,"ngValue"]],template:function(r,i){r&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 21: Grid AutoHeight
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return i.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),ui(20,"ul"),BE(21,`
      `),ui(22,"li"),BE(23,'You define a fixed grid width via "gridWidth" in the View'),Tc(),BE(24,`
      `),ui(25,"li"),BE(26,'You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)'),Tc(),BE(27,`
      `),ui(28,"li"),BE(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),Tc(),BE(30,`
    `),Tc(),BE(31,`
  `),Tc(),BE(32,`

  `),ui(33,"div",7),BE(34,`
    `),ui(35,"div",8),BE(36,`
      `),ui(37,"label",9),BE(38,"Single Search:"),Tc(),BE(39,`
    `),Tc(),BE(40,`
    `),ui(41,"div",8),BE(42,`
      `),ui(43,"select",10),Ap("ngModelChange",function(l){return WE(i.selectedColumn,l)||(i.selectedColumn=l),l}),fp("ngModelChange",function(){return i.updateFilter()}),BE(44,`
        `),YI(45,I,4,2,null,null,ZI),Tc(),Ov(),BE(47,`
    `),Tc(),BE(48,`
    `),ui(49,"div",8),BE(50,`
      `),ui(51,"select",11),Ap("ngModelChange",function(l){return WE(i.selectedOperator,l)||(i.selectedOperator=l),l}),fp("ngModelChange",function(){return i.updateFilter()}),BE(52,`
        `),YI(53,O,4,2,null,null,ZI),Tc(),Ov(),BE(55,`
    `),Tc(),BE(56,`

    `),ui(57,"div",8),BE(58,`
      `),ui(59,"div",12),BE(60,`
        `),ui(61,"input",13),fp("input",function(){return i.updateFilter()}),Ap("ngModelChange",function(l){return WE(i.searchValue,l)||(i.searchValue=l),l}),Tc(),Ov(),BE(62,`
        `),ui(63,"button",14),fp("click",function(){return i.clearGridSearchInput()}),BE(64,`
          `),ap(65,"span",15),BE(66,`
        `),Tc(),BE(67,`
      `),Tc(),BE(68,`
    `),Tc(),BE(69,`
  `),Tc(),BE(70,`

  `),ap(71,"hr"),BE(72,`

  `),ui(73,"angular-slickgrid",16),fp("onAngularGridCreated",function(l){return i.angularGridReady(l.detail)}),BE(74,`
  `),Tc(),BE(75,`
`),Tc(),BE(76,`
`)),r&2&&(Uy(43),xp("ngModel",i.selectedColumn),Lv(),Uy(2),KI(i.columns),Uy(6),xp("ngModel",i.selectedOperator),Lv(),Uy(2),KI(i.operatorList),Uy(8),xp("ngModel",i.searchValue),Lv(),Uy(12),sp("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[U1,En,An,Mn,je,rt,Cn,qt],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2});}}return s})();export{N as Example21Component};