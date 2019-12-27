"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStateInProgressPausedAllOf = _interopRequireDefault(require("./PipelineStateInProgressPausedAllOf"));

var _PipelineStateInProgressStage = _interopRequireDefault(require("./PipelineStateInProgressStage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateInProgressPaused model module.
 * @module model/PipelineStateInProgressPaused
 * @version 1.1.2
 */
var PipelineStateInProgressPaused =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateInProgressPaused</code>.
   * @alias module:model/PipelineStateInProgressPaused
   * @implements module:model/PipelineStateInProgressStage
   * @implements module:model/PipelineStateInProgressPausedAllOf
   * @param type {String} 
   */
  function PipelineStateInProgressPaused(type) {
    _classCallCheck(this, PipelineStateInProgressPaused);

    _PipelineStateInProgressStage["default"].initialize(this, type);

    _PipelineStateInProgressPausedAllOf["default"].initialize(this);

    PipelineStateInProgressPaused.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateInProgressPaused, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateInProgressPaused</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateInProgressPaused} obj Optional instance to populate.
     * @return {module:model/PipelineStateInProgressPaused} The populated <code>PipelineStateInProgressPaused</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateInProgressPaused();

        _PipelineStateInProgressStage["default"].constructFromObject(data, obj);

        _PipelineStateInProgressPausedAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStateInProgressPaused;
}();
/**
 * @member {String} type
 */


PipelineStateInProgressPaused.prototype['type'] = undefined;
/**
 * The name of the stage (PAUSED)
 * @member {module:model/PipelineStateInProgressPaused.NameEnum} name
 */

PipelineStateInProgressPaused.prototype['name'] = undefined; // Implement PipelineStateInProgressStage interface:

/**
 * @member {String} type
 */

_PipelineStateInProgressStage["default"].prototype['type'] = undefined; // Implement PipelineStateInProgressPausedAllOf interface:

/**
 * The name of the stage (PAUSED)
 * @member {module:model/PipelineStateInProgressPausedAllOf.NameEnum} name
 */

_PipelineStateInProgressPausedAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateInProgressPaused['NameEnum'] = {
  /**
   * value: "PAUSED"
   * @const
   */
  "PAUSED": "PAUSED"
};
var _default = PipelineStateInProgressPaused;
exports["default"] = _default;