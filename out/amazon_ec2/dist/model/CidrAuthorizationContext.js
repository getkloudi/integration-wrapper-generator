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
 * The CidrAuthorizationContext model module.
 * @module model/CidrAuthorizationContext
 * @version 1.1.0
 */
var CidrAuthorizationContext =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CidrAuthorizationContext</code>.
   * Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). For more information, see &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip\&quot;&gt;Prepare to Bring Your Address Range to Your AWS Account&lt;/a&gt; in the &lt;i&gt;Amazon Elastic Compute Cloud User Guide&lt;/i&gt;.
   * @alias module:model/CidrAuthorizationContext
   * @param message {String} 
   * @param signature {String} 
   */
  function CidrAuthorizationContext(message, signature) {
    _classCallCheck(this, CidrAuthorizationContext);

    CidrAuthorizationContext.initialize(this, message, signature);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CidrAuthorizationContext, null, [{
    key: "initialize",
    value: function initialize(obj, message, signature) {
      obj['Message'] = message;
      obj['Signature'] = signature;
    }
    /**
     * Constructs a <code>CidrAuthorizationContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CidrAuthorizationContext} obj Optional instance to populate.
     * @return {module:model/CidrAuthorizationContext} The populated <code>CidrAuthorizationContext</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CidrAuthorizationContext();

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }

        if (data.hasOwnProperty('Signature')) {
          obj['Signature'] = _ApiClient["default"].convertToType(data['Signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CidrAuthorizationContext;
}();
/**
 * @member {String} Message
 */


CidrAuthorizationContext.prototype['Message'] = undefined;
/**
 * @member {String} Signature
 */

CidrAuthorizationContext.prototype['Signature'] = undefined;
var _default = CidrAuthorizationContext;
exports["default"] = _default;