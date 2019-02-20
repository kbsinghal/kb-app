(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es6/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alertform',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced.--> \r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>  -->\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <mat-toolbar>\r\n  <span>Event Application</span>\r\n</mat-toolbar> -->\r\n<!-- <a [routerLink]=\"'/countrylist'\">Country</a> | \r\n<a [routerLink]=\"'/statelist'\">State</a> |\r\n<a [routerLink]=\"'/citylist'\">City</a> |\r\n<a [routerLink]=\"'/arealist'\">Area</a> |\r\n<a [routerLink]=\"'/entitylist'\">Entity</a> |\r\n<a [routerLink]=\"'/eventlist'\">Event</a> |\r\n<a [routerLink]=\"'/eventorganizerlist'\">EventOrganizer</a>\r\n<router-outlet></router-outlet>  -->\r\n\r\n<div id=\"app\">\r\n  <nav class=\"navbar navbar-expand-sm bg-light\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/\" class=\"nav-link\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/countrylist\" class=\"nav-link\">Country</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/statelist\" class=\"nav-link\">State</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/citylist\" class=\"nav-link\">City</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/arealist\" class=\"nav-link\">Area</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/entitylist\" class=\"nav-link\">Entity</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/eventlist\" class=\"nav-link\">Event</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/eventorganizerlist\" class=\"nav-link\">EventOrganizer</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/eventartistlist\" class=\"nav-link\">EventArtist</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/eventbannerlist\" class=\"nav-link\">EventBanner</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/userlist\" class=\"nav-link\">User</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/upload\" class=\"nav-link\">Upload</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/uploadfiles\" class=\"nav-link\">Upload Files</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <div class=\"container\">\r\n      \r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { MatDatepickerModule, MatOptionModule, MatDialogModule } from '@angular/material';

//import {  MatMomentDateModule } from '@angular/material-moment-adapter';
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                //MatMomentDateModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                //MatMomentDateModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _eventform_eventform_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./eventform/eventform.component */ "./src/app/eventform/eventform.component.ts");
/* harmony import */ var _eventlist_eventlist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./eventlist/eventlist.component */ "./src/app/eventlist/eventlist.component.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _countryform_countryform_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./countryform/countryform.component */ "./src/app/countryform/countryform.component.ts");
/* harmony import */ var _countrylist_countrylist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./countrylist/countrylist.component */ "./src/app/countrylist/countrylist.component.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _stateform_stateform_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stateform/stateform.component */ "./src/app/stateform/stateform.component.ts");
/* harmony import */ var _statelist_statelist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./statelist/statelist.component */ "./src/app/statelist/statelist.component.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _cityform_cityform_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cityform/cityform.component */ "./src/app/cityform/cityform.component.ts");
/* harmony import */ var _citylist_citylist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./citylist/citylist.component */ "./src/app/citylist/citylist.component.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _areaform_areaform_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./areaform/areaform.component */ "./src/app/areaform/areaform.component.ts");
/* harmony import */ var _arealist_arealist_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./arealist/arealist.component */ "./src/app/arealist/arealist.component.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _entityform_entityform_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./entityform/entityform.component */ "./src/app/entityform/entityform.component.ts");
/* harmony import */ var _entitylist_entitylist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./entitylist/entitylist.component */ "./src/app/entitylist/entitylist.component.ts");
/* harmony import */ var _services_entity_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _eventorganizerform_eventorganizerform_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./eventorganizerform/eventorganizerform.component */ "./src/app/eventorganizerform/eventorganizerform.component.ts");
/* harmony import */ var _eventorganizerlist_eventorganizerlist_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./eventorganizerlist/eventorganizerlist.component */ "./src/app/eventorganizerlist/eventorganizerlist.component.ts");
/* harmony import */ var _services_eventorganizer_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/eventorganizer.service */ "./src/app/services/eventorganizer.service.ts");
/* harmony import */ var _eventartistform_eventartistform_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./eventartistform/eventartistform.component */ "./src/app/eventartistform/eventartistform.component.ts");
/* harmony import */ var _eventartistlist_eventartistlist_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./eventartistlist/eventartistlist.component */ "./src/app/eventartistlist/eventartistlist.component.ts");
/* harmony import */ var _services_eventartist_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/eventartist.service */ "./src/app/services/eventartist.service.ts");
/* harmony import */ var _userform_userform_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./userform/userform.component */ "./src/app/userform/userform.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/userlist/userlist.component.ts");
/* harmony import */ var _eventbannerform_eventbannerform_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./eventbannerform/eventbannerform.component */ "./src/app/eventbannerform/eventbannerform.component.ts");
/* harmony import */ var _eventbannerlist_eventbannerlist_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./eventbannerlist/eventbannerlist.component */ "./src/app/eventbannerlist/eventbannerlist.component.ts");
/* harmony import */ var _services_eventbanner_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/eventbanner.service */ "./src/app/services/eventbanner.service.ts");
/* harmony import */ var _services_files_services__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/files.services */ "./src/app/services/files.services.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _uploadfiles_uploadfiles_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./uploadfiles/uploadfiles.component */ "./src/app/uploadfiles/uploadfiles.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
// used to create fake backend
//import { fakeBackendProvider } from './_helpers/ake-backend';












































//import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { HomeComponent } from './home/home.component';

//import { FetchDataComponent } from './fetch-data/fetch-data.component';

//import { DndDirective } from './upload/upload.directive';

///import { UploadFilesComponent } from './uploadfiles/uploadfiles.component';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileSelectDirective"],
                _eventform_eventform_component__WEBPACK_IMPORTED_MODULE_19__["EventformComponent"],
                _eventlist_eventlist_component__WEBPACK_IMPORTED_MODULE_20__["EventlistComponent"],
                _countryform_countryform_component__WEBPACK_IMPORTED_MODULE_22__["CountryformComponent"],
                _countrylist_countrylist_component__WEBPACK_IMPORTED_MODULE_23__["CountrylistComponent"],
                _stateform_stateform_component__WEBPACK_IMPORTED_MODULE_25__["StateformComponent"],
                _statelist_statelist_component__WEBPACK_IMPORTED_MODULE_26__["StatelistComponent"],
                _cityform_cityform_component__WEBPACK_IMPORTED_MODULE_28__["CityformComponent"],
                _citylist_citylist_component__WEBPACK_IMPORTED_MODULE_29__["CitylistComponent"],
                _areaform_areaform_component__WEBPACK_IMPORTED_MODULE_31__["AreaformComponent"],
                _arealist_arealist_component__WEBPACK_IMPORTED_MODULE_32__["ArealistComponent"],
                _entityform_entityform_component__WEBPACK_IMPORTED_MODULE_34__["EntityformComponent"],
                _entitylist_entitylist_component__WEBPACK_IMPORTED_MODULE_35__["EntitylistComponent"],
                _eventorganizerform_eventorganizerform_component__WEBPACK_IMPORTED_MODULE_37__["EventOrganizerformComponent"],
                _eventorganizerlist_eventorganizerlist_component__WEBPACK_IMPORTED_MODULE_38__["EventOrganizerlistComponent"],
                _eventartistform_eventartistform_component__WEBPACK_IMPORTED_MODULE_40__["EventArtistformComponent"],
                _eventartistlist_eventartistlist_component__WEBPACK_IMPORTED_MODULE_41__["EventArtistlistComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _userform_userform_component__WEBPACK_IMPORTED_MODULE_43__["UserformComponent"],
                _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_44__["UserlistComponent"],
                _eventbannerform_eventbannerform_component__WEBPACK_IMPORTED_MODULE_45__["EventBannerformComponent"],
                _eventbannerlist_eventbannerlist_component__WEBPACK_IMPORTED_MODULE_46__["EventBannerlistComponent"],
                //NavMenuComponent,
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_49__["CounterComponent"],
                //FetchDataComponent,
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_50__["UploadComponent"],
                _uploadfiles_uploadfiles_component__WEBPACK_IMPORTED_MODULE_51__["UploadfilesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_18__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["Routing"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_52__["MatToolbarModule"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _services_event_service__WEBPACK_IMPORTED_MODULE_21__["EventService"],
                _services_country_service__WEBPACK_IMPORTED_MODULE_24__["CountryService"],
                _services_state_service__WEBPACK_IMPORTED_MODULE_27__["StateService"],
                _services_city_service__WEBPACK_IMPORTED_MODULE_30__["CityService"],
                _services_area_service__WEBPACK_IMPORTED_MODULE_33__["AreaService"],
                _services_entity_service__WEBPACK_IMPORTED_MODULE_36__["EntityService"],
                _services_eventorganizer_service__WEBPACK_IMPORTED_MODULE_39__["EventOrganizerService"],
                _services_eventartist_service__WEBPACK_IMPORTED_MODULE_42__["EventArtistService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _services_eventbanner_service__WEBPACK_IMPORTED_MODULE_47__["EventBannerService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
                _services_files_services__WEBPACK_IMPORTED_MODULE_48__["FileService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eventlist_eventlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventlist/eventlist.component */ "./src/app/eventlist/eventlist.component.ts");
/* harmony import */ var _eventform_eventform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventform/eventform.component */ "./src/app/eventform/eventform.component.ts");
/* harmony import */ var _countrylist_countrylist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countrylist/countrylist.component */ "./src/app/countrylist/countrylist.component.ts");
/* harmony import */ var _countryform_countryform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countryform/countryform.component */ "./src/app/countryform/countryform.component.ts");
/* harmony import */ var _statelist_statelist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statelist/statelist.component */ "./src/app/statelist/statelist.component.ts");
/* harmony import */ var _stateform_stateform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stateform/stateform.component */ "./src/app/stateform/stateform.component.ts");
/* harmony import */ var _citylist_citylist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./citylist/citylist.component */ "./src/app/citylist/citylist.component.ts");
/* harmony import */ var _cityform_cityform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cityform/cityform.component */ "./src/app/cityform/cityform.component.ts");
/* harmony import */ var _arealist_arealist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./arealist/arealist.component */ "./src/app/arealist/arealist.component.ts");
/* harmony import */ var _areaform_areaform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./areaform/areaform.component */ "./src/app/areaform/areaform.component.ts");
/* harmony import */ var _entitylist_entitylist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entitylist/entitylist.component */ "./src/app/entitylist/entitylist.component.ts");
/* harmony import */ var _entityform_entityform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entityform/entityform.component */ "./src/app/entityform/entityform.component.ts");
/* harmony import */ var _eventorganizerlist_eventorganizerlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eventorganizerlist/eventorganizerlist.component */ "./src/app/eventorganizerlist/eventorganizerlist.component.ts");
/* harmony import */ var _eventorganizerform_eventorganizerform_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./eventorganizerform/eventorganizerform.component */ "./src/app/eventorganizerform/eventorganizerform.component.ts");
/* harmony import */ var _eventartistlist_eventartistlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./eventartistlist/eventartistlist.component */ "./src/app/eventartistlist/eventartistlist.component.ts");
/* harmony import */ var _eventartistform_eventartistform_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./eventartistform/eventartistform.component */ "./src/app/eventartistform/eventartistform.component.ts");
/* harmony import */ var _eventbannerlist_eventbannerlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./eventbannerlist/eventbannerlist.component */ "./src/app/eventbannerlist/eventbannerlist.component.ts");
/* harmony import */ var _eventbannerform_eventbannerform_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./eventbannerform/eventbannerform.component */ "./src/app/eventbannerform/eventbannerform.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/userlist/userlist.component.ts");
/* harmony import */ var _userform_userform_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./userform/userform.component */ "./src/app/userform/userform.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _uploadfiles_uploadfiles_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./uploadfiles/uploadfiles.component */ "./src/app/uploadfiles/uploadfiles.component.ts");























//import { UploadFilesComponent } from './upload-files/upload-files.component';

var appRoutes = [
    { path: 'eventlist', pathMatch: 'full', component: _eventlist_eventlist_component__WEBPACK_IMPORTED_MODULE_1__["EventlistComponent"] },
    { path: 'countrylist', pathMatch: 'full', component: _countrylist_countrylist_component__WEBPACK_IMPORTED_MODULE_3__["CountrylistComponent"] },
    { path: 'statelist', pathMatch: 'full', component: _statelist_statelist_component__WEBPACK_IMPORTED_MODULE_5__["StatelistComponent"] },
    { path: 'citylist', pathMatch: 'full', component: _citylist_citylist_component__WEBPACK_IMPORTED_MODULE_7__["CitylistComponent"] },
    { path: 'arealist', pathMatch: 'full', component: _arealist_arealist_component__WEBPACK_IMPORTED_MODULE_9__["ArealistComponent"] },
    { path: 'entitylist', pathMatch: 'full', component: _entitylist_entitylist_component__WEBPACK_IMPORTED_MODULE_11__["EntitylistComponent"] },
    { path: 'eventorganizerlist', pathMatch: 'full', component: _eventorganizerlist_eventorganizerlist_component__WEBPACK_IMPORTED_MODULE_13__["EventOrganizerlistComponent"] },
    { path: 'eventartistlist', pathMatch: 'full', component: _eventartistlist_eventartistlist_component__WEBPACK_IMPORTED_MODULE_15__["EventArtistlistComponent"] },
    { path: 'eventbannerlist', pathMatch: 'full', component: _eventbannerlist_eventbannerlist_component__WEBPACK_IMPORTED_MODULE_17__["EventBannerlistComponent"] },
    { path: 'userlist', pathMatch: 'full', component: _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_19__["UserlistComponent"] },
    { path: 'eventform', component: _eventform_eventform_component__WEBPACK_IMPORTED_MODULE_2__["EventformComponent"] },
    { path: 'countryform', component: _countryform_countryform_component__WEBPACK_IMPORTED_MODULE_4__["CountryformComponent"] },
    { path: 'stateform', component: _stateform_stateform_component__WEBPACK_IMPORTED_MODULE_6__["StateformComponent"] },
    { path: 'cityform', component: _cityform_cityform_component__WEBPACK_IMPORTED_MODULE_8__["CityformComponent"] },
    { path: 'areaform', component: _areaform_areaform_component__WEBPACK_IMPORTED_MODULE_10__["AreaformComponent"] },
    { path: 'entityform', component: _entityform_entityform_component__WEBPACK_IMPORTED_MODULE_12__["EntityformComponent"] },
    { path: 'eventorganizerform', component: _eventorganizerform_eventorganizerform_component__WEBPACK_IMPORTED_MODULE_14__["EventOrganizerformComponent"] },
    { path: 'eventartistform', component: _eventartistform_eventartistform_component__WEBPACK_IMPORTED_MODULE_16__["EventArtistformComponent"] },
    { path: 'eventbannerform', component: _eventbannerform_eventbannerform_component__WEBPACK_IMPORTED_MODULE_18__["EventBannerformComponent"] },
    { path: 'userform', component: _userform_userform_component__WEBPACK_IMPORTED_MODULE_20__["UserformComponent"] },
    /////{ path: '', component: HomeComponent},
    //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'login', component: LoginComponent },
    { path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_22__["UploadComponent"] },
    { path: 'uploadfiles', component: _uploadfiles_uploadfiles_component__WEBPACK_IMPORTED_MODULE_23__["UploadfilesComponent"] },
    //{ path: '', component: HomeComponent, pathMatch: 'full' },
    ////{ path: 'counter', component: CounterComponent },
    //    { path: 'fetch-data', component: FetchDataComponent },
    //{ path: '**', redirectTo: '' } // otherwise redirect to home
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"] }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/areaform/areaform.component.css":
/*!*************************************************!*\
  !*** ./src/app/areaform/areaform.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/areaform/areaform.component.html":
/*!**************************************************!*\
  !*** ./src/app/areaform/areaform.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(areaFrm)\" [formGroup]=\"areaFrm\">  \n  <h2>{{data.modalTitle}}</h2>  \n    \n  <div>\n    <mat-form-field appearance=\"outline\">  \n        <mat-label>City</mat-label> \n      <mat-select placeholder=\"Select a City\" formControlName=\"CityID\">  \n        <mat-option>-- None --</mat-option>  \n        <mat-option *ngFor=\"let city of cities\" [value]=\"city.CityID\">  \n          {{ city.CityName }}  \n        </mat-option>  \n      </mat-select>  \n      <mat-error *ngIf=\"formErrors.CityID \">  \n        {{ formErrors.CityID }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n\n  \n  <div>  \n      <mat-form-field appearance=\"outline\">  \n      <mat-label>Area Name</mat-label>  \n      <input matInput placeholder=\"Area Name\" formControlName=\"AreaName\">  \n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n      <!-- <mat-hint>Hint</mat-hint> -->  \n      <mat-error *ngIf=\"formErrors.AreaName\">  \n        {{ formErrors.AreaName }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n  <!-- <div>  \n    <mat-form-field appearance=\"outline\">  \n    <mat-label>Country ID</mat-label>  \n    <input matInput placeholder=\"Country ID\" formControlName=\"CountryID\">  \n    <mat-error *ngIf=\"formErrors.CountryID\">  \n      {{ formErrors.CountryID }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>   -->\n\n\n  \n  <div>  \n    \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"areaFrm.invalid\">{{data.modalBtnTitle}}</button>  \n  </div>  \n    \n  </form> "

/***/ }),

/***/ "./src/app/areaform/areaform.component.ts":
/*!************************************************!*\
  !*** ./src/app/areaform/areaform.component.ts ***!
  \************************************************/
/*! exports provided: AreaformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaformComponent", function() { return AreaformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AreaformComponent = /** @class */ (function () {
    function AreaformComponent(data, fb, _areaService, _cityService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._areaService = _areaService;
        this._cityService = _cityService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // genders = [];
        // technologies = [];
        this.cities = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'AreaName': '',
            'CityID': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'AreaName': {
                'maxlength': 'AreaName cannot be more than 50 characters long.',
                'required': 'AreaName is required.'
            },
            'CityID': {
                'maxlength': 'CityID cannot be more than 50 characters long.',
                'required': 'CityID is required.'
            }
        };
    }
    AreaformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built state form
        this.areaFrm = this.fb.group({
            AreaID: [-1],
            AreaName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            CityID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            UserID: [-1],
            CityName: [''],
            StateID: [-1],
            StateName: [''],
            CountryID: [-1],
            CountryName: ['']
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        this._cityService.getAllCity(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'City/' + 'getAllCity')
            .subscribe(function (cities) {
            _this.cities = cities;
        });
        // subscribe on value changed event of form to show validation message
        this.areaFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.areaFrm.reset();
        }
        else {
            this.areaFrm.setValue(this.data.area);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
    };
    // form value change event
    AreaformComponent.prototype.onValueChanged = function (data) {
        if (!this.areaFrm) {
            return;
        }
        var form = this.areaFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    AreaformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var areaData = this.mapAreaID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                this._areaService.addArea(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'Area/' + 'addArea', areaData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                this._areaService.updateArea(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'Area/' + 'updateArea', areaData.AreaID, areaData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                this._areaService.deleteArea(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'Area/' + 'deleteArea', areaData.AreaID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    AreaformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.areaFrm.enable() : this.areaFrm.disable();
    };
    AreaformComponent.prototype.mapAreaID = function (area) {
        if (area.AreaID == null) {
            area.AreaID = -1;
            // area.AreaName = '';
            area.UserID = 1;
            area.CityName = '';
            area.StateID = -1;
            area.StateName = '';
            area.CountryID = -1;
            area.CountryName = '';
        }
        return area;
    };
    AreaformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-areaform',
            template: __webpack_require__(/*! ./areaform.component.html */ "./src/app/areaform/areaform.component.html"),
            styles: [__webpack_require__(/*! ./areaform.component.css */ "./src/app/areaform/areaform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_area_service__WEBPACK_IMPORTED_MODULE_4__["AreaService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AreaformComponent);
    return AreaformComponent;
}());



/***/ }),

/***/ "./src/app/arealist/arealist.component.css":
/*!*************************************************!*\
  !*** ./src/app/arealist/arealist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .arealist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.arealist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/arealist/arealist.component.html":
/*!**************************************************!*\
  !*** ./src/app/arealist/arealist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else arealist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"arealist\" #arealist>  \n    <h2 style=\"text-align: center;\">Area List</h2>  \n    <div class=\"arealist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addArea()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Id Column -->  \n        <ng-container matColumnDef=\"AreaID\">  \n        <th mat-header-cell *matHeaderCellDef>Area Id </th>  \n        <td mat-cell *matCellDef=\"let element\">{{element.AreaID}} </td>  \n        </ng-container>\n    \n        <!-- Area Name Column -->  \n        <ng-container matColumnDef=\"AreaName\">  \n          <th mat-header-cell *matHeaderCellDef>Area Name</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.AreaName}} </td>  \n        </ng-container>\n        \n        <!-- City Id Column -->  \n        <ng-container matColumnDef=\"CityID\">  \n          <th mat-header-cell *matHeaderCellDef>City Id </th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.CityID}} </td>  \n          </ng-container>\n\n          <!-- City Name Column -->  \n        <ng-container matColumnDef=\"CityName\">  \n          <th mat-header-cell *matHeaderCellDef>City Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.CityName}} </td>  \n          </ng-container>\n\n          <!-- State Id Column -->  \n        <ng-container matColumnDef=\"StateID\">  \n          <th mat-header-cell *matHeaderCellDef>State Id </th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.StateID}} </td>  \n          </ng-container>\n\n          <!-- State Name Column -->  \n        <ng-container matColumnDef=\"StateName\">  \n          <th mat-header-cell *matHeaderCellDef>State Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.StateName}} </td>  \n          </ng-container>\n\n          <!-- Country Id Column -->  \n        <ng-container matColumnDef=\"CountryID\">  \n          <th mat-header-cell *matHeaderCellDef>Country Id</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.CountryID}} </td>  \n          </ng-container>\n\n            <!-- Country Name Column -->  \n        <ng-container matColumnDef=\"CountryName\">  \n          <th mat-header-cell *matHeaderCellDef>Country Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.CountryName}} </td>  \n          </ng-container>\n\n          \n    \n      \n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editArea(element.AreaID)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteArea(element.AreaID)\">Delete</button>  \n            <!-- <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editCity(1)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteCity(1)\">Delete</button>   -->\n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n      </div>  \n  </ng-template> "

/***/ }),

