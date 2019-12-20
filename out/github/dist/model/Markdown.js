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
 * The Markdown model module.
 * @module model/Markdown
 * @version 1.3.1
 */
var Markdown =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Markdown</code>.
   * @alias module:model/Markdown
   */
  function Markdown() {
    _classCallCheck(this, Markdown);

    Markdown.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Markdown, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Markdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Markdown} obj Optional instance to populate.
     * @return {module:model/Markdown} The populated <code>Markdown</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Markdown();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Markdown;
}();
/**
 * @member {String} context
 */


Markdown.prototype['context'] = undefined;
/**
 * @member {String} mode
 */

Markdown.prototype['mode'] = undefined;
/**
 * @member {String} text
 */

Markdown.prototype['text'] = undefined;
var _default = Markdown;
exports["default"] = _default;