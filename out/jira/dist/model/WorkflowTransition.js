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
 * The WorkflowTransition model module.
 * @module model/WorkflowTransition
 * @version 1.4.0
 */
var WorkflowTransition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTransition</code>.
   * A workflow transition.
   * @alias module:model/WorkflowTransition
   * @param id {Number} The transition ID.
   * @param name {String} The transition name.
   */
  function WorkflowTransition(id, name) {
    _classCallCheck(this, WorkflowTransition);

    WorkflowTransition.initialize(this, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTransition, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>WorkflowTransition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTransition} obj Optional instance to populate.
     * @return {module:model/WorkflowTransition} The populated <code>WorkflowTransition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTransition();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WorkflowTransition;
}();
/**
 * The transition ID.
 * @member {Number} id
 */


WorkflowTransition.prototype['id'] = undefined;
/**
 * The transition name.
 * @member {String} name
 */

WorkflowTransition.prototype['name'] = undefined;
var _default = WorkflowTransition;
exports["default"] = _default;