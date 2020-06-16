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
 * The VersionUnresolvedIssuesCount model module.
 * @module model/VersionUnresolvedIssuesCount
 * @version 1.4.0
 */
var VersionUnresolvedIssuesCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionUnresolvedIssuesCount</code>.
   * Count of a version&#39;s unresolved issues.
   * @alias module:model/VersionUnresolvedIssuesCount
   */
  function VersionUnresolvedIssuesCount() {
    _classCallCheck(this, VersionUnresolvedIssuesCount);

    VersionUnresolvedIssuesCount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionUnresolvedIssuesCount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionUnresolvedIssuesCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionUnresolvedIssuesCount} obj Optional instance to populate.
     * @return {module:model/VersionUnresolvedIssuesCount} The populated <code>VersionUnresolvedIssuesCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionUnresolvedIssuesCount();

        if (data.hasOwnProperty('issuesCount')) {
          obj['issuesCount'] = _ApiClient["default"].convertToType(data['issuesCount'], 'Number');
        }

        if (data.hasOwnProperty('issuesUnresolvedCount')) {
          obj['issuesUnresolvedCount'] = _ApiClient["default"].convertToType(data['issuesUnresolvedCount'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VersionUnresolvedIssuesCount;
}();
/**
 * Count of issues.
 * @member {Number} issuesCount
 */


VersionUnresolvedIssuesCount.prototype['issuesCount'] = undefined;
/**
 * Count of unresolved issues.
 * @member {Number} issuesUnresolvedCount
 */

VersionUnresolvedIssuesCount.prototype['issuesUnresolvedCount'] = undefined;
/**
 * The URL of these count details.
 * @member {String} self
 */

VersionUnresolvedIssuesCount.prototype['self'] = undefined;
var _default = VersionUnresolvedIssuesCount;
exports["default"] = _default;