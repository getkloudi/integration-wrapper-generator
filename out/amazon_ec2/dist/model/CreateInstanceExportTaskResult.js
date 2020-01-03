"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExportTask = _interopRequireDefault(require("./ExportTask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateInstanceExportTaskResult model module.
 * @module model/CreateInstanceExportTaskResult
 * @version 1.0.0
 */
var CreateInstanceExportTaskResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateInstanceExportTaskResult</code>.
   * @alias module:model/CreateInstanceExportTaskResult
   */
  function CreateInstanceExportTaskResult() {
    _classCallCheck(this, CreateInstanceExportTaskResult);

    CreateInstanceExportTaskResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateInstanceExportTaskResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateInstanceExportTaskResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInstanceExportTaskResult} obj Optional instance to populate.
     * @return {module:model/CreateInstanceExportTaskResult} The populated <code>CreateInstanceExportTaskResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateInstanceExportTaskResult();

        if (data.hasOwnProperty('ExportTask')) {
          obj['ExportTask'] = _ExportTask["default"].constructFromObject(data['ExportTask']);
        }
      }

      return obj;
    }
  }]);

  return CreateInstanceExportTaskResult;
}();
/**
 * @member {module:model/ExportTask} ExportTask
 */


CreateInstanceExportTaskResult.prototype['ExportTask'] = undefined;
var _default = CreateInstanceExportTaskResult;
exports["default"] = _default;