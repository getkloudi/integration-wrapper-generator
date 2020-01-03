"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrefixList = _interopRequireDefault(require("./PrefixList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribePrefixListsResult model module.
 * @module model/DescribePrefixListsResult
 * @version 1.0.0
 */
var DescribePrefixListsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribePrefixListsResult</code>.
   * @alias module:model/DescribePrefixListsResult
   */
  function DescribePrefixListsResult() {
    _classCallCheck(this, DescribePrefixListsResult);

    DescribePrefixListsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribePrefixListsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribePrefixListsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribePrefixListsResult} obj Optional instance to populate.
     * @return {module:model/DescribePrefixListsResult} The populated <code>DescribePrefixListsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribePrefixListsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('PrefixLists')) {
          obj['PrefixLists'] = _ApiClient["default"].convertToType(data['PrefixLists'], [_PrefixList["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribePrefixListsResult;
}();
/**
 * @member {String} NextToken
 */


DescribePrefixListsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/PrefixList>} PrefixLists
 */

DescribePrefixListsResult.prototype['PrefixLists'] = undefined;
var _default = DescribePrefixListsResult;
exports["default"] = _default;