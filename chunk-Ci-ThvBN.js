import{h as Wt,m as Sn,s as An,y as ke}from"./main-KCATS47T.js";import{n as et}from"./chunk-BzRTDaIv.js";import{V as R$,d as Dd}from"./chunk-Lo0QQjTd.js";import{Gn as mI,In as kI,K as Jp,P as Hc,Tn as hD,X as Lc,Y as Kp,Yn as oE,cr as sf,dr as uD,en as _p,in as bp,k as GE,o as Ap,qn as nE,tn as au,tt as MI,un as cu,vr as vI,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";import{n as s,t as r}from"./chunk-DarCEgGK.js";function I(d,O){if(d&1){let l=MI();uD(0,`
    `),vi(1,`angular-slickgrid`,15),Ap(`onAngularGridCreated`,function(t){au(l);let a=kI();return cu(a.angularGridReady(t.detail))}),uD(2,`
    `),Lc(),uD(3,`
  `)}if(d&2){let l=kI();fv(),bp(`columns`,l.columns)(`options`,l.gridOptions)(`dataset`,l.dataset)}}var L=`assets/data`;var Q=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=!1,this.hideSubTitle=!1,this.uploadFileRef=``,this.templateUrl=`${L}/users.csv`}angularGridReady(l){this.angularGrid=l}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r)},t.readAsText(o)}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=``}toggleGrid(){this.gridCreated=!this.gridCreated}dynamicallyCreateGrid(l){this.gridCreated=!1;let o=l?.split(`
`),t=[],a=[];o.forEach((r$1,x)=>{let C=r$1.split(`,`),c={};if(x===0)for(let u of C){let p=Dd(u);t.push({id:p,name:u,field:p,filterable:!0,sortable:!0})}else C.forEach((u,p)=>{c[t[p].id]=u}),`id`in c?a.push(c):a.push(s(r({},c),{id:x}))}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new et],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||d)}}static{this.ɵcmp=GE({type:d,selectors:[[`ng-component`]],decls:54,vars:5,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`id`,`template-dl`,3,`href`],[1,`d-flex`,`mt-5`,`align-items-end`],[1,`file-upload`],[`for`,`formFile`,1,`form-label`],[`type`,`file`,`data-test`,`file-upload-input`,1,`form-control`,3,`ngModelChange`,`input`,`ngModel`],[1,`mx-3`],[`id`,`uploadBtn`,`data-test`,`static-data-btn`,1,`btn`,`btn-outline-secondary`,3,`click`],[`data-test`,`toggle-grid-btn`,1,`btn`,`btn-outline-secondary`,3,`click`,`disabled`],[`gridId`,`grid17`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,t){o&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return t.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),Lc(),uD(20,`

  `),vi(21,`div`),uD(22,`A default CSV file can be download `),vi(23,`a`,7),uD(24,`here`),Lc(),uD(25,`.`),Lc(),uD(26,`

  `),vi(27,`div`,8),uD(28,`
    `),vi(29,`div`,9),uD(30,`
      `),vi(31,`label`,10),uD(32,`Choose a CSV file…`),Lc(),uD(33,`
      `),vi(34,`input`,11),nE(),Jp(`ngModelChange`,function(r){return hD(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),Ap(`input`,function(r){return t.handleFileImport(r)}),Lc(),uD(35,`
    `),Lc(),uD(36,`
    `),vi(37,`span`,12),uD(38,`or`),Lc(),uD(39,`
    `),vi(40,`div`),uD(41,`
      `),vi(42,`button`,13),Ap(`click`,function(){return t.handleDefaultCsv()}),uD(43,`
        Use default CSV data
      `),Lc(),uD(44,`
      `),vi(45,`button`,14),Ap(`click`,function(){return t.toggleGrid()}),uD(46),Lc(),uD(47,`
    `),Lc(),uD(48,`
  `),Lc(),uD(49,`

  `),_p(50,`hr`),uD(51,`

  `),mI(52,I,4,3),Lc(),uD(53,`
`)),o&2&&(fv(23),bp(`href`,t.templateUrl,sf),fv(11),Kp(`ngModel`,t.uploadFileRef),oE(),fv(11),bp(`disabled`,t.columns.length===0),fv(),Hc(`
        `,t.gridCreated?`Destroy Grid`:`Recreate Grid`,`
      `),fv(6),vI(t.gridCreated?52:-1))},dependencies:[R$,Sn,ke,An,Wt],styles:[`.file-upload{max-width:300px}
`],encapsulation:2})}}return d})();export{Q as Example17Component};