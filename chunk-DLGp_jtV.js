import{$ as MD,In as lD,Tt as SD,Ut as X$1,a as Ap,bt as RI,jn as jc,kr as yI,mn as dv,on as bp,p as D$1,tn as _p,xn as gI,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,D as Mi,G as WO,J as Yp,jt as zA,l as D1,wt as vi$1,yt as sI}from"./chunk-Dk5kBPyv.js";import{n as ze}from"./main-BEH6XCIK.js";import{t as a}from"./chunk-CiyLb43o.js";import{t as r}from"./chunk-D2A9m6Pt.js";var v=class{constructor(a){this.args=a,this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit??!1}get validator(){return this.columnEditor.validator||this.columnDef.validator}init(){let a=this.columnEditor?.placeholder||``,t=this.columnEditor?.title||``;this.inputElm=document.createElement(`input`),this.inputElm.type=`text`,this.inputElm.className=`editor-text`,this.inputElm.placeholder=a,this.inputElm.title=t,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener(`keydown`,this.onKeydown.bind(this)),this.hasAutoCommitEdit&&this.inputElm.addEventListener(`focusout`,this.save.bind(this)),setTimeout(()=>{this.inputElm.focus(),this.inputElm.select()},50)}onKeydown(a){this._lastInputEvent=a,(a.key===`ArrowLeft`||a.key===`ArrowRight`)&&a.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener(`keydown`,this.onKeydown.bind(this)),this.inputElm.removeEventListener(`focusout`,this.save.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(a){this.inputElm.value=a}loadValue(a){this.defaultValue=a[this.args.column.field]||``,this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(a,t){let o=this.validate(t);a[this.args.column.field]=o&&o.valid?t:``}isValueChanged(){let a=this._lastInputEvent?.key;return this.columnEditor?.alwaysSaveOnEnterKey&&a===`Enter`?!0:!(this.inputElm.value===``&&this.defaultValue===null)&&this.inputElm.value!==this.defaultValue}save(){this.validate()?.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges())}validate(a){if(this.validator){let t=a!==void 0?a:this.inputElm?.value;return this.validator(t,this.args)}return{valid:!0,msg:null}}};var $={timeout:5e3,jsonpCallback:`callback`,jsonpCallbackFunction:null};var K=()=>`jsonp_${Date.now()}_${Math.ceil(Math.random()*1e5)}`;var S=s=>delete window[s];var w=s=>{let a=document.getElementById(s);a&&document.getElementsByTagName(`head`)[0].removeChild(a)};function z(s,a={}){let t=s,o=a.timeout||$.timeout,i=a.jsonpCallback||$.jsonpCallback,r;return new Promise((d,C)=>{let p=a.jsonpCallbackFunction||K(),b=`${i}_${p}`;window[p]=y=>{d({ok:!0,json:()=>Promise.resolve(y)}),r&&clearTimeout(r),w(b),S(p)},t+=t.indexOf(`?`)===-1?`?`:`&`;let h=document.createElement(`script`);h.setAttribute(`src`,`${t}${i}=${p}`),a.charset&&h.setAttribute(`charset`,a.charset),a.nonce&&h.setAttribute(`nonce`,a.nonce),a.referrerPolicy&&h.setAttribute(`referrerPolicy`,a.referrerPolicy),a.crossorigin&&h.setAttribute(`crossorigin`,`true`),h.id=b,document.getElementsByTagName(`head`)[0].appendChild(h),r=setTimeout(()=>{C(new Error(`JSONP request to ${s} timed out`)),S(p),w(b),window[p]=()=>{S(p)}},o),h.onerror=()=>{C(new Error(`JSONP request to ${s} failed`)),S(p),w(b),r&&clearTimeout(r)}})}var F=z;function Y(s,a){if(s&1&&(lD(0,`
        `),vi(1,`div`,30)(2,`strong`),lD(3,`Updated Item:`),Rc(),lD(4),MD(5,`json`),Rc(),lD(6,`
      `)),s&2){let t=RI();dv(4),jc(` `,SD(5,1,t.updatedObject))}}function Q(s,a){if(s&1&&(lD(0,`
        `),vi(1,`div`,31)(2,`strong`),lD(3,`Updated Item:`),Rc(),lD(4),Rc(),lD(5,`
      `)),s&2){let t=RI();dv(4),jc(` `,t.alertWarning)}}var X=100;var U=`assets/data/collection_100_numbers.json`;var H=`assets/data/countries.json`;var J=`assets/data/country_names.json`;var D=(s,a)=>s==null||!s.length?{valid:!1,msg:`This is a required field`}:/^Task\s\d+$/.test(s)?{valid:!0,msg:``}:{valid:!1,msg:`Your title is invalid, it must start with "Task" followed by a number`};var Z=(s,a,t)=>{if(t&&Array.isArray(t)){let i=t.map(r=>`Task ${r}`).join(`, `);return`<span title="${i}">${i}</span>`}return``};var he=(()=>{class s{constructor(){this.http=D$1(ze),this.translate=D$1(Mi),this._commandQueue=[],this.hideSubTitle=!1,this.isAutoEdit=!0,this.selectedLanguage=`en`,this.duplicateTitleHeaderCount=1}ngOnInit(){this.prepareGrid()}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid}prepareGrid(){this.columns=[{id:`edit`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:sI.icon,params:{iconCssClass:`mdi mdi-pencil pointer`},minWidth:30,maxWidth:30,onCellClick:(t,o)=>{console.log(o),this.alertWarning=`Editing: ${o.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500),this.angularGrid.gridService.setSelectedRow(o.row)}},{id:`delete`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:sI.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30},{id:`title`,name:`Title`,field:`title`,minWidth:100,filterable:!0,sortable:!0,editor:{model:WO.longText,required:!0,maxLength:12,options:{cols:42,rows:5,buttonTexts:{}},validator:D},onCellChange:(t,o)=>{console.log(o),this.alertWarning=`Updated Title: ${o.dataContext.title}`}},{id:`title2`,name:`Title, Custom Editor`,field:`title`,minWidth:70,filterable:!0,sortable:!0,editor:{model:v,placeholder:`custom`,validator:D},filter:{model:r,placeholder:`🔎︎ custom`}},{id:`duration`,name:`Duration (days)`,field:`duration`,minWidth:100,filterable:!0,sortable:!0,formatter:sI.complexObject,type:`number`,exportWithFormatter:!0,filter:{model:uu.slider,options:{hideSliderNumber:!1}},editor:{model:WO.slider,minValue:0,maxValue:100}},{id:`complete`,name:`% Complete`,field:`percentComplete`,minWidth:100,filterable:!0,formatter:sI.multiple,type:`number`,editor:{model:WO.singleSelect,enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map(t=>({value:t,label:t,symbol:`<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>`})),customStructure:{value:`value`,label:`label`,labelSuffix:`symbol`},collectionSortBy:{property:`label`,sortDesc:!0},collectionFilterBy:{property:`value`,value:0,operator:`!=`},options:{maxHeight:400}},params:{formatters:[sI.collectionEditor,sI.percentCompleteBar]}},{id:`start`,name:`Start`,field:`start`,minWidth:100,filterable:!0,filter:{model:uu.compoundDate},formatter:sI.multiple,params:{formatters:[sI.complexObject,sI.dateIso]},exportWithFormatter:!0,sortable:!0,type:`date`,editor:{model:WO.date}},{id:`finish`,name:`Finish`,field:`finish`,minWidth:100,filterable:!0,sortable:!0,filter:{model:uu.compoundDate},formatter:sI.dateIso,exportWithFormatter:!0,type:`date`,saveOutputType:`dateUtc`,editor:{model:WO.date,options:{displayDateMin:`today`}}},{id:`cityOfOrigin`,name:`City of Origin`,field:`cityOfOrigin`,filterable:!0,minWidth:100,editor:{model:WO.autocompleter,placeholder:`🔎︎ search city`,options:{forceUserInput:!0,minLength:3,fetch:(t,o)=>{F(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log(`invalid JSONP response`,i))}}},filter:{model:uu.autocompleter,options:{minLength:3,fetch:(t,o)=>{F(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log(`invalid JSONP response`,i))}}}},{id:`countryOfOrigin`,name:`Country of Origin`,field:`countryOfOrigin`,formatter:sI.complexObject,exportWithFormatter:!0,dataKey:`code`,labelKey:`name`,type:`object`,sortComparer:zA.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:WO.autocompleter,customStructure:{label:`name`,value:`code`},collectionAsync:this.http.get(H)},filter:{model:uu.autocompleter,customStructure:{label:`name`,value:`code`},collectionAsync:this.http.get(H)}},{id:`countryOfOriginName`,name:`Country of Origin Name`,field:`countryOfOriginName`,filterable:!0,sortable:!0,minWidth:100,editor:{model:WO.autocompleter,collectionAsync:this.http.get(J)},filter:{model:uu.autocompleter,collectionAsync:this.http.get(J)}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,minWidth:70,filterable:!0,type:`boolean`,filter:{model:uu.singleSelect,collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}]},formatter:sI.checkmarkMaterial,editor:{model:WO.checkbox}},{id:`prerequisites`,name:`Prerequisites`,field:`prerequisites`,minWidth:100,filterable:!0,formatter:Z,exportWithFormatter:!0,sanitizeDataExport:!0,sortable:!0,editor:{placeholder:`choose option`,collectionAsync:this.http.get(U),collectionSortBy:{property:`label`,sortDesc:!0},customStructure:{label:`label`,value:`value`,labelPrefix:`prefix`},collectionOptions:{separatorBetweenTextLabels:` `},model:WO.multipleSelect,required:!0},filter:{collectionAsync:this.http.get(U),collectionSortBy:{property:`label`,sortDesc:!0},customStructure:{label:`label`,value:`value`,labelPrefix:`prefix`},collectionOptions:{separatorBetweenTextLabels:` `},model:uu.multipleSelect,operator:`IN_CONTAINS`}}],this.gridOptions={asyncEditorLoading:!1,autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:`#demo-container`,rightPadding:10},editable:!0,enableCellNavigation:!0,enableColumnPicker:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(t,o,i)=>{this._commandQueue.push(i),i.execute()},i18n:this.translate},this.dataset=this.mockData(X)}addItem(){let t=this.dataset.length,o=this.mockData(1,t);setTimeout(()=>{let i=this.columns.find(r=>r.id===`prerequisites`);if(i){let r=i.filter.collection,d=i.editor.collection;Array.isArray(d)&&Array.isArray(r)&&(this.angularGrid.gridService.addItem(o[0]),d.push({value:t,label:t,prefix:`Task`}),r.push({value:t,label:t,prefix:`Task`}))}},250)}deleteItem(){let t=this.columns.find(o=>o.id===`prerequisites`);if(t){let o=t.filter.collectionAsync,i=t.filter.collection;if(Array.isArray(i)){let r=this.sortCollectionDescending(i).pop();this.angularGrid.gridService.deleteItemById(r.value),o instanceof X$1&&o.next(i)}}}sortCollectionDescending(t){return t.sort((o,i)=>o.value-i.value)}mockData(t,o=0){let i=[];for(let r=o;r<o+t;r++){let d=2e3+this.randomBetween(4,15),C=new Date().getFullYear()-3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),b=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),y=new Date(C,p+1,b);i.push({id:r,title:`Task `+r,duration:r%33===0?null:Math.round(Math.random()*100)+``,start:new Date(d,p,b),percentComplete:h,percentCompleteNumber:h,finish:y<new Date?``:y,effortDriven:r%5===0,prerequisites:r%2===0&&r!==0&&r<12?[r,r-1]:[],countryOfOrigin:r%2?{code:`CA`,name:`Canada`}:{code:`US`,name:`United States`},countryOfOriginName:r%2?`Canada`:`United States`,cityOfOrigin:r%2?`Vancouver, BC, Canada`:`Boston, MA, United States`})}return i}randomBetween(t,o){return Math.floor(Math.random()*(o-t+1)+t)}onCellChanged(t,o){this.updatedObject=o.item}onCellClicked(t,o){let i=this.angularGrid.gridService.getColumnFromEventArguments(o);console.log(i),i.columnDef.id===`edit`?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500)):i.columnDef.id===`delete`&&confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(i.dataContext.id)}onValidationError(t,o){o.validationResults&&a(o.validationResults.msg,`danger`)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.gridObj?.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){let t={id:`title${this.duplicateTitleHeaderCount++}`,name:`Title`,field:`title`,editor:{model:WO.text,required:!0,validator:D},sortable:!0,minWidth:100,filterable:!0};this.columns.push(t),this.columns=this.columns.slice()}dynamicallyRemoveLastColumn(){this.columns.pop(),this.columns=this.columns.slice()}setAutoEdit(t){return this.isAutoEdit=t,this.gridObj?.setOptions({autoEdit:t}),!0}undo(){let t=this._commandQueue.pop();t&&vi$1.cancelCurrentEdit()&&(t.undo(),this.gridObj?.gotoCell(t.row,t.cell,!1))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||s)}}static{this.ɵcmp=WE({type:s,selectors:[[`ng-component`]],decls:141,vars:8,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example03.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/editors`,`target`,`_blank`],[1,`row`],[1,`col-sm-6`],[`id`,`radioAutoEdit`],[`for`,`radioTrue`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`id`,`radioTrue`,`checked`,``,3,`change`,`value`],[`for`,`radioFalse`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`id`,`radioFalse`,3,`change`,`value`],[1,`row`,`col-sm-12`],[`data-test`,`undo-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-undo`],[`for`,`autoCommitEdit`,1,`checkbox-inline`,`control-label`],[`type`,`checkbox`,`id`,`autoCommitEdit`,`data-test`,`auto-commit`,3,`click`,`checked`],[1,`row`,2,`margin-top`,`5px`],[1,`col-sm-12`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`add-item-btn`,`title`,`Clear Filters & Sorting to see it better`,1,`btn`,`btn-sm`,`btn-outline-primary`,3,`click`],[`data-test`,`delete-item-btn`,1,`btn`,`btn-sm`,`btn-outline-danger`,3,`click`],[`data-test`,`add-title-column`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-shape-square-plus`],[`data-test`,`remove-title-column`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-minus`],[`gridId`,`grid3`,3,`onAngularGridCreated`,`onCellChange`,`onClick`,`onValidationError`,`columns`,`options`,`dataset`],[1,`alert`,`alert-info`],[1,`alert`,`alert-warning`]],template:function(o,i){o&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 3: Editors / Delete
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return i.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`
  `),vi(18,`div`,6),lD(19,`
    Grid with Inline Editors and onCellClick actions (`),vi(20,`a`,7),lD(21,`Wiki docs`),Rc(),lD(22,`).
    `),vi(23,`ul`),lD(24,`
      `),vi(25,`li`),lD(26,`
        Multiple Editors & Filters are available: AutoComplete, Checkbox, Date, Slider, SingleSelect, MultipleSelect, Float, Text,
        LongText... even Custom Editor
      `),Rc(),lD(27,`
      `),vi(28,`li`),lD(29,`When using "enableCellNavigation: true", clicking on a cell will automatically make it active & selected.`),Rc(),lD(30,`
      `),vi(31,`ul`),lD(32,`
        `),vi(33,`li`),lD(34,`If you don't want this behavior, then you should disable "enableCellNavigation"`),Rc(),lD(35,`
      `),Rc(),lD(36,`
      `),vi(37,`li`),lD(38,`Inline Editors requires "enableCellNavigation: true" (not sure why though)`),Rc(),lD(39,`
      `),vi(40,`li`),lD(41,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),Rc(),lD(42,`
      `),vi(43,`li`),lD(44,`MultipleSelect & SingeSelect Editors & Filters can use a regular "collection" or "collectionAsync" to load it asynchronously`),Rc(),lD(45,`
      `),vi(46,`ul`),lD(47,`
        `),vi(48,`li`),lD(49,`Click on "Add Item" and see the Editor/Filter or the "Prerequesites" column change`),Rc(),lD(50,`
        `),vi(51,`li`),lD(52,`Any Editor/Filter with a "collection" can be changed dynamically later in the future`),Rc(),lD(53,`
      `),Rc(),lD(54,`
    `),Rc(),lD(55,`
  `),Rc(),lD(56,`

  `),vi(57,`div`,8),lD(58,`
    `),vi(59,`div`,9),lD(60,`
      `),vi(61,`label`),lD(62,`autoEdit setting: `),Rc(),lD(63,`
      `),vi(64,`span`,10),lD(65,`
        `),vi(66,`label`,11),lD(67,`
          `),vi(68,`input`,12),Ap(`change`,function(){return i.setAutoEdit(!0)}),Rc(),lD(69,` ON
          (single-click)
        `),Rc(),lD(70,`
        `),vi(71,`label`,13),lD(72,`
          `),vi(73,`input`,14),Ap(`change`,function(){return i.setAutoEdit(!1)}),Rc(),lD(74,` OFF
          (double-click)
        `),Rc(),lD(75,`
      `),Rc(),lD(76,`
      `),vi(77,`div`,15),lD(78,`
        `),vi(79,`span`),lD(80,`
          `),vi(81,`button`,16),Ap(`click`,function(){return i.undo()}),lD(82,`
            `),_p(83,`i`,17),lD(84,`
            Undo last edit(s)
          `),Rc(),lD(85,`
          `),vi(86,`label`,18),lD(87,`
            `),vi(88,`input`,19),Ap(`click`,function(){return i.changeAutoCommit()}),Rc(),lD(89,`
            Auto Commit Edit
          `),Rc(),lD(90,`
        `),Rc(),lD(91,`
      `),Rc(),lD(92,`
      `),vi(93,`div`,20),lD(94,`
        `),vi(95,`div`,21),lD(96,`
          `),vi(97,`button`,22),Ap(`click`,function(){return i.angularGrid.filterService.clearFilters()}),lD(98,`
            Clear Filters
          `),Rc(),lD(99,`
          `),vi(100,`button`,22),Ap(`click`,function(){return i.angularGrid.sortService.clearSorting()}),lD(101,`Clear Sorting`),Rc(),lD(102,`
          `),vi(103,`button`,23),Ap(`click`,function(){return i.addItem()}),lD(104,`
            Add item
          `),Rc(),lD(105,`
          `),vi(106,`button`,24),Ap(`click`,function(){return i.deleteItem()}),lD(107,`Delete item`),Rc(),lD(108,`
        `),Rc(),lD(109,`
      `),Rc(),lD(110,`
      `),vi(111,`div`,20),lD(112,`
        `),vi(113,`div`,21),lD(114,`
          `),vi(115,`button`,25),Ap(`click`,function(){return i.dynamicallyAddTitleHeader()}),lD(116,`
            `),_p(117,`i`,26),lD(118,`
            Dynamically Duplicate Title Column
          `),Rc(),lD(119,`
          `),vi(120,`button`,27),Ap(`click`,function(){return i.dynamicallyRemoveLastColumn()}),lD(121,`
            `),_p(122,`i`,28),lD(123,`
            Dynamically Remove Last Column
          `),Rc(),lD(124,`
        `),Rc(),lD(125,`
      `),Rc(),lD(126,`
    `),Rc(),lD(127,`

    `),vi(128,`div`,9),lD(129,`
      `),gI(130,Y,7,3),gI(131,Q,6,1),Rc(),lD(132,`
  `),Rc(),lD(133,`

  `),vi(134,`div`,21),lD(135,`
    `),vi(136,`angular-slickgrid`,29),Ap(`onAngularGridCreated`,function(d){return i.angularGridReady(d.detail)})(`onCellChange`,function(d){return i.onCellChanged(d.detail.eventData,d.detail.args)})(`onClick`,function(d){return i.onCellClicked(d.detail.eventData,d.detail.args)})(`onValidationError`,function(d){return i.onValidationError(d.detail.eventData,d.detail.args)}),lD(137,`
    `),Rc(),lD(138,`
  `),Rc(),lD(139,`
`),Rc(),lD(140,`
`)),o&2&&(dv(68),bp(`value`,i.isAutoEdit),dv(5),bp(`value`,i.isAutoEdit),dv(15),bp(`checked`,i.gridOptions.autoCommitEdit),dv(42),yI(i.updatedObject?130:-1),dv(),yI(i.alertWarning?131:-1),dv(5),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[D1,Yp],encapsulation:2})}}return s})();export{he as Example3Component};