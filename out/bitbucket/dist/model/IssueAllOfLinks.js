"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountAllOfLinksAvatar = _interopRequireDefault(require("./AccountAllOfLinksAvatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueAllOfLinks model module.
 * @module model/IssueAllOfLinks
 * @version 1.1.0
 */
var IssueAllOfLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueAllOfLinks</code>.
   * @alias module:model/IssueAllOfLinks
   */
  function IssueAllOfLinks() {
    _classCallCheck(this, IssueAllOfLinks);

    IssueAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueAllOfLinks} obj Optional instance to populate.
     * @return {module:model/IssueAllOfLinks} The populated <code>IssueAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueAllOfLinks();

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['attachments']);
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['comments']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['self']);
        }

        if (data.hasOwnProperty('vote')) {
          obj['vote'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['vote']);
        }

        if (data.hasOwnProperty('watch')) {
          obj['watch'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['watch']);
        }
      }

      return obj;
    }
  }]);

  return IssueAllOfLinks;
}();
/**
 * @member {module:model/AccountAllOfLinksAvatar} attachments
 */


IssueAllOfLinks.prototype['attachments'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} comments
 */

IssueAllOfLinks.prototype['comments'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} html
 */

IssueAllOfLinks.prototype['html'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} self
 */

IssueAllOfLinks.prototype['self'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} vote
 */

IssueAllOfLinks.prototype['vote'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} watch
 */

IssueAllOfLinks.prototype['watch'] = undefined;
var _default = IssueAllOfLinks;
exports["default"] = _default;