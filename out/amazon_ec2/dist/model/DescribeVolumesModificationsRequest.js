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
 * The DescribeVolumesModificationsRequest model module.
 * @module model/DescribeVolumesModificationsRequest
 * @version 1.1.0
 */
var DescribeVolumesModificationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVolumesModificationsRequest</code>.
   * @alias module:model/DescribeVolumesModificationsRequest
   */
  function DescribeVolumesModificationsRequest() {
    _classCallCheck(this, DescribeVolumesModificationsRequest);

    DescribeVolumesModificationsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVolumesModificationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVolumesModificationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVolumesModificationsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeVolumesModificationsRequest} The populated <code>DescribeVolumesModificationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVolumesModificationsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
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

        if (data.hasOwnProperty('VolumeIds')) {
          obj['VolumeIds'] = _ApiClient["default"].convertToType(data['VolumeIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeVolumesModificationsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeVolumesModificationsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeVolumesModificationsRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeVolumesModificationsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeVolumesModificationsRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} VolumeIds
 */

DescribeVolumesModificationsRequest.prototype['VolumeIds'] = undefined;
var _default = DescribeVolumesModificationsRequest;
exports["default"] = _default;