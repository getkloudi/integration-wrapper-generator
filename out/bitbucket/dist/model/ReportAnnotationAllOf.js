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
 * The ReportAnnotationAllOf model module.
 * @module model/ReportAnnotationAllOf
 * @version 1.2.0
 */
var ReportAnnotationAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportAnnotationAllOf</code>.
   * A report for a commit.
   * @alias module:model/ReportAnnotationAllOf
   */
  function ReportAnnotationAllOf() {
    _classCallCheck(this, ReportAnnotationAllOf);

    ReportAnnotationAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportAnnotationAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReportAnnotationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportAnnotationAllOf} obj Optional instance to populate.
     * @return {module:model/ReportAnnotationAllOf} The populated <code>ReportAnnotationAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportAnnotationAllOf();

        if (data.hasOwnProperty('external_id')) {
          obj['external_id'] = _ApiClient["default"].convertToType(data['external_id'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('annotation_type')) {
          obj['annotation_type'] = _ApiClient["default"].convertToType(data['annotation_type'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'Number');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], 'String');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], 'String');
        }

        if (data.hasOwnProperty('severity')) {
          obj['severity'] = _ApiClient["default"].convertToType(data['severity'], 'String');
        }

        if (data.hasOwnProperty('link')) {
          obj['link'] = _ApiClient["default"].convertToType(data['link'], 'String');
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

  return ReportAnnotationAllOf;
}();
/**
 * ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it's generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique.
 * @member {String} external_id
 */


ReportAnnotationAllOf.prototype['external_id'] = undefined;
/**
 * The UUID that can be used to identify the annotation.
 * @member {String} uuid
 */

ReportAnnotationAllOf.prototype['uuid'] = undefined;
/**
 * The type of the report.
 * @member {module:model/ReportAnnotationAllOf.AnnotationTypeEnum} annotation_type
 */

ReportAnnotationAllOf.prototype['annotation_type'] = undefined;
/**
 * The path of the file on which this annotation should be placed. This is the path of the file relative to the git repository. If no path is provided, then it will appear in the overview modal on all pull requests where the tip of the branch is the given commit, regardless of which files were modified.
 * @member {String} path
 */

ReportAnnotationAllOf.prototype['path'] = undefined;
/**
 * The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field.
 * @member {Number} line
 */

ReportAnnotationAllOf.prototype['line'] = undefined;
/**
 * The message to display to users.
 * @member {String} summary
 */

ReportAnnotationAllOf.prototype['summary'] = undefined;
/**
 * The details to show to users when clicking on the annotation.
 * @member {String} details
 */

ReportAnnotationAllOf.prototype['details'] = undefined;
/**
 * The state of the report. May be set to PENDING and later updated.
 * @member {module:model/ReportAnnotationAllOf.ResultEnum} result
 */

ReportAnnotationAllOf.prototype['result'] = undefined;
/**
 * The severity of the annotation.
 * @member {module:model/ReportAnnotationAllOf.SeverityEnum} severity
 */

ReportAnnotationAllOf.prototype['severity'] = undefined;
/**
 * A URL linking to the annotation in an external tool.
 * @member {String} link
 */

ReportAnnotationAllOf.prototype['link'] = undefined;
/**
 * The timestamp when the report was created.
 * @member {Date} created_on
 */

ReportAnnotationAllOf.prototype['created_on'] = undefined;
/**
 * The timestamp when the report was updated.
 * @member {Date} updated_on
 */

ReportAnnotationAllOf.prototype['updated_on'] = undefined;
/**
 * Allowed values for the <code>annotation_type</code> property.
 * @enum {String}
 * @readonly
 */

ReportAnnotationAllOf['AnnotationTypeEnum'] = {
  /**
   * value: "VULNERABILITY"
   * @const
   */
  "VULNERABILITY": "VULNERABILITY",

  /**
   * value: "CODE_SMELL"
   * @const
   */
  "CODE_SMELL": "CODE_SMELL",

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

ReportAnnotationAllOf['ResultEnum'] = {
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
   * value: "SKIPPED"
   * @const
   */
  "SKIPPED": "SKIPPED",

  /**
   * value: "IGNORED"
   * @const
   */
  "IGNORED": "IGNORED"
};
/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */

ReportAnnotationAllOf['SeverityEnum'] = {
  /**
   * value: "CRITICAL"
   * @const
   */
  "CRITICAL": "CRITICAL",

  /**
   * value: "HIGH"
   * @const
   */
  "HIGH": "HIGH",

  /**
   * value: "MEDIUM"
   * @const
   */
  "MEDIUM": "MEDIUM",

  /**
   * value: "LOW"
   * @const
   */
  "LOW": "LOW"
};
var _default = ReportAnnotationAllOf;
exports["default"] = _default;