"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JqlQueryField = _interopRequireDefault(require("./JqlQueryField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JqlQueryOrderByClauseElement model module.
 * @module model/JqlQueryOrderByClauseElement
 * @version 1.4.0
 */
var JqlQueryOrderByClauseElement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JqlQueryOrderByClauseElement</code>.
   * An element of the order-by JQL clause.
   * @alias module:model/JqlQueryOrderByClauseElement
   */
  function JqlQueryOrderByClauseElement() {
    _classCallCheck(this, JqlQueryOrderByClauseElement);

    JqlQueryOrderByClauseElement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JqlQueryOrderByClauseElement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JqlQueryOrderByClauseElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQueryOrderByClauseElement} obj Optional instance to populate.
     * @return {module:model/JqlQueryOrderByClauseElement} The populated <code>JqlQueryOrderByClauseElement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JqlQueryOrderByClauseElement();

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('field')) {
          obj['field'] = _JqlQueryField["default"].constructFromObject(data['field']);
        }
      }

      return obj;
    }
  }]);

  return JqlQueryOrderByClauseElement;
}();
/**
 * The direction in which to order the results.
 * @member {module:model/JqlQueryOrderByClauseElement.DirectionEnum} direction
 */


JqlQueryOrderByClauseElement.prototype['direction'] = undefined;
/**
 * @member {module:model/JqlQueryField} field
 */

JqlQueryOrderByClauseElement.prototype['field'] = undefined;
/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */

JqlQueryOrderByClauseElement['DirectionEnum'] = {
  /**
   * value: "asc"
   * @const
   */
  "asc": "asc",

  /**
   * value: "desc"
   * @const
   */
  "desc": "desc"
};
var _default = JqlQueryOrderByClauseElement;
exports["default"] = _default;