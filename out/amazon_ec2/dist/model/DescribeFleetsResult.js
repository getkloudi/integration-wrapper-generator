"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FleetData = _interopRequireDefault(require("./FleetData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFleetsResult model module.
 * @module model/DescribeFleetsResult
 * @version 1.1.0
 */
var DescribeFleetsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFleetsResult</code>.
   * @alias module:model/DescribeFleetsResult
   */
  function DescribeFleetsResult() {
    _classCallCheck(this, DescribeFleetsResult);

    DescribeFleetsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFleetsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFleetsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFleetsResult} obj Optional instance to populate.
     * @return {module:model/DescribeFleetsResult} The populated <code>DescribeFleetsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFleetsResult();

        if (data.hasOwnProperty('Fleets')) {
          obj['Fleets'] = _ApiClient["default"].convertToType(data['Fleets'], [_FleetData["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeFleetsResult;
}();
/**
 * @member {Array.<module:model/FleetData>} Fleets
 */


DescribeFleetsResult.prototype['Fleets'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeFleetsResult.prototype['NextToken'] = undefined;
var _default = DescribeFleetsResult;
exports["default"] = _default;