"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportInstanceReasonCodes = _interopRequireDefault(require("./ReportInstanceReasonCodes"));

var _ReportStatusType = _interopRequireDefault(require("./ReportStatusType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReportInstanceStatusRequest model module.
 * @module model/ReportInstanceStatusRequest
 * @version 1.1.0
 */
var ReportInstanceStatusRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReportInstanceStatusRequest</code>.
   * @alias module:model/ReportInstanceStatusRequest
   * @param instances {Array.<String>} 
   * @param reasonCodes {Array.<module:model/ReportInstanceReasonCodes>} 
   * @param status {module:model/ReportStatusType} 
   */
  function ReportInstanceStatusRequest(instances, reasonCodes, status) {
    _classCallCheck(this, ReportInstanceStatusRequest);

    ReportInstanceStatusRequest.initialize(this, instances, reasonCodes, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReportInstanceStatusRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instances, reasonCodes, status) {
      obj['Instances'] = instances;
      obj['ReasonCodes'] = reasonCodes;
      obj['Status'] = status;
    }
    /**
     * Constructs a <code>ReportInstanceStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportInstanceStatusRequest} obj Optional instance to populate.
     * @return {module:model/ReportInstanceStatusRequest} The populated <code>ReportInstanceStatusRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportInstanceStatusRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EndTime')) {
          obj['EndTime'] = _ApiClient["default"].convertToType(data['EndTime'], 'Date');
        }

        if (data.hasOwnProperty('Instances')) {
          obj['Instances'] = _ApiClient["default"].convertToType(data['Instances'], ['String']);
        }

        if (data.hasOwnProperty('ReasonCodes')) {
          obj['ReasonCodes'] = _ApiClient["default"].convertToType(data['ReasonCodes'], [_ReportInstanceReasonCodes["default"]]);
        }

        if (data.hasOwnProperty('StartTime')) {
          obj['StartTime'] = _ApiClient["default"].convertToType(data['StartTime'], 'Date');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ReportStatusType["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return ReportInstanceStatusRequest;
}();
/**
 * @member {String} Description
 */


ReportInstanceStatusRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ReportInstanceStatusRequest.prototype['DryRun'] = undefined;
/**
 * @member {Date} EndTime
 */

ReportInstanceStatusRequest.prototype['EndTime'] = undefined;
/**
 * @member {Array.<String>} Instances
 */

ReportInstanceStatusRequest.prototype['Instances'] = undefined;
/**
 * @member {Array.<module:model/ReportInstanceReasonCodes>} ReasonCodes
 */

ReportInstanceStatusRequest.prototype['ReasonCodes'] = undefined;
/**
 * @member {Date} StartTime
 */

ReportInstanceStatusRequest.prototype['StartTime'] = undefined;
/**
 * @member {module:model/ReportStatusType} Status
 */

ReportInstanceStatusRequest.prototype['Status'] = undefined;
var _default = ReportInstanceStatusRequest;
exports["default"] = _default;