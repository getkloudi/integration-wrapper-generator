"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityProperty = _interopRequireDefault(require("./EntityProperty"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

var _Visibility = _interopRequireDefault(require("./Visibility"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Worklog model module.
 * @module model/Worklog
 * @version 1.4.0
 */
var Worklog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Worklog</code>.
   * Details of a worklog.
   * @alias module:model/Worklog
   */
  function Worklog() {
    _classCallCheck(this, Worklog);

    Worklog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Worklog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Worklog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Worklog} obj Optional instance to populate.
     * @return {module:model/Worklog} The populated <code>Worklog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Worklog();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _UserDetails["default"]);
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], Object);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issueId')) {
          obj['issueId'] = _ApiClient["default"].convertToType(data['issueId'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_EntityProperty["default"]]);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('started')) {
          obj['started'] = _ApiClient["default"].convertToType(data['started'], 'Date');
        }

        if (data.hasOwnProperty('timeSpent')) {
          obj['timeSpent'] = _ApiClient["default"].convertToType(data['timeSpent'], 'String');
        }

        if (data.hasOwnProperty('timeSpentSeconds')) {
          obj['timeSpentSeconds'] = _ApiClient["default"].convertToType(data['timeSpentSeconds'], 'Number');
        }

        if (data.hasOwnProperty('updateAuthor')) {
          obj['updateAuthor'] = _ApiClient["default"].convertToType(data['updateAuthor'], _UserDetails["default"]);
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Date');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], _Visibility["default"]);
        }
      }

      return obj;
    }
  }]);

  return Worklog;
}();
/**
 * Details of the user who created the worklog.
 * @member {module:model/UserDetails} author
 */


Worklog.prototype['author'] = undefined;
/**
 * A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog.
 * @member {Object} comment
 */

Worklog.prototype['comment'] = undefined;
/**
 * The datetime on which the worklog was created.
 * @member {Date} created
 */

Worklog.prototype['created'] = undefined;
/**
 * The ID of the worklog record.
 * @member {String} id
 */

Worklog.prototype['id'] = undefined;
/**
 * The ID of the issue this worklog is for.
 * @member {String} issueId
 */

Worklog.prototype['issueId'] = undefined;
/**
 * Details of properties for the worklog. Optional when creating or updating a worklog.
 * @member {Array.<module:model/EntityProperty>} properties
 */

Worklog.prototype['properties'] = undefined;
/**
 * The URL of the worklog item.
 * @member {String} self
 */

Worklog.prototype['self'] = undefined;
/**
 * The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
 * @member {Date} started
 */

Worklog.prototype['started'] = undefined;
/**
 * The time spent working on the issue as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided.
 * @member {String} timeSpent
 */

Worklog.prototype['timeSpent'] = undefined;
/**
 * The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided.
 * @member {Number} timeSpentSeconds
 */

Worklog.prototype['timeSpentSeconds'] = undefined;
/**
 * Details of the user who last updated the worklog.
 * @member {module:model/UserDetails} updateAuthor
 */

Worklog.prototype['updateAuthor'] = undefined;
/**
 * The datetime on which the worklog was last updated.
 * @member {Date} updated
 */

Worklog.prototype['updated'] = undefined;
/**
 * Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog.
 * @member {module:model/Visibility} visibility
 */

Worklog.prototype['visibility'] = undefined;
var _default = Worklog;
exports["default"] = _default;