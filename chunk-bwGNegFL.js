import{V as R$}from"./chunk-Lo0QQjTd.js";import{X as Lc,dr as uD,en as _p,in as bp,k as GE,o as Ap,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var y=300;var S=(()=>{class a{constructor(){this.columns=[],this.hideSubTitle=!1,this.previousBodyDir=null}ngOnInit(){this.previousBodyDir=document.body.getAttribute(`dir`),document.body.setAttribute(`dir`,`rtl`),this.prepareGrid(),this.dataset=this.mockData(y)}ngOnDestroy(){this.previousBodyDir?document.body.setAttribute(`dir`,this.previousBodyDir):document.body.removeAttribute(`dir`)}angularGridReady(o){this.angularGrid=o,o.dataView.getItemMetadata=l=>l%7===2?{columns:{0:{colspan:3}}}:null,o.slickGrid.invalidate()}applyPinning(){let o=d=>Math.min(this.columns.length,Math.max(0,Number.parseInt(document.querySelector(`#${d}`)?.value||`0`,10)||0)),l=o(`pinnedStartColumns`),i=o(`pinnedEndColumns`);this.angularGrid?.slickGrid.setOptions({pinning:{columns:{left:l>0?l-1:[],right:i},rows:{top:[0],bottom:[]}}})}clearPinning(){this.angularGrid?.slickGrid.setOptions({pinning:null})}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,width:110},{id:`duration`,name:`Duration`,field:`duration`,width:90},{id:`start`,name:`Start`,field:`start`,width:100},{id:`finish`,name:`Finish`,field:`finish`,width:100},{id:`priority`,name:`Priority`,field:`priority`,width:100,sticky:!0,cssClass:`sticky-candidate`},{id:`%`,name:`% Complete`,field:`percentComplete`,width:110},{id:`assignee`,name:`Assignee`,field:`assignee`,width:100},{id:`department`,name:`Department`,field:`department`,width:110},{id:`project`,name:`Project`,field:`project`,width:100},{id:`reviewer`,name:`Reviewer`,field:`reviewer`,width:100},{id:`region`,name:`Region`,field:`region`,width:100},{id:`stage`,name:`Stage`,field:`stage`,width:100},{id:`budget`,name:`Budget`,field:`budget`,width:100},{id:`spent`,name:`Spent`,field:`spent`,width:100},{id:`notes`,name:`Notes`,field:`notes`,width:140},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,width:110}],this.gridOptions={enableCellNavigation:!0,enableFiltering:!1,enableAutoSizeColumns:!1,enableColumnReorder:!0,gridHeight:400,gridWidth:900,rowHeight:28,rtl:!0,docking:{maxColumnViewportWidthPercent:100},pinning:{columns:{left:1,right:1},rows:{top:[0],bottom:[]}}}}mockData(o){let l=[`Low`,`Medium`,`High`,`Critical`],i=[`Alice`,`Bob`,`Carol`,`Dave`,`Erin`,`Frank`,`Grace`],d=[`Engineering`,`Marketing`,`Sales`,`Design`,`Support`],s=[`Alpha`,`Beta`,`Gamma`,`Delta`,`Epsilon`],c=[`North`,`South`,`East`,`West`],u=[`Design`,`Build`,`Test`,`Ship`],g=[];for(let t=0;t<o;t++)g.push({id:t,title:`Task ${t}`,duration:`${t%10+2} days`,start:`0${t%9+1}/01/2009`,finish:`0${t%5+1}/05/2009`,priority:l[t%l.length],percentComplete:`${t*7%100}%`,assignee:i[t%i.length],department:d[t%d.length],project:s[t%s.length],reviewer:i[(t+3)%i.length],region:c[t%c.length],stage:u[t%u.length],budget:(t%9+1)*1e3,spent:(t%7+1)*800,notes:`Note for task ${t}`,effortDriven:t%5===0?`Yes`:`No`});return g}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`)}static{this.ɵfac=function(l){return new(l||a)}}static{this.ɵcmp=GE({type:a,selectors:[[`ng-component`]],decls:41,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example57.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[1,`rtl-controls`,2,`display`,`flex`,`align-items`,`center`,`gap`,`12px`,`margin`,`8px 0`],[`type`,`number`,`id`,`pinnedStartColumns`,`min`,`0`,`max`,`16`,`value`,`2`],[`type`,`number`,`id`,`pinnedEndColumns`,`min`,`0`,`max`,`16`,`value`,`1`],[`id`,`setPinning`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`id`,`clearPinning`,`type`,`button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`dir`,`rtl`],[`gridId`,`grid57`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,i){l&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 57: RTL (Right-to-Left)
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
  `),Lc(),uD(12,`

  `),vi(13,`div`,4),uD(14,`
    RTL with dynamic two-sided column pinning, sticky columns, pinned rows, and a colspan crossing the leading pinned boundary
  `),Lc(),uD(15,`

  `),vi(16,`div`,5),uD(17,`
    `),vi(18,`label`),uD(19,`Pinned at the start (right) edge:
      `),_p(20,`input`,6),uD(21,`
    `),Lc(),uD(22,`
    `),vi(23,`label`),uD(24,`Pinned at the end (left) edge:
      `),_p(25,`input`,7),uD(26,`
    `),Lc(),uD(27,`
    `),vi(28,`button`,8),Ap(`click`,function(){return i.applyPinning()}),uD(29,`Apply`),Lc(),uD(30,`
    `),vi(31,`button`,9),Ap(`click`,function(){return i.clearPinning()}),uD(32,`
      Remove pinning
    `),Lc(),uD(33,`
  `),Lc(),uD(34,`

  `),vi(35,`div`,10),uD(36,`
    `),vi(37,`angular-slickgrid`,11),Ap(`onAngularGridCreated`,function(s){return i.angularGridReady(s.detail)}),Lc(),uD(38,`
  `),Lc(),uD(39,`
`),Lc(),uD(40,`
`)),l&2&&(fv(37),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[R$],styles:[`.grid-rtl[_ngcontent-%COMP%]{direction:rtl}`]})}}return a})();export{S as Example57Component};