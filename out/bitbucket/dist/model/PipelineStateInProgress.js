"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineState = _interopRequireDefault(require("./PipelineState"));

var _PipelineStateInProgressAllOf = _interopRequireDefault(require("./PipelineStateInProgressAllOf"));

var _PipelineStateInProgressStage = _interopRequireDefault(require("./PipelineStateInProgressStage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateInProgress model module.
 * @module model/PipelineStateInProgress
 * @version 1.1.0
 */
var PipelineStateInProgress =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateInProgress</code>.
   * @alias module:model/PipelineStateInProgress
   * @implements module:model/PipelineState
   * @implements module:model/PipelineStateInProgressAllOf
   * @param type {String} 
   */
  function PipelineStateInProgress(type) {
    _classCallCheck(this, PipelineStateInProgress);

    _PipelineState["default"].initialize(this, type);

    _PipelineStateInProgressAllOf["default"].initialize(this);

    PipelineStateInProgress.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateInProgress, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateInProgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateInProgress} obj Optional instance to populate.
     * @return {module:model/PipelineStateInProgress} The populated <code>PipelineStateInProgress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateInProgress();

        _PipelineState["default"].constructFromObject(data, obj);

        _PipelineStateInProgressAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _PipelineStateInProgressStage["default"].constructFromObject(data['stage']);
        }
      }

      return obj;
    }
  }]);

  return PipelineStateInProgress;
}();
/**
 * @member {String} type
 */


PipelineStateInProgress.prototype['type'] = undefined;
/**
 * The name of pipeline state (IN_PROGRESS).
 * @member {module:model/PipelineStateInProgress.NameEnum} name
 */

PipelineStateInProgress.prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStateInProgressStage} stage
 */

PipelineStateInProgress.prototype['stage'] = undefined; // Implement PipelineState interface:

/**
 * @member {String} type
 */

_PipelineState["default"].prototype['type'] = undefined; // Implement PipelineStateInProgressAllOf interface:

/**
 * The name of pipeline state (IN_PROGRESS).
 * @member {module:model/PipelineStateInProgressAllOf.NameEnum} name
 */

_PipelineStateInProgressAllOf["default"].prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStateInProgressStage} stage
 */

_PipelineStateInProgressAllOf["default"].prototype['stage'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateInProgress['NameEnum'] = {
  /**
   * value: "IN_PROGRESS"
   * @const
   */
  "IN_PROGRESS": "IN_PROGRESS"
};
var _default = PipelineStateInProgress;
exports["default"] = _default;