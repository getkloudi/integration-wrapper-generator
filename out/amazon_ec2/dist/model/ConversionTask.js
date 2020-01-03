"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConversionTaskState = _interopRequireDefault(require("./ConversionTaskState"));

var _ImportInstanceTaskDetails = _interopRequireDefault(require("./ImportInstanceTaskDetails"));

var _ImportVolumeTaskDetails = _interopRequireDefault(require("./ImportVolumeTaskDetails"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConversionTask model module.
 * @module model/ConversionTask
 * @version 1.0.0
 */
var ConversionTask =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ConversionTask</code>.
   * Describes a conversion task.
   * @alias module:model/ConversionTask
   */
  function ConversionTask() {
    _classCallCheck(this, ConversionTask);

    ConversionTask.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversionTask, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversionTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConversionTask} obj Optional instance to populate.
     * @return {module:model/ConversionTask} The populated <code>ConversionTask</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversionTask();

        if (data.hasOwnProperty('ConversionTaskId')) {
          obj['ConversionTaskId'] = _ApiClient["default"].convertToType(data['ConversionTaskId'], 'String');
        }

        if (data.hasOwnProperty('ExpirationTime')) {
          obj['ExpirationTime'] = _ApiClient["default"].convertToType(data['ExpirationTime'], 'String');
        }

        if (data.hasOwnProperty('ImportInstance')) {
          obj['ImportInstance'] = _ImportInstanceTaskDetails["default"].constructFromObject(data['ImportInstance']);
        }

        if (data.hasOwnProperty('ImportVolume')) {
          obj['ImportVolume'] = _ImportVolumeTaskDetails["default"].constructFromObject(data['ImportVolume']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ConversionTaskState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ConversionTask;
}();
/**
 * @member {String} ConversionTaskId
 */


ConversionTask.prototype['ConversionTaskId'] = undefined;
/**
 * @member {String} ExpirationTime
 */

ConversionTask.prototype['ExpirationTime'] = undefined;
/**
 * @member {module:model/ImportInstanceTaskDetails} ImportInstance
 */

ConversionTask.prototype['ImportInstance'] = undefined;
/**
 * @member {module:model/ImportVolumeTaskDetails} ImportVolume
 */

ConversionTask.prototype['ImportVolume'] = undefined;
/**
 * @member {module:model/ConversionTaskState} State
 */

ConversionTask.prototype['State'] = undefined;
/**
 * @member {String} StatusMessage
 */

ConversionTask.prototype['StatusMessage'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ConversionTask.prototype['Tags'] = undefined;
var _default = ConversionTask;
exports["default"] = _default;