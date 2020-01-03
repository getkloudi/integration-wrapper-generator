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
 * The LaunchTemplateHibernationOptionsRequest model module.
 * @module model/LaunchTemplateHibernationOptionsRequest
 * @version 1.0.0
 */
var LaunchTemplateHibernationOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateHibernationOptionsRequest</code>.
   * Indicates whether the instance is configured for hibernation. This parameter is valid only if the instance meets the &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites\&quot;&gt;hibernation prerequisites&lt;/a&gt;.
   * @alias module:model/LaunchTemplateHibernationOptionsRequest
   */
  function LaunchTemplateHibernationOptionsRequest() {
    _classCallCheck(this, LaunchTemplateHibernationOptionsRequest);

    LaunchTemplateHibernationOptionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateHibernationOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateHibernationOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateHibernationOptionsRequest} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateHibernationOptionsRequest} The populated <code>LaunchTemplateHibernationOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateHibernationOptionsRequest();

        if (data.hasOwnProperty('Configured')) {
          obj['Configured'] = _ApiClient["default"].convertToType(data['Configured'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateHibernationOptionsRequest;
}();
/**
 * @member {Boolean} Configured
 */


LaunchTemplateHibernationOptionsRequest.prototype['Configured'] = undefined;
var _default = LaunchTemplateHibernationOptionsRequest;
exports["default"] = _default;