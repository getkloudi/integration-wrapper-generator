"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchCommit = _interopRequireDefault(require("./BranchCommit"));

var _BranchLinks = _interopRequireDefault(require("./BranchLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Branch model module.
 * @module model/Branch
 * @version 1.4.0
 */
var Branch =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Branch</code>.
   * @alias module:model/Branch
   */
  function Branch() {
    _classCallCheck(this, Branch);

    Branch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Branch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Branch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Branch} obj Optional instance to populate.
     * @return {module:model/Branch} The populated <code>Branch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Branch();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _BranchLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _BranchCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Branch;
}();
/**
 * @member {module:model/BranchLinks} _links
 */


Branch.prototype['_links'] = undefined;
/**
 * @member {module:model/BranchCommit} commit
 */

Branch.prototype['commit'] = undefined;
/**
 * @member {String} name
 */

Branch.prototype['name'] = undefined;
var _default = Branch;
exports["default"] = _default;