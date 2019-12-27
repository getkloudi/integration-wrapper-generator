"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineScheduleAllOf = _interopRequireDefault(require("./PipelineScheduleAllOf"));

var _PipelineSelector = _interopRequireDefault(require("./PipelineSelector"));

var _PipelineTarget = _interopRequireDefault(require("./PipelineTarget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineSchedule model module.
 * @module model/PipelineSchedule
 * @version 1.1.2
 */
var PipelineSchedule =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineSchedule</code>.
   * @alias module:model/PipelineSchedule
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineScheduleAllOf
   * @param type {String} 
   */
  function PipelineSchedule(type) {
    _classCallCheck(this, PipelineSchedule);

    _ModelObject["default"].initialize(this, type);

    _PipelineScheduleAllOf["default"].initialize(this);

    PipelineSchedule.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineSchedule, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSchedule} obj Optional instance to populate.
     * @return {module:model/PipelineSchedule} The populated <code>PipelineSchedule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineSchedule();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineScheduleAllOf["default"].constructFromObject(data, obj);

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

  return PipelineSchedule;
}();
/**
 * The UUID identifying the schedule.
 * @member {String} uuid
 */


PipelineSchedule.prototype['uuid'] = undefined;
/**
 * Whether the schedule is enabled.
 * @member {Boolean} enabled
 */

PipelineSchedule.prototype['enabled'] = undefined;
/**
 * @member {module:model/PipelineTarget} target
 */

PipelineSchedule.prototype['target'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

PipelineSchedule.prototype['selector'] = undefined;
/**
 * The cron expression that the schedule applies.
 * @member {String} cron_pattern
 */

PipelineSchedule.prototype['cron_pattern'] = undefined;
/**
 * The timestamp when the schedule was created.
 * @member {Date} created_on
 */

PipelineSchedule.prototype['created_on'] = undefined;
/**
 * The timestamp when the schedule was updated.
 * @member {Date} updated_on
 */

PipelineSchedule.prototype['updated_on'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineScheduleAllOf interface:

/**
 * The UUID identifying the schedule.
 * @member {String} uuid
 */

_PipelineScheduleAllOf["default"].prototype['uuid'] = undefined;
/**
 * Whether the schedule is enabled.
 * @member {Boolean} enabled
 */

_PipelineScheduleAllOf["default"].prototype['enabled'] = undefined;
/**
 * @member {module:model/PipelineTarget} target
 */

_PipelineScheduleAllOf["default"].prototype['target'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

_PipelineScheduleAllOf["default"].prototype['selector'] = undefined;
/**
 * The cron expression that the schedule applies.
 * @member {String} cron_pattern
 */

_PipelineScheduleAllOf["default"].prototype['cron_pattern'] = undefined;
/**
 * The timestamp when the schedule was created.
 * @member {Date} created_on
 */

_PipelineScheduleAllOf["default"].prototype['created_on'] = undefined;
/**
 * The timestamp when the schedule was updated.
 * @member {Date} updated_on
 */

_PipelineScheduleAllOf["default"].prototype['updated_on'] = undefined;
var _default = PipelineSchedule;
exports["default"] = _default;