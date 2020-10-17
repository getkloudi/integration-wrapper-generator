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
 * The DeploymentPayload model module.
 * @module model/DeploymentPayload
 * @version 1.4.4
 */
var DeploymentPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentPayload</code>.
   * @alias module:model/DeploymentPayload
   */
  function DeploymentPayload() {
    _classCallCheck(this, DeploymentPayload);

    DeploymentPayload.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentPayload, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentPayload} obj Optional instance to populate.
     * @return {module:model/DeploymentPayload} The populated <code>DeploymentPayload</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentPayload();

        if (data.hasOwnProperty('deploy_user')) {
          obj['deploy_user'] = _ApiClient["default"].convertToType(data['deploy_user'], 'String');
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }

        if (data.hasOwnProperty('room_id')) {
          obj['room_id'] = _ApiClient["default"].convertToType(data['room_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DeploymentPayload;
}();
/**
 * @member {String} deploy_user
 */


DeploymentPayload.prototype['deploy_user'] = undefined;
/**
 * @member {String} environment
 */

DeploymentPayload.prototype['environment'] = undefined;
/**
 * @member {Number} room_id
 */

DeploymentPayload.prototype['room_id'] = undefined;
var _default = DeploymentPayload;
exports["default"] = _default;