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
 * The BranchingModelAllOfBranchTypes model module.
 * @module model/BranchingModelAllOfBranchTypes
 * @version 1.2.0
 */
var BranchingModelAllOfBranchTypes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchingModelAllOfBranchTypes</code>.
   * @alias module:model/BranchingModelAllOfBranchTypes
   * @param kind {module:model/BranchingModelAllOfBranchTypes.KindEnum} The kind of branch.
   * @param prefix {String} The prefix for this branch type. A branch with this prefix will be classified as per `kind`. The prefix must be a valid prefix for a branch and must always exist. It cannot be blank, empty or `null`.
   */
  function BranchingModelAllOfBranchTypes(kind, prefix) {
    _classCallCheck(this, BranchingModelAllOfBranchTypes);

    BranchingModelAllOfBranchTypes.initialize(this, kind, prefix);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchingModelAllOfBranchTypes, null, [{
    key: "initialize",
    value: function initialize(obj, kind, prefix) {
      obj['kind'] = kind;
      obj['prefix'] = prefix;
    }
    /**
     * Constructs a <code>BranchingModelAllOfBranchTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelAllOfBranchTypes} obj Optional instance to populate.
     * @return {module:model/BranchingModelAllOfBranchTypes} The populated <code>BranchingModelAllOfBranchTypes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchingModelAllOfBranchTypes();

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

  return BranchingModelAllOfBranchTypes;
}();
/**
 * The kind of branch.
 * @member {module:model/BranchingModelAllOfBranchTypes.KindEnum} kind
 */


BranchingModelAllOfBranchTypes.prototype['kind'] = undefined;
/**
 * The prefix for this branch type. A branch with this prefix will be classified as per `kind`. The prefix must be a valid prefix for a branch and must always exist. It cannot be blank, empty or `null`.
 * @member {String} prefix
 */

BranchingModelAllOfBranchTypes.prototype['prefix'] = undefined;
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */

BranchingModelAllOfBranchTypes['KindEnum'] = {
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
var _default = BranchingModelAllOfBranchTypes;
exports["default"] = _default;