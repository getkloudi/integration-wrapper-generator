"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Host = _interopRequireDefault(require("./Host"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeHostsResult model module.
 * @module model/DescribeHostsResult
 * @version 1.1.0
 */
var DescribeHostsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeHostsResult</code>.
   * @alias module:model/DescribeHostsResult
   */
  function DescribeHostsResult() {
    _classCallCheck(this, DescribeHostsResult);

    DescribeHostsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeHostsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeHostsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeHostsResult} obj Optional instance to populate.
     * @return {module:model/DescribeHostsResult} The populated <code>DescribeHostsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeHostsResult();

        if (data.hasOwnProperty('Hosts')) {
          obj['Hosts'] = _ApiClient["default"].convertToType(data['Hosts'], [_Host["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeHostsResult;
}();
/**
 * @member {Array.<module:model/Host>} Hosts
 */


DescribeHostsResult.prototype['Hosts'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeHostsResult.prototype['NextToken'] = undefined;
var _default = DescribeHostsResult;
exports["default"] = _default;