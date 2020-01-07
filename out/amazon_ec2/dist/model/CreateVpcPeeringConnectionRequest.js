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
 * The CreateVpcPeeringConnectionRequest model module.
 * @module model/CreateVpcPeeringConnectionRequest
 * @version 1.1.0
 */
var CreateVpcPeeringConnectionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpcPeeringConnectionRequest</code>.
   * @alias module:model/CreateVpcPeeringConnectionRequest
   */
  function CreateVpcPeeringConnectionRequest() {
    _classCallCheck(this, CreateVpcPeeringConnectionRequest);

    CreateVpcPeeringConnectionRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpcPeeringConnectionRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateVpcPeeringConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpcPeeringConnectionRequest} obj Optional instance to populate.
     * @return {module:model/CreateVpcPeeringConnectionRequest} The populated <code>CreateVpcPeeringConnectionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpcPeeringConnectionRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('PeerOwnerId')) {
          obj['PeerOwnerId'] = _ApiClient["default"].convertToType(data['PeerOwnerId'], 'String');
        }

        if (data.hasOwnProperty('PeerRegion')) {
          obj['PeerRegion'] = _ApiClient["default"].convertToType(data['PeerRegion'], 'String');
        }

        if (data.hasOwnProperty('PeerVpcId')) {
          obj['PeerVpcId'] = _ApiClient["default"].convertToType(data['PeerVpcId'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateVpcPeeringConnectionRequest;
}();
/**
 * @member {Boolean} DryRun
 */


CreateVpcPeeringConnectionRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} PeerOwnerId
 */

CreateVpcPeeringConnectionRequest.prototype['PeerOwnerId'] = undefined;
/**
 * @member {String} PeerRegion
 */

CreateVpcPeeringConnectionRequest.prototype['PeerRegion'] = undefined;
/**
 * @member {String} PeerVpcId
 */

CreateVpcPeeringConnectionRequest.prototype['PeerVpcId'] = undefined;
/**
 * @member {String} VpcId
 */

CreateVpcPeeringConnectionRequest.prototype['VpcId'] = undefined;
var _default = CreateVpcPeeringConnectionRequest;
exports["default"] = _default;