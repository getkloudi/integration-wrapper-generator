"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeedsLinks = _interopRequireDefault(require("./FeedsLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Feeds model module.
 * @module model/Feeds
 * @version 1.4.4
 */
var Feeds = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Feeds</code>.
   * @alias module:model/Feeds
   */
  function Feeds() {
    _classCallCheck(this, Feeds);

    Feeds.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Feeds, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Feeds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Feeds} obj Optional instance to populate.
     * @return {module:model/Feeds} The populated <code>Feeds</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Feeds();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _FeedsLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('current_user_actor_url')) {
          obj['current_user_actor_url'] = _ApiClient["default"].convertToType(data['current_user_actor_url'], 'String');
        }

        if (data.hasOwnProperty('current_user_organization_url')) {
          obj['current_user_organization_url'] = _ApiClient["default"].convertToType(data['current_user_organization_url'], 'String');
        }

        if (data.hasOwnProperty('current_user_public')) {
          obj['current_user_public'] = _ApiClient["default"].convertToType(data['current_user_public'], 'String');
        }

        if (data.hasOwnProperty('current_user_url')) {
          obj['current_user_url'] = _ApiClient["default"].convertToType(data['current_user_url'], 'String');
        }

        if (data.hasOwnProperty('timeline_url')) {
          obj['timeline_url'] = _ApiClient["default"].convertToType(data['timeline_url'], 'String');
        }

        if (data.hasOwnProperty('user_url')) {
          obj['user_url'] = _ApiClient["default"].convertToType(data['user_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Feeds;
}();
/**
 * @member {module:model/FeedsLinks} _links
 */


Feeds.prototype['_links'] = undefined;
/**
 * @member {String} current_user_actor_url
 */

Feeds.prototype['current_user_actor_url'] = undefined;
/**
 * @member {String} current_user_organization_url
 */

Feeds.prototype['current_user_organization_url'] = undefined;
/**
 * @member {String} current_user_public
 */

Feeds.prototype['current_user_public'] = undefined;
/**
 * @member {String} current_user_url
 */

Feeds.prototype['current_user_url'] = undefined;
/**
 * @member {String} timeline_url
 */

Feeds.prototype['timeline_url'] = undefined;
/**
 * @member {String} user_url
 */

Feeds.prototype['user_url'] = undefined;
var _default = Feeds;
exports["default"] = _default;