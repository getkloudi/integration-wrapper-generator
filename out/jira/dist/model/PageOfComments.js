"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Comment = _interopRequireDefault(require("./Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PageOfComments model module.
 * @module model/PageOfComments
 * @version 1.4.0
 */
var PageOfComments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PageOfComments</code>.
   * A page of comments.
   * @alias module:model/PageOfComments
   */
  function PageOfComments() {
    _classCallCheck(this, PageOfComments);

    PageOfComments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PageOfComments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PageOfComments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageOfComments} obj Optional instance to populate.
     * @return {module:model/PageOfComments} The populated <code>PageOfComments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PageOfComments();

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], [_Comment["default"]]);
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PageOfComments;
}();
/**
 * The list of comments.
 * @member {Array.<module:model/Comment>} comments
 */


PageOfComments.prototype['comments'] = undefined;
/**
 * The maximum number of items that could be returned.
 * @member {Number} maxResults
 */

PageOfComments.prototype['maxResults'] = undefined;
/**
 * The index of the first item returned.
 * @member {Number} startAt
 */

PageOfComments.prototype['startAt'] = undefined;
/**
 * The number of items returned.
 * @member {Number} total
 */

PageOfComments.prototype['total'] = undefined;
var _default = PageOfComments;
exports["default"] = _default;