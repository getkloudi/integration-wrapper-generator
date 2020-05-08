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
 * The FilterIdPermissionProjectProjectCategory model module.
 * @module model/FilterIdPermissionProjectProjectCategory
 * @version 1.3.0
 */
var FilterIdPermissionProjectProjectCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterIdPermissionProjectProjectCategory</code>.
   * @alias module:model/FilterIdPermissionProjectProjectCategory
   * @param description {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   */
  function FilterIdPermissionProjectProjectCategory(description, id, name, self) {
    _classCallCheck(this, FilterIdPermissionProjectProjectCategory);

    FilterIdPermissionProjectProjectCategory.initialize(this, description, id, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterIdPermissionProjectProjectCategory, null, [{
    key: "initialize",
    value: function initialize(obj, description, id, name, self) {
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>FilterIdPermissionProjectProjectCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterIdPermissionProjectProjectCategory} obj Optional instance to populate.
     * @return {module:model/FilterIdPermissionProjectProjectCategory} The populated <code>FilterIdPermissionProjectProjectCategory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterIdPermissionProjectProjectCategory();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
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

  return FilterIdPermissionProjectProjectCategory;
}();
/**
 * @member {String} description
 */


FilterIdPermissionProjectProjectCategory.prototype['description'] = undefined;
/**
 * @member {String} id
 */

FilterIdPermissionProjectProjectCategory.prototype['id'] = undefined;
/**
 * @member {String} name
 */

FilterIdPermissionProjectProjectCategory.prototype['name'] = undefined;
/**
 * @member {String} self
 */

FilterIdPermissionProjectProjectCategory.prototype['self'] = undefined;
var _default = FilterIdPermissionProjectProjectCategory;
exports["default"] = _default;