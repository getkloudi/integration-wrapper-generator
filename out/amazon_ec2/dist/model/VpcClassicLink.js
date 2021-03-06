"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpcClassicLink model module.
 * @module model/VpcClassicLink
 * @version 1.1.0
 */
var VpcClassicLink =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcClassicLink</code>.
   * Describes whether a VPC is enabled for ClassicLink.
   * @alias module:model/VpcClassicLink
   */
  function VpcClassicLink() {
    _classCallCheck(this, VpcClassicLink);

    VpcClassicLink.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcClassicLink, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcClassicLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcClassicLink} obj Optional instance to populate.
     * @return {module:model/VpcClassicLink} The populated <code>VpcClassicLink</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcClassicLink();

        if (data.hasOwnProperty('ClassicLinkEnabled')) {
          obj['ClassicLinkEnabled'] = _ApiClient["default"].convertToType(data['ClassicLinkEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VpcClassicLink;
}();
/**
 * @member {Boolean} ClassicLinkEnabled
 */


VpcClassicLink.prototype['ClassicLinkEnabled'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

VpcClassicLink.prototype['Tags'] = undefined;
/**
 * @member {String} VpcId
 */

VpcClassicLink.prototype['VpcId'] = undefined;
var _default = VpcClassicLink;
exports["default"] = _default;