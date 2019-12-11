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
 * The Hook model module.
 * @module model/Hook
 * @version 1.1.0
 */
var Hook =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Hook</code>.
   * Delete a hook
   * @alias module:model/Hook
   */
  function Hook() {
    _classCallCheck(this, Hook);

    Hook.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Hook, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Hook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Hook} obj Optional instance to populate.
     * @return {module:model/Hook} The populated <code>Hook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Hook();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('enable_ssl_verification')) {
          obj['enable_ssl_verification'] = _ApiClient["default"].convertToType(data['enable_ssl_verification'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('push_events')) {
          obj['push_events'] = _ApiClient["default"].convertToType(data['push_events'], 'String');
        }

        if (data.hasOwnProperty('tag_push_events')) {
          obj['tag_push_events'] = _ApiClient["default"].convertToType(data['tag_push_events'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Hook;
}();
/**
 * @member {String} created_at
 */


Hook.prototype['created_at'] = undefined;
/**
 * @member {String} enable_ssl_verification
 */

Hook.prototype['enable_ssl_verification'] = undefined;
/**
 * @member {String} id
 */

Hook.prototype['id'] = undefined;
/**
 * @member {String} push_events
 */

Hook.prototype['push_events'] = undefined;
/**
 * @member {String} tag_push_events
 */

Hook.prototype['tag_push_events'] = undefined;
/**
 * @member {String} url
 */

Hook.prototype['url'] = undefined;
var _default = Hook;
exports["default"] = _default;