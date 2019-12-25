"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateFileBodyCommitter = _interopRequireDefault(require("./CreateFileBodyCommitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteFileBody model module.
 * @module model/DeleteFileBody
 * @version 1.4.0
 */
var DeleteFileBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFileBody</code>.
   * @alias module:model/DeleteFileBody
   */
  function DeleteFileBody() {
    _classCallCheck(this, DeleteFileBody);

    DeleteFileBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFileBody, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteFileBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFileBody} obj Optional instance to populate.
     * @return {module:model/DeleteFileBody} The populated <code>DeleteFileBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFileBody();

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _CreateFileBodyCommitter["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteFileBody;
}();
/**
 * @member {module:model/CreateFileBodyCommitter} committer
 */


DeleteFileBody.prototype['committer'] = undefined;
/**
 * @member {String} message
 */

DeleteFileBody.prototype['message'] = undefined;
/**
 * @member {String} sha
 */

DeleteFileBody.prototype['sha'] = undefined;
var _default = DeleteFileBody;
exports["default"] = _default;