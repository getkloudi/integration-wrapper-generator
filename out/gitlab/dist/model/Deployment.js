"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Build = _interopRequireDefault(require("./Build"));

var _EnvironmentBasic = _interopRequireDefault(require("./EnvironmentBasic"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Deployment model module.
 * @module model/Deployment
 * @version 1.0.0
 */
var Deployment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Deployment</code>.
   * This feature was introduced in GitLab 8.11.
   * @alias module:model/Deployment
   */
  function Deployment() {
    _classCallCheck(this, Deployment);

    Deployment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Deployment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Deployment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deployment} obj Optional instance to populate.
     * @return {module:model/Deployment} The populated <code>Deployment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Deployment();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deployable')) {
          obj['deployable'] = _Build["default"].constructFromObject(data['deployable']);
        }

        if (data.hasOwnProperty('environment')) {
          obj['environment'] = _EnvironmentBasic["default"].constructFromObject(data['environment']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('iid')) {
          obj['iid'] = _ApiClient["default"].convertToType(data['iid'], 'String');
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _UserBasic["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return Deployment;
}();
/**
 * @member {String} created_at
 */


Deployment.prototype['created_at'] = undefined;
/**
 * @member {module:model/Build} deployable
 */

Deployment.prototype['deployable'] = undefined;
/**
 * @member {module:model/EnvironmentBasic} environment
 */

Deployment.prototype['environment'] = undefined;
/**
 * @member {String} id
 */

Deployment.prototype['id'] = undefined;
/**
 * @member {String} iid
 */

Deployment.prototype['iid'] = undefined;
/**
 * @member {String} ref
 */

Deployment.prototype['ref'] = undefined;
/**
 * @member {String} sha
 */

Deployment.prototype['sha'] = undefined;
/**
 * @member {module:model/UserBasic} user
 */

Deployment.prototype['user'] = undefined;
var _default = Deployment;
exports["default"] = _default;