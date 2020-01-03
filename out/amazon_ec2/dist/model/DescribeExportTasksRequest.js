"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeExportTasksRequest model module.
 * @module model/DescribeExportTasksRequest
 * @version 1.0.0
 */
var DescribeExportTasksRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeExportTasksRequest</code>.
   * @alias module:model/DescribeExportTasksRequest
   */
  function DescribeExportTasksRequest() {
    _classCallCheck(this, DescribeExportTasksRequest);

    DescribeExportTasksRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeExportTasksRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeExportTasksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeExportTasksRequest} obj Optional instance to populate.
     * @return {module:model/DescribeExportTasksRequest} The populated <code>DescribeExportTasksRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeExportTasksRequest();

        if (data.hasOwnProperty('ExportTaskIds')) {
          obj['ExportTaskIds'] = _ApiClient["default"].convertToType(data['ExportTaskIds'], ['String']);
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeExportTasksRequest;
}();
/**
 * @member {Array.<String>} ExportTaskIds
 */


DescribeExportTasksRequest.prototype['ExportTaskIds'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeExportTasksRequest.prototype['Filters'] = undefined;
var _default = DescribeExportTasksRequest;
exports["default"] = _default;