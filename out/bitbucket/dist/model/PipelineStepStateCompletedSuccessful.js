"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepStateCompletedResult = _interopRequireDefault(require("./PipelineStepStateCompletedResult"));

var _PipelineStepStateCompletedSuccessfulAllOf = _interopRequireDefault(require("./PipelineStepStateCompletedSuccessfulAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateCompletedSuccessful model module.
 * @module model/PipelineStepStateCompletedSuccessful
 * @version 1.2.0
 */
var PipelineStepStateCompletedSuccessful = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineStepStateCompletedSuccessful</code>.
   * @alias module:model/PipelineStepStateCompletedSuccessful
   * @implements module:model/PipelineStepStateCompletedResult
   * @implements module:model/PipelineStepStateCompletedSuccessfulAllOf
   * @param type {String} 
   */
  function PipelineStepStateCompletedSuccessful(type) {
    _classCallCheck(this, PipelineStepStateCompletedSuccessful);

    _PipelineStepStateCompletedResult["default"].initialize(this, type);

    _PipelineStepStateCompletedSuccessfulAllOf["default"].initialize(this);

    PipelineStepStateCompletedSuccessful.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateCompletedSuccessful, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStateCompletedSuccessful</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedSuccessful} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedSuccessful} The populated <code>PipelineStepStateCompletedSuccessful</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateCompletedSuccessful();

        _PipelineStepStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStepStateCompletedSuccessfulAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStepStateCompletedSuccessful;
}();
/**
 * @member {String} type
 */


PipelineStepStateCompletedSuccessful.prototype['type'] = undefined;
/**
 * The name of the result (SUCCESSFUL)
 * @member {module:model/PipelineStepStateCompletedSuccessful.NameEnum} name
 */

PipelineStepStateCompletedSuccessful.prototype['name'] = undefined; // Implement PipelineStepStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStepStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStepStateCompletedSuccessfulAllOf interface:

/**
 * The name of the result (SUCCESSFUL)
 * @member {module:model/PipelineStepStateCompletedSuccessfulAllOf.NameEnum} name
 */

_PipelineStepStateCompletedSuccessfulAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateCompletedSuccessful['NameEnum'] = {
  /**
   * value: "SUCCESSFUL"
   * @const
   */
  "SUCCESSFUL": "SUCCESSFUL"
};
var _default = PipelineStepStateCompletedSuccessful;
exports["default"] = _default;