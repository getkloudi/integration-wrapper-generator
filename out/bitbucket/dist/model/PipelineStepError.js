"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineStepErrorAllOf = _interopRequireDefault(require("./PipelineStepErrorAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepError model module.
 * @module model/PipelineStepError
 * @version 1.0.0
 */
var PipelineStepError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepError</code>.
   * @alias module:model/PipelineStepError
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineStepErrorAllOf
   * @param type {String} 
   */
  function PipelineStepError(type) {
    _classCallCheck(this, PipelineStepError);

    _ModelObject["default"].initialize(this, type);

    _PipelineStepErrorAllOf["default"].initialize(this);

    PipelineStepError.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepError, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineStepError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepError} obj Optional instance to populate.
     * @return {module:model/PipelineStepError} The populated <code>PipelineStepError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepError();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineStepErrorAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStepError;
}();
/**
 * The error key.
 * @member {String} key
 */


PipelineStepError.prototype['key'] = undefined;
/**
 * The error message.
 * @member {String} message
 */

PipelineStepError.prototype['message'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineStepErrorAllOf interface:

/**
 * The error key.
 * @member {String} key
 */

_PipelineStepErrorAllOf["default"].prototype['key'] = undefined;
/**
 * The error message.
 * @member {String} message
 */

_PipelineStepErrorAllOf["default"].prototype['message'] = undefined;
var _default = PipelineStepError;
exports["default"] = _default;