"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CancelConversionRequest model module.
 * @module model/CancelConversionRequest
 * @version 1.1.0
 */
var CancelConversionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelConversionRequest</code>.
   * @alias module:model/CancelConversionRequest
   * @param conversionTaskId {String} 
   */
  function CancelConversionRequest(conversionTaskId) {
    _classCallCheck(this, CancelConversionRequest);

    CancelConversionRequest.initialize(this, conversionTaskId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelConversionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, conversionTaskId) {
      obj['ConversionTaskId'] = conversionTaskId;
    }
    /**
     * Constructs a <code>CancelConversionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelConversionRequest} obj Optional instance to populate.
     * @return {module:model/CancelConversionRequest} The populated <code>CancelConversionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelConversionRequest();

        if (data.hasOwnProperty('ConversionTaskId')) {
          obj['ConversionTaskId'] = _ApiClient["default"].convertToType(data['ConversionTaskId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ReasonMessage')) {
          obj['ReasonMessage'] = _ApiClient["default"].convertToType(data['ReasonMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CancelConversionRequest;
}();
/**
 * @member {String} ConversionTaskId
 */


CancelConversionRequest.prototype['ConversionTaskId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CancelConversionRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ReasonMessage
 */

CancelConversionRequest.prototype['ReasonMessage'] = undefined;
var _default = CancelConversionRequest;
exports["default"] = _default;