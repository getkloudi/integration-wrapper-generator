"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _Project = _interopRequireDefault(require("./Project"));

var _Repository = _interopRequireDefault(require("./Repository"));

var _RepositoryAllOfLinks = _interopRequireDefault(require("./RepositoryAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepositoryAllOf model module.
 * @module model/RepositoryAllOf
 * @version 1.1.0
 */
var RepositoryAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepositoryAllOf</code>.
   * A Bitbucket repository.
   * @alias module:model/RepositoryAllOf
   */
  function RepositoryAllOf() {
    _classCallCheck(this, RepositoryAllOf);

    RepositoryAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepositoryAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepositoryAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryAllOf} obj Optional instance to populate.
     * @return {module:model/RepositoryAllOf} The populated <code>RepositoryAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepositoryAllOf();

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('fork_policy')) {
          obj['fork_policy'] = _ApiClient["default"].convertToType(data['fork_policy'], 'String');
        }

        if (data.hasOwnProperty('full_name')) {
          obj['full_name'] = _ApiClient["default"].convertToType(data['full_name'], 'String');
        }

        if (data.hasOwnProperty('has_issues')) {
          obj['has_issues'] = _ApiClient["default"].convertToType(data['has_issues'], 'Boolean');
        }

        if (data.hasOwnProperty('has_wiki')) {
          obj['has_wiki'] = _ApiClient["default"].convertToType(data['has_wiki'], 'Boolean');
        }

        if (data.hasOwnProperty('is_private')) {
          obj['is_private'] = _ApiClient["default"].convertToType(data['is_private'], 'Boolean');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _RepositoryAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Account["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('parent')) {
          obj['parent'] = _Repository["default"].constructFromObject(data['parent']);
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _Project["default"].constructFromObject(data['project']);
        }

        if (data.hasOwnProperty('scm')) {
          obj['scm'] = _ApiClient["default"].convertToType(data['scm'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepositoryAllOf;
}();
/**
 * @member {Date} created_on
 */


RepositoryAllOf.prototype['created_on'] = undefined;
/**
 * @member {String} description
 */

RepositoryAllOf.prototype['description'] = undefined;
/**
 *  Controls the rules for forking this repository.  * **allow_forks**: unrestricted forking * **no_public_forks**: restrict forking to private forks (forks cannot   be made public later) * **no_forks**: deny all forking 
 * @member {module:model/RepositoryAllOf.ForkPolicyEnum} fork_policy
 */

RepositoryAllOf.prototype['fork_policy'] = undefined;
/**
 * The concatenation of the repository owner's username and the slugified name, e.g. \"evzijst/interruptingcow\". This is the same string used in Bitbucket URLs.
 * @member {String} full_name
 */

RepositoryAllOf.prototype['full_name'] = undefined;
/**
 * @member {Boolean} has_issues
 */

RepositoryAllOf.prototype['has_issues'] = undefined;
/**
 * @member {Boolean} has_wiki
 */

RepositoryAllOf.prototype['has_wiki'] = undefined;
/**
 * @member {Boolean} is_private
 */

RepositoryAllOf.prototype['is_private'] = undefined;
/**
 * @member {String} language
 */

RepositoryAllOf.prototype['language'] = undefined;
/**
 * @member {module:model/RepositoryAllOfLinks} links
 */

RepositoryAllOf.prototype['links'] = undefined;
/**
 * @member {String} name
 */

RepositoryAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/Account} owner
 */

RepositoryAllOf.prototype['owner'] = undefined;
/**
 * @member {module:model/Repository} parent
 */

RepositoryAllOf.prototype['parent'] = undefined;
/**
 * @member {module:model/Project} project
 */

RepositoryAllOf.prototype['project'] = undefined;
/**
 * @member {module:model/RepositoryAllOf.ScmEnum} scm
 */

RepositoryAllOf.prototype['scm'] = undefined;
/**
 * @member {Number} size
 */

RepositoryAllOf.prototype['size'] = undefined;
/**
 * @member {Date} updated_on
 */

RepositoryAllOf.prototype['updated_on'] = undefined;
/**
 * The repository's immutable id. This can be used as a substitute for the slug segment in URLs. Doing this guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a different user.
 * @member {String} uuid
 */

RepositoryAllOf.prototype['uuid'] = undefined;
/**
 * Allowed values for the <code>fork_policy</code> property.
 * @enum {String}
 * @readonly
 */

RepositoryAllOf['ForkPolicyEnum'] = {
  /**
   * value: "allow_forks"
   * @const
   */
  "allow_forks": "allow_forks",

  /**
   * value: "no_public_forks"
   * @const
   */
  "no_public_forks": "no_public_forks",

  /**
   * value: "no_forks"
   * @const
   */
  "no_forks": "no_forks"
};
/**
 * Allowed values for the <code>scm</code> property.
 * @enum {String}
 * @readonly
 */

RepositoryAllOf['ScmEnum'] = {
  /**
   * value: "hg"
   * @const
   */
  "hg": "hg",

  /**
   * value: "git"
   * @const
   */
  "git": "git"
};
var _default = RepositoryAllOf;
exports["default"] = _default;