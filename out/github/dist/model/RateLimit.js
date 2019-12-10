"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RateLimitRate = _interopRequireDefault(require("./RateLimitRate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RateLimit model module.
 * @module model/RateLimit
 * @version 1.2.0
 */
var RateLimit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RateLimit</code>.
   * @alias module:model/RateLimit
   */
  function RateLimit() {
    _classCallCheck(this, RateLimit);

    RateLimit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RateLimit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RateLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimit} obj Optional instance to populate.
     * @return {module:model/RateLimit} The populated <code>RateLimit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RateLimit();

        if (data.hasOwnProperty('rate')) {
          obj['rate'] = _RateLimitRate["default"].constructFromObject(data['rate']);
        }
      }

      return obj;
    }
  }]);

  return RateLimit;
}();
/**
 * @member {module:model/RateLimitRate} rate
 */


RateLimit.prototype['rate'] = undefined;
var _default = RateLimit;
exports["default"] = _default;