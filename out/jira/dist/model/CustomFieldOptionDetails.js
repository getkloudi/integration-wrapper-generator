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
 * The CustomFieldOptionDetails model module.
 * @module model/CustomFieldOptionDetails
 * @version 1.4.0
 */
var CustomFieldOptionDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomFieldOptionDetails</code>.
   * Details of a custom field option and its cascading options.
   * @alias module:model/CustomFieldOptionDetails
   */
  function CustomFieldOptionDetails() {
    _classCallCheck(this, CustomFieldOptionDetails);

    CustomFieldOptionDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomFieldOptionDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomFieldOptionDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldOptionDetails} obj Optional instance to populate.
     * @return {module:model/CustomFieldOptionDetails} The populated <code>CustomFieldOptionDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomFieldOptionDetails();

        if (data.hasOwnProperty('cascadingOptions')) {
          obj['cascadingOptions'] = _ApiClient["default"].convertToType(data['cascadingOptions'], ['String']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomFieldOptionDetails;
}();
/**
 * The cascading options.
 * @member {Array.<String>} cascadingOptions
 */


CustomFieldOptionDetails.prototype['cascadingOptions'] = undefined;
/**
 * The ID of the custom field option.
 * @member {Number} id
 */

CustomFieldOptionDetails.prototype['id'] = undefined;
/**
 * The value of the custom field option.
 * @member {String} value
 */

CustomFieldOptionDetails.prototype['value'] = undefined;
var _default = CustomFieldOptionDetails;
exports["default"] = _default;