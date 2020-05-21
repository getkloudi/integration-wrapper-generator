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
 * The PullrequestAllOfMergeCommit model module.
 * @module model/PullrequestAllOfMergeCommit
 * @version 1.2.0
 */
var PullrequestAllOfMergeCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullrequestAllOfMergeCommit</code>.
   * @alias module:model/PullrequestAllOfMergeCommit
   */
  function PullrequestAllOfMergeCommit() {
    _classCallCheck(this, PullrequestAllOfMergeCommit);

    PullrequestAllOfMergeCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestAllOfMergeCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullrequestAllOfMergeCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestAllOfMergeCommit} obj Optional instance to populate.
     * @return {module:model/PullrequestAllOfMergeCommit} The populated <code>PullrequestAllOfMergeCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestAllOfMergeCommit();

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullrequestAllOfMergeCommit;
}();
/**
 * @member {String} hash
 */


PullrequestAllOfMergeCommit.prototype['hash'] = undefined;
var _default = PullrequestAllOfMergeCommit;
exports["default"] = _default;