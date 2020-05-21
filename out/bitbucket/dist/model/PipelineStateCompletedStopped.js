"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStateCompletedResult = _interopRequireDefault(require("./PipelineStateCompletedResult"));

var _PipelineStateCompletedStoppedAllOf = _interopRequireDefault(require("./PipelineStateCompletedStoppedAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateCompletedStopped model module.
 * @module model/PipelineStateCompletedStopped
 * @version 1.2.0
 */
var PipelineStateCompletedStopped = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineStateCompletedStopped</code>.
   * @alias module:model/PipelineStateCompletedStopped
   * @implements module:model/PipelineStateCompletedResult
   * @implements module:model/PipelineStateCompletedStoppedAllOf
   * @param type {String} 
   */
  function PipelineStateCompletedStopped(type) {
    _classCallCheck(this, PipelineStateCompletedStopped);

    _PipelineStateCompletedResult["default"].initialize(this, type);

    _PipelineStateCompletedStoppedAllOf["default"].initialize(this);

    PipelineStateCompletedStopped.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateCompletedStopped, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateCompletedStopped</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedStopped} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedStopped} The populated <code>PipelineStateCompletedStopped</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateCompletedStopped();

        _PipelineStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStateCompletedStoppedAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStateCompletedStopped;
}();
/**
 * @member {String} type
 */


PipelineStateCompletedStopped.prototype['type'] = undefined;
/**
 * The name of the stopped result (STOPPED).
 * @member {module:model/PipelineStateCompletedStopped.NameEnum} name
 */

PipelineStateCompletedStopped.prototype['name'] = undefined; // Implement PipelineStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStateCompletedStoppedAllOf interface:

/**
 * The name of the stopped result (STOPPED).
 * @member {module:model/PipelineStateCompletedStoppedAllOf.NameEnum} name
 */

_PipelineStateCompletedStoppedAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateCompletedStopped['NameEnum'] = {
  /**
   * value: "STOPPED"
   * @const
   */
  "STOPPED": "STOPPED"
};
var _default = PipelineStateCompletedStopped;
exports["default"] = _default;