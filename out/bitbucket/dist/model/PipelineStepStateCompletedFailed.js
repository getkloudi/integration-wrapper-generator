"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepStateCompletedFailedAllOf = _interopRequireDefault(require("./PipelineStepStateCompletedFailedAllOf"));

var _PipelineStepStateCompletedResult = _interopRequireDefault(require("./PipelineStepStateCompletedResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateCompletedFailed model module.
 * @module model/PipelineStepStateCompletedFailed
 * @version 1.2.0
 */
var PipelineStepStateCompletedFailed = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineStepStateCompletedFailed</code>.
   * @alias module:model/PipelineStepStateCompletedFailed
   * @implements module:model/PipelineStepStateCompletedResult
   * @implements module:model/PipelineStepStateCompletedFailedAllOf
   * @param type {String} 
   */
  function PipelineStepStateCompletedFailed(type) {
    _classCallCheck(this, PipelineStepStateCompletedFailed);

    _PipelineStepStateCompletedResult["default"].initialize(this, type);

    _PipelineStepStateCompletedFailedAllOf["default"].initialize(this);

    PipelineStepStateCompletedFailed.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateCompletedFailed, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStateCompletedFailed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedFailed} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedFailed} The populated <code>PipelineStepStateCompletedFailed</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateCompletedFailed();

        _PipelineStepStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStepStateCompletedFailedAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStepStateCompletedFailed;
}();
/**
 * @member {String} type
 */


PipelineStepStateCompletedFailed.prototype['type'] = undefined;
/**
 * The name of the result (FAILED)
 * @member {module:model/PipelineStepStateCompletedFailed.NameEnum} name
 */

PipelineStepStateCompletedFailed.prototype['name'] = undefined; // Implement PipelineStepStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStepStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStepStateCompletedFailedAllOf interface:

/**
 * The name of the result (FAILED)
 * @member {module:model/PipelineStepStateCompletedFailedAllOf.NameEnum} name
 */

_PipelineStepStateCompletedFailedAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateCompletedFailed['NameEnum'] = {
  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED"
};
var _default = PipelineStepStateCompletedFailed;
exports["default"] = _default;