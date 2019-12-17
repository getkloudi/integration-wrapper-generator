"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContentsPathLinks = _interopRequireDefault(require("./ContentsPathLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateFileContent model module.
 * @module model/CreateFileContent
 * @version 1.3.0
 */
var CreateFileContent =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFileContent</code>.
   * @alias module:model/CreateFileContent
   */
  function CreateFileContent() {
    _classCallCheck(this, CreateFileContent);

    CreateFileContent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFileContent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateFileContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFileContent} obj Optional instance to populate.
     * @return {module:model/CreateFileContent} The populated <code>CreateFileContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFileContent();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _ContentsPathLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('git_url')) {
          obj['git_url'] = _ApiClient["default"].convertToType(data['git_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateFileContent;
}();
/**
 * @member {module:model/ContentsPathLinks} _links
 */


CreateFileContent.prototype['_links'] = undefined;
/**
 * @member {String} git_url
 */

CreateFileContent.prototype['git_url'] = undefined;
/**
 * @member {String} html_url
 */

CreateFileContent.prototype['html_url'] = undefined;
/**
 * @member {String} name
 */

CreateFileContent.prototype['name'] = undefined;
/**
 * @member {String} path
 */

CreateFileContent.prototype['path'] = undefined;
/**
 * @member {String} sha
 */

CreateFileContent.prototype['sha'] = undefined;
/**
 * @member {Number} size
 */

CreateFileContent.prototype['size'] = undefined;
/**
 * @member {String} type
 */

CreateFileContent.prototype['type'] = undefined;
/**
 * @member {String} url
 */

CreateFileContent.prototype['url'] = undefined;
var _default = CreateFileContent;
exports["default"] = _default;