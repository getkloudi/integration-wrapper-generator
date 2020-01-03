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
 * The HostInstance model module.
 * @module model/HostInstance
 * @version 1.0.0
 */
var HostInstance =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>HostInstance</code>.
   * Describes an instance running on a Dedicated Host.
   * @alias module:model/HostInstance
   */
  function HostInstance() {
    _classCallCheck(this, HostInstance);

    HostInstance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HostInstance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HostInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HostInstance} obj Optional instance to populate.
     * @return {module:model/HostInstance} The populated <code>HostInstance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HostInstance();

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HostInstance;
}();
/**
 * @member {String} InstanceId
 */


HostInstance.prototype['InstanceId'] = undefined;
/**
 * @member {String} InstanceType
 */

HostInstance.prototype['InstanceType'] = undefined;
/**
 * @member {String} OwnerId
 */

HostInstance.prototype['OwnerId'] = undefined;
var _default = HostInstance;
exports["default"] = _default;