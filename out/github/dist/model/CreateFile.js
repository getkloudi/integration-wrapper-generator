"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateFileCommit = _interopRequireDefault(require("./CreateFileCommit"));

var _CreateFileContent = _interopRequireDefault(require("./CreateFileContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateFile model module.
 * @module model/CreateFile
 * @version 1.4.5
 */
var CreateFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFile</code>.
   * @alias module:model/CreateFile
   */
  function CreateFile() {
    _classCallCheck(this, CreateFile);

    CreateFile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFile} obj Optional instance to populate.
     * @return {module:model/CreateFile} The populated <code>CreateFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFile();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _CreateFileCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _CreateFileContent["default"].constructFromObject(data['content']);
        }
      }

      return obj;
    }
  }]);

  return CreateFile;
}();
/**
 * @member {module:model/CreateFileCommit} commit
 */


CreateFile.prototype['commit'] = undefined;
/**
 * @member {module:model/CreateFileContent} content
 */

CreateFile.prototype['content'] = undefined;
var _default = CreateFile;
exports["default"] = _default;