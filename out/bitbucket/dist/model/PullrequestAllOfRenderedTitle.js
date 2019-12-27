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
 * The PullrequestAllOfRenderedTitle model module.
 * @module model/PullrequestAllOfRenderedTitle
 * @version 1.1.0
 */
var PullrequestAllOfRenderedTitle =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullrequestAllOfRenderedTitle</code>.
   * @alias module:model/PullrequestAllOfRenderedTitle
   */
  function PullrequestAllOfRenderedTitle() {
    _classCallCheck(this, PullrequestAllOfRenderedTitle);

    PullrequestAllOfRenderedTitle.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestAllOfRenderedTitle, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullrequestAllOfRenderedTitle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestAllOfRenderedTitle} obj Optional instance to populate.
     * @return {module:model/PullrequestAllOfRenderedTitle} The populated <code>PullrequestAllOfRenderedTitle</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestAllOfRenderedTitle();

        if (data.hasOwnProperty('raw')) {
          obj['raw'] = _ApiClient["default"].convertToType(data['raw'], 'String');
        }

        if (data.hasOwnProperty('markup')) {
          obj['markup'] = _ApiClient["default"].convertToType(data['markup'], 'String');
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullrequestAllOfRenderedTitle;
}();
/**
 * The text as it was typed by a user.
 * @member {String} raw
 */


PullrequestAllOfRenderedTitle.prototype['raw'] = undefined;
/**
 * The type of markup language the raw content is to be interpreted in.
 * @member {module:model/PullrequestAllOfRenderedTitle.MarkupEnum} markup
 */

PullrequestAllOfRenderedTitle.prototype['markup'] = undefined;
/**
 * The user's content rendered as HTML.
 * @member {String} html
 */

PullrequestAllOfRenderedTitle.prototype['html'] = undefined;
/**
 * Allowed values for the <code>markup</code> property.
 * @enum {String}
 * @readonly
 */

PullrequestAllOfRenderedTitle['MarkupEnum'] = {
  /**
   * value: "markdown"
   * @const
   */
  "markdown": "markdown",

  /**
   * value: "creole"
   * @const
   */
  "creole": "creole",

  /**
   * value: "plaintext"
   * @const
   */
  "plaintext": "plaintext"
};
var _default = PullrequestAllOfRenderedTitle;
exports["default"] = _default;