/***/ "./src/app/arealist/arealist.component.ts":
/*!************************************************!*\
  !*** ./src/app/arealist/arealist.component.ts ***!
  \************************************************/
/*! exports provided: ArealistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArealistComponent", function() { return ArealistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _areaform_areaform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../areaform/areaform.component */ "./src/app/areaform/areaform.component.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArealistComponent = /** @class */ (function () {
    function ArealistComponent(snackBar, _areaService, dialog) {
        this.snackBar = snackBar;
        this._areaService = _areaService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['AreaID', 'AreaName', 'CityID', 'CityName', 'StateID', 'StateName', 'CountryID', 'CountryName', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ArealistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadAreas();
    };
    ArealistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_areaform_areaform_component__WEBPACK_IMPORTED_MODULE_2__["AreaformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, area: this.area }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadAreas();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    ArealistComponent.prototype.loadAreas = function () {
        var _this = this;
        this._areaService.getAllArea(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'Area/' + 'getAllArea')
            .subscribe(function (areas) {
            _this.loadingState = false;
            _this.dataSource.data = areas;
        });
    };
    ArealistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    ArealistComponent.prototype.addArea = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Area';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    ArealistComponent.prototype.editArea = function (id) {
        // console.log('id:' + id);
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit Area';
        this.modalBtnTitle = 'Update';
        this.area = this.dataSource.data.filter(function (x) { return x.AreaID === id; })[0];
        // console.log('this.city');
        // console.log(this.city);
        this.openDialog();
    };
    ArealistComponent.prototype.deleteArea = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.area = this.dataSource.data.filter(function (x) { return x.AreaID === id; })[0];
        this.openDialog();
    };
    ArealistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    ArealistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arealist',
            template: __webpack_require__(/*! ./arealist.component.html */ "./src/app/arealist/arealist.component.html"),
            styles: [__webpack_require__(/*! ./arealist.component.css */ "./src/app/arealist/arealist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ArealistComponent);
    return ArealistComponent;
}());



/***/ }),

/***/ "./src/app/cityform/cityform.component.css":
/*!*************************************************!*\
  !*** ./src/app/cityform/cityform.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cityform/cityform.component.html":
/*!**************************************************!*\
  !*** ./src/app/cityform/cityform.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(cityFrm)\" [formGroup]=\"cityFrm\">  \n  <h2>{{data.modalTitle}}</h2>  \n    \n  <div>\n    <mat-form-field appearance=\"outline\">  \n      <mat-select placeholder=\"Select a State\" formControlName=\"StateID\">  \n        <mat-option>-- None --</mat-option>  \n        <mat-option *ngFor=\"let state of states\" [value]=\"state.StateID\">  \n          {{ state.StateName }}  \n        </mat-option>  \n      </mat-select>  \n      <mat-error *ngIf=\"formErrors.StateID \">  \n        {{ formErrors.StateID }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n  \n  <div>  \n      <mat-form-field appearance=\"outline\">  \n      <mat-label>City Name</mat-label>  \n      <input matInput placeholder=\"City Name\" formControlName=\"CityName\">  \n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n      <!-- <mat-hint>Hint</mat-hint> -->  \n      <mat-error *ngIf=\"formErrors.CityName\">  \n        {{ formErrors.CityName }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n \n\n\n\n\n <!-- <div>  \n    <mat-form-field appearance=\"outline\">  \n    <mat-label>Country ID</mat-label>  \n    <input matInput placeholder=\"Country ID\" formControlName=\"CountryID\">  \n    \n  </mat-form-field>  \n</div> \n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Country Name</mat-label>  \n  <input matInput placeholder=\"Country Name\" formControlName=\"CountryName\">  \n  \n</mat-form-field>  \n</div>  \n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>State Name</mat-label>  \n  <input matInput placeholder=\"State Name\" formControlName=\"StateName\">  \n  \n</mat-form-field>  \n</div>  \n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>User ID</mat-label>  \n  <input matInput placeholder=\"User ID\" formControlName=\"UserID\">  \n  \n</mat-form-field>  \n</div>  -->\n  \n  <div>  \n    \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"cityFrm.invalid\">{{data.modalBtnTitle}}</button>  \n  </div>  \n    \n  </form> "

/***/ }),

/***/ "./src/app/cityform/cityform.component.ts":
/*!************************************************!*\
  !*** ./src/app/cityform/cityform.component.ts ***!
  \************************************************/
/*! exports provided: CityformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityformComponent", function() { return CityformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CityformComponent = /** @class */ (function () {
    function CityformComponent(data, fb, _stateService, _cityService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._stateService = _stateService;
        this._cityService = _cityService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // genders = [];
        // technologies = [];
        this.states = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'CityName': '',
            'StateID': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'CityName': {
                'maxlength': 'CityName cannot be more than 50 characters long.',
                'required': 'CityName is required.'
            },
            'StateID': {
                'maxlength': 'StateID cannot be more than 50 characters long.',
                'required': 'StateID is required.'
            }
        };
    }
    CityformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built state form
        this.cityFrm = this.fb.group({
            CityID: [-1],
            CityName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            StateID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        this._stateService.getAllState(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'State/' + 'getAllState')
            .subscribe(function (states) {
            _this.states = states;
        });
        // subscribe on value changed event of form to show validation message
        this.cityFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.cityFrm.reset();
        }
        else {
            this.cityFrm.setValue(this.data.city);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
    };
    // form value change event
    CityformComponent.prototype.onValueChanged = function (data) {
        if (!this.cityFrm) {
            return;
        }
        var form = this.cityFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    CityformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var cityData = this.mapCityID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                this._cityService.addCity(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'City/' + 'addCity', cityData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                this._cityService.updateCity(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'City/' + 'updateCity', cityData.CityID, cityData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                this._cityService.deleteCity(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'City/' + 'deleteCity', cityData.CityID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    CityformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.cityFrm.enable() : this.cityFrm.disable();
    };
    CityformComponent.prototype.mapCityID = function (city) {
        if (city.CityID == null) {
            city.CityID = -1;
            city.StateName = '';
            city.CountryID = -1;
            city.CountryName = '';
        }
        return city;
    };
    CityformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cityform',
            template: __webpack_require__(/*! ./cityform.component.html */ "./src/app/cityform/cityform.component.html"),
            styles: [__webpack_require__(/*! ./cityform.component.css */ "./src/app/cityform/cityform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], CityformComponent);
    return CityformComponent;
}());



/***/ }),

/***/ "./src/app/citylist/citylist.component.css":
/*!*************************************************!*\
  !*** ./src/app/citylist/citylist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .citylist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n  top: 45%;\r\n  left: 47%;\r\n  position: fixed;\r\n}\r\n\r\n.citylist-container, #paginator {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n  max-width: 1200px;\r\n  max-height: 700px;\r\n  overflow: auto;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/citylist/citylist.component.html":
/*!**************************************************!*\
  !*** ./src/app/citylist/citylist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else citylist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"citylist\" #citylist>  \n    <h2 style=\"text-align: center;\">City List</h2>  \n    <div class=\"citylist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addCity()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Id Column -->  \n        <ng-container matColumnDef=\"CityID\">  \n        <th mat-header-cell *matHeaderCellDef>City Id </th>  \n        <td mat-cell *matCellDef=\"let element\">{{element.CityID}} </td>  \n        </ng-container>\n    \n        <!-- City Name Column -->  \n        <ng-container matColumnDef=\"CityName\">  \n          <th mat-header-cell *matHeaderCellDef>City Name</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.CityName}} </td>  \n        </ng-container>\n        \n        <!-- State Id Column -->  \n        <ng-container matColumnDef=\"StateID\">  \n          <th mat-header-cell *matHeaderCellDef>State Id </th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.StateID}} </td>  \n          </ng-container>\n\n          <!-- State Id Column -->  \n        <ng-container matColumnDef=\"StateName\">  \n          <th mat-header-cell *matHeaderCellDef>State Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.StateName}} </td>  \n          </ng-container>\n\n          <!-- Country Id Column -->  \n        <ng-container matColumnDef=\"CountryID\">  \n          <th mat-header-cell *matHeaderCellDef>Country ID</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.CountryID}} </td>  \n          </ng-container>\n\n          <!-- Country Name Column -->  \n        <ng-container matColumnDef=\"CountryName\">  \n          <th mat-header-cell *matHeaderCellDef>Country Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.CountryName}} </td>  \n          </ng-container>\n    \n      \n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editCity(element.CityID)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteCity(element.CityID)\">Delete</button>  \n            <!-- <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editCity(1)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteCity(1)\">Delete</button>   -->\n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n      </div>  \n  </ng-template> "

/***/ }),

/***/ "./src/app/citylist/citylist.component.ts":
/*!************************************************!*\
  !*** ./src/app/citylist/citylist.component.ts ***!
  \************************************************/
/*! exports provided: CitylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitylistComponent", function() { return CitylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cityform_cityform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cityform/cityform.component */ "./src/app/cityform/cityform.component.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CitylistComponent = /** @class */ (function () {
    function CitylistComponent(snackBar, _cityService, dialog) {
        this.snackBar = snackBar;
        this._cityService = _cityService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['CityID', 'CityName', 'StateID', 'StateName', 'CountryID', 'CountryName', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    CitylistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadCities();
    };
    CitylistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_cityform_cityform_component__WEBPACK_IMPORTED_MODULE_2__["CityformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, city: this.city }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadCities();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    CitylistComponent.prototype.loadCities = function () {
        var _this = this;
        // console.log(Global.BASE_USER_ENDPOINT + 'City/' + 'getAllCity');
        this._cityService.getAllCity(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'City/' + 'getAllCity')
            .subscribe(function (cities) {
            _this.loadingState = false;
            _this.dataSource.data = cities;
        });
    };
    CitylistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    CitylistComponent.prototype.addCity = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New City';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    CitylistComponent.prototype.editCity = function (id) {
        console.log('id:' + id);
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit City';
        this.modalBtnTitle = 'Update';
        this.city = this.dataSource.data.filter(function (x) { return x.CityID === id; })[0];
        console.log('this.city');
        console.log(this.city);
        this.openDialog();
    };
    CitylistComponent.prototype.deleteCity = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.city = this.dataSource.data.filter(function (x) { return x.CityID === id; })[0];
        this.openDialog();
    };
    CitylistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    CitylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-citylist',
            template: __webpack_require__(/*! ./citylist.component.html */ "./src/app/citylist/citylist.component.html"),
            styles: [__webpack_require__(/*! ./citylist.component.css */ "./src/app/citylist/citylist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CitylistComponent);
    return CitylistComponent;
}());



/***/ }),

/***/ "./src/app/counter/counter.component.html":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.currentCount = 0;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter-component',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/counter/counter.component.html")
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/countryform/countryform.component.css":
/*!*******************************************************!*\
  !*** ./src/app/countryform/countryform.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field[hidden] {\r\n    display: none;\r\n  }"

/***/ }),

/***/ "./src/app/countryform/countryform.component.html":
/*!********************************************************!*\
  !*** ./src/app/countryform/countryform.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(countryFrm)\"  [formGroup]=\"countryFrm\">  \r\n    <h2>{{data.modalTitle}}</h2>  \r\n      \r\n    <div>  \r\n        <mat-form-field appearance=\"outline\">  \r\n        <mat-label>Country Name</mat-label>  \r\n        <input matInput placeholder=\"Country Name\" formControlName=\"CountryName\">  \r\n        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \r\n        <!-- <mat-hint>Hint</mat-hint> -->  \r\n        <mat-error *ngIf=\"formErrors.CountryName\">  \r\n          {{ formErrors.CountryName }}  \r\n        </mat-error>  \r\n      </mat-form-field>  \r\n    </div>  \r\n    <!-- <div>  \r\n      <mat-form-field appearance=\"outline\" [hidden]>  \r\n      <mat-label> Name</mat-label>  \r\n      <input matInput placeholder=\"UserID\" formControlName=\"UserID\">  \r\n      </mat-form-field>  \r\n    </div> -->\r\n    \r\n    <div>  \r\n      \r\n      <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \r\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"countryFrm.invalid\">{{data.modalBtnTitle}}</button>  \r\n    </div>  \r\n      \r\n    </form> "

/***/ }),

/***/ "./src/app/countryform/countryform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/countryform/countryform.component.ts ***!
  \******************************************************/
/*! exports provided: CountryformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryformComponent", function() { return CountryformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CountryformComponent = /** @class */ (function () {
    // genders = [];
    // technologies = [];
    function CountryformComponent(data, fb, _countryService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._countryService = _countryService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'CountryName': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'CountryName': {
                'maxlength': 'countryname cannot be more than 50 characters long.',
                'required': 'countryname is required.'
            }
        };
    }
    CountryformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built country form
        this.countryFrm = this.fb.group({
            CountryID: [-1],
            CountryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            UserID: [-1]
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        // this.countryFrm.setValue({
        //   CountryID: -1,
        //   UserID: -1
        // // CountryName: ' '
        // });
        // subscribe on value changed event of form to show validation message
        this.countryFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.countryFrm.reset();
        }
        else {
            this.countryFrm.setValue(this.data.country);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    // form value change event
    CountryformComponent.prototype.onValueChanged = function (data) {
        if (!this.countryFrm) {
            return;
        }
        var form = this.countryFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    CountryformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var countryData = this.mapCountryID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._countryService.addCountry(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'Country/' + 'addCountry', countryData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._countryService.updateCountry(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'Country/' + 'updateCountry', countryData.CountryID, countryData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._countryService.deleteCountry(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'Country/' + 'deleteCountry', countryData.CountryID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    CountryformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.countryFrm.enable() : this.countryFrm.disable();
    };
    CountryformComponent.prototype.mapCountryID = function (country) {
        if (country.CountryID == null) {
            country.CountryID = -1;
            country.UserID = 1;
        }
        return country;
    };
    CountryformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countryform',
            template: __webpack_require__(/*! ./countryform.component.html */ "./src/app/countryform/countryform.component.html"),
            styles: [__webpack_require__(/*! ./countryform.component.css */ "./src/app/countryform/countryform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], CountryformComponent);
    return CountryformComponent;
}());



/***/ }),

/***/ "./src/app/countrylist/countrylist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/countrylist/countrylist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .countrylist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.countrylist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/countrylist/countrylist.component.html":
/*!********************************************************!*\
  !*** ./src/app/countrylist/countrylist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else countrylist\">  \r\n    <mat-spinner></mat-spinner>  \r\n    </div>  \r\n    <ng-template class=\"countrylist\" #countrylist>  \r\n      <h2 style=\"text-align: center;\">Country List</h2>  \r\n      <div class=\"countrylist-container mat-elevation-z8\">  \r\n        <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addCountry()\">Create</button></div>  \r\n        <table mat-table #table [dataSource]=\"dataSource\">  \r\n      \r\n          <!-- Id Column -->  \r\n          <ng-container matColumnDef=\"CountryID\">  \r\n          <th mat-header-cell *matHeaderCellDef>Country Id </th>  \r\n          <td mat-cell *matCellDef=\"let element\">{{element.CountryID}} </td>  \r\n          </ng-container>\r\n      \r\n          <!-- Country Name Column -->  \r\n          <ng-container matColumnDef=\"CountryName\">  \r\n            <th mat-header-cell *matHeaderCellDef>Country Name</th>  \r\n            <td mat-cell *matCellDef=\"let element\"> {{element.CountryName}} </td>  \r\n          </ng-container>  \r\n      \r\n        \r\n           \r\n          <ng-container matColumnDef=\"action\">  \r\n            <th mat-header-cell *matHeaderCellDef>Action</th>  \r\n            <td mat-cell *matCellDef=\"let element\">  \r\n              <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editCountry(element.CountryID)\">Edit</button>  \r\n              <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteCountry(element.CountryID)\">Delete</button>  \r\n            </td>  \r\n          </ng-container>  \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \r\n  \r\n          <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\r\n          <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \r\n        </table>  \r\n        </div>  \r\n    </ng-template> "

/***/ }),

/***/ "./src/app/countrylist/countrylist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/countrylist/countrylist.component.ts ***!
  \******************************************************/
/*! exports provided: CountrylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrylistComponent", function() { return CountrylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _countryform_countryform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../countryform/countryform.component */ "./src/app/countryform/countryform.component.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CountrylistComponent = /** @class */ (function () {
    function CountrylistComponent(snackBar, _countryService, dialog) {
        this.snackBar = snackBar;
        this._countryService = _countryService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['CountryID', 'CountryName', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    CountrylistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadCountries();
    };
    CountrylistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_countryform_countryform_component__WEBPACK_IMPORTED_MODULE_2__["CountryformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, country: this.country }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadCountries();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    CountrylistComponent.prototype.loadCountries = function () {
        var _this = this;
        this._countryService.getAllCountry(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
            .subscribe(function (countries) {
            _this.loadingState = false;
            _this.dataSource.data = countries;
        });
    };
    CountrylistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    CountrylistComponent.prototype.addCountry = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Country';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    CountrylistComponent.prototype.editCountry = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit Country';
        this.modalBtnTitle = 'Update';
        this.country = this.dataSource.data.filter(function (x) { return x.CountryID === id; })[0];
        this.openDialog();
    };
    CountrylistComponent.prototype.deleteCountry = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.country = this.dataSource.data.filter(function (x) { return x.CountryID === id; })[0];
        this.openDialog();
    };
    CountrylistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    CountrylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countrylist',
            template: __webpack_require__(/*! ./countrylist.component.html */ "./src/app/countrylist/countrylist.component.html"),
            styles: [__webpack_require__(/*! ./countrylist.component.css */ "./src/app/countrylist/countrylist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CountrylistComponent);
    return CountrylistComponent;
}());



/***/ }),

