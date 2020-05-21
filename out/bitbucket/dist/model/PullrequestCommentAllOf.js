"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pullrequest = _interopRequireDefault(require("./Pullrequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullrequestCommentAllOf model module.
 * @module model/PullrequestCommentAllOf
 * @version 1.2.0
 */
var PullrequestCommentAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullrequestCommentAllOf</code>.
   * A pullrequest comment.
   * @alias module:model/PullrequestCommentAllOf
   */
  function PullrequestCommentAllOf() {
    _classCallCheck(this, PullrequestCommentAllOf);

    PullrequestCommentAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestCommentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullrequestCommentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestCommentAllOf} obj Optional instance to populate.
     * @return {module:model/PullrequestCommentAllOf} The populated <code>PullrequestCommentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestCommentAllOf();

        if (data.hasOwnProperty('pullrequest')) {
          obj['pullrequest'] = _Pullrequest["default"].constructFromObject(data['pullrequest']);
        }
      }

      return obj;
    }
  }]);

  return PullrequestCommentAllOf;
}();
/**
 * @member {module:model/Pullrequest} pullrequest
 */


PullrequestCommentAllOf.prototype['pullrequest'] = undefined;
var _default = PullrequestCommentAllOf;
exports["default"] = _default;