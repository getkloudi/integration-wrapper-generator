"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitFile model module.
 * @module model/CommitFile
 * @version 1.2.0
 */
var CommitFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommitFile</code>.
   * A file object, representing a file at a commit in a repository
   * @alias module:model/CommitFile
   * @param type {String} 
   */
  function CommitFile(type) {
    _classCallCheck(this, CommitFile);

    CommitFile.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitFile, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>CommitFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitFile} obj Optional instance to populate.
     * @return {module:model/CommitFile} The populated <code>CommitFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitFile();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _Commit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], 'String');
        }

        if (data.hasOwnProperty('escaped_path')) {
          obj['escaped_path'] = _ApiClient["default"].convertToType(data['escaped_path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitFile;
}();
/**
 * @member {String} type
 */


CommitFile.prototype['type'] = undefined;
/**
 * The path in the repository
 * @member {String} path
 */

CommitFile.prototype['path'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

CommitFile.prototype['commit'] = undefined;
/**
 * @member {module:model/CommitFile.AttributesEnum} attributes
 */

CommitFile.prototype['attributes'] = undefined;
/**
 * The escaped version of the path as it appears in a diff. If the path does not require escaping this will be the same as path.
 * @member {String} escaped_path
 */

CommitFile.prototype['escaped_path'] = undefined;
/**
 * Allowed values for the <code>attributes</code> property.
 * @enum {String}
 * @readonly
 */

CommitFile['AttributesEnum'] = {
  /**
   * value: "link"
   * @const
   */
  "link": "link",

  /**
   * value: "executable"
   * @const
   */
  "executable": "executable",

  /**
   * value: "subrepository"
   * @const
   */
  "subrepository": "subrepository",

  /**
   * value: "binary"
   * @const
   */
  "binary": "binary",

  /**
   * value: "lfs"
   * @const
   */
  "lfs": "lfs"
};
var _default = CommitFile;
exports["default"] = _default;