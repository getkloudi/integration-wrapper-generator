"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProjectRoleGroup = _interopRequireDefault(require("./ProjectRoleGroup"));

var _ProjectRoleUser = _interopRequireDefault(require("./ProjectRoleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RoleActor model module.
 * @module model/RoleActor
 * @version 1.4.0
 */
var RoleActor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RoleActor</code>.
   * Details about a user assigned to a project role.
   * @alias module:model/RoleActor
   */
  function RoleActor() {
    _classCallCheck(this, RoleActor);

    RoleActor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RoleActor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RoleActor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleActor} obj Optional instance to populate.
     * @return {module:model/RoleActor} The populated <code>RoleActor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RoleActor();

        if (data.hasOwnProperty('actorGroup')) {
          obj['actorGroup'] = _ApiClient["default"].convertToType(data['actorGroup'], _ProjectRoleGroup["default"]);
        }

        if (data.hasOwnProperty('actorUser')) {
          obj['actorUser'] = _ApiClient["default"].convertToType(data['actorUser'], _ProjectRoleUser["default"]);
        }

        if (data.hasOwnProperty('avatarUrl')) {
          obj['avatarUrl'] = _ApiClient["default"].convertToType(data['avatarUrl'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RoleActor;
}();
/**
 * @member {module:model/ProjectRoleGroup} actorGroup
 */


RoleActor.prototype['actorGroup'] = undefined;
/**
 * @member {module:model/ProjectRoleUser} actorUser
 */

RoleActor.prototype['actorUser'] = undefined;
/**
 * The avatar of the role actor.
 * @member {String} avatarUrl
 */

RoleActor.prototype['avatarUrl'] = undefined;
/**
 * The display name of the role actor. For users, depending on the user’s privacy setting, this may return an alternative value for the user's name.
 * @member {String} displayName
 */

RoleActor.prototype['displayName'] = undefined;
/**
 * The ID of the role actor.
 * @member {Number} id
 */

RoleActor.prototype['id'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */

RoleActor.prototype['name'] = undefined;
/**
 * The type of role actor.
 * @member {module:model/RoleActor.TypeEnum} type
 */

RoleActor.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

RoleActor['TypeEnum'] = {
  /**
   * value: "atlassian-group-role-actor"
   * @const
   */
  "group-role-actor": "atlassian-group-role-actor",

  /**
   * value: "atlassian-user-role-actor"
   * @const
   */
  "user-role-actor": "atlassian-user-role-actor"
};
var _default = RoleActor;
exports["default"] = _default;