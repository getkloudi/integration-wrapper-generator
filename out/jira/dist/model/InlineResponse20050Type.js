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
 * The InlineResponse20050Type model module.
 * @module model/InlineResponse20050Type
 * @version 1.3.1
 */
var InlineResponse20050Type = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050Type</code>.
   * @alias module:model/InlineResponse20050Type
   * @param id {String} 
   * @param inward {String} 
   * @param name {String} 
   * @param outward {String} 
   * @param self {String} 
   */
  function InlineResponse20050Type(id, inward, name, outward, self) {
    _classCallCheck(this, InlineResponse20050Type);

    InlineResponse20050Type.initialize(this, id, inward, name, outward, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050Type, null, [{
    key: "initialize",
    value: function initialize(obj, id, inward, name, outward, self) {
      obj['id'] = id;
      obj['inward'] = inward;
      obj['name'] = name;
      obj['outward'] = outward;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20050Type</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050Type} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050Type} The populated <code>InlineResponse20050Type</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050Type();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('inward')) {
          obj['inward'] = _ApiClient["default"].convertToType(data['inward'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('outward')) {
          obj['outward'] = _ApiClient["default"].convertToType(data['outward'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20050Type;
}();
/**
 * @member {String} id
 */


InlineResponse20050Type.prototype['id'] = undefined;
/**
 * @member {String} inward
 */

InlineResponse20050Type.prototype['inward'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20050Type.prototype['name'] = undefined;
/**
 * @member {String} outward
 */

InlineResponse20050Type.prototype['outward'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20050Type.prototype['self'] = undefined;
var _default = InlineResponse20050Type;
exports["default"] = _default;