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
 * The DeleteFlowLogsRequest model module.
 * @module model/DeleteFlowLogsRequest
 * @version 1.0.0
 */
var DeleteFlowLogsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFlowLogsRequest</code>.
   * @alias module:model/DeleteFlowLogsRequest
   * @param flowLogIds {Array.<String>} 
   */
  function DeleteFlowLogsRequest(flowLogIds) {
    _classCallCheck(this, DeleteFlowLogsRequest);

    DeleteFlowLogsRequest.initialize(this, flowLogIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFlowLogsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, flowLogIds) {
      obj['FlowLogIds'] = flowLogIds;
    }
    /**
     * Constructs a <code>DeleteFlowLogsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFlowLogsRequest} obj Optional instance to populate.
     * @return {module:model/DeleteFlowLogsRequest} The populated <code>DeleteFlowLogsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFlowLogsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('FlowLogIds')) {
          obj['FlowLogIds'] = _ApiClient["default"].convertToType(data['FlowLogIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DeleteFlowLogsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteFlowLogsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} FlowLogIds
 */

DeleteFlowLogsRequest.prototype['FlowLogIds'] = undefined;
var _default = DeleteFlowLogsRequest;
exports["default"] = _default;