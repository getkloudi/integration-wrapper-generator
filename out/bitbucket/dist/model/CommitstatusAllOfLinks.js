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
 * The CommitstatusAllOfLinks model module.
 * @module model/CommitstatusAllOfLinks
 * @version 1.1.0
 */
var CommitstatusAllOfLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommitstatusAllOfLinks</code>.
   * @alias module:model/CommitstatusAllOfLinks
   */
  function CommitstatusAllOfLinks() {
    _classCallCheck(this, CommitstatusAllOfLinks);

    CommitstatusAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitstatusAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommitstatusAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitstatusAllOfLinks} obj Optional instance to populate.
     * @return {module:model/CommitstatusAllOfLinks} The populated <code>CommitstatusAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitstatusAllOfLinks();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['self']);
        }
      }

      return obj;
    }
  }]);

  return CommitstatusAllOfLinks;
}();
/**
 * @member {module:model/AccountAllOfLinksAvatar} commit
 */


CommitstatusAllOfLinks.prototype['commit'] = undefined;
/**
 * @member {module:model/AccountAllOfLinksAvatar} self
 */

CommitstatusAllOfLinks.prototype['self'] = undefined;
var _default = CommitstatusAllOfLinks;
exports["default"] = _default;