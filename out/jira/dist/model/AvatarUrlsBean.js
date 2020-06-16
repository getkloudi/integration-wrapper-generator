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
 * The AvatarUrlsBean model module.
 * @module model/AvatarUrlsBean
 * @version 1.4.0
 */
var AvatarUrlsBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AvatarUrlsBean</code>.
   * @alias module:model/AvatarUrlsBean
   */
  function AvatarUrlsBean() {
    _classCallCheck(this, AvatarUrlsBean);

    AvatarUrlsBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvatarUrlsBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvatarUrlsBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvatarUrlsBean} obj Optional instance to populate.
     * @return {module:model/AvatarUrlsBean} The populated <code>AvatarUrlsBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvatarUrlsBean();

        if (data.hasOwnProperty('16x16')) {
          obj['16x16'] = _ApiClient["default"].convertToType(data['16x16'], 'String');
        }

        if (data.hasOwnProperty('24x24')) {
          obj['24x24'] = _ApiClient["default"].convertToType(data['24x24'], 'String');
        }

        if (data.hasOwnProperty('32x32')) {
          obj['32x32'] = _ApiClient["default"].convertToType(data['32x32'], 'String');
        }

        if (data.hasOwnProperty('48x48')) {
          obj['48x48'] = _ApiClient["default"].convertToType(data['48x48'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AvatarUrlsBean;
}();
/**
 * The URL of the item's 16x16 pixel avatar.
 * @member {String} 16x16
 */


AvatarUrlsBean.prototype['16x16'] = undefined;
/**
 * The URL of the item's 24x24 pixel avatar.
 * @member {String} 24x24
 */

AvatarUrlsBean.prototype['24x24'] = undefined;
/**
 * The URL of the item's 32x32 pixel avatar.
 * @member {String} 32x32
 */

AvatarUrlsBean.prototype['32x32'] = undefined;
/**
 * The URL of the item's 48x48 pixel avatar.
 * @member {String} 48x48
 */

AvatarUrlsBean.prototype['48x48'] = undefined;
var _default = AvatarUrlsBean;
exports["default"] = _default;