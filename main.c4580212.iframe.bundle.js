(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./.storybook/generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/vue3/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var client_api=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/client_api.js"),types=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/types.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},"./.storybook/storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/vue3/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Editor.stories.tsx":"./src/stories/Editor.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/main/ts/ScriptLoader.ts":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScriptLoader=void 0;var Utils_1=__webpack_require__("./src/main/ts/Utils.ts"),createState=function createState(){return{listeners:[],scriptId:Utils_1.uuid("tiny-script"),scriptLoaded:!1}},ScriptLoader=function CreateScriptLoader(){var state=createState();return{load:function load(doc,url,callback){state.scriptLoaded?callback():(state.listeners.push(callback),doc.getElementById(state.scriptId)||function injectScriptTag(scriptId,doc,url,callback){var scriptTag=doc.createElement("script");scriptTag.referrerPolicy="origin",scriptTag.type="application/javascript",scriptTag.id=scriptId,scriptTag.src=url,scriptTag.addEventListener("load",(function handler(){scriptTag.removeEventListener("load",handler),callback()})),doc.head&&doc.head.appendChild(scriptTag)}(state.scriptId,doc,url,(function(){state.listeners.forEach((function(fn){return fn()})),state.scriptLoaded=!0})))},reinitialize:function reinitialize(){state=createState()}}}();exports.ScriptLoader=ScriptLoader},"./src/main/ts/TinyMCE.ts":function(module,exports,__webpack_require__){"use strict";(function(global){__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTinymce=void 0;var getGlobal=function getGlobal(){return"undefined"!=typeof window?window:global};exports.getTinymce=function getTinymce(){var global=getGlobal();return global&&global.tinymce?global.tinymce:null}}).call(this,__webpack_require__("./node_modules/webpack/buildin/global.js"))},"./src/main/ts/Utils.ts":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.date.now.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNullOrUndefined=exports.mergePlugins=exports.isTextarea=exports.uuid=exports.isValidKey=exports.initEditor=exports.bindModelHandlers=exports.bindHandlers=void 0;var vue_1=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js"),validEvents=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],isValidKey=function isValidKey(key){return-1!==validEvents.map((function(event){return event.toLowerCase()})).indexOf(key.toLowerCase())};exports.isValidKey=isValidKey;var bindHandlers=function bindHandlers(initEvent,listeners,editor){Object.keys(listeners).filter(isValidKey).forEach((function(key){var handler=listeners[key];"function"==typeof handler&&("onInit"===key?handler(initEvent,editor):editor.on(key.substring(2),(function(e){return handler(e,editor)})))}))};exports.bindHandlers=bindHandlers;var bindModelHandlers=function bindModelHandlers(props,ctx,editor,modelValue){var modelEvents=props.modelEvents?props.modelEvents:null,normalizedEvents=Array.isArray(modelEvents)?modelEvents.join(" "):modelEvents;vue_1.watch(modelValue,(function(val,prevVal){editor&&"string"==typeof val&&val!==prevVal&&val!==editor.getContent({format:props.outputFormat})&&editor.setContent(val)})),editor.on(normalizedEvents||"change input undo redo",(function(){ctx.emit("update:modelValue",editor.getContent({format:props.outputFormat}))}))};exports.bindModelHandlers=bindModelHandlers;exports.initEditor=function initEditor(initEvent,props,ctx,editor,modelValue,content){editor.setContent(content()),ctx.attrs["onUpdate:modelValue"]&&bindModelHandlers(props,ctx,editor,modelValue),bindHandlers(initEvent,ctx.attrs,editor)};var unique=0;exports.uuid=function uuid(prefix){var time=Date.now();return prefix+"_"+Math.floor(1e9*Math.random())+ ++unique+String(time)};exports.isTextarea=function isTextarea(element){return null!==element&&"textarea"===element.tagName.toLowerCase()};var normalizePluginArray=function normalizePluginArray(plugins){return void 0===plugins||""===plugins?[]:Array.isArray(plugins)?plugins:plugins.split(" ")};exports.mergePlugins=function mergePlugins(initPlugins,inputPlugins){return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins))};exports.isNullOrUndefined=function isNullOrUndefined(value){return null==value}},"./src/main/ts/components/Editor.ts":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Editor=void 0;var ScriptLoader_1=__webpack_require__("./src/main/ts/ScriptLoader.ts"),TinyMCE_1=__webpack_require__("./src/main/ts/TinyMCE.ts"),Utils_1=__webpack_require__("./src/main/ts/Utils.ts"),EditorPropTypes_1=__webpack_require__("./src/main/ts/components/EditorPropTypes.ts"),vue_1=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");exports.Editor=vue_1.defineComponent({props:EditorPropTypes_1.editorProps,setup:function setup(props,ctx){var _a=vue_1.toRefs(props),disabled=_a.disabled,modelValue=_a.modelValue,element=vue_1.ref(null),vueEditor=null,elementId=props.id||Utils_1.uuid("tiny-vue"),inlineEditor=props.init&&props.init.inline||props.inline,modelBind=!!ctx.attrs["onUpdate:modelValue"],mounting=!0,initialValue=props.initialValue?props.initialValue:"",cache="",initWrapper=function initWrapper(){var content=function getContent(isMounting){return modelBind?function(){return(null==modelValue?void 0:modelValue.value)?modelValue.value:""}:function(){return isMounting?initialValue:cache}}(mounting),finalInit=__assign(__assign({},props.init),{readonly:props.disabled,selector:"#"+elementId,plugins:Utils_1.mergePlugins(props.init&&props.init.plugins,props.plugins),toolbar:props.toolbar||props.init&&props.init.toolbar,inline:inlineEditor,setup:function setup(editor){vueEditor=editor,editor.on("init",(function(e){return Utils_1.initEditor(e,props,ctx,editor,modelValue,content)})),props.init&&"function"==typeof props.init.setup&&props.init.setup(editor)}});Utils_1.isTextarea(element.value)&&(element.value.style.visibility=""),TinyMCE_1.getTinymce().init(finalInit),mounting=!1};return vue_1.watch(disabled,(function(disable){null!==vueEditor&&vueEditor.setMode(disable?"readonly":"design")})),vue_1.onMounted((function(){if(null!==TinyMCE_1.getTinymce())initWrapper();else if(element.value&&element.value.ownerDocument){var channel=props.cloudChannel?props.cloudChannel:"5",apiKey=props.apiKey?props.apiKey:"no-api-key",scriptSrc=Utils_1.isNullOrUndefined(props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+apiKey+"/tinymce/"+channel+"/tinymce.min.js":props.tinymceScriptSrc;ScriptLoader_1.ScriptLoader.load(element.value.ownerDocument,scriptSrc,initWrapper)}})),vue_1.onBeforeUnmount((function(){null!==TinyMCE_1.getTinymce()&&TinyMCE_1.getTinymce().remove(vueEditor)})),inlineEditor||(vue_1.onActivated((function(){mounting||initWrapper()})),vue_1.onDeactivated((function(){var _a;modelBind||(cache=vueEditor.getContent()),null===(_a=TinyMCE_1.getTinymce())||void 0===_a||_a.remove(vueEditor)}))),function(){return inlineEditor?function renderInline(ce,id,elementRef,tagName){return ce(tagName||"div",{id:id,ref:elementRef})}(vue_1.h,elementId,element,props.tagName):function renderIframe(ce,id,elementRef){return ce("textarea",{id:id,visibility:"hidden",ref:elementRef})}(vue_1.h,elementId,element)}}})},"./src/main/ts/components/EditorPropTypes.ts":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.editorProps=void 0,exports.editorProps={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function validator(prop){return"html"===prop||"text"===prop}}}},"./src/stories/Editor.stories.tsx":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Disable=exports.Controlled=exports.Inline=exports.Iframe=void 0;var Editor_1=__webpack_require__("./src/main/ts/components/Editor.ts"),apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",content='\n<h2 style="text-align: center;">\n  TinyMCE provides a <span style="text-decoration: underline;">full-featured</span> rich text editing experience, and a featherweight download.\n</h2>\n<p style="text-align: center;">\n  <strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">No matter what you\'re building, TinyMCE has got you covered.</span></span></strong>\n</p>';exports.default={title:"Editor",component:Editor_1.Editor,parameters:{controls:{hideNoControlsWarning:!0}}},exports.Iframe=function(){return{components:{Editor:Editor_1.Editor},setup:function setup(){return{apiKey:apiKey,content:content}},template:'<div><editor :api-key="apiKey" :initialValue="content" /></div>'}},exports.Inline=function(){return{components:{Editor:Editor_1.Editor},data:function data(){return{content:content}},template:'\n    <div style="padding-top: 100px;">\n      <editor\n        api-key="'+apiKey+'"\n        v-model="content"\n        inline\n      />\n    </div>'}},exports.Controlled=function(){return{components:{Editor:Editor_1.Editor},data:function data(){return{content:content}},methods:{log:function log(e,_editor){return console.log(e)}},template:'\n    <div>\n      <editor\n        api-key="'+apiKey+'"\n        :init="{height: 300}"\n        v-model="content"\n        @onBlur="log"\n      />\n      <textarea\n        style="width: 100%;\n        height:200px;"\n        v-model="content"\n      ></textarea>\n      <div v-html="content"></div>\n    </div>'}},exports.Disable=function(){return{components:{Editor:Editor_1.Editor},data:function data(){return{content:content,disabled:!1}},methods:{toggleDisabled:function toggleDisabled(_e){this.disabled=!this.disabled}},template:"\n    <div>\n      <button @click=\"toggleDisabled\">{{ disabled ? 'enable' : 'disable' }}</button>\n      <editor\n        api-key=\""+apiKey+'"\n        v-bind:disabled="disabled"\n        :init="{height: 300}"\n        v-model="content"\n      />\n    </div>'}},exports.Iframe.parameters=__assign({storySource:{source:'() => ({\n  components: {Editor},\n  setup() {\n    return {\n      apiKey,\n      content\n    }\n  },\n  template: \'<div><editor :api-key="apiKey" :initialValue="content" /></div>\'\n})'}},exports.Iframe.parameters),exports.Inline.parameters=__assign({storySource:{source:'() => ({\n  components: { Editor },\n  data: () => ({ content }),\n  template: `\n    <div style="padding-top: 100px;">\n      <editor\n        api-key="${apiKey}"\n        v-model="content"\n        inline\n      />\n    </div>`\n})'}},exports.Inline.parameters),exports.Controlled.parameters=__assign({storySource:{source:'() => ({\n  components: { Editor },\n  data: () => ({ content }),\n  methods: {\n    log: (e, _editor) => console.log(e)\n  },\n  template: `\n    <div>\n      <editor\n        api-key="${apiKey}"\n        :init="{height: 300}"\n        v-model="content"\n        @onBlur="log"\n      />\n      <textarea\n        style="width: 100%;\n        height:200px;"\n        v-model="content"\n      ></textarea>\n      <div v-html="content"></div>\n    </div>`\n})'}},exports.Controlled.parameters),exports.Disable.parameters=__assign({storySource:{source:'() => ({\n  components: { Editor },\n  data: () => ({ content, disabled: false }),\n  methods: {\n    toggleDisabled(_e) {\n      this.disabled = !this.disabled;\n    }\n  },\n  template: `\n    <div>\n      <button @click="toggleDisabled">{{ disabled ? \'enable\' : \'disable\' }}</button>\n      <editor\n        api-key="${apiKey}"\n        v-bind:disabled="disabled"\n        :init="{height: 300}"\n        v-model="content"\n      />\n    </div>`\n})'}},exports.Disable.parameters)},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./.storybook/storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-other-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/vue3/config.js-generated-other-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-other-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-other-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-other-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-other-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-other-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/preview.js-generated-other-entry.js"),__webpack_require__("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-other-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./.storybook/generated-stories-entry.js")},1:function(module,exports){},2:function(module,exports){}},[[0,2,3]]]);