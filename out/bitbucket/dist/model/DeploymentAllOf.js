"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeploymentEnvironment = _interopRequireDefault(require("./DeploymentEnvironment"));

var _DeploymentRelease = _interopRequireDefault(require("./DeploymentRelease"));

var _DeploymentState = _interopRequireDefault(require("./DeploymentState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentAllOf model module.
 * @module model/DeploymentAllOf
 * @version 1.2.0
 */
var DeploymentAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentAllOf</code>.
   * A Bitbucket Deployment.
   * @alias module:model/DeploymentAllOf
   */
  function DeploymentAllOf() {
    _classCallCheck(this, DeploymentAllOf);

    DeploymentAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentAllOf} The populated <code>DeploymentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentAllOf();

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

  return DeploymentAllOf;
}();
/**
 * The UUID identifying the deployment.
 * @member {String} uuid
 */


DeploymentAllOf.prototype['uuid'] = undefined;
/**
 * @member {module:model/DeploymentState} state
 */

DeploymentAllOf.prototype['state'] = undefined;
/**
 * @member {module:model/DeploymentEnvironment} environment
 */

DeploymentAllOf.prototype['environment'] = undefined;
/**
 * @member {module:model/DeploymentRelease} release
 */

DeploymentAllOf.prototype['release'] = undefined;
var _default = DeploymentAllOf;
exports["default"] = _default;