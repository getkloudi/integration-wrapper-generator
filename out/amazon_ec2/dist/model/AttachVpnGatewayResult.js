"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcAttachment = _interopRequireDefault(require("./VpcAttachment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AttachVpnGatewayResult model module.
 * @module model/AttachVpnGatewayResult
 * @version 1.1.0
 */
var AttachVpnGatewayResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AttachVpnGatewayResult</code>.
   * Contains the output of AttachVpnGateway.
   * @alias module:model/AttachVpnGatewayResult
   */
  function AttachVpnGatewayResult() {
    _classCallCheck(this, AttachVpnGatewayResult);

    AttachVpnGatewayResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachVpnGatewayResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttachVpnGatewayResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachVpnGatewayResult} obj Optional instance to populate.
     * @return {module:model/AttachVpnGatewayResult} The populated <code>AttachVpnGatewayResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachVpnGatewayResult();

        if (data.hasOwnProperty('VpcAttachment')) {
          obj['VpcAttachment'] = _VpcAttachment["default"].constructFromObject(data['VpcAttachment']);
        }
      }

      return obj;
    }
  }]);

  return AttachVpnGatewayResult;
}();
/**
 * @member {module:model/VpcAttachment} VpcAttachment
 */


AttachVpnGatewayResult.prototype['VpcAttachment'] = undefined;
var _default = AttachVpnGatewayResult;
exports["default"] = _default;