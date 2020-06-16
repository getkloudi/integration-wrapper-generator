"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Watchers model module.
 * @module model/Watchers
 * @version 1.4.0
 */
var Watchers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Watchers</code>.
   * The details of watchers on an issue.
   * @alias module:model/Watchers
   */
  function Watchers() {
    _classCallCheck(this, Watchers);

    Watchers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Watchers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Watchers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Watchers} obj Optional instance to populate.
     * @return {module:model/Watchers} The populated <code>Watchers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Watchers();

        if (data.hasOwnProperty('isWatching')) {
          obj['isWatching'] = _ApiClient["default"].convertToType(data['isWatching'], 'Boolean');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('watchCount')) {
          obj['watchCount'] = _ApiClient["default"].convertToType(data['watchCount'], 'Number');
        }

        if (data.hasOwnProperty('watchers')) {
          obj['watchers'] = _ApiClient["default"].convertToType(data['watchers'], [_UserDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Watchers;
}();
/**
 * Whether the calling user is watching this issue.
 * @member {Boolean} isWatching
 */


Watchers.prototype['isWatching'] = undefined;
/**
 * The URL of these issue watcher details.
 * @member {String} self
 */

Watchers.prototype['self'] = undefined;
/**
 * The number of users watching this issue.
 * @member {Number} watchCount
 */

Watchers.prototype['watchCount'] = undefined;
/**
 * Details of the users watching this issue.
 * @member {Array.<module:model/UserDetails>} watchers
 */

Watchers.prototype['watchers'] = undefined;
var _default = Watchers;
exports["default"] = _default;