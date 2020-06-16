"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationRole = _interopRequireDefault(require("./ApplicationRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SimpleListWrapperApplicationRole model module.
 * @module model/SimpleListWrapperApplicationRole
 * @version 1.4.0
 */
var SimpleListWrapperApplicationRole = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimpleListWrapperApplicationRole</code>.
   * @alias module:model/SimpleListWrapperApplicationRole
   */
  function SimpleListWrapperApplicationRole() {
    _classCallCheck(this, SimpleListWrapperApplicationRole);

    SimpleListWrapperApplicationRole.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimpleListWrapperApplicationRole, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SimpleListWrapperApplicationRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleListWrapperApplicationRole} obj Optional instance to populate.
     * @return {module:model/SimpleListWrapperApplicationRole} The populated <code>SimpleListWrapperApplicationRole</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimpleListWrapperApplicationRole();

        if (data.hasOwnProperty('callback')) {
          obj['callback'] = _ApiClient["default"].convertToType(data['callback'], Object);
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ApplicationRole["default"]]);
        }

        if (data.hasOwnProperty('max-results')) {
          obj['max-results'] = _ApiClient["default"].convertToType(data['max-results'], 'Number');
        }

        if (data.hasOwnProperty('pagingCallback')) {
          obj['pagingCallback'] = _ApiClient["default"].convertToType(data['pagingCallback'], Object);
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SimpleListWrapperApplicationRole;
}();
/**
 * @member {Object} callback
 */


SimpleListWrapperApplicationRole.prototype['callback'] = undefined;
/**
 * @member {Array.<module:model/ApplicationRole>} items
 */

SimpleListWrapperApplicationRole.prototype['items'] = undefined;
/**
 * @member {Number} max-results
 */

SimpleListWrapperApplicationRole.prototype['max-results'] = undefined;
/**
 * @member {Object} pagingCallback
 */

SimpleListWrapperApplicationRole.prototype['pagingCallback'] = undefined;
/**
 * @member {Number} size
 */

SimpleListWrapperApplicationRole.prototype['size'] = undefined;
var _default = SimpleListWrapperApplicationRole;
exports["default"] = _default;