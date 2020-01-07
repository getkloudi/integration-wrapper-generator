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
 * The DescribeSecurityGroupReferencesRequest model module.
 * @module model/DescribeSecurityGroupReferencesRequest
 * @version 1.1.0
 */
var DescribeSecurityGroupReferencesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSecurityGroupReferencesRequest</code>.
   * @alias module:model/DescribeSecurityGroupReferencesRequest
   * @param groupId {Array.<String>} 
   */
  function DescribeSecurityGroupReferencesRequest(groupId) {
    _classCallCheck(this, DescribeSecurityGroupReferencesRequest);

    DescribeSecurityGroupReferencesRequest.initialize(this, groupId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSecurityGroupReferencesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, groupId) {
      obj['GroupId'] = groupId;
    }
    /**
     * Constructs a <code>DescribeSecurityGroupReferencesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSecurityGroupReferencesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeSecurityGroupReferencesRequest} The populated <code>DescribeSecurityGroupReferencesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSecurityGroupReferencesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupId')) {
          obj['GroupId'] = _ApiClient["default"].convertToType(data['GroupId'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeSecurityGroupReferencesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeSecurityGroupReferencesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} GroupId
 */

DescribeSecurityGroupReferencesRequest.prototype['GroupId'] = undefined;
var _default = DescribeSecurityGroupReferencesRequest;
exports["default"] = _default;