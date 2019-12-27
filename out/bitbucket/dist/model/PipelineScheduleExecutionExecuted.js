"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pipeline = _interopRequireDefault(require("./Pipeline"));

var _PipelineScheduleExecution = _interopRequireDefault(require("./PipelineScheduleExecution"));

var _PipelineScheduleExecutionExecutedAllOf = _interopRequireDefault(require("./PipelineScheduleExecutionExecutedAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineScheduleExecutionExecuted model module.
 * @module model/PipelineScheduleExecutionExecuted
 * @version 1.1.0
 */
var PipelineScheduleExecutionExecuted =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineScheduleExecutionExecuted</code>.
   * @alias module:model/PipelineScheduleExecutionExecuted
   * @implements module:model/PipelineScheduleExecution
   * @implements module:model/PipelineScheduleExecutionExecutedAllOf
   * @param type {String} 
   */
  function PipelineScheduleExecutionExecuted(type) {
    _classCallCheck(this, PipelineScheduleExecutionExecuted);

    _PipelineScheduleExecution["default"].initialize(this, type);

    _PipelineScheduleExecutionExecutedAllOf["default"].initialize(this);

    PipelineScheduleExecutionExecuted.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineScheduleExecutionExecuted, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineScheduleExecutionExecuted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineScheduleExecutionExecuted} obj Optional instance to populate.
     * @return {module:model/PipelineScheduleExecutionExecuted} The populated <code>PipelineScheduleExecutionExecuted</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineScheduleExecutionExecuted();

        _PipelineScheduleExecution["default"].constructFromObject(data, obj);

        _PipelineScheduleExecutionExecutedAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('pipeline')) {
          obj['pipeline'] = _Pipeline["default"].constructFromObject(data['pipeline']);
        }
      }

      return obj;
    }
  }]);

  return PipelineScheduleExecutionExecuted;
}();
/**
 * @member {String} type
 */


PipelineScheduleExecutionExecuted.prototype['type'] = undefined;
/**
 * @member {module:model/Pipeline} pipeline
 */

PipelineScheduleExecutionExecuted.prototype['pipeline'] = undefined; // Implement PipelineScheduleExecution interface:

/**
 * @member {String} type
 */

_PipelineScheduleExecution["default"].prototype['type'] = undefined; // Implement PipelineScheduleExecutionExecutedAllOf interface:

/**
 * @member {module:model/Pipeline} pipeline
 */

_PipelineScheduleExecutionExecutedAllOf["default"].prototype['pipeline'] = undefined;
var _default = PipelineScheduleExecutionExecuted;
exports["default"] = _default;