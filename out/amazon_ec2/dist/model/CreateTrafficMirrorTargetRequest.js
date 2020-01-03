"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTrafficMirrorTargetRequest model module.
 * @module model/CreateTrafficMirrorTargetRequest
 * @version 1.0.0
 */
var CreateTrafficMirrorTargetRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTrafficMirrorTargetRequest</code>.
   * @alias module:model/CreateTrafficMirrorTargetRequest
   */
  function CreateTrafficMirrorTargetRequest() {
    _classCallCheck(this, CreateTrafficMirrorTargetRequest);

    CreateTrafficMirrorTargetRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTrafficMirrorTargetRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTrafficMirrorTargetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTrafficMirrorTargetRequest} obj Optional instance to populate.
     * @return {module:model/CreateTrafficMirrorTargetRequest} The populated <code>CreateTrafficMirrorTargetRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTrafficMirrorTargetRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('NetworkLoadBalancerArn')) {
          obj['NetworkLoadBalancerArn'] = _ApiClient["default"].convertToType(data['NetworkLoadBalancerArn'], 'String');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateTrafficMirrorTargetRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateTrafficMirrorTargetRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

CreateTrafficMirrorTargetRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateTrafficMirrorTargetRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

CreateTrafficMirrorTargetRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} NetworkLoadBalancerArn
 */

CreateTrafficMirrorTargetRequest.prototype['NetworkLoadBalancerArn'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateTrafficMirrorTargetRequest.prototype['TagSpecifications'] = undefined;
var _default = CreateTrafficMirrorTargetRequest;
exports["default"] = _default;