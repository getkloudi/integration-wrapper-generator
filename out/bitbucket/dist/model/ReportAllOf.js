"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportData = _interopRequireDefault(require("./ReportData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReportAllOf model module.
 * @module model/ReportAllOf
 * @version 1.2.0
 */
var ReportAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportAllOf</code>.
   * A report for a commit.
   * @alias module:model/ReportAllOf
   */
  function ReportAllOf() {
    _classCallCheck(this, ReportAllOf);

    ReportAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportAllOf} obj Optional instance to populate.
     * @return {module:model/ReportAllOf} The populated <code>ReportAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportAllOf();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], 'String');
        }

        if (data.hasOwnProperty('external_id')) {
          obj['external_id'] = _ApiClient["default"].convertToType(data['external_id'], 'String');
        }

        if (data.hasOwnProperty('reporter')) {
          obj['reporter'] = _ApiClient["default"].convertToType(data['reporter'], 'String');
        }

        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
        }

        if (data.hasOwnProperty('remote_link_enabled')) {
          obj['remote_link_enabled'] = _ApiClient["default"].convertToType(data['remote_link_enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('logo_url')) {
          obj['logo_url'] = _ApiClient["default"].convertToType(data['logo_url'], 'String');
        }

        if (data.hasOwnProperty('report_type')) {
          obj['report_type'] = _ApiClient["default"].convertToType(data['report_type'], 'String');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_ReportData["default"]]);
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ReportAllOf;
}();
/**
 * The UUID that can be used to identify the report.
 * @member {String} uuid
 */


ReportAllOf.prototype['uuid'] = undefined;
/**
 * The title of the report.
 * @member {String} title
 */

ReportAllOf.prototype['title'] = undefined;
/**
 * A string to describe the purpose of the report.
 * @member {String} details
 */

ReportAllOf.prototype['details'] = undefined;
/**
 * ID of the report provided by the report creator. It can be used to identify the report as an alternative to it's generated uuid. It is not used by Bitbucket, but only by the report creator for updating or deleting this specific report. Needs to be unique.
 * @member {String} external_id
 */

ReportAllOf.prototype['external_id'] = undefined;
/**
 * A string to describe the tool or company who created the report.
 * @member {String} reporter
 */

ReportAllOf.prototype['reporter'] = undefined;
/**
 * A URL linking to the results of the report in an external tool.
 * @member {String} link
 */

ReportAllOf.prototype['link'] = undefined;
/**
 * If enabled, a remote link is created in Jira for the issue associated with the commit the report belongs to.
 * @member {Boolean} remote_link_enabled
 */

ReportAllOf.prototype['remote_link_enabled'] = undefined;
/**
 * A URL to the report logo. If none is provided, the default insights logo will be used.
 * @member {String} logo_url
 */

ReportAllOf.prototype['logo_url'] = undefined;
/**
 * The type of the report.
 * @member {module:model/ReportAllOf.ReportTypeEnum} report_type
 */

ReportAllOf.prototype['report_type'] = undefined;
/**
 * The state of the report. May be set to PENDING and later updated.
 * @member {module:model/ReportAllOf.ResultEnum} result
 */

ReportAllOf.prototype['result'] = undefined;
/**
 * An array of data fields to display information on the report. Maximum 10.
 * @member {Array.<module:model/ReportData>} data
 */

ReportAllOf.prototype['data'] = undefined;
/**
 * The timestamp when the report was created.
 * @member {Date} created_on
 */

ReportAllOf.prototype['created_on'] = undefined;
/**
 * The timestamp when the report was updated.
 * @member {Date} updated_on
 */

ReportAllOf.prototype['updated_on'] = undefined;
/**
 * Allowed values for the <code>report_type</code> property.
 * @enum {String}
 * @readonly
 */

ReportAllOf['ReportTypeEnum'] = {
  /**
   * value: "SECURITY"
   * @const
   */
  "SECURITY": "SECURITY",

  /**
   * value: "COVERAGE"
   * @const
   */
  "COVERAGE": "COVERAGE",

  /**
   * value: "TEST"
   * @const
   */
  "TEST": "TEST",

  /**
   * value: "BUG"
   * @const
   */
  "BUG": "BUG"
};
/**
 * Allowed values for the <code>result</code> property.
 * @enum {String}
 * @readonly
 */

ReportAllOf['ResultEnum'] = {
  /**
   * value: "PASSED"
   * @const
   */
  "PASSED": "PASSED",

  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED",

  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING"
};
var _default = ReportAllOf;
exports["default"] = _default;