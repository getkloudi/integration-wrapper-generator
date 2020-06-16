"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomFieldOptionValue = _interopRequireDefault(require("./CustomFieldOptionValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BulkCreateCustomFieldOptionRequest model module.
 * @module model/BulkCreateCustomFieldOptionRequest
 * @version 1.4.0
 */
var BulkCreateCustomFieldOptionRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BulkCreateCustomFieldOptionRequest</code>.
   * Details of options to create for a custom field.
   * @alias module:model/BulkCreateCustomFieldOptionRequest
   */
  function BulkCreateCustomFieldOptionRequest() {
    _classCallCheck(this, BulkCreateCustomFieldOptionRequest);

    BulkCreateCustomFieldOptionRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BulkCreateCustomFieldOptionRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BulkCreateCustomFieldOptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkCreateCustomFieldOptionRequest} obj Optional instance to populate.
     * @return {module:model/BulkCreateCustomFieldOptionRequest} The populated <code>BulkCreateCustomFieldOptionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BulkCreateCustomFieldOptionRequest();

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_CustomFieldOptionValue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BulkCreateCustomFieldOptionRequest;
}();
/**
 * Details of options to create.
 * @member {Array.<module:model/CustomFieldOptionValue>} options
 */


BulkCreateCustomFieldOptionRequest.prototype['options'] = undefined;
var _default = BulkCreateCustomFieldOptionRequest;
exports["default"] = _default;