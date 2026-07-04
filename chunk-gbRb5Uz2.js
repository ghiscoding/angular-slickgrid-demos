import {X as XN,_ as _I,j as j1,E as En,a6 as An,a7 as Mn,z as je,a8 as rt,G as Cn,I as qt,u as ui,q as qE,c as cp,T as Tc,p as pp,J as Rp,ab as XI,ad as JI,O as Lv,W as Wy,P as Ap,Q as jv,ac as eE,a as ap,N as Np,S as QE}from'./main-MYLFMRPB.js';function I(s,S){if(s&1&&(qE(0,`
          `),ui(1,"option",17),qE(2),Tc(),qE(3,`
        `)),s&2){let a=S.$implicit;Wy(),ap("ngValue",a),Wy(),Np(a.name);}}function O(s,S){if(s&1&&(qE(0,`
          `),ui(1,"option",17),qE(2),Tc(),qE(3,`
        `)),s&2){let a=S.$implicit;Wy(),ap("ngValue",a),Wy(),Np(a);}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=false,this.operatorList=["=","<","<=",">",">=","<>","StartsWith","EndsWith"],this.selectedOperator="=",this.searchValue="";}ngOnInit(){this.prepareGrid();}angularGridReady(a){this.angularGrid=a;}prepareGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number"},{id:"complete",name:"% Complete",field:"percentComplete",formatter:XN.percentCompleteBar,sortable:true,type:"number"},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,sortable:true,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:XN.checkmarkMaterial,sortable:true,type:"number"}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:true,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,showHeaderRow:false,alwaysShowVerticalScroll:false,enableColumnPicker:true,enableCellNavigation:true,enableSelection:true};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0};}this.dataset=a;}clearGridSearchInput(){this.searchValue="",this.updateFilter();}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||""}`,operator:this.selectedOperator,searchTerms:[this.searchValue||""]});}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(r){return new(r||s)};}static{this.\u0275cmp=_I({type:s,selectors:[["ng-component"]],decls:77,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row","row-cols-lg-auto","g-1","align-items-center"],[1,"col"],["for","columnSelect"],["data-test","search-column-list","name","selectedColumn",1,"form-select",3,"ngModelChange","ngModel"],["data-test","search-operator-list","name","selectedOperator",1,"form-select",3,"ngModelChange","ngModel"],[1,"input-group"],["type","text","data-test","search-value-input","name","searchValue","placeholder","search value","autocomplete","off",1,"form-control",3,"input","ngModelChange","ngModel"],["data-test","clear-search-value",1,"btn","btn-outline-secondary","d-flex","align-items-center","pl-2","pr-2",3,"click"],[1,"mdi","mdi-close"],["gridId","grid21",3,"onAngularGridCreated","columns","options","dataset"],[3,"ngValue"]],template:function(r,i){r&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 21: Grid AutoHeight
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return i.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),ui(20,"ul"),qE(21,`
      `),ui(22,"li"),qE(23,'You define a fixed grid width via "gridWidth" in the View'),Tc(),qE(24,`
      `),ui(25,"li"),qE(26,'You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)'),Tc(),qE(27,`
      `),ui(28,"li"),qE(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),Tc(),qE(30,`
    `),Tc(),qE(31,`
  `),Tc(),qE(32,`

  `),ui(33,"div",7),qE(34,`
    `),ui(35,"div",8),qE(36,`
      `),ui(37,"label",9),qE(38,"Single Search:"),Tc(),qE(39,`
    `),Tc(),qE(40,`
    `),ui(41,"div",8),qE(42,`
      `),ui(43,"select",10),Rp("ngModelChange",function(l){return QE(i.selectedColumn,l)||(i.selectedColumn=l),l}),pp("ngModelChange",function(){return i.updateFilter()}),qE(44,`
        `),XI(45,I,4,2,null,null,JI),Tc(),Lv(),qE(47,`
    `),Tc(),qE(48,`
    `),ui(49,"div",8),qE(50,`
      `),ui(51,"select",11),Rp("ngModelChange",function(l){return QE(i.selectedOperator,l)||(i.selectedOperator=l),l}),pp("ngModelChange",function(){return i.updateFilter()}),qE(52,`
        `),XI(53,O,4,2,null,null,JI),Tc(),Lv(),qE(55,`
    `),Tc(),qE(56,`

    `),ui(57,"div",8),qE(58,`
      `),ui(59,"div",12),qE(60,`
        `),ui(61,"input",13),pp("input",function(){return i.updateFilter()}),Rp("ngModelChange",function(l){return QE(i.searchValue,l)||(i.searchValue=l),l}),Tc(),Lv(),qE(62,`
        `),ui(63,"button",14),pp("click",function(){return i.clearGridSearchInput()}),qE(64,`
          `),cp(65,"span",15),qE(66,`
        `),Tc(),qE(67,`
      `),Tc(),qE(68,`
    `),Tc(),qE(69,`
  `),Tc(),qE(70,`

  `),cp(71,"hr"),qE(72,`

  `),ui(73,"angular-slickgrid",16),pp("onAngularGridCreated",function(l){return i.angularGridReady(l.detail)}),qE(74,`
  `),Tc(),qE(75,`
`),Tc(),qE(76,`
`)),r&2&&(Wy(43),Ap("ngModel",i.selectedColumn),jv(),Wy(2),eE(i.columns),Wy(6),Ap("ngModel",i.selectedOperator),jv(),Wy(2),eE(i.operatorList),Wy(8),Ap("ngModel",i.searchValue),jv(),Wy(12),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1,En,An,Mn,je,rt,Cn,qt],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2});}}return s})();export{N as Example21Component};