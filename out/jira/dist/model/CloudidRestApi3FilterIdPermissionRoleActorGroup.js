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
 * The CloudidRestApi3FilterIdPermissionRoleActorGroup model module.
 * @module model/CloudidRestApi3FilterIdPermissionRoleActorGroup
 * @version 1.1.0
 */
var CloudidRestApi3FilterIdPermissionRoleActorGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3FilterIdPermissionRoleActorGroup</code>.
   * @alias module:model/CloudidRestApi3FilterIdPermissionRoleActorGroup
   * @param displayName {String} 
   * @param name {String} 
   */
  function CloudidRestApi3FilterIdPermissionRoleActorGroup(displayName, name) {
    _classCallCheck(this, CloudidRestApi3FilterIdPermissionRoleActorGroup);

    CloudidRestApi3FilterIdPermissionRoleActorGroup.initialize(this, displayName, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3FilterIdPermissionRoleActorGroup, null, [{
    key: "initialize",
    value: function initialize(obj, displayName, name) {
      obj['displayName'] = displayName;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>CloudidRestApi3FilterIdPermissionRoleActorGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3FilterIdPermissionRoleActorGroup} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3FilterIdPermissionRoleActorGroup} The populated <code>CloudidRestApi3FilterIdPermissionRoleActorGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3FilterIdPermissionRoleActorGroup();

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CloudidRestApi3FilterIdPermissionRoleActorGroup;
}();
/**
 * @member {String} displayName
 */


CloudidRestApi3FilterIdPermissionRoleActorGroup.prototype['displayName'] = undefined;
/**
 * @member {String} name
 */

CloudidRestApi3FilterIdPermissionRoleActorGroup.prototype['name'] = undefined;
var _default = CloudidRestApi3FilterIdPermissionRoleActorGroup;
exports["default"] = _default;