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
 * The JsonTypeBean model module.
 * @module model/JsonTypeBean
 * @version 1.4.0
 */
var JsonTypeBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JsonTypeBean</code>.
   * The schema of a field.
   * @alias module:model/JsonTypeBean
   * @param type {String} The data type of the field.
   */
  function JsonTypeBean(type) {
    _classCallCheck(this, JsonTypeBean);

    JsonTypeBean.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JsonTypeBean, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>JsonTypeBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonTypeBean} obj Optional instance to populate.
     * @return {module:model/JsonTypeBean} The populated <code>JsonTypeBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JsonTypeBean();

        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _ApiClient["default"].convertToType(data['configuration'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('custom')) {
          obj['custom'] = _ApiClient["default"].convertToType(data['custom'], 'String');
        }

        if (data.hasOwnProperty('customId')) {
          obj['customId'] = _ApiClient["default"].convertToType(data['customId'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], 'String');
        }

        if (data.hasOwnProperty('system')) {
          obj['system'] = _ApiClient["default"].convertToType(data['system'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JsonTypeBean;
}();
/**
 * If the field is a custom field, the configuration of the field.
 * @member {Object.<String, Object>} configuration
 */


JsonTypeBean.prototype['configuration'] = undefined;
/**
 * If the field is a custom field, the URI of the field.
 * @member {String} custom
 */

JsonTypeBean.prototype['custom'] = undefined;
/**
 * If the field is a custom field, the custom ID of the field.
 * @member {Number} customId
 */

JsonTypeBean.prototype['customId'] = undefined;
/**
 * When the data type is an array, the name of the field items within the array.
 * @member {String} items
 */

JsonTypeBean.prototype['items'] = undefined;
/**
 * If the field is a system field, the name of the field.
 * @member {String} system
 */

JsonTypeBean.prototype['system'] = undefined;
/**
 * The data type of the field.
 * @member {String} type
 */

JsonTypeBean.prototype['type'] = undefined;
var _default = JsonTypeBean;
exports["default"] = _default;