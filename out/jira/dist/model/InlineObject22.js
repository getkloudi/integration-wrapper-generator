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
 * The InlineObject22 model module.
 * @module model/InlineObject22
 * @version 1.3.1
 */
var InlineObject22 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject22</code>.
   * @alias module:model/InlineObject22
   */
  function InlineObject22() {
    _classCallCheck(this, InlineObject22);

    InlineObject22.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject22, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject22</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject22} obj Optional instance to populate.
     * @return {module:model/InlineObject22} The populated <code>InlineObject22</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject22();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], Object);
        }

        if (data.hasOwnProperty('jsdPublic')) {
          obj['jsdPublic'] = _ApiClient["default"].convertToType(data['jsdPublic'], 'Boolean');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [Object]);
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject22;
}();
/**
 * The comment.
 * @member {Object} body
 */


InlineObject22.prototype['body'] = undefined;
/**
 * Indicates whether the comment is visible in Jira Service Desk. Optional on create and update. Defaults to true. If the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk projectthis parameter defaults to true.
 * @member {Boolean} jsdPublic
 */

InlineObject22.prototype['jsdPublic'] = undefined;
/**
 * A list of comment properties. Optional on create and update.
 * @member {Array.<Object>} properties
 */

InlineObject22.prototype['properties'] = undefined;
/**
 * The group or role to which this comment is visible. Optional on create and update.
 * @member {Object} visibility
 */

InlineObject22.prototype['visibility'] = undefined;
var _default = InlineObject22;
exports["default"] = _default;