"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeploymentStateCompletedStatus = _interopRequireDefault(require("./DeploymentStateCompletedStatus"));

var _DeploymentStateCompletedStatusSuccessfulAllOf = _interopRequireDefault(require("./DeploymentStateCompletedStatusSuccessfulAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentStateCompletedStatusSuccessful model module.
 * @module model/DeploymentStateCompletedStatusSuccessful
 * @version 1.2.0
 */
var DeploymentStateCompletedStatusSuccessful = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentStateCompletedStatusSuccessful</code>.
   * @alias module:model/DeploymentStateCompletedStatusSuccessful
   * @implements module:model/DeploymentStateCompletedStatus
   * @implements module:model/DeploymentStateCompletedStatusSuccessfulAllOf
   * @param type {String} 
   */
  function DeploymentStateCompletedStatusSuccessful(type) {
    _classCallCheck(this, DeploymentStateCompletedStatusSuccessful);

    _DeploymentStateCompletedStatus["default"].initialize(this, type);

    _DeploymentStateCompletedStatusSuccessfulAllOf["default"].initialize(this);

    DeploymentStateCompletedStatusSuccessful.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateCompletedStatusSuccessful, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>DeploymentStateCompletedStatusSuccessful</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompletedStatusSuccessful} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompletedStatusSuccessful} The populated <code>DeploymentStateCompletedStatusSuccessful</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateCompletedStatusSuccessful();

        _DeploymentStateCompletedStatus["default"].constructFromObject(data, obj);

        _DeploymentStateCompletedStatusSuccessfulAllOf["default"].constructFromObject(data, obj);

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

  return DeploymentStateCompletedStatusSuccessful;
}();
/**
 * @member {String} type
 */


DeploymentStateCompletedStatusSuccessful.prototype['type'] = undefined;
/**
 * The name of the completed deployment status (SUCCESSFUL).
 * @member {module:model/DeploymentStateCompletedStatusSuccessful.NameEnum} name
 */

DeploymentStateCompletedStatusSuccessful.prototype['name'] = undefined; // Implement DeploymentStateCompletedStatus interface:

/**
 * @member {String} type
 */

_DeploymentStateCompletedStatus["default"].prototype['type'] = undefined; // Implement DeploymentStateCompletedStatusSuccessfulAllOf interface:

/**
 * The name of the completed deployment status (SUCCESSFUL).
 * @member {module:model/DeploymentStateCompletedStatusSuccessfulAllOf.NameEnum} name
 */

_DeploymentStateCompletedStatusSuccessfulAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateCompletedStatusSuccessful['NameEnum'] = {
  /**
   * value: "SUCCESSFUL"
   * @const
   */
  "SUCCESSFUL": "SUCCESSFUL"
};
var _default = DeploymentStateCompletedStatusSuccessful;
exports["default"] = _default;