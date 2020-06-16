"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HealthCheckResult = _interopRequireDefault(require("./HealthCheckResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServerInformation model module.
 * @module model/ServerInformation
 * @version 1.4.0
 */
var ServerInformation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServerInformation</code>.
   * Details about the Jira instance.
   * @alias module:model/ServerInformation
   */
  function ServerInformation() {
    _classCallCheck(this, ServerInformation);

    ServerInformation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServerInformation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServerInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServerInformation} obj Optional instance to populate.
     * @return {module:model/ServerInformation} The populated <code>ServerInformation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServerInformation();

        if (data.hasOwnProperty('baseUrl')) {
          obj['baseUrl'] = _ApiClient["default"].convertToType(data['baseUrl'], 'String');
        }

        if (data.hasOwnProperty('buildDate')) {
          obj['buildDate'] = _ApiClient["default"].convertToType(data['buildDate'], 'Date');
        }

        if (data.hasOwnProperty('buildNumber')) {
          obj['buildNumber'] = _ApiClient["default"].convertToType(data['buildNumber'], 'Number');
        }

        if (data.hasOwnProperty('deploymentType')) {
          obj['deploymentType'] = _ApiClient["default"].convertToType(data['deploymentType'], 'String');
        }

        if (data.hasOwnProperty('healthChecks')) {
          obj['healthChecks'] = _ApiClient["default"].convertToType(data['healthChecks'], [_HealthCheckResult["default"]]);
        }

        if (data.hasOwnProperty('scmInfo')) {
          obj['scmInfo'] = _ApiClient["default"].convertToType(data['scmInfo'], 'String');
        }

        if (data.hasOwnProperty('serverTime')) {
          obj['serverTime'] = _ApiClient["default"].convertToType(data['serverTime'], 'Date');
        }

        if (data.hasOwnProperty('serverTitle')) {
          obj['serverTitle'] = _ApiClient["default"].convertToType(data['serverTitle'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('versionNumbers')) {
          obj['versionNumbers'] = _ApiClient["default"].convertToType(data['versionNumbers'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return ServerInformation;
}();
/**
 * The base URL of the Jira instance.
 * @member {String} baseUrl
 */


ServerInformation.prototype['baseUrl'] = undefined;
/**
 * The timestamp when the Jira version was built.
 * @member {Date} buildDate
 */

ServerInformation.prototype['buildDate'] = undefined;
/**
 * The build number of the Jira version.
 * @member {Number} buildNumber
 */

ServerInformation.prototype['buildNumber'] = undefined;
/**
 * The type of server deployment. This is always returned as *Cloud*.
 * @member {String} deploymentType
 */

ServerInformation.prototype['deploymentType'] = undefined;
/**
 * Jira instance health check results. Deprecated and no longer returned.
 * @member {Array.<module:model/HealthCheckResult>} healthChecks
 */

ServerInformation.prototype['healthChecks'] = undefined;
/**
 * The unique identifier of the Jira version.
 * @member {String} scmInfo
 */

ServerInformation.prototype['scmInfo'] = undefined;
/**
 * The time in Jira when this request was responded to.
 * @member {Date} serverTime
 */

ServerInformation.prototype['serverTime'] = undefined;
/**
 * The name of the Jira instance.
 * @member {String} serverTitle
 */

ServerInformation.prototype['serverTitle'] = undefined;
/**
 * The version of Jira.
 * @member {String} version
 */

ServerInformation.prototype['version'] = undefined;
/**
 * The major, minor, and revision version numbers of the Jira version.
 * @member {Array.<Number>} versionNumbers
 */

ServerInformation.prototype['versionNumbers'] = undefined;
var _default = ServerInformation;
exports["default"] = _default;