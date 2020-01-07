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
 * The TransitGatewayPropagation model module.
 * @module model/TransitGatewayPropagation
 * @version 1.1.0
 */
var TransitGatewayPropagation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayPropagation</code>.
   * Describes route propagation.
   * @alias module:model/TransitGatewayPropagation
   */
  function TransitGatewayPropagation() {
    _classCallCheck(this, TransitGatewayPropagation);

    TransitGatewayPropagation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayPropagation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayPropagation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayPropagation} obj Optional instance to populate.
     * @return {module:model/TransitGatewayPropagation} The populated <code>TransitGatewayPropagation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayPropagation();

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

        if (data.hasOwnProperty('TransitGatewayRouteTableId')) {
          obj['TransitGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['TransitGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayPropagation;
}();
/**
 * @member {String} ResourceId
 */


TransitGatewayPropagation.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */

TransitGatewayPropagation.prototype['ResourceType'] = undefined;
/**
 * @member {module:model/TransitGatewayPropagationState} State
 */

TransitGatewayPropagation.prototype['State'] = undefined;
/**
 * @member {String} TransitGatewayAttachmentId
 */

TransitGatewayPropagation.prototype['TransitGatewayAttachmentId'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

TransitGatewayPropagation.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = TransitGatewayPropagation;
exports["default"] = _default;