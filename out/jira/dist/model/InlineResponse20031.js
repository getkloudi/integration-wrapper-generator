"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionProject = _interopRequireDefault(require("./FilterIdPermissionProject"));

var _FilterIdPermissionRole = _interopRequireDefault(require("./FilterIdPermissionRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20031 model module.
 * @module model/InlineResponse20031
 * @version 1.3.0
 */
var InlineResponse20031 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20031</code>.
   * @alias module:model/InlineResponse20031
   * @param id {Number} 
   * @param project {module:model/FilterIdPermissionProject} 
   * @param role {module:model/FilterIdPermissionRole} 
   * @param type {String} 
   */
  function InlineResponse20031(id, project, role, type) {
    _classCallCheck(this, InlineResponse20031);

    InlineResponse20031.initialize(this, id, project, role, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20031, null, [{
    key: "initialize",
    value: function initialize(obj, id, project, role, type) {
      obj['id'] = id;
      obj['project'] = project;
      obj['role'] = role;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse20031</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20031} obj Optional instance to populate.
     * @return {module:model/InlineResponse20031} The populated <code>InlineResponse20031</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20031();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _FilterIdPermissionProject["default"].constructFromObject(data['project']);
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _FilterIdPermissionRole["default"].constructFromObject(data['role']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20031;
}();
/**
 * @member {Number} id
 */


InlineResponse20031.prototype['id'] = undefined;
/**
 * @member {module:model/FilterIdPermissionProject} project
 */

InlineResponse20031.prototype['project'] = undefined;
/**
 * @member {module:model/FilterIdPermissionRole} role
 */

InlineResponse20031.prototype['role'] = undefined;
/**
 * @member {String} type
 */

InlineResponse20031.prototype['type'] = undefined;
var _default = InlineResponse20031;
exports["default"] = _default;