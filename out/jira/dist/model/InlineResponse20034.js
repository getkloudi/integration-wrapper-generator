"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20034Groups = _interopRequireDefault(require("./InlineResponse20034Groups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20034 model module.
 * @module model/InlineResponse20034
 * @version 1.3.0
 */
var InlineResponse20034 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20034</code>.
   * 
   * @alias module:model/InlineResponse20034
   * @param groups {Array.<module:model/InlineResponse20034Groups>} 
   * @param header {String} 
   * @param total {Number} 
   */
  function InlineResponse20034(groups, header, total) {
    _classCallCheck(this, InlineResponse20034);

    InlineResponse20034.initialize(this, groups, header, total);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20034, null, [{
    key: "initialize",
    value: function initialize(obj, groups, header, total) {
      obj['groups'] = groups;
      obj['header'] = header;
      obj['total'] = total;
    }
    /**
     * Constructs a <code>InlineResponse20034</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20034} obj Optional instance to populate.
     * @return {module:model/InlineResponse20034} The populated <code>InlineResponse20034</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20034();

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_InlineResponse20034Groups["default"]]);
        }

        if (data.hasOwnProperty('header')) {
          obj['header'] = _ApiClient["default"].convertToType(data['header'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20034;
}();
/**
 * @member {Array.<module:model/InlineResponse20034Groups>} groups
 */


InlineResponse20034.prototype['groups'] = undefined;
/**
 * @member {String} header
 */

InlineResponse20034.prototype['header'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse20034.prototype['total'] = undefined;
var _default = InlineResponse20034;
exports["default"] = _default;