"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnRoute = _interopRequireDefault(require("./ClientVpnRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeClientVpnRoutesResult model module.
 * @module model/DescribeClientVpnRoutesResult
 * @version 1.1.0
 */
var DescribeClientVpnRoutesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeClientVpnRoutesResult</code>.
   * @alias module:model/DescribeClientVpnRoutesResult
   */
  function DescribeClientVpnRoutesResult() {
    _classCallCheck(this, DescribeClientVpnRoutesResult);

    DescribeClientVpnRoutesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeClientVpnRoutesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeClientVpnRoutesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeClientVpnRoutesResult} obj Optional instance to populate.
     * @return {module:model/DescribeClientVpnRoutesResult} The populated <code>DescribeClientVpnRoutesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeClientVpnRoutesResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('Routes')) {
          obj['Routes'] = _ApiClient["default"].convertToType(data['Routes'], [_ClientVpnRoute["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeClientVpnRoutesResult;
}();
/**
 * @member {String} NextToken
 */


DescribeClientVpnRoutesResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/ClientVpnRoute>} Routes
 */

DescribeClientVpnRoutesResult.prototype['Routes'] = undefined;
var _default = DescribeClientVpnRoutesResult;
exports["default"] = _default;