"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitStats = _interopRequireDefault(require("./CommitStats"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistHistory model module.
 * @module model/GistHistory
 * @version 1.3.0
 */
var GistHistory =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GistHistory</code>.
   * @alias module:model/GistHistory
   */
  function GistHistory() {
    _classCallCheck(this, GistHistory);

    GistHistory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistHistory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistHistory} obj Optional instance to populate.
     * @return {module:model/GistHistory} The populated <code>GistHistory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistHistory();

        if (data.hasOwnProperty('change_status')) {
          obj['change_status'] = _CommitStats["default"].constructFromObject(data['change_status']);
        }

        if (data.hasOwnProperty('committed_at')) {
          obj['committed_at'] = _ApiClient["default"].convertToType(data['committed_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GistHistory;
}();
/**
 * @member {module:model/CommitStats} change_status
 */


GistHistory.prototype['change_status'] = undefined;
/**
 * Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @member {String} committed_at
 */

GistHistory.prototype['committed_at'] = undefined;
/**
 * @member {String} url
 */

GistHistory.prototype['url'] = undefined;
/**
 * @member {module:model/User} user
 */

GistHistory.prototype['user'] = undefined;
/**
 * @member {String} version
 */

GistHistory.prototype['version'] = undefined;
var _default = GistHistory;
exports["default"] = _default;