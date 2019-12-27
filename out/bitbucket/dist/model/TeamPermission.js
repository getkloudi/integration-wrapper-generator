"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Team = _interopRequireDefault(require("./Team"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TeamPermission model module.
 * @module model/TeamPermission
 * @version 1.1.0
 */
var TeamPermission =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TeamPermission</code>.
   * A user&#39;s permission for a given team.
   * @alias module:model/TeamPermission
   * @param type {String} 
   */
  function TeamPermission(type) {
    _classCallCheck(this, TeamPermission);

    TeamPermission.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TeamPermission, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>TeamPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamPermission} obj Optional instance to populate.
     * @return {module:model/TeamPermission} The populated <code>TeamPermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TeamPermission();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('team')) {
          obj['team'] = _Team["default"].constructFromObject(data['team']);
        }
      }

      return obj;
    }
  }]);

  return TeamPermission;
}();
/**
 * @member {String} type
 */


TeamPermission.prototype['type'] = undefined;
/**
 * @member {module:model/TeamPermission.PermissionEnum} permission
 */

TeamPermission.prototype['permission'] = undefined;
/**
 * @member {module:model/User} user
 */

TeamPermission.prototype['user'] = undefined;
/**
 * @member {module:model/Team} team
 */

TeamPermission.prototype['team'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

TeamPermission['PermissionEnum'] = {
  /**
   * value: "admin"
   * @const
   */
  "admin": "admin",

  /**
   * value: "collaborator"
   * @const
   */
  "collaborator": "collaborator"
};
var _default = TeamPermission;
exports["default"] = _default;