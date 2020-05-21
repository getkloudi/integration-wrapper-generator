"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ParticipantAllOf model module.
 * @module model/ParticipantAllOf
 * @version 1.2.0
 */
var ParticipantAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParticipantAllOf</code>.
   * Object describing a user&#39;s role on resources like commits or pull requests.
   * @alias module:model/ParticipantAllOf
   */
  function ParticipantAllOf() {
    _classCallCheck(this, ParticipantAllOf);

    ParticipantAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ParticipantAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ParticipantAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParticipantAllOf} obj Optional instance to populate.
     * @return {module:model/ParticipantAllOf} The populated <code>ParticipantAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParticipantAllOf();

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('approved')) {
          obj['approved'] = _ApiClient["default"].convertToType(data['approved'], 'Boolean');
        }

        if (data.hasOwnProperty('participated_on')) {
          obj['participated_on'] = _ApiClient["default"].convertToType(data['participated_on'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ParticipantAllOf;
}();
/**
 * @member {module:model/User} user
 */


ParticipantAllOf.prototype['user'] = undefined;
/**
 * @member {module:model/ParticipantAllOf.RoleEnum} role
 */

ParticipantAllOf.prototype['role'] = undefined;
/**
 * @member {Boolean} approved
 */

ParticipantAllOf.prototype['approved'] = undefined;
/**
 * The ISO8601 timestamp of the participant's action. For approvers, this is the time of their approval. For commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they have not commented.
 * @member {Date} participated_on
 */

ParticipantAllOf.prototype['participated_on'] = undefined;
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

ParticipantAllOf['RoleEnum'] = {
  /**
   * value: "PARTICIPANT"
   * @const
   */
  "PARTICIPANT": "PARTICIPANT",

  /**
   * value: "REVIEWER"
   * @const
   */
  "REVIEWER": "REVIEWER"
};
var _default = ParticipantAllOf;
exports["default"] = _default;