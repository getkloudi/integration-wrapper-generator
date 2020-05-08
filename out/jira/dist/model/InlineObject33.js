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
 * The InlineObject33 model module.
 * @module model/InlineObject33
 * @version 1.3.0
 */
var InlineObject33 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject33</code>.
   * @alias module:model/InlineObject33
   */
  function InlineObject33() {
    _classCallCheck(this, InlineObject33);

    InlineObject33.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject33, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject33</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject33} obj Optional instance to populate.
     * @return {module:model/InlineObject33} The populated <code>InlineObject33</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject33();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject33;
}();
/**
 * The description of the issue type.
 * @member {String} description
 */


InlineObject33.prototype['description'] = undefined;
/**
 * The unique name for the issue type. Maximum length 60 characters. Required.
 * @member {String} name
 */

InlineObject33.prototype['name'] = undefined;
/**
 * Whether the issue type is subtype or standard. Defaults to standard.
 * @member {module:model/InlineObject33.TypeEnum} type
 */

InlineObject33.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject33['TypeEnum'] = {
  /**
   * value: "subtask"
   * @const
   */
  "subtask": "subtask",

  /**
   * value: "standard"
   * @const
   */
  "standard": "standard"
};
var _default = InlineObject33;
exports["default"] = _default;