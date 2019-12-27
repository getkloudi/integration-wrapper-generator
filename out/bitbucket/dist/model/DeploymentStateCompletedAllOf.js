"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _DeploymentStateCompletedStatus = _interopRequireDefault(require("./DeploymentStateCompletedStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStateCompletedAllOf model module.
 * @module model/DeploymentStateCompletedAllOf
 * @version 1.1.2
 */
var DeploymentStateCompletedAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentStateCompletedAllOf</code>.
   * A Bitbucket Deployment COMPLETED deployment state.
   * @alias module:model/DeploymentStateCompletedAllOf
   */
  function DeploymentStateCompletedAllOf() {
    _classCallCheck(this, DeploymentStateCompletedAllOf);

    DeploymentStateCompletedAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateCompletedAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentStateCompletedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompletedAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompletedAllOf} The populated <code>DeploymentStateCompletedAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateCompletedAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('deployer')) {
          obj['deployer'] = _Account["default"].constructFromObject(data['deployer']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _DeploymentStateCompletedStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('completion_date')) {
          obj['completion_date'] = _ApiClient["default"].convertToType(data['completion_date'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return DeploymentStateCompletedAllOf;
}();
/**
 * The name of deployment state (COMPLETED).
 * @member {module:model/DeploymentStateCompletedAllOf.NameEnum} name
 */


DeploymentStateCompletedAllOf.prototype['name'] = undefined;
/**
 * Link to the deployment result.
 * @member {String} url
 */

DeploymentStateCompletedAllOf.prototype['url'] = undefined;
/**
 * @member {module:model/Account} deployer
 */

DeploymentStateCompletedAllOf.prototype['deployer'] = undefined;
/**
 * @member {module:model/DeploymentStateCompletedStatus} status
 */

DeploymentStateCompletedAllOf.prototype['status'] = undefined;
/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */

DeploymentStateCompletedAllOf.prototype['start_date'] = undefined;
/**
 * The timestamp when the deployment completed.
 * @member {Date} completion_date
 */

DeploymentStateCompletedAllOf.prototype['completion_date'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateCompletedAllOf['NameEnum'] = {
  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED"
};
var _default = DeploymentStateCompletedAllOf;
exports["default"] = _default;