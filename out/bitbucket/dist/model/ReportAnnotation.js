"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _ReportAnnotationAllOf = _interopRequireDefault(require("./ReportAnnotationAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReportAnnotation model module.
 * @module model/ReportAnnotation
 * @version 1.2.0
 */
var ReportAnnotation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportAnnotation</code>.
   * @alias module:model/ReportAnnotation
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/ReportAnnotationAllOf
   * @param type {String} 
   */
  function ReportAnnotation(type) {
    _classCallCheck(this, ReportAnnotation);

    _ModelObject["default"].initialize(this, type);

    _ReportAnnotationAllOf["default"].initialize(this);

    ReportAnnotation.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportAnnotation, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>ReportAnnotation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportAnnotation} obj Optional instance to populate.
     * @return {module:model/ReportAnnotation} The populated <code>ReportAnnotation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportAnnotation();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _ReportAnnotationAllOf["default"].constructFromObject(data, obj);

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

  return ReportAnnotation;
}();
/**
 * ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it's generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique.
 * @member {String} external_id
 */


ReportAnnotation.prototype['external_id'] = undefined;
/**
 * The UUID that can be used to identify the annotation.
 * @member {String} uuid
 */

ReportAnnotation.prototype['uuid'] = undefined;
/**
 * The type of the report.
 * @member {module:model/ReportAnnotation.AnnotationTypeEnum} annotation_type
 */

ReportAnnotation.prototype['annotation_type'] = undefined;
/**
 * The path of the file on which this annotation should be placed. This is the path of the file relative to the git repository. If no path is provided, then it will appear in the overview modal on all pull requests where the tip of the branch is the given commit, regardless of which files were modified.
 * @member {String} path
 */

ReportAnnotation.prototype['path'] = undefined;
/**
 * The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field.
 * @member {Number} line
 */

ReportAnnotation.prototype['line'] = undefined;
/**
 * The message to display to users.
 * @member {String} summary
 */

ReportAnnotation.prototype['summary'] = undefined;
/**
 * The details to show to users when clicking on the annotation.
 * @member {String} details
 */

ReportAnnotation.prototype['details'] = undefined;
/**
 * The state of the report. May be set to PENDING and later updated.
 * @member {module:model/ReportAnnotation.ResultEnum} result
 */

ReportAnnotation.prototype['result'] = undefined;
/**
 * The severity of the annotation.
 * @member {module:model/ReportAnnotation.SeverityEnum} severity
 */

ReportAnnotation.prototype['severity'] = undefined;
/**
 * A URL linking to the annotation in an external tool.
 * @member {String} link
 */

ReportAnnotation.prototype['link'] = undefined;
/**
 * The timestamp when the report was created.
 * @member {Date} created_on
 */

ReportAnnotation.prototype['created_on'] = undefined;
/**
 * The timestamp when the report was updated.
 * @member {Date} updated_on
 */

ReportAnnotation.prototype['updated_on'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement ReportAnnotationAllOf interface:

/**
 * ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it's generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique.
 * @member {String} external_id
 */

_ReportAnnotationAllOf["default"].prototype['external_id'] = undefined;
/**
 * The UUID that can be used to identify the annotation.
 * @member {String} uuid
 */

_ReportAnnotationAllOf["default"].prototype['uuid'] = undefined;
/**
 * The type of the report.
 * @member {module:model/ReportAnnotationAllOf.AnnotationTypeEnum} annotation_type
 */

_ReportAnnotationAllOf["default"].prototype['annotation_type'] = undefined;
/**
 * The path of the file on which this annotation should be placed. This is the path of the file relative to the git repository. If no path is provided, then it will appear in the overview modal on all pull requests where the tip of the branch is the given commit, regardless of which files were modified.
 * @member {String} path
 */

_ReportAnnotationAllOf["default"].prototype['path'] = undefined;
/**
 * The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field.
 * @member {Number} line
 */

_ReportAnnotationAllOf["default"].prototype['line'] = undefined;
/**
 * The message to display to users.
 * @member {String} summary
 */

_ReportAnnotationAllOf["default"].prototype['summary'] = undefined;
/**
 * The details to show to users when clicking on the annotation.
 * @member {String} details
 */

_ReportAnnotationAllOf["default"].prototype['details'] = undefined;
/**
 * The state of the report. May be set to PENDING and later updated.
 * @member {module:model/ReportAnnotationAllOf.ResultEnum} result
 */

_ReportAnnotationAllOf["default"].prototype['result'] = undefined;
/**
 * The severity of the annotation.
 * @member {module:model/ReportAnnotationAllOf.SeverityEnum} severity
 */

_ReportAnnotationAllOf["default"].prototype['severity'] = undefined;
/**
 * A URL linking to the annotation in an external tool.
 * @member {String} link
 */

_ReportAnnotationAllOf["default"].prototype['link'] = undefined;
/**
 * The timestamp when the report was created.
 * @member {Date} created_on
 */

_ReportAnnotationAllOf["default"].prototype['created_on'] = undefined;
/**
 * The timestamp when the report was updated.
 * @member {Date} updated_on
 */

_ReportAnnotationAllOf["default"].prototype['updated_on'] = undefined;
/**
 * Allowed values for the <code>annotation_type</code> property.
 * @enum {String}
 * @readonly
 */

ReportAnnotation['AnnotationTypeEnum'] = {
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

ReportAnnotation['ResultEnum'] = {
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

ReportAnnotation['SeverityEnum'] = {
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
var _default = ReportAnnotation;
exports["default"] = _default;