/***/ "./src/app/entityform/entityform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/entityform/entityform.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/entityform/entityform.component.html":
/*!******************************************************!*\
  !*** ./src/app/entityform/entityform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(entityFrm)\" [formGroup]=\"entityFrm\">  \n  <h2>{{data.modalTitle}}</h2>  \n    \n  <div>  \n      <mat-form-field appearance=\"outline\">  \n      <mat-label> Name</mat-label>  \n      <input matInput placeholder=\"Name\" formControlName=\"Name\">  \n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n      <!-- <mat-hint>Hint</mat-hint> -->  \n      <mat-error *ngIf=\"formErrors.Name\">  \n        {{ formErrors.Name }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n\n  <div>  \n    <mat-form-field appearance=\"outline\">  \n    <mat-label> Description</mat-label>  \n    <input matInput placeholder=\"Description\" formControlName=\"Description\">  \n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n    <!-- <mat-hint>Hint</mat-hint> -->  \n    <mat-error *ngIf=\"formErrors.Description\">  \n      {{ formErrors.Description }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>\n<!-- \n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label> IsRegistered</mat-label>  \n  <input matInput placeholder=\"IsRegistered\" formControlName=\"IsRegistered\">  \n \n  <mat-error *ngIf=\"formErrors.IsRegistered\">  \n    {{ formErrors.IsRegistered }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n\n<!-- <div>  \n  <mat-radio-group class=\"contact-radio-group\" formControlName=\"IsRegistered\" >  \n    <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let option of registeredOptions\" [value]=\"option.id\">  \n      {{ option.name }}  \n    </mat-radio-button>  \n  </mat-radio-group>  \n  <mat-error *ngIf=\"formErrors.IsRegistered\">  \n    {{ formErrors.IsRegistered }}  \n  </mat-error>  \n</div>  -->\n\n<div>\n    <mat-label>Registered</mat-label>\n    <mat-radio-group class=\"contact-radio-group\" formControlName=\"IsRegistered\" >  \n      <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let option of YesNoOptions\" [value]=\"option.id\">  \n        {{ option.name }}  \n      </mat-radio-button>  \n    </mat-radio-group>  \n    <mat-error *ngIf=\"formErrors.IsRegistered\">  \n      {{ formErrors.IsRegistered }}  \n    </mat-error>  \n  </div>\n\n\n\n  <div>  \n    <mat-form-field appearance=\"outline\">  \n    <mat-label>First Name</mat-label>  \n    <input matInput placeholder=\"FirstName\" formControlName=\"FirstName\">  \n    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n    <!-- <mat-hint>Hint</mat-hint> -->  \n    <!-- <mat-error *ngIf=\"formErrors.FirstName\">  \n      {{ formErrors.FirstName }}  \n    </mat-error>   -->\n  </mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Middle Name</mat-label>  \n  <input matInput placeholder=\"MiddleName\" formControlName=\"MiddleName\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.MiddleName\">  \n    {{ formErrors.MiddleName }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Last Name</mat-label>  \n  <input matInput placeholder=\"LastName\" formControlName=\"LastName\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.LastName\">  \n    {{ formErrors.LastName }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Nick Name</mat-label>  \n  <input matInput placeholder=\"NickName\" formControlName=\"NickName\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.NickName\">  \n    {{ formErrors.NickName }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Entity Type</mat-label>  \n  <input matInput placeholder=\"EntityType\" formControlName=\"EntityType\">  \n \n  <mat-error *ngIf=\"formErrors.EntityType\">  \n    {{ formErrors.EntityType }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n<div>\n    <mat-label>Active</mat-label>\n    <mat-radio-group class=\"contact-radio-group\" formControlName=\"EntityType\" >  \n      <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let option of EntityTypeOptions\" [value]=\"option.value\">  \n        {{ option.name }}  \n      </mat-radio-button>  \n    </mat-radio-group>  \n    <mat-error *ngIf=\"formErrors.EntityType\">  \n      {{ formErrors.EntityType }}  \n    </mat-error>  \n  </div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Registered Address</mat-label>  \n  <input matInput placeholder=\"RegisteredAddress\" formControlName=\"RegisteredAddress\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <mat-error *ngIf=\"formErrors.RegisteredAddress\">  \n    {{ formErrors.RegisteredAddress }}  \n  </mat-error>  \n</mat-form-field>  \n</div>\n\n\n\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Registered CountryID</mat-label>  \n  <input matInput placeholder=\"RegisteredCountryID\" formControlName=\"RegisteredCountryID\">  \n \n  <mat-error *ngIf=\"formErrors.RegisteredCountryID\">  \n    {{ formErrors.RegisteredCountryID }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n\n<div>\n  <mat-form-field appearance=\"outline\">  \n      <mat-label>Country</mat-label>\n    <mat-select placeholder=\"Select a Country\" formControlName=\"RegisteredCountryID\">  \n      <mat-option>-- None --</mat-option>  \n      <mat-option *ngFor=\"let country of countries\" [value]=\"country.CountryID\">  \n        {{ country.CountryName }}  \n      </mat-option>  \n    </mat-select>  \n    <mat-error *ngIf=\"formErrors.RegisteredCountryID \">  \n      {{ formErrors.RegisteredCountryID }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>\n\n\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Registered StateID</mat-label>  \n  <input matInput placeholder=\"RegisteredStateID\" formControlName=\"RegisteredStateID\">  \n  \n  <mat-error *ngIf=\"formErrors.RegisteredStateID\">  \n    {{ formErrors.RegisteredStateID }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n\n\n<div>\n  <mat-form-field appearance=\"outline\">  \n      <mat-label>State</mat-label>\n    <mat-select placeholder=\"Select a State\" formControlName=\"RegisteredStateID\">  \n      <mat-option>-- None --</mat-option>  \n      <mat-option *ngFor=\"let state of states\" [value]=\"state.StateID\">  \n        {{ state.StateName }}  \n      </mat-option>  \n    </mat-select>  \n    <mat-error *ngIf=\"formErrors.RegisteredStateID \">  \n      {{ formErrors.RegisteredStateID }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>\n\n\n\n\n\n\n<div>\n  <mat-form-field appearance=\"outline\">  \n      <mat-label>City</mat-label>\n    <mat-select placeholder=\"Select a City\" formControlName=\"RegisteredCityID\">  \n      <mat-option>-- None --</mat-option>  \n      <mat-option *ngFor=\"let city of cities\" [value]=\"city.CityID\">  \n        {{ city.CityName }}  \n      </mat-option>  \n    </mat-select>  \n    <mat-error *ngIf=\"formErrors.RegisteredCityID \">  \n      {{ formErrors.RegisteredCityID }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>\n\n<div>\n  <mat-form-field appearance=\"outline\">\n      <mat-label>Area</mat-label>  \n    <mat-select placeholder=\"Select a Area\" formControlName=\"RegisteredAreaID\">  \n      <mat-option>-- None --</mat-option>  \n      <mat-option *ngFor=\"let area of areas\" [value]=\"area.AreaID\">  \n        {{ area.AreaName }}  \n      </mat-option>  \n    </mat-select>  \n    <mat-error *ngIf=\"formErrors.RegisteredAreaID \">  \n      {{ formErrors.RegisteredAreaID }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>\n\n\n\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Registered AreaID</mat-label>  \n  <input matInput placeholder=\"RegisteredAreaID\" formControlName=\"RegisteredAreaID\">  \n  \n  <mat-error *ngIf=\"formErrors.RegisteredAreaID\">  \n    {{ formErrors.RegisteredAreaID }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Email Address</mat-label>  \n  <input matInput placeholder=\"EmailAddress\" formControlName=\"EmailAddress\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <mat-error *ngIf=\"formErrors.EmailAddress\">  \n    {{ formErrors.EmailAddress }}  \n  </mat-error>  \n</mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Website Address</mat-label>  \n  <input matInput placeholder=\"WebsiteAddress\" formControlName=\"WebsiteAddress\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.WebsiteAddress\">  \n    {{ formErrors.WebsiteAddress }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Facebook Address</mat-label>  \n  <input matInput placeholder=\"FacebookAddress\" formControlName=\"FacebookAddress\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.FacebookAddress\">  \n    {{ formErrors.FacebookAddress }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>YouTube Address</mat-label>  \n  <input matInput placeholder=\"YouTubeAddress\" formControlName=\"YouTubeAddress\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.YouTubeAddress\">  \n    {{ formErrors.YouTubeAddress }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Twitter Address</mat-label>  \n  <input matInput placeholder=\"TwitterAddress\" formControlName=\"TwitterAddress\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.TwitterAddress\">  \n    {{ formErrors.TwitterAddress }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>GooglePlusAddress</mat-label>  \n  <input matInput placeholder=\"GooglePlusAddress\" formControlName=\"GooglePlusAddress\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.GooglePlusAddress\">  \n    {{ formErrors.GooglePlusAddress }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>IsActive</mat-label>  \n  <input matInput placeholder=\"IsActive\" formControlName=\"IsActive\">  \n \n  <mat-error *ngIf=\"formErrors.IsActive\">  \n    {{ formErrors.IsActive }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n<div>\n  <mat-label>Active</mat-label>\n  <mat-radio-group class=\"contact-radio-group\" formControlName=\"IsActive\" >  \n    <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let option of YesNoOptions\" [value]=\"option.id\">  \n      {{ option.name }}  \n    </mat-radio-button>  \n  </mat-radio-group>  \n  <mat-error *ngIf=\"formErrors.IsActive\">  \n    {{ formErrors.IsActive }}  \n  </mat-error>  \n</div>\n  \n  <div>  \n    \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"entityFrm.invalid\">{{data.modalBtnTitle}}</button>  \n  </div>  \n    \n  </form> "

/***/ }),

/***/ "./src/app/entityform/entityform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/entityform/entityform.component.ts ***!
  \****************************************************/
/*! exports provided: EntityformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityformComponent", function() { return EntityformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_entity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var EntityformComponent = /** @class */ (function () {
    function EntityformComponent(data, fb, _stateService, _cityService, _areaService, _countryService, _entityService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._stateService = _stateService;
        this._cityService = _cityService;
        this._areaService = _areaService;
        this._countryService = _countryService;
        this._entityService = _entityService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // genders = [];
        // technologies = [];
        this.YesNoOptions = [];
        this.EntityTypeOptions = [];
        //registeredOptions = [];
        this.states = [];
        this.countries = [];
        this.areas = [];
        this.cities = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'Name': '',
            'Description': '',
            'FirstName': '',
            'MiddleName': '',
            'LastName': '',
            'NickName': '',
            'EntityType': '',
            'RegisteredAddress': '',
            'RegisteredCountryID': '',
            'RegisteredStateID': '',
            'RegisteredCityID': '',
            'RegisteredAreaID': '',
            'EmailAddress': '',
            'WebsiteAddress': '',
            'FacebookAddress': '',
            'YouTubeAddress': '',
            'TwitterAddress': '',
            'GooglePlusAddress': '',
            'IsActive': '',
            'IsRegistered': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'Name': {
                'maxlength': 'Name cannot be more than 50 characters long.',
                'required': 'Name is required.'
            },
            'Description': {
                'maxlength': 'Description cannot be more than 50 characters long.',
                'required': 'Description is required.'
            },
            'FirstName': {
                'maxlength': 'FirstName cannot be more than 50 characters long.',
                'required': 'FirstName is required.'
            },
            'MiddleName': {
                'maxlength': 'MiddleName cannot be more than 50 characters long.',
                'required': 'MiddleName is required.'
            },
            'LastName': {
                'maxlength': 'LastName cannot be more than 50 characters long.',
                'required': 'LastName is required.'
            },
            'NickName': {
                'maxlength': 'NickName cannot be more than 50 characters long.',
                'required': 'NickName is required.'
            },
            'EntityType': {
                'maxlength': 'EntityType cannot be more than 50 characters long.',
                'required': 'EntityType is required.'
            },
            'RegisteredAddress': {
                'maxlength': 'RegisteredAddress cannot be more than 50 characters long.',
                'required': 'RegisteredAddress is required.'
            },
            'RegisteredCountryID': {
                'maxlength': 'RegisteredCountryID cannot be more than 50 characters long.',
                'required': 'RegisteredCountryID is required.'
            },
            'RegisteredStateID': {
                'maxlength': 'RegisteredStateID cannot be more than 50 characters long.',
                'required': 'RegisteredStateID is required.'
            },
            'RegisteredCityID': {
                'maxlength': 'RegisteredCityID cannot be more than 50 characters long.',
                'required': 'RegisteredCityID is required.'
            },
            'RegisteredAreaID': {
                'maxlength': 'RegisteredAreaID cannot be more than 50 characters long.',
                'required': 'RegisteredAreaID is required.'
            },
            'EmailAddress': {
                'maxlength': 'EmailAddress cannot be more than 50 characters long.',
                'required': 'EmailAddress is required.'
            },
            'WebsiteAddress': {
                'maxlength': 'WebsiteAddress cannot be more than 50 characters long.',
                'required': 'WebsiteAddress is required.'
            },
            'FacebookAddress': {
                'maxlength': 'FacebookAddress cannot be more than 50 characters long.',
                'required': 'FacebookAddress is required.'
            },
            'YouTubeAddress': {
                'maxlength': 'YouTubeAddress cannot be more than 50 characters long.',
                'required': 'YouTubeAddress is required.'
            },
            'TwitterAddress': {
                'maxlength': 'TwitterAddress cannot be more than 50 characters long.',
                'required': 'TwitterAddress is required.'
            },
            'GooglePlusAddress': {
                'maxlength': 'GooglePlusAddress cannot be more than 50 characters long.',
                'required': 'GooglePlusAddress is required.'
            },
            'IsActive': {
                'maxlength': 'IsActive cannot be more than 50 characters long.',
                'required': 'IsActive is required.'
            },
            'IsRegistered': {
                'maxlength': 'IsRegistered cannot be more than 50 characters long.',
                'required': 'IsRegistered is required.'
            }
        };
    }
    EntityformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built state form
        this.entityFrm = this.fb.group({
            EntityID: [''],
            Description: [''],
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            FirstName: [''],
            MiddleName: [''],
            LastName: [''],
            NickName: [''],
            EntityType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RegisteredAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RegisteredCountryID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RegisteredStateID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RegisteredCityID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RegisteredAreaID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EmailAddress: [''],
            WebsiteAddress: [''],
            FacebookAddress: [''],
            YouTubeAddress: [''],
            TwitterAddress: [''],
            GooglePlusAddress: [''],
            IsActive: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            IsRegistered: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            CityName: [''],
            StateName: [''],
            CountryName: [''],
            AreaName: ['']
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        this.YesNoOptions = _shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].YesNoOptions;
        this.EntityTypeOptions = _shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].EntityTypeOptions;
        //this.registeredOptions =  Global.registeredOptions;
        this._countryService.getAllCountry(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
            .subscribe(function (countries) {
            _this.countries = countries;
        });
        this._stateService.getAllState(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'State/' + 'getAllState')
            .subscribe(function (states) {
            _this.states = states;
        });
        this._cityService.getAllCity(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'City/' + 'getAllCity')
            .subscribe(function (cities) {
            _this.cities = cities;
        });
        this._areaService.getAllArea(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Area/' + 'getAllArea')
            .subscribe(function (areas) {
            _this.areas = areas;
        });
        // subscribe on value changed event of form to show validation message
        this.entityFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].create) {
            this.entityFrm.reset();
        }
        else {
            this.entityFrm.setValue(this.data.entity);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].delete ? false : true);
    };
    // form value change event
    EntityformComponent.prototype.onValueChanged = function (data) {
        if (!this.entityFrm) {
            return;
        }
        var form = this.entityFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    EntityformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var entityData = this.mapEntityID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].create:
                this._entityService.addEntity(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Entity/' + 'addEntity', entityData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].update:
                this._entityService.updateEntity(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Entity/' + 'updateEntity', entityData.EntityID, entityData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].delete:
                this._entityService.deleteEntity(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Entity/' + 'deleteEntity', entityData.EntityID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    EntityformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.entityFrm.enable() : this.entityFrm.disable();
    };
    EntityformComponent.prototype.mapEntityID = function (entity) {
        if (entity.EntityID == null) {
            entity.EntityID = -1;
            //entity.UserID = -1;  
            entity.CityName = '';
            entity.StateName = '';
            entity.CountryName = '';
            entity.AreaName = '';
        }
        return entity;
    };
    EntityformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entityform',
            template: __webpack_require__(/*! ./entityform.component.html */ "./src/app/entityform/entityform.component.html"),
            styles: [__webpack_require__(/*! ./entityform.component.css */ "./src/app/entityform/entityform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"],
            _services_area_service__WEBPACK_IMPORTED_MODULE_6__["AreaService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"],
            _services_entity_service__WEBPACK_IMPORTED_MODULE_7__["EntityService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EntityformComponent);
    return EntityformComponent;
}());



/***/ }),

/***/ "./src/app/entitylist/entitylist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/entitylist/entitylist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .entitylist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.entitylist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/entitylist/entitylist.component.html":
/*!******************************************************!*\
  !*** ./src/app/entitylist/entitylist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else entitylist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"entitylist\" #entitylist>  \n    <h2 style=\"text-align: center;\">Entity List</h2>  \n    <div class=\"entitylist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addEntity()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Id Column -->  \n        <ng-container matColumnDef=\"EntityID\">  \n        <th mat-header-cell *matHeaderCellDef>Entity Id </th>  \n        <td mat-cell *matCellDef=\"let element\">{{element.EntityID}} </td>  \n        </ng-container>\n    \n        <!-- Name Column -->  \n        <ng-container matColumnDef=\"Name\">  \n          <th mat-header-cell *matHeaderCellDef>Name</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.Name}} </td>  \n        </ng-container>\n        \n        <!-- State Id Column -->  \n        <ng-container matColumnDef=\"StateID\">  \n          <th mat-header-cell *matHeaderCellDef>State Id </th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.StateID}} </td>  \n          </ng-container>\n    \n      \n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editEntity(element.EntityID)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteEntity(element.EntityID)\">Delete</button>  \n            <!-- <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editCity(1)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteCity(1)\">Delete</button>   -->\n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n      </div>  \n  </ng-template> "

/***/ }),

/***/ "./src/app/entitylist/entitylist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/entitylist/entitylist.component.ts ***!
  \****************************************************/
/*! exports provided: EntitylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitylistComponent", function() { return EntitylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _entityform_entityform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entityform/entityform.component */ "./src/app/entityform/entityform.component.ts");
/* harmony import */ var _services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EntitylistComponent = /** @class */ (function () {
    function EntitylistComponent(snackBar, _entityService, dialog) {
        this.snackBar = snackBar;
        this._entityService = _entityService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['EntityID', 'Name', 'StateID', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    EntitylistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadEntities();
    };
    EntitylistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_entityform_entityform_component__WEBPACK_IMPORTED_MODULE_2__["EntityformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, entity: this.entity }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadEntities();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    EntitylistComponent.prototype.loadEntities = function () {
        var _this = this;
        this._entityService.getAllEntity(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'Entity/' + 'getAllEntity')
            .subscribe(function (entities) {
            _this.loadingState = false;
            _this.dataSource.data = entities;
        });
    };
    EntitylistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    EntitylistComponent.prototype.addEntity = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Entity';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    EntitylistComponent.prototype.editEntity = function (id) {
        // console.log('id:' + id);
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit City';
        this.modalBtnTitle = 'Update';
        this.entity = this.dataSource.data.filter(function (x) { return x.EntityID === id; })[0];
        // console.log('this.city');
        // console.log(this.city);
        this.openDialog();
    };
    EntitylistComponent.prototype.deleteEntity = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.entity = this.dataSource.data.filter(function (x) { return x.EntityID === id; })[0];
        this.openDialog();
    };
    EntitylistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    EntitylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entitylist',
            template: __webpack_require__(/*! ./entitylist.component.html */ "./src/app/entitylist/entitylist.component.html"),
            styles: [__webpack_require__(/*! ./entitylist.component.css */ "./src/app/entitylist/entitylist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], EntitylistComponent);
    return EntitylistComponent;
}());



/***/ }),

