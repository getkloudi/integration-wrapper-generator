"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Dashboard = _interopRequireDefault(require("./Dashboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PageOfDashboards model module.
 * @module model/PageOfDashboards
 * @version 1.4.0
 */
var PageOfDashboards = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PageOfDashboards</code>.
   * A page containing dashboard details.
   * @alias module:model/PageOfDashboards
   */
  function PageOfDashboards() {
    _classCallCheck(this, PageOfDashboards);

    PageOfDashboards.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PageOfDashboards, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PageOfDashboards</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageOfDashboards} obj Optional instance to populate.
     * @return {module:model/PageOfDashboards} The populated <code>PageOfDashboards</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PageOfDashboards();

        if (data.hasOwnProperty('dashboards')) {
          obj['dashboards'] = _ApiClient["default"].convertToType(data['dashboards'], [_Dashboard["default"]]);
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('prev')) {
          obj['prev'] = _ApiClient["default"].convertToType(data['prev'], 'String');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PageOfDashboards;
}();
/**
 * List of dashboards.
 * @member {Array.<module:model/Dashboard>} dashboards
 */


PageOfDashboards.prototype['dashboards'] = undefined;
/**
 * The maximum number of results that could be on the page.
 * @member {Number} maxResults
 */

PageOfDashboards.prototype['maxResults'] = undefined;
/**
 * The URL of the next page of results, if any.
 * @member {String} next
 */

PageOfDashboards.prototype['next'] = undefined;
/**
 * The URL of the previous page of results, if any.
 * @member {String} prev
 */

PageOfDashboards.prototype['prev'] = undefined;
/**
 * The index of the first item returned on the page.
 * @member {Number} startAt
 */

PageOfDashboards.prototype['startAt'] = undefined;
/**
 * The number of results on the page.
 * @member {Number} total
 */

PageOfDashboards.prototype['total'] = undefined;
var _default = PageOfDashboards;
exports["default"] = _default;