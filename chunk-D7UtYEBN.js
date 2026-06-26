import {X as XN,b as bI,j as j1,F as En,a6 as An,a7 as Mn,G as je,a8 as rt,J as Cn,K as qt,u as ui,U as UE,c as cp,T as Tc,p as pp,R as Rp,ab as JI,ad as KI,O as Lv,W as Wy,P as Ap,Q as jv,ac as XI,d as ap,N as Np,S as zE}from'./main-WTCLCICA.js';function I(s,S){if(s&1&&(UE(0,`
          `),ui(1,"option",17),UE(2),Tc(),UE(3,`
        `)),s&2){let a=S.$implicit;Wy(),ap("ngValue",a),Wy(),Np(a.name);}}function O(s,S){if(s&1&&(UE(0,`
          `),ui(1,"option",17),UE(2),Tc(),UE(3,`
        `)),s&2){let a=S.$implicit;Wy(),ap("ngValue",a),Wy(),Np(a);}}var N=(()=>{class s{constructor(){this.columns=[],this.hideSubTitle=false,this.operatorList=["=","<","<=",">",">=","<>","StartsWith","EndsWith"],this.selectedOperator="=",this.searchValue="";}ngOnInit(){this.prepareGrid();}angularGridReady(a){this.angularGrid=a;}prepareGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,type:"number"},{id:"complete",name:"% Complete",field:"percentComplete",formatter:XN.percentCompleteBar,sortable:true,type:"number"},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,type:"date"},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,sortable:true,type:"date"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:XN.checkmarkMaterial,sortable:true,type:"number"}],this.selectedColumn=this.columns[0],this.gridOptions={autoHeight:true,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:true,showHeaderRow:false,alwaysShowVerticalScroll:false,enableColumnPicker:true,enableCellNavigation:true,enableSelection:true};let a=[];for(let r=0;r<25;r++){let i=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),l=Math.floor(Math.random()*29),M=Math.round(Math.random()*100);a[r]={id:r,title:"Task "+r,duration:Math.round(Math.random()*100)+"",percentComplete:M,percentCompleteNumber:M,start:new Date(i,o,l),finish:new Date(i,o+1,l),effortDriven:r%5===0};}this.dataset=a;}clearGridSearchInput(){this.searchValue="",this.updateFilter();}updateFilter(){this.angularGrid.filterService.updateSingleFilter({columnId:`${this.selectedColumn.id||""}`,operator:this.selectedOperator,searchTerms:[this.searchValue||""]});}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(r){return new(r||s)};}static{this.\u0275cmp=bI({type:s,selectors:[["ng-component"]],decls:77,vars:6,consts:[[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example21.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row","row-cols-lg-auto","g-1","align-items-center"],[1,"col"],["for","columnSelect"],["data-test","search-column-list","name","selectedColumn",1,"form-select",3,"ngModelChange","ngModel"],["data-test","search-operator-list","name","selectedOperator",1,"form-select",3,"ngModelChange","ngModel"],[1,"input-group"],["type","text","data-test","search-value-input","name","searchValue","placeholder","search value","autocomplete","off",1,"form-control",3,"input","ngModelChange","ngModel"],["data-test","clear-search-value",1,"btn","btn-outline-secondary","d-flex","align-items-center","pl-2","pr-2",3,"click"],[1,"mdi","mdi-close"],["gridId","grid21",3,"onAngularGridCreated","columns","options","dataset"],[3,"ngValue"]],template:function(r,i){r&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 21: Grid AutoHeight
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return i.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",6),UE(19,`
    The SlickGrid option "autoHeight" can be used if you wish to keep the full height of the grid without any scrolling
    `),ui(20,"ul"),UE(21,`
      `),ui(22,"li"),UE(23,'You define a fixed grid width via "gridWidth" in the View'),Tc(),UE(24,`
      `),ui(25,"li"),UE(26,'You can still use the "autoResize" for the width to be resized automatically (the height will never change in this case)'),Tc(),UE(27,`
      `),ui(28,"li"),UE(29,`
        This dataset has 25 rows, if you scroll down the page you can see the entire set is shown without any grid scrolling (though you
        might have browser scrolling)
      `),Tc(),UE(30,`
    `),Tc(),UE(31,`
  `),Tc(),UE(32,`

  `),ui(33,"div",7),UE(34,`
    `),ui(35,"div",8),UE(36,`
      `),ui(37,"label",9),UE(38,"Single Search:"),Tc(),UE(39,`
    `),Tc(),UE(40,`
    `),ui(41,"div",8),UE(42,`
      `),ui(43,"select",10),Rp("ngModelChange",function(l){return zE(i.selectedColumn,l)||(i.selectedColumn=l),l}),pp("ngModelChange",function(){return i.updateFilter()}),UE(44,`
        `),JI(45,I,4,2,null,null,KI),Tc(),Lv(),UE(47,`
    `),Tc(),UE(48,`
    `),ui(49,"div",8),UE(50,`
      `),ui(51,"select",11),Rp("ngModelChange",function(l){return zE(i.selectedOperator,l)||(i.selectedOperator=l),l}),pp("ngModelChange",function(){return i.updateFilter()}),UE(52,`
        `),JI(53,O,4,2,null,null,KI),Tc(),Lv(),UE(55,`
    `),Tc(),UE(56,`

    `),ui(57,"div",8),UE(58,`
      `),ui(59,"div",12),UE(60,`
        `),ui(61,"input",13),pp("input",function(){return i.updateFilter()}),Rp("ngModelChange",function(l){return zE(i.searchValue,l)||(i.searchValue=l),l}),Tc(),Lv(),UE(62,`
        `),ui(63,"button",14),pp("click",function(){return i.clearGridSearchInput()}),UE(64,`
          `),cp(65,"span",15),UE(66,`
        `),Tc(),UE(67,`
      `),Tc(),UE(68,`
    `),Tc(),UE(69,`
  `),Tc(),UE(70,`

  `),cp(71,"hr"),UE(72,`

  `),ui(73,"angular-slickgrid",16),pp("onAngularGridCreated",function(l){return i.angularGridReady(l.detail)}),UE(74,`
  `),Tc(),UE(75,`
`),Tc(),UE(76,`
`)),r&2&&(Wy(43),Ap("ngModel",i.selectedColumn),jv(),Wy(2),XI(i.columns),Wy(6),Ap("ngModel",i.selectedOperator),jv(),Wy(2),XI(i.operatorList),Wy(8),Ap("ngModel",i.searchValue),jv(),Wy(12),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1,En,An,Mn,je,rt,Cn,qt],styles:[`#grid21 .slick-header-column:last-child .slick-header-menu-button,#grid21 .slick-header-column:last-child .slick-resizable-handle,#grid21 .slick-header-column:last-child .slick-sort-indicator,#grid21 .slick-header-column:last-child .slick-sort-indicator-numbered{margin-right:18px}.duration-bg{background-color:#e9d4f1!important}
`],encapsulation:2});}}return s})();export{N as Example21Component};