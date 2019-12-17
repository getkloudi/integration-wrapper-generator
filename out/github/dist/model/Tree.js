"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeTree = _interopRequireDefault(require("./TreeTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Tree model module.
 * @module model/Tree
 * @version 1.3.0
 */
var Tree =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Tree</code>.
   * @alias module:model/Tree
   */
  function Tree() {
    _classCallCheck(this, Tree);

    Tree.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Tree, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Tree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tree} obj Optional instance to populate.
     * @return {module:model/Tree} The populated <code>Tree</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tree();

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _ApiClient["default"].convertToType(data['tree'], [_TreeTree["default"]]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Tree;
}();
/**
 * @member {String} sha
 */


Tree.prototype['sha'] = undefined;
/**
 * @member {Array.<module:model/TreeTree>} tree
 */

Tree.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

Tree.prototype['url'] = undefined;
var _default = Tree;
exports["default"] = _default;