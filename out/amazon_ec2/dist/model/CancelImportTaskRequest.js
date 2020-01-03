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
 * The CancelImportTaskRequest model module.
 * @module model/CancelImportTaskRequest
 * @version 1.0.0
 */
var CancelImportTaskRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelImportTaskRequest</code>.
   * @alias module:model/CancelImportTaskRequest
   */
  function CancelImportTaskRequest() {
    _classCallCheck(this, CancelImportTaskRequest);

    CancelImportTaskRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelImportTaskRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelImportTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelImportTaskRequest} obj Optional instance to populate.
     * @return {module:model/CancelImportTaskRequest} The populated <code>CancelImportTaskRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelImportTaskRequest();

        if (data.hasOwnProperty('CancelReason')) {
          obj['CancelReason'] = _ApiClient["default"].convertToType(data['CancelReason'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ImportTaskId')) {
          obj['ImportTaskId'] = _ApiClient["default"].convertToType(data['ImportTaskId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CancelImportTaskRequest;
}();
/**
 * @member {String} CancelReason
 */


CancelImportTaskRequest.prototype['CancelReason'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CancelImportTaskRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ImportTaskId
 */

CancelImportTaskRequest.prototype['ImportTaskId'] = undefined;
var _default = CancelImportTaskRequest;
exports["default"] = _default;