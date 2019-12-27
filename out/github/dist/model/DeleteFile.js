"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteFileCommit = _interopRequireDefault(require("./DeleteFileCommit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteFile model module.
 * @module model/DeleteFile
 * @version 1.4.3
 */
var DeleteFile =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFile</code>.
   * @alias module:model/DeleteFile
   */
  function DeleteFile() {
    _classCallCheck(this, DeleteFile);

    DeleteFile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFile} obj Optional instance to populate.
     * @return {module:model/DeleteFile} The populated <code>DeleteFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFile();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _DeleteFileCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteFile;
}();
/**
 * @member {module:model/DeleteFileCommit} commit
 */


DeleteFile.prototype['commit'] = undefined;
/**
 * @member {String} content
 */

DeleteFile.prototype['content'] = undefined;
var _default = DeleteFile;
exports["default"] = _default;