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
 * The InlineResponse20113 model module.
 * @module model/InlineResponse20113
 * @version 1.2.0
 */
var InlineResponse20113 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20113</code>.
   * 
   * @alias module:model/InlineResponse20113
   * @param archived {Boolean} 
   * @param description {String} 
   * @param name {String} 
   * @param project {String} 
   * @param projectId {Number} 
   * @param releaseDate {String} 
   * @param released {Boolean} 
   * @param userReleaseDate {String} 
   */
  function InlineResponse20113(archived, description, name, project, projectId, releaseDate, released, userReleaseDate) {
    _classCallCheck(this, InlineResponse20113);

    InlineResponse20113.initialize(this, archived, description, name, project, projectId, releaseDate, released, userReleaseDate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20113, null, [{
    key: "initialize",
    value: function initialize(obj, archived, description, name, project, projectId, releaseDate, released, userReleaseDate) {
      obj['archived'] = archived;
      obj['description'] = description;
      obj['name'] = name;
      obj['project'] = project;
      obj['projectId'] = projectId;
      obj['releaseDate'] = releaseDate;
      obj['released'] = released;
      obj['userReleaseDate'] = userReleaseDate;
    }
    /**
     * Constructs a <code>InlineResponse20113</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20113} obj Optional instance to populate.
     * @return {module:model/InlineResponse20113} The populated <code>InlineResponse20113</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20113();

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _ApiClient["default"].convertToType(data['project'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'Number');
        }

        if (data.hasOwnProperty('releaseDate')) {
          obj['releaseDate'] = _ApiClient["default"].convertToType(data['releaseDate'], 'String');
        }

        if (data.hasOwnProperty('released')) {
          obj['released'] = _ApiClient["default"].convertToType(data['released'], 'Boolean');
        }

        if (data.hasOwnProperty('userReleaseDate')) {
          obj['userReleaseDate'] = _ApiClient["default"].convertToType(data['userReleaseDate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20113;
}();
/**
 * @member {Boolean} archived
 */


InlineResponse20113.prototype['archived'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20113.prototype['description'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20113.prototype['name'] = undefined;
/**
 * @member {String} project
 */

InlineResponse20113.prototype['project'] = undefined;
/**
 * @member {Number} projectId
 */

InlineResponse20113.prototype['projectId'] = undefined;
/**
 * @member {String} releaseDate
 */

InlineResponse20113.prototype['releaseDate'] = undefined;
/**
 * @member {Boolean} released
 */

InlineResponse20113.prototype['released'] = undefined;
/**
 * @member {String} userReleaseDate
 */

InlineResponse20113.prototype['userReleaseDate'] = undefined;
var _default = InlineResponse20113;
exports["default"] = _default;