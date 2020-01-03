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
 * The StopInstancesRequest model module.
 * @module model/StopInstancesRequest
 * @version 1.0.0
 */
var StopInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StopInstancesRequest</code>.
   * @alias module:model/StopInstancesRequest
   * @param instanceIds {Array.<String>} 
   */
  function StopInstancesRequest(instanceIds) {
    _classCallCheck(this, StopInstancesRequest);

    StopInstancesRequest.initialize(this, instanceIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StopInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceIds) {
      obj['InstanceIds'] = instanceIds;
    }
    /**
     * Constructs a <code>StopInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StopInstancesRequest} obj Optional instance to populate.
     * @return {module:model/StopInstancesRequest} The populated <code>StopInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StopInstancesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Force')) {
          obj['Force'] = _ApiClient["default"].convertToType(data['Force'], 'Boolean');
        }

        if (data.hasOwnProperty('Hibernate')) {
          obj['Hibernate'] = _ApiClient["default"].convertToType(data['Hibernate'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceIds')) {
          obj['InstanceIds'] = _ApiClient["default"].convertToType(data['InstanceIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return StopInstancesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


StopInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Force
 */

StopInstancesRequest.prototype['Force'] = undefined;
/**
 * @member {Boolean} Hibernate
 */

StopInstancesRequest.prototype['Hibernate'] = undefined;
/**
 * @member {Array.<String>} InstanceIds
 */

StopInstancesRequest.prototype['InstanceIds'] = undefined;
var _default = StopInstancesRequest;
exports["default"] = _default;