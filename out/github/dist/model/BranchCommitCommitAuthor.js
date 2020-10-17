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
 * The BranchCommitCommitAuthor model module.
 * @module model/BranchCommitCommitAuthor
 * @version 1.4.5
 */
var BranchCommitCommitAuthor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchCommitCommitAuthor</code>.
   * @alias module:model/BranchCommitCommitAuthor
   */
  function BranchCommitCommitAuthor() {
    _classCallCheck(this, BranchCommitCommitAuthor);

    BranchCommitCommitAuthor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchCommitCommitAuthor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchCommitCommitAuthor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchCommitCommitAuthor} obj Optional instance to populate.
     * @return {module:model/BranchCommitCommitAuthor} The populated <code>BranchCommitCommitAuthor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchCommitCommitAuthor();

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BranchCommitCommitAuthor;
}();
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} date
 */


BranchCommitCommitAuthor.prototype['date'] = undefined;
/**
 * @member {String} email
 */

BranchCommitCommitAuthor.prototype['email'] = undefined;
/**
 * @member {String} name
 */

BranchCommitCommitAuthor.prototype['name'] = undefined;
var _default = BranchCommitCommitAuthor;
exports["default"] = _default;