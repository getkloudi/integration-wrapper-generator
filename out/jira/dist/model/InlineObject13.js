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
 * The InlineObject13 model module.
 * @module model/InlineObject13
 * @version 1.0.0
 */
var InlineObject13 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject13</code>.
   * @alias module:model/InlineObject13
   */
  function InlineObject13() {
    _classCallCheck(this, InlineObject13);

    InlineObject13.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject13, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject13</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject13} obj Optional instance to populate.
     * @return {module:model/InlineObject13} The populated <code>InlineObject13</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject13();

        if (data.hasOwnProperty('groupname')) {
          obj['groupname'] = _ApiClient["default"].convertToType(data['groupname'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'String');
        }

        if (data.hasOwnProperty('projectRoleId')) {
          obj['projectRoleId'] = _ApiClient["default"].convertToType(data['projectRoleId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject13;
}();
/**
 * The name of the group to share the filter with. Set type to group.
 * @member {String} groupname
 */


InlineObject13.prototype['groupname'] = undefined;
/**
 * The ID of the project to share the filter with. Set type to project.
 * @member {String} projectId
 */

InlineObject13.prototype['projectId'] = undefined;
/**
 * The ID of the project role to share the filter with. Set type to projectRole and the projectId for the project that the role is in.
 * @member {String} projectRoleId
 */

InlineObject13.prototype['projectRoleId'] = undefined;
/**
 * The type of the share permission.Specify the type as follows:
 * @member {module:model/InlineObject13.TypeEnum} type
 */

InlineObject13.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject13['TypeEnum'] = {
  /**
   * value: "project"
   * @const
   */
  "project": "project",

  /**
   * value: "group"
   * @const
   */
  "group": "group",

  /**
   * value: "projectRole"
   * @const
   */
  "projectRole": "projectRole",

  /**
   * value: "global"
   * @const
   */
  "global": "global",

  /**
   * value: "authenticated"
   * @const
   */
  "authenticated": "authenticated"
};
var _default = InlineObject13;
exports["default"] = _default;