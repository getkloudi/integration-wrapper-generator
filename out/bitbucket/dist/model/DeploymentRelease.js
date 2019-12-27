"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _DeploymentReleaseAllOf = _interopRequireDefault(require("./DeploymentReleaseAllOf"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeploymentRelease model module.
 * @module model/DeploymentRelease
 * @version 1.1.2
 */
var DeploymentRelease =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeploymentRelease</code>.
   * @alias module:model/DeploymentRelease
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/DeploymentReleaseAllOf
   * @param type {String} 
   */
  function DeploymentRelease(type) {
    _classCallCheck(this, DeploymentRelease);

    _ModelObject["default"].initialize(this, type);

    _DeploymentReleaseAllOf["default"].initialize(this);

    DeploymentRelease.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeploymentRelease, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>DeploymentRelease</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentRelease} obj Optional instance to populate.
     * @return {module:model/DeploymentRelease} The populated <code>DeploymentRelease</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeploymentRelease();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _DeploymentReleaseAllOf["default"].constructFromObject(data, obj);

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

  return DeploymentRelease;
}();
/**
 * The UUID identifying the release.
 * @member {String} uuid
 */


DeploymentRelease.prototype['uuid'] = undefined;
/**
 * The name of the release.
 * @member {String} name
 */

DeploymentRelease.prototype['name'] = undefined;
/**
 * Link to the pipeline that produced the release.
 * @member {String} url
 */

DeploymentRelease.prototype['url'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

DeploymentRelease.prototype['commit'] = undefined;
/**
 * The timestamp when the release was created.
 * @member {Date} created_on
 */

DeploymentRelease.prototype['created_on'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement DeploymentReleaseAllOf interface:

/**
 * The UUID identifying the release.
 * @member {String} uuid
 */

_DeploymentReleaseAllOf["default"].prototype['uuid'] = undefined;
/**
 * The name of the release.
 * @member {String} name
 */

_DeploymentReleaseAllOf["default"].prototype['name'] = undefined;
/**
 * Link to the pipeline that produced the release.
 * @member {String} url
 */

_DeploymentReleaseAllOf["default"].prototype['url'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

_DeploymentReleaseAllOf["default"].prototype['commit'] = undefined;
/**
 * The timestamp when the release was created.
 * @member {Date} created_on
 */

_DeploymentReleaseAllOf["default"].prototype['created_on'] = undefined;
var _default = DeploymentRelease;
exports["default"] = _default;