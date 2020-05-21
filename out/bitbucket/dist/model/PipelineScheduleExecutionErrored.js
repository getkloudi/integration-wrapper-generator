"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineError = _interopRequireDefault(require("./PipelineError"));

var _PipelineScheduleExecution = _interopRequireDefault(require("./PipelineScheduleExecution"));

var _PipelineScheduleExecutionErroredAllOf = _interopRequireDefault(require("./PipelineScheduleExecutionErroredAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineScheduleExecutionErrored model module.
 * @module model/PipelineScheduleExecutionErrored
 * @version 1.2.0
 */
var PipelineScheduleExecutionErrored = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineScheduleExecutionErrored</code>.
   * @alias module:model/PipelineScheduleExecutionErrored
   * @implements module:model/PipelineScheduleExecution
   * @implements module:model/PipelineScheduleExecutionErroredAllOf
   * @param type {String} 
   */
  function PipelineScheduleExecutionErrored(type) {
    _classCallCheck(this, PipelineScheduleExecutionErrored);

    _PipelineScheduleExecution["default"].initialize(this, type);

    _PipelineScheduleExecutionErroredAllOf["default"].initialize(this);

    PipelineScheduleExecutionErrored.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineScheduleExecutionErrored, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineScheduleExecutionErrored</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineScheduleExecutionErrored} obj Optional instance to populate.
     * @return {module:model/PipelineScheduleExecutionErrored} The populated <code>PipelineScheduleExecutionErrored</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineScheduleExecutionErrored();

        _PipelineScheduleExecution["default"].constructFromObject(data, obj);

        _PipelineScheduleExecutionErroredAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _PipelineError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return PipelineScheduleExecutionErrored;
}();
/**
 * @member {String} type
 */


PipelineScheduleExecutionErrored.prototype['type'] = undefined;
/**
 * @member {module:model/PipelineError} error
 */

PipelineScheduleExecutionErrored.prototype['error'] = undefined; // Implement PipelineScheduleExecution interface:

/**
 * @member {String} type
 */

_PipelineScheduleExecution["default"].prototype['type'] = undefined; // Implement PipelineScheduleExecutionErroredAllOf interface:

/**
 * @member {module:model/PipelineError} error
 */

_PipelineScheduleExecutionErroredAllOf["default"].prototype['error'] = undefined;
var _default = PipelineScheduleExecutionErrored;
exports["default"] = _default;