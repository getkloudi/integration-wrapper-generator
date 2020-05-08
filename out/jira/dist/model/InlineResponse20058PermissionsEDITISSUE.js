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
 * The InlineResponse20058PermissionsEDITISSUE model module.
 * @module model/InlineResponse20058PermissionsEDITISSUE
 * @version 1.1.0
 */
var InlineResponse20058PermissionsEDITISSUE = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20058PermissionsEDITISSUE</code>.
   * @alias module:model/InlineResponse20058PermissionsEDITISSUE
   * @param description {String} 
   * @param havePermission {Boolean} 
   * @param id {String} 
   * @param key {String} 
   * @param name {String} 
   * @param type {String} 
   */
  function InlineResponse20058PermissionsEDITISSUE(description, havePermission, id, key, name, type) {
    _classCallCheck(this, InlineResponse20058PermissionsEDITISSUE);

    InlineResponse20058PermissionsEDITISSUE.initialize(this, description, havePermission, id, key, name, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20058PermissionsEDITISSUE, null, [{
    key: "initialize",
    value: function initialize(obj, description, havePermission, id, key, name, type) {
      obj['description'] = description;
      obj['havePermission'] = havePermission;
      obj['id'] = id;
      obj['key'] = key;
      obj['name'] = name;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse20058PermissionsEDITISSUE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20058PermissionsEDITISSUE} obj Optional instance to populate.
     * @return {module:model/InlineResponse20058PermissionsEDITISSUE} The populated <code>InlineResponse20058PermissionsEDITISSUE</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20058PermissionsEDITISSUE();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('havePermission')) {
          obj['havePermission'] = _ApiClient["default"].convertToType(data['havePermission'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
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

  return InlineResponse20058PermissionsEDITISSUE;
}();
/**
 * @member {String} description
 */


InlineResponse20058PermissionsEDITISSUE.prototype['description'] = undefined;
/**
 * @member {Boolean} havePermission
 */

InlineResponse20058PermissionsEDITISSUE.prototype['havePermission'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20058PermissionsEDITISSUE.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20058PermissionsEDITISSUE.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20058PermissionsEDITISSUE.prototype['name'] = undefined;
/**
 * @member {String} type
 */

InlineResponse20058PermissionsEDITISSUE.prototype['type'] = undefined;
var _default = InlineResponse20058PermissionsEDITISSUE;
exports["default"] = _default;