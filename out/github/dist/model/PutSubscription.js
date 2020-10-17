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
 * The PutSubscription model module.
 * @module model/PutSubscription
 * @version 1.4.5
 */
var PutSubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PutSubscription</code>.
   * @alias module:model/PutSubscription
   */
  function PutSubscription() {
    _classCallCheck(this, PutSubscription);

    PutSubscription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PutSubscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PutSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSubscription} obj Optional instance to populate.
     * @return {module:model/PutSubscription} The populated <code>PutSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PutSubscription();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('ignored')) {
          obj['ignored'] = _ApiClient["default"].convertToType(data['ignored'], 'Boolean');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], Object);
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'Boolean');
        }

        if (data.hasOwnProperty('thread_url')) {
          obj['thread_url'] = _ApiClient["default"].convertToType(data['thread_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PutSubscription;
}();
/**
 * @member {String} created_at
 */


PutSubscription.prototype['created_at'] = undefined;
/**
 * @member {Boolean} ignored
 */

PutSubscription.prototype['ignored'] = undefined;
/**
 * @member {Object} reason
 */

PutSubscription.prototype['reason'] = undefined;
/**
 * @member {Boolean} subscribed
 */

PutSubscription.prototype['subscribed'] = undefined;
/**
 * @member {String} thread_url
 */

PutSubscription.prototype['thread_url'] = undefined;
/**
 * @member {String} url
 */

PutSubscription.prototype['url'] = undefined;
var _default = PutSubscription;
exports["default"] = _default;