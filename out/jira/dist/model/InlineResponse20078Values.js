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
 * The InlineResponse20078Values model module.
 * @module model/InlineResponse20078Values
 * @version 1.3.0
 */
var InlineResponse20078Values = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20078Values</code>.
   * @alias module:model/InlineResponse20078Values
   * @param archived {Boolean} 
   * @param description {String} 
   * @param id {String} 
   * @param name {String} 
   * @param overdue {Boolean} 
   * @param projectId {Number} 
   * @param releaseDate {String} 
   * @param released {Boolean} 
   * @param self {String} 
   * @param userReleaseDate {String} 
   */
  function InlineResponse20078Values(archived, description, id, name, overdue, projectId, releaseDate, released, self, userReleaseDate) {
    _classCallCheck(this, InlineResponse20078Values);

    InlineResponse20078Values.initialize(this, archived, description, id, name, overdue, projectId, releaseDate, released, self, userReleaseDate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20078Values, null, [{
    key: "initialize",
    value: function initialize(obj, archived, description, id, name, overdue, projectId, releaseDate, released, self, userReleaseDate) {
      obj['archived'] = archived;
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['overdue'] = overdue;
      obj['projectId'] = projectId;
      obj['releaseDate'] = releaseDate;
      obj['released'] = released;
      obj['self'] = self;
      obj['userReleaseDate'] = userReleaseDate;
    }
    /**
     * Constructs a <code>InlineResponse20078Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20078Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20078Values} The populated <code>InlineResponse20078Values</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20078Values();

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('overdue')) {
          obj['overdue'] = _ApiClient["default"].convertToType(data['overdue'], 'Boolean');
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

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('userReleaseDate')) {
          obj['userReleaseDate'] = _ApiClient["default"].convertToType(data['userReleaseDate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20078Values;
}();
/**
 * @member {Boolean} archived
 */


InlineResponse20078Values.prototype['archived'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20078Values.prototype['description'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20078Values.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20078Values.prototype['name'] = undefined;
/**
 * @member {Boolean} overdue
 */

InlineResponse20078Values.prototype['overdue'] = undefined;
/**
 * @member {Number} projectId
 */

InlineResponse20078Values.prototype['projectId'] = undefined;
/**
 * @member {String} releaseDate
 */

InlineResponse20078Values.prototype['releaseDate'] = undefined;
/**
 * @member {Boolean} released
 */

InlineResponse20078Values.prototype['released'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20078Values.prototype['self'] = undefined;
/**
 * @member {String} userReleaseDate
 */

InlineResponse20078Values.prototype['userReleaseDate'] = undefined;
var _default = InlineResponse20078Values;
exports["default"] = _default;