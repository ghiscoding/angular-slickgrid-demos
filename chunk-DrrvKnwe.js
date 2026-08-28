import{Dt as UE,En as iD,Kn as mp,Wn as mi,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W,mt as nk}from"./chunk-CAMk6vEo.js";var p=100;var g=(()=>{class a{constructor(){this.columns=[],this.hideSubTitle=!1,this.previousBodyDir=null}ngOnInit(){this.previousBodyDir=document.body.getAttribute(`dir`),document.body.setAttribute(`dir`,`rtl`),this.prepareGrid(),this.dataset=this.mockData(p)}ngOnDestroy(){this.previousBodyDir?document.body.setAttribute(`dir`,this.previousBodyDir):document.body.removeAttribute(`dir`)}prepareGrid(){this.columns=[{id:`id`,name:`ID`,field:`id`,filterable:!0,sortable:!0,minWidth:60},{id:`title`,name:`Title`,field:`title`,filterable:!0,sortable:!0,minWidth:100},{id:`duration`,name:`Duration (days)`,field:`duration`,filterable:!0,sortable:!0,minWidth:100,type:`number`},{id:`%`,name:`% Complete`,field:`percentComplete`,filterable:!0,sortable:!0,minWidth:100,type:`number`},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,exportWithFormatter:!0,filterable:!0},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,exportWithFormatter:!0,filterable:!0},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:80}],this.gridOptions={enableFiltering:!0,enableColumnReorder:!1,gridHeight:500,gridWidth:700,rowHeight:33,rtl:!0}}mockData(o){let i=[];for(let e=0;e<o;e++)i.push({id:e,title:`Task ${e}`,duration:Math.round(Math.random()*100),percentComplete:Math.round(Math.random()*100),start:new Date(2024,0,1+Math.floor(Math.random()*30)).toISOString().split(`T`)[0],finish:new Date(2024,1,1+Math.floor(Math.random()*28)).toISOString().split(`T`)[0],effortDriven:e%5===0});return i}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`)}static{this.ɵfac=function(i){return new(i||a)}}static{this.ɵcmp=UE({type:a,selectors:[[`ng-component`]],decls:22,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example57.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`dir`,`rtl`],[`gridId`,`grid57`,3,`columns`,`options`,`dataset`]],template:function(i,e){i&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 57: RTL (Right-to-Left)
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
  `),Ac(),iD(12,`
  `),mi(13,`div`,4),iD(14,`Basic grid with RTL (Right-to-Left) enabled for RTL languages`),Ac(),iD(15,`

  `),mi(16,`div`,5),iD(17,`
    `),vp(18,`angular-slickgrid`,6),iD(19,`
  `),Ac(),iD(20,`
`),Ac(),iD(21,`
`)),i&2&&(cy(18),mp(`columns`,e.columns)(`options`,e.gridOptions)(`dataset`,e.dataset))},dependencies:[_W],styles:[`.grid-rtl[_ngcontent-%COMP%]{direction:rtl}`]})}}return a})();export{g as Example57Component};