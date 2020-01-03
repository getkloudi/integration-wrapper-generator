"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExportEnvironment = _interopRequireDefault(require("./ExportEnvironment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceExportDetails model module.
 * @module model/InstanceExportDetails
 * @version 1.0.0
 */
var InstanceExportDetails =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceExportDetails</code>.
   * Describes an instance to export.
   * @alias module:model/InstanceExportDetails
   */
  function InstanceExportDetails() {
    _classCallCheck(this, InstanceExportDetails);

    InstanceExportDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceExportDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceExportDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceExportDetails} obj Optional instance to populate.
     * @return {module:model/InstanceExportDetails} The populated <code>InstanceExportDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceExportDetails();

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('TargetEnvironment')) {
          obj['TargetEnvironment'] = _ExportEnvironment["default"].constructFromObject(data['TargetEnvironment']);
        }
      }

      return obj;
    }
  }]);

  return InstanceExportDetails;
}();
/**
 * @member {String} InstanceId
 */


InstanceExportDetails.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/ExportEnvironment} TargetEnvironment
 */

InstanceExportDetails.prototype['TargetEnvironment'] = undefined;
var _default = InstanceExportDetails;
exports["default"] = _default;