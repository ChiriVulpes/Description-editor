import{t as I,m as N}from"./index-c7d4a425.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var L=Object.defineProperty,M=Object.getOwnPropertyDescriptor,K=Object.getOwnPropertyNames,R=Object.prototype.hasOwnProperty,E=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of K(t))!R.call(e,a)&&a!==n&&L(e,a,{get:()=>t[a],enumerable:!(s=M(t,a))||s.enumerable});return e},H=(e,t,n)=>(A(e,t,"default"),n&&A(n,t,"default")),f=(e,t,n)=>(E(e,typeof t!="symbol"?t+"":t,n),n),i={};H(i,N);var V=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=i.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(i.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},o={};o["lib.d.ts"]=!0;o["lib.dom.d.ts"]=!0;o["lib.dom.iterable.d.ts"]=!0;o["lib.es2015.collection.d.ts"]=!0;o["lib.es2015.core.d.ts"]=!0;o["lib.es2015.d.ts"]=!0;o["lib.es2015.generator.d.ts"]=!0;o["lib.es2015.iterable.d.ts"]=!0;o["lib.es2015.promise.d.ts"]=!0;o["lib.es2015.proxy.d.ts"]=!0;o["lib.es2015.reflect.d.ts"]=!0;o["lib.es2015.symbol.d.ts"]=!0;o["lib.es2015.symbol.wellknown.d.ts"]=!0;o["lib.es2016.array.include.d.ts"]=!0;o["lib.es2016.d.ts"]=!0;o["lib.es2016.full.d.ts"]=!0;o["lib.es2017.d.ts"]=!0;o["lib.es2017.full.d.ts"]=!0;o["lib.es2017.intl.d.ts"]=!0;o["lib.es2017.object.d.ts"]=!0;o["lib.es2017.sharedmemory.d.ts"]=!0;o["lib.es2017.string.d.ts"]=!0;o["lib.es2017.typedarrays.d.ts"]=!0;o["lib.es2018.asyncgenerator.d.ts"]=!0;o["lib.es2018.asynciterable.d.ts"]=!0;o["lib.es2018.d.ts"]=!0;o["lib.es2018.full.d.ts"]=!0;o["lib.es2018.intl.d.ts"]=!0;o["lib.es2018.promise.d.ts"]=!0;o["lib.es2018.regexp.d.ts"]=!0;o["lib.es2019.array.d.ts"]=!0;o["lib.es2019.d.ts"]=!0;o["lib.es2019.full.d.ts"]=!0;o["lib.es2019.object.d.ts"]=!0;o["lib.es2019.string.d.ts"]=!0;o["lib.es2019.symbol.d.ts"]=!0;o["lib.es2020.bigint.d.ts"]=!0;o["lib.es2020.d.ts"]=!0;o["lib.es2020.full.d.ts"]=!0;o["lib.es2020.intl.d.ts"]=!0;o["lib.es2020.promise.d.ts"]=!0;o["lib.es2020.sharedmemory.d.ts"]=!0;o["lib.es2020.string.d.ts"]=!0;o["lib.es2020.symbol.wellknown.d.ts"]=!0;o["lib.es2021.d.ts"]=!0;o["lib.es2021.full.d.ts"]=!0;o["lib.es2021.intl.d.ts"]=!0;o["lib.es2021.promise.d.ts"]=!0;o["lib.es2021.string.d.ts"]=!0;o["lib.es2021.weakref.d.ts"]=!0;o["lib.es5.d.ts"]=!0;o["lib.es6.d.ts"]=!0;o["lib.esnext.d.ts"]=!0;o["lib.esnext.full.d.ts"]=!0;o["lib.esnext.intl.d.ts"]=!0;o["lib.esnext.promise.d.ts"]=!0;o["lib.esnext.string.d.ts"]=!0;o["lib.esnext.weakref.d.ts"]=!0;o["lib.scripthost.d.ts"]=!0;o["lib.webworker.d.ts"]=!0;o["lib.webworker.importscripts.d.ts"]=!0;o["lib.webworker.iterable.d.ts"]=!0;function C(e,t,n=0){if(typeof e=="string")return e;if(e===void 0)return"";let s="";if(n){s+=t;for(let a=0;a<n;a++)s+="  "}if(s+=e.messageText,n++,e.next)for(const a of e.next)s+=C(a,t,n);return s}function w(e){return e?e.map(t=>t.text).join(""):""}var _=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let n=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:a,column:d}=n,{lineNumber:u,column:r}=s;return{startLineNumber:a,startColumn:d,endLineNumber:u,endColumn:r}}},W=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!o[e.path.slice(1)]:!1}getOrCreateModel(e){const t=i.Uri.parse(e),n=i.editor.getModel(t);if(n)return n;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return i.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=I.getExtraLibs()[e];return s?i.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},j=class extends _{constructor(e,t,n,s){super(s),this._libFiles=e,this._defaults=t,this._selector=n;const a=r=>{if(r.getLanguageId()!==n)return;const c=()=>{const{onlyVisible:h}=this._defaults.getDiagnosticsOptions();h?r.isAttachedToEditor()&&this._doValidate(r):this._doValidate(r)};let g;const p=r.onDidChangeContent(()=>{clearTimeout(g),g=window.setTimeout(c,500)}),b=r.onDidChangeAttached(()=>{const{onlyVisible:h}=this._defaults.getDiagnosticsOptions();h&&(r.isAttachedToEditor()?c():i.editor.setModelMarkers(r,this._selector,[]))});this._listener[r.uri.toString()]={dispose(){p.dispose(),b.dispose(),clearTimeout(g)}},c()},d=r=>{i.editor.setModelMarkers(r,this._selector,[]);const c=r.uri.toString();this._listener[c]&&(this._listener[c].dispose(),delete this._listener[c])};this._disposables.push(i.editor.onDidCreateModel(r=>a(r))),this._disposables.push(i.editor.onWillDisposeModel(d)),this._disposables.push(i.editor.onDidChangeModelLanguage(r=>{d(r.model),a(r.model)})),this._disposables.push({dispose(){for(const r of i.editor.getModels())d(r)}});const u=()=>{for(const r of i.editor.getModels())d(r),a(r)};this._disposables.push(this._defaults.onDidChange(u)),this._disposables.push(this._defaults.onDidExtraLibsChange(u)),i.editor.getModels().forEach(r=>a(r))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const n=[],{noSyntaxValidation:s,noSemanticValidation:a,noSuggestionDiagnostics:d}=this._defaults.getDiagnosticsOptions();s||n.push(t.getSyntacticDiagnostics(e.uri.toString())),a||n.push(t.getSemanticDiagnostics(e.uri.toString())),d||n.push(t.getSuggestionDiagnostics(e.uri.toString()));const u=await Promise.all(n);if(!u||e.isDisposed())return;const r=u.reduce((g,p)=>p.concat(g),[]).filter(g=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)===-1),c=r.map(g=>g.relatedInformation||[]).reduce((g,p)=>p.concat(g),[]).map(g=>g.file?i.Uri.parse(g.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(c),!e.isDisposed()&&i.editor.setModelMarkers(e,this._selector,r.map(g=>this._convertDiagnostics(e,g)))}_convertDiagnostics(e,t){const n=t.start||0,s=t.length||1,{lineNumber:a,column:d}=e.getPositionAt(n),{lineNumber:u,column:r}=e.getPositionAt(n+s),c=[];return t.reportsUnnecessary&&c.push(i.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(i.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:d,endLineNumber:u,endColumn:r,message:C(t.messageText,`
`),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const n=[];return t.forEach(s=>{let a=e;if(s.file&&(a=this._libFiles.getOrCreateModel(s.file.fileName)),!a)return;const d=s.start||0,u=s.length||1,{lineNumber:r,column:c}=a.getPositionAt(d),{lineNumber:g,column:p}=a.getPositionAt(d+u);n.push({resource:a.uri,startLineNumber:r,startColumn:c,endLineNumber:g,endColumn:p,message:C(s.messageText,`
`)})}),n}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return i.MarkerSeverity.Error;case 3:return i.MarkerSeverity.Info;case 0:return i.MarkerSeverity.Warning;case 2:return i.MarkerSeverity.Hint}return i.MarkerSeverity.Info}},x=class extends _{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,n,s){const a=e.getWordUntilPosition(t),d=new i.Range(t.lineNumber,a.startColumn,t.lineNumber,a.endColumn),u=e.uri,r=e.getOffsetAt(t),c=await this._worker(u);if(e.isDisposed())return;const g=await c.getCompletionsAtPosition(u.toString(),r);return!g||e.isDisposed()?void 0:{suggestions:g.entries.map(b=>{let h=d;if(b.replacementSpan){const S=e.getPositionAt(b.replacementSpan.start),v=e.getPositionAt(b.replacementSpan.start+b.replacementSpan.length);h=new i.Range(S.lineNumber,S.column,v.lineNumber,v.column)}const y=[];return b.kindModifiers?.indexOf("deprecated")!==-1&&y.push(i.languages.CompletionItemTag.Deprecated),{uri:u,position:t,offset:r,range:h,label:b.name,insertText:b.name,sortText:b.sortText,kind:x.convertKind(b.kind),tags:y}})}}async resolveCompletionItem(e,t){const n=e,s=n.uri,a=n.position,d=n.offset,r=await(await this._worker(s)).getCompletionEntryDetails(s.toString(),d,n.label);return r?{uri:s,position:a,label:r.name,kind:x.convertKind(r.kind),detail:w(r.displayParts),documentation:{value:x.createDocumentationString(r)}}:n}static convertKind(e){switch(e){case l.primitiveType:case l.keyword:return i.languages.CompletionItemKind.Keyword;case l.variable:case l.localVariable:return i.languages.CompletionItemKind.Variable;case l.memberVariable:case l.memberGetAccessor:case l.memberSetAccessor:return i.languages.CompletionItemKind.Field;case l.function:case l.memberFunction:case l.constructSignature:case l.callSignature:case l.indexSignature:return i.languages.CompletionItemKind.Function;case l.enum:return i.languages.CompletionItemKind.Enum;case l.module:return i.languages.CompletionItemKind.Module;case l.class:return i.languages.CompletionItemKind.Class;case l.interface:return i.languages.CompletionItemKind.Interface;case l.warning:return i.languages.CompletionItemKind.File}return i.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const n of e.tags)t+=`

