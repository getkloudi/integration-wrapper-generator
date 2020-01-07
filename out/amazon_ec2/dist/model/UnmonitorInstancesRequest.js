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
 * The UnmonitorInstancesRequest model module.
 * @module model/UnmonitorInstancesRequest
 * @version 1.1.0
 */
var UnmonitorInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UnmonitorInstancesRequest</code>.
   * @alias module:model/UnmonitorInstancesRequest
   * @param instanceIds {Array.<String>} 
   */
  function UnmonitorInstancesRequest(instanceIds) {
    _classCallCheck(this, UnmonitorInstancesRequest);

    UnmonitorInstancesRequest.initialize(this, instanceIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnmonitorInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceIds) {
      obj['InstanceIds'] = instanceIds;
    }
    /**
     * Constructs a <code>UnmonitorInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnmonitorInstancesRequest} obj Optional instance to populate.
     * @return {module:model/UnmonitorInstancesRequest} The populated <code>UnmonitorInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnmonitorInstancesRequest();

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

  return UnmonitorInstancesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


UnmonitorInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} InstanceIds
 */

UnmonitorInstancesRequest.prototype['InstanceIds'] = undefined;
var _default = UnmonitorInstancesRequest;
exports["default"] = _default;