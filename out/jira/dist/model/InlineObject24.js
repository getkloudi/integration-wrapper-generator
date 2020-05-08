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
 * The InlineObject24 model module.
 * @module model/InlineObject24
 * @version 1.3.1
 */
var InlineObject24 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject24</code>.
   * @alias module:model/InlineObject24
   */
  function InlineObject24() {
    _classCallCheck(this, InlineObject24);

    InlineObject24.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject24, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject24</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject24} obj Optional instance to populate.
     * @return {module:model/InlineObject24} The populated <code>InlineObject24</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject24();

        if (data.hasOwnProperty('htmlBody')) {
          obj['htmlBody'] = _ApiClient["default"].convertToType(data['htmlBody'], 'String');
        }

        if (data.hasOwnProperty('restrict')) {
          obj['restrict'] = _ApiClient["default"].convertToType(data['restrict'], Object);
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('textBody')) {
          obj['textBody'] = _ApiClient["default"].convertToType(data['textBody'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject24;
}();
/**
 * The HTML body of the email notification for the issue.
 * @member {String} htmlBody
 */


InlineObject24.prototype['htmlBody'] = undefined;
/**
 * @member {Object} restrict
 */

InlineObject24.prototype['restrict'] = undefined;
/**
 * The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
 * @member {String} subject
 */

InlineObject24.prototype['subject'] = undefined;
/**
 * The plain text body of the email notification for the issue.
 * @member {String} textBody
 */

InlineObject24.prototype['textBody'] = undefined;
/**
 * @member {Object} to
 */

InlineObject24.prototype['to'] = undefined;
var _default = InlineObject24;
exports["default"] = _default;