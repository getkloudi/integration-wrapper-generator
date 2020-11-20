"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestBaseUser = _interopRequireDefault(require("./PullRequestBaseUser"));

var _Repo = _interopRequireDefault(require("./Repo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestBase model module.
 * @module model/PullRequestBase
 * @version 1.4.6
 */
var PullRequestBase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestBase</code>.
   * @alias module:model/PullRequestBase
   */
  function PullRequestBase() {
    _classCallCheck(this, PullRequestBase);

    PullRequestBase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestBase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullRequestBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestBase} obj Optional instance to populate.
     * @return {module:model/PullRequestBase} The populated <code>PullRequestBase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestBase();

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('repo')) {
          obj['repo'] = _Repo["default"].constructFromObject(data['repo']);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _PullRequestBaseUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return PullRequestBase;
}();
/**
 * @member {String} label
 */


PullRequestBase.prototype['label'] = undefined;
/**
 * @member {String} ref
 */

PullRequestBase.prototype['ref'] = undefined;
/**
 * @member {module:model/Repo} repo
 */

PullRequestBase.prototype['repo'] = undefined;
/**
 * @member {String} sha
 */

PullRequestBase.prototype['sha'] = undefined;
/**
 * @member {module:model/PullRequestBaseUser} user
 */

PullRequestBase.prototype['user'] = undefined;
var _default = PullRequestBase;
exports["default"] = _default;