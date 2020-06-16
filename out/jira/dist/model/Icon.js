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
 * The Icon model module.
 * @module model/Icon
 * @version 1.4.0
 */
var Icon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Icon</code>.
   * An icon. If no icon is defined:   *  for a status icon, no status icon displays in Jira.  *  for the remote object icon, the default link icon displays in Jira.
   * @alias module:model/Icon
   */
  function Icon() {
    _classCallCheck(this, Icon);

    Icon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Icon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Icon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Icon} obj Optional instance to populate.
     * @return {module:model/Icon} The populated <code>Icon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Icon();

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

  return Icon;
}();
/**
 * The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
 * @member {String} link
 */


Icon.prototype['link'] = undefined;
/**
 * The title of the icon. This is used as follows:   *  For a status icon it is used as a tooltip on the icon. If not set, the status icon doesn't display a tooltip in Jira.  *  For the remote object icon it is used in conjunction with the application name to display a tooltip for the link's icon. The tooltip takes the format \"\\[application name\\] icon title\". Blank itemsare excluded from the tooltip title. If both items are blank, the icon tooltop displays as \"Web Link\".
 * @member {String} title
 */

Icon.prototype['title'] = undefined;
/**
 * The URL of an icon that displays at 16x16 pixel in Jira.
 * @member {String} url16x16
 */

Icon.prototype['url16x16'] = undefined;
var _default = Icon;
exports["default"] = _default;