/***/ "./src/app/eventartistform/eventartistform.component.css":
/*!***************************************************************!*\
  !*** ./src/app/eventartistform/eventartistform.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/eventartistform/eventartistform.component.html":
/*!****************************************************************!*\
  !*** ./src/app/eventartistform/eventartistform.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(eventartistFrm)\"  [formGroup]=\"eventartistFrm\">  \n  <h2>{{data.modalTitle}}</h2>  \n    \n  <div>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Event</mat-label>  \n      <mat-select placeholder=\"Select a Event\" formControlName=\"EventID\">  \n        <mat-option>-- None --</mat-option>  \n        <mat-option *ngFor=\"let event  of events\" [value]=\"event.EventID\">  \n          {{ event.EventStartDate | date: \"dd-MMM-yyyy\" }} - {{ event.EventName }}\n        </mat-option>  \n      </mat-select>  \n      <mat-error *ngIf=\"formErrors.EventID \">  \n        {{ formErrors.EventID }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n\n\n\n<div>\n  <mat-form-field appearance=\"outline\">\n      <mat-label>Artist</mat-label>  \n    <mat-select placeholder=\"Select a Artist\" formControlName=\"ArtistID\">  \n      <mat-option>-- None --</mat-option>  \n      <mat-option *ngFor=\"let entity  of entities\" [value]=\"entity.EntityID\">  \n        {{ entity.Name }}  \n      </mat-option>  \n    </mat-select>  \n    <mat-error *ngIf=\"formErrors.ArtistID\">  \n      {{ formErrors.ArtistID }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Performance Start Time</mat-label>  \n  <input matInput placeholder=\"Start Time\" formControlName=\"StartTime\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.StartTime\">  \n    {{ formErrors.StartTime }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n\n<div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Performance End Time</mat-label>  \n  <input matInput placeholder=\"End Time\" formControlName=\"EndTime\">  \n  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n  <!-- <mat-hint>Hint</mat-hint> -->  \n  <!-- <mat-error *ngIf=\"formErrors.EndTime\">  \n    {{ formErrors.EndTime }}  \n  </mat-error>   -->\n</mat-form-field>  \n</div>\n<div>  \n  <mat-radio-group class=\"contact-radio-group\" formControlName=\"IsActive\" >  \n      <mat-label>Active</mat-label>  \n    <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let option of YesNoOptions\" [value]=\"option.id\"  [checked]=\"option.id === 1\">  \n      {{ option.name }}  \n    </mat-radio-button>  \n  </mat-radio-group>  \n  <!-- <mat-error *ngIf=\"formErrors.IsActive\">  \n    {{ formErrors.IsActive }}  \n  </mat-error>   -->\n</div> \n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>User ID</mat-label>  \n  <input matInput placeholder=\"UserID\" formControlName=\"UserID\">  \n</mat-form-field>  \n</div> -->\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Country Name</mat-label>  \n  <input matInput placeholder=\"Country Name\" formControlName=\"CountryName\">  \n</mat-form-field>  \n</div> -->\n  \n  <div>  \n    \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"eventartistFrm.invalid\">{{data.modalBtnTitle}}</button>  \n  </div>  \n    \n  </form> "

/***/ }),

/***/ "./src/app/eventartistform/eventartistform.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/eventartistform/eventartistform.component.ts ***!
  \**************************************************************/
/*! exports provided: EventArtistformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArtistformComponent", function() { return EventArtistformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _services_eventartist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/eventartist.service */ "./src/app/services/eventartist.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var EventArtistformComponent = /** @class */ (function () {
    function EventArtistformComponent(data, fb, _eventService, _entityService, _eventartistService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._eventService = _eventService;
        this._entityService = _entityService;
        this._eventartistService = _eventartistService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // genders = [];
        // technologies = [];
        this.events = [];
        this.entities = [];
        this.YesNoOptions = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'EventID': '',
            'ArtistID': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'EventID': {
                'maxlength': 'EventID cannot be more than 50 characters long.',
                'required': 'EventID is required.'
            },
            'ArtistID': {
                'maxlength': 'ArtistID cannot be more than 50 characters long.',
                'required': 'ArtistID is required.'
            }
        };
    }
    EventArtistformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built event artist form
        this.eventartistFrm = this.fb.group({
            EventArtistID: [],
            EventID: [-1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ArtistID: [-1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EventName: [''],
            ArtistName: [''],
            StartTime: [''],
            EndTime: [''],
            UserID: [],
            IsActive: [],
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        this.YesNoOptions = _shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].YesNoOptions;
        this._eventService.getAllEvent(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'Event/' + 'getAllEvent')
            .subscribe(function (events) {
            _this.events = events;
        });
        this._entityService.getAllEntity(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'Entity/' + 'getAllEntity')
            .subscribe(function (entities) {
            _this.entities = entities;
        });
        // subscribe on value changed event of form to show validation message
        this.eventartistFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].create) {
            this.eventartistFrm.reset();
        }
        else {
            this.eventartistFrm.setValue(this.data.eventartist);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].delete ? false : true);
    };
    // form value change event
    EventArtistformComponent.prototype.onValueChanged = function (data) {
        if (!this.eventartistFrm) {
            return;
        }
        var form = this.eventartistFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    EventArtistformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var eventartistData = this.mapEventArtistID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].create:
                this._eventartistService.addEventArtist(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'EventArtist/' + 'addEventArtist', eventartistData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].update:
                this._eventartistService.updateEventArtist(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'EventArtist/' + 'updateEventArtist', eventartistData.EventArtistID, eventartistData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].delete:
                this._eventartistService.deleteEventArtist(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'EventArtist/' + 'deleteEventArtist', eventartistData.EventArtistID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    EventArtistformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.eventartistFrm.enable() : this.eventartistFrm.disable();
    };
    EventArtistformComponent.prototype.mapEventArtistID = function (eventartist) {
        if (eventartist.EventArtistID == null) {
            eventartist.EventArtistID = -1;
            eventartist.UserID = 1;
            eventartist.EventName = '';
            eventartist.ArtistName = '';
            // eventartist.StartTime = '';
            // eventartist.StartTime = '';
            // eventartist.IsActive = 0;
        }
        return eventartist;
    };
    EventArtistformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventartistform',
            template: __webpack_require__(/*! ./eventartistform.component.html */ "./src/app/eventartistform/eventartistform.component.html"),
            styles: [__webpack_require__(/*! ./eventartistform.component.css */ "./src/app/eventartistform/eventartistform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"],
            _services_eventartist_service__WEBPACK_IMPORTED_MODULE_5__["EventArtistService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EventArtistformComponent);
    return EventArtistformComponent;
}());



/***/ }),

/***/ "./src/app/eventartistlist/eventartistlist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/eventartistlist/eventartistlist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .statelist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.eventartistlist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/eventartistlist/eventartistlist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/eventartistlist/eventartistlist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else eventartistlist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"eventartistlist\" #eventartistlist>  \n    <h2 style=\"text-align: center;\">Event Artist List</h2>  \n    <div class=\"eventartistlist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addEventArtist()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Event Artist ID Column -->  \n        <ng-container matColumnDef=\"EventArtistID\">  \n        <th mat-header-cell *matHeaderCellDef>EventArtist ID</th>  \n        <td mat-cell *matCellDef=\"let element\">{{element.EventArtistID}} </td>  \n        </ng-container>\n    \n        <!-- Event ID Column -->  \n        <ng-container matColumnDef=\"EventID\">  \n          <th mat-header-cell *matHeaderCellDef>Event ID</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventID}} </td>  \n        </ng-container>\n        \n        <!-- Event Name Column -->  \n        <ng-container matColumnDef=\"EventName\">  \n          <th mat-header-cell *matHeaderCellDef>Event Name</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventName}} </td>  \n        </ng-container>\n        \n        <!-- Artist Id Column -->  \n        <ng-container matColumnDef=\"ArtistID\">  \n          <th mat-header-cell *matHeaderCellDef>Artist Id </th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.ArtistID}} </td>  \n          </ng-container>\n\n        <!-- Artist Name Column -->  \n        <ng-container matColumnDef=\"ArtistName\">  \n          <th mat-header-cell *matHeaderCellDef>Artist Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.ArtistName}} </td>  \n          </ng-container>\n    \n      \n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editEventArtist(element.EventArtistID)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteEventArtist(element.EventArtistID)\">Delete</button>  \n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n      </div>  \n  </ng-template> "

/***/ }),

/***/ "./src/app/eventartistlist/eventartistlist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/eventartistlist/eventartistlist.component.ts ***!
  \**************************************************************/
/*! exports provided: EventArtistlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArtistlistComponent", function() { return EventArtistlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _eventartistform_eventartistform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventartistform/eventartistform.component */ "./src/app/eventartistform/eventartistform.component.ts");
/* harmony import */ var _services_eventartist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/eventartist.service */ "./src/app/services/eventartist.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventArtistlistComponent = /** @class */ (function () {
    function EventArtistlistComponent(snackBar, _eventartistService, dialog) {
        this.snackBar = snackBar;
        this._eventartistService = _eventartistService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['EventArtistID', 'EventID', 'EventName', 'ArtistID', 'ArtistName', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    EventArtistlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadEventArtists();
    };
    EventArtistlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_eventartistform_eventartistform_component__WEBPACK_IMPORTED_MODULE_2__["EventArtistformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, eventartist: this.eventartist }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadEventArtists();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    EventArtistlistComponent.prototype.loadEventArtists = function () {
        var _this = this;
        this._eventartistService.getAllEventArtist(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'EventArtist/' + 'getAllEventArtist')
            .subscribe(function (states) {
            _this.loadingState = false;
            _this.dataSource.data = states;
        });
    };
    EventArtistlistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    EventArtistlistComponent.prototype.addEventArtist = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New EventArtist';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    EventArtistlistComponent.prototype.editEventArtist = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit EventArtist';
        this.modalBtnTitle = 'Update';
        this.eventartist = this.dataSource.data.filter(function (x) { return x.EventArtistID === id; })[0];
        this.openDialog();
    };
    EventArtistlistComponent.prototype.deleteEventArtist = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.eventartist = this.dataSource.data.filter(function (x) { return x.EventArtistID === id; })[0];
        this.openDialog();
    };
    EventArtistlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    EventArtistlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventartistlist',
            template: __webpack_require__(/*! ./eventartistlist.component.html */ "./src/app/eventartistlist/eventartistlist.component.html"),
            styles: [__webpack_require__(/*! ./eventartistlist.component.css */ "./src/app/eventartistlist/eventartistlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_eventartist_service__WEBPACK_IMPORTED_MODULE_3__["EventArtistService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], EventArtistlistComponent);
    return EventArtistlistComponent;
}());



/***/ }),

/***/ "./src/app/eventbannerform/eventbannerform.component.css":
/*!***************************************************************!*\
  !*** ./src/app/eventbannerform/eventbannerform.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/eventbannerform/eventbannerform.component.html":
/*!****************************************************************!*\
  !*** ./src/app/eventbannerform/eventbannerform.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .my-drop-zone { border: dotted 3px lightgray; }\n  /* Default class applied to drop zones on over */\n  .invalid-drag { border: dotted 3px red; }\n  .valid-drag { border: dotted 3px green; }\n  html, body { height: 100%; }\n  .previewIcon{\n    width:100px;height:100px;\n    background-size:cover;\n    background-repeat:no-repeat;\n  }\n \n  .inline-block{\n    display:inline-block;\n    margin:.2em;\n  }\n</style>\n\n<form  (ngSubmit)=\"onSubmit(eventbannerFrm)\"  [formGroup]=\"eventbannerFrm\">  \n  <h2>{{data.modalTitle}}</h2>  \n    \n  <div>\n    <mat-form-field appearance=\"outline\">  \n        <mat-label>Event</mat-label>  \n      <mat-select placeholder=\"Select a Event\" formControlName=\"EventID\">  \n        <mat-option>-- None --</mat-option>  \n        <mat-option *ngFor=\"let event of events\" [value]=\"event.EventID\">  \n            {{ event.EventStartDate | date: \"dd-MMM-yyyy\" }} - {{ event.EventName }}\n        </mat-option>  \n      </mat-select>  \n      <mat-error *ngIf=\"formErrors.EventID \">  \n        {{ formErrors.EventID }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n  <h1 md-dialog-title>Dialog</h1>\n\n<!-- <div>\n  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\"/>\n\n  <button type=\"button\" class=\"btn btn-success btn-s\" \n    (click)=\"uploader.uploadAll()\" \n    [disabled]=\"!uploader.getNotUploadedItems().length\" >\n        Upload an Image\n  </button>\n\n</div> -->\n<!-- <ng-container>\n  <input type=\"file\" id=\"file\" multiple (change)=\"getFileDetails($event)\">\n\n  <button (click)=\"uploadFiles()\">Upload</button>\n</ng-container> -->\n\n<div ng-controller=\"Ctrl\">\n  <!-- <input type=\"file\" (change)=\"fileChange($event)\" file-upload multiple accept=\".jpg,.jpeg,.png,.bmp\"/> \n  <input style=\"display: none\"  type=\"file\" (change)=\"onFileChanged($event)\" #fileInput> \n  -->\n  <label>Ankur</label>\n  <input type=\"file\" file-upload accept=\".jpg,.jpeg,.png,.bmp\" (change)=\"onFileChanged($event)\" #fileInput/>\n\n  <!--  -->\n \n  <!-- <button (click)=\"fileInput.click()\">Add File</button> -->\n\n\n  <!-- <input type=\"button\" value=\"Add\" (click)=\"addBanner($event)\" /> -->\n  <ul>\n       <!-- <li ng-repeat=\"file in fileList\">{{file.name}}</li>  -->\n       <!-- <li ng-repeat=\"file in fileList\">{{ file.fileName }}</li> -->\n  </ul>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Size</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n  <tr *ngFor=\"let item of files;let i=index\">\n    <td>\n      <div *ngIf=\"['image/gif','image/png','image/jpeg'].indexOf(item.type)>=0\">\n         <div class=\"previewIcon\" ngfBackground=\"item\"></div> \n        <img  ngf-resize=\"{width: 20, height: 20, quality: 0.9}\" ngf-no-object-url=\"false\">\n\n      <div  ngf-size=\"{width: 20, height: 20, quality: 0.9}\" ngf-as-background=\"boolean\"></div>\n      </div>\n      <strong>{{ item.name }}</strong>\n    </td>\n    <td nowrap>\n      {{ item.type }}\n    </td>\n    <td nowrap>\n      {{ item.size/1024/1024 | number:'.2' }} MB\n    </td>\n    <td nowrap>\n      <button type=\"button\"\n        class=\"btn btn-danger btn-xs\"\n        (click)=\"files.splice(i,1)\">\n        <!-- <span class=\"glyphicon glyphicon-trash\"></span> -->\n        <i class=\"fa fa-trash\"></i>\n      </button>\n    </td>\n  </tr>\n</tbody>\n</table>\n</div>\n\n  <div>\n   \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"eventbannerFrm.invalid\">{{data.modalBtnTitle}}</button>  \n  </div>  \n    \n  </form> \n"

/***/ }),

/***/ "./src/app/eventbannerform/eventbannerform.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/eventbannerform/eventbannerform.component.ts ***!
  \**************************************************************/
/*! exports provided: EventBannerformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBannerformComponent", function() { return EventBannerformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_eventbanner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/eventbanner.service */ "./src/app/services/eventbanner.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var URL = _shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + '/EventBanner/addEventBanner';
var EventBannerformComponent = /** @class */ (function () {
    //files = []FileList;
    function EventBannerformComponent(data, fb, _eventService, _eventbannerService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._eventService = _eventService;
        this._eventbannerService = _eventbannerService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        //files: FileList;
        //selectedFile: File;
        //fileList: File[];
        this.events = [];
        //files = [];
        this.eventbanners = [];
        //fileList = [];
        this.files = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'EventID': '',
            'Banner': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'EventID': {
                'maxlength': 'EventID cannot be more than 50 characters long.',
                'required': 'EventID is required.'
            },
            'Banner': {
                'maxlength': 'Banner cannot be more than 50 characters long.',
                'required': 'Banner is required.'
            }
        };
    }
    //public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'}); //KB Upload
    EventBannerformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built event form
        this.eventbannerFrm = this.fb.group({
            EventBannerID: [-1],
            EventID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            Banner: [''],
            UserID: [-1]
        });
        this._eventService.getAllEvent(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'Event/' + 'getAllEvent')
            .subscribe(function (events) {
            _this.events = events;
        });
        //this.files = [];
        // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; }; //Kb Upload
        // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //      console.log('ImageUpload:uploaded:', item, status, response);
        //      alert('File uploaded successfully');
        //  };
        // subscribe on value changed event of form to show validation message
        this.eventbannerFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.eventbannerFrm.reset();
        }
        else {
            this.eventbannerFrm.setValue(this.data.eventbanner);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
    };
    // addBanner(event) {
    //   //eventbanner.Banner = event.target.file;
    //   //eventbanner.EventID=1;
    //   console.log('eventbanner.Banner: ' + event.target.file);
    //   console.log('eventbanner.EventID: 1');
    // }
    EventBannerformComponent.prototype.onFileChanged = function (event) {
        debugger;
        //this.selectedFile = event.target.files[0];
        //let eventbanner: IEventBanner=new IEventBanner();
        //this.fileList.push(event.target.files[0]);
        this.files.push(event.target.files[0]);
        console.log(this.files);
        this.eventbanner.EventID = 1;
        this.eventbanner.Banner = event.target.files[0];
        console.log(this.eventbanner);
        this.eventbanners.push(this.eventbanner);
        console.log('this.eventbanners:   ' + this.eventbanners);
        //console.log('this.selectedFile: ' + event.target.files[0]);
        //console.log('eventbanner.EventID: 1');
        //console.log('this.eventbanner.EventID:1');
        //console.log('this.eventbanner.Banner' + event.target.files[0]);
        //console.log('this.fileList: ' + this.fileList);
        //this.formData
    };
    EventBannerformComponent.prototype.fileChange = function (event) {
        //let fileList: FileList = event.target.files;
        // if(fileList.length > 0) {
        //     let file: File = fileList[0];
        //     let formData:FormData = new FormData();
        //     formData.append('uploadFile', file, file.name);
        //     let headers = new Headers();
        //     /** In Angular 5, including the header Content-Type can invalidate your request */
        //     headers.append('Content-Type', 'multipart/form-data');
        //     headers.append('Accept', 'application/json');
        //     let options = new RequestOptions({ headers: headers });
        //     this.http.post(`${this.apiEndPoint}`, formData, options)
        //         .map(res => res.json())
        //         .catch(error => Observable.throw(error))
        //         .subscribe(
        //             data => console.log('success'),
        //             error => console.log(error)
        //         )
        // }
    };
    // form value change event
    EventBannerformComponent.prototype.onValueChanged = function (data) {
        if (!this.eventbannerFrm) {
            return;
        }
        var form = this.eventbannerFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    EventBannerformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        //const eventData = this.mapDateData(this.mapEventID(formData.value));
        //const eventbannerData = this.mapEventBannerID(formData.value);
        var formData1 = this.mapEventBannerID(formData.value);
        //console.log('eventbannerData.Banner' + eventbannerData.Banner);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                this._eventbannerService.addEventBanner(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'EventBanner/' + 'addEventBanner', 2, this.files).subscribe(
                //this._eventbannerService.addEventBanner(Global.BASE_USER_ENDPOINT + 'EventBanner/' + 'addEventBanner', eventbannerData).subscribe(
                //this._eventbannerService.addEventBanner(Global.BASE_USER_ENDPOINT + 'EventBanner/' + 'addEventBanner', eventbannerData.EventID, this.files).subscribe(  
                function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    EventBannerformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.eventbannerFrm.enable() : this.eventbannerFrm.disable();
    };
    // mapDateData(event: IEvent): IEvent {
    //   event.EventStartDate = new Date(event.EventStartDate).toISOString();
    //   event.EventEndDate = new Date(event.EventEndDate).toISOString();
    //   return event;
    // }
    //mapEventBannerID(eventbanner: IEventBanner): IEventBanner {
    EventBannerformComponent.prototype.mapEventBannerID = function (eventbanner) {
        debugger;
        console.log('in function');
        eventbanner.Banner = this.files; // uploaded files
        //   for (const file of this.files) {
        //     eventbanner.append(name, file, file.name);
        // }
        var formData2 = new FormData();
        formData2.append('eventbanner', JSON.stringify(eventbanner));
        for (var i = 0; i < this.files.length; i++) {
            formData2.append('file' + i, this.files[i]);
        }
        // for (const file of this.files) {
        //     formData2.append(name, file, file.name);
        // }
        //var count = 0;
        //for (let count = 0; count <= this.files.length - 1 ; count++) {
        //  formData2.append('file' + count, this.files[count], this.files[count].name);
        //}
        console.log('eventbanner.Banner' + eventbanner.Banner);
        console.log('eventbanner' + eventbanner);
        console.log('out function');
        if (eventbanner.EventBannerID == null) {
            eventbanner.EventBannerID = -1;
            eventbanner.UserID = 1;
            eventbanner.EventName = '';
        }
        //return eventbanner;
        return formData2;
    };
    EventBannerformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventbannerform',
            template: __webpack_require__(/*! ./eventbannerform.component.html */ "./src/app/eventbannerform/eventbannerform.component.html"),
            styles: [__webpack_require__(/*! ./eventbannerform.component.css */ "./src/app/eventbannerform/eventbannerform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _services_eventbanner_service__WEBPACK_IMPORTED_MODULE_4__["EventBannerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EventBannerformComponent);
    return EventBannerformComponent;
}());



