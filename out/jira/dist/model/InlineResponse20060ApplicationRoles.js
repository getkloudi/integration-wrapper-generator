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
 * The InlineResponse20060ApplicationRoles model module.
 * @module model/InlineResponse20060ApplicationRoles
 * @version 1.1.0
 */
var InlineResponse20060ApplicationRoles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20060ApplicationRoles</code>.
   * @alias module:model/InlineResponse20060ApplicationRoles
   * @param items {Array.<Object>} 
   * @param size {Number} 
   */
  function InlineResponse20060ApplicationRoles(items, size) {
    _classCallCheck(this, InlineResponse20060ApplicationRoles);

    InlineResponse20060ApplicationRoles.initialize(this, items, size);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20060ApplicationRoles, null, [{
    key: "initialize",
    value: function initialize(obj, items, size) {
      obj['items'] = items;
      obj['size'] = size;
    }
    /**
     * Constructs a <code>InlineResponse20060ApplicationRoles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20060ApplicationRoles} obj Optional instance to populate.
     * @return {module:model/InlineResponse20060ApplicationRoles} The populated <code>InlineResponse20060ApplicationRoles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20060ApplicationRoles();

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [Object]);
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20060ApplicationRoles;
}();
/**
 * @member {Array.<Object>} items
 */


InlineResponse20060ApplicationRoles.prototype['items'] = undefined;
/**
 * @member {Number} size
 */

InlineResponse20060ApplicationRoles.prototype['size'] = undefined;
var _default = InlineResponse20060ApplicationRoles;
exports["default"] = _default;