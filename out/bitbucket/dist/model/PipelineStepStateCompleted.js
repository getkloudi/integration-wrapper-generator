"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepState = _interopRequireDefault(require("./PipelineStepState"));

var _PipelineStepStateCompletedAllOf = _interopRequireDefault(require("./PipelineStepStateCompletedAllOf"));

var _PipelineStepStateCompletedResult = _interopRequireDefault(require("./PipelineStepStateCompletedResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateCompleted model module.
 * @module model/PipelineStepStateCompleted
 * @version 1.0.0
 */
var PipelineStepStateCompleted =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStateCompleted</code>.
   * @alias module:model/PipelineStepStateCompleted
   * @implements module:model/PipelineStepState
   * @implements module:model/PipelineStepStateCompletedAllOf
   * @param type {String} 
   */
  function PipelineStepStateCompleted(type) {
    _classCallCheck(this, PipelineStepStateCompleted);

    _PipelineStepState["default"].initialize(this, type);

    _PipelineStepStateCompletedAllOf["default"].initialize(this);

    PipelineStepStateCompleted.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateCompleted, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStateCompleted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompleted} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompleted} The populated <code>PipelineStepStateCompleted</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateCompleted();

        _PipelineStepState["default"].constructFromObject(data, obj);

        _PipelineStepStateCompletedAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _PipelineStepStateCompletedResult["default"].constructFromObject(data['result']);
        }
      }

      return obj;
    }
  }]);

  return PipelineStepStateCompleted;
}();
/**
 * @member {String} type
 */


PipelineStepStateCompleted.prototype['type'] = undefined;
/**
 * The name of pipeline step state (COMPLETED).
 * @member {module:model/PipelineStepStateCompleted.NameEnum} name
 */

PipelineStepStateCompleted.prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStepStateCompletedResult} result
 */

PipelineStepStateCompleted.prototype['result'] = undefined; // Implement PipelineStepState interface:

/**
 * @member {String} type
 */

_PipelineStepState["default"].prototype['type'] = undefined; // Implement PipelineStepStateCompletedAllOf interface:

/**
 * The name of pipeline step state (COMPLETED).
 * @member {module:model/PipelineStepStateCompletedAllOf.NameEnum} name
 */

_PipelineStepStateCompletedAllOf["default"].prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStepStateCompletedResult} result
 */

_PipelineStepStateCompletedAllOf["default"].prototype['result'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateCompleted['NameEnum'] = {
  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED"
};
var _default = PipelineStepStateCompleted;
exports["default"] = _default;