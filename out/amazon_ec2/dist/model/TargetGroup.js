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
 * The TargetGroup model module.
 * @module model/TargetGroup
 * @version 1.1.0
 */
var TargetGroup =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TargetGroup</code>.
   * Describes a load balancer target group.
   * @alias module:model/TargetGroup
   */
  function TargetGroup() {
    _classCallCheck(this, TargetGroup);

    TargetGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TargetGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TargetGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetGroup} obj Optional instance to populate.
     * @return {module:model/TargetGroup} The populated <code>TargetGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TargetGroup();

        if (data.hasOwnProperty('Arn')) {
          obj['Arn'] = _ApiClient["default"].convertToType(data['Arn'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TargetGroup;
}();
/**
 * @member {String} Arn
 */


TargetGroup.prototype['Arn'] = undefined;
var _default = TargetGroup;
exports["default"] = _default;