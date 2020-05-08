"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2018Permissions = _interopRequireDefault(require("./InlineResponse2018Permissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2018 model module.
 * @module model/InlineResponse2018
 * @version 1.3.1
 */
var InlineResponse2018 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2018</code>.
   * 
   * @alias module:model/InlineResponse2018
   * @param description {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param permissions {Array.<module:model/InlineResponse2018Permissions>} 
   * @param self {String} 
   */
  function InlineResponse2018(description, id, name, permissions, self) {
    _classCallCheck(this, InlineResponse2018);

    InlineResponse2018.initialize(this, description, id, name, permissions, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2018, null, [{
    key: "initialize",
    value: function initialize(obj, description, id, name, permissions, self) {
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['permissions'] = permissions;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse2018</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2018} obj Optional instance to populate.
     * @return {module:model/InlineResponse2018} The populated <code>InlineResponse2018</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2018();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_InlineResponse2018Permissions["default"]]);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2018;
}();
/**
 * @member {String} description
 */


InlineResponse2018.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse2018.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse2018.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2018Permissions>} permissions
 */

InlineResponse2018.prototype['permissions'] = undefined;
/**
 * @member {String} self
 */

InlineResponse2018.prototype['self'] = undefined;
var _default = InlineResponse2018;
exports["default"] = _default;