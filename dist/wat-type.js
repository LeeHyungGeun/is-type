(function(global,factory){if(typeof define==="function"&&define.amd){define(["exports","core-js/modules/es6.array.copy-within","core-js/modules/es6.array.every","core-js/modules/es6.array.fill","core-js/modules/es6.array.filter","core-js/modules/es6.array.find","core-js/modules/es6.array.find-index","core-js/modules/es7.array.flat-map","core-js/modules/es6.array.for-each","core-js/modules/es6.array.from","core-js/modules/es7.array.includes","core-js/modules/es6.array.index-of","core-js/modules/es6.array.is-array","core-js/modules/es6.array.iterator","core-js/modules/es6.array.last-index-of","core-js/modules/es6.array.map","core-js/modules/es6.array.of","core-js/modules/es6.array.reduce","core-js/modules/es6.array.reduce-right","core-js/modules/es6.array.some","core-js/modules/es6.array.sort","core-js/modules/es6.array.species","core-js/modules/es6.date.now","core-js/modules/es6.date.to-iso-string","core-js/modules/es6.date.to-json","core-js/modules/es6.date.to-primitive","core-js/modules/es6.date.to-string","core-js/modules/es6.function.bind","core-js/modules/es6.function.has-instance","core-js/modules/es6.function.name","core-js/modules/es6.map","core-js/modules/es6.math.acosh","core-js/modules/es6.math.asinh","core-js/modules/es6.math.atanh","core-js/modules/es6.math.cbrt","core-js/modules/es6.math.clz32","core-js/modules/es6.math.cosh","core-js/modules/es6.math.expm1","core-js/modules/es6.math.fround","core-js/modules/es6.math.hypot","core-js/modules/es6.math.imul","core-js/modules/es6.math.log1p","core-js/modules/es6.math.log10","core-js/modules/es6.math.log2","core-js/modules/es6.math.sign","core-js/modules/es6.math.sinh","core-js/modules/es6.math.tanh","core-js/modules/es6.math.trunc","core-js/modules/es6.number.constructor","core-js/modules/es6.number.epsilon","core-js/modules/es6.number.is-finite","core-js/modules/es6.number.is-integer","core-js/modules/es6.number.is-nan","core-js/modules/es6.number.is-safe-integer","core-js/modules/es6.number.max-safe-integer","core-js/modules/es6.number.min-safe-integer","core-js/modules/es6.number.parse-float","core-js/modules/es6.number.parse-int","core-js/modules/es6.object.assign","core-js/modules/es6.object.create","core-js/modules/es7.object.define-getter","core-js/modules/es7.object.define-setter","core-js/modules/es6.object.define-property","core-js/modules/es6.object.define-properties","core-js/modules/es7.object.entries","core-js/modules/es6.object.freeze","core-js/modules/es6.object.get-own-property-descriptor","core-js/modules/es7.object.get-own-property-descriptors","core-js/modules/es6.object.get-own-property-names","core-js/modules/es6.object.get-prototype-of","core-js/modules/es7.object.lookup-getter","core-js/modules/es7.object.lookup-setter","core-js/modules/es6.object.prevent-extensions","core-js/modules/es6.object.to-string","core-js/modules/es6.object.is","core-js/modules/es6.object.is-frozen","core-js/modules/es6.object.is-sealed","core-js/modules/es6.object.is-extensible","core-js/modules/es6.object.keys","core-js/modules/es6.object.seal","core-js/modules/es6.object.set-prototype-of","core-js/modules/es7.object.values","core-js/modules/es6.promise","core-js/modules/es7.promise.finally","core-js/modules/es6.reflect.apply","core-js/modules/es6.reflect.construct","core-js/modules/es6.reflect.define-property","core-js/modules/es6.reflect.delete-property","core-js/modules/es6.reflect.get","core-js/modules/es6.reflect.get-own-property-descriptor","core-js/modules/es6.reflect.get-prototype-of","core-js/modules/es6.reflect.has","core-js/modules/es6.reflect.is-extensible","core-js/modules/es6.reflect.own-keys","core-js/modules/es6.reflect.prevent-extensions","core-js/modules/es6.reflect.set","core-js/modules/es6.reflect.set-prototype-of","core-js/modules/es6.regexp.constructor","core-js/modules/es6.regexp.flags","core-js/modules/es6.regexp.match","core-js/modules/es6.regexp.replace","core-js/modules/es6.regexp.split","core-js/modules/es6.regexp.search","core-js/modules/es6.regexp.to-string","core-js/modules/es6.set","core-js/modules/es6.symbol","core-js/modules/es7.symbol.async-iterator","core-js/modules/es6.string.anchor","core-js/modules/es6.string.big","core-js/modules/es6.string.blink","core-js/modules/es6.string.bold","core-js/modules/es6.string.code-point-at","core-js/modules/es6.string.ends-with","core-js/modules/es6.string.fixed","core-js/modules/es6.string.fontcolor","core-js/modules/es6.string.fontsize","core-js/modules/es6.string.from-code-point","core-js/modules/es6.string.includes","core-js/modules/es6.string.italics","core-js/modules/es6.string.iterator","core-js/modules/es6.string.link","core-js/modules/es7.string.pad-start","core-js/modules/es7.string.pad-end","core-js/modules/es6.string.raw","core-js/modules/es6.string.repeat","core-js/modules/es6.string.small","core-js/modules/es6.string.starts-with","core-js/modules/es6.string.strike","core-js/modules/es6.string.sub","core-js/modules/es6.string.sup","core-js/modules/es6.string.trim","core-js/modules/es7.string.trim-left","core-js/modules/es7.string.trim-right","core-js/modules/es6.typed.array-buffer","core-js/modules/es6.typed.data-view","core-js/modules/es6.typed.int8-array","core-js/modules/es6.typed.uint8-array","core-js/modules/es6.typed.uint8-clamped-array","core-js/modules/es6.typed.int16-array","core-js/modules/es6.typed.uint16-array","core-js/modules/es6.typed.int32-array","core-js/modules/es6.typed.uint32-array","core-js/modules/es6.typed.float32-array","core-js/modules/es6.typed.float64-array","core-js/modules/es6.weak-map","core-js/modules/es6.weak-set","core-js/modules/web.timers","core-js/modules/web.immediate","core-js/modules/web.dom.iterable","regenerator-runtime/runtime"],factory)}else if(typeof exports!=="undefined"){factory(exports,require("core-js/modules/es6.array.copy-within"),require("core-js/modules/es6.array.every"),require("core-js/modules/es6.array.fill"),require("core-js/modules/es6.array.filter"),require("core-js/modules/es6.array.find"),require("core-js/modules/es6.array.find-index"),require("core-js/modules/es7.array.flat-map"),require("core-js/modules/es6.array.for-each"),require("core-js/modules/es6.array.from"),require("core-js/modules/es7.array.includes"),require("core-js/modules/es6.array.index-of"),require("core-js/modules/es6.array.is-array"),require("core-js/modules/es6.array.iterator"),require("core-js/modules/es6.array.last-index-of"),require("core-js/modules/es6.array.map"),require("core-js/modules/es6.array.of"),require("core-js/modules/es6.array.reduce"),require("core-js/modules/es6.array.reduce-right"),require("core-js/modules/es6.array.some"),require("core-js/modules/es6.array.sort"),require("core-js/modules/es6.array.species"),require("core-js/modules/es6.date.now"),require("core-js/modules/es6.date.to-iso-string"),require("core-js/modules/es6.date.to-json"),require("core-js/modules/es6.date.to-primitive"),require("core-js/modules/es6.date.to-string"),require("core-js/modules/es6.function.bind"),require("core-js/modules/es6.function.has-instance"),require("core-js/modules/es6.function.name"),require("core-js/modules/es6.map"),require("core-js/modules/es6.math.acosh"),require("core-js/modules/es6.math.asinh"),require("core-js/modules/es6.math.atanh"),require("core-js/modules/es6.math.cbrt"),require("core-js/modules/es6.math.clz32"),require("core-js/modules/es6.math.cosh"),require("core-js/modules/es6.math.expm1"),require("core-js/modules/es6.math.fround"),require("core-js/modules/es6.math.hypot"),require("core-js/modules/es6.math.imul"),require("core-js/modules/es6.math.log1p"),require("core-js/modules/es6.math.log10"),require("core-js/modules/es6.math.log2"),require("core-js/modules/es6.math.sign"),require("core-js/modules/es6.math.sinh"),require("core-js/modules/es6.math.tanh"),require("core-js/modules/es6.math.trunc"),require("core-js/modules/es6.number.constructor"),require("core-js/modules/es6.number.epsilon"),require("core-js/modules/es6.number.is-finite"),require("core-js/modules/es6.number.is-integer"),require("core-js/modules/es6.number.is-nan"),require("core-js/modules/es6.number.is-safe-integer"),require("core-js/modules/es6.number.max-safe-integer"),require("core-js/modules/es6.number.min-safe-integer"),require("core-js/modules/es6.number.parse-float"),require("core-js/modules/es6.number.parse-int"),require("core-js/modules/es6.object.assign"),require("core-js/modules/es6.object.create"),require("core-js/modules/es7.object.define-getter"),require("core-js/modules/es7.object.define-setter"),require("core-js/modules/es6.object.define-property"),require("core-js/modules/es6.object.define-properties"),require("core-js/modules/es7.object.entries"),require("core-js/modules/es6.object.freeze"),require("core-js/modules/es6.object.get-own-property-descriptor"),require("core-js/modules/es7.object.get-own-property-descriptors"),require("core-js/modules/es6.object.get-own-property-names"),require("core-js/modules/es6.object.get-prototype-of"),require("core-js/modules/es7.object.lookup-getter"),require("core-js/modules/es7.object.lookup-setter"),require("core-js/modules/es6.object.prevent-extensions"),require("core-js/modules/es6.object.to-string"),require("core-js/modules/es6.object.is"),require("core-js/modules/es6.object.is-frozen"),require("core-js/modules/es6.object.is-sealed"),require("core-js/modules/es6.object.is-extensible"),require("core-js/modules/es6.object.keys"),require("core-js/modules/es6.object.seal"),require("core-js/modules/es6.object.set-prototype-of"),require("core-js/modules/es7.object.values"),require("core-js/modules/es6.promise"),require("core-js/modules/es7.promise.finally"),require("core-js/modules/es6.reflect.apply"),require("core-js/modules/es6.reflect.construct"),require("core-js/modules/es6.reflect.define-property"),require("core-js/modules/es6.reflect.delete-property"),require("core-js/modules/es6.reflect.get"),require("core-js/modules/es6.reflect.get-own-property-descriptor"),require("core-js/modules/es6.reflect.get-prototype-of"),require("core-js/modules/es6.reflect.has"),require("core-js/modules/es6.reflect.is-extensible"),require("core-js/modules/es6.reflect.own-keys"),require("core-js/modules/es6.reflect.prevent-extensions"),require("core-js/modules/es6.reflect.set"),require("core-js/modules/es6.reflect.set-prototype-of"),require("core-js/modules/es6.regexp.constructor"),require("core-js/modules/es6.regexp.flags"),require("core-js/modules/es6.regexp.match"),require("core-js/modules/es6.regexp.replace"),require("core-js/modules/es6.regexp.split"),require("core-js/modules/es6.regexp.search"),require("core-js/modules/es6.regexp.to-string"),require("core-js/modules/es6.set"),require("core-js/modules/es6.symbol"),require("core-js/modules/es7.symbol.async-iterator"),require("core-js/modules/es6.string.anchor"),require("core-js/modules/es6.string.big"),require("core-js/modules/es6.string.blink"),require("core-js/modules/es6.string.bold"),require("core-js/modules/es6.string.code-point-at"),require("core-js/modules/es6.string.ends-with"),require("core-js/modules/es6.string.fixed"),require("core-js/modules/es6.string.fontcolor"),require("core-js/modules/es6.string.fontsize"),require("core-js/modules/es6.string.from-code-point"),require("core-js/modules/es6.string.includes"),require("core-js/modules/es6.string.italics"),require("core-js/modules/es6.string.iterator"),require("core-js/modules/es6.string.link"),require("core-js/modules/es7.string.pad-start"),require("core-js/modules/es7.string.pad-end"),require("core-js/modules/es6.string.raw"),require("core-js/modules/es6.string.repeat"),require("core-js/modules/es6.string.small"),require("core-js/modules/es6.string.starts-with"),require("core-js/modules/es6.string.strike"),require("core-js/modules/es6.string.sub"),require("core-js/modules/es6.string.sup"),require("core-js/modules/es6.string.trim"),require("core-js/modules/es7.string.trim-left"),require("core-js/modules/es7.string.trim-right"),require("core-js/modules/es6.typed.array-buffer"),require("core-js/modules/es6.typed.data-view"),require("core-js/modules/es6.typed.int8-array"),require("core-js/modules/es6.typed.uint8-array"),require("core-js/modules/es6.typed.uint8-clamped-array"),require("core-js/modules/es6.typed.int16-array"),require("core-js/modules/es6.typed.uint16-array"),require("core-js/modules/es6.typed.int32-array"),require("core-js/modules/es6.typed.uint32-array"),require("core-js/modules/es6.typed.float32-array"),require("core-js/modules/es6.typed.float64-array"),require("core-js/modules/es6.weak-map"),require("core-js/modules/es6.weak-set"),require("core-js/modules/web.timers"),require("core-js/modules/web.immediate"),require("core-js/modules/web.dom.iterable"),require("regenerator-runtime/runtime"))}else{var mod={exports:{}};factory(mod.exports,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es7Array,global.es6Array,global.es6Array,global.es7Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Array,global.es6Date,global.es6Date,global.es6Date,global.es6Date,global.es6Date,global.es6Function,global.es6Function,global.es6Function,global.es6,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Math,global.es6Number,global.es6Number,global.es6Number,global.es6Number,global.es6Number,global.es6Number,global.es6Number,global.es6Number,global.es6Number,global.es6Number,global.es6Object,global.es6Object,global.es7Object,global.es7Object,global.es6Object,global.es6Object,global.es7Object,global.es6Object,global.es6Object,global.es7Object,global.es6Object,global.es6Object,global.es7Object,global.es7Object,global.es6Object,global.es6Object,global.es6Object,global.es6Object,global.es6Object,global.es6Object,global.es6Object,global.es6Object,global.es6Object,global.es7Object,global.es6,global.es7Promise,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Reflect,global.es6Regexp,global.es6Regexp,global.es6Regexp,global.es6Regexp,global.es6Regexp,global.es6Regexp,global.es6Regexp,global.es6,global.es6,global.es7Symbol,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es7String,global.es7String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es6String,global.es7String,global.es7String,global.es6Typed,global.es6Typed,global.es6Typed,global.es6Typed,global.es6Typed,global.es6Typed,global.es6Typed,global.es6Typed,global.es6Typed,global.es6Typed,global.es6Typed,global.es6,global.es6,global.web,global.web,global.webDom,global.runtime);global.watType=mod.exports}})(this,function(_exports,_es6Array,_es6Array2,_es6Array3,_es6Array4,_es6Array5,_es6Array6,_es7Array,_es6Array7,_es6Array8,_es7Array2,_es6Array9,_es6Array10,_es6Array11,_es6Array12,_es6Array13,_es6Array14,_es6Array15,_es6Array16,_es6Array17,_es6Array18,_es6Array19,_es6Date,_es6Date2,_es6Date3,_es6Date4,_es6Date5,_es6Function,_es6Function2,_es6Function3,_es,_es6Math,_es6Math2,_es6Math3,_es6Math4,_es6Math5,_es6Math6,_es6Math7,_es6Math8,_es6Math9,_es6Math10,_es6Math11,_es6Math12,_es6Math13,_es6Math14,_es6Math15,_es6Math16,_es6Math17,_es6Number,_es6Number2,_es6Number3,_es6Number4,_es6Number5,_es6Number6,_es6Number7,_es6Number8,_es6Number9,_es6Number10,_es6Object,_es6Object2,_es7Object,_es7Object2,_es6Object3,_es6Object4,_es7Object3,_es6Object5,_es6Object6,_es7Object4,_es6Object7,_es6Object8,_es7Object5,_es7Object6,_es6Object9,_es6Object10,_es6Object11,_es6Object12,_es6Object13,_es6Object14,_es6Object15,_es6Object16,_es6Object17,_es7Object7,_es2,_es7Promise,_es6Reflect,_es6Reflect2,_es6Reflect3,_es6Reflect4,_es6Reflect5,_es6Reflect6,_es6Reflect7,_es6Reflect8,_es6Reflect9,_es6Reflect10,_es6Reflect11,_es6Reflect12,_es6Reflect13,_es6Regexp,_es6Regexp2,_es6Regexp3,_es6Regexp4,_es6Regexp5,_es6Regexp6,_es6Regexp7,_es3,_es4,_es7Symbol,_es6String,_es6String2,_es6String3,_es6String4,_es6String5,_es6String6,_es6String7,_es6String8,_es6String9,_es6String10,_es6String11,_es6String12,_es6String13,_es6String14,_es7String,_es7String2,_es6String15,_es6String16,_es6String17,_es6String18,_es6String19,_es6String20,_es6String21,_es6String22,_es7String3,_es7String4,_es6Typed,_es6Typed2,_es6Typed3,_es6Typed4,_es6Typed5,_es6Typed6,_es6Typed7,_es6Typed8,_es6Typed9,_es6Typed10,_es6Typed11,_es5,_es6,_web,_web2,_webDom,_runtime){"use strict";Object.defineProperty(_exports,"__esModule",{value:true});_exports.isHTMLElement=_exports.isRegExp=_exports.isFunction=_exports.isObject=_exports.isNaN=_exports.isUndefined=_exports.isNull=_exports.isBoolean=_exports.isNumber=_exports.isString=_exports.watType=_exports["default"]=void 0;var watType=function watType(type){var _type=/^\[.+\ +(.+)\]$/.exec(Object.prototype.toString.call(type))[1];if(_type==="Number"){_type=type!==type?"NaN":_type}if(_type.startsWith("HTML")&&_type.endsWith("Element")){_type="HTMLElement"}// [object String]
// [object Number]
// [object Boolean
// [object Null]
// [object Undefined]
// [object Object]
// [object RegExp]
// [object Function]
// [object Array]
// TODO: figure out Symbol type
return _type};_exports.watType=watType;var isString=function isString(type){return watType(type)==="String"};_exports.isString=isString;var isNumber=function isNumber(type){return watType(type)==="Number"};_exports.isNumber=isNumber;var isBoolean=function isBoolean(type){return watType(type)==="Boolean"};_exports.isBoolean=isBoolean;var isNull=function isNull(type){return watType(type)==="Null"};_exports.isNull=isNull;var isUndefined=function isUndefined(type){return watType(type)==="Undefined"};_exports.isUndefined=isUndefined;var isNaN=function isNaN(type){return watType(type)==="NaN"};_exports.isNaN=isNaN;var isObject=function isObject(type){return watType(type)==="Object"};_exports.isObject=isObject;var isFunction=function isFunction(type){return watType(type)==="Function"};_exports.isFunction=isFunction;var isRegExp=function isRegExp(type){return watType(type)==="RegExp"};_exports.isRegExp=isRegExp;var isArray=function isArray(type){return watType(type)==="Array"};var isHTMLElement=function isHTMLElement(type){return watType(type)==="HTMLElement"};_exports.isHTMLElement=isHTMLElement;var _default={watType:watType,isString:isString,isNumber:isNumber,isBoolean:isBoolean,isNull:isNull,isUndefined:isUndefined,isNaN:isNaN,isObject:isObject,isFunction:isFunction,isRegExp:isRegExp,isHTMLElement:isHTMLElement};_exports["default"]=_default});

//# sourceMappingURL=wat-type.js.map