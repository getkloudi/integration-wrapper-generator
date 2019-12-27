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
 * The RepositoryAllOfLinks model module.
 * @module model/RepositoryAllOfLinks
 * @version 1.1.2
 */
var RepositoryAllOfLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepositoryAllOfLinks</code>.
   * @alias module:model/RepositoryAllOfLinks
   */
  function RepositoryAllOfLinks() {
    _classCallCheck(this, RepositoryAllOfLinks);

    RepositoryAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepositoryAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepositoryAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryAllOfLinks} obj Optional instance to populate.
     * @return {module:model/RepositoryAllOfLinks} The populated <code>RepositoryAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepositoryAllOfLinks();

        if (data.hasOwnProperty('self')) {
          obj['self'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['self']);
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['avatar']);
        }

        if (data.hasOwnProperty('pullrequests')) {
          obj['pullrequests'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['pullrequests']);
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['commits']);
        }

        if (data.hasOwnProperty('forks')) {
          obj['forks'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['forks']);
        }

        if (data.hasOwnProperty('watchers')) {
          obj['watchers'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['watchers']);
        }

        if (data.hasOwnProperty('downloads')) {
          obj['downloads'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['downloads']);
        }

        if (data.hasOwnProperty('clone')) {
          obj['clone'] = _ApiClient["default"].convertToType(data['clone'], [_SubjectTypesRepositoryEvents["default"]]);
        }

        if (data.hasOwnProperty('hooks')) {
          obj['hooks'] = _SubjectTypesRepositoryEvents["default"].constructFromObject(data['hooks']);
        }
      }

      return obj;
    }
  }]);

  return RepositoryAllOfLinks;
}();
/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */


RepositoryAllOfLinks.prototype['self'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */

RepositoryAllOfLinks.prototype['html'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} avatar
 */

RepositoryAllOfLinks.prototype['avatar'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} pullrequests
 */

RepositoryAllOfLinks.prototype['pullrequests'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} commits
 */

RepositoryAllOfLinks.prototype['commits'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} forks
 */

RepositoryAllOfLinks.prototype['forks'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} watchers
 */

RepositoryAllOfLinks.prototype['watchers'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} downloads
 */

RepositoryAllOfLinks.prototype['downloads'] = undefined;
/**
 * @member {Array.<module:model/SubjectTypesRepositoryEvents>} clone
 */

RepositoryAllOfLinks.prototype['clone'] = undefined;
/**
 * @member {module:model/SubjectTypesRepositoryEvents} hooks
 */

RepositoryAllOfLinks.prototype['hooks'] = undefined;
var _default = RepositoryAllOfLinks;
exports["default"] = _default;