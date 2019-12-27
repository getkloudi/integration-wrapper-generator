"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineAllOf = _interopRequireDefault(require("./PipelineAllOf"));

var _PipelineState = _interopRequireDefault(require("./PipelineState"));

var _PipelineTarget = _interopRequireDefault(require("./PipelineTarget"));

var _PipelineTrigger = _interopRequireDefault(require("./PipelineTrigger"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Pipeline model module.
 * @module model/Pipeline
 * @version 1.1.0
 */
var Pipeline =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Pipeline</code>.
   * @alias module:model/Pipeline
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineAllOf
   * @param type {String} 
   */
  function Pipeline(type) {
    _classCallCheck(this, Pipeline);

    _ModelObject["default"].initialize(this, type);

    _PipelineAllOf["default"].initialize(this);

    Pipeline.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Pipeline, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Pipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pipeline} obj Optional instance to populate.
     * @return {module:model/Pipeline} The populated <code>Pipeline</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pipeline();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('build_seconds_used')) {
          obj['build_seconds_used'] = _ApiClient["default"].convertToType(data['build_seconds_used'], 'Number');
        }

        if (data.hasOwnProperty('completed_on')) {
          obj['completed_on'] = _ApiClient["default"].convertToType(data['completed_on'], 'Date');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _Account["default"].constructFromObject(data['creator']);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _PipelineState["default"].constructFromObject(data['state']);
        }

        if (data.hasOwnProperty('target')) {
          obj['target'] = _PipelineTarget["default"].constructFromObject(data['target']);
        }

        if (data.hasOwnProperty('trigger')) {
          obj['trigger'] = _PipelineTrigger["default"].constructFromObject(data['trigger']);
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Pipeline;
}();
/**
 * The number of build seconds used by this pipeline.
 * @member {Number} build_seconds_used
 */


Pipeline.prototype['build_seconds_used'] = undefined;
/**
 * The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
 * @member {Date} completed_on
 */

Pipeline.prototype['completed_on'] = undefined;
/**
 * The timestamp when the pipeline was created.
 * @member {Date} created_on
 */

Pipeline.prototype['created_on'] = undefined;
/**
 * @member {module:model/Account} creator
 */

Pipeline.prototype['creator'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

Pipeline.prototype['repository'] = undefined;
/**
 * @member {module:model/PipelineState} state
 */

Pipeline.prototype['state'] = undefined;
/**
 * @member {module:model/PipelineTarget} target
 */

Pipeline.prototype['target'] = undefined;
/**
 * @member {module:model/PipelineTrigger} trigger
 */

Pipeline.prototype['trigger'] = undefined;
/**
 * The UUID identifying the pipeline.
 * @member {String} uuid
 */

Pipeline.prototype['uuid'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineAllOf interface:

/**
 * The number of build seconds used by this pipeline.
 * @member {Number} build_seconds_used
 */

_PipelineAllOf["default"].prototype['build_seconds_used'] = undefined;
/**
 * The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
 * @member {Date} completed_on
 */

_PipelineAllOf["default"].prototype['completed_on'] = undefined;
/**
 * The timestamp when the pipeline was created.
 * @member {Date} created_on
 */

_PipelineAllOf["default"].prototype['created_on'] = undefined;
/**
 * @member {module:model/Account} creator
 */

_PipelineAllOf["default"].prototype['creator'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

_PipelineAllOf["default"].prototype['repository'] = undefined;
/**
 * @member {module:model/PipelineState} state
 */

_PipelineAllOf["default"].prototype['state'] = undefined;
/**
 * @member {module:model/PipelineTarget} target
 */

_PipelineAllOf["default"].prototype['target'] = undefined;
/**
 * @member {module:model/PipelineTrigger} trigger
 */

_PipelineAllOf["default"].prototype['trigger'] = undefined;
/**
 * The UUID identifying the pipeline.
 * @member {String} uuid
 */

_PipelineAllOf["default"].prototype['uuid'] = undefined;
var _default = Pipeline;
exports["default"] = _default;