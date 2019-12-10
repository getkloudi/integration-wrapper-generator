"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentResp model module.
 * @module model/DeploymentResp
 * @version 1.2.0
 */
var DeploymentResp =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentResp</code>.
   * @alias module:model/DeploymentResp
   */
  function DeploymentResp() {
    _classCallCheck(this, DeploymentResp);

    DeploymentResp.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentResp, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentResp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentResp} obj Optional instance to populate.
     * @return {module:model/DeploymentResp} The populated <code>DeploymentResp</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentResp();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _User["default"].constructFromObject(data['creator']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('payload')) {
          obj['payload'] = _ApiClient["default"].convertToType(data['payload'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('statuses_url')) {
          obj['statuses_url'] = _ApiClient["default"].convertToType(data['statuses_url'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeploymentResp;
}();
/**
 * @member {String} created_at
 */


DeploymentResp.prototype['created_at'] = undefined;
/**
 * @member {module:model/User} creator
 */

DeploymentResp.prototype['creator'] = undefined;
/**
 * @member {String} description
 */

DeploymentResp.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

DeploymentResp.prototype['id'] = undefined;
/**
 * @member {String} payload
 */

DeploymentResp.prototype['payload'] = undefined;
/**
 * @member {String} sha
 */

DeploymentResp.prototype['sha'] = undefined;
/**
 * @member {String} statuses_url
 */

DeploymentResp.prototype['statuses_url'] = undefined;
/**
 * @member {String} updated_at
 */

DeploymentResp.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

DeploymentResp.prototype['url'] = undefined;
var _default = DeploymentResp;
exports["default"] = _default;