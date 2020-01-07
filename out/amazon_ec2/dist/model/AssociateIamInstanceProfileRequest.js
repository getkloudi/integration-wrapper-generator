"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IamInstanceProfileSpecification = _interopRequireDefault(require("./IamInstanceProfileSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AssociateIamInstanceProfileRequest model module.
 * @module model/AssociateIamInstanceProfileRequest
 * @version 1.1.0
 */
var AssociateIamInstanceProfileRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateIamInstanceProfileRequest</code>.
   * @alias module:model/AssociateIamInstanceProfileRequest
   * @param iamInstanceProfile {module:model/IamInstanceProfileSpecification} 
   * @param instanceId {String} 
   */
  function AssociateIamInstanceProfileRequest(iamInstanceProfile, instanceId) {
    _classCallCheck(this, AssociateIamInstanceProfileRequest);

    AssociateIamInstanceProfileRequest.initialize(this, iamInstanceProfile, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateIamInstanceProfileRequest, null, [{
    key: "initialize",
    value: function initialize(obj, iamInstanceProfile, instanceId) {
      obj['IamInstanceProfile'] = iamInstanceProfile;
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>AssociateIamInstanceProfileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateIamInstanceProfileRequest} obj Optional instance to populate.
     * @return {module:model/AssociateIamInstanceProfileRequest} The populated <code>AssociateIamInstanceProfileRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateIamInstanceProfileRequest();

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _IamInstanceProfileSpecification["default"].constructFromObject(data['IamInstanceProfile']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssociateIamInstanceProfileRequest;
}();
/**
 * @member {module:model/IamInstanceProfileSpecification} IamInstanceProfile
 */


AssociateIamInstanceProfileRequest.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} InstanceId
 */

AssociateIamInstanceProfileRequest.prototype['InstanceId'] = undefined;
var _default = AssociateIamInstanceProfileRequest;
exports["default"] = _default;