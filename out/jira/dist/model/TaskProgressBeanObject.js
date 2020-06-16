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
 * The TaskProgressBeanObject model module.
 * @module model/TaskProgressBeanObject
 * @version 1.4.0
 */
var TaskProgressBeanObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskProgressBeanObject</code>.
   * Details about a task.
   * @alias module:model/TaskProgressBeanObject
   * @param elapsedRuntime {Number} The execution time of the task, in milliseconds.
   * @param id {String} The ID of the task.
   * @param lastUpdate {Number} A timestamp recording when the task progress was last updated.
   * @param progress {Number} The progress of the task, as a percentage complete.
   * @param self {String} The URL of the task.
   * @param status {module:model/TaskProgressBeanObject.StatusEnum} The status of the task.
   * @param submitted {Number} A timestamp recording when the task was submitted.
   * @param submittedBy {Number} The ID of the user who submitted the task.
   */
  function TaskProgressBeanObject(elapsedRuntime, id, lastUpdate, progress, self, status, submitted, submittedBy) {
    _classCallCheck(this, TaskProgressBeanObject);

    TaskProgressBeanObject.initialize(this, elapsedRuntime, id, lastUpdate, progress, self, status, submitted, submittedBy);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskProgressBeanObject, null, [{
    key: "initialize",
    value: function initialize(obj, elapsedRuntime, id, lastUpdate, progress, self, status, submitted, submittedBy) {
      obj['elapsedRuntime'] = elapsedRuntime;
      obj['id'] = id;
      obj['lastUpdate'] = lastUpdate;
      obj['progress'] = progress;
      obj['self'] = self;
      obj['status'] = status;
      obj['submitted'] = submitted;
      obj['submittedBy'] = submittedBy;
    }
    /**
     * Constructs a <code>TaskProgressBeanObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskProgressBeanObject} obj Optional instance to populate.
     * @return {module:model/TaskProgressBeanObject} The populated <code>TaskProgressBeanObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskProgressBeanObject();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('elapsedRuntime')) {
          obj['elapsedRuntime'] = _ApiClient["default"].convertToType(data['elapsedRuntime'], 'Number');
        }

        if (data.hasOwnProperty('finished')) {
          obj['finished'] = _ApiClient["default"].convertToType(data['finished'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('lastUpdate')) {
          obj['lastUpdate'] = _ApiClient["default"].convertToType(data['lastUpdate'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('progress')) {
          obj['progress'] = _ApiClient["default"].convertToType(data['progress'], 'Number');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], Object);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('started')) {
          obj['started'] = _ApiClient["default"].convertToType(data['started'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('submitted')) {
          obj['submitted'] = _ApiClient["default"].convertToType(data['submitted'], 'Number');
        }

        if (data.hasOwnProperty('submittedBy')) {
          obj['submittedBy'] = _ApiClient["default"].convertToType(data['submittedBy'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TaskProgressBeanObject;
}();
/**
 * The description of the task.
 * @member {String} description
 */


TaskProgressBeanObject.prototype['description'] = undefined;
/**
 * The execution time of the task, in milliseconds.
 * @member {Number} elapsedRuntime
 */

TaskProgressBeanObject.prototype['elapsedRuntime'] = undefined;
/**
 * A timestamp recording when the task was finished.
 * @member {Number} finished
 */

TaskProgressBeanObject.prototype['finished'] = undefined;
/**
 * The ID of the task.
 * @member {String} id
 */

TaskProgressBeanObject.prototype['id'] = undefined;
/**
 * A timestamp recording when the task progress was last updated.
 * @member {Number} lastUpdate
 */

TaskProgressBeanObject.prototype['lastUpdate'] = undefined;
/**
 * Information about the progress of the task.
 * @member {String} message
 */

TaskProgressBeanObject.prototype['message'] = undefined;
/**
 * The progress of the task, as a percentage complete.
 * @member {Number} progress
 */

TaskProgressBeanObject.prototype['progress'] = undefined;
/**
 * The result of the task execution.
 * @member {Object} result
 */

TaskProgressBeanObject.prototype['result'] = undefined;
/**
 * The URL of the task.
 * @member {String} self
 */

TaskProgressBeanObject.prototype['self'] = undefined;
/**
 * A timestamp recording when the task was started.
 * @member {Number} started
 */

TaskProgressBeanObject.prototype['started'] = undefined;
/**
 * The status of the task.
 * @member {module:model/TaskProgressBeanObject.StatusEnum} status
 */

TaskProgressBeanObject.prototype['status'] = undefined;
/**
 * A timestamp recording when the task was submitted.
 * @member {Number} submitted
 */

TaskProgressBeanObject.prototype['submitted'] = undefined;
/**
 * The ID of the user who submitted the task.
 * @member {Number} submittedBy
 */

TaskProgressBeanObject.prototype['submittedBy'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

TaskProgressBeanObject['StatusEnum'] = {
  /**
   * value: "ENQUEUED"
   * @const
   */
  "ENQUEUED": "ENQUEUED",

  /**
   * value: "RUNNING"
   * @const
   */
  "RUNNING": "RUNNING",

  /**
   * value: "COMPLETE"
   * @const
   */
  "COMPLETE": "COMPLETE",

  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED",

  /**
   * value: "CANCEL_REQUESTED"
   * @const
   */
  "CANCEL_REQUESTED": "CANCEL_REQUESTED",

  /**
   * value: "CANCELLED"
   * @const
   */
  "CANCELLED": "CANCELLED",

  /**
   * value: "DEAD"
   * @const
   */
  "DEAD": "DEAD"
};
var _default = TaskProgressBeanObject;
exports["default"] = _default;