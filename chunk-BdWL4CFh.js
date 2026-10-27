import{n as s,t as r}from"./chunk-DarCEgGK.js";import{$n as pD,$t as _I,G as Kp,Gn as lu,In as lD,U as Jp,a as Ap,bt as RI,jn as jc,kr as yI,mn as dv,on as bp,pr as tE,rn as af,sr as rE,tn as _p,un as cu,xn as gI,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{l as D1,m as Fa}from"./chunk-Dk5kBPyv.js";import{c as Dn,d as In,u as Ge,y as qt}from"./main-BEH6XCIK.js";import{t as Qe}from"./chunk-D0qctKwX.js";function I(d,O){if(d&1){let l=_I();lD(0,`
    `),vi(1,`angular-slickgrid`,15),Ap(`onAngularGridCreated`,function(t){cu(l);let a=RI();return lu(a.angularGridReady(t.detail))}),lD(2,`
    `),Rc(),lD(3,`
  `)}if(d&2){let l=RI();dv(),bp(`columns`,l.columns)(`options`,l.gridOptions)(`dataset`,l.dataset)}}var L=`assets/data`;var Q=(()=>{class d{constructor(){this.columns=[],this.dataset=[],this.gridCreated=!1,this.hideSubTitle=!1,this.uploadFileRef=``,this.templateUrl=`${L}/users.csv`}angularGridReady(l){this.angularGrid=l}handleFileImport(l){let o=l.target.files[0];if(o){let t=new FileReader;t.onload=a=>{let r=a.target.result;this.dynamicallyCreateGrid(r)},t.readAsText(o)}}handleDefaultCsv(){this.dynamicallyCreateGrid(`First Name,Last Name,Age,Type
Bob,Smith,33,Teacher
John,Doe,20,Student
Jane,Doe,21,Student`),this.uploadFileRef=``}toggleGrid(){this.gridCreated=!this.gridCreated}dynamicallyCreateGrid(l){this.gridCreated=!1;let o=l?.split(`
`),t=[],a=[];o.forEach((r$1,x)=>{let C=r$1.split(`,`),c={};if(x===0)for(let u of C){let p=Fa(u);t.push({id:p,name:u,field:p,filterable:!0,sortable:!0})}else C.forEach((u,p)=>{c[t[p].id]=u}),`id`in c?a.push(c):a.push(s(r({},c),{id:x}))}),this.gridOptions={gridHeight:300,gridWidth:800,enableFiltering:!0,enableExcelExport:!0,externalResources:[new Qe],headerRowHeight:35,rowHeight:33},this.dataset=a,this.columns=t,this.gridCreated=!0}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||d)}}static{this.ɵcmp=WE({type:d,selectors:[[`ng-component`]],decls:54,vars:5,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example17.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`id`,`template-dl`,3,`href`],[1,`d-flex`,`mt-5`,`align-items-end`],[1,`file-upload`],[`for`,`formFile`,1,`form-label`],[`type`,`file`,`data-test`,`file-upload-input`,1,`form-control`,3,`ngModelChange`,`input`,`ngModel`],[1,`mx-3`],[`id`,`uploadBtn`,`data-test`,`static-data-btn`,1,`btn`,`btn-outline-secondary`,3,`click`],[`data-test`,`toggle-grid-btn`,1,`btn`,`btn-outline-secondary`,3,`click`,`disabled`],[`gridId`,`grid17`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,t){o&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 17: Dynamically Create Grid from CSV / Excel import
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return t.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    Allow creating a grid dynamically by importing an external CSV or Excel file. This script demo will read the CSV file and will consider
    the first row as the column header and create the column definitions accordingly, while the next few rows will be considered the
    dataset. Note that this example is demoing a CSV file import but in your application you could easily implemnt an Excel file uploading.
  `),Rc(),lD(20,`

  `),vi(21,`div`),lD(22,`A default CSV file can be download `),vi(23,`a`,7),lD(24,`here`),Rc(),lD(25,`.`),Rc(),lD(26,`

  `),vi(27,`div`,8),lD(28,`
    `),vi(29,`div`,9),lD(30,`
      `),vi(31,`label`,10),lD(32,`Choose a CSV file…`),Rc(),lD(33,`
      `),vi(34,`input`,11),tE(),Jp(`ngModelChange`,function(r){return pD(t.uploadFileRef,r)||(t.uploadFileRef=r),r}),Ap(`input`,function(r){return t.handleFileImport(r)}),Rc(),lD(35,`
    `),Rc(),lD(36,`
    `),vi(37,`span`,12),lD(38,`or`),Rc(),lD(39,`
    `),vi(40,`div`),lD(41,`
      `),vi(42,`button`,13),Ap(`click`,function(){return t.handleDefaultCsv()}),lD(43,`
        Use default CSV data
      `),Rc(),lD(44,`
      `),vi(45,`button`,14),Ap(`click`,function(){return t.toggleGrid()}),lD(46),Rc(),lD(47,`
    `),Rc(),lD(48,`
  `),Rc(),lD(49,`

  `),_p(50,`hr`),lD(51,`

  `),gI(52,I,4,3),Rc(),lD(53,`
`)),o&2&&(dv(23),bp(`href`,t.templateUrl,af),dv(11),Kp(`ngModel`,t.uploadFileRef),rE(),dv(11),bp(`disabled`,t.columns.length===0),dv(),jc(`
        `,t.gridCreated?`Destroy Grid`:`Recreate Grid`,`
      `),dv(6),yI(t.gridCreated?52:-1))},dependencies:[D1,In,Ge,Dn,qt],styles:[`.file-upload{max-width:300px}
`],encapsulation:2})}}return d})();export{Q as Example17Component};