"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepState = _interopRequireDefault(require("./PipelineStepState"));

var _PipelineStepStateInProgressAllOf = _interopRequireDefault(require("./PipelineStepStateInProgressAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateInProgress model module.
 * @module model/PipelineStepStateInProgress
 * @version 1.1.2
 */
var PipelineStepStateInProgress =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStateInProgress</code>.
   * @alias module:model/PipelineStepStateInProgress
   * @implements module:model/PipelineStepState
   * @implements module:model/PipelineStepStateInProgressAllOf
   * @param type {String} 
   */
  function PipelineStepStateInProgress(type) {
    _classCallCheck(this, PipelineStepStateInProgress);

    _PipelineStepState["default"].initialize(this, type);

    _PipelineStepStateInProgressAllOf["default"].initialize(this);

    PipelineStepStateInProgress.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateInProgress, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStateInProgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateInProgress} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateInProgress} The populated <code>PipelineStepStateInProgress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateInProgress();

        _PipelineStepState["default"].constructFromObject(data, obj);

        _PipelineStepStateInProgressAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStepStateInProgress;
}();
/**
 * @member {String} type
 */


PipelineStepStateInProgress.prototype['type'] = undefined;
/**
 * The name of pipeline step state (IN_PROGRESS).
 * @member {module:model/PipelineStepStateInProgress.NameEnum} name
 */

PipelineStepStateInProgress.prototype['name'] = undefined; // Implement PipelineStepState interface:

/**
 * @member {String} type
 */

_PipelineStepState["default"].prototype['type'] = undefined; // Implement PipelineStepStateInProgressAllOf interface:

/**
 * The name of pipeline step state (IN_PROGRESS).
 * @member {module:model/PipelineStepStateInProgressAllOf.NameEnum} name
 */

_PipelineStepStateInProgressAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateInProgress['NameEnum'] = {
  /**
   * value: "IN_PROGRESS"
   * @const
   */
  "IN_PROGRESS": "IN_PROGRESS"
};
var _default = PipelineStepStateInProgress;
exports["default"] = _default;