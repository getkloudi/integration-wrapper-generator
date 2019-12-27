"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStepStateCompletedExpiredAllOf = _interopRequireDefault(require("./PipelineStepStateCompletedExpiredAllOf"));

var _PipelineStepStateCompletedResult = _interopRequireDefault(require("./PipelineStepStateCompletedResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStepStateCompletedExpired model module.
 * @module model/PipelineStepStateCompletedExpired
 * @version 1.1.2
 */
var PipelineStepStateCompletedExpired =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStepStateCompletedExpired</code>.
   * @alias module:model/PipelineStepStateCompletedExpired
   * @implements module:model/PipelineStepStateCompletedResult
   * @implements module:model/PipelineStepStateCompletedExpiredAllOf
   * @param type {String} 
   */
  function PipelineStepStateCompletedExpired(type) {
    _classCallCheck(this, PipelineStepStateCompletedExpired);

    _PipelineStepStateCompletedResult["default"].initialize(this, type);

    _PipelineStepStateCompletedExpiredAllOf["default"].initialize(this);

    PipelineStepStateCompletedExpired.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStepStateCompletedExpired, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStepStateCompletedExpired</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedExpired} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedExpired} The populated <code>PipelineStepStateCompletedExpired</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStepStateCompletedExpired();

        _PipelineStepStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStepStateCompletedExpiredAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStepStateCompletedExpired;
}();
/**
 * @member {String} type
 */


PipelineStepStateCompletedExpired.prototype['type'] = undefined;
/**
 * The name of the result (EXPIRED)
 * @member {module:model/PipelineStepStateCompletedExpired.NameEnum} name
 */

PipelineStepStateCompletedExpired.prototype['name'] = undefined; // Implement PipelineStepStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStepStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStepStateCompletedExpiredAllOf interface:

/**
 * The name of the result (EXPIRED)
 * @member {module:model/PipelineStepStateCompletedExpiredAllOf.NameEnum} name
 */

_PipelineStepStateCompletedExpiredAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStepStateCompletedExpired['NameEnum'] = {
  /**
   * value: "EXPIRED"
   * @const
   */
  "EXPIRED": "EXPIRED"
};
var _default = PipelineStepStateCompletedExpired;
exports["default"] = _default;