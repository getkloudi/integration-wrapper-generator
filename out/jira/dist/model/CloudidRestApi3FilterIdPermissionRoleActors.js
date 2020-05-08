"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3FilterIdPermissionRoleActorGroup = _interopRequireDefault(require("./CloudidRestApi3FilterIdPermissionRoleActorGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CloudidRestApi3FilterIdPermissionRoleActors model module.
 * @module model/CloudidRestApi3FilterIdPermissionRoleActors
 * @version 1.1.0
 */
var CloudidRestApi3FilterIdPermissionRoleActors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3FilterIdPermissionRoleActors</code>.
   * @alias module:model/CloudidRestApi3FilterIdPermissionRoleActors
   * @param displayName {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param type {String} 
   */
  function CloudidRestApi3FilterIdPermissionRoleActors(displayName, id, name, type) {
    _classCallCheck(this, CloudidRestApi3FilterIdPermissionRoleActors);

    CloudidRestApi3FilterIdPermissionRoleActors.initialize(this, displayName, id, name, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3FilterIdPermissionRoleActors, null, [{
    key: "initialize",
    value: function initialize(obj, displayName, id, name, type) {
      obj['displayName'] = displayName;
      obj['id'] = id;
      obj['name'] = name;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>CloudidRestApi3FilterIdPermissionRoleActors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3FilterIdPermissionRoleActors} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3FilterIdPermissionRoleActors} The populated <code>CloudidRestApi3FilterIdPermissionRoleActors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3FilterIdPermissionRoleActors();

        if (data.hasOwnProperty('actorGroup')) {
          obj['actorGroup'] = _CloudidRestApi3FilterIdPermissionRoleActorGroup["default"].constructFromObject(data['actorGroup']);
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

  return CloudidRestApi3FilterIdPermissionRoleActors;
}();
/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionRoleActorGroup} actorGroup
 */


CloudidRestApi3FilterIdPermissionRoleActors.prototype['actorGroup'] = undefined;
/**
 * @member {String} displayName
 */

CloudidRestApi3FilterIdPermissionRoleActors.prototype['displayName'] = undefined;
/**
 * @member {Number} id
 */

CloudidRestApi3FilterIdPermissionRoleActors.prototype['id'] = undefined;
/**
 * @member {String} name
 */

CloudidRestApi3FilterIdPermissionRoleActors.prototype['name'] = undefined;
/**
 * @member {String} type
 */

CloudidRestApi3FilterIdPermissionRoleActors.prototype['type'] = undefined;
var _default = CloudidRestApi3FilterIdPermissionRoleActors;
exports["default"] = _default;