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
 * The InlineResponse20079 model module.
 * @module model/InlineResponse20079
 * @version 1.3.1
 */
var InlineResponse20079 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20079</code>.
   * 
   * @alias module:model/InlineResponse20079
   * @param description {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20079(description, id, name, self) {
    _classCallCheck(this, InlineResponse20079);

    InlineResponse20079.initialize(this, description, id, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20079, null, [{
    key: "initialize",
    value: function initialize(obj, description, id, name, self) {
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20079</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20079} obj Optional instance to populate.
     * @return {module:model/InlineResponse20079} The populated <code>InlineResponse20079</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20079();

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

  return InlineResponse20079;
}();
/**
 * @member {String} description
 */


InlineResponse20079.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20079.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20079.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20079.prototype['self'] = undefined;
var _default = InlineResponse20079;
exports["default"] = _default;