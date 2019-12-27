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
 * The PipelineVariableAllOf model module.
 * @module model/PipelineVariableAllOf
 * @version 1.1.0
 */
var PipelineVariableAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineVariableAllOf</code>.
   * A Pipelines variable.
   * @alias module:model/PipelineVariableAllOf
   */
  function PipelineVariableAllOf() {
    _classCallCheck(this, PipelineVariableAllOf);

    PipelineVariableAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineVariableAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineVariableAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineVariableAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineVariableAllOf} The populated <code>PipelineVariableAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineVariableAllOf();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('secured')) {
          obj['secured'] = _ApiClient["default"].convertToType(data['secured'], 'Boolean');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineVariableAllOf;
}();
/**
 * The unique name of the variable.
 * @member {String} key
 */


PipelineVariableAllOf.prototype['key'] = undefined;
/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */

PipelineVariableAllOf.prototype['secured'] = undefined;
/**
 * The UUID identifying the variable.
 * @member {String} uuid
 */

PipelineVariableAllOf.prototype['uuid'] = undefined;
/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */

PipelineVariableAllOf.prototype['value'] = undefined;
var _default = PipelineVariableAllOf;
exports["default"] = _default;