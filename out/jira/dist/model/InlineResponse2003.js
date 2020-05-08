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
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 1.1.0
 */
var InlineResponse2003 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2003</code>.
   * 
   * @alias module:model/InlineResponse2003
   * @param enabled {Boolean} 
   * @param uploadLimit {Number} 
   */
  function InlineResponse2003(enabled, uploadLimit) {
    _classCallCheck(this, InlineResponse2003);

    InlineResponse2003.initialize(this, enabled, uploadLimit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2003, null, [{
    key: "initialize",
    value: function initialize(obj, enabled, uploadLimit) {
      obj['enabled'] = enabled;
      obj['uploadLimit'] = uploadLimit;
    }
    /**
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2003();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('uploadLimit')) {
          obj['uploadLimit'] = _ApiClient["default"].convertToType(data['uploadLimit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2003;
}();
/**
 * @member {Boolean} enabled
 */


InlineResponse2003.prototype['enabled'] = undefined;
/**
 * @member {Number} uploadLimit
 */

InlineResponse2003.prototype['uploadLimit'] = undefined;
var _default = InlineResponse2003;
exports["default"] = _default;