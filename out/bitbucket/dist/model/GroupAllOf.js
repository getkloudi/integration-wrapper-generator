"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _GroupAllOfLinks = _interopRequireDefault(require("./GroupAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GroupAllOf model module.
 * @module model/GroupAllOf
 * @version 1.2.0
 */
var GroupAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupAllOf</code>.
   * A group object
   * @alias module:model/GroupAllOf
   */
  function GroupAllOf() {
    _classCallCheck(this, GroupAllOf);

    GroupAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GroupAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupAllOf} obj Optional instance to populate.
     * @return {module:model/GroupAllOf} The populated <code>GroupAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupAllOf();

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

  return GroupAllOf;
}();
/**
 * @member {module:model/GroupAllOfLinks} links
 */


GroupAllOf.prototype['links'] = undefined;
/**
 * @member {module:model/Account} owner
 */

GroupAllOf.prototype['owner'] = undefined;
/**
 * @member {String} name
 */

GroupAllOf.prototype['name'] = undefined;
/**
 * The \"sluggified\" version of the group's name. This contains only ASCII characters and can therefore be slightly different than the name
 * @member {String} slug
 */

GroupAllOf.prototype['slug'] = undefined;
/**
 * The concatenation of the owner's username and the group's slug, separated with a colon (e.g. `acme:developers`) 
 * @member {String} full_slug
 */

GroupAllOf.prototype['full_slug'] = undefined;
/**
 * The number of members in this group
 * @member {Number} members
 */

GroupAllOf.prototype['members'] = undefined;
var _default = GroupAllOf;
exports["default"] = _default;