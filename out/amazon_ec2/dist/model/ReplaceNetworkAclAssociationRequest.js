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
 * The ReplaceNetworkAclAssociationRequest model module.
 * @module model/ReplaceNetworkAclAssociationRequest
 * @version 1.1.0
 */
var ReplaceNetworkAclAssociationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReplaceNetworkAclAssociationRequest</code>.
   * @alias module:model/ReplaceNetworkAclAssociationRequest
   * @param associationId {String} 
   * @param networkAclId {String} 
   */
  function ReplaceNetworkAclAssociationRequest(associationId, networkAclId) {
    _classCallCheck(this, ReplaceNetworkAclAssociationRequest);

    ReplaceNetworkAclAssociationRequest.initialize(this, associationId, networkAclId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReplaceNetworkAclAssociationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, associationId, networkAclId) {
      obj['AssociationId'] = associationId;
      obj['NetworkAclId'] = networkAclId;
    }
    /**
     * Constructs a <code>ReplaceNetworkAclAssociationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceNetworkAclAssociationRequest} obj Optional instance to populate.
     * @return {module:model/ReplaceNetworkAclAssociationRequest} The populated <code>ReplaceNetworkAclAssociationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReplaceNetworkAclAssociationRequest();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkAclId')) {
          obj['NetworkAclId'] = _ApiClient["default"].convertToType(data['NetworkAclId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReplaceNetworkAclAssociationRequest;
}();
/**
 * @member {String} AssociationId
 */


ReplaceNetworkAclAssociationRequest.prototype['AssociationId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ReplaceNetworkAclAssociationRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkAclId
 */

ReplaceNetworkAclAssociationRequest.prototype['NetworkAclId'] = undefined;
var _default = ReplaceNetworkAclAssociationRequest;
exports["default"] = _default;