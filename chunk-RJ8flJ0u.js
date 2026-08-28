import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Dt as UE,En as iD,H as Jy,Kn as mp,Qn as pI,Rn as lD,Rt as Xd,Tt as Tp,Wn as mi,_n as fI,bt as SI,dt as Pc,hr as vp,kn as iu,kt as Up,ln as cy,o as Ac,or as su,pn as eE,r as $p,wt as TI}from"./chunk-06EGdSfW.js";import{H as _W,x as Qa}from"./chunk-CAMk6vEo.js";import{_ as Vn,d as Fn,g as Te,s as $t}from"./main-ZP4IXK6Z.js";import{t as Ze}from"./chunk-CVoct-s8.js";function I(d,O){if(d&1){let l=TI();iD(0,`
    `),mi(1,`angular-slickgrid`,15),Tp(`onAngularGridCreated`,function(t){iu(l);return su(SI().angularGridReady(t.detail))}),iD(2,`
    `),Ac(),iD(3,`
  `)}if(d&2){let l=SI();cy(),mp(`columns`,l.columns)(`options`,l.gridOptions)(`dataset`,l.dataset)}}var L=`assets/data`;var Q=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=!1,this.hideSubTitle=!1,this.uploadFileRef=``,this.templateUrl=`${L}/users.csv`}angularGridReady(l){this.angularGrid=l}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r)},t.readAsText(o)}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=``}toggleGrid(){this.gridCreated=!this.gridCreated}dynamicallyCreateGrid(l){this.gridCreated=!1;let o=l?.split(`
`),t=[],a=[];o.forEach((r$1,x)=>{let C=r$1.split(`,`),c={};if(x===0)for(let u of C){let p=Qa(u);t.push({id:p,name:u,field:p,filterable:!0,sortable:!0})}else C.forEach((u,p)=>{c[t[p].id]=u}),`id`in c?a.push(c):a.push(s(r({},c),{id:x}))}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new Ze],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||d)}}static{this.ɵcmp=UE({type:d,selectors:[[`ng-component`]],decls:54,vars:5,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`id`,`template-dl`,3,`href`],[1,`d-flex`,`mt-5`,`align-items-end`],[1,`file-upload`],[`for`,`formFile`,1,`form-label`],[`type`,`file`,`data-test`,`file-upload-input`,1,`form-control`,3,`ngModelChange`,`input`,`ngModel`],[1,`mx-3`],[`id`,`uploadBtn`,`data-test`,`static-data-btn`,1,`btn`,`btn-outline-secondary`,3,`click`],[`data-test`,`toggle-grid-btn`,1,`btn`,`btn-outline-secondary`,3,`click`,`disabled`],[`gridId`,`grid17`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,t){o&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return t.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),Ac(),iD(20,`

  `),mi(21,`div`),iD(22,`A default CSV file can be download `),mi(23,`a`,7),iD(24,`here`),Ac(),iD(25,`.`),Ac(),iD(26,`

  `),mi(27,`div`,8),iD(28,`
    `),mi(29,`div`,9),iD(30,`
      `),mi(31,`label`,10),iD(32,`Choose a CSV file…`),Ac(),iD(33,`
      `),mi(34,`input`,11),$p(`ngModelChange`,function(r){return lD(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),Tp(`input`,function(r){return t.handleFileImport(r)}),Ac(),Jy(),iD(35,`
    `),Ac(),iD(36,`
    `),mi(37,`span`,12),iD(38,`or`),Ac(),iD(39,`
    `),mi(40,`div`),iD(41,`
      `),mi(42,`button`,13),Tp(`click`,function(){return t.handleDefaultCsv()}),iD(43,`
        Use default CSV data
      `),Ac(),iD(44,`
      `),mi(45,`button`,14),Tp(`click`,function(){return t.toggleGrid()}),iD(46),Ac(),iD(47,`
    `),Ac(),iD(48,`
  `),Ac(),iD(49,`

  `),vp(50,`hr`),iD(51,`

  `),fI(52,I,4,3),Ac(),iD(53,`
`)),o&2&&(cy(23),mp(`href`,t.templateUrl,Xd),cy(11),Up(`ngModel`,t.uploadFileRef),eE(),cy(11),mp(`disabled`,t.columns.length===0),cy(),Pc(`
        `,t.gridCreated?`Destroy Grid`:`Recreate Grid`,`
      `),cy(6),pI(t.gridCreated?52:-1))},dependencies:[_W,Fn,Te,Vn,$t],styles:[`.file-upload{max-width:300px}
`],encapsulation:2})}}return d})();export{Q as Example17Component};