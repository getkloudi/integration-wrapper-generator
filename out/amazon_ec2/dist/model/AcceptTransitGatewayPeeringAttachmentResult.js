"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayPeeringAttachment = _interopRequireDefault(require("./TransitGatewayPeeringAttachment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AcceptTransitGatewayPeeringAttachmentResult model module.
 * @module model/AcceptTransitGatewayPeeringAttachmentResult
 * @version 1.1.0
 */
var AcceptTransitGatewayPeeringAttachmentResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AcceptTransitGatewayPeeringAttachmentResult</code>.
   * @alias module:model/AcceptTransitGatewayPeeringAttachmentResult
   */
  function AcceptTransitGatewayPeeringAttachmentResult() {
    _classCallCheck(this, AcceptTransitGatewayPeeringAttachmentResult);

    AcceptTransitGatewayPeeringAttachmentResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AcceptTransitGatewayPeeringAttachmentResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AcceptTransitGatewayPeeringAttachmentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptTransitGatewayPeeringAttachmentResult} obj Optional instance to populate.
     * @return {module:model/AcceptTransitGatewayPeeringAttachmentResult} The populated <code>AcceptTransitGatewayPeeringAttachmentResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AcceptTransitGatewayPeeringAttachmentResult();

        if (data.hasOwnProperty('TransitGatewayPeeringAttachment')) {
          obj['TransitGatewayPeeringAttachment'] = _TransitGatewayPeeringAttachment["default"].constructFromObject(data['TransitGatewayPeeringAttachment']);
        }
      }

      return obj;
    }
  }]);

  return AcceptTransitGatewayPeeringAttachmentResult;
}();
/**
 * @member {module:model/TransitGatewayPeeringAttachment} TransitGatewayPeeringAttachment
 */


AcceptTransitGatewayPeeringAttachmentResult.prototype['TransitGatewayPeeringAttachment'] = undefined;
var _default = AcceptTransitGatewayPeeringAttachmentResult;
exports["default"] = _default;