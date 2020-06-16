"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterSubscription = _interopRequireDefault(require("./FilterSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FilterSubscriptionsList model module.
 * @module model/FilterSubscriptionsList
 * @version 1.4.0
 */
var FilterSubscriptionsList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterSubscriptionsList</code>.
   * A paginated list of subscriptions to a filter.
   * @alias module:model/FilterSubscriptionsList
   */
  function FilterSubscriptionsList() {
    _classCallCheck(this, FilterSubscriptionsList);

    FilterSubscriptionsList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterSubscriptionsList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FilterSubscriptionsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterSubscriptionsList} obj Optional instance to populate.
     * @return {module:model/FilterSubscriptionsList} The populated <code>FilterSubscriptionsList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterSubscriptionsList();

        if (data.hasOwnProperty('end-index')) {
          obj['end-index'] = _ApiClient["default"].convertToType(data['end-index'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_FilterSubscription["default"]]);
        }

        if (data.hasOwnProperty('max-results')) {
          obj['max-results'] = _ApiClient["default"].convertToType(data['max-results'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('start-index')) {
          obj['start-index'] = _ApiClient["default"].convertToType(data['start-index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FilterSubscriptionsList;
}();
/**
 * The index of the last item returned on the page.
 * @member {Number} end-index
 */


FilterSubscriptionsList.prototype['end-index'] = undefined;
/**
 * The list of items.
 * @member {Array.<module:model/FilterSubscription>} items
 */

FilterSubscriptionsList.prototype['items'] = undefined;
/**
 * The maximum number of results that could be on the page.
 * @member {Number} max-results
 */

FilterSubscriptionsList.prototype['max-results'] = undefined;
/**
 * The number of items on the page.
 * @member {Number} size
 */

FilterSubscriptionsList.prototype['size'] = undefined;
/**
 * The index of the first item returned on the page.
 * @member {Number} start-index
 */

FilterSubscriptionsList.prototype['start-index'] = undefined;
var _default = FilterSubscriptionsList;
exports["default"] = _default;