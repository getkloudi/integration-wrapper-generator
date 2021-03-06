"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeploymentEnvironmentAllOf = _interopRequireDefault(require("./DeploymentEnvironmentAllOf"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentEnvironment model module.
 * @module model/DeploymentEnvironment
 * @version 1.2.0
 */
var DeploymentEnvironment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentEnvironment</code>.
   * @alias module:model/DeploymentEnvironment
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/DeploymentEnvironmentAllOf
   * @param type {String} 
   */
  function DeploymentEnvironment(type) {
    _classCallCheck(this, DeploymentEnvironment);

    _ModelObject["default"].initialize(this, type);

    _DeploymentEnvironmentAllOf["default"].initialize(this);

    DeploymentEnvironment.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentEnvironment, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>DeploymentEnvironment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentEnvironment} obj Optional instance to populate.
     * @return {module:model/DeploymentEnvironment} The populated <code>DeploymentEnvironment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentEnvironment();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _DeploymentEnvironmentAllOf["default"].constructFromObject(data, obj);

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

  return DeploymentEnvironment;
}();
/**
 * The UUID identifying the environment.
 * @member {String} uuid
 */


DeploymentEnvironment.prototype['uuid'] = undefined;
/**
 * The name of the environment.
 * @member {String} name
 */

DeploymentEnvironment.prototype['name'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement DeploymentEnvironmentAllOf interface:

/**
 * The UUID identifying the environment.
 * @member {String} uuid
 */

_DeploymentEnvironmentAllOf["default"].prototype['uuid'] = undefined;
/**
 * The name of the environment.
 * @member {String} name
 */

_DeploymentEnvironmentAllOf["default"].prototype['name'] = undefined;
var _default = DeploymentEnvironment;
exports["default"] = _default;