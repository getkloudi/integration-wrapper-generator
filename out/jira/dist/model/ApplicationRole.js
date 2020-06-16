"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationRole model module.
 * @module model/ApplicationRole
 * @version 1.4.0
 */
var ApplicationRole = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationRole</code>.
   * Details of an application role.
   * @alias module:model/ApplicationRole
   */
  function ApplicationRole() {
    _classCallCheck(this, ApplicationRole);

    ApplicationRole.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationRole, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationRole} obj Optional instance to populate.
     * @return {module:model/ApplicationRole} The populated <code>ApplicationRole</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationRole();

        if (data.hasOwnProperty('defaultGroups')) {
          obj['defaultGroups'] = _ApiClient["default"].convertToType(data['defaultGroups'], ['String']);
        }

        if (data.hasOwnProperty('defined')) {
          obj['defined'] = _ApiClient["default"].convertToType(data['defined'], 'Boolean');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], ['String']);
        }

        if (data.hasOwnProperty('hasUnlimitedSeats')) {
          obj['hasUnlimitedSeats'] = _ApiClient["default"].convertToType(data['hasUnlimitedSeats'], 'Boolean');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('numberOfSeats')) {
          obj['numberOfSeats'] = _ApiClient["default"].convertToType(data['numberOfSeats'], 'Number');
        }

        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'Boolean');
        }

        if (data.hasOwnProperty('remainingSeats')) {
          obj['remainingSeats'] = _ApiClient["default"].convertToType(data['remainingSeats'], 'Number');
        }

        if (data.hasOwnProperty('selectedByDefault')) {
          obj['selectedByDefault'] = _ApiClient["default"].convertToType(data['selectedByDefault'], 'Boolean');
        }

        if (data.hasOwnProperty('userCount')) {
          obj['userCount'] = _ApiClient["default"].convertToType(data['userCount'], 'Number');
        }

        if (data.hasOwnProperty('userCountDescription')) {
          obj['userCountDescription'] = _ApiClient["default"].convertToType(data['userCountDescription'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicationRole;
}();
/**
 * The groups that are granted default access for this application role.
 * @member {Array.<String>} defaultGroups
 */


ApplicationRole.prototype['defaultGroups'] = undefined;
/**
 * Deprecated.
 * @member {Boolean} defined
 */

ApplicationRole.prototype['defined'] = undefined;
/**
 * The groups associated with the application role.
 * @member {Array.<String>} groups
 */

ApplicationRole.prototype['groups'] = undefined;
/**
 * @member {Boolean} hasUnlimitedSeats
 */

ApplicationRole.prototype['hasUnlimitedSeats'] = undefined;
/**
 * The key of the application role.
 * @member {String} key
 */

ApplicationRole.prototype['key'] = undefined;
/**
 * The display name of the application role.
 * @member {String} name
 */

ApplicationRole.prototype['name'] = undefined;
/**
 * The maximum count of users on your license.
 * @member {Number} numberOfSeats
 */

ApplicationRole.prototype['numberOfSeats'] = undefined;
/**
 * Indicates if the application role belongs to Jira platform (`jira-core`).
 * @member {Boolean} platform
 */

ApplicationRole.prototype['platform'] = undefined;
/**
 * The count of users remaining on your license.
 * @member {Number} remainingSeats
 */

ApplicationRole.prototype['remainingSeats'] = undefined;
/**
 * Determines whether this application role should be selected by default on user creation.
 * @member {Boolean} selectedByDefault
 */

ApplicationRole.prototype['selectedByDefault'] = undefined;
/**
 * The number of users counting against your license.
 * @member {Number} userCount
 */

ApplicationRole.prototype['userCount'] = undefined;
/**
 * The [type of users](https://confluence.atlassian.com/x/lRW3Ng) being counted against your license.
 * @member {String} userCountDescription
 */

ApplicationRole.prototype['userCountDescription'] = undefined;
var _default = ApplicationRole;
exports["default"] = _default;