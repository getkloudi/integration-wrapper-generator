"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayAttachmentResourceType = _interopRequireDefault(require("./TransitGatewayAttachmentResourceType"));

var _TransitGatewayPropagationState = _interopRequireDefault(require("./TransitGatewayPropagationState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayRouteTablePropagation model module.
 * @module model/TransitGatewayRouteTablePropagation
 * @version 1.0.0
 */
var TransitGatewayRouteTablePropagation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayRouteTablePropagation</code>.
   * Describes a route table propagation.
   * @alias module:model/TransitGatewayRouteTablePropagation
   */
  function TransitGatewayRouteTablePropagation() {
    _classCallCheck(this, TransitGatewayRouteTablePropagation);

    TransitGatewayRouteTablePropagation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayRouteTablePropagation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayRouteTablePropagation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayRouteTablePropagation} obj Optional instance to populate.
     * @return {module:model/TransitGatewayRouteTablePropagation} The populated <code>TransitGatewayRouteTablePropagation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayRouteTablePropagation();

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _TransitGatewayAttachmentResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayPropagationState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
          obj['TransitGatewayAttachmentId'] = _ApiClient["default"].convertToType(data['TransitGatewayAttachmentId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayRouteTablePropagation;
}();
/**
 * @member {String} ResourceId
 */


TransitGatewayRouteTablePropagation.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */

TransitGatewayRouteTablePropagation.prototype['ResourceType'] = undefined;
/**
 * @member {module:model/TransitGatewayPropagationState} State
 */

TransitGatewayRouteTablePropagation.prototype['State'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayRouteTablePropagation.prototype['TransitGatewayAttachmentId'] = undefined;
var _default = TransitGatewayRouteTablePropagation;
exports["default"] = _default;