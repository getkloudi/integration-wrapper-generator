"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupIdentifier = _interopRequireDefault(require("./GroupIdentifier"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClassicLinkInstance model module.
 * @module model/ClassicLinkInstance
 * @version 1.0.0
 */
var ClassicLinkInstance =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClassicLinkInstance</code>.
   * Describes a linked EC2-Classic instance.
   * @alias module:model/ClassicLinkInstance
   */
  function ClassicLinkInstance() {
    _classCallCheck(this, ClassicLinkInstance);

    ClassicLinkInstance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClassicLinkInstance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClassicLinkInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassicLinkInstance} obj Optional instance to populate.
     * @return {module:model/ClassicLinkInstance} The populated <code>ClassicLinkInstance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClassicLinkInstance();

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], [_GroupIdentifier["default"]]);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ClassicLinkInstance;
}();
/**
 * @member {Array.<module:model/GroupIdentifier>} Groups
 */


ClassicLinkInstance.prototype['Groups'] = undefined;
/**
 * @member {String} InstanceId
 */

ClassicLinkInstance.prototype['InstanceId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ClassicLinkInstance.prototype['Tags'] = undefined;
/**
 * @member {String} VpcId
 */

ClassicLinkInstance.prototype['VpcId'] = undefined;
var _default = ClassicLinkInstance;
exports["default"] = _default;