"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterSubscription = _interopRequireDefault(require("./FilterSubscription"));

var _SharePermission = _interopRequireDefault(require("./SharePermission"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FoundFilter model module.
 * @module model/FoundFilter
 * @version 1.4.0
 */
var FoundFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FoundFilter</code>.
   * Details of a filter identified as part of a search.
   * @alias module:model/FoundFilter
   * @param name {String} The name of the filter. Must be unique.
   */
  function FoundFilter(name) {
    _classCallCheck(this, FoundFilter);

    FoundFilter.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FoundFilter, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>FoundFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FoundFilter} obj Optional instance to populate.
     * @return {module:model/FoundFilter} The populated <code>FoundFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FoundFilter();

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

        if (data.hasOwnProperty('subscriptions')) {
          obj['subscriptions'] = _ApiClient["default"].convertToType(data['subscriptions'], [_FilterSubscription["default"]]);
        }

        if (data.hasOwnProperty('viewUrl')) {
          obj['viewUrl'] = _ApiClient["default"].convertToType(data['viewUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FoundFilter;
}();
/**
 * A description of the filter.
 * @member {String} description
 */


FoundFilter.prototype['description'] = undefined;
/**
 * Whether the filter is selected as a favorite by any users, not including the filter owner.
 * @member {Boolean} favourite
 */

FoundFilter.prototype['favourite'] = undefined;
/**
 * The count of how many users have selected this filter as a favorite, including the filter owner.
 * @member {Number} favouritedCount
 */

FoundFilter.prototype['favouritedCount'] = undefined;
/**
 * The unique identifier for the filter.
 * @member {String} id
 */

FoundFilter.prototype['id'] = undefined;
/**
 * The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
 * @member {String} jql
 */

FoundFilter.prototype['jql'] = undefined;
/**
 * The name of the filter. Must be unique.
 * @member {String} name
 */

FoundFilter.prototype['name'] = undefined;
/**
 * The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings.
 * @member {module:model/User} owner
 */

FoundFilter.prototype['owner'] = undefined;
/**
 * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
 * @member {String} searchUrl
 */

FoundFilter.prototype['searchUrl'] = undefined;
/**
 * The URL of the filter.
 * @member {String} self
 */

FoundFilter.prototype['self'] = undefined;
/**
 * The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
 * @member {Array.<module:model/SharePermission>} sharePermissions
 */

FoundFilter.prototype['sharePermissions'] = undefined;
/**
 * The users that are subscribed to the filter.
 * @member {Array.<module:model/FilterSubscription>} subscriptions
 */

FoundFilter.prototype['subscriptions'] = undefined;
/**
 * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
 * @member {String} viewUrl
 */

FoundFilter.prototype['viewUrl'] = undefined;
var _default = FoundFilter;
exports["default"] = _default;