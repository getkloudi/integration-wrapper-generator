"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionProjectProjectCategory = _interopRequireDefault(require("./FilterIdPermissionProjectProjectCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20053 model module.
 * @module model/InlineResponse20053
 * @version 1.3.0
 */
var InlineResponse20053 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20053</code>.
   * 
   * @alias module:model/InlineResponse20053
   * @param defaultSecurityLevelId {Number} 
   * @param description {String} 
   * @param id {Number} 
   * @param levels {Array.<module:model/FilterIdPermissionProjectProjectCategory>} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20053(defaultSecurityLevelId, description, id, levels, name, self) {
    _classCallCheck(this, InlineResponse20053);

    InlineResponse20053.initialize(this, defaultSecurityLevelId, description, id, levels, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20053, null, [{
    key: "initialize",
    value: function initialize(obj, defaultSecurityLevelId, description, id, levels, name, self) {
      obj['defaultSecurityLevelId'] = defaultSecurityLevelId;
      obj['description'] = description;
      obj['id'] = id;
      obj['levels'] = levels;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20053</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20053} obj Optional instance to populate.
     * @return {module:model/InlineResponse20053} The populated <code>InlineResponse20053</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20053();

        if (data.hasOwnProperty('defaultSecurityLevelId')) {
          obj['defaultSecurityLevelId'] = _ApiClient["default"].convertToType(data['defaultSecurityLevelId'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('levels')) {
          obj['levels'] = _ApiClient["default"].convertToType(data['levels'], [_FilterIdPermissionProjectProjectCategory["default"]]);
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

  return InlineResponse20053;
}();
/**
 * @member {Number} defaultSecurityLevelId
 */


InlineResponse20053.prototype['defaultSecurityLevelId'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20053.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20053.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/FilterIdPermissionProjectProjectCategory>} levels
 */

InlineResponse20053.prototype['levels'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20053.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20053.prototype['self'] = undefined;
var _default = InlineResponse20053;
exports["default"] = _default;