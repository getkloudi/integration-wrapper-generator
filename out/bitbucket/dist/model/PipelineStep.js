"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineCommand = _interopRequireDefault(require("./PipelineCommand"));

var _PipelineImage = _interopRequireDefault(require("./PipelineImage"));

var _PipelineStepAllOf = _interopRequireDefault(require("./PipelineStepAllOf"));

var _PipelineStepState = _interopRequireDefault(require("./PipelineStepState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStep model module.
 * @module model/PipelineStep
 * @version 1.0.0
 */
var PipelineStep =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStep</code>.
   * @alias module:model/PipelineStep
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineStepAllOf
   * @param type {String} 
   */
  function PipelineStep(type) {
    _classCallCheck(this, PipelineStep);

    _ModelObject["default"].initialize(this, type);

    _PipelineStepAllOf["default"].initialize(this);

    PipelineStep.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStep, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStep} obj Optional instance to populate.
     * @return {module:model/PipelineStep} The populated <code>PipelineStep</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStep();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineStepAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('completed_on')) {
          obj['completed_on'] = _ApiClient["default"].convertToType(data['completed_on'], 'Date');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _PipelineImage["default"].constructFromObject(data['image']);
        }

        if (data.hasOwnProperty('logByteCount')) {
          obj['logByteCount'] = _ApiClient["default"].convertToType(data['logByteCount'], 'Number');
        }

        if (data.hasOwnProperty('script_commands')) {
          obj['script_commands'] = _ApiClient["default"].convertToType(data['script_commands'], [_PipelineCommand["default"]]);
        }

        if (data.hasOwnProperty('setup_commands')) {
          obj['setup_commands'] = _ApiClient["default"].convertToType(data['setup_commands'], [_PipelineCommand["default"]]);
        }

        if (data.hasOwnProperty('started_on')) {
          obj['started_on'] = _ApiClient["default"].convertToType(data['started_on'], 'Date');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _PipelineStepState["default"].constructFromObject(data['state']);
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStep;
}();
/**
 * The timestamp when the step execution was completed. This is not set if the step is still in progress.
 * @member {Date} completed_on
 */


PipelineStep.prototype['completed_on'] = undefined;
/**
 * @member {module:model/PipelineImage} image
 */

PipelineStep.prototype['image'] = undefined;
/**
 * The amount of bytes of the log file that is available.
 * @member {Number} logByteCount
 */

PipelineStep.prototype['logByteCount'] = undefined;
/**
 * The list of build commands. These commands are executed in the build container.
 * @member {Array.<module:model/PipelineCommand>} script_commands
 */

PipelineStep.prototype['script_commands'] = undefined;
/**
 * The list of commands that are executed as part of the setup phase of the build. These commands are executed outside the build container.
 * @member {Array.<module:model/PipelineCommand>} setup_commands
 */

PipelineStep.prototype['setup_commands'] = undefined;
/**
 * The timestamp when the step execution was started. This is not set when the step hasn't executed yet.
 * @member {Date} started_on
 */

PipelineStep.prototype['started_on'] = undefined;
/**
 * @member {module:model/PipelineStepState} state
 */

PipelineStep.prototype['state'] = undefined;
/**
 * The UUID identifying the step.
 * @member {String} uuid
 */

PipelineStep.prototype['uuid'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineStepAllOf interface:

/**
 * The timestamp when the step execution was completed. This is not set if the step is still in progress.
 * @member {Date} completed_on
 */

_PipelineStepAllOf["default"].prototype['completed_on'] = undefined;
/**
 * @member {module:model/PipelineImage} image
 */

_PipelineStepAllOf["default"].prototype['image'] = undefined;
/**
 * The amount of bytes of the log file that is available.
 * @member {Number} logByteCount
 */

_PipelineStepAllOf["default"].prototype['logByteCount'] = undefined;
/**
 * The list of build commands. These commands are executed in the build container.
 * @member {Array.<module:model/PipelineCommand>} script_commands
 */

_PipelineStepAllOf["default"].prototype['script_commands'] = undefined;
/**
 * The list of commands that are executed as part of the setup phase of the build. These commands are executed outside the build container.
 * @member {Array.<module:model/PipelineCommand>} setup_commands
 */

_PipelineStepAllOf["default"].prototype['setup_commands'] = undefined;
/**
 * The timestamp when the step execution was started. This is not set when the step hasn't executed yet.
 * @member {Date} started_on
 */

_PipelineStepAllOf["default"].prototype['started_on'] = undefined;
/**
 * @member {module:model/PipelineStepState} state
 */

_PipelineStepAllOf["default"].prototype['state'] = undefined;
/**
 * The UUID identifying the step.
 * @member {String} uuid
 */

_PipelineStepAllOf["default"].prototype['uuid'] = undefined;
var _default = PipelineStep;
exports["default"] = _default;