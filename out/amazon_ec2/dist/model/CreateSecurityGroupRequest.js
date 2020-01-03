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
 * The CreateSecurityGroupRequest model module.
 * @module model/CreateSecurityGroupRequest
 * @version 1.0.0
 */
var CreateSecurityGroupRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateSecurityGroupRequest</code>.
   * @alias module:model/CreateSecurityGroupRequest
   * @param description {String} 
   * @param groupName {String} 
   */
  function CreateSecurityGroupRequest(description, groupName) {
    _classCallCheck(this, CreateSecurityGroupRequest);

    CreateSecurityGroupRequest.initialize(this, description, groupName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateSecurityGroupRequest, null, [{
    key: "initialize",
    value: function initialize(obj, description, groupName) {
      obj['Description'] = description;
      obj['GroupName'] = groupName;
    }
    /**
     * Constructs a <code>CreateSecurityGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSecurityGroupRequest} obj Optional instance to populate.
     * @return {module:model/CreateSecurityGroupRequest} The populated <code>CreateSecurityGroupRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSecurityGroupRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateSecurityGroupRequest;
}();
/**
 * @member {String} Description
 */


CreateSecurityGroupRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateSecurityGroupRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} GroupName
 */

CreateSecurityGroupRequest.prototype['GroupName'] = undefined;
/**
 * @member {String} VpcId
 */

CreateSecurityGroupRequest.prototype['VpcId'] = undefined;
var _default = CreateSecurityGroupRequest;
exports["default"] = _default;