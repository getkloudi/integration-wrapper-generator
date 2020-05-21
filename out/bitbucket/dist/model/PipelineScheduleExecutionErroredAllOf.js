"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineError = _interopRequireDefault(require("./PipelineError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineScheduleExecutionErroredAllOf model module.
 * @module model/PipelineScheduleExecutionErroredAllOf
 * @version 1.2.0
 */
var PipelineScheduleExecutionErroredAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineScheduleExecutionErroredAllOf</code>.
   * A Pipelines schedule execution that failed to be executed.
   * @alias module:model/PipelineScheduleExecutionErroredAllOf
   */
  function PipelineScheduleExecutionErroredAllOf() {
    _classCallCheck(this, PipelineScheduleExecutionErroredAllOf);

    PipelineScheduleExecutionErroredAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineScheduleExecutionErroredAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineScheduleExecutionErroredAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineScheduleExecutionErroredAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineScheduleExecutionErroredAllOf} The populated <code>PipelineScheduleExecutionErroredAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineScheduleExecutionErroredAllOf();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _PipelineError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return PipelineScheduleExecutionErroredAllOf;
}();
/**
 * @member {module:model/PipelineError} error
 */


PipelineScheduleExecutionErroredAllOf.prototype['error'] = undefined;
var _default = PipelineScheduleExecutionErroredAllOf;
exports["default"] = _default;