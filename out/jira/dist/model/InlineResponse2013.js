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
 * The InlineResponse2013 model module.
 * @module model/InlineResponse2013
 * @version 1.1.0
 */
var InlineResponse2013 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2013</code>.
   * 
   * @alias module:model/InlineResponse2013
   * @param id {String} 
   * @param key {String} 
   * @param self {String} 
   */
  function InlineResponse2013(id, key, self) {
    _classCallCheck(this, InlineResponse2013);

    InlineResponse2013.initialize(this, id, key, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2013, null, [{
    key: "initialize",
    value: function initialize(obj, id, key, self) {
      obj['id'] = id;
      obj['key'] = key;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse2013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2013} obj Optional instance to populate.
     * @return {module:model/InlineResponse2013} The populated <code>InlineResponse2013</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2013();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2013;
}();
/**
 * @member {String} id
 */


InlineResponse2013.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse2013.prototype['key'] = undefined;
/**
 * @member {String} self
 */

InlineResponse2013.prototype['self'] = undefined;
var _default = InlineResponse2013;
exports["default"] = _default;