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
 * The FieldConfigurationScheme model module.
 * @module model/FieldConfigurationScheme
 * @version 1.4.0
 */
var FieldConfigurationScheme = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldConfigurationScheme</code>.
   * Details of a field configuration scheme.
   * @alias module:model/FieldConfigurationScheme
   * @param id {String} The ID of the field configuration scheme.
   * @param name {String} The name of the field configuration scheme.
   */
  function FieldConfigurationScheme(id, name) {
    _classCallCheck(this, FieldConfigurationScheme);

    FieldConfigurationScheme.initialize(this, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldConfigurationScheme, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>FieldConfigurationScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldConfigurationScheme} obj Optional instance to populate.
     * @return {module:model/FieldConfigurationScheme} The populated <code>FieldConfigurationScheme</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldConfigurationScheme();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FieldConfigurationScheme;
}();
/**
 * The description of the field configuration scheme.
 * @member {String} description
 */


FieldConfigurationScheme.prototype['description'] = undefined;
/**
 * The ID of the field configuration scheme.
 * @member {String} id
 */

FieldConfigurationScheme.prototype['id'] = undefined;
/**
 * The name of the field configuration scheme.
 * @member {String} name
 */

FieldConfigurationScheme.prototype['name'] = undefined;
var _default = FieldConfigurationScheme;
exports["default"] = _default;