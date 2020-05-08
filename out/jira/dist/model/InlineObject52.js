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
 * The InlineObject52 model module.
 * @module model/InlineObject52
 * @version 1.3.0
 */
var InlineObject52 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject52</code>.
   * @alias module:model/InlineObject52
   */
  function InlineObject52() {
    _classCallCheck(this, InlineObject52);

    InlineObject52.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject52, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject52</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject52} obj Optional instance to populate.
     * @return {module:model/InlineObject52} The populated <code>InlineObject52</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject52();

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], ['String']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject52;
}();
/**
 * @member {Array.<String>} group
 */


InlineObject52.prototype['group'] = undefined;
/**
 * The user account ID of the user to add as a default actor. When not in GDPR-strict-mode this may be user key instead, however this behaviour is deprecated. You can add multiple users separated by a comma (for example, \"user\":[\"12345678-9abc-def1-2345-6789abcdef12\", \"abcdef12-3456-789a-bcde-f123456789ab\"]).
 * @member {Array.<String>} user
 */

InlineObject52.prototype['user'] = undefined;
var _default = InlineObject52;
exports["default"] = _default;