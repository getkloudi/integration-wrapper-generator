"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceAttributeName = _interopRequireDefault(require("./InstanceAttributeName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResetInstanceAttributeRequest model module.
 * @module model/ResetInstanceAttributeRequest
 * @version 1.1.0
 */
var ResetInstanceAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ResetInstanceAttributeRequest</code>.
   * @alias module:model/ResetInstanceAttributeRequest
   * @param attribute {module:model/InstanceAttributeName} 
   * @param instanceId {String} 
   */
  function ResetInstanceAttributeRequest(attribute, instanceId) {
    _classCallCheck(this, ResetInstanceAttributeRequest);

    ResetInstanceAttributeRequest.initialize(this, attribute, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResetInstanceAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, attribute, instanceId) {
      obj['Attribute'] = attribute;
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>ResetInstanceAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetInstanceAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ResetInstanceAttributeRequest} The populated <code>ResetInstanceAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResetInstanceAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _InstanceAttributeName["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ResetInstanceAttributeRequest;
}();
/**
 * @member {module:model/InstanceAttributeName} Attribute
 */


ResetInstanceAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ResetInstanceAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

ResetInstanceAttributeRequest.prototype['InstanceId'] = undefined;
var _default = ResetInstanceAttributeRequest;
exports["default"] = _default;