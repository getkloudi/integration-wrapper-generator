"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _WorkspaceAllOf = _interopRequireDefault(require("./WorkspaceAllOf"));

var _WorkspaceAllOfLinks = _interopRequireDefault(require("./WorkspaceAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Workspace model module.
 * @module model/Workspace
 * @version 1.2.0
 */
var Workspace = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Workspace</code>.
   * @alias module:model/Workspace
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/WorkspaceAllOf
   * @param type {String} 
   */
  function Workspace(type) {
    _classCallCheck(this, Workspace);

    _ModelObject["default"].initialize(this, type);

    _WorkspaceAllOf["default"].initialize(this);

    Workspace.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Workspace, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Workspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workspace} obj Optional instance to populate.
     * @return {module:model/Workspace} The populated <code>Workspace</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Workspace();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _WorkspaceAllOf["default"].constructFromObject(data, obj);

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

  return Workspace;
}();
/**
 * @member {module:model/WorkspaceAllOfLinks} links
 */


Workspace.prototype['links'] = undefined;
/**
 * The workspace's immutable id.
 * @member {String} uuid
 */

Workspace.prototype['uuid'] = undefined;
/**
 * The name of the workspace.
 * @member {String} name
 */

Workspace.prototype['name'] = undefined;
/**
 * The short label that identifies this workspace.
 * @member {String} slug
 */

Workspace.prototype['slug'] = undefined;
/**
 * Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members. Note that private workspaces cannot contain public repositories.
 * @member {Boolean} is_private
 */

Workspace.prototype['is_private'] = undefined;
/**
 * @member {Date} created_on
 */

Workspace.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

Workspace.prototype['updated_on'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement WorkspaceAllOf interface:

/**
 * @member {module:model/WorkspaceAllOfLinks} links
 */

_WorkspaceAllOf["default"].prototype['links'] = undefined;
/**
 * The workspace's immutable id.
 * @member {String} uuid
 */

_WorkspaceAllOf["default"].prototype['uuid'] = undefined;
/**
 * The name of the workspace.
 * @member {String} name
 */

_WorkspaceAllOf["default"].prototype['name'] = undefined;
/**
 * The short label that identifies this workspace.
 * @member {String} slug
 */

_WorkspaceAllOf["default"].prototype['slug'] = undefined;
/**
 * Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members. Note that private workspaces cannot contain public repositories.
 * @member {Boolean} is_private
 */

_WorkspaceAllOf["default"].prototype['is_private'] = undefined;
/**
 * @member {Date} created_on
 */

_WorkspaceAllOf["default"].prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

_WorkspaceAllOf["default"].prototype['updated_on'] = undefined;
var _default = Workspace;
exports["default"] = _default;