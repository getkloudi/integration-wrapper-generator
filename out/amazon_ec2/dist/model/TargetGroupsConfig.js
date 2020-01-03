"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TargetGroup = _interopRequireDefault(require("./TargetGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TargetGroupsConfig model module.
 * @module model/TargetGroupsConfig
 * @version 1.0.0
 */
var TargetGroupsConfig =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TargetGroupsConfig</code>.
   * Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.
   * @alias module:model/TargetGroupsConfig
   */
  function TargetGroupsConfig() {
    _classCallCheck(this, TargetGroupsConfig);

    TargetGroupsConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TargetGroupsConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TargetGroupsConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetGroupsConfig} obj Optional instance to populate.
     * @return {module:model/TargetGroupsConfig} The populated <code>TargetGroupsConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TargetGroupsConfig();

        if (data.hasOwnProperty('TargetGroups')) {
          obj['TargetGroups'] = _ApiClient["default"].convertToType(data['TargetGroups'], [_TargetGroup["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TargetGroupsConfig;
}();
/**
 * @member {Array.<module:model/TargetGroup>} TargetGroups
 */


TargetGroupsConfig.prototype['TargetGroups'] = undefined;
var _default = TargetGroupsConfig;
exports["default"] = _default;