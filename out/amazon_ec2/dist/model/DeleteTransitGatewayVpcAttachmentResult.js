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
 * The DeleteTransitGatewayVpcAttachmentResult model module.
 * @module model/DeleteTransitGatewayVpcAttachmentResult
 * @version 1.1.0
 */
var DeleteTransitGatewayVpcAttachmentResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteTransitGatewayVpcAttachmentResult</code>.
   * @alias module:model/DeleteTransitGatewayVpcAttachmentResult
   */
  function DeleteTransitGatewayVpcAttachmentResult() {
    _classCallCheck(this, DeleteTransitGatewayVpcAttachmentResult);

    DeleteTransitGatewayVpcAttachmentResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteTransitGatewayVpcAttachmentResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteTransitGatewayVpcAttachmentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTransitGatewayVpcAttachmentResult} obj Optional instance to populate.
     * @return {module:model/DeleteTransitGatewayVpcAttachmentResult} The populated <code>DeleteTransitGatewayVpcAttachmentResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteTransitGatewayVpcAttachmentResult();

        if (data.hasOwnProperty('TransitGatewayVpcAttachment')) {
          obj['TransitGatewayVpcAttachment'] = _TransitGatewayVpcAttachment["default"].constructFromObject(data['TransitGatewayVpcAttachment']);
        }
      }

      return obj;
    }
  }]);

  return DeleteTransitGatewayVpcAttachmentResult;
}();
/**
 * @member {module:model/TransitGatewayVpcAttachment} TransitGatewayVpcAttachment
 */


DeleteTransitGatewayVpcAttachmentResult.prototype['TransitGatewayVpcAttachment'] = undefined;
var _default = DeleteTransitGatewayVpcAttachmentResult;
exports["default"] = _default;