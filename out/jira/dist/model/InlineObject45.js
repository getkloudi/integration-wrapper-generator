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
 * The InlineObject45 model module.
 * @module model/InlineObject45
 * @version 1.3.0
 */
var InlineObject45 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject45</code>.
   * @alias module:model/InlineObject45
   */
  function InlineObject45() {
    _classCallCheck(this, InlineObject45);

    InlineObject45.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject45, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject45</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject45} obj Optional instance to populate.
     * @return {module:model/InlineObject45} The populated <code>InlineObject45</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject45();

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

  return InlineObject45;
}();
/**
 * The name of the group to add.
 * @member {Array.<String>} group
 */


InlineObject45.prototype['group'] = undefined;
/**
 * The user account ID of the user to add.
 * @member {Array.<String>} user
 */

InlineObject45.prototype['user'] = undefined;
var _default = InlineObject45;
exports["default"] = _default;