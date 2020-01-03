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
 * The DescribeExportImageTasksRequest model module.
 * @module model/DescribeExportImageTasksRequest
 * @version 1.0.0
 */
var DescribeExportImageTasksRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeExportImageTasksRequest</code>.
   * @alias module:model/DescribeExportImageTasksRequest
   */
  function DescribeExportImageTasksRequest() {
    _classCallCheck(this, DescribeExportImageTasksRequest);

    DescribeExportImageTasksRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeExportImageTasksRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeExportImageTasksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeExportImageTasksRequest} obj Optional instance to populate.
     * @return {module:model/DescribeExportImageTasksRequest} The populated <code>DescribeExportImageTasksRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeExportImageTasksRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ExportImageTaskIds')) {
          obj['ExportImageTaskIds'] = _ApiClient["default"].convertToType(data['ExportImageTaskIds'], ['String']);
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeExportImageTasksRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeExportImageTasksRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} ExportImageTaskIds
 */

DescribeExportImageTasksRequest.prototype['ExportImageTaskIds'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeExportImageTasksRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeExportImageTasksRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeExportImageTasksRequest.prototype['NextToken'] = undefined;
var _default = DescribeExportImageTasksRequest;
exports["default"] = _default;