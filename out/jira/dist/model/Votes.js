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
 * The Votes model module.
 * @module model/Votes
 * @version 1.4.0
 */
var Votes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Votes</code>.
   * The details of votes on an issue.
   * @alias module:model/Votes
   */
  function Votes() {
    _classCallCheck(this, Votes);

    Votes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Votes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Votes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Votes} obj Optional instance to populate.
     * @return {module:model/Votes} The populated <code>Votes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Votes();

        if (data.hasOwnProperty('hasVoted')) {
          obj['hasVoted'] = _ApiClient["default"].convertToType(data['hasVoted'], 'Boolean');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('voters')) {
          obj['voters'] = _ApiClient["default"].convertToType(data['voters'], [_User["default"]]);
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Votes;
}();
/**
 * Whether the user making this request has voted on the issue.
 * @member {Boolean} hasVoted
 */


Votes.prototype['hasVoted'] = undefined;
/**
 * The URL of these issue vote details.
 * @member {String} self
 */

Votes.prototype['self'] = undefined;
/**
 * List of the users who have voted on this issue. An empty list is returned when the calling user doesn't have the *View voters and watchers* project permission.
 * @member {Array.<module:model/User>} voters
 */

Votes.prototype['voters'] = undefined;
/**
 * The number of votes on the issue.
 * @member {Number} votes
 */

Votes.prototype['votes'] = undefined;
var _default = Votes;
exports["default"] = _default;