"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkspaceAllOfLinks = _interopRequireDefault(require("./WorkspaceAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkspaceAllOf model module.
 * @module model/WorkspaceAllOf
 * @version 1.2.0
 */
var WorkspaceAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkspaceAllOf</code>.
   * A Bitbucket workspace.             Workspaces are used to organize repositories.
   * @alias module:model/WorkspaceAllOf
   */
  function WorkspaceAllOf() {
    _classCallCheck(this, WorkspaceAllOf);

    WorkspaceAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkspaceAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkspaceAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceAllOf} obj Optional instance to populate.
     * @return {module:model/WorkspaceAllOf} The populated <code>WorkspaceAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkspaceAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _WorkspaceAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('is_private')) {
          obj['is_private'] = _ApiClient["default"].convertToType(data['is_private'], 'Boolean');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return WorkspaceAllOf;
}();
/**
 * @member {module:model/WorkspaceAllOfLinks} links
 */


WorkspaceAllOf.prototype['links'] = undefined;
/**
 * The workspace's immutable id.
 * @member {String} uuid
 */

WorkspaceAllOf.prototype['uuid'] = undefined;
/**
 * The name of the workspace.
 * @member {String} name
 */

WorkspaceAllOf.prototype['name'] = undefined;
/**
 * The short label that identifies this workspace.
 * @member {String} slug
 */

WorkspaceAllOf.prototype['slug'] = undefined;
/**
 * Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members. Note that private workspaces cannot contain public repositories.
 * @member {Boolean} is_private
 */

WorkspaceAllOf.prototype['is_private'] = undefined;
/**
 * @member {Date} created_on
 */

WorkspaceAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

WorkspaceAllOf.prototype['updated_on'] = undefined;
var _default = WorkspaceAllOf;
exports["default"] = _default;