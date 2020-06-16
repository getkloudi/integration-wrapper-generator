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
 * The RichText model module.
 * @module model/RichText
 * @version 1.4.0
 */
var RichText = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RichText</code>.
   * @alias module:model/RichText
   */
  function RichText() {
    _classCallCheck(this, RichText);

    RichText.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RichText, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RichText</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RichText} obj Optional instance to populate.
     * @return {module:model/RichText} The populated <code>RichText</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RichText();

        if (data.hasOwnProperty('emptyAdf')) {
          obj['emptyAdf'] = _ApiClient["default"].convertToType(data['emptyAdf'], 'Boolean');
        }

        if (data.hasOwnProperty('valueSet')) {
          obj['valueSet'] = _ApiClient["default"].convertToType(data['valueSet'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RichText;
}();
/**
 * @member {Boolean} emptyAdf
 */


RichText.prototype['emptyAdf'] = undefined;
/**
 * @member {Boolean} valueSet
 */

RichText.prototype['valueSet'] = undefined;
var _default = RichText;
exports["default"] = _default;