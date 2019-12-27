"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeploymentState = _interopRequireDefault(require("./DeploymentState"));

var _DeploymentStateUndeployedAllOf = _interopRequireDefault(require("./DeploymentStateUndeployedAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStateUndeployed model module.
 * @module model/DeploymentStateUndeployed
 * @version 1.1.2
 */
var DeploymentStateUndeployed =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentStateUndeployed</code>.
   * @alias module:model/DeploymentStateUndeployed
   * @implements module:model/DeploymentState
   * @implements module:model/DeploymentStateUndeployedAllOf
   * @param type {String} 
   */
  function DeploymentStateUndeployed(type) {
    _classCallCheck(this, DeploymentStateUndeployed);

    _DeploymentState["default"].initialize(this, type);

    _DeploymentStateUndeployedAllOf["default"].initialize(this);

    DeploymentStateUndeployed.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateUndeployed, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>DeploymentStateUndeployed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateUndeployed} obj Optional instance to populate.
     * @return {module:model/DeploymentStateUndeployed} The populated <code>DeploymentStateUndeployed</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateUndeployed();

        _DeploymentState["default"].constructFromObject(data, obj);

        _DeploymentStateUndeployedAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('trigger_url')) {
          obj['trigger_url'] = _ApiClient["default"].convertToType(data['trigger_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeploymentStateUndeployed;
}();
/**
 * @member {String} type
 */


DeploymentStateUndeployed.prototype['type'] = undefined;
/**
 * The name of deployment state (UNDEPLOYED).
 * @member {module:model/DeploymentStateUndeployed.NameEnum} name
 */

DeploymentStateUndeployed.prototype['name'] = undefined;
/**
 * Link to trigger the deployment.
 * @member {String} trigger_url
 */

DeploymentStateUndeployed.prototype['trigger_url'] = undefined; // Implement DeploymentState interface:

/**
 * @member {String} type
 */

_DeploymentState["default"].prototype['type'] = undefined; // Implement DeploymentStateUndeployedAllOf interface:

/**
 * The name of deployment state (UNDEPLOYED).
 * @member {module:model/DeploymentStateUndeployedAllOf.NameEnum} name
 */

_DeploymentStateUndeployedAllOf["default"].prototype['name'] = undefined;
/**
 * Link to trigger the deployment.
 * @member {String} trigger_url
 */

_DeploymentStateUndeployedAllOf["default"].prototype['trigger_url'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateUndeployed['NameEnum'] = {
  /**
   * value: "UNDEPLOYED"
   * @const
   */
  "UNDEPLOYED": "UNDEPLOYED"
};
var _default = DeploymentStateUndeployed;
exports["default"] = _default;