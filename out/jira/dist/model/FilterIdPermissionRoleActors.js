"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionRoleActorGroup = _interopRequireDefault(require("./FilterIdPermissionRoleActorGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FilterIdPermissionRoleActors model module.
 * @module model/FilterIdPermissionRoleActors
 * @version 1.3.1
 */
var FilterIdPermissionRoleActors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterIdPermissionRoleActors</code>.
   * @alias module:model/FilterIdPermissionRoleActors
   * @param displayName {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param type {String} 
   */
  function FilterIdPermissionRoleActors(displayName, id, name, type) {
    _classCallCheck(this, FilterIdPermissionRoleActors);

    FilterIdPermissionRoleActors.initialize(this, displayName, id, name, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterIdPermissionRoleActors, null, [{
    key: "initialize",
    value: function initialize(obj, displayName, id, name, type) {
      obj['displayName'] = displayName;
      obj['id'] = id;
      obj['name'] = name;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>FilterIdPermissionRoleActors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterIdPermissionRoleActors} obj Optional instance to populate.
     * @return {module:model/FilterIdPermissionRoleActors} The populated <code>FilterIdPermissionRoleActors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterIdPermissionRoleActors();

        if (data.hasOwnProperty('actorGroup')) {
          obj['actorGroup'] = _FilterIdPermissionRoleActorGroup["default"].constructFromObject(data['actorGroup']);
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

  return FilterIdPermissionRoleActors;
}();
/**
 * @member {module:model/FilterIdPermissionRoleActorGroup} actorGroup
 */


FilterIdPermissionRoleActors.prototype['actorGroup'] = undefined;
/**
 * @member {String} displayName
 */

FilterIdPermissionRoleActors.prototype['displayName'] = undefined;
/**
 * @member {Number} id
 */

FilterIdPermissionRoleActors.prototype['id'] = undefined;
/**
 * @member {String} name
 */

FilterIdPermissionRoleActors.prototype['name'] = undefined;
/**
 * @member {String} type
 */

FilterIdPermissionRoleActors.prototype['type'] = undefined;
var _default = FilterIdPermissionRoleActors;
exports["default"] = _default;