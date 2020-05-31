"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Scope = _interopRequireDefault(require("./Scope"));

var _Status = _interopRequireDefault(require("./Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectAccessToken model module.
 * @module model/ProjectAccessToken
 * @version 1.1.0
 */
var ProjectAccessToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectAccessToken</code>.
   * @alias module:model/ProjectAccessToken
   * @param name {String} Name to identify the access token
   * @param scopes {Array.<module:model/Scope>} Scopes to assign to the create access token
   */
  function ProjectAccessToken(name, scopes) {
    _classCallCheck(this, ProjectAccessToken);

    ProjectAccessToken.initialize(this, name, scopes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectAccessToken, null, [{
    key: "initialize",
    value: function initialize(obj, name, scopes) {
      obj['name'] = name;
      obj['scopes'] = scopes;
    }
    /**
     * Constructs a <code>ProjectAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectAccessToken} obj Optional instance to populate.
     * @return {module:model/ProjectAccessToken} The populated <code>ProjectAccessToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectAccessToken();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], [_Scope["default"]]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _Status["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('rate_limit_window_size')) {
          obj['rate_limit_window_size'] = _ApiClient["default"].convertToType(data['rate_limit_window_size'], 'Number');
        }

        if (data.hasOwnProperty('rate_limit_window_count')) {
          obj['rate_limit_window_count'] = _ApiClient["default"].convertToType(data['rate_limit_window_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProjectAccessToken;
}();
/**
 * Name to identify the access token
 * @member {String} name
 */


ProjectAccessToken.prototype['name'] = undefined;
/**
 * Scopes to assign to the create access token
 * @member {Array.<module:model/Scope>} scopes
 */

ProjectAccessToken.prototype['scopes'] = undefined;
/**
 * @member {module:model/Status} status
 */

ProjectAccessToken.prototype['status'] = undefined;
/**
 * Period of time (in seconds) for the rate limit configuration
 * @member {Number} rate_limit_window_size
 */

ProjectAccessToken.prototype['rate_limit_window_size'] = undefined;
/**
 * Number of requests for the defined rate limiting period
 * @member {Number} rate_limit_window_count
 */

ProjectAccessToken.prototype['rate_limit_window_count'] = undefined;
var _default = ProjectAccessToken;
exports["default"] = _default;