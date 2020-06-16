"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowStatusProperties = _interopRequireDefault(require("./WorkflowStatusProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowStatus model module.
 * @module model/WorkflowStatus
 * @version 1.4.0
 */
var WorkflowStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowStatus</code>.
   * Details of a workflow status.
   * @alias module:model/WorkflowStatus
   * @param id {String} The ID of the issue status.
   * @param name {String} The name of the status in the workflow.
   */
  function WorkflowStatus(id, name) {
    _classCallCheck(this, WorkflowStatus);

    WorkflowStatus.initialize(this, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowStatus, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>WorkflowStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStatus} obj Optional instance to populate.
     * @return {module:model/WorkflowStatus} The populated <code>WorkflowStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowStatus();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _WorkflowStatusProperties["default"].constructFromObject(data['properties']);
        }
      }

      return obj;
    }
  }]);

  return WorkflowStatus;
}();
/**
 * The ID of the issue status.
 * @member {String} id
 */


WorkflowStatus.prototype['id'] = undefined;
/**
 * The name of the status in the workflow.
 * @member {String} name
 */

WorkflowStatus.prototype['name'] = undefined;
/**
 * @member {module:model/WorkflowStatusProperties} properties
 */

WorkflowStatus.prototype['properties'] = undefined;
var _default = WorkflowStatus;
exports["default"] = _default;