${T(n)}`;return t}};function T(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[n,...s]=e.text;t+=`\`${n.text}\``,s.length>0&&(t+=` — ${s.map(a=>a.text).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map(n=>n.text).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var P=class extends _{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case i.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,n,s){const a=e.uri,d=e.getOffsetAt(t),u=await this._worker(a);if(e.isDisposed())return;const r=await u.getSignatureHelpItems(a.toString(),d,{triggerReason:P._toSignatureHelpTriggerReason(s)});if(!r||e.isDisposed())return;const c={activeSignature:r.selectedItemIndex,activeParameter:r.argumentIndex,signatures:[]};return r.items.forEach(g=>{const p={label:"",parameters:[]};p.documentation={value:w(g.documentation)},p.label+=w(g.prefixDisplayParts),g.parameters.forEach((b,h,y)=>{const S=w(b.displayParts),v={label:S,documentation:{value:w(b.documentation)}};p.label+=S,p.parameters.push(v),h<y.length-1&&(p.label+=w(g.separatorDisplayParts))}),p.label+=w(g.suffixDisplayParts),c.signatures.push(p)}),{value:c,dispose(){}}}},B=class extends _{async provideHover(e,t,n){const s=e.uri,a=e.getOffsetAt(t),d=await this._worker(s);if(e.isDisposed())return;const u=await d.getQuickInfoAtPosition(s.toString(),a);if(!u||e.isDisposed())return;const r=w(u.documentation),c=u.tags?u.tags.map(p=>T(p)).join(`  

`):"",g=w(u.displayParts);return{range:this._textSpanToRange(e,u.textSpan),contents:[{value:"```typescript\n"+g+"\n```\n"},{value:r+(c?`

`+c:"")}]}}},U=class extends _{async provideDocumentHighlights(e,t,n){const s=e.uri,a=e.getOffsetAt(t),d=await this._worker(s);if(e.isDisposed())return;const u=await d.getOccurrencesAtPosition(s.toString(),a);if(!(!u||e.isDisposed()))return u.map(r=>({range:this._textSpanToRange(e,r.textSpan),kind:r.isWriteAccess?i.languages.DocumentHighlightKind.Write:i.languages.DocumentHighlightKind.Text}))}},$=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,n){const s=e.uri,a=e.getOffsetAt(t),d=await this._worker(s);if(e.isDisposed())return;const u=await d.getDefinitionAtPosition(s.toString(),a);if(!u||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(u.map(c=>i.Uri.parse(c.fileName))),e.isDisposed()))return;const r=[];for(let c of u){const g=this._libFiles.getOrCreateModel(c.fileName);g&&r.push({uri:g.uri,range:this._textSpanToRange(g,c.textSpan)})}return r}},z=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,n,s){const a=e.uri,d=e.getOffsetAt(t),u=await this._worker(a);if(e.isDisposed())return;const r=await u.getReferencesAtPosition(a.toString(),d);if(!r||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(r.map(g=>i.Uri.parse(g.fileName))),e.isDisposed()))return;const c=[];for(let g of r){const p=this._libFiles.getOrCreateModel(g.fileName);p&&c.push({uri:p.uri,range:this._textSpanToRange(p,g.textSpan)})}return c}},G=class extends _{async provideDocumentSymbols(e,t){const n=e.uri,s=await this._worker(n);if(e.isDisposed())return;const a=await s.getNavigationBarItems(n.toString());if(!a||e.isDisposed())return;const d=(r,c,g)=>{let p={name:c.text,detail:"",kind:m[c.kind]||i.languages.SymbolKind.Variable,range:this._textSpanToRange(e,c.spans[0]),selectionRange:this._textSpanToRange(e,c.spans[0]),tags:[]};if(g&&(p.containerName=g),c.childItems&&c.childItems.length>0)for(let b of c.childItems)d(r,b,p.name);r.push(p)};let u=[];return a.forEach(r=>d(u,r)),u}},l=class{};f(l,"unknown","");f(l,"keyword","keyword");f(l,"script","script");f(l,"module","module");f(l,"class","class");f(l,"interface","interface");f(l,"type","type");f(l,"enum","enum");f(l,"variable","var");f(l,"localVariable","local var");f(l,"function","function");f(l,"localFunction","local function");f(l,"memberFunction","method");f(l,"memberGetAccessor","getter");f(l,"memberSetAccessor","setter");f(l,"memberVariable","property");f(l,"constructorImplementation","constructor");f(l,"callSignature","call");f(l,"indexSignature","index");f(l,"constructSignature","construct");f(l,"parameter","parameter");f(l,"typeParameter","type parameter");f(l,"primitiveType","primitive type");f(l,"label","label");f(l,"alias","alias");f(l,"const","const");f(l,"let","let");f(l,"warning","warning");var m=Object.create(null);m[l.module]=i.languages.SymbolKind.Module;m[l.class]=i.languages.SymbolKind.Class;m[l.enum]=i.languages.SymbolKind.Enum;m[l.interface]=i.languages.SymbolKind.Interface;m[l.memberFunction]=i.languages.SymbolKind.Method;m[l.memberVariable]=i.languages.SymbolKind.Property;m[l.memberGetAccessor]=i.languages.SymbolKind.Property;m[l.memberSetAccessor]=i.languages.SymbolKind.Property;m[l.variable]=i.languages.SymbolKind.Variable;m[l.const]=i.languages.SymbolKind.Variable;m[l.localVariable]=i.languages.SymbolKind.Variable;m[l.variable]=i.languages.SymbolKind.Variable;m[l.function]=i.languages.SymbolKind.Function;m[l.localFunction]=i.languages.SymbolKind.Function;var k=class extends _{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},J=class extends k{async provideDocumentRangeFormattingEdits(e,t,n,s){const a=e.uri,d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(a);if(e.isDisposed())return;const c=await r.getFormattingEditsForRange(a.toString(),d,u,k._convertOptions(n));if(!(!c||e.isDisposed()))return c.map(g=>this._convertTextChanges(e,g))}},Q=class extends k{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,n,s,a){const d=e.uri,u=e.getOffsetAt(t),r=await this._worker(d);if(e.isDisposed())return;const c=await r.getFormattingEditsAfterKeystroke(d.toString(),u,n,k._convertOptions(s));if(!(!c||e.isDisposed()))return c.map(g=>this._convertTextChanges(e,g))}},q=class extends k{async provideCodeActions(e,t,n,s){const a=e.uri,d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=k._convertOptions(e.getOptions()),c=n.markers.filter(h=>h.code).map(h=>h.code).map(Number),g=await this._worker(a);if(e.isDisposed())return;const p=await g.getCodeFixesAtPosition(a.toString(),d,u,c,r);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(h=>h.changes.filter(y=>y.isNewFile).length===0).map(h=>this._tsCodeFixActionToMonacoCodeAction(e,n,h)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,n){const s=[];for(const d of n.changes)for(const u of d.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,u.span),text:u.newText}});return{title:n.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},X=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,n,s){const a=e.uri,d=a.toString(),u=e.getOffsetAt(t),r=await this._worker(a);if(e.isDisposed())return;const c=await r.getRenameInfo(d,u,{allowRenameOfImportPath:!1});if(c.canRename===!1)return{edits:[],rejectReason:c.localizedErrorMessage};if(c.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const g=await r.findRenameLocations(d,u,!1,!1,!1);if(!g||e.isDisposed())return;const p=[];for(const b of g){const h=this._libFiles.getOrCreateModel(b.fileName);if(h)p.push({resource:h.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(h,b.textSpan),text:n}});else throw new Error(`Unknown file ${b.fileName}.`)}return{edits:p}}},Y=class extends _{async provideInlayHints(e,t,n){const s=e.uri,a=s.toString(),d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(s);return e.isDisposed()?null:{hints:(await r.provideInlayHints(a,d,u)).map(p=>({...p,label:p.text,position:e.getPositionAt(p.position),kind:this._convertHintKind(p.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return i.languages.InlayHintKind.Parameter;case"Type":return i.languages.InlayHintKind.Type;default:return i.languages.InlayHintKind.Type}}},D,F;function ee(e){F=O(e,"typescript")}function te(e){D=O(e,"javascript")}function re(){return new Promise((e,t)=>{if(!D)return t("JavaScript not registered!");e(D)})}function se(){return new Promise((e,t)=>{if(!F)return t("TypeScript not registered!");e(F)})}function O(e,t){const n=new V(t,e),s=(...d)=>n.getLanguageServiceWorker(...d),a=new W(s);return i.languages.registerCompletionItemProvider(t,new x(s)),i.languages.registerSignatureHelpProvider(t,new P(s)),i.languages.registerHoverProvider(t,new B(s)),i.languages.registerDocumentHighlightProvider(t,new U(s)),i.languages.registerDefinitionProvider(t,new $(a,s)),i.languages.registerReferenceProvider(t,new z(a,s)),i.languages.registerDocumentSymbolProvider(t,new G(s)),i.languages.registerDocumentRangeFormattingEditProvider(t,new J(s)),i.languages.registerOnTypeFormattingEditProvider(t,new Q(s)),i.languages.registerCodeActionProvider(t,new q(s)),i.languages.registerRenameProvider(t,new X(a,s)),i.languages.registerInlayHintsProvider(t,new Y(s)),new j(a,e,t,s),s}export{_ as Adapter,q as CodeActionAdaptor,$ as DefinitionAdapter,j as DiagnosticsAdapter,J as FormatAdapter,k as FormatHelper,Q as FormatOnTypeAdapter,Y as InlayHintsAdapter,l as Kind,W as LibFiles,U as OccurrencesAdapter,G as OutlineAdapter,B as QuickInfoAdapter,z as ReferenceAdapter,X as RenameAdapter,P as SignatureHelpAdapter,x as SuggestAdapter,V as WorkerManager,C as flattenDiagnosticMessageText,re as getJavaScriptWorker,se as getTypeScriptWorker,te as setupJavaScript,ee as setupTypeScript};