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
 * The InlineObject25 model module.
 * @module model/InlineObject25
 * @version 1.0.0
 */
var InlineObject25 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject25</code>.
   * @alias module:model/InlineObject25
   */
  function InlineObject25() {
    _classCallCheck(this, InlineObject25);

    InlineObject25.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject25, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject25</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject25} obj Optional instance to populate.
     * @return {module:model/InlineObject25} The populated <code>InlineObject25</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject25();

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

  return InlineObject25;
}();
/**
 * The application the linked item is in.
 * @member {Object} application
 */


InlineObject25.prototype['application'] = undefined;
/**
 * The global ID of the link, such as the ID of the item on the remote system. The maximum length is 255 characters.
 * @member {String} globalId
 */

InlineObject25.prototype['globalId'] = undefined;
/**
 * The linked item.
 * @member {Object} object
 */

InlineObject25.prototype['object'] = undefined;
/**
 * Description of the relationship between the issue and the linked item.
 * @member {String} relationship
 */

InlineObject25.prototype['relationship'] = undefined;
var _default = InlineObject25;
exports["default"] = _default;