"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActorPlan = _interopRequireDefault(require("./ActorPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Actor model module.
 * @module model/Actor
 * @version 1.3.3
 */
var Actor =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Actor</code>.
   * A user or organization
   * @alias module:model/Actor
   */
  function Actor() {
    _classCallCheck(this, Actor);

    Actor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Actor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Actor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Actor} obj Optional instance to populate.
     * @return {module:model/Actor} The populated <code>Actor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Actor();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('blog')) {
          obj['blog'] = _ApiClient["default"].convertToType(data['blog'], 'String');
        }

        if (data.hasOwnProperty('collaborators')) {
          obj['collaborators'] = _ApiClient["default"].convertToType(data['collaborators'], 'Number');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('disk_usage')) {
          obj['disk_usage'] = _ApiClient["default"].convertToType(data['disk_usage'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('followers')) {
          obj['followers'] = _ApiClient["default"].convertToType(data['followers'], 'Number');
        }

        if (data.hasOwnProperty('followers_url')) {
          obj['followers_url'] = _ApiClient["default"].convertToType(data['followers_url'], 'String');
        }

        if (data.hasOwnProperty('following')) {
          obj['following'] = _ApiClient["default"].convertToType(data['following'], 'Number');
        }

        if (data.hasOwnProperty('following_url')) {
          obj['following_url'] = _ApiClient["default"].convertToType(data['following_url'], 'String');
        }

        if (data.hasOwnProperty('gists_url')) {
          obj['gists_url'] = _ApiClient["default"].convertToType(data['gists_url'], 'String');
        }

        if (data.hasOwnProperty('gravatar_id')) {
          obj['gravatar_id'] = _ApiClient["default"].convertToType(data['gravatar_id'], 'String');
        }

        if (data.hasOwnProperty('hireable')) {
          obj['hireable'] = _ApiClient["default"].convertToType(data['hireable'], 'Boolean');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('organizations_url')) {
          obj['organizations_url'] = _ApiClient["default"].convertToType(data['organizations_url'], 'String');
        }

        if (data.hasOwnProperty('owned_private_repos')) {
          obj['owned_private_repos'] = _ApiClient["default"].convertToType(data['owned_private_repos'], 'Number');
        }

        if (data.hasOwnProperty('plan')) {
          obj['plan'] = _ActorPlan["default"].constructFromObject(data['plan']);
        }

        if (data.hasOwnProperty('private_gists')) {
          obj['private_gists'] = _ApiClient["default"].convertToType(data['private_gists'], 'Number');
        }

        if (data.hasOwnProperty('public_gists')) {
          obj['public_gists'] = _ApiClient["default"].convertToType(data['public_gists'], 'Number');
        }

        if (data.hasOwnProperty('public_repos')) {
          obj['public_repos'] = _ApiClient["default"].convertToType(data['public_repos'], 'Number');
        }

        if (data.hasOwnProperty('starred_url')) {
          obj['starred_url'] = _ApiClient["default"].convertToType(data['starred_url'], 'String');
        }

        if (data.hasOwnProperty('subscriptions_url')) {
          obj['subscriptions_url'] = _ApiClient["default"].convertToType(data['subscriptions_url'], 'String');
        }

        if (data.hasOwnProperty('total_private_repos')) {
          obj['total_private_repos'] = _ApiClient["default"].convertToType(data['total_private_repos'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Actor;
}();
/**
 * @member {String} avatar_url
 */


Actor.prototype['avatar_url'] = undefined;
/**
 * @member {String} bio
 */

Actor.prototype['bio'] = undefined;
/**
 * The website URL from the profile page
 * @member {String} blog
 */

Actor.prototype['blog'] = undefined;
/**
 * @member {Number} collaborators
 */

Actor.prototype['collaborators'] = undefined;
/**
 * @member {String} company
 */

Actor.prototype['company'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

Actor.prototype['created_at'] = undefined;
/**
 * @member {Number} disk_usage
 */

Actor.prototype['disk_usage'] = undefined;
/**
 * Note: The returned email is the user’s publicly visible email address (or null if the user has not specified a public email address in their profile).
 * @member {String} email
 */

Actor.prototype['email'] = undefined;
/**
 * @member {Number} followers
 */

Actor.prototype['followers'] = undefined;
/**
 * @member {String} followers_url
 */

Actor.prototype['followers_url'] = undefined;
/**
 * @member {Number} following
 */

Actor.prototype['following'] = undefined;
/**
 * @member {String} following_url
 */

Actor.prototype['following_url'] = undefined;
/**
 * @member {String} gists_url
 */

Actor.prototype['gists_url'] = undefined;
/**
 * @member {String} gravatar_id
 */

Actor.prototype['gravatar_id'] = undefined;
/**
 * @member {Boolean} hireable
 */

Actor.prototype['hireable'] = undefined;
/**
 * @member {String} html_url
 */

Actor.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Actor.prototype['id'] = undefined;
/**
 * @member {String} location
 */

Actor.prototype['location'] = undefined;
/**
 * The account username
 * @member {String} login
 */

Actor.prototype['login'] = undefined;
/**
 * The full account name
 * @member {String} name
 */

Actor.prototype['name'] = undefined;
/**
 * @member {String} organizations_url
 */

Actor.prototype['organizations_url'] = undefined;
/**
 * @member {Number} owned_private_repos
 */

Actor.prototype['owned_private_repos'] = undefined;
/**
 * @member {module:model/ActorPlan} plan
 */

Actor.prototype['plan'] = undefined;
/**
 * @member {Number} private_gists
 */

Actor.prototype['private_gists'] = undefined;
/**
 * @member {Number} public_gists
 */

Actor.prototype['public_gists'] = undefined;
/**
 * @member {Number} public_repos
 */

Actor.prototype['public_repos'] = undefined;
/**
 * @member {String} starred_url
 */

Actor.prototype['starred_url'] = undefined;
/**
 * @member {String} subscriptions_url
 */

Actor.prototype['subscriptions_url'] = undefined;
/**
 * @member {Number} total_private_repos
 */

Actor.prototype['total_private_repos'] = undefined;
/**
 * @member {module:model/Actor.TypeEnum} type
 */

Actor.prototype['type'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */

Actor.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Actor.prototype['url'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Actor['TypeEnum'] = {
  /**
   * value: "User"
   * @const
   */
  "User": "User",

  /**
   * value: "Organization"
   * @const
   */
  "Organization": "Organization"
};
var _default = Actor;
exports["default"] = _default;