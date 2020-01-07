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
 * The LaunchTemplateIamInstanceProfileSpecificationRequest model module.
 * @module model/LaunchTemplateIamInstanceProfileSpecificationRequest
 * @version 1.1.0
 */
var LaunchTemplateIamInstanceProfileSpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateIamInstanceProfileSpecificationRequest</code>.
   * An IAM instance profile.
   * @alias module:model/LaunchTemplateIamInstanceProfileSpecificationRequest
   */
  function LaunchTemplateIamInstanceProfileSpecificationRequest() {
    _classCallCheck(this, LaunchTemplateIamInstanceProfileSpecificationRequest);

    LaunchTemplateIamInstanceProfileSpecificationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateIamInstanceProfileSpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateIamInstanceProfileSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateIamInstanceProfileSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateIamInstanceProfileSpecificationRequest} The populated <code>LaunchTemplateIamInstanceProfileSpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateIamInstanceProfileSpecificationRequest();

        if (data.hasOwnProperty('Arn')) {
          obj['Arn'] = _ApiClient["default"].convertToType(data['Arn'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateIamInstanceProfileSpecificationRequest;
}();
/**
 * @member {String} Arn
 */


LaunchTemplateIamInstanceProfileSpecificationRequest.prototype['Arn'] = undefined;
/**
 * @member {String} Name
 */

LaunchTemplateIamInstanceProfileSpecificationRequest.prototype['Name'] = undefined;
var _default = LaunchTemplateIamInstanceProfileSpecificationRequest;
exports["default"] = _default;