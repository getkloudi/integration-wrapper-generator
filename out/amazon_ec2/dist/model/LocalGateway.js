"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LocalGateway model module.
 * @module model/LocalGateway
 * @version 1.0.0
 */
var LocalGateway =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LocalGateway</code>.
   * Describes a local gateway.
   * @alias module:model/LocalGateway
   */
  function LocalGateway() {
    _classCallCheck(this, LocalGateway);

    LocalGateway.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocalGateway, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocalGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalGateway} obj Optional instance to populate.
     * @return {module:model/LocalGateway} The populated <code>LocalGateway</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocalGateway();

        if (data.hasOwnProperty('LocalGatewayId')) {
          obj['LocalGatewayId'] = _ApiClient["default"].convertToType(data['LocalGatewayId'], 'String');
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ApiClient["default"].convertToType(data['State'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LocalGateway;
}();
/**
 * @member {String} LocalGatewayId
 */


LocalGateway.prototype['LocalGatewayId'] = undefined;
/**
 * @member {String} OutpostArn
 */

LocalGateway.prototype['OutpostArn'] = undefined;
/**
 * @member {String} OwnerId
 */

LocalGateway.prototype['OwnerId'] = undefined;
/**
 * @member {String} State
 */

LocalGateway.prototype['State'] = undefined;
var _default = LocalGateway;
exports["default"] = _default;