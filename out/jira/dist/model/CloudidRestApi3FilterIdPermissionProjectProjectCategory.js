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
 * The CloudidRestApi3FilterIdPermissionProjectProjectCategory model module.
 * @module model/CloudidRestApi3FilterIdPermissionProjectProjectCategory
 * @version 1.1.0
 */
var CloudidRestApi3FilterIdPermissionProjectProjectCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3FilterIdPermissionProjectProjectCategory</code>.
   * @alias module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory
   * @param description {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   */
  function CloudidRestApi3FilterIdPermissionProjectProjectCategory(description, id, name, self) {
    _classCallCheck(this, CloudidRestApi3FilterIdPermissionProjectProjectCategory);

    CloudidRestApi3FilterIdPermissionProjectProjectCategory.initialize(this, description, id, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3FilterIdPermissionProjectProjectCategory, null, [{
    key: "initialize",
    value: function initialize(obj, description, id, name, self) {
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>CloudidRestApi3FilterIdPermissionProjectProjectCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory} The populated <code>CloudidRestApi3FilterIdPermissionProjectProjectCategory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3FilterIdPermissionProjectProjectCategory();

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

  return CloudidRestApi3FilterIdPermissionProjectProjectCategory;
}();
/**
 * @member {String} description
 */


CloudidRestApi3FilterIdPermissionProjectProjectCategory.prototype['description'] = undefined;
/**
 * @member {String} id
 */

CloudidRestApi3FilterIdPermissionProjectProjectCategory.prototype['id'] = undefined;
/**
 * @member {String} name
 */

CloudidRestApi3FilterIdPermissionProjectProjectCategory.prototype['name'] = undefined;
/**
 * @member {String} self
 */

CloudidRestApi3FilterIdPermissionProjectProjectCategory.prototype['self'] = undefined;
var _default = CloudidRestApi3FilterIdPermissionProjectProjectCategory;
exports["default"] = _default;