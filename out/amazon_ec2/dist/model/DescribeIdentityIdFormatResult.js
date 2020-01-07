"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdFormat = _interopRequireDefault(require("./IdFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeIdentityIdFormatResult model module.
 * @module model/DescribeIdentityIdFormatResult
 * @version 1.1.0
 */
var DescribeIdentityIdFormatResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeIdentityIdFormatResult</code>.
   * @alias module:model/DescribeIdentityIdFormatResult
   */
  function DescribeIdentityIdFormatResult() {
    _classCallCheck(this, DescribeIdentityIdFormatResult);

    DescribeIdentityIdFormatResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeIdentityIdFormatResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeIdentityIdFormatResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeIdentityIdFormatResult} obj Optional instance to populate.
     * @return {module:model/DescribeIdentityIdFormatResult} The populated <code>DescribeIdentityIdFormatResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeIdentityIdFormatResult();

        if (data.hasOwnProperty('Statuses')) {
          obj['Statuses'] = _ApiClient["default"].convertToType(data['Statuses'], [_IdFormat["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeIdentityIdFormatResult;
}();
/**
 * @member {Array.<module:model/IdFormat>} Statuses
 */


DescribeIdentityIdFormatResult.prototype['Statuses'] = undefined;
var _default = DescribeIdentityIdFormatResult;
exports["default"] = _default;