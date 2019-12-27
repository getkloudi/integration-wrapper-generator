"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Author = _interopRequireDefault(require("./Author"));

var _BaseCommit = _interopRequireDefault(require("./BaseCommit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BaseCommitAllOf model module.
 * @module model/BaseCommitAllOf
 * @version 1.1.0
 */
var BaseCommitAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BaseCommitAllOf</code>.
   * The common base type for both repository and snippet commits.
   * @alias module:model/BaseCommitAllOf
   */
  function BaseCommitAllOf() {
    _classCallCheck(this, BaseCommitAllOf);

    BaseCommitAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseCommitAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BaseCommitAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseCommitAllOf} obj Optional instance to populate.
     * @return {module:model/BaseCommitAllOf} The populated <code>BaseCommitAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseCommitAllOf();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _Author["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_BaseCommit["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BaseCommitAllOf;
}();
/**
 * @member {module:model/Author} author
 */


BaseCommitAllOf.prototype['author'] = undefined;
/**
 * @member {Date} date
 */

BaseCommitAllOf.prototype['date'] = undefined;
/**
 * @member {String} hash
 */

BaseCommitAllOf.prototype['hash'] = undefined;
/**
 * @member {String} message
 */

BaseCommitAllOf.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BaseCommit>} parents
 */

BaseCommitAllOf.prototype['parents'] = undefined;
var _default = BaseCommitAllOf;
exports["default"] = _default;