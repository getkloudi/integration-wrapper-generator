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
 * The InlineResponse20034Groups model module.
 * @module model/InlineResponse20034Groups
 * @version 1.2.0
 */
var InlineResponse20034Groups = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20034Groups</code>.
   * @alias module:model/InlineResponse20034Groups
   * @param html {String} 
   * @param name {String} 
   */
  function InlineResponse20034Groups(html, name) {
    _classCallCheck(this, InlineResponse20034Groups);

    InlineResponse20034Groups.initialize(this, html, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20034Groups, null, [{
    key: "initialize",
    value: function initialize(obj, html, name) {
      obj['html'] = html;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineResponse20034Groups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20034Groups} obj Optional instance to populate.
     * @return {module:model/InlineResponse20034Groups} The populated <code>InlineResponse20034Groups</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20034Groups();

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20034Groups;
}();
/**
 * @member {String} html
 */


InlineResponse20034Groups.prototype['html'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20034Groups.prototype['name'] = undefined;
var _default = InlineResponse20034Groups;
exports["default"] = _default;