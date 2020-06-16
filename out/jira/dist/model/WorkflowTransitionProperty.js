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
 * The WorkflowTransitionProperty model module.
 * @module model/WorkflowTransitionProperty
 * @version 1.4.0
 */
var WorkflowTransitionProperty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTransitionProperty</code>.
   * Details about the server Jira is running on.
   * @alias module:model/WorkflowTransitionProperty
   * @param value {String} The value of the transition property.
   */
  function WorkflowTransitionProperty(value) {
    _classCallCheck(this, WorkflowTransitionProperty);

    WorkflowTransitionProperty.initialize(this, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTransitionProperty, null, [{
    key: "initialize",
    value: function initialize(obj, value) {
      obj['value'] = value;
    }
    /**
     * Constructs a <code>WorkflowTransitionProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTransitionProperty} obj Optional instance to populate.
     * @return {module:model/WorkflowTransitionProperty} The populated <code>WorkflowTransitionProperty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTransitionProperty();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WorkflowTransitionProperty;
}();
/**
 * The ID of the transition property.
 * @member {String} id
 */


WorkflowTransitionProperty.prototype['id'] = undefined;
/**
 * The key of the transition property. Also known as the name of the transition property.
 * @member {String} key
 */

WorkflowTransitionProperty.prototype['key'] = undefined;
/**
 * The value of the transition property.
 * @member {String} value
 */

WorkflowTransitionProperty.prototype['value'] = undefined;
var _default = WorkflowTransitionProperty;
exports["default"] = _default;