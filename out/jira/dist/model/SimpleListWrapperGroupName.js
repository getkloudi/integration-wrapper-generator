"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupName = _interopRequireDefault(require("./GroupName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SimpleListWrapperGroupName model module.
 * @module model/SimpleListWrapperGroupName
 * @version 1.4.0
 */
var SimpleListWrapperGroupName = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimpleListWrapperGroupName</code>.
   * @alias module:model/SimpleListWrapperGroupName
   */
  function SimpleListWrapperGroupName() {
    _classCallCheck(this, SimpleListWrapperGroupName);

    SimpleListWrapperGroupName.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimpleListWrapperGroupName, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SimpleListWrapperGroupName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleListWrapperGroupName} obj Optional instance to populate.
     * @return {module:model/SimpleListWrapperGroupName} The populated <code>SimpleListWrapperGroupName</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimpleListWrapperGroupName();

        if (data.hasOwnProperty('callback')) {
          obj['callback'] = _ApiClient["default"].convertToType(data['callback'], Object);
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_GroupName["default"]]);
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

  return SimpleListWrapperGroupName;
}();
/**
 * @member {Object} callback
 */


SimpleListWrapperGroupName.prototype['callback'] = undefined;
/**
 * @member {Array.<module:model/GroupName>} items
 */

SimpleListWrapperGroupName.prototype['items'] = undefined;
/**
 * @member {Number} max-results
 */

SimpleListWrapperGroupName.prototype['max-results'] = undefined;
/**
 * @member {Object} pagingCallback
 */

SimpleListWrapperGroupName.prototype['pagingCallback'] = undefined;
/**
 * @member {Number} size
 */

SimpleListWrapperGroupName.prototype['size'] = undefined;
var _default = SimpleListWrapperGroupName;
exports["default"] = _default;