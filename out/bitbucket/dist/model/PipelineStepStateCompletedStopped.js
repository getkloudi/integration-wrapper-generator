"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepStateCompletedResult = _interopRequireDefault(require("./PipelineStepStateCompletedResult"));

var _PipelineStepStateCompletedStoppedAllOf = _interopRequireDefault(require("./PipelineStepStateCompletedStoppedAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateCompletedStopped model module.
 * @module model/PipelineStepStateCompletedStopped
 * @version 1.1.2
 */
var PipelineStepStateCompletedStopped =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStateCompletedStopped</code>.
   * @alias module:model/PipelineStepStateCompletedStopped
   * @implements module:model/PipelineStepStateCompletedResult
   * @implements module:model/PipelineStepStateCompletedStoppedAllOf
   * @param type {String} 
   */
  function PipelineStepStateCompletedStopped(type) {
    _classCallCheck(this, PipelineStepStateCompletedStopped);

    _PipelineStepStateCompletedResult["default"].initialize(this, type);

    _PipelineStepStateCompletedStoppedAllOf["default"].initialize(this);

    PipelineStepStateCompletedStopped.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateCompletedStopped, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStateCompletedStopped</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedStopped} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedStopped} The populated <code>PipelineStepStateCompletedStopped</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateCompletedStopped();

        _PipelineStepStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStepStateCompletedStoppedAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStepStateCompletedStopped;
}();
/**
 * @member {String} type
 */


PipelineStepStateCompletedStopped.prototype['type'] = undefined;
/**
 * The name of the result (STOPPED)
 * @member {module:model/PipelineStepStateCompletedStopped.NameEnum} name
 */

PipelineStepStateCompletedStopped.prototype['name'] = undefined; // Implement PipelineStepStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStepStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStepStateCompletedStoppedAllOf interface:

/**
 * The name of the result (STOPPED)
 * @member {module:model/PipelineStepStateCompletedStoppedAllOf.NameEnum} name
 */

_PipelineStepStateCompletedStoppedAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateCompletedStopped['NameEnum'] = {
  /**
   * value: "STOPPED"
   * @const
   */
  "STOPPED": "STOPPED"
};
var _default = PipelineStepStateCompletedStopped;
exports["default"] = _default;