"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayRoute = _interopRequireDefault(require("./TransitGatewayRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchTransitGatewayRoutesResult model module.
 * @module model/SearchTransitGatewayRoutesResult
 * @version 1.0.0
 */
var SearchTransitGatewayRoutesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchTransitGatewayRoutesResult</code>.
   * @alias module:model/SearchTransitGatewayRoutesResult
   */
  function SearchTransitGatewayRoutesResult() {
    _classCallCheck(this, SearchTransitGatewayRoutesResult);

    SearchTransitGatewayRoutesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchTransitGatewayRoutesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchTransitGatewayRoutesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchTransitGatewayRoutesResult} obj Optional instance to populate.
     * @return {module:model/SearchTransitGatewayRoutesResult} The populated <code>SearchTransitGatewayRoutesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchTransitGatewayRoutesResult();

        if (data.hasOwnProperty('AdditionalRoutesAvailable')) {
          obj['AdditionalRoutesAvailable'] = _ApiClient["default"].convertToType(data['AdditionalRoutesAvailable'], 'Boolean');
        }

        if (data.hasOwnProperty('Routes')) {
          obj['Routes'] = _ApiClient["default"].convertToType(data['Routes'], [_TransitGatewayRoute["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SearchTransitGatewayRoutesResult;
}();
/**
 * @member {Boolean} AdditionalRoutesAvailable
 */


SearchTransitGatewayRoutesResult.prototype['AdditionalRoutesAvailable'] = undefined;
/**
 * @member {Array.<module:model/TransitGatewayRoute>} Routes
 */

SearchTransitGatewayRoutesResult.prototype['Routes'] = undefined;
var _default = SearchTransitGatewayRoutesResult;
exports["default"] = _default;