"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineStateCompletedExpiredAllOf = _interopRequireDefault(require("./PipelineStateCompletedExpiredAllOf"));

var _PipelineStateCompletedResult = _interopRequireDefault(require("./PipelineStateCompletedResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineStateCompletedExpired model module.
 * @module model/PipelineStateCompletedExpired
 * @version 1.1.2
 */
var PipelineStateCompletedExpired =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateCompletedExpired</code>.
   * @alias module:model/PipelineStateCompletedExpired
   * @implements module:model/PipelineStateCompletedResult
   * @implements module:model/PipelineStateCompletedExpiredAllOf
   * @param type {String} 
   */
  function PipelineStateCompletedExpired(type) {
    _classCallCheck(this, PipelineStateCompletedExpired);

    _PipelineStateCompletedResult["default"].initialize(this, type);

    _PipelineStateCompletedExpiredAllOf["default"].initialize(this);

    PipelineStateCompletedExpired.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateCompletedExpired, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineStateCompletedExpired</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedExpired} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedExpired} The populated <code>PipelineStateCompletedExpired</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateCompletedExpired();

        _PipelineStateCompletedResult["default"].constructFromObject(data, obj);

        _PipelineStateCompletedExpiredAllOf["default"].constructFromObject(data, obj);

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

  return PipelineStateCompletedExpired;
}();
/**
 * @member {String} type
 */


PipelineStateCompletedExpired.prototype['type'] = undefined;
/**
 * The name of the stopped result (EXPIRED).
 * @member {module:model/PipelineStateCompletedExpired.NameEnum} name
 */

PipelineStateCompletedExpired.prototype['name'] = undefined; // Implement PipelineStateCompletedResult interface:

/**
 * @member {String} type
 */

_PipelineStateCompletedResult["default"].prototype['type'] = undefined; // Implement PipelineStateCompletedExpiredAllOf interface:

/**
 * The name of the stopped result (EXPIRED).
 * @member {module:model/PipelineStateCompletedExpiredAllOf.NameEnum} name
 */

_PipelineStateCompletedExpiredAllOf["default"].prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateCompletedExpired['NameEnum'] = {
  /**
   * value: "EXPIRED"
   * @const
   */
  "EXPIRED": "EXPIRED"
};
var _default = PipelineStateCompletedExpired;
exports["default"] = _default;