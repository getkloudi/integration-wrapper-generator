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
 * The JQLPersonalDataMigrationRequest model module.
 * @module model/JQLPersonalDataMigrationRequest
 * @version 1.4.0
 */
var JQLPersonalDataMigrationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JQLPersonalDataMigrationRequest</code>.
   * The JQL queries to be converted.
   * @alias module:model/JQLPersonalDataMigrationRequest
   */
  function JQLPersonalDataMigrationRequest() {
    _classCallCheck(this, JQLPersonalDataMigrationRequest);

    JQLPersonalDataMigrationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JQLPersonalDataMigrationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JQLPersonalDataMigrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JQLPersonalDataMigrationRequest} obj Optional instance to populate.
     * @return {module:model/JQLPersonalDataMigrationRequest} The populated <code>JQLPersonalDataMigrationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JQLPersonalDataMigrationRequest();

        if (data.hasOwnProperty('queryStrings')) {
          obj['queryStrings'] = _ApiClient["default"].convertToType(data['queryStrings'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return JQLPersonalDataMigrationRequest;
}();
/**
 * A list of queries with user identifiers. Maximum of 100 queries.
 * @member {Array.<String>} queryStrings
 */


JQLPersonalDataMigrationRequest.prototype['queryStrings'] = undefined;
var _default = JQLPersonalDataMigrationRequest;
exports["default"] = _default;