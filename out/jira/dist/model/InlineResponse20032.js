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
 * The InlineResponse20032 model module.
 * @module model/InlineResponse20032
 * @version 1.0.0
 */
var InlineResponse20032 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20032</code>.
   * 
   * @alias module:model/InlineResponse20032
   * @param id {Number} 
   * @param type {String} 
   */
  function InlineResponse20032(id, type) {
    _classCallCheck(this, InlineResponse20032);

    InlineResponse20032.initialize(this, id, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20032, null, [{
    key: "initialize",
    value: function initialize(obj, id, type) {
      obj['id'] = id;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse20032</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20032} obj Optional instance to populate.
     * @return {module:model/InlineResponse20032} The populated <code>InlineResponse20032</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20032();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20032;
}();
/**
 * @member {Number} id
 */


InlineResponse20032.prototype['id'] = undefined;
/**
 * @member {String} type
 */

InlineResponse20032.prototype['type'] = undefined;
var _default = InlineResponse20032;
exports["default"] = _default;