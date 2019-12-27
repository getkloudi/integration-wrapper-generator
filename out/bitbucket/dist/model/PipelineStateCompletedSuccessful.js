"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStateCompletedResult = _interopRequireDefault(require("./PipelineStateCompletedResult"));

var _PipelineStateCompletedSuccessfulAllOf = _interopRequireDefault(require("./PipelineStateCompletedSuccessfulAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateCompletedSuccessful model module.
 * @module model/PipelineStateCompletedSuccessful
 * @version 1.1.0
 */
var PipelineStateCompletedSuccessful =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateCompletedSuccessful</code>.
   * @alias module:model/PipelineStateCompletedSuccessful
   * @implements module:model/PipelineStateCompletedResult
   * @implements module:model/PipelineStateCompletedSuccessfulAllOf
   * @param type {String} 
   */
  function PipelineStateCompletedSuccessful(type) {
    _classCallCheck(this, PipelineStateCompletedSuccessful);

    _PipelineStateCompletedResult["default"].initialize(this, type);

    _PipelineStateCompletedSuccessfulAllOf["default"].initialize(this);

    PipelineStateCompletedSuccessful.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateCompletedSuccessful, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateCompletedSuccessful</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedSuccessful} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedSuccessful} The populated <code>PipelineStateCompletedSuccessful</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateCompletedSuccessful();

        _PipelineStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStateCompletedSuccessfulAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStateCompletedSuccessful;
}();
/**
 * @member {String} type
 */


PipelineStateCompletedSuccessful.prototype['type'] = undefined;
/**
 * The name of the successful result (SUCCESSFUL).
 * @member {module:model/PipelineStateCompletedSuccessful.NameEnum} name
 */

PipelineStateCompletedSuccessful.prototype['name'] = undefined; // Implement PipelineStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStateCompletedSuccessfulAllOf interface:

/**
 * The name of the successful result (SUCCESSFUL).
 * @member {module:model/PipelineStateCompletedSuccessfulAllOf.NameEnum} name
 */

_PipelineStateCompletedSuccessfulAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateCompletedSuccessful['NameEnum'] = {
  /**
   * value: "SUCCESSFUL"
   * @const
   */
  "SUCCESSFUL": "SUCCESSFUL"
};
var _default = PipelineStateCompletedSuccessful;
exports["default"] = _default;