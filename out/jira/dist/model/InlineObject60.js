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
 * The InlineObject60 model module.
 * @module model/InlineObject60
 * @version 1.3.1
 */
var InlineObject60 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject60</code>.
   * @alias module:model/InlineObject60
   */
  function InlineObject60() {
    _classCallCheck(this, InlineObject60);

    InlineObject60.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject60, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject60</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject60} obj Optional instance to populate.
     * @return {module:model/InlineObject60} The populated <code>InlineObject60</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject60();

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('issuesStatusForFixVersion')) {
          obj['issuesStatusForFixVersion'] = _ApiClient["default"].convertToType(data['issuesStatusForFixVersion'], Object);
        }

        if (data.hasOwnProperty('moveUnfixedIssuesTo')) {
          obj['moveUnfixedIssuesTo'] = _ApiClient["default"].convertToType(data['moveUnfixedIssuesTo'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], [Object]);
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _ApiClient["default"].convertToType(data['project'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'Number');
        }

        if (data.hasOwnProperty('releaseDate')) {
          obj['releaseDate'] = _ApiClient["default"].convertToType(data['releaseDate'], 'String');
        }

        if (data.hasOwnProperty('released')) {
          obj['released'] = _ApiClient["default"].convertToType(data['released'], 'Boolean');
        }

        if (data.hasOwnProperty('remotelinks')) {
          obj['remotelinks'] = _ApiClient["default"].convertToType(data['remotelinks'], [Object]);
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject60;
}();
/**
 * Indicates that the version is archived. Optional when creating or updating a version.
 * @member {Boolean} archived
 */


InlineObject60.prototype['archived'] = undefined;
/**
 * The description of the version. Optional when creating or updating a version.
 * @member {String} description
 */

InlineObject60.prototype['description'] = undefined;
/**
 * @member {Object} issuesStatusForFixVersion
 */

InlineObject60.prototype['issuesStatusForFixVersion'] = undefined;
/**
 * The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
 * @member {String} moveUnfixedIssuesTo
 */

InlineObject60.prototype['moveUnfixedIssuesTo'] = undefined;
/**
 * The unique name of the version. Required when creating a version. Optional when updating a version. Maximum length 255 chars.
 * @member {String} name
 */

InlineObject60.prototype['name'] = undefined;
/**
 * If the expand option operations is used, returns the list of operations available for this version. Read only.
 * @member {Array.<Object>} operations
 */

InlineObject60.prototype['operations'] = undefined;
/**
 * Deprecated. Use projectId.
 * @member {String} project
 */

InlineObject60.prototype['project'] = undefined;
/**
 * The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
 * @member {Number} projectId
 */

InlineObject60.prototype['projectId'] = undefined;
/**
 * The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {String} releaseDate
 */

InlineObject60.prototype['releaseDate'] = undefined;
/**
 * Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
 * @member {Boolean} released
 */

InlineObject60.prototype['released'] = undefined;
/**
 * If the expand option remotelinks is used, returns the list of remote links stored against this version. Read only.
 * @member {Array.<Object>} remotelinks
 */

InlineObject60.prototype['remotelinks'] = undefined;
/**
 * The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {String} startDate
 */

InlineObject60.prototype['startDate'] = undefined;
var _default = InlineObject60;
exports["default"] = _default;