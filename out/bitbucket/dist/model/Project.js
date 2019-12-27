"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _ProjectAllOf = _interopRequireDefault(require("./ProjectAllOf"));

var _ProjectAllOfLinks = _interopRequireDefault(require("./ProjectAllOfLinks"));

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Project model module.
 * @module model/Project
 * @version 1.1.0
 */
var Project =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/ProjectAllOf
   * @param type {String} 
   */
  function Project(type) {
    _classCallCheck(this, Project);

    _ModelObject["default"].initialize(this, type);

    _ProjectAllOf["default"].initialize(this);

    Project.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Project, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Project();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _ProjectAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ProjectAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Team["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
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

  return Project;
}();
/**
 * @member {module:model/ProjectAllOfLinks} links
 */


Project.prototype['links'] = undefined;
/**
 * The project's immutable id.
 * @member {String} uuid
 */

Project.prototype['uuid'] = undefined;
/**
 * The project's key.
 * @member {String} key
 */

Project.prototype['key'] = undefined;
/**
 * @member {module:model/Team} owner
 */

Project.prototype['owner'] = undefined;
/**
 * The name of the project.
 * @member {String} name
 */

Project.prototype['name'] = undefined;
/**
 * @member {String} description
 */

Project.prototype['description'] = undefined;
/**
 *  Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.
 * @member {Boolean} is_private
 */

Project.prototype['is_private'] = undefined;
/**
 * @member {Date} created_on
 */

Project.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

Project.prototype['updated_on'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement ProjectAllOf interface:

/**
 * @member {module:model/ProjectAllOfLinks} links
 */

_ProjectAllOf["default"].prototype['links'] = undefined;
/**
 * The project's immutable id.
 * @member {String} uuid
 */

_ProjectAllOf["default"].prototype['uuid'] = undefined;
/**
 * The project's key.
 * @member {String} key
 */

_ProjectAllOf["default"].prototype['key'] = undefined;
/**
 * @member {module:model/Team} owner
 */

_ProjectAllOf["default"].prototype['owner'] = undefined;
/**
 * The name of the project.
 * @member {String} name
 */

_ProjectAllOf["default"].prototype['name'] = undefined;
/**
 * @member {String} description
 */

_ProjectAllOf["default"].prototype['description'] = undefined;
/**
 *  Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.
 * @member {Boolean} is_private
 */

_ProjectAllOf["default"].prototype['is_private'] = undefined;
/**
 * @member {Date} created_on
 */

_ProjectAllOf["default"].prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

_ProjectAllOf["default"].prototype['updated_on'] = undefined;
var _default = Project;
exports["default"] = _default;