import{n as s,t as r}from"./chunk-DarCEgGK.js";import{$t as au,En as jc,F as Ip,Kn as pI,Lt as Wp,O as Gp,Pn as ly,b as Ep,hr as xI,ir as tE,or as uD,pr as wI,pt as Rc,rn as bp,rr as su,t as $E,tr as sD,vn as hI,xr as yi,zn as nf,zt as Xy}from"./chunk-Rd4ToC_L.js";import{S as Qa,W as _W}from"./chunk-DLuyVhQJ.js";import{_ as Vn,d as Fn,g as Te,s as $t}from"./main-CCTR2RMO.js";import{t as Ze}from"./chunk-C5onuIZj.js";function I(d,O){if(d&1){let l=wI();sD(0,`
    `),yi(1,`angular-slickgrid`,15),bp(`onAngularGridCreated`,function(t){su(l);return au(xI().angularGridReady(t.detail))}),sD(2,`
    `),Rc(),sD(3,`
  `)}if(d&2){let l=xI();ly(),Ep(`columns`,l.columns)(`options`,l.gridOptions)(`dataset`,l.dataset)}}var L=`assets/data`;var Q=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=!1,this.hideSubTitle=!1,this.uploadFileRef=``,this.templateUrl=`${L}/users.csv`}angularGridReady(l){this.angularGrid=l}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r)},t.readAsText(o)}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=``}toggleGrid(){this.gridCreated=!this.gridCreated}dynamicallyCreateGrid(l){this.gridCreated=!1;let o=l?.split(`
`),t=[],a=[];o.forEach((r$1,x)=>{let C=r$1.split(`,`),c={};if(x===0)for(let u of C){let p=Qa(u);t.push({id:p,name:u,field:p,filterable:!0,sortable:!0})}else C.forEach((u,p)=>{c[t[p].id]=u}),`id`in c?a.push(c):a.push(s(r({},c),{id:x}))}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new Ze],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||d)}}static{this.ɵcmp=$E({type:d,selectors:[[`ng-component`]],decls:54,vars:5,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`id`,`template-dl`,3,`href`],[1,`d-flex`,`mt-5`,`align-items-end`],[1,`file-upload`],[`for`,`formFile`,1,`form-label`],[`type`,`file`,`data-test`,`file-upload-input`,1,`form-control`,3,`ngModelChange`,`input`,`ngModel`],[1,`mx-3`],[`id`,`uploadBtn`,`data-test`,`static-data-btn`,1,`btn`,`btn-outline-secondary`,3,`click`],[`data-test`,`toggle-grid-btn`,1,`btn`,`btn-outline-secondary`,3,`click`,`disabled`],[`gridId`,`grid17`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,t){o&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return t.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),Rc(),sD(20,`

  `),yi(21,`div`),sD(22,`A default CSV file can be download `),yi(23,`a`,7),sD(24,`here`),Rc(),sD(25,`.`),Rc(),sD(26,`

  `),yi(27,`div`,8),sD(28,`
    `),yi(29,`div`,9),sD(30,`
      `),yi(31,`label`,10),sD(32,`Choose a CSV file…`),Rc(),sD(33,`
      `),yi(34,`input`,11),Wp(`ngModelChange`,function(r){return uD(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),bp(`input`,function(r){return t.handleFileImport(r)}),Rc(),Xy(),sD(35,`
    `),Rc(),sD(36,`
    `),yi(37,`span`,12),sD(38,`or`),Rc(),sD(39,`
    `),yi(40,`div`),sD(41,`
      `),yi(42,`button`,13),bp(`click`,function(){return t.handleDefaultCsv()}),sD(43,`
        Use default CSV data
      `),Rc(),sD(44,`
      `),yi(45,`button`,14),bp(`click`,function(){return t.toggleGrid()}),sD(46),Rc(),sD(47,`
    `),Rc(),sD(48,`
  `),Rc(),sD(49,`

  `),Ip(50,`hr`),sD(51,`

  `),pI(52,I,4,3),Rc(),sD(53,`
`)),o&2&&(ly(23),Ep(`href`,t.templateUrl,nf),ly(11),Gp(`ngModel`,t.uploadFileRef),tE(),ly(11),Ep(`disabled`,t.columns.length===0),ly(),jc(`
        `,t.gridCreated?`Destroy Grid`:`Recreate Grid`,`
      `),ly(6),hI(t.gridCreated?52:-1))},dependencies:[_W,Fn,Te,Vn,$t],styles:[`.file-upload{max-width:300px}
`],encapsulation:2})}}return d})();export{Q as Example17Component};