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
 * The RepoLicense model module.
 * @module model/RepoLicense
 * @version 1.1.0
 */
var RepoLicense =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoLicense</code>.
   * This feature was introduced in GitLab 8.7.
   * @alias module:model/RepoLicense
   */
  function RepoLicense() {
    _classCallCheck(this, RepoLicense);

    RepoLicense.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoLicense, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepoLicense</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoLicense} obj Optional instance to populate.
     * @return {module:model/RepoLicense} The populated <code>RepoLicense</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoLicense();

        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], 'String');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('limitations')) {
          obj['limitations'] = _ApiClient["default"].convertToType(data['limitations'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], 'String');
        }

        if (data.hasOwnProperty('popular')) {
          obj['popular'] = _ApiClient["default"].convertToType(data['popular'], 'String');
        }

        if (data.hasOwnProperty('source_url')) {
          obj['source_url'] = _ApiClient["default"].convertToType(data['source_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoLicense;
}();
/**
 * @member {String} conditions
 */


RepoLicense.prototype['conditions'] = undefined;
/**
 * @member {String} content
 */

RepoLicense.prototype['content'] = undefined;
/**
 * @member {String} description
 */

RepoLicense.prototype['description'] = undefined;
/**
 * @member {String} html_url
 */

RepoLicense.prototype['html_url'] = undefined;
/**
 * @member {String} key
 */

RepoLicense.prototype['key'] = undefined;
/**
 * @member {String} limitations
 */

RepoLicense.prototype['limitations'] = undefined;
/**
 * @member {String} name
 */

RepoLicense.prototype['name'] = undefined;
/**
 * @member {String} nickname
 */

RepoLicense.prototype['nickname'] = undefined;
/**
 * @member {String} permissions
 */

RepoLicense.prototype['permissions'] = undefined;
/**
 * @member {String} popular
 */

RepoLicense.prototype['popular'] = undefined;
/**
 * @member {String} source_url
 */

RepoLicense.prototype['source_url'] = undefined;
var _default = RepoLicense;
exports["default"] = _default;