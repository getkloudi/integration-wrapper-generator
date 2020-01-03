"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InternetGatewayAttachment = _interopRequireDefault(require("./InternetGatewayAttachment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EgressOnlyInternetGateway model module.
 * @module model/EgressOnlyInternetGateway
 * @version 1.0.0
 */
var EgressOnlyInternetGateway =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EgressOnlyInternetGateway</code>.
   * Describes an egress-only internet gateway.
   * @alias module:model/EgressOnlyInternetGateway
   */
  function EgressOnlyInternetGateway() {
    _classCallCheck(this, EgressOnlyInternetGateway);

    EgressOnlyInternetGateway.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EgressOnlyInternetGateway, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EgressOnlyInternetGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EgressOnlyInternetGateway} obj Optional instance to populate.
     * @return {module:model/EgressOnlyInternetGateway} The populated <code>EgressOnlyInternetGateway</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EgressOnlyInternetGateway();

        if (data.hasOwnProperty('Attachments')) {
          obj['Attachments'] = _ApiClient["default"].convertToType(data['Attachments'], [_InternetGatewayAttachment["default"]]);
        }

        if (data.hasOwnProperty('EgressOnlyInternetGatewayId')) {
          obj['EgressOnlyInternetGatewayId'] = _ApiClient["default"].convertToType(data['EgressOnlyInternetGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EgressOnlyInternetGateway;
}();
/**
 * @member {Array.<module:model/InternetGatewayAttachment>} Attachments
 */


EgressOnlyInternetGateway.prototype['Attachments'] = undefined;
/**
 * @member {String} EgressOnlyInternetGatewayId
 */

EgressOnlyInternetGateway.prototype['EgressOnlyInternetGatewayId'] = undefined;
var _default = EgressOnlyInternetGateway;
exports["default"] = _default;