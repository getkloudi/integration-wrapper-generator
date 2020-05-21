"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _ParticipantAllOf = _interopRequireDefault(require("./ParticipantAllOf"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Participant model module.
 * @module model/Participant
 * @version 1.2.0
 */
var Participant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Participant</code>.
   * @alias module:model/Participant
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/ParticipantAllOf
   * @param type {String} 
   */
  function Participant(type) {
    _classCallCheck(this, Participant);

    _ModelObject["default"].initialize(this, type);

    _ParticipantAllOf["default"].initialize(this);

    Participant.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Participant, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Participant} obj Optional instance to populate.
     * @return {module:model/Participant} The populated <code>Participant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Participant();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _ParticipantAllOf["default"].constructFromObject(data, obj);

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

  return Participant;
}();
/**
 * @member {module:model/User} user
 */


Participant.prototype['user'] = undefined;
/**
 * @member {module:model/Participant.RoleEnum} role
 */

Participant.prototype['role'] = undefined;
/**
 * @member {Boolean} approved
 */

Participant.prototype['approved'] = undefined;
/**
 * The ISO8601 timestamp of the participant's action. For approvers, this is the time of their approval. For commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they have not commented.
 * @member {Date} participated_on
 */

Participant.prototype['participated_on'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement ParticipantAllOf interface:

/**
 * @member {module:model/User} user
 */

_ParticipantAllOf["default"].prototype['user'] = undefined;
/**
 * @member {module:model/ParticipantAllOf.RoleEnum} role
 */

_ParticipantAllOf["default"].prototype['role'] = undefined;
/**
 * @member {Boolean} approved
 */

_ParticipantAllOf["default"].prototype['approved'] = undefined;
/**
 * The ISO8601 timestamp of the participant's action. For approvers, this is the time of their approval. For commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they have not commented.
 * @member {Date} participated_on
 */

_ParticipantAllOf["default"].prototype['participated_on'] = undefined;
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

Participant['RoleEnum'] = {
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
var _default = Participant;
exports["default"] = _default;