"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VersionUsageInCustomField = _interopRequireDefault(require("./VersionUsageInCustomField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VersionIssueCounts model module.
 * @module model/VersionIssueCounts
 * @version 1.4.0
 */
var VersionIssueCounts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionIssueCounts</code>.
   * Various counts of issues within a version.
   * @alias module:model/VersionIssueCounts
   */
  function VersionIssueCounts() {
    _classCallCheck(this, VersionIssueCounts);

    VersionIssueCounts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionIssueCounts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionIssueCounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionIssueCounts} obj Optional instance to populate.
     * @return {module:model/VersionIssueCounts} The populated <code>VersionIssueCounts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionIssueCounts();

        if (data.hasOwnProperty('customFieldUsage')) {
          obj['customFieldUsage'] = _ApiClient["default"].convertToType(data['customFieldUsage'], [_VersionUsageInCustomField["default"]]);
        }

        if (data.hasOwnProperty('issueCountWithCustomFieldsShowingVersion')) {
          obj['issueCountWithCustomFieldsShowingVersion'] = _ApiClient["default"].convertToType(data['issueCountWithCustomFieldsShowingVersion'], 'Number');
        }

        if (data.hasOwnProperty('issuesAffectedCount')) {
          obj['issuesAffectedCount'] = _ApiClient["default"].convertToType(data['issuesAffectedCount'], 'Number');
        }

        if (data.hasOwnProperty('issuesFixedCount')) {
          obj['issuesFixedCount'] = _ApiClient["default"].convertToType(data['issuesFixedCount'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VersionIssueCounts;
}();
/**
 * List of custom fields using the version.
 * @member {Array.<module:model/VersionUsageInCustomField>} customFieldUsage
 */


VersionIssueCounts.prototype['customFieldUsage'] = undefined;
/**
 * Count of issues where a version custom field is set to the version.
 * @member {Number} issueCountWithCustomFieldsShowingVersion
 */

VersionIssueCounts.prototype['issueCountWithCustomFieldsShowingVersion'] = undefined;
/**
 * Count of issues where the `affectedVersion` is set to the version.
 * @member {Number} issuesAffectedCount
 */

VersionIssueCounts.prototype['issuesAffectedCount'] = undefined;
/**
 * Count of issues where the `fixVersion` is set to the version.
 * @member {Number} issuesFixedCount
 */

VersionIssueCounts.prototype['issuesFixedCount'] = undefined;
/**
 * The URL of these count details.
 * @member {String} self
 */

VersionIssueCounts.prototype['self'] = undefined;
var _default = VersionIssueCounts;
exports["default"] = _default;