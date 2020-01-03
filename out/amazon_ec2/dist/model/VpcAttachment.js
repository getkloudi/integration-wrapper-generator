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
 * The VpcAttachment model module.
 * @module model/VpcAttachment
 * @version 1.0.0
 */
var VpcAttachment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcAttachment</code>.
   * Describes an attachment between a virtual private gateway and a VPC.
   * @alias module:model/VpcAttachment
   */
  function VpcAttachment() {
    _classCallCheck(this, VpcAttachment);

    VpcAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcAttachment} obj Optional instance to populate.
     * @return {module:model/VpcAttachment} The populated <code>VpcAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcAttachment();

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

  return VpcAttachment;
}();
/**
 * @member {module:model/AttachmentStatus} State
 */


VpcAttachment.prototype['State'] = undefined;
/**
 * @member {String} VpcId
 */

VpcAttachment.prototype['VpcId'] = undefined;
var _default = VpcAttachment;
exports["default"] = _default;