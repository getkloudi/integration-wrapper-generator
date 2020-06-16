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
 * The StatusCategory model module.
 * @module model/StatusCategory
 * @version 1.4.0
 */
var StatusCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StatusCategory</code>.
   * A status category.
   * @alias module:model/StatusCategory
   */
  function StatusCategory() {
    _classCallCheck(this, StatusCategory);

    StatusCategory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StatusCategory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StatusCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusCategory} obj Optional instance to populate.
     * @return {module:model/StatusCategory} The populated <code>StatusCategory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StatusCategory();

        if (data.hasOwnProperty('colorName')) {
          obj['colorName'] = _ApiClient["default"].convertToType(data['colorName'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StatusCategory;
}();
/**
 * The name of the color used to represent the status category.
 * @member {String} colorName
 */


StatusCategory.prototype['colorName'] = undefined;
/**
 * The ID of the status category.
 * @member {Number} id
 */

StatusCategory.prototype['id'] = undefined;
/**
 * The key of the status category.
 * @member {String} key
 */

StatusCategory.prototype['key'] = undefined;
/**
 * The name of the status category.
 * @member {String} name
 */

StatusCategory.prototype['name'] = undefined;
/**
 * The URL of the status category.
 * @member {String} self
 */

StatusCategory.prototype['self'] = undefined;
var _default = StatusCategory;
exports["default"] = _default;