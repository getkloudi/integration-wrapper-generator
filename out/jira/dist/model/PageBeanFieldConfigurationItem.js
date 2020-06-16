"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FieldConfigurationItem = _interopRequireDefault(require("./FieldConfigurationItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PageBeanFieldConfigurationItem model module.
 * @module model/PageBeanFieldConfigurationItem
 * @version 1.4.0
 */
var PageBeanFieldConfigurationItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PageBeanFieldConfigurationItem</code>.
   * A page of items.
   * @alias module:model/PageBeanFieldConfigurationItem
   */
  function PageBeanFieldConfigurationItem() {
    _classCallCheck(this, PageBeanFieldConfigurationItem);

    PageBeanFieldConfigurationItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PageBeanFieldConfigurationItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PageBeanFieldConfigurationItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageBeanFieldConfigurationItem} obj Optional instance to populate.
     * @return {module:model/PageBeanFieldConfigurationItem} The populated <code>PageBeanFieldConfigurationItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PageBeanFieldConfigurationItem();

        if (data.hasOwnProperty('isLast')) {
          obj['isLast'] = _ApiClient["default"].convertToType(data['isLast'], 'Boolean');
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('nextPage')) {
          obj['nextPage'] = _ApiClient["default"].convertToType(data['nextPage'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_FieldConfigurationItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PageBeanFieldConfigurationItem;
}();
/**
 * Whether this is the last page.
 * @member {Boolean} isLast
 */


PageBeanFieldConfigurationItem.prototype['isLast'] = undefined;
/**
 * The maximum number of items that could be returned.
 * @member {Number} maxResults
 */

PageBeanFieldConfigurationItem.prototype['maxResults'] = undefined;
/**
 * If there is another page of results, the URL of the next page.
 * @member {String} nextPage
 */

PageBeanFieldConfigurationItem.prototype['nextPage'] = undefined;
/**
 * The URL of the page.
 * @member {String} self
 */

PageBeanFieldConfigurationItem.prototype['self'] = undefined;
/**
 * The index of the first item returned.
 * @member {Number} startAt
 */

PageBeanFieldConfigurationItem.prototype['startAt'] = undefined;
/**
 * The number of items returned.
 * @member {Number} total
 */

PageBeanFieldConfigurationItem.prototype['total'] = undefined;
/**
 * The list of items.
 * @member {Array.<module:model/FieldConfigurationItem>} values
 */

PageBeanFieldConfigurationItem.prototype['values'] = undefined;
var _default = PageBeanFieldConfigurationItem;
exports["default"] = _default;