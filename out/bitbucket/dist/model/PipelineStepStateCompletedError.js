"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepError = _interopRequireDefault(require("./PipelineStepError"));

var _PipelineStepStateCompletedErrorAllOf = _interopRequireDefault(require("./PipelineStepStateCompletedErrorAllOf"));

var _PipelineStepStateCompletedResult = _interopRequireDefault(require("./PipelineStepStateCompletedResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateCompletedError model module.
 * @module model/PipelineStepStateCompletedError
 * @version 1.1.0
 */
var PipelineStepStateCompletedError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStateCompletedError</code>.
   * @alias module:model/PipelineStepStateCompletedError
   * @implements module:model/PipelineStepStateCompletedResult
   * @implements module:model/PipelineStepStateCompletedErrorAllOf
   * @param type {String} 
   */
  function PipelineStepStateCompletedError(type) {
    _classCallCheck(this, PipelineStepStateCompletedError);

    _PipelineStepStateCompletedResult["default"].initialize(this, type);

    _PipelineStepStateCompletedErrorAllOf["default"].initialize(this);

    PipelineStepStateCompletedError.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateCompletedError, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStateCompletedError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedError} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedError} The populated <code>PipelineStepStateCompletedError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateCompletedError();

        _PipelineStepStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStepStateCompletedErrorAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _PipelineStepError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return PipelineStepStateCompletedError;
}();
/**
 * @member {String} type
 */


PipelineStepStateCompletedError.prototype['type'] = undefined;
/**
 * The name of the result (ERROR)
 * @member {module:model/PipelineStepStateCompletedError.NameEnum} name
 */

PipelineStepStateCompletedError.prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStepError} error
 */

PipelineStepStateCompletedError.prototype['error'] = undefined; // Implement PipelineStepStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStepStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStepStateCompletedErrorAllOf interface:

/**
 * The name of the result (ERROR)
 * @member {module:model/PipelineStepStateCompletedErrorAllOf.NameEnum} name
 */

_PipelineStepStateCompletedErrorAllOf["default"].prototype['name'] = undefined;
/**
 * @member {module:model/PipelineStepError} error
 */

_PipelineStepStateCompletedErrorAllOf["default"].prototype['error'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateCompletedError['NameEnum'] = {
  /**
   * value: "ERROR"
   * @const
   */
  "ERROR": "ERROR"
};
var _default = PipelineStepStateCompletedError;
exports["default"] = _default;