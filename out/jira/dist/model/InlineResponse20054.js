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
 * The InlineResponse20054 model module.
 * @module model/InlineResponse20054
 * @version 1.2.0
 */
var InlineResponse20054 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20054</code>.
   * 
   * @alias module:model/InlineResponse20054
   * @param avatarId {Number} 
   * @param description {String} 
   * @param iconUrl {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   * @param subtask {Boolean} 
   */
  function InlineResponse20054(avatarId, description, iconUrl, id, name, self, subtask) {
    _classCallCheck(this, InlineResponse20054);

    InlineResponse20054.initialize(this, avatarId, description, iconUrl, id, name, self, subtask);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20054, null, [{
    key: "initialize",
    value: function initialize(obj, avatarId, description, iconUrl, id, name, self, subtask) {
      obj['avatarId'] = avatarId;
      obj['description'] = description;
      obj['iconUrl'] = iconUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
      obj['subtask'] = subtask;
    }
    /**
     * Constructs a <code>InlineResponse20054</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20054} obj Optional instance to populate.
     * @return {module:model/InlineResponse20054} The populated <code>InlineResponse20054</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20054();

        if (data.hasOwnProperty('avatarId')) {
          obj['avatarId'] = _ApiClient["default"].convertToType(data['avatarId'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('iconUrl')) {
          obj['iconUrl'] = _ApiClient["default"].convertToType(data['iconUrl'], 'String');
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

        if (data.hasOwnProperty('subtask')) {
          obj['subtask'] = _ApiClient["default"].convertToType(data['subtask'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20054;
}();
/**
 * @member {Number} avatarId
 */


InlineResponse20054.prototype['avatarId'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20054.prototype['description'] = undefined;
/**
 * @member {String} iconUrl
 */

InlineResponse20054.prototype['iconUrl'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20054.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20054.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20054.prototype['self'] = undefined;
/**
 * @member {Boolean} subtask
 */

InlineResponse20054.prototype['subtask'] = undefined;
var _default = InlineResponse20054;
exports["default"] = _default;