/***/ }),

/***/ "./src/app/eventbannerlist/eventbannerlist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/eventbannerlist/eventbannerlist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .eventbannerlist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.eventbannerlist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/eventbannerlist/eventbannerlist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/eventbannerlist/eventbannerlist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else eventbannerlist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"eventbannerlist\" #eventbannerlist>  \n    <h2 style=\"text-align: center;\">Event Banner List</h2>  \n    <div class=\"eventbannerlist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addEventBanner()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Event Id Column -->  \n        <ng-container matColumnDef=\"EventID\">  \n        <th mat-header-cell *matHeaderCellDef>Event Id </th>  \n        <td mat-cell *matCellDef=\"let element\"> {{element.EventID}} </td>  \n        </ng-container>\n    \n        <!-- Event Name Column -->  \n        <ng-container matColumnDef=\"EventName\">  \n          <th mat-header-cell *matHeaderCellDef> Event Name </th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventName}} </td>  \n        </ng-container>  \n    \n        <!-- Total Banners Column -->  \n        <!-- <ng-container matColumnDef=\"EventName\">  \n          <th mat-header-cell *matHeaderCellDef> Event Name </th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventName}} </td>  \n        </ng-container>   -->\n\n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit12345\" mat-raised-button color=\"primary\" (click)=\"editEventBanner(element.EventID)\">Edit1234</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteEventBanner(element.EventID)\">Delete</button>  \n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n\n    \n\n    </div>  \n  </ng-template> \n"

/***/ }),

/***/ "./src/app/eventbannerlist/eventbannerlist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/eventbannerlist/eventbannerlist.component.ts ***!
  \**************************************************************/
/*! exports provided: EventBannerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBannerlistComponent", function() { return EventBannerlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _eventbannerform_eventbannerform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventbannerform/eventbannerform.component */ "./src/app/eventbannerform/eventbannerform.component.ts");
/* harmony import */ var _services_eventbanner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/eventbanner.service */ "./src/app/services/eventbanner.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventBannerlistComponent = /** @class */ (function () {
    function EventBannerlistComponent(snackBar, _eventbannerService, dialog) {
        this.snackBar = snackBar;
        this._eventbannerService = _eventbannerService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        // displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action'];
        this.displayedColumns = ['EventID', 'EventName', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    EventBannerlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadEventBanners();
    };
    EventBannerlistComponent.prototype.openDialog = function () {
        var _this = this;
        debugger;
        var dialogRef = this.dialog.open(_eventbannerform_eventbannerform_component__WEBPACK_IMPORTED_MODULE_2__["EventBannerformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, event: this.eventbanner }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadEventBanners();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    EventBannerlistComponent.prototype.loadEventBanners = function () {
        var _this = this;
        this._eventbannerService.getAllEventBanner(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'EventBanner/' + 'getAllEventBanner')
            .subscribe(function (eventbanners) {
            _this.loadingState = false;
            _this.dataSource.data = eventbanners;
        });
    };
    EventBannerlistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    EventBannerlistComponent.prototype.addEventBanner = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Event Banner';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    EventBannerlistComponent.prototype.editEventBanner = function (id) {
        debugger;
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit Event Banner';
        this.modalBtnTitle = 'Update';
        this.eventbanner = this.dataSource.data.filter(function (x) { return x.EventID === id; })[0];
        this.openDialog();
    };
    EventBannerlistComponent.prototype.deleteEventBanner = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.eventbanner = this.dataSource.data.filter(function (x) { return x.EventID === id; })[0];
        this.openDialog();
    };
    EventBannerlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    EventBannerlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventbannerlist',
            template: __webpack_require__(/*! ./eventbannerlist.component.html */ "./src/app/eventbannerlist/eventbannerlist.component.html"),
            styles: [__webpack_require__(/*! ./eventbannerlist.component.css */ "./src/app/eventbannerlist/eventbannerlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_eventbanner_service__WEBPACK_IMPORTED_MODULE_3__["EventBannerService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], EventBannerlistComponent);
    return EventBannerlistComponent;
}());



/***/ }),

/***/ "./src/app/eventform/eventform.component.css":
/*!***************************************************!*\
  !*** ./src/app/eventform/eventform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/eventform/eventform.component.html":
/*!****************************************************!*\
  !*** ./src/app/eventform/eventform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(eventFrm)\"  [formGroup]=\"eventFrm\">  \n  <h2>{{data.modalTitle}}</h2>  \n    \n  <div>  \n      <mat-form-field appearance=\"outline\">  \n      <mat-label>Event Name</mat-label>  \n      <input matInput placeholder=\"Event Name\" formControlName=\"EventName\">  \n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n      <!-- <mat-hint>Hint</mat-hint> -->  \n      <mat-error *ngIf=\"formErrors.EventName\">  \n        {{ formErrors.EventName }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>  \n  <div>  \n    <mat-form-field appearance=\"outline\">  \n      <mat-label>Event Description</mat-label>  \n      <!-- <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">   -->\n      <input matInput placeholder=\"Event Description\" formControlName=\"EventDescription\">\n      <mat-error *ngIf=\"formErrors.EventDescription\">  \n        {{ formErrors.EventDescription }}  \n      </mat-error>  \n    </mat-form-field>  \n    \n  </div> \n  <div>  \n    <mat-form-field appearance=\"outline\">  \n      <mat-label>Event Address</mat-label>  \n      <!-- <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">   -->\n      <input matInput placeholder=\"Event Address\" formControlName=\"EventAddress\">\n      <mat-error *ngIf=\"formErrors.EventAddress\">  \n        {{ formErrors.EventAddress }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>  \n  <!-- <p>  \n      <mat-radio-group class=\"contact-radio-group\" formControlName=\"gender\" >  \n        <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let gndr of genders\" [value]=\"gndr.id\">  \n          {{ gndr.name }}  \n        </mat-radio-button>  \n      </mat-radio-group>  \n      <mat-error *ngIf=\"formErrors.gender\">  \n        {{ formErrors.gender }}  \n      </mat-error>  \n  </p>   -->\n  <div>  \n    <mat-form-field appearance=\"outline\">  \n        <mat-label>Start Date</mat-label>\n      <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose start date\" formControlName=\"EventStartDate\">  \n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>  \n      <mat-datepicker #picker1></mat-datepicker>  \n      \n    <mat-error *ngIf=\"formErrors.EventStartDate \">  \n      {{ formErrors.EventStartDate }}  \n    </mat-error>  \n    </mat-form-field>  \n  </div>  \n\n      <div>  \n          <mat-form-field appearance=\"outline\">  \n              <mat-label>End Date</mat-label>  \n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose end date\" formControlName=\"EventEndDate\">  \n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>  \n            <mat-datepicker #picker2></mat-datepicker>  \n            \n          <mat-error *ngIf=\"formErrors.EventEndDate \">  \n            {{ formErrors.EventEndDate }}  \n          </mat-error>  \n          </mat-form-field>  \n        </div>  \n\n        <div>  \n          <mat-form-field appearance=\"outline\">  \n            <mat-label>Start Time</mat-label>  \n            <!-- <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">   -->\n            <input matInput placeholder=\"Start Time\" formControlName=\"EventStartTime\">\n            \n            <mat-error *ngIf=\"formErrors.EventStartTime\">  \n              {{ formErrors.EventStartTime}}  \n            </mat-error>  \n          </mat-form-field>  \n        </div> \n\n        <div>  \n          <mat-form-field appearance=\"outline\">  \n            <mat-label>End Time</mat-label>  \n            <!-- <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">   -->\n            <input matInput placeholder=\"End Time\" formControlName=\"EventEndTime\">\n            <!-- <mat-error *ngIf=\"formErrors.EventEndTime\">  \n              {{ formErrors.EventEndTime }}  \n            </mat-error>   -->\n          </mat-form-field>  \n        </div> \n\n        <!-- <div>  \n            <mat-label>Occurence Type</mat-label>  \n          <mat-radio-group class=\"contact-radio-group\" formControlName=\"EventOccurence\" >  \n            <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let option of OccurenceOptions\" [value]=\"option.value\">  \n              {{ option.name }}  \n            </mat-radio-button>  \n          </mat-radio-group>  \n          <mat-error *ngIf=\"formErrors.EventOccurence\">  \n            {{ formErrors.EventOccurence }}  \n          </mat-error>  \n        </div>  -->\n\n\n        <div>\n            <mat-form-field appearance=\"outline\">  \n                <mat-label>Occurence Type</mat-label> \n              <mat-select placeholder=\"Select Occurence Type\" formControlName=\"EventOccurence\">  \n                <mat-option>-- None --</mat-option>  \n                <mat-option *ngFor=\"let option  of OccurenceOptions\" [value]=\"option.value\">  \n                    {{ option.name }}  \n                </mat-option>  \n              </mat-select>  \n              <mat-error *ngIf=\"formErrors.EventOccurence \">  \n                {{ formErrors.EventOccurence }}  \n              </mat-error>  \n            </mat-form-field>  \n          </div>\n\n\n\n\n\n\n        <div>  \n          <mat-form-field appearance=\"outline\">  \n            <mat-label>Venue Latitude</mat-label>  \n            <!-- <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">   -->\n            <input matInput placeholder=\"Venue Latitude\" formControlName=\"EventVenueLatitude\">\n            <!-- <mat-error *ngIf=\"formErrors.EventVenueLatitude\">  \n              {{ formErrors.EventVenueLatitude }}  \n            </mat-error>   -->\n          </mat-form-field>  \n        </div> \n\n        <div>  \n          <mat-form-field appearance=\"outline\">  \n            <mat-label>Venue Longitude</mat-label>  \n            <!-- <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">   -->\n            <input matInput placeholder=\"Event Venue Longitude\" formControlName=\"EventVenueLongitude\">\n            <!-- <mat-error *ngIf=\"formErrors.EventVenueLongitude\">  \n              {{ formErrors.EventVenueLongitude }}  \n            </mat-error>   -->\n          </mat-form-field>  \n        </div> \n\n\n\n        <div>\n          <mat-form-field appearance=\"outline\">  \n              <mat-label>Country</mat-label> \n            <mat-select placeholder=\"Select a Country\" formControlName=\"CountryID\">  \n              <mat-option>-- None --</mat-option>  \n              <mat-option *ngFor=\"let country  of countries\" [value]=\"country.CountryID\">  \n                {{ country.CountryName }}  \n              </mat-option>  \n            </mat-select>  \n            <mat-error *ngIf=\"formErrors.CountryID \">  \n              {{ formErrors.CountryID }}  \n            </mat-error>  \n          </mat-form-field>  \n        </div>\n\n\n\n        <div>\n          <mat-form-field appearance=\"outline\">  \n              <mat-label>State</mat-label> \n            <mat-select placeholder=\"Select a State\" formControlName=\"StateID\">  \n              <mat-option>-- None --</mat-option>  \n              <mat-option *ngFor=\"let state of states\" [value]=\"state.StateID\">  \n                {{ state.StateName }}  \n              </mat-option>  \n            </mat-select>  \n            <mat-error *ngIf=\"formErrors.StateID \">  \n              {{ formErrors.StateID }}  \n            </mat-error>  \n          </mat-form-field>  \n        </div>\n\n\n        <div>\n          <mat-form-field appearance=\"outline\">  \n              <mat-label>City</mat-label> \n            <mat-select placeholder=\"Select a City\" formControlName=\"CityID\">  \n              <mat-option>-- None --</mat-option>  \n              <mat-option *ngFor=\"let city of cities\" [value]=\"city.CityID\">  \n                {{ city.CityName }}  \n              </mat-option>  \n            </mat-select>  \n            <mat-error *ngIf=\"formErrors.CityID \">  \n              {{ formErrors.CityID }}  \n            </mat-error>  \n          </mat-form-field>  \n        </div>\n        \n   \n\n        <div>\n          <mat-form-field appearance=\"outline\">  \n              <mat-label>Area</mat-label> \n            <mat-select placeholder=\"Select a Area\" formControlName=\"AreaID\">  \n              <mat-option>-- None --</mat-option>  \n              <mat-option *ngFor=\"let area of areas\" [value]=\"area.AreaID\">  \n                {{ area.AreaName }}  \n              </mat-option>  \n            </mat-select>  \n            <mat-error *ngIf=\"formErrors.AreaID \">  \n              {{ formErrors.AreaID }}  \n            </mat-error>  \n          </mat-form-field>  \n        </div>\n \n\n\n        <!-- <div>  \n          <mat-form-field appearance=\"outline\">  \n            <mat-label>AreaID</mat-label>  \n            <input matInput placeholder=\"AreaID\" formControlName=\"AreaID\">\n            <mat-error *ngIf=\"formErrors.AreaID\">  \n              {{ formErrors.AreaID }}  \n            </mat-error>  \n          </mat-form-field>  \n        </div> -->\n\n        <!-- <div>  \n          <mat-form-field appearance=\"outline\">  \n            <mat-label>IsActive</mat-label>  \n            \n            <input matInput placeholder=\"IsActive\" formControlName=\"IsActive\">\n            <mat-error *ngIf=\"formErrors.IsActive\">  \n              {{ formErrors.IsActive }}  \n            </mat-error>  \n          </mat-form-field>  \n        </div> -->\n\n        <div>  \n            <mat-label>Active</mat-label>  \n          <mat-radio-group class=\"contact-radio-group\" formControlName=\"IsActive\">  \n            <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let option of YesNoOptions\" [value]=\"option.id\" [checked]=\"option.id === 1\">  \n              {{ option.name }}  \n            </mat-radio-button>  \n          </mat-radio-group>  \n          <mat-error *ngIf=\"formErrors.IsActive\">  \n            {{ formErrors.IsActive }}  \n          </mat-error>  \n        </div> \n       \n<!-- <div>\n    <mat-form-field appearance=\"outline\">  \n      <mat-select placeholder=\"Select a Technology\" formControlName=\"techno\">  \n        <mat-option>-- None --</mat-option>  \n        <mat-option *ngFor=\"let techno  of technologies\" [value]=\"techno\">  \n          {{ techno }}  \n        </mat-option>  \n      </mat-select>  \n      <mat-error *ngIf=\"formErrors.techno \">  \n        {{ formErrors.techno }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>   -->\n  <!-- <div>  \n    <mat-form-field appearance=\"outline\">  \n      <textarea matInput placeholder=\"Message...\" formControlName=\"message\"></textarea>  \n      <mat-error *ngIf=\"formErrors.message \">  \n        {{ formErrors.message }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>   -->\n  <div>  \n    \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"eventFrm.invalid\">{{data.modalBtnTitle}}</button>  \n  </div>  \n    \n  </form> "

/***/ }),

/***/ "./src/app/eventform/eventform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/eventform/eventform.component.ts ***!
  \**************************************************/
