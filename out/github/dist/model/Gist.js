"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GistFiles = _interopRequireDefault(require("./GistFiles"));

var _GistForks = _interopRequireDefault(require("./GistForks"));

var _GistHistory = _interopRequireDefault(require("./GistHistory"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Gist model module.
 * @module model/Gist
 * @version 1.4.4
 */
var Gist = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Gist</code>.
   * @alias module:model/Gist
   */
  function Gist() {
    _classCallCheck(this, Gist);

    Gist.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Gist, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Gist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Gist} obj Optional instance to populate.
     * @return {module:model/Gist} The populated <code>Gist</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Gist();

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'Number');
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _GistFiles["default"].constructFromObject(data['files']);
        }

        if (data.hasOwnProperty('forks')) {
          obj['forks'] = _ApiClient["default"].convertToType(data['forks'], [_GistForks["default"]]);
        }

        if (data.hasOwnProperty('git_pull_url')) {
          obj['git_pull_url'] = _ApiClient["default"].convertToType(data['git_pull_url'], 'String');
        }

        if (data.hasOwnProperty('git_push_url')) {
          obj['git_push_url'] = _ApiClient["default"].convertToType(data['git_push_url'], 'String');
        }

        if (data.hasOwnProperty('history')) {
          obj['history'] = _ApiClient["default"].convertToType(data['history'], [_GistHistory["default"]]);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return Gist;
}();
/**
 * @member {Number} comments
 */


Gist.prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

Gist.prototype['comments_url'] = undefined;
/**
 * Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @member {String} created_at
 */

Gist.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

Gist.prototype['description'] = undefined;
/**
 * @member {module:model/GistFiles} files
 */

Gist.prototype['files'] = undefined;
/**
 * @member {Array.<module:model/GistForks>} forks
 */

Gist.prototype['forks'] = undefined;
/**
 * @member {String} git_pull_url
 */

Gist.prototype['git_pull_url'] = undefined;
/**
 * @member {String} git_push_url
 */

Gist.prototype['git_push_url'] = undefined;
/**
 * @member {Array.<module:model/GistHistory>} history
 */

Gist.prototype['history'] = undefined;
/**
 * @member {String} html_url
 */

Gist.prototype['html_url'] = undefined;
/**
 * @member {String} id
 */

Gist.prototype['id'] = undefined;
/**
 * @member {Boolean} public
 */

Gist.prototype['public'] = undefined;
/**
 * @member {String} url
 */

Gist.prototype['url'] = undefined;
/**
 * @member {module:model/User} user
 */

Gist.prototype['user'] = undefined;
var _default = Gist;
exports["default"] = _default;