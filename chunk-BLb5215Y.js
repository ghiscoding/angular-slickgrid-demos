import{n as s,t as r}from"./chunk-DarCEgGK.js";import{$ as Mp,At as TI,Bn as lD,C as Ei,E as Fc,En as iD,Et as SI,K as Ky,Zn as of,b as Dp,c as BE,cn as ay,ct as Oc,er as pI,hn as dI,hr as su,jt as Tp,kr as zp,qt as Xy,sn as au,yt as Qp}from"./chunk-CtIlL7jI.js";import{$ as el,Ot as xz}from"./chunk-C1NeHYCu.js";import{c as Dn,d as In,u as Ge,y as qt}from"./main-JBJUR4DQ.js";import{t as Ze}from"./chunk-dI_4WJwX.js";function I(d,O){if(d&1){let l=TI();iD(0,`
    `),Ei(1,`angular-slickgrid`,15),Mp(`onAngularGridCreated`,function(t){su(l);let a=SI();return au(a.angularGridReady(t.detail))}),iD(2,`
    `),Oc(),iD(3,`
  `)}if(d&2){let l=SI();ay(),Dp(`columns`,l.columns)(`options`,l.gridOptions)(`dataset`,l.dataset)}}var L=`assets/data`;var Q=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=!1,this.hideSubTitle=!1,this.uploadFileRef=``,this.templateUrl=`${L}/users.csv`}angularGridReady(l){this.angularGrid=l}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r)},t.readAsText(o)}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=``}toggleGrid(){this.gridCreated=!this.gridCreated}dynamicallyCreateGrid(l){this.gridCreated=!1;let o=l?.split(`
`),t=[],a=[];o.forEach((r$1,x)=>{let C=r$1.split(`,`),c={};if(x===0)for(let u of C){let p=el(u);t.push({id:p,name:u,field:p,filterable:!0,sortable:!0})}else C.forEach((u,p)=>{c[t[p].id]=u}),`id`in c?a.push(c):a.push(s(r({},c),{id:x}))}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new Ze],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||d)}}static{this.ɵcmp=BE({type:d,selectors:[[`ng-component`]],decls:54,vars:5,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`id`,`template-dl`,3,`href`],[1,`d-flex`,`mt-5`,`align-items-end`],[1,`file-upload`],[`for`,`formFile`,1,`form-label`],[`type`,`file`,`data-test`,`file-upload-input`,1,`form-control`,3,`ngModelChange`,`input`,`ngModel`],[1,`mx-3`],[`id`,`uploadBtn`,`data-test`,`static-data-btn`,1,`btn`,`btn-outline-secondary`,3,`click`],[`data-test`,`toggle-grid-btn`,1,`btn`,`btn-outline-secondary`,3,`click`,`disabled`],[`gridId`,`grid17`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,t){o&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return t.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),Oc(),iD(20,`

  `),Ei(21,`div`),iD(22,`A default CSV file can be download `),Ei(23,`a`,7),iD(24,`here`),Oc(),iD(25,`.`),Oc(),iD(26,`

  `),Ei(27,`div`,8),iD(28,`
    `),Ei(29,`div`,9),iD(30,`
      `),Ei(31,`label`,10),iD(32,`Choose a CSV file…`),Oc(),iD(33,`
      `),Ei(34,`input`,11),Ky(),Qp(`ngModelChange`,function(r){return lD(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),Mp(`input`,function(r){return t.handleFileImport(r)}),Oc(),iD(35,`
    `),Oc(),iD(36,`
    `),Ei(37,`span`,12),iD(38,`or`),Oc(),iD(39,`
    `),Ei(40,`div`),iD(41,`
      `),Ei(42,`button`,13),Mp(`click`,function(){return t.handleDefaultCsv()}),iD(43,`
        Use default CSV data
      `),Oc(),iD(44,`
      `),Ei(45,`button`,14),Mp(`click`,function(){return t.toggleGrid()}),iD(46),Oc(),iD(47,`
    `),Oc(),iD(48,`
  `),Oc(),iD(49,`

  `),Tp(50,`hr`),iD(51,`

  `),dI(52,I,4,3),Oc(),iD(53,`
`)),o&2&&(ay(23),Dp(`href`,t.templateUrl,of),ay(11),zp(`ngModel`,t.uploadFileRef),Xy(),ay(11),Dp(`disabled`,t.columns.length===0),ay(),Fc(`
        `,t.gridCreated?`Destroy Grid`:`Recreate Grid`,`
      `),ay(6),pI(t.gridCreated?52:-1))},dependencies:[xz,In,Ge,Dn,qt],styles:[`.file-upload{max-width:300px}
`],encapsulation:2})}}return d})();export{Q as Example17Component};