"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeploymentStateCompletedStatus = _interopRequireDefault(require("./DeploymentStateCompletedStatus"));

var _DeploymentStateCompletedStatusFailedAllOf = _interopRequireDefault(require("./DeploymentStateCompletedStatusFailedAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStateCompletedStatusFailed model module.
 * @module model/DeploymentStateCompletedStatusFailed
 * @version 1.2.0
 */
var DeploymentStateCompletedStatusFailed = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentStateCompletedStatusFailed</code>.
   * @alias module:model/DeploymentStateCompletedStatusFailed
   * @implements module:model/DeploymentStateCompletedStatus
   * @implements module:model/DeploymentStateCompletedStatusFailedAllOf
   * @param type {String} 
   */
  function DeploymentStateCompletedStatusFailed(type) {
    _classCallCheck(this, DeploymentStateCompletedStatusFailed);

    _DeploymentStateCompletedStatus["default"].initialize(this, type);

    _DeploymentStateCompletedStatusFailedAllOf["default"].initialize(this);

    DeploymentStateCompletedStatusFailed.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateCompletedStatusFailed, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>DeploymentStateCompletedStatusFailed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompletedStatusFailed} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompletedStatusFailed} The populated <code>DeploymentStateCompletedStatusFailed</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateCompletedStatusFailed();

        _DeploymentStateCompletedStatus["default"].constructFromObject(data, obj);

        _DeploymentStateCompletedStatusFailedAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeploymentStateCompletedStatusFailed;
}();
/**
 * @member {String} type
 */


DeploymentStateCompletedStatusFailed.prototype['type'] = undefined;
/**
 * The name of the completed deployment status (FAILED).
 * @member {module:model/DeploymentStateCompletedStatusFailed.NameEnum} name
 */

DeploymentStateCompletedStatusFailed.prototype['name'] = undefined; // Implement DeploymentStateCompletedStatus interface:

/**
 * @member {String} type
 */

_DeploymentStateCompletedStatus["default"].prototype['type'] = undefined; // Implement DeploymentStateCompletedStatusFailedAllOf interface:

/**
 * The name of the completed deployment status (FAILED).
 * @member {module:model/DeploymentStateCompletedStatusFailedAllOf.NameEnum} name
 */

_DeploymentStateCompletedStatusFailedAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateCompletedStatusFailed['NameEnum'] = {
  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED"
};
var _default = DeploymentStateCompletedStatusFailed;
exports["default"] = _default;