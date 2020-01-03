"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LaunchTemplateSpotMarketOptionsRequest = _interopRequireDefault(require("./LaunchTemplateSpotMarketOptionsRequest"));

var _MarketType = _interopRequireDefault(require("./MarketType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateInstanceMarketOptionsRequest model module.
 * @module model/LaunchTemplateInstanceMarketOptionsRequest
 * @version 1.0.0
 */
var LaunchTemplateInstanceMarketOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateInstanceMarketOptionsRequest</code>.
   * The market (purchasing) option for the instances.
   * @alias module:model/LaunchTemplateInstanceMarketOptionsRequest
   */
  function LaunchTemplateInstanceMarketOptionsRequest() {
    _classCallCheck(this, LaunchTemplateInstanceMarketOptionsRequest);

    LaunchTemplateInstanceMarketOptionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateInstanceMarketOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateInstanceMarketOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateInstanceMarketOptionsRequest} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateInstanceMarketOptionsRequest} The populated <code>LaunchTemplateInstanceMarketOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateInstanceMarketOptionsRequest();

        if (data.hasOwnProperty('MarketType')) {
          obj['MarketType'] = _MarketType["default"].constructFromObject(data['MarketType']);
        }

        if (data.hasOwnProperty('SpotOptions')) {
          obj['SpotOptions'] = _LaunchTemplateSpotMarketOptionsRequest["default"].constructFromObject(data['SpotOptions']);
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateInstanceMarketOptionsRequest;
}();
/**
 * @member {module:model/MarketType} MarketType
 */


LaunchTemplateInstanceMarketOptionsRequest.prototype['MarketType'] = undefined;
/**
 * @member {module:model/LaunchTemplateSpotMarketOptionsRequest} SpotOptions
 */

LaunchTemplateInstanceMarketOptionsRequest.prototype['SpotOptions'] = undefined;
var _default = LaunchTemplateInstanceMarketOptionsRequest;
exports["default"] = _default;