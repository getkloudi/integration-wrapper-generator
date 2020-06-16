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
 * The ChangeDetails model module.
 * @module model/ChangeDetails
 * @version 1.4.0
 */
var ChangeDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChangeDetails</code>.
   * A change item.
   * @alias module:model/ChangeDetails
   */
  function ChangeDetails() {
    _classCallCheck(this, ChangeDetails);

    ChangeDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChangeDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChangeDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeDetails} obj Optional instance to populate.
     * @return {module:model/ChangeDetails} The populated <code>ChangeDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChangeDetails();

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
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('fromString')) {
          obj['fromString'] = _ApiClient["default"].convertToType(data['fromString'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('toString')) {
          obj['toString'] = _ApiClient["default"].convertToType(data['toString'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChangeDetails;
}();
/**
 * The name of the field changed.
 * @member {String} field
 */


ChangeDetails.prototype['field'] = undefined;
/**
 * The ID of the field changed.
 * @member {String} fieldId
 */

ChangeDetails.prototype['fieldId'] = undefined;
/**
 * The type of the field changed.
 * @member {String} fieldtype
 */

ChangeDetails.prototype['fieldtype'] = undefined;
/**
 * The details of the original value.
 * @member {String} from
 */

ChangeDetails.prototype['from'] = undefined;
/**
 * The details of the original value as a string.
 * @member {String} fromString
 */

ChangeDetails.prototype['fromString'] = undefined;
/**
 * The details of the new value.
 * @member {String} to
 */

ChangeDetails.prototype['to'] = undefined;
/**
 * The details of the new value as a string.
 * @member {String} toString
 */

ChangeDetails.prototype['toString'] = undefined;
var _default = ChangeDetails;
exports["default"] = _default;