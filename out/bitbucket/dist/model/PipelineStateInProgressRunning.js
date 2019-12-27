"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStateInProgressRunningAllOf = _interopRequireDefault(require("./PipelineStateInProgressRunningAllOf"));

var _PipelineStateInProgressStage = _interopRequireDefault(require("./PipelineStateInProgressStage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateInProgressRunning model module.
 * @module model/PipelineStateInProgressRunning
 * @version 1.1.2
 */
var PipelineStateInProgressRunning =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateInProgressRunning</code>.
   * @alias module:model/PipelineStateInProgressRunning
   * @implements module:model/PipelineStateInProgressStage
   * @implements module:model/PipelineStateInProgressRunningAllOf
   * @param type {String} 
   */
  function PipelineStateInProgressRunning(type) {
    _classCallCheck(this, PipelineStateInProgressRunning);

    _PipelineStateInProgressStage["default"].initialize(this, type);

    _PipelineStateInProgressRunningAllOf["default"].initialize(this);

    PipelineStateInProgressRunning.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateInProgressRunning, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateInProgressRunning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateInProgressRunning} obj Optional instance to populate.
     * @return {module:model/PipelineStateInProgressRunning} The populated <code>PipelineStateInProgressRunning</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateInProgressRunning();

        _PipelineStateInProgressStage["default"].constructFromObject(data, obj);

        _PipelineStateInProgressRunningAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStateInProgressRunning;
}();
/**
 * @member {String} type
 */


PipelineStateInProgressRunning.prototype['type'] = undefined;
/**
 * The name of the stage (RUNNING)
 * @member {module:model/PipelineStateInProgressRunning.NameEnum} name
 */

PipelineStateInProgressRunning.prototype['name'] = undefined; // Implement PipelineStateInProgressStage interface:

/**
 * @member {String} type
 */

_PipelineStateInProgressStage["default"].prototype['type'] = undefined; // Implement PipelineStateInProgressRunningAllOf interface:

/**
 * The name of the stage (RUNNING)
 * @member {module:model/PipelineStateInProgressRunningAllOf.NameEnum} name
 */

_PipelineStateInProgressRunningAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateInProgressRunning['NameEnum'] = {
  /**
   * value: "RUNNING"
   * @const
   */
  "RUNNING": "RUNNING"
};
var _default = PipelineStateInProgressRunning;
exports["default"] = _default;