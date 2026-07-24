import {a3 as $a,s,r as r$1,_ as _I,j as j1,E as En,z as je,G as Cn,I as qt,u as ui,q as qE,c as cp,T as Tc,p as pp,J as Rp,O as Lv,Y as YI,W as Wy,a as ap,P as Ap,Q as jv,K as KI,V as sE,h as pE,Z as Kl,$ as Jl,S as QE,a4 as Wd}from'./main-MYLFMRPB.js';import {Z as Ze}from'./chunk-6W1Wahwc.js';function H(d,O){if(d&1){let l=sE();qE(0,`
    `),ui(1,"angular-slickgrid",15),pp("onAngularGridCreated",function(t){Kl(l);let a=pE();return Jl(a.angularGridReady(t.detail))}),qE(2,`
    `),Tc(),qE(3,`
  `);}if(d&2){let l=pE();Wy(),ap("columns",l.columns)("options",l.gridOptions)("dataset",l.dataset);}}var L="assets/data",K=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=false,this.hideSubTitle=false,this.uploadFileRef="",this.templateUrl=`${L}/users.csv`;}angularGridReady(l){this.angularGrid=l;}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r);},t.readAsText(o);}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef="";}destroyGrid(){this.gridCreated=false;}dynamicallyCreateGrid(l){this.gridCreated=false;let o=l?.split(`
`),t=[],a=[];o.forEach((r,x)=>{let C=r.split(","),c={};if(x===0)for(let u of C){let p=$a(u);t.push({id:p,name:u,field:p,filterable:true,sortable:true});}else C.forEach((u,p)=>{c[t[p].id]=u;}),"id"in c?a.push(c):a.push(s(r$1({},c),{id:x}));}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:true,enableExcelExport:true,externalResources:[new Ze],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=true;}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||d)};}static{this.\u0275cmp=_I({type:d,selectors:[["ng-component"]],decls:54,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["id","template-dl",3,"href"],[1,"d-flex","mt-5","align-items-end"],[1,"file-upload"],["for","formFile",1,"form-label"],["type","file","data-test","file-upload-input",1,"form-control",3,"ngModelChange","input","ngModel"],[1,"mx-3"],["id","uploadBtn","data-test","static-data-btn",1,"btn","btn-outline-secondary",3,"click"],[1,"btn","btn-outline-secondary",3,"click"],["gridId","grid17",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,t){o&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return t.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),Tc(),qE(20,`

  `),ui(21,"div"),qE(22,"A default CSV file can be download "),ui(23,"a",7),qE(24,"here"),Tc(),qE(25,"."),Tc(),qE(26,`

  `),ui(27,"div",8),qE(28,`
    `),ui(29,"div",9),qE(30,`
      `),ui(31,"label",10),qE(32,"Choose a CSV file\u2026"),Tc(),qE(33,`
      `),ui(34,"input",11),Rp("ngModelChange",function(r){return QE(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),pp("input",function(r){return t.handleFileImport(r)}),Tc(),Lv(),qE(35,`
    `),Tc(),qE(36,`
    `),ui(37,"span",12),qE(38,"or"),Tc(),qE(39,`
    `),ui(40,"div"),qE(41,`
      `),ui(42,"button",13),pp("click",function(){return t.handleDefaultCsv()}),qE(43,`
        Use default CSV data
      `),Tc(),qE(44,`
      `),ui(45,"button",14),pp("click",function(){return t.destroyGrid()}),qE(46,"Destroy Grid"),Tc(),qE(47,`
    `),Tc(),qE(48,`
  `),Tc(),qE(49,`

  `),cp(50,"hr"),qE(51,`

  `),YI(52,H,4,3),Tc(),qE(53,`
`)),o&2&&(Wy(23),ap("href",t.templateUrl,Wd),Wy(11),Ap("ngModel",t.uploadFileRef),jv(),Wy(18),KI(t.gridCreated?52:-1));},dependencies:[j1,En,je,Cn,qt],styles:[`.file-upload{max-width:300px}
`],encapsulation:2});}}return d})();export{K as Example17Component};