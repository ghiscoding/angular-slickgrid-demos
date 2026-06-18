import {a3 as $a,s,r as r$1,T as TI,U as U1,F as En,I as je,K as Cn,O as qt,u as ui,B as BE,a as ap,d as Tc,f as fp,P as Ap,R as Ov,z as zI,e as Uy,g as sp,V as xp,W as Lv,Q as QI,Z as rE,n as uE,_ as Kl,$ as Jl,Y as WE,a4 as qd}from'./main-C6PQTYH6.js';import {Z as Ze}from'./chunk-CP-2FMG8.js';function H(d,O){if(d&1){let l=rE();BE(0,`
    `),ui(1,"angular-slickgrid",15),fp("onAngularGridCreated",function(t){Kl(l);let a=uE();return Jl(a.angularGridReady(t.detail))}),BE(2,`
    `),Tc(),BE(3,`
  `);}if(d&2){let l=uE();Uy(),sp("columns",l.columns)("options",l.gridOptions)("dataset",l.dataset);}}var L="assets/data",K=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=false,this.hideSubTitle=false,this.uploadFileRef="",this.templateUrl=`${L}/users.csv`;}angularGridReady(l){this.angularGrid=l;}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r);},t.readAsText(o);}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef="";}destroyGrid(){this.gridCreated=false;}dynamicallyCreateGrid(l){this.gridCreated=false;let o=l?.split(`
`),t=[],a=[];o.forEach((r,x)=>{let C=r.split(","),c={};if(x===0)for(let u of C){let p=$a(u);t.push({id:p,name:u,field:p,filterable:true,sortable:true});}else C.forEach((u,p)=>{c[t[p].id]=u;}),"id"in c?a.push(c):a.push(s(r$1({},c),{id:x}));}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:true,enableExcelExport:true,externalResources:[new Ze],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=true;}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||d)};}static{this.\u0275cmp=TI({type:d,selectors:[["ng-component"]],decls:54,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["id","template-dl",3,"href"],[1,"d-flex","mt-5","align-items-end"],[1,"file-upload"],["for","formFile",1,"form-label"],["type","file","data-test","file-upload-input",1,"form-control",3,"ngModelChange","input","ngModel"],[1,"mx-3"],["id","uploadBtn","data-test","static-data-btn",1,"btn","btn-outline-secondary",3,"click"],[1,"btn","btn-outline-secondary",3,"click"],["gridId","grid17",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,t){o&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return t.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),Tc(),BE(20,`

  `),ui(21,"div"),BE(22,"A default CSV file can be download "),ui(23,"a",7),BE(24,"here"),Tc(),BE(25,"."),Tc(),BE(26,`

  `),ui(27,"div",8),BE(28,`
    `),ui(29,"div",9),BE(30,`
      `),ui(31,"label",10),BE(32,"Choose a CSV file\u2026"),Tc(),BE(33,`
      `),ui(34,"input",11),Ap("ngModelChange",function(r){return WE(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),fp("input",function(r){return t.handleFileImport(r)}),Tc(),Ov(),BE(35,`
    `),Tc(),BE(36,`
    `),ui(37,"span",12),BE(38,"or"),Tc(),BE(39,`
    `),ui(40,"div"),BE(41,`
      `),ui(42,"button",13),fp("click",function(){return t.handleDefaultCsv()}),BE(43,`
        Use default CSV data
      `),Tc(),BE(44,`
      `),ui(45,"button",14),fp("click",function(){return t.destroyGrid()}),BE(46,"Destroy Grid"),Tc(),BE(47,`
    `),Tc(),BE(48,`
  `),Tc(),BE(49,`

  `),ap(50,"hr"),BE(51,`

  `),zI(52,H,4,3),Tc(),BE(53,`
`)),o&2&&(Uy(23),sp("href",t.templateUrl,qd),Uy(11),xp("ngModel",t.uploadFileRef),Lv(),Uy(18),QI(t.gridCreated?52:-1));},dependencies:[U1,En,je,Cn,qt],styles:[`.file-upload{max-width:300px}
`],encapsulation:2});}}return d})();export{K as Example17Component};