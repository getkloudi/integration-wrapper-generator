"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountAllOfLinksAvatar = _interopRequireDefault(require("./AccountAllOfLinksAvatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchrestrictionAllOfLinks model module.
 * @module model/BranchrestrictionAllOfLinks
 * @version 1.0.0
 */
var BranchrestrictionAllOfLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BranchrestrictionAllOfLinks</code>.
   * @alias module:model/BranchrestrictionAllOfLinks
   */
  function BranchrestrictionAllOfLinks() {
    _classCallCheck(this, BranchrestrictionAllOfLinks);

    BranchrestrictionAllOfLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchrestrictionAllOfLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchrestrictionAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchrestrictionAllOfLinks} obj Optional instance to populate.
     * @return {module:model/BranchrestrictionAllOfLinks} The populated <code>BranchrestrictionAllOfLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchrestrictionAllOfLinks();

        if (data.hasOwnProperty('self')) {
          obj['self'] = _AccountAllOfLinksAvatar["default"].constructFromObject(data['self']);
        }
      }

      return obj;
    }
  }]);

  return BranchrestrictionAllOfLinks;
}();
/**
 * @member {module:model/AccountAllOfLinksAvatar} self
 */


BranchrestrictionAllOfLinks.prototype['self'] = undefined;
var _default = BranchrestrictionAllOfLinks;
exports["default"] = _default;