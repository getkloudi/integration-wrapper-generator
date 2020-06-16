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
 * The FieldConfigurationItem model module.
 * @module model/FieldConfigurationItem
 * @version 1.4.0
 */
var FieldConfigurationItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldConfigurationItem</code>.
   * A field within a field configuration.
   * @alias module:model/FieldConfigurationItem
   * @param id {String} The ID of the field within the field configuration.
   */
  function FieldConfigurationItem(id) {
    _classCallCheck(this, FieldConfigurationItem);

    FieldConfigurationItem.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldConfigurationItem, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>FieldConfigurationItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldConfigurationItem} obj Optional instance to populate.
     * @return {module:model/FieldConfigurationItem} The populated <code>FieldConfigurationItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldConfigurationItem();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isHidden')) {
          obj['isHidden'] = _ApiClient["default"].convertToType(data['isHidden'], 'Boolean');
        }

        if (data.hasOwnProperty('isRequired')) {
          obj['isRequired'] = _ApiClient["default"].convertToType(data['isRequired'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return FieldConfigurationItem;
}();
/**
 * The description of the field within the field configuration.
 * @member {String} description
 */


FieldConfigurationItem.prototype['description'] = undefined;
/**
 * The ID of the field within the field configuration.
 * @member {String} id
 */

FieldConfigurationItem.prototype['id'] = undefined;
/**
 * Whether the field is hidden in the field configuration.
 * @member {Boolean} isHidden
 */

FieldConfigurationItem.prototype['isHidden'] = undefined;
/**
 * Whether the field is required in the field configuration.
 * @member {Boolean} isRequired
 */

FieldConfigurationItem.prototype['isRequired'] = undefined;
var _default = FieldConfigurationItem;
exports["default"] = _default;