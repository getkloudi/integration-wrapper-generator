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
 * The CommitStats model module.
 * @module model/CommitStats
 * @version 1.3.3
 */
var CommitStats =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommitStats</code>.
   * @alias module:model/CommitStats
   */
  function CommitStats() {
    _classCallCheck(this, CommitStats);

    CommitStats.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitStats, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommitStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitStats} obj Optional instance to populate.
     * @return {module:model/CommitStats} The populated <code>CommitStats</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitStats();

        if (data.hasOwnProperty('additions')) {
          obj['additions'] = _ApiClient["default"].convertToType(data['additions'], 'Number');
        }

        if (data.hasOwnProperty('deletions')) {
          obj['deletions'] = _ApiClient["default"].convertToType(data['deletions'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CommitStats;
}();
/**
 * @member {Number} additions
 */


CommitStats.prototype['additions'] = undefined;
/**
 * @member {Number} deletions
 */

CommitStats.prototype['deletions'] = undefined;
/**
 * @member {Number} total
 */

CommitStats.prototype['total'] = undefined;
var _default = CommitStats;
exports["default"] = _default;