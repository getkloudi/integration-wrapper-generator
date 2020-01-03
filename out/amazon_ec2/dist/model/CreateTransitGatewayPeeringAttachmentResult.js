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
 * The CreateTransitGatewayPeeringAttachmentResult model module.
 * @module model/CreateTransitGatewayPeeringAttachmentResult
 * @version 1.0.0
 */
var CreateTransitGatewayPeeringAttachmentResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTransitGatewayPeeringAttachmentResult</code>.
   * @alias module:model/CreateTransitGatewayPeeringAttachmentResult
   */
  function CreateTransitGatewayPeeringAttachmentResult() {
    _classCallCheck(this, CreateTransitGatewayPeeringAttachmentResult);

    CreateTransitGatewayPeeringAttachmentResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTransitGatewayPeeringAttachmentResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTransitGatewayPeeringAttachmentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransitGatewayPeeringAttachmentResult} obj Optional instance to populate.
     * @return {module:model/CreateTransitGatewayPeeringAttachmentResult} The populated <code>CreateTransitGatewayPeeringAttachmentResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTransitGatewayPeeringAttachmentResult();

        if (data.hasOwnProperty('TransitGatewayPeeringAttachment')) {
          obj['TransitGatewayPeeringAttachment'] = _TransitGatewayPeeringAttachment["default"].constructFromObject(data['TransitGatewayPeeringAttachment']);
        }
      }

      return obj;
    }
  }]);

  return CreateTransitGatewayPeeringAttachmentResult;
}();
/**
 * @member {module:model/TransitGatewayPeeringAttachment} TransitGatewayPeeringAttachment
 */


CreateTransitGatewayPeeringAttachmentResult.prototype['TransitGatewayPeeringAttachment'] = undefined;
var _default = CreateTransitGatewayPeeringAttachmentResult;
exports["default"] = _default;