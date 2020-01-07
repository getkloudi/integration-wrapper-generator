"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InternetGatewayAttachment = _interopRequireDefault(require("./InternetGatewayAttachment"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InternetGateway model module.
 * @module model/InternetGateway
 * @version 1.1.0
 */
var InternetGateway =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InternetGateway</code>.
   * Describes an internet gateway.
   * @alias module:model/InternetGateway
   */
  function InternetGateway() {
    _classCallCheck(this, InternetGateway);

    InternetGateway.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InternetGateway, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InternetGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InternetGateway} obj Optional instance to populate.
     * @return {module:model/InternetGateway} The populated <code>InternetGateway</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InternetGateway();

        if (data.hasOwnProperty('Attachments')) {
          obj['Attachments'] = _ApiClient["default"].convertToType(data['Attachments'], [_InternetGatewayAttachment["default"]]);
        }

        if (data.hasOwnProperty('InternetGatewayId')) {
          obj['InternetGatewayId'] = _ApiClient["default"].convertToType(data['InternetGatewayId'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InternetGateway;
}();
/**
 * @member {Array.<module:model/InternetGatewayAttachment>} Attachments
 */


InternetGateway.prototype['Attachments'] = undefined;
/**
 * @member {String} InternetGatewayId
 */

InternetGateway.prototype['InternetGatewayId'] = undefined;
/**
 * @member {String} OwnerId
 */

InternetGateway.prototype['OwnerId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

InternetGateway.prototype['Tags'] = undefined;
var _default = InternetGateway;
exports["default"] = _default;