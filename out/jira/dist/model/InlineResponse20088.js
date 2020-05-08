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
 * The InlineResponse20088 model module.
 * @module model/InlineResponse20088
 * @version 1.3.0
 */
var InlineResponse20088 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20088</code>.
   * 
   * @alias module:model/InlineResponse20088
   * @param baseUrl {String} 
   * @param buildDate {String} 
   * @param buildNumber {Number} 
   * @param scmInfo {String} 
   * @param serverTime {String} 
   * @param serverTitle {String} 
   * @param version {String} 
   * @param versionNumbers {Array.<Object>} 
   */
  function InlineResponse20088(baseUrl, buildDate, buildNumber, scmInfo, serverTime, serverTitle, version, versionNumbers) {
    _classCallCheck(this, InlineResponse20088);

    InlineResponse20088.initialize(this, baseUrl, buildDate, buildNumber, scmInfo, serverTime, serverTitle, version, versionNumbers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20088, null, [{
    key: "initialize",
    value: function initialize(obj, baseUrl, buildDate, buildNumber, scmInfo, serverTime, serverTitle, version, versionNumbers) {
      obj['baseUrl'] = baseUrl;
      obj['buildDate'] = buildDate;
      obj['buildNumber'] = buildNumber;
      obj['scmInfo'] = scmInfo;
      obj['serverTime'] = serverTime;
      obj['serverTitle'] = serverTitle;
      obj['version'] = version;
      obj['versionNumbers'] = versionNumbers;
    }
    /**
     * Constructs a <code>InlineResponse20088</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20088} obj Optional instance to populate.
     * @return {module:model/InlineResponse20088} The populated <code>InlineResponse20088</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20088();

        if (data.hasOwnProperty('baseUrl')) {
          obj['baseUrl'] = _ApiClient["default"].convertToType(data['baseUrl'], 'String');
        }

        if (data.hasOwnProperty('buildDate')) {
          obj['buildDate'] = _ApiClient["default"].convertToType(data['buildDate'], 'String');
        }

        if (data.hasOwnProperty('buildNumber')) {
          obj['buildNumber'] = _ApiClient["default"].convertToType(data['buildNumber'], 'Number');
        }

        if (data.hasOwnProperty('scmInfo')) {
          obj['scmInfo'] = _ApiClient["default"].convertToType(data['scmInfo'], 'String');
        }

        if (data.hasOwnProperty('serverTime')) {
          obj['serverTime'] = _ApiClient["default"].convertToType(data['serverTime'], 'String');
        }

        if (data.hasOwnProperty('serverTitle')) {
          obj['serverTitle'] = _ApiClient["default"].convertToType(data['serverTitle'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('versionNumbers')) {
          obj['versionNumbers'] = _ApiClient["default"].convertToType(data['versionNumbers'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20088;
}();
/**
 * @member {String} baseUrl
 */


InlineResponse20088.prototype['baseUrl'] = undefined;
/**
 * @member {String} buildDate
 */

InlineResponse20088.prototype['buildDate'] = undefined;
/**
 * @member {Number} buildNumber
 */

InlineResponse20088.prototype['buildNumber'] = undefined;
/**
 * @member {String} scmInfo
 */

InlineResponse20088.prototype['scmInfo'] = undefined;
/**
 * @member {String} serverTime
 */

InlineResponse20088.prototype['serverTime'] = undefined;
/**
 * @member {String} serverTitle
 */

InlineResponse20088.prototype['serverTitle'] = undefined;
/**
 * @member {String} version
 */

InlineResponse20088.prototype['version'] = undefined;
/**
 * @member {Array.<Object>} versionNumbers
 */

InlineResponse20088.prototype['versionNumbers'] = undefined;
var _default = InlineResponse20088;
exports["default"] = _default;