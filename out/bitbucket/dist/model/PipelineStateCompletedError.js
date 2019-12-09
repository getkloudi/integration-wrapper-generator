"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineError = _interopRequireDefault(require("./PipelineError"));

var _PipelineStateCompletedErrorAllOf = _interopRequireDefault(require("./PipelineStateCompletedErrorAllOf"));

var _PipelineStateCompletedResult = _interopRequireDefault(require("./PipelineStateCompletedResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateCompletedError model module.
 * @module model/PipelineStateCompletedError
 * @version 1.0.0
 */
var PipelineStateCompletedError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateCompletedError</code>.
   * @alias module:model/PipelineStateCompletedError
   * @implements module:model/PipelineStateCompletedResult
   * @implements module:model/PipelineStateCompletedErrorAllOf
   * @param type {String} 
   */
  function PipelineStateCompletedError(type) {
    _classCallCheck(this, PipelineStateCompletedError);

    _PipelineStateCompletedResult["default"].initialize(this, type);

    _PipelineStateCompletedErrorAllOf["default"].initialize(this);

    PipelineStateCompletedError.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateCompletedError, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateCompletedError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedError} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedError} The populated <code>PipelineStateCompletedError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateCompletedError();

        _PipelineStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStateCompletedErrorAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _PipelineError["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStateCompletedError;
}();
/**
 * @member {String} type
 */


PipelineStateCompletedError.prototype['type'] = undefined;
/**
 * @member {module:model/PipelineError} error
 */

PipelineStateCompletedError.prototype['error'] = undefined;
/**
 * The name of the result (ERROR)
 * @member {module:model/PipelineStateCompletedError.NameEnum} name
 */

PipelineStateCompletedError.prototype['name'] = undefined; // Implement PipelineStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStateCompletedErrorAllOf interface:

/**
 * @member {module:model/PipelineError} error
 */

_PipelineStateCompletedErrorAllOf["default"].prototype['error'] = undefined;
/**
 * The name of the result (ERROR)
 * @member {module:model/PipelineStateCompletedErrorAllOf.NameEnum} name
 */

_PipelineStateCompletedErrorAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateCompletedError['NameEnum'] = {
  /**
   * value: "ERROR"
   * @const
   */
  "ERROR": "ERROR"
};
var _default = PipelineStateCompletedError;
exports["default"] = _default;