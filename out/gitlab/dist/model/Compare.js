"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RepoCommit = _interopRequireDefault(require("./RepoCommit"));

var _RepoDiff = _interopRequireDefault(require("./RepoDiff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Compare model module.
 * @module model/Compare
 * @version 1.0.0
 */
var Compare =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Compare</code>.
   * Compare two branches, tags, or commits
   * @alias module:model/Compare
   */
  function Compare() {
    _classCallCheck(this, Compare);

    Compare.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Compare, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Compare</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Compare} obj Optional instance to populate.
     * @return {module:model/Compare} The populated <code>Compare</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Compare();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _RepoCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _RepoCommit["default"].constructFromObject(data['commits']);
        }

        if (data.hasOwnProperty('compare_same_ref')) {
          obj['compare_same_ref'] = _ApiClient["default"].convertToType(data['compare_same_ref'], 'String');
        }

        if (data.hasOwnProperty('compare_timeout')) {
          obj['compare_timeout'] = _ApiClient["default"].convertToType(data['compare_timeout'], 'String');
        }

        if (data.hasOwnProperty('diffs')) {
          obj['diffs'] = _RepoDiff["default"].constructFromObject(data['diffs']);
        }
      }

      return obj;
    }
  }]);

  return Compare;
}();
/**
 * @member {module:model/RepoCommit} commit
 */


Compare.prototype['commit'] = undefined;
/**
 * @member {module:model/RepoCommit} commits
 */

Compare.prototype['commits'] = undefined;
/**
 * @member {String} compare_same_ref
 */

Compare.prototype['compare_same_ref'] = undefined;
/**
 * @member {String} compare_timeout
 */

Compare.prototype['compare_timeout'] = undefined;
/**
 * @member {module:model/RepoDiff} diffs
 */

Compare.prototype['diffs'] = undefined;
var _default = Compare;
exports["default"] = _default;