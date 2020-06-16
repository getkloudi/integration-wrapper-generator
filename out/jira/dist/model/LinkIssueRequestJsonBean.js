"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Comment = _interopRequireDefault(require("./Comment"));

var _IssueLinkType = _interopRequireDefault(require("./IssueLinkType"));

var _LinkedIssue = _interopRequireDefault(require("./LinkedIssue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LinkIssueRequestJsonBean model module.
 * @module model/LinkIssueRequestJsonBean
 * @version 1.4.0
 */
var LinkIssueRequestJsonBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkIssueRequestJsonBean</code>.
   * @alias module:model/LinkIssueRequestJsonBean
   */
  function LinkIssueRequestJsonBean() {
    _classCallCheck(this, LinkIssueRequestJsonBean);

    LinkIssueRequestJsonBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkIssueRequestJsonBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LinkIssueRequestJsonBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkIssueRequestJsonBean} obj Optional instance to populate.
     * @return {module:model/LinkIssueRequestJsonBean} The populated <code>LinkIssueRequestJsonBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkIssueRequestJsonBean();

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _Comment["default"].constructFromObject(data['comment']);
        }

        if (data.hasOwnProperty('inwardIssue')) {
          obj['inwardIssue'] = _LinkedIssue["default"].constructFromObject(data['inwardIssue']);
        }

        if (data.hasOwnProperty('outwardIssue')) {
          obj['outwardIssue'] = _LinkedIssue["default"].constructFromObject(data['outwardIssue']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _IssueLinkType["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return LinkIssueRequestJsonBean;
}();
/**
 * @member {module:model/Comment} comment
 */


LinkIssueRequestJsonBean.prototype['comment'] = undefined;
/**
 * @member {module:model/LinkedIssue} inwardIssue
 */

LinkIssueRequestJsonBean.prototype['inwardIssue'] = undefined;
/**
 * @member {module:model/LinkedIssue} outwardIssue
 */

LinkIssueRequestJsonBean.prototype['outwardIssue'] = undefined;
/**
 * @member {module:model/IssueLinkType} type
 */

LinkIssueRequestJsonBean.prototype['type'] = undefined;
var _default = LinkIssueRequestJsonBean;
exports["default"] = _default;