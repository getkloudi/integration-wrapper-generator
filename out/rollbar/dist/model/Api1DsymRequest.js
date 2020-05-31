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
 * The Api1DsymRequest model module.
 * @module model/Api1DsymRequest
 * @version 1.1.0
 */
var Api1DsymRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1DsymRequest</code>.
   * @alias module:model/Api1DsymRequest
   * @param bundleIdentifier {String} fully-qualified identifier of the bundle (see example)
   * @param version {String} The current code version (typically a semantic version)
   * @param dsym {File} Your zipped dSYM file.  See [upload_dsym.py](https://raw.githubusercontent.com/rollbar/rollbar-ios/master/upload_dsym.py) for an example
   */
  function Api1DsymRequest(bundleIdentifier, version, dsym) {
    _classCallCheck(this, Api1DsymRequest);

    Api1DsymRequest.initialize(this, bundleIdentifier, version, dsym);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1DsymRequest, null, [{
    key: "initialize",
    value: function initialize(obj, bundleIdentifier, version, dsym) {
      obj['bundle_identifier'] = bundleIdentifier;
      obj['version'] = version;
      obj['dsym'] = dsym;
    }
    /**
     * Constructs a <code>Api1DsymRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1DsymRequest} obj Optional instance to populate.
     * @return {module:model/Api1DsymRequest} The populated <code>Api1DsymRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1DsymRequest();

        if (data.hasOwnProperty('bundle_identifier')) {
          obj['bundle_identifier'] = _ApiClient["default"].convertToType(data['bundle_identifier'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('dsym')) {
          obj['dsym'] = _ApiClient["default"].convertToType(data['dsym'], File);
        }
      }

      return obj;
    }
  }]);

  return Api1DsymRequest;
}();
/**
 * fully-qualified identifier of the bundle (see example)
 * @member {String} bundle_identifier
 */


Api1DsymRequest.prototype['bundle_identifier'] = undefined;
/**
 * The current code version (typically a semantic version)
 * @member {String} version
 */

Api1DsymRequest.prototype['version'] = undefined;
/**
 * Your zipped dSYM file.  See [upload_dsym.py](https://raw.githubusercontent.com/rollbar/rollbar-ios/master/upload_dsym.py) for an example
 * @member {File} dsym
 */

Api1DsymRequest.prototype['dsym'] = undefined;
var _default = Api1DsymRequest;
exports["default"] = _default;