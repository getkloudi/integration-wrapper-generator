"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Actor = _interopRequireDefault(require("./Actor"));

var _ActorPlan = _interopRequireDefault(require("./ActorPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Organization model module.
 * @module model/Organization
 * @version 1.4.6
 */
var Organization = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Organization</code>.
   * @alias module:model/Organization
   * @extends module:model/Actor
   * @implements module:model/Actor
   */
  function Organization() {
    _classCallCheck(this, Organization);

    _Actor["default"].initialize(this);

    Organization.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Organization, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Organization} obj Optional instance to populate.
     * @return {module:model/Organization} The populated <code>Organization</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Organization();

        _Actor["default"].constructFromObject(data, obj);

        _Actor["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return Organization;
}(); // Implement Actor interface:

/**
 * @member {String} avatar_url
 */


_Actor["default"].prototype['avatar_url'] = undefined;
/**
 * @member {String} bio
 */

_Actor["default"].prototype['bio'] = undefined;
/**
 * The website URL from the profile page
 * @member {String} blog
 */

_Actor["default"].prototype['blog'] = undefined;
/**
 * @member {Number} collaborators
 */

_Actor["default"].prototype['collaborators'] = undefined;
/**
 * @member {String} company
 */

_Actor["default"].prototype['company'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

_Actor["default"].prototype['created_at'] = undefined;
/**
 * @member {Number} disk_usage
 */

_Actor["default"].prototype['disk_usage'] = undefined;
/**
 * Note: The returned email is the user’s publicly visible email address (or null if the user has not specified a public email address in their profile).
 * @member {String} email
 */

_Actor["default"].prototype['email'] = undefined;
/**
 * @member {Number} followers
 */

_Actor["default"].prototype['followers'] = undefined;
/**
 * @member {String} followers_url
 */

_Actor["default"].prototype['followers_url'] = undefined;
/**
 * @member {Number} following
 */

_Actor["default"].prototype['following'] = undefined;
/**
 * @member {String} following_url
 */

_Actor["default"].prototype['following_url'] = undefined;
/**
 * @member {String} gists_url
 */

_Actor["default"].prototype['gists_url'] = undefined;
/**
 * @member {String} gravatar_id
 */

_Actor["default"].prototype['gravatar_id'] = undefined;
/**
 * @member {Boolean} hireable
 */

_Actor["default"].prototype['hireable'] = undefined;
/**
 * @member {String} html_url
 */

_Actor["default"].prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

_Actor["default"].prototype['id'] = undefined;
/**
 * @member {String} location
 */

_Actor["default"].prototype['location'] = undefined;
/**
 * The account username
 * @member {String} login
 */

_Actor["default"].prototype['login'] = undefined;
/**
 * The full account name
 * @member {String} name
 */

_Actor["default"].prototype['name'] = undefined;
/**
 * @member {String} organizations_url
 */

_Actor["default"].prototype['organizations_url'] = undefined;
/**
 * @member {Number} owned_private_repos
 */

_Actor["default"].prototype['owned_private_repos'] = undefined;
/**
 * @member {module:model/ActorPlan} plan
 */

_Actor["default"].prototype['plan'] = undefined;
/**
 * @member {Number} private_gists
 */

_Actor["default"].prototype['private_gists'] = undefined;
/**
 * @member {Number} public_gists
 */

_Actor["default"].prototype['public_gists'] = undefined;
/**
 * @member {Number} public_repos
 */

_Actor["default"].prototype['public_repos'] = undefined;
/**
 * @member {String} starred_url
 */

_Actor["default"].prototype['starred_url'] = undefined;
/**
 * @member {String} subscriptions_url
 */

_Actor["default"].prototype['subscriptions_url'] = undefined;
/**
 * @member {Number} total_private_repos
 */

_Actor["default"].prototype['total_private_repos'] = undefined;
/**
 * @member {module:model/Actor.TypeEnum} type
 */

_Actor["default"].prototype['type'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */

_Actor["default"].prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

_Actor["default"].prototype['url'] = undefined;
var _default = Organization;
exports["default"] = _default;