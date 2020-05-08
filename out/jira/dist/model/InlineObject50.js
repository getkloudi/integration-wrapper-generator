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
 * The InlineObject50 model module.
 * @module model/InlineObject50
 * @version 1.0.0
 */
var InlineObject50 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject50</code>.
   * @alias module:model/InlineObject50
   */
  function InlineObject50() {
    _classCallCheck(this, InlineObject50);

    InlineObject50.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject50, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject50</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject50} obj Optional instance to populate.
     * @return {module:model/InlineObject50} The populated <code>InlineObject50</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject50();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject50;
}();
/**
 * A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
 * @member {String} description
 */


InlineObject50.prototype['description'] = undefined;
/**
 * The name of the project role. Must be unique. Cannot begin or end with whitespace. Max length is 255 characters. Required when creating a project role. Optional when partially updating a project role.
 * @member {String} name
 */

InlineObject50.prototype['name'] = undefined;
var _default = InlineObject50;
exports["default"] = _default;