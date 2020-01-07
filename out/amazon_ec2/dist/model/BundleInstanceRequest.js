"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Storage = _interopRequireDefault(require("./Storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BundleInstanceRequest model module.
 * @module model/BundleInstanceRequest
 * @version 1.1.0
 */
var BundleInstanceRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BundleInstanceRequest</code>.
   * Contains the parameters for BundleInstance.
   * @alias module:model/BundleInstanceRequest
   * @param instanceId {String} 
   * @param storage {module:model/Storage} 
   */
  function BundleInstanceRequest(instanceId, storage) {
    _classCallCheck(this, BundleInstanceRequest);

    BundleInstanceRequest.initialize(this, instanceId, storage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BundleInstanceRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId, storage) {
      obj['InstanceId'] = instanceId;
      obj['Storage'] = storage;
    }
    /**
     * Constructs a <code>BundleInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BundleInstanceRequest} obj Optional instance to populate.
     * @return {module:model/BundleInstanceRequest} The populated <code>BundleInstanceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BundleInstanceRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('Storage')) {
          obj['Storage'] = _Storage["default"].constructFromObject(data['Storage']);
        }
      }

      return obj;
    }
  }]);

  return BundleInstanceRequest;
}();
/**
 * @member {Boolean} DryRun
 */


BundleInstanceRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

BundleInstanceRequest.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/Storage} Storage
 */

BundleInstanceRequest.prototype['Storage'] = undefined;
var _default = BundleInstanceRequest;
exports["default"] = _default;