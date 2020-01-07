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
 * The ReplaceIamInstanceProfileAssociationRequest model module.
 * @module model/ReplaceIamInstanceProfileAssociationRequest
 * @version 1.1.0
 */
var ReplaceIamInstanceProfileAssociationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReplaceIamInstanceProfileAssociationRequest</code>.
   * @alias module:model/ReplaceIamInstanceProfileAssociationRequest
   * @param associationId {String} 
   * @param iamInstanceProfile {module:model/IamInstanceProfileSpecification} 
   */
  function ReplaceIamInstanceProfileAssociationRequest(associationId, iamInstanceProfile) {
    _classCallCheck(this, ReplaceIamInstanceProfileAssociationRequest);

    ReplaceIamInstanceProfileAssociationRequest.initialize(this, associationId, iamInstanceProfile);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReplaceIamInstanceProfileAssociationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, associationId, iamInstanceProfile) {
      obj['AssociationId'] = associationId;
      obj['IamInstanceProfile'] = iamInstanceProfile;
    }
    /**
     * Constructs a <code>ReplaceIamInstanceProfileAssociationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceIamInstanceProfileAssociationRequest} obj Optional instance to populate.
     * @return {module:model/ReplaceIamInstanceProfileAssociationRequest} The populated <code>ReplaceIamInstanceProfileAssociationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReplaceIamInstanceProfileAssociationRequest();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _IamInstanceProfileSpecification["default"].constructFromObject(data['IamInstanceProfile']);
        }
      }

      return obj;
    }
  }]);

  return ReplaceIamInstanceProfileAssociationRequest;
}();
/**
 * @member {String} AssociationId
 */


ReplaceIamInstanceProfileAssociationRequest.prototype['AssociationId'] = undefined;
/**
 * @member {module:model/IamInstanceProfileSpecification} IamInstanceProfile
 */

ReplaceIamInstanceProfileAssociationRequest.prototype['IamInstanceProfile'] = undefined;
var _default = ReplaceIamInstanceProfileAssociationRequest;
exports["default"] = _default;