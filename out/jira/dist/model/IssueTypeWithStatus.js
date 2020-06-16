"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StatusDetails = _interopRequireDefault(require("./StatusDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueTypeWithStatus model module.
 * @module model/IssueTypeWithStatus
 * @version 1.4.0
 */
var IssueTypeWithStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeWithStatus</code>.
   * Status details for an issue type.
   * @alias module:model/IssueTypeWithStatus
   * @param id {String} The ID of the issue type.
   * @param name {String} The name of the issue type.
   * @param self {String} The URL of the issue type's status details.
   * @param statuses {Array.<module:model/StatusDetails>} List of status details for the issue type.
   * @param subtask {Boolean} Whether this issue type represents subtasks.
   */
  function IssueTypeWithStatus(id, name, self, statuses, subtask) {
    _classCallCheck(this, IssueTypeWithStatus);

    IssueTypeWithStatus.initialize(this, id, name, self, statuses, subtask);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeWithStatus, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, self, statuses, subtask) {
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
      obj['statuses'] = statuses;
      obj['subtask'] = subtask;
    }
    /**
     * Constructs a <code>IssueTypeWithStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeWithStatus} obj Optional instance to populate.
     * @return {module:model/IssueTypeWithStatus} The populated <code>IssueTypeWithStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeWithStatus();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('statuses')) {
          obj['statuses'] = _ApiClient["default"].convertToType(data['statuses'], [_StatusDetails["default"]]);
        }

        if (data.hasOwnProperty('subtask')) {
          obj['subtask'] = _ApiClient["default"].convertToType(data['subtask'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeWithStatus;
}();
/**
 * The ID of the issue type.
 * @member {String} id
 */


IssueTypeWithStatus.prototype['id'] = undefined;
/**
 * The name of the issue type.
 * @member {String} name
 */

IssueTypeWithStatus.prototype['name'] = undefined;
/**
 * The URL of the issue type's status details.
 * @member {String} self
 */

IssueTypeWithStatus.prototype['self'] = undefined;
/**
 * List of status details for the issue type.
 * @member {Array.<module:model/StatusDetails>} statuses
 */

IssueTypeWithStatus.prototype['statuses'] = undefined;
/**
 * Whether this issue type represents subtasks.
 * @member {Boolean} subtask
 */

IssueTypeWithStatus.prototype['subtask'] = undefined;
var _default = IssueTypeWithStatus;
exports["default"] = _default;