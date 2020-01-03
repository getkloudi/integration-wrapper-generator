"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PlacementGroupStrategy = _interopRequireDefault(require("./PlacementGroupStrategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PlacementGroupInfo model module.
 * @module model/PlacementGroupInfo
 * @version 1.0.0
 */
var PlacementGroupInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PlacementGroupInfo</code>.
   * Describes the placement group support of the instance type.
   * @alias module:model/PlacementGroupInfo
   */
  function PlacementGroupInfo() {
    _classCallCheck(this, PlacementGroupInfo);

    PlacementGroupInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PlacementGroupInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PlacementGroupInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlacementGroupInfo} obj Optional instance to populate.
     * @return {module:model/PlacementGroupInfo} The populated <code>PlacementGroupInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PlacementGroupInfo();

        if (data.hasOwnProperty('SupportedStrategies')) {
          obj['SupportedStrategies'] = _ApiClient["default"].convertToType(data['SupportedStrategies'], [_PlacementGroupStrategy["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PlacementGroupInfo;
}();
/**
 * @member {Array.<module:model/PlacementGroupStrategy>} SupportedStrategies
 */


PlacementGroupInfo.prototype['SupportedStrategies'] = undefined;
var _default = PlacementGroupInfo;
exports["default"] = _default;