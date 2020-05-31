"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Operation = _interopRequireDefault(require("./Operation"));

var _Type = _interopRequireDefault(require("./Type"));

var _Value = _interopRequireDefault(require("./Value"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Filter model module.
 * @module model/Filter
 * @version 1.1.0
 */
var Filter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Filter</code>.
   * @alias module:model/Filter
   */
  function Filter() {
    _classCallCheck(this, Filter);

    Filter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Filter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter} obj Optional instance to populate.
     * @return {module:model/Filter} The populated <code>Filter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Filter();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _Type["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _Operation["default"].constructFromObject(data['operation']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _Value["default"].constructFromObject(data['value']);
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'Number');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Filter;
}();
/**
 * @member {module:model/Type} type
 */


Filter.prototype['type'] = undefined;
/**
 * @member {module:model/Operation} operation
 */

Filter.prototype['operation'] = undefined;
/**
 * @member {module:model/Value} value
 */

Filter.prototype['value'] = undefined;
/**
 * @member {String} path
 */

Filter.prototype['path'] = undefined;
/**
 * Number of seconds
 * @member {Number} period
 */

Filter.prototype['period'] = undefined;
/**
 * @member {Number} count
 */

Filter.prototype['count'] = undefined;
var _default = Filter;
exports["default"] = _default;