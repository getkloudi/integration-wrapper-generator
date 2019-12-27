"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentReleaseAllOf model module.
 * @module model/DeploymentReleaseAllOf
 * @version 1.1.2
 */
var DeploymentReleaseAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentReleaseAllOf</code>.
   * A Bitbucket Deployment Release.
   * @alias module:model/DeploymentReleaseAllOf
   */
  function DeploymentReleaseAllOf() {
    _classCallCheck(this, DeploymentReleaseAllOf);

    DeploymentReleaseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentReleaseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeploymentReleaseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentReleaseAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentReleaseAllOf} The populated <code>DeploymentReleaseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentReleaseAllOf();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _Commit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return DeploymentReleaseAllOf;
}();
/**
 * The UUID identifying the release.
 * @member {String} uuid
 */


DeploymentReleaseAllOf.prototype['uuid'] = undefined;
/**
 * The name of the release.
 * @member {String} name
 */

DeploymentReleaseAllOf.prototype['name'] = undefined;
/**
 * Link to the pipeline that produced the release.
 * @member {String} url
 */

DeploymentReleaseAllOf.prototype['url'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

DeploymentReleaseAllOf.prototype['commit'] = undefined;
/**
 * The timestamp when the release was created.
 * @member {Date} created_on
 */

DeploymentReleaseAllOf.prototype['created_on'] = undefined;
var _default = DeploymentReleaseAllOf;
exports["default"] = _default;