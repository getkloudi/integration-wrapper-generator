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
 * The RejectVpcPeeringConnectionRequest model module.
 * @module model/RejectVpcPeeringConnectionRequest
 * @version 1.0.0
 */
var RejectVpcPeeringConnectionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RejectVpcPeeringConnectionRequest</code>.
   * @alias module:model/RejectVpcPeeringConnectionRequest
   * @param vpcPeeringConnectionId {String} 
   */
  function RejectVpcPeeringConnectionRequest(vpcPeeringConnectionId) {
    _classCallCheck(this, RejectVpcPeeringConnectionRequest);

    RejectVpcPeeringConnectionRequest.initialize(this, vpcPeeringConnectionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RejectVpcPeeringConnectionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcPeeringConnectionId) {
      obj['VpcPeeringConnectionId'] = vpcPeeringConnectionId;
    }
    /**
     * Constructs a <code>RejectVpcPeeringConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectVpcPeeringConnectionRequest} obj Optional instance to populate.
     * @return {module:model/RejectVpcPeeringConnectionRequest} The populated <code>RejectVpcPeeringConnectionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RejectVpcPeeringConnectionRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VpcPeeringConnectionId')) {
          obj['VpcPeeringConnectionId'] = _ApiClient["default"].convertToType(data['VpcPeeringConnectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RejectVpcPeeringConnectionRequest;
}();
/**
 * @member {Boolean} DryRun
 */


RejectVpcPeeringConnectionRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpcPeeringConnectionId
 */

RejectVpcPeeringConnectionRequest.prototype['VpcPeeringConnectionId'] = undefined;
var _default = RejectVpcPeeringConnectionRequest;
exports["default"] = _default;