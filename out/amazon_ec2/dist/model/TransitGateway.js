"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TransitGatewayOptions = _interopRequireDefault(require("./TransitGatewayOptions"));

var _TransitGatewayState = _interopRequireDefault(require("./TransitGatewayState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGateway model module.
 * @module model/TransitGateway
 * @version 1.0.0
 */
var TransitGateway =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGateway</code>.
   * Describes a transit gateway.
   * @alias module:model/TransitGateway
   */
  function TransitGateway() {
    _classCallCheck(this, TransitGateway);

    TransitGateway.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGateway, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGateway} obj Optional instance to populate.
     * @return {module:model/TransitGateway} The populated <code>TransitGateway</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGateway();

        if (data.hasOwnProperty('CreationTime')) {
          obj['CreationTime'] = _ApiClient["default"].convertToType(data['CreationTime'], 'Date');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _TransitGatewayOptions["default"].constructFromObject(data['Options']);
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayArn')) {
          obj['TransitGatewayArn'] = _ApiClient["default"].convertToType(data['TransitGatewayArn'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGateway;
}();
/**
 * @member {Date} CreationTime
 */


TransitGateway.prototype['CreationTime'] = undefined;
/**
 * @member {String} Description
 */

TransitGateway.prototype['Description'] = undefined;
/**
 * @member {module:model/TransitGatewayOptions} Options
 */

TransitGateway.prototype['Options'] = undefined;
/**
 * @member {String} OwnerId
 */

TransitGateway.prototype['OwnerId'] = undefined;
/**
 * @member {module:model/TransitGatewayState} State
 */

TransitGateway.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TransitGateway.prototype['Tags'] = undefined;
/**
 * @member {String} TransitGatewayArn
 */

TransitGateway.prototype['TransitGatewayArn'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

TransitGateway.prototype['TransitGatewayId'] = undefined;
var _default = TransitGateway;
exports["default"] = _default;