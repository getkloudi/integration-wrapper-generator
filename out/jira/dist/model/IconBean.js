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
 * The IconBean model module.
 * @module model/IconBean
 * @version 1.4.0
 */
var IconBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IconBean</code>.
   * An icon.
   * @alias module:model/IconBean
   */
  function IconBean() {
    _classCallCheck(this, IconBean);

    IconBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IconBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IconBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IconBean} obj Optional instance to populate.
     * @return {module:model/IconBean} The populated <code>IconBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IconBean();

        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url16x16')) {
          obj['url16x16'] = _ApiClient["default"].convertToType(data['url16x16'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IconBean;
}();
/**
 * The URL of the tooltip, used only for a status icon.
 * @member {String} link
 */


IconBean.prototype['link'] = undefined;
/**
 * The title of the icon, for use as a tooltip on the icon.
 * @member {String} title
 */

IconBean.prototype['title'] = undefined;
/**
 * The URL of a 16x16 pixel icon.
 * @member {String} url16x16
 */

IconBean.prototype['url16x16'] = undefined;
var _default = IconBean;
exports["default"] = _default;