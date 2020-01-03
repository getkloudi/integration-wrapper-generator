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
 * The DeleteFleetsRequest model module.
 * @module model/DeleteFleetsRequest
 * @version 1.0.0
 */
var DeleteFleetsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFleetsRequest</code>.
   * @alias module:model/DeleteFleetsRequest
   * @param fleetIds {Array.<String>} 
   * @param terminateInstances {Boolean} 
   */
  function DeleteFleetsRequest(fleetIds, terminateInstances) {
    _classCallCheck(this, DeleteFleetsRequest);

    DeleteFleetsRequest.initialize(this, fleetIds, terminateInstances);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFleetsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, fleetIds, terminateInstances) {
      obj['FleetIds'] = fleetIds;
      obj['TerminateInstances'] = terminateInstances;
    }
    /**
     * Constructs a <code>DeleteFleetsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFleetsRequest} obj Optional instance to populate.
     * @return {module:model/DeleteFleetsRequest} The populated <code>DeleteFleetsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFleetsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('FleetIds')) {
          obj['FleetIds'] = _ApiClient["default"].convertToType(data['FleetIds'], ['String']);
        }

        if (data.hasOwnProperty('TerminateInstances')) {
          obj['TerminateInstances'] = _ApiClient["default"].convertToType(data['TerminateInstances'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DeleteFleetsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteFleetsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} FleetIds
 */

DeleteFleetsRequest.prototype['FleetIds'] = undefined;
/**
 * @member {Boolean} TerminateInstances
 */

DeleteFleetsRequest.prototype['TerminateInstances'] = undefined;
var _default = DeleteFleetsRequest;
exports["default"] = _default;