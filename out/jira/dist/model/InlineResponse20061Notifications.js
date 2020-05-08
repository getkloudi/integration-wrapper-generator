"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20018Group = _interopRequireDefault(require("./InlineResponse20018Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20061Notifications model module.
 * @module model/InlineResponse20061Notifications
 * @version 1.3.1
 */
var InlineResponse20061Notifications = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20061Notifications</code>.
   * @alias module:model/InlineResponse20061Notifications
   * @param expand {String} 
   * @param id {Number} 
   * @param notificationType {String} 
   * @param parameter {String} 
   */
  function InlineResponse20061Notifications(expand, id, notificationType, parameter) {
    _classCallCheck(this, InlineResponse20061Notifications);

    InlineResponse20061Notifications.initialize(this, expand, id, notificationType, parameter);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20061Notifications, null, [{
    key: "initialize",
    value: function initialize(obj, expand, id, notificationType, parameter) {
      obj['expand'] = expand;
      obj['id'] = id;
      obj['notificationType'] = notificationType;
      obj['parameter'] = parameter;
    }
    /**
     * Constructs a <code>InlineResponse20061Notifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20061Notifications} obj Optional instance to populate.
     * @return {module:model/InlineResponse20061Notifications} The populated <code>InlineResponse20061Notifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20061Notifications();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('group')) {
          obj['group'] = _InlineResponse20018Group["default"].constructFromObject(data['group']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('notificationType')) {
          obj['notificationType'] = _ApiClient["default"].convertToType(data['notificationType'], 'String');
        }

        if (data.hasOwnProperty('parameter')) {
          obj['parameter'] = _ApiClient["default"].convertToType(data['parameter'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20061Notifications;
}();
/**
 * @member {String} expand
 */


InlineResponse20061Notifications.prototype['expand'] = undefined;
/**
 * @member {module:model/InlineResponse20018Group} group
 */

InlineResponse20061Notifications.prototype['group'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20061Notifications.prototype['id'] = undefined;
/**
 * @member {String} notificationType
 */

InlineResponse20061Notifications.prototype['notificationType'] = undefined;
/**
 * @member {String} parameter
 */

InlineResponse20061Notifications.prototype['parameter'] = undefined;
var _default = InlineResponse20061Notifications;
exports["default"] = _default;