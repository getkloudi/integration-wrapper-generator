"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayPropagationState = _interopRequireDefault(require("./TransitGatewayPropagationState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayAttachmentPropagation model module.
 * @module model/TransitGatewayAttachmentPropagation
 * @version 1.1.0
 */
var TransitGatewayAttachmentPropagation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayAttachmentPropagation</code>.
   * Describes a propagation route table.
   * @alias module:model/TransitGatewayAttachmentPropagation
   */
  function TransitGatewayAttachmentPropagation() {
    _classCallCheck(this, TransitGatewayAttachmentPropagation);

    TransitGatewayAttachmentPropagation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayAttachmentPropagation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayAttachmentPropagation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayAttachmentPropagation} obj Optional instance to populate.
     * @return {module:model/TransitGatewayAttachmentPropagation} The populated <code>TransitGatewayAttachmentPropagation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayAttachmentPropagation();

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayPropagationState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('TransitGatewayRouteTableId')) {
          obj['TransitGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['TransitGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayAttachmentPropagation;
}();
/**
 * @member {module:model/TransitGatewayPropagationState} State
 */


TransitGatewayAttachmentPropagation.prototype['State'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

TransitGatewayAttachmentPropagation.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = TransitGatewayAttachmentPropagation;
exports["default"] = _default;