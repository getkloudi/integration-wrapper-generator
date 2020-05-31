"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FrameworkFilter model module.
 * @module model/FrameworkFilter
 * @version 1.1.0
 */
var FrameworkFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FrameworkFilter</code>.
   * @alias module:model/FrameworkFilter
   * @param type {String} Platform/language of the item
   * @param operation {String} 
   * @param value {String} 
   */
  function FrameworkFilter(type, operation, value) {
    _classCallCheck(this, FrameworkFilter);

    FrameworkFilter.initialize(this, type, operation, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FrameworkFilter, null, [{
    key: "initialize",
    value: function initialize(obj, type, operation, value) {
      obj['type'] = type;
      obj['operation'] = operation;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>FrameworkFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FrameworkFilter} obj Optional instance to populate.
     * @return {module:model/FrameworkFilter} The populated <code>FrameworkFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FrameworkFilter();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _ApiClient["default"].convertToType(data['operation'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FrameworkFilter;
}();
/**
 * Platform/language of the item
 * @member {String} type
 * @default 'framework'
 */


FrameworkFilter.prototype['type'] = 'framework';
/**
 * @member {String} operation
 * @default 'eq'
 */

FrameworkFilter.prototype['operation'] = 'eq';
/**
 * @member {String} value
 */

FrameworkFilter.prototype['value'] = undefined;
var _default = FrameworkFilter;
exports["default"] = _default;