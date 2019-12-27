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
 * The CommitAllOfLinks model module.
 * @module model/CommitAllOfLinks
 * @version 1.1.0
 */
var CommitAllOfLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommitAllOfLinks</code>.
   * @alias module:model/CommitAllOfLinks
   */
  function CommitAllOfLinks() {
    _classCallCheck(this, CommitAllOfLinks);

    CommitAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommitAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitAllOfLinks} obj Optional instance to populate.
     * @return {module:model/CommitAllOfLinks} The populated <code>CommitAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitAllOfLinks();

        if (data.hasOwnProperty('approve')) {
          obj['approve'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['approve']);
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['comments']);
        }

        if (data.hasOwnProperty('diff')) {
          obj['diff'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['diff']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('patch')) {
          obj['patch'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['patch']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['self']);
        }

        if (data.hasOwnProperty('statuses')) {
          obj['statuses'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['statuses']);
        }
      }

      return obj;
    }
  }]);

  return CommitAllOfLinks;
}();
/**
 * @member {module:model/AccountAllOfLinksAvatar} approve
 */


CommitAllOfLinks.prototype['approve'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} comments
 */

CommitAllOfLinks.prototype['comments'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} diff
 */

CommitAllOfLinks.prototype['diff'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} html
 */

CommitAllOfLinks.prototype['html'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} patch
 */

CommitAllOfLinks.prototype['patch'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} self
 */

CommitAllOfLinks.prototype['self'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} statuses
 */

CommitAllOfLinks.prototype['statuses'] = undefined;
var _default = CommitAllOfLinks;
exports["default"] = _default;