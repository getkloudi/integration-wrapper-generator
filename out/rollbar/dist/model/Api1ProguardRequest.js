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
 * The Api1ProguardRequest model module.
 * @module model/Api1ProguardRequest
 * @version 1.1.0
 */
var Api1ProguardRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1ProguardRequest</code>.
   * @alias module:model/Api1ProguardRequest
   * @param version {String} The current code version. This must match the `android:versionName` in your app's `AndroidManifest.xml`, corresponding to the version the `mapping.txt` was generated for.
   * @param mapping {File} Your `mapping.txt` file.
   */
  function Api1ProguardRequest(version, mapping) {
    _classCallCheck(this, Api1ProguardRequest);

    Api1ProguardRequest.initialize(this, version, mapping);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1ProguardRequest, null, [{
    key: "initialize",
    value: function initialize(obj, version, mapping) {
      obj['version'] = version;
      obj['mapping'] = mapping;
    }
    /**
     * Constructs a <code>Api1ProguardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1ProguardRequest} obj Optional instance to populate.
     * @return {module:model/Api1ProguardRequest} The populated <code>Api1ProguardRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1ProguardRequest();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('mapping')) {
          obj['mapping'] = _ApiClient["default"].convertToType(data['mapping'], File);
        }
      }

      return obj;
    }
  }]);

  return Api1ProguardRequest;
}();
/**
 * The current code version. This must match the `android:versionName` in your app's `AndroidManifest.xml`, corresponding to the version the `mapping.txt` was generated for.
 * @member {String} version
 */


Api1ProguardRequest.prototype['version'] = undefined;
/**
 * Your `mapping.txt` file.
 * @member {File} mapping
 */

Api1ProguardRequest.prototype['mapping'] = undefined;
var _default = Api1ProguardRequest;
exports["default"] = _default;