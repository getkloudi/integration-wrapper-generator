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
 * The PullrequestMergeParameters model module.
 * @module model/PullrequestMergeParameters
 * @version 1.1.0
 */
var PullrequestMergeParameters =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullrequestMergeParameters</code>.
   * The metadata that describes a pull request merge.
   * @alias module:model/PullrequestMergeParameters
   * @param type {String} 
   */
  function PullrequestMergeParameters(type) {
    _classCallCheck(this, PullrequestMergeParameters);

    PullrequestMergeParameters.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestMergeParameters, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PullrequestMergeParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestMergeParameters} obj Optional instance to populate.
     * @return {module:model/PullrequestMergeParameters} The populated <code>PullrequestMergeParameters</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestMergeParameters();

        if (data.hasOwnProperty('close_source_branch')) {
          obj['close_source_branch'] = _ApiClient["default"].convertToType(data['close_source_branch'], 'Boolean');
        }

        if (data.hasOwnProperty('merge_strategy')) {
          obj['merge_strategy'] = _ApiClient["default"].convertToType(data['merge_strategy'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullrequestMergeParameters;
}();
/**
 * Whether the source branch should be deleted. If this is not provided, we fallback to the value used when the pull request was created, which defaults to False
 * @member {Boolean} close_source_branch
 */


PullrequestMergeParameters.prototype['close_source_branch'] = undefined;
/**
 * The merge strategy that will be used to merge the pull request.
 * @member {module:model/PullrequestMergeParameters.MergeStrategyEnum} merge_strategy
 * @default 'merge_commit'
 */

PullrequestMergeParameters.prototype['merge_strategy'] = 'merge_commit';
/**
 * The commit message that will be used on the resulting commit.
 * @member {String} message
 */

PullrequestMergeParameters.prototype['message'] = undefined;
/**
 * @member {String} type
 */

PullrequestMergeParameters.prototype['type'] = undefined;
/**
 * Allowed values for the <code>merge_strategy</code> property.
 * @enum {String}
 * @readonly
 */

PullrequestMergeParameters['MergeStrategyEnum'] = {
  /**
   * value: "merge_commit"
   * @const
   */
  "merge_commit": "merge_commit",

  /**
   * value: "squash"
   * @const
   */
  "squash": "squash"
};
var _default = PullrequestMergeParameters;
exports["default"] = _default;