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
 * The DeploymentEnvironmentAllOf model module.
 * @module model/DeploymentEnvironmentAllOf
 * @version 1.1.2
 */
var DeploymentEnvironmentAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentEnvironmentAllOf</code>.
   * A Bitbucket Deployment Environment.
   * @alias module:model/DeploymentEnvironmentAllOf
   */
  function DeploymentEnvironmentAllOf() {
    _classCallCheck(this, DeploymentEnvironmentAllOf);

    DeploymentEnvironmentAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentEnvironmentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentEnvironmentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentEnvironmentAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentEnvironmentAllOf} The populated <code>DeploymentEnvironmentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentEnvironmentAllOf();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeploymentEnvironmentAllOf;
}();
/**
 * The UUID identifying the environment.
 * @member {String} uuid
 */


DeploymentEnvironmentAllOf.prototype['uuid'] = undefined;
/**
 * The name of the environment.
 * @member {String} name
 */

DeploymentEnvironmentAllOf.prototype['name'] = undefined;
var _default = DeploymentEnvironmentAllOf;
exports["default"] = _default;