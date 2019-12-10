"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Note = _interopRequireDefault(require("./Note"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Event model module.
 * @module model/Event
 * @version 1.0.0
 */
var Event =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Event</code>.
   * This feature was introduced in GitLab 8.13.
   * @alias module:model/Event
   */
  function Event() {
    _classCallCheck(this, Event);

    Event.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Event, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Event();

        if (data.hasOwnProperty('action_name')) {
          obj['action_name'] = _ApiClient["default"].convertToType(data['action_name'], 'String');
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('author_id')) {
          obj['author_id'] = _ApiClient["default"].convertToType(data['author_id'], 'String');
        }

        if (data.hasOwnProperty('author_username')) {
          obj['author_username'] = _ApiClient["default"].convertToType(data['author_username'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _Note["default"].constructFromObject(data['note']);
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('target_id')) {
          obj['target_id'] = _ApiClient["default"].convertToType(data['target_id'], 'String');
        }

        if (data.hasOwnProperty('target_title')) {
          obj['target_title'] = _ApiClient["default"].convertToType(data['target_title'], 'String');
        }

        if (data.hasOwnProperty('target_type')) {
          obj['target_type'] = _ApiClient["default"].convertToType(data['target_type'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Event;
}();
/**
 * @member {String} action_name
 */


Event.prototype['action_name'] = undefined;
/**
 * @member {module:model/UserBasic} author
 */

Event.prototype['author'] = undefined;
/**
 * @member {String} author_id
 */

Event.prototype['author_id'] = undefined;
/**
 * @member {String} author_username
 */

Event.prototype['author_username'] = undefined;
/**
 * @member {String} created_at
 */

Event.prototype['created_at'] = undefined;
/**
 * @member {String} data
 */

Event.prototype['data'] = undefined;
/**
 * @member {module:model/Note} note
 */

Event.prototype['note'] = undefined;
/**
 * @member {String} project_id
 */

Event.prototype['project_id'] = undefined;
/**
 * @member {String} target_id
 */

Event.prototype['target_id'] = undefined;
/**
 * @member {String} target_title
 */

Event.prototype['target_title'] = undefined;
/**
 * @member {String} target_type
 */

Event.prototype['target_type'] = undefined;
/**
 * @member {String} title
 */

Event.prototype['title'] = undefined;
var _default = Event;
exports["default"] = _default;