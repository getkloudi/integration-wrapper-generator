"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TrafficMirrorFilterRule = _interopRequireDefault(require("./TrafficMirrorFilterRule"));

var _TrafficMirrorNetworkService = _interopRequireDefault(require("./TrafficMirrorNetworkService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TrafficMirrorFilter model module.
 * @module model/TrafficMirrorFilter
 * @version 1.1.0
 */
var TrafficMirrorFilter =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TrafficMirrorFilter</code>.
   * Describes the Traffic Mirror filter.
   * @alias module:model/TrafficMirrorFilter
   */
  function TrafficMirrorFilter() {
    _classCallCheck(this, TrafficMirrorFilter);

    TrafficMirrorFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrafficMirrorFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TrafficMirrorFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrafficMirrorFilter} obj Optional instance to populate.
     * @return {module:model/TrafficMirrorFilter} The populated <code>TrafficMirrorFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrafficMirrorFilter();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('EgressFilterRules')) {
          obj['EgressFilterRules'] = _ApiClient["default"].convertToType(data['EgressFilterRules'], [_TrafficMirrorFilterRule["default"]]);
        }

        if (data.hasOwnProperty('IngressFilterRules')) {
          obj['IngressFilterRules'] = _ApiClient["default"].convertToType(data['IngressFilterRules'], [_TrafficMirrorFilterRule["default"]]);
        }

        if (data.hasOwnProperty('NetworkServices')) {
          obj['NetworkServices'] = _ApiClient["default"].convertToType(data['NetworkServices'], [_TrafficMirrorNetworkService["default"]]);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TrafficMirrorFilterId')) {
          obj['TrafficMirrorFilterId'] = _ApiClient["default"].convertToType(data['TrafficMirrorFilterId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TrafficMirrorFilter;
}();
/**
 * @member {String} Description
 */


TrafficMirrorFilter.prototype['Description'] = undefined;
/**
 * @member {Array.<module:model/TrafficMirrorFilterRule>} EgressFilterRules
 */

TrafficMirrorFilter.prototype['EgressFilterRules'] = undefined;
/**
 * @member {Array.<module:model/TrafficMirrorFilterRule>} IngressFilterRules
 */

TrafficMirrorFilter.prototype['IngressFilterRules'] = undefined;
/**
 * @member {Array.<module:model/TrafficMirrorNetworkService>} NetworkServices
 */

TrafficMirrorFilter.prototype['NetworkServices'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TrafficMirrorFilter.prototype['Tags'] = undefined;
/**
 * @member {String} TrafficMirrorFilterId
 */

TrafficMirrorFilter.prototype['TrafficMirrorFilterId'] = undefined;
var _default = TrafficMirrorFilter;
exports["default"] = _default;