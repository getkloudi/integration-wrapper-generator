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
 * The ProjectAccessTokenResponse model module.
 * @module model/ProjectAccessTokenResponse
 * @version 1.1.0
 */
var ProjectAccessTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectAccessTokenResponse</code>.
   * @alias module:model/ProjectAccessTokenResponse
   * @param name {String} Name to identify the access token
   * @param scopes {Array.<module:model/Scope>} Scopes to assign to the create access token
   */
  function ProjectAccessTokenResponse(name, scopes) {
    _classCallCheck(this, ProjectAccessTokenResponse);

    ProjectAccessTokenResponse.initialize(this, name, scopes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectAccessTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj, name, scopes) {
      obj['name'] = name;
      obj['scopes'] = scopes;
    }
    /**
     * Constructs a <code>ProjectAccessTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectAccessTokenResponse} obj Optional instance to populate.
     * @return {module:model/ProjectAccessTokenResponse} The populated <code>ProjectAccessTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectAccessTokenResponse();

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

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'Number');
        }

        if (data.hasOwnProperty('date_created')) {
          obj['date_created'] = _ApiClient["default"].convertToType(data['date_created'], 'String');
        }

        if (data.hasOwnProperty('date_modified')) {
          obj['date_modified'] = _ApiClient["default"].convertToType(data['date_modified'], 'String');
        }

        if (data.hasOwnProperty('cur_rate_limit_window_start')) {
          obj['cur_rate_limit_window_start'] = _ApiClient["default"].convertToType(data['cur_rate_limit_window_start'], 'Number');
        }

        if (data.hasOwnProperty('cur_rate_limit_window_count')) {
          obj['cur_rate_limit_window_count'] = _ApiClient["default"].convertToType(data['cur_rate_limit_window_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProjectAccessTokenResponse;
}();
/**
 * Name to identify the access token
 * @member {String} name
 */


ProjectAccessTokenResponse.prototype['name'] = undefined;
/**
 * Scopes to assign to the create access token
 * @member {Array.<module:model/Scope>} scopes
 */

ProjectAccessTokenResponse.prototype['scopes'] = undefined;
/**
 * @member {module:model/Status} status
 */

ProjectAccessTokenResponse.prototype['status'] = undefined;
/**
 * Period of time (in seconds) for the rate limit configuration
 * @member {Number} rate_limit_window_size
 */

ProjectAccessTokenResponse.prototype['rate_limit_window_size'] = undefined;
/**
 * Number of requests for the defined rate limiting period
 * @member {Number} rate_limit_window_count
 */

ProjectAccessTokenResponse.prototype['rate_limit_window_count'] = undefined;
/**
 * The access token value
 * @member {String} access_token
 */

ProjectAccessTokenResponse.prototype['access_token'] = undefined;
/**
 * The project ID the access token belongs to
 * @member {Number} project_id
 */

ProjectAccessTokenResponse.prototype['project_id'] = undefined;
/**
 * @member {String} date_created
 */

ProjectAccessTokenResponse.prototype['date_created'] = undefined;
/**
 * @member {String} date_modified
 */

ProjectAccessTokenResponse.prototype['date_modified'] = undefined;
/**
 * @member {Number} cur_rate_limit_window_start
 */

ProjectAccessTokenResponse.prototype['cur_rate_limit_window_start'] = undefined;
/**
 * @member {Number} cur_rate_limit_window_count
 */

ProjectAccessTokenResponse.prototype['cur_rate_limit_window_count'] = undefined;
var _default = ProjectAccessTokenResponse;
exports["default"] = _default;