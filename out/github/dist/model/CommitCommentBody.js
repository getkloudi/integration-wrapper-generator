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
 * The CommitCommentBody model module.
 * @module model/CommitCommentBody
 * @version 1.3.3
 */
var CommitCommentBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommitCommentBody</code>.
   * @alias module:model/CommitCommentBody
   * @param body {String} 
   * @param sha {String} SHA of the commit to comment on.
   */
  function CommitCommentBody(body, sha) {
    _classCallCheck(this, CommitCommentBody);

    CommitCommentBody.initialize(this, body, sha);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitCommentBody, null, [{
    key: "initialize",
    value: function initialize(obj, body, sha) {
      obj['body'] = body;
      obj['sha'] = sha;
    }
    /**
     * Constructs a <code>CommitCommentBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitCommentBody} obj Optional instance to populate.
     * @return {module:model/CommitCommentBody} The populated <code>CommitCommentBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitCommentBody();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitCommentBody;
}();
/**
 * @member {String} body
 */


CommitCommentBody.prototype['body'] = undefined;
/**
 * Deprecated - Use position parameter instead.
 * @member {String} line
 */

CommitCommentBody.prototype['line'] = undefined;
/**
 * Line number in the file to comment on. Defaults to null.
 * @member {String} number
 */

CommitCommentBody.prototype['number'] = undefined;
/**
 * Relative path of the file to comment on.
 * @member {String} path
 */

CommitCommentBody.prototype['path'] = undefined;
/**
 * Line index in the diff to comment on.
 * @member {Number} position
 */

CommitCommentBody.prototype['position'] = undefined;
/**
 * SHA of the commit to comment on.
 * @member {String} sha
 */

CommitCommentBody.prototype['sha'] = undefined;
var _default = CommitCommentBody;
exports["default"] = _default;