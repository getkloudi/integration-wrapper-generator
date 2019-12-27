"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStateCompletedFailedAllOf = _interopRequireDefault(require("./PipelineStateCompletedFailedAllOf"));

var _PipelineStateCompletedResult = _interopRequireDefault(require("./PipelineStateCompletedResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateCompletedFailed model module.
 * @module model/PipelineStateCompletedFailed
 * @version 1.1.0
 */
var PipelineStateCompletedFailed =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateCompletedFailed</code>.
   * @alias module:model/PipelineStateCompletedFailed
   * @implements module:model/PipelineStateCompletedResult
   * @implements module:model/PipelineStateCompletedFailedAllOf
   * @param type {String} 
   */
  function PipelineStateCompletedFailed(type) {
    _classCallCheck(this, PipelineStateCompletedFailed);

    _PipelineStateCompletedResult["default"].initialize(this, type);

    _PipelineStateCompletedFailedAllOf["default"].initialize(this);

    PipelineStateCompletedFailed.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateCompletedFailed, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateCompletedFailed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedFailed} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedFailed} The populated <code>PipelineStateCompletedFailed</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateCompletedFailed();

        _PipelineStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStateCompletedFailedAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStateCompletedFailed;
}();
/**
 * @member {String} type
 */


PipelineStateCompletedFailed.prototype['type'] = undefined;
/**
 * The name of the failed result (FAILED).
 * @member {module:model/PipelineStateCompletedFailed.NameEnum} name
 */

PipelineStateCompletedFailed.prototype['name'] = undefined; // Implement PipelineStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStateCompletedFailedAllOf interface:

/**
 * The name of the failed result (FAILED).
 * @member {module:model/PipelineStateCompletedFailedAllOf.NameEnum} name
 */

_PipelineStateCompletedFailedAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateCompletedFailed['NameEnum'] = {
  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED"
};
var _default = PipelineStateCompletedFailed;
exports["default"] = _default;