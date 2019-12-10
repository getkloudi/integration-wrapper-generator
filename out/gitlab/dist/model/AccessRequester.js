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
 * The AccessRequester model module.
 * @module model/AccessRequester
 * @version 1.0.0
 */
var AccessRequester =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AccessRequester</code>.
   * This feature was introduced in GitLab 8.11.
   * @alias module:model/AccessRequester
   */
  function AccessRequester() {
    _classCallCheck(this, AccessRequester);

    AccessRequester.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccessRequester, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccessRequester</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessRequester} obj Optional instance to populate.
     * @return {module:model/AccessRequester} The populated <code>AccessRequester</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccessRequester();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('requested_at')) {
          obj['requested_at'] = _ApiClient["default"].convertToType(data['requested_at'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AccessRequester;
}();
/**
 * @member {String} avatar_url
 */


AccessRequester.prototype['avatar_url'] = undefined;
/**
 * @member {String} id
 */

AccessRequester.prototype['id'] = undefined;
/**
 * @member {String} name
 */

AccessRequester.prototype['name'] = undefined;
/**
 * @member {String} requested_at
 */

AccessRequester.prototype['requested_at'] = undefined;
/**
 * @member {String} state
 */

AccessRequester.prototype['state'] = undefined;
/**
 * @member {String} username
 */

AccessRequester.prototype['username'] = undefined;
/**
 * @member {String} web_url
 */

AccessRequester.prototype['web_url'] = undefined;
var _default = AccessRequester;
exports["default"] = _default;