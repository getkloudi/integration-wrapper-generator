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
 * The IamInstanceProfile model module.
 * @module model/IamInstanceProfile
 * @version 1.0.0
 */
var IamInstanceProfile =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IamInstanceProfile</code>.
   * Describes an IAM instance profile.
   * @alias module:model/IamInstanceProfile
   */
  function IamInstanceProfile() {
    _classCallCheck(this, IamInstanceProfile);

    IamInstanceProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IamInstanceProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IamInstanceProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IamInstanceProfile} obj Optional instance to populate.
     * @return {module:model/IamInstanceProfile} The populated <code>IamInstanceProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IamInstanceProfile();

        if (data.hasOwnProperty('Arn')) {
          obj['Arn'] = _ApiClient["default"].convertToType(data['Arn'], 'String');
        }

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IamInstanceProfile;
}();
/**
 * @member {String} Arn
 */


IamInstanceProfile.prototype['Arn'] = undefined;
/**
 * @member {String} Id
 */

IamInstanceProfile.prototype['Id'] = undefined;
var _default = IamInstanceProfile;
exports["default"] = _default;