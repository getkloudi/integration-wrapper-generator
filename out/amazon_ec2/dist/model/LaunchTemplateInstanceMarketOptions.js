"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LaunchTemplateSpotMarketOptions = _interopRequireDefault(require("./LaunchTemplateSpotMarketOptions"));

var _MarketType = _interopRequireDefault(require("./MarketType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateInstanceMarketOptions model module.
 * @module model/LaunchTemplateInstanceMarketOptions
 * @version 1.1.0
 */
var LaunchTemplateInstanceMarketOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateInstanceMarketOptions</code>.
   * The market (purchasing) option for the instances.
   * @alias module:model/LaunchTemplateInstanceMarketOptions
   */
  function LaunchTemplateInstanceMarketOptions() {
    _classCallCheck(this, LaunchTemplateInstanceMarketOptions);

    LaunchTemplateInstanceMarketOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateInstanceMarketOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateInstanceMarketOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateInstanceMarketOptions} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateInstanceMarketOptions} The populated <code>LaunchTemplateInstanceMarketOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateInstanceMarketOptions();

        if (data.hasOwnProperty('MarketType')) {
          obj['MarketType'] = _MarketType["default"].constructFromObject(data['MarketType']);
        }

        if (data.hasOwnProperty('SpotOptions')) {
          obj['SpotOptions'] = _LaunchTemplateSpotMarketOptions["default"].constructFromObject(data['SpotOptions']);
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateInstanceMarketOptions;
}();
/**
 * @member {module:model/MarketType} MarketType
 */


LaunchTemplateInstanceMarketOptions.prototype['MarketType'] = undefined;
/**
 * @member {module:model/LaunchTemplateSpotMarketOptions} SpotOptions
 */

LaunchTemplateInstanceMarketOptions.prototype['SpotOptions'] = undefined;
var _default = LaunchTemplateInstanceMarketOptions;
exports["default"] = _default;