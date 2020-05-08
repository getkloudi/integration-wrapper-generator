"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20045ToStatusCategory = _interopRequireDefault(require("./InlineResponse20045ToStatusCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20089 model module.
 * @module model/InlineResponse20089
 * @version 1.3.0
 */
var InlineResponse20089 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20089</code>.
   * 
   * @alias module:model/InlineResponse20089
   * @param description {String} 
   * @param iconUrl {String} 
   * @param id {String} 
   * @param name {String} 
   * @param self {String} 
   * @param statusCategory {module:model/InlineResponse20045ToStatusCategory} 
   */
  function InlineResponse20089(description, iconUrl, id, name, self, statusCategory) {
    _classCallCheck(this, InlineResponse20089);

    InlineResponse20089.initialize(this, description, iconUrl, id, name, self, statusCategory);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20089, null, [{
    key: "initialize",
    value: function initialize(obj, description, iconUrl, id, name, self, statusCategory) {
      obj['description'] = description;
      obj['iconUrl'] = iconUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['self'] = self;
      obj['statusCategory'] = statusCategory;
    }
    /**
     * Constructs a <code>InlineResponse20089</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20089} obj Optional instance to populate.
     * @return {module:model/InlineResponse20089} The populated <code>InlineResponse20089</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20089();

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

        if (data.hasOwnProperty('statusCategory')) {
          obj['statusCategory'] = _InlineResponse20045ToStatusCategory["default"].constructFromObject(data['statusCategory']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20089;
}();
/**
 * @member {String} description
 */


InlineResponse20089.prototype['description'] = undefined;
/**
 * @member {String} iconUrl
 */

InlineResponse20089.prototype['iconUrl'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20089.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20089.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20089.prototype['self'] = undefined;
/**
 * @member {module:model/InlineResponse20045ToStatusCategory} statusCategory
 */

InlineResponse20089.prototype['statusCategory'] = undefined;
var _default = InlineResponse20089;
exports["default"] = _default;