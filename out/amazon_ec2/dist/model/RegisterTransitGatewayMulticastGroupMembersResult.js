"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayMulticastRegisteredGroupMembers = _interopRequireDefault(require("./TransitGatewayMulticastRegisteredGroupMembers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RegisterTransitGatewayMulticastGroupMembersResult model module.
 * @module model/RegisterTransitGatewayMulticastGroupMembersResult
 * @version 1.1.0
 */
var RegisterTransitGatewayMulticastGroupMembersResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RegisterTransitGatewayMulticastGroupMembersResult</code>.
   * @alias module:model/RegisterTransitGatewayMulticastGroupMembersResult
   */
  function RegisterTransitGatewayMulticastGroupMembersResult() {
    _classCallCheck(this, RegisterTransitGatewayMulticastGroupMembersResult);

    RegisterTransitGatewayMulticastGroupMembersResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisterTransitGatewayMulticastGroupMembersResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegisterTransitGatewayMulticastGroupMembersResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterTransitGatewayMulticastGroupMembersResult} obj Optional instance to populate.
     * @return {module:model/RegisterTransitGatewayMulticastGroupMembersResult} The populated <code>RegisterTransitGatewayMulticastGroupMembersResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterTransitGatewayMulticastGroupMembersResult();

        if (data.hasOwnProperty('RegisteredMulticastGroupMembers')) {
          obj['RegisteredMulticastGroupMembers'] = _TransitGatewayMulticastRegisteredGroupMembers["default"].constructFromObject(data['RegisteredMulticastGroupMembers']);
        }
      }

      return obj;
    }
  }]);

  return RegisterTransitGatewayMulticastGroupMembersResult;
}();
/**
 * @member {module:model/TransitGatewayMulticastRegisteredGroupMembers} RegisteredMulticastGroupMembers
 */


RegisterTransitGatewayMulticastGroupMembersResult.prototype['RegisteredMulticastGroupMembers'] = undefined;
var _default = RegisterTransitGatewayMulticastGroupMembersResult;
exports["default"] = _default;