/*! exports provided: EventformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventformComponent", function() { return EventformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var EventformComponent = /** @class */ (function () {
    function EventformComponent(data, fb, _eventService, _countryService, _stateService, _cityService, _areaService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._eventService = _eventService;
        this._countryService = _countryService;
        this._stateService = _stateService;
        this._cityService = _cityService;
        this._areaService = _areaService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        this.genders = [];
        this.technologies = [];
        this.YesNoOptions = [];
        this.OccurenceOptions = [];
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.areas = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'EventName': '',
            'EventDescription': '',
            'EventAddress': '',
            'EventStartDate': '',
            'EventEndDate': '',
            'EventStartTime': '',
            'EventOccurence': '',
            // 'EventEndTime': '',
            // 'EventVenueLatitude': '',
            // 'EventVenueLongitude': '',
            'CountryID': '',
            'StateID': '',
            'CityID': '',
            'AreaID': '',
            'IsActive': ''
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'EventName': {
                'maxlength': 'eventname cannot be more than 50 characters long.',
                'required': 'eventname is required.'
            },
            'EventDescription': {
                'maxlength': 'eventdescription cannot be more than 50 characters long.',
                'required': 'eventdescription is required.'
            },
            'EventAddress': {
                'maxlength': 'EventAddress cannot be more than 50 characters long.',
                'required': 'EventAddress is required.'
            },
            // 'email': {
            //   'email': 'Invalid email format.',
            //   'required': 'Email is required.'
            // },
            // 'gender': {
            //   'required': 'Gender is required.'
            // },
            // 'techno': {
            //   'required': 'Technology is required.'
            // },
            'EventStartDate': {
                'required': 'eventstartdate is required.'
            },
            'EventEndDate': {
                'required': 'Event End Date is required.'
            },
            'EventStartTime': {
                'required': 'Event Start Time is required.'
            },
            'EventOccurence': {
                'required': 'Event Occurence is required.'
            },
            // 'EventEndTime': {
            //   'required': 'Event End Time is required.'
            // },
            // 'EventVenueLatitude': {
            //   'required': 'Event Venue Latitude is required.'
            // },
            // 'EventVenueLongitude': {
            //   'required': 'Event Venue Longitude is required.'
            // },
            'CountryID': {
                'required': 'Country is required.'
            },
            'StateID': {
                'required': 'State is required.'
            },
            'CityID': {
                'required': 'City is required.'
            },
            'AreaID': {
                'required': 'Area is required.'
            },
            'IsActive': {
                'required': 'IsActive is required.'
            }
        };
    }
    EventformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built event form
        this.eventFrm = this.fb.group({
            EventID: [-1],
            EventName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            EventDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]],
            EventAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            // email: ['', [Validators.required, Validators.email]],
            // gender: ['', [Validators.required]],
            EventStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EventEndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EventStartTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EventEndTime: [''],
            EventOccurence: [''],
            EventVenueLatitude: [''],
            EventVenueLongitude: [''],
            CountryID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            StateID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            CityID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            AreaID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            IsActive: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            CountryName: [''],
            StateName: [''],
            CityName: [''],
            AreaName: [''],
            UserID: [-1]
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        // this.countries = Global.countries;
        this.YesNoOptions = _shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].YesNoOptions;
        this.OccurenceOptions = _shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].EventOccurenceTypeOptions;
        // var aaaaa = this._countryService.getAllCountry(Global.BASE_USER_ENDPOINT + 'getAllCountry');
        // console.log(this._countryService.getAllCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry'));
        // loadCountriesddl():void{ this._countryService.getAllCountry(Global.BASE_USER_ENDPOINT + 'getAllCountry')
        // .subscribe(countries => {this.countries = countries;})}; // KB
        //   loadCountriesDDL(): void {
        this._countryService.getAllCountry(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
            .subscribe(function (countries) {
            _this.countries = countries;
        });
        //  };
        this._stateService.getAllState(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'State/' + 'getAllState')
            .subscribe(function (states) {
            _this.states = states;
        });
        this._cityService.getAllCity(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'City/' + 'getAllCity')
            .subscribe(function (cities) {
            _this.cities = cities;
        });
        this._areaService.getAllArea(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Area/' + 'getAllArea')
            .subscribe(function (areas) {
            _this.areas = areas;
        });
        // subscribe on value changed event of form to show validation message
        this.eventFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].create) {
            this.eventFrm.reset();
        }
        else {
            this.eventFrm.setValue(this.data.event);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].delete ? false : true);
    };
    // form value change event
    EventformComponent.prototype.onValueChanged = function (data) {
        if (!this.eventFrm) {
            return;
        }
        var form = this.eventFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    EventformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        //const eventData = this.mapDateData(this.mapEventID(formData.value));
        var eventData = this.mapEventID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].create:
                this._eventService.addEvent(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Event/' + 'addEvent', eventData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].update:
                this._eventService.updateEvent(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Event/' + 'updateEvent', eventData.EventID, eventData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_8__["DBOperation"].delete:
                this._eventService.deleteEvent(_shared_Global__WEBPACK_IMPORTED_MODULE_9__["Global"].BASE_USER_ENDPOINT + 'Event/' + 'deleteEvent', eventData.EventID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    EventformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.eventFrm.enable() : this.eventFrm.disable();
    };
    // mapDateData(event: IEvent): IEvent {
    //   event.EventStartDate = new Date(event.EventStartDate).toISOString();
    //   event.EventEndDate = new Date(event.EventEndDate).toISOString();
    //   return event;
    // }
    EventformComponent.prototype.mapEventID = function (event) {
        if (event.EventStartDate != null) {
            //event.EventStartDate = new Date(event.EventStartDate).toISOString();
            var sd = new Date(event.EventStartDate);
            var startdate = Date.UTC(sd.getFullYear(), sd.getMonth(), sd.getDate());
            event.EventStartDate = new Date(startdate);
        }
        if (event.EventEndDate != null) {
            //event.EventEndDate = new Date(event.EventEndDate).toISOString();
            var ed = new Date(event.EventEndDate);
            var enddate = Date.UTC(ed.getFullYear(), ed.getMonth(), ed.getDate());
            event.EventEndDate = new Date(enddate);
        }
        if (event.EventID == null) {
            event.EventID = -1;
            event.UserID = 1;
            event.CountryName = '';
            event.StateName = '';
            event.CityName = '';
            event.AreaName = '';
        }
        return event;
    };
    EventformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventform',
            template: __webpack_require__(/*! ./eventform.component.html */ "./src/app/eventform/eventform.component.html"),
            styles: [__webpack_require__(/*! ./eventform.component.css */ "./src/app/eventform/eventform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"],
            _services_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EventformComponent);
    return EventformComponent;
}());



/***/ }),

/***/ "./src/app/eventlist/eventlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/eventlist/eventlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .eventlist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.eventlist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/eventlist/eventlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/eventlist/eventlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else eventlist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"eventlist\" #eventlist>  \n    <h2 style=\"text-align: center;\">Event List</h2>  \n    <div class=\"eventlist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addEvent()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Id Column -->  \n        <ng-container matColumnDef=\"EventID\">  \n        <th mat-header-cell *matHeaderCellDef>Event Id </th>  \n        <td mat-cell *matCellDef=\"let element\"> {{element.EventID}} </td>  \n        </ng-container>\n    \n        <!-- Event Name Column -->  \n        <ng-container matColumnDef=\"EventName\">  \n          <th mat-header-cell *matHeaderCellDef> Event Name </th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventName}} </td>  \n        </ng-container>  \n    \n        Event Description Column  \n        <ng-container matColumnDef=\"EventDescription\">  \n          <th mat-header-cell *matHeaderCellDef> Event Description </th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventDescription}} </td>  \n        </ng-container>  \n    \n        <!-- Event Address Column -->  \n        <!-- <ng-container matColumnDef=\"EventAddress\">  \n          <th mat-header-cell *matHeaderCellDef> Event Address </th>  \n          \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventAddress}} </td>  \n        </ng-container>   -->\n    \n        <!-- Event Start Date Column -->  \n        <ng-container matColumnDef=\"EventStartDate\">  \n          <th mat-header-cell *matHeaderCellDef> Start Date </th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventStartDate | date: 'MM-dd-yyyy' }} </td>  \n        </ng-container>  \n\n        <!-- Event End Date Column -->  \n        <ng-container matColumnDef=\"EventEndDate\">  \n          <th mat-header-cell *matHeaderCellDef> End Date </th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.EventEndDate | date: 'MM-dd-yyyy' }} </td>  \n        </ng-container>  \n\n        <!-- Event Start Time Column -->  \n        <ng-container matColumnDef=\"EventStartTime\">  \n          <th mat-header-cell *matHeaderCellDef>Event Start Time</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.EventStartTime}} </td>  \n        </ng-container>  \n\n        <!-- Event End Time Column -->  \n        <ng-container matColumnDef=\"EventEndTime\">  \n          <th mat-header-cell *matHeaderCellDef>Event End Time</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.EventEndTime}} </td>  \n        </ng-container>  \n\n        \n\n        <ng-container matColumnDef=\"CountryID\">  \n          <th mat-header-cell *matHeaderCellDef>Country ID</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.CountryID}} </td>  \n        </ng-container>  \n\n        <ng-container matColumnDef=\"CountryName\">  \n          <th mat-header-cell *matHeaderCellDef>Country Name</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.CountryName}} </td>  \n        </ng-container>  \n\n        \n        <ng-container matColumnDef=\"StateID\">  \n          <th mat-header-cell *matHeaderCellDef>State ID</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.StateID}} </td>  \n        </ng-container>  \n\n        <ng-container matColumnDef=\"StateName\">  \n          <th mat-header-cell *matHeaderCellDef>State Name</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.StateName}} </td>  \n        </ng-container>  \n\n        \n        <ng-container matColumnDef=\"CityID\">  \n          <th mat-header-cell *matHeaderCellDef>City ID</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.CityID}} </td>  \n        </ng-container>  \n\n        <ng-container matColumnDef=\"CityName\">  \n          <th mat-header-cell *matHeaderCellDef>City Name</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.CityName}} </td>  \n        </ng-container>  \n\n        <ng-container matColumnDef=\"AreaID\">  \n          <th mat-header-cell *matHeaderCellDef>Area ID</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.AreaID}} </td>  \n        </ng-container>  \n\n        <ng-container matColumnDef=\"AreaName\">  \n          <th mat-header-cell *matHeaderCellDef>Area Name</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.AreaName}} </td>  \n        </ng-container>  \n\n        <ng-container matColumnDef=\"IsActive\">  \n          <th mat-header-cell *matHeaderCellDef>Is Active</th>  \n          <!-- <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>   -->\n          <td mat-cell *matCellDef=\"let element\"> {{element.IsActive}} </td>  \n        </ng-container>  \n    \n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editEvent(element.EventID)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteEvent(element.EventID)\">Delete</button>  \n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n\n    \n\n    </div>  \n  </ng-template> "

/***/ }),

/***/ "./src/app/eventlist/eventlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/eventlist/eventlist.component.ts ***!
  \**************************************************/
/*! exports provided: EventlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventlistComponent", function() { return EventlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _eventform_eventform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventform/eventform.component */ "./src/app/eventform/eventform.component.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventlistComponent = /** @class */ (function () {
    function EventlistComponent(snackBar, _eventService, dialog) {
        this.snackBar = snackBar;
        this._eventService = _eventService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        // displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action'];
        this.displayedColumns = ['EventID', 'EventName', 'EventStartDate', 'EventEndDate', 'CountryID', 'CountryName', 'StateID', 'StateName', 'CityID', 'CityName', 'AreaID', 'AreaName', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    EventlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadEvents();
    };
    EventlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_eventform_eventform_component__WEBPACK_IMPORTED_MODULE_2__["EventformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, event: this.event }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadEvents();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    EventlistComponent.prototype.loadEvents = function () {
        var _this = this;
        this._eventService.getAllEvent(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'Event/' + 'getAllEvent')
            .subscribe(function (events) {
            _this.loadingState = false;
            _this.dataSource.data = events;
        });
    };
    EventlistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    EventlistComponent.prototype.addEvent = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Event';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    EventlistComponent.prototype.editEvent = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit Event';
        this.modalBtnTitle = 'Update';
        this.event = this.dataSource.data.filter(function (x) { return x.EventID === id; })[0];
        this.openDialog();
    };
    EventlistComponent.prototype.deleteEvent = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.event = this.dataSource.data.filter(function (x) { return x.EventID === id; })[0];
        this.openDialog();
    };
    EventlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    EventlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventlist',
            template: __webpack_require__(/*! ./eventlist.component.html */ "./src/app/eventlist/eventlist.component.html"),
            styles: [__webpack_require__(/*! ./eventlist.component.css */ "./src/app/eventlist/eventlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], EventlistComponent);
    return EventlistComponent;
}());



/***/ }),

/***/ "./src/app/eventorganizerform/eventorganizerform.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/eventorganizerform/eventorganizerform.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/eventorganizerform/eventorganizerform.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/eventorganizerform/eventorganizerform.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(eventOrganizerFrm)\" [formGroup]=\"eventOrganizerFrm\">  \n  <h2>{{data.modalTitle}}</h2>  \n    \n\n  <div>\n    <mat-form-field appearance=\"outline\">  \n        <mat-label>Event</mat-label>  \n      <mat-select placeholder=\"Select a Event\" formControlName=\"EventID\">  \n        <mat-option>-- None --</mat-option>  \n        <mat-option *ngFor=\"let event of events\" [value]=\"event.EventID\">  \n            {{ event.EventStartDate | date: \"dd-MMM-yyyy\" }} - {{ event.EventName }}\n        </mat-option>  \n      </mat-select>  \n      <mat-error *ngIf=\"formErrors.EventID \">  \n        {{ formErrors.EventID }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n\n\n  <!-- multiple -->\n\n  <!-- <div>\n    <mat-form-field appearance=\"outline\">  \n      <mat-select placeholder=\"Select a Organizer\" formControlName=\"EntityList\">  \n        <mat-option>-- None --</mat-option>  \n        <mat-option *ngFor=\"let entity of entities\" [value]=\"entity.EntityID\">  \n          {{ entity.Name }}  \n        </mat-option>  \n      </mat-select>  \n      <mat-error *ngIf=\"formErrors.EntityList\">  \n        {{ formErrors.EntityList }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div> -->\n<div>\n  <mat-form-field appearance=\"outline\">  \n      <mat-label>Organizer(s)</mat-label>  \n    <mat-select placeholder=\"Select a Organizer\" formControlName=\"EntityIDs\" multiple>  \n      <mat-option>-- None --</mat-option>  \n      <mat-option *ngFor=\"let entity of entities\" [value]=\"entity.EntityID\">  \n        {{ entity.Name }}  \n      </mat-option>  \n    </mat-select>  \n    <mat-error *ngIf=\"formErrors.EntityIDs\">  \n      {{ formErrors.EntityIDs }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label> Name</mat-label>  \n  <input matInput placeholder=\"EventName\" formControlName=\"EventName\">  \n  <mat-error *ngIf=\"formErrors.EventName\">  \n    {{ formErrors.EventName }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label> Name</mat-label>  \n  <input matInput placeholder=\"CreatedBy\" formControlName=\"CreatedBy\">  \n  \n  <mat-error *ngIf=\"formErrors.CreatedBy\">  \n    {{ formErrors.CreatedBy }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label> Name</mat-label>  \n  <input matInput placeholder=\"UpdatedBy\" formControlName=\"UpdatedBy\">  \n  <mat-error *ngIf=\"formErrors.UpdatedBy\">  \n    {{ formErrors.UpdatedBy }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label> Name</mat-label>  \n  <input matInput placeholder=\"CreatedOn\" formControlName=\"CreatedOn\">  \n  <mat-error *ngIf=\"formErrors.CreatedOn\">  \n    {{ formErrors.CreatedOn }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label> Name</mat-label>  \n  <input matInput placeholder=\"UpdatedOn\" formControlName=\"UpdatedOn\">  \n  <mat-error *ngIf=\"formErrors.UpdatedOn\">  \n    {{ formErrors.UpdatedOn }}  \n  </mat-error>  \n</mat-form-field>  \n</div> -->\n  \n  <div>  \n    \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"eventOrganizerFrm.invalid\">{{data.modalBtnTitle}}</button>  \n  </div>  \n    \n  </form> "

/***/ }),

/***/ "./src/app/eventorganizerform/eventorganizerform.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/eventorganizerform/eventorganizerform.component.ts ***!
  \********************************************************************/
/*! exports provided: EventOrganizerformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventOrganizerformComponent", function() { return EventOrganizerformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _services_eventorganizer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/eventorganizer.service */ "./src/app/services/eventorganizer.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var EventOrganizerformComponent = /** @class */ (function () {
    function EventOrganizerformComponent(data, fb, _eventOrganizerService, _eventService, _entityService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._eventOrganizerService = _eventOrganizerService;
        this._eventService = _eventService;
        this._entityService = _entityService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // genders = [];
        // technologies = [];
        this.events = [];
        this.entities = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'EventID': '',
            'EntityIDs': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'EventID': {
                'maxlength': 'EventID cannot be more than 50 characters long.',
                'required': 'EventID is required.'
            },
            'EntityIDs': {
                'maxlength': 'EntityIDs cannot be more than 50 characters long.',
                'required': 'EntityIDs is required.'
            },
        };
    }
    EventOrganizerformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built state form
        this.eventOrganizerFrm = this.fb.group({
            EventOrganizerID: [-1],
            // AreaName: ['', [Validators.required, Validators.maxLength(250)]],
            EventID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EntityIDs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EntityList: [''],
            EventName: [''],
            UserID: [-1],
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        this._eventService.getAllEvent(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'Event/' + 'getAllEvent')
            .subscribe(function (events) {
            _this.events = events;
        });
        this._entityService.getAllEntity(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'Entity/' + 'getAllEntity')
            .subscribe(function (entities) {
            _this.entities = entities;
        });
        // subscribe on value changed event of form to show validation message
        this.eventOrganizerFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].create) {
            this.eventOrganizerFrm.reset();
        }
        else {
            //console.log('hi');
            //console.log(this.data.eventOrganizer);
            //console.log(this.data.eventorganizer);
            // console.log(eventOrganizer);
            this.eventOrganizerFrm.setValue(this.data.eventorganizer);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].delete ? false : true);
    };
    // form value change event
    EventOrganizerformComponent.prototype.onValueChanged = function (data) {
        if (!this.eventOrganizerFrm) {
            return;
        }
        var form = this.eventOrganizerFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    EventOrganizerformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var eventOrganizerData = this.mapEventOrganizerID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].create:
                this._eventOrganizerService.addEventOrganizer(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'EventOrganizer/' + 'addEventOrganizer', eventOrganizerData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].update:
                this._eventOrganizerService.updateEventOrganizer(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'EventOrganizer/' + 'updateEventOrganizer', eventOrganizerData.EventOrganizerID, eventOrganizerData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_6__["DBOperation"].delete:
                this._eventOrganizerService.deleteEventOrganizer(_shared_Global__WEBPACK_IMPORTED_MODULE_7__["Global"].BASE_USER_ENDPOINT + 'EventOrganizer/' + 'deleteEventOrganizer', eventOrganizerData.EventOrganizerID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    EventOrganizerformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.eventOrganizerFrm.enable() : this.eventOrganizerFrm.disable();
    };
    EventOrganizerformComponent.prototype.mapEventOrganizerID = function (eventOrganizer) {
        if (eventOrganizer == null || eventOrganizer.EventOrganizerID == null) {
            eventOrganizer.EventOrganizerID = -1;
            eventOrganizer.UserID = 1;
        }
        return eventOrganizer;
    };
    EventOrganizerformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventorganizerform',
            template: __webpack_require__(/*! ./eventorganizerform.component.html */ "./src/app/eventorganizerform/eventorganizerform.component.html"),
            styles: [__webpack_require__(/*! ./eventorganizerform.component.css */ "./src/app/eventorganizerform/eventorganizerform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_eventorganizer_service__WEBPACK_IMPORTED_MODULE_5__["EventOrganizerService"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EventOrganizerformComponent);
    return EventOrganizerformComponent;
}());



/***/ }),

/***/ "./src/app/eventorganizerlist/eventorganizerlist.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/eventorganizerlist/eventorganizerlist.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .arealist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.eventorganizerlist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/eventorganizerlist/eventorganizerlist.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/eventorganizerlist/eventorganizerlist.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else eventorganizerlist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"eventorganizerlist\" #eventorganizerlist>  \n    <h2 style=\"text-align: center;\">Event Organizer List</h2>  \n    <div class=\"eventorganizerlist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addEventOrganizer()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Id Column -->  \n        <ng-container matColumnDef=\"EventID\">  \n        <th mat-header-cell *matHeaderCellDef>Event Id </th>  \n        <td mat-cell *matCellDef=\"let element\">{{element.EventID}} </td>  \n        </ng-container>\n    \n        <!-- Area Name Column -->  \n        <!-- <ng-container matColumnDef=\"AreaName\">  \n          <th mat-header-cell *matHeaderCellDef>Area Name</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.AreaName}} </td>  \n        </ng-container> -->\n        \n        <!-- Event Name Column -->  \n        <ng-container matColumnDef=\"EventName\">  \n          <th mat-header-cell *matHeaderCellDef>Event Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.EventName}} </td>  \n          </ng-container>\n\n          <ng-container matColumnDef=\"EntityList\">  \n            <th mat-header-cell *matHeaderCellDef>Organizers</th>  \n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngFor=\"let item of element.EntityList\">\n                  {{item.Name}},\n              </span>\n\n            </td>  \n            </ng-container>\n    \n      \n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editEventOrganizer(element.EventOrganizerID)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteEventOrganizer(element.EventOrganizerID)\">Delete</button>  \n            <!-- <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editCity(1)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteCity(1)\">Delete</button>   -->\n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n      </div>  \n  </ng-template> "

/***/ }),

/***/ "./src/app/eventorganizerlist/eventorganizerlist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/eventorganizerlist/eventorganizerlist.component.ts ***!
  \********************************************************************/
