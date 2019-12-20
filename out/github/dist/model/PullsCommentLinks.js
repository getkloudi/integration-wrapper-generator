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
 * The PullsCommentLinks model module.
 * @module model/PullsCommentLinks
 * @version 1.3.2
 */
var PullsCommentLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullsCommentLinks</code>.
   * @alias module:model/PullsCommentLinks
   */
  function PullsCommentLinks() {
    _classCallCheck(this, PullsCommentLinks);

    PullsCommentLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullsCommentLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullsCommentLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullsCommentLinks} obj Optional instance to populate.
     * @return {module:model/PullsCommentLinks} The populated <code>PullsCommentLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullsCommentLinks();

        if (data.hasOwnProperty('html')) {
          obj['html'] = _PullRequestLinksComments["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('pull_request')) {
          obj['pull_request'] = _PullRequestLinksComments["default"].constructFromObject(data['pull_request']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _PullRequestLinksComments["default"].constructFromObject(data['self']);
        }
      }

      return obj;
    }
  }]);

  return PullsCommentLinks;
}();
/**
 * @member {module:model/PullRequestLinksComments} html
 */


PullsCommentLinks.prototype['html'] = undefined;
/**
 * @member {module:model/PullRequestLinksComments} pull_request
 */

PullsCommentLinks.prototype['pull_request'] = undefined;
/**
 * @member {module:model/PullRequestLinksComments} self
 */

PullsCommentLinks.prototype['self'] = undefined;
var _default = PullsCommentLinks;
exports["default"] = _default;