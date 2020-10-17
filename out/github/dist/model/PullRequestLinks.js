"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestLinksComments = _interopRequireDefault(require("./PullRequestLinksComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestLinks model module.
 * @module model/PullRequestLinks
 * @version 1.4.4
 */
var PullRequestLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestLinks</code>.
   * @alias module:model/PullRequestLinks
   */
  function PullRequestLinks() {
    _classCallCheck(this, PullRequestLinks);

    PullRequestLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullRequestLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestLinks} obj Optional instance to populate.
     * @return {module:model/PullRequestLinks} The populated <code>PullRequestLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestLinks();

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _PullRequestLinksComments["default"].constructFromObject(data['comments']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _PullRequestLinksComments["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('review_comments')) {
          obj['review_comments'] = _PullRequestLinksComments["default"].constructFromObject(data['review_comments']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _PullRequestLinksComments["default"].constructFromObject(data['self']);
        }
      }

      return obj;
    }
  }]);

  return PullRequestLinks;
}();
/**
 * @member {module:model/PullRequestLinksComments} comments
 */


PullRequestLinks.prototype['comments'] = undefined;
/**
 * @member {module:model/PullRequestLinksComments} html
 */

PullRequestLinks.prototype['html'] = undefined;
/**
 * @member {module:model/PullRequestLinksComments} review_comments
 */

PullRequestLinks.prototype['review_comments'] = undefined;
/**
 * @member {module:model/PullRequestLinksComments} self
 */

PullRequestLinks.prototype['self'] = undefined;
var _default = PullRequestLinks;
exports["default"] = _default;