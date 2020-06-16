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
 * The EntityProperty model module.
 * @module model/EntityProperty
 * @version 1.4.0
 */
var EntityProperty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntityProperty</code>.
   * An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).
   * @alias module:model/EntityProperty
   */
  function EntityProperty() {
    _classCallCheck(this, EntityProperty);

    EntityProperty.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntityProperty, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntityProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityProperty} obj Optional instance to populate.
     * @return {module:model/EntityProperty} The populated <code>EntityProperty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntityProperty();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], Object);
        }
      }

      return obj;
    }
  }]);

  return EntityProperty;
}();
/**
 * The key of the property. Required on create and update.
 * @member {String} key
 */


EntityProperty.prototype['key'] = undefined;
/**
 * The value of the property. Required on create and update.
 * @member {Object} value
 */

EntityProperty.prototype['value'] = undefined;
var _default = EntityProperty;
exports["default"] = _default;