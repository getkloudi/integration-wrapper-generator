"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JqlQueryFieldEntityProperty = _interopRequireDefault(require("./JqlQueryFieldEntityProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JqlQueryField model module.
 * @module model/JqlQueryField
 * @version 1.4.0
 */
var JqlQueryField = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JqlQueryField</code>.
   * A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries.
   * @alias module:model/JqlQueryField
   * @param name {String} The name of the field.
   */
  function JqlQueryField(name) {
    _classCallCheck(this, JqlQueryField);

    JqlQueryField.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JqlQueryField, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>JqlQueryField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQueryField} obj Optional instance to populate.
     * @return {module:model/JqlQueryField} The populated <code>JqlQueryField</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JqlQueryField();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('property')) {
          obj['property'] = _ApiClient["default"].convertToType(data['property'], [_JqlQueryFieldEntityProperty["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JqlQueryField;
}();
/**
 * The name of the field.
 * @member {String} name
 */


JqlQueryField.prototype['name'] = undefined;
/**
 * When the field refers to a value in an entity property, details of the entity property value.
 * @member {Array.<module:model/JqlQueryFieldEntityProperty>} property
 */

JqlQueryField.prototype['property'] = undefined;
var _default = JqlQueryField;
exports["default"] = _default;