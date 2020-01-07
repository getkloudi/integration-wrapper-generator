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
 * The UserBucketDetails model module.
 * @module model/UserBucketDetails
 * @version 1.1.0
 */
var UserBucketDetails =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UserBucketDetails</code>.
   * Describes the S3 bucket for the disk image.
   * @alias module:model/UserBucketDetails
   */
  function UserBucketDetails() {
    _classCallCheck(this, UserBucketDetails);

    UserBucketDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserBucketDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserBucketDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserBucketDetails} obj Optional instance to populate.
     * @return {module:model/UserBucketDetails} The populated <code>UserBucketDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserBucketDetails();

        if (data.hasOwnProperty('S3Bucket')) {
          obj['S3Bucket'] = _ApiClient["default"].convertToType(data['S3Bucket'], 'String');
        }

        if (data.hasOwnProperty('S3Key')) {
          obj['S3Key'] = _ApiClient["default"].convertToType(data['S3Key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserBucketDetails;
}();
/**
 * @member {String} S3Bucket
 */


UserBucketDetails.prototype['S3Bucket'] = undefined;
/**
 * @member {String} S3Key
 */

UserBucketDetails.prototype['S3Key'] = undefined;
var _default = UserBucketDetails;
exports["default"] = _default;