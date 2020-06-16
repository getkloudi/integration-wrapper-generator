"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SharePermission = _interopRequireDefault(require("./SharePermission"));

var _UserBean = _interopRequireDefault(require("./UserBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Dashboard model module.
 * @module model/Dashboard
 * @version 1.4.0
 */
var Dashboard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Dashboard</code>.
   * Details of a dashboard.
   * @alias module:model/Dashboard
   */
  function Dashboard() {
    _classCallCheck(this, Dashboard);

    Dashboard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Dashboard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Dashboard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dashboard} obj Optional instance to populate.
     * @return {module:model/Dashboard} The populated <code>Dashboard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Dashboard();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isFavourite')) {
          obj['isFavourite'] = _ApiClient["default"].convertToType(data['isFavourite'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], _UserBean["default"]);
        }

        if (data.hasOwnProperty('popularity')) {
          obj['popularity'] = _ApiClient["default"].convertToType(data['popularity'], 'Number');
        }

        if (data.hasOwnProperty('rank')) {
          obj['rank'] = _ApiClient["default"].convertToType(data['rank'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('sharePermissions')) {
          obj['sharePermissions'] = _ApiClient["default"].convertToType(data['sharePermissions'], [_SharePermission["default"]]);
        }

        if (data.hasOwnProperty('view')) {
          obj['view'] = _ApiClient["default"].convertToType(data['view'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Dashboard;
}();
/**
 * @member {String} description
 */


Dashboard.prototype['description'] = undefined;
/**
 * The ID of the dashboard.
 * @member {String} id
 */

Dashboard.prototype['id'] = undefined;
/**
 * Whether the dashboard is selected as a favorite by the user.
 * @member {Boolean} isFavourite
 */

Dashboard.prototype['isFavourite'] = undefined;
/**
 * The name of the dashboard.
 * @member {String} name
 */

Dashboard.prototype['name'] = undefined;
/**
 * The owner of the dashboard.
 * @member {module:model/UserBean} owner
 */

Dashboard.prototype['owner'] = undefined;
/**
 * The number of users who have this dashboard as a favorite.
 * @member {Number} popularity
 */

Dashboard.prototype['popularity'] = undefined;
/**
 * The rank of this dashboard.
 * @member {Number} rank
 */

Dashboard.prototype['rank'] = undefined;
/**
 * The URL of these dashboard details.
 * @member {String} self
 */

Dashboard.prototype['self'] = undefined;
/**
 * The details of any share permissions for the dashboard.
 * @member {Array.<module:model/SharePermission>} sharePermissions
 */

Dashboard.prototype['sharePermissions'] = undefined;
/**
 * The URL of the dashboard.
 * @member {String} view
 */

Dashboard.prototype['view'] = undefined;
var _default = Dashboard;
exports["default"] = _default;