/*! exports provided: EventOrganizerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventOrganizerlistComponent", function() { return EventOrganizerlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _eventorganizerform_eventorganizerform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventorganizerform/eventorganizerform.component */ "./src/app/eventorganizerform/eventorganizerform.component.ts");
/* harmony import */ var _services_eventorganizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/eventorganizer.service */ "./src/app/services/eventorganizer.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventOrganizerlistComponent = /** @class */ (function () {
    function EventOrganizerlistComponent(snackBar, _eventOrganizerService, dialog) {
        this.snackBar = snackBar;
        this._eventOrganizerService = _eventOrganizerService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['EventID', 'EventName', 'EntityList', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    EventOrganizerlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadEventOrganizers();
    };
    EventOrganizerlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_eventorganizerform_eventorganizerform_component__WEBPACK_IMPORTED_MODULE_2__["EventOrganizerformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, eventorganizer: this.eventorganizer }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadEventOrganizers();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    EventOrganizerlistComponent.prototype.loadEventOrganizers = function () {
        var _this = this;
        this._eventOrganizerService.getAllEventOrganizer(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'EventOrganizer/' + 'getAllEventOrganizer')
            .subscribe(function (eventorganizers) {
            _this.loadingState = false;
            _this.dataSource.data = eventorganizers;
        });
    };
    EventOrganizerlistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    EventOrganizerlistComponent.prototype.addEventOrganizer = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Event Organizer';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    EventOrganizerlistComponent.prototype.editEventOrganizer = function (id) {
        //console.log('id:' + id);
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit Event Organizer';
        this.modalBtnTitle = 'Update';
        this.eventorganizer = this.dataSource.data.filter(function (x) { return x.EventID === id; })[0];
        //console.log('this.eventorganizer');
        //console.log(this.eventorganizer);
        this.openDialog();
    };
    EventOrganizerlistComponent.prototype.deleteEventOrganizer = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.eventorganizer = this.dataSource.data.filter(function (x) { return x.EventID === id; })[0];
        this.openDialog();
    };
    EventOrganizerlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    EventOrganizerlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventorganizerlist',
            template: __webpack_require__(/*! ./eventorganizerlist.component.html */ "./src/app/eventorganizerlist/eventorganizerlist.component.html"),
            styles: [__webpack_require__(/*! ./eventorganizerlist.component.css */ "./src/app/eventorganizerlist/eventorganizerlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_eventorganizer_service__WEBPACK_IMPORTED_MODULE_3__["EventOrganizerService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], EventOrganizerlistComponent);
    return EventOrganizerlistComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Hi {{currentUser.firstName}}!</h1> -->\r\n<p>You're logged in with Angular 6!!</p>\r\n<!-- <h3>All registered users:</h3>\r\n<ul>\r\n    <li *ngFor=\"let user of users\">\r\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\r\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\r\n    </li>\r\n</ul> -->\r\n<p><a [routerLink]=\"['/login']\">Logout</a></p>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { User } from '../model/user';
//import { UserService } from '../services/user.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    //currentUser: User;
    //users: User[] = [];
    //constructor() {
    //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //}
    //  constructor(private userService: UserService) {
    //      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //  }
    HomeComponent.prototype.ngOnInit = function () {
        //this.loadAllUsers();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm)\">\r\n    <!-- <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && username.errors }\" />\r\n        <div *ngIf=\"submitted && this.loginForm.controls.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"username.errors.required\">Username is required</div>\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n    <div>  \r\n        <mat-form-field appearance=\"outline\">  \r\n        <mat-label>username</mat-label>  \r\n        <input matInput placeholder=\"usename\" formControlName=\"username\">  \r\n        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \r\n        <!-- <mat-hint>Hint</mat-hint> -->  \r\n        <mat-error *ngIf=\"formErrors.username\">  \r\n          {{ formErrors.username }}  \r\n        </mat-error>  \r\n      </mat-form-field>  \r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && password.errors }\" />\r\n        <div *ngIf=\"submitted && password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"password.errors.required\">Password is required</div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div>  \r\n        <mat-form-field appearance=\"outline\">  \r\n        <mat-label>password</mat-label>  \r\n        <input matInput placeholder=\"password\" formControlName=\"password\">  \r\n        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \r\n        <!-- <mat-hint>Hint</mat-hint> -->  \r\n        <mat-error *ngIf=\"formErrors.password\">  \r\n          {{ formErrors.password }}  \r\n        </mat-error>  \r\n      </mat-form-field>  \r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.formErrors = {
            'username': '',
            'password': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'username': {
                'maxlength': 'username cannot be more than 50 characters long.',
                'required': 'username is required.'
            },
            'password': {
                'maxlength': 'password cannot be more than 50 characters long.',
                'required': 'password is required.'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        console.log('this.returnUrl 1:' + this.returnUrl);
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.returnUrl = '/home';
        console.log('this.returnUrl 2:' + this.returnUrl);
        //home
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log('after: this.submitted=true');
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        console.log('after: if (this.loginForm.invalid)');
        this.loading = true;
        console.log('after: this.loading = true');
        console.log('this.f.username.value:' + this.f.username.value);
        console.log('this.f.password.value:' + this.f.password.value);
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/guid.ts":
/*!*******************************!*\
  !*** ./src/app/model/guid.ts ***!
  \*******************************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());



/***/ }),

/***/ "./src/app/model/uploader.ts":
/*!***********************************!*\
  !*** ./src/app/model/uploader.ts ***!
  \***********************************/
/*! exports provided: Uploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uploader", function() { return Uploader; });
var Uploader = /** @class */ (function () {
    function Uploader() {
        this.queue = [];
    }
    return Uploader;
}());



/***/ }),

/***/ "./src/app/model/uploadqueue.ts":
/*!**************************************!*\
  !*** ./src/app/model/uploadqueue.ts ***!
  \**************************************/
/*! exports provided: UploadQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadQueue", function() { return UploadQueue; });
/* harmony import */ var _model_guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/guid */ "./src/app/model/guid.ts");

/**
 * Represents an UploadQueue
 */
var UploadQueue = /** @class */ (function () {
    function UploadQueue(file) {
        this.file = file;
        this.progress = 0;
        this.id = _model_guid__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid();
        this.message = '';
        this.isCancel = false;
        this.isError = false;
    }
    Object.defineProperty(UploadQueue.prototype, "isSuccess", {
        get: function () {
            if (this.progress === 100) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return UploadQueue;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/area.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/area.service.ts ***!
  \******************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var AreaService = /** @class */ (function () {
    function AreaService(http) {
        this.http = http;
    }
    // get all area data
    AreaService.prototype.getAllArea = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new area details
    AreaService.prototype.addArea = function (url, area) {
        return this.http.post(url, area, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update area details
    AreaService.prototype.updateArea = function (url, id, area) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, area, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete area information
    AreaService.prototype.deleteArea = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/area?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    AreaService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    AreaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AreaService);
    return AreaService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_shared_Global__WEBPACK_IMPORTED_MODULE_2__["Global"].BASE_USER_ENDPOINT + "user/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        //return this.http.post<any>(`${config.apiUrl}/user/authenticate`, { username: username, password: password })
        // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
        // .pipe(map(user => {
        //     // login successful if there's a jwt token in the response
        //     if (user && user.token) {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //     }
        //     console.log('user returned:success');    
        //     return user;
        // }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/city.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/city.service.ts ***!
  \******************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
    }
    // get all city data
    CityService.prototype.getAllCity = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new city details
    CityService.prototype.addCity = function (url, city) {
        return this.http.post(url, city, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update city details
    CityService.prototype.updateCity = function (url, id, city) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, city, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete city information
    CityService.prototype.deleteCity = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/city?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    CityService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    // get all country data
    CountryService.prototype.getAllCountry = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new country details
    CountryService.prototype.addCountry = function (url, country) {
        return this.http.post(url, country, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update country details
    CountryService.prototype.updateCountry = function (url, id, country) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, country, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete country information
    CountryService.prototype.deleteCountry = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/country?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    CountryService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/services/entity.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/entity.service.ts ***!
  \********************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var EntityService = /** @class */ (function () {
    function EntityService(http) {
        this.http = http;
    }
    // get all entity data
    EntityService.prototype.getAllEntity = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new entity details
    EntityService.prototype.addEntity = function (url, entity) {
        return this.http.post(url, entity, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update entity details
    EntityService.prototype.updateEntity = function (url, id, entity) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, entity, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete entity information
    EntityService.prototype.deleteEntity = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/entity?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    EntityService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    EntityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EntityService);
    return EntityService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
    }
    // get all event data
    EventService.prototype.getAllEvent = function (url) {
        console.log(url);
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new event details
    EventService.prototype.addEvent = function (url, event) {
        // return this.http.post(url, JSON.stringify(event), httpPostOptions)
        return this.http.post(url, event, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update event details
    EventService.prototype.updateEvent = function (url, id, event) {
        // const newurl = '${url}?id=${id}';
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, event, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete event information
    EventService.prototype.deleteEvent = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/event?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    EventService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend returned code ${error.status}, ' +
                'body was: ${error.error}');
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/eventartist.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/eventartist.service.ts ***!
  \*************************************************/
/*! exports provided: EventArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArtistService", function() { return EventArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var EventArtistService = /** @class */ (function () {
    function EventArtistService(http) {
        this.http = http;
    }
    // get all eventartist data
    EventArtistService.prototype.getAllEventArtist = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new eventartist details
    EventArtistService.prototype.addEventArtist = function (url, eventartist) {
        return this.http.post(url, eventartist, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update eventartist details
    EventArtistService.prototype.updateEventArtist = function (url, id, eventartist) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, eventartist, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete eventartist information
    EventArtistService.prototype.deleteEventArtist = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/eventartist?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    EventArtistService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    EventArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventArtistService);
    return EventArtistService;
}());



/***/ }),

/***/ "./src/app/services/eventbanner.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/eventbanner.service.ts ***!
  \*************************************************/
/*! exports provided: EventBannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBannerService", function() { return EventBannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        //'Content-Type': 'application/json; charset=utf-8',
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
    })
};
var EventBannerService = /** @class */ (function () {
    function EventBannerService(http) {
        this.http = http;
    }
    // get all eventartist data
    EventBannerService.prototype.getAllEventBanner = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new eventbanner details
    EventBannerService.prototype.addEventBanner = function (url, id, files) {
        //addEventBanner(url: string, eventbanner: IEventBanner): Observable<any> {
        //addEventBanner(url: string, formData: FormData): Observable<any> {
        //const newurl = `${url}?id=${id}`; //ADDED BY KB
        return this.http.post(url, files, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // // update eventbanner details
    // updateEventBanner(url: string, id: number, eventbanner: IEventBanner): Observable<any> {
    //   const newurl = `${url}?id=${id}`;
    //   return this.http.put(newurl, eventbanner, httpPostOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    // // delete eventbanner information
    // deleteEventBanner(url: string, id: number): Observable<any> {
    //   const newurl = `${url}?id=${id}`; // DELETE api/eventbanner?id=42
    //   return this.http.delete(newurl, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    // custom handler
    EventBannerService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    EventBannerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventBannerService);
    return EventBannerService;
}());



/***/ }),

/***/ "./src/app/services/eventorganizer.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/eventorganizer.service.ts ***!
  \****************************************************/
/*! exports provided: EventOrganizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventOrganizerService", function() { return EventOrganizerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var EventOrganizerService = /** @class */ (function () {
    function EventOrganizerService(http) {
        this.http = http;
    }
    // get all EventOrganizer data
    EventOrganizerService.prototype.getAllEventOrganizer = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new EventOrganizer details
    EventOrganizerService.prototype.addEventOrganizer = function (url, eventorganizer) {
        return this.http.post(url, eventorganizer, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update EventOrganizer details
    EventOrganizerService.prototype.updateEventOrganizer = function (url, id, eventOrganizer) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, eventOrganizer, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete EventOrganizer information
    EventOrganizerService.prototype.deleteEventOrganizer = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/eventorganizer?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    EventOrganizerService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    EventOrganizerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventOrganizerService);
    return EventOrganizerService;
}());



/***/ }),

/***/ "./src/app/services/files.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/files.services.ts ***!
  \********************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { IState } from '../model/state';
var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.upload = function (file) {
        var input = new FormData();
        //let input = new FormData();
        input.append('filesData', file);
        return this.http.post('http://localhost:4200/kbapi/files/filesList', input)
            .map(function (res) { return res.json(); });
        //.pipe(map((response: any) => response.json()));
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var StateService = /** @class */ (function () {
    function StateService(http) {
        this.http = http;
    }
    // get all state data
    StateService.prototype.getAllState = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new state details
    StateService.prototype.addState = function (url, state) {
        return this.http.post(url, state, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update state details
    StateService.prototype.updateState = function (url, id, state) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, state, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete state information
    StateService.prototype.deleteState = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/state?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    StateService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var httpPostOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    // get all state data
    UserService.prototype.getAllUser = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new user details
    UserService.prototype.addUser = function (url, user) {
        return this.http.post(url, user, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update user details
    UserService.prototype.updateUser = function (url, id, user) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, user, httpPostOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete user information
    UserService.prototype.deleteUser = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/user?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/DBOperation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DBOperation.ts ***!
  \***************************************/
/*! exports provided: DBOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOperation", function() { return DBOperation; });
var DBOperation;
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(DBOperation || (DBOperation = {}));


/***/ }),

/***/ "./src/app/shared/Global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/Global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    // public static BASE_USER_ENDPOINT = 'api/event/';
    // public static BASE_USER_ENDPOINT = 'kbapi-dev.us-east-2.elasticbeanstalk.com/';
    Global.BASE_USER_ENDPOINT = 'http://localhost:4200/kbapi/';
    Global.genders = [{
            name: 'Male',
            id: 0,
        }, {
            name: 'Female',
            id: 1
        }];
    Global.YesNoOptions = [{
            name: 'Yes',
            id: 1
        },
        {
            name: 'No',
            id: 0,
        }];
    // public static registeredOptions = [{
    //     name: 'Registered',
    //      id: 1
    // },
    // {
    //     name: 'Not Registered',
    //     id: 0,
    // }];
    Global.EntityTypeOptions = [{
            name: 'Group',
            value: 'G'
        },
        {
            name: 'Individual',
            value: 'I',
        }];
    Global.EventOccurenceTypeOptions = [{
            name: 'Yearly',
            value: 'Y'
        },
        {
            name: 'Monthly',
            value: 'M',
        },
        {
            name: 'Weekly',
            value: 'W',
        },
        {
            name: 'Daily',
            value: 'D',
        },
        {
            name: 'One-Time',
            value: 'O',
        }
    ];
    Global.technologies = ['JavaScript', 'SharePoint', 'C#'];
    return Global;
}());



/***/ }),

/***/ "./src/app/stateform/stateform.component.css":
/*!***************************************************!*\
  !*** ./src/app/stateform/stateform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stateform/stateform.component.html":
/*!****************************************************!*\
  !*** ./src/app/stateform/stateform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(stateFrm)\"  [formGroup]=\"stateFrm\">  \n  <h2>{{data.modalTitle}}</h2>  \n    \n  <div>\n    <mat-form-field appearance=\"outline\">  \n      <mat-select placeholder=\"Select a Country\" formControlName=\"CountryID\">  \n        <mat-option>-- None --</mat-option>  \n        <mat-option *ngFor=\"let country  of countries\" [value]=\"country.CountryID\">  \n          {{ country.CountryName }}  \n        </mat-option>  \n      </mat-select>  \n      <mat-error *ngIf=\"formErrors.CountryID \">  \n        {{ formErrors.CountryID }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n  <div>  \n      <mat-form-field appearance=\"outline\">  \n      <mat-label>State Name</mat-label>  \n      <input matInput placeholder=\"State Name\" formControlName=\"StateName\">  \n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \n      <!-- <mat-hint>Hint</mat-hint> -->  \n      <mat-error *ngIf=\"formErrors.StateName\">  \n        {{ formErrors.StateName }}  \n      </mat-error>  \n    </mat-form-field>  \n  </div>\n  <!-- <div>  \n    <mat-form-field appearance=\"outline\">  \n    <mat-label>Country ID</mat-label>  \n    <input matInput placeholder=\"Country ID\" formControlName=\"CountryID\">  \n    <mat-error *ngIf=\"formErrors.CountryID\">  \n      {{ formErrors.CountryID }}  \n    </mat-error>  \n  </mat-form-field>  \n</div>   -->\n\n\n\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>User ID</mat-label>  \n  <input matInput placeholder=\"UserID\" formControlName=\"UserID\">  \n</mat-form-field>  \n</div> -->\n\n<!-- <div>  \n  <mat-form-field appearance=\"outline\">  \n  <mat-label>Country Name</mat-label>  \n  <input matInput placeholder=\"Country Name\" formControlName=\"CountryName\">  \n</mat-form-field>  \n</div> -->\n  \n  <div>  \n    \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"stateFrm.invalid\">{{data.modalBtnTitle}}</button>  \n  </div>  \n    \n  </form> "

/***/ }),

/***/ "./src/app/stateform/stateform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/stateform/stateform.component.ts ***!
  \**************************************************/
/*! exports provided: StateformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateformComponent", function() { return StateformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var StateformComponent = /** @class */ (function () {
    function StateformComponent(data, fb, _stateService, _countryService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._stateService = _stateService;
        this._countryService = _countryService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // genders = [];
        // technologies = [];
        this.countries = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'StateName': '',
            'CountryID': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'StateName': {
                'maxlength': 'statename cannot be more than 50 characters long.',
                'required': 'statename is required.'
            },
            'CountryID': {
                'maxlength': 'country cannot be more than 50 characters long.',
                'required': 'country is required.'
            }
        };
    }
    StateformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built state form
        this.stateFrm = this.fb.group({
            StateID: [],
            StateName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            CountryID: [],
            UserID: [],
            CountryName: [''],
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        this._countryService.getAllCountry(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
            .subscribe(function (countries) {
            _this.countries = countries;
        });
        // subscribe on value changed event of form to show validation message
        this.stateFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create) {
            this.stateFrm.reset();
        }
        else {
            this.stateFrm.setValue(this.data.state);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete ? false : true);
    };
    // form value change event
    StateformComponent.prototype.onValueChanged = function (data) {
        if (!this.stateFrm) {
            return;
        }
        var form = this.stateFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    StateformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var stateData = this.mapStateID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].create:
                this._stateService.addState(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'State/' + 'addState', stateData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].update:
                this._stateService.updateState(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'State/' + 'updateState', stateData.StateID, stateData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_5__["DBOperation"].delete:
                this._stateService.deleteState(_shared_Global__WEBPACK_IMPORTED_MODULE_6__["Global"].BASE_USER_ENDPOINT + 'State/' + 'deleteState', stateData.StateID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    StateformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.stateFrm.enable() : this.stateFrm.disable();
    };
    StateformComponent.prototype.mapStateID = function (state) {
        if (state.StateID == null) {
            state.StateID = -1;
            state.UserID = 1;
            state.CountryName = '';
        }
        return state;
    };
    StateformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stateform',
            template: __webpack_require__(/*! ./stateform.component.html */ "./src/app/stateform/stateform.component.html"),
            styles: [__webpack_require__(/*! ./stateform.component.css */ "./src/app/stateform/stateform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], StateformComponent);
    return StateformComponent;
}());



/***/ }),

/***/ "./src/app/statelist/statelist.component.css":
/*!***************************************************!*\
  !*** ./src/app/statelist/statelist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .statelist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.statelist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/statelist/statelist.component.html":
/*!****************************************************!*\
  !*** ./src/app/statelist/statelist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else statelist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"statelist\" #statelist>  \n    <h2 style=\"text-align: center;\">State List</h2>  \n    <div class=\"statelist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addState()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Id Column -->  \n        <ng-container matColumnDef=\"StateID\">  \n        <th mat-header-cell *matHeaderCellDef>State Id </th>  \n        <td mat-cell *matCellDef=\"let element\">{{element.StateID}} </td>  \n        </ng-container>\n    \n        <!-- State Name Column -->  \n        <ng-container matColumnDef=\"StateName\">  \n          <th mat-header-cell *matHeaderCellDef>State Name</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.StateName}} </td>  \n        </ng-container>\n        \n        <!-- Id Column -->  \n        <ng-container matColumnDef=\"CountryID\">  \n          <th mat-header-cell *matHeaderCellDef>Country Id </th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.CountryID}} </td>  \n          </ng-container>\n\n        <!-- Country Name Column -->  \n        <ng-container matColumnDef=\"CountryName\">  \n          <th mat-header-cell *matHeaderCellDef>Country Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.CountryName}} </td>  \n          </ng-container>\n    \n      \n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editState(element.StateID)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteState(element.StateID)\">Delete</button>  \n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n      </div>  \n  </ng-template> "

/***/ }),

/***/ "./src/app/statelist/statelist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/statelist/statelist.component.ts ***!
  \**************************************************/
/*! exports provided: StatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatelistComponent", function() { return StatelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _stateform_stateform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stateform/stateform.component */ "./src/app/stateform/stateform.component.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StatelistComponent = /** @class */ (function () {
    function StatelistComponent(snackBar, _stateService, dialog) {
        this.snackBar = snackBar;
        this._stateService = _stateService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['StateID', 'StateName', 'CountryID', 'CountryName', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    StatelistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadStates();
    };
    StatelistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_stateform_stateform_component__WEBPACK_IMPORTED_MODULE_2__["StateformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, state: this.state }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadStates();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    StatelistComponent.prototype.loadStates = function () {
        var _this = this;
        this._stateService.getAllState(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'State/' + 'getAllState')
            .subscribe(function (states) {
            _this.loadingState = false;
            _this.dataSource.data = states;
        });
    };
    StatelistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    StatelistComponent.prototype.addState = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New State';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    StatelistComponent.prototype.editState = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit State';
        this.modalBtnTitle = 'Update';
        this.state = this.dataSource.data.filter(function (x) { return x.StateID === id; })[0];
        this.openDialog();
    };
    StatelistComponent.prototype.deleteState = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.state = this.dataSource.data.filter(function (x) { return x.StateID === id; })[0];
        this.openDialog();
    };
    StatelistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    StatelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statelist',
            template: __webpack_require__(/*! ./statelist.component.html */ "./src/app/statelist/statelist.component.html"),
            styles: [__webpack_require__(/*! ./statelist.component.css */ "./src/app/statelist/statelist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], StatelistComponent);
    return StatelistComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <h3>Select file</h3>\r\n  \r\n      <!-- Example: nv-file-select=\"\" uploader=\"{Object}\" options=\"{Object}\" filters=\"{String}\" -->\r\n      <input type=\"file\" id=\"file\" uploader=\"uploader\" multiple (change)=\"onSelectChange($event)\" /><br />\r\n      <!-- <div id=\"result\"></div>\r\n      <div class=\"dropzone\" appDnd (filesChangeEmiter)=\"onFilesChange($event)\" (filesInvalidEmiter)=\"onFileInvalids($event)\" [allowed_extensions]=\"['zip','jpg','png','jpeg','rar','JPG']\">\r\n        <div style=\"height:100px;\" class=\"text-wrapper\">\r\n          <div class=\"centered\">Drop your file here!</div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n      <h3>Add File here</h3>\r\n      <p>Queue length: {{ uploader.queue.length }}</p>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th width=\"50%\">Name</th>\r\n            <th ng-show=\"uploader.isHTML5\">Size</th>\r\n            <th ng-show=\"uploader.isHTML5\">Progress</th>\r\n            <th>Status</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of uploader.queue\">\r\n            <td>\r\n              <strong>{{ item.file.name }}</strong>\r\n              <!-- Image preview -->\r\n              <!--auto height-->\r\n              <!--<div ng-thumb=\"{ file: item.file, width: 100 }\"></div>-->\r\n              <!--auto width-->\r\n              <div ng-show=\"uploader.isHTML5\" ng-thumb=\"{ file: item._file, height: 100 }\"></div>\r\n              <!--fixed width and height -->\r\n              <!--<div ng-thumb=\"{ file: item.file, width: 100, height: 100 }\"></div>-->\r\n            </td>\r\n            <td ng-show=\"uploader.isHTML5\" nowrap>{{ item.file.size/1024/1024 | number }} MB</td>\r\n            <td ng-show=\"uploader.isHTML5\">\r\n              <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n              </div>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n              <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n              <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n            </td>\r\n            <td nowrap>\r\n              <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"upload(item.id)\" ng-disabled=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"item.cancel()\" ng-disabled=\"!item.isUploading\">\r\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n              </button>\r\n  \r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div>\r\n        <div>\r\n          Queue progress:\r\n          <div class=\"progress\" style=\"\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': progress + '%' }\"></div>\r\n          </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploadAll()\">\r\n          <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"cancelAll()\">\r\n          <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n        </button>\r\n  \r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/uploader */ "./src/app/model/uploader.ts");
/* harmony import */ var _model_uploadqueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/uploadqueue */ "./src/app/model/uploadqueue.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(http) {
        this.http = http;
        this.uploader = new _model_uploader__WEBPACK_IMPORTED_MODULE_2__["Uploader"]();
        this.message = '';
    }
    Object.defineProperty(UploadComponent.prototype, "progress", {
        //getter : get overall progress
        get: function () {
            var psum = 0;
            for (var _i = 0, _a = this.uploader.queue; _i < _a.length; _i++) {
                var entry = _a[_i];
                //for (let entry of this.uploader.queue) {
                psum += entry.progress;
            }
            if (psum === 0) {
                return 0;
            }
            return Math.round(psum / this.uploader.queue.length);
        },
        enumerable: true,
        configurable: true
    });
    UploadComponent.prototype.onFilesChange = function (fileList) {
        for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
            var file = fileList_1[_i];
            //for (let file of fileList) {
            this.uploader.queue.push(new _model_uploadqueue__WEBPACK_IMPORTED_MODULE_3__["UploadQueue"](file));
        }
    };
    UploadComponent.prototype.onFileInvalids = function (fileList) {
        //TODO handle invalid files here
    };
    UploadComponent.prototype.onSelectChange = function (event) {
        // let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
        // let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
        // let files: FileList = target.files;
        // let file = files[0];
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        var file = files[0];
        if (file) {
            this.uploader.queue.push(new _model_uploadqueue__WEBPACK_IMPORTED_MODULE_3__["UploadQueue"](file));
            //console.log(file);
            console.log('Total Count:' + this.uploader.queue.length);
        }
    };
    // upload 
    UploadComponent.prototype.upload = function (id) {
        if (id == null) {
            return;
        }
        //let selectedFile = this.uploader.queue.find(s => s.id == id);
        var selectedFile = this.uploader.queue.find(function (s) { return s.id === id; });
        if (selectedFile) {
            var formData = new FormData();
            formData.append(selectedFile.file.name, selectedFile.file);
            var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', "kbapi/upload", formData, {
                reportProgress: true,
            });
            this.http.request(uploadReq).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    selectedFile.progress = Math.round(100 * event.loaded / event.total);
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                    selectedFile.message = event.body.toString();
                }
            });
        }
    };
    //upload all selected files to server
    UploadComponent.prototype.uploadAll = function () {
        //find the remaning files to upload
        //let remainingFiles = this.uploader.queue.filter(s => !s.isSuccess);
        var remainingFiles = this.uploader.queue.filter(function (s) { return !s.isSuccess; });
        for (var _i = 0, remainingFiles_1 = remainingFiles; _i < remainingFiles_1.length; _i++) {
            var item = remainingFiles_1[_i];
            //for (let item of remainingFiles) {
            this.upload(item.id);
        }
    };
    // cancel all 
    UploadComponent.prototype.cancelAll = function () {
        //TODO
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/uploadfiles/uploadfiles.component.css":
/*!*******************************************************!*\
  !*** ./src/app/uploadfiles/uploadfiles.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/uploadfiles/uploadfiles.component.html":
/*!********************************************************!*\
  !*** ./src/app/uploadfiles/uploadfiles.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <p>\r\n    upload-files works!\r\n    <input type=\"file\" (change)=\"uploadPhoto()\" #fileInput>\r\n  </p>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/uploadfiles/uploadfiles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/uploadfiles/uploadfiles.component.ts ***!
  \******************************************************/
/*! exports provided: UploadfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadfilesComponent", function() { return UploadfilesComponent; });
/* harmony import */ var _services_files_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/files.services */ "./src/app/services/files.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-upload-files',
//   templateUrl: './upload-files.component.html',
//   styleUrls: ['./upload-files.component.css']
// })
// export class UploadFilesComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }
//import { Subject } from 'rxjs/Subject';

//import { StateService } from '../services/state.service';

var UploadfilesComponent = /** @class */ (function () {
    function UploadfilesComponent(fileService) {
        this.fileService = fileService;
    }
    UploadfilesComponent.prototype.ngOnInit = function () {
    };
    UploadfilesComponent.prototype.uploadPhoto = function () {
        var nativeElement = this.fileInput.nativeElement;
        //let nativeElement: HTMLInputElement = this.fileInput.nativeElement;
        this.fileService.upload(nativeElement.files);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], UploadfilesComponent.prototype, "fileInput", void 0);
    UploadfilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploadfiles',
            template: __webpack_require__(/*! ./uploadfiles.component.html */ "./src/app/uploadfiles/uploadfiles.component.html"),
            styles: [__webpack_require__(/*! ./uploadfiles.component.css */ "./src/app/uploadfiles/uploadfiles.component.css")]
        }),
        __metadata("design:paramtypes", [_services_files_services__WEBPACK_IMPORTED_MODULE_0__["FileService"]])
    ], UploadfilesComponent);
    return UploadfilesComponent;
}());



/***/ }),

