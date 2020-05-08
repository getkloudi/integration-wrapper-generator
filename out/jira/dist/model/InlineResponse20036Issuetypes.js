"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20036Fields = _interopRequireDefault(require("./InlineResponse20036Fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20036Issuetypes model module.
 * @module model/InlineResponse20036Issuetypes
 * @version 1.3.1
 */
var InlineResponse20036Issuetypes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20036Issuetypes</code>.
   * @alias module:model/InlineResponse20036Issuetypes
   * @param description {String} 
   * @param iconUrl {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   * @param subtask {Boolean} 
   */
  function InlineResponse20036Issuetypes(description, iconUrl, id, name, self, subtask) {
    _classCallCheck(this, InlineResponse20036Issuetypes);

    InlineResponse20036Issuetypes.initialize(this, description, iconUrl, id, name, self, subtask);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20036Issuetypes, null, [{
    key: "initialize",
    value: function initialize(obj, description, iconUrl, id, name, self, subtask) {
      obj['description'] = description;
      obj['iconUrl'] = iconUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
      obj['subtask'] = subtask;
    }
    /**
     * Constructs a <code>InlineResponse20036Issuetypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036Issuetypes} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036Issuetypes} The populated <code>InlineResponse20036Issuetypes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20036Issuetypes();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _InlineResponse20036Fields["default"].constructFromObject(data['fields']);
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

  return InlineResponse20036Issuetypes;
}();
/**
 * @member {String} description
 */


InlineResponse20036Issuetypes.prototype['description'] = undefined;
/**
 * @member {module:model/InlineResponse20036Fields} fields
 */

InlineResponse20036Issuetypes.prototype['fields'] = undefined;
/**
 * @member {String} iconUrl
 */

InlineResponse20036Issuetypes.prototype['iconUrl'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20036Issuetypes.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20036Issuetypes.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20036Issuetypes.prototype['self'] = undefined;
/**
 * @member {Boolean} subtask
 */

InlineResponse20036Issuetypes.prototype['subtask'] = undefined;
var _default = InlineResponse20036Issuetypes;
exports["default"] = _default;