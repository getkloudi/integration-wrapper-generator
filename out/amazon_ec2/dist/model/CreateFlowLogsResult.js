"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UnsuccessfulItem = _interopRequireDefault(require("./UnsuccessfulItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateFlowLogsResult model module.
 * @module model/CreateFlowLogsResult
 * @version 1.0.0
 */
var CreateFlowLogsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFlowLogsResult</code>.
   * @alias module:model/CreateFlowLogsResult
   */
  function CreateFlowLogsResult() {
    _classCallCheck(this, CreateFlowLogsResult);

    CreateFlowLogsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFlowLogsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateFlowLogsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFlowLogsResult} obj Optional instance to populate.
     * @return {module:model/CreateFlowLogsResult} The populated <code>CreateFlowLogsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFlowLogsResult();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('FlowLogIds')) {
          obj['FlowLogIds'] = _ApiClient["default"].convertToType(data['FlowLogIds'], ['String']);
        }

        if (data.hasOwnProperty('Unsuccessful')) {
          obj['Unsuccessful'] = _ApiClient["default"].convertToType(data['Unsuccessful'], [_UnsuccessfulItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateFlowLogsResult;
}();
/**
 * @member {String} ClientToken
 */


CreateFlowLogsResult.prototype['ClientToken'] = undefined;
/**
 * @member {Array.<String>} FlowLogIds
 */

CreateFlowLogsResult.prototype['FlowLogIds'] = undefined;
/**
 * @member {Array.<module:model/UnsuccessfulItem>} Unsuccessful
 */

CreateFlowLogsResult.prototype['Unsuccessful'] = undefined;
var _default = CreateFlowLogsResult;
exports["default"] = _default;