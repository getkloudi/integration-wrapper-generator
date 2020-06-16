"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowSchemeAssociations = _interopRequireDefault(require("./WorkflowSchemeAssociations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContainerOfWorkflowSchemeAssociations model module.
 * @module model/ContainerOfWorkflowSchemeAssociations
 * @version 1.4.0
 */
var ContainerOfWorkflowSchemeAssociations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerOfWorkflowSchemeAssociations</code>.
   * A container for a list of workflow schemes together with the projects they are associated with.
   * @alias module:model/ContainerOfWorkflowSchemeAssociations
   * @param values {Array.<module:model/WorkflowSchemeAssociations>} A list of workflow schemes together with projects they are associated with.
   */
  function ContainerOfWorkflowSchemeAssociations(values) {
    _classCallCheck(this, ContainerOfWorkflowSchemeAssociations);

    ContainerOfWorkflowSchemeAssociations.initialize(this, values);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerOfWorkflowSchemeAssociations, null, [{
    key: "initialize",
    value: function initialize(obj, values) {
      obj['values'] = values;
    }
    /**
     * Constructs a <code>ContainerOfWorkflowSchemeAssociations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerOfWorkflowSchemeAssociations} obj Optional instance to populate.
     * @return {module:model/ContainerOfWorkflowSchemeAssociations} The populated <code>ContainerOfWorkflowSchemeAssociations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerOfWorkflowSchemeAssociations();

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_WorkflowSchemeAssociations["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ContainerOfWorkflowSchemeAssociations;
}();
/**
 * A list of workflow schemes together with projects they are associated with.
 * @member {Array.<module:model/WorkflowSchemeAssociations>} values
 */


ContainerOfWorkflowSchemeAssociations.prototype['values'] = undefined;
var _default = ContainerOfWorkflowSchemeAssociations;
exports["default"] = _default;