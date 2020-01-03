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
 * The RebootInstancesRequest model module.
 * @module model/RebootInstancesRequest
 * @version 1.0.0
 */
var RebootInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RebootInstancesRequest</code>.
   * @alias module:model/RebootInstancesRequest
   * @param instanceIds {Array.<String>} 
   */
  function RebootInstancesRequest(instanceIds) {
    _classCallCheck(this, RebootInstancesRequest);

    RebootInstancesRequest.initialize(this, instanceIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RebootInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceIds) {
      obj['InstanceIds'] = instanceIds;
    }
    /**
     * Constructs a <code>RebootInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RebootInstancesRequest} obj Optional instance to populate.
     * @return {module:model/RebootInstancesRequest} The populated <code>RebootInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RebootInstancesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceIds')) {
          obj['InstanceIds'] = _ApiClient["default"].convertToType(data['InstanceIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return RebootInstancesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


RebootInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} InstanceIds
 */

RebootInstancesRequest.prototype['InstanceIds'] = undefined;
var _default = RebootInstancesRequest;
exports["default"] = _default;