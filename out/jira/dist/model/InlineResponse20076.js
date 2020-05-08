"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionRoleActors = _interopRequireDefault(require("./FilterIdPermissionRoleActors"));

var _FilterIdPermissionRoleScope = _interopRequireDefault(require("./FilterIdPermissionRoleScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20076 model module.
 * @module model/InlineResponse20076
 * @version 1.3.1
 */
var InlineResponse20076 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20076</code>.
   * 
   * @alias module:model/InlineResponse20076
   * @param actors {Array.<module:model/FilterIdPermissionRoleActors>} 
   * @param description {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param scope {module:model/FilterIdPermissionRoleScope} 
   * @param self {String} 
   */
  function InlineResponse20076(actors, description, id, name, scope, self) {
    _classCallCheck(this, InlineResponse20076);

    InlineResponse20076.initialize(this, actors, description, id, name, scope, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20076, null, [{
    key: "initialize",
    value: function initialize(obj, actors, description, id, name, scope, self) {
      obj['actors'] = actors;
      obj['description'] = description;
      obj['id'] = id;
      obj['name'] = name;
      obj['scope'] = scope;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20076</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20076} obj Optional instance to populate.
     * @return {module:model/InlineResponse20076} The populated <code>InlineResponse20076</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20076();

        if (data.hasOwnProperty('actors')) {
          obj['actors'] = _ApiClient["default"].convertToType(data['actors'], [_FilterIdPermissionRoleActors["default"]]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _FilterIdPermissionRoleScope["default"].constructFromObject(data['scope']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20076;
}();
/**
 * @member {Array.<module:model/FilterIdPermissionRoleActors>} actors
 */


InlineResponse20076.prototype['actors'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20076.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20076.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20076.prototype['name'] = undefined;
/**
 * @member {module:model/FilterIdPermissionRoleScope} scope
 */

InlineResponse20076.prototype['scope'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20076.prototype['self'] = undefined;
var _default = InlineResponse20076;
exports["default"] = _default;