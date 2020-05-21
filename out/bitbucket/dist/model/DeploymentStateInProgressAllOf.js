"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStateInProgressAllOf model module.
 * @module model/DeploymentStateInProgressAllOf
 * @version 1.2.0
 */
var DeploymentStateInProgressAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentStateInProgressAllOf</code>.
   * A Bitbucket Deployment IN_PROGRESS deployment state.
   * @alias module:model/DeploymentStateInProgressAllOf
   */
  function DeploymentStateInProgressAllOf() {
    _classCallCheck(this, DeploymentStateInProgressAllOf);

    DeploymentStateInProgressAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateInProgressAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentStateInProgressAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateInProgressAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentStateInProgressAllOf} The populated <code>DeploymentStateInProgressAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateInProgressAllOf();

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

  return DeploymentStateInProgressAllOf;
}();
/**
 * The name of deployment state (IN_PROGRESS).
 * @member {module:model/DeploymentStateInProgressAllOf.NameEnum} name
 */


DeploymentStateInProgressAllOf.prototype['name'] = undefined;
/**
 * Link to the deployment result.
 * @member {String} url
 */

DeploymentStateInProgressAllOf.prototype['url'] = undefined;
/**
 * @member {module:model/Account} deployer
 */

DeploymentStateInProgressAllOf.prototype['deployer'] = undefined;
/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */

DeploymentStateInProgressAllOf.prototype['start_date'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateInProgressAllOf['NameEnum'] = {
  /**
   * value: "IN_PROGRESS"
   * @const
   */
  "IN_PROGRESS": "IN_PROGRESS"
};
var _default = DeploymentStateInProgressAllOf;
exports["default"] = _default;