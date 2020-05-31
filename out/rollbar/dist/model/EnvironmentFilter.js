"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Operation = _interopRequireDefault(require("./Operation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EnvironmentFilter model module.
 * @module model/EnvironmentFilter
 * @version 1.1.0
 */
var EnvironmentFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnvironmentFilter</code>.
   * @alias module:model/EnvironmentFilter
   * @param type {String} Item Environment
   * @param operation {module:model/Operation} 
   * @param value {String} 
   */
  function EnvironmentFilter(type, operation, value) {
    _classCallCheck(this, EnvironmentFilter);

    EnvironmentFilter.initialize(this, type, operation, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnvironmentFilter, null, [{
    key: "initialize",
    value: function initialize(obj, type, operation, value) {
      obj['type'] = type;
      obj['operation'] = operation;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>EnvironmentFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentFilter} obj Optional instance to populate.
     * @return {module:model/EnvironmentFilter} The populated <code>EnvironmentFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnvironmentFilter();

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

  return EnvironmentFilter;
}();
/**
 * Item Environment
 * @member {String} type
 * @default 'environment'
 */


EnvironmentFilter.prototype['type'] = 'environment';
/**
 * @member {module:model/Operation} operation
 */

EnvironmentFilter.prototype['operation'] = undefined;
/**
 * @member {String} value
 */

EnvironmentFilter.prototype['value'] = undefined;
var _default = EnvironmentFilter;
exports["default"] = _default;