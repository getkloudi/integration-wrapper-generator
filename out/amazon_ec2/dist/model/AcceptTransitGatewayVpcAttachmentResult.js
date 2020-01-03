"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayVpcAttachment = _interopRequireDefault(require("./TransitGatewayVpcAttachment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AcceptTransitGatewayVpcAttachmentResult model module.
 * @module model/AcceptTransitGatewayVpcAttachmentResult
 * @version 1.0.0
 */
var AcceptTransitGatewayVpcAttachmentResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AcceptTransitGatewayVpcAttachmentResult</code>.
   * @alias module:model/AcceptTransitGatewayVpcAttachmentResult
   */
  function AcceptTransitGatewayVpcAttachmentResult() {
    _classCallCheck(this, AcceptTransitGatewayVpcAttachmentResult);

    AcceptTransitGatewayVpcAttachmentResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AcceptTransitGatewayVpcAttachmentResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AcceptTransitGatewayVpcAttachmentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptTransitGatewayVpcAttachmentResult} obj Optional instance to populate.
     * @return {module:model/AcceptTransitGatewayVpcAttachmentResult} The populated <code>AcceptTransitGatewayVpcAttachmentResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AcceptTransitGatewayVpcAttachmentResult();

        if (data.hasOwnProperty('TransitGatewayVpcAttachment')) {
          obj['TransitGatewayVpcAttachment'] = _TransitGatewayVpcAttachment["default"].constructFromObject(data['TransitGatewayVpcAttachment']);
        }
      }

      return obj;
    }
  }]);

  return AcceptTransitGatewayVpcAttachmentResult;
}();
/**
 * @member {module:model/TransitGatewayVpcAttachment} TransitGatewayVpcAttachment
 */


AcceptTransitGatewayVpcAttachmentResult.prototype['TransitGatewayVpcAttachment'] = undefined;
var _default = AcceptTransitGatewayVpcAttachmentResult;
exports["default"] = _default;