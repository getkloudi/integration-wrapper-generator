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
 * The TargetConfigurationRequest model module.
 * @module model/TargetConfigurationRequest
 * @version 1.1.0
 */
var TargetConfigurationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TargetConfigurationRequest</code>.
   * Details about the target configuration.
   * @alias module:model/TargetConfigurationRequest
   * @param offeringId {String} 
   */
  function TargetConfigurationRequest(offeringId) {
    _classCallCheck(this, TargetConfigurationRequest);

    TargetConfigurationRequest.initialize(this, offeringId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TargetConfigurationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, offeringId) {
      obj['OfferingId'] = offeringId;
    }
    /**
     * Constructs a <code>TargetConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetConfigurationRequest} obj Optional instance to populate.
     * @return {module:model/TargetConfigurationRequest} The populated <code>TargetConfigurationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TargetConfigurationRequest();

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('OfferingId')) {
          obj['OfferingId'] = _ApiClient["default"].convertToType(data['OfferingId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TargetConfigurationRequest;
}();
/**
 * @member {Number} InstanceCount
 */


TargetConfigurationRequest.prototype['InstanceCount'] = undefined;
/**
 * @member {String} OfferingId
 */

TargetConfigurationRequest.prototype['OfferingId'] = undefined;
var _default = TargetConfigurationRequest;
exports["default"] = _default;