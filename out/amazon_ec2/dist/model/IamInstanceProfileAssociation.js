"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IamInstanceProfile = _interopRequireDefault(require("./IamInstanceProfile"));

var _IamInstanceProfileAssociationState = _interopRequireDefault(require("./IamInstanceProfileAssociationState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IamInstanceProfileAssociation model module.
 * @module model/IamInstanceProfileAssociation
 * @version 1.0.0
 */
var IamInstanceProfileAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IamInstanceProfileAssociation</code>.
   * Describes an association between an IAM instance profile and an instance.
   * @alias module:model/IamInstanceProfileAssociation
   */
  function IamInstanceProfileAssociation() {
    _classCallCheck(this, IamInstanceProfileAssociation);

    IamInstanceProfileAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IamInstanceProfileAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IamInstanceProfileAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IamInstanceProfileAssociation} obj Optional instance to populate.
     * @return {module:model/IamInstanceProfileAssociation} The populated <code>IamInstanceProfileAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IamInstanceProfileAssociation();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _IamInstanceProfile["default"].constructFromObject(data['IamInstanceProfile']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _IamInstanceProfileAssociationState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient["default"].convertToType(data['Timestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return IamInstanceProfileAssociation;
}();
/**
 * @member {String} AssociationId
 */


IamInstanceProfileAssociation.prototype['AssociationId'] = undefined;
/**
 * @member {module:model/IamInstanceProfile} IamInstanceProfile
 */

IamInstanceProfileAssociation.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} InstanceId
 */

IamInstanceProfileAssociation.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/IamInstanceProfileAssociationState} State
 */

IamInstanceProfileAssociation.prototype['State'] = undefined;
/**
 * @member {Date} Timestamp
 */

IamInstanceProfileAssociation.prototype['Timestamp'] = undefined;
var _default = IamInstanceProfileAssociation;
exports["default"] = _default;