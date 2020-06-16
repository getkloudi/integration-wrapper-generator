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
 * The JqlQueryFieldEntityProperty model module.
 * @module model/JqlQueryFieldEntityProperty
 * @version 1.4.0
 */
var JqlQueryFieldEntityProperty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JqlQueryFieldEntityProperty</code>.
   * Details of an entity property.
   * @alias module:model/JqlQueryFieldEntityProperty
   * @param entity {String} The object on which the property is set.
   * @param key {String} The key of the property.
   * @param path {String} The path in the property value to query.
   */
  function JqlQueryFieldEntityProperty(entity, key, path) {
    _classCallCheck(this, JqlQueryFieldEntityProperty);

    JqlQueryFieldEntityProperty.initialize(this, entity, key, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JqlQueryFieldEntityProperty, null, [{
    key: "initialize",
    value: function initialize(obj, entity, key, path) {
      obj['entity'] = entity;
      obj['key'] = key;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>JqlQueryFieldEntityProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQueryFieldEntityProperty} obj Optional instance to populate.
     * @return {module:model/JqlQueryFieldEntityProperty} The populated <code>JqlQueryFieldEntityProperty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JqlQueryFieldEntityProperty();

        if (data.hasOwnProperty('entity')) {
          obj['entity'] = _ApiClient["default"].convertToType(data['entity'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JqlQueryFieldEntityProperty;
}();
/**
 * The object on which the property is set.
 * @member {String} entity
 */


JqlQueryFieldEntityProperty.prototype['entity'] = undefined;
/**
 * The key of the property.
 * @member {String} key
 */

JqlQueryFieldEntityProperty.prototype['key'] = undefined;
/**
 * The path in the property value to query.
 * @member {String} path
 */

JqlQueryFieldEntityProperty.prototype['path'] = undefined;
/**
 * The type of the property value extraction. Not available if the extraction for the property is not registered on the instance with the [Entity property](https://developer.atlassian.com/cloud/jira/platform/modules/entity-property/) module.
 * @member {module:model/JqlQueryFieldEntityProperty.TypeEnum} type
 */

JqlQueryFieldEntityProperty.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

JqlQueryFieldEntityProperty['TypeEnum'] = {
  /**
   * value: "number"
   * @const
   */
  "number": "number",

  /**
   * value: "string"
   * @const
   */
  "string": "string",

  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "date"
   * @const
   */
  "date": "date",

  /**
   * value: "user"
   * @const
   */
  "user": "user"
};
var _default = JqlQueryFieldEntityProperty;
exports["default"] = _default;