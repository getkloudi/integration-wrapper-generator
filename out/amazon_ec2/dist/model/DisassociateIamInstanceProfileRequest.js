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
 * The DisassociateIamInstanceProfileRequest model module.
 * @module model/DisassociateIamInstanceProfileRequest
 * @version 1.1.0
 */
var DisassociateIamInstanceProfileRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisassociateIamInstanceProfileRequest</code>.
   * @alias module:model/DisassociateIamInstanceProfileRequest
   * @param associationId {String} 
   */
  function DisassociateIamInstanceProfileRequest(associationId) {
    _classCallCheck(this, DisassociateIamInstanceProfileRequest);

    DisassociateIamInstanceProfileRequest.initialize(this, associationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisassociateIamInstanceProfileRequest, null, [{
    key: "initialize",
    value: function initialize(obj, associationId) {
      obj['AssociationId'] = associationId;
    }
    /**
     * Constructs a <code>DisassociateIamInstanceProfileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisassociateIamInstanceProfileRequest} obj Optional instance to populate.
     * @return {module:model/DisassociateIamInstanceProfileRequest} The populated <code>DisassociateIamInstanceProfileRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisassociateIamInstanceProfileRequest();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DisassociateIamInstanceProfileRequest;
}();
/**
 * @member {String} AssociationId
 */


DisassociateIamInstanceProfileRequest.prototype['AssociationId'] = undefined;
var _default = DisassociateIamInstanceProfileRequest;
exports["default"] = _default;