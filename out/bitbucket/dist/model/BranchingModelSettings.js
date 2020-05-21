"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelSettingsAllOf = _interopRequireDefault(require("./BranchingModelSettingsAllOf"));

var _BranchingModelSettingsAllOfBranchTypes = _interopRequireDefault(require("./BranchingModelSettingsAllOfBranchTypes"));

var _BranchingModelSettingsAllOfDevelopment = _interopRequireDefault(require("./BranchingModelSettingsAllOfDevelopment"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _BranchingModelSettingsAllOfProduction = _interopRequireDefault(require("./BranchingModelSettingsAllOfProduction"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchingModelSettings model module.
 * @module model/BranchingModelSettings
 * @version 1.2.0
 */
var BranchingModelSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchingModelSettings</code>.
   * @alias module:model/BranchingModelSettings
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/BranchingModelSettingsAllOf
   * @param type {String} 
   */
  function BranchingModelSettings(type) {
    _classCallCheck(this, BranchingModelSettings);

    _ModelObject["default"].initialize(this, type);

    _BranchingModelSettingsAllOf["default"].initialize(this);

    BranchingModelSettings.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchingModelSettings, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>BranchingModelSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelSettings} obj Optional instance to populate.
     * @return {module:model/BranchingModelSettings} The populated <code>BranchingModelSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchingModelSettings();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _BranchingModelSettingsAllOf["default"].constructFromObject(data, obj);

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

  return BranchingModelSettings;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


BranchingModelSettings.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/BranchingModelSettingsAllOfBranchTypes>} branch_types
 */

BranchingModelSettings.prototype['branch_types'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfDevelopment} development
 */

BranchingModelSettings.prototype['development'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfProduction} production
 */

BranchingModelSettings.prototype['production'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement BranchingModelSettingsAllOf interface:

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

_BranchingModelSettingsAllOf["default"].prototype['links'] = undefined;
/**
 * @member {Array.<module:model/BranchingModelSettingsAllOfBranchTypes>} branch_types
 */

_BranchingModelSettingsAllOf["default"].prototype['branch_types'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfDevelopment} development
 */

_BranchingModelSettingsAllOf["default"].prototype['development'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfProduction} production
 */

_BranchingModelSettingsAllOf["default"].prototype['production'] = undefined;
var _default = BranchingModelSettings;
exports["default"] = _default;