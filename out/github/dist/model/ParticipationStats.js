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
 * The ParticipationStats model module.
 * @module model/ParticipationStats
 * @version 1.3.3
 */
var ParticipationStats =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ParticipationStats</code>.
   * @alias module:model/ParticipationStats
   */
  function ParticipationStats() {
    _classCallCheck(this, ParticipationStats);

    ParticipationStats.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ParticipationStats, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ParticipationStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParticipationStats} obj Optional instance to populate.
     * @return {module:model/ParticipationStats} The populated <code>ParticipationStats</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParticipationStats();

        if (data.hasOwnProperty('all')) {
          obj['all'] = _ApiClient["default"].convertToType(data['all'], ['Number']);
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return ParticipationStats;
}();
/**
 * @member {Array.<Number>} all
 */


ParticipationStats.prototype['all'] = undefined;
/**
 * @member {Array.<Number>} owner
 */

ParticipationStats.prototype['owner'] = undefined;
var _default = ParticipationStats;
exports["default"] = _default;