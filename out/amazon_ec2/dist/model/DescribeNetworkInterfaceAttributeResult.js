"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeBooleanValue = _interopRequireDefault(require("./AttributeBooleanValue"));

var _AttributeValue = _interopRequireDefault(require("./AttributeValue"));

var _GroupIdentifier = _interopRequireDefault(require("./GroupIdentifier"));

var _NetworkInterfaceAttachment = _interopRequireDefault(require("./NetworkInterfaceAttachment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeNetworkInterfaceAttributeResult model module.
 * @module model/DescribeNetworkInterfaceAttributeResult
 * @version 1.1.0
 */
var DescribeNetworkInterfaceAttributeResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeNetworkInterfaceAttributeResult</code>.
   * Contains the output of DescribeNetworkInterfaceAttribute.
   * @alias module:model/DescribeNetworkInterfaceAttributeResult
   */
  function DescribeNetworkInterfaceAttributeResult() {
    _classCallCheck(this, DescribeNetworkInterfaceAttributeResult);

    DescribeNetworkInterfaceAttributeResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeNetworkInterfaceAttributeResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeNetworkInterfaceAttributeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeNetworkInterfaceAttributeResult} obj Optional instance to populate.
     * @return {module:model/DescribeNetworkInterfaceAttributeResult} The populated <code>DescribeNetworkInterfaceAttributeResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeNetworkInterfaceAttributeResult();

        if (data.hasOwnProperty('Attachment')) {
          obj['Attachment'] = _NetworkInterfaceAttachment["default"].constructFromObject(data['Attachment']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _AttributeValue["default"].constructFromObject(data['Description']);
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], [_GroupIdentifier["default"]]);
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('SourceDestCheck')) {
          obj['SourceDestCheck'] = _AttributeBooleanValue["default"].constructFromObject(data['SourceDestCheck']);
        }
      }

      return obj;
    }
  }]);

  return DescribeNetworkInterfaceAttributeResult;
}();
/**
 * @member {module:model/NetworkInterfaceAttachment} Attachment
 */


DescribeNetworkInterfaceAttributeResult.prototype['Attachment'] = undefined;
/**
 * @member {module:model/AttributeValue} Description
 */

DescribeNetworkInterfaceAttributeResult.prototype['Description'] = undefined;
/**
 * @member {Array.<module:model/GroupIdentifier>} Groups
 */

DescribeNetworkInterfaceAttributeResult.prototype['Groups'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

DescribeNetworkInterfaceAttributeResult.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} SourceDestCheck
 */

DescribeNetworkInterfaceAttributeResult.prototype['SourceDestCheck'] = undefined;
var _default = DescribeNetworkInterfaceAttributeResult;
exports["default"] = _default;