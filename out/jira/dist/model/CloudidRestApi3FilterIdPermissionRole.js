"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3FilterIdPermissionRoleActors = _interopRequireDefault(require("./CloudidRestApi3FilterIdPermissionRoleActors"));

var _CloudidRestApi3FilterIdPermissionRoleScope = _interopRequireDefault(require("./CloudidRestApi3FilterIdPermissionRoleScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CloudidRestApi3FilterIdPermissionRole model module.
 * @module model/CloudidRestApi3FilterIdPermissionRole
 * @version 1.1.0
 */
var CloudidRestApi3FilterIdPermissionRole = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3FilterIdPermissionRole</code>.
   * @alias module:model/CloudidRestApi3FilterIdPermissionRole
   * @param actors {Array.<module:model/CloudidRestApi3FilterIdPermissionRoleActors>} 
   * @param description {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param scope {module:model/CloudidRestApi3FilterIdPermissionRoleScope} 
   * @param self {String} 
   */
  function CloudidRestApi3FilterIdPermissionRole(actors, description, id, name, scope, self) {
    _classCallCheck(this, CloudidRestApi3FilterIdPermissionRole);

    CloudidRestApi3FilterIdPermissionRole.initialize(this, actors, description, id, name, scope, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3FilterIdPermissionRole, null, [{
    key: "initialize",
    value: function initialize(obj, actors, description, id, name, scope, self) {
      obj['actors'] = actors;
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['scope'] = scope;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>CloudidRestApi3FilterIdPermissionRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3FilterIdPermissionRole} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3FilterIdPermissionRole} The populated <code>CloudidRestApi3FilterIdPermissionRole</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3FilterIdPermissionRole();

        if (data.hasOwnProperty('actors')) {
          obj['actors'] = _ApiClient["default"].convertToType(data['actors'], [_CloudidRestApi3FilterIdPermissionRoleActors["default"]]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _CloudidRestApi3FilterIdPermissionRoleScope["default"].constructFromObject(data['scope']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CloudidRestApi3FilterIdPermissionRole;
}();
/**
 * @member {Array.<module:model/CloudidRestApi3FilterIdPermissionRoleActors>} actors
 */


CloudidRestApi3FilterIdPermissionRole.prototype['actors'] = undefined;
/**
 * @member {String} description
 */

CloudidRestApi3FilterIdPermissionRole.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

CloudidRestApi3FilterIdPermissionRole.prototype['id'] = undefined;
/**
 * @member {String} name
 */

CloudidRestApi3FilterIdPermissionRole.prototype['name'] = undefined;
/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionRoleScope} scope
 */

CloudidRestApi3FilterIdPermissionRole.prototype['scope'] = undefined;
/**
 * @member {String} self
 */

CloudidRestApi3FilterIdPermissionRole.prototype['self'] = undefined;
var _default = CloudidRestApi3FilterIdPermissionRole;
exports["default"] = _default;