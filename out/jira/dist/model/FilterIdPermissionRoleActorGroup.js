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
 * The FilterIdPermissionRoleActorGroup model module.
 * @module model/FilterIdPermissionRoleActorGroup
 * @version 1.3.0
 */
var FilterIdPermissionRoleActorGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterIdPermissionRoleActorGroup</code>.
   * @alias module:model/FilterIdPermissionRoleActorGroup
   * @param displayName {String} 
   * @param name {String} 
   */
  function FilterIdPermissionRoleActorGroup(displayName, name) {
    _classCallCheck(this, FilterIdPermissionRoleActorGroup);

    FilterIdPermissionRoleActorGroup.initialize(this, displayName, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterIdPermissionRoleActorGroup, null, [{
    key: "initialize",
    value: function initialize(obj, displayName, name) {
      obj['displayName'] = displayName;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>FilterIdPermissionRoleActorGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterIdPermissionRoleActorGroup} obj Optional instance to populate.
     * @return {module:model/FilterIdPermissionRoleActorGroup} The populated <code>FilterIdPermissionRoleActorGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterIdPermissionRoleActorGroup();

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

  return FilterIdPermissionRoleActorGroup;
}();
/**
 * @member {String} displayName
 */


FilterIdPermissionRoleActorGroup.prototype['displayName'] = undefined;
/**
 * @member {String} name
 */

FilterIdPermissionRoleActorGroup.prototype['name'] = undefined;
var _default = FilterIdPermissionRoleActorGroup;
exports["default"] = _default;