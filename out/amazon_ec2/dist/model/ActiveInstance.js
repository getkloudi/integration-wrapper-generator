"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceHealthStatus = _interopRequireDefault(require("./InstanceHealthStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActiveInstance model module.
 * @module model/ActiveInstance
 * @version 1.1.0
 */
var ActiveInstance =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ActiveInstance</code>.
   * Describes a running instance in a Spot Fleet.
   * @alias module:model/ActiveInstance
   */
  function ActiveInstance() {
    _classCallCheck(this, ActiveInstance);

    ActiveInstance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActiveInstance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActiveInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActiveInstance} obj Optional instance to populate.
     * @return {module:model/ActiveInstance} The populated <code>ActiveInstance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActiveInstance();

        if (data.hasOwnProperty('InstanceHealth')) {
          obj['InstanceHealth'] = _InstanceHealthStatus["default"].constructFromObject(data['InstanceHealth']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('SpotInstanceRequestId')) {
          obj['SpotInstanceRequestId'] = _ApiClient["default"].convertToType(data['SpotInstanceRequestId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActiveInstance;
}();
/**
 * @member {module:model/InstanceHealthStatus} InstanceHealth
 */


ActiveInstance.prototype['InstanceHealth'] = undefined;
/**
 * @member {String} InstanceId
 */

ActiveInstance.prototype['InstanceId'] = undefined;
/**
 * @member {String} InstanceType
 */

ActiveInstance.prototype['InstanceType'] = undefined;
/**
 * @member {String} SpotInstanceRequestId
 */

ActiveInstance.prototype['SpotInstanceRequestId'] = undefined;
var _default = ActiveInstance;
exports["default"] = _default;