/***/ "./src/app/userform/userform.component.css":
/*!*************************************************!*\
  !*** ./src/app/userform/userform.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userform/userform.component.html":
/*!**************************************************!*\
  !*** ./src/app/userform/userform.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(userFrm)\"  [formGroup]=\"userFrm\">  \r\n    <h2>{{data.modalTitle}}</h2> \r\n\r\n                \r\n                    <!-- <div class=\"form-group\">\r\n                        <label>First Name</label>\r\n                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                        </div>\r\n                    </div> -->\r\n\r\n                    <div>  \r\n                        <mat-form-field appearance=\"outline\">  \r\n                        <mat-label>firstName</mat-label>  \r\n                        <input matInput placeholder=\"FirstName\" formControlName=\"FirstName\">  \r\n                        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \r\n                        <!-- <mat-hint>Hint</mat-hint> -->  \r\n                        <mat-error *ngIf=\"formErrors.FirstName\">  \r\n                          {{ formErrors.FirstName }}  \r\n                        </mat-error>  \r\n                      </mat-form-field>  \r\n                    </div>\r\n\r\n\r\n                    <!-- <div class=\"form-group\">\r\n                        <label>Last Name</label>\r\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                        </div>\r\n                    </div> -->\r\n\r\n                    <div>  \r\n                        <mat-form-field appearance=\"outline\">  \r\n                        <mat-label>LastName</mat-label>  \r\n                        <input matInput placeholder=\"LastName\" formControlName=\"LastName\">  \r\n                        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \r\n                        <!-- <mat-hint>Hint</mat-hint> -->  \r\n                        <!-- <mat-error *ngIf=\"formErrors.LastName\">  \r\n                          {{ formErrors.LastName }}  \r\n                        </mat-error>   -->\r\n                      </mat-form-field>  \r\n                    </div>\r\n\r\n\r\n\r\n\r\n                    <!-- <div class=\"form-group\">\r\n                        <label>Email</label>\r\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div>  \r\n                        <mat-form-field appearance=\"outline\">  \r\n                        <mat-label>Email</mat-label>  \r\n                        <input matInput placeholder=\"Email\" formControlName=\"Email\">  \r\n                        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \r\n                        <!-- <mat-hint>Hint</mat-hint> -->  \r\n                        <mat-error *ngIf=\"formErrors.Email\">  \r\n                          {{ formErrors.Email }}  \r\n                        </mat-error>  \r\n                      </mat-form-field>  \r\n                    </div>\r\n\r\n                    <div>  \r\n                        <mat-form-field appearance=\"outline\">  \r\n                        <mat-label>UserName</mat-label>  \r\n                        <input matInput placeholder=\"UserName\" formControlName=\"UserName\">  \r\n                        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \r\n                        <!-- <mat-hint>Hint</mat-hint> -->  \r\n                        <mat-error *ngIf=\"formErrors.UserName\">  \r\n                          {{ formErrors.UserName }}  \r\n                        </mat-error>  \r\n                      </mat-form-field>  \r\n                    </div>    \r\n\r\n                    <!-- <div class=\"form-group\">\r\n                        <label>Password</label>\r\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                        </div>\r\n                    </div> -->\r\n\r\n                    <div>  \r\n                        <mat-form-field appearance=\"outline\">  \r\n                        <mat-label>Password</mat-label>  \r\n                        <input matInput placeholder=\"Password\" formControlName=\"Password\">  \r\n                        <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->  \r\n                        <!-- <mat-hint>Hint</mat-hint> -->  \r\n                        <mat-error *ngIf=\"formErrors.Password\">  \r\n                          {{ formErrors.Password }}  \r\n                        </mat-error>  \r\n                      </mat-form-field>  \r\n                    </div>\r\n\r\n                    <!-- <div class=\"form-group\">\r\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n                    </div> -->\r\n\r\n                    <div>  \r\n    \r\n                        <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>   \r\n                        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"userFrm.invalid\">{{data.modalBtnTitle}}</button>  \r\n                      </div>  \r\n</form>\r\n          "

/***/ }),

/***/ "./src/app/userform/userform.component.ts":
/*!************************************************!*\
  !*** ./src/app/userform/userform.component.ts ***!
  \************************************************/
/*! exports provided: UserformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserformComponent", function() { return UserformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



//import { IState } from '../model/state';
//import { CountryService } from '../services/country.service';



var UserformComponent = /** @class */ (function () {
    // genders = [];
    // technologies = [];
    //countries = [];
    function UserformComponent(data, fb, _userService, 
    //private _countryService: CountryService,
    dialogRef) {
        this.data = data;
        this.fb = fb;
        this._userService = _userService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'FirstName': '',
            'Email': '',
            'UserName': '',
            'Password': '',
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'FirstName': {
                'maxlength': 'FirstName cannot be more than 50 characters long.',
                'required': 'FirstName is required.'
            },
            'Email': {
                'maxlength': 'Email cannot be more than 50 characters long.',
                'required': 'Email is required.'
            },
            'UserName': {
                'maxlength': 'UserName cannot be more than 50 characters long.',
                'required': 'UserName is required.'
            },
            'Password': {
                'maxlength': 'Password cannot be more than 50 characters long.',
                'required': 'Password is required.'
            }
        };
    }
    UserformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built state form
        this.userFrm = this.fb.group({
            UID: [],
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            LastName: [],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)]],
            UserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            UserID: [-1],
        });
        // this.genders = Global.genders;
        // this.technologies = Global.technologies;
        // this._countryService.getAllCountry(Global.BASE_USER_ENDPOINT + 'Country/' + 'getAllCountry')
        // .subscribe(countries => {
        //   this.countries = countries;
        // });
        // subscribe on value changed event of form to show validation message
        this.userFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.userFrm.reset();
        }
        else {
            this.userFrm.setValue(this.data.user);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    // form value change event
    UserformComponent.prototype.onValueChanged = function (data) {
        if (!this.userFrm) {
            return;
        }
        var form = this.userFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    UserformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var userData = this.mapUserID(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._userService.addUser(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'User/' + 'addUser', userData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._userService.updateUser(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'User/' + 'updateUser', userData.UserID, userData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._userService.deleteUser(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'User/' + 'deleteUser', userData.UserID).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    UserformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    UserformComponent.prototype.mapUserID = function (user) {
        if (user.UID == null) {
            user.UID = -1;
            user.UserID = -1;
        }
        return user;
    };
    UserformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userform',
            template: __webpack_require__(/*! ./userform.component.html */ "./src/app/userform/userform.component.html"),
            styles: [__webpack_require__(/*! ./userform.component.css */ "./src/app/userform/userform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], UserformComponent);
    return UserformComponent;
}());



/***/ }),

/***/ "./src/app/userlist/userlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/userlist/userlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .userlist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n    top: 45%;\r\n    left: 47%;\r\n    position: fixed;\r\n  }\r\n\r\n.userlist-container, #paginator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    max-width: 1200px;\r\n    max-height: 700px;\r\n    overflow: auto;\r\n    margin: 0 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/userlist/userlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/userlist/userlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else userlist\">  \n  <mat-spinner></mat-spinner>  \n  </div>  \n  <ng-template class=\"userlist\" #userlist>  \n    <h2 style=\"text-align: center;\">User List</h2>  \n    <div class=\"userlist-container mat-elevation-z8\">  \n      <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addUser()\">Create</button></div>  \n      <table mat-table #table [dataSource]=\"dataSource\">  \n    \n        <!-- Id Column -->  \n        <ng-container matColumnDef=\"UID\">  \n        <th mat-header-cell *matHeaderCellDef>User Id </th>  \n        <td mat-cell *matCellDef=\"let element\">{{element.UID}} </td>  \n        </ng-container>\n    \n        <!-- State Name Column -->  \n        <ng-container matColumnDef=\"Username\">  \n          <th mat-header-cell *matHeaderCellDef>User Name</th>  \n          <td mat-cell *matCellDef=\"let element\"> {{element.Username}} </td>  \n        </ng-container>\n        \n        <!-- FirstName Column -->  \n        <ng-container matColumnDef=\"FirstName\">  \n          <th mat-header-cell *matHeaderCellDef>FirstName</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.FirstName}} </td>  \n          </ng-container>\n\n        <!-- LastName Column -->  \n        <ng-container matColumnDef=\"LastName\">  \n          <th mat-header-cell *matHeaderCellDef>Last Name</th>  \n          <td mat-cell *matCellDef=\"let element\">{{element.LastName}} </td>  \n          </ng-container>\n    \n      \n         \n        <ng-container matColumnDef=\"action\">  \n          <th mat-header-cell *matHeaderCellDef>Action</th>  \n          <td mat-cell *matCellDef=\"let element\">  \n            <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editUser(element.UID)\">Edit</button>  \n            <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteUser(element.UID)\">Delete</button>  \n          </td>  \n        </ng-container>  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>  \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row> -->\n        <!-- <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> -->\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>  \n      </table>  \n      </div>  \n  </ng-template> "

/***/ }),

/***/ "./src/app/userlist/userlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/userlist/userlist.component.ts ***!
  \************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _userform_userform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userform/userform.component */ "./src/app/userform/userform.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(snackBar, _userService, dialog) {
        this.snackBar = snackBar;
        this._userService = _userService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['UID', 'Username', 'FirstName', 'LastName', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadUsers();
    };
    UserlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_userform_userform_component__WEBPACK_IMPORTED_MODULE_2__["UserformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, state: this.user }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadUsers();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                _this.showMessage('Please try again, something went wrong');
            }
        });
    };
    UserlistComponent.prototype.loadUsers = function () {
        var _this = this;
        this._userService.getAllUser(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'User/' + 'getAllUser')
            .subscribe(function (users) {
            _this.loadingState = false;
            _this.dataSource.data = users;
        });
    };
    UserlistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    UserlistComponent.prototype.addUser = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New User';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    UserlistComponent.prototype.editUser = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit User';
        this.modalBtnTitle = 'Update';
        this.user = this.dataSource.data.filter(function (x) { return x.UID === id; })[0];
        this.openDialog();
    };
    UserlistComponent.prototype.deleteUser = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.user = this.dataSource.data.filter(function (x) { return x.UID === id; })[0];
        this.openDialog();
    };
    UserlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.



/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Working\KB\kb-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map