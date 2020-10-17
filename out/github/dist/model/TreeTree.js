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
 * The TreeTree model module.
 * @module model/TreeTree
 * @version 1.4.5
 */
var TreeTree = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TreeTree</code>.
   * @alias module:model/TreeTree
   */
  function TreeTree() {
    _classCallCheck(this, TreeTree);

    TreeTree.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TreeTree, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TreeTree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeTree} obj Optional instance to populate.
     * @return {module:model/TreeTree} The populated <code>TreeTree</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeTree();

        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TreeTree;
}();
/**
 * One of 100644 for file (blob), 100755 for executable (blob), 040000 for subdirectory (tree), 160000 for submodule (commit) or 120000 for a blob that specifies the path of a symlink.
 * @member {module:model/TreeTree.ModeEnum} mode
 */


TreeTree.prototype['mode'] = undefined;
/**
 * @member {String} path
 */

TreeTree.prototype['path'] = undefined;
/**
 * SHA1 checksum ID of the object in the tree.
 * @member {String} sha
 */

TreeTree.prototype['sha'] = undefined;
/**
 * @member {Number} size
 */

TreeTree.prototype['size'] = undefined;
/**
 * @member {module:model/TreeTree.TypeEnum} type
 */

TreeTree.prototype['type'] = undefined;
/**
 * @member {String} url
 */

TreeTree.prototype['url'] = undefined;
/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */

TreeTree['ModeEnum'] = {
  /**
   * value: "100644"
   * @const
   */
  "100644": "100644",

  /**
   * value: "100755"
   * @const
   */
  "100755": "100755",

  /**
   * value: "040000"
   * @const
   */
  "040000": "040000",

  /**
   * value: "160000"
   * @const
   */
  "160000": "160000",

  /**
   * value: "120000"
   * @const
   */
  "120000": "120000"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

TreeTree['TypeEnum'] = {
  /**
   * value: "blob"
   * @const
   */
  "blob": "blob",

  /**
   * value: "tree"
   * @const
   */
  "tree": "tree",

  /**
   * value: "commit"
   * @const
   */
  "commit": "commit"
};
var _default = TreeTree;
exports["default"] = _default;