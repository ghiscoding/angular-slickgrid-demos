import{Ct as T,Dt as UE,En as iD,Kn as mp,Qn as pI,Tt as Tp,U as K$1,Wn as mi,_n as fI,bt as SI,dt as Pc,hr as vp,ln as cy,nn as bD,o as Ac,yr as wD}from"./chunk-06EGdSfW.js";import{D as Ti,H as _W,N as WA,c as GM,i as Fm,m as Ki,mt as nk,st as ip}from"./chunk-CAMk6vEo.js";import{n as ze}from"./main-ZP4IXK6Z.js";import{t as a}from"./chunk-CiyLb43o.js";import{t as r}from"./chunk-D2A9m6Pt.js";var v=class{constructor(a){this.args=a,this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit??!1}get validator(){return this.columnEditor.validator||this.columnDef.validator}init(){let a=this.columnEditor?.placeholder||``,t=this.columnEditor?.title||``;this.inputElm=document.createElement(`input`),this.inputElm.type=`text`,this.inputElm.className=`editor-text`,this.inputElm.placeholder=a,this.inputElm.title=t,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener(`keydown`,this.onKeydown.bind(this)),this.hasAutoCommitEdit&&this.inputElm.addEventListener(`focusout`,this.save.bind(this)),setTimeout(()=>{this.inputElm.focus(),this.inputElm.select()},50)}onKeydown(a){this._lastInputEvent=a,(a.key===`ArrowLeft`||a.key===`ArrowRight`)&&a.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener(`keydown`,this.onKeydown.bind(this)),this.inputElm.removeEventListener(`focusout`,this.save.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(a){this.inputElm.value=a}loadValue(a){this.defaultValue=a[this.args.column.field]||``,this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(a,t){let o=this.validate(t);a[this.args.column.field]=o&&o.valid?t:``}isValueChanged(){let a=this._lastInputEvent?.key;return this.columnEditor?.alwaysSaveOnEnterKey&&a===`Enter`?!0:!(this.inputElm.value===``&&this.defaultValue===null)&&this.inputElm.value!==this.defaultValue}save(){this.validate()?.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges())}validate(a){if(this.validator){let t=a!==void 0?a:this.inputElm?.value;return this.validator(t,this.args)}return{valid:!0,msg:null}}};var $={timeout:5e3,jsonpCallback:`callback`,jsonpCallbackFunction:null};var K=()=>`jsonp_${Date.now()}_${Math.ceil(Math.random()*1e5)}`;var S=s=>delete window[s];var w=s=>{let a=document.getElementById(s);a&&document.getElementsByTagName(`head`)[0].removeChild(a)};function z(s,a={}){let t=s,o=a.timeout||$.timeout,i=a.jsonpCallback||$.jsonpCallback,r;return new Promise((d,C)=>{let p=a.jsonpCallbackFunction||K(),b=`${i}_${p}`;window[p]=y=>{d({ok:!0,json:()=>Promise.resolve(y)}),r&&clearTimeout(r),w(b),S(p)},t+=t.indexOf(`?`)===-1?`?`:`&`;let h=document.createElement(`script`);h.setAttribute(`src`,`${t}${i}=${p}`),a.charset&&h.setAttribute(`charset`,a.charset),a.nonce&&h.setAttribute(`nonce`,a.nonce),a.referrerPolicy&&h.setAttribute(`referrerPolicy`,a.referrerPolicy),a.crossorigin&&h.setAttribute(`crossorigin`,`true`),h.id=b,document.getElementsByTagName(`head`)[0].appendChild(h),r=setTimeout(()=>{C(new Error(`JSONP request to ${s} timed out`)),S(p),w(b),window[p]=()=>{S(p)}},o),h.onerror=()=>{C(new Error(`JSONP request to ${s} failed`)),S(p),w(b),r&&clearTimeout(r)}})}var F=z;function Y(s,a){if(s&1&&(iD(0,`
        `),mi(1,`div`,30)(2,`strong`),iD(3,`Updated Item:`),Ac(),iD(4),wD(5,`json`),Ac(),iD(6,`
      `)),s&2){let t=SI();cy(4),Pc(` `,bD(5,1,t.updatedObject))}}function Q(s,a){if(s&1&&(iD(0,`
        `),mi(1,`div`,31)(2,`strong`),iD(3,`Updated Item:`),Ac(),iD(4),Ac(),iD(5,`
      `)),s&2){let t=SI();cy(4),Pc(` `,t.alertWarning)}}var X=100;var U=`assets/data/collection_100_numbers.json`;var H=`assets/data/countries.json`;var J=`assets/data/country_names.json`;var D=(s,a)=>s==null||!s.length?{valid:!1,msg:`This is a required field`}:/^Task\s\d+$/.test(s)?{valid:!0,msg:``}:{valid:!1,msg:`Your title is invalid, it must start with "Task" followed by a number`};var Z=(s,a,t)=>{if(t&&Array.isArray(t)){let i=t.map(r=>`Task ${r}`).join(`, `);return`<span title="${i}">${i}</span>`}return``};var he=(()=>{class s{constructor(){this.http=T(ze),this.translate=T(Ki),this._commandQueue=[],this.hideSubTitle=!1,this.isAutoEdit=!0,this.selectedLanguage=`en`,this.duplicateTitleHeaderCount=1}ngOnInit(){this.prepareGrid()}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid}prepareGrid(){this.columns=[{id:`edit`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:nk.icon,params:{iconCssClass:`mdi mdi-pencil pointer`},minWidth:30,maxWidth:30,onCellClick:(t,o)=>{console.log(o),this.alertWarning=`Editing: ${o.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500),this.angularGrid.gridService.setSelectedRow(o.row)}},{id:`delete`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:nk.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30},{id:`title`,name:`Title`,field:`title`,minWidth:100,filterable:!0,sortable:!0,editor:{model:WA.longText,required:!0,maxLength:12,options:{cols:42,rows:5,buttonTexts:{}},validator:D},onCellChange:(t,o)=>{console.log(o),this.alertWarning=`Updated Title: ${o.dataContext.title}`}},{id:`title2`,name:`Title, Custom Editor`,field:`title`,minWidth:70,filterable:!0,sortable:!0,editor:{model:v,placeholder:`custom`,validator:D},filter:{model:r,placeholder:`🔎︎ custom`}},{id:`duration`,name:`Duration (days)`,field:`duration`,minWidth:100,filterable:!0,sortable:!0,formatter:nk.complexObject,type:`number`,exportWithFormatter:!0,filter:{model:ip.slider,options:{hideSliderNumber:!1}},editor:{model:WA.slider,minValue:0,maxValue:100}},{id:`complete`,name:`% Complete`,field:`percentComplete`,minWidth:100,filterable:!0,formatter:nk.multiple,type:`number`,editor:{model:WA.singleSelect,enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map(t=>({value:t,label:t,symbol:`<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>`})),customStructure:{value:`value`,label:`label`,labelSuffix:`symbol`},collectionSortBy:{property:`label`,sortDesc:!0},collectionFilterBy:{property:`value`,value:0,operator:`!=`},options:{maxHeight:400}},params:{formatters:[nk.collectionEditor,nk.percentCompleteBar]}},{id:`start`,name:`Start`,field:`start`,minWidth:100,filterable:!0,filter:{model:ip.compoundDate},formatter:nk.multiple,params:{formatters:[nk.complexObject,nk.dateIso]},exportWithFormatter:!0,sortable:!0,type:`date`,editor:{model:WA.date}},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100,filterable:!0,sortable:!0,filter:{model:ip.compoundDate},formatter:nk.dateIso,exportWithFormatter:!0,type:`date`,saveOutputType:`dateUtc`,editor:{model:WA.date,options:{displayDateMin:`today`}}},{id:`cityOfOrigin`,name:`City of Origin`,field:`cityOfOrigin`,filterable:!0,minWidth:100,editor:{model:WA.autocompleter,placeholder:`🔎︎ search city`,options:{forceUserInput:!0,minLength:3,fetch:(t,o)=>{F(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log(`invalid JSONP response`,i))}}},filter:{model:ip.autocompleter,options:{minLength:3,fetch:(t,o)=>{F(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log(`invalid JSONP response`,i))}}}},{id:`countryOfOrigin`,name:`Country of Origin`,field:`countryOfOrigin`,formatter:nk.complexObject,exportWithFormatter:!0,dataKey:`code`,labelKey:`name`,type:`object`,sortComparer:GM.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:WA.autocompleter,customStructure:{label:`name`,value:`code`},collectionAsync:this.http.get(H)},filter:{model:ip.autocompleter,customStructure:{label:`name`,value:`code`},collectionAsync:this.http.get(H)}},{id:`countryOfOriginName`,name:`Country of Origin Name`,field:`countryOfOriginName`,filterable:!0,sortable:!0,minWidth:100,editor:{model:WA.autocompleter,collectionAsync:this.http.get(J)},filter:{model:ip.autocompleter,collectionAsync:this.http.get(J)}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:70,filterable:!0,type:`boolean`,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}]},formatter:nk.checkmarkMaterial,editor:{model:WA.checkbox}},{id:`prerequisites`,name:`Prerequisites`,field:`prerequisites`,minWidth:100,filterable:!0,formatter:Z,exportWithFormatter:!0,sanitizeDataExport:!0,sortable:!0,editor:{placeholder:`choose option`,collectionAsync:this.http.get(U),collectionSortBy:{property:`label`,sortDesc:!0},customStructure:{label:`label`,value:`value`,labelPrefix:`prefix`},collectionOptions:{separatorBetweenTextLabels:` `},model:WA.multipleSelect,required:!0},filter:{collectionAsync:this.http.get(U),collectionSortBy:{property:`label`,sortDesc:!0},customStructure:{label:`label`,value:`value`,labelPrefix:`prefix`},collectionOptions:{separatorBetweenTextLabels:` `},model:ip.multipleSelect,operator:`IN_CONTAINS`}}],this.gridOptions={asyncEditorLoading:!1,autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:`#demo-container`,rightPadding:10},editable:!0,enableCellNavigation:!0,enableColumnPicker:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(t,o,i)=>{this._commandQueue.push(i),i.execute()},i18n:this.translate},this.dataset=this.mockData(X)}addItem(){let t=this.dataset.length,o=this.mockData(1,t);setTimeout(()=>{let i=this.columns.find(r=>r.id===`prerequisites`);if(i){let r=i.filter.collection,d=i.editor.collection;Array.isArray(d)&&Array.isArray(r)&&(this.angularGrid.gridService.addItem(o[0]),d.push({value:t,label:t,prefix:`Task`}),r.push({value:t,label:t,prefix:`Task`}))}},250)}deleteItem(){let t=this.columns.find(o=>o.id===`prerequisites`);if(t){let o=t.filter.collectionAsync,i=t.filter.collection;if(Array.isArray(i)){let r=this.sortCollectionDescending(i).pop();this.angularGrid.gridService.deleteItemById(r.value),o instanceof K$1&&o.next(i)}}}sortCollectionDescending(t){return t.sort((o,i)=>o.value-i.value)}mockData(t,o=0){let i=[];for(let r=o;r<o+t;r++){let d=2e3+this.randomBetween(4,15),C=new Date().getFullYear()-3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),b=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),y=new Date(C,p+1,b);i.push({id:r,title:`Task `+r,duration:r%33===0?null:Math.round(Math.random()*100)+``,start:new Date(d,p,b),percentComplete:h,percentCompleteNumber:h,finish:y<new Date?``:y,effortDriven:r%5===0,prerequisites:r%2===0&&r!==0&&r<12?[r,r-1]:[],countryOfOrigin:r%2?{code:`CA`,name:`Canada`}:{code:`US`,name:`United States`},countryOfOriginName:r%2?`Canada`:`United States`,cityOfOrigin:r%2?`Vancouver, BC, Canada`:`Boston, MA, United States`})}return i}randomBetween(t,o){return Math.floor(Math.random()*(o-t+1)+t)}onCellChanged(t,o){this.updatedObject=o.item}onCellClicked(t,o){let i=this.angularGrid.gridService.getColumnFromEventArguments(o);console.log(i),i.columnDef.id===`edit`?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500)):i.columnDef.id===`delete`&&confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(i.dataContext.id)}onValidationError(t,o){o.validationResults&&a(o.validationResults.msg,`danger`)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.gridObj?.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){let t={id:`title${this.duplicateTitleHeaderCount++}`,name:`Title`,field:`title`,editor:{model:WA.text,required:!0,validator:D},sortable:!0,minWidth:100,filterable:!0};this.columns.push(t),this.columns=this.columns.slice()}dynamicallyRemoveLastColumn(){this.columns.pop(),this.columns=this.columns.slice()}setAutoEdit(t){return this.isAutoEdit=t,this.gridObj?.setOptions({autoEdit:t}),!0}undo(){let t=this._commandQueue.pop();t&&Ti.cancelCurrentEdit()&&(t.undo(),this.gridObj?.gotoCell(t.row,t.cell,!1))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||s)}}static{this.ɵcmp=UE({type:s,selectors:[[`ng-component`]],decls:141,vars:8,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example03.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/editors`,`target`,`_blank`],[1,`row`],[1,`col-sm-6`],[`id`,`radioAutoEdit`],[`for`,`radioTrue`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`id`,`radioTrue`,`checked`,``,3,`change`,`value`],[`for`,`radioFalse`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`id`,`radioFalse`,3,`change`,`value`],[1,`row`,`col-sm-12`],[`data-test`,`undo-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-undo`],[`for`,`autoCommitEdit`,1,`checkbox-inline`,`control-label`],[`type`,`checkbox`,`id`,`autoCommitEdit`,`data-test`,`auto-commit`,3,`click`,`checked`],[1,`row`,2,`margin-top`,`5px`],[1,`col-sm-12`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`add-item-btn`,`title`,`Clear Filters & Sorting to see it better`,1,`btn`,`btn-sm`,`btn-outline-primary`,3,`click`],[`data-test`,`delete-item-btn`,1,`btn`,`btn-sm`,`btn-outline-danger`,3,`click`],[`data-test`,`add-title-column`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-shape-square-plus`],[`data-test`,`remove-title-column`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-minus`],[`gridId`,`grid3`,3,`onAngularGridCreated`,`onCellChange`,`onClick`,`onValidationError`,`columns`,`options`,`dataset`],[1,`alert`,`alert-info`],[1,`alert`,`alert-warning`]],template:function(o,i){o&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 3: Editors / Delete
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return i.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`
  `),mi(18,`div`,6),iD(19,`
    Grid with Inline Editors and onCellClick actions (`),mi(20,`a`,7),iD(21,`Wiki docs`),Ac(),iD(22,`).
    `),mi(23,`ul`),iD(24,`
      `),mi(25,`li`),iD(26,`
        Multiple Editors & Filters are available: AutoComplete, Checkbox, Date, Slider, SingleSelect, MultipleSelect, Float, Text,
        LongText... even Custom Editor
      `),Ac(),iD(27,`
      `),mi(28,`li`),iD(29,`When using "enableCellNavigation: true", clicking on a cell will automatically make it active & selected.`),Ac(),iD(30,`
      `),mi(31,`ul`),iD(32,`
        `),mi(33,`li`),iD(34,`If you don't want this behavior, then you should disable "enableCellNavigation"`),Ac(),iD(35,`
      `),Ac(),iD(36,`
      `),mi(37,`li`),iD(38,`Inline Editors requires "enableCellNavigation: true" (not sure why though)`),Ac(),iD(39,`
      `),mi(40,`li`),iD(41,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),Ac(),iD(42,`
      `),mi(43,`li`),iD(44,`MultipleSelect & SingeSelect Editors & Filters can use a regular "collection" or "collectionAsync" to load it asynchronously`),Ac(),iD(45,`
      `),mi(46,`ul`),iD(47,`
        `),mi(48,`li`),iD(49,`Click on "Add Item" and see the Editor/Filter or the "Prerequesites" column change`),Ac(),iD(50,`
        `),mi(51,`li`),iD(52,`Any Editor/Filter with a "collection" can be changed dynamically later in the future`),Ac(),iD(53,`
      `),Ac(),iD(54,`
    `),Ac(),iD(55,`
  `),Ac(),iD(56,`

  `),mi(57,`div`,8),iD(58,`
    `),mi(59,`div`,9),iD(60,`
      `),mi(61,`label`),iD(62,`autoEdit setting: `),Ac(),iD(63,`
      `),mi(64,`span`,10),iD(65,`
        `),mi(66,`label`,11),iD(67,`
          `),mi(68,`input`,12),Tp(`change`,function(){return i.setAutoEdit(!0)}),Ac(),iD(69,` ON
          (single-click)
        `),Ac(),iD(70,`
        `),mi(71,`label`,13),iD(72,`
          `),mi(73,`input`,14),Tp(`change`,function(){return i.setAutoEdit(!1)}),Ac(),iD(74,` OFF
          (double-click)
        `),Ac(),iD(75,`
      `),Ac(),iD(76,`
      `),mi(77,`div`,15),iD(78,`
        `),mi(79,`span`),iD(80,`
          `),mi(81,`button`,16),Tp(`click`,function(){return i.undo()}),iD(82,`
            `),vp(83,`i`,17),iD(84,`
            Undo last edit(s)
          `),Ac(),iD(85,`
          `),mi(86,`label`,18),iD(87,`
            `),mi(88,`input`,19),Tp(`click`,function(){return i.changeAutoCommit()}),Ac(),iD(89,`
            Auto Commit Edit
          `),Ac(),iD(90,`
        `),Ac(),iD(91,`
      `),Ac(),iD(92,`
      `),mi(93,`div`,20),iD(94,`
        `),mi(95,`div`,21),iD(96,`
          `),mi(97,`button`,22),Tp(`click`,function(){return i.angularGrid.filterService.clearFilters()}),iD(98,`
            Clear Filters
          `),Ac(),iD(99,`
          `),mi(100,`button`,22),Tp(`click`,function(){return i.angularGrid.sortService.clearSorting()}),iD(101,`Clear Sorting`),Ac(),iD(102,`
          `),mi(103,`button`,23),Tp(`click`,function(){return i.addItem()}),iD(104,`
            Add item
          `),Ac(),iD(105,`
          `),mi(106,`button`,24),Tp(`click`,function(){return i.deleteItem()}),iD(107,`Delete item`),Ac(),iD(108,`
        `),Ac(),iD(109,`
      `),Ac(),iD(110,`
      `),mi(111,`div`,20),iD(112,`
        `),mi(113,`div`,21),iD(114,`
          `),mi(115,`button`,25),Tp(`click`,function(){return i.dynamicallyAddTitleHeader()}),iD(116,`
            `),vp(117,`i`,26),iD(118,`
            Dynamically Duplicate Title Column
          `),Ac(),iD(119,`
          `),mi(120,`button`,27),Tp(`click`,function(){return i.dynamicallyRemoveLastColumn()}),iD(121,`
            `),vp(122,`i`,28),iD(123,`
            Dynamically Remove Last Column
          `),Ac(),iD(124,`
        `),Ac(),iD(125,`
      `),Ac(),iD(126,`
    `),Ac(),iD(127,`

    `),mi(128,`div`,9),iD(129,`
      `),fI(130,Y,7,3),fI(131,Q,6,1),Ac(),iD(132,`
  `),Ac(),iD(133,`

  `),mi(134,`div`,21),iD(135,`
    `),mi(136,`angular-slickgrid`,29),Tp(`onAngularGridCreated`,function(d){return i.angularGridReady(d.detail)})(`onCellChange`,function(d){return i.onCellChanged(d.detail.eventData,d.detail.args)})(`onClick`,function(d){return i.onCellClicked(d.detail.eventData,d.detail.args)})(`onValidationError`,function(d){return i.onValidationError(d.detail.eventData,d.detail.args)}),iD(137,`
    `),Ac(),iD(138,`
  `),Ac(),iD(139,`
`),Ac(),iD(140,`
`)),o&2&&(cy(68),mp(`value`,i.isAutoEdit),cy(5),mp(`value`,i.isAutoEdit),cy(15),mp(`checked`,i.gridOptions.autoCommitEdit),cy(42),pI(i.updatedObject?130:-1),cy(),pI(i.alertWarning?131:-1),cy(5),mp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[_W,Fm],encapsulation:2})}}return s})();export{he as Example3Component};