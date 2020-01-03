"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DnsSupportValue = _interopRequireDefault(require("./DnsSupportValue"));

var _Ipv6SupportValue = _interopRequireDefault(require("./Ipv6SupportValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTransitGatewayVpcAttachmentRequestOptions model module.
 * @module model/CreateTransitGatewayVpcAttachmentRequestOptions
 * @version 1.0.0
 */
var CreateTransitGatewayVpcAttachmentRequestOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTransitGatewayVpcAttachmentRequestOptions</code>.
   * Describes the options for a VPC attachment.
   * @alias module:model/CreateTransitGatewayVpcAttachmentRequestOptions
   */
  function CreateTransitGatewayVpcAttachmentRequestOptions() {
    _classCallCheck(this, CreateTransitGatewayVpcAttachmentRequestOptions);

    CreateTransitGatewayVpcAttachmentRequestOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTransitGatewayVpcAttachmentRequestOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTransitGatewayVpcAttachmentRequestOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransitGatewayVpcAttachmentRequestOptions} obj Optional instance to populate.
     * @return {module:model/CreateTransitGatewayVpcAttachmentRequestOptions} The populated <code>CreateTransitGatewayVpcAttachmentRequestOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTransitGatewayVpcAttachmentRequestOptions();

        if (data.hasOwnProperty('DnsSupport')) {
          obj['DnsSupport'] = _DnsSupportValue["default"].constructFromObject(data['DnsSupport']);
        }

        if (data.hasOwnProperty('Ipv6Support')) {
          obj['Ipv6Support'] = _Ipv6SupportValue["default"].constructFromObject(data['Ipv6Support']);
        }
      }

      return obj;
    }
  }]);

  return CreateTransitGatewayVpcAttachmentRequestOptions;
}();
/**
 * @member {module:model/DnsSupportValue} DnsSupport
 */


CreateTransitGatewayVpcAttachmentRequestOptions.prototype['DnsSupport'] = undefined;
/**
 * @member {module:model/Ipv6SupportValue} Ipv6Support
 */

CreateTransitGatewayVpcAttachmentRequestOptions.prototype['Ipv6Support'] = undefined;
var _default = CreateTransitGatewayVpcAttachmentRequestOptions;
exports["default"] = _default;