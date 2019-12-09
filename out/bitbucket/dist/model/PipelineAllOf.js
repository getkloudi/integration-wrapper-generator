"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _PipelineState = _interopRequireDefault(require("./PipelineState"));

var _PipelineTarget = _interopRequireDefault(require("./PipelineTarget"));

var _PipelineTrigger = _interopRequireDefault(require("./PipelineTrigger"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineAllOf model module.
 * @module model/PipelineAllOf
 * @version 1.0.0
 */
var PipelineAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineAllOf</code>.
   * A Bitbucket Pipeline. This represents an actual pipeline result.
   * @alias module:model/PipelineAllOf
   */
  function PipelineAllOf() {
    _classCallCheck(this, PipelineAllOf);

    PipelineAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineAllOf} The populated <code>PipelineAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineAllOf();

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

  return PipelineAllOf;
}();
/**
 * The number of build seconds used by this pipeline.
 * @member {Number} build_seconds_used
 */


PipelineAllOf.prototype['build_seconds_used'] = undefined;
/**
 * The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
 * @member {Date} completed_on
 */

PipelineAllOf.prototype['completed_on'] = undefined;
/**
 * The timestamp when the pipeline was created.
 * @member {Date} created_on
 */

PipelineAllOf.prototype['created_on'] = undefined;
/**
 * @member {module:model/Account} creator
 */

PipelineAllOf.prototype['creator'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

PipelineAllOf.prototype['repository'] = undefined;
/**
 * @member {module:model/PipelineState} state
 */

PipelineAllOf.prototype['state'] = undefined;
/**
 * @member {module:model/PipelineTarget} target
 */

PipelineAllOf.prototype['target'] = undefined;
/**
 * @member {module:model/PipelineTrigger} trigger
 */

PipelineAllOf.prototype['trigger'] = undefined;
/**
 * The UUID identifying the pipeline.
 * @member {String} uuid
 */

PipelineAllOf.prototype['uuid'] = undefined;
var _default = PipelineAllOf;
exports["default"] = _default;