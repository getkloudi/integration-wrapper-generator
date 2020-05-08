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
 * The InlineObject26 model module.
 * @module model/InlineObject26
 * @version 1.3.0
 */
var InlineObject26 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject26</code>.
   * @alias module:model/InlineObject26
   */
  function InlineObject26() {
    _classCallCheck(this, InlineObject26);

    InlineObject26.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject26, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject26</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject26} obj Optional instance to populate.
     * @return {module:model/InlineObject26} The populated <code>InlineObject26</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject26();

        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApiClient["default"].convertToType(data['application'], Object);
        }

        if (data.hasOwnProperty('globalId')) {
          obj['globalId'] = _ApiClient["default"].convertToType(data['globalId'], 'String');
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = _ApiClient["default"].convertToType(data['object'], Object);
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = _ApiClient["default"].convertToType(data['relationship'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject26;
}();
/**
 * The application the linked item is in.
 * @member {Object} application
 */


InlineObject26.prototype['application'] = undefined;
/**
 * The global ID of the link, such as the ID of the item on the remote system. The maximum length is 255 characters.
 * @member {String} globalId
 */

InlineObject26.prototype['globalId'] = undefined;
/**
 * The linked item.
 * @member {Object} object
 */

InlineObject26.prototype['object'] = undefined;
/**
 * Description of the relationship between the issue and the linked item.
 * @member {String} relationship
 */

InlineObject26.prototype['relationship'] = undefined;
var _default = InlineObject26;
exports["default"] = _default;