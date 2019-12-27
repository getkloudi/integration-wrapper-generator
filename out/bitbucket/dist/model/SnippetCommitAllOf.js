"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Snippet = _interopRequireDefault(require("./Snippet"));

var _SnippetCommitAllOfLinks = _interopRequireDefault(require("./SnippetCommitAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SnippetCommitAllOf model module.
 * @module model/SnippetCommitAllOf
 * @version 1.1.2
 */
var SnippetCommitAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SnippetCommitAllOf</code>.
   * 
   * @alias module:model/SnippetCommitAllOf
   */
  function SnippetCommitAllOf() {
    _classCallCheck(this, SnippetCommitAllOf);

    SnippetCommitAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnippetCommitAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SnippetCommitAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetCommitAllOf} obj Optional instance to populate.
     * @return {module:model/SnippetCommitAllOf} The populated <code>SnippetCommitAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnippetCommitAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _SnippetCommitAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('snippet')) {
          obj['snippet'] = _Snippet["default"].constructFromObject(data['snippet']);
        }
      }

      return obj;
    }
  }]);

  return SnippetCommitAllOf;
}();
/**
 * @member {module:model/SnippetCommitAllOfLinks} links
 */


SnippetCommitAllOf.prototype['links'] = undefined;
/**
 * @member {module:model/Snippet} snippet
 */

SnippetCommitAllOf.prototype['snippet'] = undefined;
var _default = SnippetCommitAllOf;
exports["default"] = _default;