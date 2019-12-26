"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tree = _interopRequireDefault(require("./Tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Trees model module.
 * @module model/Trees
 * @version 1.4.2
 */
var Trees =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Trees</code>.
   * @alias module:model/Trees
   */
  function Trees() {
    _classCallCheck(this, Trees);

    Trees.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Trees, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Trees</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trees} obj Optional instance to populate.
     * @return {module:model/Trees} The populated <code>Trees</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Trees();

        if (data.hasOwnProperty('base_tree')) {
          obj['base_tree'] = _ApiClient["default"].convertToType(data['base_tree'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _ApiClient["default"].convertToType(data['tree'], [_Tree["default"]]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Trees;
}();
/**
 * @member {String} base_tree
 */


Trees.prototype['base_tree'] = undefined;
/**
 * SHA1 checksum ID of the object in the tree.
 * @member {String} sha
 */

Trees.prototype['sha'] = undefined;
/**
 * @member {Array.<module:model/Tree>} tree
 */

Trees.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

Trees.prototype['url'] = undefined;
var _default = Trees;
exports["default"] = _default;