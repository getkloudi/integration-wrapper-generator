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
 * The BranchingModelSettingsAllOfBranchTypes model module.
 * @module model/BranchingModelSettingsAllOfBranchTypes
 * @version 1.1.2
 */
var BranchingModelSettingsAllOfBranchTypes =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BranchingModelSettingsAllOfBranchTypes</code>.
   * @alias module:model/BranchingModelSettingsAllOfBranchTypes
   * @param kind {module:model/BranchingModelSettingsAllOfBranchTypes.KindEnum} The kind of the branch type.
   */
  function BranchingModelSettingsAllOfBranchTypes(kind) {
    _classCallCheck(this, BranchingModelSettingsAllOfBranchTypes);

    BranchingModelSettingsAllOfBranchTypes.initialize(this, kind);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchingModelSettingsAllOfBranchTypes, null, [{
    key: "initialize",
    value: function initialize(obj, kind) {
      obj['kind'] = kind;
    }
    /**
     * Constructs a <code>BranchingModelSettingsAllOfBranchTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelSettingsAllOfBranchTypes} obj Optional instance to populate.
     * @return {module:model/BranchingModelSettingsAllOfBranchTypes} The populated <code>BranchingModelSettingsAllOfBranchTypes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchingModelSettingsAllOfBranchTypes();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }

        if (data.hasOwnProperty('prefix')) {
          obj['prefix'] = _ApiClient["default"].convertToType(data['prefix'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BranchingModelSettingsAllOfBranchTypes;
}();
/**
 * Whether the branch type is enabled or not. A disabled branch type may contain an invalid `prefix`.
 * @member {Boolean} enabled
 */


BranchingModelSettingsAllOfBranchTypes.prototype['enabled'] = undefined;
/**
 * The kind of the branch type.
 * @member {module:model/BranchingModelSettingsAllOfBranchTypes.KindEnum} kind
 */

BranchingModelSettingsAllOfBranchTypes.prototype['kind'] = undefined;
/**
 * The prefix for this branch type. A branch with this prefix will be classified as per `kind`. The `prefix` of an enabled branch type must be a valid branch prefix.Additionally, it cannot be blank, empty or `null`. The `prefix` for a disabled branch type can be empty or invalid.
 * @member {String} prefix
 */

BranchingModelSettingsAllOfBranchTypes.prototype['prefix'] = undefined;
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */

BranchingModelSettingsAllOfBranchTypes['KindEnum'] = {
  /**
   * value: "feature"
   * @const
   */
  "feature": "feature",

  /**
   * value: "bugfix"
   * @const
   */
  "bugfix": "bugfix",

  /**
   * value: "release"
   * @const
   */
  "release": "release",

  /**
   * value: "hotfix"
   * @const
   */
  "hotfix": "hotfix"
};
var _default = BranchingModelSettingsAllOfBranchTypes;
exports["default"] = _default;