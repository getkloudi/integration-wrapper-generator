"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeploymentVariableAllOf = _interopRequireDefault(require("./DeploymentVariableAllOf"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentVariable model module.
 * @module model/DeploymentVariable
 * @version 1.1.2
 */
var DeploymentVariable =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentVariable</code>.
   * @alias module:model/DeploymentVariable
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/DeploymentVariableAllOf
   * @param type {String} 
   */
  function DeploymentVariable(type) {
    _classCallCheck(this, DeploymentVariable);

    _ModelObject["default"].initialize(this, type);

    _DeploymentVariableAllOf["default"].initialize(this);

    DeploymentVariable.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentVariable, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>DeploymentVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentVariable} obj Optional instance to populate.
     * @return {module:model/DeploymentVariable} The populated <code>DeploymentVariable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentVariable();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _DeploymentVariableAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('secured')) {
          obj['secured'] = _ApiClient["default"].convertToType(data['secured'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DeploymentVariable;
}();
/**
 * The UUID identifying the variable.
 * @member {String} uuid
 */


DeploymentVariable.prototype['uuid'] = undefined;
/**
 * The unique name of the variable.
 * @member {String} key
 */

DeploymentVariable.prototype['key'] = undefined;
/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */

DeploymentVariable.prototype['value'] = undefined;
/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */

DeploymentVariable.prototype['secured'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement DeploymentVariableAllOf interface:

/**
 * The UUID identifying the variable.
 * @member {String} uuid
 */

_DeploymentVariableAllOf["default"].prototype['uuid'] = undefined;
/**
 * The unique name of the variable.
 * @member {String} key
 */

_DeploymentVariableAllOf["default"].prototype['key'] = undefined;
/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */

_DeploymentVariableAllOf["default"].prototype['value'] = undefined;
/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */

_DeploymentVariableAllOf["default"].prototype['secured'] = undefined;
var _default = DeploymentVariable;
exports["default"] = _default;