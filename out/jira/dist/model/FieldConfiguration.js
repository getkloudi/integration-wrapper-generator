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
 * The FieldConfiguration model module.
 * @module model/FieldConfiguration
 * @version 1.4.0
 */
var FieldConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldConfiguration</code>.
   * Details of a field configuration.
   * @alias module:model/FieldConfiguration
   * @param description {String} The description of the field configuration.
   * @param id {Number} The ID of the field configuration.
   * @param name {String} The name of the field configuration.
   */
  function FieldConfiguration(description, id, name) {
    _classCallCheck(this, FieldConfiguration);

    FieldConfiguration.initialize(this, description, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj, description, id, name) {
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>FieldConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldConfiguration} obj Optional instance to populate.
     * @return {module:model/FieldConfiguration} The populated <code>FieldConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldConfiguration();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('isDefault')) {
          obj['isDefault'] = _ApiClient["default"].convertToType(data['isDefault'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FieldConfiguration;
}();
/**
 * The description of the field configuration.
 * @member {String} description
 */


FieldConfiguration.prototype['description'] = undefined;
/**
 * The ID of the field configuration.
 * @member {Number} id
 */

FieldConfiguration.prototype['id'] = undefined;
/**
 * Whether the field configuration is the default.
 * @member {Boolean} isDefault
 */

FieldConfiguration.prototype['isDefault'] = undefined;
/**
 * The name of the field configuration.
 * @member {String} name
 */

FieldConfiguration.prototype['name'] = undefined;
var _default = FieldConfiguration;
exports["default"] = _default;