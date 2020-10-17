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
 * The CommentBody model module.
 * @module model/CommentBody
 * @version 1.4.5
 */
var CommentBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommentBody</code>.
   * @alias module:model/CommentBody
   * @param body {String} 
   */
  function CommentBody(body) {
    _classCallCheck(this, CommentBody);

    CommentBody.initialize(this, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommentBody, null, [{
    key: "initialize",
    value: function initialize(obj, body) {
      obj['body'] = body;
    }
    /**
     * Constructs a <code>CommentBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentBody} obj Optional instance to populate.
     * @return {module:model/CommentBody} The populated <code>CommentBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommentBody();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommentBody;
}();
/**
 * @member {String} body
 */


CommentBody.prototype['body'] = undefined;
var _default = CommentBody;
exports["default"] = _default;