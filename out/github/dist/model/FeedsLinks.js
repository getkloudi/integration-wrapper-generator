"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeedsLinksCurrentUser = _interopRequireDefault(require("./FeedsLinksCurrentUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FeedsLinks model module.
 * @module model/FeedsLinks
 * @version 1.3.0
 */
var FeedsLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FeedsLinks</code>.
   * @alias module:model/FeedsLinks
   */
  function FeedsLinks() {
    _classCallCheck(this, FeedsLinks);

    FeedsLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeedsLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FeedsLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeedsLinks} obj Optional instance to populate.
     * @return {module:model/FeedsLinks} The populated <code>FeedsLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeedsLinks();

        if (data.hasOwnProperty('current_user')) {
          obj['current_user'] = _FeedsLinksCurrentUser["default"].constructFromObject(data['current_user']);
        }

        if (data.hasOwnProperty('current_user_actor')) {
          obj['current_user_actor'] = _FeedsLinksCurrentUser["default"].constructFromObject(data['current_user_actor']);
        }

        if (data.hasOwnProperty('current_user_organization')) {
          obj['current_user_organization'] = _FeedsLinksCurrentUser["default"].constructFromObject(data['current_user_organization']);
        }

        if (data.hasOwnProperty('current_user_public')) {
          obj['current_user_public'] = _FeedsLinksCurrentUser["default"].constructFromObject(data['current_user_public']);
        }

        if (data.hasOwnProperty('timeline')) {
          obj['timeline'] = _FeedsLinksCurrentUser["default"].constructFromObject(data['timeline']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _FeedsLinksCurrentUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return FeedsLinks;
}();
/**
 * @member {module:model/FeedsLinksCurrentUser} current_user
 */


FeedsLinks.prototype['current_user'] = undefined;
/**
 * @member {module:model/FeedsLinksCurrentUser} current_user_actor
 */

FeedsLinks.prototype['current_user_actor'] = undefined;
/**
 * @member {module:model/FeedsLinksCurrentUser} current_user_organization
 */

FeedsLinks.prototype['current_user_organization'] = undefined;
/**
 * @member {module:model/FeedsLinksCurrentUser} current_user_public
 */

FeedsLinks.prototype['current_user_public'] = undefined;
/**
 * @member {module:model/FeedsLinksCurrentUser} timeline
 */

FeedsLinks.prototype['timeline'] = undefined;
/**
 * @member {module:model/FeedsLinksCurrentUser} user
 */

FeedsLinks.prototype['user'] = undefined;
var _default = FeedsLinks;
exports["default"] = _default;