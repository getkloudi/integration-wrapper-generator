"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttachmentStatus = _interopRequireDefault(require("./AttachmentStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InternetGatewayAttachment model module.
 * @module model/InternetGatewayAttachment
 * @version 1.1.0
 */
var InternetGatewayAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InternetGatewayAttachment</code>.
   * Describes the attachment of a VPC to an internet gateway or an egress-only internet gateway.
   * @alias module:model/InternetGatewayAttachment
   */
  function InternetGatewayAttachment() {
    _classCallCheck(this, InternetGatewayAttachment);

    InternetGatewayAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InternetGatewayAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InternetGatewayAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InternetGatewayAttachment} obj Optional instance to populate.
     * @return {module:model/InternetGatewayAttachment} The populated <code>InternetGatewayAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InternetGatewayAttachment();

        if (data.hasOwnProperty('State')) {
          obj['State'] = _AttachmentStatus["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InternetGatewayAttachment;
}();
/**
 * @member {module:model/AttachmentStatus} State
 */


InternetGatewayAttachment.prototype['State'] = undefined;
/**
 * @member {String} VpcId
 */

InternetGatewayAttachment.prototype['VpcId'] = undefined;
var _default = InternetGatewayAttachment;
exports["default"] = _default;