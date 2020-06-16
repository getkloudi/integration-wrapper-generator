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
 * The Priority model module.
 * @module model/Priority
 * @version 1.4.0
 */
var Priority = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Priority</code>.
   * An issue priority.
   * @alias module:model/Priority
   */
  function Priority() {
    _classCallCheck(this, Priority);

    Priority.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Priority, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Priority</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Priority} obj Optional instance to populate.
     * @return {module:model/Priority} The populated <code>Priority</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Priority();

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

        if (data.hasOwnProperty('statusColor')) {
          obj['statusColor'] = _ApiClient["default"].convertToType(data['statusColor'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Priority;
}();
/**
 * The description of the issue priority.
 * @member {String} description
 */


Priority.prototype['description'] = undefined;
/**
 * The URL of the icon for the issue priority.
 * @member {String} iconUrl
 */

Priority.prototype['iconUrl'] = undefined;
/**
 * The ID of the issue priority.
 * @member {String} id
 */

Priority.prototype['id'] = undefined;
/**
 * The name of the issue priority.
 * @member {String} name
 */

Priority.prototype['name'] = undefined;
/**
 * The URL of the issue priority.
 * @member {String} self
 */

Priority.prototype['self'] = undefined;
/**
 * The color used to indicate the issue priority.
 * @member {String} statusColor
 */

Priority.prototype['statusColor'] = undefined;
var _default = Priority;
exports["default"] = _default;