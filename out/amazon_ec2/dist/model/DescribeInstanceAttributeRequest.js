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
 * The DescribeInstanceAttributeRequest model module.
 * @module model/DescribeInstanceAttributeRequest
 * @version 1.1.0
 */
var DescribeInstanceAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeInstanceAttributeRequest</code>.
   * @alias module:model/DescribeInstanceAttributeRequest
   * @param attribute {module:model/InstanceAttributeName} 
   * @param instanceId {String} 
   */
  function DescribeInstanceAttributeRequest(attribute, instanceId) {
    _classCallCheck(this, DescribeInstanceAttributeRequest);

    DescribeInstanceAttributeRequest.initialize(this, attribute, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeInstanceAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, attribute, instanceId) {
      obj['Attribute'] = attribute;
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>DescribeInstanceAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeInstanceAttributeRequest} obj Optional instance to populate.
     * @return {module:model/DescribeInstanceAttributeRequest} The populated <code>DescribeInstanceAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeInstanceAttributeRequest();

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

  return DescribeInstanceAttributeRequest;
}();
/**
 * @member {module:model/InstanceAttributeName} Attribute
 */


DescribeInstanceAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeInstanceAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

DescribeInstanceAttributeRequest.prototype['InstanceId'] = undefined;
var _default = DescribeInstanceAttributeRequest;
exports["default"] = _default;