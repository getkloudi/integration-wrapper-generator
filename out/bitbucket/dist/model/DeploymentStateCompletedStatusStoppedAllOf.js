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
 * The DeploymentStateCompletedStatusStoppedAllOf model module.
 * @module model/DeploymentStateCompletedStatusStoppedAllOf
 * @version 1.1.0
 */
var DeploymentStateCompletedStatusStoppedAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentStateCompletedStatusStoppedAllOf</code>.
   * A STOPPED completed deployment status.
   * @alias module:model/DeploymentStateCompletedStatusStoppedAllOf
   */
  function DeploymentStateCompletedStatusStoppedAllOf() {
    _classCallCheck(this, DeploymentStateCompletedStatusStoppedAllOf);

    DeploymentStateCompletedStatusStoppedAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentStateCompletedStatusStoppedAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentStateCompletedStatusStoppedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompletedStatusStoppedAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompletedStatusStoppedAllOf} The populated <code>DeploymentStateCompletedStatusStoppedAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentStateCompletedStatusStoppedAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeploymentStateCompletedStatusStoppedAllOf;
}();
/**
 * The name of the completed deployment status (STOPPED).
 * @member {module:model/DeploymentStateCompletedStatusStoppedAllOf.NameEnum} name
 */


DeploymentStateCompletedStatusStoppedAllOf.prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

DeploymentStateCompletedStatusStoppedAllOf['NameEnum'] = {
  /**
   * value: "STOPPED"
   * @const
   */
  "STOPPED": "STOPPED"
};
var _default = DeploymentStateCompletedStatusStoppedAllOf;
exports["default"] = _default;