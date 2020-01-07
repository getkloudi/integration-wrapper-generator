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
 * The InstanceSpecification model module.
 * @module model/InstanceSpecification
 * @version 1.1.0
 */
var InstanceSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceSpecification</code>.
   * The instance details to specify which volumes should be snapshotted.
   * @alias module:model/InstanceSpecification
   */
  function InstanceSpecification() {
    _classCallCheck(this, InstanceSpecification);

    InstanceSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceSpecification} obj Optional instance to populate.
     * @return {module:model/InstanceSpecification} The populated <code>InstanceSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceSpecification();

        if (data.hasOwnProperty('ExcludeBootVolume')) {
          obj['ExcludeBootVolume'] = _ApiClient["default"].convertToType(data['ExcludeBootVolume'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstanceSpecification;
}();
/**
 * @member {Boolean} ExcludeBootVolume
 */


InstanceSpecification.prototype['ExcludeBootVolume'] = undefined;
/**
 * @member {String} InstanceId
 */

InstanceSpecification.prototype['InstanceId'] = undefined;
var _default = InstanceSpecification;
exports["default"] = _default;