"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SharePermission = _interopRequireDefault(require("./SharePermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DashboardRequest model module.
 * @module model/DashboardRequest
 * @version 1.4.0
 */
var DashboardRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DashboardRequest</code>.
   * Details of a dashboard.
   * @alias module:model/DashboardRequest
   */
  function DashboardRequest() {
    _classCallCheck(this, DashboardRequest);

    DashboardRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DashboardRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DashboardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardRequest} obj Optional instance to populate.
     * @return {module:model/DashboardRequest} The populated <code>DashboardRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DashboardRequest();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('sharePermissions')) {
          obj['sharePermissions'] = _ApiClient["default"].convertToType(data['sharePermissions'], [_SharePermission["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DashboardRequest;
}();
/**
 * @member {String} description
 */


DashboardRequest.prototype['description'] = undefined;
/**
 * The name of the dashboard.
 * @member {String} name
 */

DashboardRequest.prototype['name'] = undefined;
/**
 * The details of any share permissions for the dashboard.
 * @member {Array.<module:model/SharePermission>} sharePermissions
 */

DashboardRequest.prototype['sharePermissions'] = undefined;
var _default = DashboardRequest;
exports["default"] = _default;