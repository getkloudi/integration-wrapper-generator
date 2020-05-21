"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Issue = _interopRequireDefault(require("./Issue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueCommentAllOf model module.
 * @module model/IssueCommentAllOf
 * @version 1.2.0
 */
var IssueCommentAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueCommentAllOf</code>.
   * A issue comment.
   * @alias module:model/IssueCommentAllOf
   */
  function IssueCommentAllOf() {
    _classCallCheck(this, IssueCommentAllOf);

    IssueCommentAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueCommentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueCommentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueCommentAllOf} obj Optional instance to populate.
     * @return {module:model/IssueCommentAllOf} The populated <code>IssueCommentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueCommentAllOf();

        if (data.hasOwnProperty('issue')) {
          obj['issue'] = _Issue["default"].constructFromObject(data['issue']);
        }
      }

      return obj;
    }
  }]);

  return IssueCommentAllOf;
}();
/**
 * @member {module:model/Issue} issue
 */


IssueCommentAllOf.prototype['issue'] = undefined;
var _default = IssueCommentAllOf;
exports["default"] = _default;