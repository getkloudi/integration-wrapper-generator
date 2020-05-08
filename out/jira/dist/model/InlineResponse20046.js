"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20046Voters = _interopRequireDefault(require("./InlineResponse20046Voters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20046 model module.
 * @module model/InlineResponse20046
 * @version 1.0.0
 */
var InlineResponse20046 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20046</code>.
   * 
   * @alias module:model/InlineResponse20046
   * @param hasVoted {Boolean} 
   * @param self {String} 
   * @param voters {Array.<module:model/InlineResponse20046Voters>} 
   * @param votes {Number} 
   */
  function InlineResponse20046(hasVoted, self, voters, votes) {
    _classCallCheck(this, InlineResponse20046);

    InlineResponse20046.initialize(this, hasVoted, self, voters, votes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20046, null, [{
    key: "initialize",
    value: function initialize(obj, hasVoted, self, voters, votes) {
      obj['hasVoted'] = hasVoted;
      obj['self'] = self;
      obj['voters'] = voters;
      obj['votes'] = votes;
    }
    /**
     * Constructs a <code>InlineResponse20046</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20046} obj Optional instance to populate.
     * @return {module:model/InlineResponse20046} The populated <code>InlineResponse20046</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20046();

        if (data.hasOwnProperty('hasVoted')) {
          obj['hasVoted'] = _ApiClient["default"].convertToType(data['hasVoted'], 'Boolean');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('voters')) {
          obj['voters'] = _ApiClient["default"].convertToType(data['voters'], [_InlineResponse20046Voters["default"]]);
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20046;
}();
/**
 * @member {Boolean} hasVoted
 */


InlineResponse20046.prototype['hasVoted'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20046.prototype['self'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20046Voters>} voters
 */

InlineResponse20046.prototype['voters'] = undefined;
/**
 * @member {Number} votes
 */

InlineResponse20046.prototype['votes'] = undefined;
var _default = InlineResponse20046;
exports["default"] = _default;