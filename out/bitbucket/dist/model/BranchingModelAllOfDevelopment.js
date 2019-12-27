"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branch = _interopRequireDefault(require("./Branch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchingModelAllOfDevelopment model module.
 * @module model/BranchingModelAllOfDevelopment
 * @version 1.1.0
 */
var BranchingModelAllOfDevelopment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BranchingModelAllOfDevelopment</code>.
   * @alias module:model/BranchingModelAllOfDevelopment
   * @param name {String} Name of the target branch. Will be listed here even when the target branch does not exist. Will be `null` if targeting the main branch and the repository is empty.
   * @param useMainbranch {Boolean} Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`).
   */
  function BranchingModelAllOfDevelopment(name, useMainbranch) {
    _classCallCheck(this, BranchingModelAllOfDevelopment);

    BranchingModelAllOfDevelopment.initialize(this, name, useMainbranch);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchingModelAllOfDevelopment, null, [{
    key: "initialize",
    value: function initialize(obj, name, useMainbranch) {
      obj['name'] = name;
      obj['use_mainbranch'] = useMainbranch;
    }
    /**
     * Constructs a <code>BranchingModelAllOfDevelopment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelAllOfDevelopment} obj Optional instance to populate.
     * @return {module:model/BranchingModelAllOfDevelopment} The populated <code>BranchingModelAllOfDevelopment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchingModelAllOfDevelopment();

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _Branch["default"].constructFromObject(data['branch']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('use_mainbranch')) {
          obj['use_mainbranch'] = _ApiClient["default"].convertToType(data['use_mainbranch'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return BranchingModelAllOfDevelopment;
}();
/**
 * @member {module:model/Branch} branch
 */


BranchingModelAllOfDevelopment.prototype['branch'] = undefined;
/**
 * Name of the target branch. Will be listed here even when the target branch does not exist. Will be `null` if targeting the main branch and the repository is empty.
 * @member {String} name
 */

BranchingModelAllOfDevelopment.prototype['name'] = undefined;
/**
 * Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`).
 * @member {Boolean} use_mainbranch
 */

BranchingModelAllOfDevelopment.prototype['use_mainbranch'] = undefined;
var _default = BranchingModelAllOfDevelopment;
exports["default"] = _default;