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
 * The BranchCommitCommitTree model module.
 * @module model/BranchCommitCommitTree
 * @version 1.4.6
 */
var BranchCommitCommitTree = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchCommitCommitTree</code>.
   * @alias module:model/BranchCommitCommitTree
   */
  function BranchCommitCommitTree() {
    _classCallCheck(this, BranchCommitCommitTree);

    BranchCommitCommitTree.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchCommitCommitTree, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BranchCommitCommitTree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchCommitCommitTree} obj Optional instance to populate.
     * @return {module:model/BranchCommitCommitTree} The populated <code>BranchCommitCommitTree</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchCommitCommitTree();

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BranchCommitCommitTree;
}();
/**
 * @member {String} sha
 */


BranchCommitCommitTree.prototype['sha'] = undefined;
/**
 * @member {String} url
 */

BranchCommitCommitTree.prototype['url'] = undefined;
var _default = BranchCommitCommitTree;
exports["default"] = _default;