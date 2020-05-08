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
 * The InlineObject30 model module.
 * @module model/InlineObject30
 * @version 1.3.0
 */
var InlineObject30 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject30</code>.
   * @alias module:model/InlineObject30
   */
  function InlineObject30() {
    _classCallCheck(this, InlineObject30);

    InlineObject30.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject30, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject30</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject30} obj Optional instance to populate.
     * @return {module:model/InlineObject30} The populated <code>InlineObject30</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject30();

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], Object);
        }

        if (data.hasOwnProperty('inwardIssue')) {
          obj['inwardIssue'] = _ApiClient["default"].convertToType(data['inwardIssue'], Object);
        }

        if (data.hasOwnProperty('outwardIssue')) {
          obj['outwardIssue'] = _ApiClient["default"].convertToType(data['outwardIssue'], Object);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject30;
}();
/**
 * A comment.
 * @member {Object} comment
 */


InlineObject30.prototype['comment'] = undefined;
/**
 * The ID or key of a linked issue.
 * @member {Object} inwardIssue
 */

InlineObject30.prototype['inwardIssue'] = undefined;
/**
 * The ID or key of a linked issue.
 * @member {Object} outwardIssue
 */

InlineObject30.prototype['outwardIssue'] = undefined;
/**
 * This bean is used as follows:
 * @member {Object} type
 */

InlineObject30.prototype['type'] = undefined;
var _default = InlineObject30;
exports["default"] = _default;