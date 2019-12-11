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
 * The RepoCommitStats model module.
 * @module model/RepoCommitStats
 * @version 1.1.0
 */
var RepoCommitStats =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoCommitStats</code>.
   * @alias module:model/RepoCommitStats
   */
  function RepoCommitStats() {
    _classCallCheck(this, RepoCommitStats);

    RepoCommitStats.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoCommitStats, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepoCommitStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoCommitStats} obj Optional instance to populate.
     * @return {module:model/RepoCommitStats} The populated <code>RepoCommitStats</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoCommitStats();

        if (data.hasOwnProperty('additions')) {
          obj['additions'] = _ApiClient["default"].convertToType(data['additions'], 'String');
        }

        if (data.hasOwnProperty('deletions')) {
          obj['deletions'] = _ApiClient["default"].convertToType(data['deletions'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoCommitStats;
}();
/**
 * @member {String} additions
 */


RepoCommitStats.prototype['additions'] = undefined;
/**
 * @member {String} deletions
 */

RepoCommitStats.prototype['deletions'] = undefined;
/**
 * @member {String} total
 */

RepoCommitStats.prototype['total'] = undefined;
var _default = RepoCommitStats;
exports["default"] = _default;