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
 * The PullrequestEndpointBranch model module.
 * @module model/PullrequestEndpointBranch
 * @version 1.1.0
 */
var PullrequestEndpointBranch =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullrequestEndpointBranch</code>.
   * @alias module:model/PullrequestEndpointBranch
   */
  function PullrequestEndpointBranch() {
    _classCallCheck(this, PullrequestEndpointBranch);

    PullrequestEndpointBranch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestEndpointBranch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullrequestEndpointBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestEndpointBranch} obj Optional instance to populate.
     * @return {module:model/PullrequestEndpointBranch} The populated <code>PullrequestEndpointBranch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestEndpointBranch();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('merge_strategies')) {
          obj['merge_strategies'] = _ApiClient["default"].convertToType(data['merge_strategies'], ['String']);
        }

        if (data.hasOwnProperty('default_merge_strategy')) {
          obj['default_merge_strategy'] = _ApiClient["default"].convertToType(data['default_merge_strategy'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullrequestEndpointBranch;
}();
/**
 * @member {String} name
 */


PullrequestEndpointBranch.prototype['name'] = undefined;
/**
 * Available merge strategies, when this endpoint is the destination of the pull request.
 * @member {Array.<module:model/PullrequestEndpointBranch.MergeStrategiesEnum>} merge_strategies
 */

PullrequestEndpointBranch.prototype['merge_strategies'] = undefined;
/**
 * The default merge strategy, when this endpoint is the destination of the pull request.
 * @member {String} default_merge_strategy
 */

PullrequestEndpointBranch.prototype['default_merge_strategy'] = undefined;
/**
 * Allowed values for the <code>mergeStrategies</code> property.
 * @enum {String}
 * @readonly
 */

PullrequestEndpointBranch['MergeStrategiesEnum'] = {
  /**
   * value: "merge_commit"
   * @const
   */
  "merge_commit": "merge_commit",

  /**
   * value: "squash"
   * @const
   */
  "squash": "squash",

  /**
   * value: "fast_forward"
   * @const
   */
  "fast_forward": "fast_forward"
};
var _default = PullrequestEndpointBranch;
exports["default"] = _default;