"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2009Author = _interopRequireDefault(require("./InlineResponse2009Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20037FieldsWatcher model module.
 * @module model/InlineResponse20037FieldsWatcher
 * @version 1.2.0
 */
var InlineResponse20037FieldsWatcher = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20037FieldsWatcher</code>.
   * @alias module:model/InlineResponse20037FieldsWatcher
   * @param isWatching {Boolean} 
   * @param self {String} 
   * @param watchCount {Number} 
   * @param watchers {Array.<module:model/InlineResponse2009Author>} 
   */
  function InlineResponse20037FieldsWatcher(isWatching, self, watchCount, watchers) {
    _classCallCheck(this, InlineResponse20037FieldsWatcher);

    InlineResponse20037FieldsWatcher.initialize(this, isWatching, self, watchCount, watchers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20037FieldsWatcher, null, [{
    key: "initialize",
    value: function initialize(obj, isWatching, self, watchCount, watchers) {
      obj['isWatching'] = isWatching;
      obj['self'] = self;
      obj['watchCount'] = watchCount;
      obj['watchers'] = watchers;
    }
    /**
     * Constructs a <code>InlineResponse20037FieldsWatcher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsWatcher} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsWatcher} The populated <code>InlineResponse20037FieldsWatcher</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20037FieldsWatcher();

        if (data.hasOwnProperty('isWatching')) {
          obj['isWatching'] = _ApiClient["default"].convertToType(data['isWatching'], 'Boolean');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('watchCount')) {
          obj['watchCount'] = _ApiClient["default"].convertToType(data['watchCount'], 'Number');
        }

        if (data.hasOwnProperty('watchers')) {
          obj['watchers'] = _ApiClient["default"].convertToType(data['watchers'], [_InlineResponse2009Author["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20037FieldsWatcher;
}();
/**
 * @member {Boolean} isWatching
 */


InlineResponse20037FieldsWatcher.prototype['isWatching'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20037FieldsWatcher.prototype['self'] = undefined;
/**
 * @member {Number} watchCount
 */

InlineResponse20037FieldsWatcher.prototype['watchCount'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2009Author>} watchers
 */

InlineResponse20037FieldsWatcher.prototype['watchers'] = undefined;
var _default = InlineResponse20037FieldsWatcher;
exports["default"] = _default;