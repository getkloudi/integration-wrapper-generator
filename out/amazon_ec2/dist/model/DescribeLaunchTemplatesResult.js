"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LaunchTemplate = _interopRequireDefault(require("./LaunchTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeLaunchTemplatesResult model module.
 * @module model/DescribeLaunchTemplatesResult
 * @version 1.1.0
 */
var DescribeLaunchTemplatesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeLaunchTemplatesResult</code>.
   * @alias module:model/DescribeLaunchTemplatesResult
   */
  function DescribeLaunchTemplatesResult() {
    _classCallCheck(this, DescribeLaunchTemplatesResult);

    DescribeLaunchTemplatesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeLaunchTemplatesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeLaunchTemplatesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeLaunchTemplatesResult} obj Optional instance to populate.
     * @return {module:model/DescribeLaunchTemplatesResult} The populated <code>DescribeLaunchTemplatesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeLaunchTemplatesResult();

        if (data.hasOwnProperty('LaunchTemplates')) {
          obj['LaunchTemplates'] = _ApiClient["default"].convertToType(data['LaunchTemplates'], [_LaunchTemplate["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeLaunchTemplatesResult;
}();
/**
 * @member {Array.<module:model/LaunchTemplate>} LaunchTemplates
 */


DescribeLaunchTemplatesResult.prototype['LaunchTemplates'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeLaunchTemplatesResult.prototype['NextToken'] = undefined;
var _default = DescribeLaunchTemplatesResult;
exports["default"] = _default;