"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssuesComment model module.
 * @module model/IssuesComment
 * @version 1.4.2
 */
var IssuesComment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssuesComment</code>.
   * @alias module:model/IssuesComment
   */
  function IssuesComment() {
    _classCallCheck(this, IssuesComment);

    IssuesComment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssuesComment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssuesComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuesComment} obj Optional instance to populate.
     * @return {module:model/IssuesComment} The populated <code>IssuesComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssuesComment();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
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

  return IssuesComment;
}();
/**
 * @member {String} body
 */


IssuesComment.prototype['body'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

IssuesComment.prototype['created_at'] = undefined;
/**
 * @member {String} html_url
 */

IssuesComment.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

IssuesComment.prototype['id'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */

IssuesComment.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

IssuesComment.prototype['url'] = undefined;
/**
 * @member {module:model/User} user
 */

IssuesComment.prototype['user'] = undefined;
var _default = IssuesComment;
exports["default"] = _default;