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
 * The Team model module.
 * @module model/Team
 * @version 1.4.0
 */
var Team =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Team</code>.
   * @alias module:model/Team
   */
  function Team() {
    _classCallCheck(this, Team);

    Team.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Team, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Team} obj Optional instance to populate.
     * @return {module:model/Team} The populated <code>Team</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Team();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('members_count')) {
          obj['members_count'] = _ApiClient["default"].convertToType(data['members_count'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('repos_count')) {
          obj['repos_count'] = _ApiClient["default"].convertToType(data['repos_count'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Team;
}();
/**
 * @member {Number} id
 */


Team.prototype['id'] = undefined;
/**
 * @member {Number} members_count
 */

Team.prototype['members_count'] = undefined;
/**
 * @member {String} name
 */

Team.prototype['name'] = undefined;
/**
 * @member {String} permission
 */

Team.prototype['permission'] = undefined;
/**
 * @member {Number} repos_count
 */

Team.prototype['repos_count'] = undefined;
/**
 * @member {String} url
 */

Team.prototype['url'] = undefined;
var _default = Team;
exports["default"] = _default;