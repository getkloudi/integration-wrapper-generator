"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProjectAllOfLinks = _interopRequireDefault(require("./ProjectAllOfLinks"));

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectAllOf model module.
 * @module model/ProjectAllOf
 * @version 1.1.0
 */
var ProjectAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProjectAllOf</code>.
   * A Bitbucket project.             Projects are used by teams to organize repositories.
   * @alias module:model/ProjectAllOf
   */
  function ProjectAllOf() {
    _classCallCheck(this, ProjectAllOf);

    ProjectAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectAllOf} obj Optional instance to populate.
     * @return {module:model/ProjectAllOf} The populated <code>ProjectAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectAllOf();

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('is_private')) {
          obj['is_private'] = _ApiClient["default"].convertToType(data['is_private'], 'Boolean');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ProjectAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Team["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectAllOf;
}();
/**
 * @member {Date} created_on
 */


ProjectAllOf.prototype['created_on'] = undefined;
/**
 * @member {String} description
 */

ProjectAllOf.prototype['description'] = undefined;
/**
 *  Indicates whether the project is publicly accessible, or whether it is private to the team and consequently only visible to team members. Note that private projects cannot contain public repositories.
 * @member {Boolean} is_private
 */

ProjectAllOf.prototype['is_private'] = undefined;
/**
 * The project's key.
 * @member {String} key
 */

ProjectAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/ProjectAllOfLinks} links
 */

ProjectAllOf.prototype['links'] = undefined;
/**
 * The name of the project.
 * @member {String} name
 */

ProjectAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/Team} owner
 */

ProjectAllOf.prototype['owner'] = undefined;
/**
 * @member {Date} updated_on
 */

ProjectAllOf.prototype['updated_on'] = undefined;
/**
 * The project's immutable id.
 * @member {String} uuid
 */

ProjectAllOf.prototype['uuid'] = undefined;
var _default = ProjectAllOf;
exports["default"] = _default;