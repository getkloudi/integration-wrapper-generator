"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelSettingsAllOfBranchTypes = _interopRequireDefault(require("./BranchingModelSettingsAllOfBranchTypes"));

var _BranchingModelSettingsAllOfDevelopment = _interopRequireDefault(require("./BranchingModelSettingsAllOfDevelopment"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _BranchingModelSettingsAllOfProduction = _interopRequireDefault(require("./BranchingModelSettingsAllOfProduction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchingModelSettingsAllOf model module.
 * @module model/BranchingModelSettingsAllOf
 * @version 1.1.2
 */
var BranchingModelSettingsAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BranchingModelSettingsAllOf</code>.
   * A repository&#39;s branching model settings
   * @alias module:model/BranchingModelSettingsAllOf
   */
  function BranchingModelSettingsAllOf() {
    _classCallCheck(this, BranchingModelSettingsAllOf);

    BranchingModelSettingsAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchingModelSettingsAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchingModelSettingsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelSettingsAllOf} obj Optional instance to populate.
     * @return {module:model/BranchingModelSettingsAllOf} The populated <code>BranchingModelSettingsAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchingModelSettingsAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchingModelSettingsAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('branch_types')) {
          obj['branch_types'] = _ApiClient["default"].convertToType(data['branch_types'], [_BranchingModelSettingsAllOfBranchTypes["default"]]);
        }

        if (data.hasOwnProperty('development')) {
          obj['development'] = _BranchingModelSettingsAllOfDevelopment["default"].constructFromObject(data['development']);
        }

        if (data.hasOwnProperty('production')) {
          obj['production'] = _BranchingModelSettingsAllOfProduction["default"].constructFromObject(data['production']);
        }
      }

      return obj;
    }
  }]);

  return BranchingModelSettingsAllOf;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


BranchingModelSettingsAllOf.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/BranchingModelSettingsAllOfBranchTypes>} branch_types
 */

BranchingModelSettingsAllOf.prototype['branch_types'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfDevelopment} development
 */

BranchingModelSettingsAllOf.prototype['development'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfProduction} production
 */

BranchingModelSettingsAllOf.prototype['production'] = undefined;
var _default = BranchingModelSettingsAllOf;
exports["default"] = _default;