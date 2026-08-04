import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Fn as mp,Gn as ou,Hn as oD,P as Kv,Pt as Xv,Sn as iu,Wt as av,Z as NE,Zt as cD,dn as gi,g as Dp,h as DE,j as Jd,l as BI,n as $p,on as fE,pn as gp,tn as dE,u as Bp,yr as xc}from"./chunk-B0w5H0p9.js";import{gt as q1,n as $a}from"./chunk-C7G4ZLh2.js";import{_ as je,c as Cn,l as En,v as qt}from"./main-4YT7AQ4D.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";function H(d,O){if(d&1){let l=DE();oD(0,`
    `),gi(1,`angular-slickgrid`,15),Dp(`onAngularGridCreated`,function(t){ou(l);return iu(NE().angularGridReady(t.detail))}),oD(2,`
    `),xc(),oD(3,`
  `)}if(d&2){let l=NE();av(),gp(`columns`,l.columns)(`options`,l.gridOptions)(`dataset`,l.dataset)}}var L=`assets/data`;var K=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=!1,this.hideSubTitle=!1,this.uploadFileRef=``,this.templateUrl=`${L}/users.csv`}angularGridReady(l){this.angularGrid=l}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r)},t.readAsText(o)}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=``}destroyGrid(){this.gridCreated=!1}dynamicallyCreateGrid(l){this.gridCreated=!1;let o=l?.split(`
`),t=[],a=[];o.forEach((r$1,x)=>{let C=r$1.split(`,`),c={};if(x===0)for(let u of C){let p=$a(u);t.push({id:p,name:u,field:p,filterable:!0,sortable:!0})}else C.forEach((u,p)=>{c[t[p].id]=u}),`id`in c?a.push(c):a.push(s(r({},c),{id:x}))}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new Ze],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||d)}}static{this.ɵcmp=BI({type:d,selectors:[[`ng-component`]],decls:54,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`id`,`template-dl`,3,`href`],[1,`d-flex`,`mt-5`,`align-items-end`],[1,`file-upload`],[`for`,`formFile`,1,`form-label`],[`type`,`file`,`data-test`,`file-upload-input`,1,`form-control`,3,`ngModelChange`,`input`,`ngModel`],[1,`mx-3`],[`id`,`uploadBtn`,`data-test`,`static-data-btn`,1,`btn`,`btn-outline-secondary`,3,`click`],[1,`btn`,`btn-outline-secondary`,3,`click`],[`gridId`,`grid17`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,t){o&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return t.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),xc(),oD(20,`

  `),gi(21,`div`),oD(22,`A default CSV file can be download `),gi(23,`a`,7),oD(24,`here`),xc(),oD(25,`.`),xc(),oD(26,`

  `),gi(27,`div`,8),oD(28,`
    `),gi(29,`div`,9),oD(30,`
      `),gi(31,`label`,10),oD(32,`Choose a CSV file…`),xc(),oD(33,`
      `),gi(34,`input`,11),$p(`ngModelChange`,function(r){return cD(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),Dp(`input`,function(r){return t.handleFileImport(r)}),xc(),Kv(),oD(35,`
    `),xc(),oD(36,`
    `),gi(37,`span`,12),oD(38,`or`),xc(),oD(39,`
    `),gi(40,`div`),oD(41,`
      `),gi(42,`button`,13),Dp(`click`,function(){return t.handleDefaultCsv()}),oD(43,`
        Use default CSV data
      `),xc(),oD(44,`
      `),gi(45,`button`,14),Dp(`click`,function(){return t.destroyGrid()}),oD(46,`Destroy Grid`),xc(),oD(47,`
    `),xc(),oD(48,`
  `),xc(),oD(49,`

  `),mp(50,`hr`),oD(51,`

  `),dE(52,H,4,3),xc(),oD(53,`
`)),o&2&&(av(23),gp(`href`,t.templateUrl,Jd),av(11),Bp(`ngModel`,t.uploadFileRef),Xv(),av(18),fE(t.gridCreated?52:-1))},dependencies:[q1,En,je,Cn,qt],styles:[`.file-upload{max-width:300px}
`],encapsulation:2})}}return d})();export{K as Example17Component};