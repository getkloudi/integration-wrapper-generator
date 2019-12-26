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
 * The PostRepo model module.
 * @module model/PostRepo
 * @version 1.4.2
 */
var PostRepo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PostRepo</code>.
   * @alias module:model/PostRepo
   * @param name {String} 
   */
  function PostRepo(name) {
    _classCallCheck(this, PostRepo);

    PostRepo.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PostRepo, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>PostRepo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRepo} obj Optional instance to populate.
     * @return {module:model/PostRepo} The populated <code>PostRepo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PostRepo();

        if (data.hasOwnProperty('auto_init')) {
          obj['auto_init'] = _ApiClient["default"].convertToType(data['auto_init'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('gitignore_template')) {
          obj['gitignore_template'] = _ApiClient["default"].convertToType(data['gitignore_template'], 'String');
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

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('team_id')) {
          obj['team_id'] = _ApiClient["default"].convertToType(data['team_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PostRepo;
}();
/**
 * True to create an initial commit with empty README. Default is false.
 * @member {Boolean} auto_init
 */


PostRepo.prototype['auto_init'] = undefined;
/**
 * @member {String} description
 */

PostRepo.prototype['description'] = undefined;
/**
 * Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, \"Haskell\" Ignored if auto_init parameter is not provided. 
 * @member {String} gitignore_template
 */

PostRepo.prototype['gitignore_template'] = undefined;
/**
 * True to enable downloads for this repository, false to disable them. Default is true.
 * @member {Boolean} has_downloads
 */

PostRepo.prototype['has_downloads'] = undefined;
/**
 * True to enable issues for this repository, false to disable them. Default is true.
 * @member {Boolean} has_issues
 */

PostRepo.prototype['has_issues'] = undefined;
/**
 * True to enable the wiki for this repository, false to disable it. Default is true.
 * @member {Boolean} has_wiki
 */

PostRepo.prototype['has_wiki'] = undefined;
/**
 * @member {String} homepage
 */

PostRepo.prototype['homepage'] = undefined;
/**
 * @member {String} name
 */

PostRepo.prototype['name'] = undefined;
/**
 * True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account.
 * @member {Boolean} private
 */

PostRepo.prototype['private'] = undefined;
/**
 * The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @member {Number} team_id
 */

PostRepo.prototype['team_id'] = undefined;
var _default = PostRepo;
exports["default"] = _default;