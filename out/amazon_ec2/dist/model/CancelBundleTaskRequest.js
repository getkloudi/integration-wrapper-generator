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
 * The CancelBundleTaskRequest model module.
 * @module model/CancelBundleTaskRequest
 * @version 1.0.0
 */
var CancelBundleTaskRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelBundleTaskRequest</code>.
   * Contains the parameters for CancelBundleTask.
   * @alias module:model/CancelBundleTaskRequest
   * @param bundleId {String} 
   */
  function CancelBundleTaskRequest(bundleId) {
    _classCallCheck(this, CancelBundleTaskRequest);

    CancelBundleTaskRequest.initialize(this, bundleId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelBundleTaskRequest, null, [{
    key: "initialize",
    value: function initialize(obj, bundleId) {
      obj['BundleId'] = bundleId;
    }
    /**
     * Constructs a <code>CancelBundleTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelBundleTaskRequest} obj Optional instance to populate.
     * @return {module:model/CancelBundleTaskRequest} The populated <code>CancelBundleTaskRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelBundleTaskRequest();

        if (data.hasOwnProperty('BundleId')) {
          obj['BundleId'] = _ApiClient["default"].convertToType(data['BundleId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CancelBundleTaskRequest;
}();
/**
 * @member {String} BundleId
 */


CancelBundleTaskRequest.prototype['BundleId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CancelBundleTaskRequest.prototype['DryRun'] = undefined;
var _default = CancelBundleTaskRequest;
exports["default"] = _default;