"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterSubscriptionsList = _interopRequireDefault(require("./FilterSubscriptionsList"));

var _SharePermission = _interopRequireDefault(require("./SharePermission"));

var _User = _interopRequireDefault(require("./User"));

var _UserList = _interopRequireDefault(require("./UserList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Filter model module.
 * @module model/Filter
 * @version 1.4.0
 */
var Filter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Filter</code>.
   * Details about a filter.
   * @alias module:model/Filter
   * @param name {String} The name of the filter. Must be unique.
   */
  function Filter(name) {
    _classCallCheck(this, Filter);

    Filter.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Filter, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter} obj Optional instance to populate.
     * @return {module:model/Filter} The populated <code>Filter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Filter();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('favourite')) {
          obj['favourite'] = _ApiClient["default"].convertToType(data['favourite'], 'Boolean');
        }

        if (data.hasOwnProperty('favouritedCount')) {
          obj['favouritedCount'] = _ApiClient["default"].convertToType(data['favouritedCount'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('jql')) {
          obj['jql'] = _ApiClient["default"].convertToType(data['jql'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], _User["default"]);
        }

        if (data.hasOwnProperty('searchUrl')) {
          obj['searchUrl'] = _ApiClient["default"].convertToType(data['searchUrl'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('sharePermissions')) {
          obj['sharePermissions'] = _ApiClient["default"].convertToType(data['sharePermissions'], [_SharePermission["default"]]);
        }

        if (data.hasOwnProperty('sharedUsers')) {
          obj['sharedUsers'] = _ApiClient["default"].convertToType(data['sharedUsers'], _UserList["default"]);
        }

        if (data.hasOwnProperty('subscriptions')) {
          obj['subscriptions'] = _ApiClient["default"].convertToType(data['subscriptions'], _FilterSubscriptionsList["default"]);
        }

        if (data.hasOwnProperty('viewUrl')) {
          obj['viewUrl'] = _ApiClient["default"].convertToType(data['viewUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Filter;
}();
/**
 * A description of the filter.
 * @member {String} description
 */


Filter.prototype['description'] = undefined;
/**
 * Whether the filter is selected as a favorite.
 * @member {Boolean} favourite
 */

Filter.prototype['favourite'] = undefined;
/**
 * The count of how many users have selected this filter as a favorite, including the filter owner.
 * @member {Number} favouritedCount
 */

Filter.prototype['favouritedCount'] = undefined;
/**
 * The unique identifier for the filter.
 * @member {String} id
 */

Filter.prototype['id'] = undefined;
/**
 * The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
 * @member {String} jql
 */

Filter.prototype['jql'] = undefined;
/**
 * The name of the filter. Must be unique.
 * @member {String} name
 */

Filter.prototype['name'] = undefined;
/**
 * The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings.
 * @member {module:model/User} owner
 */

Filter.prototype['owner'] = undefined;
/**
 * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
 * @member {String} searchUrl
 */

Filter.prototype['searchUrl'] = undefined;
/**
 * The URL of the filter.
 * @member {String} self
 */

Filter.prototype['self'] = undefined;
/**
 * The groups and projects that the filter is shared with.
 * @member {Array.<module:model/SharePermission>} sharePermissions
 */

Filter.prototype['sharePermissions'] = undefined;
/**
 * A paginated list of the users that the filter is shared with. This includes users that are members of the groups or can browse the projects that the filter is shared with.
 * @member {module:model/UserList} sharedUsers
 */

Filter.prototype['sharedUsers'] = undefined;
/**
 * A paginated list of the users that are subscribed to the filter.
 * @member {module:model/FilterSubscriptionsList} subscriptions
 */

Filter.prototype['subscriptions'] = undefined;
/**
 * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
 * @member {String} viewUrl
 */

Filter.prototype['viewUrl'] = undefined;
var _default = Filter;
exports["default"] = _default;