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
 * The ExportTransitGatewayRoutesResult model module.
 * @module model/ExportTransitGatewayRoutesResult
 * @version 1.1.0
 */
var ExportTransitGatewayRoutesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportTransitGatewayRoutesResult</code>.
   * @alias module:model/ExportTransitGatewayRoutesResult
   */
  function ExportTransitGatewayRoutesResult() {
    _classCallCheck(this, ExportTransitGatewayRoutesResult);

    ExportTransitGatewayRoutesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportTransitGatewayRoutesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportTransitGatewayRoutesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportTransitGatewayRoutesResult} obj Optional instance to populate.
     * @return {module:model/ExportTransitGatewayRoutesResult} The populated <code>ExportTransitGatewayRoutesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportTransitGatewayRoutesResult();

        if (data.hasOwnProperty('S3Location')) {
          obj['S3Location'] = _ApiClient["default"].convertToType(data['S3Location'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExportTransitGatewayRoutesResult;
}();
/**
 * @member {String} S3Location
 */


ExportTransitGatewayRoutesResult.prototype['S3Location'] = undefined;
var _default = ExportTransitGatewayRoutesResult;
exports["default"] = _default;