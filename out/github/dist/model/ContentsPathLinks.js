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
 * The ContentsPathLinks model module.
 * @module model/ContentsPathLinks
 * @version 1.4.3
 */
var ContentsPathLinks =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ContentsPathLinks</code>.
   * @alias module:model/ContentsPathLinks
   */
  function ContentsPathLinks() {
    _classCallCheck(this, ContentsPathLinks);

    ContentsPathLinks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContentsPathLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContentsPathLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentsPathLinks} obj Optional instance to populate.
     * @return {module:model/ContentsPathLinks} The populated <code>ContentsPathLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContentsPathLinks();

        if (data.hasOwnProperty('git')) {
          obj['git'] = _ApiClient["default"].convertToType(data['git'], 'String');
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContentsPathLinks;
}();
/**
 * @member {String} git
 */


ContentsPathLinks.prototype['git'] = undefined;
/**
 * @member {String} html
 */

ContentsPathLinks.prototype['html'] = undefined;
/**
 * @member {String} self
 */

ContentsPathLinks.prototype['self'] = undefined;
var _default = ContentsPathLinks;
exports["default"] = _default;