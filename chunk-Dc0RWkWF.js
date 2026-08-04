import{Fn as mp,Hn as oD,It as Z$1,L as Lc,Wt as av,Z as NE,dn as gi,fr as wD,g as Dp,l as BI,m as D$1,on as fE,pn as gp,tn as dE,vt as TD,yr as xc}from"./chunk-B0w5H0p9.js";import{I as Ti,S as JN,gt as q1,i as $p,l as BB,ot as ji,v as HM,x as Iu}from"./chunk-C7G4ZLh2.js";import{t as Xe}from"./main-OKEWRQDY.js";import{t as a}from"./chunk-CiyLb43o.js";import{t as r}from"./chunk-D2A9m6Pt.js";var v=class{constructor(a){this.args=a,this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit??!1}get validator(){return this.columnEditor.validator||this.columnDef.validator}init(){let a=this.columnEditor?.placeholder||``,t=this.columnEditor?.title||``;this.inputElm=document.createElement(`input`),this.inputElm.type=`text`,this.inputElm.className=`editor-text`,this.inputElm.placeholder=a,this.inputElm.title=t,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener(`keydown`,this.onKeydown.bind(this)),this.hasAutoCommitEdit&&this.inputElm.addEventListener(`focusout`,this.save.bind(this)),setTimeout(()=>{this.inputElm.focus(),this.inputElm.select()},50)}onKeydown(a){this._lastInputEvent=a,(a.key===`ArrowLeft`||a.key===`ArrowRight`)&&a.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener(`keydown`,this.onKeydown.bind(this)),this.inputElm.removeEventListener(`focusout`,this.save.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(a){this.inputElm.value=a}loadValue(a){this.defaultValue=a[this.args.column.field]||``,this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(a,t){let o=this.validate(t);a[this.args.column.field]=o&&o.valid?t:``}isValueChanged(){let a=this._lastInputEvent?.key;return this.columnEditor?.alwaysSaveOnEnterKey&&a===`Enter`?!0:!(this.inputElm.value===``&&this.defaultValue===null)&&this.inputElm.value!==this.defaultValue}save(){this.validate()?.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges())}validate(a){if(this.validator){let t=a!==void 0?a:this.inputElm?.value;return this.validator(t,this.args)}return{valid:!0,msg:null}}};var $={timeout:5e3,jsonpCallback:`callback`,jsonpCallbackFunction:null};var K=()=>`jsonp_${Date.now()}_${Math.ceil(Math.random()*1e5)}`;var S=s=>delete window[s];var F=s=>{let a=document.getElementById(s);a&&document.getElementsByTagName(`head`)[0].removeChild(a)};function z(s,a={}){let t=s,o=a.timeout||$.timeout,i=a.jsonpCallback||$.jsonpCallback,r;return new Promise((d,C)=>{let p=a.jsonpCallbackFunction||K(),b=`${i}_${p}`;window[p]=y=>{d({ok:!0,json:()=>Promise.resolve(y)}),r&&clearTimeout(r),F(b),S(p)},t+=t.indexOf(`?`)===-1?`?`:`&`;let h=document.createElement(`script`);h.setAttribute(`src`,`${t}${i}=${p}`),a.charset&&h.setAttribute(`charset`,a.charset),a.nonce&&h.setAttribute(`nonce`,a.nonce),a.referrerPolicy&&h.setAttribute(`referrerPolicy`,a.referrerPolicy),a.crossorigin&&h.setAttribute(`crossorigin`,`true`),h.id=b,document.getElementsByTagName(`head`)[0].appendChild(h),r=setTimeout(()=>{C(new Error(`JSONP request to ${s} timed out`)),S(p),F(b),window[p]=()=>{S(p)}},o),h.onerror=()=>{C(new Error(`JSONP request to ${s} failed`)),S(p),F(b),r&&clearTimeout(r)}})}var D=z;function Y(s,a){if(s&1&&(oD(0,`
        `),gi(1,`div`,30)(2,`strong`),oD(3,`Updated Item:`),xc(),oD(4),wD(5,`json`),xc(),oD(6,`
      `)),s&2){let t=NE();av(4),Lc(` `,TD(5,1,t.updatedObject))}}function Q(s,a){if(s&1&&(oD(0,`
        `),gi(1,`div`,31)(2,`strong`),oD(3,`Updated Item:`),xc(),oD(4),xc(),oD(5,`
      `)),s&2){let t=NE();av(4),Lc(` `,t.alertWarning)}}var X=100;var U=`assets/data/collection_100_numbers.json`;var H=`assets/data/countries.json`;var J=`assets/data/country_names.json`;var I=(s,a)=>s==null||!s.length?{valid:!1,msg:`This is a required field`}:/^Task\s\d+$/.test(s)?{valid:!0,msg:``}:{valid:!1,msg:`Your title is invalid, it must start with "Task" followed by a number`};var Z=(s,a,t)=>{if(t&&Array.isArray(t)){let i=t.map(r=>`Task ${r}`).join(`, `);return`<span title="${i}">${i}</span>`}return``};var he=(()=>{class s{constructor(){this.http=D$1(Xe),this.translate=D$1(ji),this._commandQueue=[],this.hideSubTitle=!1,this.isAutoEdit=!0,this.selectedLanguage=`en`,this.duplicateTitleHeaderCount=1}ngOnInit(){this.prepareGrid()}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid}prepareGrid(){this.columns=[{id:`edit`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:JN.icon,params:{iconCssClass:`mdi mdi-pencil pointer`},minWidth:30,maxWidth:30,onCellClick:(t,o)=>{console.log(o),this.alertWarning=`Editing: ${o.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500),this.angularGrid.gridService.setSelectedRow(o.row)}},{id:`delete`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:JN.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30},{id:`title`,name:`Title`,field:`title`,minWidth:100,filterable:!0,sortable:!0,editor:{model:HM.longText,required:!0,maxLength:12,options:{cols:42,rows:5,buttonTexts:{}},validator:I},onCellChange:(t,o)=>{console.log(o),this.alertWarning=`Updated Title: ${o.dataContext.title}`}},{id:`title2`,name:`Title, Custom Editor`,field:`title`,minWidth:70,filterable:!0,sortable:!0,editor:{model:v,placeholder:`custom`,validator:I},filter:{model:r,placeholder:`🔎︎ custom`}},{id:`duration`,name:`Duration (days)`,field:`duration`,minWidth:100,filterable:!0,sortable:!0,formatter:JN.complexObject,type:`number`,exportWithFormatter:!0,filter:{model:Iu.slider,options:{hideSliderNumber:!1}},editor:{model:HM.slider,minValue:0,maxValue:100}},{id:`complete`,name:`% Complete`,field:`percentComplete`,minWidth:100,filterable:!0,formatter:JN.multiple,type:`number`,editor:{model:HM.singleSelect,enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map(t=>({value:t,label:t,symbol:`<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>`})),customStructure:{value:`value`,label:`label`,labelSuffix:`symbol`},collectionSortBy:{property:`label`,sortDesc:!0},collectionFilterBy:{property:`value`,value:0,operator:`!=`},options:{maxHeight:400}},params:{formatters:[JN.collectionEditor,JN.percentCompleteBar]}},{id:`start`,name:`Start`,field:`start`,minWidth:100,filterable:!0,filter:{model:Iu.compoundDate},formatter:JN.multiple,params:{formatters:[JN.complexObject,JN.dateIso]},exportWithFormatter:!0,sortable:!0,type:`date`,editor:{model:HM.date}},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate},formatter:JN.dateIso,exportWithFormatter:!0,type:`date`,saveOutputType:`dateUtc`,editor:{model:HM.date,options:{displayDateMin:`today`}}},{id:`cityOfOrigin`,name:`City of Origin`,field:`cityOfOrigin`,filterable:!0,minWidth:100,editor:{model:HM.autocompleter,placeholder:`🔎︎ search city`,options:{forceUserInput:!0,minLength:3,fetch:(t,o)=>{D(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log(`invalid JSONP response`,i))}}},filter:{model:Iu.autocompleter,options:{minLength:3,fetch:(t,o)=>{D(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log(`invalid JSONP response`,i))}}}},{id:`countryOfOrigin`,name:`Country of Origin`,field:`countryOfOrigin`,formatter:JN.complexObject,exportWithFormatter:!0,dataKey:`code`,labelKey:`name`,type:`object`,sortComparer:BB.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:HM.autocompleter,customStructure:{label:`name`,value:`code`},collectionAsync:this.http.get(H)},filter:{model:Iu.autocompleter,customStructure:{label:`name`,value:`code`},collectionAsync:this.http.get(H)}},{id:`countryOfOriginName`,name:`Country of Origin Name`,field:`countryOfOriginName`,filterable:!0,sortable:!0,minWidth:100,editor:{model:HM.autocompleter,collectionAsync:this.http.get(J)},filter:{model:Iu.autocompleter,collectionAsync:this.http.get(J)}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:70,filterable:!0,type:`boolean`,filter:{model:Iu.singleSelect,collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}]},formatter:JN.checkmarkMaterial,editor:{model:HM.checkbox}},{id:`prerequisites`,name:`Prerequisites`,field:`prerequisites`,minWidth:100,filterable:!0,formatter:Z,exportWithFormatter:!0,sanitizeDataExport:!0,sortable:!0,editor:{placeholder:`choose option`,collectionAsync:this.http.get(U),collectionSortBy:{property:`label`,sortDesc:!0},customStructure:{label:`label`,value:`value`,labelPrefix:`prefix`},collectionOptions:{separatorBetweenTextLabels:` `},model:HM.multipleSelect,required:!0},filter:{collectionAsync:this.http.get(U),collectionSortBy:{property:`label`,sortDesc:!0},customStructure:{label:`label`,value:`value`,labelPrefix:`prefix`},collectionOptions:{separatorBetweenTextLabels:` `},model:Iu.multipleSelect,operator:`IN_CONTAINS`}}],this.gridOptions={asyncEditorLoading:!1,autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:`#demo-container`,rightPadding:10},editable:!0,enableCellNavigation:!0,enableColumnPicker:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(t,o,i)=>{this._commandQueue.push(i),i.execute()},i18n:this.translate},this.dataset=this.mockData(X)}addItem(){let t=this.dataset.length,o=this.mockData(1,t);setTimeout(()=>{let i=this.columns.find(r=>r.id===`prerequisites`);if(i){let r=i.filter.collectionAsync,d=i.editor.collection;Array.isArray(d)&&(this.angularGrid.gridService.addItem(o[0]),d.push({value:t,label:t,prefix:`Task`}),r instanceof Z$1&&r.next(d))}},250)}deleteItem(){let t=this.columns.find(o=>o.id===`prerequisites`);if(t){let o=t.filter.collectionAsync,i=t.filter.collection;if(Array.isArray(i)){let r=this.sortCollectionDescending(i).pop();this.angularGrid.gridService.deleteItemById(r.value),o instanceof Z$1&&o.next(i)}}}sortCollectionDescending(t){return t.sort((o,i)=>o.value-i.value)}mockData(t,o=0){let i=[];for(let r=o;r<o+t;r++){let d=2e3+this.randomBetween(4,15),C=new Date().getFullYear()-3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),b=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),y=new Date(C,p+1,b);i.push({id:r,title:`Task `+r,duration:r%33===0?null:Math.round(Math.random()*100)+``,start:new Date(d,p,b),percentComplete:h,percentCompleteNumber:h,finish:y<new Date?``:y,effortDriven:r%5===0,prerequisites:r%2===0&&r!==0&&r<12?[r,r-1]:[],countryOfOrigin:r%2?{code:`CA`,name:`Canada`}:{code:`US`,name:`United States`},countryOfOriginName:r%2?`Canada`:`United States`,cityOfOrigin:r%2?`Vancouver, BC, Canada`:`Boston, MA, United States`})}return i}randomBetween(t,o){return Math.floor(Math.random()*(o-t+1)+t)}onCellChanged(t,o){this.updatedObject=o.item}onCellClicked(t,o){let i=this.angularGrid.gridService.getColumnFromEventArguments(o);console.log(i),i.columnDef.id===`edit`?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500)):i.columnDef.id===`delete`&&confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(i.dataContext.id)}onValidationError(t,o){o.validationResults&&a(o.validationResults.msg,`danger`)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.gridObj?.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){let t={id:`title${this.duplicateTitleHeaderCount++}`,name:`Title`,field:`title`,editor:{model:HM.text,required:!0,validator:I},sortable:!0,minWidth:100,filterable:!0};this.columns.push(t),this.columns=this.columns.slice()}dynamicallyRemoveLastColumn(){this.columns.pop(),this.columns=this.columns.slice()}setAutoEdit(t){return this.isAutoEdit=t,this.gridObj?.setOptions({autoEdit:t}),!0}undo(){let t=this._commandQueue.pop();t&&Ti.cancelCurrentEdit()&&(t.undo(),this.gridObj?.gotoCell(t.row,t.cell,!1))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||s)}}static{this.ɵcmp=BI({type:s,selectors:[[`ng-component`]],decls:141,vars:8,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example03.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/editors`,`target`,`_blank`],[1,`row`],[1,`col-sm-6`],[`id`,`radioAutoEdit`],[`for`,`radioTrue`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`id`,`radioTrue`,`checked`,``,3,`change`,`value`],[`for`,`radioFalse`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`id`,`radioFalse`,3,`change`,`value`],[1,`row`,`col-sm-12`],[`data-test`,`undo-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-undo`],[`for`,`autoCommitEdit`,1,`checkbox-inline`,`control-label`],[`type`,`checkbox`,`id`,`autoCommitEdit`,`data-test`,`auto-commit`,3,`click`,`checked`],[1,`row`,2,`margin-top`,`5px`],[1,`col-sm-12`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Clear Filters & Sorting to see it better`,1,`btn`,`btn-sm`,`btn-outline-primary`,3,`click`],[1,`btn`,`btn-sm`,`btn-outline-danger`,3,`click`],[`data-test`,`add-title-column`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-shape-square-plus`],[`data-test`,`remove-title-column`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-minus`],[`gridId`,`grid3`,3,`onAngularGridCreated`,`onCellChange`,`onClick`,`onValidationError`,`columns`,`options`,`dataset`],[1,`alert`,`alert-info`],[1,`alert`,`alert-warning`]],template:function(o,i){o&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 3: Editors / Delete
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return i.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`
  `),gi(18,`div`,6),oD(19,`
    Grid with Inline Editors and onCellClick actions (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`).
    `),gi(23,`ul`),oD(24,`
      `),gi(25,`li`),oD(26,`
        Multiple Editors & Filters are available: AutoComplete, Checkbox, Date, Slider, SingleSelect, MultipleSelect, Float, Text,
        LongText... even Custom Editor
      `),xc(),oD(27,`
      `),gi(28,`li`),oD(29,`When using "enableCellNavigation: true", clicking on a cell will automatically make it active & selected.`),xc(),oD(30,`
      `),gi(31,`ul`),oD(32,`
        `),gi(33,`li`),oD(34,`If you don't want this behavior, then you should disable "enableCellNavigation"`),xc(),oD(35,`
      `),xc(),oD(36,`
      `),gi(37,`li`),oD(38,`Inline Editors requires "enableCellNavigation: true" (not sure why though)`),xc(),oD(39,`
      `),gi(40,`li`),oD(41,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),xc(),oD(42,`
      `),gi(43,`li`),oD(44,`MultipleSelect & SingeSelect Editors & Filters can use a regular "collection" or "collectionAsync" to load it asynchronously`),xc(),oD(45,`
      `),gi(46,`ul`),oD(47,`
        `),gi(48,`li`),oD(49,`Click on "Add Item" and see the Editor/Filter or the "Prerequesites" column change`),xc(),oD(50,`
        `),gi(51,`li`),oD(52,`Any Editor/Filter with a "collection" can be changed dynamically later in the future`),xc(),oD(53,`
      `),xc(),oD(54,`
    `),xc(),oD(55,`
  `),xc(),oD(56,`

  `),gi(57,`div`,8),oD(58,`
    `),gi(59,`div`,9),oD(60,`
      `),gi(61,`label`),oD(62,`autoEdit setting: `),xc(),oD(63,`
      `),gi(64,`span`,10),oD(65,`
        `),gi(66,`label`,11),oD(67,`
          `),gi(68,`input`,12),Dp(`change`,function(){return i.setAutoEdit(!0)}),xc(),oD(69,` ON
          (single-click)
        `),xc(),oD(70,`
        `),gi(71,`label`,13),oD(72,`
          `),gi(73,`input`,14),Dp(`change`,function(){return i.setAutoEdit(!1)}),xc(),oD(74,` OFF
          (double-click)
        `),xc(),oD(75,`
      `),xc(),oD(76,`
      `),gi(77,`div`,15),oD(78,`
        `),gi(79,`span`),oD(80,`
          `),gi(81,`button`,16),Dp(`click`,function(){return i.undo()}),oD(82,`
            `),mp(83,`i`,17),oD(84,`
            Undo last edit(s)
          `),xc(),oD(85,`
          `),gi(86,`label`,18),oD(87,`
            `),gi(88,`input`,19),Dp(`click`,function(){return i.changeAutoCommit()}),xc(),oD(89,`
            Auto Commit Edit
          `),xc(),oD(90,`
        `),xc(),oD(91,`
      `),xc(),oD(92,`
      `),gi(93,`div`,20),oD(94,`
        `),gi(95,`div`,21),oD(96,`
          `),gi(97,`button`,22),Dp(`click`,function(){return i.angularGrid.filterService.clearFilters()}),oD(98,`
            Clear Filters
          `),xc(),oD(99,`
          `),gi(100,`button`,22),Dp(`click`,function(){return i.angularGrid.sortService.clearSorting()}),oD(101,`Clear Sorting`),xc(),oD(102,`
          `),gi(103,`button`,23),Dp(`click`,function(){return i.addItem()}),oD(104,`
            Add item
          `),xc(),oD(105,`
          `),gi(106,`button`,24),Dp(`click`,function(){return i.deleteItem()}),oD(107,`Delete item`),xc(),oD(108,`
        `),xc(),oD(109,`
      `),xc(),oD(110,`
      `),gi(111,`div`,20),oD(112,`
        `),gi(113,`div`,21),oD(114,`
          `),gi(115,`button`,25),Dp(`click`,function(){return i.dynamicallyAddTitleHeader()}),oD(116,`
            `),mp(117,`i`,26),oD(118,`
            Dynamically Duplicate Title Column
          `),xc(),oD(119,`
          `),gi(120,`button`,27),Dp(`click`,function(){return i.dynamicallyRemoveLastColumn()}),oD(121,`
            `),mp(122,`i`,28),oD(123,`
            Dynamically Remove Last Column
          `),xc(),oD(124,`
        `),xc(),oD(125,`
      `),xc(),oD(126,`
    `),xc(),oD(127,`

    `),gi(128,`div`,9),oD(129,`
      `),dE(130,Y,7,3),dE(131,Q,6,1),xc(),oD(132,`
  `),xc(),oD(133,`

  `),gi(134,`div`,21),oD(135,`
    `),gi(136,`angular-slickgrid`,29),Dp(`onAngularGridCreated`,function(d){return i.angularGridReady(d.detail)})(`onCellChange`,function(d){return i.onCellChanged(d.detail.eventData,d.detail.args)})(`onClick`,function(d){return i.onCellClicked(d.detail.eventData,d.detail.args)})(`onValidationError`,function(d){return i.onValidationError(d.detail.eventData,d.detail.args)}),oD(137,`
    `),xc(),oD(138,`
  `),xc(),oD(139,`
`),xc(),oD(140,`
`)),o&2&&(av(68),gp(`value`,i.isAutoEdit),av(5),gp(`value`,i.isAutoEdit),av(15),gp(`checked`,i.gridOptions.autoCommitEdit),av(42),fE(i.updatedObject?130:-1),av(),fE(i.alertWarning?131:-1),av(5),gp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[q1,$p],encapsulation:2})}}return s})();export{he as Example3Component};