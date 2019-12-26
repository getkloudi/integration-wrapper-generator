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
 * The PullsPost model module.
 * @module model/PullsPost
 * @version 1.4.2
 */
var PullsPost =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullsPost</code>.
   * @alias module:model/PullsPost
   */
  function PullsPost() {
    _classCallCheck(this, PullsPost);

    PullsPost.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullsPost, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullsPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullsPost} obj Optional instance to populate.
     * @return {module:model/PullsPost} The populated <code>PullsPost</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullsPost();

        if (data.hasOwnProperty('base')) {
          obj['base'] = _ApiClient["default"].convertToType(data['base'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('head')) {
          obj['head'] = _ApiClient["default"].convertToType(data['head'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullsPost;
}();
/**
 * @member {String} base
 */


PullsPost.prototype['base'] = undefined;
/**
 * @member {String} body
 */

PullsPost.prototype['body'] = undefined;
/**
 * @member {String} head
 */

PullsPost.prototype['head'] = undefined;
/**
 * @member {String} title
 */

PullsPost.prototype['title'] = undefined;
var _default = PullsPost;
exports["default"] = _default;