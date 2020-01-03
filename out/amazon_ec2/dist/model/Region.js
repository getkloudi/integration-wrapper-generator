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
 * The Region model module.
 * @module model/Region
 * @version 1.0.0
 */
var Region =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Region</code>.
   * Describes a Region.
   * @alias module:model/Region
   */
  function Region() {
    _classCallCheck(this, Region);

    Region.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Region, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Region</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Region} obj Optional instance to populate.
     * @return {module:model/Region} The populated <code>Region</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Region();

        if (data.hasOwnProperty('Endpoint')) {
          obj['Endpoint'] = _ApiClient["default"].convertToType(data['Endpoint'], 'String');
        }

        if (data.hasOwnProperty('OptInStatus')) {
          obj['OptInStatus'] = _ApiClient["default"].convertToType(data['OptInStatus'], 'String');
        }

        if (data.hasOwnProperty('RegionName')) {
          obj['RegionName'] = _ApiClient["default"].convertToType(data['RegionName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Region;
}();
/**
 * @member {String} Endpoint
 */


Region.prototype['Endpoint'] = undefined;
/**
 * @member {String} OptInStatus
 */

Region.prototype['OptInStatus'] = undefined;
/**
 * @member {String} RegionName
 */

Region.prototype['RegionName'] = undefined;
var _default = Region;
exports["default"] = _default;