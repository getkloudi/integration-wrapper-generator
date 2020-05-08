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
 * The InlineResponse20039Items model module.
 * @module model/InlineResponse20039Items
 * @version 1.3.1
 */
var InlineResponse20039Items = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20039Items</code>.
   * @alias module:model/InlineResponse20039Items
   * @param field {String} 
   * @param fieldId {String} 
   * @param fieldtype {String} 
   * @param fromString {String} 
   * @param _toString {String} 
   */
  function InlineResponse20039Items(field, fieldId, fieldtype, fromString, _toString) {
    _classCallCheck(this, InlineResponse20039Items);

    InlineResponse20039Items.initialize(this, field, fieldId, fieldtype, fromString, _toString);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20039Items, null, [{
    key: "initialize",
    value: function initialize(obj, field, fieldId, fieldtype, fromString, _toString) {
      obj['field'] = field;
      obj['fieldId'] = fieldId;
      obj['fieldtype'] = fieldtype;
      obj['fromString'] = fromString;
      obj['toString'] = _toString;
    }
    /**
     * Constructs a <code>InlineResponse20039Items</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20039Items} obj Optional instance to populate.
     * @return {module:model/InlineResponse20039Items} The populated <code>InlineResponse20039Items</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20039Items();

        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }

        if (data.hasOwnProperty('fieldId')) {
          obj['fieldId'] = _ApiClient["default"].convertToType(data['fieldId'], 'String');
        }

        if (data.hasOwnProperty('fieldtype')) {
          obj['fieldtype'] = _ApiClient["default"].convertToType(data['fieldtype'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], Object);
        }

        if (data.hasOwnProperty('fromString')) {
          obj['fromString'] = _ApiClient["default"].convertToType(data['fromString'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], Object);
        }

        if (data.hasOwnProperty('toString')) {
          obj['toString'] = _ApiClient["default"].convertToType(data['toString'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20039Items;
}();
/**
 * @member {String} field
 */


InlineResponse20039Items.prototype['field'] = undefined;
/**
 * @member {String} fieldId
 */

InlineResponse20039Items.prototype['fieldId'] = undefined;
/**
 * @member {String} fieldtype
 */

InlineResponse20039Items.prototype['fieldtype'] = undefined;
/**
 * @member {Object} from
 */

InlineResponse20039Items.prototype['from'] = undefined;
/**
 * @member {String} fromString
 */

InlineResponse20039Items.prototype['fromString'] = undefined;
/**
 * @member {Object} to
 */

InlineResponse20039Items.prototype['to'] = undefined;
/**
 * @member {String} toString
 */

InlineResponse20039Items.prototype['toString'] = undefined;
var _default = InlineResponse20039Items;
exports["default"] = _default;