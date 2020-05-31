"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Operation = _interopRequireDefault(require("./Operation36"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MethodFilter model module.
 * @module model/MethodFilter
 * @version 1.1.0
 */
var MethodFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MethodFilter</code>.
   * @alias module:model/MethodFilter
   * @param type {String} Matches any method in the stack trace
   * @param operation {module:model/Operation36} 
   * @param value {String} 
   */
  function MethodFilter(type, operation, value) {
    _classCallCheck(this, MethodFilter);

    MethodFilter.initialize(this, type, operation, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MethodFilter, null, [{
    key: "initialize",
    value: function initialize(obj, type, operation, value) {
      obj['type'] = type;
      obj['operation'] = operation;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>MethodFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MethodFilter} obj Optional instance to populate.
     * @return {module:model/MethodFilter} The populated <code>MethodFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MethodFilter();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _Operation["default"].constructFromObject(data['operation']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MethodFilter;
}();
/**
 * Matches any method in the stack trace
 * @member {String} type
 * @default 'method'
 */


MethodFilter.prototype['type'] = 'method';
/**
 * @member {module:model/Operation36} operation
 */

MethodFilter.prototype['operation'] = undefined;
/**
 * @member {String} value
 */

MethodFilter.prototype['value'] = undefined;
var _default = MethodFilter;
exports["default"] = _default;