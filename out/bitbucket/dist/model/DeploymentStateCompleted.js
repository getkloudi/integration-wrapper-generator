"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _DeploymentState = _interopRequireDefault(require("./DeploymentState"));

var _DeploymentStateCompletedAllOf = _interopRequireDefault(require("./DeploymentStateCompletedAllOf"));

var _DeploymentStateCompletedStatus = _interopRequireDefault(require("./DeploymentStateCompletedStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStateCompleted model module.
 * @module model/DeploymentStateCompleted
 * @version 1.1.2
 */
var DeploymentStateCompleted =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentStateCompleted</code>.
   * @alias module:model/DeploymentStateCompleted
   * @implements module:model/DeploymentState
   * @implements module:model/DeploymentStateCompletedAllOf
   * @param type {String} 
   */
  function DeploymentStateCompleted(type) {
    _classCallCheck(this, DeploymentStateCompleted);

    _DeploymentState["default"].initialize(this, type);

    _DeploymentStateCompletedAllOf["default"].initialize(this);

    DeploymentStateCompleted.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateCompleted, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>DeploymentStateCompleted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompleted} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompleted} The populated <code>DeploymentStateCompleted</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateCompleted();

        _DeploymentState["default"].constructFromObject(data, obj);

        _DeploymentStateCompletedAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

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

  return DeploymentStateCompleted;
}();
/**
 * @member {String} type
 */


DeploymentStateCompleted.prototype['type'] = undefined;
/**
 * The name of deployment state (COMPLETED).
 * @member {module:model/DeploymentStateCompleted.NameEnum} name
 */

DeploymentStateCompleted.prototype['name'] = undefined;
/**
 * Link to the deployment result.
 * @member {String} url
 */

DeploymentStateCompleted.prototype['url'] = undefined;
/**
 * @member {module:model/Account} deployer
 */

DeploymentStateCompleted.prototype['deployer'] = undefined;
/**
 * @member {module:model/DeploymentStateCompletedStatus} status
 */

DeploymentStateCompleted.prototype['status'] = undefined;
/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */

DeploymentStateCompleted.prototype['start_date'] = undefined;
/**
 * The timestamp when the deployment completed.
 * @member {Date} completion_date
 */

DeploymentStateCompleted.prototype['completion_date'] = undefined; // Implement DeploymentState interface:

/**
 * @member {String} type
 */

_DeploymentState["default"].prototype['type'] = undefined; // Implement DeploymentStateCompletedAllOf interface:

/**
 * The name of deployment state (COMPLETED).
 * @member {module:model/DeploymentStateCompletedAllOf.NameEnum} name
 */

_DeploymentStateCompletedAllOf["default"].prototype['name'] = undefined;
/**
 * Link to the deployment result.
 * @member {String} url
 */

_DeploymentStateCompletedAllOf["default"].prototype['url'] = undefined;
/**
 * @member {module:model/Account} deployer
 */

_DeploymentStateCompletedAllOf["default"].prototype['deployer'] = undefined;
/**
 * @member {module:model/DeploymentStateCompletedStatus} status
 */

_DeploymentStateCompletedAllOf["default"].prototype['status'] = undefined;
/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */

_DeploymentStateCompletedAllOf["default"].prototype['start_date'] = undefined;
/**
 * The timestamp when the deployment completed.
 * @member {Date} completion_date
 */

_DeploymentStateCompletedAllOf["default"].prototype['completion_date'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateCompleted['NameEnum'] = {
  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED"
};
var _default = DeploymentStateCompleted;
exports["default"] = _default;