"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayMulticastDeregisteredGroupMembers = _interopRequireDefault(require("./TransitGatewayMulticastDeregisteredGroupMembers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeregisterTransitGatewayMulticastGroupMembersResult model module.
 * @module model/DeregisterTransitGatewayMulticastGroupMembersResult
 * @version 1.0.0
 */
var DeregisterTransitGatewayMulticastGroupMembersResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeregisterTransitGatewayMulticastGroupMembersResult</code>.
   * @alias module:model/DeregisterTransitGatewayMulticastGroupMembersResult
   */
  function DeregisterTransitGatewayMulticastGroupMembersResult() {
    _classCallCheck(this, DeregisterTransitGatewayMulticastGroupMembersResult);

    DeregisterTransitGatewayMulticastGroupMembersResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeregisterTransitGatewayMulticastGroupMembersResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeregisterTransitGatewayMulticastGroupMembersResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeregisterTransitGatewayMulticastGroupMembersResult} obj Optional instance to populate.
     * @return {module:model/DeregisterTransitGatewayMulticastGroupMembersResult} The populated <code>DeregisterTransitGatewayMulticastGroupMembersResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeregisterTransitGatewayMulticastGroupMembersResult();

        if (data.hasOwnProperty('DeregisteredMulticastGroupMembers')) {
          obj['DeregisteredMulticastGroupMembers'] = _TransitGatewayMulticastDeregisteredGroupMembers["default"].constructFromObject(data['DeregisteredMulticastGroupMembers']);
        }
      }

      return obj;
    }
  }]);

  return DeregisterTransitGatewayMulticastGroupMembersResult;
}();
/**
 * @member {module:model/TransitGatewayMulticastDeregisteredGroupMembers} DeregisteredMulticastGroupMembers
 */


DeregisterTransitGatewayMulticastGroupMembersResult.prototype['DeregisteredMulticastGroupMembers'] = undefined;
var _default = DeregisterTransitGatewayMulticastGroupMembersResult;
exports["default"] = _default;