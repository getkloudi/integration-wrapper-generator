"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelAllOfBranchTypes = _interopRequireDefault(require("./BranchingModelAllOfBranchTypes"));

var _BranchingModelAllOfDevelopment = _interopRequireDefault(require("./BranchingModelAllOfDevelopment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchingModelAllOf model module.
 * @module model/BranchingModelAllOf
 * @version 1.2.0
 */
var BranchingModelAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchingModelAllOf</code>.
   * A repository&#39;s branching model
   * @alias module:model/BranchingModelAllOf
   */
  function BranchingModelAllOf() {
    _classCallCheck(this, BranchingModelAllOf);

    BranchingModelAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchingModelAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchingModelAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelAllOf} obj Optional instance to populate.
     * @return {module:model/BranchingModelAllOf} The populated <code>BranchingModelAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchingModelAllOf();

        if (data.hasOwnProperty('branch_types')) {
          obj['branch_types'] = _ApiClient["default"].convertToType(data['branch_types'], [_BranchingModelAllOfBranchTypes["default"]]);
        }

        if (data.hasOwnProperty('development')) {
          obj['development'] = _BranchingModelAllOfDevelopment["default"].constructFromObject(data['development']);
        }

        if (data.hasOwnProperty('production')) {
          obj['production'] = _BranchingModelAllOfDevelopment["default"].constructFromObject(data['production']);
        }
      }

      return obj;
    }
  }]);

  return BranchingModelAllOf;
}();
/**
 * The active branch types.
 * @member {Array.<module:model/BranchingModelAllOfBranchTypes>} branch_types
 */


BranchingModelAllOf.prototype['branch_types'] = undefined;
/**
 * @member {module:model/BranchingModelAllOfDevelopment} development
 */

BranchingModelAllOf.prototype['development'] = undefined;
/**
 * @member {module:model/BranchingModelAllOfDevelopment} production
 */

BranchingModelAllOf.prototype['production'] = undefined;
var _default = BranchingModelAllOf;
exports["default"] = _default;