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
 * The DeleteFlowLogsResult model module.
 * @module model/DeleteFlowLogsResult
 * @version 1.1.0
 */
var DeleteFlowLogsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFlowLogsResult</code>.
   * @alias module:model/DeleteFlowLogsResult
   */
  function DeleteFlowLogsResult() {
    _classCallCheck(this, DeleteFlowLogsResult);

    DeleteFlowLogsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFlowLogsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteFlowLogsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFlowLogsResult} obj Optional instance to populate.
     * @return {module:model/DeleteFlowLogsResult} The populated <code>DeleteFlowLogsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFlowLogsResult();

        if (data.hasOwnProperty('Unsuccessful')) {
          obj['Unsuccessful'] = _ApiClient["default"].convertToType(data['Unsuccessful'], [_UnsuccessfulItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DeleteFlowLogsResult;
}();
/**
 * @member {Array.<module:model/UnsuccessfulItem>} Unsuccessful
 */


DeleteFlowLogsResult.prototype['Unsuccessful'] = undefined;
var _default = DeleteFlowLogsResult;
exports["default"] = _default;