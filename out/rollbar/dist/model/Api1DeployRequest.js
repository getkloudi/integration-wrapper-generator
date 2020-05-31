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
 * The Api1DeployRequest model module.
 * @module model/Api1DeployRequest
 * @version 1.1.0
 */
var Api1DeployRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1DeployRequest</code>.
   * @alias module:model/Api1DeployRequest
   * @param environment {String} Environment to which the revision was deployed
   * @param revision {String} Git SHA of revision being deployed
   */
  function Api1DeployRequest(environment, revision) {
    _classCallCheck(this, Api1DeployRequest);

    Api1DeployRequest.initialize(this, environment, revision);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1DeployRequest, null, [{
    key: "initialize",
    value: function initialize(obj, environment, revision) {
      obj['environment'] = environment;
      obj['revision'] = revision;
    }
    /**
     * Constructs a <code>Api1DeployRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1DeployRequest} obj Optional instance to populate.
     * @return {module:model/Api1DeployRequest} The populated <code>Api1DeployRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1DeployRequest();

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _ApiClient["default"].convertToType(data['environment'], 'String');
        }

        if (data.hasOwnProperty('revision')) {
          obj['revision'] = _ApiClient["default"].convertToType(data['revision'], 'String');
        }

        if (data.hasOwnProperty('rollbar_username')) {
          obj['rollbar_username'] = _ApiClient["default"].convertToType(data['rollbar_username'], 'String');
        }

        if (data.hasOwnProperty('local_username')) {
          obj['local_username'] = _ApiClient["default"].convertToType(data['local_username'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Api1DeployRequest;
}();
/**
 * Environment to which the revision was deployed
 * @member {String} environment
 */


Api1DeployRequest.prototype['environment'] = undefined;
/**
 * Git SHA of revision being deployed
 * @member {String} revision
 */

Api1DeployRequest.prototype['revision'] = undefined;
/**
 * Rollbar username of person who deployed
 * @member {String} rollbar_username
 */

Api1DeployRequest.prototype['rollbar_username'] = undefined;
/**
 * Local username of person who deployed.  Displayed in web app if no `rollbar_username` was specified.
 * @member {String} local_username
 */

Api1DeployRequest.prototype['local_username'] = undefined;
/**
 * Additional text to include with the deploy
 * @member {String} comment
 */

Api1DeployRequest.prototype['comment'] = undefined;
/**
 * Status of the deployment - `started`, `succeeded` _(default)_, `failed`, or `timed_out`.
 * @member {String} status
 */

Api1DeployRequest.prototype['status'] = undefined;
var _default = Api1DeployRequest;
exports["default"] = _default;