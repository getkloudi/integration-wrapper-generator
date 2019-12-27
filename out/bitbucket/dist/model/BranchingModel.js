"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelAllOf = _interopRequireDefault(require("./BranchingModelAllOf"));

var _BranchingModelAllOfBranchTypes = _interopRequireDefault(require("./BranchingModelAllOfBranchTypes"));

var _BranchingModelAllOfDevelopment = _interopRequireDefault(require("./BranchingModelAllOfDevelopment"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchingModel model module.
 * @module model/BranchingModel
 * @version 1.1.0
 */
var BranchingModel =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BranchingModel</code>.
   * @alias module:model/BranchingModel
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/BranchingModelAllOf
   * @param type {String} 
   */
  function BranchingModel(type) {
    _classCallCheck(this, BranchingModel);

    _ModelObject["default"].initialize(this, type);

    _BranchingModelAllOf["default"].initialize(this);

    BranchingModel.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchingModel, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>BranchingModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModel} obj Optional instance to populate.
     * @return {module:model/BranchingModel} The populated <code>BranchingModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchingModel();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _BranchingModelAllOf["default"].constructFromObject(data, obj);

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

  return BranchingModel;
}();
/**
 * The active branch types.
 * @member {Array.<module:model/BranchingModelAllOfBranchTypes>} branch_types
 */


BranchingModel.prototype['branch_types'] = undefined;
/**
 * @member {module:model/BranchingModelAllOfDevelopment} development
 */

BranchingModel.prototype['development'] = undefined;
/**
 * @member {module:model/BranchingModelAllOfDevelopment} production
 */

BranchingModel.prototype['production'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement BranchingModelAllOf interface:

/**
 * The active branch types.
 * @member {Array.<module:model/BranchingModelAllOfBranchTypes>} branch_types
 */

_BranchingModelAllOf["default"].prototype['branch_types'] = undefined;
/**
 * @member {module:model/BranchingModelAllOfDevelopment} development
 */

_BranchingModelAllOf["default"].prototype['development'] = undefined;
/**
 * @member {module:model/BranchingModelAllOfDevelopment} production
 */

_BranchingModelAllOf["default"].prototype['production'] = undefined;
var _default = BranchingModel;
exports["default"] = _default;