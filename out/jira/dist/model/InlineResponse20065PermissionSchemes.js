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
 * The InlineResponse20065PermissionSchemes model module.
 * @module model/InlineResponse20065PermissionSchemes
 * @version 1.3.1
 */
var InlineResponse20065PermissionSchemes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20065PermissionSchemes</code>.
   * @alias module:model/InlineResponse20065PermissionSchemes
   * @param description {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20065PermissionSchemes(description, id, name, self) {
    _classCallCheck(this, InlineResponse20065PermissionSchemes);

    InlineResponse20065PermissionSchemes.initialize(this, description, id, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20065PermissionSchemes, null, [{
    key: "initialize",
    value: function initialize(obj, description, id, name, self) {
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20065PermissionSchemes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20065PermissionSchemes} obj Optional instance to populate.
     * @return {module:model/InlineResponse20065PermissionSchemes} The populated <code>InlineResponse20065PermissionSchemes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20065PermissionSchemes();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
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

  return InlineResponse20065PermissionSchemes;
}();
/**
 * @member {String} description
 */


InlineResponse20065PermissionSchemes.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20065PermissionSchemes.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20065PermissionSchemes.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20065PermissionSchemes.prototype['self'] = undefined;
var _default = InlineResponse20065PermissionSchemes;
exports["default"] = _default;