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
 * The DescribePrincipalIdFormatRequest model module.
 * @module model/DescribePrincipalIdFormatRequest
 * @version 1.1.0
 */
var DescribePrincipalIdFormatRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribePrincipalIdFormatRequest</code>.
   * @alias module:model/DescribePrincipalIdFormatRequest
   */
  function DescribePrincipalIdFormatRequest() {
    _classCallCheck(this, DescribePrincipalIdFormatRequest);

    DescribePrincipalIdFormatRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribePrincipalIdFormatRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribePrincipalIdFormatRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribePrincipalIdFormatRequest} obj Optional instance to populate.
     * @return {module:model/DescribePrincipalIdFormatRequest} The populated <code>DescribePrincipalIdFormatRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribePrincipalIdFormatRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('Resources')) {
          obj['Resources'] = _ApiClient["default"].convertToType(data['Resources'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribePrincipalIdFormatRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribePrincipalIdFormatRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribePrincipalIdFormatRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribePrincipalIdFormatRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} Resources
 */

DescribePrincipalIdFormatRequest.prototype['Resources'] = undefined;
var _default = DescribePrincipalIdFormatRequest;
exports["default"] = _default;