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
 * The ApplicationProperty model module.
 * @module model/ApplicationProperty
 * @version 1.4.0
 */
var ApplicationProperty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationProperty</code>.
   * Details of an application property.
   * @alias module:model/ApplicationProperty
   */
  function ApplicationProperty() {
    _classCallCheck(this, ApplicationProperty);

    ApplicationProperty.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationProperty, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationProperty} obj Optional instance to populate.
     * @return {module:model/ApplicationProperty} The populated <code>ApplicationProperty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationProperty();

        if (data.hasOwnProperty('allowedValues')) {
          obj['allowedValues'] = _ApiClient["default"].convertToType(data['allowedValues'], ['String']);
        }

        if (data.hasOwnProperty('defaultValue')) {
          obj['defaultValue'] = _ApiClient["default"].convertToType(data['defaultValue'], 'String');
        }

        if (data.hasOwnProperty('desc')) {
          obj['desc'] = _ApiClient["default"].convertToType(data['desc'], 'String');
        }

        if (data.hasOwnProperty('example')) {
          obj['example'] = _ApiClient["default"].convertToType(data['example'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicationProperty;
}();
/**
 * The allowed values, if applicable.
 * @member {Array.<String>} allowedValues
 */


ApplicationProperty.prototype['allowedValues'] = undefined;
/**
 * The default value of the application property.
 * @member {String} defaultValue
 */

ApplicationProperty.prototype['defaultValue'] = undefined;
/**
 * The description of the application property.
 * @member {String} desc
 */

ApplicationProperty.prototype['desc'] = undefined;
/**
 * @member {String} example
 */

ApplicationProperty.prototype['example'] = undefined;
/**
 * The ID of the application property. The ID and key are the same.
 * @member {String} id
 */

ApplicationProperty.prototype['id'] = undefined;
/**
 * The key of the application property. The ID and key are the same.
 * @member {String} key
 */

ApplicationProperty.prototype['key'] = undefined;
/**
 * The name of the application property.
 * @member {String} name
 */

ApplicationProperty.prototype['name'] = undefined;
/**
 * The data type of the application property.
 * @member {String} type
 */

ApplicationProperty.prototype['type'] = undefined;
/**
 * The new value.
 * @member {String} value
 */

ApplicationProperty.prototype['value'] = undefined;
var _default = ApplicationProperty;
exports["default"] = _default;