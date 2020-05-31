"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Operation = _interopRequireDefault(require("./Operation35"));

var _Value = _interopRequireDefault(require("./Value"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LevelFilter model module.
 * @module model/LevelFilter
 * @version 1.1.0
 */
var LevelFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LevelFilter</code>.
   * @alias module:model/LevelFilter
   * @param type {String} Item Level
   * @param operation {module:model/Operation35} 
   * @param value {module:model/Value} 
   */
  function LevelFilter(type, operation, value) {
    _classCallCheck(this, LevelFilter);

    LevelFilter.initialize(this, type, operation, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LevelFilter, null, [{
    key: "initialize",
    value: function initialize(obj, type, operation, value) {
      obj['type'] = type;
      obj['operation'] = operation;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>LevelFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LevelFilter} obj Optional instance to populate.
     * @return {module:model/LevelFilter} The populated <code>LevelFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LevelFilter();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _Operation["default"].constructFromObject(data['operation']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _Value["default"].constructFromObject(data['value']);
        }
      }

      return obj;
    }
  }]);

  return LevelFilter;
}();
/**
 * Item Level
 * @member {String} type
 * @default 'level'
 */


LevelFilter.prototype['type'] = 'level';
/**
 * @member {module:model/Operation35} operation
 */

LevelFilter.prototype['operation'] = undefined;
/**
 * @member {module:model/Value} value
 */

LevelFilter.prototype['value'] = undefined;
var _default = LevelFilter;
exports["default"] = _default;