"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitAllOfLinks = _interopRequireDefault(require("./CommitAllOfLinks"));

var _Participant = _interopRequireDefault(require("./Participant"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitAllOf model module.
 * @module model/CommitAllOf
 * @version 1.0.0
 */
var CommitAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommitAllOf</code>.
   * A repository commit object.
   * @alias module:model/CommitAllOf
   */
  function CommitAllOf() {
    _classCallCheck(this, CommitAllOf);

    CommitAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommitAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitAllOf} obj Optional instance to populate.
     * @return {module:model/CommitAllOf} The populated <code>CommitAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _CommitAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Participant["default"]]);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }
      }

      return obj;
    }
  }]);

  return CommitAllOf;
}();
/**
 * @member {module:model/CommitAllOfLinks} links
 */


CommitAllOf.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/Participant>} participants
 */

CommitAllOf.prototype['participants'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

CommitAllOf.prototype['repository'] = undefined;
var _default = CommitAllOf;
exports["default"] = _default;