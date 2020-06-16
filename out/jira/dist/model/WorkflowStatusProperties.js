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
 * The WorkflowStatusProperties model module.
 * @module model/WorkflowStatusProperties
 * @version 1.4.0
 */
var WorkflowStatusProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowStatusProperties</code>.
   * Properties of a workflow status.
   * @alias module:model/WorkflowStatusProperties
   * @param issueEditable {Boolean} Whether issues are editable in this status.
   */
  function WorkflowStatusProperties(issueEditable) {
    _classCallCheck(this, WorkflowStatusProperties);

    WorkflowStatusProperties.initialize(this, issueEditable);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowStatusProperties, null, [{
    key: "initialize",
    value: function initialize(obj, issueEditable) {
      obj['issueEditable'] = issueEditable;
    }
    /**
     * Constructs a <code>WorkflowStatusProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStatusProperties} obj Optional instance to populate.
     * @return {module:model/WorkflowStatusProperties} The populated <code>WorkflowStatusProperties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowStatusProperties();

        if (data.hasOwnProperty('issueEditable')) {
          obj['issueEditable'] = _ApiClient["default"].convertToType(data['issueEditable'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return WorkflowStatusProperties;
}();
/**
 * Whether issues are editable in this status.
 * @member {Boolean} issueEditable
 */


WorkflowStatusProperties.prototype['issueEditable'] = undefined;
var _default = WorkflowStatusProperties;
exports["default"] = _default;