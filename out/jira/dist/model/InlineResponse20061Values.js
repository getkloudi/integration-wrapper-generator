"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20061NotificationSchemeEvents = _interopRequireDefault(require("./InlineResponse20061NotificationSchemeEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20061Values model module.
 * @module model/InlineResponse20061Values
 * @version 1.3.1
 */
var InlineResponse20061Values = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20061Values</code>.
   * @alias module:model/InlineResponse20061Values
   * @param description {String} 
   * @param expand {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20061Values(description, expand, id, name, self) {
    _classCallCheck(this, InlineResponse20061Values);

    InlineResponse20061Values.initialize(this, description, expand, id, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20061Values, null, [{
    key: "initialize",
    value: function initialize(obj, description, expand, id, name, self) {
      obj['description'] = description;
      obj['expand'] = expand;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20061Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20061Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20061Values} The populated <code>InlineResponse20061Values</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20061Values();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('notificationSchemeEvents')) {
          obj['notificationSchemeEvents'] = _ApiClient["default"].convertToType(data['notificationSchemeEvents'], [_InlineResponse20061NotificationSchemeEvents["default"]]);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20061Values;
}();
/**
 * @member {String} description
 */


InlineResponse20061Values.prototype['description'] = undefined;
/**
 * @member {String} expand
 */

InlineResponse20061Values.prototype['expand'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20061Values.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20061Values.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20061NotificationSchemeEvents>} notificationSchemeEvents
 */

InlineResponse20061Values.prototype['notificationSchemeEvents'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20061Values.prototype['self'] = undefined;
var _default = InlineResponse20061Values;
exports["default"] = _default;