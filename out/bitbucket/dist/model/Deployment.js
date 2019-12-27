"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeploymentAllOf = _interopRequireDefault(require("./DeploymentAllOf"));

var _DeploymentEnvironment = _interopRequireDefault(require("./DeploymentEnvironment"));

var _DeploymentRelease = _interopRequireDefault(require("./DeploymentRelease"));

var _DeploymentState = _interopRequireDefault(require("./DeploymentState"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Deployment model module.
 * @module model/Deployment
 * @version 1.1.2
 */
var Deployment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Deployment</code>.
   * @alias module:model/Deployment
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/DeploymentAllOf
   * @param type {String} 
   */
  function Deployment(type) {
    _classCallCheck(this, Deployment);

    _ModelObject["default"].initialize(this, type);

    _DeploymentAllOf["default"].initialize(this);

    Deployment.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Deployment, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Deployment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deployment} obj Optional instance to populate.
     * @return {module:model/Deployment} The populated <code>Deployment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Deployment();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _DeploymentAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _DeploymentState["default"].constructFromObject(data['state']);
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _DeploymentEnvironment["default"].constructFromObject(data['environment']);
        }

        if (data.hasOwnProperty('release')) {
          obj['release'] = _DeploymentRelease["default"].constructFromObject(data['release']);
        }
      }

      return obj;
    }
  }]);

  return Deployment;
}();
/**
 * The UUID identifying the deployment.
 * @member {String} uuid
 */


Deployment.prototype['uuid'] = undefined;
/**
 * @member {module:model/DeploymentState} state
 */

Deployment.prototype['state'] = undefined;
/**
 * @member {module:model/DeploymentEnvironment} environment
 */

Deployment.prototype['environment'] = undefined;
/**
 * @member {module:model/DeploymentRelease} release
 */

Deployment.prototype['release'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement DeploymentAllOf interface:

/**
 * The UUID identifying the deployment.
 * @member {String} uuid
 */

_DeploymentAllOf["default"].prototype['uuid'] = undefined;
/**
 * @member {module:model/DeploymentState} state
 */

_DeploymentAllOf["default"].prototype['state'] = undefined;
/**
 * @member {module:model/DeploymentEnvironment} environment
 */

_DeploymentAllOf["default"].prototype['environment'] = undefined;
/**
 * @member {module:model/DeploymentRelease} release
 */

_DeploymentAllOf["default"].prototype['release'] = undefined;
var _default = Deployment;
exports["default"] = _default;