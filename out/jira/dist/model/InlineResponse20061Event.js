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
 * The InlineResponse20061Event model module.
 * @module model/InlineResponse20061Event
 * @version 1.2.0
 */
var InlineResponse20061Event = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20061Event</code>.
   * @alias module:model/InlineResponse20061Event
   * @param description {String} 
   * @param id {Number} 
   * @param name {String} 
   */
  function InlineResponse20061Event(description, id, name) {
    _classCallCheck(this, InlineResponse20061Event);

    InlineResponse20061Event.initialize(this, description, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20061Event, null, [{
    key: "initialize",
    value: function initialize(obj, description, id, name) {
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineResponse20061Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20061Event} obj Optional instance to populate.
     * @return {module:model/InlineResponse20061Event} The populated <code>InlineResponse20061Event</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20061Event();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20061Event;
}();
/**
 * @member {String} description
 */


InlineResponse20061Event.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20061Event.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20061Event.prototype['name'] = undefined;
var _default = InlineResponse20061Event;
exports["default"] = _default;