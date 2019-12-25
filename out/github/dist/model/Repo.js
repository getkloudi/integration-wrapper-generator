"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Actor = _interopRequireDefault(require("./Actor"));

var _Organization = _interopRequireDefault(require("./Organization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Repo model module.
 * @module model/Repo
 * @version 1.4.0
 */
var Repo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Repo</code>.
   * @alias module:model/Repo
   */
  function Repo() {
    _classCallCheck(this, Repo);

    Repo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Repo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Repo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Repo} obj Optional instance to populate.
     * @return {module:model/Repo} The populated <code>Repo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Repo();

        if (data.hasOwnProperty('clone_url')) {
          obj['clone_url'] = _ApiClient["default"].convertToType(data['clone_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('fork')) {
          obj['fork'] = _ApiClient["default"].convertToType(data['fork'], 'Boolean');
        }

        if (data.hasOwnProperty('forks')) {
          obj['forks'] = _ApiClient["default"].convertToType(data['forks'], 'Number');
        }

        if (data.hasOwnProperty('forks_count')) {
          obj['forks_count'] = _ApiClient["default"].convertToType(data['forks_count'], 'Number');
        }

        if (data.hasOwnProperty('full_name')) {
          obj['full_name'] = _ApiClient["default"].convertToType(data['full_name'], 'String');
        }

        if (data.hasOwnProperty('git_url')) {
          obj['git_url'] = _ApiClient["default"].convertToType(data['git_url'], 'String');
        }

        if (data.hasOwnProperty('has_downloads')) {
          obj['has_downloads'] = _ApiClient["default"].convertToType(data['has_downloads'], 'Boolean');
        }

        if (data.hasOwnProperty('has_issues')) {
          obj['has_issues'] = _ApiClient["default"].convertToType(data['has_issues'], 'Boolean');
        }

        if (data.hasOwnProperty('has_wiki')) {
          obj['has_wiki'] = _ApiClient["default"].convertToType(data['has_wiki'], 'Boolean');
        }

        if (data.hasOwnProperty('homepage')) {
          obj['homepage'] = _ApiClient["default"].convertToType(data['homepage'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('master_branch')) {
          obj['master_branch'] = _ApiClient["default"].convertToType(data['master_branch'], 'String');
        }

        if (data.hasOwnProperty('mirror_url')) {
          obj['mirror_url'] = _ApiClient["default"].convertToType(data['mirror_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('open_issues')) {
          obj['open_issues'] = _ApiClient["default"].convertToType(data['open_issues'], 'Number');
        }

        if (data.hasOwnProperty('open_issues_count')) {
          obj['open_issues_count'] = _ApiClient["default"].convertToType(data['open_issues_count'], 'Number');
        }

        if (data.hasOwnProperty('organization')) {
          obj['organization'] = _Organization["default"].constructFromObject(data['organization']);
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Actor["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('parent')) {
          obj['parent'] = _ApiClient["default"].convertToType(data['parent'], Repo);
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('pushed_at')) {
          obj['pushed_at'] = _ApiClient["default"].convertToType(data['pushed_at'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], Repo);
        }

        if (data.hasOwnProperty('ssh_url')) {
          obj['ssh_url'] = _ApiClient["default"].convertToType(data['ssh_url'], 'String');
        }

        if (data.hasOwnProperty('svn_url')) {
          obj['svn_url'] = _ApiClient["default"].convertToType(data['svn_url'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('watchers')) {
          obj['watchers'] = _ApiClient["default"].convertToType(data['watchers'], 'Number');
        }

        if (data.hasOwnProperty('watchers_count')) {
          obj['watchers_count'] = _ApiClient["default"].convertToType(data['watchers_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Repo;
}();
/**
 * @member {String} clone_url
 */


Repo.prototype['clone_url'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

Repo.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

Repo.prototype['description'] = undefined;
/**
 * @member {Boolean} fork
 */

Repo.prototype['fork'] = undefined;
/**
 * @member {Number} forks
 */

Repo.prototype['forks'] = undefined;
/**
 * @member {Number} forks_count
 */

Repo.prototype['forks_count'] = undefined;
/**
 * @member {String} full_name
 */

Repo.prototype['full_name'] = undefined;
/**
 * @member {String} git_url
 */

Repo.prototype['git_url'] = undefined;
/**
 * @member {Boolean} has_downloads
 */

Repo.prototype['has_downloads'] = undefined;
/**
 * @member {Boolean} has_issues
 */

Repo.prototype['has_issues'] = undefined;
/**
 * @member {Boolean} has_wiki
 */

Repo.prototype['has_wiki'] = undefined;
/**
 * @member {String} homepage
 */

Repo.prototype['homepage'] = undefined;
/**
 * @member {String} html_url
 */

Repo.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Repo.prototype['id'] = undefined;
/**
 * @member {String} language
 */

Repo.prototype['language'] = undefined;
/**
 * @member {String} master_branch
 */

Repo.prototype['master_branch'] = undefined;
/**
 * @member {String} mirror_url
 */

Repo.prototype['mirror_url'] = undefined;
/**
 * @member {String} name
 */

Repo.prototype['name'] = undefined;
/**
 * @member {Number} open_issues
 */

Repo.prototype['open_issues'] = undefined;
/**
 * @member {Number} open_issues_count
 */

Repo.prototype['open_issues_count'] = undefined;
/**
 * @member {module:model/Organization} organization
 */

Repo.prototype['organization'] = undefined;
/**
 * @member {module:model/Actor} owner
 */

Repo.prototype['owner'] = undefined;
/**
 * @member {module:model/Repo} parent
 */

Repo.prototype['parent'] = undefined;
/**
 * @member {Boolean} private
 */

Repo.prototype['private'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} pushed_at
 */

Repo.prototype['pushed_at'] = undefined;
/**
 * @member {Number} size
 */

Repo.prototype['size'] = undefined;
/**
 * @member {module:model/Repo} source
 */

Repo.prototype['source'] = undefined;
/**
 * @member {String} ssh_url
 */

Repo.prototype['ssh_url'] = undefined;
/**
 * @member {String} svn_url
 */

Repo.prototype['svn_url'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */

Repo.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Repo.prototype['url'] = undefined;
/**
 * @member {Number} watchers
 */

Repo.prototype['watchers'] = undefined;
/**
 * @member {Number} watchers_count
 */

Repo.prototype['watchers_count'] = undefined;
var _default = Repo;
exports["default"] = _default;