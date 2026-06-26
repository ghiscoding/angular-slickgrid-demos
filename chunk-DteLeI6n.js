import {a3 as $a,s,r as r$1,b as bI,j as j1,F as En,G as je,J as Cn,K as qt,u as ui,U as UE,c as cp,T as Tc,p as pp,R as Rp,O as Lv,Z as ZI,W as Wy,d as ap,P as Ap,Q as jv,Y as YI,V as iE,i as fE,_ as Kl,$ as Jl,S as zE,a4 as Wd}from'./main-WTCLCICA.js';import {Z as Ze}from'./chunk-Df9HDp2d.js';function H(d,O){if(d&1){let l=iE();UE(0,`
    `),ui(1,"angular-slickgrid",15),pp("onAngularGridCreated",function(t){Kl(l);let a=fE();return Jl(a.angularGridReady(t.detail))}),UE(2,`
    `),Tc(),UE(3,`
  `);}if(d&2){let l=fE();Wy(),ap("columns",l.columns)("options",l.gridOptions)("dataset",l.dataset);}}var L="assets/data",K=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=false,this.hideSubTitle=false,this.uploadFileRef="",this.templateUrl=`${L}/users.csv`;}angularGridReady(l){this.angularGrid=l;}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r);},t.readAsText(o);}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef="";}destroyGrid(){this.gridCreated=false;}dynamicallyCreateGrid(l){this.gridCreated=false;let o=l?.split(`
`),t=[],a=[];o.forEach((r,x)=>{let C=r.split(","),c={};if(x===0)for(let u of C){let p=$a(u);t.push({id:p,name:u,field:p,filterable:true,sortable:true});}else C.forEach((u,p)=>{c[t[p].id]=u;}),"id"in c?a.push(c):a.push(s(r$1({},c),{id:x}));}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:true,enableExcelExport:true,externalResources:[new Ze],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=true;}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||d)};}static{this.\u0275cmp=bI({type:d,selectors:[["ng-component"]],decls:54,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["id","template-dl",3,"href"],[1,"d-flex","mt-5","align-items-end"],[1,"file-upload"],["for","formFile",1,"form-label"],["type","file","data-test","file-upload-input",1,"form-control",3,"ngModelChange","input","ngModel"],[1,"mx-3"],["id","uploadBtn","data-test","static-data-btn",1,"btn","btn-outline-secondary",3,"click"],[1,"btn","btn-outline-secondary",3,"click"],["gridId","grid17",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,t){o&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return t.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",6),UE(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),Tc(),UE(20,`

  `),ui(21,"div"),UE(22,"A default CSV file can be download "),ui(23,"a",7),UE(24,"here"),Tc(),UE(25,"."),Tc(),UE(26,`

  `),ui(27,"div",8),UE(28,`
    `),ui(29,"div",9),UE(30,`
      `),ui(31,"label",10),UE(32,"Choose a CSV file\u2026"),Tc(),UE(33,`
      `),ui(34,"input",11),Rp("ngModelChange",function(r){return zE(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),pp("input",function(r){return t.handleFileImport(r)}),Tc(),Lv(),UE(35,`
    `),Tc(),UE(36,`
    `),ui(37,"span",12),UE(38,"or"),Tc(),UE(39,`
    `),ui(40,"div"),UE(41,`
      `),ui(42,"button",13),pp("click",function(){return t.handleDefaultCsv()}),UE(43,`
        Use default CSV data
      `),Tc(),UE(44,`
      `),ui(45,"button",14),pp("click",function(){return t.destroyGrid()}),UE(46,"Destroy Grid"),Tc(),UE(47,`
    `),Tc(),UE(48,`
  `),Tc(),UE(49,`

  `),cp(50,"hr"),UE(51,`

  `),ZI(52,H,4,3),Tc(),UE(53,`
`)),o&2&&(Wy(23),ap("href",t.templateUrl,Wd),Wy(11),Ap("ngModel",t.uploadFileRef),jv(),Wy(18),YI(t.gridCreated?52:-1));},dependencies:[j1,En,je,Cn,qt],styles:[`.file-upload{max-width:300px}
`],encapsulation:2});}}return d})();export{K as Example17Component};