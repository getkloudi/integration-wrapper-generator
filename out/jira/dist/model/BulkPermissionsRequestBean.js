"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BulkProjectPermissions = _interopRequireDefault(require("./BulkProjectPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BulkPermissionsRequestBean model module.
 * @module model/BulkPermissionsRequestBean
 * @version 1.4.0
 */
var BulkPermissionsRequestBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BulkPermissionsRequestBean</code>.
   * Details of global permissions to look up and project permissions with associated projects and issues to look up.
   * @alias module:model/BulkPermissionsRequestBean
   */
  function BulkPermissionsRequestBean() {
    _classCallCheck(this, BulkPermissionsRequestBean);

    BulkPermissionsRequestBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BulkPermissionsRequestBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BulkPermissionsRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkPermissionsRequestBean} obj Optional instance to populate.
     * @return {module:model/BulkPermissionsRequestBean} The populated <code>BulkPermissionsRequestBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BulkPermissionsRequestBean();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('globalPermissions')) {
          obj['globalPermissions'] = _ApiClient["default"].convertToType(data['globalPermissions'], ['String']);
        }

        if (data.hasOwnProperty('projectPermissions')) {
          obj['projectPermissions'] = _ApiClient["default"].convertToType(data['projectPermissions'], [_BulkProjectPermissions["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BulkPermissionsRequestBean;
}();
/**
 * The account ID of a user.
 * @member {String} accountId
 */


BulkPermissionsRequestBean.prototype['accountId'] = undefined;
/**
 * Global permissions to look up.
 * @member {Array.<String>} globalPermissions
 */

BulkPermissionsRequestBean.prototype['globalPermissions'] = undefined;
/**
 * Project permissions with associated projects and issues to look up.
 * @member {Array.<module:model/BulkProjectPermissions>} projectPermissions
 */

BulkPermissionsRequestBean.prototype['projectPermissions'] = undefined;
var _default = BulkPermissionsRequestBean;
exports["default"] = _default;