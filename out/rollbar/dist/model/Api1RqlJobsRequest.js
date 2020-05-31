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
 * The Api1RqlJobsRequest model module.
 * @module model/Api1RqlJobsRequest
 * @version 1.1.0
 */
var Api1RqlJobsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1RqlJobsRequest</code>.
   * @alias module:model/Api1RqlJobsRequest
   * @param queryString {String} The RQL query to run
   */
  function Api1RqlJobsRequest(queryString) {
    _classCallCheck(this, Api1RqlJobsRequest);

    Api1RqlJobsRequest.initialize(this, queryString);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1RqlJobsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, queryString) {
      obj['query_string'] = queryString;
    }
    /**
     * Constructs a <code>Api1RqlJobsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1RqlJobsRequest} obj Optional instance to populate.
     * @return {module:model/Api1RqlJobsRequest} The populated <code>Api1RqlJobsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1RqlJobsRequest();

        if (data.hasOwnProperty('query_string')) {
          obj['query_string'] = _ApiClient["default"].convertToType(data['query_string'], 'String');
        }

        if (data.hasOwnProperty('force_refresh')) {
          obj['force_refresh'] = _ApiClient["default"].convertToType(data['force_refresh'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Api1RqlJobsRequest;
}();
/**
 * The RQL query to run
 * @member {String} query_string
 */


Api1RqlJobsRequest.prototype['query_string'] = undefined;
/**
 * Force job creation, `1`/`true` or `0`/`false`.
 * @member {Boolean} force_refresh
 * @default false
 */

Api1RqlJobsRequest.prototype['force_refresh'] = false;
var _default = Api1RqlJobsRequest;
exports["default"] = _default;