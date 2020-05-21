"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubjectTypesRepositoryEvents = _interopRequireDefault(require("./SubjectTypesRepositoryEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullrequestAllOfLinks model module.
 * @module model/PullrequestAllOfLinks
 * @version 1.2.0
 */
var PullrequestAllOfLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullrequestAllOfLinks</code>.
   * @alias module:model/PullrequestAllOfLinks
   */
  function PullrequestAllOfLinks() {
    _classCallCheck(this, PullrequestAllOfLinks);

    PullrequestAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullrequestAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestAllOfLinks} obj Optional instance to populate.
     * @return {module:model/PullrequestAllOfLinks} The populated <code>PullrequestAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestAllOfLinks();

        if (data.hasOwnProperty('self')) {
          obj['self'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['self']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['commits']);
        }

        if (data.hasOwnProperty('approve')) {
          obj['approve'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['approve']);
        }

        if (data.hasOwnProperty('diff')) {
          obj['diff'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['diff']);
        }

        if (data.hasOwnProperty('diffstat')) {
          obj['diffstat'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['diffstat']);
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['comments']);
        }

        if (data.hasOwnProperty('activity')) {
          obj['activity'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['activity']);
        }

        if (data.hasOwnProperty('merge')) {
          obj['merge'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['merge']);
        }

        if (data.hasOwnProperty('decline')) {
          obj['decline'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['decline']);
        }
      }

      return obj;
    }
  }]);

  return PullrequestAllOfLinks;
}();
/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */


PullrequestAllOfLinks.prototype['self'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */

PullrequestAllOfLinks.prototype['html'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} commits
 */

PullrequestAllOfLinks.prototype['commits'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} approve
 */

PullrequestAllOfLinks.prototype['approve'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} diff
 */

PullrequestAllOfLinks.prototype['diff'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} diffstat
 */

PullrequestAllOfLinks.prototype['diffstat'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} comments
 */

PullrequestAllOfLinks.prototype['comments'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} activity
 */

PullrequestAllOfLinks.prototype['activity'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} merge
 */

PullrequestAllOfLinks.prototype['merge'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} decline
 */

PullrequestAllOfLinks.prototype['decline'] = undefined;
var _default = PullrequestAllOfLinks;
exports["default"] = _default;