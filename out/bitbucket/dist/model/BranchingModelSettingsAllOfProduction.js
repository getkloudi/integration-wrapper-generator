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
 * The BranchingModelSettingsAllOfProduction model module.
 * @module model/BranchingModelSettingsAllOfProduction
 * @version 1.1.0
 */
var BranchingModelSettingsAllOfProduction =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BranchingModelSettingsAllOfProduction</code>.
   * @alias module:model/BranchingModelSettingsAllOfProduction
   */
  function BranchingModelSettingsAllOfProduction() {
    _classCallCheck(this, BranchingModelSettingsAllOfProduction);

    BranchingModelSettingsAllOfProduction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchingModelSettingsAllOfProduction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchingModelSettingsAllOfProduction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelSettingsAllOfProduction} obj Optional instance to populate.
     * @return {module:model/BranchingModelSettingsAllOfProduction} The populated <code>BranchingModelSettingsAllOfProduction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchingModelSettingsAllOfProduction();

        if (data.hasOwnProperty('is_valid')) {
          obj['is_valid'] = _ApiClient["default"].convertToType(data['is_valid'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('use_mainbranch')) {
          obj['use_mainbranch'] = _ApiClient["default"].convertToType(data['use_mainbranch'], 'Boolean');
        }

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return BranchingModelSettingsAllOfProduction;
}();
/**
 * Indicates if the configured branch is valid, that is, if the configured branch actually exists currently. Is always `true` when `use_mainbranch` is `true` (even if the main branch does not exist). This field is read-only. This field is ignored when updating/creating settings.
 * @member {Boolean} is_valid
 */


BranchingModelSettingsAllOfProduction.prototype['is_valid'] = undefined;
/**
 * The configured branch. It must be `null` when `use_mainbranch` is `true`. Otherwise it must be a non-empty value. It is possible for the configured branch to not exist (e.g. it was deleted after the settings are set). In this case `is_valid` will be `false`. The branch must exist when updating/setting the `name` or an error will occur.
 * @member {String} name
 */

BranchingModelSettingsAllOfProduction.prototype['name'] = undefined;
/**
 * Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). When `true` the `name` must be `null` or not provided. When `false` the `name` must contain a non-empty branch name.
 * @member {Boolean} use_mainbranch
 */

BranchingModelSettingsAllOfProduction.prototype['use_mainbranch'] = undefined;
/**
 * Indicates if branch is enabled or not.
 * @member {Boolean} enabled
 */

BranchingModelSettingsAllOfProduction.prototype['enabled'] = undefined;
var _default = BranchingModelSettingsAllOfProduction;
exports["default"] = _default;