"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineVariableAllOf = _interopRequireDefault(require("./PipelineVariableAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineVariable model module.
 * @module model/PipelineVariable
 * @version 1.1.0
 */
var PipelineVariable =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineVariable</code>.
   * @alias module:model/PipelineVariable
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineVariableAllOf
   * @param type {String} 
   */
  function PipelineVariable(type) {
    _classCallCheck(this, PipelineVariable);

    _ModelObject["default"].initialize(this, type);

    _PipelineVariableAllOf["default"].initialize(this);

    PipelineVariable.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineVariable, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineVariable} obj Optional instance to populate.
     * @return {module:model/PipelineVariable} The populated <code>PipelineVariable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineVariable();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineVariableAllOf["default"].constructFromObject(data, obj);

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

  return PipelineVariable;
}();
/**
 * The unique name of the variable.
 * @member {String} key
 */


PipelineVariable.prototype['key'] = undefined;
/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */

PipelineVariable.prototype['secured'] = undefined;
/**
 * The UUID identifying the variable.
 * @member {String} uuid
 */

PipelineVariable.prototype['uuid'] = undefined;
/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */

PipelineVariable.prototype['value'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineVariableAllOf interface:

/**
 * The unique name of the variable.
 * @member {String} key
 */

_PipelineVariableAllOf["default"].prototype['key'] = undefined;
/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */

_PipelineVariableAllOf["default"].prototype['secured'] = undefined;
/**
 * The UUID identifying the variable.
 * @member {String} uuid
 */

_PipelineVariableAllOf["default"].prototype['uuid'] = undefined;
/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */

_PipelineVariableAllOf["default"].prototype['value'] = undefined;
var _default = PipelineVariable;
exports["default"] = _default;