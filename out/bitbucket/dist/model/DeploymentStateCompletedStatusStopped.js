"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeploymentStateCompletedStatus = _interopRequireDefault(require("./DeploymentStateCompletedStatus"));

var _DeploymentStateCompletedStatusStoppedAllOf = _interopRequireDefault(require("./DeploymentStateCompletedStatusStoppedAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStateCompletedStatusStopped model module.
 * @module model/DeploymentStateCompletedStatusStopped
 * @version 1.1.0
 */
var DeploymentStateCompletedStatusStopped =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentStateCompletedStatusStopped</code>.
   * @alias module:model/DeploymentStateCompletedStatusStopped
   * @implements module:model/DeploymentStateCompletedStatus
   * @implements module:model/DeploymentStateCompletedStatusStoppedAllOf
   * @param type {String} 
   */
  function DeploymentStateCompletedStatusStopped(type) {
    _classCallCheck(this, DeploymentStateCompletedStatusStopped);

    _DeploymentStateCompletedStatus["default"].initialize(this, type);

    _DeploymentStateCompletedStatusStoppedAllOf["default"].initialize(this);

    DeploymentStateCompletedStatusStopped.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateCompletedStatusStopped, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>DeploymentStateCompletedStatusStopped</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompletedStatusStopped} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompletedStatusStopped} The populated <code>DeploymentStateCompletedStatusStopped</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateCompletedStatusStopped();

        _DeploymentStateCompletedStatus["default"].constructFromObject(data, obj);

        _DeploymentStateCompletedStatusStoppedAllOf["default"].constructFromObject(data, obj);

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

  return DeploymentStateCompletedStatusStopped;
}();
/**
 * @member {String} type
 */


DeploymentStateCompletedStatusStopped.prototype['type'] = undefined;
/**
 * The name of the completed deployment status (STOPPED).
 * @member {module:model/DeploymentStateCompletedStatusStopped.NameEnum} name
 */

DeploymentStateCompletedStatusStopped.prototype['name'] = undefined; // Implement DeploymentStateCompletedStatus interface:

/**
 * @member {String} type
 */

_DeploymentStateCompletedStatus["default"].prototype['type'] = undefined; // Implement DeploymentStateCompletedStatusStoppedAllOf interface:

/**
 * The name of the completed deployment status (STOPPED).
 * @member {module:model/DeploymentStateCompletedStatusStoppedAllOf.NameEnum} name
 */

_DeploymentStateCompletedStatusStoppedAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateCompletedStatusStopped['NameEnum'] = {
  /**
   * value: "STOPPED"
   * @const
   */
  "STOPPED": "STOPPED"
};
var _default = DeploymentStateCompletedStatusStopped;
exports["default"] = _default;