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
 * The InlineResponse20062 model module.
 * @module model/InlineResponse20062
 * @version 1.0.0
 */
var InlineResponse20062 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20062</code>.
   * 
   * @alias module:model/InlineResponse20062
   * @param description {String} 
   * @param expand {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param notificationSchemeEvents {Array.<module:model/InlineResponse20061NotificationSchemeEvents>} 
   * @param self {String} 
   */
  function InlineResponse20062(description, expand, id, name, notificationSchemeEvents, self) {
    _classCallCheck(this, InlineResponse20062);

    InlineResponse20062.initialize(this, description, expand, id, name, notificationSchemeEvents, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20062, null, [{
    key: "initialize",
    value: function initialize(obj, description, expand, id, name, notificationSchemeEvents, self) {
      obj['description'] = description;
      obj['expand'] = expand;
      obj['id'] = id;
      obj['name'] = name;
      obj['notificationSchemeEvents'] = notificationSchemeEvents;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20062</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062} The populated <code>InlineResponse20062</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20062();

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

  return InlineResponse20062;
}();
/**
 * @member {String} description
 */


InlineResponse20062.prototype['description'] = undefined;
/**
 * @member {String} expand
 */

InlineResponse20062.prototype['expand'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20062.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20062.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20061NotificationSchemeEvents>} notificationSchemeEvents
 */

InlineResponse20062.prototype['notificationSchemeEvents'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20062.prototype['self'] = undefined;
var _default = InlineResponse20062;
exports["default"] = _default;