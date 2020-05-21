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
 * The DeploymentStateCompletedStatusFailedAllOf model module.
 * @module model/DeploymentStateCompletedStatusFailedAllOf
 * @version 1.2.0
 */
var DeploymentStateCompletedStatusFailedAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeploymentStateCompletedStatusFailedAllOf</code>.
   * A FAILED completed deployment status.
   * @alias module:model/DeploymentStateCompletedStatusFailedAllOf
   */
  function DeploymentStateCompletedStatusFailedAllOf() {
    _classCallCheck(this, DeploymentStateCompletedStatusFailedAllOf);

    DeploymentStateCompletedStatusFailedAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateCompletedStatusFailedAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentStateCompletedStatusFailedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompletedStatusFailedAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompletedStatusFailedAllOf} The populated <code>DeploymentStateCompletedStatusFailedAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateCompletedStatusFailedAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeploymentStateCompletedStatusFailedAllOf;
}();
/**
 * The name of the completed deployment status (FAILED).
 * @member {module:model/DeploymentStateCompletedStatusFailedAllOf.NameEnum} name
 */


DeploymentStateCompletedStatusFailedAllOf.prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateCompletedStatusFailedAllOf['NameEnum'] = {
  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED"
};
var _default = DeploymentStateCompletedStatusFailedAllOf;
exports["default"] = _default;