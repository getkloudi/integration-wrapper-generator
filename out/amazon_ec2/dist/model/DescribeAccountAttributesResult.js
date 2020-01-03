"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountAttribute = _interopRequireDefault(require("./AccountAttribute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeAccountAttributesResult model module.
 * @module model/DescribeAccountAttributesResult
 * @version 1.0.0
 */
var DescribeAccountAttributesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeAccountAttributesResult</code>.
   * @alias module:model/DescribeAccountAttributesResult
   */
  function DescribeAccountAttributesResult() {
    _classCallCheck(this, DescribeAccountAttributesResult);

    DescribeAccountAttributesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeAccountAttributesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeAccountAttributesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeAccountAttributesResult} obj Optional instance to populate.
     * @return {module:model/DescribeAccountAttributesResult} The populated <code>DescribeAccountAttributesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeAccountAttributesResult();

        if (data.hasOwnProperty('AccountAttributes')) {
          obj['AccountAttributes'] = _ApiClient["default"].convertToType(data['AccountAttributes'], [_AccountAttribute["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeAccountAttributesResult;
}();
/**
 * @member {Array.<module:model/AccountAttribute>} AccountAttributes
 */


DescribeAccountAttributesResult.prototype['AccountAttributes'] = undefined;
var _default = DescribeAccountAttributesResult;
exports["default"] = _default;