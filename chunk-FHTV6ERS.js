import{b as V,c as R,f as A,o as M}from"./chunk-ZTHMMPCT.js";import{b as U}from"./chunk-CDWFOXJG.js";import{Da as z,H as N}from"./chunk-IBXCHNN7.js";import{$ as y,Aa as m,Kb as e,Pa as w,Pb as D,Qb as G,Rb as F,_ as S,db as v,eb as T,ib as g,jb as i,kb as n,lb as f,sb as k,vb as s,xb as h,ya as E}from"./chunk-XXRVAQWA.js";import{a as b,b as _}from"./chunk-PRARYYF3.js";function W(d,H){if(d&1){let l=k();e(0,`
    `),i(1,"angular-slickgrid",15),s("onAngularGridCreated",function(t){S(l);let a=h();return y(a.angularGridReady(t.detail))}),e(2,`
    `),n(),e(3,`
  `)}if(d&2){let l=h();m(),g("columns",l.columnDefinitions)("options",l.gridOptions)("dataset",l.dataset)}}var B="assets/data",q=(()=>{class d{constructor(){this.columnDefinitions=[],this.dataset=[],this.gridCreated=!1,this.hideSubTitle=!1,this.uploadFileRef="",this.templateUrl=`${B}/users.csv`}angularGridReady(l){this.angularGrid=l}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r)},t.readAsText(o)}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=""}destroyGrid(){this.gridCreated=!1}dynamicallyCreateGrid(l){this.gridCreated=!1;let o=l?.split(`
`),t=[],a=[];o.forEach((r,x)=>{let C=r.split(","),c={};if(x===0)for(let u of C){let p=N(u);t.push({id:p,name:u,field:p,filterable:!0,sortable:!0})}else C.forEach((u,p)=>{c[t[p].id]=u}),"id"in c?a.push(c):a.push(_(b({},c),{id:x}))}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new U],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columnDefinitions=t,this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(o){return new(o||d)}}static{this.\u0275cmp=w({type:d,selectors:[["ng-component"]],decls:54,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["id","template-dl",3,"href"],[1,"d-flex","mt-5","align-items-end"],[1,"file-upload"],["for","formFile",1,"form-label"],["type","file","data-test","file-upload-input",1,"form-control",3,"ngModelChange","input","ngModel"],[1,"mx-3"],["id","uploadBtn","data-test","static-data-btn",1,"btn","btn-outline-secondary",3,"click"],[1,"btn","btn-outline-secondary",3,"click"],["gridId","grid17",3,"onAngularGridCreated","columns","options","dataset"]],template:function(o,t){o&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),i(4,"span",1),e(5,`
      `),i(6,"a",2),e(7,`
        `),f(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),i(12,"button",4),s("click",function(){return t.toggleSubTitle()}),e(13,`
      `),f(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),i(18,"div",6),e(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),n(),e(20,`

  `),i(21,"div"),e(22,"A default CSV file can be download "),i(23,"a",7),e(24,"here"),n(),e(25,"."),n(),e(26,`

  `),i(27,"div",8),e(28,`
    `),i(29,"div",9),e(30,`
      `),i(31,"label",10),e(32,"Choose a CSV file\u2026"),n(),e(33,`
      `),i(34,"input",11),F("ngModelChange",function(r){return G(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),s("input",function(r){return t.handleFileImport(r)}),n(),e(35,`
    `),n(),e(36,`
    `),i(37,"span",12),e(38,"or"),n(),e(39,`
    `),i(40,"div"),e(41,`
      `),i(42,"button",13),s("click",function(){return t.handleDefaultCsv()}),e(43,`
        Use default CSV data
      `),n(),e(44,`
      `),i(45,"button",14),s("click",function(){return t.destroyGrid()}),e(46,"Destroy Grid"),n(),e(47,`
    `),n(),e(48,`
  `),n(),e(49,`

  `),f(50,"hr"),e(51,`

  `),v(52,W,4,3),n(),e(53,`
`)),o&2&&(m(23),g("href",t.templateUrl,E),m(11),D("ngModel",t.uploadFileRef),m(18),T(t.gridCreated?52:-1))},dependencies:[z,M,V,R,A],styles:[`.file-upload{max-width:300px}
`],encapsulation:2})}}return d})();export{q as Example17Component};
