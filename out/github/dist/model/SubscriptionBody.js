"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SubscriptionBody model module.
 * @module model/SubscriptionBody
 * @version 1.2.0
 */
var SubscriptionBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SubscriptionBody</code>.
   * @alias module:model/SubscriptionBody
   */
  function SubscriptionBody() {
    _classCallCheck(this, SubscriptionBody);

    SubscriptionBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubscriptionBody, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubscriptionBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionBody} obj Optional instance to populate.
     * @return {module:model/SubscriptionBody} The populated <code>SubscriptionBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubscriptionBody();

        if (data.hasOwnProperty('ignored')) {
          obj['ignored'] = _ApiClient["default"].convertToType(data['ignored'], 'Boolean');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SubscriptionBody;
}();
/**
 * @member {Boolean} ignored
 */


SubscriptionBody.prototype['ignored'] = undefined;
/**
 * @member {Boolean} subscribed
 */

SubscriptionBody.prototype['subscribed'] = undefined;
var _default = SubscriptionBody;
exports["default"] = _default;