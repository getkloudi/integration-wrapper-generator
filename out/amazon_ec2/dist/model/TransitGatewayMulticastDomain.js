"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TransitGatewayMulticastDomainState = _interopRequireDefault(require("./TransitGatewayMulticastDomainState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayMulticastDomain model module.
 * @module model/TransitGatewayMulticastDomain
 * @version 1.1.0
 */
var TransitGatewayMulticastDomain =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayMulticastDomain</code>.
   * Describes the transit gateway multicast domain.
   * @alias module:model/TransitGatewayMulticastDomain
   */
  function TransitGatewayMulticastDomain() {
    _classCallCheck(this, TransitGatewayMulticastDomain);

    TransitGatewayMulticastDomain.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayMulticastDomain, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayMulticastDomain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayMulticastDomain} obj Optional instance to populate.
     * @return {module:model/TransitGatewayMulticastDomain} The populated <code>TransitGatewayMulticastDomain</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayMulticastDomain();

        if (data.hasOwnProperty('CreationTime')) {
          obj['CreationTime'] = _ApiClient["default"].convertToType(data['CreationTime'], 'Date');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayMulticastDomainState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayMulticastDomainId')) {
          obj['TransitGatewayMulticastDomainId'] = _ApiClient["default"].convertToType(data['TransitGatewayMulticastDomainId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayMulticastDomain;
}();
/**
 * @member {Date} CreationTime
 */


TransitGatewayMulticastDomain.prototype['CreationTime'] = undefined;
/**
 * @member {module:model/TransitGatewayMulticastDomainState} State
 */

TransitGatewayMulticastDomain.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TransitGatewayMulticastDomain.prototype['Tags'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

TransitGatewayMulticastDomain.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

TransitGatewayMulticastDomain.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = TransitGatewayMulticastDomain;
exports["default"] = _default;