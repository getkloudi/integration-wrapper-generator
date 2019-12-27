"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineSelector = _interopRequireDefault(require("./PipelineSelector"));

var _PipelineTarget = _interopRequireDefault(require("./PipelineTarget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineScheduleAllOf model module.
 * @module model/PipelineScheduleAllOf
 * @version 1.1.0
 */
var PipelineScheduleAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineScheduleAllOf</code>.
   * A Pipelines schedule.
   * @alias module:model/PipelineScheduleAllOf
   */
  function PipelineScheduleAllOf() {
    _classCallCheck(this, PipelineScheduleAllOf);

    PipelineScheduleAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineScheduleAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineScheduleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineScheduleAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineScheduleAllOf} The populated <code>PipelineScheduleAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineScheduleAllOf();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('target')) {
          obj['target'] = _PipelineTarget["default"].constructFromObject(data['target']);
        }

        if (data.hasOwnProperty('selector')) {
          obj['selector'] = _PipelineSelector["default"].constructFromObject(data['selector']);
        }

        if (data.hasOwnProperty('cron_pattern')) {
          obj['cron_pattern'] = _ApiClient["default"].convertToType(data['cron_pattern'], 'String');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return PipelineScheduleAllOf;
}();
/**
 * The UUID identifying the schedule.
 * @member {String} uuid
 */


PipelineScheduleAllOf.prototype['uuid'] = undefined;
/**
 * Whether the schedule is enabled.
 * @member {Boolean} enabled
 */

PipelineScheduleAllOf.prototype['enabled'] = undefined;
/**
 * @member {module:model/PipelineTarget} target
 */

PipelineScheduleAllOf.prototype['target'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

PipelineScheduleAllOf.prototype['selector'] = undefined;
/**
 * The cron expression that the schedule applies.
 * @member {String} cron_pattern
 */

PipelineScheduleAllOf.prototype['cron_pattern'] = undefined;
/**
 * The timestamp when the schedule was created.
 * @member {Date} created_on
 */

PipelineScheduleAllOf.prototype['created_on'] = undefined;
/**
 * The timestamp when the schedule was updated.
 * @member {Date} updated_on
 */

PipelineScheduleAllOf.prototype['updated_on'] = undefined;
var _default = PipelineScheduleAllOf;
exports["default"] = _default;