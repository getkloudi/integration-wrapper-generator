"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _GroupAllOf = _interopRequireDefault(require("./GroupAllOf"));

var _GroupAllOfLinks = _interopRequireDefault(require("./GroupAllOfLinks"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Group model module.
 * @module model/Group
 * @version 1.1.2
 */
var Group =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/GroupAllOf
   * @param type {String} 
   */
  function Group(type) {
    _classCallCheck(this, Group);

    _ModelObject["default"].initialize(this, type);

    _GroupAllOf["default"].initialize(this);

    Group.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Group, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Group();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _GroupAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _GroupAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Account["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('full_slug')) {
          obj['full_slug'] = _ApiClient["default"].convertToType(data['full_slug'], 'String');
        }

        if (data.hasOwnProperty('members')) {
          obj['members'] = _ApiClient["default"].convertToType(data['members'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Group;
}();
/**
 * @member {module:model/GroupAllOfLinks} links
 */


Group.prototype['links'] = undefined;
/**
 * @member {module:model/Account} owner
 */

Group.prototype['owner'] = undefined;
/**
 * @member {String} name
 */

Group.prototype['name'] = undefined;
/**
 * The \"sluggified\" version of the group's name. This contains only ASCII characters and can therefore be slightly different than the name
 * @member {String} slug
 */

Group.prototype['slug'] = undefined;
/**
 * The concatenation of the owner's username and the group's slug, separated with a colon (e.g. `acme:developers`) 
 * @member {String} full_slug
 */

Group.prototype['full_slug'] = undefined;
/**
 * The number of members in this group
 * @member {Number} members
 */

Group.prototype['members'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement GroupAllOf interface:

/**
 * @member {module:model/GroupAllOfLinks} links
 */

_GroupAllOf["default"].prototype['links'] = undefined;
/**
 * @member {module:model/Account} owner
 */

_GroupAllOf["default"].prototype['owner'] = undefined;
/**
 * @member {String} name
 */

_GroupAllOf["default"].prototype['name'] = undefined;
/**
 * The \"sluggified\" version of the group's name. This contains only ASCII characters and can therefore be slightly different than the name
 * @member {String} slug
 */

_GroupAllOf["default"].prototype['slug'] = undefined;
/**
 * The concatenation of the owner's username and the group's slug, separated with a colon (e.g. `acme:developers`) 
 * @member {String} full_slug
 */

_GroupAllOf["default"].prototype['full_slug'] = undefined;
/**
 * The number of members in this group
 * @member {Number} members
 */

_GroupAllOf["default"].prototype['members'] = undefined;
var _default = Group;
exports["default"] = _default;