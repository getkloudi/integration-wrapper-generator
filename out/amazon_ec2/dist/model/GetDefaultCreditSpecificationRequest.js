"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UnlimitedSupportedInstanceFamily = _interopRequireDefault(require("./UnlimitedSupportedInstanceFamily"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetDefaultCreditSpecificationRequest model module.
 * @module model/GetDefaultCreditSpecificationRequest
 * @version 1.0.0
 */
var GetDefaultCreditSpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetDefaultCreditSpecificationRequest</code>.
   * @alias module:model/GetDefaultCreditSpecificationRequest
   * @param instanceFamily {module:model/UnlimitedSupportedInstanceFamily} 
   */
  function GetDefaultCreditSpecificationRequest(instanceFamily) {
    _classCallCheck(this, GetDefaultCreditSpecificationRequest);

    GetDefaultCreditSpecificationRequest.initialize(this, instanceFamily);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetDefaultCreditSpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceFamily) {
      obj['InstanceFamily'] = instanceFamily;
    }
    /**
     * Constructs a <code>GetDefaultCreditSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDefaultCreditSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/GetDefaultCreditSpecificationRequest} The populated <code>GetDefaultCreditSpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetDefaultCreditSpecificationRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceFamily')) {
          obj['InstanceFamily'] = _UnlimitedSupportedInstanceFamily["default"].constructFromObject(data['InstanceFamily']);
        }
      }

      return obj;
    }
  }]);

  return GetDefaultCreditSpecificationRequest;
}();
/**
 * @member {Boolean} DryRun
 */


GetDefaultCreditSpecificationRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/UnlimitedSupportedInstanceFamily} InstanceFamily
 */

GetDefaultCreditSpecificationRequest.prototype['InstanceFamily'] = undefined;
var _default = GetDefaultCreditSpecificationRequest;
exports["default"] = _default;