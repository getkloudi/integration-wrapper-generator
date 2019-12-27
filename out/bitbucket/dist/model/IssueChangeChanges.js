"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueChangeChangesAssignee = _interopRequireDefault(require("./IssueChangeChangesAssignee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueChangeChanges model module.
 * @module model/IssueChangeChanges
 * @version 1.1.2
 */
var IssueChangeChanges =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueChangeChanges</code>.
   * @alias module:model/IssueChangeChanges
   */
  function IssueChangeChanges() {
    _classCallCheck(this, IssueChangeChanges);

    IssueChangeChanges.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueChangeChanges, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueChangeChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueChangeChanges} obj Optional instance to populate.
     * @return {module:model/IssueChangeChanges} The populated <code>IssueChangeChanges</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueChangeChanges();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['assignee']);
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['state']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['title']);
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['kind']);
        }

        if (data.hasOwnProperty('milestone')) {
          obj['milestone'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['milestone']);
        }

        if (data.hasOwnProperty('component')) {
          obj['component'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['component']);
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['priority']);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['version']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _IssueChangeChangesAssignee["default"].constructFromObject(data['content']);
        }
      }

      return obj;
    }
  }]);

  return IssueChangeChanges;
}();
/**
 * @member {module:model/IssueChangeChangesAssignee} assignee
 */


IssueChangeChanges.prototype['assignee'] = undefined;
/**
 * @member {module:model/IssueChangeChangesAssignee} state
 */

IssueChangeChanges.prototype['state'] = undefined;
/**
 * @member {module:model/IssueChangeChangesAssignee} title
 */

IssueChangeChanges.prototype['title'] = undefined;
/**
 * @member {module:model/IssueChangeChangesAssignee} kind
 */

IssueChangeChanges.prototype['kind'] = undefined;
/**
 * @member {module:model/IssueChangeChangesAssignee} milestone
 */

IssueChangeChanges.prototype['milestone'] = undefined;
/**
 * @member {module:model/IssueChangeChangesAssignee} component
 */

IssueChangeChanges.prototype['component'] = undefined;
/**
 * @member {module:model/IssueChangeChangesAssignee} priority
 */

IssueChangeChanges.prototype['priority'] = undefined;
/**
 * @member {module:model/IssueChangeChangesAssignee} version
 */

IssueChangeChanges.prototype['version'] = undefined;
/**
 * @member {module:model/IssueChangeChangesAssignee} content
 */

IssueChangeChanges.prototype['content'] = undefined;
var _default = IssueChangeChanges;
exports["default"] = _default;