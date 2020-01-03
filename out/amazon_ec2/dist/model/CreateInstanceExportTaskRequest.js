"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExportEnvironment = _interopRequireDefault(require("./ExportEnvironment"));

var _ExportToS3TaskSpecification = _interopRequireDefault(require("./ExportToS3TaskSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateInstanceExportTaskRequest model module.
 * @module model/CreateInstanceExportTaskRequest
 * @version 1.0.0
 */
var CreateInstanceExportTaskRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateInstanceExportTaskRequest</code>.
   * @alias module:model/CreateInstanceExportTaskRequest
   * @param instanceId {String} 
   */
  function CreateInstanceExportTaskRequest(instanceId) {
    _classCallCheck(this, CreateInstanceExportTaskRequest);

    CreateInstanceExportTaskRequest.initialize(this, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateInstanceExportTaskRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId) {
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>CreateInstanceExportTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInstanceExportTaskRequest} obj Optional instance to populate.
     * @return {module:model/CreateInstanceExportTaskRequest} The populated <code>CreateInstanceExportTaskRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateInstanceExportTaskRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('ExportToS3Task')) {
          obj['ExportToS3Task'] = _ExportToS3TaskSpecification["default"].constructFromObject(data['ExportToS3Task']);
        }

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

  return CreateInstanceExportTaskRequest;
}();
/**
 * @member {String} Description
 */


CreateInstanceExportTaskRequest.prototype['Description'] = undefined;
/**
 * @member {module:model/ExportToS3TaskSpecification} ExportToS3Task
 */

CreateInstanceExportTaskRequest.prototype['ExportToS3Task'] = undefined;
/**
 * @member {String} InstanceId
 */

CreateInstanceExportTaskRequest.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/ExportEnvironment} TargetEnvironment
 */

CreateInstanceExportTaskRequest.prototype['TargetEnvironment'] = undefined;
var _default = CreateInstanceExportTaskRequest;
exports["default"] = _default;