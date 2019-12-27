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
 * The DeploymentStateUndeployedAllOf model module.
 * @module model/DeploymentStateUndeployedAllOf
 * @version 1.1.0
 */
var DeploymentStateUndeployedAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentStateUndeployedAllOf</code>.
   * A Bitbucket Deployment UNDEPLOYED deployment state.
   * @alias module:model/DeploymentStateUndeployedAllOf
   */
  function DeploymentStateUndeployedAllOf() {
    _classCallCheck(this, DeploymentStateUndeployedAllOf);

    DeploymentStateUndeployedAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateUndeployedAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentStateUndeployedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateUndeployedAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentStateUndeployedAllOf} The populated <code>DeploymentStateUndeployedAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateUndeployedAllOf();

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

  return DeploymentStateUndeployedAllOf;
}();
/**
 * The name of deployment state (UNDEPLOYED).
 * @member {module:model/DeploymentStateUndeployedAllOf.NameEnum} name
 */


DeploymentStateUndeployedAllOf.prototype['name'] = undefined;
/**
 * Link to trigger the deployment.
 * @member {String} trigger_url
 */

DeploymentStateUndeployedAllOf.prototype['trigger_url'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateUndeployedAllOf['NameEnum'] = {
  /**
   * value: "UNDEPLOYED"
   * @const
   */
  "UNDEPLOYED": "UNDEPLOYED"
};
var _default = DeploymentStateUndeployedAllOf;
exports["default"] = _default;