"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Component = _interopRequireDefault(require("./Component"));

var _IssueAllOfLinks = _interopRequireDefault(require("./IssueAllOfLinks"));

var _Milestone = _interopRequireDefault(require("./Milestone"));

var _PullrequestAllOfRenderedTitle = _interopRequireDefault(require("./PullrequestAllOfRenderedTitle"));

var _Repository = _interopRequireDefault(require("./Repository"));

var _User = _interopRequireDefault(require("./User"));

var _Version = _interopRequireDefault(require("./Version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueAllOf model module.
 * @module model/IssueAllOf
 * @version 1.2.0
 */
var IssueAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueAllOf</code>.
   * An issue.
   * @alias module:model/IssueAllOf
   */
  function IssueAllOf() {
    _classCallCheck(this, IssueAllOf);

    IssueAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueAllOf} obj Optional instance to populate.
     * @return {module:model/IssueAllOf} The populated <code>IssueAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _IssueAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('reporter')) {
          obj['reporter'] = _User["default"].constructFromObject(data['reporter']);
        }

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _User["default"].constructFromObject(data['assignee']);
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }

        if (data.hasOwnProperty('edited_on')) {
          obj['edited_on'] = _ApiClient["default"].convertToType(data['edited_on'], 'Date');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }

        if (data.hasOwnProperty('milestone')) {
          obj['milestone'] = _Milestone["default"].constructFromObject(data['milestone']);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _Version["default"].constructFromObject(data['version']);
        }

        if (data.hasOwnProperty('component')) {
          obj['component'] = _Component["default"].constructFromObject(data['component']);
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'Number');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _PullrequestAllOfRenderedTitle["default"].constructFromObject(data['content']);
        }
      }

      return obj;
    }
  }]);

  return IssueAllOf;
}();
/**
 * @member {module:model/IssueAllOfLinks} links
 */


IssueAllOf.prototype['links'] = undefined;
/**
 * @member {Number} id
 */

IssueAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

IssueAllOf.prototype['repository'] = undefined;
/**
 * @member {String} title
 */

IssueAllOf.prototype['title'] = undefined;
/**
 * @member {module:model/User} reporter
 */

IssueAllOf.prototype['reporter'] = undefined;
/**
 * @member {module:model/User} assignee
 */

IssueAllOf.prototype['assignee'] = undefined;
/**
 * @member {Date} created_on
 */

IssueAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

IssueAllOf.prototype['updated_on'] = undefined;
/**
 * @member {Date} edited_on
 */

IssueAllOf.prototype['edited_on'] = undefined;
/**
 * @member {module:model/IssueAllOf.StateEnum} state
 */

IssueAllOf.prototype['state'] = undefined;
/**
 * @member {module:model/IssueAllOf.KindEnum} kind
 */

IssueAllOf.prototype['kind'] = undefined;
/**
 * @member {module:model/IssueAllOf.PriorityEnum} priority
 */

IssueAllOf.prototype['priority'] = undefined;
/**
 * @member {module:model/Milestone} milestone
 */

IssueAllOf.prototype['milestone'] = undefined;
/**
 * @member {module:model/Version} version
 */

IssueAllOf.prototype['version'] = undefined;
/**
 * @member {module:model/Component} component
 */

IssueAllOf.prototype['component'] = undefined;
/**
 * @member {Number} votes
 */

IssueAllOf.prototype['votes'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */

IssueAllOf.prototype['content'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

IssueAllOf['StateEnum'] = {
  /**
   * value: "new"
   * @const
   */
  "new": "new",

  /**
   * value: "open"
   * @const
   */
  "open": "open",

  /**
   * value: "resolved"
   * @const
   */
  "resolved": "resolved",

  /**
   * value: "on hold"
   * @const
   */
  "on hold": "on hold",

  /**
   * value: "invalid"
   * @const
   */
  "invalid": "invalid",

  /**
   * value: "duplicate"
   * @const
   */
  "duplicate": "duplicate",

  /**
   * value: "wontfix"
   * @const
   */
  "wontfix": "wontfix",

  /**
   * value: "closed"
   * @const
   */
  "closed": "closed"
};
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */

IssueAllOf['KindEnum'] = {
  /**
   * value: "bug"
   * @const
   */
  "bug": "bug",

  /**
   * value: "enhancement"
   * @const
   */
  "enhancement": "enhancement",

  /**
   * value: "proposal"
   * @const
   */
  "proposal": "proposal",

  /**
   * value: "task"
   * @const
   */
  "task": "task"
};
/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */

IssueAllOf['PriorityEnum'] = {
  /**
   * value: "trivial"
   * @const
   */
  "trivial": "trivial",

  /**
   * value: "minor"
   * @const
   */
  "minor": "minor",

  /**
   * value: "major"
   * @const
   */
  "major": "major",

  /**
   * value: "critical"
   * @const
   */
  "critical": "critical",

  /**
   * value: "blocker"
   * @const
   */
  "blocker": "blocker"
};
var _default = IssueAllOf;
exports["default"] = _default;