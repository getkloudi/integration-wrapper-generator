"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ByoipCidr = _interopRequireDefault(require("./ByoipCidr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeByoipCidrsResult model module.
 * @module model/DescribeByoipCidrsResult
 * @version 1.0.0
 */
var DescribeByoipCidrsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeByoipCidrsResult</code>.
   * @alias module:model/DescribeByoipCidrsResult
   */
  function DescribeByoipCidrsResult() {
    _classCallCheck(this, DescribeByoipCidrsResult);

    DescribeByoipCidrsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeByoipCidrsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeByoipCidrsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeByoipCidrsResult} obj Optional instance to populate.
     * @return {module:model/DescribeByoipCidrsResult} The populated <code>DescribeByoipCidrsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeByoipCidrsResult();

        if (data.hasOwnProperty('ByoipCidrs')) {
          obj['ByoipCidrs'] = _ApiClient["default"].convertToType(data['ByoipCidrs'], [_ByoipCidr["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeByoipCidrsResult;
}();
/**
 * @member {Array.<module:model/ByoipCidr>} ByoipCidrs
 */


DescribeByoipCidrsResult.prototype['ByoipCidrs'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeByoipCidrsResult.prototype['NextToken'] = undefined;
var _default = DescribeByoipCidrsResult;
exports["default"] = _default;