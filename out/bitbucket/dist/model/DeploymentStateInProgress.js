"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _DeploymentState = _interopRequireDefault(require("./DeploymentState"));

var _DeploymentStateInProgressAllOf = _interopRequireDefault(require("./DeploymentStateInProgressAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStateInProgress model module.
 * @module model/DeploymentStateInProgress
 * @version 1.2.0
 */
var DeploymentStateInProgress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentStateInProgress</code>.
   * @alias module:model/DeploymentStateInProgress
   * @implements module:model/DeploymentState
   * @implements module:model/DeploymentStateInProgressAllOf
   * @param type {String} 
   */
  function DeploymentStateInProgress(type) {
    _classCallCheck(this, DeploymentStateInProgress);

    _DeploymentState["default"].initialize(this, type);

    _DeploymentStateInProgressAllOf["default"].initialize(this);

    DeploymentStateInProgress.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateInProgress, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>DeploymentStateInProgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateInProgress} obj Optional instance to populate.
     * @return {module:model/DeploymentStateInProgress} The populated <code>DeploymentStateInProgress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateInProgress();

        _DeploymentState["default"].constructFromObject(data, obj);

        _DeploymentStateInProgressAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return DeploymentStateInProgress;
}();
/**
 * @member {String} type
 */


DeploymentStateInProgress.prototype['type'] = undefined;
/**
 * The name of deployment state (IN_PROGRESS).
 * @member {module:model/DeploymentStateInProgress.NameEnum} name
 */

DeploymentStateInProgress.prototype['name'] = undefined;
/**
 * Link to the deployment result.
 * @member {String} url
 */

DeploymentStateInProgress.prototype['url'] = undefined;
/**
 * @member {module:model/Account} deployer
 */

DeploymentStateInProgress.prototype['deployer'] = undefined;
/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */

DeploymentStateInProgress.prototype['start_date'] = undefined; // Implement DeploymentState interface:

/**
 * @member {String} type
 */

_DeploymentState["default"].prototype['type'] = undefined; // Implement DeploymentStateInProgressAllOf interface:

/**
 * The name of deployment state (IN_PROGRESS).
 * @member {module:model/DeploymentStateInProgressAllOf.NameEnum} name
 */

_DeploymentStateInProgressAllOf["default"].prototype['name'] = undefined;
/**
 * Link to the deployment result.
 * @member {String} url
 */

_DeploymentStateInProgressAllOf["default"].prototype['url'] = undefined;
/**
 * @member {module:model/Account} deployer
 */

_DeploymentStateInProgressAllOf["default"].prototype['deployer'] = undefined;
/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */

_DeploymentStateInProgressAllOf["default"].prototype['start_date'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateInProgress['NameEnum'] = {
  /**
   * value: "IN_PROGRESS"
   * @const
   */
  "IN_PROGRESS": "IN_PROGRESS"
};
var _default = DeploymentStateInProgress;
exports["default"] = _default;